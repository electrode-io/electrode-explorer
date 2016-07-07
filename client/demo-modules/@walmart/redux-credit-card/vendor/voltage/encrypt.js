// Voltage SecureData Web encrypt.js library
// Originally sourced from: https://securedataweb.dev.walmart.com/pie/v1/encryption.js
// Copyright 2012-2013 Voltage Security, Inc.

// Requires PIE variable settings, e.g. vars.js

// NOTE - start PROJECT SPECIFIC ADDITIONS!
// we export needed functions in order to make this file work as intended in a node environment
// The function is hoisted and can therefore be referred up here

exports.ProtectPANandCVV = ProtectPANandCVV;

// end PROJECT SPECIFIC ADDITIONS

var SDW = {}; // SecureDataWeb, for encryption code
SDW.base10 = "0123456789";
SDW.base62 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

// compute luhn mod 10 checksum of a string of digits
SDW.luhn = function(s) {
  var n = s.length - 1;
  var r = 0;
  while(n >= 0) {
    r += parseInt(s.substr(n, 1), 10);
    n -= 2;
  }
  n = s.length - 2;
  while(n >= 0) {
    var d = 2 * parseInt(s.substr(n, 1), 10);
    if(d < 10) {
      r += d;
    }
    else {
      r += d - 9;
    }
    n -= 2;
  }
  return r % 10;
}
// Set the Luhn checksum of P to D by altering the digit at position N (must be 0)
SDW.fixluhn = function(P,N,D) {
  var m = SDW.luhn(P);
  if(m < D) m += 10 - D; else m -= D;
  if(m != 0) {
    if((P.length - N) % 2 != 0) {
      // missing digit not doubled
      m = 10 - m;
    }
    else if(m % 2 == 0) {
      m = 5 - (m / 2);
    }
    else {
      m = (9 - m) / 2 + 5;
    }
    return P.substr(0, N) + m + P.substr(N + 1);
  }
  else {
    return P;
  }
}

// Return only the digits in s
SDW.distill = function(s) {
  var r = "";
  for(var i = 0; i < s.length; ++i) {
    if(SDW.base10.indexOf(s.charAt(i)) >= 0) {
      r += s.substr(i, 1);
    }
  }
  return r;
}

// Reinsert non-space characters from template t back into s
SDW.reformat = function(s,t) {
  var r = "";
  var j = 0;
  for(var i = 0; i < t.length; ++i) {
    if(j < s.length && SDW.base10.indexOf(t.charAt(i)) >= 0) {
      r += s.substr(j, 1);
      ++j;
    }
    else {
      r += t.substr(i, 1);
    }
  }
  return r;
}

// Calculate integrity value as 16 hex digits
// Input formatting for CMAC same as for TEP3 integrity
SDW.integrity = function(K,s1,s2) {
  var input =
    String.fromCharCode(0) +
    String.fromCharCode(s1.length) +
    s1 +
    String.fromCharCode(0) +
    String.fromCharCode(s2.length) +
    s2;
  var keywords = AES.HexToWords(K);
  // Generate variant key for integrity check
  keywords[3] ^= 1;
  var aes = new sjcl.cipher.aes(keywords);
  var mac = CMAC.compute(aes, input);
  return AES.WordToHex(mac[0]) + AES.WordToHex(mac[1]);
}

// Public Merchant API: ProtectPANandCVV, ProtectString, and ValidatePANChecksum

// Inputs: pan and cvv,
//         ext: if true, use external, otherwise embedded
// Output: array[3], [0] is encrypted PAN, [1] is encrypted CVV, [2] is integrity value
function ProtectPANandCVV(pan,cvv,ext) {
  var P = SDW.distill(pan);
  var C = SDW.distill(cvv);
  if(P.length < 13 || P.length > 19 || C.length > 4 || C.length == 1 || C.length == 2) {
    return null;
  }
  var T = P.substr(0, PIE.L) + P.substring(P.length - PIE.E);
  if(ext == true) {
    var H = SDW.luhn(P);
    var R = P.substring(PIE.L + 1, P.length - PIE.E);
    var U = FFX.encrypt(R + C, T, PIE.K, 10);
    var Y = P.substr(0, PIE.L) + "0" + U.substr(0, U.length - C.length) + P.substring(P.length - PIE.E);
    var pan_ret = SDW.reformat(SDW.fixluhn(Y,PIE.L,H),pan);
    var cvv_ret = SDW.reformat(U.substring(U.length - C.length),cvv);
    return [pan_ret, cvv_ret, SDW.integrity(PIE.K, pan_ret, cvv_ret)];
  }
  if(SDW.luhn(P) != 0) {
    return null;
  }
  var R = P.substring(PIE.L + 1, P.length - PIE.E);
  var m = 23 - PIE.L - PIE.E;
  var S = R + C;
  var n = Math.floor((m * Math.log(62) - 34 * Math.log(2))/Math.log(10)) - S.length - 1;
  var pad = "11111111111111111111111111111".substr(0,n) + (2 * C.length);
  var U = "1" + FFX.encrypt(pad + S, T, PIE.K, 10);
  var V = parseInt(PIE.key_id, 16);
  var dec_array = new Array(U.length);
  var i;
  for(i = 0; i < U.length; ++i) {
    dec_array[i] = parseInt(U.substr(i, 1), 10);
  }
  var W = FFX.convertRadix(dec_array, U.length, 10, m, 62);
  // W *= 2^33, in two parts
  FFX.bnMultiply(W, 62, 131072);
  FFX.bnMultiply(W, 62, 65536);
  FFX.bnAdd(W, 62, V);
  if(PIE.phase == 1) {
    // W += 2^32
    FFX.bnAdd(W, 62, 4294967296);
  }

  var X = "";
  for(i = 0; i < m; ++i) {
    X = X + SDW.base62.substr(W[i], 1);
  }
  var pan_ret = P.substr(0, PIE.L) + X.substr(0, m-4) + P.substring(P.length - PIE.E);
  var cvv_ret = X.substring(m-4);
  return [pan_ret, cvv_ret, SDW.integrity(PIE.K, pan_ret, cvv_ret)];
}

// Returns true iff P is a valid PAN input to ProtectPANandCVV
function ValidatePANChecksum(pan) {
  var P = SDW.distill(pan);
  return (P.length >= 13 && P.length <= 19 && SDW.luhn(P) == 0);
}

// Inputs: str and tweak
// Output: array[1], [0] is encrypted value, or null if an error occurred
function ProtectString(str,tweak) {
  // length must be [2..256]
  var P = UTF8.encode(str);
  if(P.length < 2 || P.length > 256)
    return null;
  var T;
  if(tweak == null) {
    T = "";
  }
  else {
    T = UTF8.encode(tweak);
    if(T.length > 256)
      return null;
  }

  // Generate variant key for ProtectString
  var keywords = AES.HexToWords(PIE.K);
  keywords[3] ^= 2;
  var aes = new sjcl.cipher.aes(keywords);
  var U = FFX.encryptWithCipher(P, T, aes, 256);
  var R = Base64.encode(U);
  return [R];
}
/** @fileOverview Javascript cryptography implementation.
 *
 * Crush to remove comments, shorten variable names and
 * generally reduce transmission size.
 *
 * @author Emily Stark
 * @author Mike Hamburg
 * @author Dan Boneh
 */

"use strict";
/*jslint indent: 2, bitwise: false, nomen: false, plusplus: false, white: false, regexp: false */
/*global document, window, escape, unescape */

/** @namespace The Stanford Javascript Crypto Library, top-level namespace. */
var sjcl = {
  /** @namespace Symmetric ciphers. */
  cipher: {},

  /** @namespace Hash functions.  Right now only SHA256 is implemented. */
  hash: {},

  /** @namespace Block cipher modes of operation. */
  mode: {},

  /** @namespace Miscellaneous.  HMAC and PBKDF2. */
  misc: {},

  /**
   * @namespace Bit array encoders and decoders.
   *
   * @description
   * The members of this namespace are functions which translate between
   * SJCL's bitArrays and other objects (usually strings).  Because it
   * isn't always clear which direction is encoding and which is decoding,
   * the method names are "fromBits" and "toBits".
   */
  codec: {},

  /** @namespace Exceptions. */
  exception: {
    /** @class Ciphertext is corrupt. */
    corrupt: function(message) {
      this.toString = function() { return "CORRUPT: "+this.message; };
      this.message = message;
    },

    /** @class Invalid parameter. */
    invalid: function(message) {
      this.toString = function() { return "INVALID: "+this.message; };
      this.message = message;
    },

    /** @class Bug or missing feature in SJCL. */
    bug: function(message) {
      this.toString = function() { return "BUG: "+this.message; };
      this.message = message;
    }
  }
};
/** @fileOverview Low-level AES implementation.
 *
 * This file contains a low-level implementation of AES, optimized for
 * size and for efficiency on several browsers.  It is based on
 * OpenSSL's aes_core.c, a public-domain implementation by Vincent
 * Rijmen, Antoon Bosselaers and Paulo Barreto.
 *
 * An older version of this implementation is available in the public
 * domain, but this one is (c) Emily Stark, Mike Hamburg, Dan Boneh,
 * Stanford University 2008-2010 and BSD-licensed for liability
 * reasons.
 *
 * @author Emily Stark
 * @author Mike Hamburg
 * @author Dan Boneh
 */

/**
 * Schedule out an AES key for both encryption and decryption.  This
 * is a low-level class.  Use a cipher mode to do bulk encryption.
 *
 * @constructor
 * @param {Array} key The key as an array of 4, 6 or 8 words.
 *
 * @class Advanced Encryption Standard (low-level interface)
 */
sjcl.cipher.aes = function (key) {
  if (!this._tables[0][0][0]) {
    this._precompute();
  }

  var i, j, tmp,
    encKey, decKey,
    sbox = this._tables[0][4], decTable = this._tables[1],
    keyLen = key.length, rcon = 1;

  if (keyLen !== 4 && keyLen !== 6 && keyLen !== 8) {
    throw new sjcl.exception.invalid("invalid aes key size");
  }

  this._key = [encKey = key.slice(0), decKey = []];

  // schedule encryption keys
  for (i = keyLen; i < 4 * keyLen + 28; i++) {
    tmp = encKey[i-1];

    // apply sbox
    if (i%keyLen === 0 || (keyLen === 8 && i%keyLen === 4)) {
      tmp = sbox[tmp>>>24]<<24 ^ sbox[tmp>>16&255]<<16 ^ sbox[tmp>>8&255]<<8 ^ sbox[tmp&255];

      // shift rows and add rcon
      if (i%keyLen === 0) {
        tmp = tmp<<8 ^ tmp>>>24 ^ rcon<<24;
        rcon = rcon<<1 ^ (rcon>>7)*283;
      }
    }

    encKey[i] = encKey[i-keyLen] ^ tmp;
  }

  // schedule decryption keys
  for (j = 0; i; j++, i--) {
    tmp = encKey[j&3 ? i : i - 4];
    if (i<=4 || j<4) {
      decKey[j] = tmp;
    } else {
      decKey[j] = decTable[0][sbox[tmp>>>24      ]] ^
                  decTable[1][sbox[tmp>>16  & 255]] ^
                  decTable[2][sbox[tmp>>8   & 255]] ^
                  decTable[3][sbox[tmp      & 255]];
    }
  }
};

sjcl.cipher.aes.prototype = {
  // public
  /* Something like this might appear here eventually
  name: "AES",
  blockSize: 4,
  keySizes: [4,6,8],
  */

  /**
   * Encrypt an array of 4 big-endian words.
   * @param {Array} data The plaintext.
   * @return {Array} The ciphertext.
   */
  encrypt:function (data) { return this._crypt(data,0); },

  /**
   * Decrypt an array of 4 big-endian words.
   * @param {Array} data The ciphertext.
   * @return {Array} The plaintext.
   */
  decrypt:function (data) { return this._crypt(data,1); },

  /**
   * The expanded S-box and inverse S-box tables.  These will be computed
   * on the client so that we don't have to send them down the wire.
   *
   * There are two tables, _tables[0] is for encryption and
   * _tables[1] is for decryption.
   *
   * The first 4 sub-tables are the expanded S-box with MixColumns.  The
   * last (_tables[01][4]) is the S-box itself.
   *
   * @private
   */
  _tables: [[[],[],[],[],[]],[[],[],[],[],[]]],

  /**
   * Expand the S-box tables.
   *
   * @private
   */
  _precompute: function () {
   var encTable = this._tables[0], decTable = this._tables[1],
       sbox = encTable[4], sboxInv = decTable[4],
       i, x, xInv, d=[], th=[], x2, x4, x8, s, tEnc, tDec;

    // Compute double and third tables
   for (i = 0; i < 256; i++) {
     th[( d[i] = i<<1 ^ (i>>7)*283 )^i]=i;
   }

   for (x = xInv = 0; !sbox[x]; x ^= (x2==0)?1:x2, xInv = (th[xInv]==0)?1:th[xInv]) {
     // Compute sbox
     s = xInv ^ xInv<<1 ^ xInv<<2 ^ xInv<<3 ^ xInv<<4;
     s = s>>8 ^ s&255 ^ 99;
     sbox[x] = s;
     sboxInv[s] = x;

     // Compute MixColumns
     x8 = d[x4 = d[x2 = d[x]]];
     tDec = x8*0x1010101 ^ x4*0x10001 ^ x2*0x101 ^ x*0x1010100;
     tEnc = d[s]*0x101 ^ s*0x1010100;

     for (i = 0; i < 4; i++) {
       encTable[i][x] = tEnc = tEnc<<24 ^ tEnc>>>8;
       decTable[i][s] = tDec = tDec<<24 ^ tDec>>>8;
     }
   }

   // Compactify.  Considerable speedup on Firefox.
   for (i = 0; i < 5; i++) {
     encTable[i] = encTable[i].slice(0);
     decTable[i] = decTable[i].slice(0);
   }
  },

  /**
   * Encryption and decryption core.
   * @param {Array} input Four words to be encrypted or decrypted.
   * @param dir The direction, 0 for encrypt and 1 for decrypt.
   * @return {Array} The four encrypted or decrypted words.
   * @private
   */
  _crypt:function (input, dir) {
    if (input.length !== 4) {
      throw new sjcl.exception.invalid("invalid aes block size");
    }

    var key = this._key[dir],
        // state variables a,b,c,d are loaded with pre-whitened data
        a = input[0]           ^ key[0],
        b = input[dir ? 3 : 1] ^ key[1],
        c = input[2]           ^ key[2],
        d = input[dir ? 1 : 3] ^ key[3],
        a2, b2, c2,

        nInnerRounds = key.length/4 - 2,
        i,
        kIndex = 4,
        out = [0,0,0,0],
        table = this._tables[dir],

        // load up the tables
        t0    = table[0],
        t1    = table[1],
        t2    = table[2],
        t3    = table[3],
        sbox  = table[4];

    // Inner rounds.  Cribbed from OpenSSL.
    for (i = 0; i < nInnerRounds; i++) {
      a2 = t0[a>>>24] ^ t1[b>>16 & 255] ^ t2[c>>8 & 255] ^ t3[d & 255] ^ key[kIndex];
      b2 = t0[b>>>24] ^ t1[c>>16 & 255] ^ t2[d>>8 & 255] ^ t3[a & 255] ^ key[kIndex + 1];
      c2 = t0[c>>>24] ^ t1[d>>16 & 255] ^ t2[a>>8 & 255] ^ t3[b & 255] ^ key[kIndex + 2];
      d  = t0[d>>>24] ^ t1[a>>16 & 255] ^ t2[b>>8 & 255] ^ t3[c & 255] ^ key[kIndex + 3];
      kIndex += 4;
      a=a2; b=b2; c=c2;
    }

    // Last round.
    for (i = 0; i < 4; i++) {
      out[dir ? 3&-i : i] =
        sbox[a>>>24      ]<<24 ^
        sbox[b>>16  & 255]<<16 ^
        sbox[c>>8   & 255]<<8  ^
        sbox[d      & 255]     ^
        key[kIndex++];
      a2=a; a=b; b=c; c=d; d=a2;
    }

    return out;
  }
};

// Copyright 2012-2013 Voltage Security, Inc.

var AES = {};

// given a hex string, produce the corresponding AES keyschedule
//
AES.HexToKey = function(keystring)
{
  return new sjcl.cipher.aes(AES.HexToWords(keystring));
}

AES.HexToWords = function(keystring)
{
  var nWords = 4;     // AES key length in 32-bit words
  var pwWords = new Array(nWords);
  if (keystring.length != nWords*8) {
    return null;
  }

  for (var i=0; i<nWords; i++) {
    pwWords[i] = parseInt(keystring.substr(i*8, 8), 16);
  }
  return pwWords;
}

AES.Hex = "0123456789abcdef";

// Convert a single 'word' (32-bit int) to a hex string
AES.WordToHex = function(w)
{
  var sh = 32;
  var ret = "";
  while(sh > 0) {
    sh -= 4;
    ret += AES.Hex.substr((w >>> sh) & 15, 1);
  }
  return ret;
}
var Base64 = {

// URL-safe base64 encoding
_chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",

encode: function(s) {
  var i = 0;
  var r = "";
  var c, c2;
  while(i < s.length) {
    c = s.charCodeAt(i) & 255;
    r += Base64._chars.charAt(c >> 2);
    c2 = (c & 3) << 4;
    if(++i < s.length) {
      c = s.charCodeAt(i) & 255;
      c2 |= c >> 4;
    }
    r += Base64._chars.charAt(c2);
    if(i >= s.length)
      break;
    c2 = (c & 15) << 2;
    if(++i < s.length) {
      c = s.charCodeAt(i) & 255;
      c2 |= c >> 6;
    }
    r += Base64._chars.charAt(c2);
    if(i >= s.length)
      break;
    r += Base64._chars.charAt(c & 63);
    ++i;
  }
  return r;
}

};
var UTF8 = {

// UTF-8 encoder: encode input string "s" as UTF-8
// Output: a string where each character is in [0..255]
encode: function(s) {
  var r = "";
  var i = 0;
  while(i < s.length) {
    var c = s.charCodeAt(i);
    if(c < 128) {
      r += String.fromCharCode(c);
    }
    else if(c >= 2048) {
      r += String.fromCharCode((c >> 12) | 224) +
           String.fromCharCode(((c >> 6) & 63) | 128) +
           String.fromCharCode((c & 63) | 128);
    }
    else {
      r += String.fromCharCode((c >> 6) | 192) +
           String.fromCharCode((c & 63) | 128);
    }
    ++i;
  }
  return r;
}

};
// Copyright 2012-2013 Voltage Security, Inc.

var CMAC = {};

CMAC.MSBnotZero = function(x) {
  if((x | 0x7fffffff) == 0x7fffffff)
    return false;
  else
    return true;
}

CMAC.leftShift = function(a) {
  a[0] = ((a[0] & 0x7fffffff) << 1) | (a[1] >>> 31);
  a[1] = ((a[1] & 0x7fffffff) << 1) | (a[2] >>> 31);
  a[2] = ((a[2] & 0x7fffffff) << 1) | (a[3] >>> 31);
  a[3] = ((a[3] & 0x7fffffff) << 1);
}

CMAC.const_Rb = 0x87;

// Generic CMAC function, assumes 'cipher' is a keyed cipher object
// that accepts and returns a 4-int array for a 128-bit blocksize.
// Returns result as a 4-int array.
CMAC.compute = function(cipher,input) {
  var X = [0, 0, 0, 0];
  var K = cipher.encrypt(X);
  var K0 = K[0];
  CMAC.leftShift(K);
  if(CMAC.MSBnotZero(K0)) {
    K[3] ^= CMAC.const_Rb;
  }
  // K == K1 now

  // AES-CBC, except for last block
  var i = 0;
  while(i < input.length) {
    X[(i >> 2) & 3] ^= (input.charCodeAt(i) & 255) << (8*(3-(i&3)));
    ++i;
    if((i & 15) == 0 && i < input.length) {
      X = cipher.encrypt(X);
    }
  }

  // K2 path if 0 length or not even multiple of block size
  if(i == 0 || (i & 15) != 0) {
    // compute K2
    K0 = K[0];
    CMAC.leftShift(K);
    if(CMAC.MSBnotZero(K0)) {
      K[3] ^= CMAC.const_Rb;
    }
    // padding
    X[(i >> 2) & 3] ^= 0x80 << (8*(3-(i&3)));
  }
  X[0] ^= K[0];
  X[1] ^= K[1];
  X[2] ^= K[2];
  X[3] ^= K[3];

  return cipher.encrypt(X);
};

// Compute CMAC-AES-128 using the given key over the given input.
// 'key' is a 32 character hex string (128-bits).
// Assumes 'input' is a 'byte' string, one char == one byte
function CMAC_AES128(key,input) {
  return CMAC.compute(AES.HexToKey(key), input);
}
var FFX = {};

FFX.alphabet = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// FFX.precompF
//
//  Precompute the fixed first block of the F function.  This part of the F function is constant across rounds,
//  and precomputing it will save one AES invocation per round.
//
FFX.precompF = function(cipher, n, tweak, radix)
{
  var blockSize = 4;
  var P = new Array(blockSize);
  var t = tweak.length;
  var rounds = 10;

  // version, method = alternating Feistel, method = blockwise addition
  P[0] = 0x01020100 | ((radix >> 16) & 255);
  P[1] = (((radix >> 8) & 255) << 24) | ((radix & 255) << 16) |
          (rounds << 8) | (Math.floor(n / 2) & 255);
  P[2] = n;
  P[3] = t;

  return cipher.encrypt(P);
}

// FFX.precompb
//
// Compute the number of bytes required to hold the binary representation of a cipher half
//
FFX.precompb = function(radix, n)
{
  var beta = Math.ceil(n / 2);
  var b = 0;
  var f = 1.0;
  while(beta > 0) {
    f = f * radix;
    --beta;
    if(f >= 256.0) {
      f = f / 256.0;
      ++b;
    }
  }
  if(f > 1.0)
    ++b;

  return b;
}

// Treat "a" as a radix-r MSB bignum, and multiply-in-place by "n"
FFX.bnMultiply = function(a,r,n) {
  var i;
  var carry = 0;
  for(i = a.length-1; i >= 0; --i) {
    var digit = a[i] * n + carry;
    a[i] = digit % r;
    carry = (digit - a[i]) / r;
  }
}

// Treat "a" as a radix-r MSB bignum, and add-in-place by "n"
FFX.bnAdd = function(a,r,n) {
  var i = a.length-1;
  var carry = n;
  while(i >= 0 && carry > 0) {
    var digit = a[i] + carry;
    a[i] = digit % r;
    carry = (digit - a[i]) / r;
    --i;
  }
}

// Convert 'inp' from radix 'in_radix' to radix 'out_radix'
// Both input and output are most-significant digit first.
// The lowest 'out_len' digits are returned in case of overflow.
FFX.convertRadix = function(inp, in_len, in_radix, out_len, out_radix)
{
  // Multiword multiply-and-add radix conversion
  var outstr = new Array(out_len);
  var i;
  for(i=0; i<out_len; ++i) {
    outstr[i] = 0;
  }

  for(var j=0; j<in_len; ++j) {
    // outstr = outstr * in_radix
    FFX.bnMultiply(outstr, out_radix, in_radix);
    // carry > 0 is okay, we just "lose" the top digits

    // outstr = outstr + inp[j]
    FFX.bnAdd(outstr, out_radix, inp[j]);
  }

  return outstr;
}

// Complete computation of AES-CBC-MAC of (P || Q)
// using the given cipher, presuming that IV = AES_K(P)
FFX.cbcmacq = function(IV, Q, len, cipher)
{
  var blockSize = 4;
  var B = new Array(blockSize);

  for(var i=0;i<blockSize;++i) {
    B[i] = IV[i];
  }

  var offset = 0;
  while(4 * offset < len) {
    for(var i=0;i<blockSize;++i) {
      B[i] = B[i] ^ ((Q[4*(offset + i)] << 24) |
         (Q[4*(offset + i) + 1] << 16) |
         (Q[4*(offset + i) + 2] << 8) |
          Q[4*(offset + i) + 3]);
    }
    B = cipher.encrypt(B);
    offset = offset + blockSize;
  }

  return B;
}

// FFX.F
//
// Compute the per-round F function for the FFX cipher
//
FFX.F = function(cipher, round, tweak, half, halflen, otherHalfLen, IV, radix, b)
{
  var blockSize = 16;
  var d = Math.ceil(b / 4) + 1;
  var fill = (tweak.length + b + 1) & 15;
  if(fill > 0) fill = 16 - fill;

  var Q = new Array(tweak.length + fill + b + 1);

  var i;
  for(i=0;i<tweak.length;i++) {
    Q[i] = tweak.charCodeAt(i);
  }

  for(;i<fill+tweak.length;i++) {
    Q[i] = 0;
  }

  Q[Q.length-b-1] = round;

  var numhalf = FFX.convertRadix(half, halflen, radix, b, 256);

  for(var j=0;j<b;j++) {
    Q[Q.length-b+j] = numhalf[j];
  }

  var Y = FFX.cbcmacq(IV, Q, Q.length, cipher);
  var Fval = Y;
  var mask;

  var Fshort = new Array(2*d);
  for(i = 0; i < d; ++i) {
    if(i > 0 && (i & 3) == 0) {
      // AES_K extension of Y
      mask = (i >> 2) & 255;
      mask |= (mask << 8) | (mask << 16) | (mask << 24);
      Fval = cipher.encrypt([Y[0]^mask, Y[1]^mask, Y[2]^mask, Y[3]^mask]);
    }
    Fshort[2*i] = Fval[i & 3] >>> 16;
    Fshort[2*i+1] = Fval[i & 3] & 65535;
  }
  return FFX.convertRadix(Fshort, 2*d, 65536, otherHalfLen, radix);
}

// given a string, convert it to an array of values in the range 0...radix
//
FFX.DigitToVal = function(string, len, radix)
{
  var valstr = new Array(len);

  // Special case for binary mode
  if(radix == 256) {
    for(var j=0;j<len;j++) {
      valstr[j] = string.charCodeAt(j);
    }
    return valstr;
  }

  for(var i=0;i<len;i++) {
    var digit = parseInt(string.charAt(i), radix);
    if ((digit == NaN) || !(digit < radix)) {
      return '';
    }
    valstr[i] = digit;
  }

  return valstr;
}

// Inverse of DigitToVal
FFX.ValToDigit = function(valstr, radix)
{
  var out = '';
  var i;
  if(radix == 256) {
    for(i=0;i<valstr.length;i++)
      out += String.fromCharCode(valstr[i]);
  }
  else {
    for(i=0;i<valstr.length;i++)
      out += FFX.alphabet[valstr[i]];
  }
  return out;
}

FFX.encryptWithCipher = function(plaintext, tweak, cipher, radix)
{
  var n = plaintext.length;
  var l = Math.floor(n / 2);
  var r = 5;

  var IV = FFX.precompF(cipher, n, tweak, radix);
  var b = FFX.precompb(radix, n);

  var A = FFX.DigitToVal(plaintext, l, radix);
  var B = FFX.DigitToVal(plaintext.substr(l), (n-l), radix);

  if ((A == '') || (B == '')) {
    return '';
  }

  for(var i=0;i<r;i++) {
    var carry;
    // do the even round
    var F = FFX.F(cipher, i*2, tweak, B, B.length, A.length, IV, radix, b);
    carry = 0;
    for(var j=A.length-1;j>=0;--j) {
      var sum = A[j] + F[j] + carry;
      if(sum < radix) {
  A[j] = sum;
  carry = 0;
      }
      else {
  A[j] = sum - radix;
  carry = 1;
      }
    }

    // do the odd round
    var F = FFX.F(cipher, (i*2)+1, tweak, A, A.length, B.length, IV, radix, b);
    carry = 0;
    for(var j=B.length-1;j>=0;--j) {
      var sum = B[j] + F[j] + carry;
      if(sum < radix) {
  B[j] = sum;
  carry = 0;
      }
      else {
  B[j] = sum - radix;
  carry = 1;
      }
    }
  }

  return FFX.ValToDigit(A,radix)+FFX.ValToDigit(B,radix);
}

FFX.encrypt = function(plaintext, tweak, password, radix)
{
  var cipher = AES.HexToKey(password);
  if (cipher == null) {
    return '';
  }

  return FFX.encryptWithCipher(plaintext, tweak, cipher, radix);
}

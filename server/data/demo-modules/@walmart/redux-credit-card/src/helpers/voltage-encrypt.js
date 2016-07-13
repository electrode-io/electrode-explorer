import {ProtectPANandCVV as protectPANandCVV} from "../../vendor/voltage/encrypt";
import load from "little-loader";
import config from "../config";

const MAX_VOLTAGE_RETRY = 3;

const loadVoltageKey = function (retries) {
  return new Promise((resolve, reject) => {
    const win = config.getWindow();
    const onError = () => {
      if (retries > 0) {
        resolve(loadVoltageKey(--retries));
      } else {
        reject();
      }
    };

    load(config.getVoltageKeyUrl() + "?bust=" + new Date().getTime(),
      (err) => {
        if (!err && win.PIE && win.PIE.key_id) {
          resolve({key: win.PIE.key_id.toString(), phase: win.PIE.phase.toString()});
        } else {
          onError();
        }
      });
  });
};

export const voltageEncrypt = function (number, cvv) {
  return loadVoltageKey(MAX_VOLTAGE_RETRY).then(({key, phase}) => {
    const encryptionResult = protectPANandCVV(number, cvv, true);
    if (encryptionResult && encryptionResult.length) {
      return {
        encryptedPan: encryptionResult[0],
        encryptedCvv: encryptionResult[1],
        integrityCheck: encryptionResult[2],
        keyId: key,
        phase
      };
    } else {
      throw new Error();
    }
  }).catch(() => ({
    encryptedPan: number,
    encryptedCvv: cvv,
    isVoltageEncrypted: false
  }));
};

/* eslint-disable max-len */
import Validators from "src/validators";

describe("Validators Check", () => {
  describe("addresses", () => {
    it("should not match invalid address1", () => {
      expect(Validators.address1.validate("")).to.be.false; // required
      expect(Validators.address1.validate("AAAAAAAAAA 123456789 AAAAAAAAA 123456789 BBBBBBBBB1")).to.be.false;
    });

    it("should validate valid address1", () => {
      expect(Validators.address1.validate("AAAAAAAAAA 123456789 AAAAAAAAA 123456789 BBBBBBBBB")).to.be.true;
    });

    it("should not match invalid address2", () => {
      expect(Validators.address2.validate("AAAAAAAAAA 123456789 AAAAAAAAA 123456789 BBBBBBBBB1")).to.be.false;
    });

    it("should match valid address2", () => {
      expect(Validators.address2.validate("")).to.be.true; // not required
      expect(Validators.address2.validate("AAAAAAAAAA 123456789 AAAAAAAAA 123456789 BBBBBBBBB")).to.be.true;
    });
  });

  describe("postalcode", () => {
    it("should not match invalid postalcode", () => {
      expect(Validators.postalcode.validate("")).to.be.false; // required
      expect(Validators.postalcode.validate("999")).to.be.false;
      expect(Validators.postalcode.validate("99999-123")).to.be.false;
    });

    it("should match valid postalcode", () => {
      expect(Validators.postalcode.validate("99999")).to.be.true;
      expect(Validators.postalcode.validate("99999-1234")).to.be.true;
    });
  });

  describe("ukpostalcode", () => {
    it("should not match invalid ukpostalcode", () => {
      expect(Validators.ukpostalcode.validate("")).to.be.false; // required
      expect(Validators.ukpostalcode.validate("EC1A 1B")).to.be.false;
      expect(Validators.ukpostalcode.validate("1A 0AX")).to.be.false;
      expect(Validators.ukpostalcode.validate("M1-1AE")).to.be.false;
      expect(Validators.ukpostalcode.validate("B33 888")).to.be.false;
      expect(Validators.ukpostalcode.validate("CR2.6XH")).to.be.false;
      expect(Validators.ukpostalcode.validate("DN55+1PT")).to.be.false;
    });

    it("should match valid ukpostalcode", () => {
      expect(Validators.ukpostalcode.validate("EC1A 1BB")).to.be.true;
      expect(Validators.ukpostalcode.validate("W1A 0AX")).to.be.true;
      expect(Validators.ukpostalcode.validate("M1 1AE")).to.be.true;
      expect(Validators.ukpostalcode.validate("B33 8TH")).to.be.true;
      expect(Validators.ukpostalcode.validate("CR2 6XH")).to.be.true;
      expect(Validators.ukpostalcode.validate("DN55 1PT")).to.be.true;
    });
  });

  describe("city", () => {
    it("should not match invalid city", () => {
      expect(Validators.city.validate("")).to.be.false; // required
      expect(Validators.city.validate("AAAAAAAAAA 123456789 AAAAAAAAA1")).to.be.false;
      expect(Validators.city.validate("9")).to.be.false;
      expect(Validators.city.validate("~Bad")).to.be.false;
    });

    it("should match valid city", () => {
      expect(Validators.city.validate("AAAAAAAAAA 123456789 AAAAAAAAA")).to.be.true;
      expect(Validators.city.validate("Salt Lake City")).to.be.true;
      expect(Validators.city.validate("Coeur D'Alene")).to.be.true;
      expect(Validators.city.validate("Bend")).to.be.true;
    });
  });

  describe("userLocation", () => {
    it("should not match invalid userLocation", () => {
      expect(Validators.userLocation.validate("")).to.be.false; // required
      expect(Validators.userLocation.validate("999")).to.be.false;
      expect(Validators.userLocation.validate("99999-123")).to.be.false;
    });

    it.skip("should not match invalid userLocation (too long)", () => {
      expect(Validators.userLocation.validate("AAAAAAAAAA 123456789 AAAAAAAAA1")).to.be.false;
      expect(Validators.userLocation.validate("AAAAAAAAAA 123456789 AAAAAAAAA 123456789 BBBBBBBBB1")).to.be.false;
      expect(Validators.userLocation.validate("AAAAAAAAAA 123456789 AAAAAAAAA 123456789 BBBBBBBBB")).to.be.false;
    });

    it("should match valid userLocation", () => {
      expect(Validators.userLocation.validate("AAAAAAAAAA 123456789 AAAAAAAAA")).to.be.true;
      expect(Validators.userLocation.validate("99999")).to.be.true;
      expect(Validators.userLocation.validate("99999-1234")).to.be.true;
      expect(Validators.userLocation.validate("Salt Lake City")).to.be.true;
      expect(Validators.userLocation.validate("Coeur D'Alene")).to.be.true;
      expect(Validators.userLocation.validate("Bend")).to.be.true;
    });
  });

  describe("email", () => {
    it("should not match invalid email", () => {
      expect(Validators.email.validate("")).to.be.false; // required
      expect(Validators.email.validate("example@s.solutions.0123456789012345678901234567890123456789012345678901234567890123456789.com")).to.be.false;

      // no forward slashes in code comments
      expect(Validators.email.validate("#!$%&'*+-/=?^_`{}|~@example.org")).to.be.false;

      // not valid for external emails
      expect(Validators.email.validate("example@localhost")).to.be.false;
      expect(Validators.email.validate("admin@mailserver1")).to.be.false;
      expect(Validators.email.validate("user@com")).to.be.false;
      expect(Validators.email.validate("user@localserver")).to.be.false;

      // this should be ok but we only allow ascii for domains
      expect(Validators.email.validate("üñîçøðé@üñîçøðé.com")).to.be.false;

      // crazy email
      expect(Validators.email.validate("user@[IPv6:2001:db8::1]")).to.be.false;
    });

    it("should match valid email", () => {
      expect(Validators.email.validate("test@walmartlabs.com")).to.be.true;
      expect(Validators.email.validate("prettyandsimple@example.com")).to.be.true;
      expect(Validators.email.validate("very.common@example.com")).to.be.true;
      expect(Validators.email.validate("disposable.style.email.with+symbol@example.com")).to.be.true;
      expect(Validators.email.validate("other.email-with-dash@example.com")).to.be.true;
      expect(Validators.email.validate("\"much.more unusual\"@example.com")).to.be.true;
      expect(Validators.email.validate("\"very.unusual.@.unusual.com\"@example.com")).to.be.true;
      expect(Validators.email.validate("\"very.(),:;<>[]\\\".VERY.\\\"very@\\\\ \\\"very\\\".unusual\"@strange.example.com")).to.be.true;
      expect(Validators.email.validate("\"()<>[]:,;@\\\\\\\"!#$%&'*+-/=?^_`{}| ~.a\"@example.org")).to.be.true;
      expect(Validators.email.validate("\" \"@example.org")).to.be.true;
      expect(Validators.email.validate("üñîçøðé@example.com")).to.be.true;
      expect(Validators.email.validate("example@s.solutions")).to.be.true;

      // no forward slashes in code comments
      expect(Validators.email.validate("#!$%&'*+-=?^_`{}|~@example.org")).to.be.true;
    });

    it("should not match invalid multiemail", () => {
      expect(Validators.multiemail.validate("")).to.be.false; // required
      expect(Validators.multiemail.validate("test@walmartlabs.com,\"prettyandsimple@example.com")).to.be.false;
    });

    it.skip("should not match invalid multiemail (too long)", () => {
      expect(Validators.email.validate("test@walmartlabs.com,example@s.solutions.0123456789012345678901234567890123456789012345678901234567890123456789.com")).to.be.false;
    });

    it("should match valid multiemail", () => {
      expect(Validators.multiemail.validate("test@walmartlabs.com")).to.be.true;
      expect(Validators.multiemail.validate("test@walmartlabs.com,prettyandsimple@example.com")).to.be.true;
      expect(Validators.multiemail.validate("test@walmartlabs.com,prettyandsimple@example.com,very.common@example.com,disposable.style.email.with+symbol@example.com,other.email-with-dash@example.com,\"much.more unusual\"@example.com,\"very.unusual.@.unusual.com\"@example.com,\"very.(),:;<>[]\\\".VERY.\\\"very@\\\\ \\\"very\\\".unusual\"@strange.example.com,\"()<>[]:,;@\\\\\\\"!#$%&'*+-/=?^_`{}| ~.a\"@example.org,\" \"@example.org,üñîçøðé@example.com,example@s.solutions")).to.be.true;
    });
  });

  describe("password", () => {
    it("should not match invalid password", () => {
      expect(Validators.password.validate("")).to.be.false; // required
      expect(Validators.password.validate("AAAAA")).to.be.false;
      expect(Validators.password.validate("AA  AA")).to.be.false;
    });

    it("should match valid password", () => {
      expect(Validators.password.validate("AAAAAA")).to.be.true;
      expect(Validators.password.validate("AAAAAAA")).to.be.true;
      expect(Validators.password.validate("AAAAAAAA")).to.be.true;
      expect(Validators.password.validate("AAAAAAAAA")).to.be.true;
      expect(Validators.password.validate("AAAAAAAAAA")).to.be.true;
      expect(Validators.password.validate("AAAAAAAAAAA")).to.be.true;
      expect(Validators.password.validate("AAAAAAAAAAAA")).to.be.true;
      expect(Validators.password.validate("AAAAAAAAAAAAA")).to.be.false;
    });
  });

  describe("phone", () => {
    it("should not match invalid phone", () => {
      expect(Validators.phone.validate("555 555 121")).to.be.false;
      expect(Validators.phone.validate("1 555 555 1212")).to.be.false;
    });

    it.skip("should match valid phone (dots between numbers are common)", () => {
      expect(Validators.phone.validate("555.555.1212")).to.be.true;
    });

    it("should match valid phone", () => {
      expect(Validators.phone.validate("")).to.be.true; // not required
      expect(Validators.phone.validate("555 555 1212")).to.be.true;
      expect(Validators.phone.validate("800 555 1212")).to.be.true;
      expect(Validators.phone.validate("555 800 1212")).to.be.true;
      expect(Validators.phone.validate("555 555 8000")).to.be.true;
      expect(Validators.phone.validate("555-555-1212")).to.be.true;
      expect(Validators.phone.validate("(555)5551212")).to.be.true;
      expect(Validators.phone.validate("555(555)1212")).to.be.true;
      expect(Validators.phone.validate("5555551212")).to.be.true;
    });
  });

  describe("creditcards", () => {
    it("should not match invalid cvv", () => {
      expect(Validators.cvv.validate("")).to.be.false; // required
      expect(Validators.cvv.validate("aaa", 3)).to.be.false;
      expect(Validators.cvv.validate("5b5", 3)).to.be.false;
      expect(Validators.cvv.validate("555", 4)).to.be.false;
    });

    it("should match valid cvv", () => {
      expect(Validators.cvv.validate("555", 3)).to.be.true;
      expect(Validators.cvv.validate("800", 3)).to.be.true;
      expect(Validators.cvv.validate("155", 3)).to.be.true;
      expect(Validators.cvv.validate("1555", 4)).to.be.true;
    });

    it("should not match invalid creditcard", () => {
      expect(Validators.creditcard.validate("")).to.be.false; // required
      expect(Validators.creditcard.validate("491681805390962")).to.be.false;
      expect(Validators.creditcard.validate("536257398616947")).to.be.false;
      expect(Validators.creditcard.validate("601174722824757")).to.be.false;
      expect(Validators.creditcard.validate("3477635216788180")).to.be.false;
    });

    it("should match valid creditcard", () => {
      expect(Validators.creditcard.validate("4916818053909628")).to.be.true;
      expect(Validators.creditcard.validate("4556623188899826")).to.be.true;
      expect(Validators.creditcard.validate("4532799362472009")).to.be.true;
      expect(Validators.creditcard.validate("4916438316137659")).to.be.true;
      expect(Validators.creditcard.validate("4024007124265728")).to.be.true;
      expect(Validators.creditcard.validate("5362573986169479")).to.be.true;
      expect(Validators.creditcard.validate("5290121707185635")).to.be.true;
      expect(Validators.creditcard.validate("5307648185798902")).to.be.true;
      expect(Validators.creditcard.validate("5326588892364621")).to.be.true;
      expect(Validators.creditcard.validate("5494887933807770")).to.be.true;
      expect(Validators.creditcard.validate("6011747228247573")).to.be.true;
      expect(Validators.creditcard.validate("6011927204689093")).to.be.true;
      expect(Validators.creditcard.validate("6011790436232268")).to.be.true;
      expect(Validators.creditcard.validate("6011997262501647")).to.be.true;
      expect(Validators.creditcard.validate("6011538904456392")).to.be.true;
      expect(Validators.creditcard.validate("347763521678818")).to.be.true;
      expect(Validators.creditcard.validate("340879969476890")).to.be.true;
      expect(Validators.creditcard.validate("375044180436946")).to.be.true;
      expect(Validators.creditcard.validate("372638273064094")).to.be.true;
      expect(Validators.creditcard.validate("343485493808116")).to.be.true;
    });

    it("should not match invalid giftcard", () => {
      expect(Validators.giftcard.validate("")).to.be.false; // required
      expect(Validators.giftcard.validate("347763521678818")).to.be.false;
      expect(Validators.giftcard.validate("340879969476890")).to.be.false;
      expect(Validators.giftcard.validate("375044180436946")).to.be.false;
      expect(Validators.giftcard.validate("372638273064094")).to.be.false;
      expect(Validators.giftcard.validate("343485493808116")).to.be.false;
    });

    it("should match valid giftcard", () => {
      expect(Validators.giftcard.validate("4916818053909628")).to.be.true;
      expect(Validators.giftcard.validate("4556623188899826")).to.be.true;
      expect(Validators.giftcard.validate("4532799362472009")).to.be.true;
      expect(Validators.giftcard.validate("4916438316137659")).to.be.true;
      expect(Validators.giftcard.validate("4024007124265728")).to.be.true;
      expect(Validators.giftcard.validate("5362573986169479")).to.be.true;
      expect(Validators.giftcard.validate("5290121707185635")).to.be.true;
      expect(Validators.giftcard.validate("5307648185798902")).to.be.true;
      expect(Validators.giftcard.validate("5326588892364621")).to.be.true;
      expect(Validators.giftcard.validate("5494887933807770")).to.be.true;
      expect(Validators.giftcard.validate("6011747228247573")).to.be.true;
      expect(Validators.giftcard.validate("6011927204689093")).to.be.true;
      expect(Validators.giftcard.validate("6011790436232268")).to.be.true;
      expect(Validators.giftcard.validate("6011997262501647")).to.be.true;
      expect(Validators.giftcard.validate("6011538904456392")).to.be.true;
    });

    it("should not match invalid giftcardpin", () => {
      expect(Validators.giftcardpin.validate("")).to.be.false; // required
      expect(Validators.giftcardpin.validate("538")).to.be.false;
      expect(Validators.giftcardpin.validate("34797")).to.be.false;
      expect(Validators.giftcardpin.validate("340")).to.be.false;
      expect(Validators.giftcardpin.validate("37580")).to.be.false;
      expect(Validators.giftcardpin.validate("372")).to.be.false;
      expect(Validators.giftcardpin.validate("34364")).to.be.false;
    });

    it("should match valid giftcardpin", () => {
      expect(Validators.giftcardpin.validate("4916")).to.be.true;
      expect(Validators.giftcardpin.validate("4556")).to.be.true;
      expect(Validators.giftcardpin.validate("4532")).to.be.true;
      expect(Validators.giftcardpin.validate("4916")).to.be.true;
      expect(Validators.giftcardpin.validate("4024")).to.be.true;
      expect(Validators.giftcardpin.validate("5362")).to.be.true;
      expect(Validators.giftcardpin.validate("0290")).to.be.true;
      expect(Validators.giftcardpin.validate("5307")).to.be.true;
      expect(Validators.giftcardpin.validate("5326")).to.be.true;
      expect(Validators.giftcardpin.validate("5494")).to.be.true;
      expect(Validators.giftcardpin.validate("7472")).to.be.true;
      expect(Validators.giftcardpin.validate("9272")).to.be.true;
      expect(Validators.giftcardpin.validate("7904")).to.be.true;
      expect(Validators.giftcardpin.validate("9972")).to.be.true;
    });

    it("should not match invalid giftcardnickname", () => {
      expect(Validators.giftcardnickname.validate("01234567890123456789123456")).to.be.false;
    });

    it("should match valid giftcardnickname", () => {
      expect(Validators.giftcardnickname.validate("")).to.be.true; // not required
      expect(Validators.giftcardnickname.validate("0123456789012345678912345")).to.be.true;
    });

    it("should not match invalid associatecard", () => {
      expect(Validators.associatecard.validate("")).to.be.false; // required
      expect(Validators.associatecard.validate("347763521678818")).to.be.false;
      expect(Validators.associatecard.validate("340879969476890")).to.be.false;
      expect(Validators.associatecard.validate("375044180436946")).to.be.false;
      expect(Validators.associatecard.validate("372638273064094")).to.be.false;
      expect(Validators.associatecard.validate("343485493808116")).to.be.false;
    });

    it("should match valid associatecard", () => {
      expect(Validators.associatecard.validate("4916818053909628")).to.be.true;
      expect(Validators.associatecard.validate("4556623188899826")).to.be.true;
      expect(Validators.associatecard.validate("4532799362472009")).to.be.true;
      expect(Validators.associatecard.validate("4916438316137659")).to.be.true;
      expect(Validators.associatecard.validate("4024007124265728")).to.be.true;
      expect(Validators.associatecard.validate("5362573986169479")).to.be.true;
      expect(Validators.associatecard.validate("5290121707185635")).to.be.true;
      expect(Validators.associatecard.validate("5307648185798902")).to.be.true;
      expect(Validators.associatecard.validate("5326588892364621")).to.be.true;
      expect(Validators.associatecard.validate("5494887933807770")).to.be.true;
      expect(Validators.associatecard.validate("6011747228247573")).to.be.true;
      expect(Validators.associatecard.validate("6011927204689093")).to.be.true;
      expect(Validators.associatecard.validate("6011790436232268")).to.be.true;
      expect(Validators.associatecard.validate("6011997262501647")).to.be.true;
      expect(Validators.associatecard.validate("6011538904456392")).to.be.true;
    });
  });

  describe("associatewin", () => {
    it("should not match invalid associatewin", () => {
      expect(Validators.associatewin.validate("")).to.be.false; // required
      expect(Validators.associatewin.validate("1")).to.be.false;
      expect(Validators.associatewin.validate("89")).to.be.false;
      expect(Validators.associatewin.validate("793")).to.be.false;
      expect(Validators.associatewin.validate("4722")).to.be.false;
      expect(Validators.associatewin.validate("192720")).to.be.false;
      expect(Validators.associatewin.validate("1179043")).to.be.false;
      expect(Validators.associatewin.validate("01199726")).to.be.false;
      expect(Validators.associatewin.validate("134348549380")).to.be.false;
    });

    it("should match valid associatewin", () => {
      expect(Validators.associatewin.validate("601153890")).to.be.true;
      expect(Validators.associatewin.validate("3477635216")).to.be.true;
      expect(Validators.associatewin.validate("34087996947")).to.be.true;
      expect(Validators.associatewin.validate("37504418043")).to.be.true;
      expect(Validators.associatewin.validate("37263827306")).to.be.true;
    });
  });

  describe("validators of length", () => {
    it("should not match invalid minlength", () => {
      expect(Validators.minlength.validate("", 1)).to.be.false;
      expect(Validators.minlength.validate("1", 9)).to.be.false;
      expect(Validators.minlength.validate("89", 9)).to.be.false;
      expect(Validators.minlength.validate("793", 9)).to.be.false;
      expect(Validators.minlength.validate("4722", 9)).to.be.false;
      expect(Validators.minlength.validate("192720", 9)).to.be.false;
      expect(Validators.minlength.validate("1179043", 9)).to.be.false;
      expect(Validators.minlength.validate("01199726", 9)).to.be.false;
    });

    it("should match valid minlength", () => {
      expect(Validators.minlength.validate("", 0)).to.be.true;
      expect(Validators.minlength.validate("601153890", 9)).to.be.true;
      expect(Validators.minlength.validate("3477635216", 9)).to.be.true;
      expect(Validators.minlength.validate("34087996947", 9)).to.be.true;
      expect(Validators.minlength.validate("37504418043", 9)).to.be.true;
      expect(Validators.minlength.validate("37263827306", 9)).to.be.true;
      expect(Validators.minlength.validate("134348549380", 9)).to.be.true;
    });

    it("should not match invalid minlengthexcludewhitespace", () => {
      expect(Validators.minlengthexcludewhitespace.validate("", 1)).to.be.false;
      expect(Validators.minlengthexcludewhitespace.validate(" ", 1)).to.be.false;
      expect(Validators.minlengthexcludewhitespace.validate("1 ", 9)).to.be.false;
      expect(Validators.minlengthexcludewhitespace.validate("89 ", 9)).to.be.false;
      expect(Validators.minlengthexcludewhitespace.validate(" 793", 9)).to.be.false;
      expect(Validators.minlengthexcludewhitespace.validate("4722 ", 9)).to.be.false;
      expect(Validators.minlengthexcludewhitespace.validate(" 192720", 9)).to.be.false;
      expect(Validators.minlengthexcludewhitespace.validate("1179043 ", 9)).to.be.false;
      expect(Validators.minlengthexcludewhitespace.validate("123  456", 8)).to.be.false;
      expect(Validators.minlengthexcludewhitespace.validate(" 123  456", 8)).to.be.false;
      expect(Validators.minlengthexcludewhitespace.validate("123  456 ", 8)).to.be.false;
      expect(Validators.minlengthexcludewhitespace.validate(" 01199726", 9)).to.be.false;
    });

    it("should match valid minlengthexcludewhitespace", () => {
      expect(Validators.minlengthexcludewhitespace.validate("", 0)).to.be.true;
      expect(Validators.minlengthexcludewhitespace.validate("123  456", 7)).to.be.true;
      expect(Validators.minlengthexcludewhitespace.validate(" 123  456", 7)).to.be.true;
      expect(Validators.minlengthexcludewhitespace.validate("123  456 ", 7)).to.be.true;
      expect(Validators.minlengthexcludewhitespace.validate("123 456", 7)).to.be.true;
      expect(Validators.minlengthexcludewhitespace.validate(" 601153890", 9)).to.be.true;
      expect(Validators.minlengthexcludewhitespace.validate("3477635216 ", 9)).to.be.true;
      expect(Validators.minlengthexcludewhitespace.validate("34087996947 ", 9)).to.be.true;
      expect(Validators.minlengthexcludewhitespace.validate(" 37504418043", 9)).to.be.true;
      expect(Validators.minlengthexcludewhitespace.validate(" 37263827306", 9)).to.be.true;
      expect(Validators.minlengthexcludewhitespace.validate("134348549380 ", 9)).to.be.true;
    });

    it("should not match invalid notEmpty", () => {
      expect(Validators.notEmpty.validate("")).to.be.false; // required
    });

    it("should match valid notEmpty", () => {
      expect(Validators.notEmpty.validate("1")).to.be.true;
      expect(Validators.notEmpty.validate("0")).to.be.true;
    });

    it("should not match invalid required", () => {
      expect(Validators.required.validate("")).to.be.false; // required
    });

    it("should match valid required", () => {
      expect(Validators.required.validate("1")).to.be.true;
      expect(Validators.required.validate("0")).to.be.true;
    });

    it("should not match invalid maxlength", () => {
      expect(Validators.maxlength.validate("3477635216", 9)).to.be.false;
      expect(Validators.maxlength.validate("34087996947", 9)).to.be.false;
      expect(Validators.maxlength.validate("37504418043", 9)).to.be.false;
      expect(Validators.maxlength.validate("37263827306", 9)).to.be.false;
      expect(Validators.maxlength.validate("134348549380", 9)).to.be.false;
    });

    it("should match valid maxlength", () => {
      expect(Validators.maxlength.validate("", 0)).to.be.true;
      expect(Validators.maxlength.validate("", 1)).to.be.true;
      expect(Validators.maxlength.validate("1", 9)).to.be.true;
      expect(Validators.maxlength.validate("89", 9)).to.be.true;
      expect(Validators.maxlength.validate("793", 9)).to.be.true;
      expect(Validators.maxlength.validate("4722", 9)).to.be.true;
      expect(Validators.maxlength.validate("192720", 9)).to.be.true;
      expect(Validators.maxlength.validate("1179043", 9)).to.be.true;
      expect(Validators.maxlength.validate("01199726", 9)).to.be.true;
      expect(Validators.maxlength.validate("601153890", 9)).to.be.true;
    });

    it("should not match invalid exactdigitlength", () => {
      expect(Validators.exactdigitlength.validate("", 1)).to.be.false;
      expect(Validators.exactdigitlength.validate("a", 1)).to.be.false;
      expect(Validators.exactdigitlength.validate("1", 9)).to.be.false;
      expect(Validators.exactdigitlength.validate("89", 9)).to.be.false;
      expect(Validators.exactdigitlength.validate("793", 9)).to.be.false;
      expect(Validators.exactdigitlength.validate("4722", 9)).to.be.false;
      expect(Validators.exactdigitlength.validate("192720", 9)).to.be.false;
      expect(Validators.exactdigitlength.validate("1179043", 9)).to.be.false;
      expect(Validators.exactdigitlength.validate("01199726", 9)).to.be.false;
      expect(Validators.exactdigitlength.validate("3477635216", 9)).to.be.false;
      expect(Validators.exactdigitlength.validate("34087996947", 9)).to.be.false;
      expect(Validators.exactdigitlength.validate("134348549380", 9)).to.be.false;
    });

    it("should match valid exactdigitlength", () => {
      expect(Validators.exactdigitlength.validate("", 0)).to.be.true;
      expect(Validators.exactdigitlength.validate("1", 1)).to.be.true;
      expect(Validators.exactdigitlength.validate("12", 2)).to.be.true;
      expect(Validators.exactdigitlength.validate("601153890", 9)).to.be.true;
    });
  });

  describe("validators of numbers", () => {
    it("should not match invalid noleadingzero", () => {
      expect(Validators.noleadingzero.validate("0")).to.be.false;
      expect(Validators.noleadingzero.validate("01199726")).to.be.false;
    });

    it("should match valid noleadingzero", () => {
      expect(Validators.noleadingzero.validate("")).to.be.true; // not required
      expect(Validators.noleadingzero.validate("1")).to.be.true;
      expect(Validators.noleadingzero.validate("89")).to.be.true;
      expect(Validators.noleadingzero.validate("793")).to.be.true;
      expect(Validators.noleadingzero.validate("4722")).to.be.true;
      expect(Validators.noleadingzero.validate("192720")).to.be.true;
      expect(Validators.noleadingzero.validate("1179043")).to.be.true;
      expect(Validators.noleadingzero.validate("601153890")).to.be.true;
      expect(Validators.noleadingzero.validate("3477635216")).to.be.true;
      expect(Validators.noleadingzero.validate("37263827306")).to.be.true;
      expect(Validators.noleadingzero.validate("134348549380")).to.be.true;
    });

    it("should not match invalid number", () => {
      expect(Validators.number.validate("a")).to.be.false;
      expect(Validators.number.validate("7a3")).to.be.false;
      expect(Validators.number.validate("abc")).to.be.false;
    });

    it("should match valid number", () => {
      expect(Validators.number.validate("")).to.be.true; // not required
      expect(Validators.number.validate("0")).to.be.true;
      expect(Validators.number.validate("1")).to.be.true;
      expect(Validators.number.validate("89")).to.be.true;
    });

    it("should not match invalid numberpositive", () => {
      expect(Validators.numberpositive.validate("")).to.be.false; // required
      expect(Validators.numberpositive.validate("-1")).to.be.false;
      expect(Validators.numberpositive.validate("abc")).to.be.false;
    });

    it.skip("should not match invalid numberpositive (should only accept numbers)", () => {
      expect(Validators.numberpositive.validate("7a3")).to.be.false;
    });

    it("should match valid numberpositive", () => {
      expect(Validators.numberpositive.validate("0")).to.be.true;
      expect(Validators.numberpositive.validate("1")).to.be.true;
    });
  });

  describe("validators of name", () => {
    it("should not match invalid fullname", () => {
      expect(Validators.fullname.validate("")).to.be.false; // required
      expect(Validators.fullname.validate("AAAAAAAAAAAvvvvvvvvvAAAAAAAAAA xxxxxxxxxBBBBBBBBBBB")).to.be.false;
    });

    it("should match valid fullname", () => {
      expect(Validators.fullname.validate("AAAAAAAAAAAbbbbbbbbbAAAAAAAAAA aaaaaaaaaBBBBBBBBBB")).to.be.true;
      expect(Validators.fullname.validate("AAAAAAAAAAA---------AAAAAAAAAA aaaaaaaaa.BBBBBBBBB")).to.be.true;
      expect(Validators.fullname.validate("AAAAAAAAAAA.........AAAAAAAAAA aaaaaaaaa-BBBBBBBBB")).to.be.true;
      expect(Validators.fullname.validate("AAAAAAAAAAA'''''''''AAAAAAAAAA aaaaaaaaa,BBBBBBBBB")).to.be.true;
      expect(Validators.fullname.validate("AAAAAAAAAAA,,,,,,,,,AAAAAAAAAA aaaaaaaaa'BBBBBBBBB")).to.be.true;
    });

    it("should not match invalid firstname", () => {
      expect(Validators.firstname.validate("")).to.be.false; // required
      expect(Validators.firstname.validate("01234567890123456789123456")).to.be.false;
    });

    it("should match valid firstname", () => {
      expect(Validators.firstname.validate("AAAAAAAAAAAvvvvvvvvvAAAA")).to.be.true;
      expect(Validators.firstname.validate("AAAAAAAAAAAbbbbbbbbbAAAA")).to.be.true;
      expect(Validators.firstname.validate("AAAAAAAAAAA---------AAAA")).to.be.true;
      expect(Validators.firstname.validate("AAAAAAAAAAA.........AAAA")).to.be.true;
      expect(Validators.firstname.validate("AAAAAAAAAAA'''''''''AAAA")).to.be.true;
      expect(Validators.firstname.validate("AAAAAAAAAAA,,,,,,,,,AAAA")).to.be.true;
    });

    it("should not match invalid lastname", () => {
      expect(Validators.lastname.validate("")).to.be.false; // required
      expect(Validators.lastname.validate("01234567890123456789123456")).to.be.false;
    });

    it("should match valid lastname", () => {
      expect(Validators.lastname.validate("AAAAAAAAAAAvvvvvvvvvAAAA")).to.be.true;
      expect(Validators.lastname.validate("AAAAAAAAAAAbbbbbbbbbAAAA")).to.be.true;
      expect(Validators.lastname.validate("AAAAAAAAAAA---------AAAA")).to.be.true;
      expect(Validators.lastname.validate("AAAAAAAAAAA.........AAAA")).to.be.true;
      expect(Validators.lastname.validate("AAAAAAAAAAA'''''''''AAAA")).to.be.true;
      expect(Validators.lastname.validate("AAAAAAAAAAA,,,,,,,,,AAAA")).to.be.true;
    });

    it("should not match invalid firstnamecreditcard", () => {
      expect(Validators.firstnamecreditcard.validate("")).to.be.false; // required
    });

    it.skip("should not match invalid firstnamecreditcard (need max length)", () => {
      expect(Validators.firstnamecreditcard.validate("01234567890123456789123456")).to.be.false;
    });

    it("should match valid firstnamecreditcard", () => {
      expect(Validators.firstnamecreditcard.validate("AAAAAAAAAAAvvvvvvvvvAAAA")).to.be.true;
      expect(Validators.firstnamecreditcard.validate("AAAAAAAAAAAbbbbbbbbbAAAA")).to.be.true;
      expect(Validators.firstnamecreditcard.validate("AAAAAAAAAAA---------AAAA")).to.be.true;
      expect(Validators.firstnamecreditcard.validate("AAAAAAAAAAA.........AAAA")).to.be.true;
      expect(Validators.firstnamecreditcard.validate("AAAAAAAAAAA'''''''''AAAA")).to.be.true;
      expect(Validators.firstnamecreditcard.validate("AAAAAAAAAAA,,,,,,,,,AAAA")).to.be.true;
    });

    it("should not match invalid lastnamecreditcard", () => {
      expect(Validators.lastnamecreditcard.validate("")).to.be.false; // required
    });

    it.skip("should not match invalid lastnamecreditcard (need max length)", () => {
      expect(Validators.lastnamecreditcard.validate("01234567890123456789123456")).to.be.false;
    });

    it("should match valid lastnamecreditcard", () => {
      expect(Validators.lastnamecreditcard.validate("AAAAAAAAAAAvvvvvvvvvAAAA")).to.be.true;
      expect(Validators.lastnamecreditcard.validate("AAAAAAAAAAAbbbbbbbbbAAAA")).to.be.true;
      expect(Validators.lastnamecreditcard.validate("AAAAAAAAAAA---------AAAA")).to.be.true;
      expect(Validators.lastnamecreditcard.validate("AAAAAAAAAAA.........AAAA")).to.be.true;
      expect(Validators.lastnamecreditcard.validate("AAAAAAAAAAA'''''''''AAAA")).to.be.true;
      expect(Validators.lastnamecreditcard.validate("AAAAAAAAAAA,,,,,,,,,AAAA")).to.be.true;
    });

    it("should match valid legaltext", () => {
      expect(Validators.legaltext.validate("")).to.be.true; // not required
      expect(Validators.legaltext.validate("AAAAAAAAAAAvvvvvvvvvAAAA")).to.be.true;
      expect(Validators.legaltext.validate("AAAAAAAAAAAbbbbbbbbbAAAA")).to.be.true;
      expect(Validators.legaltext.validate("AAAAAAAAAAA---------AAAA")).to.be.true;
      expect(Validators.legaltext.validate("AAAAAAAAAAA.........AAAA")).to.be.true;
      expect(Validators.legaltext.validate("AAAAAAAAAAA'''''''''AAAA")).to.be.true;
      expect(Validators.legaltext.validate("AAAAAAAAAAA,,,,,,,,,AAAA")).to.be.true;
    });

    it("should match valid legaltextarea", () => {
      expect(Validators.legaltextarea.validate("")).to.be.true; // not required
      expect(Validators.legaltextarea.validate("AAAAAAAAAAAvvvvvvvvvAAAA")).to.be.true;
      expect(Validators.legaltextarea.validate("AAAAAAAAAAAbbbbbbbbbAAAA")).to.be.true;
      expect(Validators.legaltextarea.validate("AAAAAAAAAAA---------AAAA")).to.be.true;
      expect(Validators.legaltextarea.validate("AAAAAAAAAAA.........AAAA")).to.be.true;
      expect(Validators.legaltextarea.validate("AAAAAAAAAAA'''''''''AAAA")).to.be.true;
      expect(Validators.legaltextarea.validate("AAAAAAAAAAA,,,,,,,,,AAAA")).to.be.true;
    });
  });

  describe("samsmembership", () => {
    it("should not match invalid samsmembership", () => {
      expect(Validators.samsmembership.validate("")).to.be.false; // required
      expect(Validators.samsmembership.validate("AAAAAAAAAA123")).to.be.false;
      expect(Validators.samsmembership.validate("AAAAAAAAAA1234567")).to.be.false;
      expect(Validators.samsmembership.validate("1234567-123456")).to.be.false;
    });

    it("should match valid samsmembership", () => {
      expect(Validators.samsmembership.validate("1234567890123")).to.be.true;
      expect(Validators.samsmembership.validate("12345678901234")).to.be.false;
      expect(Validators.samsmembership.validate("12345678901234567")).to.be.true;
    });
  });

  describe("ordernumber", () => {
    it("should not match invalid ordernumber", () => {
      expect(Validators.ordernumber.validate("")).to.be.false; // required
      expect(Validators.ordernumber.validate("AAAAAAAAAA 123456789 AAAAAAAAA 123456789 BBBBBBBBB1")).to.be.false;
      expect(Validators.ordernumber.validate("AAAAAAAAAA 123456789 AAAAAAAAA 123456789 BBBBBBBBB")).to.be.false;
    });

    it("should match valid ordernumber", () => {
      expect(Validators.ordernumber.validate("123456")).to.be.true;
      expect(Validators.ordernumber.validate("1234567-123456")).to.be.true;
      expect(Validators.ordernumber.validate("1234567890123")).to.be.true;
    });
  });

  describe("dob", () => {
    it("should not match invalid dob", () => {
      const future = new Date(new Date().setMonth(12)).toISOString().replace(/^(\d\d\d\d)-(\d\d).(\d\d)*$/, "$2/$3/$1");

      expect(Validators.dob.validate("")).to.be.false; // required
      expect(Validators.dob.validate("01/01/72")).to.be.false;
      expect(Validators.dob.validate("01-01-72")).to.be.false;
      expect(Validators.dob.validate("01/01/99")).to.be.false;
      expect(Validators.dob.validate("01/01/2999")).to.be.false;
      expect(Validators.dob.validate(future)).to.be.false;
    });

    it("should match valid dob", () => {
      const past = new Date(new Date().setMonth(-12)).toISOString().replace(/^(\d\d\d\d)-(\d\d)-(\d\d).*$/, "$2/$3/$1");

      expect(Validators.dob.validate("01/01/1972")).to.be.true;
      expect(Validators.dob.validate("01/01/2015")).to.be.true;
      expect(Validators.dob.validate("03/01/1972")).to.be.true;
      expect(Validators.dob.validate("01/03/1999")).to.be.true;
      expect(Validators.dob.validate("01/31/2015")).to.be.true;
      expect(Validators.dob.validate(past)).to.be.true;
    });
  });

  describe("expdate", () => {
    it.skip("should not match invalid expdate", () => {
      const past = new Date(new Date().setMonth(-12)).toISOString().replace(/^\d\d(\d\d)-(\d\d).*$/, "$2/$1");

      expect(Validators.expdate.validate("")).to.be.false; // required
      expect(Validators.expdate.validate("01/01")).to.be.false;
      expect(Validators.expdate.validate(past)).to.be.false;
    });

    it.skip("should match valid expdate", () => {
      const future = new Date(new Date().setMonth(12)).toISOString().replace(/^\d\d(\d\d)-(\d\d).*$/, "$2/$1");

      expect(Validators.expdate.validate("12/99")).to.be.true;
      expect(Validators.expdate.validate(future)).to.be.true;
    });
  });

  describe("multiplevalidations", () => {
    it("should not match invalid multiplevalidations", () => {
      expect(Validators.multiplevalidations.validate("AAAAAAAAAAAvvvvvvvvvAAAA", {minlength: 50, legaltext: null, maxlength: 80})).to.be.false;
    });

    it("should match valid multiplevalidations", () => {
      expect(Validators.multiplevalidations.validate("", {})).to.be.true;
      expect(Validators.multiplevalidations.validate("AAAAAAAAAAAvvvvvvvvvAAAA", {minlength: 10, legaltext: null, maxlength: 50})).to.be.true;
    });
  });

  describe.skip("regex (not implemented)", () => {
    it("should not match invalid regex", () => {
      expect(Validators.regex.validate("", "")).to.be.false; // required
      expect(Validators.regex.validate("abc")).to.be.false;
      expect(Validators.regex.validate("abc", "")).to.be.false;
      expect(Validators.regex.validate("AAAAAAAAAA 123456789 AAAAAAAAA 123456789 BBBBBBBBB1", "/^B/")).to.be.false;
      expect(Validators.regex.validate("bbbbbbbbbb 123456789", "^/i")).to.be.false;
    });

    it("should match valid regex", () => {
      expect(Validators.regex.validate("AAAAAAAAAA 123456789 AAAAAAAAA 123456789 BBBBBBBBB", "/^A/")).to.be.true;
      expect(Validators.regex.validate("AAAAAAAAAA 123456789", "/^A/")).to.be.true;
      expect(Validators.regex.validate("BBBBBBBBBB 123456789", "/^B/")).to.be.true;
      expect(Validators.regex.validate("aaaaaaaaaa 123456789", "/^A/i")).to.be.true;
      expect(Validators.regex.validate("bbbbbbbbbb 123456789", "/^B/i")).to.be.true;
      expect(Validators.regex.validate("aaaaaaaaaa 123456789", "/^A/gi")).to.be.true;
      expect(Validators.regex.validate("bbbbbbbbbb 123456789", "/^B/gi")).to.be.true;
      expect(Validators.regex.validate("bbbbbbbbbb 123456789", "/^\.{20}$/")).to.be.true;
      expect(Validators.regex.validate("bbbbbbbbbb 123456789", "/^\.{20}|\.{30}$/")).to.be.true;
      expect(Validators.regex.validate("bbbbbbbbbb 123456789 123456789", "/^\.{30}$/")).to.be.true;
      expect(Validators.regex.validate("bbbbbbbbbb 123456789 123456789", "/^\.{20}|\.{30}$/")).to.be.true;
    });
  });
});

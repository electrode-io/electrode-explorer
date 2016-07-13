module.exports =
  {
    global_footer: {
      signup_zone: {
        "name": "signup",
        "type": "GlobalEmailSignup",
        "version": 1,
        "status": "published",
        "schedule": {
          "start": null,
          "end": null,
          "priority": 1,
          "expEnabled": false
        },
        "triggers": [
          {
            "pageType": "global_footer",
            "pageId": null,
            "zone": "signup_zone"
          }
        ],
        "targeting": {},
        "configs": {
          "header": "Sign up for email updates",
          "headerColor": "#222",
          "campaignId": "1",
          "emailInfoText": "Get info on savings events, special offers, new items, in-club events and more.",
          "link": {
            "linkText": "Privacy policy",
            "title": "Privacy policy",
            "clickThrough": {
              "type": "url",
              "value": "http://corporate.samsclub.com/sams-club-privacy-policy?xid=ftr:privacy-policy"
            },
            "uid": "zA4FzdmZ"
          },
          "emailExclusions": "Email signup isn't currently available in Puerto Rico."
        },
        "publishedDate": 1465534125009,
        "moduleId": "685b1903-8cc3-4c95-a7cb-ebb44f69fefa",
        "module_id": "685b1903-8cc3-4c95-a7cb-ebb44f69fefa",
        "matchedTrigger": {
          "pageType": "global_footer",
          "pageId": null,
          "zone": "signup_zone"
        }
      },
      footer_links_zone: {
        "name": "footer links",
        "type": "GlobalFooter",
        "version": 3,
        "status": "published",
        "schedule": {
          "start": null,
          "end": null,
          "priority": 1,
          "expEnabled": false
        },
        "triggers": [
          {
            "pageType": "global_footer",
            "pageId": null,
            "zone": "footer_links_zone"
          }
        ],
        "targeting": {},
        "configs": {
          "membershipSection": {
            "name": "Membership",
            "subSections": [
              {
                "link": {
                  "linkText": "Join Sam's Club",
                  "title": "Join Sam's Club",
                  "clickThrough": {
                    "type": "url",
                    "value": "http://www.samsclub.com/sams/pagedetails/content.jsp?pageName=aboutSams&xid=ftr:join-sams-club"
                  },
                  "uid": "q3uQKjgv"
                },
                "uid": "BITE2ROG"
              },
              {
                "link": {
                  "linkText": "Renew your membership",
                  "title": "Renew your membership",
                  "clickThrough": {
                    "type": "url",
                    "value": "https://www.samsclub.com/sams/account/signin/renew_new.jsp"
                  },
                  "uid": "KIG6ciOH"
                },
                "uid": "g2Cp0MJL"
              },
              {
                "link": {
                  "linkText": "Register your membership",
                  "title": "Register your membership",
                  "clickThrough": {
                    "type": "url",
                    "value": "https://www.samsclub.com/sams/account/registration/registration.jsp?xid=ftr:register-your-membership"
                  },
                  "uid": "iQwR0YSw"
                },
                "uid": "iI-7JLnB"
              }
            ],
            "uid": "aGfDcAYn"
          },
          "aboutSection": {
            "name": "About",
            "subSections": [
              {
                "link": {
                  "linkText": "Sam's Club corporate",
                  "title": "Sam's Club corporate",
                  "clickThrough": {
                    "type": "url",
                    "value": "http://corporate.samsclub.com/"
                  },
                  "uid": "BRzwAUdU"
                },
                "uid": "zQXC1XcA"
              },
              {
                "link": {
                  "linkText": "Careers",
                  "title": "Careers",
                  "uid": "a1zte8Yq",
                  "clickThrough": {
                    "type": "url",
                    "value": "https://jobs.walmart.com/us/"
                  }
                },
                "uid": "8SlsE1nK"
              },
              {
                "link": {
                  "linkText": "Suppliers",
                  "title": "Supplies",
                  "uid": "DMxGp9N2",
                  "clickThrough": {
                    "type": "url",
                    "value": "http://corporate.walmart.com/suppliers"
                  }
                },
                "uid": "jEw-AgcN"
              },
              {
                "link": {
                  "linkText": "Our brands",
                  "title": "Our brands",
                  "uid": "kGibVeLu",
                  "clickThrough": {
                    "type": "url",
                    "value": "http://www.samsclub.com/sams/pagedetails/content.jsp?pageName=our-brands"
                  }
                },
                "uid": "StQn7-P0"
              }
            ],
            "uid": "l0zgAibn"
          },
          "ordersSection": {
            "name": "Orders",
            "subSections": [
              {
                "link": {
                  "linkText": "Track orders",
                  "title": "Track orders",
                  "clickThrough": {
                    "type": "url",
                    "value": "http://www.samsclub.com/sams/shoppingtools/orderhistory/orderHistory.jsp?xid=ftr:track-orders"
                  },
                  "uid": "lQGiVs7F"
                },
                "uid": "XTe-I8kr"
              },
              {
                "link": {
                  "linkText": "Club Pickup",
                  "title": "Club Pickup",
                  "clickThrough": {
                    "type": "url",
                    "value": "http://www.samsclub.com/sams/smartorder/learnMore.jsp?xid=ftr:club-pickup"
                  },
                  "uid": "Cdj-vTSF"
                },
                "uid": "eJPI9Axw"
              },
              {
                "link": {
                  "linkText": "Returns & refunds",
                  "title": "Returns & refunds",
                  "clickThrough": {
                    "type": "url",
                    "value": "http://www.samsclub.com/returns?xid=ftr:return-refunds"
                  },
                  "uid": "avNN5g1y"
                },
                "uid": "v2t8A8SO"
              },
              {
                "link": {
                  "linkText": "Rating & reviews FAQ",
                  "title": "Rating & reviews FAQ",
                  "clickThrough": {
                    "type": "url",
                    "value": "http://help.samsclub.com/app/answers/detail/a_id/354?xid=ftr:shipping-faqs"
                  },
                  "uid": "5rOZ-Is_"
                },
                "uid": "BpupxGXg"
              }
            ],
            "uid": "k3JAlp6u"
          },
          "helpSection": {
            "name": "Help",
            "subSections": [
              {
                "link": {
                  "linkText": "Help center",
                  "title": "Help center",
                  "clickThrough": {
                    "type": "url",
                    "value": "http://help.samsclub.com/app/?xid=ftr:help-center"
                  },
                  "uid": "ztajNa0-"
                },
                "uid": "PGNMOKq-"
              },
              {
                "link": {
                  "linkText": "Contact us",
                  "title": "Contact us",
                  "clickThrough": {
                    "type": "url",
                    "value": "http://help.samsclub.com/app/answers/detail/a_id/167?xid=ftr:contact-us"
                  },
                  "uid": "UWMqyLUX"
                },
                "uid": "8u1DGkAS"
              },
              {
                "link": {
                  "linkText": "Product recalls",
                  "title": "Product recalls",
                  "clickThrough": {
                    "type": "url",
                    "value": "http://corporate.walmart.com/recalls?xid=ftr:product-recalls"
                  },
                  "uid": "RJw62pdS"
                },
                "uid": "4v33jgrG"
              }
            ],
            "uid": "VbfTOLg1"
          }
        },
        "publishedDate": 1465539618188,
        "moduleId": "5e48afb0-fa03-4eed-b50a-c0d2367dc1ad",
        "module_id": "5e48afb0-fa03-4eed-b50a-c0d2367dc1ad",
        "matchedTrigger": {
          "pageType": "global_footer",
          "pageId": null,
          "zone": "footer_links_zone"
        }
      },
      legal_links_zone: {
        "name": "legal links",
        "type": "LegalLinks",
        "version": 1,
        "status": "published",
        "schedule": {
          "start": null,
          "end": null,
          "priority": 1,
          "expEnabled": false
        },
        "triggers": [
          {
            "pageType": "global_footer",
            "pageId": null,
            "zone": "legal_links_zone"
          }
        ],
        "targeting": {},
        "configs": {
          "legalLinks": [
            {
              "link": {
                "linkText": "Contact us",
                "title": "Contact us",
                "clickThrough": {
                  "type": "url",
                  "value": "http://help.samsclub.com/app/answers/detail/a_id/167"
                },
                "uid": "W9jI2pjr"
              },
              "uid": "MAF_T3n0"
            },
            {
              "link": {
                "linkText": "Terms",
                "title": "Terms",
                "clickThrough": {
                  "type": "url",
                  "value": "http://www.samsclub.com/sams/pagedetails/content.jsp?pageName=terms-and-conditions"
                },
                "uid": "KFOLSteH"
              },
              "uid": "mlKMcc67"
            },
            {
              "link": {
                "linkText": "About our Ads",
                "title": "About our Ads",
                "clickThrough": {
                  "type": "url",
                  "value": "http://www.samsclub.com/sams/pagedetails/content.jsp?pageName=about-our-ads&xid=ftr:about-our-ads"
                },
                "uid": "l1pDUaz5"
              },
              "uid": "QOiIbUGS"
            },
            {
              "link": {
                "linkText": "Privacy",
                "title": "Privacy",
                "clickThrough": {
                  "type": "url",
                  "value": "http://corporate.samsclub.com/sams-club-privacy-policy?xid=ftr:privacy-policy"
                },
                "uid": "ooihsG5F"
              },
              "uid": "KAeezdul"
            },
            {
              "link": {
                "linkText": "California privacy rights",
                "title": "California privacy rights",
                "clickThrough": {
                  "type": "url",
                  "value": "http://corporate.samsclub.com/sams-club-privacy-policy/california-privacy-rights?xid=ftr:ca-privacy-policy"
                },
                "uid": "EJR-yih1"
              },
              "uid": "vA3-ZPZE"
            },
            {
              "link": {
                "linkText": "Get our apps",
                "title": "Get our apps",
                "clickThrough": {
                  "type": "url",
                  "value": "http://www3.samsclub.com/mobile?xid=vanity:mobile"
                },
                "uid": "Q1sUkAkU"
              },
              "uid": "eKLkTM2d"
            }
          ]
        },
        "publishedDate": 1465264493073,
        "moduleId": "59055efc-c6c5-4061-980b-b994d859fe59",
        "module_id": "59055efc-c6c5-4061-980b-b994d859fe59",
        "matchedTrigger": {
          "pageType": "global_footer",
          "pageId": null,
          "zone": "legal_links_zone"
        }
      },
      copyright_zone: {
        "name": "Sams Footer Copyright",
        "type": "Copyright",
        "version": 1,
        "status": "published",
        "schedule": {
          "start": null,
          "end": null,
          "priority": 1,
          "expEnabled": false
        },
        "triggers": [
          {
            "pageType": "global_footer",
            "pageId": null,
            "zone": "copyright_zone"
          }
        ],
        "targeting": {},
        "configs": {
          "copyrightText": "2000 - 2016, Sam's West, Inc. All rights reserved.",
          "icons": [
            {
              "link": {
                "linkText": "facebook",
                "title": "facebook",
                "clickThrough": {
                  "type": "url",
                  "value": "https://www.facebook.com/samsclub?xid=ftr:"
                },
                "uid": "fEc-5NnM"
              },
              "uid": "dILD4LhR"
            },
            {
              "link": {
                "clickThrough": {
                  "type": "url",
                  "value": "https://twitter.com/samsclub?xid=ftr:"
                },
                "linkText": "twitter",
                "title": "twitter",
                "uid": "dKzt3G2A"
              },
              "uid": "nIHKZTG4"
            },
            {
              "link": {
                "linkText": "pinterest",
                "title": "pinterest",
                "clickThrough": {
                  "type": "url",
                  "value": "https://www.pinterest.com/samsclub?xid=ftr:"
                },
                "uid": "xt7WhyPx"
              },
              "uid": "OhV9kCTF"
            }
          ]
        },
        "publishedDate": 1466468854064,
        "moduleId": "cc7dbe48-0dd9-40bf-a2d9-91cfa2f0650f",
        "module_id": "cc7dbe48-0dd9-40bf-a2d9-91cfa2f0650f",
        "matchedTrigger": {
          "pageType": "global_footer",
          "pageId": null,
          "zone": "copyright_zone"
        }
      }
    }
  };

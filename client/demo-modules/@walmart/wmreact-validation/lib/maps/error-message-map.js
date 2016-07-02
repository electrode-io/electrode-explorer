"use strict";

/* jscs: disable */
/* eslint-disable camelcase, max-len */

/**
 * Master Server -> Client Message Mapping
 */

module.exports = {
  // HTTP errors
  404: {
    message: "Not found"
  },

  // Generic Errors
  form_invalid_error: {
    message: "Please correct the errors below."
  },
  unknown: {
    message: "We're having trouble with your request. Please wait a moment and then try again."
  },
  internal_server_error: {
    message: "We're having trouble with your request. Please wait a moment and then try again."
  },
  connectivity_error: {
    message: "We're having trouble with your request. Please wait a moment and then try again."
  },
  invalid_payload: {
    message: "We're having trouble with your request. Please wait a moment and then try again.",
    type: "warning"
  },
  validation: {
    message: "We're having trouble with your request. Please check the form and then try again.",
    keys: {
      postalCode: {
        message: "Please enter a valid zip code.",

        // The invalidate: ... causes Handy to trigger an invalidation
        // on all the matching validators.
        invalidate: ["postalcode"]
      }
    }
  },
  cart_empty: {
    message: "Purchase Contract Request must have a cart id or an item"
  },
  contract_done: {
    message: "Checkout has already been completed for this contract"
  },
  no_card_selected: {
    message: "Please select a card.",
    type: "error"
  },
  no_shipping_address_selected: {
    message: "Please choose a shipping address.",
    type: "error"
  },

  // Cart errors
  cart_delete_failure: {
    message: "We’re sorry. Due to an error, items in your cart can’t be deleted right now. Please try again shortly.",
    type: "warning"
  },
  cart_quantity_failure: {
    message: "We’re sorry. Due to an error, quantities in your cart can’t be changed right now. Please try again shortly.",
    type: "warning"
  },
  move_to_cart_failure: {
    message: "We’re sorry. Due to an error, items in your cart can’t be changed right now. Please try again shortly.",
    type: "warning"
  },
  move_to_sfl_failure: {
    message: "We’re sorry. Due to an error, items can’t be saved for later. Please try again shortly. ",
    type: "warning"
  },
  add_warranty_failure: {
    message: "We’re sorry. Due to an error, items in your cart can’t be changed right now. Please try again shortly.",
    type: "warning"
  },
  remove_warranty_failure: {
    message: "We’re sorry. Due to an error, items in your cart can’t be changed right now. Please try again shortly.",
    type: "warning"
  },

  // Associate discount errors
  invalid_associate_discount: {
    message: "Please make sure your WIN and associate discount number are correct."
  },
  invalid_associate_card_number: {
    message: "Please enter a valid associate discount number."
  },
  invalid_walmart_employee_id: {
    message: "Please enter a valid WIN."
  },

  // Payment Errors
  // See `frontend/js/app/checkout/helpers/payment-errors.js` for processor decline errors.
  payment_credential_mismatch: {
    message: "The information you entered for this card is incorrect. " + "Please double-check it and try again.",
    type: "error"
  },

  // Account errors
  profile_wrong_password: {
    message: "Your current password is incorrect. Please try again."
  },
  profile_email_already_exist: {
    message: "The email address you entered is associated with another Walmart account. " + "Please try again."
  },
  account_already_exist: {
    message: "The email address you entered is associated with another Walmart account. " + "Please try again."
  },
  cannot_change_email: {
    message: "For your security, your email address cannot be changed while we're still processing your current order. " + "Pease try again later."
  },

  // Authentication errors
  user_locked: {
    message: "Your account has been temporarily locked due to too many failed sign-in " + "attempts. <br><br>Please try again in 10 minutes.",
    type: "error"
  },

  user_auth_fail: {
    message: "Your password and email address do not match. <br><br>Please try again or <a href=\"\/account\/resetpassword\">reset your password<\/a>.",
    type: "error"
  },

  ca_user_deleted: {
    message: "Your password and email address do not match. Please try again.",
    type: "error"
  },

  ca_user_not_found: {
    message: "Your password and email address do not match. Please try again.",
    type: "error"
  },

  user_last_failed_attempt: {
    message: "Your password and email address do not match." + "<br><br>Your account will be temporarily locked on your next failed sign-in attempt." + "<br><br>Please try again or <a href=\"\/account\/resetpassword\">reset your password<\/a>",
    type: "error"
  },

  // Gift card errors
  gift_card_must_have_positive_balance: {
    message: "This card has $0.00 balance. Please enter a different gift card below or use" + " another payment method."
  },
  gift_card_zero_balance_with_gift_card: {
    message: "This card has $0.00 balance. Please enter a different gift card below or pay" + " your remaining balance with a credit card."
  },
  gift_card_zero_balance_with_credit_card: {
    message: "This card has $0.00 balance. If you have another gift card, please enter it" + " below."
  },
  invalid_gift_card: {
    message: "The gift card number and PIN you entered do not match. Please try again.",
    type: "error"
  },
  duplicate_gift_card: {
    message: "You've already saved this gift card. Please cancel and select it above.",
    type: "error"
  },
  payment_applied_multiple_times: {
    message: "You've already saved this gift card. Please cancel and select it above."
  },

  // Pickup Person
  duplicate_pickup_person: {
    message: "Please enter different names for your two pickup people.",
    type: "error"
  },

  // State Restrictions
  state_restriction: {
    perishable_flowers: {
      message: "Flowers are perishable and, due to carrier restrictions," + " can't be delivered to some locations including Alaska and Hawaii." + " What would you like to do?"
    },
    perishable_steak: {
      message: "Steaks are perishable and, due to carrier restrictions," + " can't be delivered to some locations including Alaska and Hawaii." + " What would you like to do?"
    },
    ca_emission_standards: {
      message: "At least one of your items doesn't comply with California emission standards." + " What would you like to do?"
    },
    radar_detectors: {
      message: "The Commonwealth of Virginia and the District of Columbia prohibit the sale" + " of radar detectors. What would you like to do?"
    },
    metabolife_id_nb: {
      message: "Metabolife products can't be shipped to Idaho and Nebraska due" + " to state restrictions. What would you like to do?"
    },
    wine_state: {
      message: "Wine can't be shipped to the address you entered due to state restrictions." + " What would you like to do?"
    },
    cannot_ship_cr_apo_fpo: {
      message: "At least one of your items can't be delivered to some locations," + " including APO/FPO addresses, due to carrier restrictions. What would you like to do?"
    },
    cannot_ship_cr_ca: {
      message: "At least one of your items can't be shipped to California due to" + " state restrictions. What would you like to do?"
    },
    cannot_ship_cr_po_boxes: {
      message: "At least one of your items can't be delivered to some locations," + " including post office boxes, due to carrier restrictions. What would you like to do?"
    },
    cannot_ship_cr_hi_ak: {
      message: "At least one of your items can't be delivered to some locations," + " including Alaska and Hawaii, due to carrier restrictions. What would you like to do?"
    },
    cannot_deliver_cr: {
      message: "At least one of your items can't be delivered to some locations" + " due to carrier restrictions. What would you like to do?"
    },
    not_available_for_sale: {
      message: "Not available for sale in your state"
    },
    ship_home_only: {
      message: "Ship to home only"
    },
    store_pickup_only: {
      message: "For store pick up only"
    },
    sale_na_instate: {
      message: "One or more of your plans are not currently available for sale in your state." + " What would you like to do?"
    },
    cannot_ship_to_delaware: {
      message: "At least one of your items can't be shipped to Delaware due to" + " state restrictions. What would you like to do?"
    },
    cannot_ship_to_idaho: {
      message: "At least one of your items can't be shipped to Idaho due to" + " state restrictions. What would you like to do?"
    },
    cannot_ship_to_new_jersey: {
      message: "At least one of your items can't be shipped to New Jersey due to" + " state restrictions. Please go back and remove this item from your order" + " or ship to a different address."
    },
    cannot_ship_to_new_york: {
      message: "At least one of your items can't be shipped to New York due to" + " state restrictions. What would you like to do?"
    },
    cannot_ship_to_sr_california: {
      message: "At least one of your items can only be shipped to addresses in" + " California due to state restrictions. What would you like to do?"
    },
    cannot_ship_to_sr_address: {
      message: "At least one of your items can't be shipped to the address you entered due to" + " state restrictions. What would you like to do?"
    },
    cannot_ship_to_sr_address_1: {
      message: "At least one of your items can't be shipped to the address you entered due to" + " state restrictions. What would you like to do?"
    },
    cannot_ship_to_state_legis: {
      message: "At least one of your items can't be shipped to the address you entered due to" + " state restrictions. What would you like to do?"
    },
    cannot_ship_to_sr_address_2: {
      message: "At least one of your items can't be shipped to the address you entered due to" + " state restrictions. What would you like to do?"
    },
    cannot_ship_to_maryland: {
      message: "At least one of your items can't be shipped to Maryland due to" + " state restrictions. What would you like to do?"
    },
    cannot_ship_to_puerto_rico: {
      message: "At least one of your items can't be delivered to Puerto Rico due to carrier or" + " legal restrictions. What would you like to do?"
    },
    cannot_ship_to_wyoming_montana: {
      message: "At least one of your items can't be shipped to Wyoming and Montana due to state" + " restrictions. What would you like to do?"
    },
    cannot_ship_to_sr_address_3: {
      message: "At least one of your items can't be shipped to the address you entered due to" + " state restrictions. What would you like to do?"
    },
    cannot_ship_to_sr_address_4: {
      message: "At least one of your items can't be shipped to the address you entered due to" + " state restrictions. What would you like to do?"
    },
    cannot_ship_to_sr_address_5: {
      message: "At least one of your items can't be shipped to the address you entered due to" + " state restrictions. What would you like to do?"
    },
    cannot_ship_to_sr_address_6: {
      message: "At least one of your items can't be shipped to the address you entered due to" + " state restrictions. What would you like to do?"
    },
    not_available_for_sale_1: {
      message: "Not available for sale in your state. What would you like to do?"
    },
    not_available_for_sale_2: {
      message: "Not available for sale in your state. What would you like to do?"
    },
    cannot_ship_to_sr_california_1: {
      message: "At least one of your items can't be shipped to California due to" + " state restrictions. What would you like to do?"
    },
    cannot_ship_to_pr_address: {
      message: "At least one of your items can't be delivered to some locations due" + " to partner restrictions. What would you like to do?"
    },
    cannot_ship_to_michigan: {
      message: "At least one of your items can't be shipped to Michigan due to" + " state restrictions. What would you like to do?"
    },
    not_available_for_sale_pr: {
      message: "At least one of your items is not available for sale in Puerto Rico." + " What would you like to do?"
    },
    cannot_ship_to_wisconsin: {
      message: "At least one of your items can't be shipped to Wisconsin due to" + " state restrictions. What would you like to do?"
    },
    cannot_ship_to_virginia: {
      message: "At least one of your items can't be shipped to Virginia due to" + " state restrictions. What would you like to do?"
    },
    cannot_ship_to_hi_ak_apo_fpo_cr: {
      message: "At least one of your items can't be shipped to some locations," + " including Hawaii, Alaska, US Protectorates, and APO/FPO addresses due to" + " carrier restrictions. What would you like to do?"
    },
    cannot_ship_to_sr_address_7: {
      message: "At least one of your items can't be shipped to the state you entered" + " due to state restrictions. What would you like to do?"
    },
    cannot_ship_to_sr_address_8: {
      message: "At least one of your items can't be shipped to the state you entered" + " due to state restrictions. What would you like to do?"
    },
    cannot_ship_to_sr_georgia: {
      message: "At least one of your items can't be shipped to Georgia due to" + " state restrictions. What would you like to do?"
    },
    cannot_ship_to_sr_maine: {
      message: "At least one of your items can't be shipped to Maine due to state restrictions." + " What would you like to do?"
    },
    cannot_ship_to_sr_address_9: {
      message: "At least one of your items can't be shipped to the state you entered due to" + " state restrictions. What would you like to do?"
    },
    cannot_ship_to_sr_illinois: {
      message: "At least one of your items can't be shipped to Illinois due to" + " state restrictions. What would you like to do?"
    },
    cannot_ship_to_sr_california_2: {
      message: "At least one of your items can't be shipped to California due to" + " state restrictions. What would you like to do?"
    },
    cannot_ship_cr_apo_fpo_1: {
      message: " At least one of your items can't be shipped to some locations," + " including US Protectorates  and APO/FPO addresses due to carrier restrictions." + " What would you like to do?"
    },
    cannot_ship_to_ga_ne_nv_ri_or_cr: {
      message: "At least one of your items can't be shipped to some locations," + " including GA, NE, NV," + " RI, OR addresses due to carrier restrictions. What would you like to do?"
    },
    cannot_ship_to_sr_ma: {
      message: "At least one of your items can't be shipped to Massachusetts due to" + " state restrictions." + " What would you like to do?"
    },
    cannot_ship_to_sr_al_ga_ks_la_ms_tx_va: {
      message: "At least one of your items can't be shipped to the states of" + " AL, GA, KS, LA, MS, TX, or VA due to state restrictions." + " What would you like to do?"
    },
    cannot_ship_to_sr_ar: {
      message: "At least one of your items can't be shipped to AR due to state restrictions." + " What would you like to do?"
    },
    cannot_ship_to_sr_ar_hi_ma_mi_nc_nj_ny_wa: {
      message: "At least one of your items can't be shipped to the states of" + " AR, HI, MA, MI, NC, NJ, NY or WA due to state restrictions." + " What would you like to do?"
    },
    cannot_ship_to_sr_address_10: {
      message: "At least one of your items can't be shipped to the address you entered due to" + " state restrictions. What would you like to do?"
    },
    cannot_ship_to_sr_la: {
      message: "At least one of your items can't be shipped to Louisiana due to" + " state restrictions. What would you like to do?"
    },
    louisiana_restriction: {
      message: "Louisiana restriction"
    },
    cannot_ship_to_sr_address_11: {
      message: "At least one of your items can't be shipped to the address you entered due to" + " state restrictions. What would you like to do?"
    },
    cannot_ship_to_new_jersey_1: {
      message: "At least one of your items can't be shipped to New Jersey due to" + " state restrictions. What would you like to do?"
    },
    cannot_ship_to_sr_address_12: {
      message: "At least one of your items can't be shipped to the address you entered due to" + " state restrictions. What would you like to do?"
    },
    cannot_ship_to_cr_address: {
      message: "At least one of your items can't be delivered to some locations due to" + " carrier restrictions. What would you like to do?"
    },
    cannot_ship_to_sr_vermont: {
      message: "At least one of your items can't be shipped to Vermont due to" + " state restrictions. What would you like to do?"
    },
    cannot_ship_to_sr_ct: {
      message: "At least one of your items can't be shipped to Connecticut due to" + " state restrictions. What would you like to do?"
    },
    cannot_ship_to_sr_maine_1: {
      message: "At least one of your items can't be shipped to Maine due to" + " state restrictions. What would you like to do?"
    },
    cannot_ship_to_sr_new_hampshire: {
      message: "At least one of your items can't be shipped to New Hampshire due to" + " state restrictions. What would you like to do?"
    },
    cannot_ship_to_sr_rhode_island: {
      message: "At least one of your items can't be shipped to Rhode Island due to" + " state restrictions. What would you like to do?"
    },
    cannot_ship_to_sr_indiana: {
      message: "At least one of your items can't be shipped to Indiana due to" + " state restrictions. What would you like to do?"
    },
    cannot_ship_to_sr_pa: {
      message: "At least one of your items can't be shipped to Pennsylvania due to" + " state restrictions. What would you like to do?"
    },
    cannot_ship_to_sr_ok: {
      message: "At least one of your items can't be shipped to Oklahoma due to" + " state restrictions. What would you like to do?"
    },
    cannot_ship_to_sr_address_13: {
      message: "Due to restrictions, at least one of your items can't be shipped to" + " this address. What would you like to do?"
    },
    cannot_ship_to_sr_address_14: {
      message: "Due to restrictions, at least one of your items can't be shipped to" + " this address. What would you like to do?"
    },
    cannot_ship_to_sr_address_15: {
      message: "Due to restrictions, at least one of your items can't be shipped to" + " this address. What would you like to do?"
    },
    cannot_ship_to_sr_address_16: {
      message: "Due to restrictions, at least one of your items can't be shipped to" + " this address. What would you like to do?"
    },
    cannot_ship_to_sr_address_17: {
      message: "Due to restrictions, at least one of your items can't be shipped to" + " this address. What would you like to do?"
    },
    cannot_ship_to_sr_address_18: {
      message: "Due to restrictions, at least one of your items can't be shipped to" + " this address. What would you like to do?"
    },
    cannot_ship_to_sr_address_19: {
      message: "Due to restrictions, at least one of your items can't be shipped to" + " this address. What would you like to do?"
    },
    cannot_ship_to_sr_address_20: {
      message: "Due to restrictions, at least one of your items can't be shipped to" + " this address. What would you like to do?"
    },
    cannot_ship_to_sr_address_21: {
      message: "Due to restrictions, at least one of your items can't be shipped to" + " this address. What would you like to do?"
    },
    cannot_ship_to_sr_address_22: {
      message: "Due to restrictions, at least one of your items can't be shipped to" + " this address. What would you like to do?"
    },
    cannot_ship_to_sr_address_23: {
      message: "Due to restrictions, at least one of your items can't be shipped to" + " this address. What would you like to do?"
    },
    cannot_ship_to_sr_address_24: {
      message: "Due to restrictions, at least one of your items can't be shipped to" + " this address. What would you like to do?"
    },
    cannot_ship_to_sr_address_25: {
      message: "Due to restrictions, at least one of your items can't be shipped to" + " this address. What would you like to do?"
    },
    cannot_ship_to_sr_address_26: {
      message: "Due to restrictions, at least one of your items can't be shipped to" + " this address. What would you like to do?"
    },
    cannot_ship_to_sr_address_27: {
      message: "Due to restrictions, at least one of your items can't be shipped to" + " this address. What would you like to do?"
    },
    cannot_ship_to_sr_address_28: {
      message: "Due to restrictions, at least one of your items can't be shipped to" + " this address. What would you like to do?"
    },
    cannot_ship_to_sr_tx: {
      message: "At least one of your items can't be shipped to Texas due to" + " state restrictions. What would you like to do?"
    },
    cannot_ship_to_sr_address_29: {
      message: "Due to restrictions, at least one of your items can't be shipped to" + " this address. What would you like to do?"
    },
    cannot_ship_to_sr_address_30: {
      message: "Due to restrictions, at least one of your items can't be shipped to" + " this address. What would you like to do?"
    },
    cannot_ship_to_sr_address_31: {
      message: "Due to restrictions, at least one of your items can't be shipped to" + " this address. What would you like to do?"
    },
    cannot_ship_to_sr_address_32: {
      message: "Due to restrictions, at least one of your items can't be shipped to" + " this address. What would you like to do?"
    },
    cannot_ship_to_sr_address_33: {
      message: "Due to restrictions, at least one of your items can't be shipped to" + " this address. What would you like to do?"
    },
    cannot_ship_to_sr_address_34: {
      message: "Due to restrictions, at least one of your items can't be shipped to" + " this address. What would you like to do?"
    },
    cannot_ship_to_sr_address_35: {
      message: "Due to restrictions, at least one of your items can't be shipped to" + " this address. What would you like to do?"
    },
    cannot_ship_to_sr_address_36: {
      message: "Due to restrictions, at least one of your items can't be shipped to" + " this address. What would you like to do?"
    },
    cannot_ship_to_sr_address_37: {
      message: "Due to restrictions, at least one of your items can't be shipped to" + " this address. What would you like to do?"
    },
    cannot_ship_to_sr_dc: {
      message: "At least one of your items can't be shipped to Washington, DC due to" + " state restrictions. What would you like to do?"
    },
    cannot_ship_to_sr_maine_2: {
      message: "At least one of your items can't be shipped to Maine due to" + " state restrictions. What would you like to do?"
    },
    cannot_ship_to_sr_california_3: {
      message: "At least one of your items can't be shipped to CA due to" + " state restrictions. What would you like to do?"
    },
    e_recycle_nosale_tx: {
      message: "Due to Electronics Recycling the following Items are not available for sale " + "in the State of Texas."
    },
    e_recycle_nosale_tx_1: {
      message: "Due to Electronics Recycling the following Items are not available for sale " + "in the State of Texas."
    },
    na_residents_wmt_ca: {
      message: "Not Available to Residents or Walmart Stores in California"
    },
    cannot_ship_to_sr_minnesota: {
      message: "At least one of your items can't be shipped to Minnesota due to" + " state restrictions. What would you like to do?"
    },
    cannot_ship_to_chicago: {
      message: "Due to local government restrictions, at least one of your items can't be" + " shipped to City of Chicago. What would you like to do?"
    },
    cannot_ship_to_sr_wa: {
      message: "At least one of your items can't be shipped to Washington due to" + " state restrictions. What would you like to do?"
    },
    cannot_ship_to_sr_or_wa: {
      message: "At least one of your items can't be shipped to Oregon, Washington due to" + " state restrictions. What would you like to do?"
    },
    cannot_ship_to_sr_state: {
      message: "At least one of your items can't be shipped to the selected state due to" + " restrictions. What would you like to do?"
    },
    cannot_ship_to_sr_state_1: {
      message: "At least one of your items can't be shipped to the selected state due to" + " restrictions. What would you like to do?"
    },
    cannot_ship_to_sr_ms_tx_va: {
      message: "At least one of your items can't be shipped to MS, TX and VA due to" + " restrictions. What would you like to do?"
    },
    cannot_ship_to_sr_la_ks_ga_al: {
      message: "At least one of your items can't be shipped to LA, KS, GA and AL due to" + " restrictions. What would you like to do?"
    },
    cannot_ship_to_sr_nc: {
      message: "At least one of your items can't be shipped to North Carolina due to" + " state restrictions. What would you like to do?"
    },
    cannot_ship_to_sr_ca_ct_de_il_in_ma_md_me_mi_nj_ny_oh_pa_ri: {
      message: "At least one of your items can't be shipped to the address you entered" + " due to state restrictions (CA,CT,DE,IL,IN,MA,MD,ME,MI,NJ,NY,OH,PA and RI)." + " What would you like to do?"
    },
    cannot_ship_to_gr_buffalo_ny: {
      message: "Due to local government restrictions, at least one of your items can't be" + " shipped to Buffalo, NY. What would you like to do?"
    },
    cannot_ship_to_gr_springfield_or: {
      message: "Due to local government restrictions, at least one of your items can't be" + " shipped to Springfield, OR. What would you like to do?"
    },
    cannot_ship_to_sr_california_4: {
      message: "At least one of your items can't be shipped to CA due to state" + " restrictions. What would you like to do?"
    },
    cannot_ship_to_hi_ak_apo_fpo_cr_1: {
      message: "At least one of your items can't be shipped to some locations," + " including Alaska, Hawaii and US Protectorates due to carrier restrictions." + " What would you like to do?"
    },
    cannot_ship_to_sr_address_38: {
      message: "At least one of your items can't be shipped to the address you entered due to" + " state restrictions. What would you like to do?"
    },
    cannot_ship_to_sr_nj: {
      message: "At least one of your items can't be shipped to NJ due to state restrictions." + " What would you like to do?"
    },
    cannot_ship_to_sr_address_39: {
      message: "We are sorry, but at least one of your items can't be shipped to" + " your address due to state restrictions. What would you like to do?"
    },
    cannot_ship_to_hi_ak_apo_fpo_cr_2: {
      message: "At least one of your items can't be shipped to some locations" + " including, APO/FPO, PO Boxes, and US Protectorates. What would you like to do?"
    },
    cannot_ship_to_sr_al: {
      message: "At least one of your items can't be shipped to Alabama due to state" + " restrictions. What would you like to do?"
    },
    cannot_ship_to_sr_ms: {
      message: "At least one of your items can't be shipped to Mississippi due to state" + " restrictions. What would you like to do?"
    },
    cannot_ship_to_sr_nm: {
      message: "At least one of your items can't be shipped to New Mexico due to state" + " restrictions. What would you like to do?"
    },
    cannot_ship_to_sr_hi: {
      message: "At least one of your items can't be shipped to Hawaii due to state" + " restrictions. What would you like to do?"
    },
    cannot_ship_to_cr_us_protec: {
      message: "At least one of your items can't be shipped to US Protectorates due to state" + " restrictions. What would you like to do?"
    },
    cannot_ship_to_or: {
      message: "At least one of your items can't be shipped to Oregon due to state" + " restrictions. What would you like to do?"
    },
    cannot_ship_to_sc: {
      message: "At least one of your items can't be shipped to South Carolina due to state" + " restrictions. What would you like to do?"
    },
    cannot_ship_to_ks: {
      message: "At least one of your items can't be shipped to Kansas due to state" + " restrictions. What would you like to do?"
    },
    cannot_ship_to_ga: {
      message: "At least one of your items can't be shipped to GA due to state" + " restrictions. What would you like to do?"
    },
    cannot_ship_to_ks_state_rest: {
      message: "At least one of your items can't be shipped to KS due to state" + " restrictions. What would you like to do?"
    },
    cannot_ship_to_some_loc: {
      message: "At least one of your items can't be shipped to some locations." + " What would you like to do?"
    },
    cannot_ship_to_tn: {
      message: "At least one of your items can't be shipped to Tennessee due to state" + " restrictions. What would you like to do?"
    },
    cannot_ship_to_sd: {
      message: "At least one of your items can't be shipped to South Dakota due to state" + " restrictions. What would you like to do?"
    },
    cannot_ship_to_ar: {
      message: "At least one of your items can't be shipped to Arkansas due to state" + " restrictions. What would you like to do?"
    }
  }
};

/* jscs: enable */
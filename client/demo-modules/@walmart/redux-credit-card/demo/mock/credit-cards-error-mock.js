const ccData = [{
  lastFour: "1111",
  firstName: "John",
  lastName: "Snow",
  cardExpiryDate: "2020-07-15",
  cardType: "AMEX",
  id: "1",
  addressLineOne: "860 w california ave",
  city: "sunnyvale",
  state: "CA",
  postalCode: "94086",
  phone: "8123823828"
}, {
  lastFour: "2222",
  firstName: "John",
  lastName: "Snow",
  cardExpiryDate: "2018-01-15",
  cardType: "VISA",
  id: "2",
  addressLineOne: "860 w california ave",
  city: "sunnyvale",
  state: "CA",
  postalCode: "94086",
  phone: "8123823828"
}];

export default [
  {
    regex: /\/customer\/:CID\/credit-card$/,
    method: "post",
    res: () => { throw {"statusCode":400,"error":"Bad Request","message":"firstName is required","validation":{"source":"payload","keys":["firstName"]}} }
  },
  {
    regex: /\/customer\/:CID\/credit-card$/,
    res: () => Array.prototype.slice.call(ccData)
  },
  {
    regex: /\/customer\/:CID\/credit-card\/(.*)/,
    method: "delete",
    res: () => { throw {"statusCode":400,"error":"Bad Request","message":"firstName is required","validation":{"source":"payload","keys":["firstName"]}} }
  },
  {
    regex: /\/customer\/:CID\/credit-card\/(.*)/,
    method: "put",
    res: () => { throw {"statusCode":400,"error":"Bad Request","message":"firstName is required","validation":{"source":"payload","keys":["firstName"]}} }
  }
];

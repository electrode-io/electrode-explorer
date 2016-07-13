const ccData = [{
  lastFour: "1111",
  firstName: "John",
  lastName: "Snow",
  cardExpiryDate: "2013-07-15",
  cardType: "AMEX",
  id: "1",
  addressLineOne: "860 w california ave",
  city: "sunnyvale",
  state: "CA",
  postalCode: "94086",
  phone: "8123823828"
  },
  {
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
  },
  {
  lastFour: "3333",
  firstName: "John",
  lastName: "Snow",
  cardExpiryDate: "2018-01-15",
  cardType: "VISA",
  id: "3",
  addressLineOne: "860 w california ave",
  city: "sunnyvale",
  state: "CA",
  postalCode: "94086",
  phone: "8123823828"
}];

let id = 3;
export default [
  {
    regex: /\/api\/customer\/:CID\/credit-card$/,
    method: "post",
    res: ({params: {body}}) => {
      body = JSON.parse(body);
      var extendedBody = Object.assign({
        id: (++id).toString(),
        lastFour: "1111",
        cardExpiryDate: `${body.expiryYear}-${body.expiryMonth}-15`
      }, body);

      ccData.push(extendedBody);
      return extendedBody;
    }
  },
  {
    regex: /\/api\/customer\/:CID\/credit-card$/,
    res: () => Array.prototype.slice.call(ccData)
  },
  {
    regex: /\/api\/customer\/:CID\/credit-card\/(.*)/,
    method: "delete",
    res: (_, [,id]) => ccData.splice(ccData.findIndex((cc) => cc.id === id), 1)[0]
  },
  {
    regex: /\/api\/customer\/:CID\/credit-card\/(.*)/,
    method: "put",
    res: ({params:{body}}, [,id]) => {
      const card = ccData.find(cc => cc.id === id);
      return Object.assign(card, JSON.parse(body));
    }
  },
  {
    regex: /\/subscriptions/,
    res: () => {return 'hi'}
  }
];

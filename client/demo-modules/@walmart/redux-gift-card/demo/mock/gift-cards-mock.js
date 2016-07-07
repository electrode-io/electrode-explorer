const ccData = [{
  "id": "1234",
  "label": "Arya Stark",
  "lastFour": "2222",
  "balance": 500,
  "currency": "USD",
  "history": [
    {
      "date": 1445939700292,
      "amount": -1,
      "currency": "USD",
      "balance": 989,
      "type": "redemption",
      "info": "2736"
    },
    {
      "date": 1445904360292,
      "amount": 990,
      "currency": "USD",
      "balance": 990,
      "type": "refund",
      "info": "9115"
    },
    {
      "date": 1443583800292,
      "amount": 500,
      "currency": "USD",
      "balance": 500,
      "type": "create",
      "info": "9115"
    }
  ]
},
  {
    "id": "1235",
    "label": "Jonh Snow",
    "lastFour": "0001",
    "balance": 666,
    "currency": "USD"
  }
];

const historyCall = (id) => ({
  id,
  "history": [
    {
      "date": 1445939700292,
      "amount": -1,
      "currency": "USD",
      "balance": 12,
      "type": "redemption",
      "info": "2736"
    },
    {
      "date": 1445904360292,
      "amount": 990,
      "currency": "USD",
      "balance": 22,
      "type": "refund",
      "info": "9115"
    }]
});

let id = 3;
export default [
  {
    regex: /\/customer\/:CID\/gift-card$/,
    method: "post",
    res: ({params: {body: json}}) => {
      const body = JSON.parse(json);
      body.lastFour = body.number.slice(-4);
      body.balance = 500;
      body.currency = "USD";
      ccData.push(body);
      body.id = (++id).toString();
      return body;
    }
  },
  {
    regex: /\/customer\/:CID\/gift-card$/,
    res: () => Array.prototype.slice.call(ccData)
  },
  {
    regex: /\/customer\/:CID\/gift-card\/(.*)/,
    method: "delete",
    res: (_, [,id]) => ccData.splice(ccData.findIndex((cc) => cc.id === id), 1)[0]
  },
  {
    regex: /\/customer\/:CID\/gift-card\/(.*)/,
    method: "get",
    sleep: 2000,
    res: (_, [,id]) => historyCall(id)
  }
];

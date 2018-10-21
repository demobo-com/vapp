const fetch = require('node-fetch');

const getToken = () => {
  const tokenAPI = 'https://api-stg.syf.com/oauth2/v1/token';
  const body = 'grant_type=client_credentials&client_id=tG7IIcGGiYz6fRLArCHUvkfjZfqBKOkl&client_secret=EzYzsVqUtwh3YRwP';
  const tokenOption = {
    method: 'POST',
    body,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': new Buffer(body).length,
    },
  };
  return fetch(tokenAPI, tokenOption)
    .then((d) => d.json())
    .then((d) => d.access_token);
};

const getTransactions = () => getToken().then((accessToken) => {
  const url = 'https://api-stg.syf.com/m2020';
  const option = {
    method: 'GET',
    headers: { Authorization: `Bearer ${accessToken}` },
  };
  const getTransaction = (n) => {
    const nth = n === 1 ? '' : `/${n}`;
    return fetch(`${url}/credit/customers/5/transactions${nth}`, option)
      .then((d) => d.json());
  };
  return Promise.all([1, 2, 3, 4, 5, 6, 7, 8, 9].map(getTransaction));
});

getTransactions().then(console.log);

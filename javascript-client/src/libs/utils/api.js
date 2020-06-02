const axios = require('axios');
const ls = require('local-storage');

export default async function callApi(method, url, data, value) {
  const finalUrl = process.env.REACT_APP_BASE_URL + url;
  await axios({
    method,
    url: finalUrl,
    data: {
      ...data,
    },
  })
    .then((response) => {
      ls.set('token', response.data.data);
      console.log(ls.get('token'))
    })
    .catch((error) => {
        value(error.message, 'error');
    });
}

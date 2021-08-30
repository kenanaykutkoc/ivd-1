const qs = require('qs');

const connector = ({ fetch }) => (url, { body }) => fetch(url, {
  headers: {
    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
  },
  body: qs.stringify(body),
  method: 'POST',
  mode: 'cors',
})
  .then((res) => res.json())
  .then(({ data: res, messages }) => ({
    ...res,
    status: messages
      ? messages[0].includes(
        'GİRDİĞİNİZ BİLGİLERDE HATA VARDIR. KONTROL EDEREK TEKRAR DENEYEBİLİRSİNİZ',
      )
      : Object.keys(res || {}).length !== 0,
  }));
module.exports = connector;

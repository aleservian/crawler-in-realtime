import request from 'request-promise';
import cheerio from 'cheerio';

const options = {
  method: 'GET',
  url: '',
  headers: {
    'User-Agent': 'request'
  },
  transform: function (body) {
      return cheerio.load(body);
  }
}
const webCrawler = (url) => {
  const optionsRequest = Object.assign({},options,{url});
  return request(optionsRequest)
    .then($ => {
      return $('#quotes_summary_current_data .arial_26').text();
    })
    .catch(error => {
      console.log(error)
    })
}

export default webCrawler;
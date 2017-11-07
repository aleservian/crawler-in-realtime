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
      const value = $('#quotes_summary_current_data .arial_26').text();
      const arrow = $("#quotes_summary_current_data .left").children('.top');
      const status = (arrow.hasClass('upArrow')) ? 'up' : 
            (arrow.hasClass('downArrow')) ?  'down' : 'stable';
            
      return {value, status};
    })
    .catch(error => {
      console.log(error)
    })
}

export default webCrawler;
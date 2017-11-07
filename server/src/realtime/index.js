import webCrawler from '../webCrawler';
import urls from './urls';

const realtime = (io) => {
  io.on('connection', (socket) => {
    const time = setInterval(()=> {
      Promise.all([webCrawler(urls.ibov),webCrawler(urls.miniBovespa)])
        .then(([ibov, miniBovespa]) => {
          console.log(miniBovespa)
          console.log(ibov)
          io.emit('financial-market', {miniBovespa, ibov});
        })
    }, 3000);
  });
}

export default realtime;
import webCrawler from '../webCrawler';
import urls from './urls';
import moment from 'moment';

const realtime = (io) => {
  io.on('connection', (socket) => {
    const time = setInterval(()=> {
      Promise.all([webCrawler(urls.ibov),webCrawler(urls.miniBovespa)])
        .then(([ibov, miniBovespa]) => {
          io.emit('financial-market', {miniBovespa, ibov});
        })
    }, 3000);
    socket.on('disconnect', () => {
      clearInterval(time);
    })
  });
}

export default realtime;
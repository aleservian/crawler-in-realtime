var io = io();
var countResult = document.getElementById('count-result');

io.on('financial-market', function(data){
  countResult.textContent = data;
})
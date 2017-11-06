var io = io();
var countResult = document.getElementById('count-result');

io.on('visit', function(data){
  countResult.textContent = data;
})
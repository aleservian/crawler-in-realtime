var io = io();
var miniBovespaDom = document.getElementById('mini-indice');
var ibovDom = document.getElementById('ibov');
var countResultDom = document.getElementById('count-result');

var convertNumber = function(stringNumber){
  var stringFloat = stringNumber.replace(".", "").replace(",", ".");
  return parseInt(stringFloat);
}

var getArrow = function(status){
  var result = (status==='up') ? '⇧' : 
               (status==='down') ?  '⇩' : '⇨';

  return result;
}

io.on('financial-market', function(data){
  var miniBovespa = Object.assign({}, data.miniBovespa);
  var ibov = Object.assign({}, data.ibov);
  var miniBovespaValue = miniBovespa.value;
  var ibovValue = ibov.value;
  var miniBovespStatus = miniBovespa.status;
  var ibovStatus = ibov.status;
  var miniBovespaResult = convertNumber(miniBovespaValue);
  var ibovResult = convertNumber(ibovValue);
  var miniBovespaArrow = getArrow(miniBovespStatus);
  var ibovArrow = getArrow(ibovStatus);
  var result = miniBovespaResult - ibovResult;

  miniBovespaDom.textContent = miniBovespaArrow +' '+ miniBovespaValue;
  miniBovespaDom.className = miniBovespStatus;

  ibovDom.textContent = ibovArrow +' '+ ibovValue;
  ibovDom.className = ibovStatus;

  countResultDom.textContent = miniBovespaArrow +' '+ result;
  countResultDom.className = miniBovespStatus;
})

io.on('disconnect', function(){
  console.log('failed')
})

io.on('reconnect', function(){
  console.log('reconnect')
})
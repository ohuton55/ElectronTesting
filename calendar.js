const yymmdd = document.getElementById('yymmdd');
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDate();
yymmdd.innerText = `${year}/${month}/${day}(wed)`

const yymmdd = document.getElementById('yymmdd');
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDate();
var wDay = date.getDay();
var weekChars = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]

yymmdd.innerText = `${year}/${month}/${day}(${weekChars[wDay]})`

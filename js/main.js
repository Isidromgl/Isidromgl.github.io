'use strict';
var element = document.getElementById('studies');
element.style="color:white" ;
console.log("element",element.getAttribute("style"));
var json;
$.getJSON('js/estudios.json',function(data){
  json = data;
  console.log('Recuperamos datos');
  console.log(data);
$.each(json["education"], function(i, ed){
$("table.table").append("<tr><td>" + ed.company + "</td><td>" + ed.position + "</td><td>" + ed.location + "</td><td>" + ed.period + "</td></tr>");
});
});
var js;
$.getJSON('js/comp.json',function(data){
  js= data;
  console.log('Recuperamos datos');
  console.log(data);
$.each(js["complementary"], function(i, com){
$("table.table2").append("<tr><td>" + com.company + "</td><td>" + com.position + "</td><td>" + com.location + "</td><td>" + com.time + "</td><td>" + com.period + "</td></tr>");
});
});

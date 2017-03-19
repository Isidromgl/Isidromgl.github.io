'use strict';
var element = document.getElementById('studies');
element.style="color:white" ;
console.log("element",element.getAttribute("style"));
var json;
$.getJSON('js/estudios.json',function(data){
  json = data;
  console.log('Recuperamos datos');
$.each(json["education"], function(i, ed){
$("table.table").append("<tr><td>" + ed.company + "</td><td>" + ed.position + "</td><td>" + ed.location + "</td><td>" + ed.period + "</td></tr>");
});
});

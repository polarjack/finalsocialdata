var fs = require("fs");

var csv = require("fast-csv");

var pixnet = require("./pixnet.json");
var ptt = require("./contentver.json");

pixnet.table.sort((a, b) => {
  return b.weight - a.weight
})

ptt.table.sort((a, b) => {
  return b.weight - a.weight
})


for(var i = 0; i < 10; i++) {

  console.log("pixnet "+ pixnet.table[i].title + ": " + pixnet.table[i].weight)
}

for(var i = 0; i < 10; i++) {
  console.log("PTT "+ ptt.table[i].title + ": " + ptt.table[i].weight)
}

var pixcount = 0;
var pttcount = 0;

pixnet.table.map((v) => {
  if(v.weight == 0)
    pixcount++
})

ptt.table.map((v) => {
  if(v.weight == 0)
    pttcount++
})
console.log("pix: " + pixcount, "ptt: " + pttcount)

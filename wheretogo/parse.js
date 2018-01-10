var fs = require("fs");

var csv = require("fast-csv");
var stream = fs.createReadStream("wheretogo.csv");

var output = { table: []};

var csvStream = csv()
  .on("data", function(data) {
    // console.log(data[0])
    var temp = {
      title: data[1],
      position: { lat: Number(data[4]), lng: Number(data[5]) }
    };
    output.table.push(temp)
    // console.log(data)
    // console.log(data[1]);
    // console.log(data[2]);
    // console.log(data[3]);
    // console.log(data[4]);
    // console.log(data[5]);
    // console.log(data[6]);
    
  })
  .on("end", function() {
    console.log("done");
  });

stream.pipe(csvStream);

setTimeout(() => {
  var json = JSON.stringify(output)
  fs.writeFile('wheretogo.json', json, 'utf8', function (err, data) {
    console.log("done")
  });
}, 5000);

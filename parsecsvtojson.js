var fs = require("fs");

var csv = require("fast-csv");
var stream = fs.createReadStream("subway.csv");

var output = { table: []};

var csvStream = csv()
  .on("data", function(data) {
    // console.log(data[0])
    var temp = {
      title: data[2],
      position: { lat: data[3].toNumber(), lng: data[4].toNumber() }
    };
    output.table.push(temp)
    console.log(data[2]);
    console.log(data[3]);
    console.log(data[4]);
  })
  .on("end", function() {
    console.log("done");
  });

stream.pipe(csvStream);

setTimeout(() => {
  var json = JSON.stringify(output)
  fs.writeFile('myjsonfile.json', json, 'utf8', function (err, data) {
    console.log("done")
  });
}, 5000);

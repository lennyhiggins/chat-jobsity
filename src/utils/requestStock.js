const request = require('request-promise')
const parse = require('csv-parse')

const parseCsv = (stckName, callback) => {
  var rowDesired = 0;
  requestApiStooqcom(stckName, callback)
    .on('data', function(data) {
      // console.log("la data=>", data);
      //do something
      rowDesired++; 
      var response = stckName.toUpperCase() + ' quote is $' + data[6];
      if (rowDesired==2) callback(response)
      // csvData.push(csvrow);        
    })
    .on("end", function () {
      console.log("Closing the cvs file!")
    })
    .on("error", function (error) {
        console.log(error)
        callback(error)
    });

}

const requestApiStooqcom = (stck, callback) => {
  var url = 'https://stooq.com/q/l/?s={:stock}&f=sd2t2ohlcv&h&e=csv'
  url = url.replace('{:stock}', stck)
  console.log("la url ", url)
  const options = {
    uri: url,
    qs: {},
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true
  }
  return request(options)
    .pipe(parse())

  // return request(options)
}

module.exports = { parseCsv, requestApiStooqcom }
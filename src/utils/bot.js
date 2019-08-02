const requestStock = require('./requestStock')

// let name
const emitMessage = (msg, callback) => callback(msg)

const comunicate = (msg, callback) => {
    var stckName = msg.substring( msg.indexOf('=') + 1);
    stckName = stckName.trim();
    requestStock.parseCsv(stckName, response => {
        callback(response)
    })
    
}

module.exports = { emitMessage, comunicate }
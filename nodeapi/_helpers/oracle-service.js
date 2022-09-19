const oracledb = require("oracledb");
const dbConfig = require("../_config/db-config.json");

function getCursorData(cursor, numRows) {
    return new Promise(async function (resolve, reject) {
      let row = await cursor.getRows(numRows);
      // console.log("Cursor Data :" + JSON.stringify(row));
      resolve(row);
    });
  }

  module.exports.getCursorData = getCursorData;
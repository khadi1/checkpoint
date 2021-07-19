const fs = require("fs");
const path = require("path");

const filter =
  (dirr,
  ext,
  (err, data) => {
    if (err) console.log(err);
    else {
      for (let i = 0; i < data.length; i++) {
        if (path.extname(data[i]) === "." + ext) {
          console.log(data[i]);
        }
      }
    }
  });

module.exports = { filter };

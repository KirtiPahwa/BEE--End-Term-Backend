const jwt = require("jsonwebtoken");

const generateJWT = (id = "") => {
  return new Promise((resolve, reject) => {
    const payload = { id };

    jwt.sign(
      payload,
      "Kirti",
      {
        expiresIn: "4h",
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject();
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = {
  generateJWT,
};
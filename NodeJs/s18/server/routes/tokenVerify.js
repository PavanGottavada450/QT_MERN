const jwt = require("jsonwebtoken");
const secret_key = "qwertyuioplkjhgfdsazxcvbnm";

const fn1 = (req, res, next) => {
        const token = req.headers.authorization.slice(7);
        console.log(token);
    
        jwt.verify(token, secret_key, (error) => {
          if (error) {
            res.send({
              ok: false,
              result: "invalid token",
            });
          } else {
            next();
          }
        });
}

module.exports = fn1;
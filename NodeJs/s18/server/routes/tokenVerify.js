const jwt = require("jsonwebtoken");
// const secret_key = "qwertyuioplkjhgfdsazxcvbnm";
const dotenv = require("dotenv");
dotenv.config("./config.env");
const secret_key = process.env.SECRET_KEY;

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
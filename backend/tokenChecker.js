const JWT = require("jsonwebtoken");
const tokenChecker = (req, res, next) => {

    let token;
    const authHeader = req.get("Authorization")
    console.log('A')

    if(authHeader) {
      token = authHeader.slice(7)
    }
    console.log('B')
    JWT.verify(token, process.env.JWT_SECRET, (err, payload) => {
      console.log(process.env.JWT_SECRET, 'Hey')
      if(err) {
        console.log(err)
        res.status(401).json({message: "auth error"});
      } else {
        req.user_id = payload.user_id;
        next();
      }
    });
    console.log('C')
  };

  module.exports = tokenChecker;
const jwt = require("jsonwebtoken");

const User = require("../model/User");

module.exports = (req, res, next) => {
  const authHeaders = req.headers.authorization;
  if (authHeaders) {
    const token = authHeaders.split(" ")[1];

    jwt.verify(token, "Mysecret_key_HI", async (err, payload) => {
      try {
        if (err) {
          return res.status(401).json({ error: "Unauthorized User" });
        }
        const user = await User.findOne({ _id: payload._id }).select(
          "-password"
        );
        req.user = user;
        next();
      } catch (err) {
        console.log(err);
      }
    });
  } else {
    return res.status(403).json({ error: "forbidenn" });
  }
};

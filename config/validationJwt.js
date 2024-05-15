const jwt = require("jsonwebtoken");

const authenticateUser = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }



  try {
    const decoded = jwt.verify(token.split(" ")[1], process.env.ACCESS_TOKEN_SECRET);
    console.log(decoded);
    req.loginUser=decoded.loginUser // Extract the user's ID from the token
   console.log(req.loginUser)
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
module.exports = authenticateUser;
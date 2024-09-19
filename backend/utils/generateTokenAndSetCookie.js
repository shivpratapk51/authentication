import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("token", token, {
    httpOnly: true, //accessible only by web server
    secure: process.env.NODE_ENV !== "development", //https
    sameSite: "strict", //csrf
    maxAge: 7 * 24 * 60 * 60 * 1000, //7 days
  });

  return token;
};

import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
// eslint-disable-next-line no-undef
const key = process.env.ENCRIPTION_KEY;

export function setUserAuthentication(user) {
  return jwt.sign(user, key);
}

export function getUserVefication(token) {
  try {
    // Verifying and decoding the token
    const decoded = jwt.verify(token, key);
    return decoded; // Return decoded token content (e.g., user data)
  } catch (err) {
    throw new Error("Invalid token"); // Will be caught by the caller (authenticate function)
  }
}

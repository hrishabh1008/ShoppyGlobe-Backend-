import { addUser, loginUser } from "../controller/user.controller.mjs";
import { decryptUserPassword, encryptUserPassword } from "../middlewares/crypt.middleware.mjs";


export function userRoutes(app) {
  app.post("/adduser",encryptUserPassword, addUser);
  app.post("/loginuser",decryptUserPassword, loginUser);

  
}

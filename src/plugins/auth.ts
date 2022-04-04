import { User } from "@prisma/client";
import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";
export interface IJwtService {
  generatePassword(password: string): Promise<string>;
  validatePassword(password: string, userPassword: string): Promise<boolean>;
  generateToken(user: User): Promise<string>;
}

export default class JwtService implements IJwtService {
  async generatePassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    const passwordGenerated = await bcrypt.hash(password, salt);
    return passwordGenerated;
  }

  async validatePassword(
    password: string,
    userPassword: string
  ): Promise<boolean> {
    const passwordResponse = await bcrypt.compare(password, userPassword);
    return passwordResponse;
  }

  async generateToken(user: User): Promise<string> {
    const { name, email, id } = user;
    const accessToken = Jwt.sign(
      { name, email, id },
      process.env.SECRET as string
    );
    return accessToken;
  }
}

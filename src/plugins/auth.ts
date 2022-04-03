import bcrypt from "bcryptjs";

export interface IJwtService {
  generatePassword(password: string): Promise<string>;
  validatePassword(password: string, userPassword: string): Promise<boolean>;
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
}

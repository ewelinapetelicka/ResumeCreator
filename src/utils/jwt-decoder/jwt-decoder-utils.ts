export class JwtDecoderUtils {
  static decode(token: string): {
    email: string;
    exp: number;
    iat: number;
    sub: string;
  } {
    return JSON.parse(atob(token.split('.')[1]));
  }
}

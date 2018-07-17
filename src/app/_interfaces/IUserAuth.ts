export interface IUserAuth {
  _id: string;
  email: string;
  name: string;
  exp: number;
  iat: number;
  registerListId?: string;
}

export interface ITokenResponse {
  token: string;
}

export interface ITokenPayload {
  email: string;
  password: string;
  name?: string;
  registerListId?: string;
}

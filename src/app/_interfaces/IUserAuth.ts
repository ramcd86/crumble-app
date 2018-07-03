export interface IUserAuth {
  _id: string;
  email: string;
  name: string;
  exp: number;
  iat: number;
  dataId?: number;
}

export interface ITokenResponse {
  token: string;
}

export interface ITokenPayload {
  email: string;
  password: string;
  name?: string;
  dataId?: number;
}

import {AccessToken} from './access-token.model';

export interface User {
  username: string;
  password?: string;
  fistName: string;
  lastName: string;
  accessToken: AccessToken;
  userType: string;
}

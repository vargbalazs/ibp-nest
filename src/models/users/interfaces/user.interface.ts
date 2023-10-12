export interface IUser {
  id: number;
  userId: string;
  firstName: string;
  lastName: string;
  currentUserName: string;
  userName: string;
  userEmail: string;
  password: string;
  passwordConfirm: string;
  lastLoginDate: Date;
  joinDate: Date;
  active: boolean;
  notLocked: boolean;
  firstLogin: boolean;
}

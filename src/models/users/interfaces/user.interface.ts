export interface User {
  id: number;
  userId: string;
  firstName: string;
  lastName: string;
  userName: string;
  userEmail: string;
  password: string;
  lastLoginDate: Date;
  joinDate: Date;
  active: boolean;
  notLocked: boolean;
  firstLogin: boolean;
}

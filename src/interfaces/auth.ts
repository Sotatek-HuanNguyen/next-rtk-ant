export interface User {
  role?: string;
  blocked?: boolean;
  confirmed?: boolean;
  createdAt?: string;
  email?: string;
  id?: number | string;
  name?: string | null;
  phone?: string;
  provider?: string | null;
  surname?: string;
  updatedAt?: string;
  username?: string;
  avatar?: any;
  userType?: any;
  nickname?: string | null;
  locale?: string;
}

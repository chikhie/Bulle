export interface Roles{
  subscriber?: boolean;
  editor?:boolean;
  admin?:boolean;
}

export interface User{
  uid:string;
  mail:string;
  role:Roles;
}
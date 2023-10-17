export interface User {

  id:number;
  password:string;
  username:string;
  valid:boolean;
  email:string;
  superAdmin:boolean;
  groupAdmin:string[];
  groups:string[];
  bannedFrom:string[]


}

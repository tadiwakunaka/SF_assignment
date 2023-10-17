export interface User {

  id:number;
  username:string;
  email:string;
  superAdmin:boolean;
  groupAdmin:string[];
  groups:string[];
  bannedFrom:string[]

}

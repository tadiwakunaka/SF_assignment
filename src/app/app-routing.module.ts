import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {UserDashComponent} from "./user-dash/user-dash.component";
import {GroupAdminComponent} from "./group-admin/group-admin.component";
import {SuperAdminComponent} from "./super-admin/super-admin.component";
import {ManageGroupsComponent} from "./manage-groups/manage-groups.component";
import {CreateGroupsComponent} from "./create-groups/create-groups.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'userDash', component: UserDashComponent},
  {path: 'groupAdmin', component: GroupAdminComponent},
  {path: 'superAdmin', component: SuperAdminComponent},
  {path: 'manageGroups', component: ManageGroupsComponent},
  {path: 'createGroup', component: CreateGroupsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

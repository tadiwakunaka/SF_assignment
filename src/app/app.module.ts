import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserDashComponent } from './user-dash/user-dash.component';
import { GroupAdminComponent } from './group-admin/group-admin.component';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { FormsModule } from '@angular/forms';
import { ManageGroupsComponent } from './manage-groups/manage-groups.component';
import { CreateGroupsComponent } from './create-groups/create-groups.component';
import { ChatUIComponent } from './chat-ui/chat-ui.component';
import { ProfileUIComponent } from './profile-ui/profile-ui.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserDashComponent,
    GroupAdminComponent,
    SuperAdminComponent,
    ManageGroupsComponent,
    CreateGroupsComponent,
    ChatUIComponent,
    ProfileUIComponent,
    ChatBoxComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlistComponent } from './user/userlist/userlist.component';
import { AddComponent } from './user/add/add.component';
import { UserService } from './service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewComponent } from './user/view/view.component';
import { UpdateComponent } from './user/update/update.component';
@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    AddComponent,
    UpdateComponent,
    ViewComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlistComponent } from './user/userlist/userlist.component';
import { AddComponent } from './user/add/add.component';
import { UpdateComponent } from './user/update/update.component';
import { ViewComponent } from './user/view/view.component';

const routes: Routes = [
  {
    path: '', 
    component: UserlistComponent
  },
  {
    path: 'userlist', 
    component: UserlistComponent
  },
  {
    path: 'add', 
    component: AddComponent
  },
  {
    path: 'update/:id', 
    component: UpdateComponent
  },
  {
    path:"view/:id",
    component:ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  // {
  //   path: '', 
  //   component: AddUserComponent
  // },
  // {
  //   path: 'userlist', 
  //   component: UserListComponent
  // },
  
}

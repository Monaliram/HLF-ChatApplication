import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { SendMessageComponent } from './send-message/send-message.component';

const routes: Routes = [
  {path: '', redirectTo: '/register', pathMatch: 'full'},
  {path:'register',component:RegisterComponent},
  {path:'message',component:SendMessageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

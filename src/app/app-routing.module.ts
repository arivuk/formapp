import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { ReactExampleComponent } from './react-example/react-example.component';
import { ReactjobExampleComponent } from './reactjob-example/reactjob-example.component';


const routes: Routes = [
  { path: 'Home', component: RegistrationComponent },
  { path: 'React', component: ReactExampleComponent },
  { path: 'Reactjob', component: ReactjobExampleComponent },
  { path: '**', redirectTo: '/Home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

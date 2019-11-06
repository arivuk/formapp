import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactExampleComponent } from './react-example/react-example.component';
import { ReactjobExampleComponent } from './reactjob-example/reactjob-example.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    ReactExampleComponent,
    ReactjobExampleComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

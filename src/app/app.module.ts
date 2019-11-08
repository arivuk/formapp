import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactExampleComponent } from './react-example/react-example.component';
import { ReactjobExampleComponent } from './reactjob-example/reactjob-example.component';
//npm i devextreme-angular
//https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/MultipleSorting/Angular/Light/
import { DxDataGridComponent, DxDataGridModule, DxCheckBoxModule } from 'devextreme-angular';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    ReactExampleComponent,
    ReactjobExampleComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule,DxDataGridModule,
    DxCheckBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

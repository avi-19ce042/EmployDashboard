import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployListComponent } from './employ-list/employ-list.component';
import { EmployFormComponent } from './employ-form/employ-form.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmployListComponent,
    EmployFormComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      [
        { path: 'employ-form', component: EmployFormComponent},
        { path: 'employ-list', component: EmployListComponent},
        // { path: 'employ-list/:id', component: EmployListComponent},
      ], {useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RepositoryComponent } from './repository/repository.component';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { ProfileServiceService } from './profile-service.service';
import { TimePipe } from './time.pipe';
// import { Observable } from 'rxjs';




@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    RepositoryComponent,
    FormComponent,
    TimePipe,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
    // Observable
    
   
  ],
  providers: [ProfileServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

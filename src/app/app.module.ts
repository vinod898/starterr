import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { AuthComponent } from './theme/layout/auth/auth.component';
import { SideNavComponent } from './theme/layout/admin/side-nav/side-nav.component';
import { NavbarComponent } from './theme/layout/auth/navbar/navbar.component';
import { routing } from './app.routing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AuthComponent,
    SideNavComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  entryComponents: [AuthComponent, AdminComponent],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

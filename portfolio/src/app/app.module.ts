import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { PageTwoComponent } from './pages/page-two/page-two.component';
// import { PageThreeComponent } from './pages/page-three/page-three.component';
import { PageOneComponent } from './pages/page-one/page-one.component';

@NgModule({
  declarations: [
    AppComponent,
    // PageTwoComponent,
    // PageThreeComponent,
    PageOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

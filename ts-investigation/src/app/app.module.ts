import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { InlineComponentComponent } from './inline-component/inline-component.component';
import { GencTestComponent } from './genc-test/genc-test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    InlineComponentComponent,
    GencTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

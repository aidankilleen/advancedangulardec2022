import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { UserEditorComponent } from './user-editor/user-editor.component';
import { IntroFormComponent } from './intro-form/intro-form.component';
import { ForbiddenNameDirective } from './forbidden-name.directive';

@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    UserEditorComponent,
    IntroFormComponent,
    ForbiddenNameDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

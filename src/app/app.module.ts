import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JaboneraComponent } from './components/jabonera/jabonera.component';
import { ManoComponent } from './components/mano/mano.component';

@NgModule({
  declarations: [
    AppComponent,
    JaboneraComponent,
    ManoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

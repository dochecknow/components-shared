import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';


const appRoutes: Routes = [
  { path: 'chat', component: ChatComponent },
  { path: '', redirectTo: '/chat', pathMatch: 'full' } ];

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( appRoutes, { enableTracing: true }), // <-- true for debugging purposes only )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

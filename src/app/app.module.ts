import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { VenueComponent } from './venue/venue.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { AboutComponent } from './about/about.component';
import { ReferencesComponent } from './references/references.component';
import { PartnersComponent } from './partners/partners.component';
import { MediasComponent } from './medias/medias.component';
import { EventsComponent } from './events/events.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    VenueComponent,
    AboutComponent,
    ReferencesComponent,
    PartnersComponent,
    MediasComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

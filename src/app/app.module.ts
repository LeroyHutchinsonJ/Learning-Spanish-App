import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // Helps angular know its running in the browser
import {AppComponent} from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

// Tells angular what we should initially inject in the project
@NgModule({
    // The bootstrap stuff allows us to create an array of components we'd like to intialize when the app starts up
    bootstrap: [
        AppComponent,
    ],
    // We declare the AppComponent because its part of my application
    declarations:[
        AppComponent
    ],
    // This takes an array of the modules we would like to import into our project
    imports: [
        BrowserModule,
        NgbModule,
        FontAwesomeModule
    ],
})

export class AppModule {}
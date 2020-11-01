import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // Helps angular know its running in the browser

// Tells angular what we should initially inject in the project
@NgModule({
    // This takes an array of the modules we would like to import into our project
    imports: [
        BrowserModule,
    ],
})

export class AppModule {}
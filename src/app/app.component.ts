import { Component } from '@angular/core';

@Component({
    // The selector tells us where to plug the template
    selector: 'app-root',
    // This allows us to use an external html file for the template
    templateUrl: './app.component.html',
    // This allows us to use an external css file for the template
    styleUrls: [
        './app.component.css',
    ],
})
export class AppComponent {}
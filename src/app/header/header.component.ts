import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  onInitializ(){
    const link=document.createElement('a');
    link.href="https://github.com/samratmanjeet7/country-viewer/issues";
    link.click();
  }
}

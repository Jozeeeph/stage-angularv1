import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  selectedSection: string = '#section_2';

  onNavigate() {
    if (this.selectedSection) {
      const element = document.querySelector(this.selectedSection);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}

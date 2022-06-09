import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;

  font_size = 16;

  setFontSize(idd: string) {

    //calc font size
    if(idd === 'a+'){
      this.font_size += 1;
    } else if(idd === 'a-') {
      this.font_size -= 1;
    } else {
      this.font_size = 16;
    }

    //set font size
    let htmlRoot:HTMLElement = <HTMLElement> document.getElementsByTagName("html")[0];
    if (htmlRoot != null) {
       htmlRoot.style.fontSize = `${this.font_size}px`;
    }

  }

  constructor(private darkModeService: DarkModeService) { }

  onToggle(): void {
    this.darkModeService.toggle();
  }

  ngOnInit() {

  }

}

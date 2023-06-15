import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Radar';

  isDarkMode = false;

  mostrarHeader: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.verificarRotaAtual(event.url);
      }
    });
  }

  verificarRotaAtual(url: string) {
    if (url === '/login') {
      this.mostrarHeader = false;
    } else if(url === '/cadastro'){
      this.mostrarHeader = false;
    } else {
      this.mostrarHeader = true;
    }
  }

}

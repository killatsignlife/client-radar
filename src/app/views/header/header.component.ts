import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menuitem.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuItems: MenuItem[] = [
    {
      label: 'Acessibilidade',
      icon: 'accessibility',
    },
    {
      label: 'Contraste',
      icon: 'constrast',
    },
    {
      label: 'Aumentar fonte',
      icon: 'text_increase',
    },
    {
      label: 'Aumentar fonte',
      icon: 'text_decrease',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

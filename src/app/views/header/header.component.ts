import { Component, OnInit, HostListener  } from '@angular/core';
import { Observable } from 'rxjs';
import { ETheme } from './enums/ETheme.enum';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public nome: string = ETheme.NOME_COM_CONTRASTE;

  font_size = 16;

  setFontSize(idd: string) {

    //calc font size
    if(idd === 'a+' && this.font_size <= 24){
      this.font_size += 1;
    } else if(idd === 'a-' && this.font_size >= 8) {
      this.font_size -= 1;
    } else if(this.font_size == 8){
      this.font_size = 8;
    }else if(this.font_size == 24){
      this.font_size = 24;
    } else if (idd === "a") {
      this.font_size = 16;
    }

    //set font size
    let htmlRoot:HTMLElement = <HTMLElement> document.getElementsByTagName("html")[0];
    if (htmlRoot != null) {
       htmlRoot.style.fontSize = `${this.font_size}px`;
    }

  }

  constructor(@Inject(DOCUMENT) private document: Document) {

   }

  ngOnInit() {

  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if(event.altKey && event.key == '+'){
      // Your row selection code
      console.log(event.key);
      this.setFontSize("a+")
    }
    if(event.altKey && event.key == '-'){
      // Your row selection code
      console.log(event.key);
      this.setFontSize("a-")
    }
    if(event.altKey && event.key == 'c'){
      // Your row selection code
      console.log(event.key);
      this.toogle();
    }
  }

  public toogle() {
    const theme = document.body.classList.toggle('contraste');

    if (theme) {
      return (this.nome = ETheme.NOME_SEM_CONTRASTE);
    }

    return (this.nome = ETheme.NOME_COM_CONTRASTE)
  }

  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    const section = this.document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }

} }

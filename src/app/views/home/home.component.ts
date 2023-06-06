import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'
import { ApiService } from 'src/app/api.service';
<<<<<<< HEAD

import { Desaparecido } from 'src/app/desaparecido.model';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
=======
import { Desaparecido } from 'src/app/model/desaparecido.model';
>>>>>>> origin/main

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  desaparecidos: Desaparecido[] = []

  constructor(private service: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.data();
  }

  data() {
    this.service.getDesaparecidosHome().subscribe((item) =>{
      this.desaparecidos = item;
    });
    console.log(this.desaparecidos);
  }

  detailDesaparecido(id: number) {
    this.router.navigate(['descricao', id])
  }
}

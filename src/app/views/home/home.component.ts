import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'
import { ApiService } from 'src/app/api.service';
import { Desaparecido } from 'src/app/model/desaparecido.model';

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

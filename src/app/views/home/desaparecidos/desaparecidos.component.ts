import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'
import { ApiService } from 'src/app/api.service';
import { Desaparecido } from 'src/app/desaparecido.model';
@Component({
  selector: 'app-desaparecidos',
  templateUrl: './desaparecidos.component.html',
  styleUrls: ['./desaparecidos.component.scss']
})
export class DesaparecidosComponent implements OnInit {
  desaparecidos: Observable<Desaparecido[]>;

  constructor(private service: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.data();
  }

  data() {
    this.desaparecidos = this.service.getDesaparecidos();
    console.log(this.desaparecidos);
  }

  detailDesaparecido(id: number) {
    this.router.navigate(['descricao', id])
  }
}

import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute, Router } from '@angular/router';
<<<<<<< HEAD
import { Desaparecido } from 'src/app/desaparecido.model';
import { Observable } from 'rxjs/internal/Observable';

=======
import { Desaparecido } from 'src/app/model/desaparecido.model';
>>>>>>> origin/main
@Component({
  selector: 'app-descricao',
  templateUrl: './descricao.component.html',
  styleUrls: ['./descricao.component.css']
})
export class DescricaoComponent implements OnInit {

  id: number;
  desaparecido: Desaparecido;
  //endereco: Observable<Endereco[]>;

  title = 'Descrição'

  constructor(private route: ActivatedRoute, private router: Router, private service: ApiService) { }

  ngOnInit() {
    this.desaparecido = new Desaparecido();
    this.id = this.route.snapshot.params['id'];
    this.service.getDesaparecido(this.id).subscribe(data => {
      console.log(data);
      this.desaparecido = data;
    //  this.endereco = this.desaparecido.endereco;
    }, error => console.log(error));
  }

  detailDesaparecido(id: number) {
    this.router.navigate(['reportar', id])
  }

}

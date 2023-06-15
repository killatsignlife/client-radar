import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Desaparecido } from 'src/app/model/desaparecido.model';
import { Endereco } from 'src/app/endereco.model';
import { Voluntario } from 'src/app/voluntario.model';

@Component({
  selector: 'app-delete-desaparecido',
  templateUrl: './delete-desaparecido.component.html',
  styleUrls: ['./delete-desaparecido.component.css']
})

export class DeleteDesaparecidoComponent implements OnInit {

    // @ts-ignore: Object is possibly 'undefined'.
    desaparecido: Desaparecido;
    // @ts-ignore: Object is possibly 'undefined'.
    desaparecidoId: number;

    // @ts-ignore: Object is possibly 'undefined'.
    enderecos: Observable<Endereco[]>;
  
    constructor(private api: ApiService, private router: Router, private route: ActivatedRoute) { }
  
    ngOnInit() {
  
      this.desaparecido = new Desaparecido();
      this.desaparecidoId = this.route.snapshot.params['id'];
  
      this.api.getDesaparecido(this.desaparecidoId)
        .subscribe(data => {

          this.desaparecido = data;
          console.log(this.desaparecido.endereco)
          this.enderecos = this.desaparecido.endereco;
          console.log(this.enderecos);

        }, error => console.log(error));
    }
  
    deleteDesaparecido(): void {
      this.api.deleteDesaparecido(this.desaparecidoId).subscribe(() => {
        this.router.navigate(["/desaparecidos"]);
      });
    }
  
    cancel(): void {
      this.router.navigate(['/desaparecidos']);
    }

}

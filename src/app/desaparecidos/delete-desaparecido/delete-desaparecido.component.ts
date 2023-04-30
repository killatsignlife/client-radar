import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Desaparecido } from 'src/app/desaparecido.model';
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
  
  
    constructor(private api: ApiService, private router: Router, private route: ActivatedRoute) { }
  
    ngOnInit() {
  
      this.desaparecido = new Desaparecido();
      this.desaparecidoId = this.route.snapshot.params['id'];
  
      this.api.getDesaparecido(this.desaparecidoId)
        .subscribe(data => {
          console.log(data);
          this.desaparecido = data;
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

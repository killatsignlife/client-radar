import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Voluntario } from 'src/app/voluntario.model';

@Component({
  selector: 'app-delete-voluntario',
  templateUrl: './delete-voluntario.component.html',
  styleUrls: ['./delete-voluntario.component.css']
})

export class DeleteVoluntarioComponent implements OnInit {
   // @ts-ignore: Object is possibly 'undefined'.
  voluntario: Voluntario;
  // @ts-ignore: Object is possibly 'undefined'.
  voluntarioId: number;
    // @ts-ignore: Object is possibly 'undefined'.
    endereco: Observable<Endereco[]>;


  constructor(private api: ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.voluntario = new Voluntario();
    this.voluntarioId = this.route.snapshot.params['id'];

    this.api.getVoluntarioById(this.voluntarioId)
      .subscribe(data => {
        this.voluntario = data;
        console.log(this.voluntario.endereco)
        this.endereco = this.voluntario.endereco;
        console.log(this.endereco);
      }, error => console.log(error));
  }

  deleteVoluntario(): void {
    this.api.deleteVoluntario(this.voluntarioId).subscribe(() => {
      this.router.navigate(["/voluntarios"]);
    });
  }

  cancel(): void {
    this.router.navigate(['/voluntarios']);
  }

}

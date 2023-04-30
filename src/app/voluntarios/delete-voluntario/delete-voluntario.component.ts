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


  constructor(private api: ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.voluntario = new Voluntario();
    this.voluntarioId = this.route.snapshot.params['id'];

    this.api.getVoluntarioById(this.voluntarioId)
      .subscribe(data => {
        console.log(data);
        this.voluntario = data;
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

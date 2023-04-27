import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Desaparecido } from 'src/app/desaparecido.model';
import { Voluntario } from 'src/app/voluntario.model';

@Component({
  selector: 'app-update-voluntario',
  templateUrl: './update-voluntario.component.html',
  styleUrls: ['./update-voluntario.component.css']
})
export class UpdateVoluntarioComponent implements OnInit {

  // @ts-ignore: Object is possibly 'undefined'.
  voluntario: Voluntario;
  // @ts-ignore: Object is possibly 'undefined'.
  voluntarioId: number;

  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.voluntario = new Voluntario();
      this.voluntarioId = this.route.snapshot.params['id'];
  
      this.api.getVoluntarioById(this.voluntarioId)
        .subscribe(data => {
          console.log(data);
          this.voluntario = data;
        }, error => console.log(error));

  }

  updateVoluntario() {
    this.api.updateVoluntario(this.voluntarioId, this.voluntario)
      .subscribe(data => console.log(data), error => console.log(error));
      this.voluntario = new Desaparecido();

      this.router.navigate(['/voluntarios']);
  }

  onSubmit() {
    this.updateVoluntario();
  }

}

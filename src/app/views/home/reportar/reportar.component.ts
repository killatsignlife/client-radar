import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Mensagem } from 'src/app/mensagem.model';
import { ActivatedRoute,Router } from '@angular/router';
import { Desaparecido } from 'src/app/desaparecido.model';
@Component({
  selector: 'app-reportar',
  templateUrl: './reportar.component.html',
  styleUrls: ['./reportar.component.css']
})
export class ReportarComponent implements OnInit {
  title = 'Reportar';
  id: number;
  desaparecido: Desaparecido;
  mensagem: Mensagem = new Mensagem();
  submitted = false;

  constructor(private route: ActivatedRoute, private service: ApiService, private router: Router) { }

  ngOnInit() {
    this.desaparecido = new Desaparecido();
    this.id = this.route.snapshot.params['id'];
    this.service.getDesaparecido(this.id).subscribe(data => {
      console.log(data);
      this.desaparecido = data;
    }, error => console.log(error));
  }

  newMensagem(): void {
    this.submitted = false;
    this.mensagem = new Mensagem();
  }

  save() {
    this.service.createMensagem(this.id, this.mensagem).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.mensagem = new Mensagem();
    this.gotoAgradecimentos();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoAgradecimentos() {
    this.router.navigate(['/agradecimento'])
  }

}

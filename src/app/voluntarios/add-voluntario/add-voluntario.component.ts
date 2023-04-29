import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Voluntario } from 'src/app/voluntario.model';

@Component({
  selector: 'app-add-voluntario',
  templateUrl: './add-voluntario.component.html',
  styleUrls: ['./add-voluntario.component.css']
})
export class AddVoluntarioComponent implements OnInit {

    voluntario: Voluntario = new Voluntario();
    submitted = false;

  constructor(private service: ApiService, private router: Router) { }

  ngOnInit(){
  }

  newVoluntario():void{
    this.submitted = false;
    this.voluntario = new Voluntario();
  }

  save(){
    this.service.createVoluntario(this.voluntario).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.voluntario = new Voluntario();
    this.gotoAgradecimentos();
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  gotoAgradecimentos(){
    this.router.navigate(['/sucesso'])
  }

}

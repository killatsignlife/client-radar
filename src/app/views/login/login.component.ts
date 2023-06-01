import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { AuthenticationService } from 'src/app/services/authentication/login/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  
  hide = true;
  email = '';
  senha = '';

  constructor(private authService: AuthenticationService, private service: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.autentica(this.email, this.senha).subscribe(()=>{
    console.log("Login realizado com sucesso");
    setTimeout(()=>{this.router.navigate(['/desaparecidos'])}, 1000)

    }, (error)=> {
      console.log("usuário ou senha inválida","Cadastre-se");
      console.log(this.email, this.senha);
      console.log(error);
    }
    )
  }

}

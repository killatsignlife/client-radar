import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Familiar } from 'src/app/familiar.model';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-delete-familiar',
  templateUrl: './delete-familiar.component.html',
  styleUrls: ['./delete-familiar.component.css']
})
export class DeleteFamiliarComponent implements OnInit {

   // @ts-ignore: Object is possibly 'undefined'.
  familiar: Familiar;
  // @ts-ignore: Object is possibly 'undefined'.
  familiarId: number;

  constructor(private api: ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit()  {

    this.familiar = new Familiar();
      this.familiarId = this.route.snapshot.params['id'];
  
      this.api.getFamiliarById(this.familiarId)
        .subscribe(data => {
          console.log(data);
          this.familiar = data;
        }, error => console.log(error));
  }


  deleteFamiliar(): void {
    this.api.deleteFamiliar(this.familiarId).subscribe(() => {
      this.router.navigate(["familiar/list"]);
    });
  }

  cancel(): void {
    this.router.navigate(['familiar/list']);
  }

  popup(){
    Swal.fire({
      title: 'Tem certeza que deseja excluir este cadastro?',
      icon: 'warning',
      confirmButtonColor: '#56c865',
      cancelButtonColor: '#d33',
      cancelButtonText:'Não',
      confirmButtonText: 'Sim',
      showCancelButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          confirmButtonColor: '#56c865',
          text: 'Cadastro excluído',
          confirmButtonText: 'ok',
        })
        this.deleteFamiliar() 
      }
    })
  }

  
}

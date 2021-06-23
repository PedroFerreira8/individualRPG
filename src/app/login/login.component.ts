import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private registerService:RegisterService,
    router: Router
  ) {
    this.router = router;
   }

  ngOnInit(): void {
  }
  router: Router;

  //login

  SendData(username:string,password:string)
  {
    this.registerService.logIn(username,password).subscribe(
      x => {
        console.log(x);
        if(x['code']==200){
          localStorage.setItem("id_personagem",x['data']); //guardar id da personagem no localstorage
          this.router.navigate(["/battle"]);
        }
      }
    )
  }
  
  
 





}

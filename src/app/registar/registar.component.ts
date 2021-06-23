import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-registar',
  templateUrl: './registar.component.html',
  styleUrls: ['./registar.component.css']
})

export class RegistarComponent implements OnInit {

  valorUtilizador = '';
  valorPassword = '';
  router: Router;
  selectedValue :any = ""

  player : any = [
    { value : "0", url : "../../assets/militar_psg.png"},
    { value : "1", url : "../../assets/canalizador_psg.png"},
    { value : "2", url : "../../assets/rex_psg.png"},
    { value : "3", url : "../../assets/cavaleiro_psg.png"}
  ]
  registerChar : RegisterService;
  constructor(private registerService: RegisterService, router: Router) {
    this.router = router
    this.registerChar = registerService;
  }

  ngOnInit(): void {
  }
  signCont(username : any, password : any){
      this.registerService.registarUser(username, password).subscribe((x) => {
        console.log[x['data']]
      })
  }

  signUp(username,personagem:any, password){
    let atk
    let int
    let vida

    switch (personagem) {
      // military
      case "0":
        vida = "25";
        int = "10";
        atk = "20";
        break;
      // plumber
      case "1":
        vida = "10";
        int = "5";
        atk = "30";
        break;
      // rex
      case "2":
        vida = "20";
        int = "30";
        atk = "40";
        break;
      // knight
      case "3":
        vida = "50";
        int = "10";
        atk = "25";
        break;

      default:
        break;
    }

    this.registerChar.registerChar(username, password,atk, int, vida).subscribe((x) => {
      if (x['code'] == 200) {
        console.log[x['data']]
      }
    })
  }

  changeImage(characters)
  {
   let characterClass = document.getElementById('characterClass') as HTMLImageElement
    characterClass.src = this.player[characters].url
  }
 }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlayerService } from './player.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient, private playerService: PlayerService) { }

  // Links para a API
  linkRegister = 'http://moreiramoises.pt/server/apis/signup.php';
  linkLogin = "http://moreiramoises.pt/server/apis/login.php";
  linkChars = 'http://moreiramoises.pt/server/apis/createChart.php';
  linkCharId: string = 'http://moreiramoises.pt/server/apis/get/getChar.php?PlayerID=';
  linkUpdateChar: string = 'http://moreiramoises.pt/server/apis/updateChart.php';

  //Login
  logIn(username, password) {
    let dataToSend: FormData = new FormData();

    dataToSend.append("username", username);
    dataToSend.append("password", password);

    return this.http.post(this.linkLogin, dataToSend);

  }

  // criar utilizador e personagem

  registarUser(username: any,password:any){
    console.log(username + "" + password)
    let dataToSend : FormData = new FormData();

    dataToSend.append('username', username);
    dataToSend.append('password', password);
    console.log(username)
    console.log(password)

    return this.http.post(this.linkRegister, dataToSend);
  }

  registerChar(username, password, atk, int, vida) {

    let dataToSend: FormData = new FormData();

    dataToSend.append('name', username);
    dataToSend.append('atk', atk.toString());
    dataToSend.append('isMonster', 'true');
    dataToSend.append('int', int.toString());
    dataToSend.append('vida', vida.toString());
    dataToSend.append('username', username);
    dataToSend.append('password', password);

    return this.http.post(this.linkChars, dataToSend);
  }

  getCharID(id) {
    return this.http.get(this.linkCharId + id);
  }


}

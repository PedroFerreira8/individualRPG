import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdversarioService {
  constructor(private http: HttpClient) { }

  linkCharId: string = 'http://moreiramoises.pt/server/apis/get/getChar.php?PlayerID=';
  linkRndChar: string = 'http://moreiramoises.pt/server/apis/get/getRandomChar.php?';

  adversario: any = {
    name: "login",
    atk: "",
    int: "",
    vida: "",
  };

  getRndChar() {
    return this.http.get(this.linkRndChar);
  }


}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }
  password: any;
  username: any;

  player: any = {
    name: "login",
    id: "",
    atk: "",
    isMonset: "",
    int: "0",
    vida: "0",
    img: "",
    idPlayer: ""
  };




}

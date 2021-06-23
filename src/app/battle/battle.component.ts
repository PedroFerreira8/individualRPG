import { Component, OnInit, ViewChild } from '@angular/core';
import { PlayerService } from '../player.service';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
import { AdversarioService } from '../adversario.service';
import { ɵNoopAnimationStyleNormalizer } from '@angular/animations/browser';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {

  constructor(
    private registerService : RegisterService,
    private PlayerService : PlayerService,
    private AdversarioService: AdversarioService,
    router: Router

  ) {
    this.router = router;
    this.playerService = PlayerService;
    this.adversarioService = AdversarioService;
  }

  ngOnInit(): void {
    this.getChar();
    this.getPlayer();
  }

  router: Router;
  playerService : PlayerService;
  adversarioService : AdversarioService;

  getChar() {
    this.registerService.getCharID(localStorage.getItem("id_personagem")).subscribe((x) => {
      if (x['code'] == 200) {
        this.playerService.player.name = x['data'].Personagens[0].Nome;
        this.playerService.player.id = x['data'].Personagens[0].ID;
        this.playerService.player.atk = x['data'].Personagens[0].Atk;
        this.playerService.player.isMonset = x['data'].Personagens[0].IsMonset;
        this.playerService.player.int = x['data'].Personagens[0].Int;
        this.playerService.player.vida = +x['data'].Personagens[0].Vida;
        this.playerService.player.img = x['data'].Personagens[0].Imagem;
        this.playerService.player.idPlayer = x['data'].Personagens[0].ID_Player;
      }
    });
  }

  getPlayer() {
    this.AdversarioService.getRndChar().subscribe((x) => {
      if (x['code'] == 200) {
        this.AdversarioService.adversario.name = x['data'].Nome;
        this.AdversarioService.adversario.atk = x['data'].Atk;
        this.AdversarioService.adversario.int = x['data'].Int;
        this.AdversarioService.adversario.vida = +x['data'].Vida;
      }
    });
  }

  @ViewChild('victory') victory : any;
  @ViewChild('vencedortxt') vencedortxt : any;
  @ViewChild('jogarnovamente') jogarnovamente : any;
  vencedor : string = "naosei";

  battle()
  {
    let ataquePlayer: number = +this.PlayerService.player.atk;
    let intPlayer: number = +this.PlayerService.player.int;
    let vidaPlayer: number = +this.PlayerService.player.vida;

    let ataqueAdversario: number = +this.AdversarioService.adversario.atk;
    let intAdversario: number = +this.AdversarioService.adversario.int;
    let vidaAdversario: number = +this.AdversarioService.adversario.vida;
    //ataques Player
    ataquePlayer = ataquePlayer * intPlayer;
    vidaPlayer = ataquePlayer * intPlayer;

    //ataques Adversario
    ataqueAdversario = ataqueAdversario * intAdversario;
    vidaAdversario = vidaAdversario * intAdversario

    //Primeiro Ataque
    vidaAdversario = vidaAdversario - ataquePlayer;
    if(vidaAdversario<=0)
    {
      this.victory.nativeElement.style.visibility = "visible";

      this.vencedortxt.nativeElement.style.visibility = "visible";
      this.vencedor = this.PlayerService.player.name;
      this.jogarnovamente.nativeElement.style.visibility = "visible";
      console.log("Utilizador Ganhou!!");
    }
    vidaPlayer = vidaPlayer - ataqueAdversario;
    if(vidaPlayer<=0)
    {
      this.victory.nativeElement.style.visibility = "visible";
      console.log("Adversario Ganhou!!");
      this.vencedortxt.nativeElement.style.visibility = "visible";
      this.vencedor = this.AdversarioService.adversario.name;
      this.jogarnovamente.nativeElement.style.visibility = "visible";
    }

    //Segundo Ataque

    vidaAdversario = vidaAdversario - ataquePlayer;
    if(vidaAdversario<=0)
    {
      this.victory.nativeElement.style.visibility = "visible";
      console.log("Utilizador Ganhou!!");
      this.vencedortxt.nativeElement.style.visibility = "visible";
      this.vencedor = this.PlayerService.player.name;
      this.jogarnovamente.nativeElement.style.visibility = "visible";
    }
    vidaPlayer = vidaPlayer - ataqueAdversario;
    if(vidaPlayer<=0)
    {
      this.victory.nativeElement.style.visibility = "visible";
      console.log("Adversario Ganhou!!");
      this.vencedortxt.nativeElement.style.visibility = "visible";
      this.vencedor = this.AdversarioService.adversario.name;
      this.jogarnovamente.nativeElement.style.visibility = "visible";
    }
  }

  atualizarPagina(): void {
    window.location.reload();
  }


}

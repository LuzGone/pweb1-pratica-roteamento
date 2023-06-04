import { Component } from '@angular/core';
import { Jogo } from 'src/app/shared/modelo/jogo';
import { JOGOS } from 'src/app/shared/modelo/JOGOS';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-manutenir-jogo',
  templateUrl: './manutenir-jogo.component.html',
  styleUrls: ['./manutenir-jogo.component.css']
})

export class ManutenirJogoComponent {
  jogos:Jogo[] = JOGOS;
  jogoDeManutencao:Jogo;
  estaCadastrando = true;
  nomeBotaoManutencao = 'Cadastrar'

  constructor(private rotaAtual: ActivatedRoute, private roteador: Router) {
    this.jogoDeManutencao = new Jogo();
    const nomeParaEdicao = this.rotaAtual.snapshot.paramMap.get('nome');

    if (nomeParaEdicao) {
      // editando
      const jogoEncontrado = this.jogos.find(
        jogo => jogo.nome === nomeParaEdicao);
      if (jogoEncontrado) {
        this.estaCadastrando = false;
        this.nomeBotaoManutencao = 'Salvar';
        this.jogoDeManutencao = jogoEncontrado;
      }
    } else {
      this.nomeBotaoManutencao = 'Cadastrar';
    }
  }

  manter(): void {
    if (this.estaCadastrando && this.jogoDeManutencao) {
      this.jogos.push(this.jogoDeManutencao);
    }
    this.jogoDeManutencao = new Jogo();
    this.nomeBotaoManutencao = 'Cadastrar';
    this.roteador.navigate(['listagemjogos']);
  }
}

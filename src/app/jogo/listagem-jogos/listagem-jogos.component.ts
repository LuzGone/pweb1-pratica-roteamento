import { Component } from '@angular/core';
import { Jogo } from 'src/app/shared/modelo/jogo';
import { JOGOS } from 'src/app/shared/modelo/JOGOS';

@Component({
  selector: 'app-listagem-jogos',
  templateUrl: './listagem-jogos.component.html',
  styleUrls: ['./listagem-jogos.component.css']
})
export class ListagemJogosComponent {
  jogos:Jogo[] = JOGOS;

  excluir(jogoARemover: Jogo): void {
    const indx = this.jogos.findIndex(jogo =>
      jogo.nome === jogoARemover.nome);

    this.jogos.splice(indx, 1);
  }
}

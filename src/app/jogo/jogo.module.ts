import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManutenirJogoComponent } from './manutenir-jogo/manutenir-jogo.component';
import { ListagemJogosComponent } from './listagem-jogos/listagem-jogos.component';



@NgModule({
  declarations: [
    ManutenirJogoComponent,
    ListagemJogosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ManutenirJogoComponent,
    ListagemJogosComponent
  ]
})
export class JogoModule { }

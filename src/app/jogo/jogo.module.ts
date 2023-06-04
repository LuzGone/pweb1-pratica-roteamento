import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManutenirJogoComponent } from './manutenir-jogo/manutenir-jogo.component';
import { ListagemJogosComponent } from './listagem-jogos/listagem-jogos.component';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';
import {PipesModule} from '../pipes/pipes.module';
import {FlexModule} from '@angular/flex-layout';
import {RouterLink} from '@angular/router';


@NgModule({
  declarations: [
    ManutenirJogoComponent,
    ListagemJogosComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    PipesModule,
    FlexModule,
    RouterLink
  ],
  exports:[
    ManutenirJogoComponent,
    ListagemJogosComponent
  ]
})
export class JogoModule { }

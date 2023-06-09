import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MantemUsuarioComponent} from './usuario/mantem-usuario/mantem-usuario.component';
import {ListagemUsuariosComponent} from './usuario/listagem-usuarios/listagem-usuarios.component';
import { ManutenirJogoComponent } from './jogo/manutenir-jogo/manutenir-jogo.component';
import { ListagemJogosComponent } from './jogo/listagem-jogos/listagem-jogos.component';

const routes: Routes = [
  {
    path: 'cadastrousuario',
    component: MantemUsuarioComponent
  },
  {
    path: 'editausuario/:id',
    component: MantemUsuarioComponent
  },
  {
    path: 'listagemusuarios',
    component: ListagemUsuariosComponent
  },
  {
    path: 'listagemjogos',
    component: ListagemJogosComponent
  },
  {
    path: 'cadastrarjogo',
    component: ManutenirJogoComponent
  },
  {
    path: 'editarjogo/:nome',
    component: ManutenirJogoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

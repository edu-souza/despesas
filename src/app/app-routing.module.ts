import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImportarComponent } from './importar/importar.component';
import { HomeComponent } from './home/home.component';
import { MovimentosComponent } from './movimentos/movimentos.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'importar', component: ImportarComponent},
  {path: 'movimentos', component: MovimentosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
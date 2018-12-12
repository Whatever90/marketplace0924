import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeNewComponent } from './home-new/home-new.component';

const routes: Routes = [
	{ path: 'players/addplayer', component: HomeNewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

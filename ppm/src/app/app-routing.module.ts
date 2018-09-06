import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { ProductsComponent } from './products/products.component';
import { DeleteComponent } from './delete/delete.component';
import { HomeListComponent } from './home/home-list/home-list.component';
import { ConversationComponent } from './conversation/conversation.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: NewComponent},
  { path: 'user/:id', component: HomeListComponent, pathMatch: 'full'  },
  { path: 'product/:id', component: ProductsComponent },
  { path: 'conversation/:con_id', component: ConversationComponent},

  { path: '**', component: DeleteComponent },
  // { path: 'players/addplayer', component: HomeNewComponent },
  // { path: 'players/delete/:id', component: HomeNewComponent },

  // { path: 'status/game/2', component: ProductsComponent },
  // { path: 'status/game/3', component: DeleteComponent },
  // { path: 'products/edit/:id', component: EditComponent },
  // { path: 'products/new', component: NewComponent },
  // { path: 'products/delete/:id', component: DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

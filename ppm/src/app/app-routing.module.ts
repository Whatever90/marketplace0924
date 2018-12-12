import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { DeleteComponent } from './delete/delete.component';
import { UserComponent } from './user/user.component';
import { ConversationComponent } from './conversation/conversation.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'user/:id', component: UserComponent, pathMatch: 'full'  },
  { path: 'product/:id', component: ProductsComponent },
  { path: 'conversation', component: ConversationComponent},

  { path: '**', component: DeleteComponent }, // PAGE NOT FOUND
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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { DragScrollModule } from 'ngx-drag-scroll';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { TaskService } from './task.service';
import { DeleteComponent } from './delete/delete.component';

import { UserComponent } from './user/user.component';
import { HomeNewComponent } from './home/home-new/home-new.component';

import { HttpClientModule } from '@angular/common/http';
import { ConversationComponent } from './conversation/conversation.component';
// import { Routes, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    EditComponent,
    LoginComponent,
    DeleteComponent,
    UserComponent,
    HomeNewComponent,
    ConversationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    DragScrollModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }

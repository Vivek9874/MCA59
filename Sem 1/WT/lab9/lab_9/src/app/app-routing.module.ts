// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { AppComponent } from './app.component';
// import { InsertComponent } from './insert/insert.component';

// const routes: Routes = [
//   { path: '/', component:AppComponent},
//   {path: 'insert', component:InsertComponent}
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { HomeComponent } from './home/home.component';
import { InsertComponent } from './insert/insert.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  { path: 'insert', component: InsertComponent },
  {path: 'view', component: ViewComponent},
  {path: 'update', component: UpdateComponent},
  {path: 'update/:id', component: UpdateComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}


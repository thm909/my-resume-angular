import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Hobbies } from './pages/hobbies/hobbies';
import { Contact } from './pages/contact/contact';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
const routes: Routes = [
  { path: '', component: Home },
  { path: 'hobbies', component: Hobbies },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })], // ✅ 使用 hash 路由
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class AppRoutingModule { }

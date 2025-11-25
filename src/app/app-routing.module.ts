import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Hobbies } from './pages/hobbies/hobbies';
import { Contact } from './pages/contact/contact';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'hobbies', component: Hobbies },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

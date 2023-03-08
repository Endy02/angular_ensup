import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core/core.component';
import { CoursesComponent } from './courses/courses.component';
import { MusicComponent } from './music/music.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TodoComponent } from './todo/todo.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: CoreComponent},
  {path: 'users', component: UsersComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'music', component: MusicComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

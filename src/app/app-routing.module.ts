import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { RepositoryComponent } from './repository/repository.component';


const routes: Routes = [
  {path: 'homepage', component : HomepageComponent},
  {path: 'repository', component : RepositoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

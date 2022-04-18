import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ProfileServiceService } from '../profile-service.service';
import { User } from '../user';
import { Repository } from '../repository';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  user!:User;
  repository!:any;

  constructor(private profileRequest:ProfileServiceService) {
    this.user= new User('','',0,0,0,'','','','');
    this.repository=new Repository('','','','');
   }

  searchRepo(search:any){
    this.profileRequest.profileInformation(search).then((success)=>{
      this.user=this.profileRequest.user
      console.log(this.user)

    })
    this.profileRequest.showRepos(search).then((success)=>{
      this.repository=this.profileRequest.repository
      console.log(this.repository)
    })
  }
  ngOnInit(): void {

   
  }

}

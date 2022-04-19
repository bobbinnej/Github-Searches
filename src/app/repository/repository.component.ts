import { Component, OnInit } from '@angular/core';
import { ProfileServiceService } from '../profile-service.service';
import { User } from '../user';
import { Repository } from '../repository';


@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  
  searchTerm="bobbinnej"
  user!:any
  repo!:any


  constructor(private profileserviceservice:ProfileServiceService){
    this.user= new User('','',0,0,0,'','','','');
    this.repo=new Repository('','','','');
  }

  getexpectedOutput(searchProfile:any):void{
    this.searchTerm= searchProfile
    this.getInformation=(searchProfile)
    this.getRepos=(searchProfile)
  
    
   
    this.profileserviceservice.getUser(this.searchTerm).then((user)=>{(this.user=user)         
    console.log(user)
    this.profileserviceservice.getRepository(this.searchTerm).subscribe((repo)=>{this.repo})

    });
    

  }

  getInformation(searchTerm:string):void{
       this.profileserviceservice.getUser(searchTerm).then((user)=>(this.user))
  }
  getRepos(searchTerm:string):void{
       this.profileserviceservice.getRepository(searchTerm).subscribe(repo=>{
         this.repo=repo;
         console.log(repo)
       })
  }


  ngOnInit(): void {
    this.getInformation(this.searchTerm)
    this.getRepos(this.searchTerm)
  }

}

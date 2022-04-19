import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ProfileServiceService } from '../profile-service.service';
import { Repository } from '../repository';
import { User } from '../user';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  

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


//   @Input() users!: String[];
//   user!:User;
//   repository!:any;

//   constructor(private profileRequest:ProfileServiceService) {
//     this.user= new User('','',0,0,0,'','','','');
//     this.repository=new Repository('','','','');
//    }

//   searchRepo(search:any){
//   this.profileRequest.profileInformation(search).then((success)=>{
//   this.user=this.profileRequest.user
//   console.log(this.user)

//    })
//  this.profileRequest.showRepos(search).then((success)=>{
//      this.repository=this.profileRequest.repository
//       console.log(this.repository)
//    })
//    }
   ngOnInit():void {
     
    this.getInformation(this.searchTerm)
    this.getRepos(this.searchTerm)
   
   
   }

}

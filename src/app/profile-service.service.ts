import { Injectable } from '@angular/core';
import { Repository } from './repository';
import { User } from './user';
import {HttpClient} from '@angular/common/http';
import  {environment} from 'src/environments/environment';
import { PropertyRead } from '@angular/compiler';
import { observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {
  // /**I have created object user and repository the assigned them to the User and Repository 
  //  * blueprint classes respectively
  //  */
  user:User;
  repository:Repository;

  repositoryArray: Repository[]=[];
 
  // newUser:any
 //  newRepo:any 
  // private userName:string;

  constructor(private http: HttpClient) { 
    this.user= new User('','',0,0,0,'','','','');
    this.repository=new Repository('','','','');
  }

    profileInformation(search:string){
      interface ApiResponse{
        login:string;
        avatar_url:string,
        followers:number,
        following:number,
        users:number,
        name:string,
        bio:string,
        html_url:string,
        public_repos:string,

               
      }
    }

    async search(){
      try{
        const response=await axios.get(environment.apikey + "bobbinnej",{headers:{"Authorization":environment.apikey}});
        const repositoryResponse=await axios.get("https://api.github.com/users/bobbinnej/repos");
        console.log(repositoryResponse.data)
        console.log(response.data)
        const expectedResponse=response.data
        const repositoryResponseArray=repositoryResponse.data
        this.user.login=expectedResponse.data
        this.user.avatar_url=expectedResponse.data
        this.user.bio=expectedResponse.data
        this.user.followers=expectedResponse.data
        this.user.following=expectedResponse.data
        this.user.html_url=expectedResponse.data

        for (const item of repositoryResponseArray){
          this.repositoryArray.push(new Repository(item.name, item.html_url, item.language, item.description))
        }
        console.log(this.repositoryArray)
      }catch(e){alert(e);}
    }


  //   this.user=new User('','','','','','','','',new Date);
  //   this.repository= new Repository('','','');
  
  //   this.userName='bobbinnej';
  // }

  // get userInformation(){

  //   interface ApiResponse{
  //     login:string;
  //     avatar_url:string;
  //     followers_url:string;
  //     following_url:string;
  //     public _repos:string;
  //     name:string;
  //     location:string;
  //     html_url:string;
  //     createdat:Date;


  //   }
  //   const promise = new Promise(((resolve,reject)=>{
  //     this.http.get<ApiResponse>('https://api.github.com/users/' + this.userName
  //     +'?access_token='+environment.apikey)
  //     .toPromise().then(response =>{
  //       this.user.login=response.login;
  //     }
      
  //   }
    



    
  // }


}

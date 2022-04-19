import { Injectable } from '@angular/core';
import { Repository } from './repository';
import { User } from './user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import  {environment} from 'src/environments/environment';
import { lastValueFrom, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ProfileServiceService {

  BASE_URL="https://api.github.com"
   async getUser(searchTerm: string){
    const searchItem = this.http.get<any>(`${this.BASE_URL}/users/${searchTerm}`)
    return await lastValueFrom(searchItem).then((response)=>
      response
    )
  }

  getRepository(searchTerm: string): Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/users/${searchTerm}/repos`)


  }

  constructor(private http: HttpClient) { 

  }

}


//   // /**I have created object user and repository the assigned them to the User and Repository 
//   //  * blueprint classes respectively
  
// //   //  */
  
//   user!:User;
//  repository!:any;

// // 
// repositoryArray: Repository[]=[];
 
// //  newUser:any
// //  newRepo:any //   // private userName:string;

//   constructor(private http: HttpClient) { 
//     this.user= new User('','',0,0,0,'','','','');
//     this.repository=new Repository('','','','');
//     console.log("test your service")
//   }

//    profileInformation(searchItem:string){
//      interface ApiResponse{
//        login:string;
//        avatar_url:string,
//        followers:number,
//        following:number,
//        users:number,
//        name:string,
//        bio:string,
//        html_url:string,
//        public_repos:string,
//      }

//      let headers= new HttpHeaders({
//       Authorization:'token' + environment.apikey,
         
//       })
          
//      let opt={headers:headers}
//      let fullUrl= environment.apiUrl + searchItem;
//      let promise = new Promise((resolve,reject) =>{
//         this.http.get<ApiResponse>(fullUrl,opt).toPromise().then(response=>{
//           this.user.login=response!.login
//           this.user.avatar_url=response!.avatar_url
//           this.user.followers=response!.following
//           this.user.following=response!.following
//           this.user.bio=response!.bio
//           this.user.html_url=response!.html_url
//           this.user.public_repos=response!.public_repos

//            console.log(this.user)
//         resolve(null)
//         },
//         error=>{
//           reject(error)
//         })
        
//       })
//      return promise
//     }

//     showRepos(username:any){
//       interface ApiResponse{
//        login:string
//         html_url:string,
//         description:string,
//         language:string,
//        }
//      let repoUrl= environment.apiUrl + username +'/repos';
//       let promise=new Promise((resolve,reject )=>{
//         this.http.get<ApiResponse>(repoUrl).toPromise().then(response=>{
//           this.repository=response!
          
//          console.log(this.repository)
//           resolve(null)
//        },
//       error=>{
//           reject();
//           console.log(error)
//        })
        
          
//       });
//       return promise
//     }
  

 
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
      
    
    



    
  




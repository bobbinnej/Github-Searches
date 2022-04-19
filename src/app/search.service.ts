import { Injectable } from '@angular/core';
import { Repository } from './repository';
import { User } from './user';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  user!:User;
  repository!:Repository;

  repositoryArray: Repository[]=[];


  constructor() {

    this.user= new User('','',0,0,0,'','','','');
    this.repository=new Repository('','','','');
    console.log("test your service")
   }
   async SearchUsername(searchPerson:any){
     try {
       const userResponse= await axios.get(environment.apiUrl+searchPerson.searchQuery,{headers:{"Authorization": environment.apikey}})
       const userRepositoryResponse= await axios.get('https://api.github.com/users/${searchPerson.searchQuery}/repos')
       console.log(userResponse.data)
       console.log(userRepositoryResponse.data)

       const userDetails=userResponse.data
       const userRepositoryArray=userRepositoryResponse.data

       for (const item of userRepositoryArray){
         this.repositoryArray.push(new Repository(item.name, item.description, item.language, item.html_url))

       };
       console.log(this.repositoryArray)
       
     } catch (error){alert(error)} {
       
     }
   }
}

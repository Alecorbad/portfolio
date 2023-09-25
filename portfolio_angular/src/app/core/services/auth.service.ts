import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {User} from "../models/user.models";
import {asyncCall} from "../models/asyncFunctions";
import {Observable} from "rxjs";
import {DataResponse} from "../models/http.models";

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService{
  loggedUser: User | null = null;


  constructor(){
    super();
  }

  getUser(name: string){
    asyncCall(() => this.getUserAPI(name),
      response => {
        if(response.item != null){
          this.loggedUser = response.item;
        }
        else{
          asyncCall(() => this.createUserAPI(name),
              response => {

              }
            )
        }
      },
      () => {

      });
  }


  getUserAPI(name: string): Observable<DataResponse<User>>{
    return this.httpService.get(`http://localhost:8080/api/user/${name}`);
  }

  createUserAPI(name: string): Observable<DataResponse<Response>>{
    return this.httpService.post(`http://localhost:8080/api/user`, name);
  }



}

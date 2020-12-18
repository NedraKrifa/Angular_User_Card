import { Injectable } from '@angular/core';
import ListUsers from '../../assets/List-users.json';
import { User } from '../entity/User';
@Injectable({
  providedIn: 'root'
})
export class ApiUsersService {

  constructor() { }
  
  getUsers(): any {

    console.log(ListUsers);
    return ListUsers.ListUsers
  }

  // Add user
  addTodo(user:User): any {
    ListUsers.ListUsers.push(user);
    console.log("user");
    return ListUsers.ListUsers

  }

}

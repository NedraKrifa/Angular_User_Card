import {Component, OnInit} from '@angular/core';
import {User} from './entity/User';
import { ApiUsersService } from './services/api-users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // 
  constructor(private ApiUsersService: ApiUsersService) { }

  title = 'test-technique';
  listUsers:User[];
  ngOnInit(): void {
    this.LoadListUsersFromJson();
  }
  /*
  * @ToDo
  * */
  LoadListUsersFromJson(){
   this.listUsers = this.ApiUsersService.getUsers();
  }

  /*
  * @ToDo
  * */
  SaveListUsersInJson(){
    
  }

  

}

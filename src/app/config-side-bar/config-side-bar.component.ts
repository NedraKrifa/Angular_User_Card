import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { ApiUsersService } from '../services/api-users.service';

@Component({
  selector: 'app-config-side-bar',
  templateUrl: './config-side-bar.component.html',
  styleUrls: ['./config-side-bar.component.css']
})
export class ConfigSideBarComponent implements OnInit {
  @Output() SaveListUsersInJson: EventEmitter<any> = new EventEmitter();

  nom:string;
  prenom:string;
  nomberEnfants:number;

   // 
   constructor(private ApiUsersService: ApiUsersService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    const user = {
      nom: this.nom,
      prenom:this.prenom,
      nombre_enfants:this.nomberEnfants
    }
    console.log(user);

    this.ApiUsersService.addTodo(user);
  }

}

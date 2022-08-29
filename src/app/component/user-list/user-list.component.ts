import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any = [];

  constructor(
    private _userService: UserService
  ) {
  }

  ngOnInit(): void {
    setTimeout(function(){
      $(function(){
        $('#datatable-example').DataTable();
      });
    }, 500);

    this.fetchAllUsers();
  }

  fetchAllUsers(): void {
    this._userService.getAllUsers().subscribe(
      response => {
        console.log('response', response);
        this.users = response;
      },
      error => {
        console.log('error', error);
      }
    );
  }

}

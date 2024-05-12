import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  userList: any = [];

  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor(private userService: UserService) {
    this.getUserList();
  }

  getUserList() {
    this.userService.getUsers().subscribe((response: any) => {
      this.userList = response.result;
    })
  }

  onSubmit() {
    console.log("test", this.userForm.value)
    this.userService.createUser(this.userForm.value).subscribe((response: any) => {
      debugger;
    })
  }

}

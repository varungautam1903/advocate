import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  userList: any = [];

  userForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    middleName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    dob: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    tel: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    travelNo: new FormControl('', [Validators.required]),
    medicalNo: new FormControl('', [Validators.required]),
    passportNo: new FormControl('', [Validators.required]),
    passporyExpiry: new FormControl('', [Validators.required])
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

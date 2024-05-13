import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  userList: any[] = [];

  userForm = new FormGroup({
    id: new FormControl(''),
    firstName: new FormControl('', [Validators.required]),
    middleName: new FormControl(''),
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
    let list = localStorage.getItem("userList") || undefined;
    if (list != undefined) {
      this.userList = JSON.parse(list)
    } else {
      this.getUserList();
    }
  }

  getUserList() {
    this.userService.getUsers().subscribe((response: any) => {
      this.userList = response.result;
      localStorage.setItem("userList", JSON.stringify(this.userList));
    })
  }

  onSubmit() {
    console.log("test", this.userForm.value)
    if (this.userForm.valid) {
      this.userForm.controls['id'].setValue(this.getRandom());
      this.userList.push(this.userForm.value);
      localStorage.setItem("userList", JSON.stringify(this.userList));
      this.userForm.reset();
    }
  }

  getRandom() {
    return btoa(Math.random().toString()).substring(0,12)
  }

  deleteUser(id: any) {
    this.userList = this.userList.filter(x => x.id != id);
    localStorage.setItem("userList", JSON.stringify(this.userList));
  }

}

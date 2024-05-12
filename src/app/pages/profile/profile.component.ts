import { Component } from '@angular/core';
import { first } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  loading = false;
  user: User;
  userFromApi?: User;
  userData: any = [];

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) {
    this.user = <User>this.authenticationService.userValue;
    this.loadUserData();
  }

  ngOnInit() {
  }

  loadUserData() {
    this.userData = [
      { firstName: "Chandra", middleName: "", lastName: "Joshi", dob: "01 Jan 2024", tel: "1234567890", address: "Snowshill garden" },
      { firstName: "Pankaj", middleName: "", lastName: "Joshi", dob: "01 Jan 2024", tel: "1234567890", address: "Snowshill garden" }
    ]
  }
}

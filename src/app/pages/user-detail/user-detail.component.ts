import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {

  user: any;

  constructor(private route: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      const id = params['id'];
      this.getUser(id);
    })
  }

  getUser(id: any) {
    this.userService.getUsers().subscribe((response: any) => {
      debugger;
      this.user = response.result.find((x: any) => x.id == id) || 0;
    })
  }

}

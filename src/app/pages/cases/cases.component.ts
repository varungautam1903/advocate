import { Component } from '@angular/core';
import { CasesService } from 'src/app/services/cases.service';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent {

  casesList: any = [];

  constructor(private casesService: CasesService) {
    this.getCaseList();
  }

  getCaseList() {
    this.casesService.getCases().subscribe((response: any) => {
      this.casesList = response.result;
    })
  }

}

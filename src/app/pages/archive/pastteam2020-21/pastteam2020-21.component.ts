import { Component, OnInit } from '@angular/core';
import { GetjsonfileService } from '../../../services/getjsonfile.service';

@Component({
  selector: 'app-pastteam2020-21',
  templateUrl: './pastteam2020-21.component.html',
  styleUrls: ['./pastteam2020-21.component.scss']
})
export class Pastteam2020To21Component implements OnInit {

  nvbaTeam : any;
  constructor(private jsonFile:GetjsonfileService) { }

  ngOnInit(): void {
    this.jsonFile.pageData('ecm-20-21').subscribe(data => {
         ////console.log(data);
         this.nvbaTeam = data;
       });
  }

}

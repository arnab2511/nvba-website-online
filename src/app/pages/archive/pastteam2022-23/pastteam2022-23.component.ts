import { Component, OnInit } from '@angular/core';
import { GetjsonfileService } from 'src/app/services/getjsonfile.service';

@Component({
  selector: 'app-pastteam2022-23',
  templateUrl: './pastteam2022-23.component.html',
  styleUrls: ['./pastteam2022-23.component.scss']
})
export class Pastteam2022To23Component implements OnInit {

  nvbaTeam : any;
  constructor(private jsonFile:GetjsonfileService) { }

  ngOnInit(): void {
    this.jsonFile.pageData('ecm-22-23').subscribe(data => {
         ////console.log(data);
         this.nvbaTeam = data;
       });
  }

}

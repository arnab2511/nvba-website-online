import { Component, OnInit } from '@angular/core';
import { GetjsonfileService } from './../../../services/getjsonfile.service';

@Component({
  selector: 'app-techadvisor',
  templateUrl: './techadvisor.component.html',
  styleUrls: ['./techadvisor.component.scss']
})
export class TechadvisorComponent implements OnInit {

  nvbaTeam : any;
  constructor(private jsonFile:GetjsonfileService) { }

  ngOnInit(): void {
    this.jsonFile.pageData('tech-advisor').subscribe(data => {
      ////console.log(data);
      this.nvbaTeam = data;
    });
}

}

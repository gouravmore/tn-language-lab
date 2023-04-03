import { Component, OnInit } from '@angular/core';
import { LevelService } from './level.service';
import { TelemetryService } from '../../../telemetry.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss']
})
export class LevelComponent implements OnInit {
  lesson: string
  topic: string
  constructor(public levelService: LevelService,  public telemetryService: TelemetryService, private route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      this.lesson = params.lesson
      this.topic = params.topic
    }
  );
  }

  gotoNextpage(){
    this.levelService.viewPage = this.levelService.viewPage + 1;
  }

}

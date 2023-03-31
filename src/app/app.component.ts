import { Component, OnInit } from '@angular/core';
import { SpinnerComponent } from './views/component/spinnercomponent/spinner.component';
import { TelemetryService } from './telemetry.service';
import { LogsService } from './logs.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  spinnerComponent = SpinnerComponent;
  title = 'TNEMIS';

  constructor(
    public telemetryService: TelemetryService,public logsService: LogsService
  ) {
  }

  ngOnInit() {
    console.log(environment)
    let service = this.logsService;
    this.telemetryService.initialize({
      context: {
        mode: 'play',  // To identify preview used by the user to play/edit/preview
        authToken: '', // Auth key to make  api calls
        env:"",
        uid: 'anonymous', // Current logged in user id
        pdata: {// optional
          id: 'langlab.portal', // Producer ID. For ex: For sunbird it would be "portal" or "genie"
          ver: '1.0.0', // Version of the App
          pid: 'langlab-portal.portal' // Optional. In case the component is distributed, then which instance of that component
        },
        tags: [ // Defines the tags data
          ''
        ],
        timeDiff: 0,  // Defines the time difference// Defines the object roll up data
        host: 'http://localhost:4000',
        apislug: '/telemetry/',
        endpoint: 'upload'
      },
      config: {
      },
      // tslint:disable-next-line:max-line-length
      metadata: {
      }
    });
    console.log('telemetry');
    this.telemetryService.start('langulagelab');
  }
}

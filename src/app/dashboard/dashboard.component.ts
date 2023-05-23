import { Component, ViewChild } from '@angular/core';
import { IReportEmbedConfiguration, models, Page, Report, service, Embed } from 'powerbi-client';
import { PowerBIReportEmbedComponent } from 'powerbi-client-angular';
import reportdata from '../../assets/reportdata.json';
import { ReportData } from '../model/reportdata';
import { HttpClient } from '@angular/common/http';
import { tokenUrl } from '../model/constants';
import { HttpService } from '../services/http.service';
import { TokenInfo } from '../model/TokenInfo';
// import 'powerbi-report-authoring';

export interface ConfigResponse {
  Id: string;
  EmbedUrl: string;
  EmbedToken: {
    Token: string;
  };
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  role:string;
  @ViewChild(PowerBIReportEmbedComponent) reportObj!: PowerBIReportEmbedComponent;
  reportClass = 'report-container';
  phasedEmbeddingFlag = false;
  reportdata: ReportData=reportdata; 
  constructor(public httpService: HttpService) {}

  // Pass the basic embed configurations to the wrapper to bootstrap the report on first load
  // Values for properties like embedUrl, accessToken and settings will be set on click of button
  reportConfig: IReportEmbedConfiguration = {
    type: 'report',
    embedUrl: undefined,
    tokenType: models.TokenType.Embed,
    accessToken: undefined,
    settings: undefined,
  };

  reportConfigNew: IReportEmbedConfiguration = {
    type: 'report',
    embedUrl: undefined,
    tokenType: models.TokenType.Embed,
    accessToken: undefined,
    settings: undefined,
  };

  /**
   * Map of event handlers to be applied to the embedded report
   */
  // Update event handlers for the report by redefining the map using this.eventHandlersMap
  // Set event handler to null if event needs to be removed
  // More events can be provided from here
  // https://docs.microsoft.com/en-us/javascript/api/overview/powerbi/handle-events#report-events
  eventHandlersMap = new Map ([
    ['loaded', () => {
        const report = this.reportObj.getReport();
        report.setComponentTitle('Embedded report');
        console.log('Report has loaded');
      },
    ],
    ['rendered', () => console.log('Report has rendered')],
    ['error', (event?: service.ICustomEvent<any>) => {
        if (event) {
          console.error(event.detail);
        }
      },
    ],
    ['visualClicked', () => console.log('visual clicked')],
    ['pageChanged', (event) => console.log(event)],
  ]) as Map<string, (event?: service.ICustomEvent<any>, embeddedEntity?: Embed) => void | null>;
  
  ngOnInit(){

  this.OnInitalLoad();

  
 
  }

  async OnInitalLoad(): Promise<void>{
    try {
      var fullTokenURL1 = tokenUrl + "workspaceid=" + reportdata.WorkspaceId + "&reportid=" + reportdata.ReportId1;
      let tokenResponse1:any;
      tokenResponse1 = await this.httpService.getTokenForReport(fullTokenURL1).toPromise();
      reportdata.ReportId1Token = tokenResponse1.token;

      var fullTokenURL2 = tokenUrl + "workspaceid=" + reportdata.WorkspaceId + "&reportid=" + reportdata.ReportId2;
      let tokenResponse2:any;
      tokenResponse2 = await this.httpService.getTokenForReport(fullTokenURL2).toPromise();
      reportdata.ReportId2Token = tokenResponse2.token;

      this.role= localStorage.getItem("loginRole") as string;
      console.log("this.role",this.role);
      this.reportConfig = {
        ...this.reportConfig,
        id: reportdata.ReportId1,
        embedUrl: "https://app.powerbi.com/reportEmbed?reportId="+reportdata.ReportId1+"&groupId="+reportdata.WorkspaceId,
        accessToken: reportdata.ReportId1Token,
      };

      this.reportConfigNew = {
        ...this.reportConfigNew,
        id: reportdata.ReportId2,
        embedUrl: "https://app.powerbi.com/reportEmbed?reportId="+reportdata.ReportId2+"&groupId="+reportdata.WorkspaceId,
        accessToken: reportdata.ReportId2Token,
      };

    } catch (error: any) {
      alert(`Failed to fetch config for report. Status: ${error.status} ${error.statusText}`);
      return;
    }
  }
}

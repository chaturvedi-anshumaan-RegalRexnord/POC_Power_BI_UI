"use strict";(self.webpackChunkSampleApplication=self.webpackChunkSampleApplication||[]).push([[299],{2299:(R,g,p)=>{p.r(g),p.d(g,{DashboardModule:()=>M});var f=p(6895),C=p(8996);function h(t,a,o,n,i,d,s){try{var l=t[d](s),c=l.value}catch(O){return void o(O)}l.done?a(c):Promise.resolve(c).then(n,i)}var m=p(8551),u=p(9683);const r=JSON.parse('{"WorkspaceId":"30fcf1b3-725a-4fca-9c7b-2eab95ab1599","ReportId1":"5fe3101a-b613-4ee5-8497-70b8910e32dd","ReportId2":"95267477-9d22-4dcc-9588-aeeefddfc532","ReportId1Token":"","ReportId2Token":""}'),b="https://localhost:44365/EmbedInfo/GetTokenForReport?";var e=p(4650),v=p(529);let I=(()=>{class t{constructor(o){this.httpClient=o}getTokenForReport(o){return this.httpClient.get(o)}}return t.\u0275fac=function(o){return new(o||t)(e.LFG(v.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function k(t,a){if(1&t&&(e.TgZ(0,"div",5),e.ynx(1),e._UZ(2,"powerbi-report",6),e.BQk(),e.qZA()),2&t){const o=e.oxw();e.xp6(2),e.Q6J("embedConfig",o.reportConfig)("cssClassName",o.reportClass)("phasedEmbedding",o.phasedEmbeddingFlag)("eventHandlers",o.eventHandlersMap)}}function y(t,a){if(1&t&&(e.TgZ(0,"div",5),e.ynx(1),e._UZ(2,"powerbi-report",6),e.BQk(),e.qZA()),2&t){const o=e.oxw();e.xp6(2),e.Q6J("embedConfig",o.reportConfigNew)("cssClassName",o.reportClass)("phasedEmbedding",o.phasedEmbeddingFlag)("eventHandlers",o.eventHandlersMap)}}const T=[{path:"",component:(()=>{class t{constructor(o){this.httpService=o,this.reportClass="report-container",this.phasedEmbeddingFlag=!1,this.reportdata=r,this.reportConfig={type:"report",embedUrl:void 0,tokenType:m.models.TokenType.Embed,accessToken:void 0,settings:void 0},this.reportConfigNew={type:"report",embedUrl:void 0,tokenType:m.models.TokenType.Embed,accessToken:void 0,settings:void 0},this.eventHandlersMap=new Map([["loaded",()=>{this.reportObj.getReport().setComponentTitle("Embedded report"),console.log("Report has loaded")}],["rendered",()=>console.log("Report has rendered")],["error",n=>{n&&console.error(n.detail)}],["visualClicked",()=>console.log("visual clicked")],["pageChanged",n=>console.log(n)]])}ngOnInit(){this.OnInitalLoad()}OnInitalLoad(){var o=this;return function x(t){return function(){var a=this,o=arguments;return new Promise(function(n,i){var d=t.apply(a,o);function s(c){h(d,n,i,s,l,"next",c)}function l(c){h(d,n,i,s,l,"throw",c)}s(void 0)})}}(function*(){try{var n=b+"workspaceid="+r.WorkspaceId+"&reportid="+r.ReportId1;let d;d=yield o.httpService.getTokenForReport(n).toPromise(),r.ReportId1Token=d.token;var i=b+"workspaceid="+r.WorkspaceId+"&reportid="+r.ReportId2;let s;s=yield o.httpService.getTokenForReport(i).toPromise(),r.ReportId2Token=s.token,o.role=localStorage.getItem("loginRole"),console.log("this.role",o.role),o.reportConfig={...o.reportConfig,id:r.ReportId1,embedUrl:"https://app.powerbi.com/reportEmbed?reportId="+r.ReportId1+"&groupId="+r.WorkspaceId,accessToken:r.ReportId1Token},o.reportConfigNew={...o.reportConfigNew,id:r.ReportId2,embedUrl:"https://app.powerbi.com/reportEmbed?reportId="+r.ReportId2+"&groupId="+r.WorkspaceId,accessToken:r.ReportId2Token}}catch(d){return void alert(`Failed to fetch config for report. Status: ${d.status} ${d.statusText}`)}})()}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(I))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-dashboard"]],viewQuery:function(o,n){if(1&o&&e.Gf(u.$i,5),2&o){let i;e.iGM(i=e.CRH())&&(n.reportObj=i.first)}},decls:12,vars:2,consts:[[1,"container"],[1,"header"],["href","/login"],["class","controls",4,"ngIf"],[1,"footer"],[1,"controls"],[3,"embedConfig","cssClassName","phasedEmbedding","eventHandlers"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div"),e._uU(3,"Power BI Embedded Angular Component Demo"),e.qZA(),e.TgZ(4,"div")(5,"a",2),e._uU(6,"Logout"),e.qZA()()(),e.YNc(7,k,3,4,"div",3),e.YNc(8,y,3,4,"div",3),e.TgZ(9,"div",4)(10,"p"),e._uU(11,"Power BI Embedded Analytics"),e.qZA()()()),2&o&&(e.xp6(7),e.Q6J("ngIf","admin"===n.role||"enterprise user"==n.role),e.xp6(1),e.Q6J("ngIf","admin"==n.role||"user"==n.role))},dependencies:[f.O5,u.$i],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100vh}.header[_ngcontent-%COMP%]{background:#3476ae 0 0 no-repeat padding-box;border:1px solid #707070;color:#fff;font:700 22px/27px Segoe UI;padding:13px 13px 13px 36px;text-align:left}.position[_ngcontent-%COMP%]{margin-top:40vh!important}.display-message[_ngcontent-%COMP%]{align-items:center;display:flex;font:400 18px/27px Segoe UI;height:30px;justify-content:center;margin-top:8px;text-align:center}.controls[_ngcontent-%COMP%]{margin-top:20px;text-align:center;flex:1}button[_ngcontent-%COMP%]{background:#337ab7;border:0;border-radius:5px;color:#fff;font-size:16px;height:35px;margin-right:15px;width:160px}button[_ngcontent-%COMP%]:hover{cursor:pointer}.embed-report[_ngcontent-%COMP%]{margin-top:18px;text-align:center;margin-right:0}.footer[_ngcontent-%COMP%]{align-items:center;background:#f7f8fa 0 0 no-repeat padding-box;display:flex;font:400 16px/21px Segoe UI;height:42px;justify-content:center;width:100%}.footer[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{padding:0 3px}.footer-icon[_ngcontent-%COMP%]{border-radius:50%;height:22px;vertical-align:middle}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#3a3a3a;text-decoration:underline}body[_ngcontent-%COMP%]{font-family:Segoe UI;margin:0}iframe[_ngcontent-%COMP%]{border:none}.report-container[_ngcontent-%COMP%]{height:75vh;margin:8px auto;width:90%}"]}),t})()}];let M=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[f.ez,C.Bz.forChild(T)]}),t})()}}]);
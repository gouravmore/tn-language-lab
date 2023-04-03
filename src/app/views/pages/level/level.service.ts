import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TelemetryService } from '../../../telemetry.service';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  viewPage = 1;
  lessonData = {};
  data = '';
  currentLessonData: any;
  nextLessonData: any;
  nextLessonPath = '';
  nextLessonId =  '';
  path;
  mechanic :any;
  constructor(private httpService: HttpClient, public telemetryService: TelemetryService, private _route: ActivatedRoute,
    private _router: Router) { }

  getJson(basePath,lid) {
    return this.httpService.get('../../../../assets/lessons/'+ basePath +'/'+lid+'/'+lid+'.json');
  }

  getCollection(){
    return this.httpService.get('../../../../assets/jsons/collection.json');
  }

  playNextLesson(){
    this.currentLessonData = this.getNextLesson();
    this._router.navigate(['/level'], {
      queryParams: {
        lesson: this.currentLessonData.pid,
        topic: this.currentLessonData.lid
      }
    });
  }

  getNextLesson(){
    let index = 0;
    let nextId = '';
    this.nextLessonData.forEach(lesson => {
      index++;
      this.currentLessonData = this.currentLessonData ? this.currentLessonData : {lid: "lesson1", pid: "speakWithMe"}
      if(this.currentLessonData.lid === lesson.lid && this.currentLessonData.pid === lesson.pid){
        nextId = this.nextLessonData[index];
      }

    })
    return nextId;
  }

  getLesson(basePath,lessonId){
    this.currentLessonData = {lid: lessonId, pid: basePath};
    this.telemetryService.impression("level", this._router.url);
    console.log(lessonId);
    localStorage.setItem("basePath", JSON.stringify(basePath));
    localStorage.setItem("lessonId", JSON.stringify(lessonId));
    this.getJson(basePath, lessonId).subscribe(res =>
      this.lessonData = res
    );
    console.log(this.lessonData);
    return this.lessonData;
  }


}

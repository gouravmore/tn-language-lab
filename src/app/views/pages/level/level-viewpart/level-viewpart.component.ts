import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList, Input } from '@angular/core';
import { NgModel } from '@angular/forms';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'
import { LevelService } from '../level.service';

@Component({
  selector: 'app-level-viewpart',
  templateUrl: './level-viewpart.component.html',
  styleUrls: ['./level-viewpart.component.scss']
})
export class LevelViewpartComponent implements OnInit {
  @ViewChildren('jslist') jslist: QueryList<ElementRef>;
  // @Input() viewPage;

  getQustion: any[];
  jsonList: any[];
  answerBox: boolean = false;

  constructor(
    public sanitizer: DomSanitizer,
    public levelService: LevelService
  ) { }

  ngOnInit(): void {
    this.initJsonList();

  }

  initJsonList(){
    this.jsonList = [
      {
        "id":'1',
        "question":'It is a long established fact <span class="input-bx" (drop)="drop($event)" pDroppable></span> a reader will be distracted by <span class="input-bx" (drop)="drop($event)" pDroppable></span> readable content of a page <span class="input-bx" (drop)="drop($event)" pDroppable></span> looking at its layout.',
        "crctques":'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        "ops_list":['that','the','when'],
        "getques":'',
      },
      {
        "id":'2',
        "question":'It is a long established fact <span class="input-bx" (drop)="drop($event)" pDroppable></span> a reader will be distracted by <span class="input-bx" (drop)="drop($event)" pDroppable></span> readable content of a page <span class="input-bx" (drop)="drop($event)" pDroppable></span> looking at its layout.',
        "crctques":'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        "ops_list":['that','the','when'],
        "getques":'',
      }
    ]
  }

  allowDrop(ev){
    ev.preventDefault();
  }

  drag(ev){
    ev.dataTransfer.setData("Text",ev.target.id);
  }

  drop(ev){
    ev.preventDefault();
    var data=ev.dataTransfer.getData("Text");
    ev.target.parentNode.replaceChild(document.getElementById(data), ev.target);
    document.getElementById(data).className = "droped_cls";
  }

  getValue(){
    // this.getQustion = [];
    // console.log('"Get Value is" -> ',this.myNameElem.nativeElement.innerText);
    // this.getQustion = this.jslist.nativeElement.innerText
    this.answerBox = true;
    this.jslist.forEach(i => {
      // this.getQustion.push(i.nativeElement.innerText);
      var splite_id = i.nativeElement.id.split('_')[1]
      this.jsonList.forEach(j => {
        if(splite_id == j.id){
          j.getques = i.nativeElement.innerText;
        }
      })
    });
    console.log(this.jsonList,'this.jsonList')
  }
   gotoNextpage(){
    this.levelService.viewPage = this.levelService.viewPage + 1;
   }
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DataService } from '../services/data.service';
import { environment } from 'src/environments/environment';

declare var db: any

@Injectable()

export class CommonService {
  // private getSignedUrlApi = environment.getSignedUrlApi;
  // private readingFileApi = environment.readingFileApi;
  public globalservice:any;
  public globalSchlUdise: any;
  
  //indexeddb storage name
  public storageName = "DashboardIndexDB";

  constructor(private dataService: DataService) { };

  getSignedUrl(bucketName:any, ext:any, fileName:any, expiry:any) {
    let params = { "bcktId": bucketName, "ext": ext, "filename": fileName, "expiry": expiry };
    //return this.dataService.getDataWithParams(this.getSignedUrlApi, params, true)
  }

  uploadFile(path:any, file:any) {
    return this.dataService.put(path, file);
  }

  getUploadedFiles(bucketName:any, fileName:any, expiry:any) {
    let params = { "bcktId": bucketName, "filename": fileName, "expiry": expiry };
    //return this.dataService.getDataWithParams(this.readingFileApi, params, true)
  }

  all_block_API_1(data:any, refresh:any) {
    return this.dataService.post('/api/commonDrpdwn', data);
  }
  getaccadyear() {
    var CurrentYear: any;
    var resultYear: string;
    var current_month = new Date().getMonth();
    if (current_month >= 5) {
      CurrentYear = (new Date()).getFullYear();
      var currentYearplusone = CurrentYear + 1;
      var lasttodigit = currentYearplusone.toString().substr(2, 2);
      resultYear = CurrentYear + "-" + lasttodigit;
    } else {
      var Current_Year = new Date().getFullYear()
      CurrentYear = new Date().getFullYear().toString().substr(2, 2);
      var currentyearminus = Current_Year - 1;
      resultYear = currentyearminus + "-" + CurrentYear;
    }
    return resultYear == null ? '' : resultYear;
  }
  getaccadyeardropdwn() {
    var CurrentYear: any =(new Date()).getFullYear();
    var fullyear: any = (new Date()).getFullYear();
    var resultYear: string;
    var year:any[]=[];
    for (let i = 2019; i < CurrentYear; i++) {
        var value = i + 1;
        var lasttodigitdropdown = value.toString().substr(2, 2);
        year.push({value: i+"-"+lasttodigitdropdown, label: i + " to " + value});
    }
    var current_month = new Date().getMonth();
    if (current_month >= 5) {
      var currentYearplusone = CurrentYear + 1;
      var lasttodigit = currentYearplusone.toString().substr(2, 2);
      resultYear = CurrentYear + "-" + lasttodigit;
      year.push({ value: resultYear, label: fullyear + " to " + currentYearplusone})
    } else {
      var Current_Year = new Date().getFullYear();
      CurrentYear = new Date().getFullYear().toString().substr(2, 2);
      var currentyearminus = Current_Year - 1;
      resultYear = currentyearminus + "-" + CurrentYear;
      year.push({ value: resultYear, label: currentyearminus + " to " + fullyear})
    }
    return year == null ? '' : year;
  }

  //Session Storage
  setSessionStorage(key,data){
    sessionStorage.setItem(key,JSON.stringify(data))
  }

  getSessionStorage(key){
    return (sessionStorage.getItem(key)!==null) ? JSON.parse(sessionStorage.getItem(key)) : null;
  }

  //Indexed DB
  //Add and update both are one function
  add(keyname, value){
    return new Promise(async(resolve, reject) => {
      if(db != undefined){
        const request = await  db.transaction([this.storageName], "readwrite")
        .objectStore(this.storageName).put(JSON.stringify(value), keyname);
  
        request.onsuccess = await function(event){
          if(event.target.result){
            console.log('Success')
            resolve('Success')
          }
          else{
            console.log('Error')
            reject(false);
          }
        }
      }
    })
  }

  //Get data from indexed db
  get(keyname){
    return new Promise(async(resolve, reject) => {
      if(db != undefined){
        const request = await db.transaction([this.storageName], "readwrite")
        .objectStore(this.storageName).get(keyname);
  
        request.onsuccess = await function(event){
          if(event.target.result){
            resolve(event.target.result)
          }
          else{
            reject(false);
          }
        }
      }
    })
  }

  //Delete data from indexed db
  delete(keyname){
    return new Promise(async(resolve, reject) => {
      if(db != undefined){
        const request = await  db.transaction([this.storageName], "readwrite")
        .objectStore(this.storageName).delete(keyname);
  
        request.onsuccess = await function(event){
          if(event.target.result){
            console.log('Success')
            resolve('Success')
          }
          else{
            console.log('Error')
            resolve(false);
          }
        }
      }
    })
  }

  //Delete database from indexed db
  deleteindexedDb(dbName) {
    return new Promise(async(resolve, reject) => {
      if(db != undefined){
        const request = await indexedDB.deleteDatabase(dbName)
  
        request.onsuccess = await function(event){
          if(event){
            console.log('Success')
            resolve('Success')
          }
          else{
            console.log('Error')
            resolve(false);
          }
        }
      }
    })
    // var req = indexedDB.deleteDatabase(dbName);
    // req.onsuccess = function () {
    //     console.log("Deleted database successfully");
    // };
    // req.onerror = function () {
    //     console.log("Couldn't delete database");
    // };
    // req.onblocked = function () {
    //     console.log("Couldn't delete database due to the operation being blocked");
    // };
  }
}



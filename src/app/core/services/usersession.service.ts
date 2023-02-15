import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { UserSession } from '../models/usersession';

@Injectable()

export class UserSessionService {
  session = new UserSession();
  localStorageSessionKey: string;
  classId: any;

  constructor() {
    this.localStorageSessionKey = 'DOF-' + environment.apiBaseUrl + '-AuthData';
  }

  create(session: any) {// jshint ignore:line
    this.setLocalStorageProperties(session);
  }

  destroy() {// jshint ignore:line
    this.setLocalStorageProperties(new UserSession());
  }

  load() { // jshint ignore:line
    // const jsonData = localStorage.getItem(this.localStorageSessionKey);
    const jsonData1 = localStorage.getItem(this.localStorageSessionKey);
    const jsonData = window.atob(jsonData1)
    return jsonData;
  }

  authToken() {
    // const jsonData = localStorage.getItem(this.localStorageSessionKey);
    // return jsonData == null ? '' : JSON.parse(jsonData).authToken;
    if(localStorage.getItem(this.localStorageSessionKey)!=null && localStorage.getItem(this.localStorageSessionKey)!="{}")
    {
    // const jsonData = localStorage.getItem(this.localStorageSessionKey);
    const jsonData1 = localStorage.getItem(this.localStorageSessionKey);
    const jsonData = window.atob(jsonData1)
    return jsonData == null ? '' : JSON.parse(jsonData).authToken;
    }
    else if(localStorage.getItem(this.localStorageSessionKey)=="{}")
    {
      const jsonData = localStorage.getItem(this.localStorageSessionKey);
      return jsonData == null ? '' : JSON.parse(jsonData).authToken;
    }
  }


  userId(): number {
    // const jsonData = localStorage.getItem(this.localStorageSessionKey);
    const jsonData1 = localStorage.getItem(this.localStorageSessionKey);
    const jsonData = window.atob(jsonData1)

    return jsonData == null ? 0 : +JSON.parse(jsonData).userId;
  }
  // schoolName(): string {
  //   debugger;
  //   const jsonData = localStorage.getItem(this.localStorageSessionKey);
  //   return jsonData == null ? '' : +JSON.parse(jsonData).schoolName;
  // }
  schoolName() {
    // const jsonData = localStorage.getItem(this.localStorageSessionKey);
    const jsonData1 = localStorage.getItem(this.localStorageSessionKey);
    const jsonData = window.atob(jsonData1)

    return jsonData == null ? '' : JSON.parse(jsonData).schoolName;
  }
  userName() {
    // const jsonData = localStorage.getItem(this.localStorageSessionKey);
    const jsonData1 = localStorage.getItem(this.localStorageSessionKey);
    const jsonData = window.atob(jsonData1)

    return jsonData == null ? '' : JSON.parse(jsonData).username;
  }

  edn_dist_name() {
    // const jsonData = localStorage.getItem(this.localStorageSessionKey);
    const jsonData1 = localStorage.getItem(this.localStorageSessionKey);
    const jsonData = window.atob(jsonData1)

    return jsonData == null ? '' : JSON.parse(jsonData).edn_dist_name;
  }

  Socialname()  {
    // const jsonData = localStorage.getItem(this.localStorageSessionKey);
    const jsonData1 = localStorage.getItem(this.localStorageSessionKey);
    const jsonData = window.atob(jsonData1)

    return jsonData == null ? '' : JSON.parse(jsonData).Socialname;
  }
  cate_id()  {
    // const jsonData = localStorage.getItem(this.localStorageSessionKey);
    const jsonData1 = localStorage.getItem(this.localStorageSessionKey);
    const jsonData = window.atob(jsonData1)

    return jsonData == null ? '' : JSON.parse(jsonData).cate_id;
  }
  catty_id()  {
    // const jsonData = localStorage.getItem(this.localStorageSessionKey);
    const jsonData1 = localStorage.getItem(this.localStorageSessionKey);
    const jsonData = window.atob(jsonData1)

    return jsonData == null ? '' : JSON.parse(jsonData).catty_id;
  }
  manage_id()  {
    // const jsonData = localStorage.getItem(this.localStorageSessionKey);
    const jsonData1 = localStorage.getItem(this.localStorageSessionKey);
    const jsonData = window.atob(jsonData1)
    return jsonData == null ? '' : JSON.parse(jsonData).manage_id;
  }
  userType() {
    // const jsonData = localStorage.getItem(this.localStorageSessionKey);
    const jsonData1 = localStorage.getItem(this.localStorageSessionKey);
    const jsonData = window.atob(jsonData1)
    return jsonData == null ? '' : JSON.parse(jsonData).usertype;
  }
  schoolId() {
    // const jsonData = localStorage.getItem(this.localStorageSessionKey);
    const jsonData1 = localStorage.getItem(this.localStorageSessionKey);
    const jsonData = window.atob(jsonData1)
    return jsonData == null ? '' : JSON.parse(jsonData).schoolId;
  }
  schoolKeyId() {
    // const jsonData = localStorage.getItem(this.localStorageSessionKey);
    const jsonData1 = localStorage.getItem(this.localStorageSessionKey);
    const jsonData = window.atob(jsonData1)
    return jsonData == null ? '' : JSON.parse(jsonData).schoolKeyId;
  }
  schoolTypeId() {
    // const jsonData = localStorage.getItem(this.localStorageSessionKey);
    const jsonData1 = localStorage.getItem(this.localStorageSessionKey);
    const jsonData = window.atob(jsonData1)
    return jsonData == null ? '' : JSON.parse(jsonData).schoolTypeId;
  }
  teacherId() {
    // const jsonData = localStorage.getItem(this.localStorageSessionKey);
    const jsonData1 = localStorage.getItem(this.localStorageSessionKey);
    const jsonData = window.atob(jsonData1)
    return jsonData == null ? '' : JSON.parse(jsonData).teacherId;
  }
  subjects() {
    // const jsonData = localStorage.getItem(this.localStorageSessionKey);
    const jsonData1 = localStorage.getItem(this.localStorageSessionKey);
    const jsonData = window.atob(jsonData1)
    return jsonData == null ? '' : JSON.parse(jsonData).subjects;
  }
  schlId(){
    // const jsonData = localStorage.getItem(this.localStorageSessionKey);
    const jsonData1 = localStorage.getItem(this.localStorageSessionKey);
    const jsonData = window.atob(jsonData1)
    return jsonData == null ? '' : JSON.parse(jsonData).schlId;
  }

  cateType() {
    // const jsonData = localStorage.getItem(this.localStorageSessionKey);
    const jsonData1 = localStorage.getItem(this.localStorageSessionKey);
    const jsonData = window.atob(jsonData1)
    return jsonData == null ? '' : JSON.parse(jsonData).cateType;
  }
  teacherType() {
    // const jsonData = localStorage.getItem(this.localStorageSessionKey);
    const jsonData1 = localStorage.getItem(this.localStorageSessionKey);
    const jsonData = window.atob(jsonData1)
    return jsonData == null ? '' : JSON.parse(jsonData).teacherType;
  }
  userTypeId() {
    // const jsonData = localStorage.getItem(this.localStorageSessionKey);
    if(localStorage.getItem(this.localStorageSessionKey)!=null && localStorage.getItem(this.localStorageSessionKey)!="{}")
    {
   
    // const jsonData = localStorage.getItem(this.localStorageSessionKey);
    const jsonData1 = localStorage.getItem(this.localStorageSessionKey);
    const jsonData = window.atob(jsonData1)
    return jsonData == null ? '' : JSON.parse(jsonData).usertypeid;
   }
   else if(localStorage.getItem(this.localStorageSessionKey)=="{}")
   {
    const jsonData = localStorage.getItem(this.localStorageSessionKey);
    // const jsonData = window.atob(jsonData1)
    return jsonData == null ? '' : JSON.parse(jsonData).usertypeid;
   }
  }
  emisUsertype1() {
    // const jsonData = localStorage.getItem(this.localStorageSessionKey);
    const jsonData1 = localStorage.getItem(this.localStorageSessionKey);
    const jsonData = window.atob(jsonData1)
    return jsonData == null ? '' : JSON.parse(jsonData).emisUsertype1;
  }

  mod2() {
    // const jsonData = localStorage.getItem(this.localStorageSessionKey);
    const jsonData1 = localStorage.getItem(this.localStorageSessionKey);
    const jsonData = window.atob(jsonData1)
    return jsonData == null ? '' : JSON.parse(jsonData).mod2;
  }

  teacherName() {
    // const jsonData = localStorage.getItem(this.localStorageSessionKey);
    const jsonData1 = localStorage.getItem(this.localStorageSessionKey);
    const jsonData = window.atob(jsonData1)
    return jsonData == null ? '' : JSON.parse(jsonData).teacher_name;
  }

  name() {
    // const jsonData = localStorage.getItem(this.localStorageSessionKey);
    const jsonData1 = localStorage.getItem(this.localStorageSessionKey);
    const jsonData = window.atob(jsonData1)
    return jsonData == null ? '' : JSON.parse(jsonData).name;
  }

  designation() {
    // const jsonData = localStorage.getItem(this.localStorageSessionKey);
    const jsonData1 = localStorage.getItem(this.localStorageSessionKey);
    const jsonData = window.atob(jsonData1)
    return jsonData == null ? '' : JSON.parse(jsonData).designation;
  }

  type_teacher() {
    // const jsonData = localStorage.getItem(this.localStorageSessionKey);
    const jsonData1 = localStorage.getItem(this.localStorageSessionKey);
    const jsonData = window.atob(jsonData1)
    return jsonData == null ? '' : JSON.parse(jsonData).type_teacher;
  }

  eduDistName() {
    // const jsonData = localStorage.getItem(this.localStorageSessionKey);
    const jsonData1 = localStorage.getItem(this.localStorageSessionKey);
    const jsonData = window.atob(jsonData1)
    return jsonData == null ? '' : JSON.parse(jsonData).edu_dist_name;     
  }
  eduDistId() {
    debugger
    // const jsonData = localStorage.getItem(this.localStorageSessionKey);
    const jsonData1 = localStorage.getItem(this.localStorageSessionKey);
    const jsonData = window.atob(jsonData1)
    return jsonData == null ? '' : JSON.parse(jsonData).edu_district_id;
  }
  roleId(): number {
    // const jsonData = localStorage.getItem(this.localStorageSessionKey);
    const jsonData1 = localStorage.getItem(this.localStorageSessionKey);
    const jsonData = window.atob(jsonData1)
    return jsonData == null ? 0 : +JSON.parse(jsonData).roleId;
  }

  highClass(): number {
    // const jsonData = localStorage.getItem(this.localStorageSessionKey);
    const jsonData1 = localStorage.getItem(this.localStorageSessionKey);
    const jsonData = window.atob(jsonData1)
    return jsonData == null ? 0 : +JSON.parse(jsonData).highClass;
  }

  lowClass(): number {
    // const jsonData = localStorage.getItem(this.localStorageSessionKey);
    const jsonData1 = localStorage.getItem(this.localStorageSessionKey);
    const jsonData = window.atob(jsonData1)
    return jsonData == null ? 0 : +JSON.parse(jsonData).lowClass;
  }

  districtId() {
    // const jsonData = localStorage.getItem(this.localStorageSessionKey);
    const jsonData1 = localStorage.getItem(this.localStorageSessionKey);
    const jsonData = window.atob(jsonData1)
    return jsonData == null ? '' : JSON.parse(jsonData).districtId;
  }

  districtName() {
    // const jsonData = localStorage.getItem(this.localStorageSessionKey);
    const jsonData1 = localStorage.getItem(this.localStorageSessionKey);
    const jsonData = window.atob(jsonData1)
    return jsonData == null ? '' : JSON.parse(jsonData).districtName;
  }

  blockId() {
    // const jsonData = localStorage.getItem(this.localStorageSessionKey);
    const jsonData1 = localStorage.getItem(this.localStorageSessionKey);
    const jsonData = window.atob(jsonData1)
    return jsonData == null ? '' : JSON.parse(jsonData).blockId;
  }

  blockName() {
    // const jsonData = localStorage.getItem(this.localStorageSessionKey);
    const jsonData1 = localStorage.getItem(this.localStorageSessionKey);
    const jsonData = window.atob(jsonData1)
    return jsonData == null ? '' : JSON.parse(jsonData).blockName;
  }

  offKeyId(){
    // const jsonData = localStorage.getItem(this.localStorageSessionKey);
    const jsonData1 = localStorage.getItem(this.localStorageSessionKey);
    const jsonData = window.atob(jsonData1)
    return jsonData == null ? '' : JSON.parse(jsonData).usertypeid == 5 ||
                                   JSON.parse(jsonData).usertypeid == 6 ||
                                   JSON.parse(jsonData).usertypeid == 9 ||
                                   JSON.parse(jsonData).usertypeid == 10||
                                   JSON.parse(jsonData).usertypeid == 22 ?
                                   JSON.parse(jsonData).offKeyId : '';
  }

  setLocalStorageProperties(session: any) {// jshint ignore:line
    // localStorage.setItem(this.localStorageSessionKey, JSON.stringify(session));;
    const value =JSON.stringify(session)
    if(value=="{}")
    {
      localStorage.setItem(this.localStorageSessionKey, value);

    }
    else{
      localStorage.setItem(this.localStorageSessionKey, window.btoa(value));

    }

  }

  getLocalStorageWithKey(key: any) {// jshint ignore:line
    return localStorage.getItem(key);
  }

  setLocalStorageWithKey(key: any, session: any) {// jshint ignore:line
    localStorage.setItem(key, JSON.stringify(session));
  }
  iat() {
    // const jsonData = localStorage.getItem(this.localStorageSessionKey);
    const jsonData1 = localStorage.getItem(this.localStorageSessionKey);
    const jsonData = window.atob(jsonData1)
    return jsonData == null ? '' : JSON.parse(jsonData).iat;
  }
}


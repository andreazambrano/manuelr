import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';
PouchDB.plugin(require('pouchdb-upsert'));
(window as any).global = window;
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ActivityTrackerService {
	data: any;
  db: any;
  remote: any;

  constructor() {

 	this.db = new PouchDB('crm_activitytracker');
    this.remote = 'http://192.168.1.2:5984//crm_activitytracker';
    let options = {
      live: true,
      retry: true,
      continuous: true,
      auto_compaction: true
   };
 	this.db.sync(this.remote, options);

}
 saveActivity(data) {
    data._id = (moment().unix()).toString();
    this.db.upsert(data._id, function (doc) {
      if(!doc.count){
        doc.count = 0;
      }
      doc.activityDateTime = moment().format();
      doc.activity ='Dashboard';
      return doc;
      // console.log(resp);
    }).then((resp) => {
      // console.log(resp);
    // success, res is {rev: '1-xxx', updated: true, id: 'myDocId'}
    })
     .catch((e) => {
       console.log(e);
       return e;
     });
   }
}

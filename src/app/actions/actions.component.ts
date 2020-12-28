import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {from, Observable} from "rxjs";

@Component({
  selector: 'tod-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.less']
})
export class ActionsComponent implements OnInit {
  action$: Observable<any>;
  constructor(private fs: AngularFirestore) {
    fs.firestore.settings({ experimentalForceLongPolling: true });
    let actionsRef:AngularFirestoreCollection<string> = fs.collection('actions', ref => ref.limit(10));
    this.action$ =  from(actionsRef.valueChanges()); //fs.collection('actions').valueChanges();
    this.action$.subscribe();

  }

  ngOnInit(): void {

  }

}

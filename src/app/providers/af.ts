import { AngularFireList } from 'angularfire2/database/interfaces';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AF {

    public messages: AngularFireList<any>;
    public users: AngularFireList<any>;
    public displayName: string;
    public email: string;

    constructor(public afAuth: AngularFireAuth, public afDatabase: AngularFireDatabase) {
        console.log(this.afDatabase.list('messages'));
    }

    login() {
        return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }
    logout() {
        return this.afAuth.auth.signOut();
    }

    sendMessage(text) {
        const message = {
            message: text,
            displayName: this.displayName,
            email: this.email,
            timestamp: Date.now()
        };
        this.messages.push(message);
    }
}

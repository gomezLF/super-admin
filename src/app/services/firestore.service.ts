import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { IonList } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  currentUser: User;

  constructor(private database: AngularFirestore) {

   }


  async crearUser(user: User){
    try{
		return await this.database.collection('users').doc(user.numeroidentificacion).set(user);

    }catch(error){
      console.log(error);
    }
  }

  async getUser(numeroidentificacion: string){
    return await this.database.collection('users').doc(numeroidentificacion).get();
  }

  async setUser(user: User){
	return await this.database.collection('users').doc(user.numeroidentificacion).set(user);
  }

  loginUser(cuenta: string, password: string){
	  if(this.getUser(cuenta)){

	  }


  }

}

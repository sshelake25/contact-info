import { Injectable } from '@angular/core';
 
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Contact} from './contact.model';

@Injectable()
export class ContactService {

  contactList: AngularFireList<any>;
  selectedContact: Contact = new Contact();
  constructor(private firebase :AngularFireDatabase ) { }

  getData() {
    this.contactList = this.firebase.list('contacts');
    return this.contactList;
  }

  insertContact(contact : Contact) {
    this.contactList.push({
      firstName: contact.firstName,
      lastName: contact.lastName,
      email: contact.email,
      phoneNo: contact.phoneNo,
      status: contact.status
    });
  }

  updateContact(contact : Contact){
    this.contactList
        .update(contact.$key, {
          firstName: contact.firstName,
          lastName: contact.lastName,
          email: contact.email,
          phoneNo: contact.phoneNo,
          status: contact.status
      });
  }

  deleteEmployee($key : string){
    this.contactList.remove($key);
  }

}

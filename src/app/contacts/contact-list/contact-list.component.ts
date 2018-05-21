import { Component, OnInit } from '@angular/core';

import { Contact } from '../shared/contact.model';
import { ContactService } from '../shared/contact.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor(private contactService: ContactService, private tostr: ToastrService) { }
 
  contactList: Contact[];
  
  ngOnInit() {
    var x = this.contactService.getData();
    x.snapshotChanges().subscribe(item => {
      this.contactList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.contactList.push(y as Contact);
      });
    });
  }
 
  onEdit(contact: Contact) {
   this.contactService.selectedContact = Object.assign({}, contact);
  }
 
  onDelete(key: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.contactService.deleteEmployee(key);
      this.tostr.success("Contact deleted successfully");
    }
  }
 
}

import { Component, OnInit } from '@angular/core';
import { ContactService } from './shared/contact.service'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers :[ContactService]
})
export class ContactsComponent implements OnInit {
  
  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }
}

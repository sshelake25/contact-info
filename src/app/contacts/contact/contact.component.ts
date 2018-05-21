import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ContactService } from '../shared/contact.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
   emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
   phonePattern = /^\+?\d{10}$/; 
  // phonePattern = /[0-9]{0-10}/;
  constructor(private contactService: ContactService,
    private tostr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(conactForm: NgForm) {
    if (conactForm.value.$key == null) {
      this.contactService.insertContact(conactForm.value);
      this.tostr.success('Contact succcessfully created');
    } else {
      this.contactService.updateContact(conactForm.value);
      this.tostr.success('Contact succcessfully updated');
    }
    
    this.resetForm(conactForm);
  }

  resetForm(conactForm?: NgForm) {
    if (conactForm != null) {
      conactForm.reset();

      this.contactService.selectedContact = {
        $key: null,
        firstName: '',
        lastName: '',
        email: '',
        phoneNo:9000900099,
        status: true
      }
    }
  }
}

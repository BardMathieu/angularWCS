import { Component, OnInit } from '@angular/core';
import {Order} from '../order';
import {FormArray, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {
  MonEmail = 'user@user.com';
  constructor(private fb: FormBuilder) { }
  orderForm = this.fb.group({
    title: ['', Validators.required],
    quantity: ['', [Validators.required, Validators.max(5)]],
    date: ['', Validators.required],
    contact: ['', [Validators.required, Validators.email]],
    payments: this.fb.array([])
  });
  ngOnInit() {
    // get Observable from FormGroup
    this.orderForm.valueChanges
    // listen to value change
      .subscribe(value => {
        console.log('orderForm value changes : ', value);
      });
  }
  addPayment() {
    // create FormGroup with two FormControl
    const paymentForm = this.fb.group({
      date: ['', Validators.required],
      amount: ['', Validators.required]
    });
    // parse abstract control to FormArray
    const payments = this.orderForm.get('payments') as FormArray;
    // add new FormGroup to control 'payments'
    payments.push(paymentForm);
  }
  get payments(): FormArray {
    // convert abstract control to FormArray
    return this.orderForm.get('payments') as FormArray;
  }
  onSubmit() {
    console.log('oderForm submitted : ', this.orderForm.value);
  }
}

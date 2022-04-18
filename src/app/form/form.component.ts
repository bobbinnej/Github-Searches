import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  searchTerm?:string;
  @Output() searchProfile=new EventEmitter<any>();
  searchUser(){
    this.searchProfile.emit(this.searchTerm)
  }
   
  constructor() { }

  ngOnInit(): void {
  }

}

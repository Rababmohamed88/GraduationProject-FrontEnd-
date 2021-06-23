import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators ,FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css']
})
export class SuggestionComponent implements OnInit {
  public f:FormGroup;



  constructor(public fb: FormBuilder) { 

  }
 
  ngOnInit(): void {
 this.f = new FormGroup({     
  q1 : new FormControl(null, Validators.required),
 q2 : new FormControl(null, Validators.required),
 q3 : new FormControl(null, Validators.required),
 q4 : new FormControl(null, Validators.required),
 q5 : new FormControl(null, Validators.required),
 q6 : new FormControl(null, Validators.required),
 q7 : new FormControl(null, Validators.required)}) 

 
}

get q1 ()
{return this.f.get('q1');}
get q2 ()
{return this.f.get('q2');}
get q3 ()
{return this.f.get('q3');}
get q4 ()
{return this.f.get('q4');}
get q5 ()
{return this.f.get('q5');}
get q6 ()
{return this.f.get('q6');}
get q7()
{return this.f.get('q7');}
  }



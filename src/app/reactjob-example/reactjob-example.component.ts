import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactjob-example',
  templateUrl: './reactjob-example.component.html',
  styleUrls: ['./reactjob-example.component.css']
})
export class ReactjobExampleComponent implements OnInit {
  employees:any;
  userinfoprofile: FormGroup;
  constructor(private fb: FormBuilder) {
this.employees=[{
  "ID" : 1,
  "FirstName" : "John",
  "LastName" : "Heart",
  "Phone" : "(213) 555-9392",
  "Prefix" : "Mr.",
  "Position" : "CEO",
  "BirthDate" : "1964-03-16",
  "HireDate" : "1995-01-15",
  "Email" : "jheart@dx-email.com",
  "Address" : "351 S Hill St.",
  "City" : "Los Angeles",
  "StateID" : 5,
  "State" : "California",
  "HomePhone" : "(213) 555-9208",
  "Skype" : "jheartDXskype"
}, {
  "ID" : 2,
  "FirstName" : "Olivia",
  "LastName" : "Peyton",
  "Phone" : "(310) 555-2728",
  "Prefix" : "Mrs.",
  "Position" : "Sales Assistant",
  "BirthDate" : "1981-06-03",
  "HireDate" : "2012-05-14",
  "Email" : "oliviap@dx-email.com",
  "Address" : "807 W Paseo Del Mar",
  "City" : "Los Angeles",
  "StateID" : 5,
  "State" : "California",
  "HomePhone" : "(310) 555-4547",
  "Skype" : "oliviapDXskype"
}, {
  "ID" : 3,
  "FirstName" : "Robert",
  "LastName" : "Reagan",
  "Phone" : "(818) 555-2387",
  "Prefix" : "Mr.",
  "Position" : "CMO",
  "BirthDate" : "1974-09-07",
  "HireDate" : "2002-11-08",
  "Email" : "robertr@dx-email.com",
  "Address" : "4 Westmoreland Pl.",
  "City" : "Bentonville",
  "StateID" : 4,
  "State" : "Arkansas",
  "HomePhone" : "(818) 555-2438",
  "Skype" : "robertrDXskype"
}, {
  "ID" : 4,
  "FirstName" : "Greta",
  "LastName" : "Sims",
  "Phone" : "(818) 555-6546",
  "Prefix" : "Ms.",
  "Position" : "HR Manager",
  "BirthDate" : "1977-11-22",
  "HireDate" : "1998-04-23",
  "Email" : "gretas@dx-email.com",
  "Address" : "1700 S Grandview Dr.",
  "City" : "Atlanta",
  "StateID" : 11,
  "State" : "Georgia",
  "HomePhone" : "(818) 555-0976",
  "Skype" : "gretasDXskype"
}, {
  "ID" : 5,
  "FirstName" : "Brett",
  "LastName" : "Wade",
  "Phone" : "(626) 555-0358",
  "Prefix" : "Mr.",
  "Position" : "IT Manager",
  "BirthDate" : "1968-12-01",
  "HireDate" : "2009-03-06",
  "Email" : "brettw@dx-email.com",
  "Address" : "1120 Old Mill Rd.",
  "City" : "Boise",
  "StateID" : 13,
  "State" : "Idaho",
  "HomePhone" : "(626) 555-5985",
  "Skype" : "brettwDXskype"
}];
    this.userinfoprofile = this.fb.group(
      {
        firstname: this.fb.control('',[Validators.required]),
        job: this.fb.array([
          this.fb.control('')
        ])
      }
    )
  }

  ngOnInit() {
  }

  add(){
    console.log(this.userinfoprofile)
  }
  addJob(){
    //this.userinfoprofile.controls.job.push(this.fb.control(''));
  }
}

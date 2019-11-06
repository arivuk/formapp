import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-react-example',
  templateUrl: './react-example.component.html',
  styleUrls: ['./react-example.component.css']
})
export class ReactExampleComponent implements OnInit {

  profile: FormGroup;
  constructor() { 

    this.profile=new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('arivuk@gmail.com', Validators.required),
      mobile: new FormControl(''),
      address: new FormGroup({
        city: new FormControl(''),
        country: new FormControl('India')
      })
    })
  }

  ngOnInit() {
  }
  Submit(){
    console.log(this.profile);
  }
}

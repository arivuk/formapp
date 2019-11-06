import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactjob-example',
  templateUrl: './reactjob-example.component.html',
  styleUrls: ['./reactjob-example.component.css']
})
export class ReactjobExampleComponent implements OnInit {

  userinfoprofile: FormGroup;
  constructor(private fb: FormBuilder) {

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
    this.userinfoprofile.controls.job.push(this.fb.control(''));
  }
}

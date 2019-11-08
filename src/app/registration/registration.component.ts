import { Component, OnInit, OnDestroy, OnChanges,  SimpleChanges, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit, OnDestroy, OnChanges,DoCheck,AfterViewInit,AfterViewChecked, AfterContentInit, AfterContentChecked {
  name:string;
  oldHeroName: string;
  changeDetected:boolean;
  lname: string;
  fname: string;
  mmobile:string;
  femail:string;
  constructor() {
    this.name="arivu";
    console.log("constructor called"); 
  }

  ngOnChanges(c: SimpleChanges){
    console.log("change called",c);
  }
  ngOnInit() {
    console.log("init called");
  }
  ngDoCheck(){
    console.log("do check")
    if (this.name !== this.oldHeroName) {
      this.changeDetected = true;
      this.oldHeroName = this.name;
    }
  }
  ngOnDestroy(){
    console.log("destroy called");
  }
  
  ngAfterContentInit(){
    console.log("after conent init")
  }
  ngAfterContentChecked(){
    console.log("after conent checked")
    
  }

  ngAfterViewInit(){
    console.log("after view init");
  }
  ngAfterViewChecked(){
    console.log("after view checked");
    
  }
  Signup(aa:any){
    console.log("Sign up called",aa)
    
    console.log("Sign up called",aa.value)
  }
}

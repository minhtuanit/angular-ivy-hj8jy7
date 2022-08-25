import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { OnInit } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  form: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = new FormGroup({
      remember: new FormControl(true),
    });
  }
}

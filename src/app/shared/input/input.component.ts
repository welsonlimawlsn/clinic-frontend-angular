import {AfterContentInit, Component, ContentChild, Input, OnInit} from '@angular/core';
import {FormControlName, NgControl} from '@angular/forms';

@Component({
  selector: 'clinic-input',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {

  @Input()
  label: string;
  @Input()
  placehorder: string;
  @Input()
  validFeedback: string;
  @Input()
  invalidFeedback: string;
  @Input()
  inputId: string;
  @Input()
  showTip = true;

  @ContentChild(FormControlName)
  control: FormControlName;
  input: NgControl;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.input = this.control;
    if (this.input === undefined) {
      throw new Error('This component need be use with directive formControlName');
    }
  }

}

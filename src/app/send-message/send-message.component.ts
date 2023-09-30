import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent {
  messageForm!: FormGroup;
  constructor(private _formBuilder: FormBuilder) {
    this.messageForm = this._formBuilder.group({
      UserId: ['', [Validators.required]],
      message: ['', [Validators.required]],
      recipient: ['', [Validators.required]],
      AccessKey: ['', [Validators.required]],
    });
  }

}

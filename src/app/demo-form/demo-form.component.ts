import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.scss']
})
export class DemoFormComponent implements OnInit {

  demo = new FormGroup({
    email: new FormControl(null, [ Validators.required, Validators.email ]),
    file: new FormControl(null, [ Validators.required, requiredFileType('sql') ])
  });

  get file() {
    return this.demo.get('file');
  }

  fileName: string;
  fileSize: string;
  fileExtension: string;

  constructor() { }

  ngOnInit(): void {
  }

  detecFile(e: Event) {
    console.log(this.demo.get('file').value);
    console.log(e);
    const file = this.demo.get('file').value;
    this.fileName = file.name.split('.')[0].toLowerCase();
    this.fileSize = file.size;
    this.fileExtension = file.name.split('.')[1].toLowerCase();
  }

}

// 驗證檔案類型
export function requiredFileType(type: string) {
 return (control: FormControl) => {
  const file: File = control.value;
  if (file) {
    const extension = file.name.split('.')[1].toLowerCase();
    if (extension === type) {
      return null;
    }
    return { validate: 'error' };
  }

  return { validate: 'error' };
 };
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user:any;
  @Output() update: EventEmitter<any> = new EventEmitter();

  editMode = false;
  constructor() { }

  ngOnInit(): void {
  }

  triggerEdit() {
    this.editMode = !this.editMode;
  }

  transmitUser(mode) {
    let payload = {
      mode,
      id: this.user.id,
      name: this.user.name
    };
    this.editMode = !this.editMode;
    this.update.emit(payload);
  }

}

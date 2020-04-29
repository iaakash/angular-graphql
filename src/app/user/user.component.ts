import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user:any;
  @Output() update: EventEmitter<any> = new EventEmitter();

  editMode = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  triggerEdit() {
    this.editMode = !this.editMode;
    this.router.navigate([`user-details/${this.user.id}`]);
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

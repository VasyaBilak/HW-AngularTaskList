import {
  Component,
  OnInit,
  ChangeDetectorRef,
  Input,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  @Input() fromChild = new EventEmitter<string>();
  public count!: number;
  public newTask!: string;
  public nameTask!: string;

  constructor(private cdref: ChangeDetectorRef) {}
  ngOnInit(): void {}

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  getCount(data: number) {
    this.count = data;
  }

  sendTask(): void {
    this.nameTask = this.newTask;
    this.newTask = '';
  }
}

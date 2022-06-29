import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { formatDistance, subDays } from 'date-fns';

@Component({
  selector: 'app-displayname',
  templateUrl: './displayname.component.html',
  styleUrls: ['./displayname.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class DisplaynameComponent implements OnInit {
  @Input() name: string = '';
  @Output() sayhello = new EventEmitter();

  adate = formatDistance(subDays(new Date(), 3), new Date(), {
    addSuffix: true,
  });
  constructor() {}

  ngOnInit(): void {}
  onSayHello() {
    this.sayhello.emit();
  }
}

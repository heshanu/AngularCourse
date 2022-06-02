import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss'],
})
export class AlertsComponent implements OnInit {

  @Input() message!: string;
  @Input() type: 'primary' | 'success' | 'danger' | 'warning' = 'primary';
  constructor() {}

  ngOnInit(): void {}
}

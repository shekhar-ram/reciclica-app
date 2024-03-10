import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-pickup-calls-card',
  templateUrl: './pickup-calls-card.component.html',
  styleUrls: ['./pickup-calls-card.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule]
})
export class PickupCallsCardComponent  implements OnInit {

  @Input() hasHeader: boolean = false;
  @Input() hasFooter: boolean = false;

  @Input() status: string = '';
  @Input() updatedAt: string = '';
  @Input() createdAt: string = '';
  @Input() notes: string = '';
  @Input() value: string = '';

  constructor() { }

  ngOnInit() {}

}

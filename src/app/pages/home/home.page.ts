import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PickupCallsCardComponent } from 'src/app/components/pickup-calls-card/pickup-calls-card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule, PickupCallsCardComponent]
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

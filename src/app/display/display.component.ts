import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { StarWarsService } from '../star-wars.service';
import { DisplayObject } from './display.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DisplayObject],
})
export class DisplayComponent implements OnInit {
  filmNames: string[] = [];

  @Input()
  frequency: number = 1000;

  constructor(public starWars: StarWarsService, public count: DisplayObject) {
    this.starWars.filmNames.subscribe((names) => (this.filmNames = names));
    this.count = new DisplayObject();
  }

  ngOnInit(): void {
    this.count.startTimer(this.frequency);
  }
}

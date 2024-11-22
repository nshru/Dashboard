import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrl: './label.component.css'
})
export class LabelComponent {

  @Input() text: string = '';
  @Input() for: string = '';
  @Input() alignment: 'left' | 'right' | 'center' = 'left';
  @Input() required: boolean = false;
}

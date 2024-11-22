import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() color: string = '';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() icon: string = '';
  @Input() width: string = 'auto';
  @Input() radius: string = '5px';
  @Output() onClick = new EventEmitter<void>();

  handleClick(): void {
    this.onClick.emit();
  }
}

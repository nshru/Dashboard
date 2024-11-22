import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css'
})
export class CheckboxComponent {
  @Input() label: string = '';  // Label to display next to the checkbox
  @Input() checked: boolean = false;  // Initial checked state
  @Input() disabled: boolean = false;  // If true, the checkbox will be disabled
  @Input() required: boolean = false;  // If true, the checkbox will be required
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';  // Checkbox color (default: primary)
  @Output() checkedChange = new EventEmitter<boolean>();  // Emit the new checked state when it changes

  // Handles the change event when the user interacts with the checkbox
  onChange(event: any) {
    this.checked = event.target.checked;  // Update the checked state
    this.checkedChange.emit(this.checked);  // Emit the updated state to the parent
  }
}

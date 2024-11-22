import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MyModel } from '../../models/my-model';

export interface DropdownOption {
  countryName: string;
  countryCode: string;
  language: string;
  flagUrl: string;
}
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  //@Input() label: string = '';
  //@Input() optios: DropdownOption[] = [];
  //@Input() selectedValue: string = '';
  //@Input() disabled: boolean = false;

  //@Output() selectedValueChange = new EventEmitter<string>();

  //onSelect(event: Event) {
  //  const selectElement = event.target as HTMLSelectElement;
  //  this.selectedValueChange.emit( selectElement.value);
  //}
  @Input() options: MyModel[] = []; // Options passed to the dropdown
  @Input() selectedValue: MyModel | null = null; // Default selected value
  @Input() disabled: boolean = false; // Whether the dropdown is disabled
  @Output() selectedValueChange = new EventEmitter<MyModel>(); // Emit the selected value

  isDropdownOpen = false; // To toggle dropdown visibility

  toggleDropdown() {
    if (!this.disabled) {
      this.isDropdownOpen = !this.isDropdownOpen;
    }
  }

  onSelect(option: MyModel) {
    this.selectedValue = option;
    this.selectedValueChange.emit(option);
    this.isDropdownOpen = false; // Close the dropdown after selection
  }
}

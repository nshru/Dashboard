import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-invalue',
  templateUrl: './invalue.component.html',
  styleUrl: './invalue.component.css'
})

export class InValueComponent {

  @Input() value: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() label: string = '';
  @Input() search: boolean = false;
  @Output() valueChange = new EventEmitter<string>();
  @Output() searchEvent = new EventEmitter<string>();

  onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.value = inputElement.value;
    this.valueChange.emit(this.value);
    if (this.search) {
      this.searchEvent.emit(this.value);  // Emit search query when it's a search bar
    }
  }
}

import { ChangeDetectionStrategy, Component, forwardRef, signal } from '@angular/core'
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms'
import { BaseInput } from '../base-input/base-input'
import { OverlayModule } from '@angular/cdk/overlay'
import { ChevronDownIcon } from '@shared/components/icons/icons'
import { Option } from '@shared/forms/interfaces/options'

@Component({
  selector: 'input-select',
  imports: [OverlayModule, ChevronDownIcon],
  templateUrl: './select.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col gap-2'
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Select),
      multi: true
    }
  ]
})
export class Select extends BaseInput implements ControlValueAccessor {
  // Internal state
  value = ''
  disabled = false
  touched = false

  isOpen = signal<boolean>(false)

  openDropdown() {
    this.isOpen.set(true)
  }

  closeDropdown() {
    this.isOpen.set(false)
  }

  selectOption(option: Option) {
    this.value = option.value
    this.onChange(option.value)
    this.onTouched()
    this.closeDropdown()
  }

  getSelectedLabel(): string {
    const selectedOption = this.options().find(option => option.value === this.value)
    return selectedOption?.label || ''
  }

  // ControlValueAccessor callbacks
  private onChange = (value: string) => {
    void value
  }
  private onTouched = () => {
    // Callback set by registerOnTouched
  }

  // CSS classes using BaseInputUtils for consistency
  get inputClasses(): string {
    return this.getInputClasses(this.control(), this.disabled)
  }

  // ControlValueAccessor implementation
  writeValue(value: string): void {
    this.value = value || ''
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled
  }

  // Event handlers
  onInput(event: Event): void {
    const target = event.target as HTMLInputElement
    const value = target.value
    this.value = value
    this.onChange(value)
  }

  onBlur(): void {
    this.touched = true
    this.onTouched()
  }
}

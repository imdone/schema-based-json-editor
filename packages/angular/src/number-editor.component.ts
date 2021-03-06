import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core'
import * as common from 'schema-based-json-editor'
import { numberEditorTemplateHtml } from './variables'

@Component({
  selector: 'number-editor',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: numberEditorTemplateHtml
})
export class NumberEditorComponent {
  @Input()
  schema!: common.NumberSchema
  @Input()
  initialValue!: number
  @Input()
  title?: string
  @Output()
  updateValue = new EventEmitter<common.ValidityValue<number | undefined>>()
  @Input()
  theme!: common.Theme
  @Input()
  icon!: common.Icon
  @Input()
  locale!: common.Locale
  @Output()
  onDelete = new EventEmitter()
  @Input()
  readonly?: boolean
  @Input()
  required?: boolean
  @Input()
  hasDeleteButton!: boolean
  @Input()
  noSelect2?: boolean

  value?: number
  errorMessage!: string
  buttonGroupStyle = common.buttonGroupStyleString
  onChange (e: { target: { value: string } }) {
    this.value = this.schema.type === 'integer' ? common.toInteger(e.target.value) : common.toNumber(e.target.value)
    this.validate()
    this.updateValue.emit({ value: this.value, isValid: !this.errorMessage })
  }
  ngOnInit () {
    this.value = common.getDefaultValue(this.required, this.schema, this.initialValue) as number
    this.updateValue.emit({ value: this.value, isValid: !this.errorMessage })
  }
  get useInput () {
    return this.value !== undefined && (this.schema.enum === undefined || this.isReadOnly)
  }
  get useSelect () {
    return this.value !== undefined && (this.schema.enum !== undefined && !this.isReadOnly)
  }
  get isReadOnly () {
    return this.readonly || this.schema.readonly
  }
  get hasDeleteButtonFunction () {
    return this.hasDeleteButton && !this.isReadOnly
  }
  get titleToShow () {
    return common.getTitle(this.title, this.schema.title)
  }
  get options () {
    return common.getOptions(this.schema)
  }

  updateSelection (value: number) {
    this.value = this.schema.type === 'integer' ? common.toInteger(value) : common.toNumber(value)
    this.validate()
    this.updateValue.emit({ value: this.value, isValid: !this.errorMessage })
  }
  trackByFunction = (index: number) => {
    return index
  }
  toggleOptional () {
    this.value = common.toggleOptional(this.value, this.schema, this.initialValue) as number | undefined
    this.validate()
    this.updateValue.emit({ value: this.value, isValid: !this.errorMessage })
  }
  private validate () {
    this.errorMessage = common.getErrorMessageOfNumber(this.value, this.schema, this.locale)
  }
}

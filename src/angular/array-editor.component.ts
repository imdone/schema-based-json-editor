import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from "@angular/core";
import * as common from "../common";

@Component({
    selector: "array-editor",
    template: `
    <div [class]="errorMessage ? theme.errorRow : theme.row">
        <h3>
            {{title || schema.title}}
            <div [class]="theme.buttonGroup" [style]="buttonGroupStyleString">
                <button [class]="theme.button" (click)="collapseOrExpand()">
                    <icon [icon]="icon" [text]="collapsed ? icon.expand : icon.collapse"></icon>
                </button>
                <button *ngIf="!readonly && value !== undefined" [class]="theme.button" (click)="addItem()">
                    <icon [icon]="icon" [text]="icon.add"></icon>
                </button>
                <button *ngIf="hasDeleteButtonFunction()" [class]="theme.button" (click)="onDelete.emit()">
                    <icon [icon]="icon" [text]="icon.delete"></icon>
                </button>
            </div>
        </h3>
        <p [class]="theme.help">{{schema.description}}</p>
        <div *ngIf="!required" [class]="theme.optionalCheckbox">
            <label>
                <input type="checkbox" (change)="toggleOptional()" [checked]="value === undefined" />
                is undefined
            </label>
        </div>
        <div #drakContainer [class]="theme.rowContainer">
            <div *ngFor="let item of getValue(); let i = index; trackBy:trackByFunction" [attr.data-index]="i" [class]="theme.rowContainer">
                <editor [schema]="schema.items"
                    [title]="i"
                    [initialValue]="value[i]"
                    (updateValue)="onChange(i, $event)"
                    [theme]="theme"
                    [icon]="icon"
                    [locale]="locale"
                    [required]="true"
                    [readonly]="readonly || schema.readonly"
                    (onDelete)="onDeleteFunction(i)"
                    [hasDeleteButton]="true">
                </editor>
            </div>
        </div>
        <p *ngIf="errorMessage" [class]="theme.help">{{errorMessage}}</p>
    </div>
    `,
})
export class ArrayEditorComponent {
    @Input()
    schema: common.ArraySchema;
    @Input()
    initialValue: common.ValueType[];
    @Input()
    title?: string;
    @Output()
    updateValue = new EventEmitter<common.ValidityValue<common.ValueType[] | undefined>>();
    @Input()
    theme: common.Theme;
    @Input()
    icon: common.Icon;
    @Input()
    locale: common.Locale;
    @Output()
    onDelete = new EventEmitter();
    @Input()
    readonly?: boolean;
    @Input()
    required?: boolean;
    @Input()
    hasDeleteButton: boolean;

    @ViewChild("drakContainer")
    drakContainer: ElementRef;

    renderSwitch = 1;
    collapsed = false;
    value?: common.ValueType[];
    drak: common.dragula.Drake;
    errorMessage: string;
    buttonGroupStyleString = common.buttonGroupStyleString;
    getValue() {
        if (this.value !== undefined && !this.collapsed) {
            return this.value;

        }
        return [];
    }
    ngOnInit() {
        this.value = common.getDefaultValue(this.required, this.schema, this.initialValue) as common.ValueType[];
        this.updateValue.emit({ value: this.value, isValid: !this.errorMessage });
    }
    ngAfterViewInit() {
        if (this.drakContainer) {
            const container = this.drakContainer.nativeElement as HTMLElement;
            this.drak = common.dragula([container]);
            this.drak.on("drop", (el: HTMLElement, target: HTMLElement, source: HTMLElement, sibling: HTMLElement | null) => {
                if (this.value) {
                    common.switchItem(this.value, el, sibling);
                    this.renderSwitch = -this.renderSwitch;
                    this.updateValue.emit({ value: this.value, isValid: !this.errorMessage });
                }
            });
        }
    }
    ngOnDestroy() {
        if (this.drak) {
            this.drak.destroy();
        }
    }
    trackByFunction = (index: number, value: common.ValueType) => {
        return (1 + index) * this.renderSwitch;
    };
    collapseOrExpand = () => {
        this.collapsed = !this.collapsed;
    }
    toggleOptional = () => {
        this.value = common.toggleOptional(this.value, this.schema, this.initialValue) as common.ValueType[] | undefined;
        this.validate();
        this.updateValue.emit({ value: this.value, isValid: !this.errorMessage });
    }
    validate() {
        this.errorMessage = common.getErrorMessageOfArray(this.value, this.schema, this.locale);
    }
    addItem() {
        this.value!.push(common.getDefaultValue(true, this.schema.items, undefined) !);
        this.updateValue.emit({ value: this.value, isValid: !this.errorMessage });
    }
    hasDeleteButtonFunction() {
        return this.hasDeleteButton && !this.readonly && !this.schema.readonly;
    }
    onDeleteFunction(i: number) {
        this.value!.splice(i, 1);
        this.renderSwitch = -this.renderSwitch;
        this.validate();
        this.updateValue.emit({ value: this.value, isValid: !this.errorMessage });
    }
    onChange(i: number, {value, isValid}: common.ValidityValue<common.ValueType>) {
        this.value![i] = value;
        this.validate();
        this.updateValue.emit({ value: this.value, isValid: !this.errorMessage && isValid });
    }
}

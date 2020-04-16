import {
    Component,
    OnInit,
    Input,
    ViewChild,
    ElementRef,
    forwardRef,
    Renderer2,
    Output,
    EventEmitter
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


export const CUSTOM_INPUT_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true,
};

// move component to playground
@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    providers: [CUSTOM_INPUT_VALUE_ACCESSOR],
})
export class InputComponent implements OnInit, ControlValueAccessor {
    constructor(private renderer: Renderer2) { }

    @Input() placeholder: string;
    @Output() blurred: EventEmitter<void> = new EventEmitter;
    @ViewChild('input', { static: true }) private input: ElementRef;
    @ViewChild('animatedPlaceholder', { static: true }) private animatedPlaceholder: ElementRef;
    @ViewChild('fieldset', { static: true }) private fieldset: ElementRef;
    @ViewChild('span', { static: true }) private span: ElementRef;

    onChange: any = () => { };
    onTouch: any = () => { };
    error: boolean;

    ngOnInit() {
        this.error = false;
    }

    writeValue(input: number | string): void {
        let value: number | string;

        if (input === `${+input}`) {
            value = +input;
            this.error = false;
        }
        else {
            value = input;
            this.error = true;
        }

        this.onChange(value)
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.renderer.setProperty(this.input.nativeElement, 'disabled', isDisabled)
    }

    onInput(event: Event): void {
        this.writeValue((<HTMLInputElement>event.target).value);
        this.onTouch();
    }

    onBlur(): void {
        if (this.error) {
            this.renderer.addClass(this.fieldset.nativeElement, 'errored-fieldset')
        }
        else {
            this.renderer.removeClass(this.fieldset.nativeElement, 'errored-fieldset')
            this.renderer.addClass(this.fieldset.nativeElement, 'blurred-fieldset')
        }

        this.blurred.emit();
    }

    onInputFocus(): void {
        this.renderer.addClass(this.animatedPlaceholder.nativeElement, 'clicked-placeholder');
        this.renderer.addClass(this.fieldset.nativeElement, 'clicked-fieldset');
        this.renderer.addClass(this.span.nativeElement, 'clicked-span');
    }
}

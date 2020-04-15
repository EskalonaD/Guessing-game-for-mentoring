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

/**
 *
 * We have to register the component by pushing it to the global NG_VALUE_ACCESSOR provider.
 *
 * At runtime, Angular calls all the elements that bound to this token and uses them to bind the model to the
 * respective element.
 *
 * We need to use forwardRef because in ES6 classes are not hoisted to the top, so at this point (inside
 * the metadata definition), the class is not yet defined.
 *
 * multi: true indicates that several elements of NG_VALUE_ACCESSOR can be bound to this provider.
 *
 * Note: You can implement only one custom ControlValueAccessor per component.
 */
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
    @Output() blurred = new EventEmitter;
    @ViewChild('input', { static: true }) private input: ElementRef;    //false?
    @ViewChild('animatedPlaceholder', { static: true }) private animatedPlaceholder: ElementRef;    //false?
    @ViewChild('fieldset', { static: true }) private fieldset: ElementRef;    //false?
    @ViewChild('span', { static: true }) private span: ElementRef;    //false?

    onChange: any = () => { };
    onTouch = () => { };
    error: boolean;

    ngOnInit() {
        this.error = false;
    }

    // control value accessor interface methods starts

    /**
     * Angular will call this method with the value in one of the following cases:
     * When you instantiate a new FormControl .
     * When you call this.control.patchValue/setValue(value)
     */
    writeValue(input: any): void {
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

    /**
     *
     * Set the function to be called when the control receives a change event. Angular provides you with a function and
     * asks you to call it whenever there is a change in your component with the new value so that it can update the
     * control.
     *
     * In our case, we need to listen to the input event and call this function with the new value.
     */
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    /**
     *
     * registerOnTouched method is the same as registerOnChange except that you should call her when the
     * control receives a touch event.
     */
    registerOnTouched(fn: any): void {
        this.onTouch = fn;
        // throw new Error("Method not implemented.");
    }

    /**
     *
     * This function is called when the control status changes to or from DISABLED. Depending on the value, it will enable
     * or disable the appropriate DOM element.
     *
     * Angular will call this method in one of the following cases:
     * When you instantiate a new FormControl with the disabled property set to true. FormControl({value: '', disabled:
     *  true})
     *
     * When you call control.disable() or when you call control.enable() after your already called control.disable() at
     * least once.
     *
     * In our case, we need to add a disabled class to our div to simulate a disabled textarea.
     */
    setDisabledState(isDisabled: boolean): void {
        this.renderer.setProperty(this.input.nativeElement, 'disabled', isDisabled)
    }

    // control value accessor interface methods ends

    onInput(event) {
        this.writeValue(event.target.value);
        this.onTouch();
    }

    onBlur() {
        if (this.error) {
            this.renderer.addClass(this.fieldset.nativeElement, 'errored-fieldset')
        }
        else {
            this.renderer.removeClass(this.fieldset.nativeElement, 'errored-fieldset')
            this.renderer.addClass(this.fieldset.nativeElement, 'blurred-fieldset')
        }

        this.blurred.emit();
    }

    onInputFocus() {
        this.renderer.addClass(this.animatedPlaceholder.nativeElement, 'clicked-placeholder');
        this.renderer.addClass(this.fieldset.nativeElement, 'clicked-fieldset');
        this.renderer.addClass(this.span.nativeElement, 'clicked-span');
    }
}

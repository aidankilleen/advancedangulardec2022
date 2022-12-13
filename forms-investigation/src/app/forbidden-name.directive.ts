import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms' ;


export function forbiddenNameValidator(forbiddenNames:string[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let index = forbiddenNames.findIndex(name => name == control.value);
    return index != -1 ? {forbiddenName:{value: control.value}} : null;
  };
}

@Directive({
  selector: '[appForbiddenName]', 
  providers: [{
    provide: NG_VALIDATORS, 
    useExisting: ForbiddenNameDirective, 
    multi: true
  }]
})
export class ForbiddenNameDirective implements Validator {

  @Input('appForbiddenName') forbiddenNames: string[] = [];

  constructor() { 
    console.log("ForbiddenNameDirective applied");
  }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {

    return this.forbiddenNames.length > 0 
          ? forbiddenNameValidator(this.forbiddenNames)(control)
          : null;
    /*
    console.log(`VALIDATING...${this.forbiddenNames.length}`);

    this.forbiddenNames.forEach(name => console.log(name));

    let index = this.forbiddenNames.findIndex(name => name == control.value);

    if (index != -1) {
      return {"forbiddenName":{value: control.value }};
    }
    return null;
    */
  }
}

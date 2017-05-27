import { NgModule } from '@angular/core';

export { Select2OptionData, Select2TemplateFunction } from './select-guru.interface';
import { Select2Component } from './select-guru.component';

export { Select2Component } from './select-guru.component';

@NgModule({
    declarations: [Select2Component],
    exports: [Select2Component]
})
export class Select2Module { }

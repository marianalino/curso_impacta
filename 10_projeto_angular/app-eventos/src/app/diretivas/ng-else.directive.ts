import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {

  constructor(
    private template: TemplateRef<any>,
    private view: ViewContainerRef
  ) { }

  @Input() set ngElse(condicao: boolean) {
    if (condicao) {
      this.view.createEmbeddedView(this.template);
    } else {
      this.view.clear();
    }
  }

}

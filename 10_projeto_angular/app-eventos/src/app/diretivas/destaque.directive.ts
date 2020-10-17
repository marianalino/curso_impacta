import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appDestaque]'
})
export class DestaqueDirective implements OnInit {

  constructor() { }

  @HostBinding('style.backgroundColor') corDeFundo: string;

  ngOnInit(): void {
    this.corDeFundo = "#bfbfbf";
  }

  @HostListener('mouseover') entrarMouse() {
    this.corDeFundo = 'gray';
  }

  @HostListener('mouseout') retirarMouse() {
    this.corDeFundo = "#bfbfbf";
  }

}

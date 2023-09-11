import { Component, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const container = this.el.nativeElement.querySelector('.container-fluid');
    if (container) {
      const scrollY = window.scrollY || window.pageYOffset;
      if (scrollY > 0) {
        this.renderer.removeClass(container, 'p-4');
        this.renderer.addClass(container, 'p-2');
      } else {
        this.renderer.removeClass(container, 'p-2');
        this.renderer.addClass(container, 'p-4');
      }
    }
  }
}

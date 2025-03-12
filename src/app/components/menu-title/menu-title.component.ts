import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-title',
  imports: [],
  templateUrl: './menu-title.component.html',
  styleUrl: './menu-title.component.css'
})
export class MenuTitleComponent {

    @Input()
    menuTitle:string=""
}

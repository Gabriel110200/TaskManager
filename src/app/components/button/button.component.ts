import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() color: any;
  @Input() text: any;
  @Output() BtnClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  OnClick() 
  {
    this.BtnClick.emit();
    
  }
    

}

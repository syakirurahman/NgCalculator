import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  displayValue:string;
  value:number;
  hasDot:boolean;
  minusValue:boolean;
  percentValue:boolean;
  activeOperator:string;
  a:number;
  operator:string;
  b:number;

  constructor() {
    this.displayValue = null;
    this.value = 0;
    this.hasDot = false;
    this.minusValue = false;
    this.percentValue = false;
    this.activeOperator=null;
    this.a = 0;
    this.operator = null;
    this.b = 0;
  }

  clickNumber(num:number) {
    if (this.value < 1000000) {
      if(this.hasDot == true) {
        if(this.minusValue == true) {
          this.value = this.value - num * 0.10;
        } else {
          this.value = num * 0.10 + this.value;
        }        
      } else {
        if(this.minusValue == true) {
          this.value = this.value * 10 - num;
        } else {
          this.value = this.value * 10 + num;
        }
        
      }
    } else {
      alert('Max digits reached!');
    }
    this.displayValue = `${this.value}`;
  }

  clickDot() {
    if (this.value < 1000000) {
      this.hasDot = true;
      this.displayValue = `${this.value}.`;
    } else {
      alert('Max digits reached!');
      this.displayValue = `${this.value}` ;
    }
  }

  clearNumber() {
    this.hasDot = false;
    this.value = 0;
    this.displayValue = null;
    this.hasDot = false;
    this.minusValue = false;
    this.percentValue = false;
    this.a = 0;
    this.operator = null;
    this.activeOperator = null;
    this.b = 0;
  }
  
  clickPlusMinus() {
    if(this.value!=0) {
      this.value = this.value * -1;
      this.displayValue = `${this.value}`;
      this.minusValue = !this.minusValue;
    } else {
      this.displayValue = `-`;
      this.minusValue = !this.minusValue;
    }
  }

  clickPercent() {
    if(this.value!=0) {
      this.displayValue = `${this.value}%`;
      this.value = this.value / 100;
      this.percentValue = !this.percentValue;
    }
  }

  clickEqual() {
    if (this.a != 0 && this.operator != null) {
      if(this.value!=0) {
        this.b = this.value;
        this.value = this.formula(this.a,this.operator,this.b);
        this.displayValue = `${this.value}`;
        this.a = this.value;
        this.b = 0;
      }
      this.value = 0;
    }
    this.minusValue = false;
    this.hasDot = false;  
    this.isActive(null);
  }

  isActive(operator:string) {
    this.activeOperator = operator;
  }

  operation(operator:string) {
    if(this.a == 0 && this.operator == null) {
      this.a = this.value;
      this.value = 0;
    } else if (this.a != 0 && this.operator != null) {
      if(this.value!=0) {
        this.b = this.value;
        this.value = this.formula(this.a,this.operator,this.b);
        this.displayValue = `${this.value}`;
        this.a = this.value;
        this.b = 0;
      }
      this.value = 0;
    }
    this.operator = operator;
    this.minusValue = false;
    this.hasDot = false;   
    this.isActive(operator);
  }
  formula(a:number, operator:string, b:number) {
    switch (operator) {
      case 'add':
        return a + b;
        break;
      case 'minus':
        return a - b;
        break;
      case 'multiply':
        return a * b;
        break;
      case 'divide':
        return a / b;
    }
  }
}
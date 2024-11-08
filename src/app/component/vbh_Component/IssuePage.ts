
export class IssuePage {
     static staticVariable: string = '1';
  
    static staticMethod(): string {
      return 'staticVariable: ' + this.staticVariable;
    }
  }
export interface ILogger{
    Log():void;
}
export class BaseLogger implements ILogger{
    Log(){
        
    }
}
export interface Column {
    CustomerCode: string;
    CustomerName: string;
    CustomerAmount: number;
}
export class ConsoleLogger extends BaseLogger{
   override Log():void{
        console.log("Using console logger");
        
    }
}
export class DbLogger  extends BaseLogger{
      override Log():void{
        console.log("Using Db logger");
    }
}
export class FileLogger  extends BaseLogger{
    override Log():void{
        console.log("writing to afile");
    }
}

export type CustomerProperty = 'CustomerCode' | 'CustomerName' | 'CustomerAmount';
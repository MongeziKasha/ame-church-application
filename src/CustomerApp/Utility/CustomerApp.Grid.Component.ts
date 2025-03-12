import { Component,Input,Output,EventEmitter } from "@angular/core";

@Component({
    selector:"grid-ui",
    templateUrl: "./CustomerApp.Grid.html"
})
export class GridComponent{
    gridColumn : Array<Object> = new Array<Object>();
    gridData : Array<Object> = new Array<Object>();
}
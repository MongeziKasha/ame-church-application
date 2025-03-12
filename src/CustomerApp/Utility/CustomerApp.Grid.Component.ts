import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Customer } from '../Customer/CustomerApp.model'; 
import {CustomerProperty} from '../Utility/CustomerApp.Logger'
import { RouterLink } from "@angular/router";

@Component({
    selector: "grid-ui",
    templateUrl: "./CustomerApp.Grid.html",
    standalone: true,
    imports: [CommonModule,RouterLink]
})
export class GridComponent {
    gridColumn: Array<{ colName: CustomerProperty }> = []; // Specify the type for gridColumn
    gridData: Customer[] = []; // Specify the type for gridData

    @Input("grid-column")
    set setGridColumn(_gridColumn: Array<{ colName: CustomerProperty }>) {
        this.gridColumn = _gridColumn;
    }

    @Input("grid-data")
    set setGridData(_gridData: Customer[]) {
        this.gridData = _gridData;
    }

    @Output("grid-selected")
    eventEmitter: EventEmitter<Customer> = new EventEmitter<Customer>();

    selectGrid(_selected: Customer) {
        this.eventEmitter.emit(_selected);
    }
}

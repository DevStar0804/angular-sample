import {Component} from "@angular/core";

import {GridOptions, RowNode} from "ag-grid/main";

import {NameAndAgeRendererComponent} from "./name-age-renderer.component";

@Component({
    selector: 'ag-full-width-renderer-component',
    templateUrl: './full-width-renderer.component.html'
})
export class FullWidthComponent {
    public gridOptions: GridOptions;

    constructor() {
        this.gridOptions = <GridOptions>{
            rowData: FullWidthComponent.createRowData(),
            columnDefs: FullWidthComponent.createColumnDefs(),
            isFullWidthCell: (rowNode: RowNode) => {
                return (rowNode.id === "0") || (parseInt(rowNode.id) % 2 === 0);
            },
            fullWidthCellRendererFramework: NameAndAgeRendererComponent
        };
    }

    private static createColumnDefs() {
        return [
            {
                headerName: "Name",
                field: "name",
                width: 400
            },
            {
                headerName: "Age",
                field: "age",
                width: 399
            },
        ];
    }

    private static createRowData() {
        return [
            {name: "Bob", age: 10},
            {name: "Harry", age: 3},
            {name: "Sally", age: 20},
            {name: "Mary", age: 5},
            {name: "John", age: 15},
            {name: "Bob", age: 10},
            {name: "Harry", age: 3},
            {name: "Sally", age: 20},
            {name: "Mary", age: 5},
            {name: "John", age: 15},
            {name: "Jack", age: 25},
            {name: "Sue", age: 43},
            {name: "Sean", age: 44},
            {name: "Niall", age: 2},
            {name: "Alberto", age: 32},
            {name: "Fred", age: 53},
            {name: "Jenny", age: 34},
            {name: "Larry", age: 13},
        ];
    }
}
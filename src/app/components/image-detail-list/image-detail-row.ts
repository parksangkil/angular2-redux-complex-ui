
import {Component, Input} from 'angular2/core'
import {RouterLink} from 'angular2/router'

@Component({
    selector: '.image-detail-row',
    directives: [RouterLink],
    template: `
        <td>
            <a [routerLink]="['/Images', 'View', { id: rowData.id }]">
                <i class="fa fa-eye"></i> {{rowData.title}}
            </a>
        </td>
        <td>{{rowData.size | number}}</td>
        <td>{{rowData.dateTaken | date}}</td>
        <td>{{rowData.width | number}} x {{rowData.height | number}}</td>
        <td>{{rowData.portrait ? "Portrait" : ""}}{{rowData.landscape ? "Landscape" : ""}}</td>
        <td>{{rowData.tags}}</td>
    `
})
export class ImageDetailRow {
    @Input() public rowData: any;
}

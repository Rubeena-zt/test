
import React from 'react';
import { L10n } from '@syncfusion/ej2-base';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Inject } from '@syncfusion/ej2-react-grids';
import { data } from './data';
L10n.load({
    'en-US': {
        'pager': {
            'currentPageInfo': '',
            'totalItemsInfo': '{1} to {2} of {0}',
        }
    }
});
function Paging() {
    return (<div className='control-pane'>
            <div className='control-section'>
                <GridComponent dataSource={data} locale='en-US' allowPaging={true} height={365} pageSettings={{ pageCount: 4, pageSizes: true }}>
                    <ColumnsDirective>
                        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right'></ColumnDirective>
                        <ColumnDirective field='CustomerName' headerText='Customer Name' width='150'></ColumnDirective>
                        <ColumnDirective field='OrderDate' headerText='Order Date' width='130' format='yMd' textAlign='Right'/>
                        <ColumnDirective field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right'/>
                        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='170'></ColumnDirective>
                    </ColumnsDirective>
                    <Inject services={[Page]}/>
                </GridComponent>
            </div>
        </div>);
}
export default Paging;

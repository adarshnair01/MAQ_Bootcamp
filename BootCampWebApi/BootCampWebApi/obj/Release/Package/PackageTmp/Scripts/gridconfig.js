
var gridResult;
$.ajax({ 
    type: 'GET', 
    url: '/Grid?city=london', 
    dataType: 'json',
    success: function (data) { 
        gridResult = data;
        demo();
    }
});

function demo() {
    var chart1 = new MAQ.JsonGrid(
         {
             "container": "jsonGrid",
             "data": gridResult,
             "columnHeader": [
             {
                 "columnText": "Product",
                 "name": "Product",
                 "sortable": true,
                 "sortType": "parseString",
                 "sortKey": "[Product]",
                 "headerClassName": "TableHeader",
                 "formatter": "",
                 "style": {
                     "textAlign": "left",
                     "width": "200px",
                     "maxWidth": "200px",
                     "minWidth": "200px"
                 }
             },
             {
                 "columnText": "Color",
                 "name": "Color",
                 "sortable": true,
                 "sortType": "parseString",
                 "sortKey": "[Color]",
                 "headerClassName": "TableHeader",
                 "formatter": "",
                 "style": {
                     "textAlign": "right",
                     "width": "125px",
                     "maxWidth": "125px",
                     "minWidth": "125px"
                 }
             },
             {
                 "columnText": "Sales",
                 "name": "Sales",
                 "sortable": true,
                 "sortType": "parseDecimal",
                 "sortKey": "[Sales]",
                 "headerClassName": "TableHeader",
                 "formatter": "",
                 "style": {
                     "width": "350px"
                 }
             }
             ],
             //"gridSort": {
             //    "sortby": "totalSales",
             //    "sortorder": "ASC",
             //    "sortType": "parseDecimal"
             //},
             "pagination": {
                 "maxRows": 2,
                 "retainPageOnSort": false,
                 "paginate": true
             },
             "rows": {
                 "alternate": false
             },
             "clientGrid": true,
             "isWin8App": false
         }
    );
}
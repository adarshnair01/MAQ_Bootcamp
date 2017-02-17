
var gridResult;
var city = 'london';
var chart1;
$.ajax({ 
    type: 'GET', 
    url: '/bargrid?city='+city,
    dataType: 'json',
    success: function (data) { 
        gridResult = data.top10Product;
        jQuery.each(data.top10City.cities, function (index, item) {
            $('#sltcity').append($("<option></option>").val(item).html(item));
        });
        setSelectEvent();
        demo();
    }
});

function changeCity(city) {
    $.ajax({
        type: 'GET',
        url: '/bargrid/griddata?city=' + city,
        dataType: 'json',
        success: function (data) {
            gridResult = data;
            console.log('/bargrid/griddata?city=' + city);
            demo();
        }
    });
}

function setSelectEvent() {
    $(document).on('change', '#sltcity', function () {
        $('#jsonGrid').html('');
        var data = $(this).val();
        changeCity(data);
    });
}

function demo() {
    chart1 = new MAQ.JsonGrid(
         {
             "container": "jsonGrid",
             "data": gridResult,
             "columnHeader": [
             {
                 "columnText": "Name",
                 "name": "Name",
                 "sortable": true,
                 "sortType": "parseString",
                 "sortKey": "[Name]",
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
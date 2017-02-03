/* Check if MAQ object exists */
if (typeof MAQ === 'undefined') {
    var MAQ = {};
}

function clone(obj) {
    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
        var copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        var copy = [];
        var len = obj.length;
        for (var i = 0; i < len; ++i) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        var copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
        }
        return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
}


MAQ.isNumber = function (fNumber) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
/*
MAQ.charts: Take config from user and call to chart rendering functions
@param {chartConfigOptions} User configuration
*/
MAQ.charts = function (chartConfigOptions) {
    this.chartOptions = {
        chart: {
            renderTo: '',
            type: '',
            margin: [5],
            style: {
                width: 500,
                height: 500
            }
        },
        title: {
            align: 'left',
            text: '',
            floating: false,
            x: 0,
            y: 0,
            style: {
            }
        },
        plotOptions: {
            colors: ["#DDDF0D", "#7798BF", "#55BF3B", "#DF5353", "#aaeeee", "#ff0066", "#eeaaee", "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
            line: {
                stepLine: false,
                marker: {
                    enabled: true,
                    fillColor: '#FFFFFF',
                    lineWidth: 2,
                    lineColor: null,
                    width: 0
                },
                color: ['#0066CC'],
                lineWidth: 2,
                lineDashStyle: 'shortdash'
            },
            area: {
                stepLine: false,
                marker: {
                    enabled: true,
                    fillColor: '',
                    lineWidth: 1,
                    lineColor: '',
                    width: 4
                },
                color: [],
                opacity: 0.8,
                lineWidth: 1,
                lineDashStyle: ''
            },
            column: {
                padding: 5,
                groupPadding: 2,
                stacked: true,
                multiColored: true,
                color: [],
                opacity: 0.8,
                borderColor: '',
                borderRadius: 0,
                borderWidth: 1,
                borderDashStyle: '',
                similarColor: false,
                valueBox: {
                    enabled: false,
                    position: 'top',
                    style: {
                        fill: '#444',
                        fontSize: '14px',
                        fontFamily: 'Segoe UI'
                    }
                }
            },
            bar: {
                padding: 5,
                groupPadding: 2,
                stacked: true,
                multiColored: true,
                color: [],
                opacity: 0.8,
                borderColor: '',
                borderRadius: 0,
                borderWidth: 1,
                pushBlankSeries: true,
                borderDashStyle: '',
                valueBox: {
                    enabled: false,
                    position: 'top',
                    style: {
                        fill: '#444',
                        fontSize: '14px',
                        fontFamily: 'Segoe UI'
                    }
                }
            },
            pie: {
                color: [],
                opacity: 0.8,
                borderColor: '',
                borderWidth: 1,
                borderDashStyle: '',
                dataLabels: {
                    enabled: true,
                    formatter: null,
                    lineWidth: 1,
                    lineColor: '#333333',
                    style: {
                        color: '#333',
                        fontSize: '13px',
                        fontFamily: 'Segoe UI'
                    }
                },
                sliceOnSelect: true,
                resetPreviousSliced: true,
                emptyPie: false
            },
            donut: {
                color: [],
                opacity: 1,
                borderColor: '',
                borderWidth: 1,
                borderDashStyle: '',
                dataLabels: {
                    enabled: true,
                    formatter: null,
                    lineWidth: 1,
                    lineColor: '#333333',
                    style: {
                        color: '#333',
                        fontSize: '16px',
                        fontFamily: 'Segoe UI'
                    }
                }
            },
            funnel: {
                color: [],
                opacity: 0.8,
                borderColor: '',
                borderWidth: 1,
                borderDashStyle: '',
                dataLabels: {
                    enabled: true,
                    formatter: null,
                    position: 'center',
                    lineWidth: 1,
                    lineColor: '#333333',
                    style: {
                        color: '#333',
                        fontSize: '13px',
                        fontFamily: 'Segoe UI'
                    }
                }
            },
                stock: {
                padding: 15,
                opacity: 0.8,
                borderColor: 'silver',
                borderRadius: 2,
                borderWidth: 1,
                borderDashStyle: 'solid',
                lineWidth: 2,
                lineColor: '#444',
                lineDashStyle: ''
            },
            bubble: {
                color: ['#0066CC', '#CC0000', '#75962A', '#4572a7', '#aa4643', '#89a54e', '#80699b', '#3d96ae', '#db843d']
            },
            spiderWeb: {
                color: ['#0066CC', '#CC0000', '#75962A'],
                axis: {
                    labels: {
                        series: [],
                        style: {
                            fill: '#555555',
                            fontSize: '12px',
                            fontFamily: 'Segoe UI'
                        }
                    },
                    lineWidth: 2,
                    lineColor: "#BBBBBB",
                    numberOfGridLines: 4
                },
                lineWidth: 2
            },
            combolinecolumn: {
                color: ['#0066CC', '#CC0000', '#75962A']
            },
            timeline: {
                stepLine: false,
                marker: {
                    enabled: true,
                    fillColor: '#FFFFFF',
                    lineWidth: 2,
                    lineColor: null,
                    width: 0
                },
                color: ['#0066CC'],
                lineWidth: 2,
                lineDashStyle: '',
                xAxisLabelCount: 10
            },
            bowtie: {
                branch: {
                    left: {
                        fieldName: '',
                        fillColor: '#DBDBDB',
                        title: {
                            text: '',
                            align: '',
                            style: {
                            }
                        }
                    },
                    right: {
                        fieldName: '',
                        fillColor: '#DBDBDB',
                        title: {
                            text: '',
                            align: '',
                            style: {
                            }
                        }
                    },
                    spacing: 10,
                    drillDepenedency: 'independent',
                    drillFunction: '',
                    drillBackFunction: ''
                },
                label: {
                    left: {
                        enabled: false,
                        header: [],
                        headerStyle: {},
                        colModel: []
                    },
                    right: {
                        enabled: false,
                        header: [],
                        headerStyle: {},
                        colModel: []
                    },
                    headerDataSpacing: 0
                },
                showTotal: {
                    enabled: true,
                    side: 'max',
                    formatter: '',
                    title: {
                        text: '',
                        style: {}
                    },
                    spacing: 10,
                    style: {
                    }
                }
            },
            halfbowtie: {
                branch: {
                    fieldName: '',
                    fillColor: '#DBDBDB',
                    title: {
                        text: '',
                        align: '',
                        style: {
                        }
                    },
                    spacing: 10,
                    drillDepenedency: 'dependent',
                    drillFunction: '',
                    drillBackFunction: ''
                },
                label: {
                    enabled: false,
                    header: [],
                    headerStyle: {},
                    colModel: [],
                    headerDataSpacing: 0
                },
                showTotal: {
                    enabled: true,
                    side: 'max',
                    formatter: '',
                    title: {
                        text: '',
                        style: {}
                    },
                    spacing: 10,
                    style: {}
                }
            },
            treemap: {
                fieldName: '',
                fieldColor: '',
                drillThrough: {
                    type: 'click',
                    style: {}
                },
                title: {
                    fieldName: '',
                    style: {}
                }
            }
        },
        legend: {
            enabled: true,
            enableClick: true,
            align: 'center',
            verticalAlign: 'bottom',
            verticalAlignLegend: false,
            borderColor: 'silver',
            borderStyle: '',
            borderWidth: 1,
            borderRadius: 5,
            layout: 'horizontal',
            floating: false,
            symbolWidth: 11,
            symbolPadding: 5,
            individualDistance: 5,
            lineHeight: 3,
            style: {


            },
            enableTextClipping: false,
            clipTextFrom: "left",
            clippedTextLength: 10
        },
        xAxis: {
            title: {
                align: 'left',
                text: '',
                style: {
                },
                x: 0,
                y: 0
            },
            labels: {
                enabled: true,
                align: 'center',
                series: [],
                formatter: null,
                staggerLines: false,
                rotation: 0,
                style: {
                },
                x: 0,
                y: 0
            },

            dualxAxis: [{
                labels: {
                    style: {
                    }
                },
                title: {
                    text: '',
                    style: {
                    },
                    x: 0,
                    y: 0
                }
            },
         {
             title: {
                 text: '',
                 style: {
                 },
                 x: 0,
                 y: 0
             },
             labels: {
                 enabled: true,
                 align: 'left',
                 series: [],
                 formatter: null,
                 staggerLines: false,
                 rotation: 0,
                 style: {
                 },
                 x: 0,
                 y: 0
             }
         }],
            dualAxisEnabled: false,
            numberOfGridLines: 10,
            lineWidth: 0,
            lineColor: 'silver',
            gridLineWidth: 1,
            gridLineColor: 'silver',
            gridLineDashStyle: 'solid',
            tickWidth: 5,
            tickHeight: 1,
            tickColor: 'silver',
            tickPosition: 'onAxis',
            labelSpacing: 3,
            shiftStartBy: 0,
            skipInterval: 0,
            alternateGridColor: null,
            usageWidth: 100
        },
        yAxis: {
            title: {
                align: 'left',
                text: '',
                style: {
                },
                x: 0,
                y: 0
            },
            labels: {
                enabled: true,
                align: 'right',
                staggerLines: false,
                series: [],
                formatter: null,
                rotation: 0,
                style: {
                },
                x: 0,
                y: 0
            },
            dualyAxis: {
                axisLeft: {
                    title: {
                        align: 'left',
                        text: '',
                        style: {
                        },
                        x: 0,
                        y: 0
                    },
                    labels: {
                        enabled: true,
                        align: 'right',
                        staggerLines: false,
                        series: [],
                        formatter: null,
                        rotation: 0,
                        style: {
                        },
                        x: 0,
                        y: 0
                    }
                },
                axisRight: {
                    title: {
                        align: 'left',
                        text: '',
                        style: {
                        },
                        x: 0,
                        y: 0
                    },
                    labels: {
                        enabled: true,
                        align: 'right',
                        staggerLines: false,
                        series: [],
                        formatter: null,
                        rotation: 0,
                        style: {
                        },
                        x: 0,
                        y: 0
                    }

                }
            },
            dualAxisEnabled: false,
            numberOfGridLines: 10,
            lineWidth: 0,
            lineColor: 'silver',
            gridLineWidth: 1,
            gridLineColor: 'silver',
            gridLineDashStyle: 'solid',
            tickWidth: 5,
            tickHeight: 1,
            tickColor: 'silver',
            tickPosition: 'onAxis',
            labelSpacing: 3,
            shiftStartBy: 0,
            alternateGridColor: null
        },
        tooltip: {
            enabled: true,
            shared: true,
            customTooltip: null,
            style: {
            },
            seriesLevelTooltip: false
        },
        onClick: {
            enabled: false,
            clickFunction: null
        },
        median: {
            enabled: true
        },

        series: [],
        animation: {
            enabled: true,
            type: 1
        }
    };
    /* Copy configuration parameters */
    for (x in chartConfigOptions) {
        MAQ.mergeObjects(x, this.chartOptions, chartConfigOptions);
    }
    /* Validate Important Options */
    var sResult = MAQ.validateOptions(this.chartOptions);

    if (!sResult) {
        if (this.chartOptions.chart.type === 'treemap') {
            var oTreemapOptions = this.chartOptions.plotOptions.treemap;
            oTreemapOptions.container = document.getElementById(chartConfigOptions.chart.renderTo);
            oTreemapOptions.original = {};
            oTreemapOptions.original.child = [];
            oTreemapOptions.original.child = clone(chartConfigOptions.series.child);
            oTreemapOptions.currentLevel = 0;
            oTreemapOptions.selectedValue = [];
            oTreemapOptions.selectedIndex = [];
            oTreemapOptions.currentLayout = [];
            oTreemapOptions.prevLayout = [];
            var oToolTip = document.createElement('div');
            var oTTStyle = chartConfigOptions.tooltip.style;
            oTTStyle.position = 'absolute';
            oTTStyle.display = 'none';
            oTTStyle.minWidth = oTTStyle.minHeight = oTTStyle.top = oTTStyle.left = '0';
            MAQ.applyStyle(oToolTip, oTTStyle);
            this.chartOptions.container.appendChild(oToolTip);
            this.chartOptions.tooltipDiv = oToolTip;
            MAQ.createTreemap(this.chartOptions);
        } else {
            this.chartOptions.svgNS = 'http://www.w3.org/2000/svg';
            this.chartOptions.xlinkNS = 'http://www.w3.org/1999/xlink';
            this.chartOptions.availX = 0;
            this.chartOptions.availY = 0;
            this.chartOptions.availWidth = 0;
            this.chartOptions.availHeight = 0;
            this.chartOptions.useFullXAxis = ['line', 'area', 'bubble', 'combolinecolumn'];

            MAQ.createSVGDoc(this.chartOptions); //Create SVG document
            this.chartOptions.availWidth = this.chartOptions.svgELE.clientWidth;
            this.chartOptions.availHeight = this.chartOptions.svgELE.clientHeight;
            MAQ.drawChartTitle(this.chartOptions); //Draw chart title
            /* Chart differntiator */
            switch (this.chartOptions.chart.type) {
                case 'line':
                    MAQ.createLineChart(this.chartOptions);
                    break;
                case 'area':
                    MAQ.createAreaChart(this.chartOptions);
                    break;
                case 'column':
                    MAQ.createColumnChart(this.chartOptions);
                    break;
                case 'bar':
                    MAQ.createBarChart(this.chartOptions);
                    break;
                case 'pie':
                    MAQ.createPieChart(this.chartOptions);
                    break;
                case 'donut':
                    MAQ.createPieChart(this.chartOptions);
                    break;
                case 'funnel':
                    MAQ.createFunnelChart(this.chartOptions);
                    break;
                case 'stock':
                    MAQ.createStockChart(this.chartOptions);
                    break;
                case 'bowtie':
                    this.chartOptions.plotOptions.bowtie.branch.left.currentLevel = 0;
                    this.chartOptions.plotOptions.bowtie.branch.right.currentLevel = 0;
                    this.chartOptions.plotOptions.bowtie.branch.currentLevel = 0;
                    MAQ.createBowTieChart(this.chartOptions);
                    break;
                case 'bubble':
                    MAQ.createBubbleChart(this.chartOptions);
                    break;
                case 'point':
                    MAQ.createPointChart(this.chartOptions);
                    break;
                case 'spiderWeb':
                    MAQ.createSpiderWebChart(this.chartOptions);
                    break;
                case 'timeline':
                    MAQ.createTimelineChart(this.chartOptions);
                    break;
                case 'combolinecolumn':
                    MAQ.createComboLineColumnChart(this.chartOptions);
                    break;
                case 'halfbowtie':
                    this.chartOptions.plotOptions.halfbowtie.branch.currentLevel = 0;
                    MAQ.createHalfBowTieChart(this.chartOptions);
                    break;
            }
        }
    } else {
        alert(sResult);
        return false;
    }
};

/*
MAQ.validateDirectSeriesColor: Validated the color for all the charts
@param {chartConfigOptions} user configuration parameters
@param (inData) to specify whether data values are in data object
*/
MAQ.validateDirectSeriesColor = function (chartConfigOptions, inData) {
    var iCount, arrColor, iColorLength, iSeriesLength, arrTempColorSeries = [];
    arrColor = chartConfigOptions.plotOptions[chartConfigOptions.chart.type].color;
    iColorLength = arrColor.length;

    /* Validating the color for Combo Line Column Chart */
    if (chartConfigOptions.chart.type == 'combolinecolumn') {
        var tempSeries = chartConfigOptions.series;
        var lineCount = 0, barCount = 0, iTempSeries;
        for (iTempSeries = 0; iTempSeries < tempSeries.length; iTempSeries++) {
            if (tempSeries[iTempSeries].type == 'line') {
                lineCount++;
            }
            else {
                barCount++;
            }
        }

        if (chartConfigOptions.plotOptions.combolinecolumn.line.color.length < lineCount) {
            arrColor = chartConfigOptions.plotOptions.combolinecolumn.line.color;
            iColorLength = arrColor.length;
            for (iCount = 0; iCount < lineCount; iCount++) {
                arrTempColorSeries.push(arrColor[iCount % iColorLength]);
            }
            chartConfigOptions.plotOptions.combolinecolumn.line.color = arrTempColorSeries;
        }

        if (chartConfigOptions.plotOptions.combolinecolumn.column.color.length < barCount) {
            arrColor = chartConfigOptions.plotOptions.combolinecolumn.column.color;
            iColorLength = arrColor.length;
            for (iCount = 0; iCount < barCount; iCount++) {
                arrTempColorSeries.push(arrColor[iCount % iColorLength]);
            }
            chartConfigOptions.plotOptions.combolinecolumn.column.color = arrTempColorSeries;
        }

        /* Filling the legend color */
        var legendColor = new Array();
        var iLine = 0, iBar = 0;
        tempSeries = chartConfigOptions.series;
        for (iTempSeries = 0; iTempSeries < tempSeries.length; iTempSeries++) {
            if (tempSeries[iTempSeries].type == 'line') {
                legendColor[iTempSeries] = chartConfigOptions.plotOptions.combolinecolumn.line.color[iLine++];
            }
            else {
                legendColor[iTempSeries] = chartConfigOptions.plotOptions.combolinecolumn.column.color[iBar++];
            }
        }
        chartConfigOptions.plotOptions.combolinecolumn.color = legendColor;
        chartConfigOptions.plotOptions.combolinecolumn.line.color = legendColor;
        if (!chartConfigOptions.plotOptions.combolinecolumn.column.multiColored) {
            chartConfigOptions.plotOptions.combolinecolumn.column.color = legendColor;
        }
        return;
    }

    /* Validating the color for all other charts */
    /* Variable: inData is used to specify whether data values are in data object */
    if (!inData) {
        iSeriesLength = chartConfigOptions.series.length;
    }
    else {
        iSeriesLength = chartConfigOptions.series[0].data.length;
    }
    if (iColorLength < iSeriesLength) {
        for (iCount = 0; iCount < iSeriesLength; iCount++) {
            arrTempColorSeries.push(arrColor[iCount % iColorLength])
        }
        chartConfigOptions.plotOptions[chartConfigOptions.chart.type].color = arrTempColorSeries;
    }
};

/*
MAQ.validateOptions: Validates configuration parameter passed by user
@param {chartConfigOptions} user configuration parameters
*/
MAQ.validateOptions = function (chartConfigOptions) {
    if (!chartConfigOptions.chart.renderTo) {
        return 'Provide an ID of element to render chart.';
    }

    var containerElement = document.getElementById(chartConfigOptions.chart.renderTo);
    if (!containerElement) {
        return 'Invalid ID to render chart.';
    }
    chartConfigOptions.container = containerElement;

    if (!chartConfigOptions.chart.type) {
        return 'Kindly specify the type of chart to render.';
    }
    switch (chartConfigOptions.chart.type) {
        case 'line':
        case 'bubble':
        case 'point':
        case 'area':
        case 'spiderWeb':
            MAQ.validateDirectSeriesColor(chartConfigOptions, false);
            if (!chartConfigOptions.series.length)
                return 'Require atleast 1 series to plot the chart';
            break;
        case 'column':
        case 'bar':
            MAQ.validateDirectSeriesColor(chartConfigOptions, true);
            if (!chartConfigOptions.series.length)
                return 'Require atleast 1 series to plot the chart';
            break;
        case 'pie':
        case 'donut':
            MAQ.validateDirectSeriesColor(chartConfigOptions, false);
            break;
        case 'combolinecolumn':
            MAQ.validateDirectSeriesColor(chartConfigOptions, false);
            break;
        case 'funnel':
            MAQ.validateDirectSeriesColor(chartConfigOptions, false);
            if (!chartConfigOptions.series.length)
                return 'Require atleast 1 series to plot the chart';
            break;
        case 'stock':
            break;
        case 'bowtie':
            if (!chartConfigOptions.series.length || chartConfigOptions.series.length !== 2)
                return 'Require two different series to plot the chart';

            var oBowTie = chartConfigOptions.plotOptions.bowtie;
            var oBranch = oBowTie.branch;
            if (oBranch.drillDepenedency === 'independent' || oBranch.drillDepenedency === 'dependent') {
                if (oBranch.drillDepenedency === 'dependent') {
                    if (!oBranch.drillDepenedency || (oBranch.drillDepenedency && typeof (window[oBranch.drillFunction]) !== 'function'))
                        return 'Value in drillDependency is not a valid function'
                }
            } else {
                return 'Not a valid dependency type'
            }
            if (!(oBowTie.branch.left.fieldName && oBowTie.branch.right.fieldName))
                return 'Field name for both left and right bow is required'
            if (oBowTie.label.left.enabled) {
                if (!(oBowTie.label.left.header.length === oBowTie.label.left.colModel.length))
                    return 'Number of columns does not match with number of headers for left branch'
            }
            if (oBowTie.label.right.enabled) {
                if (!(oBowTie.label.right.header.length === oBowTie.label.right.colModel.length))
                    return 'Number of columns does not match with number of headers for right branch'
            }
            break;
        case 'timeline':
            break;
        case 'halfbowtie':
            break;
        case 'treemap':
            break;
        default:
            return 'Not a chart type';
            break;
    }
    var oYAxis = chartConfigOptions.yAxis;
    var oXAxis = chartConfigOptions.xAxis;
    switch (chartConfigOptions.chart.type) {
        case 'line':
        case 'area':
        case 'column':
            if (oYAxis.numberOfGridLines < 2) {
                oYAxis.numberOfGridLines = 2;
            }
            oXAxis.numberOfGridLines = oYAxis.numberOfGridLines;
        case 'bar':
            if (oXAxis.numberOfGridLines < 2) {
                oXAxis.numberOfGridLines = 2;
            }
            oYAxis.numberOfGridLines = oXAxis.numberOfGridLines;
            break;
    }
};

/*
MAQ.animateElement: Used to perform animation on SVG element
@param {oELE} element to animate
@param {sPropertyToAnimate} property name of element to animate
@param {sAnimateValue} value to set for the property
@param {iDuration} duration of animation
*/
MAQ.animateElement = function (oELE, sPropertyToAnimate, sAnimateValue, iDuration) {
    var currentVal = oELE.getAttributeNS(null, sPropertyToAnimate);
    if (currentVal.indexOf('px') > -1) {
        currentVal = currentVal.split('px')[0];
    }
    currentVal = parseInt(currentVal);
    iDuration = iDuration / 3.5;
    var increment = (sAnimateValue - currentVal) / iDuration;
    var counter = 1;
    var process = setInterval(function () {
        currentVal += increment;
        MAQ.addAttr(oELE, sPropertyToAnimate, currentVal);
        if (counter >= iDuration) {
            clearInterval(process);
        }
        counter += 1;
    }, 1);
};

/*
MAQ.animateClipElement: Used to perform animation on clip element
@param {oELE} element to animate
@param {sPropertyToAnimate} property name of element to animate
@param {sAnimateValue} value to set for the property
@param {iDuration} duration of animation
*/
MAQ.animateClipElement = function (oELE, sPropertyToAnimate, sAnimateValue, iDuration) {
    if (document.getElementById(oELE) != null) {
        var currentVal = document.getElementById(oELE).getAttribute(sPropertyToAnimate);
        if (currentVal == null || currentVal == '') {
            currentVal = "0";
        }
        if (currentVal.indexOf('px') > -1) {
            currentVal = currentVal.split('px')[0];
        }
        currentVal = parseInt(currentVal);
        iDuration = iDuration / 3.5;
        var increment = (sAnimateValue - currentVal) / iDuration;
        var counter = 1;
        var process = setInterval(function () {
            if (document.getElementById(oELE) != null) {
                currentVal += increment;
                document.getElementById(oELE).setAttribute(sPropertyToAnimate, currentVal);
                //oELE.opacity=currentVal;
                //MAQ.addAttr(oELE, sPropertyToAnimate, currentVal);
                if (counter >= iDuration) {
                    clearInterval(process);
                }
                counter += 1;
            }
        }, 1);

    }
};
/*
MAQ.mergeObjects: Merges objects together like jQuery.extend
@param {x} input object of type: property name of object to merge
@param {oDest} destination object
@param {oSource} source object
*/
MAQ.mergeObjects = function (x, oDest, oSource) {
    if (typeof (oSource[x]) === 'string' || typeof (oSource[x]) === 'number') {
        oDest[x] = oSource[x];
    }
    if (oDest[x] instanceof Date) {
        var copy = new Date();
        copy.setTime(oSource[x].getTime());
        oDest[x] = copy;
    }
    if (oDest[x] instanceof Array) {
        if (oSource[x].length > 0) {
            oDest[x] = oSource[x].slice(0);
        }
    }
    if (oDest[x] instanceof Object) {
        var attr = null;
        for (attr in oSource[x]) {
            if (oDest[x].hasOwnProperty(attr)) {
                if (typeof (oSource[x][attr]) !== 'object') {
                    oDest[x][attr] = oSource[x][attr];
                } else if (oDest[x][attr] instanceof Array) {
                    MAQ.mergeObjects(attr, oDest[x], oSource[x]);
                } else {
                    if (oDest[x][attr]) {
                        if (Object.keys(oDest[x][attr]).length === 0) {
                            oDest[x][attr] = oSource[x][attr];
                        }
                    }
                    MAQ.mergeObjects(attr, oDest[x], oSource[x]);
                }
            } else {
                oDest[x][attr] = oSource[x][attr];
                MAQ.mergeObjects(attr, oDest[x], oSource[x]);
            }
        }
    }
};

/*
MAQ.computeStrokeDashStyle: Returns SVG value of stroke-dash for a user-friendly name
@param {sDashType} user friendly stroke-dash name
*/
MAQ.computeStrokeDashStyle = function (sDashType) {
    var sStrokeDashValue = '0';
    if (sDashType) {
        sDashType = sDashType.toLowerCase();
        switch (sDashType) {
            case 'solid':
                break;
            case 'shortdash':
                sStrokeDashValue = '6,2';
                break;
            case 'shortdot':
                sStrokeDashValue = '2,2';
                break;
            case 'shortdashdot':
                sStrokeDashValue = '6,2,2,2';
                break;
            case 'shortdashdotdot':
                sStrokeDashValue = '6,2,2,2,2,2';
                break;
            case 'dot':
                sStrokeDashValue = '2,6';
                break;
            case 'dash':
                sStrokeDashValue = '8,6';
                break;
            case 'longdash':
                sStrokeDashValue = '16,6';
                break;
            case 'dashdot':
                sStrokeDashValue = '8,6,2,6';
                break;
            case 'longdashdot':
                sStrokeDashValue = '16,6,2,6';
                break;
            case 'longdashdotdot':
                sStrokeDashValue = '16,6,2,6,2,6';
                break;
        }
    }
    return sStrokeDashValue;
};

/*
MAQ.addAttr: Adds an attribute to object
@param {oELE} input object
@param {sAttrName} attribute name
@param {sAttrValue} attribute value
*/
MAQ.addAttr = function (oELE, sAttrName, sAttrValue) {
    if (oELE) {
        oELE.setAttribute(sAttrName, sAttrValue);
    }
};

/*
MAQ.applyStyle: Applies to object
@param {oELE} input object
@param {oStyle} style object containing styling properties
*/
MAQ.applyStyle = function (oELE, oStyle) {
    if (typeof oStyle !== 'undefined' && oStyle) {
        var oStyleColl = Object.keys(oStyle);
        var iStyleCounter = 0;
        var iNumOfStyle = oStyleColl.length;
        for (iStyleCounter = iNumOfStyle; 0 <= iStyleCounter; iStyleCounter -= 1) {
            oELE.style[oStyleColl[iStyleCounter]] = oStyle[oStyleColl[iStyleCounter]];
        }
    }
};

/*
MAQ.applyMargin: applies margin to chart
@param {chartConfigOptions} user configuration parameters
@param {oMargin} margin array
*/
MAQ.applyMargin = function (chartConfigOptions, oMargin) {
    if (oMargin.length <= 1 || oMargin.length > 4 || oMargin.length === 3) {
        if (!oMargin.length === 1) {
            oMargin[0] = 5;
        } else {
            if (oMargin[0] <= 0) {
                oMargin[0] = 5;
            }
        }
        oMargin[1] = oMargin[0];
        oMargin[2] = oMargin[0];
        oMargin[3] = oMargin[0];
    } else if (oMargin.length === 2) {
        oMargin[2] = oMargin[0];
        oMargin[3] = oMargin[1];
    }
    chartConfigOptions.availX += oMargin[3];
    chartConfigOptions.availY += oMargin[0];
    chartConfigOptions.availWidth -= (oMargin[1] + oMargin[3]);
    chartConfigOptions.availHeight -= (oMargin[0] + oMargin[2]);
}

/*
MAQ.applyFormatter: applies formatting to data
@param {sText} data to be formatted
@param {sFormatterName} formatter function/ function name
*/
MAQ.applyFormatter = function (sText, sFormatterName) {
    if (sFormatterName) {
        if (typeof (window[sFormatterName]) === 'function') {
            sText = window[sFormatterName](sText);
        } else if (typeof sFormatterName === 'function') {
            sText = sFormatterName(sText);
        }
    }
    return sText;
};

/*
MAQ.removeAllChildren: removes all child nodes
@param {oELE} input object
*/
MAQ.removeAllChildren = function (oELE) {
    while (oELE.hasChildNodes()) {
        oELE.removeChild(oELE.lastChild);
    }
};

/*
MAQ.getMinMax: Returns minimum and maximum value
               Compares users min and max with min and max from Array and returns best result
@param {oDataArray} array of values
@param {min} user's minimum value
@param {max} user's maximum value
*/
MAQ.getMinMax = function (oDataArray, min, max, fieldName) {
    var iDataArrayLength = oDataArray.length;
    var iDataCounter = 0;
    var iSum = 0;
    var iCurrentValue = 0;
    if (iDataArrayLength) {
        for (iDataCounter = 0; iDataCounter < iDataArrayLength; iDataCounter += 1) {
            iCurrentValue = oDataArray[iDataCounter];
            if (iCurrentValue && typeof (iCurrentValue) === 'object') {
                if (iCurrentValue[fieldName]) {
                    iCurrentValue = iCurrentValue[fieldName];
                }
            }
            if (typeof (iCurrentValue) === 'number') {
                iSum += iCurrentValue;
                if (min > iCurrentValue) {
                    min = iCurrentValue;
                }
                if (max < iCurrentValue) {
                    max = iCurrentValue;
                }
            }
            if (typeof (iCurrentValue) === 'string') {
                if (min.length > iCurrentValue.length) {
                    min = iCurrentValue;
                }
                if (max.length < iCurrentValue.length) {
                    max = iCurrentValue;
                }
            }
        }
    } else {
        min = 0;
        max = 0;
        iSum = 0;
    }
    return { min: min, max: max, total: iSum };
};

/*
MAQ.getMinMaxForPie: Returns minimum and maximum value
               Compares users min and max with min and max from Array and returns best result
@param {oDataArray} array of values
@param {min} user's minimum value
@param {max} user's maximum value
*/
MAQ.getMinMaxForPie = function (oDataArray, min, max, fieldName) {
    var iDataArrayLength = oDataArray.length;
    var iDataCounter = 0;
    var iSum = 0;
    var iCurrentValue = 0;
    if (iDataArrayLength) {
        for (iDataCounter = 0; iDataCounter < iDataArrayLength; iDataCounter += 1) {
            if (isSeriesEnabled(oDataArray, iDataCounter)) {
                iCurrentValue = oDataArray[iDataCounter];
                if (iCurrentValue && typeof (iCurrentValue) === 'object') {
                    if (iCurrentValue[fieldName]) {
                        iCurrentValue = iCurrentValue[fieldName];
                    }
                }
                if (typeof (iCurrentValue) === 'number') {
                    iSum += iCurrentValue;
                    if (min > iCurrentValue) {
                        min = iCurrentValue;
                    }
                    if (max < iCurrentValue) {
                        max = iCurrentValue;
                    }
                }
                if (typeof (iCurrentValue) === 'string') {
                    if (min.length > iCurrentValue.length) {
                        min = iCurrentValue;
                    }
                    if (max.length < iCurrentValue.length) {
                        max = iCurrentValue;
                    }
                }
            }
        }
    } else {
        min = 0;
        max = 0;
        iSum = 0;
    }
    return { min: min, max: max, total: iSum };
};

/*
MAQ.getNormalized_Min_Max_Interval: Returns mormalized minimum and maximum value along with axis inteval
@param {iMin} minimum value
@param {iMax} maximum value
@param {iNumberOfAxis} # of axis on X or Y axis
*/
MAQ.getNormalized_Min_Max_Interval = function (iMin, iMax, iNumberOfAxis) {

    var iOgMax = iMax;
    var iOgMin = iMin;
    if (iMin < 0) {
        iMax -= iMin;
    }
    var bMax = false;
    var bMin = false;

    if (iMax < 10) {
        iMax = iMax * 100;
        bMax = true;
    }
    if (Math.abs(iMin) < 10) {
        iMin = iMin * 100;
        bMin = true;
    }

    if (bMax && bMin) {
        iOgMax = iOgMax * 100;
        iOgMin = iOgMin * 100;
    }
    var iInterval = Math.ceil(iMax / iNumberOfAxis);
    var fExponent = Math.floor(Math.log(iInterval) / Math.log(10));
    var oMultiple = [2, 5, 10];
    var iMultipleLength = oMultiple.length;
    var iNormalizationFactor = 0;
    var oNormalizationFactor = [];
    for (iCounter = 0; iCounter < iMultipleLength; iCounter += 1) {
        var modRes = iInterval % Math.pow(oMultiple[iCounter], fExponent);
        oNormalizationFactor[iCounter] = modRes;
        iNormalizationFactor = modRes > iNormalizationFactor ? modRes : iNormalizationFactor;
    }
    var iIndexPos = oNormalizationFactor.lastIndexOf(iNormalizationFactor);
    iInterval += Math.pow(oMultiple[iIndexPos], fExponent) - iNormalizationFactor;
    iMax = iOgMax + iInterval - (Math.abs(iOgMax) % iInterval);
    if (iMin < 0) {
        iMin = iOgMin - (iOgMin % iInterval + iInterval);
        var iNegAxisCount = -(iMin / iInterval);
        var iPosAxisCount = iNumberOfAxis - iNegAxisCount;
        if (iPosAxisCount == 0) {
            iPosAxisCount = 1;
        }
        var iOptimumMax = iPosAxisCount * iInterval;
        if (iOptimumMax < iOgMax) {
            var iOpNum = Math.ceil(iOgMax);
            var iLogMultiple = Math.pow(oMultiple[iIndexPos], fExponent);
            while (1) {
                if (iOpNum % iPosAxisCount === 0 && iOpNum % iLogMultiple === 0) {
                    if ((iOpNum / iPosAxisCount) / iNegAxisCount % iLogMultiple === 0)
                        break;
                    else {
                        var iRem = (iOpNum / iPosAxisCount) / iNegAxisCount % iLogMultiple;
                        iOpNum += iRem;
                    }
                } else {
                    if (iOpNum % iPosAxisCount !== 0) {
                        iOpNum = iOpNum + (iPosAxisCount - (iOpNum % iPosAxisCount));
                    }
                    if (iOpNum % iLogMultiple !== 0) {
                        iOpNum = iOpNum + (iLogMultiple - (iOpNum % iLogMultiple));
                    }
                }
            }
            iMax = iOpNum;
            iInterval = iOpNum / iPosAxisCount;
            iMin = -(iInterval * iNegAxisCount);
        } else {
            iMax = iOptimumMax;
        }

    } else {
        iMax = iInterval * iNumberOfAxis;
    }


    if (bMax && bMin) {
        iInterval = iInterval / 100;
        iMax = iMax / 100;
        iMin = iMin / 100;
    }
    else {
        iMax = Math.round(iMax);
        iMin = Math.round(iMin);
    }


    return { min: iMin, max: iMax, interval: iInterval };
};

/*
MAQ.getObjectDimension: Returns SVG element dimensions like x, y, width and height
@param {oELE} SVG element
*/
MAQ.getObjectDimension = function (oELE) {
    if (oELE) {
        var oMDim = {};
        var oDim = oELE.getBBox();
        var oDim1 = oELE.getBoundingClientRect();
        oMDim.x = oDim.x;
        oMDim.y = oDim.y;
        oMDim.width = oDim1.width;
        oMDim.height = oDim1.height;
        return oMDim;
    }
};

/*
MAQ.createSVGDoc: Creates SVG document to hold the chart content
@param {chartConfigOptions} user configuration parameters
*/
MAQ.createSVGDoc = function (chartConfigOptions) {
    chartConfigOptions.container.style.position = 'relative';
    var svgELE = document.createElementNS(chartConfigOptions.svgNS, 'svg');
    MAQ.addAttr(svgELE, 'xmlns', chartConfigOptions.svgNS);
    MAQ.addAttr(svgELE, 'xmlns:xlink', chartConfigOptions.xlinkNS);
    if (!chartConfigOptions.chart.style.width) {
        chartConfigOptions.chart.style.width = '500px';
    }
    if (!chartConfigOptions.chart.style.height) {
        chartConfigOptions.chart.style.height = '500px';
    }
    MAQ.applyStyle(svgELE, chartConfigOptions.chart.style);
    chartConfigOptions.container.appendChild(svgELE);

    var oToolTip = document.createElement('div');
    var oTTStyle = chartConfigOptions.tooltip.style;
    oTTStyle.position = 'absolute';
    oTTStyle.display = 'none';
    oTTStyle.minWidth = oTTStyle.minHeight = oTTStyle.top = oTTStyle.left = '0';
    MAQ.applyStyle(oToolTip, oTTStyle);
    chartConfigOptions.container.appendChild(oToolTip);

    chartConfigOptions.svgELE = svgELE;
    chartConfigOptions.tooltipDiv = oToolTip;
};

/*
MAQ.createSVGElement: Creates any SVG element
@param {nameSpace} SVG namespace
@param {sELEName} SVG element name
@param {oAttr} attibute object consisting of attributes and style object
*/
MAQ.createSVGElement = function (nameSpace, sELEName, oAttr) {
    var oSVGELE = document.createElementNS(nameSpace, sELEName);
    var oAttrColl = Object.keys(oAttr);
    var iAttrCounter = 0;
    var iAttrLength = oAttrColl.length;
    for (iAttrCounter = 0; iAttrCounter < iAttrLength; iAttrCounter += 1) {
        switch (oAttrColl[iAttrCounter]) {
            case 'text':
                oSVGELE.appendChild(document.createTextNode(oAttr.text));
                break;
            case 'style':
                MAQ.applyStyle(oSVGELE, oAttr.style);
                break;
            default:
                MAQ.addAttr(oSVGELE, oAttrColl[iAttrCounter], oAttr[oAttrColl[iAttrCounter]]);
                break;
        }
    }
    return oSVGELE;
};

/*
MAQ.drawChartTitle: Renders chart title
@param {chartConfigOptions} user configuration parameters
*/
MAQ.drawChartTitle = function (chartConfigOptions) {
    var oTitle = chartConfigOptions.title;
    if (oTitle && oTitle.text) {
        var oAttr = {
            x: 0,
            y: 0,
            text: oTitle.text,
            style: oTitle.style
        };
        switch (oTitle.align) {
            case 'center':
                oAttr.x = chartConfigOptions.availWidth / 2;
                oAttr.style.textAnchor = 'middle';
                break;
            case 'right':
                oAttr.x = chartConfigOptions.availWidth;
                oAttr.style.textAnchor = 'end';
                break;
        }
        var oTitleObj = MAQ.createSVGElement(chartConfigOptions.svgNS, 'text', oAttr);
        var oGrpELE = document.createElementNS(chartConfigOptions.svgNS, 'g');
        oGrpELE.setAttribute('class', 'MAQCharts-title');
        oGrpELE.appendChild(oTitleObj);
        chartConfigOptions.svgELE.appendChild(oGrpELE);
        var oDim = MAQ.getObjectDimension(oTitleObj);
        MAQ.addAttr(oTitleObj, 'y', Math.abs(oDim.y));
        if (oTitle.x) {
            MAQ.addAttr(oTitleObj, 'dx', oTitle.x);
        }
        if (oTitle.y) {
            MAQ.addAttr(oTitleObj, 'dy', oTitle.y);
        }
        if (!chartConfigOptions.title.floating) {
            chartConfigOptions.availX = 0;
            chartConfigOptions.availY = oDim.height;
            chartConfigOptions.availWidth -= chartConfigOptions.availX;
            chartConfigOptions.availHeight -= oDim.height;
            if (oTitle.y > 0) {
                chartConfigOptions.availY += oTitle.y;
                chartConfigOptions.availHeight -= oTitle.y;
            }
        }
    }
};

/*
isSeriesEnabled: To check is series is enabled
@param {oSeries} user configuration parameters
@param {iSeriesIndex} series of legend enabled/ disabled
*/
function isSeriesEnabled(oSeries, iSeriesIndex) {
    if (oSeries[iSeriesIndex].enabled === undefined) {
        oSeries[iSeriesIndex].enabled = true;
    }
    return oSeries[iSeriesIndex].enabled;
}

/*
redrawChart: Redraw chart on selected legend
@param {oParam} user configuration parameters (config) and index of legend series (seriesIndex)
*/
function redrawChart(evt, oParam) {

    var oGrpDisplayArea = oParam.config.svgELE;
    if (oGrpDisplayArea) {
        MAQ.removeAllChildren(oGrpDisplayArea);
    }
    if (oParam.config.series[oParam.seriesIndex].enabled) {
        oParam.config.series[oParam.seriesIndex].enabled = false;
    }
    else {
        oParam.config.series[oParam.seriesIndex].enabled = true;
    }
    oParam.config.availWidth = oParam.config.svgELE.clientWidth;
    oParam.config.availHeight = oParam.config.svgELE.clientHeight;

    /*
        Added code segemnt to fix chart shift issue (on click of legends)
    */
    oParam.config.availX = 0;
    oParam.config.availY = 0;

    switch (oParam.config.chart.type) {
        case 'line':
            MAQ.drawChartTitle(oParam.config);
            MAQ.createLineChart(oParam.config);
            break;
        case 'area':
            MAQ.drawChartTitle(oParam.config);
            MAQ.createAreaChart(oParam.config);
            break;
        case 'column':
            MAQ.drawChartTitle(oParam.config);
            MAQ.createColumnChart(oParam.config);
            break;
        case 'bar':
            oParam.config.plotOptions.bar.pushBlankSeries = false;
            MAQ.drawChartTitle(oParam.config);
            MAQ.createBarChart(oParam.config);
            break;
        case 'pie':
            MAQ.drawChartTitle(oParam.config);
            MAQ.createPieChart(oParam.config);
            break;
        case 'donut':
            MAQ.drawChartTitle(oParam.config);
            MAQ.createPieChart(oParam.config);
            break;
        case 'funnel':
            MAQ.drawChartTitle(oParam.config);
            MAQ.createFunnelChart(oParam.config);
            break;
        case 'stock':
            MAQ.drawChartTitle(oParam.config);
            MAQ.createStockChart(oParam.config);
            break;
        case 'bowtie':
            MAQ.drawChartTitle(oParam.config);
            MAQ.createBowTieChart(oParam.config);
            break;
        case 'bubble':
            MAQ.drawChartTitle(oParam.config);
            MAQ.createBubbleChart(oParam.config);
            break;
        case 'point':
            MAQ.drawChartTitle(oParam.config);
            MAQ.createPointChart(oParam.config);
            break;
        case 'spiderWeb':
            MAQ.drawChartTitle(oParam.config);
            MAQ.createSpiderWebChart(oParam.config);
            break;
        case 'timeline':
            MAQ.drawChartTitle(oParam.config);
            MAQ.createTimelineChart(oParam.config);
            break;
        case 'combolinecolumn':
            MAQ.drawChartTitle(oParam.config);
            MAQ.createComboLineColumnChart(oParam.config);
            break;
    }
}
/*
END: MAQ.redrawChart: Redraw chart on selected legend
*/

/*
MAQ.drawLegend: Renders chart legend title
@param {chartConfigOptions} user configuration parameters
*/
MAQ.drawLegend = function (chartConfigOptions) {
    oLegend = chartConfigOptions.legend;
    if (oLegend.enabled) {
        if (chartConfigOptions.series.length > 0) {
            var iNumSymbols = chartConfigOptions.series.length;
            var iNoOfLegendLines = 1;
            var iPadding = 4;
            var oDim;
            var oAttr = {
                'class': 'MAQCharts-legend',
            };
            var oGrpLegend = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oAttr);
            chartConfigOptions.svgELE.appendChild(oGrpLegend);

            oAttr = {
                'class': 'MAQCharts-legend-labels'
            };
            var oGrpELE = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oAttr);
            oGrpLegend.appendChild(oGrpELE);
            var oParam = {};
            var legendFill;
            var oSymbolAttr = {
                x: 0,
                y: 0,
                rx: 3,
                ry: 3,
                width: oLegend.symbolWidth,
                height: oLegend.symbolWidth,
                fill: '',
                opacity: 1
            };
            var oTextAttr = {
                x: 0,
                y: 0,
                text: '',
                style: oLegend.style
            };
            if (iglobalCounter === 0) {
                legendFill = oLegend.style.fill;
            }
            var oColor = chartConfigOptions.plotOptions[chartConfigOptions.chart.type].color;


            if (oLegend.verticalAlignLegend) {
                oLegend.align = 'left';
                var imaxWidth = 0;

                //Function to find the max width of a particular legend and then assigning the max width to each legend for horizontal alignment between legends
                //Updated by OL StoreBI team
                for (iSCounter = 0; iSCounter < iNumSymbols; iSCounter += 1) {

                    //Create the temporary HTML element to calculate width
                    var obj = document.createElement("span");
                    MAQ.applyStyle(obj, oLegend.style);
                    obj.style.position = "absolute";
                    obj.style.visibility = "hidden";      
                    obj.innerText = chartConfigOptions.series[iSCounter].name;
                    document.body.appendChild(obj);                        
                    if (obj.clientWidth > imaxWidth) {
                        imaxWidth = obj.clientWidth;
                    }
                    //Delete the temporary HTML element used to calculate width
                    document.body.removeChild(obj);
                }

            }


            for (iSCounter = 0; iSCounter < iNumSymbols; iSCounter += 1) {
                if (!isSeriesEnabled(chartConfigOptions.series, iSCounter)) {
                    oSymbolAttr.opacity = 0.3;
                    oLegend.style.fill = 'Gray';
                }
                else {
                    oSymbolAttr.opacity = 1;
                    oLegend.style.fill = legendFill;
                }
                oSymbolAttr.fill = oColor[iSCounter];
                var oRectELE = MAQ.createSVGElement(chartConfigOptions.svgNS, 'rect', oSymbolAttr);
                oGrpELE.appendChild(oRectELE);
                oSymbolAttr.x += oSymbolAttr.width + oLegend.symbolPadding;
                oTextAttr.x = oSymbolAttr.x;
                oTextAttr.text = chartConfigOptions.series[iSCounter].name;
                /* Code for clipping the text to specified number of characters */
                var sTempText = "", bAttachTooltip = false;
                if (oLegend.enableTextClipping && oLegend.clipTextFrom && "string" === typeof (oLegend.clipTextFrom)) {
                    var iTextLen = oTextAttr.text.length;
                    if (oLegend.clippedTextLength && "number" === typeof (oLegend.clippedTextLength) && iTextLen > oLegend.clippedTextLength) {
                        sTempText = oTextAttr.text;
                        bAttachTooltip = true;
                        switch (oLegend.clipTextFrom.toLowerCase()) {
                            case "right":
                                oTextAttr.text = "..." + oTextAttr.text.substring(iTextLen - oLegend.clippedTextLength, iTextLen);
                                break;
                            case "left":
                            default:
                                oTextAttr.text = oTextAttr.text.substring(0, oLegend.clippedTextLength) + "...";
                                break;
                        }
                    }
                }
                var oTextELE = MAQ.createSVGElement(chartConfigOptions.svgNS, 'text', oTextAttr);
                oGrpELE.appendChild(oTextELE);
                if (bAttachTooltip) {
                    var oParam = {
                        value: sTempText,
                        config: chartConfigOptions,
                        type: 'axis'
                    };
                    var oToolTip = chartConfigOptions.tooltipDiv;
                    MAQ.addEventListener(oTextELE, 'mouseover', 'showToolTip', oParam);
                    oTextELE.addEventListener('mouseout', function () { oToolTip.style.display = 'none'; }, true);
                }
                var oParam = {
                    config: chartConfigOptions,
                    grpNumber: iSCounter
                };

                if (oLegend.enableClick) {
                    oTextELE.style.cursor = 'pointer';
                    oRectELE.style.cursor = 'pointer';
                }
                oDim = MAQ.getObjectDimension(oTextELE);


                //verticalAlignLegend property is set to true .
                //Changing width to a const imaxWidth
                if(oLegend.verticalAlignLegend)
                oTextELE.style.width = imaxWidth;

                if (oLegend.layout === 'horizontal') {

                    // if verticalAlignLegend property is set to true
                    //Changing width to a const imaxWidth
                    if (oLegend.verticalAlignLegend) {
                        if ((oSymbolAttr.x + imaxWidth) > chartConfigOptions.availWidth) {
                            oSymbolAttr.x = 0;
                            oSymbolAttr.y = iNoOfLegendLines * oDim.height;
                            iNoOfLegendLines++;
                            MAQ.addAttr(oRectELE, 'x', oSymbolAttr.x);
                            MAQ.addAttr(oRectELE, 'y', oSymbolAttr.y);
                            oSymbolAttr.x += oSymbolAttr.width + oLegend.symbolPadding;
                            oTextAttr.x = oSymbolAttr.x;
                            MAQ.addAttr(oTextELE, 'x', oTextAttr.x);
                        }
                    }
                    else {
                        if ((oSymbolAttr.x +  oDim.width) > chartConfigOptions.availWidth) {
                            oSymbolAttr.x = 0;
                            oSymbolAttr.y = iNoOfLegendLines * oDim.height;
                            iNoOfLegendLines++;
                            MAQ.addAttr(oRectELE, 'x', oSymbolAttr.x);
                            MAQ.addAttr(oRectELE, 'y', oSymbolAttr.y);
                            oSymbolAttr.x += oSymbolAttr.width + oLegend.symbolPadding;
                            oTextAttr.x = oSymbolAttr.x;
                            MAQ.addAttr(oTextELE, 'x', oTextAttr.x);
                        }
                    }
                    MAQ.addAttr(oTextELE, 'y', oSymbolAttr.y + Math.abs(oDim.y) - (oDim.height - oSymbolAttr.height) / 2);
                    if(oLegend.verticalAlignLegend)
                        oSymbolAttr.x += imaxWidth + oLegend.individualDistance;
                    else
                        oSymbolAttr.x += oDim.width + oLegend.individualDistance;
                }
                else if (oLegend.layout === 'vertical') {
                    MAQ.addAttr(oTextELE, 'y', oTextAttr.y + oDim.height - (oSymbolAttr.height / 2));
                    oSymbolAttr.x = 0;
                    oSymbolAttr.y += oSymbolAttr.height + oLegend.lineHeight;
                    oTextAttr.y = oSymbolAttr.y;
                }
                /*Call to Redraw Charts on toggling the legends*/
                oParam = {
                    seriesIndex: iSCounter,
                    config: chartConfigOptions
                };
                if (chartConfigOptions.legend.enableClick) {
                    MAQ.addEventListener(oRectELE, 'click', 'redrawChart', oParam);
                    MAQ.addEventListener(oTextELE, 'click', 'redrawChart', oParam);
                }
            }
            oDim = MAQ.getObjectDimension(oGrpELE);
            oSymbolAttr = {
                x: -iPadding,
                y: -iPadding,
                rx: oLegend.borderRadius,
                ry: oLegend.borderRadius,
                width: oDim.width + (iPadding * 2),
                height: oDim.height + iPadding,
                stroke: oLegend.borderColor,
                fill: 'transparent',
                'stroke-width': oLegend.borderWidth,
                'stroke-dasharray': MAQ.computeStrokeDashStyle(oLegend.borderStyle)
            };
            var oBorderRect = MAQ.createSVGElement(chartConfigOptions.svgNS, 'rect', oSymbolAttr);
            oGrpLegend.insertBefore(oBorderRect, oGrpELE);

            oDim = MAQ.getObjectDimension(oGrpLegend);

            var iLegendX, iLegendY;
            var oLayout = [0, 0];
            oAttr = {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            };
            switch (oLegend.verticalAlign) {
                case 'middle':
                    iLegendY = (chartConfigOptions.availY + chartConfigOptions.availHeight) / 2 - oDim.height / 2;
                    break;
                case 'top':
                    oLayout[0] = 1;
                    iLegendY = chartConfigOptions.availY + iPadding;
                    oAttr.y += oDim.height;
                    oAttr.height -= oDim.height;
                    break
                case 'bottom':
                default:
                    oLayout[0] = 1;
                    iLegendY = chartConfigOptions.availY + chartConfigOptions.availHeight - oDim.height;
                    oAttr.height -= oDim.height + iPadding;
                    break;
            }
            switch (oLegend.align) {
                case 'center':
                    iLegendX = chartConfigOptions.availWidth / 2 - oDim.width / 2;
                    break;
                case 'right':
                    oLayout[1] = 1;
                    iLegendX = chartConfigOptions.availWidth - oDim.width;
                    oAttr.width = iLegendX - chartConfigOptions.availWidth - iPadding;
                    break;
                case 'left': iLegendX = iPadding * 2; break;
                default:
                    oLayout[1] = 1;
                    iLegendX = chartConfigOptions.availX + iPadding * 2;

                    //verticalAlignLegend property is set to true
                    //Changing the required variables
                    if (oLegend.verticalAlignLegend) {
                        oAttr.x += imaxWidth;// oDim.width;
                        oAttr.width -= imaxWidth// oDim.width;
                    }
                    else {
                        oAttr.x +=  oDim.width;
                        oAttr.width -=oDim.width;
                    }
                    break;
            }

            MAQ.addAttr(oGrpLegend, 'transform', 'translate(' + iLegendX + ',' + iLegendY + ')');

            if (!oLegend.floating) {
                chartConfigOptions.availX += oAttr.x;
                chartConfigOptions.availY += oAttr.y;
                chartConfigOptions.availWidth += oAttr.width;
                chartConfigOptions.availHeight += oAttr.height;
                if (oLayout[0] && oLayout[1]) {
                    if (oLegend.verticalAlign === 'top') {
                        chartConfigOptions.availY -= oDim.height;
                    }
                    chartConfigOptions.availHeight += oDim.height;
                }
            }
        }
    }
};

/*
MAQ.drawYAxisTitle: Renders X-axis title
@param {chartConfigOptions} user configuration parameters
*/
MAQ.drawYAxisTitle = function (chartConfigOptions) {
    var oYAxis = chartConfigOptions.yAxis;
    if (oYAxis.title.text) {
        if (!oYAxis.dualAxisEnabled) {
            var oAttr = {
                'class': 'MAQCharts-yAxisTitle',
            };

            if ('combolinecolumn' === chartConfigOptions.chart.type) {
                axis = oYAxis.dualyAxis.axisLeft;
            }
            else {
                axis = oYAxis;
            }

            var oGrpELE = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oAttr);
            chartConfigOptions.svgELE.appendChild(oGrpELE);
            oAttr = {
                x: chartConfigOptions.availX,
                y: chartConfigOptions.y,
                text: axis.title.text,
                style: axis.title.style
            };
            if (axis.title.x) {
                oAttr.dx = axis.title.x;
            }
            if (axis.title.y) {
                oAttr.dy = axis.title.y;
            }
            var oDim = null;
            switch (axis.title.align) {
                case 'center':
                    oAttr.y = chartConfigOptions.availHeight / 2;
                    oAttr.style.textAnchor = 'middle';
                    break;
                case 'right':
                    oAttr.y = chartConfigOptions.availHeight;
                    oAttr.style.textAnchor = 'end';
                    break;
            }
            var oTitleObj = MAQ.createSVGElement(chartConfigOptions.svgNS, 'text', oAttr);
            oGrpELE.appendChild(oTitleObj);
            oDim = MAQ.getObjectDimension(oTitleObj);
            oAttr.x += Math.abs(oDim.height);
            MAQ.addAttr(oTitleObj, 'x', oAttr.x);
            MAQ.addAttr(oTitleObj, 'transform', "rotate(270 " + Math.abs(oAttr.x) + "," + oAttr.y + ")");
            chartConfigOptions.availX += oDim.height;
            chartConfigOptions.availWidth -= oDim.height;
            if (axis.title.y > 0) {
                chartConfigOptions.availX += axis.title.y;
                chartConfigOptions.availWidth -= axis.title.y;
            }
        } else {
            if (oYAxis.dualyAxis.axisLeft && oYAxis.dualyAxis.axisRight) {

                var count = 0;
                for (count = 0; count < 2; count++) {
                    if (count === 0) {
                        axis = oYAxis.dualyAxis.axisLeft
                    } else {
                        axis = oYAxis.dualyAxis.axisRight
                    }
                    var oAttr = {
                        'class': 'MAQCharts-yAxisTitle',
                    };
                    var oGrpELE = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oAttr);
                    var iXvalue = chartConfigOptions.availX
                    if (count == 1) {
                        iXvalue = chartConfigOptions.availWidth + 5;
                        //chartConfigOptions.availWidth = chartConfigOptions.availWidth - 50;
                    }

                    chartConfigOptions.svgELE.appendChild(oGrpELE);
                    oAttr = {
                        x: iXvalue,
                        y: chartConfigOptions.y,
                        text: axis.title.text,
                        style: axis.title.style
                    };

                    if (axis.title.x) {
                        oAttr.dx = axis.title.x;
                    }
                    if (axis.title.y) {
                        oAttr.dy = axis.title.y;
                    }
                    var oDim = null;
                    switch (axis.title.align) {
                        case 'center':
                            oAttr.y = chartConfigOptions.availHeight / 2;
                            oAttr.style.textAnchor = 'middle';
                            break;
                        case 'right':
                            oAttr.y = chartConfigOptions.availHeight;
                            oAttr.style.textAnchor = 'end';
                            break;
                    }
                    var oTitleObj = MAQ.createSVGElement(chartConfigOptions.svgNS, 'text', oAttr);
                    oGrpELE.appendChild(oTitleObj);
                    oDim = MAQ.getObjectDimension(oTitleObj);
                    if (!count) {
                        oAttr.x += Math.abs(oDim.height);
                        chartConfigOptions.availX += oDim.height;
                    }
                    chartConfigOptions.availWidth -= oDim.height;
                    MAQ.addAttr(oTitleObj, 'x', oAttr.x);
                    MAQ.addAttr(oTitleObj, 'transform', "rotate(270 " + Math.abs(oAttr.x) + "," + oAttr.y + ")");
                    if (axis.title.y > 0) {
                        chartConfigOptions.availX += axis.title.y;
                        chartConfigOptions.availWidth -= axis.title.y;
                    }

                }
            }
        }
    }
};

/*
MAQ.drawXAxisTitle: Renders X-axis title
@param {chartConfigOptions} user configuration parameters
*/
MAQ.drawXAxisTitle = function (chartConfigOptions) {
    var oXAxis = chartConfigOptions.xAxis;
    if (oXAxis.title.text) {
        if (!oXAxis.dualAxisEnabled) {
            var oAttr = {
                'class': 'MAQCharts-xAxisTitle',
            };
            var oGrpELE = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oAttr);
            chartConfigOptions.svgELE.appendChild(oGrpELE);
            oAttr = {
                x: chartConfigOptions.availX,
                y: chartConfigOptions.availY + chartConfigOptions.availHeight - 4,
                text: oXAxis.title.text,
                style: oXAxis.title.style
            };
            var oDim = null;
            switch (oXAxis.title.align) {
                case 'center':
                    oAttr.x += chartConfigOptions.availWidth / 2;
                    oAttr.style.textAnchor = 'middle';
                    break;
                case 'right':
                    oAttr.x += chartConfigOptions.availWidth;
                    oAttr.style.textAnchor = 'end';
                    break;
            }
            var oTitleObj = MAQ.createSVGElement(chartConfigOptions.svgNS, 'text', oAttr);
            oGrpELE.appendChild(oTitleObj);
            if (oXAxis.title.x) {
                MAQ.addAttr(oTitleObj, 'dx', oXAxis.title.x);
            }
            if (oXAxis.title.y) {
                MAQ.addAttr(oTitleObj, 'dy', oXAxis.title.y);
            }
            oDim = MAQ.getObjectDimension(oTitleObj);
            chartConfigOptions.availHeight -= oDim.height;
            if (oXAxis.title.y < 0) {
                chartConfigOptions.availHeight -= Math.abs(oXAxis.title.y);
            }
        } else {
            if (oXAxis.dualxAxis.length == 2) {
                var count = 0;
                for (count = 0; count < 2; count++) {
                    var oAttr = {
                        'class': 'MAQCharts-xAxisTitle',
                    };
                    var oGrpELE = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oAttr);
                    chartConfigOptions.svgELE.appendChild(oGrpELE);
                    var iYvalue = chartConfigOptions.availY + chartConfigOptions.availHeight - 4
                    if (count == 1) {
                        iYvalue = chartConfigOptions.availY;
                    }

                    oAttr = {
                        x: chartConfigOptions.availX,
                        y: iYvalue,
                        text: chartOptions.xAxis.dualxAxis[count].title.text,
                        style: chartOptions.xAxis.dualxAxis[count].title.style
                    };
                    var oDim = null;
                    switch (oXAxis.title.align) {
                        case 'center':
                            oAttr.x += chartConfigOptions.availWidth / 2;
                            oAttr.style.textAnchor = 'middle';
                            break;
                        case 'right':
                            oAttr.x += chartConfigOptions.availWidth;
                            oAttr.style.textAnchor = 'end';
                            break;
                    }
                    var oTitleObj = MAQ.createSVGElement(chartConfigOptions.svgNS, 'text', oAttr);
                    oGrpELE.appendChild(oTitleObj);
                    if (oXAxis.title.x) {
                        MAQ.addAttr(oTitleObj, 'dx', oXAxis.title.x);
                    }
                    if (oXAxis.title.y) {
                        MAQ.addAttr(oTitleObj, 'dy', oXAxis.title.y);
                    }
                    oDim = MAQ.getObjectDimension(oTitleObj);
                    chartConfigOptions.availHeight -= oDim.height;
                    if (oXAxis.title.y < 0) {
                        chartConfigOptions.availHeight -= Math.abs(oXAxis.title.y);
                    }
                }
            }
        }
    }
};

/*
MAQ.getAxisSpacing: Computes space around axis lines
@param {chartConfigOptions} user configuration parameters
@param {oAxis} axis object
@param {sBigData} biggest data in the axis label set
@param {bFlag} flag to decide xAxis or yAxis
*/
MAQ.getAxisSpacing = function (chartConfigOptions, oAxis, sBigData, bFlag) {
    var oAxisLabel = oAxis.labels;
    if (oAxisLabel.enabled) {
        sBigData = MAQ.applyFormatter(sBigData, oAxisLabel.formatter);
    } else {
        sBigData = '';
    }
    var fSpacing = 0;
    var oAttr = {
        x: 10,
        y: 10,
        text: sBigData,
        style: oAxisLabel.style
    };
    if (oAxisLabel.rotation) {
        oAttr.transform = 'rotate( ' + oAxisLabel.rotation + ' 0,0)';
    }
    var oText = MAQ.createSVGElement(chartConfigOptions.svgNS, 'text', oAttr);
    chartConfigOptions.svgELE.appendChild(oText);
    var oDimAxis = MAQ.getObjectDimension(oText);
    chartConfigOptions.svgELE.removeChild(oText);
    if (bFlag) {
        fSpacing = oDimAxis.height;
    } else {
        fSpacing = oDimAxis.width + oAxis.labelSpacing;
    }
    if (!oAxisLabel.rotation) {
        if (oAxisLabel.staggerLines) {
            fSpacing = 2 * (oDimAxis.height + oAxis.labelSpacing);
        }
    }
    oAxis.tickPosition = oAxis.tickPosition.toLowerCase();
    if (oAxis.tickPosition === 'onaxis') {
        if (bFlag) {
            fSpacing += oAxis.tickHeight / 2;
        } else {
            fSpacing += oAxis.tickWidth / 2;
        }
    } else if (oAxis.tickPosition === 'outside') {
        if (bFlag) {
            fSpacing += oAxis.tickHeight;
        } else {
            fSpacing += oAxis.tickWidth;
        }
    }
    fSpacing = Math.ceil(fSpacing);
    return fSpacing;
};

var iglobalCounter = 0;
var ioriginalyAxisLength;
var ioriginalxAxisLength;

/*
MAQ.drawAxis: Renders both the axes
@param {chartConfigOptions} user configuration parameters
*/
MAQ.drawAxis = function (chartConfigOptions) {
    var iCounter = 0;
    var iLength = 0;
    var sBigData = '';
    var bottomSpacing = 0;
    var leftSpacing = 0;
    var sChartType = chartConfigOptions.chart.type;
    var xAxis = chartConfigOptions.xAxis;
    var yAxis = chartConfigOptions.yAxis;
    var xAxisLabel = xAxis.labels;
    var yAxisLabel = yAxis.labels;
    var xAxisSeries = xAxisLabel.series;
    var yAxisSeries = yAxisLabel.series;
    var xAxisSeriesLength = 0;
    var yAxisSeriesLength = 0;
    var yAxisLimit = 0;
    var oAttr = {
        'class': 'MAQCharts-chartArea',
        transform: 'translate(' + chartConfigOptions.availX + ',' + chartConfigOptions.availY + ')'
    };
    var oChartContainerGroup = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oAttr);
    chartConfigOptions.svgELE.appendChild(oChartContainerGroup);

    var oDataInfo = null;
    /* Compute Space for X-Axis Labels */
    if (sChartType === 'bar') {
        xAxisSeries = yAxisSeries.slice(0);
        if (iglobalCounter === 0) {
            ioriginalyAxisLength = chartConfigOptions.yAxis.labels.series.length;
            ioriginalxAxisLength = chartConfigOptions.xAxis.labels.series.length;
            iglobalCounter += 1;
        }
    }
    if (!xAxisSeries.length > 0) {
        iLength = chartConfigOptions.series[0].data.length;
        var oTimelineData = chartConfigOptions.series[0].timeline;
        for (iCounter = 0; iCounter < iLength; iCounter += 1) {
            if (chartConfigOptions.isTimeLineChart) {
                xAxisSeries[iCounter] = MAQ.formatDate(new Date(oTimelineData[iCounter]), 'mmm dd');
            } else {
                xAxisSeries[iCounter] = iCounter + 1;
            }
        }
    }
    /* Compute Space for Y-Axis Labels */
    iLength = yAxis.numberOfGridLines;

    var oNormalizedData = chartConfigOptions.plotOptions[sChartType].normalizedData;
    if (iLength != ((oNormalizedData.max - oNormalizedData.min) / oNormalizedData.interval)) {
        iLength++;
    }
    var iStart = oNormalizedData.min;
    var iInterval = oNormalizedData.interval;
    for (iCounter = 0; iCounter <= iLength; iCounter += 1) {
        yAxisSeries[iCounter] = iStart;
        iStart += iInterval;
        iStart = Math.round(iStart * 100) / 100;
    }
    xAxisSeriesLength = xAxisSeries.length;

    if (chartConfigOptions.useFullXAxis.indexOf(sChartType) > -1) {
        xAxisSeriesLength -= 1;
    }
    //yAxisSeriesLength = yAxis.numberOfGridLines;
    yAxisSeriesLength = iLength;

    if (sChartType === 'bar') {
        var temp = [];
        temp = xAxisSeries.slice();
        xAxisSeries = yAxisSeries.slice(0);
        yAxisSeries = temp.slice(0);
        chartConfigOptions.yAxis.labels.series = yAxisSeries;
        var iNumberOfGridLines = yAxis.numberOfGridLines;
        yAxis.numberOfGridLines = iNumberOfGridLines;
        xAxisSeries = xAxisSeries.slice(0, iNumberOfGridLines + 1);
        xAxisSeriesLength = xAxisSeries.length;
        if (chartConfigOptions.plotOptions.bar.pushBlankSeries) {
            yAxisSeriesLength = yAxisSeries.length;
            yAxisSeries.push('');
        }
        else {
            yAxisSeriesLength = yAxisSeries.length > 0 ? yAxisSeries.length - 1 : 0;
        }
        yAxisSeries.reverse();
        yAxisLimit = 1;
        xAxis.shiftStartBy = 0;
        xAxisSeriesLength -= 1;
    }

    oDataInfo = MAQ.getMinMax(xAxisSeries, '', '');
    sBigData = oDataInfo.max;
    bottomSpacing = MAQ.getAxisSpacing(chartConfigOptions, xAxis, sBigData, true);

    oDataInfo = MAQ.getMinMax(yAxisSeries, '', '');
    sBigData = oDataInfo.max;
    leftSpacing = MAQ.getAxisSpacing(chartConfigOptions, yAxis, sBigData, false);

    /* Plot Y-Axis, Y-Axis-Ticks, Y-Axis-GridLines and Y-Axis-Labels */
    var oAttr = {
        'class': 'MAQCharts-yAxis-gridArea',
    };
    var oGridAreaGrpELE = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oAttr);
    var oAttr = {
        'class': 'MAQCharts-yAxis',
    };
    var oGrpYAxis = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oAttr);
    oChartContainerGroup.appendChild(oGrpYAxis);

    oAttr = {
        'class': 'MAQCharts-yAxis-Grid-Labels-Ticks',
    };
    var oGrpYAxisLblNTick = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oAttr);
    oChartContainerGroup.appendChild(oGrpYAxisLblNTick);
    chartConfigOptions.yLabels = oGrpYAxisLblNTick;

    oGrpYAxisLblNTick.appendChild(oGridAreaGrpELE);

    var oAttrYAxis = {
        x1: 0 + leftSpacing,
        y1: 0,
        x2: 0 + leftSpacing,
        y2: chartConfigOptions.availHeight - bottomSpacing,
        stroke: chartConfigOptions.yAxis.lineColor,
        'stroke-width': yAxis.lineWidth
    };
    oAttrYAxis.y2 += oAttrYAxis.y1;
    var oYAxisLine = MAQ.createSVGElement(chartConfigOptions.svgNS, 'line', oAttrYAxis);
    oGrpYAxis.appendChild(oYAxisLine);
    if (yAxis.shiftStartBy > 0) {
        oAttrYAxis.y1 += yAxis.shiftStartBy;
    }
    var intervalHeight = (oAttrYAxis.y2 - oAttrYAxis.y1) / yAxisSeriesLength;
    var oAttrTick = {
        x1: oAttrYAxis.x1,
        y1: oAttrYAxis.y1,
        x2: oAttrYAxis.x1 + yAxis.tickWidth,
        y2: oAttrYAxis.y1,
        stroke: yAxis.tickColor,
        'stroke-width': yAxis.tickHeight
    };
    var oAttrGridLine = {
        x: oAttrYAxis.x1,
        y: oAttrYAxis.y1,
        x1: oAttrYAxis.x1,
        y1: oAttrYAxis.y1,
        x2: chartConfigOptions.availWidth + oAttrYAxis.x1 - leftSpacing,
        y2: oAttrYAxis.y1,
        width: chartConfigOptions.availWidth - leftSpacing,
        height: intervalHeight,
        fill: 'transparent',
        stroke: yAxis.gridLineColor,
        'stroke-dasharray': MAQ.computeStrokeDashStyle(yAxis.gridLineDashStyle),
        'stroke-width': yAxis.gridLineWidth
    };
    var sGridType = 'line';
    if (yAxis.alternateGridColor) {
        sGridType = 'rect';
        oAttrGridLine.stroke = 'transparent';
        oAttrGridLine['stroke-width'] = 0;
        oAttrGridLine.fill = yAxis.alternateGridColor;
    }
    if (yAxis.tickPosition === 'onaxis') {
        oAttrTick.x1 = oAttrTick.x1 - (yAxis.tickWidth / 2);
    } else if (yAxis.tickPosition === 'outside') {
        oAttrTick.x1 = oAttrTick.x1 - yAxis.tickWidth;
    }
    oAttrTick.x2 = oAttrTick.x1 + yAxis.tickWidth;
    var oAttrLabel = {
        x: oAttrTick.x1 - yAxis.labelSpacing,
        y: oAttrTick.y1,
        text: '',
        dx: yAxisLabel.x,
        dy: yAxisLabel.y,
        'text-anchor': 'end',
        style: yAxis.labels.style
    };
    switch (yAxis.labels.align) {
        case 'left':
            oAttrLabel.x -= leftSpacing - yAxis.labelSpacing;
            oAttrLabel['text-anchor'] = 'start';
            break;
        case 'center':
            oAttrLabel.x -= (leftSpacing / 2);
            oAttrLabel['text-anchor'] = 'middle';
            break;
    }
    var bSkipPlot = false;
    if (yAxis.skipInterval < 0) {
        yAxis.skipInterval = 0;
    }
    var iSkipInterval = yAxis.skipInterval;
    if (yAxisLabel.rotation) {
        oAttrLabel.transform = 'rotate( ' + yAxisLabel.rotation + ' ' + oAttrLabel.x + ',' + oAttrLabel.y + ')';
    }
    chartConfigOptions.availY += oAttrGridLine.y1;
    chartConfigOptions.availHeight = intervalHeight * yAxisSeriesLength;
    chartConfigOptions.plotIntervalHeight = intervalHeight;
    for (iCounter = yAxisSeriesLength; yAxisLimit <= iCounter; iCounter -= 1) {
        if (bSkipPlot) {
            iSkipInterval -= 1;
        } else {
            var oGridLine = MAQ.createSVGElement(chartConfigOptions.svgNS, sGridType, oAttrGridLine);
            var oTick = MAQ.createSVGElement(chartConfigOptions.svgNS, 'line', oAttrTick);
            if (sGridType === 'rect') {
                if (iCounter > 0) {
                    if (iCounter % 2 === 0) {
                        oGridAreaGrpELE.appendChild(oGridLine);
                    }
                }
            } else {
                oGridAreaGrpELE.appendChild(oGridLine);
            }
            oGrpYAxisLblNTick.appendChild(oTick);

            if (yAxisLabel.enabled) {
                oAttrLabel.text = yAxisSeries[iCounter];
                //if (yAxisLabel.formatter) {
                oAttrLabel.text = MAQ.applyFormatter(oAttrLabel.text, yAxisLabel.formatter);
                //}
                //else {
                //    oAttrLabel.text = Math.floor(oAttrLabel.text * 100) / 100;
                //}
                var oLabel = MAQ.createSVGElement(chartConfigOptions.svgNS, 'text', oAttrLabel);
                oGrpYAxisLblNTick.appendChild(oLabel);
                var oLabelDim = MAQ.getObjectDimension(oLabel);
                MAQ.addAttr(oLabel, 'y', oAttrLabel.y + (oLabelDim.height / 4));
            }
            bSkipPlot = true;
        }

        if (iSkipInterval === 0) {
            iSkipInterval = yAxis.skipInterval;
            if ( iCounter + 1 > Math.floor(yAxis.skipInterval / 2)) {
                bSkipPlot = false;
            }
        }
        //if (iCounter == yAxisSeries.length - 2) {
        //    bSkipPlot = false;
        //}
        oAttrTick.y2 += intervalHeight;
        oAttrGridLine.y = oAttrGridLine.y1 = oAttrGridLine.y2 = oAttrTick.y1 = oAttrLabel.y = oAttrTick.y2;
    }
    /* Plot X-Axis, X-Axis-Ticks, and X-Axis-Labels */
    var oAttrXAxis = {
        x1: oAttrYAxis.x1,
        y1: oAttrYAxis.y2,
        x2: chartConfigOptions.availWidth + oAttrYAxis.x1 - leftSpacing,
        y2: oAttrYAxis.y2,
        stroke: xAxis.lineColor,
        'stroke-width': xAxis.lineWidth
    };
    oAttr = {
        'class': 'MAQCharts-xAxis',
    };
    oGrpXAxis = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oAttr);
    oChartContainerGroup.appendChild(oGrpXAxis);

    oAttr = {
        'class': 'MAQCharts-xAxis-Grid-Labels-Ticks',
    };
    oGrpXAxisLblNTick = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oAttr);
    oChartContainerGroup.appendChild(oGrpXAxisLblNTick);
    chartConfigOptions.xLabels = oGrpXAxisLblNTick;

    oAttr = {
        'class': 'MAQCharts-xAxis-gridArea',
    };
    oXAxisGridAreaGrpELE = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oAttr);
    oGrpXAxisLblNTick.appendChild(oXAxisGridAreaGrpELE);

    var oXAxisLine = MAQ.createSVGElement(chartConfigOptions.svgNS, 'line', oAttrXAxis);
    oGrpXAxis.appendChild(oXAxisLine);
    iLength = xAxisSeriesLength;
    oAttrXAxis.x2 = (xAxis.usageWidth / 100) * (oAttrXAxis.x2 - oAttrXAxis.x1 - xAxis.shiftStartBy)
    oAttrXAxis.x1 += xAxis.shiftStartBy;
    var intervalWidth = (oAttrXAxis.x2) / iLength;

    oAttrGridLine = {
        x: oAttrXAxis.x1,
        y: oAttrYAxis.y1,
        x1: oAttrXAxis.x1,
        y1: oAttrYAxis.y1,
        x2: oAttrXAxis.x1,
        y2: oAttrYAxis.y2,
        width: intervalWidth,
        height: chartConfigOptions.availHeight,
        fill: 'transparent',
        stroke: xAxis.gridLineColor,
        'stroke-dasharray': MAQ.computeStrokeDashStyle(xAxis.gridLineDashStyle),
        'stroke-width': xAxis.gridLineWidth
    };
    sGridType = 'line';
    if (xAxis.alternateGridColor) {
        sGridType = 'rect';
        oAttrGridLine.stroke = 'transparent';
        oAttrGridLine['stroke-width'] = 0;
        oAttrGridLine.fill = xAxis.alternateGridColor;
    }
    oAttrTick = {
        x1: oAttrXAxis.x1,
        y1: oAttrYAxis.y2,
        x2: oAttrXAxis.x1,
        y2: oAttrYAxis.y2 + xAxis.tickHeight,
        stroke: xAxis.tickColor,
        'stroke-width': xAxis.tickWidth
    };
    if (xAxis.tickPosition === 'onaxis') {
        oAttrTick.y1 = oAttrYAxis.y2 - (xAxis.tickHeight / 2);
        oAttrTick.y2 = oAttrTick.y1 + xAxis.tickHeight;
    } else if (xAxis.tickPosition === 'inside') {
        oAttrTick.y1 = oAttrYAxis.y2 - xAxis.tickHeight;
        oAttrTick.y2 = oAttrYAxis.y2;
    }
    oAttrLabel = {
        x: oAttrTick.x1,
        y: oAttrTick.y2 + xAxis.labelSpacing,
        dx: xAxisLabel.x,
        dy: xAxisLabel.y,
        text: '',
        style: xAxisLabel.style
    };
    switch (xAxisLabel.align) {
        case 'right':
            oAttrLabel['text-anchor'] = 'end';
            break;
        case 'center':
            oAttrLabel['text-anchor'] = 'middle';
            break;
    }
    chartConfigOptions.availX += oAttrTick.x1;
    chartConfigOptions.availWidth = intervalWidth * (iLength - 1);
    chartConfigOptions.plotIntervalWidth = intervalWidth;

    var oAttr = {
        x: 10,
        y: 10,
        text: "M",
        style: xAxisLabel.style
    };
    var oText = MAQ.createSVGElement(chartConfigOptions.svgNS, 'text', oAttr);
    chartConfigOptions.svgELE.appendChild(oText);
    var oDimAxis = MAQ.getObjectDimension(oText);
    chartConfigOptions.svgELE.removeChild(oText);
    var iNumOfCharsAllowed = Math.ceil(chartConfigOptions.plotIntervalWidth / oDimAxis.width);
    var bSkipPlot = false;
    if (xAxis.skipInterval < 0) {
        xAxis.skipInterval = 0;
    }
    var iSkipInterval = xAxis.skipInterval;
    var sTempText = "";
    for (iCounter = 0; iCounter < xAxisSeries.length; iCounter += 1) {
        if (bSkipPlot) {
            iSkipInterval -= 1;
        } else {
            oGridLine = MAQ.createSVGElement(chartConfigOptions.svgNS, sGridType, oAttrGridLine);
            var oTick = MAQ.createSVGElement(chartConfigOptions.svgNS, 'line', oAttrTick);
            if (sGridType === 'rect') {
                if (iCounter % 2 === 0) {
                    oXAxisGridAreaGrpELE.appendChild(oGridLine);
                }
            } else {
                oXAxisGridAreaGrpELE.appendChild(oGridLine);
            }
            oGrpXAxisLblNTick.appendChild(oTick);
            if (xAxisLabel.enabled) {
                oAttrLabel.text = xAxisSeries[iCounter];
                oAttrLabel.text = MAQ.applyFormatter(oAttrLabel.text, xAxisLabel.formatter);
                /* Code for clipping the text to specified number of characters */
                sTempText = oAttrLabel.text;
                if (!xAxisLabel.formatter && sTempText.length > iNumOfCharsAllowed) {
                    oAttrLabel.text = oAttrLabel.text.substring(0, iNumOfCharsAllowed) + "...";
                }
                if (xAxisLabel.rotation) {
                    oAttrLabel.transform = 'rotate(' + xAxisLabel.rotation + ' ' + oAttrLabel.x + ',' + oAttrLabel.y + ')';
                }
                var oLabel = MAQ.createSVGElement(chartConfigOptions.svgNS, 'text', oAttrLabel);
                oGrpXAxisLblNTick.appendChild(oLabel);
                var oDim = MAQ.getObjectDimension(oLabel);
                MAQ.addAttr(oLabel, 'y', oAttrLabel.y + (oDim.height / 2));
                if (xAxisLabel.staggerLines && !xAxisLabel.rotation) {
                    if (iCounter % 2 !== 0) {
                        MAQ.addAttr(oLabel, 'y', oAttrLabel.y + (oDim.height * 2));
                    }
                }
                var oParam = {
                    value: sTempText,
                    config: chartConfigOptions,
                    type: 'axis'
                };
                var oToolTip = chartConfigOptions.tooltipDiv;
                MAQ.addEventListener(oLabel, 'mouseover', 'showToolTip', oParam);
                oLabel.addEventListener('mouseout', function () { oToolTip.style.display = 'none'; }, true);
            }
            bSkipPlot = true;
        }
        if (iSkipInterval === 0) {
            iSkipInterval = xAxis.skipInterval;
            if (xAxisSeries.length - iCounter - 1 > Math.floor(xAxis.skipInterval / 2)) {
                bSkipPlot = false;
            }
        }
        if (iCounter == xAxisSeries.length - 2) {
            bSkipPlot = false;
        }
        oAttrTick.x1 += intervalWidth;
        oAttrGridLine.x = oAttrGridLine.x1 = oAttrGridLine.x2 = oAttrLabel.x = oAttrTick.x2 = oAttrTick.x1;
    }
};

/*
MAQ.drawSecondaryYAxis: Renders both the axes along with secondary Y axis
@param {chartConfigOptions} user configuration parameters
*/
MAQ.drawSecondaryYAxis = function (chartConfigOptions) {
    var iCounter = 0;
    var iLength = 0;
    var sBigData = '';
    var bottomSpacing = 0;
    var leftSpacing = 0;
    var sChartType = chartConfigOptions.chart.type;
    var xAxis = chartConfigOptions.xAxis;
    var yAxis = chartConfigOptions.yAxis.dualyAxis;
    var xAxisLabel = xAxis.labels;
    var yAxisLabel = yAxis.axisLeft.labels;
    var xAxisSeries = xAxisLabel.series;
    var yAxisSeries = yAxisLabel.series;
    var xAxisSeriesLength = 0;
    var yAxisSeriesLength = 0;
    var yAxisLimit = 0;
    var oAttr = {
        'class': 'MAQCharts-chartArea',
        transform: 'translate(' + chartConfigOptions.availX + ',' + chartConfigOptions.availY + ')'
    };

    var oChartContainerGroup = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oAttr);
    chartConfigOptions.svgELE.appendChild(oChartContainerGroup);
    var oDataInfo = null;
    /* Compute Space for X-Axis Labels */
    if (sChartType === 'bar') {
        xAxisSeries = yAxisSeries.slice(0);
    }
    if (!xAxisSeries.length > 0) {
        iLength = chartConfigOptions.series[0].data.length;
        for (iCounter = 0; iCounter < iLength; iCounter += 1) {
            xAxisSeries[iCounter] = iCounter + 1;
        }
    }
    /* Compute Space for Y-Axis Labels */
    iLength = yAxis.numberOfGridLines;
    var oNormalizedData1 = chartConfigOptions.plotOptions[sChartType].normalizedData[1];
    if (iLength != ((oNormalizedData1.max - oNormalizedData1.min) / oNormalizedData1.interval)) {
        iLength++;
    }
    var iStart = oNormalizedData1.min;
    var iInterval = oNormalizedData1.interval;
    yAxisSeries1 = [];
    for (iCounter = 0; iCounter <= iLength; iCounter += 1) {
        yAxisSeries1[iCounter] = iStart;
        iStart += iInterval;
    }
    oDataInfo = MAQ.getMinMax(yAxisSeries1, '', '');
    rightSpacing = MAQ.getAxisSpacing(chartConfigOptions, chartConfigOptions.yAxis.dualyAxis.axisRight, oDataInfo.max, false);
    //chartConfigOptions.availWidth = chartConfigOptions.availWidth - rightSpacing;
    /* Compute Space for Y-Axis Labels */
    //iLength = yAxis.numberOfGridLines;
    var oNormalizedData = chartConfigOptions.plotOptions[sChartType].normalizedData[0];
    var iStart = oNormalizedData.min;
    var iInterval = oNormalizedData.interval;
    for (iCounter = 0; iCounter <= iLength; iCounter += 1) {
        yAxisSeries[iCounter] = iStart;
        iStart += iInterval;
    }
    xAxisSeriesLength = xAxisSeries.length;

    if (chartConfigOptions.useFullXAxis.indexOf(sChartType) > -1) {
        //xAxisSeriesLength -= 1;
    }
    yAxisSeriesLength = iLength;


    oDataInfo = MAQ.getMinMax(xAxisSeries, '', '');
    bottomSpacing = MAQ.getAxisSpacing(chartConfigOptions, xAxis, oDataInfo.max, true);

    oDataInfo = MAQ.getMinMax(yAxisSeries, '', '');
    leftSpacing = MAQ.getAxisSpacing(chartConfigOptions, chartConfigOptions.yAxis.dualyAxis.axisLeft, oDataInfo.max, false);

    /* Plot Y-Axis, Y-Axis-Ticks, Y-Axis-GridLines and Y-Axis-Labels */
    var oAttr = {
        'class': 'MAQCharts-yAxis-gridArea',
    };
    var oGridAreaGrpELE = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oAttr);
    var oAttr = {
        'class': 'MAQCharts-yAxis',
    };
    var oGrpYAxis = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oAttr);
    oChartContainerGroup.appendChild(oGrpYAxis);

    oAttr = {
        'class': 'MAQCharts-yAxis-Grid-Labels-Ticks',
    };
    var oGrpYAxisLblNTick = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oAttr);
    oChartContainerGroup.appendChild(oGrpYAxisLblNTick);
    chartConfigOptions.yLabels = oGrpYAxisLblNTick;

    oGrpYAxisLblNTick.appendChild(oGridAreaGrpELE);

    var oAttrYAxis = {
        x1: 0 + leftSpacing,
        y1: 0,
        x2: 0 + leftSpacing,
        y2: chartConfigOptions.availHeight - bottomSpacing,
        stroke: yAxis.axisLeft.lineColor,
        'stroke-width': yAxis.axisLeft.lineWidth
    };
    oAttrYAxis.y2 += oAttrYAxis.y1;
    var oYAxisLine = MAQ.createSVGElement(chartConfigOptions.svgNS, 'line', oAttrYAxis);
    oGrpYAxis.appendChild(oYAxisLine);
    if (yAxis.shiftStartBy > 0) {
        oAttrYAxis.y1 += yAxis.shiftStartBy;
    }
    var intervalHeight = (oAttrYAxis.y2 - oAttrYAxis.y1) / yAxisSeriesLength;
    var oAttrTick = {
        x1: oAttrYAxis.x1,
        y1: oAttrYAxis.y1,
        x2: oAttrYAxis.x1 + yAxis.axisLeft.tickWidth,
        y2: oAttrYAxis.y1,
        stroke: yAxis.axisLeft.tickColor,
        'stroke-width': yAxis.axisLeft.tickHeight
    };
    var oAttrGridLine = {
        x: oAttrYAxis.x1,
        y: oAttrYAxis.y1,
        x1: oAttrYAxis.x1,
        y1: oAttrYAxis.y1,
        x2: chartConfigOptions.availWidth - rightSpacing + oAttrYAxis.x1 - leftSpacing,
        y2: oAttrYAxis.y1,
        width: chartConfigOptions.availWidth - rightSpacing - leftSpacing,
        height: intervalHeight,
        fill: 'transparent',
        stroke: yAxis.gridLineColor,
        'stroke-dasharray': MAQ.computeStrokeDashStyle(yAxis.gridLineDashStyle),
        'stroke-width': yAxis.gridLineWidth
    };
    var sGridType = 'line';
    if (yAxis.alternateGridColor) {
        sGridType = 'rect';
        oAttrGridLine.stroke = 'transparent';
        oAttrGridLine['stroke-width'] = 0;
        oAttrGridLine.fill = yAxis.alternateGridColor;
    }
    if (yAxis.axisLeft.tickPosition === 'onaxis') {
        oAttrTick.x1 = oAttrTick.x1 - (yAxis.axisLeft.tickWidth / 2);
    } else if (yAxis.axisLeft.tickPosition === 'outside') {
        oAttrTick.x1 = oAttrTick.x1 - yAxis.axisLeft.tickWidth;
    }
    oAttrTick.x2 = oAttrTick.x1 + yAxis.axisLeft.tickWidth;
    var oAttrLabel = {
        x: oAttrTick.x1 - yAxis.axisLeft.labelSpacing,
        y: oAttrTick.y1,
        text: '',
        dx: yAxisLabel.x,
        dy: yAxisLabel.y,
        'text-anchor': 'end',
        style: yAxisLabel.style
    };
    switch (yAxisLabel.align) {
        case 'left':
            oAttrLabel.x -= leftSpacing - yAxis.axisLeft.labelSpacing;
            oAttrLabel['text-anchor'] = 'start';
            break;
        case 'center':
            oAttrLabel.x -= (leftSpacing / 2);
            oAttrLabel['text-anchor'] = 'middle';
            break;
    }
    if (yAxisLabel.rotation) {
        oAttrLabel.transform = 'rotate( ' + yAxisLabel.rotation + ' ' + oAttrLabel.x + ',' + oAttrLabel.y + ')';
    }

    chartConfigOptions.availY += oAttrGridLine.y1;
    chartConfigOptions.availHeight = intervalHeight * yAxisSeriesLength;
    chartConfigOptions.plotIntervalHeight = intervalHeight;
    for (iCounter = yAxisSeriesLength; yAxisLimit <= iCounter; iCounter -= 1) {
        var oGridLine = MAQ.createSVGElement(chartConfigOptions.svgNS, sGridType, oAttrGridLine);
        var oTick = MAQ.createSVGElement(chartConfigOptions.svgNS, 'line', oAttrTick);
        if (sGridType === 'rect') {
            if (iCounter > 0) {
                if (iCounter % 2 === 0) {
                    oGridAreaGrpELE.appendChild(oGridLine);
                }
            }
        } else {
            oGridAreaGrpELE.appendChild(oGridLine);
        }
        oGrpYAxisLblNTick.appendChild(oTick);

        if (yAxisLabel.enabled) {
            oAttrLabel.text = yAxisSeries[iCounter];
            //oAttrLabel.text = MAQ.applyFormatter(oAttrLabel.text, yAxisLabel.formatter);
            if (yAxisLabel.formatter) {
                oAttrLabel.text = MAQ.applyFormatter(oAttrLabel.text, yAxisLabel.formatter);
            }
            else {
                var sStr = oAttrLabel.text.toString();
                if (-1 !== sStr.indexOf('.')) {
                    var decimalLength = sStr.substring(sStr.indexOf('.') + 1).length;
                    if (2 < decimalLength) {
                        sStr = ((oAttrLabel.text * 100) / 100).toString();
                        oAttrLabel.text = Number(sStr.match(/^-?\d+(?:\.\d{0,2})?/));
                    }
                }
            }
            var oLabel = MAQ.createSVGElement(chartConfigOptions.svgNS, 'text', oAttrLabel);
            oGrpYAxisLblNTick.appendChild(oLabel);
            var oLabelDim = MAQ.getObjectDimension(oLabel);
            MAQ.addAttr(oLabel, 'y', oAttrLabel.y + (oLabelDim.height / 4));
        }

        oAttrTick.y2 += intervalHeight;
        oAttrGridLine.y = oAttrGridLine.y1 = oAttrGridLine.y2 = oAttrTick.y1 = oAttrLabel.y = oAttrTick.y2;
    }

    /* Plot secondary Y-axis */
    var yAxisLabel = yAxis.axisRight.labels;
    oGrpYAxisLblNTick = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oAttr);
    oChartContainerGroup.appendChild(oGrpYAxisLblNTick);
    chartConfigOptions.yLabels = oGrpYAxisLblNTick;

    oGrpYAxisLblNTick.appendChild(oGridAreaGrpELE);

    oAttrYAxis = {
        x1: 0 + chartConfigOptions.availWidth - rightSpacing,
        y1: 0,
        x2: 0 + chartConfigOptions.availWidth - rightSpacing,
        y2: chartConfigOptions.availHeight,
        stroke: yAxis.axisRight.lineColor,
        'stroke-width': yAxis.axisRight.lineWidth
    };
    oAttrYAxis.y2 += oAttrYAxis.y1;
    var oYAxisLine = MAQ.createSVGElement(chartConfigOptions.svgNS, 'line', oAttrYAxis);
    oGrpYAxis.appendChild(oYAxisLine);
    if (yAxis.shiftStartBy > 0) {
        oAttrYAxis.y1 += yAxis.shiftStartBy;
    }
    intervalHeight = (oAttrYAxis.y2 - oAttrYAxis.y1) / yAxisSeriesLength;
    oAttrTick = {
        x1: oAttrYAxis.x1,
        y1: oAttrYAxis.y1,
        x2: oAttrYAxis.x1 + yAxis.axisRight.tickWidth,
        y2: oAttrYAxis.y1,
        stroke: yAxis.axisRight.tickColor,
        'stroke-width': yAxis.axisRight.tickHeight
    };

    if (yAxis.axisRight.tickPosition === 'onaxis') {
        oAttrTick.x1 = oAttrTick.x1 - (yAxis.axisRight.tickWidth / 2);
    } else if (yAxis.tickPosition === 'outside') {
        oAttrTick.x1 = oAttrTick.x1 - yAxis.axisRight.tickWidth;
    }
    oAttrTick.x2 = oAttrTick.x1 + yAxis.axisRight.tickWidth;
    oAttrLabel = {
        x: oAttrTick.x2 + yAxis.axisRight.labelSpacing,
        y: oAttrTick.y1,
        text: '',
        dx: yAxisLabel.x,
        dy: yAxisLabel.y,
        'text-anchor': 'start',
        style: yAxisLabel.style
    };
    switch (yAxisLabel.align) {
        case 'left':
            oAttrLabel.x -= leftSpacing - yAxis.axisRight.labelSpacing;
            oAttrLabel['text-anchor'] = 'start';
            break;
        case 'center':
            oAttrLabel.x -= (leftSpacing / 2);
            oAttrLabel['text-anchor'] = 'middle';
            break;
    }
    if (yAxisLabel.rotation) {
        oAttrLabel.transform = 'rotate( ' + yAxisLabel.rotation + ' ' + oAttrLabel.x + ',' + oAttrLabel.y + ')';
    }

    chartConfigOptions.availHeight = intervalHeight * yAxisSeriesLength;
    chartConfigOptions.plotIntervalHeight = intervalHeight;
    for (iCounter = yAxisSeriesLength; yAxisLimit <= iCounter; iCounter -= 1) {
        var oGridLine = MAQ.createSVGElement(chartConfigOptions.svgNS, sGridType, oAttrGridLine);
        var oTick = MAQ.createSVGElement(chartConfigOptions.svgNS, 'line', oAttrTick);

        oGrpYAxisLblNTick.appendChild(oTick);

        if (yAxisLabel.enabled) {
            oAttrLabel.text = yAxisSeries1[iCounter];
            //oAttrLabel.text = MAQ.applyFormatter(oAttrLabel.text, yAxisLabel.formatter);
            if (yAxisLabel.formatter) {
                oAttrLabel.text = MAQ.applyFormatter(oAttrLabel.text, yAxisLabel.formatter);
            }
            else {
                var sStr = oAttrLabel.text.toString();
                if (-1 !== sStr.indexOf('.')) {
                    var decimalLength = sStr.substring(sStr.indexOf('.') + 1).length;
                    if (2 < decimalLength) {
                        sStr = ((oAttrLabel.text * 100) / 100).toString();
                        oAttrLabel.text = Number(sStr.match(/^-?\d+(?:\.\d{0,2})?/));
                    }
                }
            }
            var oLabel = MAQ.createSVGElement(chartConfigOptions.svgNS, 'text', oAttrLabel);
            oGrpYAxisLblNTick.appendChild(oLabel);
            var oLabelDim = MAQ.getObjectDimension(oLabel);
            MAQ.addAttr(oLabel, 'y', oAttrLabel.y + (oLabelDim.height / 4));
        }

        oAttrTick.y2 += intervalHeight;
        oAttrGridLine.y = oAttrGridLine.y1 = oAttrGridLine.y2 = oAttrTick.y1 = oAttrLabel.y = oAttrTick.y2;
    }
    /* Plot X-Axis, X-Axis-Ticks, and X-Axis-Labels */
    var oAttrXAxis = {
        x1: leftSpacing,
        y1: oAttrYAxis.y2,
        x2: chartConfigOptions.availWidth - rightSpacing, //+ oAttrYAxis.x1 - leftSpacing,
        y2: oAttrYAxis.y2,
        stroke: xAxis.lineColor,
        'stroke-width': xAxis.lineWidth
    };
    oAttr = {
        'class': 'MAQCharts-xAxis',
    };
    oGrpXAxis = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oAttr);
    oChartContainerGroup.appendChild(oGrpXAxis);

    oAttr = {
        'class': 'MAQCharts-xAxis-Grid-Labels-Ticks',
    };
    oGrpXAxisLblNTick = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oAttr);
    oChartContainerGroup.appendChild(oGrpXAxisLblNTick);
    chartConfigOptions.xLabels = oGrpXAxisLblNTick;

    oAttr = {
        'class': 'MAQCharts-xAxis-gridArea',
    };
    oXAxisGridAreaGrpELE = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oAttr);
    oGrpXAxisLblNTick.appendChild(oXAxisGridAreaGrpELE);

    var oXAxisLine = MAQ.createSVGElement(chartConfigOptions.svgNS, 'line', oAttrXAxis);
    oGrpXAxis.appendChild(oXAxisLine);
    iLength = xAxisSeriesLength;
    oAttrXAxis.x2 = (xAxis.usageWidth / 100) * (oAttrXAxis.x2 - oAttrXAxis.x1 - xAxis.shiftStartBy - rightSpacing - leftSpacing)
    oAttrXAxis.x1 += xAxis.shiftStartBy;
    var intervalWidth = (oAttrXAxis.x2 + leftSpacing) / iLength;

    oAttrGridLine = {
        x: oAttrXAxis.x1,
        y: oAttrYAxis.y1,
        x1: oAttrXAxis.x1,
        y1: oAttrYAxis.y1,
        x2: oAttrXAxis.x1,
        y2: oAttrYAxis.y2,
        width: intervalWidth,
        height: chartConfigOptions.availHeight,
        fill: 'transparent',
        stroke: xAxis.gridLineColor,
        'stroke-dasharray': MAQ.computeStrokeDashStyle(xAxis.gridLineDashStyle),
        'stroke-width': xAxis.gridLineWidth
    };
    sGridType = 'line';
    if (xAxis.alternateGridColor) {
        sGridType = 'rect';
        oAttrGridLine.stroke = 'transparent';
        oAttrGridLine['stroke-width'] = 0;
        oAttrGridLine.fill = xAxis.alternateGridColor;
    }
    oAttrTick = {
        x1: oAttrXAxis.x1,
        y1: oAttrYAxis.y2,
        x2: oAttrXAxis.x1,
        y2: oAttrYAxis.y2 + xAxis.tickHeight,
        stroke: xAxis.tickColor,
        'stroke-width': xAxis.tickWidth
    };
    if (xAxis.tickPosition === 'onaxis') {
        oAttrTick.y1 = oAttrYAxis.y2 - (xAxis.tickHeight / 2);
        oAttrTick.y2 = oAttrTick.y1 + xAxis.tickHeight;
    } else if (xAxis.tickPosition === 'inside') {
        oAttrTick.y1 = oAttrYAxis.y2 - xAxis.tickHeight;
        oAttrTick.y2 = oAttrYAxis.y2;
    }
    oAttrLabel = {
        x: oAttrTick.x1,
        y: oAttrTick.y2 + xAxis.labelSpacing,
        dx: xAxisLabel.x,
        dy: xAxisLabel.y,
        text: '',
        style: xAxisLabel.style
    };
    switch (xAxisLabel.align) {
        case 'right':
            oAttrLabel['text-anchor'] = 'end';
            break;
        case 'center':
            oAttrLabel['text-anchor'] = 'middle';
            break;
    }
    chartConfigOptions.availX += oAttrTick.x1;

    chartConfigOptions.availWidth = intervalWidth * (iLength - 1);
    chartConfigOptions.plotIntervalWidth = intervalWidth;

    var oAttr = {
        x: 10,
        y: 10,
        text: "M",
        style: xAxisLabel.style
    };
    var oText = MAQ.createSVGElement(chartConfigOptions.svgNS, 'text', oAttr);
    chartConfigOptions.svgELE.appendChild(oText);
    var oDimAxis = MAQ.getObjectDimension(oText);
    chartConfigOptions.svgELE.removeChild(oText);
    var iNumOfCharsAllowed = Math.ceil(chartConfigOptions.plotIntervalWidth / oDimAxis.width);
    var bSkipPlot = false;
    if (xAxis.skipInterval < 0) {
        xAxis.skipInterval = 0;
    }
    var iSkipInterval = xAxis.skipInterval;
    var sTempText = "";
    for (iCounter = 0; iCounter < xAxisSeries.length; iCounter += 1) {
        if (bSkipPlot) {
            iSkipInterval -= 1;
        } else {
            oGridLine = MAQ.createSVGElement(chartConfigOptions.svgNS, sGridType, oAttrGridLine);
            var oTick = MAQ.createSVGElement(chartConfigOptions.svgNS, 'line', oAttrTick);
            if (sGridType === 'rect') {
                if (iCounter % 2 === 0) {
                    oXAxisGridAreaGrpELE.appendChild(oGridLine);
                }
            } else {
                oXAxisGridAreaGrpELE.appendChild(oGridLine);
            }
            oGrpXAxisLblNTick.appendChild(oTick);
            if (xAxisLabel.enabled) {
                var bSetTooltip = false;
                oAttrLabel.text = xAxisSeries[iCounter];
                oAttrLabel.text = MAQ.applyFormatter(oAttrLabel.text, xAxisLabel.formatter);
                /* Code for clipping the text to specified number of characters */
                sTempText = oAttrLabel.text;
                if (!xAxisLabel.formatter && !xAxisLabel.staggerLines && sTempText.length > iNumOfCharsAllowed) {
                    oAttrLabel.text = oAttrLabel.text.substring(0, iNumOfCharsAllowed) + "...";
                    bSetTooltip = true;
                }
                if (xAxisLabel.rotation) {
                    oAttrLabel.transform = 'rotate(' + xAxisLabel.rotation + ' ' + oAttrLabel.x + ',' + oAttrLabel.y + ')';
                }
                var oLabel = MAQ.createSVGElement(chartConfigOptions.svgNS, 'text', oAttrLabel);
                oGrpXAxisLblNTick.appendChild(oLabel);
                var oDim = MAQ.getObjectDimension(oLabel);
                MAQ.addAttr(oLabel, 'y', oAttrLabel.y + (oDim.height / 2));
                if (xAxisLabel.staggerLines && !xAxisLabel.rotation) {
                    if (iCounter % 2 !== 0) {
                        MAQ.addAttr(oLabel, 'y', oAttrLabel.y + (oDim.height * 2));
                    }
                }
                if (bSetTooltip) {
                    var oParam = {
                        value: sTempText,
                        config: chartConfigOptions,
                        type: 'axis'
                    };
                    var oToolTip = chartConfigOptions.tooltipDiv;
                    MAQ.addEventListener(oLabel, 'mouseover', 'showToolTip', oParam);
                    oLabel.addEventListener('mouseout', function () { oToolTip.style.display = 'none'; }, true);
                }
            }
            bSkipPlot = true;
        }
        /*if (iSkipInterval === 0) {
            iSkipInterval = xAxis.skipInterval;
            bSkipPlot = false;
        }*/
        if (iSkipInterval === 0) {
            iSkipInterval = xAxis.skipInterval;
            if (xAxisSeries.length - iCounter - 1 > Math.floor(xAxis.skipInterval / 2)) {
                bSkipPlot = false;
            }
        }
        if (iCounter == xAxisSeries.length - 2) {
            bSkipPlot = false;
        }
        oAttrTick.x1 += intervalWidth;
        oAttrGridLine.x = oAttrGridLine.x1 = oAttrGridLine.x2 = oAttrLabel.x = oAttrTick.x2 = oAttrTick.x1;
    }

};

/*
MAQ.createLineChart: Renders line chart
@param {chartConfigOptions} user configuration parameters
*/
MAQ.createLineChart = function (chartConfigOptions) {
    MAQ.drawLegend(chartConfigOptions);
    MAQ.drawXAxisTitle(chartConfigOptions);
    MAQ.drawYAxisTitle(chartConfigOptions);
    MAQ.applyMargin(chartConfigOptions, chartConfigOptions.chart.margin);
    var oDataInfo = { min: 0, max: 1 };
    var oSeries = chartConfigOptions.series;
    var clipPathNode = '', clipPathID = '';
    oSeries.label = chartConfigOptions.xAxis.labels.series;
    var iSeriesLength = oSeries.length;
    var iSeriesCounter = 0;
    var iCounter = 0;
    var iLength = 0;
    for (iSeriesCounter = 0; iSeriesCounter < iSeriesLength; iSeriesCounter += 1) {
        if (isSeriesEnabled(oSeries, iSeriesCounter)) {
            oDataInfo = MAQ.getMinMax(oSeries[iSeriesCounter].data, oDataInfo.min, oDataInfo.max);
        }
    }

    var animationConfigurations = getAnimationConfigurations(chartConfigOptions);

    if (oDataInfo.min || oDataInfo.max) {
        var oNormalizedData = MAQ.getNormalized_Min_Max_Interval(oDataInfo.min, oDataInfo.max, chartConfigOptions.yAxis.numberOfGridLines);
        oNormalizedData.sum = oNormalizedData.max + Math.abs(oNormalizedData.min);
        chartConfigOptions.plotOptions.line.normalizedData = oNormalizedData;
        MAQ.drawAxis(chartConfigOptions);

        if (chartConfigOptions.animation.enabled) {
            var clipPathNode = document.querySelectorAll('#' + chartConfigOptions.chart.renderTo + 'clippath');
            if (clipPathNode.length > 0) {
                clipPathID = '' + chartConfigOptions.chart.renderTo + 'clippath' + clipPathNode.length;
            }
            else {
                clipPathID = '' + chartConfigOptions.chart.renderTo + 'clippath';
            }
            var oClipAttr = {
                id: clipPathID
            };
            oGrpELE = MAQ.createSVGElement(chartConfigOptions.svgNS, 'clipPath', oClipAttr);

            var oClipRectAttr = {
                id: clipPathID + 'Rect',
                x: animationConfigurations.x - chartConfigOptions.plotOptions.line.marker.width,
                y: animationConfigurations.y,
                width: animationConfigurations.width,
                height: animationConfigurations.height
            };
            oGrpELE.appendChild(MAQ.createSVGElement(chartConfigOptions.svgNS, 'rect', oClipRectAttr));
            chartConfigOptions.svgELE.appendChild(oGrpELE);
        }

        var oAttr = {
            'class': 'MAQCharts-plotArea',
            transform: 'translate(' + chartConfigOptions.availX + ',' + chartConfigOptions.availY + ')',
            opacity: 1,
            width: 10,
            'clip-path': chartConfigOptions.animation.enabled ? 'url(#' + clipPathID + ')' : ''
        };
        oGrpELE = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oAttr);
        chartConfigOptions.svgELE.appendChild(oGrpELE);

        var iHeightFactor = chartConfigOptions.availHeight / (Math.abs(oNormalizedData.min) + oNormalizedData.max);
        var iZeroAxis = (oNormalizedData.max / oNormalizedData.sum) * chartConfigOptions.availHeight;
        var oLinePlotOptions = chartConfigOptions.plotOptions.line;
        var oMarker = oLinePlotOptions.marker;
        var bShowMarker = oMarker.enabled;
        if (bShowMarker) {
            var oCircleAttr = {
                cx: 0,
                cy: 0,
                r: oMarker.width,
                fill: oMarker.fillColor,
                'z-index': 10,
                stroke: oMarker.lineColor,
                'stroke-width': oMarker.lineWidth
            };
        }
        var bStepLine = oLinePlotOptions.stepLine;
        var oParam = {};
        chartConfigOptions.groupObjectArray = [];
        for (iSeriesCounter = 0; iSeriesCounter < iSeriesLength; iSeriesCounter += 1) {
            oAttr = {
                'class': 'MAQCharts-plotArea-lineChart-' + (iSeriesCounter + 1)
            };
            oGrpLineChart = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oAttr);
            oGrpELE.appendChild(oGrpLineChart);
            chartConfigOptions.groupObjectArray[iSeriesCounter] = oGrpLineChart;
            oPathAttr = {
                d: '',
                fill: 'transparent',
                'z-index': 5,
                'pointer-events': 'visibleStroke',
                stroke: oLinePlotOptions.color[iSeriesCounter],
                'stroke-width': oLinePlotOptions.lineWidth,
                'stroke-dasharray': MAQ.computeStrokeDashStyle(oLinePlotOptions.lineDashStyle)
            };
            var oPath = MAQ.createSVGElement(chartConfigOptions.svgNS, 'path', oPathAttr);
            oGrpLineChart.appendChild(oPath);

            var oDataArray = oSeries[iSeriesCounter];
            iLength = oDataArray.data.length;
            var iXcord = 0;
            var iYcord = 0;
            var oXcord = [];
            var oYcord = [];
            var bPathMoveFlag = false;
            for (iCounter = 0; iCounter < iLength; iCounter += 1) {
                if (isSeriesEnabled(oSeries, iSeriesCounter)) {
                    var height = iHeightFactor * Math.abs(oDataArray.data[iCounter]);
                    iYcord = iZeroAxis - height;
                    if (oDataArray.data[iCounter] < 0) {
                        iYcord = iYcord + (2 * height);
                    }

                    if (oDataArray.data[iCounter] != null || oLinePlotOptions.nullValues != 'ignore') {
                        if (bPathMoveFlag) {
                            if (bStepLine) {
                                oPathAttr.d += ' H ' + iXcord + ' V ' + iYcord;
                            } else {
                                if (oDataArray.data[iCounter - 1] != null || oLinePlotOptions.nullValues != 'ignore') {
                                    oPathAttr.d += ' L ' + iXcord + ',' + iYcord;
                                }
                                else {
                                    oPathAttr.d += ' M ' + iXcord + ',' + iYcord;
                                }
                            }
                        } else {
                            oPathAttr.d = 'M ' + iXcord + ',' + iYcord;
                            bPathMoveFlag = true;
                        }
                        if (bShowMarker) {
                            if (!oMarker.lineColor) {
                                oCircleAttr.stroke = oLinePlotOptions.color[iSeriesCounter];
                            }
                            if (!oMarker.fillColor) {
                                oCircleAttr.fill = oLinePlotOptions.color[iSeriesCounter];
                            }
                            oCircleAttr.cx = iXcord;
                            oCircleAttr.cy = iYcord;
                            var oCircle = MAQ.createSVGElement(chartConfigOptions.svgNS, 'circle', oCircleAttr);
                            oGrpLineChart.appendChild(oCircle);

                            oParam = {
                                seriesIndex: iSeriesCounter,
                                isPosavail: true,
                                position: iCounter,
                                config: chartConfigOptions
                            };
                            if (chartConfigOptions.tooltip.enabled) {
                                var oToolTip = chartConfigOptions.tooltipDiv;
                                MAQ.addEventListener(oCircle, 'mouseover', 'showToolTip', oParam);
                                oCircle.addEventListener('mouseout', function () { oToolTip.style.display = 'none'; }, true);
                            }

                            if (chartConfigOptions.onClick.enabled) {
                                MAQ.addEventListener(oCircle, 'click', 'clickEventListener', oParam);
                            }
                        }
                    }
                    oXcord[iCounter] = iXcord + chartConfigOptions.availX;
                    oYcord[iCounter] = iYcord + chartConfigOptions.availY;
                    iXcord += chartConfigOptions.plotIntervalWidth;
                }
            }
            oDataArray.xPos = oXcord.slice(0);
            oDataArray.yPos = oYcord.slice(0);
            MAQ.addAttr(oPath, 'd', oPathAttr.d);
            oParam = {
                seriesIndex: iSeriesCounter,
                isPosavail: false,
                config: chartConfigOptions
            };
            if (chartConfigOptions.tooltip.enabled) {
                var oToolTip = chartConfigOptions.tooltipDiv;
                MAQ.addEventListener(oPath, 'mousemove', 'showToolTip', oParam);
                oPath.addEventListener('mouseout', function () { oToolTip.style.display = 'none'; }, true);
            }

            if (chartConfigOptions.onClick.enabled) {
                MAQ.addEventListener(oPath, 'click', 'clickEventListener', oParam);
            }
        }
        if (chartConfigOptions.animation.enabled) {
            MAQ.animateClipElement(clipPathID + 'Rect', animationConfigurations.propertyToAnimate, animationConfigurations.targetValue, 1000);
        }
    }
};

/*
MAQ.getAnimationConfigurations: Fetch the configuration for animation
@param {chartConfigOptions} user configuration parameters
*/
function getAnimationConfigurations(chartConfigOptions) {
    var animationConfig = {
        x: 0,
        y: 0,
        width: 0,
        height: chartConfigOptions.availHeight,
        propertyToAnimate: 'width',
        targetValue: chartConfigOptions.availWidth
    };

    switch (chartConfigOptions.animation.type) {
        case 1:
            animationConfig.x = 0;
            animationConfig.y = 0;
            animationConfig.width = 0;
            animationConfig.height = chartConfigOptions.availHeight;
            animationConfig.propertyToAnimate = 'width';
            animationConfig.targetValue = chartConfigOptions.availWidth;
            break;
        case 2:
            animationConfig.x = 0;
            animationConfig.y = chartConfigOptions.availHeight;
            animationConfig.width = chartConfigOptions.availWidth;
            animationConfig.height = chartConfigOptions.availHeight;
            animationConfig.propertyToAnimate = 'y';
            animationConfig.targetValue = 0;
            break;
    }
    return animationConfig;
};

/*
MAQ.createAreaChart: Renders area chart
@param {chartConfigOptions} user configuration parameters
*/
MAQ.createAreaChart = function (chartConfigOptions) {
    MAQ.drawLegend(chartConfigOptions);
    MAQ.drawXAxisTitle(chartConfigOptions);
    MAQ.drawYAxisTitle(chartConfigOptions);
    MAQ.applyMargin(chartConfigOptions, chartConfigOptions.chart.margin);

    var oDataInfo = { min: 0, max: 1 };
    var oSeries = chartConfigOptions.series;
    oSeries.label = chartConfigOptions.xAxis.labels.series;
    var iSeriesLength = oSeries.length;
    var iSeriesCounter = 0;
    var iCounter = 0;
    var iLength = 0;
    for (iSeriesCounter = 0; iSeriesCounter < iSeriesLength; iSeriesCounter += 1) {
        if (isSeriesEnabled(oSeries, iSeriesCounter)) {
            oDataInfo = MAQ.getMinMax(oSeries[iSeriesCounter].data, oDataInfo.min, oDataInfo.max);
        }
    }


    var animationConfigurations = getAnimationConfigurations(chartConfigOptions);

    if (oDataInfo.min || oDataInfo.max) {
        var oNormalizedData = MAQ.getNormalized_Min_Max_Interval(oDataInfo.min, oDataInfo.max, chartConfigOptions.yAxis.numberOfGridLines);
        oNormalizedData.sum = oNormalizedData.max + Math.abs(oNormalizedData.min);
        chartConfigOptions.plotOptions.area.normalizedData = oNormalizedData;
        MAQ.drawAxis(chartConfigOptions);

        if (chartConfigOptions.animation.enabled) {
            var oClipAttr = {
                id: '' + chartConfigOptions.chart.renderTo + 'clippath'
            };
            oGrpELE = MAQ.createSVGElement(chartConfigOptions.svgNS, 'clipPath', oClipAttr);

            var oClipRectAttr = {
                id: '' + chartConfigOptions.chart.renderTo + 'clippathRect',
                x: animationConfigurations.x,
                y: animationConfigurations.y,
                width: animationConfigurations.width,
                height: animationConfigurations.height
            };
            oGrpELE.appendChild(MAQ.createSVGElement(chartConfigOptions.svgNS, 'rect', oClipRectAttr));
            chartConfigOptions.svgELE.appendChild(oGrpELE);
        }

        var oAttr = {
            'class': 'MAQCharts-plotArea',
            transform: 'translate(' + chartConfigOptions.availX + ',' + chartConfigOptions.availY + ')',
            opacity: 1,
            width: 200,
            'clip-path': chartConfigOptions.animation.enabled ? 'url(#' + chartConfigOptions.chart.renderTo + 'clippath)' : ''
        };

        oGrpELE = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oAttr);
        chartConfigOptions.svgELE.appendChild(oGrpELE);

        var iHeightFactor = chartConfigOptions.availHeight / (Math.abs(oNormalizedData.min) + oNormalizedData.max);
        var iZeroAxis = (oNormalizedData.max / oNormalizedData.sum) * chartConfigOptions.availHeight;
        var oAreaPlotOptions = chartConfigOptions.plotOptions.area;
        var oMarker = oAreaPlotOptions.marker;
        var bShowMarker = oMarker.enabled;
        if (bShowMarker) {
            var oCircleAttr = {
                cx: 0,
                cy: 0,
                r: oMarker.width,
                fill: oMarker.fillColor,
                'z-index': 10,
                stroke: oMarker.lineColor,
                'stroke-width': oMarker.lineWidth
            };
        }
        var bStepLine = oAreaPlotOptions.stepLine;
        chartConfigOptions.groupObjectArray = [];
        for (iSeriesCounter = 0; iSeriesCounter < iSeriesLength; iSeriesCounter += 1) {
            oAttr = {
                'class': 'MAQCharts-plotArea-areaChart-' + (iSeriesCounter + 1)
            };
            oGrpAreaChart = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oAttr);
            oGrpELE.appendChild(oGrpAreaChart);
            chartConfigOptions.groupObjectArray[iSeriesCounter] = oGrpAreaChart;
            oPathAttr = {
                d: '',
                fill: oAreaPlotOptions.color[iSeriesCounter],
                'z-index': 5,
                opacity: oAreaPlotOptions.opacity,
                stroke: oAreaPlotOptions.color[iSeriesCounter],
                'stroke-width': oAreaPlotOptions.lineWidth,
                'stroke-dasharray': MAQ.computeStrokeDashStyle(oAreaPlotOptions.lineDashStyle)
            };
            var oPath = MAQ.createSVGElement(chartConfigOptions.svgNS, 'path', oPathAttr);
            oGrpAreaChart.appendChild(oPath);

            var oDataArray = oSeries[iSeriesCounter];
            iLength = oDataArray.data.length;
            var iXcord = 0;
            var iYcord = 0;
            var oXcord = [];
            var oYcord = [];
            oPathAttr.d = 'M 0,' + iZeroAxis;
            for (iCounter = 0; iCounter < iLength; iCounter += 1) {
                if (isSeriesEnabled(oSeries, iSeriesCounter)) {
                    var height = iHeightFactor * Math.abs(oDataArray.data[iCounter]);
                    iYcord = iZeroAxis - height;
                    if (oDataArray.data[iCounter] < 0) {
                        iYcord = iYcord + (2 * height);
                    }
                    if (bStepLine) {
                        oPathAttr.d += ' H ' + iXcord + ' V ' + iYcord;
                    } else {
                        oPathAttr.d += ' L ' + iXcord + ',' + iYcord;
                    }
                    if (bShowMarker) {
                        if (!oMarker.lineColor) {
                            oCircleAttr.stroke = oAreaPlotOptions.color[iSeriesCounter];
                        }
                        if (!oMarker.fillColor) {
                            oCircleAttr.fill = oAreaPlotOptions.color[iSeriesCounter];
                        }
                        oCircleAttr.cx = iXcord;
                        oCircleAttr.cy = iYcord;
                        var oCircle = MAQ.createSVGElement(chartConfigOptions.svgNS, 'circle', oCircleAttr);
                        oGrpAreaChart.appendChild(oCircle);
                    }
                    oXcord[iCounter] = iXcord + chartConfigOptions.availX;
                    oYcord[iCounter] = iYcord + chartConfigOptions.availY;
                    iXcord += chartConfigOptions.plotIntervalWidth;
                }
            }
            iXcord -= chartConfigOptions.plotIntervalWidth;
            oPathAttr.d += 'L ' + iXcord + ', ' + iZeroAxis;
            oDataArray.xPos = oXcord.slice(0);
            oDataArray.yPos = oYcord.slice(0);
            var oParam = {
                seriesIndex: iSeriesCounter,
                isPosavail: false,
                config: chartConfigOptions
            };
            if (chartConfigOptions.tooltip.enabled) {
                var oToolTip = chartConfigOptions.tooltipDiv;
                MAQ.addEventListener(oGrpAreaChart, 'mousemove', 'showToolTip', oParam);
                oGrpAreaChart.addEventListener('mouseout', function () { oToolTip.style.display = 'none'; }, true);
            }

            // Check if the series is enabled, then only plot it
            if (isSeriesEnabled(oSeries, iSeriesCounter)) {
                MAQ.addAttr(oPath, 'd', oPathAttr.d);
            }
        }
        if (chartConfigOptions.animation.enabled) {
            MAQ.animateClipElement('' + chartConfigOptions.chart.renderTo + 'clippathRect', animationConfigurations.propertyToAnimate, animationConfigurations.targetValue, 800);
        }
    }
};

/*
MAQ.createColumnChart: Renders column chart
@param {chartConfigOptions} user configuration parameters
*/
MAQ.createColumnChart = function (chartConfigOptions) {
    MAQ.drawLegend(chartConfigOptions);
    MAQ.drawXAxisTitle(chartConfigOptions);
    MAQ.drawYAxisTitle(chartConfigOptions);
    MAQ.applyMargin(chartConfigOptions, chartConfigOptions.chart.margin);

    var oDataInfo = { min: 0, max: 1 };
    var oColumnPlotOptions = chartConfigOptions.plotOptions.column;
    var oSeries = chartConfigOptions.series;
    oSeries.label = chartConfigOptions.xAxis.labels.series;
    var iSeriesCounter = 0;
    var iSeriesLength = oSeries.length;
    var iCounter = 0;
    var iLength = oSeries[0].data.length;
    if (oColumnPlotOptions.stacked === false) {
        for (iSeriesCounter = 0; iSeriesCounter < iSeriesLength; iSeriesCounter += 1) {
            if (isSeriesEnabled(oSeries, iSeriesCounter)) {
                oDataInfo = MAQ.getMinMax(oSeries[iSeriesCounter].data, oDataInfo.min, oDataInfo.max);
            }
        }
    } else {
        var oMin = oSeries[0].data.map(function (x) { return x - x; });
        var oMax = oMin.slice(0);
        var oYCord = oMin.slice(0);
        var oNYCord = oMin.slice(0);
        var bSeriesEnable = false;
        for (i = 0; i < iLength; i++) {
            for (j = 0; j < iSeriesLength; j++) {
                if (isSeriesEnabled(oSeries, j)) {
                    if (oSeries[j].data[i] < 0) {
                        oMin[i] += oSeries[j].data[i];
                    }
                    if (oSeries[j].data[i] >= 0) {
                        oMax[i] += oSeries[j].data[i];
                    }
                    bSeriesEnable = true;
                }
            }
        }
        if (bSeriesEnable) {
            var oConcatArr = oMax.concat(oMin);
            oDataInfo.min = Math.min.apply(null, oConcatArr);
            oDataInfo.max = Math.max.apply(null, oConcatArr);
            oDataInfo.total = eval(oConcatArr.join('+'));
        }
    }

    var animationConfigurations = getAnimationConfigurations(chartConfigOptions);

    if (chartConfigOptions.animation.enabled) {

        var oClipAttr = {
            id: '' + chartConfigOptions.chart.renderTo + 'clippath'
        }
        oGrpELE = MAQ.createSVGElement(chartConfigOptions.svgNS, 'clipPath', oClipAttr);

        var oClipRectAttr = {
            id: '' + chartConfigOptions.chart.renderTo + 'clippathRect',
            x: animationConfigurations.x,
            y: animationConfigurations.y,
            width: animationConfigurations.width,
            height: animationConfigurations.height
        };
        oGrpELE.appendChild(MAQ.createSVGElement(chartConfigOptions.svgNS, 'rect', oClipRectAttr));
        chartConfigOptions.svgELE.appendChild(oGrpELE);
    }


    if (oDataInfo.min || oDataInfo.max) {

        var oNormalizedData = MAQ.getNormalized_Min_Max_Interval(oDataInfo.min, oDataInfo.max, chartConfigOptions.yAxis.numberOfGridLines);
        oNormalizedData.sum = oNormalizedData.max + Math.abs(oNormalizedData.min);
        chartConfigOptions.plotOptions.column.normalizedData = oNormalizedData;
        MAQ.drawAxis(chartConfigOptions);

        var oAttr = {
            'class': 'MAQCharts-plotArea',
            transform: 'translate(' + chartConfigOptions.availX + ',' + chartConfigOptions.availY + ')',
            opacity: 1,
            'clip-path': 'url(#' + chartConfigOptions.chart.renderTo + 'clippath)'
        };
        oGrpELE = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oAttr);
        chartConfigOptions.svgELE.appendChild(oGrpELE);

        var iHeightFactor = chartConfigOptions.availHeight / (Math.abs(oNormalizedData.min) + oNormalizedData.max);
        var iZeroAxis = (oNormalizedData.max / oNormalizedData.sum) * chartConfigOptions.availHeight;
        var oBarWidth = chartConfigOptions.plotIntervalWidth - oColumnPlotOptions.padding;
        var fGrpPadding = oColumnPlotOptions.groupPadding;
        if (fGrpPadding < 0) {
            fGrpPadding = 0;
        }
        if (fGrpPadding > 100) {
            fGrpPadding = 100;
        }
        fGrpPadding = (fGrpPadding / 100) * oBarWidth;
        if (!oColumnPlotOptions.stacked) {
            oBarWidth = oBarWidth - (fGrpPadding * (iSeriesLength - 1));
        }
        MAQ.addAttr(chartConfigOptions.xLabels, 'transform', 'translate(' + ((oBarWidth / 2) + fGrpPadding) + ', 0)');
        if (!oColumnPlotOptions.stacked) {
            oBarWidth = oBarWidth / iSeriesLength;
        }
        var oRectAttr = {
            x: 0,
            y: 0,
            rx: oColumnPlotOptions.borderRadius,
            ry: oColumnPlotOptions.borderRadius,
            width: oBarWidth,
            height: 0,
            fill: '',
            'z-index': 5,
            opacity: oColumnPlotOptions.opacity,
            stroke: oColumnPlotOptions.borderColor,
            'stroke-width': oColumnPlotOptions.borderWidth,
            'stroke-dasharray': MAQ.computeStrokeDashStyle(oColumnPlotOptions.borderDashStyle)
        };

        var oValueBoxAttr = {
            x: 0,
            y: 0,
            text: null,
            'text-anchor': 'middle',
            style: oColumnPlotOptions.valueBox.style
        }
        for (iSeriesCounter = 0; iSeriesCounter < iSeriesLength; iSeriesCounter += 1) {
            if (isSeriesEnabled(oSeries, iSeriesCounter)) {
                oAttr = {
                    'class': 'MAQCharts-plotArea-columnChart-' + (iSeriesCounter + 1),
                };
                oGrpColumnChart = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oAttr);
                oGrpELE.appendChild(oGrpColumnChart);

                oRectAttr.fill = oColumnPlotOptions.color[iSeriesCounter];

                var oDataArray = oSeries[iSeriesCounter];
                iLength = oDataArray.data.length;
                var iXcord = 0;
                var iYcord = 0;
                for (iCounter = 0; iCounter < iLength; iCounter += 1) {

                    if (oColumnPlotOptions.similarColor === true) {
                        oRectAttr.fill = oColumnPlotOptions.color[iCounter];
                    }

                    var height = iHeightFactor * Math.abs(oDataArray.data[iCounter]);
                    iYcord = iZeroAxis - height;
                    if (oDataArray.data[iCounter] < 0) {
                        iYcord = iZeroAxis;
                    }
                    if (!oColumnPlotOptions.stacked) {
                        oRectAttr.x = iXcord + ((oBarWidth + fGrpPadding) * iSeriesCounter);
                        oRectAttr.y = iYcord;
                    } else {
                        oRectAttr.x = iXcord;
                        if (oDataArray.data[iCounter] < 0) {
                            oRectAttr.y = iYcord + oNYCord[iCounter];
                            oNYCord[iCounter] += height;
                        } else {
                            oRectAttr.y = iYcord - oYCord[iCounter];
                            oYCord[iCounter] += height;
                        }
                    }
                    oRectAttr.height = height;
                    if (iSeriesLength === 1 && oColumnPlotOptions.multiColored === true) {
                        oRectAttr.fill = oColumnPlotOptions.color[iCounter];
                    }

                    var oRect = MAQ.createSVGElement(chartConfigOptions.svgNS, 'rect', oRectAttr);
                    oGrpColumnChart.appendChild(oRect);

                    if (oColumnPlotOptions.valueBox.enabled) {
                        oValueBoxAttr.x = oRectAttr.x + (oRectAttr.width / 2);

                        if (oColumnPlotOptions.valueBox.position == 'middle') {
                            oValueBoxAttr.y = oRectAttr.y + (oRectAttr.height / 2);
                        }
                        else {
                            if (oRectAttr.y < 15) {
                                oValueBoxAttr.y = 15;
                            }
                            else if (oDataArray.data[iCounter] < 0) {
                                if ((chartConfigOptions.availHeight - (oRectAttr.y + oRectAttr.height)) < 15) {
                                    oValueBoxAttr.y = oRectAttr.y + oRectAttr.height - 5;
                                }
                                else {
                                    oValueBoxAttr.y = oRectAttr.y + oRectAttr.height + 15;
                                }
                            }
                            else {
                                oValueBoxAttr.y = oRectAttr.y - 5;
                            }
                        }

                        oValueBoxAttr.text = Math.round(oDataArray.data[iCounter] * 10) / 10;
                        var oValueBox = MAQ.createSVGElement(chartConfigOptions.svgNS, 'text', oValueBoxAttr);
                        oGrpColumnChart.appendChild(oValueBox);
                    }
                    var oParam = {
                        seriesIndex: iSeriesCounter,
                        isPosavail: true,
                        position: iCounter,
                        config: chartConfigOptions
                    };
                    if (chartConfigOptions.tooltip.enabled) {
                        var oToolTip = chartConfigOptions.tooltipDiv;
                        MAQ.addEventListener(oRect, 'mousemove', 'showToolTip', oParam);
                        oRect.addEventListener('mouseout', function () { oToolTip.style.display = 'none'; }, true);
                    }

                    if (chartConfigOptions.onClick.enabled) {
                        MAQ.addEventListener(oRect, 'click', 'clickEventListener', oParam);
                    }
                    iXcord += chartConfigOptions.plotIntervalWidth;
                }
            }
        }

        if (chartConfigOptions.animation.enabled) {
            MAQ.animateClipElement('' + chartConfigOptions.chart.renderTo + 'clippathRect', animationConfigurations.propertyToAnimate, animationConfigurations.targetValue, 800);
        }
    }
    else if (!oDataInfo.min || !oDataInfo.max) {
        var oNormalizedData = MAQ.getNormalized_Min_Max_Interval(oDataInfo.min, oDataInfo.max, chartConfigOptions.yAxis.numberOfGridLines);
        /* The below 3 lines are to avoid NaN scenario in the above function */
        oNormalizedData.min = 0;
        oNormalizedData.max = chartConfigOptions.yAxis.numberOfGridLines;
        oNormalizedData.interval = 1;
        oNormalizedData.sum = oNormalizedData.max + Math.abs(oNormalizedData.min);
        chartConfigOptions.plotOptions.column.normalizedData = oNormalizedData;
        MAQ.drawAxis(chartConfigOptions);
    }
};

/*
MAQ.createBarChart: Renders bar chart
@param {chartConfigOptions} user configuration parameters
*/
MAQ.createBarChart = function (chartConfigOptions) {
    MAQ.drawLegend(chartConfigOptions);
    MAQ.drawXAxisTitle(chartConfigOptions);
    MAQ.drawYAxisTitle(chartConfigOptions);
    MAQ.applyMargin(chartConfigOptions, chartConfigOptions.chart.margin);

    var oDataInfo = { min: 0, max: 1 };
    var oColumnPlotOptions = chartConfigOptions.plotOptions.bar;
    var oSeries = chartConfigOptions.series;
    var iSeriesCounter = 0;
    var iSeriesLength = oSeries.length;
    var iCounter = 0;
    var iLength = oSeries[0].data.length;
    if (oColumnPlotOptions.stacked === false) {
        for (iSeriesCounter = 0; iSeriesCounter < iSeriesLength; iSeriesCounter += 1) {
            if (isSeriesEnabled(oSeries, iSeriesCounter)) {
                oDataInfo = MAQ.getMinMax(oSeries[iSeriesCounter].data, oDataInfo.min, oDataInfo.max);
            }
        }
    } else {
        var oMin = oSeries[0].data.map(function (x) { return x - x; });
        var oMax = oMin.slice(0);
        var oYCord = oMin.slice(0);
        var oNYCord = oMin.slice(0);
        var bSeriesEnable = false;
        for (i = 0; i < iLength; i++) {
            for (j = 0; j < iSeriesLength; j++) {
                if (isSeriesEnabled(oSeries, j)) {
                    if (oSeries[j].data[i] < 0) {
                        oMin[i] += oSeries[j].data[i];
                    }
                    if (oSeries[j].data[i] >= 0) {
                        oMax[i] += oSeries[j].data[i];
                    }
                    bSeriesEnable = true;
                }
            }
        }
        if (bSeriesEnable) {
            var oConcatArr = oMax.concat(oMin);
            oDataInfo.min = Math.min.apply(null, oConcatArr);
            oDataInfo.max = Math.max.apply(null, oConcatArr);
            oDataInfo.total = eval(oConcatArr.join('+'));
        }
    }

    var animationConfigurations = getAnimationConfigurations(chartConfigOptions);

    if (oDataInfo.min || oDataInfo.max) {
        var oNormalizedData = MAQ.getNormalized_Min_Max_Interval(oDataInfo.min, oDataInfo.max, chartConfigOptions.yAxis.numberOfGridLines);
        oNormalizedData.sum = oNormalizedData.max + Math.abs(oNormalizedData.min);
        chartConfigOptions.plotOptions.bar.normalizedData = oNormalizedData;
        MAQ.drawAxis(chartConfigOptions);
        oSeries.label = chartConfigOptions.yAxis.labels.series;
        oSeries.label.reverse();
        chartConfigOptions.availWidth += chartConfigOptions.plotIntervalWidth;

        if (chartConfigOptions.animation.enabled) {
            var oClipAttr = {
                id: '' + chartConfigOptions.chart.renderTo + 'clippath'
            }
            oGrpELE = MAQ.createSVGElement(chartConfigOptions.svgNS, 'clipPath', oClipAttr);


            var oClipRectAttr = {
                id: '' + chartConfigOptions.chart.renderTo + 'clippathRect',
                x: animationConfigurations.x,
                y: animationConfigurations.y,
                width: animationConfigurations.width,
                height: animationConfigurations.height
            };
            oGrpELE.appendChild(MAQ.createSVGElement(chartConfigOptions.svgNS, 'rect', oClipRectAttr));
            chartConfigOptions.svgELE.appendChild(oGrpELE);
        }

        var oAttr = {
            'class': 'MAQCharts-plotArea',
            transform: 'translate(' + chartConfigOptions.availX + ',' + chartConfigOptions.availY + ')',
            opacity: 1,
            width: 200,
            'clip-path': chartConfigOptions.animation.enabled ? 'url(#' + chartConfigOptions.chart.renderTo + 'clippath)' : ''
        };
        oGrpELE = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oAttr);
        chartConfigOptions.svgELE.appendChild(oGrpELE);

        var iWidthFactor = chartConfigOptions.availWidth / (Math.abs(oNormalizedData.min) + oNormalizedData.max);
        var iZeroAxis = (oNormalizedData.min / oNormalizedData.sum) * chartConfigOptions.availWidth;
        iZeroAxis = Math.abs(iZeroAxis);

        var oBarWidth = chartConfigOptions.plotIntervalHeight - oColumnPlotOptions.padding;
        var fGrpPadding = oColumnPlotOptions.groupPadding;
        if (fGrpPadding < 0) {
            fGrpPadding = 0;
        }
        if (fGrpPadding > 100) {
            fGrpPadding = 100;
        }
        fGrpPadding = (fGrpPadding / 100) * oBarWidth;
        if (!oColumnPlotOptions.stacked) {
            oBarWidth = oBarWidth - (fGrpPadding * (iSeriesLength - 1));
        }
        MAQ.addAttr(chartConfigOptions.yLabels, 'transform', 'translate(0 , ' + ((oBarWidth / 2) + fGrpPadding) + ')');
        if (!oColumnPlotOptions.stacked) {
            oBarWidth = oBarWidth / iSeriesLength;
        }
        var oRectAttr = {
            x: 0,
            y: 0,
            rx: oColumnPlotOptions.borderRadius,
            ry: oColumnPlotOptions.borderRadius,
            width: 0,
            height: oBarWidth,
            'z-index': 5,
            fill: '',
            opacity: oColumnPlotOptions.opacity,
            stroke: oColumnPlotOptions.borderColor,
            'stroke-width': oColumnPlotOptions.borderWidth,
            'stroke-dasharray': MAQ.computeStrokeDashStyle(oColumnPlotOptions.borderDashStyle)
        };
        for (iSeriesCounter = 0; iSeriesCounter < iSeriesLength; iSeriesCounter += 1) {
            oAttr = {
                'class': 'MAQCharts-plotArea-barChart-' + (iSeriesCounter + 1)
            };
            oGrpColumnChart = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oAttr);
            oGrpELE.appendChild(oGrpColumnChart);

            oRectAttr.fill = oColumnPlotOptions.color[iSeriesCounter];
            var oDataArray = oSeries[iSeriesCounter];
            iLength = oDataArray.data.length;
            var iXcord = 0;
            var iYcord = 0;
            for (iCounter = 0; iCounter < iLength; iCounter += 1) {
                if (isSeriesEnabled(oSeries, iSeriesCounter)) {
                    var width = iWidthFactor * Math.abs(oDataArray.data[iCounter]);
                    iXcord = iZeroAxis - width;
                    if (oDataArray.data[iCounter] < 0) {
                        oRectAttr.transform = 'translate(' + (-width) + ', 0)';
                    } else {
                        oRectAttr.transform = '';
                    }
                    if (!oColumnPlotOptions.stacked) {
                        oRectAttr.y = iYcord + ((oBarWidth + fGrpPadding) * iSeriesCounter);
                        oRectAttr.x = iXcord;
                    } else {
                        oRectAttr.y = iYcord;
                        if (oDataArray.data[iCounter] < 0) {
                            oRectAttr.x = iXcord - oNYCord[iCounter];
                            oNYCord[iCounter] += width;
                        } else {
                            oRectAttr.x = iXcord + oYCord[iCounter];
                            oYCord[iCounter] += width;
                        }
                    }
                    oRectAttr.x += width;
                    oRectAttr.x = Math.abs(oRectAttr.x);
                    oRectAttr.width = width;
                    if (iSeriesLength === 1 && oColumnPlotOptions.multiColored === true) {
                        oRectAttr.fill = oColumnPlotOptions.color[iCounter];
                    }
                    var oRect = MAQ.createSVGElement(chartConfigOptions.svgNS, 'rect', oRectAttr);
                    oGrpColumnChart.appendChild(oRect);
                    var getRectDimension = MAQ.getObjectDimension(oRect);

                    var oValueBoxAttr = {
                        x: 0,
                        y: 0,
                        text: null,
                        "text-anchor": 'left',
                        style: oColumnPlotOptions.valueBox.style
                    }

                    if (oColumnPlotOptions.valueBox.enabled) {
                        oValueBoxAttr.y = oRectAttr.y + (oBarWidth / 2) + parseInt(oColumnPlotOptions.valueBox.style.fontSize) / 2;
                        if (oColumnPlotOptions.valueBox.position == 'middle') {
                            oValueBoxAttr["text-anchor"] = 'middle';
                            oValueBoxAttr.x = oRectAttr.x + (oRectAttr.width / 2);
                            if (oDataArray.data[iCounter] < 0) {
                                oValueBoxAttr.transform = 'translate(' + (-width) + ', 0)';
                            } else {
                                oValueBoxAttr.transform = '';
                            }
                        }
                        else {
                            if (oRectAttr.width < 15) {
                                oValueBoxAttr.x = 15;
                            }
                            else if (oDataArray.data[iCounter] > 0) {
                                if ((chartConfigOptions.availWidth - (oRectAttr.width)) < 15) {
                                    oValueBoxAttr.x = oRectAttr.x + oRectAttr.width - 5;
                                }
                                else {
                                    oValueBoxAttr.x = oRectAttr.x + oRectAttr.width + 5;
                                }
                            }
                            else {
                                oValueBoxAttr.x = oRectAttr.x - oRectAttr.width - 5;
                                oValueBoxAttr["text-anchor"] = 'right';
                            }
                        }

                        oValueBoxAttr.text = MAQ.applyFormatter(Math.round(oDataArray.data[iCounter] * Math.pow(10, 1)) / Math.pow(10, 1), oColumnPlotOptions.valueBox.formatter);
                        var oValueBox = MAQ.createSVGElement(chartConfigOptions.svgNS, 'text', oValueBoxAttr);
                        oGrpColumnChart.appendChild(oValueBox);
                        if (oColumnPlotOptions.valueBox.position == 'middle') {
                            var getValueBoxDimensions = MAQ.getObjectDimension(oValueBox);
                            if (oColumnPlotOptions.stacked === false) {
                                if (getRectDimension.width < getValueBoxDimensions.width) {
                                    oGrpColumnChart.removeChild(oValueBox);
                                    if (oDataArray.data[iCounter] > 0) {
                                        oValueBoxAttr["text-anchor"] = 'left';
                                        if ((chartConfigOptions.availWidth - (oRectAttr.width)) < 15) {
                                            oValueBoxAttr.x = oRectAttr.x + oRectAttr.width - 5;
                                        }
                                        else {
                                            oValueBoxAttr.x = oRectAttr.x + oRectAttr.width + 5;
                                        }
                                    }
                                    else {
                                        oValueBoxAttr.x = oRectAttr.x - oRectAttr.width - 5;
                                        oValueBoxAttr["text-anchor"] = 'right';
                                    }
                                    var oValueBox = MAQ.createSVGElement(chartConfigOptions.svgNS, 'text', oValueBoxAttr);
                                    oGrpColumnChart.appendChild(oValueBox);
                                }
                            }
                        }
                    }

                    var oParam = {
                        seriesIndex: iSeriesCounter,
                        isPosavail: true,
                        position: iCounter,
                        config: chartConfigOptions
                    };
                    if (chartConfigOptions.tooltip.enabled) {
                        var oToolTip = chartConfigOptions.tooltipDiv;
                        MAQ.addEventListener(oRect, 'mousemove', 'showToolTip', oParam);
                        oRect.addEventListener('mouseout', function () { oToolTip.style.display = 'none'; }, true);
                    }

                    if (chartConfigOptions.onClick.enabled) {
                        MAQ.addEventListener(oRect, 'click', 'clickEventListener', oParam);
                    }
                    iYcord += chartConfigOptions.plotIntervalHeight;
                }
            }
        }
        MAQ.animateClipElement('' + chartConfigOptions.chart.renderTo + 'clippathRect', animationConfigurations.propertyToAnimate, animationConfigurations.targetValue, 800);
    }
    else if (!oDataInfo.min || !oDataInfo.max) {
        var oNormalizedData = MAQ.getNormalized_Min_Max_Interval(oDataInfo.min, oDataInfo.max, chartConfigOptions.yAxis.numberOfGridLines);
        /* The below 3 lines are to avoid NaN scenario in the above function */
        oNormalizedData.min = 0;
        oNormalizedData.max = chartConfigOptions.yAxis.numberOfGridLines;
        oNormalizedData.interval = 1;
        oNormalizedData.sum = oNormalizedData.max + Math.abs(oNormalizedData.min);
        chartConfigOptions.plotOptions.bar.normalizedData = oNormalizedData;
        MAQ.drawAxis(chartConfigOptions);
        oSeries.label = chartConfigOptions.yAxis.labels.series;
        oSeries.label.reverse();
    }
};



/*
getAnimationConfigurationsForPie: creates the animation configutation object for pie and donut
*/
function getAnimationConfigurationsForPie(chartConfigOptions) {
    switch (chartConfigOptions.animation.type) {
        case 3:
            var oClipCircleAttr = {
                id: '' + chartConfigOptions.chart.renderTo + 'clippathRect',
                cx: 0,
                cy: 0,
                r: 0
            };
            break;
        case 2:
        case 1:
        default:
            var oClipCircleAttr = {
                id: '' + chartConfigOptions.chart.renderTo + 'clippathPath',
                d: 'M100 , 100',
                fill: 'none',
                'stroke-width': 2,
                stroke: "blue"
            };
            break;
    }
    return oClipCircleAttr;
};



/*
MAQ.animatePieArc: creates the animation effect ony for pie and donut chart
creates the rounded moving affect
Parameters -->
sPropertyToAnimate: Contains the id of the child element of clip path
sAnimateValue: contains the radiouus of the circle
*/
MAQ.animatePieArc = function (sPropertyToAnimate, sAnimateValue, bIsClockwise) {
    var iCounter = 0;
    var circle = document.getElementById(sPropertyToAnimate);
    var iAngle = 0;
    var iRadius = 10;
    var process = setInterval(function () {
        //angle %= 360;
        var fRadians = (iAngle / 180) * Math.PI;
        var fXCordinate = -11 + Math.cos(fRadians) * iRadius;
        var fYCordinate = 0 + Math.sin(fRadians) * iRadius;
        var sPrevAttrD = circle.getAttribute("d");
        if (iCounter == 0) {
            var sAttrD = sPrevAttrD + " M " + fXCordinate + " " + fYCordinate;
        }
        else {
            var sAttrD = sPrevAttrD + " L " + fXCordinate + " " + fYCordinate;
        }
        circle.setAttribute("d", sAttrD);
        iCounter++;
        if (bIsClockwise) {
            if (iCounter < 10) {
                iAngle += 0.2;
            }
            else {
                iAngle += 5;
            }
            //this condition clears the set interval process when the complete circle is created 
            if (iAngle >= 365) {
                clearInterval(process);
            }
        }
        else {
            if (iCounter < 10) {
                iAngle -= 0.2;
            }
            else {
                iAngle -= 5;
            }
            //this condition clears the set interval process when the complete circle is created 
            if (iAngle <= -365) {
                clearInterval(process);
            }
        }
        if (iRadius <= sAnimateValue) {
            iRadius += 25;
        }

    }
, 10)
};




/*
MAQ.createPieChart: Renders pie chart
@param {chartConfigOptions} user configuration parameters
*/
MAQ.createPieChart = function (chartConfigOptions) {
    chartConfigOptions.series = chartConfigOptions.series.filter(function (x) { return x.data >= 0 });
    var oSeries = chartConfigOptions.series;
    MAQ.drawLegend(chartConfigOptions);
    MAQ.applyMargin(chartConfigOptions, chartConfigOptions.chart.margin);

    var oDataInfo = { min: 0, max: 0 };
    var iCounter = 0;
    var iLength = oSeries.length;
    var iEnabledSeries = 0;
    var flag = 0, process = true;
    var posX = [], posY = [];

    for (iCounter = 0; iCounter < iLength; iCounter += 1) {
        if (parseInt(oSeries[iCounter].data, 10) === 0) {
            oSeries[iCounter].enabled = false;
        }
        if (isSeriesEnabled(oSeries, iCounter)) {
            if (oSeries[iCounter].data != 0) {
                oDataInfo = MAQ.getMinMaxForPie(oSeries, oDataInfo.min, oDataInfo.max, 'data');
                iEnabledSeries++;
            }
        }
    }

    if (chartConfigOptions.animation.enabled && iEnabledSeries !== 0) {
        var oClipAttr = {
            id: chartConfigOptions.chart.renderTo + 'clippath'
        }
        oGrpELE = MAQ.createSVGElement(chartConfigOptions.svgNS, 'clipPath', oClipAttr);

        var animationConfigurations = getAnimationConfigurationsForPie(chartConfigOptions);
        switch (chartConfigOptions.animation.type) {
            case 3:
                oGrpELE.appendChild(MAQ.createSVGElement(chartConfigOptions.svgNS, 'circle', animationConfigurations));
                break;
            case 2:
            case 1:
            default:
                oGrpELE.appendChild(MAQ.createSVGElement(chartConfigOptions.svgNS, 'path', animationConfigurations));
        }
        chartConfigOptions.svgELE.appendChild(oGrpELE);
    }

    var oAttr = {
        'class': 'MAQCharts-plotArea',
        transform: 'translate(' + chartConfigOptions.availX + ',' + chartConfigOptions.availY + ')',
        opacity: 0,
        opacity: 1,
        'clip-path': chartConfigOptions.animation.enabled ? 'url(#' + chartConfigOptions.chart.renderTo + 'clippath)' : ''

    };
    oGrpELE = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oAttr);

    chartConfigOptions.svgELE.appendChild(oGrpELE);


    var fAvailHeight = chartConfigOptions.availHeight,
        fAvailWidth = chartConfigOptions.availWidth,
        fCenterX = fAvailWidth / 2,
        fCenterY = fAvailHeight / 2;
    var fRadius = Math.min(fAvailHeight, fAvailWidth) / 2;
    fRadius = fRadius * 0.7;

    MAQ.addAttr(oGrpELE, 'transform', 'translate(' + (chartConfigOptions.availX + fCenterX) + ', ' + (chartConfigOptions.availY + fCenterY) + ')');

    var oPiePlotOptions = 'pie' === chartConfigOptions.chart.type.toLowerCase() ? chartConfigOptions.plotOptions.pie : chartConfigOptions.plotOptions.donut;
    var fDegree = 0,
        startX = 0,
        startY = fRadius,
        newX = 0,
        newY = 0,
        reflectNewY = 0,
        reflectStartY = 0,
        largeFlag = 0,
        borderWidth = oPiePlotOptions.borderWidth,
        borderDashStyle = oPiePlotOptions.borderDashStyle;
    var xPos = 0,
        yPos = 0,
        idistanceFactor = 8;
    if (oPiePlotOptions.emptyPie && iEnabledSeries === 0) {
        var oCircleAttr = {
            cx: 0,
            cy: 0,
            r: fRadius,
            fill: '#fff',
            'z-index': 10,
            stroke: 'black',
            'stroke-width': 1,
            opacity: 0.8
        };

        var oCircle = MAQ.createSVGElement(chartConfigOptions.svgNS, 'circle', oCircleAttr);
        oGrpELE.appendChild(oCircle);
    }
    if (oDataInfo.total > 0) {
        if (iEnabledSeries === 1) {
            borderWidth = 0;
            borderDashStyle = '';
        }

        var oPathAttr = {
            d: '',
            fill: '',
            'z-index': 5,
            opacity: oPiePlotOptions.opacity,
            stroke: oPiePlotOptions.borderColor,
            'stroke-width': borderWidth,
            'stroke-dasharray': MAQ.computeStrokeDashStyle(borderDashStyle)
        };

        var numOfColors = oPiePlotOptions.color.length;
        oPiePlotOptions.degrees = [];
        for (iCounter = 0; iCounter < iLength; iCounter += 1) {
            if (parseInt(oSeries[iCounter].data, 10) === 0) {
                oSeries[iCounter].enabled = false;
            }
            if (isSeriesEnabled(oSeries, iCounter)) {
                var oPieDataGroupStyles = {
                    //'id': "pie" + iCounter,
                };

                var oPieDataGroup = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oPieDataGroupStyles);
                oGrpELE.appendChild(oPieDataGroup);
                if (iEnabledSeries === 1) {
                    fDegree = 1.999999 * Math.PI;
                }
                else {
                    fDegree = (oSeries[iCounter].data / oDataInfo.total * 2 * Math.PI);
                }
                oPiePlotOptions.degrees.push(fDegree);

                if (fDegree > Math.PI) {
                    largeFlag = 1;
                }

                newX = (startX * Math.cos(fDegree) - startY * Math.sin(fDegree));
                newY = (startX * Math.sin(fDegree) + startY * Math.cos(fDegree));

                reflectNewY = -newY;
                reflectStartY = -startY;

                if (!Math.floor(parseFloat(reflectNewY))) {
                    reflectNewY = 0;
                }

                xPos = ((startX * Math.cos(fDegree / 2) - startY * Math.sin(fDegree / 2))) / idistanceFactor;
                yPos = -((startX * Math.sin(fDegree / 2) + startY * Math.cos(fDegree / 2))) / idistanceFactor;

                posX.push(-xPos);
                posY.push(yPos);

                oPathAttr.id = "pie" + iCounter;
                oPathAttr.d = "M 0,0" +
				            " L " + -newX + "," + reflectNewY +
				            " A " + fRadius + "," + fRadius +
				            " 0 " + largeFlag + ", 0 " +
				            -startX + "," + reflectStartY + " Z ";
                oPathAttr.fill = oPiePlotOptions.color[iCounter % numOfColors];
                var oPath = MAQ.createSVGElement(chartConfigOptions.svgNS, 'path', oPathAttr);
                if (oPiePlotOptions.dataLabels.enabled) {
                    if (!(oSeries[iCounter].data === 0)) {
                        var oPieLabelLineStyles = {
                            'stroke-width': oPiePlotOptions.dataLabels.lineWidth,
                            stroke: oPiePlotOptions.dataLabels.lineColor,
                            fill: 'none',
                            d: ''
                        };

                        oPieLabelLineStyles.d = "M " + -(xPos * idistanceFactor) + "," + (yPos * idistanceFactor) +
                                                " L " + -(xPos * idistanceFactor + (xPos)) + "," + (yPos * idistanceFactor + (yPos)) +
                                                " L " + -(xPos * idistanceFactor + (xPos * 2)) + "," + (yPos * idistanceFactor + (yPos));

                        var oPieLabelLine = MAQ.createSVGElement(chartConfigOptions.svgNS, 'path', oPieLabelLineStyles);
                        oPieDataGroup.appendChild(oPieLabelLine);

                        var oPieLabelStyles = {
                            x: -(xPos * idistanceFactor + (xPos * 2)),
                            y: (yPos * idistanceFactor + (yPos)),
                            style: oPiePlotOptions.dataLabels.style
                        };

                        var oPieLabel = MAQ.createSVGElement(chartConfigOptions.svgNS, 'text', oPieLabelStyles);
                        var oTextNode;
                        if (oPiePlotOptions.dataLabels.formatter) {
                            oTextNode = document.createTextNode(MAQ.applyFormatter(oSeries[iCounter], oPiePlotOptions.dataLabels.formatter));
                        }
                        else {
                            oTextNode = document.createTextNode(oSeries[iCounter].name + ': ' + Math.round(oSeries[iCounter].data * 10) / 10);
                        }
                        oPieDataGroup.appendChild(oPieLabel);
                        oPieLabel.appendChild(oTextNode);

                        var oLabelBox = oPieLabel.getBBox();
                        if (xPos < 0) {
                            MAQ.addAttr(oPieLabel, 'dx', 3);
                        }
                        else {
                            MAQ.addAttr(oPieLabel, 'dx', -oLabelBox.width - 3);
                        }

                        if (yPos < 0) {
                            MAQ.addAttr(oPieLabel, 'dy', 2);
                        }
                        else {
                            MAQ.addAttr(oPieLabel, 'dy', oLabelBox.height / 2 - 2);
                        }
                    }
                }

                oPieDataGroup.appendChild(oPath);


                var oParam = {
                    seriesIndex: 0,
                    isPosavail: true,
                    position: iCounter,
                    config: chartConfigOptions
                };
                if (chartConfigOptions.tooltip.enabled) {
                    var oToolTip = chartConfigOptions.tooltipDiv;
                    MAQ.addEventListener(oPath, 'mousemove', 'showToolTip', oParam);
                    oPath.addEventListener('mouseout', function () { oToolTip.style.display = 'none'; }, true);
                }

                if (chartConfigOptions.onClick.enabled) {
                    MAQ.addEventListener(oPath, 'click', 'clickEventListener', oParam);
                }

                if ('pie' === chartConfigOptions.chart.type.toLowerCase() && oPiePlotOptions.sliceOnSelect) {
                    oPath.addEventListener("click", function () {
                        if (process) {
                            var pieId = parseInt(this.id.substring(3));
                            if ((pieId + 1) !== flag) {
                                if (this.getAttribute("transform") && "translate(0)" !== this.getAttribute("transform")) {
                                    this.setAttribute("transform", "translate(0, 0)");
                                }
                                else {
                                    if (oPiePlotOptions.resetPreviousSliced) {
                                        var pieBlocks = document.querySelectorAll("path[id^='pie']");
                                        var iCount = pieBlocks.length;
                                        while (iCount--) {
                                            pieBlocks[iCount].setAttribute("transform", "translate(0, 0)");
                                        }
                                    }
                                    this.setAttribute("transform", "translate(" + posX[pieId] + "," + posY[pieId] + ")");
                                }
                            }
                            else {
                            }
                        }
                    });
                }

                largeFlag = 0;
                startX = newX;
                startY = newY;
            }

            if ('donut' === chartConfigOptions.chart.type.toLowerCase()) {
                var oAttr = {
                    cx: 0,
                    cy: 0,
                    r: fRadius / 2,
                    stroke: oPiePlotOptions.borderColor,
                    "stroke-width": borderWidth,
                    fill: oPiePlotOptions.borderColor
                };
                var oCircleEle = MAQ.createSVGElement(chartConfigOptions.svgNS, 'circle', oAttr);
                oGrpELE.appendChild(oCircleEle);
            }

            MAQ.animateClipElement('' + chartConfigOptions.chart.renderTo + 'clippathRect',
            //animationConfigurations.propertyToAnimate
            'r'
            , fRadius + 100, 1000);
        }
        if (chartConfigOptions.animation.enabled) {
            switch (chartConfigOptions.animation.type) {
                case 3:
                    MAQ.animateClipElement(animationConfigurations.id, 'r', fRadius + 100, 1000);
                    break;
                case 2:
                    MAQ.animatePieArc(animationConfigurations.id, fRadius * 2, true);
                    break;
                case 1:
                default:
                    MAQ.animatePieArc(animationConfigurations.id, fRadius * 2, false);
                    break;
            }
        }
    }
};

/*
MAQ.createStockChart: Renders stock chart
@param {chartConfigOptions} user configuration parameters
*/
MAQ.createStockChart = function (chartConfigOptions) {
    MAQ.drawXAxisTitle(chartConfigOptions);
    MAQ.drawYAxisTitle(chartConfigOptions);
    MAQ.applyMargin(chartConfigOptions, chartConfigOptions.chart.margin);
    var oSeries = chartConfigOptions.series[0];
    chartConfigOptions.series.label = chartConfigOptions.xAxis.labels.series;
    var oDataInfo = {};
    oDataInfo = MAQ.getMinMax(oSeries.low, 0, 0);
    oDataInfo = MAQ.getMinMax(oSeries.high, oDataInfo.min, oDataInfo.max);
    oDataInfo = MAQ.getMinMax(oSeries.open, oDataInfo.min, oDataInfo.max);
    oDataInfo = MAQ.getMinMax(oSeries.close, oDataInfo.min, oDataInfo.max);
    if (oDataInfo.min || oDataInfo.max) {
        var oNormalizedData = MAQ.getNormalized_Min_Max_Interval(oDataInfo.min, oDataInfo.max, chartConfigOptions.yAxis.numberOfGridLines);
        oNormalizedData.sum = oNormalizedData.max + Math.abs(oNormalizedData.min);
        chartConfigOptions.plotOptions.stock.normalizedData = oNormalizedData;
        MAQ.drawAxis(chartConfigOptions);

        var oAttr = {
            'class': 'MAQCharts-plotArea',
            transform: 'translate(' + chartConfigOptions.availX + ',' + chartConfigOptions.availY + ')',
            opacity: 0
        };
        oGrpELE = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oAttr);
        chartConfigOptions.svgELE.appendChild(oGrpELE);

        var oStockPlotOptions = chartConfigOptions.plotOptions.stock;
        var oBarWidth = chartConfigOptions.plotIntervalWidth - oStockPlotOptions.padding;
        MAQ.addAttr(chartConfigOptions.xLabels, 'transform', 'translate(' + (oBarWidth / 2) + ', 0)');

        var oLineAttr = {
            x1: oBarWidth / 2,
            y1: 0,
            x2: oBarWidth / 2,
            y2: 0,
            stroke: oStockPlotOptions.lineColor,
            'stroke-width': oStockPlotOptions.lineWidth
        };

        var oMedianLineAttr = {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            stroke: oStockPlotOptions.lineColor,
            'stroke-width': oStockPlotOptions.lineWidth
        };

        var oRectAttr = {
            x: 0,
            y: 0,
            width: oBarWidth,
            height: 0,
            fill: '#0066CC',
            opacity: oStockPlotOptions.opacity,
            stroke: oStockPlotOptions.borderColor,
            'stroke-width': oStockPlotOptions.borderWidth,
            'stroke-dasharray': MAQ.computeStrokeDashStyle(oStockPlotOptions.borderDashStyle)
        };

        oAttr = {
            'pointer-events': 'visibleFill'
        };

        chartConfigOptions.svgELE.appendChild(oGrpELE);
        var iHeightFactor = chartConfigOptions.availHeight / (Math.abs(oNormalizedData.min) + oNormalizedData.max);
        var iZeroAxis = (oNormalizedData.max / oNormalizedData.sum) * chartConfigOptions.availHeight;
        var iCounter = 0;
        var iLength = oSeries.low.length;
        var iXcord = 0;
        var iYcordOpen = 0;
        var iYcordClose = 0;
        for (iCounter = 0; iCounter < iLength; iCounter += 1) {

            oLineAttr.y1 = iZeroAxis - iHeightFactor * Math.abs(oSeries.low[iCounter]);
            oLineAttr.y2 = iZeroAxis - iHeightFactor * Math.abs(oSeries.high[iCounter]);

            iYcordOpen = iZeroAxis - iHeightFactor * Math.abs(oSeries.open[iCounter]);
            iYcordClose = iZeroAxis - iHeightFactor * Math.abs(oSeries.close[iCounter]);
            if (iYcordOpen >= iYcordClose) {
                oRectAttr.y = iYcordClose;
                oRectAttr.height = iYcordOpen - iYcordClose;
            } else {
                oRectAttr.y = iYcordClose;
                oRectAttr.height = iYcordClose - iYcordOpen;
            }

            var oRect = MAQ.createSVGElement(chartConfigOptions.svgNS, 'rect', oRectAttr);
            var oLine = MAQ.createSVGElement(chartConfigOptions.svgNS, 'line', oLineAttr);

            oGrpDoji = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oAttr);
            oGrpDoji.appendChild(oLine);
            oGrpDoji.appendChild(oRect);

            if (chartConfigOptions.median.enabled) {
                oMedianLineAttr.x1 = oRectAttr.x;
                oMedianLineAttr.x2 = oRectAttr.x + oRectAttr.width;

                oMedianLineAttr.y1 = iZeroAxis - iHeightFactor * Math.abs(oSeries.median[iCounter]);;
                oMedianLineAttr.y2 = oMedianLineAttr.y1;
                var oMedianLine = MAQ.createSVGElement(chartConfigOptions.svgNS, 'line', oMedianLineAttr);

                oGrpDoji.appendChild(oMedianLine);
            }

            oGrpELE.appendChild(oGrpDoji);

            var oParam = {
                seriesIndex: 0,
                isPosavail: true,
                position: iCounter,
                config: chartConfigOptions
            };
            if (chartConfigOptions.tooltip.enabled) {
                var oToolTip = chartConfigOptions.tooltipDiv;
                MAQ.addEventListener(oGrpDoji, 'mousemove', 'showToolTip', oParam);
                oGrpDoji.addEventListener('mouseout', function () { oToolTip.style.display = 'none'; }, true);
            }

            oRectAttr.x += chartConfigOptions.plotIntervalWidth;
            oLineAttr.x1 = oLineAttr.x2 += chartConfigOptions.plotIntervalWidth;
        }
        MAQ.animateElement(oGrpELE, 'opacity', 1, 1000);
    }
};

/*
MAQ.createFunnelChart: Renders funnel chart
@param {chartConfigOptions} user configuration parameters
*/
MAQ.createFunnelChart = function (chartConfigOptions) {
    if (iglobalCounter === 0) {
        chartConfigOptions.series.reverse();
    }
    var oSeries = chartConfigOptions.series;
    MAQ.applyMargin(chartConfigOptions, chartConfigOptions.chart.margin);
    MAQ.drawLegend(chartConfigOptions);
    var iCounter = 0;
    var oDataInfo = { min: 0, max: 0 };
    for (iCounter = 0; iCounter < oSeries.length; iCounter += 1) {
        oDataInfo = MAQ.getMinMax(oSeries, oDataInfo.min, oDataInfo.max, "data");
    }
    if (oDataInfo.min || oDataInfo.max) {
        var oAttr = {
            'class': 'MAQCharts-plotArea',
            transform: 'translate(' + chartConfigOptions.availX + ',' + chartConfigOptions.availY + ')',
            opacity: 0
        };
        oGrpELE = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oAttr);
        chartConfigOptions.svgELE.appendChild(oGrpELE);
        var fTotalInterval = chartConfigOptions.availHeight / oSeries.length;
        var fMultiplicationFactor = chartConfigOptions.availWidth / oDataInfo.max;
        var fAvailableHeight = chartConfigOptions.availHeight;
        var fAvailableWidth = chartConfigOptions.availWidth / 2;
        var sBottomleft = "";
        var sBottomright = "";
        var oFunnelPlotOptions = chartConfigOptions.plotOptions.funnel;
        for (iCounter = 0 ; iCounter < oSeries.length; iCounter += 1) {
            var oPathAttr = {
                d: '',
                fill: oFunnelPlotOptions.color[iCounter],
                'z-index': 5,
                opacity: oFunnelPlotOptions.opacity,
                stroke: oFunnelPlotOptions.color[iCounter],
                'stroke-width': oFunnelPlotOptions.lineWidth,
                'stroke-dasharray': MAQ.computeStrokeDashStyle(oFunnelPlotOptions.lineDashStyle)
            };
            var path = "M" + (fAvailableWidth) + " " + (fAvailableHeight - fTotalInterval);
            path += " L" + (fAvailableWidth - (fMultiplicationFactor * oSeries[iCounter].data / 2)) + " " + (fAvailableHeight - fTotalInterval)
            if (iCounter === 0) {
                path += " L" + (fAvailableWidth) + " " + (fAvailableHeight);
            }
            else {
                path += " L" + sBottomleft + " L" + sBottomright;
            }
            path += " L" + (fAvailableWidth + (fMultiplicationFactor * oSeries[iCounter].data / 2)) + " " + (fAvailableHeight - fTotalInterval) + " Z";
            sBottomleft = (fAvailableWidth - (fMultiplicationFactor * oSeries[iCounter].data / 2)) + " " + (fAvailableHeight - fTotalInterval)
            sBottomright = (fAvailableWidth + (fMultiplicationFactor * oSeries[iCounter].data / 2)) + " " + (fAvailableHeight - fTotalInterval)
            oPathAttr.d = path;
            var oPath = MAQ.createSVGElement(chartConfigOptions.svgNS, 'path', oPathAttr);
            oGrpELE.appendChild(oPath);
            var oParam = {
                seriesIndex: 0,
                isPosavail: true,
                position: iCounter,
                config: chartConfigOptions
            };
            if (oFunnelPlotOptions.dataLabels.enabled) {
                if (!(oSeries[iCounter].data === 0)) {
                    var oFunnelLabelStyles = {
                        x: 0,
                        y: 0,
                        "text-anchor": 'middle',
                        style: oFunnelPlotOptions.dataLabels.style
                    };
                    var oTextNode;

                    if (oFunnelPlotOptions.dataLabels.formatter) {
                        oTextNode = document.createTextNode(MAQ.applyFormatter(oSeries[iCounter], oFunnelPlotOptions.dataLabels.formatter));
                    }
                    else {
                        oTextNode = document.createTextNode(oSeries[iCounter].name + ': ' + Math.round(oSeries[iCounter].data * 10) / 10);
                    }

                    if (oFunnelPlotOptions.dataLabels.position == 'center') {
                        oFunnelLabelStyles.x = (fAvailableWidth);
                        oFunnelLabelStyles.y = ((fAvailableHeight - fTotalInterval) + fAvailableHeight) / 2;
                    }
                    else {
                        var ofunnelLabelLineStyles = {
                            'stroke-width': oFunnelPlotOptions.dataLabels.lineWidth,
                            stroke: oFunnelPlotOptions.dataLabels.lineColor,
                            fill: 'none',
                            d: ''
                        };
                        //ofunnelLabelLineStyles.d = "M " + -(xPos * idistanceFactor) + "," + (yPos * idistanceFactor) +
                        //                        " L " + -(xPos * idistanceFactor + (xPos)) + "," + (yPos * idistanceFactor + (yPos)) +
                        //                        " L " + -(xPos * idistanceFactor + (xPos * 2)) + "," + (yPos * idistanceFactor + (yPos));
                        //var oFunnelLabelLine = MAQ.createSVGElement(chartConfigOptions.svgNS, 'path', oPieLabelLineStyles);
                        //oPieDataGroup.appendChild(oPieLabelLine);
                    }
                    var oFunnelLabel = MAQ.createSVGElement(chartConfigOptions.svgNS, 'text', oFunnelLabelStyles);
                    oFunnelLabel.appendChild(oTextNode);
                    oGrpELE.appendChild(oFunnelLabel);
                }
            }
            if (chartConfigOptions.tooltip.enabled) {
                var oToolTip = chartConfigOptions.tooltipDiv;
                MAQ.addEventListener(oPath, 'mousemove', 'showToolTip', oParam);
                oPath.addEventListener('mouseout', function () { oToolTip.style.display = 'none'; }, true);
            }
            fAvailableHeight = fAvailableHeight - fTotalInterval;
        }
        MAQ.animateElement(oGrpELE, 'opacity', 1, 2500);
    }
};

/*
MAQ.createBubbleChart: Renders bubble chart
@param {chartConfigOptions} user configuration parameters
*/
MAQ.createBubbleChart = function (chartConfigOptions) {
    MAQ.drawLegend(chartConfigOptions);
    MAQ.drawXAxisTitle(chartConfigOptions);
    MAQ.drawYAxisTitle(chartConfigOptions);
    MAQ.applyMargin(chartConfigOptions, chartConfigOptions.chart.margin);
    var oDataInfoX = { min: 0, max: 1 };
    var oDataInfoY = { min: 0, max: 1 };
    var oBubblePlotOptions = chartConfigOptions.plotOptions.bubble;
    var oSeries = chartConfigOptions.series;
    var iSeriesCounter = 0;
    var iSeriesLength = oSeries.length;
    var iCounter = 0;
    var iLength = 0;
    for (iSeriesCounter = 0; iSeriesCounter < iSeriesLength; iSeriesCounter += 1) {
        if (isSeriesEnabled(oSeries, iSeriesCounter)) {
            oDataInfoX = MAQ.getMinMax(oSeries[iSeriesCounter].data.scaleX, oDataInfoX.min, oDataInfoX.max);
            oDataInfoY = MAQ.getMinMax(oSeries[iSeriesCounter].data.scaleY, oDataInfoY.min, oDataInfoY.max);
        }
        if (oBubblePlotOptions.consistentBubble === true) {
            oSeries[iSeriesCounter].data.radius = oSeries[iSeriesCounter].data.radius.map(function () { return oBubblePlotOptions.radius; });
        }
    }
    if (oDataInfoX.max && oDataInfoY.max) {
        var oNormalizedDataYAxis = MAQ.getNormalized_Min_Max_Interval(oDataInfoY.min, oDataInfoY.max, chartConfigOptions.yAxis.numberOfGridLines);
        var oNormalizedDataXAxis = MAQ.getNormalized_Min_Max_Interval(oDataInfoX.min, oDataInfoX.max, chartConfigOptions.xAxis.numberOfGridLines);
        oNormalizedDataXAxis.sum = oNormalizedDataXAxis.max + Math.abs(oNormalizedDataXAxis.min);
        oNormalizedDataYAxis.sum = oNormalizedDataYAxis.max + Math.abs(oNormalizedDataYAxis.min);
        var oxAxisSeries = chartConfigOptions.xAxis.labels.series = [];
        var iStartX = oNormalizedDataXAxis.min;
        iLength = oNormalizedDataXAxis.sum / oNormalizedDataXAxis.interval;
        for (iCounter = 0; iCounter <= iLength; iCounter += 1) {
            oxAxisSeries.push(iStartX);
            iStartX += oNormalizedDataXAxis.interval;
        }
        chartConfigOptions.plotOptions.bubble.normalizedData = oNormalizedDataYAxis;
        MAQ.drawAxis(chartConfigOptions);
        chartConfigOptions.availWidth += chartConfigOptions.plotIntervalWidth;
        var oClipAttr = {
            id: 'myclippath'
        }
        oGrpELE = MAQ.createSVGElement(chartConfigOptions.svgNS, 'clipPath', oClipAttr);
        var oClipRectAttr = {
            x: 0,
            y: 0,
            width: chartConfigOptions.availWidth,
            height: chartConfigOptions.availHeight
        };
        oGrpELE.appendChild(MAQ.createSVGElement(chartConfigOptions.svgNS, 'rect', oClipRectAttr));
        chartConfigOptions.svgELE.appendChild(oGrpELE);
        var oAttr = {
            'class': 'MAQCharts-plotArea',
            transform: 'translate(' + chartConfigOptions.availX + ',' + chartConfigOptions.availY + ')',
            opacity: 0,
            'clip-path': 'url(#myclippath)'
        };
        oGrpELE = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oAttr);
        chartConfigOptions.svgELE.appendChild(oGrpELE);
        var iHeightFactor = chartConfigOptions.availHeight / (Math.abs(oNormalizedDataYAxis.min) + oNormalizedDataYAxis.max);
        var iWidthFactor = chartConfigOptions.availWidth / (Math.abs(oNormalizedDataXAxis.min) + oNormalizedDataXAxis.max);
        var iZeroXAxis = (oNormalizedDataXAxis.min / oNormalizedDataXAxis.sum) * chartConfigOptions.availWidth;
        iZeroXAxis = Math.abs(iZeroXAxis);
        var iZeroYAxis = (oNormalizedDataYAxis.max / oNormalizedDataYAxis.sum) * chartConfigOptions.availHeight;
        var oBubbleAttr = {
            cx: 0,
            cy: 0,
            r: 0,
            fill: '#0066CC',
            opacity: oBubblePlotOptions.opacity,
            stroke: oBubblePlotOptions.borderColor,
            'stroke-width': oBubblePlotOptions.borderWidth,
            'stroke-dasharray': MAQ.computeStrokeDashStyle(oBubblePlotOptions.borderDashStyle)
        };
        for (iSeriesCounter = 0; iSeriesCounter < iSeriesLength; iSeriesCounter += 1) {
            oAttr = {
                'class': 'MAQCharts-plotArea-bubbleChart-' + (iSeriesCounter + 1),
            };
            oGrpBubbleChart = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oAttr);
            oGrpELE.appendChild(oGrpBubbleChart);

            if (oBubblePlotOptions.color[iSeriesCounter]) {
                oBubbleAttr.fill = oBubblePlotOptions.color[iSeriesCounter];
                oBubbleAttr.stroke = oBubblePlotOptions.color[iSeriesCounter];
            }
            else {
                oBubbleAttr.fill = oBubblePlotOptions.color[iSeriesCounter % oBubblePlotOptions.color.length];
                oBubbleAttr.stroke = oBubblePlotOptions.color[iSeriesCounter % oBubblePlotOptions.color.length];
            }


            var oDataArray = oSeries[iSeriesCounter].data;
            iLength = oDataArray.scaleX.length;
            var iXcord = 0;
            var iYcord = 0;
            for (iCounter = 0; iCounter < iLength; iCounter += 1) {
                if (isSeriesEnabled(oSeries, iSeriesCounter)) {
                    var height = iHeightFactor * Math.abs(oDataArray.scaleY[iCounter]);
                    var width = iWidthFactor * Math.abs(oDataArray.scaleX[iCounter]);
                    iYcord = iZeroYAxis - height;
                    if (oDataArray.scaleY[iCounter] < 0) {
                        iYcord = iYcord + (2 * height);
                    }
                    if (oDataArray.scaleX[iCounter] >= 0) {
                        iXcord = iZeroXAxis + width;
                    } else {
                        iXcord = iZeroXAxis - width;
                    }

                    if (iSeriesLength == 1) {
                        if (oBubblePlotOptions.color[iCounter]) {
                            oBubbleAttr.fill = oBubblePlotOptions.color[iCounter];
                            oBubbleAttr.stroke = oBubblePlotOptions.color[iCounter];
                        }
                        else {
                            oBubbleAttr.fill = oBubblePlotOptions.color[iCounter % oBubblePlotOptions.color.length];
                            oBubbleAttr.stroke = oBubblePlotOptions.color[iCounter % oBubblePlotOptions.color.length];
                        }
                    }
                    oBubbleAttr.cx = Math.abs(iXcord);
                    oBubbleAttr.cy = iYcord;
                    oBubbleAttr.r = oDataArray.radius[iCounter];
                    var oBubble = MAQ.createSVGElement(chartConfigOptions.svgNS, 'circle', oBubbleAttr);
                    oGrpBubbleChart.appendChild(oBubble);
                    var oParam = {
                        seriesIndex: iSeriesCounter,
                        isPosavail: true,
                        position: iCounter,
                        config: chartConfigOptions
                    };
                    if (chartConfigOptions.tooltip.enabled) {
                        var oToolTip = chartConfigOptions.tooltipDiv;
                        MAQ.addEventListener(oBubble, 'mousemove', 'showToolTip', oParam);
                        oBubble.addEventListener('mouseout', function () { oToolTip.style.display = 'none'; }, true);
                    }
                }
            }
        }
        MAQ.animateElement(oGrpELE, 'opacity', 1, 1000);
    }
};

/*
MAQ.createTimelineChart: Renders timeline chart
@param {chartConfigOptions} user configuration parameters
*/
MAQ.createTimelineChart = function (chartConfigOptions) {
    chartConfigOptions.isTimeLineChart = true;
    var iCurrentWidth = chartConfigOptions.availWidth;
    var iCurrentHeight = chartConfigOptions.availHeight / 4;
    chartConfigOptions.heightRatio = iCurrentHeight;
    var oSVGELE = chartConfigOptions.svgELE;
    chartConfigOptions.originalSVGELE = oSVGELE;

    var oDisplayAreaOptions = { xAxis: {}, yAxis: {} };
    for (x in chartConfigOptions) {
        MAQ.mergeObjects(x, oDisplayAreaOptions, chartConfigOptions);
    }

    /* ------------------------ NAVIGATOR AREA START ------------------------- */
    chartConfigOptions.availX = oDisplayAreaOptions.availX;
    var oGrpNavigatorAttr = {
        'class': 'MAQCharts-TimeLineNavigator',
        transform: 'translate(' + chartConfigOptions.availX + ',' + (iCurrentHeight * 3) + ')'
    };
    var oGrpNavigator = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oGrpNavigatorAttr);
    chartConfigOptions.svgELE.appendChild(oGrpNavigator);
    chartConfigOptions.availWidth = iCurrentWidth;
    chartConfigOptions.availHeight = iCurrentHeight;
    chartConfigOptions.chart.type = 'area';
    chartConfigOptions.tooltip.enabled = false;
    var yAxis = chartConfigOptions.yAxis;
    var xAxis = chartConfigOptions.xAxis;

    var xLabelFill = xAxis.labels.style.fill;
    var xTitleFill = xAxis.title.style.fill;
    var yLabelFill = yAxis.labels.style.fill;
    var yTitleFill = yAxis.title.style.fill;

    yAxis.gridLineColor = yAxis.tickColor = yAxis.lineColor = yAxis.labels.style.fill = yAxis.title.style.fill = 'transparent';
    xAxis.tickColor = xAxis.lineColor = xAxis.labels.style.fill = xAxis.title.style.fill = 'transparent';
    xAxis.tickHeight = xAxis.tickWidth = 0;
    xAxis.labels.enabled = false;

    chartConfigOptions.svgELE = oGrpNavigator;
    MAQ.createAreaChart(chartConfigOptions);
    var fNavigatorX = chartConfigOptions.availX;
    var fNavigatorY = chartConfigOptions.availY;
    var fNavigatorWidth = Math.round(chartConfigOptions.availWidth);
    var fNavigatorHeight = chartConfigOptions.availHeight;
    var oGrpRangeSelectorAttr = {
        'class': 'MAQCharts-RangeSelector',
        transform: 'translate(' + fNavigatorX + ',' + fNavigatorY + ')'
    };
    var oGrpRangeSelector = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oGrpRangeSelectorAttr);
    oGrpNavigator.appendChild(oGrpRangeSelector);

    fNavigatorX = 0;
    fNavigatorY = 0;
    var oRectAttr = {
        x: 0,
        y: fNavigatorY,
        width: 150,
        height: fNavigatorHeight,
        'pointer-events': 'visibleFill',
        fill: 'transparent',

    };
    var oExpandedLeftAttr = {
        height: 20,
        width: 15,
        fill: '#0066CC'
    };
    oExpandedLeftAttr.x = oRectAttr.x - (oExpandedLeftAttr.width / 2);
    oExpandedLeftAttr.y = fNavigatorY + (oRectAttr.height / 2) - (oExpandedLeftAttr.height / 2);

    var oExpandedRightAttr = {
        height: 20,
        width: 15,
        fill: '#0066CC'
    };
    oExpandedRightAttr.x = (oRectAttr.x + oRectAttr.width) - (oExpandedLeftAttr.width / 2);
    oExpandedRightAttr.y = fNavigatorY + (oRectAttr.height / 2) - (oExpandedRightAttr.height / 2);

    var oDimmerAttr = {
        d: '',
        fill: 'silver',
        stroke: 'silver',
        opacity: 0.5
    };
    oDimmerAttr.d = ' M ' + fNavigatorX + ',' + (fNavigatorHeight + fNavigatorY)
                    + ' L ' + fNavigatorX + ',' + fNavigatorY
                    + ' L ' + oRectAttr.x + ',' + oRectAttr.y
                    + ' L ' + oRectAttr.x + ',' + (oRectAttr.y + oRectAttr.height)
                    + ' L ' + (oRectAttr.x + oRectAttr.width) + ',' + (oRectAttr.y + oRectAttr.height)
                    + ' L ' + (oRectAttr.x + oRectAttr.width) + ',' + oRectAttr.y
                    + ' L ' + (fNavigatorX + fNavigatorWidth) + ',' + oRectAttr.y
                    + ' L ' + (fNavigatorX + fNavigatorWidth) + ',' + (fNavigatorHeight + fNavigatorY) + ' Z';

    oRect = MAQ.createSVGElement(chartConfigOptions.svgNS, 'rect', oRectAttr);
    var oExpanderLeft = MAQ.createSVGElement(chartConfigOptions.svgNS, 'rect', oExpandedLeftAttr);
    var oExpanderRight = MAQ.createSVGElement(chartConfigOptions.svgNS, 'rect', oExpandedRightAttr);
    var oDimmerPath = MAQ.createSVGElement(chartConfigOptions.svgNS, 'path', oDimmerAttr);

    oGrpRangeSelector.appendChild(oDimmerPath);
    oGrpRangeSelector.appendChild(oRect);
    oGrpRangeSelector.appendChild(oExpanderLeft);
    oGrpRangeSelector.appendChild(oExpanderRight);

    MAQ.addAttr(oExpanderLeft, 'desc', 'left');
    MAQ.addAttr(oExpanderRight, 'desc', 'right');

    var oParam = {
        x: fNavigatorX,
        y: fNavigatorY,
        width: fNavigatorWidth,
        height: fNavigatorHeight,
        navigator: oRect,
        dimmer: oDimmerPath,
        expanderLeft: oExpanderLeft,
        expanderRight: oExpanderRight,
        expanderWidth: oExpandedRightAttr.width,
        panel: oGrpRangeSelector,
        config: chartConfigOptions,
        maxX: (fNavigatorX + fNavigatorWidth),
    };

    MAQ.addEventListener(oGrpRangeSelector, 'mouseup', 'stretcherMouseUp', oParam);
    MAQ.addEventListener(oRect, 'mousedown', 'navigatorMouseDown', oParam);

    MAQ.addEventListener(oExpanderLeft, 'mousedown', 'stretcherMouseDown', oParam);
    MAQ.addEventListener(oExpanderLeft, 'mouseup', 'stretcherMouseUp', oParam);

    MAQ.addEventListener(oExpanderRight, 'mousedown', 'stretcherMouseDown', oParam);
    MAQ.addEventListener(oExpanderRight, 'mouseup', 'stretcherMouseUp', oParam);
    /* ------------------------ NAVIGATOR AREA END ------------------------- */

    chartConfigOptions.availX = oDisplayAreaOptions.availX;
    chartConfigOptions.availY = oDisplayAreaOptions.availY;
    chartConfigOptions.availWidth = oDisplayAreaOptions.availWidth;
    chartConfigOptions.xAxis = oDisplayAreaOptions.xAxis;
    chartConfigOptions.yAxis = oDisplayAreaOptions.yAxis;
    xAxis.labels.enabled = true;
    xAxis.labels.style.fill = xLabelFill;
    xAxis.title.style.fill = xTitleFill;
    yAxis.labels.style.fill = yLabelFill;
    yAxis.title.style.fill = yTitleFill;
    chartConfigOptions.svgELE = oSVGELE;
    chartConfigOptions.plotOptions.line.stepLine = chartConfigOptions.plotOptions.timeline.stepLine;
    chartConfigOptions.originalSeries = {};
    chartConfigOptions.originalSeries.data = chartConfigOptions.series[0].data.slice(0);
    chartConfigOptions.originalSeries.timeline = chartConfigOptions.series[0].timeline.slice(0);

    var fNavigatorShiftRatio = chartConfigOptions.series[0].data.length / fNavigatorWidth;
    chartConfigOptions.plotOptions.timeline.shiftRatio = fNavigatorShiftRatio;
    MAQ.updateTimeLineDisplayArea(chartConfigOptions, oRectAttr.x, (oRectAttr.x + oRectAttr.width));
};

/*
MAQ.updateTimeLineDisplayArea: Updates timeline chart
@param {chartConfigOptions} user configuration parameters
@param {start} start co-ordinate of navigator
@param {end} end co-ordinate of navigator
*/
MAQ.updateTimeLineDisplayArea = function (chartConfigOptions, start, end) {
    var fNavigatorShiftRatio = chartConfigOptions.plotOptions.timeline.shiftRatio;
    var iStartIndex = fNavigatorShiftRatio * start;
    var iEndIndex = fNavigatorShiftRatio * end;
    chartConfigOptions.xAxis.labels.series = [];
    chartConfigOptions.series[0].data = chartConfigOptions.originalSeries.data.slice(0);
    chartConfigOptions.series[0].timeline = chartConfigOptions.originalSeries.timeline.slice(0);
    chartConfigOptions.series[0].data = chartConfigOptions.series[0].data.slice(Math.round(iStartIndex), Math.round(iEndIndex));
    chartConfigOptions.series[0].timeline = chartConfigOptions.series[0].timeline.slice(Math.round(iStartIndex), Math.round(iEndIndex));
    var oSeriesTimeline = chartConfigOptions.series[0].timeline;
    var iLength = oSeriesTimeline.length;
    var iNumberOfLabels = chartConfigOptions.plotOptions.timeline.xAxisLabelCount;
    var iDiff = Math.round((oSeriesTimeline[iLength - 1] - oSeriesTimeline[0]) / iNumberOfLabels);
    var iStartDate = oSeriesTimeline[0];
    var iNextDate = iStartDate + iDiff;
    var iMaxDiff = Number.MAX_VALUE;
    var iExactNextDate = 0;
    oSeriesTimeline.forEach(function (x, i, a) {
        if (iMaxDiff > Math.abs(x - iNextDate)) {
            iMaxDiff = Math.abs(x - iNextDate);
            iExactNextDate = x;
        }
    });
    var iIndexPos = oSeriesTimeline.indexOf(iExactNextDate);
    if (Math.round(iLength / iIndexPos) > iNumberOfLabels) {
        iIndexPos -= 1;
    }
    /* ------------------------ DISPLAY AREA START ------------------------- */
    var oGrpDisplayArea = chartConfigOptions.plotOptions.timeline.displayArea;
    if (oGrpDisplayArea) {
        MAQ.removeAllChildren(oGrpDisplayArea);
    } else {
        var oGrpDisplayChartAttr = {
            'class': 'MAQCharts-TimeLineDisplayArea'
        };
        oGrpDisplayArea = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oGrpDisplayChartAttr);
        chartConfigOptions.svgELE.appendChild(oGrpDisplayArea);
        chartConfigOptions.plotOptions.timeline.displayArea = oGrpDisplayArea;
    }
    var oDisplayAreaOptions = {};
    for (x in chartConfigOptions) {
        MAQ.mergeObjects(x, oDisplayAreaOptions, chartConfigOptions);
    }
    chartConfigOptions.tooltip.enabled = true;
    chartConfigOptions.availHeight = chartConfigOptions.heightRatio * 3;
    chartConfigOptions.svgELE = oGrpDisplayArea;
    chartConfigOptions.xAxis.skipInterval = iIndexPos;
    chartConfigOptions.chart.type = 'line';
    MAQ.createLineChart(chartConfigOptions);
    chartConfigOptions.chart.type = 'timeline';
    /* ------------------------ DISPLAY AREA END ------------------------- */
    chartConfigOptions.availX = oDisplayAreaOptions.availX;
    chartConfigOptions.availY = oDisplayAreaOptions.availY;
    chartConfigOptions.availWidth = oDisplayAreaOptions.availWidth;
    chartConfigOptions.svgELE = chartConfigOptions.originalSVGELE;
};

/*
MAQ.addEventListener: Attaches code to object's event
@param {oELE} object to attach event
@param {sEventName} event name
@param {sFunctionName} function name
@param {oParam} parameters object
*/
MAQ.addEventListener = function (oELE, sEventName, sFunctionName, oParam) {
    oELE.addEventListener(sEventName, function (event) { window[sFunctionName](event, oParam); }, true);
};

/*
MAQ.removeEventListener: Removes code from object's event
@param {oELE} object to attach event
@param {sEventName} event name
@param {sFunctionName} function name
@param {oParam} parameters object
*/
MAQ.removeEventListener = function (oELE, sEventName, sFunctionName, oParam) {
    oELE.removeEventListener(sEventName, function (event) { window[sFunctionName](event, oParam); }, true);
};

/*
MAQ.getDataIndexPosition: Gets the current data index based on mouse pointer position on SVG
@param {oSVGCord} SVG coordinates
@param {oCalCord} Calculated coordinates
@param {fInterval} step interval on x axis
*/
MAQ.getDataIndexPosition = function (oSVGCord, oCalCord, fInterval) {
    var fPt1 = oSVGCord.x - fInterval;
    var fPt2 = oSVGCord.x + fInterval;
    var oFilterData = oCalCord.filter(function (x) { return x > fPt1 && x < fPt2; });
    if (oFilterData.length === 1) {
        return oCalCord.indexOf(oFilterData[0]);
    } else {
        fPt1 = oSVGCord.x - oFilterData[0];
        fPt2 = oFilterData[1] - oSVGCord.x;
        if (fPt1 < fPt2) {
            return oCalCord.indexOf(oFilterData[0]);
        } else {
            return oCalCord.indexOf(oFilterData[1]);
        }
    }
};

/*
MAQ.getMousePos: Gets the current mouse pointer position
@param {obj} object
@param {evt} event
*/
function getMousePos(obj, evt) {
    // get canvas position
    var top = 0;
    var left = 0;
    while (obj.tagName != 'BODY') {
        top += obj.offsetTop;
        left += obj.offsetLeft;
        obj = obj.offsetParent;
    }

    // return relative mouse position
    var mouseX = evt.clientX - left + window.pageXOffset;
    var mouseY = evt.clientY - top + window.pageYOffset;
    return {
        x: mouseX,
        y: mouseY
    };
}

/*
MAQ.showToolTip: Renders the tooltip on SVG
@param {evt} event
@param {oParam} user configuration parameters and series parameters
*/
function showToolTip(evt, oParam) {
    var oConfig = oParam.config;
    var oSVG = oConfig.svgELE;
    var fInterval = oConfig.plotIntervalWidth;

    var oCord = getMousePos(oConfig.container, evt);
    var oToolTip = oConfig.tooltipDiv;
    oToolTip.style.display = 'block';
    oToolTip.style.zIndex = 20;

    if (!oParam.type) {
        var oSeries = oConfig.series[oParam.seriesIndex];
        var oLabels = oConfig.series.label;
        var oPoint = oSVG.createSVGPoint();
        oPoint.x = evt.clientX;
        oPoint.y = evt.clientY;
        var oSVGCord = oPoint.matrixTransform(oSVG.getScreenCTM().inverse());
        var iSelectedIndex = 0;
        if (oParam.isPosavail) {
            iSelectedIndex = oParam.position;
        } else {
            iSelectedIndex = MAQ.getDataIndexPosition(oSVGCord, oSeries.xPos, fInterval);
        }
        var sToolTipFunctionName = oConfig.tooltip.customTooltip;
        if (sToolTipFunctionName) {
            var oExtParam = {
                seriesIndex: oParam.seriesIndex,
                dataIndex: iSelectedIndex,
                chartOptions: oConfig
            };
            oToolTip.innerHTML = MAQ.applyFormatter(oExtParam, sToolTipFunctionName);
        } else {
            var sChartType = oConfig.chart.type;
            switch (sChartType) {
                case 'pie':
                case 'donut':
                case 'funnel':
                    oSeries = oConfig.series[iSelectedIndex];
                    oToolTip.innerHTML = '<b>' + oSeries.name + ': </b>' + Math.round(oSeries.data * 100) / 100;
                    break;
                case 'stock':
                    oToolTip.innerHTML = '<b>' + oLabels[iSelectedIndex] + ': </b><br/>'
                        + 'Low: ' + Math.round(oSeries.low[iSelectedIndex] * 100) / 100 + '<br />'
                        + 'High: ' + Math.round(oSeries.high[iSelectedIndex] * 100) / 100 + '<br />'
                        + 'Open: ' + Math.round(oSeries.open[iSelectedIndex] * 100) / 100 + '<br />'
                        + 'Close: ' + Math.round(oSeries.close[iSelectedIndex] * 100) / 100;
                    break;
                case 'bubble':
                    if (oConfig.plotOptions.bubble.consistentBubble) {
                        oToolTip.innerHTML = '<b>' + oSeries.name + '</b><br/>'
                        + '<b>Scale-x value: </b>' + Math.round(oSeries.data.scaleX[iSelectedIndex] * 100) / 100
                        + '<br/><b>Scale-y value: </b>' + Math.round(oSeries.data.scaleY[iSelectedIndex] * 100) / 100;
                    }
                    else {
                        oToolTip.innerHTML = '<b>' + oSeries.name + '</b><br/>'
                        + '<b>Scale-x value: </b>' + Math.round(oSeries.data.scaleX[iSelectedIndex] * 100) / 100
                        + '<br/><b>Scale-y value: </b>' + Math.round(oSeries.data.scaleY[iSelectedIndex] * 100) / 100
                        + '<br/><b>Bubble Size: </b>' + Math.round(oSeries.data.radius[iSelectedIndex] * 100) / 100;
                    }
                    break;
                    //case 'point':
                    //    oToolTip.innerHTML = '<b>' + oSeries.name + '</b><br/>'
                    //        + '<b>Scale-x value: </b>' + oSeries.data[iSelectedIndex][0]
                    //        + '<br/><b>Scale-y value: </b>' + oSeries.data[iSelectedIndex][1]
                    //    break;
                case 'spiderWeb':
                    oToolTip.innerHTML = '<b>' + oSeries.name + '</b><br/>';
                    var iLen = oSeries.data.length;
                    for (i = 0; i < iLen; i++) {
                        oToolTip.innerHTML += oConfig.plotOptions.spiderWeb.axis.labels.series[i] + ': ' + Math.round(oSeries.data[i] * 100) / 100 + '<br/>';
                    }
                    break;
                case 'combolinecolumn':
                    var tempValue;
                    if (oConfig.tooltip.seriesLevelTooltip) {
                        var iLen = oConfig.series.length;
                        tempValue = '<b>' + oLabels[iSelectedIndex] + '</b>', oSeries;
                        for (i = 0; i < iLen; i++) {
                            oSeries = oConfig.series[i]
                            tempValue += '<br/>' + oSeries.name + ': ' + Math.round(oSeries.data[iSelectedIndex] * 100) / 100;
                        }
                    }
                    else {
                        tempValue = '<b>' + oSeries.name + '</b><br/>'
                                 + oLabels[iSelectedIndex] + ': ' + Math.round(oSeries.data[iSelectedIndex] * 100) / 100;
                    }
                    oToolTip.innerHTML = tempValue;
                    break;
                default:
                    oToolTip.innerHTML = '<b>' + oSeries.name + '</b><br/>'
                                 + oLabels[iSelectedIndex] + ': ' + Math.round(oSeries.data[iSelectedIndex] * 100) / 100;
                    break;
            }
        }
    }
    else {
        oToolTip.innerHTML = oParam.value;
    }
    var fTopCordinate = oCord.y - oToolTip.clientHeight - 5;
    if (fTopCordinate <= 10) {
        fTopCordinate = oCord.y + 10;
    }
    var fLeftCordinate = oCord.x - oToolTip.clientWidth - 10;
    if (fLeftCordinate <= 10) {
        fLeftCordinate = oCord.x + 10;
    }
    oToolTip.style.top = fTopCordinate + 'px';
    oToolTip.style.left = fLeftCordinate + 'px';
}

/*
MAQ.slicePie: Slice the pie in pie chart
@param {evt} event
@param {oPieSlice} pie object to be sliced
*/
function slicePie(evt, oPieSlice) {
    var oCurrentELE = evt.srcElement;
    if (!oCurrentELE.getAttribute('transform')) {
        if (oPieSlice.resetPrev === true) {
            var oChildNodes = oPieSlice.parent.childNodes;
            var iCounter = 0;
            var iLength = oChildNodes.length;
            for (iCounter = 0; iCounter < iLength; iCounter += 1) {
                oChildNodes[iCounter].setAttribute('transform', '');
            }
        }
        MAQ.addAttr(oCurrentELE, 'transform', 'translate(' + (oPieSlice.tX - oPieSlice.centerX) +
        ', ' + (oPieSlice.tY - oPieSlice.centerY) + ')');
    } else {
        oCurrentELE.setAttribute('transform', '');
    }
}

/*
MAQ.showToolTip: Renders the tooltip on SVG
@param {event} event
@param {oParam} group parameter
*/
function disableGroup(event, oParam) {
    var oCurrentGrp = oParam.config.groupObjectArray[oParam.grpNumber];
    var sDisplay = oCurrentGrp.style.display;
    if (sDisplay !== 'none') {
        oCurrentGrp.style.display = 'none';
    } else {
        oCurrentGrp.style.display = 'block';
    }
}

/*
MAQ.createSpiderWebChart: Renders spider web chart
@param {chartConfigOptions} user configuration parameters
*/
MAQ.createSpiderWebChart = function (chartConfigOptions) {
    var oSeries = chartConfigOptions.series;
    MAQ.drawLegend(chartConfigOptions);
    MAQ.applyMargin(chartConfigOptions, chartConfigOptions.chart.margin);

    //var oDataInfo = { min: 0, max: 0 };
    var iCounter = 0;
    var iLength = oSeries.length;

    var oDataInfo = [];
    for (iCounter = 0; iCounter < iLength; iCounter++) {
        oDataInfo[iCounter] = { min: 0, max: 1 };
    }
    var iGlobalMax = 1;

    var flag = 0, process = true;
    var posX = [], posY = [];

    for (iCounter = 0; iCounter < iLength; iCounter += 1) {
        if (isSeriesEnabled(oSeries, iCounter)) {
            oDataInfo[iCounter] = MAQ.getMinMax(oSeries[iCounter].data, oDataInfo[iCounter].min, oDataInfo[iCounter].max);
            iGlobalMax < oDataInfo[iCounter].max ? iGlobalMax = oDataInfo[iCounter].max : iGlobalMax = iGlobalMax;
        }
    }
    var oAttr = {
        'class': 'MAQCharts-plotArea',
        transform: 'translate(' + chartConfigOptions.availX + ',' + chartConfigOptions.availY + ')',
        opacity: 0
    };
    oGrpELE = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oAttr);
    chartConfigOptions.svgELE.appendChild(oGrpELE);
    if (iGlobalMax > 0) {
        var fAvailHeight = chartConfigOptions.availHeight,
            fAvailWidth = chartConfigOptions.availWidth,
            fCenterX = fAvailWidth / 2,
            fCenterY = fAvailHeight / 2;
        var fRadius = Math.min(fAvailHeight, fAvailWidth) / 2;
        fRadius = fRadius * 0.7;

        MAQ.addAttr(oGrpELE, 'transform', 'translate(' + (chartConfigOptions.availX + fCenterX) + ', ' + (chartConfigOptions.availY + fCenterY) + ')');

        var oPiePlotOptions = chartConfigOptions.plotOptions.spiderWeb;
        var oPathAttr = {
            r: 0,
            cx: 0,
            cy: 0,
            fill: 'none',
            stroke: '#ebebeb',
            'stroke-width': oPiePlotOptions.lineWidth
        };

        var oCircle,
            oCircleGroupAttr = {
                'class': 'bgCircleGroup'
            },
            oCircleGroup = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oCircleGroupAttr);

        oGrpELE.appendChild(oCircleGroup);

        for (iCount = oPiePlotOptions.axis.numberOfGridLines; iCount >= 0; iCount--) {
            oPathAttr.r = fRadius * iCount / oPiePlotOptions.axis.numberOfGridLines;
            oCircle = MAQ.createSVGElement(chartConfigOptions.svgNS, 'circle', oPathAttr);
            oCircleGroup.appendChild(oCircle);
        }

        var fDegree = 0,
            xPos = 0,
            yPos = 0;

        var numOfColors = oPiePlotOptions.color.length;
        oPiePlotOptions.degrees = [];

        var numOfAxis = oPiePlotOptions.axis.labels.series.length;
        var fIncrementDegree = 2 * Math.PI / numOfAxis;

        var oAxisGroupAttr = {
            'class': 'bgAxisGroup'
        },
            oAxisGroup = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oAxisGroupAttr);

        oGrpELE.appendChild(oAxisGroup);

        var oSpiderLineAttr = {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            stroke: oPiePlotOptions.axis.lineColor,
            'stroke-width': oPiePlotOptions.axis.lineWidth
        },
        oSpiderLine;
        fRadius += 10;

        for (iCount = 0; iCount < numOfAxis; iCount++) {
            oSpiderLineAttr.x2 = fRadius * Math.sin(fDegree);
            oSpiderLineAttr.y2 = -fRadius * Math.cos(fDegree);
            oSpiderLine = MAQ.createSVGElement(chartConfigOptions.svgNS, 'line', oSpiderLineAttr);
            oAxisGroup.appendChild(oSpiderLine);

            var oSpiderLabelStyles = {
                x: (fRadius + 5) * Math.sin(fDegree),
                y: -(fRadius + 5) * Math.cos(fDegree),
                style: oPiePlotOptions.axis.labels.style
            };

            var oSpiderLabel = MAQ.createSVGElement(chartConfigOptions.svgNS, 'text', oSpiderLabelStyles);
            var oTextNode = document.createTextNode(oPiePlotOptions.axis.labels.series[iCount]);
            oSpiderLabel.appendChild(oTextNode);
            oAxisGroup.appendChild(oSpiderLabel);

            var oLabelBox = oSpiderLabel.getBBox();
            if (3 < Math.abs(fDegree - Math.PI) || 1 > Math.abs(fDegree - Math.PI)) {
                MAQ.addAttr(oSpiderLabel, 'dx', -oLabelBox.width / 2 - 3);
            }
            else if (oSpiderLabelStyles.x > 0) {
                MAQ.addAttr(oSpiderLabel, 'dx', 3);
            }
            else {
                MAQ.addAttr(oSpiderLabel, 'dx', -oLabelBox.width - 3);
            }

            if (oSpiderLabelStyles.y < 0) {
                MAQ.addAttr(oSpiderLabel, 'dy', 2);
            }
            else {
                MAQ.addAttr(oSpiderLabel, 'dy', oLabelBox.height / 2 - 2);
            }

            fDegree += fIncrementDegree;

        }

        var oCurrentSeries, iCurrentSeriesLength;
        fRadius -= 10;

        for (i = 0; i < iLength; i += 1) {
            if (isSeriesEnabled(oSeries, i)) {
                oCurrentSeries = oSeries[i].data;
                iCurrentSeriesLength = oCurrentSeries.length;

                var oSpiderPathAttr = {
                    d: '',
                    fill: 'none',
                    stroke: oPiePlotOptions.color[i],
                    'stroke-width': oPiePlotOptions.lineWidth
                },
                oSpiderPath,
                fDegree = 0,
                oSpiderPathPointAttr = {
                    cx: '',
                    cy: '',
                    r: '2.5',
                    fill: oPiePlotOptions.color[i],
                    stroke: oPiePlotOptions.color[i],
                    'stroke-width': '1'
                },
                oSpiderPathPoint;

                for (iSeriesIndex = 0; iSeriesIndex < iCurrentSeriesLength; iSeriesIndex++) {
                    xPos = oCurrentSeries[iSeriesIndex] / oDataInfo[i].max * fRadius * Math.sin(fDegree);
                    yPos = -oCurrentSeries[iSeriesIndex] / oDataInfo[i].max * fRadius * Math.cos(fDegree);
                    if (!iSeriesIndex) {
                        oSpiderPathAttr.d = 'M ' + xPos + "," + yPos;
                    }
                    else {
                        oSpiderPathAttr.d += ' L ' + xPos + "," + yPos;
                    }
                    fDegree += fIncrementDegree;

                    oSpiderPathPointAttr.cx = xPos;
                    oSpiderPathPointAttr.cy = yPos;
                    oSpiderPathPoint = MAQ.createSVGElement(chartConfigOptions.svgNS, 'circle', oSpiderPathPointAttr);
                    oGrpELE.appendChild(oSpiderPathPoint);
                }
                oSpiderPathAttr.d += ' z';

                oSpiderPath = MAQ.createSVGElement(chartConfigOptions.svgNS, 'path', oSpiderPathAttr);
                oGrpELE.appendChild(oSpiderPath);

                var oParam = {
                    seriesIndex: i,
                    isPosavail: true,
                    position: 0,
                    config: chartConfigOptions
                };
                if (chartConfigOptions.tooltip.enabled) {
                    var oToolTip = chartConfigOptions.tooltipDiv;
                    MAQ.addEventListener(oSpiderPath, 'mousemove', 'showToolTip', oParam);
                    oSpiderPath.addEventListener('mouseout', function () { oToolTip.style.display = 'none'; }, true);
                }
            }
        }
        MAQ.animateElement(oGrpELE, 'opacity', 1, 2500);
    }
};

/*
MAQ.createComboLineColumnChart: Renders combo line column chart
@param {chartConfigOptions} user configuration parameters
*/
MAQ.createComboLineColumnChart = function (chartConfigOptions) {

    var oSeries = chartConfigOptions.series;
    MAQ.drawLegend(chartConfigOptions);
    MAQ.drawXAxisTitle(chartConfigOptions);
    MAQ.drawYAxisTitle(chartConfigOptions);

    MAQ.applyMargin(chartConfigOptions, chartConfigOptions.chart.margin);
    var oColumnPlotOptions = chartConfigOptions.plotOptions.combolinecolumn.column;
    var iCounter = 0, iSeriesLength = oSeries.length, iBarSeriesLength = 0;

    var oDataInfoSeriesLeft = { min: 0, max: 1 }, oDataInfoSeriesRight = { min: 0, max: 1 };
    for (iSeriesCounter = 0; iSeriesCounter < iSeriesLength; iSeriesCounter += 1) {
        switch (oSeries[iSeriesCounter].yAxis) {
            case 1:
                if (isSeriesEnabled(oSeries, iSeriesCounter)) {
                    oDataInfoSeriesLeft = MAQ.getMinMax(oSeries[iSeriesCounter].data, oDataInfoSeriesLeft.min, oDataInfoSeriesLeft.max, 'data');
                }
                break;
            case 2:
                if (isSeriesEnabled(oSeries, iSeriesCounter)) {
                    oDataInfoSeriesRight = MAQ.getMinMax(oSeries[iSeriesCounter].data, oDataInfoSeriesRight.min, oDataInfoSeriesRight.max, 'data');
                }
                break;
        }
        if (oSeries[iSeriesCounter].type === 'bar') {
            iBarSeriesLength++;
        }
    }

    chartConfigOptions.series.label = chartConfigOptions.xAxis.labels.series;
    if (oColumnPlotOptions.stacked) {
        var oMin = oSeries[0].data.map(function (x) { return x - x; });
        var oMax = oMin.slice(0);
        var oYCord = oMin.slice(0);
        var oNYCord = oMin.slice(0);
        var iLength = chartConfigOptions.series.label.length;
        for (i = 0; i < iLength; i++) {
            for (j = 0; j < iSeriesLength; j++) {
                //if (oSeries[j].type === 'bar') {
                if (oSeries[j].yAxis === 1) {
                    if (isSeriesEnabled(oSeries, j)) {
                        if (oSeries[j].type === 'bar') {
                            if (oSeries[j].data[i] < 0) {
                                oMin[i] += oSeries[j].data[i];
                            }
                            if (oSeries[j].data[i] >= 0) {
                                oMax[i] += oSeries[j].data[i];
                            }
                        }
                        else if (oSeries[j].type === 'line') {
                            if (oSeries[j].data[i] < 0) {
                                oMin[i] = oMin[i] > oSeries[j].data[i] ? oSeries[j].data[i] : oMin[i];
                            }
                            else if (oSeries[j].data[i] >= 0) {
                                oMax[i] = oMax[i] < oSeries[j].data[i] ? oSeries[j].data[i] : oMax[i];
                            }
                        }
                    }
                }
            }
        }
        var oConcatArr = oMax.concat(oMin);
        oDataInfoSeriesLeft.min = Math.min.apply(null, oConcatArr);
        oDataInfoSeriesLeft.max = Math.max.apply(null, oConcatArr);
        oDataInfoSeriesLeft.max = 0 === oDataInfoSeriesLeft.max ? 1 : oDataInfoSeriesLeft.max;
        oDataInfoSeriesLeft.total = eval(oConcatArr.join('+'));
    }

    /* Calculate normalized min/ max values */
    chartConfigOptions.plotOptions.combolinecolumn.normalizedData = [];
    if (oDataInfoSeriesLeft.min || oDataInfoSeriesLeft.max) {
        var oNormalizedDataY1 = MAQ.getNormalized_Min_Max_Interval(oDataInfoSeriesLeft.min, oDataInfoSeriesLeft.max, chartConfigOptions.yAxis.dualyAxis.numberOfGridLines);
        oNormalizedDataY1.sum = oNormalizedDataY1.max + Math.abs(oNormalizedDataY1.min);
        chartConfigOptions.plotOptions.combolinecolumn.normalizedData[0] = oNormalizedDataY1;
    }
    if (oDataInfoSeriesRight.min || oDataInfoSeriesRight.max) {
        var oNormalizedDataY2 = MAQ.getNormalized_Min_Max_Interval(oDataInfoSeriesRight.min, oDataInfoSeriesRight.max, chartConfigOptions.yAxis.dualyAxis.numberOfGridLines);
        oNormalizedDataY2.sum = oNormalizedDataY2.max + Math.abs(oNormalizedDataY2.min);
        chartConfigOptions.plotOptions.combolinecolumn.normalizedData[1] = oNormalizedDataY2;
    }

    MAQ.drawSecondaryYAxis(chartConfigOptions);
    var oAttr = {
        'class': 'MAQCharts-plotArea',
        transform: 'translate(' + chartConfigOptions.availX + ',' + chartConfigOptions.availY + ')'
    };
    oGrpELE = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oAttr);
    chartConfigOptions.svgELE.appendChild(oGrpELE);

    /* Column chart properties */
    var oBarWidth = chartConfigOptions.plotIntervalWidth - oColumnPlotOptions.padding;
    var fGrpPadding = oColumnPlotOptions.groupPadding;
    if (fGrpPadding < 0) {
        fGrpPadding = 0;
    }
    if (fGrpPadding > 100) {
        fGrpPadding = 100;
    }
    fGrpPadding = (fGrpPadding / 100) * oBarWidth;
    if (!oColumnPlotOptions.stacked) {
        oBarWidth = oBarWidth - (fGrpPadding * (iBarSeriesLength - 1));
    }
    MAQ.addAttr(chartConfigOptions.xLabels, 'transform', 'translate(' + ((oBarWidth / 2) + fGrpPadding) + ', 0)');
    if (!oColumnPlotOptions.stacked) {
        oBarWidth = oBarWidth / iBarSeriesLength;
    }
    var oRectAttr = {
        x: 0,
        y: 0,
        rx: oColumnPlotOptions.borderRadius,
        ry: oColumnPlotOptions.borderRadius,
        width: oBarWidth,
        height: 0,
        fill: '',
        'z-index': 5,
        opacity: oColumnPlotOptions.opacity,
        stroke: oColumnPlotOptions.borderColor,
        'stroke-width': oColumnPlotOptions.borderWidth,
        'stroke-dasharray': MAQ.computeStrokeDashStyle(oColumnPlotOptions.borderDashStyle)
    };

    var oValueBoxAttr = {
        x: 0,
        y: 0,
        text: null,
        'text-anchor': 'middle',
        style: oColumnPlotOptions.valueBox.style
    }

    /* Line chart properties */
    var oLinePlotOptions = chartConfigOptions.plotOptions.combolinecolumn.line;
    var oMarker = oLinePlotOptions.marker;
    var bShowMarker = oMarker.enabled;
    if (bShowMarker) {
        var oCircleAttr = {
            cx: 0,
            cy: 0,
            r: oMarker.width,
            fill: oMarker.fillColor,
            'z-index': 10,
            stroke: oMarker.lineColor,
            'stroke-width': oMarker.lineWidth
        };
    }
    var bStepLine = oLinePlotOptions.stepLine;
    var oParam = {};

    var iSeriesBarCounter = 0;
    var iHeightFactor = 0, iZeroAxis = 0;

    for (iSeriesCounter = 0; iSeriesCounter < iSeriesLength; iSeriesCounter += 1) {
        if (oSeries[iSeriesCounter].yAxis === 1) {
            iHeightFactor = chartConfigOptions.availHeight / (Math.abs(oNormalizedDataY1.min) + oNormalizedDataY1.max);
            iZeroAxis = (oNormalizedDataY1.max / oNormalizedDataY1.sum) * chartConfigOptions.availHeight;
        }
        else if (oSeries[iSeriesCounter].yAxis === 2) {
            iHeightFactor = chartConfigOptions.availHeight / (Math.abs(oNormalizedDataY2.min) + oNormalizedDataY2.max);
            iZeroAxis = (oNormalizedDataY2.max / oNormalizedDataY2.sum) * chartConfigOptions.availHeight;
        }
        if (isSeriesEnabled(oSeries, iSeriesCounter)) {
            if (oSeries[iSeriesCounter].type === 'bar') {
                oAttr = {
                    'class': 'MAQCharts-plotArea-columnChart-' + (iSeriesCounter + 1)
                };
                oGrpColumnChart = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oAttr);
                oGrpELE.appendChild(oGrpColumnChart);

                oRectAttr.fill = oColumnPlotOptions.color[iSeriesCounter];

                var oDataArray = oSeries[iSeriesCounter];
                iLength = oDataArray.data.length;
                var iXcord = 0;
                var iYcord = 0;
                for (iCounter = 0; iCounter < iLength; iCounter += 1) {
                    var height = iHeightFactor * Math.abs(oDataArray.data[iCounter]);
                    iYcord = iZeroAxis - height;
                    if (oDataArray.data[iCounter] < 0) {
                        iYcord = iZeroAxis;
                    }
                    if (!oColumnPlotOptions.stacked) {
                        oRectAttr.x = iXcord + ((oBarWidth + fGrpPadding) * iSeriesBarCounter);
                        oRectAttr.y = iYcord;
                    } else {
                        oRectAttr.x = iXcord;
                        if (oDataArray.data[iCounter] < 0) {
                            oRectAttr.y = iYcord + oNYCord[iCounter];
                            oNYCord[iCounter] += height;
                        } else {
                            oRectAttr.y = iYcord - oYCord[iCounter];
                            oYCord[iCounter] += height;
                        }
                    }
                    oRectAttr.height = height;
                    if (oColumnPlotOptions.multiColored) {
                        var iNumberOfColors = oColumnPlotOptions.color.length;
                        oRectAttr.fill = oColumnPlotOptions.color[iCounter % iNumberOfColors];
                    }
                    var oRect = MAQ.createSVGElement(chartConfigOptions.svgNS, 'rect', oRectAttr);
                    oGrpColumnChart.appendChild(oRect);

                    if (oColumnPlotOptions.valueBox.enabled) {
                        oValueBoxAttr.x = oRectAttr.x + (oRectAttr.width / 2);

                        if (oColumnPlotOptions.valueBox.position == 'middle') {
                            oValueBoxAttr.y = oRectAttr.y + (oRectAttr.height / 2);
                        }
                        else {
                            if (oRectAttr.y < 15) {
                                oValueBoxAttr.y = 15;
                            }
                            else if (oDataArray.data[iCounter] < 0) {
                                if ((chartConfigOptions.availHeight - (oRectAttr.y + oRectAttr.height)) < 15) {
                                    oValueBoxAttr.y = oRectAttr.y + oRectAttr.height - 5;
                                }
                                else {
                                    oValueBoxAttr.y = oRectAttr.y + oRectAttr.height + 15;
                                }
                            }
                            else {
                                oValueBoxAttr.y = oRectAttr.y - 5;
                            }
                        }

                        oValueBoxAttr.text = MAQ.applyFormatter(Math.round(oDataArray.data[iCounter] * 10) / 10, oColumnPlotOptions.valueBox.formatter);
                        var oValueBox = MAQ.createSVGElement(chartConfigOptions.svgNS, 'text', oValueBoxAttr);
                        oGrpColumnChart.appendChild(oValueBox);
                    }

                    var oParam = {
                        seriesIndex: iSeriesCounter,
                        isPosavail: true,
                        position: iCounter,
                        config: chartConfigOptions
                    };
                    if (chartConfigOptions.tooltip.enabled) {
                        var oToolTip = chartConfigOptions.tooltipDiv;
                        MAQ.addEventListener(oRect, 'mousemove', 'showToolTip', oParam);
                        oRect.addEventListener('mouseout', function () { oToolTip.style.display = 'none'; }, true);
                    }
                    iXcord += chartConfigOptions.plotIntervalWidth;
                }
                iSeriesBarCounter++;
            }
            else if (oSeries[iSeriesCounter].type === 'line') {
                oAttr = {
                    'class': 'MAQCharts-plotArea-lineChart-' + (iSeriesCounter + 1)
                };
                oGrpLineChart = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oAttr);
                oGrpELE.appendChild(oGrpLineChart);

                oPathAttr = {
                    d: '',
                    fill: 'transparent',
                    'z-index': 5,
                    'pointer-events': 'visibleStroke',
                    stroke: oLinePlotOptions.color[iSeriesCounter],
                    'stroke-width': oLinePlotOptions.lineWidth,
                    'stroke-dasharray': MAQ.computeStrokeDashStyle(oLinePlotOptions.lineDashStyle)
                };
                var oPath = MAQ.createSVGElement(chartConfigOptions.svgNS, 'path', oPathAttr);
                oGrpLineChart.appendChild(oPath);

                var oDataArray = oSeries[iSeriesCounter];
                iLength = oDataArray.data.length;
                var iXcord = (chartConfigOptions.plotIntervalWidth - oColumnPlotOptions.padding) / 2;
                var iYcord = 0;
                var oXcord = [];
                var oYcord = [];
                for (iCounter = 0; iCounter < iLength; iCounter += 1) {
                    var height = iHeightFactor * Math.abs(oDataArray.data[iCounter]);
                    iYcord = iZeroAxis - height;
                    if (oDataArray.data[iCounter] < 0) {
                        iYcord = iYcord + (2 * height);
                    }
                    if (oDataArray.data[iCounter] != null || oLinePlotOptions.nullValues != 'ignore') {
                        if (iCounter > 0) {
                            if (bStepLine) {
                                oPathAttr.d += ' H ' + iXcord + ' V ' + iYcord;
                            } else {
                                if (oDataArray.data[iCounter - 1] != null || oLinePlotOptions.nullValues != 'ignore') {
                                    oPathAttr.d += ' L ' + iXcord + ',' + iYcord;
                                } else {
                                    oPathAttr.d += 'M' + iXcord + ',' + iYcord;
                                }
                            }
                        } else {
                            oPathAttr.d = 'M ' + iXcord + ',' + iYcord;
                        }
                        if (bShowMarker) {
                            if (!oMarker.lineColor) {
                                oCircleAttr.stroke = oLinePlotOptions.color[iSeriesCounter];
                            }
                            if (!oMarker.fillColor) {
                                oCircleAttr.fill = oLinePlotOptions.color[iSeriesCounter];
                            }
                            oCircleAttr.cx = iXcord;
                            oCircleAttr.cy = iYcord;
                            var oCircle = MAQ.createSVGElement(chartConfigOptions.svgNS, 'circle', oCircleAttr);
                            oGrpLineChart.appendChild(oCircle);

                            oParam = {
                                seriesIndex: iSeriesCounter,
                                isPosavail: true,
                                position: iCounter,
                                config: chartConfigOptions
                            };
                            if (chartConfigOptions.tooltip.enabled) {
                                var oToolTip = chartConfigOptions.tooltipDiv;
                                MAQ.addEventListener(oCircle, 'mouseover', 'showToolTip', oParam);
                                oCircle.addEventListener('mouseout', function () { oToolTip.style.display = 'none'; }, true);
                            }
                        }
                    }

                    oXcord[iCounter] = iXcord + chartConfigOptions.availX;
                    oYcord[iCounter] = iYcord + chartConfigOptions.availY;
                    iXcord += chartConfigOptions.plotIntervalWidth;
                }
                oDataArray.xPos = oXcord.slice(0);
                oDataArray.yPos = oYcord.slice(0);
                MAQ.addAttr(oPath, 'd', oPathAttr.d);
                oParam = {
                    seriesIndex: iSeriesCounter,
                    isPosavail: false,
                    config: chartConfigOptions
                };
                if (chartConfigOptions.tooltip.enabled) {
                    var oToolTip = chartConfigOptions.tooltipDiv;
                    MAQ.addEventListener(oPath, 'mousemove', 'showToolTip', oParam);
                    oPath.addEventListener('mouseout', function () { oToolTip.style.display = 'none'; }, true);
                }
            }
        }
    }
};

/*
MAQ.getMax: Gets maximum value
@param {array} array of values
*/
MAQ.getMax = function (array) {
    return Math.max.apply(Math, array);
};

/*
MAQ.showToolTip: Gets maximum value
@param {array} array of values
*/
MAQ.getMin = function (array) {
    return Math.min.apply(Math, array);
};

/*
MAQ.showToolTip: Gets sum of values
@param {array} array of values
*/
MAQ.arraySum = function (array) {
    for (var i = 0, L = array.length, sum = 0; i < L; sum += array[i++]);
    return sum;
}

/* Time-Line functions*/
var bNavigatorDrag = false;
var bExpanderDrag = false;
var sSelectedExpander = '';
/*
MAQ.formatDate: Date formatting function
@param {formatDate} input date
@param {formatString} format string
*/
MAQ.formatDate = function (formatDate, formatString) {
    if (formatDate instanceof Date) {
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var yyyy = formatDate.getFullYear();
        var yy = yyyy.toString().substring(2);
        var m = formatDate.getMonth();
        var mm = m < 10 ? "0" + m : m;
        var mmm = months[m];
        var d = formatDate.getDate();
        var dd = d < 10 ? "0" + d : d;

        var h = formatDate.getHours();
        var hh = h < 10 ? "0" + h : h;
        var n = formatDate.getMinutes();
        var nn = n < 10 ? "0" + n : n;
        var s = formatDate.getSeconds();
        var ss = s < 10 ? "0" + s : s;

        formatString = formatString.toLowerCase();
        formatString = formatString.replace('hh', hh);
        formatString = formatString.replace('h', h);
        formatString = formatString.replace('nn', nn);
        formatString = formatString.replace('n', n);
        formatString = formatString.replace('ss', ss);
        formatString = formatString.replace('s', s);
        formatString = formatString.replace('dd', dd);
        formatString = formatString.replace('d', d);
        formatString = formatString.replace('yyyy', yyyy);
        formatString = formatString.replace('yy', yy);
        formatString = formatString.replace('mmm', mmm);
        formatString = formatString.replace('mm', (mm + 1));
        formatString = formatString.replace('m', (m + 1));
        return formatString;
    } else {
        return "";
    }
};
function navigatorMouseDown(event, oParam) {
    var oCurrentElement = event.srcElement;
    MAQ.addEventListener(oCurrentElement, 'mousemove', 'navigatorMouseMove', oParam);
    MAQ.addEventListener(oCurrentElement, 'mouseup', 'navigatorMouseUp', oParam);
    oCurrentElement.style.cursor = 'move';
    iCurrentNavigatorX = event.clientX;
    bNavigatorDrag = true;
}
function navigatorMouseMove(event, oParam) {
    var oCurrentElement = event.srcElement;
    if (bNavigatorDrag === true) {
        var iMouseXDiff = event.clientX - iCurrentNavigatorX;
        var iCurrX = parseFloat(oCurrentElement.x.baseVal.value + iMouseXDiff);
        if (iCurrX >= oParam.x && iCurrX <= (oParam.maxX - oCurrentElement.width.baseVal.value)) {
            oCurrentElement.x.baseVal.value = iCurrX;
            oParam.expanderLeft.x.baseVal.value += iMouseXDiff;
            oParam.expanderRight.x.baseVal.value += iMouseXDiff;

            var oRectAttr = {
                x: oCurrentElement.x.baseVal.value,
                y: oCurrentElement.y.baseVal.value,
                width: oCurrentElement.width.baseVal.value,
                height: oCurrentElement.height.baseVal.value
            };
            var sDattr = ' M ' + oParam.x + ',' + (oParam.height + oParam.y)
                    + ' L ' + oParam.x + ',' + oParam.y
                    + ' L ' + oRectAttr.x + ',' + oRectAttr.y
                    + ' L ' + oRectAttr.x + ',' + (oRectAttr.y + oRectAttr.height)
                    + ' L ' + (oRectAttr.x + oRectAttr.width) + ',' + (oRectAttr.y + oRectAttr.height)
                    + ' L ' + (oRectAttr.x + oRectAttr.width) + ',' + oRectAttr.y
                    + ' L ' + (oParam.x + oParam.width) + ',' + oRectAttr.y
                    + ' L ' + (oParam.x + oParam.width) + ',' + (oParam.height + oParam.y) + ' Z';

            MAQ.addAttr(oParam.dimmer, 'd', sDattr);
            iCurrentNavigatorX = event.clientX;
        }
    }
}
function navigatorMouseUp(event, oParam) {
    if (bNavigatorDrag) {
        var oCurrentElement = event.srcElement;
        MAQ.removeEventListener(oCurrentElement, 'mousemove', 'navigatorMouseMove', oParam);
        MAQ.removeEventListener(oCurrentElement, 'mouseup', 'navigatorMouseUp', oParam);
        MAQ.updateTimeLineDisplayArea(oParam.config, oParam.navigator.x.baseVal.value, (oParam.navigator.x.baseVal.value + oParam.navigator.width.baseVal.value));
        oCurrentElement.style.cursor = 'default';
        bNavigatorDrag = false;
    }
}
function stretcherMouseDown(event, oParam) {
    var oCurrentElement = event.srcElement;
    sSelectedExpander = oCurrentElement.getAttribute('desc');
    MAQ.removeEventListener(oParam.navigator, 'mousemove', 'navigatorMouseMove', oParam);
    MAQ.removeEventListener(oParam.navigator, 'mouseup', 'navigatorMouseUp', oParam);
    MAQ.addEventListener(oParam.panel, 'mousemove', 'stretcherMouseMove', oParam);
    oCurrentElement.style.cursor = 'e-resize';
    iCurrentNavigatorX = event.clientX;
    bExpanderDrag = true;
}
function stretcherMouseMove(event, oParam) {
    var oCurrentElement = oParam.navigator;
    if (bExpanderDrag === true) {
        var iMouseXDiff = event.clientX - iCurrentNavigatorX;
        var iCurrX = parseFloat(oCurrentElement.x.baseVal.value + iMouseXDiff);
        var fLeftExpaderX = oParam.expanderLeft.x.baseVal.value;
        var fRightExpaderX = oParam.expanderRight.x.baseVal.value;
        if (sSelectedExpander === 'left') {
            if (iCurrX >= oParam.x && (fLeftExpaderX + iMouseXDiff) <= (fRightExpaderX - oParam.expanderWidth)) {
                oParam.expanderLeft.x.baseVal.value += iMouseXDiff;
                oCurrentElement.x.baseVal.value = iCurrX;
                oCurrentElement.width.baseVal.value = (oParam.expanderRight.x.baseVal.value - oParam.expanderLeft.x.baseVal.value);
            }
        } else if (sSelectedExpander === 'right') {
            if ((iCurrX + oCurrentElement.width.baseVal.value) <= oParam.maxX && (fRightExpaderX + iMouseXDiff) >= (fLeftExpaderX + oParam.expanderWidth)) {
                oParam.expanderRight.x.baseVal.value += iMouseXDiff;
                oCurrentElement.width.baseVal.value = (oParam.expanderRight.x.baseVal.value - oParam.expanderLeft.x.baseVal.value);
            }
        }
        var oRectAttr = {
            x: oCurrentElement.x.baseVal.value,
            y: oCurrentElement.y.baseVal.value,
            width: oCurrentElement.width.baseVal.value,
            height: oCurrentElement.height.baseVal.value
        };
        var sDattr = ' M ' + oParam.x + ',' + (oParam.height + oParam.y)
                + ' L ' + oParam.x + ',' + oParam.y
                + ' L ' + oRectAttr.x + ',' + oRectAttr.y
                + ' L ' + oRectAttr.x + ',' + (oRectAttr.y + oRectAttr.height)
                + ' L ' + (oRectAttr.x + oRectAttr.width) + ',' + (oRectAttr.y + oRectAttr.height)
                + ' L ' + (oRectAttr.x + oRectAttr.width) + ',' + oRectAttr.y
                + ' L ' + (oParam.x + oParam.width) + ',' + oRectAttr.y
                + ' L ' + (oParam.x + oParam.width) + ',' + (oParam.height + oParam.y) + ' Z';

        MAQ.addAttr(oParam.dimmer, 'd', sDattr);
        iCurrentNavigatorX = event.clientX;
    }
}
function stretcherMouseUp(event, oParam) {
    if (bExpanderDrag) {
        var oCurrentElement = event.srcElement;
        MAQ.removeEventListener(oParam.panel, 'mousemove', 'stretcherMouseMove', oParam);
        MAQ.addEventListener(oParam.navigator, 'mousemove', 'navigatorMouseMove', oParam);
        MAQ.addEventListener(oParam.navigator, 'mouseup', 'navigatorMouseUp', oParam);
        MAQ.updateTimeLineDisplayArea(oParam.config, oParam.navigator.x.baseVal.value, (oParam.navigator.x.baseVal.value + oParam.navigator.width.baseVal.value));
        oCurrentElement.style.cursor = 'default';
        bExpanderDrag = false;
    }
}

/*
InsertCommas: Formats the number in comma separator format ($ x,xxx,xxx.xx)
@param {nStr} number to be formatted
*/
function InsertCommas(nStr) {

    var sStr = nStr.toString();
    if (-1 !== sStr.indexOf('.')) {
        var decimalLength = sStr.substring(sStr.indexOf('.') + 1).length;
        if (3 < decimalLength) {
            sStr = ((nStr * 100) / 100).toString();
            nStr = Number(sStr.match(/^-?\d+(?:\.\d{0,3})?/));
        }
    }

    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    /* Converting thousand to k */
    var bConvert = false;
    if (parseInt(x1, 10) > 1000) {
        x1 = x1 / 1000;
        bConvert = true;
    }
    x1 = x1.toString();
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    if (bConvert) {
        return '$' + x1 + 'k';
    }
    return '$' + x1 + x2;
}

/*
clickEventListener: Renders total value in center of both bows
@param {evt} event
@param {oParam} user configuration parameters
*/
function clickEventListener(evt, oParam) {
    var oConfig = oParam.config;
    var oSVG = oConfig.svgELE;
    var fInterval = oConfig.plotIntervalWidth;
    var oSeries = oConfig.series[oParam.seriesIndex];
    var oLabels = oConfig.series.label;
    var oPoint = oSVG.createSVGPoint();
    oPoint.x = evt.clientX;
    oPoint.y = evt.clientY;
    var oSVGCord = oPoint.matrixTransform(oSVG.getScreenCTM().inverse());
    var iSelectedIndex = 0;
    if (oParam.isPosavail) {
        iSelectedIndex = oParam.position;
    } else {
        iSelectedIndex = MAQ.getDataIndexPosition(oSVGCord, oSeries.xPos, fInterval);
    }

    if (typeof window[oConfig.onClick.clickFunction] == 'function') {
        /* */
        switch (oConfig.chart.type) {
            case 'pie':
            case 'donut':
                window[oConfig.onClick.clickFunction](oSeries.name, '', oSeries.data);
                break;
            default:
                window[oConfig.onClick.clickFunction](oSeries.name, oLabels[iSelectedIndex], oSeries.data[iSelectedIndex]);
                break;
        }
    }
}
/* ----------------- */

/*
MAQ.createTotalArea: Renders total value in center of both bows
@param {chartConfigOptions} user configuration parameters
@param {oBowTie} BotTie plotOptions
@param {oGrpELE} <g> object holding the total value
*/
MAQ.createTotalArea = function (chartConfigOptions, oBowTie, oGrpELE) {

    var oTrialObject = null;
    var oDimension = null;
    var oDimensionTotalTitle = null;

    var oBow0 = chartConfigOptions.series[0].child;
    var oBow1 = chartConfigOptions.series[1].child;
    var sPlotFieldName = [oBowTie.branch.left.fieldName, oBowTie.branch.right.fieldName];

    var oDataInfoBow0 = MAQ.getMinMax(oBow0, 0, 0, sPlotFieldName[0]);
    var oDataInfoBow1 = MAQ.getMinMax(oBow1, 0, 0, sPlotFieldName[1]);

    var iMax = oDataInfoBow0.total > oDataInfoBow1.total ? oDataInfoBow0.total : oDataInfoBow1.total;
    switch (oBowTie.showTotal.side) {
        case 'left':
            iMax = oDataInfoBow0.total;
            break;
        case 'right':
            iMax = oDataInfoBow1.total;
            break;
    }
    var sTotal = Math.round(iMax);
    if (oBowTie.showTotal.enabled) {
        var oGrpELESum = null;
        if (oBowTie.showTotal.totalObj) {
            oGrpELE.removeChild(oBowTie.showTotal.totalObj);
        }
        oAttr = {
            'class': 'MAQCharts-plotArea-Sum',
        };
        oGrpELESum = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oAttr);
        oGrpELE.appendChild(oGrpELESum);
        if (oBowTie.branch.drillDepenedency === 'independent') {
            oBowTie.showTotal.totalObj = oGrpELESum;
        }
        var sFormatter = oBowTie.showTotal.formatter;
        if (sFormatter && typeof (window[sFormatter]) === 'function') {
            sTotal = window[sFormatter](sTotal);
        }
        oAttr = {
            x: chartConfigOptions.availWidth / 2,
            y: chartConfigOptions.availHeight / 2 + chartConfigOptions.availY,
            text: sTotal,
            'text-anchor': 'middle',
            style: oBowTie.showTotal.style
        };

        oTrialObject = MAQ.createSVGElement(chartConfigOptions.svgNS, 'text', oAttr);
        oGrpELESum.appendChild(oTrialObject);
        oDimension = MAQ.getObjectDimension(oTrialObject);
        MAQ.addAttr(oTrialObject, 'y', oAttr.y + (oDimension.height / 2));
        oDimension.width += oBowTie.showTotal.spacing;

        oAttr.text = oBowTie.showTotal.title.text;
        oAttr.style = oBowTie.showTotal.title.style;
        sFormatter = oBowTie.showTotal.title.formatter;
        if (sFormatter && typeof (window[sFormatter]) === 'function') {
            oAttr.text = window[sFormatter](oAttr.text);
        }
        oTrialObject = MAQ.createSVGElement(chartConfigOptions.svgNS, 'text', oAttr);
        var oTextTitleObj = MAQ.createSVGElement(chartConfigOptions.svgNS, 'title', { text: oBowTie.showTotal.title.text });
        oTrialObject.appendChild(oTextTitleObj);
        oGrpELESum.appendChild(oTrialObject);
        oDimensionTotalTitle = MAQ.getObjectDimension(oTrialObject);
        MAQ.addAttr(oTrialObject, 'y', oAttr.y - (oDimensionTotalTitle.height / 2));
        oDimensionTotalTitle.width += oBowTie.showTotal.spacing;

        oDimension = oDimension.width > oDimensionTotalTitle.width ? oDimension : oDimensionTotalTitle;

        oBowTie.showTotal.dimension = oDimension;
    } else {
        oBowTie.showTotal.dimension = { width: oBowTie.branch.spacing };
    }
    if (oBowTie.branch.currentLevel > 0) {
        var oDrillBackImage = {
            x: oAttr.x - 12,
            y: oDimensionTotalTitle.y,
            width: 24,
            height: 24
        };
        var oBackImage = MAQ.createSVGElement(chartConfigOptions.svgNS, 'image', oDrillBackImage);
        oGrpELESum.appendChild(oBackImage);
        var oParam = {
            chartConfig: chartConfigOptions,
            series: chartConfigOptions.series
        };
        MAQ.addEventListener(oBackImage, 'click', oBowTie.branch.drillBackFunction, oParam);
        oBackImage.setAttributeNS(chartConfigOptions.xlinkNS, 'xlink:href', '../PublishingImages/PreviousArrow.png');
        oImageDim = MAQ.getObjectDimension(oBackImage);
        MAQ.addAttr(oBackImage, 'y', oDrillBackImage.y - oDimensionTotalTitle.height - oImageDim.height);
    }
    var dataInfo = { series: [oBow0, oBow1], datainfo: [oDataInfoBow0, oDataInfoBow1] };
    return dataInfo;
};

/*
MAQ.getSpaceForGridArea: Computes space for grid area in bow tie chart
@param {chartConfigOptions} user configuration parameters
@param {oBowTieSide} config object for particular bow
@param {oBowSeries} data series holding data for particular bow
*/
MAQ.getSpaceForGridArea = function (chartConfigOptions, oBowTieSide, oBowSeries) {
    var oTextAttr = {
        x: 0,
        y: 0,
        text: '',
        'text-anchor': 'start',
        style: null
    };
    var oWidth = [];
    var iWidth = 0;
    var iHeight = 0;
    var iNumberOfColumns = oBowTieSide.header.length;
    var sHeaderText = '';
    var iCounter = 0;
    for (iCounter = 0; iCounter < iNumberOfColumns; iCounter += 1) {
        sHeaderText = oBowTieSide.header[iCounter];
        oTextAttr.text = sHeaderText;
        oTextAttr.style = oBowTieSide.headerStyle;
        var oHeader = MAQ.createSVGElement(chartConfigOptions.svgNS, 'text', oTextAttr);
        chartConfigOptions.svgELE.appendChild(oHeader);
        var oDimensionHeader = MAQ.getObjectDimension(oHeader);
        iHeight = oDimensionHeader.height + oBowTieSide.headerDataSpacing;
        chartConfigOptions.svgELE.removeChild(oHeader);

        var oCurrentColumn = oBowTieSide.colModel[iCounter];
        if (oCurrentColumn.type === 'string') {
            sHeaderText = MAQ.getMinMax(oBowSeries, '', '', oCurrentColumn.name).max;
        } else {
            sHeaderText = MAQ.getMinMax(oBowSeries, 0, 0, oCurrentColumn.name).max;
        }
        /* Apply Column level formatting */
        if (oCurrentColumn.formatter && typeof (window[oCurrentColumn.formatter] === 'function')) {
            sHeaderText = window[oCurrentColumn.formatter](sHeaderText);
        }
        oTextAttr.text = sHeaderText;
        oTextAttr.style = oCurrentColumn.style;
        var oData = MAQ.createSVGElement(chartConfigOptions.svgNS, 'text', oTextAttr);
        chartConfigOptions.svgELE.appendChild(oData);
        var oDimensionData = MAQ.getObjectDimension(oData);
        chartConfigOptions.svgELE.removeChild(oData);

        if (oDimensionHeader.width > oDimensionData.width) {
            oWidth[iCounter] = oDimensionHeader.width;
            iWidth += oDimensionHeader.width;
        } else {
            oWidth[iCounter] = oDimensionData.width;
            iWidth += oDimensionData.width;
        }
        iWidth += oCurrentColumn.spacing;
    }
    return { x: 0, y: 0, width: iWidth, height: iHeight, widthColl: oWidth };
};

/*
MAQ.createSideSpecifiedBow: Renders one half bow tie chart
@param {chartConfigOptions} user configuration parameters
@param {oGrpELE} group object for holding a bow
@param {oGrpELEGrid} group object for holing grid data
@param {oBowTie} object containing plotOptions
@param {oDataInfoBow} object holing min, max and total for the series provided
@param {oBow} data series for a side of bow
@param {sSide} side of bow viz. left, right
*/
MAQ.createSideSpecifiedBow = function (chartConfigOptions, oGrpELE, oGrpELEGrid, oBowTie, oDataInfoBow, oBow, sSide) {
    MAQ.removeAllChildren(oGrpELE);
    MAQ.removeAllChildren(oGrpELEGrid);
    var oDimensionForColumnTitle = { x: 0, y: 0, width: 0, height: 0 };
    var oAttr = {
        x: 0,
        y: 0,
        text: '',
        style: {}
    };
    var iWidth = 0;
    var fCurveFactor = 0.25;
    var oSideSpecificBow = oBowTie.label[sSide];
    var oBranch = oBowTie.branch[sSide];
    var fCentralX = chartConfigOptions.availWidth / 2;
    if (sSide === 'none') {
        // oBowTie.branch.drillDepenedency = 'independent';
        oSideSpecificBow = oBowTie.label;
        oBranch = oBowTie.branch;
        fCentralX = chartConfigOptions.availX;
        fCurveFactor = 0.5;
    }
    oSideSpecificBow.headerDataSpacing = oBowTie.label.headerDataSpacing;
    oSideSpecificBow.title = oBranch.title;

    if (oSideSpecificBow.enabled) {
        oDimensionForColumnTitle = MAQ.getSpaceForGridArea(chartConfigOptions, oSideSpecificBow, oBow);
    }

    var sPlotFieldName = oBranch.fieldName;
    var fStartX = (oBowTie.showTotal.dimension.width / 2) + fCentralX;
    var fEndX = chartConfigOptions.availWidth - oDimensionForColumnTitle.width;

    /* Adding grid title */
    oAttr.x = fEndX;
    oAttr.text = oSideSpecificBow.title.text;
    oAttr.style = oSideSpecificBow.title.style;
    var oGridTitle = MAQ.createSVGElement(chartConfigOptions.svgNS, 'text', oAttr);
    oGrpELEGrid.appendChild(oGridTitle);
    var oDimGridTitle = MAQ.getObjectDimension(oGridTitle);
    switch (oSideSpecificBow.title.align) {
        case 'center':
            MAQ.addAttr(oGridTitle, 'text-anchor', 'middle');
            MAQ.addAttr(oGridTitle, 'x', oAttr.x + (oDimensionForColumnTitle.width / 2));
            break;
        case 'right':
            MAQ.addAttr(oGridTitle, 'text-anchor', 'end');
            MAQ.addAttr(oGridTitle, 'x', oAttr.x + oDimensionForColumnTitle.width);
            break;
    }
    MAQ.addAttr(oGridTitle, 'y', oAttr.y + oDimGridTitle.height);
    oDimensionForColumnTitle.height += (oDimGridTitle.height * 1.5);
    /*-------------------*/

    var fEndY = oDimensionForColumnTitle.height;
    var fPipeStartHeight = (chartConfigOptions.availHeight - oDimensionForColumnTitle.height) / 6;
    var fMaxBranchHeight = (chartConfigOptions.availHeight - oDimensionForColumnTitle.height) / oBow.length;
    var fBranchHeight = (oBow[0][sPlotFieldName] / oDataInfoBow.total) * fPipeStartHeight;
    var fStartY = ((chartConfigOptions.availHeight - oDimensionForColumnTitle.height - fEndY) / 2) - (fPipeStartHeight / 2) + oDimensionForColumnTitle.height;
    var fMidY = (chartConfigOptions.availHeight - oDimensionForColumnTitle.height - fEndY) / 2;
    var fPipeArea = fEndX - fStartY;
    var iArrayCounter = 0;
    var iLength = oBow.length;
    fEndY += (fBranchHeight / 2);
    fBranchHeight = 0;

    if (sSide === 'left') {
        MAQ.addAttr(oGrpELEGrid, 'transform', 'translate(' + -fEndX + ',' + chartConfigOptions.availY + ')');
    }

    var oPathAttr = {
        d: '',
        stroke: oBranch.fillColor,
        fill: 'none'
    };

    if (oSideSpecificBow.enabled) {
        var oHeader = oSideSpecificBow.header;
        oAttr.x = fEndX + (oSideSpecificBow.colModel[0].spacing / 2);
        for (iArrayCounter = 0; iArrayCounter < oHeader.length; iArrayCounter += 1) {
            oAttr.y = (oDimGridTitle.height * 1.5);
            oAttr.text = oHeader[iArrayCounter];
            oAttr.style = oSideSpecificBow.headerStyle;
            var oHeaderText = MAQ.createSVGElement(chartConfigOptions.svgNS, 'text', oAttr);
            oGrpELEGrid.appendChild(oHeaderText);
            var oHeadDim = MAQ.getObjectDimension(oHeaderText);
            MAQ.addAttr(oHeaderText, 'y', oAttr.y + oHeadDim.height / 2);
            oAttr.x += oDimensionForColumnTitle.widthColl[iArrayCounter] + oSideSpecificBow.colModel[iArrayCounter].spacing;
        }
    }

    /* Plot each branch with user specidfied column values */
    for (iArrayCounter = 0; iArrayCounter < iLength; iArrayCounter += 1) {
        var oCurrentBow = oBow[iArrayCounter];
        fStartY += (fBranchHeight / 2);
        fBranchHeight = (oCurrentBow[sPlotFieldName] / oDataInfoBow.total) * fPipeStartHeight;
        fBranchHeight = fBranchHeight < 1 ? 1 : fBranchHeight;
        fBranchHeight = fBranchHeight <= fMaxBranchHeight ? fBranchHeight : fMaxBranchHeight;
        fStartY += (fBranchHeight / 2);
        if (iLength === 1) {
            fEndY = fStartY;
        }

        oPathAttr.d = 'M ' + fStartX + ' ' + fStartY +
                ' C ' + (fEndX - (fPipeArea * fCurveFactor)) + ' ' + fStartY + ' ' + (fStartX + (fPipeArea * fCurveFactor)) + ' ' + fEndY + ' ' + fEndX + ' ' + fEndY;
        oPathAttr['stroke-width'] = fBranchHeight;
        var oPath = MAQ.createSVGElement(chartConfigOptions.svgNS, 'path', oPathAttr);
        oGrpELE.appendChild(oPath);

        var oColModel = oSideSpecificBow.colModel
        oAttr.x = fEndX + (oColModel[0].spacing / 2);
        MAQ.addAttr(oPath, 'name', oCurrentBow.name);

        var oParam = {
            chartConfig: chartConfigOptions,
            position: iArrayCounter,
            side: sSide,
            series: oBow,
            branchGroup: oGrpELE,
            gridGroup: oGrpELEGrid
        };

        if (oBowTie.branch.drillDepenedency === 'independent') {
            if (oCurrentBow.child && oCurrentBow.child.length > 0) {
                MAQ.addEventListener(oPath, 'click', 'bowTieDrill', oParam);
            }
        } else {
            //if (oCurrentBow.child && oCurrentBow.child.length > 0) {
            oParam.drillFunction = oBowTie.branch.drillFunction;
            MAQ.addEventListener(oPath, 'click', 'bowTieDependentDrill', oParam);
            // }
        }
        if (oSideSpecificBow.enabled) {
            for (iArrayLabelCounter = 0; iArrayLabelCounter < oHeader.length; iArrayLabelCounter += 1) {
                var oCurrColModel = oColModel[iArrayLabelCounter];
                oAttr.y = fEndY;
                oAttr.text = oCurrentBow[oCurrColModel.name];
                var sTitleText = oAttr.text;
                if (oCurrColModel.formatter && typeof (window[oCurrColModel.formatter] === 'function')) {
                    oAttr.text = window[oCurrColModel.formatter](oAttr.text);
                }
                oAttr.style = oCurrColModel.style;
                var oHeaderText = MAQ.createSVGElement(chartConfigOptions.svgNS, 'text', oAttr);
                oGrpELEGrid.appendChild(oHeaderText);
                oHeadDim = MAQ.getObjectDimension(oHeaderText);
                if (oCurrColModel.align === 'right') {
                    MAQ.addAttr(oHeaderText, 'x', oAttr.x + oDimensionForColumnTitle.widthColl[iArrayLabelCounter]);
                    MAQ.addAttr(oHeaderText, 'text-anchor', 'end');
                }
                if (oAttr.text.indexOf('...') > 0) {
                    var oTextTitleObj = MAQ.createSVGElement(chartConfigOptions.svgNS, 'title', { text: sTitleText });
                    oHeaderText.appendChild(oTextTitleObj);
                }
                MAQ.addAttr(oHeaderText, 'y', oAttr.y + (oHeadDim.height / 4));
                oAttr.x += oDimensionForColumnTitle.widthColl[iArrayLabelCounter] + oCurrColModel.spacing;
            }
        }
        fEndY += fMaxBranchHeight;
    }
};

/*
MAQ.createBowTieChart: Renders full bow tie chart
@param {chartConfigOptions} user configuration parameters
*/
MAQ.createBowTieChart = function (chartConfigOptions) {
    var oBowTie = chartConfigOptions.plotOptions.bowtie;
    var sPlotFieldName = [oBowTie.branch.left.fieldName, oBowTie.branch.right.fieldName];
    var oFillColor = [oBowTie.branch.left.fillColor, oBowTie.branch.right.fillColor];

    if (oBowTie.container) {
        MAQ.removeAllChildren(oBowTie.container);
    }
    var oAttr = {};
    oAttr = {
        'class': 'MAQCharts-plotArea',
    };
    var oGrpELE = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oAttr);
    chartConfigOptions.svgELE.appendChild(oGrpELE);
    oBowTie.container = oGrpELE;

    var oDataInfo = MAQ.createTotalArea(chartConfigOptions, oBowTie, oGrpELE);

    oAttr = {
        'class': 'MAQCharts-plotAreaRightBow',
        transform: 'translate(' + 0 + ',' + chartConfigOptions.availY + ')'
    };
    var oGrpELERightBow = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oAttr);
    oGrpELE.appendChild(oGrpELERightBow);

    oAttr = {
        'class': 'MAQCharts-plotAreaRightGrid',
        transform: 'translate(' + 0 + ',' + chartConfigOptions.availY + ')'
    };
    var oGrpELERightGrid = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oAttr);
    oGrpELE.appendChild(oGrpELERightGrid);

    oAttr['class'] = 'MAQCharts-plotAreaLeftBow'
    oAttr.transform = 'translate(' + chartConfigOptions.availWidth + ',' + chartConfigOptions.availY + ') scale(-1,1)'
    var oGrpELELeftBow = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oAttr);
    oGrpELE.appendChild(oGrpELELeftBow);

    oAttr = {
        'class': 'MAQCharts-plotAreaLeftGrid',
    };
    var oGrpELELeftGrid = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oAttr);
    oGrpELE.appendChild(oGrpELELeftGrid);

    MAQ.createSideSpecifiedBow(chartConfigOptions, oGrpELELeftBow, oGrpELELeftGrid, oBowTie, oDataInfo.datainfo[0], oDataInfo.series[0], 'left');
    MAQ.createSideSpecifiedBow(chartConfigOptions, oGrpELERightBow, oGrpELERightGrid, oBowTie, oDataInfo.datainfo[1], oDataInfo.series[1], 'right');


};

/*
MAQ.createHalfBowTieChart: Renders half bow tie chart
@param {chartConfigOptions} user configuration parameters
*/
MAQ.createHalfBowTieChart = function (chartConfigOptions) {
    var oBowTie = chartConfigOptions.plotOptions.halfbowtie;
    var oBow0 = chartConfigOptions.series[0].child;
    var sPlotFieldName = oBowTie.branch.fieldName;
    var oFillColor = oBowTie.branch.fillColor;

    if (oBowTie.container) {
        MAQ.removeAllChildren(oBowTie.container);
    }
    var oAttr = {};
    oAttr = {
        'class': 'MAQCharts-plotArea',
    };
    var oGrpELE = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oAttr);
    chartConfigOptions.svgELE.appendChild(oGrpELE);
    oBowTie.container = oGrpELE;

    var oDataInfo = MAQ.getMinMax(oBow0, 0, 0, sPlotFieldName);
    var sTotal = Math.round(oDataInfo.total);
    if (oBowTie.showTotal.enabled) {
        oAttr = {
            'class': 'MAQCharts-plotArea-Sum',
        };
        oGrpELESum = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oAttr);
        oGrpELE.appendChild(oGrpELESum);
        var sFormatter = oBowTie.showTotal.formatter;
        if (sFormatter && typeof (window[sFormatter]) === 'function') {
            sTotal = window[sFormatter](sTotal);
        }
        oAttr = {
            x: chartConfigOptions.availX,
            y: chartConfigOptions.availHeight / 2 + chartConfigOptions.availY,
            text: sTotal,
            'text-anchor': 'middle',
            style: oBowTie.showTotal.style
        };

        var oSumObject = MAQ.createSVGElement(chartConfigOptions.svgNS, 'text', oAttr);
        oGrpELESum.appendChild(oSumObject);
        oDimension = MAQ.getObjectDimension(oSumObject);
        MAQ.addAttr(oSumObject, 'y', oAttr.y + (oDimension.height / 2));
        oDimension.width += oBowTie.showTotal.spacing;

        oAttr.text = oBowTie.showTotal.title.text;
        oAttr.style = oBowTie.showTotal.title.style;
        sFormatter = oBowTie.showTotal.title.formatter;
        if (sFormatter && typeof (window[sFormatter]) === 'function') {
            oAttr.text = window[sFormatter](oAttr.text);
        }

        var oTitleObject = MAQ.createSVGElement(chartConfigOptions.svgNS, 'text', oAttr);
        var oTextTitleObj = MAQ.createSVGElement(chartConfigOptions.svgNS, 'title', { text: oBowTie.showTotal.title.text });
        oTitleObject.appendChild(oTextTitleObj);
        oGrpELESum.appendChild(oTitleObject);
        oDimensionTotalTitle = MAQ.getObjectDimension(oTitleObject);
        MAQ.addAttr(oTitleObject, 'y', oAttr.y - (oDimensionTotalTitle.height / 2));
        oDimensionTotalTitle.width += oBowTie.showTotal.spacing;

        oDimension = oDimension.width > oDimensionTotalTitle.width ? oDimension : oDimensionTotalTitle;
        MAQ.addAttr(oSumObject, 'x', oAttr.x + (oDimension.width / 2));
        MAQ.addAttr(oTitleObject, 'x', oAttr.x + (oDimension.width / 2));
        oDimension.width *= 2;
        oBowTie.showTotal.dimension = oDimension;
    }
    oAttr = {
        'class': 'MAQCharts-plotAreaBow',
        transform: 'translate(' + 0 + ',' + chartConfigOptions.availY + ')'
    };
    var oGrpELEBow = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oAttr);
    oGrpELE.appendChild(oGrpELEBow);

    oAttr = {
        'class': 'MAQCharts-plotAreaGrid',
        transform: 'translate(' + 0 + ',' + chartConfigOptions.availY + ')'
    };
    var oGrpELEGrid = MAQ.createSVGElement(chartConfigOptions.svgNS, 'g', oAttr);
    oGrpELE.appendChild(oGrpELEGrid);

    MAQ.createSideSpecifiedBow(chartConfigOptions, oGrpELEBow, oGrpELEGrid, oBowTie, oDataInfo, oBow0, 'none');
};

/*
MAQ.bowTieDrill: Drills in data of bow-tie chart
@param {evt} event object
@param {oParam} param collection
*/
function bowTieDrill(evt, oParam) {
    oParam.chartConfig.plotOptions.bowtie.branch.currentLevel += 1;
    var oCurrentElement = evt.srcElement;
    var oParent = oCurrentElement.parentNode;
    var iCounter = oParam.position;
    var oSeries = oParam.series;
    var oConfig = oParam.chartConfig;
    var sChartType = oConfig.chart.type;
    var oBowTie = oConfig.plotOptions[sChartType];
    oBowTie.showTotal.side = oParam.side;
    oBowTie.showTotal.title.text = oSeries[iCounter].name;
    if (oParam.side === 'left') {
        oConfig.series[0].child = oSeries[iCounter].child;
        var oDataInfo = MAQ.createTotalArea(oConfig, oBowTie, oParent.parentNode);
        MAQ.createSideSpecifiedBow(oConfig, oParam.branchGroup, oParam.gridGroup, oBowTie, oDataInfo.datainfo[0], oDataInfo.series[0], 'left');
    } else if (oParam.side === 'right') {
        oConfig.series[1].child = oSeries[iCounter].child;
        var oDataInfo = MAQ.createTotalArea(oConfig, oBowTie, oParent.parentNode);
        MAQ.createSideSpecifiedBow(oConfig, oParam.branchGroup, oParam.gridGroup, oBowTie, oDataInfo.datainfo[1], oDataInfo.series[1], 'right');
    } else {
        oConfig.series[0].child = oSeries[iCounter].child;
        MAQ.createHalfBowTieChart(oConfig);
        oBowTie.branch.currentLevel += 1;
        if (oBowTie.branch.currentLevel > 0) {
            var oDrillBackImage = {
                x: oConfig.svgELE.x.baseVal.value - 12,
                y: oDimensionTotalTitle.y,
                width: 24,
                height: 24
            };
            var oBackImage = MAQ.createSVGElement(oConfig.svgNS, 'image', oDrillBackImage);
            oGrpELESum.appendChild(oBackImage);
            var oParam = {
                chartConfig: oConfig,
                series: oConfig.series
            };
            MAQ.addEventListener(oBackImage, 'click', oBowTie.branch.drillBackFunction, oParam);
            oBackImage.setAttributeNS(oConfig.xlinkNS, 'xlink:href', '../PublishingImages/PreviousArrow.png');
            oImageDim = MAQ.getObjectDimension(oBackImage);
            MAQ.addAttr(oBackImage, 'y', oDrillBackImage.y - oDimensionTotalTitle.height - oImageDim.height);
        }
    }
};

function bowTieDependentDrill(evt, oParam) {
    if (oParam.drillFunction && typeof window[oParam.drillFunction] === 'function') {
        oParam.chartConfig.plotOptions.bowtie.branch.currentLevel += 1;
        var oUserConfig = window[oParam.drillFunction](evt, oParam);
        if (oUserConfig) {
            MAQ.createBowTieChart(oUserConfig);
        }
    }
}

function calculateColor(oELE, oJson, iTotal) {
    var fOpacity = 1;
    oELE.style.backgroundColor = '#CC0000';
}
function dynamicSort(property, flag) {
    if (flag) {
        return function (a, b) {
            return (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        }
    } else {
        return function (a, b) {
            return (b[property] < a[property]) ? -1 : (b[property] > a[property]) ? 1 : 0;
        }
    }
}
function getContainerRelativeCord(e) {
    var posx = 0;
    var posy = 0;
    if (!e) var e = window.event;
    if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
    }
    else if (e.clientX || e.clientY) {
        posx = e.clientX + document.body.scrollLeft
			+ document.documentElement.scrollLeft;
        posy = e.clientY + document.body.scrollTop
			+ document.documentElement.scrollTop;
    }
    return { x: posx, y: posy };
}

MAQ.createNavigationElement = function () {

};
MAQ.getDataR = function (iLevel, chartConfigOptions, iVal) {
    //if (iLevel) {
    //    var oTreemapOptions = chartConfigOptions.plotOptions.treemap;
    //    var iLength = chartConfigOptions.series.child.length;
    //    var iCounter = 0;
    //    var oData = chartConfigOptions.series.child;
    //    var sFieldName = oTreemapOptions.fieldName;
    //    for (iCounter = 0; iCounter < iLength; iCounter += 1) {
    //        if (oData[iCounter].name === oTreemapOptions.selectedValue[iVal]) {
    //            oTreemapOptions.selectedIndex[iVal] = iCounter;
    //            chartConfigOptions.series = oData[iCounter];
    //            break;
    //        }
    //    }
    //    MAQ.getDataR(--iLevel, chartConfigOptions, ++iVal);
    //}
};
function treemapDrill(evt, oParam) {
    var chartConfigOptions = oParam.chartConfigOptions;
    var oTreemapOptions = chartConfigOptions.plotOptions.treemap;
    if (evt.which === 1) {
        if (oParam.data.child) {
            chartConfigOptions.series = oParam.data;
            oTreemapOptions.selectedValue[oTreemapOptions.currentLevel] = oParam.name;
            oTreemapOptions.currentLevel += 1;
            chartConfigOptions.container = document.getElementById(chartConfigOptions.chart.renderTo);
            chartConfigOptions.container.innerHTML = '';
            MAQ.createTreemap(chartConfigOptions);
            var oNav = document.getElementById('navig');
            if (oTreemapOptions.currentLevel === 0) {
                oNav.innerHTML = 'All';
            } else {
                oNav.innerHTML += ' -> ' + oTreemapOptions.selectedValue[oTreemapOptions.currentLevel - 1];
            }
        }
    } else {
        chartConfigOptions.series.child = clone(oTreemapOptions.original.child);
        if (oTreemapOptions.currentLevel > 0) {
            oTreemapOptions.currentLevel -= 1;
        }
        MAQ.getDataR(oTreemapOptions.currentLevel, chartConfigOptions, 0);
        chartConfigOptions.container = document.getElementById(chartConfigOptions.chart.renderTo);
        chartConfigOptions.container.innerHTML = '';
        MAQ.createTreemap(chartConfigOptions);
    }
}
function treemapInfoBox(evt, oParam) {
    var chartConfigOptions = oParam.chartConfigOptions;
    var oCord = getContainerRelativeCord(evt);
    var oToolTip = chartConfigOptions.tooltipDiv;
    var sChunk = '<b>Name:</b> ' + oParam.data.name
                + '<br /><b>Revenue:</b> ' + oParam.data.revenue;
    oToolTip.innerHTML = sChunk;
    oToolTip.style.display = 'block';
    var fTopCordinate = oCord.y - oToolTip.clientHeight - 5;
    if (fTopCordinate <= 10) {
        fTopCordinate = oCord.y + 10;
    }
    var fLeftCordinate = oCord.x - oToolTip.clientWidth - 10;
    if (fLeftCordinate <= 10) {
        fLeftCordinate = oCord.x + 10;
    }
    oToolTip.style.top = fTopCordinate + 'px';
    oToolTip.style.left = fLeftCordinate + 'px';
    if (!oToolTip.clientWidth) {
        chartConfigOptions.container.appendChild(oToolTip);
    }
}
MAQ.calculateAspectRatio = function (chartConfigOptions, iDimensionX, iDimensionY, iSum, iLastIndex) {
    var iDataCounter = 0;
    oDataArray = chartConfigOptions.series.child,
        sFieldName = chartConfigOptions.plotOptions.treemap.fieldName,
        iCurrentDimensionX = iDimensionX,
        iIndividualHeight = 0,
        oLayout = chartConfigOptions.plotOptions.treemap.currentLayout;
    for (iDataCounter = 0; iDataCounter <= iLastIndex; iDataCounter += 1) {
        iIndividualHeight = (oDataArray[iDataCounter][sFieldName] / iSum) * iDimensionX;
        oLayout[iDataCounter] = iIndividualHeight;
        if (iIndividualHeight <= iCurrentDimensionX) {
            iCurrentDimensionX = iIndividualHeight;
        }
    }
    return Math.max(iCurrentDimensionX / iDimensionY, iDimensionY / iCurrentDimensionX);
};
MAQ.plotArea = function (chartConfigOptions, iWidth, iHeight, numberOfValues, iDimension, a, b) {
    var iCounter = 0,
        oContainerDiv = chartConfigOptions.container,
        oTreemapOptions = chartConfigOptions.plotOptions.treemap,
        sFieldName = oTreemapOptions.fieldName,
        oPrevLayout = oTreemapOptions.prevLayout,
        oData = chartConfigOptions.series.child;
    var leftDiv = document.createElement('div');
    leftDiv.style[a] = Math.round(iDimension) + 'px';
    leftDiv.style[b] = iHeight + 'px';
    leftDiv.style.cssFloat = 'left';
    oContainerDiv.appendChild(leftDiv);
    for (iCounter = 0; iCounter < numberOfValues; iCounter += 1) {
        if (Math.round(oPrevLayout[iCounter])) {
            var div = document.createElement('div');
            div.style.cssFloat = 'left';
            div.style.border = '1px solid white';
            div.style[b] = oPrevLayout[iCounter] + 'px';
            div.style[a] = Math.round(iDimension) + 'px';
            if (typeof window[oTreemapOptions.fieldColor] === 'function') {
                window[oTreemapOptions.fieldColor](div, oData[iCounter], oTreemapOptions.original.sum);
            } else {
                div.style.backgroundColor = '#CC0000';
            }
            leftDiv.appendChild(div);
            if (oTreemapOptions.drillThrough) {
                if (oData[iCounter].child) {
                    div.style.cursor = 'pointer';
                }
                var oParam = {
                    chartConfigOptions: chartConfigOptions,
                    name: oData[iCounter][oTreemapOptions.title.fieldName],
                    level: oTreemapOptions.currentLevel,
                    data: oData[iCounter]
                };
                MAQ.addEventListener(div, 'mousedown', 'treemapDrill', oParam);
                MAQ.addEventListener(div, 'mousemove', 'treemapInfoBox', oParam);
                div.addEventListener('mouseout', function () {
                    chartConfigOptions.tooltipDiv.style.display = 'none';
                });
            }
            if (oTreemapOptions.title && oTreemapOptions.title.fieldName) {
                var fParentHeight = div.clientHeight;
                var titleDiv = document.createElement('div');
                if (oTreemapOptions.title.style) {
                    MAQ.applyStyle(titleDiv, oTreemapOptions.title.style);
                }
                var width = 0;
                if (b === 'width') {
                    width = Math.round(oPrevLayout[iCounter]);
                } else {
                    width = Math.round(iDimension);
                }
                titleDiv.style.width = width - 2 + 'px';
                if (oData[iCounter][oTreemapOptions.title.fieldName]) {
                    titleDiv.innerText = oData[iCounter][oTreemapOptions.title.fieldName];
                } else {
                    titleDiv.innerText = 'NA';
                }
                div.appendChild(titleDiv);
                if (fParentHeight < titleDiv.clientHeight) {
                    div.removeChild(titleDiv);
                }
            }
        }
    }
    if (oData.length > 1) {
        var RightDiv = document.createElement('div');
        RightDiv.style[a] = iWidth - Math.round(iDimension) + 'px';
        RightDiv.style[b] = iHeight + 'px';
        RightDiv.style.cssFloat = 'right';
        oContainerDiv.appendChild(RightDiv);
        chartConfigOptions.container = RightDiv;
        chartConfigOptions.series.child = oData.splice(numberOfValues)
        MAQ.createTreemap(chartConfigOptions);
    }
};
MAQ.calculateDimension = function (chartConfigOptions, iDimensionX, iDimensionY, iTotal, bFlag) {
    var iPrevAspectRatio = 0,
        iLoopCounter = 0,
        iSum = 0,
        iCurrAspectRatio = 0,
        oContainerDiv = chartConfigOptions.container,
        oData = chartConfigOptions.series.child,
        sFieldName = chartConfigOptions.plotOptions.treemap.fieldName;
    for (iLoopCounter = 0; iLoopCounter < oData.length; iLoopCounter += 1) {
        iSum = iSum + oData[iLoopCounter][sFieldName];
        iCalcDimension = (iSum / iTotal) * iDimensionX;
        iCurrAspectRatio = MAQ.calculateAspectRatio(chartConfigOptions, iDimensionY, iCalcDimension, iSum, iLoopCounter);
        if (iPrevAspectRatio && iPrevAspectRatio < iCurrAspectRatio) {
            break;
        }
        chartConfigOptions.plotOptions.treemap.prevLayout = chartConfigOptions.plotOptions.treemap.currentLayout.slice(0);
        iPrevAspectRatio = iCurrAspectRatio;
    }
    if (oData.length > 1) {
        if (iLoopCounter === oData.length) {
            iLoopCounter -= 1;
        }
        iCalcDimension = ((iSum - oData[iLoopCounter][sFieldName]) / iTotal) * iDimensionX;
    }
    if (bFlag) {
        MAQ.plotArea(chartConfigOptions, oContainerDiv.clientWidth, oContainerDiv.clientHeight, iLoopCounter, iCalcDimension, 'width', 'height');
    } else {
        MAQ.plotArea(chartConfigOptions, oContainerDiv.clientHeight, oContainerDiv.clientWidth, iLoopCounter, iCalcDimension, 'height', 'width');
    }
};
MAQ.createTreemap = function (chartConfigOptions) {
    var oTreemapOptions = chartConfigOptions.plotOptions.treemap;
    var oContainer = chartConfigOptions.container;
    var oData = chartConfigOptions.series.child,
        iWidth = oContainer.clientWidth,
        iHeight = oContainer.clientHeight,
        iTotal = MAQ.getMinMax(oData, 0, 0, oTreemapOptions.fieldName).total;
    oData.sort(dynamicSort(oTreemapOptions.fieldName, false));
    if (oData.length > 0) {
        if (iWidth >= iHeight) {
            MAQ.calculateDimension(chartConfigOptions, iWidth, iHeight, iTotal, true);
        } else {
            MAQ.calculateDimension(chartConfigOptions, iHeight, iWidth, iTotal, false);
        }
    }
    if (oTreemapOptions.currentLevel === 0) {
        var oNav = document.getElementById('navig');
        oNav.innerHTML = 'All';
    }
};

function PerformDrill(evt, oParam) {
    var iCounter = oParam.position;
    var oSeries = [];
    var oBowTie = oParam.chartConfig.plotOptions.bowtie;
    if (oBowTie.branch.currentLevel < oData.length) {
        var iCurrentDrillLevel = oBowTie.branch.currentLevel;
        var oCurrData = oData[iCurrentDrillLevel];
        oSeries[0] = oCurrData.left;
        oBowTie.branch.left.title.text = oCurrData.lefttitle;
        oSeries[1] = oCurrData.right;
        oBowTie.branch.right.title.text = oCurrData.righttitle;
        oParam.chartConfig.series = oSeries;
        return oParam.chartConfig;
    } else {
        oParam.chartConfig.plotOptions.bowtie.branch.currentLevel -= 1;
    }
}

function PerformDrillBack(evt, oParam) {
    var oBowTie = oParam.chartConfig.plotOptions.bowtie;
    oBowTie.branch.currentLevel -= 1;
    var iCounter = oParam.position;
    var oSeries = [];
    var iCurrentDrillLevel = oBowTie.branch.currentLevel;
    var oCurrData = oData[iCurrentDrillLevel];
    oSeries[0] = oCurrData.left;
    oBowTie.branch.left.title.text = oCurrData.lefttitle;
    oSeries[1] = oCurrData.right;
    oBowTie.branch.right.title.text = oCurrData.righttitle;
    oParam.chartConfig.series = oSeries;
    MAQ.createBowTieChart(oParam.chartConfig);
}


function PerformBowTieDrill(evt, oParam) {
    var iCounter = oParam.position;
    var oSeries = [];
    var oBowTie = oParam.chartConfig.plotOptions.halfbowtie;
    if (oBowTie.branch.currentLevel < oData.length) {
        oBowTie.branch.currentLevel += 1;
        var iCurrentDrillLevel = oBowTie.branch.currentLevel;
        var oCurrData = oData[iCurrentDrillLevel];
        //oSeries[0] = oCurrData.left;
        //oBowTie.branch.left.title.text = oCurrData.lefttitle;
        oSeries[0] = oCurrData.right;
        //oBowTie.branch.right.title.text = oCurrData.righttitle;
        oParam.chartConfig.series = oSeries;
        MAQ.createHalfBowTieChart(oParam.chartConfig);
       
        if (oBowTie.branch.currentLevel > 0) {
            var oDrillBackImage = {
                x: oParam.chartConfig.svgELE.x.baseVal.value + 5,
                y: oDimensionTotalTitle.y,
                width: 24,
                height: 24
            };
            var oBackImage = MAQ.createSVGElement(oParam.chartConfig.svgNS, 'image', oDrillBackImage);
            oGrpELESum.appendChild(oBackImage);
            //var oParam = {
            //    chartConfig: oConfig,
            //    series: oConfig.series
            //};
            MAQ.addEventListener(oBackImage, 'click', oBowTie.branch.drillBackFunction, oParam);
            oBackImage.setAttributeNS(oParam.chartConfig.xlinkNS, 'xlink:href', '../PublishingImages/PreviousArrow.png');
            oImageDim = MAQ.getObjectDimension(oBackImage);
            MAQ.addAttr(oBackImage, 'y', oDrillBackImage.y - oDimensionTotalTitle.height - oImageDim.height);
        } //else {
        //    oParam.chartConfig.plotOptions.bowtie.branch.currentLevel -= 1;
        //}
    } else {
        oParam.chartConfig.plotOptions.halfbowtie.branch.currentLevel -= 1;
    }
}
function PerformBowTieDrillBack(evt, oParam) {
    var oBowTie = oParam.chartConfig.plotOptions.halfbowtie;
    oBowTie.branch.currentLevel -= 1;
    var iCounter = oParam.position;
    var oSeries = [];
    var iCurrentDrillLevel = oBowTie.branch.currentLevel;
    var oCurrData = oData[iCurrentDrillLevel];
    //oSeries[0] = oCurrData.left;
    //oBowTie.branch.title.text = oCurrData.lefttitle;
    oSeries[0] = oCurrData.right;
    //oBowTie.branch.title.text = oCurrData.righttitle;
    oParam.chartConfig.series = oSeries;
    MAQ.createHalfBowTieChart(oParam.chartConfig);
    if (oBowTie.branch.currentLevel > 0) {
        var oDrillBackImage = {
            x: oParam.chartConfig.svgELE.x.baseVal.value - 12,
            y: oDimensionTotalTitle.y,
            width: 24,
            height: 24
        };
        var oBackImage = MAQ.createSVGElement(oParam.chartConfig.svgNS, 'image', oDrillBackImage);
        oGrpELESum.appendChild(oBackImage);
        //var oParam = {
        //    chartConfig: oConfig,
        //    series: oConfig.series
        //};
        MAQ.addEventListener(oBackImage, 'click', oBowTie.branch.drillBackFunction, oParam);
        oBackImage.setAttributeNS(oParam.chartConfig.xlinkNS, 'xlink:href', '../PublishingImages/PreviousArrow.png');
        oImageDim = MAQ.getObjectDimension(oBackImage);
        MAQ.addAttr(oBackImage, 'y', oDrillBackImage.y - oDimensionTotalTitle.height - oImageDim.height);
    }
}


function TrimText(sInput) {
    if (sInput.length >= 13) {
        sInput = sInput.substring(0, 9) + '...';
    }
    return sInput;
}
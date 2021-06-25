import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css'],
})
export class DoughnutChartComponent implements OnInit {
  public options: any = {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Doughnut Test',
    },
    credits: {
      enabled: false,
    },
    tooltip: {
      valueSuffix: 'Heures',
    },

    series: [
      {
        name: 'Charge',
        data: [
          {
            name: 'BD',
            y: 10,
          },
          {
            name: 'CPP',
            y: 50,
          },
          {
            name: 'JEE',
            y: 25,
          },
        ],
        innerSize: '90%',
        showInLegend: true,
        dataLabels: {
          color: 'black',
        },
      },
    ],
  };
  constructor() {}

  ngOnInit() {
    Highcharts.chart('container', this.options);
  }
}

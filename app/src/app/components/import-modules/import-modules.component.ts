import { Component, VERSION, ViewChild, OnInit, Input } from '@angular/core';
import { DepartementService } from 'src/app/services/departement.service';
import { Departement } from 'src/app/models/departement.model';
import { Filiere } from 'src/app/models/filiere.model';
import { Module } from 'src/app/models/module.model';
import { ModuleService } from 'src/app/services/module.service';
import { SharedService } from 'src/app/services/shared.service';
export class CsvData {
  public nom: any;
  public semstre: any;
  public filID: any;
  public depID: any;
}
@Component({
  selector: 'app-import-modules',
  templateUrl: './import-modules.component.html',
  styleUrls: ['./import-modules.component.css'],
})
export class ImportModulesComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  public records: any[] = [];
  @ViewChild('csvReader') csvReader: any;
  jsondatadisplay: any;
  CurrentFil: any;
  @Input() FilID;
  ngOnInit() {}
  constructor(
    private DepService: DepartementService,
    private ModService: ModuleService,
    private SharedService: SharedService
  ) {}
  uploadListener($event: any): void {
    let text = [];
    let files = $event.srcElement.files;

    if (this.isValidCSVFile(files[0])) {
      let input = $event.target;
      let reader = new FileReader();
      reader.readAsText(input.files[0]);
      console.log('reader', reader);
      reader.onload = () => {
        let csvData = <string>reader.result;
        let csvRecordsArray = csvData.split(/\r\n|\n/);
        let headersRow = this.getHeaderArray(csvRecordsArray);
        this.records = this.getDataRecordsArrayFromCSVFile(
          csvRecordsArray,
          headersRow.length
        );
        this.records.forEach((r, index, arr) => {
          this.ModService.createModule({
            nom: r.nom,
            semestre: r.semestre,
            filID: r.filID,
            depID: r.depID,
          }).subscribe(() => {
            if (index == arr.length - 1) alert('Modules Importés avec succés');
          });
        });
      };

      reader.onerror = function () {
        console.log('error is occured while reading file!');
      };
    } else {
      alert('Please import valid .csv file.');
      this.fileReset();
    }
  }

  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {
    let csvArr = [];

    for (let i = 1; i < csvRecordsArray.length; i++) {
      let currentRecord = csvRecordsArray[i].split(',');
      if (currentRecord.length == headerLength) {
        let csvRecord: CsvData = new CsvData();
        csvRecord.nom = currentRecord[0].trim();
        csvRecord.semstre = currentRecord[1].trim();
        csvRecord.filID = this.FilID;
        this.SharedService.currentDeparetement.subscribe((dep) => {
          if (dep) csvRecord.depID = dep.id;
        });

        csvArr.push(csvRecord);
      }
    }
    console.log(csvArr);
    return csvArr;
  }

  //check etension
  isValidCSVFile(file: any) {
    return file.name.endsWith('.csv');
  }

  getHeaderArray(csvRecordsArr: any) {
    let headers = csvRecordsArr[0].split(',');
    let headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }
    return headerArray;
  }

  fileReset() {
    this.csvReader.nativeElement.value = '';
    this.records = [];
    this.jsondatadisplay = '';
  }

  getJsonData() {
    this.jsondatadisplay = JSON.stringify(this.records);
  }
}

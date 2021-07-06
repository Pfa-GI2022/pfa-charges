import { Component, VERSION, ViewChild, OnInit } from '@angular/core';
import { DepartementService } from 'src/app/services/departement.service';
import { ProfesseurService } from 'src/app/services/professeur.service';
import { UserService } from 'src/app/services/user.service';
import { Departement } from 'src/app/models/departement.model';
import { Professeur } from 'src/app/models/professeur.model';
import { ChargeService } from 'src/app/services/charge.service';
export class CsvData {
  public nom: any;
  public prenom: any;
  public dateNaissance: any;
  public email: any;
  public grade: any;
  public depID: any;
  public username: any;
}

@Component({
  selector: 'app-import-professeurs',
  templateUrl: './import-professeurs.component.html',
  styleUrls: ['./import-professeurs.component.css'],
})
export class ImportProfesseursComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  public records: any[] = [];
  @ViewChild('csvReader') csvReader: any;
  jsondatadisplay: any;
  Dep: Departement;
  Prof: Professeur;
  CurrentDep: any;
  ChefDep: any;

  ngOnInit() {
    console.log(this.Dep);
  }
  constructor(
    private DepService: DepartementService,
    private ProfService: ProfesseurService,
    private UserService: UserService,
    private ChargeService: ChargeService
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
        console.log(this.records);
        this.records = this.getDataRecordsArrayFromCSVFile(
          csvRecordsArray,
          headersRow.length
        );

        console.log(this.records, 'after');
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
      let curruntRecord = csvRecordsArray[i].split(',');
      if (curruntRecord.length == headerLength) {
        let csvRecord: CsvData = new CsvData();
        csvRecord.nom = curruntRecord[0].trim();
        csvRecord.prenom = curruntRecord[1].trim();
        csvRecord.email = curruntRecord[2].trim();
        csvRecord.grade = curruntRecord[3].trim();
        csvRecord.username = curruntRecord[4].trim();
        csvArr.push(csvRecord);
      }
    }
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

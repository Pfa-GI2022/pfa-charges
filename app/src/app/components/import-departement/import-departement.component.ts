import {
  Component,
  VERSION,
  ViewChild,
  OnInit
} from '@angular/core';
import {
  DepartementService
} from 'src/app/services/departement.service';
import {
  ProfesseurService
} from 'src/app/services/professeur.service';
import {
  UserService
} from 'src/app/services/user.service';
import {
  Departement
} from 'src/app/models/departement.model';
import {
  Professeur
} from 'src/app/models/professeur.model';
import {
  ChargeService
} from 'src/app/services/charge.service';
export class CsvData {
  public nomDep: any;
  public nomChefDep: any;
  public prenomChefDep: any;
  public emailChefDep: any;
  public grade: any;
  public username: any;
}

@Component({
  selector: 'app-import-departement',
  templateUrl: './import-departement.component.html',
  styleUrls: ['./import-departement.component.css'],
})
export class ImportDepartementComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  public records: any[] = [];
  @ViewChild('csvReader') csvReader: any;
  jsondatadisplay: any;
  Dep: Departement;
  Prof: Professeur;
  CurrentDep: any;
  ChefDep: any;

  ngOnInit() {}
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
        this.records.forEach((r) => {
          this.Prof = { nom: r.nomChefDep, prenom: r.prenomChefDep };
          this.Dep = { nom: r.nomDep, professeur: this.Prof };
          this.DepService.createDepartement(this.Dep).subscribe((response) => {
            this.CurrentDep = response;
            this.ChefDep = this.CurrentDep.professeur;
            this.ProfService.updateProfesseur(
              { depID: this.CurrentDep.id },
              this.ChefDep.id
            ).subscribe();
            this.ChargeService.createCharge({}, this.ChefDep.id).subscribe();
          });
          this.UserService.createUser({
            username: r.username,
            password: 'pass',
            email: r.emailChefDep,
          }).subscribe();
        });
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
        csvRecord.nomDep = curruntRecord[0].trim();
        csvRecord.nomChefDep = curruntRecord[1].trim();
        csvRecord.prenomChefDep = curruntRecord[2].trim();
        csvRecord.emailChefDep = curruntRecord[3].trim();
        csvRecord.grade = curruntRecord[4].trim();
        csvRecord.username = curruntRecord[5].trim();
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

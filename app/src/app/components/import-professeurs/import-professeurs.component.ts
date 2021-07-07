import { Component, VERSION, ViewChild, OnInit, Input } from '@angular/core';
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
  Prof: Professeur;
  CurrentDep: any;
  ChefDep: any;
  Dep: Departement;
  @Input() DepID;
  Deps: Departement[];
  ngOnInit() {}
  constructor(
    private DepService: DepartementService,
    private ProfService: ProfesseurService,
    private UserService: UserService,
    private ChargeService: ChargeService
  ) {
    this.DepService.getAllDeps().subscribe((data) => (this.Deps = data));
  }
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
        console.log(this.DepID);
        console.log(this.records, 'after');
        this.records.forEach((r) => {
          this.Prof = {
            nom: r.nom,
            prenom: r.prenom,
            email: r.email,
            dateNaissance: r.dateNaissance,
            depID: r.depID,
            grade: r.grade,
            charge: {},
          };

          this.UserService.createUser({
            username: r.username,
            password: 'pass',
            email: r.email,
            roles: ['professeur'],
          }).subscribe(
            () => {
              this.ProfService.createProfesseur(this.Prof).subscribe();
              alert('Données Importées avec succés');
            },
            () => {
              alert("Nom d'Utilisateur ou Adresse Mail déjà utilisé");
            }
          );
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
        csvRecord.prenom = currentRecord[1].trim();
        csvRecord.email = currentRecord[3].trim();
        csvRecord.dateNaissance = currentRecord[2].trim();
        csvRecord.grade = currentRecord[4].trim();
        csvRecord.depID = this.DepID;
        csvRecord.username = currentRecord[5].trim();
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

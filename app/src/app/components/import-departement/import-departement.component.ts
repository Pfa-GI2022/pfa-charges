import { Component, VERSION, ViewChild, OnInit } from '@angular/core';
import { DepartementService } from 'src/app/services/departement.service';
import { ProfesseurService } from 'src/app/services/professeur.service';
import { UserService } from 'src/app/services/user.service';
import { Departement } from 'src/app/models/departement.model';
import { Professeur } from 'src/app/models/professeur.model';
import { ChargeService } from 'src/app/services/charge.service';
export class CsvData {
  public nomDep: any;
  public nomChefDep: any;
  public prenomChefDep: any;
  public emailChefDep: any;
  public grade: any;
  public dateNaissance: any;
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

        console.log(this.records);
        this.records.forEach((r, index, arr) => {
          console.log(this.Dep);
          this.UserService.createUser({
            username: r.username,
            password: 'pass',
            email: r.emailChefDep,
            roles: ['chefDeDepartement'],
          }).subscribe(
            () => {
              this.Prof = {
                nom: r.nomChefDep,
                prenom: r.prenomChefDep,
                email: r.emailChefDep,
                grade: r.grade,
                dateNaissance: r.dateNaissance,
              };
              this.Dep = { nom: r.nomDep, professeur: this.Prof };
              console.log(this.Dep, 'Create User Subscribe');
              this.DepService.createDepartement(this.Dep).subscribe(
                (response) => {
                  this.CurrentDep = response;
                  this.ChefDep = this.CurrentDep.professeur;
                  this.ProfService.updateProfesseur(
                    { depID: this.CurrentDep.id },
                    this.ChefDep.id
                  ).subscribe();
                  this.ChargeService.createCharge(
                    {},
                    this.ChefDep.id
                  ).subscribe();
                }
              );
              if (index == arr.length - 1) {
                alert('Données Importées avec succés');
                window.location.reload();
              }
            },
            () => {
              if (index == arr.length - 1)
                alert("Import échoué. Nom d'utilisateur ou Email Dupliqué.");
            }
          );
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
      let currentRecord = csvRecordsArray[i].split(',');
      if (currentRecord.length == headerLength) {
        let csvRecord: CsvData = new CsvData();
        csvRecord.nomDep = currentRecord[0].trim();
        csvRecord.nomChefDep = currentRecord[1].trim();
        csvRecord.prenomChefDep = currentRecord[2].trim();
        csvRecord.emailChefDep = currentRecord[3].trim();
        csvRecord.grade = currentRecord[4].trim();
        csvRecord.dateNaissance = currentRecord[5].trim();
        csvRecord.username = currentRecord[6].trim();
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

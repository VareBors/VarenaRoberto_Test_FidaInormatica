import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/services/api.service';
import { ApiData } from 'src/Interfaces/ApiData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VarenaRoberto_Test_FidaInormatica';


  public formOperationData : FormGroup; 

  constructor(private translate : TranslateService, private apiService : ApiService){
    // Imposto la lingua indicato en - ingelse, it - italiano. i file si trovano in assets/i18n
    translate.setDefaultLang('it');

    this.formOperationData = new FormGroup({
      currency : new FormControl('',Validators.required),
      causalType : new FormControl('',Validators.required),
      operationDate : new FormControl('',Validators.required),
      tool : new FormControl('',Validators.required),
      quantity : new FormControl(0,Validators.required),
      price : new FormControl(0,Validators.required),
      amount : new FormControl(0, Validators.required)
    });
  }

  OnSubmitData(){
    var apiData : ApiData = {
      currency : this.formOperationData.controls["currency"].value,
      causalType : this.formOperationData.controls["causalType"].value,
      operationDate : this.formOperationData.controls["operationDate"].value,
      tool : this.formOperationData.controls["operationDate"].value,
      quantity : this.formOperationData.controls["operationDate"].value,
      price : this.formOperationData.controls["price"].value,
      amount : this.formOperationData.controls["amount"].value,
    }
    
    this.apiService.sendToApi(apiData).subscribe(
      succes => {
        console.log("success");
      },
      error => {
        console.log(error);
      }
    );
  }

  OnPriceOrQuantityChange(){

    this.formOperationData.controls["amount"].setValue(this.formOperationData.controls["quantity"].value  * this.formOperationData.controls["price"].value)
  }
}

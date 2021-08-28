import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

import { DemoFilePickerAdapter } from  '../../file-picker.adapter';
import { FilePickerComponent } from '../../../assets/file-picker/src/lib/file-picker.component';
import { FilePreviewModel } from '../../../assets/file-picker/src/lib/file-preview.model';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { ScrollTopService }  from '../../services/scroll-top.service';
import { isError } from "util";
import { PagoInterface } from '../../models/pago-interface'; 
import { OrderInterface } from '../../models/order-interface';

import { UserWService } from '../../services/user-w.service';
import { DataApiService } from '../../services/data-api.service';
import { ValidationError } from '../../../assets/file-picker/src/lib/validation-error.model';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {
 adapter = new DemoFilePickerAdapter(this.http,this._uw);
  @ViewChild('uploader', { static: true }) uploader: FilePickerComponent;
   myFiles: FilePreviewModel[] = [];

  constructor(    
    public scrollTopService:ScrollTopService,
    private http: HttpClient,
    public _uw:UserWService, 
    private dataApiService: DataApiService,
    private location: Location,
    private router: Router,
    private formBuilder: FormBuilder
  	) { }
   public isError = false;
  public orders:OrderInterface;
  public order:OrderInterface;  
  public pagoImage:any[]=[];
  public images:any[]=[];
  public pago : PagoInterface ={
        pagoImage:[],
      npedido:""
    };
  

    ngFormSendPago: FormGroup;
    submittedPago = false;
    
  public okPago(){
    let id = this._uw.order.id;
    console.log("id disponible para enviar: "+id);
    this.updateOrder();

  }

// getOrder(){
//    this.dataApiService.getOrderByNpedido().subscribe();
// }



 public getOrder(npedido: string){
    this.dataApiService.getOrderByNpedido(npedido).subscribe(order => (this.order = order));
         // this._uw.orderPro=this.order;


         // console.log("id nuevo: "+this.order.id);

  }


  public  updateOrder(){
      this.submittedPago= true; 
      if (this.ngFormSendPago.invalid) {
        this._uw.errorFormPago=true;
        return;
      } 
      this._uw.errorFormPago=false;
      // this._uw.orderPro=this.order;
      this._uw.orderPro.pagoImage=this._uw.images;           
      // let id = this._uw.orderPro.id;
      // console.log("order id"+this.id);
      // this.dataApiService.updateOrder(this._uw.orderPro, id)
      //   .subscribe(
      //     // tix => this.router.navigate(['/succesConfig'])
      // );

    }

  ngOnInit() {
    this.getOrder(this._uw.order.npedido);
    console.log("id conseguido: "+this.order.id);
    // console.log.("id order: "+this._uw.orderPro.id);
      this.ngFormSendPago = this.formBuilder.group({
      npedido: ["",[Validators.required]]
      });
  }


    onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }


  reset():void{
    // this._uw.selectorA=true;
    // this.router.navigate(['/addtixs']);
  }
   onValidationError(e: ValidationError) {
    console.log(e);
  }
  onUploadSuccess(e: FilePreviewModel) {
  this.images=this._uw.file;
  }
  onRemoveSuccess(e: FilePreviewModel) {  
    console.log(e);
  }
  onFileAdded(file: FilePreviewModel) {
     this.myFiles.push(file);
  }

  removeFile() {
  this.uploader.removeFileFromList(this.myFiles[0].fileName);
  }

}

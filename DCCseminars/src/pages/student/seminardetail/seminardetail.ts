import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { Seminar } from '../../../app/seminar';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Http, RequestOptions, Headers } from '@angular/http';
import { NativeStorage } from '@ionic-native/native-storage';


@IonicPage()
@Component({
  selector: 'page-seminardetail',
  templateUrl: 'seminardetail.html',
})
export class Seminardetail {

  loading: boolean = true;
  id: string;
  nusp: string;
  barcodeData: 'QR_CODE';
  seminar: Seminar;
  seminarId: string;
  data:  {
    id : string
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: Http,
    private barcodeScanner: BarcodeScanner,
    private toastCtrl: ToastController,
    private storage: NativeStorage
  ) {
    this.id = navParams.get("id");
  }

  ionViewDidLoad() {
    this.storage.getItem('studentnusp').then(
      () => this.nusp
    );
    let toastscanerror = this.toastCtrl.create({
      message: 'Erro em ler o QR CODE',
      duration: 3000,
      position: 'bottom'
    });
    let toastseminargeterror = this.toastCtrl.create({
      message: 'Erro em conseguirdetalhes do seminário',
      duration: 3000,
      position: 'bottom'
    });
    this.http.get('http://207.38.82.139:8001/seminar/get/' + this.id).subscribe(
      (response) => {
        this.seminar = response.json().data as Seminar
        this.loading = false;
      },
      (error) => {
        toastseminargeterror.present();
      }
    )
    var self = this;
    this.barcodeScanner.scan().then((barcodeData) => {
     // Success! Barcode data is here
     let data = barcodeData;
     let seminarId = this.data.id;
     self.submit(self.nusp,seminarId)
    }, (err) => {
        toastscanerror.present();
    });
  }

  submit(nusp:string,seminarId:string) {
    this.loading = true;

    let headers = new Headers({"Content-Type": "application/x-www-form-urlencoded"});
    let options = new RequestOptions({ headers: headers});
    let toastsuccess = this.toastCtrl.create({
      message: 'Presença adicionada',
      duration: 5000,
      position: 'bottom'
    });

    this.http.post(
      "http://207.38.82.139:8001/attendence/submit",
      `nusp=${this.nusp}&seminar_id=${this.seminarId}`,
      options
    ).subscribe(
      (response) => {
        let wasSuccessful: boolean = response.json().success;
        if (wasSuccessful) {
          toastsuccess.present();
          this.loading = true;
        } else {
          this.notifyError();
        }
        this.loading = false;
      },
      (error) => {
        this.notifyError();
        this.loading = false;
      }
    )
  }

  notifyError() {
    let toasterror = this.toastCtrl.create({
      message: 'Erro adicionando presença',
      duration: 3000,
      position: 'bottom'
    });

    toasterror.present();
  }
}

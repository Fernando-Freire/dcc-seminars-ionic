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
  usernusp: string;
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
    this.storage.getItem('usernusp').then(
       () => this.usernusp
     );

    let toastseminargeterror = this.toastCtrl.create({
      message: 'Erro carregando seminário',
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
  }

  scanQRCode() {
    var self = this;
    let toastscanerror = this.toastCtrl.create({
      message: 'Erro ao ler o QR code',
      duration: 3000,
      position: 'bottom'
    });

    this.barcodeScanner.scan().then(
      (barcodeData) => {
        if (!barcodeData.cancelled) {
          let seminarId = barcodeData.text;
          self.submit(self.usernusp, seminarId);
        }
      }, (err) => {
        toastscanerror.present();
      }
    );
  }

  submit(nusp:string, seminarId:string) {
    this.loading = true;
    var self = this;

    let headers = new Headers({"Content-Type": "application/x-www-form-urlencoded"});
    let options = new RequestOptions({ headers: headers});

    let toastsuccess = this.toastCtrl.create({
      message: "Presença confirmada",
      duration: 5000,
      position: 'bottom'
    });

    this.http.post(
      "http://207.38.82.139:8001/attendence/submit",
      "nusp=" + nusp + "&seminar_id= " + seminarId,
      options
    ).subscribe(
      (response) => {
        let wasSuccessful: boolean = response.json().success;
        if (wasSuccessful) {
          toastsuccess.present();
        } else {
          self.notifyError();
        }
        self.loading = false;
      },
      (error) => {
        self.notifyError();
        self.loading = false;
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

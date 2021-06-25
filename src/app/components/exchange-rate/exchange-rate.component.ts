import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BackendService } from 'src/app/service/backend.service';


@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.css']
})
export class ExchangeRateComponent implements OnInit {

  form!: FormGroup;

  countryCode: string[] = ['USD', 'THB', 'JPY'];

  constructor(private fb: FormBuilder, private backendService: BackendService, private httpClient: HttpClient) {

    this.form = this.fb.group({
      currencyAmount: '',
      currencyCode: ['', Validators.required],
      convertedAmount: '',
      convertedCode: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  convertButton() {
    alert(JSON.stringify(this.form.value));
  };

}

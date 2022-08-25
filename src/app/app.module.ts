import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense(
  'ORg4AjUWIQA/Gnt2VVhiQlFadVlJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdk1jXH9bcnRWTmVbWUQ='
);

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, CheckBoxModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

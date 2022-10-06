import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { YoutubeComponent } from './youtube/youtube.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SampleComponent } from './sample/sample.component';
import { FormComponent } from './form/form.component';
import { NewssiteComponent } from './newssite/newssite.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalcComponent } from './calc/calc.component';
import { ToggleComponent } from './toggle/toggle.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DirectivesComponent } from './directives/directives.component';
import { HttpClientModule } from '@angular/common/http';
import { SendmailComponent } from './sendmail/sendmail.component';
import { BackComponent } from './sendmail/back/back.component';
import { MailformComponent } from './sendmail/mailform/mailform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ValidformComponent } from './validform/validform.component';



@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    YoutubeComponent,
    SampleComponent,
    FormComponent,
    NewssiteComponent,
    CalculatorComponent,
    CalcComponent,
    ToggleComponent,
    SidebarComponent,
    DirectivesComponent,
    SendmailComponent,
    BackComponent,
    MailformComponent,
    ReactiveformComponent,
    ValidformComponent,
       

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

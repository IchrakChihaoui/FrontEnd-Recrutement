import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { IndexComponent } from './index/index.component';
import { JobPageComponent } from './job-page/job-page.component';
import { JobPageAltComponent } from './job-page-alt/job-page-alt.component';
import { ResumePageComponent } from './resume-page/resume-page.component';
import { ShortcodesComponent } from './shortcodes/shortcodes.component';
import { PricingTablesComponent } from './pricing-tables/pricing-tables.component';
import { ContactComponent } from './contact/contact.component';
import { BrowseJobsComponent } from './browse-jobs/browse-jobs.component';
import { BrowseCategoriesComponent } from './browse-categories/browse-categories.component';
import { AddResumeComponent } from './add-resume/add-resume.component';
import { ManageResumesComponent } from './manage-resumes/manage-resumes.component';
import { JobAlertsComponent } from './job-alerts/job-alerts.component';
import { AddJobComponent } from './add-job/add-job.component';
import { ManageJobsComponent } from './manage-jobs/manage-jobs.component';
import { ManageApplicationsComponent } from './manage-applications/manage-applications.component';
import { BrowseResumesComponent } from './browse-resumes/browse-resumes.component';
import { HttpClient } from '@angular/common/http';
import { RestApiService } from './services/rest-api.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MyAccountComponent,
    IndexComponent,
    JobPageComponent,
    JobPageAltComponent,
    ResumePageComponent,
    ShortcodesComponent,
    PricingTablesComponent,
    ContactComponent,
    BrowseJobsComponent,
    BrowseCategoriesComponent,
    AddResumeComponent,
    ManageResumesComponent,
    JobAlertsComponent,
    AddJobComponent,
    ManageJobsComponent,
    ManageApplicationsComponent,
    BrowseResumesComponent,
  ],
  imports: [
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [RestApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddJobComponent } from './add-job/add-job.component';
import { AddResumeComponent } from './add-resume/add-resume.component';
import { BrowseCategoriesComponent } from './browse-categories/browse-categories.component';
import { BrowseJobsComponent } from './browse-jobs/browse-jobs.component';
import { BrowseResumesComponent } from './browse-resumes/browse-resumes.component';
import { ContactComponent } from './contact/contact.component';
import { IndexComponent } from './index/index.component';
import { JobAlertsComponent } from './job-alerts/job-alerts.component';
import { JobPageAltComponent } from './job-page-alt/job-page-alt.component';
import { JobPageComponent } from './job-page/job-page.component';
import { ManageApplicationsComponent } from './manage-applications/manage-applications.component';
import { ManageJobsComponent } from './manage-jobs/manage-jobs.component';
import { ManageResumesComponent } from './manage-resumes/manage-resumes.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { PricingTablesComponent } from './pricing-tables/pricing-tables.component';
import { ResumePageComponent } from './resume-page/resume-page.component';
import { AuthGuard } from './services/auth/auth.guard';
import { ShortcodesComponent } from './shortcodes/shortcodes.component';

const routes: Routes = [
  
  { path: '', component: IndexComponent },
  { path: 'index', component: IndexComponent },
  { path: 'job-page', component: JobPageComponent ,canActivate: [AuthGuard] },
  { path: 'job-page-alt', component: JobPageAltComponent,canActivate: [AuthGuard] },
  { path: 'resume-page', component: ResumePageComponent,canActivate: [AuthGuard] },
  { path: 'shortcodes', component: ShortcodesComponent,canActivate: [AuthGuard] },
  { path: 'pricing-tables', component: PricingTablesComponent,canActivate: [AuthGuard] },
  { path: 'contact', component: ContactComponent,canActivate: [AuthGuard] },
  { path: 'browse-jobs', component: BrowseJobsComponent,canActivate: [AuthGuard] },
  { path: 'browse-categories', component: BrowseCategoriesComponent ,canActivate: [AuthGuard]},
  { path: 'add-resume', component: AddResumeComponent,canActivate: [AuthGuard]},
  { path: 'manage-resumes', component: ManageResumesComponent,canActivate: [AuthGuard] },
  { path: 'job-alerts', component: JobAlertsComponent,canActivate: [AuthGuard] },
  { path: 'add-job', component: AddJobComponent,canActivate: [AuthGuard] },
  { path: 'manage-jobs', component: ManageJobsComponent,canActivate: [AuthGuard] },
  { path: 'manage-applications', component: ManageApplicationsComponent,canActivate: [AuthGuard] },
  { path: 'browse-resumes', component: BrowseResumesComponent,canActivate: [AuthGuard] },
  { path: 'my-account', component: MyAccountComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]

})
export class AppRoutingModule { }

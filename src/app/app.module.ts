import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FeaturesComponent } from './components/features/features.component';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';
import { ContactComponent } from './components/contact/contact.component';
import { HippaChecklistComponent } from './components/hippa-checklist/hippa-checklist.component';
import { HippaForWelloculusComponent } from './components/hippa-for-welloculus/hippa-for-welloculus.component';

const appRoutes: Routes = [
{ path:'about', component: DashboardComponent },
{ path:'features', component: FeaturesComponent },
{ path:'tech-stack', component: TechStackComponent  },
{ path:'hippa-checklist', component: HippaChecklistComponent },
{ path:'hippa-for-welloculus', component: HippaForWelloculusComponent },
{ path:'contact-us', component: ContactComponent },
{ path: '', redirectTo: '/about', pathMatch: 'full' },
{ path:'', component: FooterComponent  },
{ path: '**', redirectTo: '/about', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    SidebarComponent,
    FeaturesComponent,
    TechStackComponent,
    ContactComponent,
    HippaChecklistComponent,
    HippaForWelloculusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

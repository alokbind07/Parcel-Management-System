import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerService } from './services/customer.service';
import { AdminHomeComponent } from './component/admin-home/admin-home.component';
import { CustomerDashboardComponent } from './component/customer-dashboard/customer-dashboard.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BookParcelComponent } from './component/bookparcel/bookparcel.component';
import { CustomerSearchComponent } from './component/customer-search/customer-search.component';
import { CustomerParcelDetailsComponent } from './component/customer-parcel-details/customer-parcel-details.component';
import { OfficerNavbarComponent } from './component/officer-navbar/officer-navbar.component';
import { AdminSearchComponent } from './component/admin-search/admin-search.component';
import { AdminParcelDetailsComponent } from './component/admin-parcel-details/admin-parcel-details.component';
import { DropPickupComponent } from './component/drop-pickup/drop-pickup.component';
import { ContactSupportComponent } from './component/contact-support/contact-support.component';
import { ParcelStatusComponent } from './component/update-status/update-status.component';
import { SearchHistoryComponent } from './component/search-history/search-history.component';
import { SearchHistoryDetailsComponent } from './component/search-history-details/search-history-details.component';
import { AdminBookingComponent } from './component/admin-booking/admin-booking.component';
import { AdminHistoryComponent } from './component/admin-history/admin-history.component';
import { HomeComponent } from './component/home/home.component';
import { HomenavComponent } from './component/homenav/homenav.component';
import { InvoiceComponent } from './component/invoice/invoice.component';
import { InvoiceDetailsComponent } from './component/invoice-details/invoice-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AdminHomeComponent,
    CustomerDashboardComponent,
    NavbarComponent,
    BookParcelComponent,
    CustomerSearchComponent,
    CustomerParcelDetailsComponent,
    OfficerNavbarComponent,
    AdminSearchComponent,
    AdminParcelDetailsComponent,
    DropPickupComponent,
    ContactSupportComponent,
    ParcelStatusComponent,
    BookParcelComponent,
    SearchHistoryComponent,
    SearchHistoryDetailsComponent,
    AdminBookingComponent,
    AdminHistoryComponent,
    HomenavComponent,
    InvoiceComponent,
    InvoiceDetailsComponent,
   

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [
    CustomerService,
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

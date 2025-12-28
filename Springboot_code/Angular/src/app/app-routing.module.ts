import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { AdminHomeComponent } from './component/admin-home/admin-home.component';
import { CustomerDashboardComponent } from './component/customer-dashboard/customer-dashboard.component';
import { BookParcelComponent } from './component/bookparcel/bookparcel.component';
import { CustomerSearchComponent } from './component/customer-search/customer-search.component';
import { CustomerParcelDetailsComponent } from './component/customer-parcel-details/customer-parcel-details.component';
import { AdminSearchComponent } from './component/admin-search/admin-search.component';
import { AdminParcelDetailsComponent } from './component/admin-parcel-details/admin-parcel-details.component';
import { DropPickupComponent } from './component/drop-pickup/drop-pickup.component';
import { ContactSupportComponent } from './component/contact-support/contact-support.component';
import { ParcelStatusComponent } from './component/update-status/update-status.component';
import { SearchHistoryComponent } from './component/search-history/search-history.component';
import { SearchHistoryDetailsComponent } from './component/search-history-details/search-history-details.component';
import { AdminBookingComponent } from './component/admin-booking/admin-booking.component';
import { AdminHistoryComponent } from './component/admin-history/admin-history.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './component/home/home.component';
import { InvoiceComponent } from './component/invoice/invoice.component';
import { InvoiceDetailsComponent } from './component/invoice-details/invoice-details.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'adminHome', component: AdminHomeComponent, canActivate: [AuthGuard] },
  {path: 'customerHome', component: CustomerDashboardComponent, canActivate: [AuthGuard] },
  {path: 'bookParcel', component: BookParcelComponent, canActivate: [AuthGuard] },
  {path: 'customerSearch', component: CustomerSearchComponent, canActivate: [AuthGuard] },
  {path: 'customerParcelDetails', component: CustomerParcelDetailsComponent, canActivate: [AuthGuard] },
  {path: 'adminSearch', component: AdminSearchComponent, canActivate: [AuthGuard] },
  {path: 'adminParcelDetails', component: AdminParcelDetailsComponent, canActivate: [AuthGuard] },
  {path: 'dropPickup', component: DropPickupComponent, canActivate: [AuthGuard] },
  {path: 'contactSupport', component: ContactSupportComponent, canActivate: [AuthGuard] },
  {path: 'updateStatus', component:ParcelStatusComponent, canActivate: [AuthGuard] },
  {path: 'customerBooking', component:BookParcelComponent, canActivate: [AuthGuard] },
  {path: 'searchHistory', component:SearchHistoryComponent, canActivate: [AuthGuard] },
  {path: 'searchHistoryDetails', component:SearchHistoryDetailsComponent, canActivate: [AuthGuard] },
  {path: 'adminBooking', component:AdminBookingComponent, canActivate: [AuthGuard] },
   {path: 'adminHistory', component:AdminHistoryComponent, canActivate: [AuthGuard] },
   {path: 'invoice', component:InvoiceComponent, canActivate: [AuthGuard] },
   {path: 'invoiceDetails', component:InvoiceDetailsComponent, canActivate: [AuthGuard] },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { NetworkComponent } from './pages/network/network.component';
import { AssetComponent } from './pages/asset/asset.component';
import { QueryFormComponent } from './pages/query-form/query-form.component';
import { QuotationFormComponent } from './pages/quotation-form/quotation-form.component';
import { SalesQuoteComponent } from './pages/sales-quote/sales-quote.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: '', redirectTo: 'network', pathMatch: 'full' },
      { path: 'network', component: NetworkComponent },
      { path: 'asset', component: AssetComponent },
      { path: 'query-form', component: QueryFormComponent },
      { path: 'quotation-form', component: QuotationFormComponent },
      { path: 'sales-quote', component: SalesQuoteComponent },


    ]
  },

]


@NgModule({
  declarations: [DashboardComponent, NetworkComponent, AssetComponent, QueryFormComponent, QuotationFormComponent, SalesQuoteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }

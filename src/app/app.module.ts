import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CartComponent } from './cart/cart.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';

const appRoutes: Routes = [
  {
    path: 'cart',
    component: CartComponent,
    data: { title: 'Cart List' }
  },
  {
    path: 'cart-details',
    component: CartDetailComponent,
    data: { title: 'Cart Details' }
  },
  { path: '',
    redirectTo: '/cart',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CartDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

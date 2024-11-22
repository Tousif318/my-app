import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';
import { DirectivesComponent } from './directives/directives.component';
import {EmployeeComponent } from './employee/employee.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccountComponent } from './account/account.component';
import { AmazonComponent } from './amazon/amazon.component';
import { MailComponent } from './mail/mail.component';
import { PinterestComponent } from './pinterest/pinterest.component';
import { WeatherappComponent } from './weatherapp/weatherapp.component';
import { BlogComponent } from './blog/blog.component';
import { ImdbComponent } from './imdb/imdb.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { CreateAccountComponent } from './create-account/create-account.component';
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'welcome',component:WelcomeComponent},
    {path:'data binding',component:DataBindingComponent},
    {path:'calculator',component:CalculatorComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'circle',component:CircleComponent},
    {path:'bmi',component:BMIComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'employee', component:EmployeeComponent},
    {path:'flipkart',component:FlipkartComponent},
    {path:'vehicle',component:VehicleComponent},
    {path:'account',component:AccountComponent},
    {path:'amazon',component:AmazonComponent},
    {path:'mail',component:MailComponent},
    {path:'pinterest',component:PinterestComponent},
    {path:'weatherapp',component:WeatherappComponent},
    {path:'blog',component:BlogComponent},
    {path:'imdb',component:ImdbComponent},
    {path:'create-vehicle',component:CreateVehicleComponent},
    {path:'pokemon',component:PokemonComponent},
    {path:'crate-account',component:CreateAccountComponent}
  ]},
  {path:'',component:LoginComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

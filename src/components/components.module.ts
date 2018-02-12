import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { BirthdaysComponent } from './birthdays/birthdays.component';
@NgModule({
	declarations: [DashboardComponent,
    HeaderComponent,
    LoginComponent,
    BirthdaysComponent],
	imports: [],
	exports: [DashboardComponent,
    HeaderComponent,
    LoginComponent,
    BirthdaysComponent]
})
export class ComponentsModule {}

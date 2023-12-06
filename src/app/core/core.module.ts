import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { JumbtronComponent } from './jumbtron/jumbtron.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, JumbtronComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, JumbtronComponent],
})
export class CoreModule {}

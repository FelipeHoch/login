import { NgModule } from '@angular/core';

import { ClarityDesignModule } from './clarity-design/clarity-design.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    ClarityDesignModule,
    FontAwesomeModule,
    FlexLayoutModule,
    CommonModule
  ],
  exports: [
    ClarityDesignModule,
    FontAwesomeModule,
    FlexLayoutModule,
    CommonModule
  ]
})
export class SharedModule { }

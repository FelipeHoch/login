import { NgModule } from '@angular/core';
import { ClarityDesignModule } from './clarity-design/clarity-design.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [],
  imports: [
    ClarityDesignModule,
    FontAwesomeModule,
    CommonModule
  ],
  exports: [
    ClarityDesignModule,
    FontAwesomeModule,
    CommonModule
  ]
})
export class SharedModule { }

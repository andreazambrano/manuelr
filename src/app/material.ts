import {MatButtonModule, MatCheckboxModule,MatTabsModule } from '@angular/material';
import {NgModule} from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatTabsModule,MatDialogModule,MatIconModule],
  exports: [MatButtonModule, MatCheckboxModule, MatTabsModule,MatDialogModule,MatIconModule],
})
export class MaterialModule { }
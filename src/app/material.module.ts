import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatMenuModule, MatIconModule, MatCardModule, MatSidenavModule, MatFormFieldModule,
  MatInputModule, MatTooltipModule, MatToolbarModule, MatDividerModule, MatSelectModule, MatChipsModule,
  MatListModule, MatDatepickerModule, MatAutocompleteModule, MatTableModule, MatRadioModule,
  MatNativeDateModule, MatSliderModule, MatDialogModule, MatCheckboxModule, MatPaginatorModule,
  MatSortModule, MatProgressSpinnerModule, MatSnackBarModule,MatButtonToggleModule
} from '@angular/material';


@NgModule({
  imports: [MatButtonModule, MatMenuModule, MatIconModule, MatCardModule, MatSidenavModule, MatFormFieldModule,
    MatInputModule, MatTooltipModule, MatToolbarModule, MatDividerModule, MatSelectModule, MatChipsModule,
    MatListModule, MatDatepickerModule, MatAutocompleteModule, MatTableModule, MatRadioModule,
    MatNativeDateModule, MatSliderModule, MatDialogModule, MatCheckboxModule, MatPaginatorModule,
    MatSortModule, MatProgressSpinnerModule, MatSnackBarModule, MatButtonToggleModule
  ],
  exports: [MatButtonModule, MatMenuModule, MatIconModule, MatCardModule, MatSidenavModule, MatFormFieldModule,
    MatInputModule, MatTooltipModule, MatToolbarModule, MatDividerModule, MatSelectModule, MatChipsModule,
    MatListModule, MatDatepickerModule, MatAutocompleteModule, MatTableModule, MatRadioModule,
    MatNativeDateModule, MatSliderModule, MatDialogModule, MatCheckboxModule, MatPaginatorModule, MatButtonToggleModule,
    MatSortModule, MatProgressSpinnerModule, MatSnackBarModule
  ]
})
export class MaterialModule { }
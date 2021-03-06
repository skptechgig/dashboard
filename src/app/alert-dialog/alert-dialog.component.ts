import { Component, OnInit ,Inject} from '@angular/core';
import { MatDialogRef ,MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss']
})
export class AlertDialogComponent implements OnInit {
  buttonClicked: boolean;

  constructor(public dialogRef: MatDialogRef<AlertDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  onClick(){
    this.buttonClicked=true;
    this.dialogRef.close();
  }
  onCancel(){
    this.dialogRef.close();
  }
}

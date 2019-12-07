import { Component, OnInit, ViewChild } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';
@Component({
  selector: 'app-with-draw',
  templateUrl: './with-draw.component.html',
  styleUrls: ['./with-draw.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class WithDrawComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource<any>();
  columnsToDisplay = ['User', 'Date', 'Status', 'Actions'];
  expandedElement: any;
  isPending: boolean;
  isCompleted: boolean=true;
  isRevert: boolean= true;
  constructor(public dialog: MatDialog) {}
  ngOnInit(){
    this.dataSource.data=ELEMENT_DATA;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  toggleRow(value) {
    this.expandedElement=value;
    // const foundElement = this.dataSource.data.find(elem => elem !== undefined && elem.clientId === value.clientId)    
    // console.log("The found element is " + JSON.stringify(foundElement));
    // const index = this.dataSource.data.indexOf(foundElement);
    // this.dataSource.data[index].show = !this.dataSource.data[index].show;
  }
  openDialog(value) {debugger
    let message;
    if(value=='pending'){
      message="are you want to change status pending to completed"
      this.isCompleted= false;
      this.isPending= true;
    }
    else if(value=='completed'){
      message="are you want to change status to completed";
      this.isRevert= false;
      this.isCompleted=true;
      
    }
    else if(value=='revert'){
      message="are you want to change status back to completed"
     
    }

      let dialogRef = this.dialog.open(AlertDialogComponent, {
        width: '50%',
        data: message
      });
  
      dialogRef.afterClosed().subscribe(result => { 
        console.log('The dialog was closed');
        var buttonClick=dialogRef.componentInstance.buttonClicked;
        if(buttonClick){
          console.log('send data')
        }
         
      });
    }
}

 
const ELEMENT_DATA  = [{
  "icon_url": "https://www.iamder.com/images/dev/icon/2ccc34bc-a268-40b6-a87f-930952c3c84e/picture1.jpg",
  "has_verified_caller_id": true,
  "icon_path": "images/dev/icon/2ccc34bc-a268-40b6-a87f-930952c3c84e/picture1.jpg",
  "last_event": "APP_LAUNCH",
  "last_tx_id": "12345",
  "mobile": "+916360025307",
  "doc_type": "register",
  "updated_date": 1570189631599,
  "creation_date": 1569998795575,
  "uuid": "2ccc34bc-a268-40b6-a87f-930952c3c84e",
  "content": {
    "email_id": "nagbhushan@gmail.com",
    "latest_comment": "hello",
    "no_of_ratings": 26,
    "address": {
      "zip": "560034",
      "country": "India",
      "city": "Bengaluru",
      "state": "Karnataka",
      "line2": " ",
      "line1": "St Johns Medical College Rd, John Nagar, Koramangala, "
    },
    "wallet": {
      "earned": 11.95,
      "outstanding": 118.6983333333334,
      "spent": 8.651666666666664,
      "currency": "INR"
    },
    "avg_rating": 2.576923076923077,
    "latest_rating": 4,
    "no_of_reviews": 3,
    "first_name": "Nagbhushan M D",
    "status": "Online"
  },
  "status": "Online"
},
{
  "icon_url": "https://www.iamder.com/images/dev/icon/2ccc34bc-a268-40b6-a87f-930952c3c84e/picture1.jpg",
  "has_verified_caller_id": true,
  "icon_path": "images/dev/icon/2ccc34bc-a268-40b6-a87f-930952c3c84e/picture1.jpg",
  "last_event": "APP_LAUNCH",
  "last_tx_id": "12345",
  "mobile": "+916360025307",
  "doc_type": "register",
  "updated_date": 1570189631599,
  "creation_date": 1569998795575,
  "uuid": "2ccc34bc-a268-40b6-a87f-930952c3c84e",
  "content": {
    "email_id": "nagbhushan@gmail.com",
    "latest_comment": "hello",
    "no_of_ratings": 26,
    "address": {
      "zip": "560034",
      "country": "India",
      "city": "Bengaluru",
      "state": "Karnataka",
      "line2": " ",
      "line1": "St Johns Medical College Rd, John Nagar, Koramangala, "
    },
    "wallet": {
      "earned": 11.95,
      "outstanding": 118.6983333333334,
      "spent": 8.651666666666664,
      "currency": "INR"
    },
    "avg_rating": 2.576923076923077,
    "latest_rating": 4,
    "no_of_reviews": 3,
    "first_name": "Nagbhushan M D",
    "status": "Online"
  },
  "status": "Online"
},
{
  "icon_url": "https://www.iamder.com/images/dev/icon/2ccc34bc-a268-40b6-a87f-930952c3c84e/picture1.jpg",
  "has_verified_caller_id": true,
  "icon_path": "images/dev/icon/2ccc34bc-a268-40b6-a87f-930952c3c84e/picture1.jpg",
  "last_event": "APP_LAUNCH",
  "last_tx_id": "12345",
  "mobile": "+916360025307",
  "doc_type": "register",
  "updated_date": 1570189631599,
  "creation_date": 1569998795575,
  "uuid": "2ccc34bc-a268-40b6-a87f-930952c3c84e",
  "content": {
    "email_id": "nagbhushan@gmail.com",
    "latest_comment": "hello",
    "no_of_ratings": 26,
    "address": {
      "zip": "560034",
      "country": "India",
      "city": "Bengaluru",
      "state": "Karnataka",
      "line2": " ",
      "line1": "St Johns Medical College Rd, John Nagar, Koramangala, "
    },
    "wallet": {
      "earned": 11.95,
      "outstanding": 118.6983333333334,
      "spent": 8.651666666666664,
      "currency": "INR"
    },
    "avg_rating": 2.576923076923077,
    "latest_rating": 4,
    "no_of_reviews": 3,
    "first_name": "Nagbhushan M D",
    "status": "Online"
  },
  "status": "Online"
},
{
  "icon_url": "https://www.iamder.com/images/dev/icon/2ccc34bc-a268-40b6-a87f-930952c3c84e/picture1.jpg",
  "has_verified_caller_id": true,
  "icon_path": "images/dev/icon/2ccc34bc-a268-40b6-a87f-930952c3c84e/picture1.jpg",
  "last_event": "APP_LAUNCH",
  "last_tx_id": "12345",
  "mobile": "+916360025307",
  "doc_type": "register",
  "updated_date": 1570189631599,
  "creation_date": 1569998795575,
  "uuid": "2ccc34bc-a268-40b6-a87f-930952c3c84e",
  "content": {
    "email_id": "nagbhushan@gmail.com",
    "latest_comment": "hello",
    "no_of_ratings": 26,
    "address": {
      "zip": "560034",
      "country": "India",
      "city": "Bengaluru",
      "state": "Karnataka",
      "line2": " ",
      "line1": "St Johns Medical College Rd, John Nagar, Koramangala, "
    },
    "wallet": {
      "earned": 11.95,
      "outstanding": 118.6983333333334,
      "spent": 8.651666666666664,
      "currency": "INR"
    },
    "avg_rating": 2.576923076923077,
    "latest_rating": 4,
    "no_of_reviews": 3,
    "first_name": "Nagbhushan M D",
    "status": "Online"
  },
  "status": "Online"
},
{
  "icon_url": "https://www.iamder.com/images/dev/icon/2ccc34bc-a268-40b6-a87f-930952c3c84e/picture1.jpg",
  "has_verified_caller_id": true,
  "icon_path": "images/dev/icon/2ccc34bc-a268-40b6-a87f-930952c3c84e/picture1.jpg",
  "last_event": "APP_LAUNCH",
  "last_tx_id": "12345",
  "mobile": "+916360025307",
  "doc_type": "register",
  "updated_date": 1570189631599,
  "creation_date": 1569998795575,
  "uuid": "2ccc34bc-a268-40b6-a87f-930952c3c84e",
  "content": {
    "email_id": "nagbhushan@gmail.com",
    "latest_comment": "hello",
    "no_of_ratings": 26,
    "address": {
      "zip": "560034",
      "country": "India",
      "city": "Bengaluru",
      "state": "Karnataka",
      "line2": " ",
      "line1": "St Johns Medical College Rd, John Nagar, Koramangala, "
    },
    "wallet": {
      "earned": 11.95,
      "outstanding": 118.6983333333334,
      "spent": 8.651666666666664,
      "currency": "INR"
    },
    "avg_rating": 2.576923076923077,
    "latest_rating": 4,
    "no_of_reviews": 3,
    "first_name": "Nagbhushan M D",
    "status": "Online"
  },
  "status": "Online"
},
{
  "icon_url": "https://www.iamder.com/images/dev/icon/2ccc34bc-a268-40b6-a87f-930952c3c84e/picture1.jpg",
  "has_verified_caller_id": true,
  "icon_path": "images/dev/icon/2ccc34bc-a268-40b6-a87f-930952c3c84e/picture1.jpg",
  "last_event": "APP_LAUNCH",
  "last_tx_id": "12345",
  "mobile": "+916360025307",
  "doc_type": "register",
  "updated_date": 1570189631599,
  "creation_date": 1569998795575,
  "uuid": "2ccc34bc-a268-40b6-a87f-930952c3c84e",
  "content": {
    "email_id": "nagbhushan@gmail.com",
    "latest_comment": "hello",
    "no_of_ratings": 26,
    "address": {
      "zip": "560034",
      "country": "India",
      "city": "Bengaluru",
      "state": "Karnataka",
      "line2": " ",
      "line1": "St Johns Medical College Rd, John Nagar, Koramangala, "
    },
    "wallet": {
      "earned": 11.95,
      "outstanding": 118.6983333333334,
      "spent": 8.651666666666664,
      "currency": "INR"
    },
    "avg_rating": 2.576923076923077,
    "latest_rating": 4,
    "no_of_reviews": 3,
    "first_name": "Nagbhushan M D",
    "status": "Online"
  },
  "status": "Online"
}
];

 
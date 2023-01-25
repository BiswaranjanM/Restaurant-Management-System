import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss']
})
export class FilterPanelComponent implements OnInit {
  cuisineSelectedList: string[] = ['All'];
  constructor(public dialogRef: MatDialogRef<FilterPanelComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
  }
  close = () => {
    this.dialogRef.close();
  }

  toggle = (item: any) => {
    if(this.cuisineSelectedList.includes(item)){
      this.cuisineSelectedList.splice(this.cuisineSelectedList.indexOf(item), 1);
    }
    else{
      this.cuisineSelectedList.push(item);
    }

  }
}

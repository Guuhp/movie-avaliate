import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movie } from 'src/app/model/movie';
import { Score } from 'src/app/model/score';

@Component({
  selector: 'app-dialog-movie',
  templateUrl: './dialog-movie.component.html',
  styleUrls: ['./dialog-movie.component.css']
})
export class DialogMovieComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Score,
    public dialogRef: MatDialogRef<DialogMovieComponent>
  ) { }


  ngOnInit(): void {

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}

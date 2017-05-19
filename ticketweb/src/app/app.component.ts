import { Component, OnInit } from '@angular/core';
import { DataService } from "Services/DataService";
import { SeatInfo } from "Models/SeatInfo";
import { Seat } from "Models/Seat";
/*import { SeatComponent } from "app/seat.component";*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'İstanbul Coders Angular4 TypeScript .NET Core Seminer';

  constructor(private service: DataService) { }
  private _RowCount: number;
  public get RowCount(): number {
    return this._RowCount;
  }
  public set RowCount(v: number) {
    this._RowCount = v;
  }

  private _ColumnCount: number;
  public get ColumnCount(): number {
    return this._ColumnCount;
  }
  public set ColumnCount(v: number) {
    this._ColumnCount = v;
  }

  SeatInfoList: Array<SeatInfo>;
  selectedSeatInfo;
  public ngOnInit() {
    this.service.GetSeatInfoList()
      .subscribe(result => this.SeatInfoList = result,
      err => console.log(err),
      () => {
        console.log("All Data Loaded");
        this.selectedSeatInfo = this.SeatInfoList.length > 0 ? this.SeatInfoList[0] : null;
      }
      );
  }
  SeatList = [];
  public DrawSeat() {
    this.SeatList = [];
    let rowSeatList: Array<Seat> = [];
    let seatCounter: number = 0;
    for (var i = 0; i < this.RowCount; i++) {
      rowSeatList = [];
      for (var r = 0; r < this.ColumnCount; r++) {
        seatCounter += 1;
        rowSeatList.push(new Seat(seatCounter, i));
      }
      this.SeatList.push(rowSeatList);
    }
  }

  public ChangeSeatCSS($event: Seat) {
    $event.IsChanged = !($event.PreviewSeatCSS == this.selectedSeatInfo.id);
    $event.SeatCSS = this.service.ChangeSeatInfoByID(this.selectedSeatInfo.id);
  }

  public Save() {
    let data: Array<Seat>=[];
    this.SeatList.forEach(rowSeats =>
      rowSeats.filter(seats => seats.IsChanged == true).forEach(seat =>
        data.push(seat)
      ));
    /*data = data.filter(seats => seats.IsChanged == true);*/
    this.service.PostData(data);
  }
}


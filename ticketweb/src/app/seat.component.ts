import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Seat } from "Models/Seat";

@Component({
    moduleId: module.id,
    selector: 'seat',
    templateUrl: 'seat.component.html',
    styleUrls: ['./seat.component.css']
})

export class SeatComponent implements OnInit {
    constructor() { }
    seatList;
    @Input() SeatDataList(_seatList) { this.seatList = _seatList };
    @Output() ChangeSeat = new EventEmitter();
    ngOnInit() { }
    public triggerEvent(seat: Seat) {        
        this.ChangeSeat.emit(seat);
    }
}
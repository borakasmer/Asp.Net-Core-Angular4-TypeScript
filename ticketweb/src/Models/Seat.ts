enum SeatCss {
    "Açık" = 1,
    "Satış" = 2,
    "VIP" = 3,
    "Pasif" = 4,
}
export class Seat {

    constructor(id: number, rowIndex: number, seatCSS?: string) {
        this.ID = id;
        this.RowIndex = rowIndex;
        this.SeatCSS = seatCSS == null ? "./src/Images/green.png" : seatCSS;
        this.PreviewSeatCSS = SeatCss.Açık;
    }
    private _ID: number;
    public get ID(): number {
        return this._ID;
    }
    public set ID(v: number) {
        this._ID = v;
    }

    private _RowIndex: number;
    public get RowIndex(): number {
        return this._RowIndex;
    }
    public set RowIndex(v: number) {
        this._RowIndex = v;
    }

    private _SeatCSS: string;
    public get SeatCSS(): string {
        return this._SeatCSS;
    }
    public set SeatCSS(v: string) {
        this._SeatCSS = v;
    }

    private _PreviewSeatCSS: number;
    public get PreviewSeatCSS(): number {
        return this._PreviewSeatCSS;
    }
    public set PreviewSeatCSS(v: number) {
        this._PreviewSeatCSS = v;
    }
    
    private _IsChanged : boolean;
    public get IsChanged() : boolean {
        return this._IsChanged;
    }
    public set IsChanged(v : boolean) {
        this._IsChanged = v;
    }
    
}
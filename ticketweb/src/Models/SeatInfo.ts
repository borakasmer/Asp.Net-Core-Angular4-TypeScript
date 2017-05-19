export class SeatInfo{
    
    private _ID : number;
    public get ID() : number {
        return this._ID;
    }
    public set ID(v : number) {
        this._ID = v;
    }
    
    private _Name : string;
    public get Name() : string {
        return this._Name;
    }
    public set Name(v : string) {
        this._Name = v;
    }
    
}
import { Injectable } from '@angular/core';
import { Http, RequestOptions,Headers } from "@angular/http";
import "rxjs/add/operator/map";

const url: string = "http://localhost:5050/api/"
@Injectable()
export class DataService {

    constructor(private http: Http) { }
    public GetSeatInfoList() {
        return this.http.get(url + "service")
            .map(result => result.json());
    }

    public ChangeSeatInfoByID(id: number) {
        switch (id) {
            case 1: {
                return "./src/Images/green.png";
            }
            case 2: {
                return "./src/Images/red.png";
            }
            case 3: {
                return "./src/Images/blue.png";
            }
            case 4: {
                return "./src/Images/gray.png";
            }
        }
    }

    public PostData(data) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(data);
        console.log(body);
        return this.http.post('http://localhost:5050/api/Service', body, options)
            .subscribe(result => console.log(result),
            err => console.log("Err:" + err),
            () => console.log("All Data Post")
            );

    }
}
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class AppService {

  constructor(private http: Http) { }

  getPost() {
    return this.http.get('/api/category')
      .map(
        (response: Response) => {
          const data = response.json();
          console.log(data);
          return data;
        },
        (error) => console.log(error)
      );
  }

}

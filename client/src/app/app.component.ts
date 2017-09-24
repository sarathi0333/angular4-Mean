import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  categories = [];

  constructor (private appService: AppService) { }

  ngOnInit() {
    this.appService.getPost()
      .subscribe(
        (data: any[]) => this.categories = data,
        (error) => console.log(error)
      );
  }
}

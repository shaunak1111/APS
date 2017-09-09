import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-aps',
  templateUrl: './hello-aps.component.html',
  styleUrls: ['./hello-aps.component.scss']
})
export class HelloApsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  helloAps(): string {
    return 'helloAps';
  }

}

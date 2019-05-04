import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic-form',
  templateUrl: './topic-form.page.html',
  styleUrls: ['./topic-form.page.scss'],
})
export class TopicFormPage implements OnInit {

  model = {
    title: '',
    description: ''
  };

  constructor() { }

  ngOnInit() {
  }

  save() {
    console.log('this.model: ', this.model);
  }
}

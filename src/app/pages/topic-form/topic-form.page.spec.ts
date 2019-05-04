import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicFormPage } from './topic-form.page';

describe('TopicFormPage', () => {
  let component: TopicFormPage;
  let fixture: ComponentFixture<TopicFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

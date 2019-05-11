import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicDetailPage } from './topic-detail.page';

describe('TopicDetailPage', () => {
  let component: TopicDetailPage;
  let fixture: ComponentFixture<TopicDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

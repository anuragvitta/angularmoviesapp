import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadMovieComponent } from './read-movie.component';

describe('ReadMovieComponent', () => {
  let component: ReadMovieComponent;
  let fixture: ComponentFixture<ReadMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

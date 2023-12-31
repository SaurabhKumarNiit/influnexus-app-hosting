import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailVideoComponent } from './thumbnail-video.component';

describe('ThumbnailVideoComponent', () => {
  let component: ThumbnailVideoComponent;
  let fixture: ComponentFixture<ThumbnailVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThumbnailVideoComponent]
    });
    fixture = TestBed.createComponent(ThumbnailVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

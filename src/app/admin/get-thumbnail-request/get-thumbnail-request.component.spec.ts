import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetThumbnailRequestComponent } from './get-thumbnail-request.component';

describe('GetThumbnailRequestComponent', () => {
  let component: GetThumbnailRequestComponent;
  let fixture: ComponentFixture<GetThumbnailRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetThumbnailRequestComponent]
    });
    fixture = TestBed.createComponent(GetThumbnailRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

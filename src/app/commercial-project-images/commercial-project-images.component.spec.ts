import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialProjectImagesComponent } from './commercial-project-images.component';

describe('CommercialProjectImagesComponent', () => {
  let component: CommercialProjectImagesComponent;
  let fixture: ComponentFixture<CommercialProjectImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommercialProjectImagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommercialProjectImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeAreasComponent } from './life-areas.component';

describe('SpecificLifeModulesComponent', () => {
  let component: LifeAreasComponent;
  let fixture: ComponentFixture<LifeAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeAreasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

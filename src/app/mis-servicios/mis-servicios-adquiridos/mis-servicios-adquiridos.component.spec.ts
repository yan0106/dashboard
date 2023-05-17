import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisServiciosAdquiridosComponent } from './mis-servicios-adquiridos.component';

describe('MisServiciosAdquiridosComponent', () => {
  let component: MisServiciosAdquiridosComponent;
  let fixture: ComponentFixture<MisServiciosAdquiridosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisServiciosAdquiridosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisServiciosAdquiridosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroUsuariosScreensComponent } from './registro-usuarios-screens.component';

describe('RegistroUsuariosScreensComponent', () => {
  let component: RegistroUsuariosScreensComponent;
  let fixture: ComponentFixture<RegistroUsuariosScreensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroUsuariosScreensComponent]
    });
    fixture = TestBed.createComponent(RegistroUsuariosScreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

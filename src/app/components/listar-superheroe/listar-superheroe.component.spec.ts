import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSuperheroeComponent } from './listar-superheroe.component';

describe('ListarSuperheroeComponent', () => {
  let component: ListarSuperheroeComponent;
  let fixture: ComponentFixture<ListarSuperheroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarSuperheroeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSuperheroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

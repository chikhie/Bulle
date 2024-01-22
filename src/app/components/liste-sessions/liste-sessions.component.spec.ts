import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSessionsComponent } from './liste-sessions.component';

describe('ListeSessionsComponent', () => {
  let component: ListeSessionsComponent;
  let fixture: ComponentFixture<ListeSessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeSessionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

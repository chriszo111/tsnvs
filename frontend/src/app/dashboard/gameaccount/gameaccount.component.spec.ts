import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameaccountComponent } from './gameaccount.component';

describe('GameaccountComponent', () => {
  let component: GameaccountComponent;
  let fixture: ComponentFixture<GameaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

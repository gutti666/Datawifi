import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContmenuPage } from './contmenu.page';

describe('ContmenuPage', () => {
  let component: ContmenuPage;
  let fixture: ComponentFixture<ContmenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContmenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContmenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

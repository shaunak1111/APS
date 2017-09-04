import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloApsComponent } from './hello-aps.component';

describe('HelloApsComponent', () => {
  let component: HelloApsComponent;
  let fixture: ComponentFixture<HelloApsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloApsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloApsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should retuen helloAps', () => {
    expect(component.helloAps()).toEqual('helloAps');
  });

});

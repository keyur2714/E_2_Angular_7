import { TestBed, async, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { StatusPipe } from './status.pipe';
import { MaskPipe } from './mask.pipe';
import { LoopPipe } from './loop.pipe';
import { WelcomePipe } from './pipes/welcome-pipe';
import { Location } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        WelcomePipe,
        LoopPipe,
        MaskPipe,
        StatusPipe
      ],
      imports: [
        HttpClientModule
      ],
      providers:[
        HttpClient
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'PipesDemo'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('PipesDemo');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome PipesDemo');
  });

  it('should check sum method', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.sum(5,5)).toEqual(10);
  });
});

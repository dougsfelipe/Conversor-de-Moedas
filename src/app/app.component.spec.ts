import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ConversorModule } from './conversor';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        ConversorModule
      ]
    }).compileComponents();
  }));

  

  
});

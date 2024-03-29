import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

describe('AppComponent', () => {

  let fixture:any;
  let app:any;

  let compiled:any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],imports: [
        BrowserAnimationsModule,
        MatSlideToggleModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule
        ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;

    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;

  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should have as title "Data Structures and Algorithms"', () => {
    expect(app.title).toEqual('Data Structures and Algorithms');
  });

  it('should render title as "Data Structures and Algorithms"', () => {
    expect(compiled.querySelector('.title')?.textContent).toContain('Data Structures and Algorithms');
  });


});

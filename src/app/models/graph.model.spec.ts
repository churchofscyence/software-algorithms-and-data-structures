import { TestBed } from '@angular/core/testing';
import { AppComponent } from '../app.component';

import { GraphModel } from './graph.model';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";

describe('GraphModel', () => {

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
        MatMenuModule
      ]
    }).compileComponents();
  });

  it('should be the width and height of the canvas is 1600', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.canvas')?.clientWidth).toEqual(1600);
    expect(compiled.querySelector('.canvas')?.clientHeight).toEqual(1600);
  });


});


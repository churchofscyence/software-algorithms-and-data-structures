import { TestBed } from '@angular/core/testing';
import { AppComponent } from '../app.component';

import { GraphModel } from './graph.model';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

describe('GraphModel', () => {

  let fixture:any;
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
        MatInputModule,
        MatFormFieldModule,
        FormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should be the width and height of the canvas is 1600', () => {
    expect(compiled.querySelector('.canvas')?.clientWidth).toEqual(1600);
    expect(compiled.querySelector('.canvas')?.clientHeight).toEqual(1600);
  });

  it('should be that canvas and context  not be null', () => {
    // Arrange
    const canvas = compiled.querySelector('.canvas') as HTMLCanvasElement;
    const context = canvas.getContext('2d');

    expect(canvas).not.toBeNull();
    expect(context).not.toBeNull();

  });

  it('should return a string value when called', () => {
    const graphModel = new GraphModel("canvas", null, null);
    const randomColor = graphModel.getRandomColor();
    expect(typeof randomColor).toBe('string');
  });


  it('should draw multiple horizontal rectangles on the canvas with the correct dimensions', () => {
    // Arrange
    const canvas = compiled.querySelector('.canvas') as HTMLCanvasElement;
    const context = canvas.getContext('2d');

    const graphModel = new GraphModel("canvas", canvas, context);
    const x = 50;
    const y = 50;
    const element = [9, 8, 2, 4, 1];
    const width = 100;
    const height = 100;
    const color = "red";

    // @ts-ignore
    spyOn(context, "rect");

    // Act
    graphModel.drawManyHorizontalRec(x, y, element, width, height, color);

    // Assert
    // Check that the rectangles are drawn correctly
    if(context != null){
      expect(context.rect).toHaveBeenCalledTimes(element.length);
      expect(context.rect).toHaveBeenCalledWith(x, y, width, height);
      //console.log("Rectangles drawn correctly.");
    }else{
      console.log("Context is null");
    }

  });

  it('should not draw anything when given an empty array as input', () => {
    // Arrange
    const canvas = compiled.querySelector('.canvas') as HTMLCanvasElement;
    const context = canvas.getContext('2d');

    const graphModel = new GraphModel("canvas", canvas, context);
    const x = 50;
    const y = 50;
    const width = 100;
    const height = 100;
    const color = "red";

    // @ts-ignore
    spyOn(context, "rect");

    // Act
    graphModel.drawManyHorizontalRec(x, y, [], width, height, color);

    if(context != null){
      // Assert
      // Check that no rectangles are drawn
      expect(context.rect).not.toHaveBeenCalled();
      //console.log("Rectangles not drawn.");
    }else{
      console.log("Context is null");
    }

  });

  it('should draw a horizontal pointer with a triangle, line, and label when all parameters are provided', () => {
    // Arrange
    const canvas = compiled.querySelector('.canvas') as HTMLCanvasElement;
    const context = canvas.getContext('2d');

    const graphModel = new GraphModel('canvas', canvas, context);

    graphModel.drawManyHorizontalRec(50, 50, [9, 8, 2, 4, 1], 100, 100, "red");

    // @ts-ignore
    spyOn(context, "beginPath");
    // @ts-ignore
    spyOn(context, "moveTo");
    // @ts-ignore
    spyOn(context, "lineWidth");
    // @ts-ignore
    spyOn(context, "stroke");
    // @ts-ignore
    spyOn(context, "font");
    // @ts-ignore
    spyOn(context, "fillText");

    graphModel.drawHorizontalPointer(2, 'red', 0,'Pointer');

    if(context != null){
      // Assertions
      // Check if the triangle is drawn correctly
      expect(context.beginPath).toHaveBeenCalledTimes(2);
      expect(context.moveTo).toHaveBeenCalledWith(150, 300);

      expect(context.lineWidth).toBe(5);
      expect(context.stroke).toHaveBeenCalledTimes(1);

      // Check if the label is drawn correctly
      expect(context.font).toBe('30px Arial');
      expect(context.fillText).toHaveBeenCalledWith('Pointer', 310, 300);
    }else{
      console.log("Context is null");
    }

  });



});


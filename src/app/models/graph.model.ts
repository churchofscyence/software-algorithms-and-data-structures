import { CanvasModel } from './canvas.model';

export class GraphModel extends CanvasModel {

  private _colors: string[] = ["red", "purple", "orange", "green", "blue", "black", "yellow","brown"];

  private _xRec:number = 0;
  private _yRec:number = 0;
  private _elementRec:number[] = [];
  private _widthRec:number = 0;
  private _heightRec:number = 0;
  private _colorRec:string = "";

  constructor(nameCanvas: string, canvas: HTMLCanvasElement | null, context: CanvasRenderingContext2D | null) {
    super(nameCanvas, canvas, context);
  }


  /*
   Summary
       The drawManyHorizontalRec method is used to draw multiple horizontal rectangles on a canvas. Each rectangle represents an element from an array and
       includes the index of the element and its value.

   Example Usage
       const graphModel = new GraphModel("canvas", 800, 600);
       graphModel.drawManyHorizontalRec(50, 50, [1, 2, 3, 4, 5], 100, 50, "blue");

       This code creates a new instance of the GraphModel class with a canvas name of "canvas" and dimensions of 800x600 pixels. Then, it calls the
       drawManyHorizontalRec method with the parameters x = 50, y = 50, element = [1, 2, 3, 4, 5], width = 100, height = 50, and color = "blue". This will
       draw five horizontal rectangles on the canvas, each representing an element from the array.

   Inputs
       x (number): The x-coordinate of the top-left corner of the first rectangle.
       y (number): The y-coordinate of the top-left corner of the first rectangle.
       element (number[]): An array of numbers representing the elements to be displayed in the rectangles.
       width (number): The width of each rectangle.
       height (number): The height of each rectangle.
       color (string): The color of the rectangles.

   Outputs
       None. The method only draws the rectangles and text on the canvas.
    */
  drawManyHorizontalRec(x:number, y:number, element:number[], width:number, height:number, color:string) {

    this._xRec = x;
    this._yRec = y;
    this._elementRec = element;
    this._widthRec = width;
    this._heightRec= height;
    this._colorRec = color;

          if(this._context != null){
            this._context.font = "30px Arial";

            let yOffset = y;

              for (let i = 0; i < element.length; i++) {

                this._context.beginPath();
                this._context.lineWidth = 2;
                this._context.strokeStyle = color;

                //Drawing the rectangle for the cell which contains the element contains index of the array and the element value
                this._context.rect(x, yOffset, width, height);

                this._context.fillStyle = "black";

                //Text of the element value
                this._context.fillText(element[i].toString(), x + width/3, yOffset+ width/3);

                //Text of the index of the array
                this._context.fillText("["+i+"]", x + (2 * width)/3, yOffset+ (2 * width)/3);

                this._context.stroke();

                yOffset += height;
            }
        }
  }



}

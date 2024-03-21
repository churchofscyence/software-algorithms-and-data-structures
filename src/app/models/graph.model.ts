import { CanvasModel } from './canvas.model';

export class GraphModel extends CanvasModel {

  private _colors: string[] = ["red", "purple", "orange", "green", "blue", "black","brown"];

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
      The getRandomColor method is used to randomly select a color from an array of predefined colors.

  Example Usage
      const graphModel = new GraphModel("canvas", 800, 600);
      const randomColor = graphModel.getRandomColor();
      console.log(randomColor);

      This code creates a new instance of the GraphModel class and calls the getRandomColor method. It then logs the randomly selected color to the console.

  Inputs
      None.

  Outputs
      A randomly selected color from the predefined color array.
*/

  getRandomColor () {
    let randomIndex = Math.floor(Math.random() * this._colors.length);

    //Return a random color a random color from the array
    return this._colors[randomIndex];
  }


/*
   Summary
       The drawManyHorizontalRec method is used to draw multiple horizontal rectangles on a canvas. Each rectangle represents an element from an array and
       includes the index of the element and its value.

   Example Usage
       const graphModel = new GraphModel("canvas", 1600, 1600);
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

/*
  Summary
     The drawHorizontalPointer method is used to draw a horizontal pointer on a canvas. It consists of a triangle pointing to a specific index the Horizontal Rectangle on the canvas,
     a line connecting the triangle to the index, and an optional label next to the tail of the arrow.

  Example Usage
     const graphModel = new GraphModel("canvas", 1600, 1600);
     graphModel.drawHorizontalPointer(2, "red", "Pointer");

     This code creates a new instance of the GraphModel class with a canvas name of "canvas" and dimensions of 800x600 pixels. Then, it calls the drawHoriPointer method with
     the parameters index = 2, color = "red", and label = "Pointer". This will draw a horizontal pointer at the specified index of Horizontal Rectangle on the canvas with a
     red color and a label of "Pointer".

  Inputs
     index (number): The index of the Horizontal Rectangle on the canvas where the pointer should be drawn.
     color (string): The color of the pointer and line.
     label (optional string): An optional label to be displayed next to the pointer.

  Outputs
     None. The method only draws the horizontal pointer on the canvas.
 */


  drawHorizontalPointer(index:number,color:string, offset:number, label?:string, ){

      let x = this._xRec + this._widthRec;
      let y = this._yRec + (index * this._heightRec) + (this._heightRec/2);


      // the triangle
      if(this._context != null){

        this._context.beginPath();
        this._context.moveTo(x, y);
        this._context.lineTo(x + 50, y + 10);
        this._context.lineTo(x + 50, y - 10);
        this._context.closePath();

        this._context.fillStyle = color;
        this._context.fill();

        //Line
        this._context.beginPath();
        this._context.moveTo(x + 50, y);
        this._context.lineTo(x+ 150, y);
        this._context.lineWidth = 5;

        this._context.strokeStyle = color;
        this._context.stroke();

        //Label
          if(typeof label !== "undefined"){
            this._context.font = "30px Arial";
            this._context.fillText(label, x + 160 + offset , y);
          }
    }




  }

/*
  Summary
    The drawManyHorizontalPointer method in the GraphModel class is used to draw horizontal pointers on a canvas. It takes an array of
     indices and an array of labels as inputs, and for each index, it calls the drawHorizontalPointer method to draw a horizontal
     pointer at the specified index on the canvas.

  Example Usage
    const graphModel = new GraphModel("canvas", 1600, 1600);
    graphModel.drawManyHorizontalPointer([2, 4, 6], ["Pointer 1", "Pointer 2", "Pointer 3"]);
    This code creates a new instance of the GraphModel class with a canvas name of "canvas" and dimensions of 1600x1600 pixels.
    It then calls the setArrows method with an array of indices [2, 4, 6] and an array of labels ["Pointer 1", "Pointer 2", "Pointer 3"].
    This will draw three horizontal pointers on the canvas, each pointing to the specified index with a different color and label.

  Inputs
     index (number[]): An array of indices representing the positions where the horizontal pointers should be drawn on the canvas.
     label (string[]): An array of labels to be displayed next to each horizontal pointer. The labels are optional.

  Flow
      Iterate over each index in the index array.
      For each index, call the drawHorizontalPointer method with the index, a randomly selected color from the predefined color array, and the
      corresponding label from the label array (if provided).
      The drawHorizontalPointer method will draw a horizontal pointer on the canvas at the specified index, with a triangle pointing to the index,
      a line connecting the triangle to the index, and an optional label next to the tail of the arrow.

    Outputs
      None. The method only draws the horizontal pointers on the canvas.

*/

  drawManyHorizontalPointer (index:number[], label:string[], offset:number[]) {
    for(let i = 0; i < index.length; i++){

      this.drawHorizontalPointer(index[i], this.getRandomColor(), offset[i] ,label[i],  );
    }
  };

}

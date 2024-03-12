export class CanvasModel {
  public _nameCanvas: string;

  public _width: number = 1600;
  public _height: number = 1600;

  public _canvas: HTMLCanvasElement | null;
  public _context: CanvasRenderingContext2D | null;

  constructor(nameCanvas: string, canvas: HTMLCanvasElement | null, context: CanvasRenderingContext2D | null) {
    this._nameCanvas = nameCanvas;

    this._canvas = canvas;
    this._context = context;
  }


  get nameCanvas(): string {
    return this._nameCanvas;
  }

  set nameCanvas(value: string) {
    this._nameCanvas = value;
  }

  get width(): number {
    return this._width;
  }

  set width(value: number) {
    this._width = value;
  }

  get height(): number {
    return this._height;
  }

  set height(value: number) {
    this._height = value;
  }

  get canvas(): HTMLCanvasElement | null {
    return this._canvas;
  }

  set canvas(value: HTMLCanvasElement | null) {
    this._canvas = value;
  }

  get context(): CanvasRenderingContext2D | null {
    return this._context;
  }

  set context(value: CanvasRenderingContext2D | null) {
    this._context = value;
  }
}

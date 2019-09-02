import FabricCanvasTool from './fabrictool'

class Pencil extends FabricCanvasTool {
  constructor(canvas, mouseCursor) {
    super(canvas);
    this._canvas.freeDrawingCursor = 'none';
    this._mouseCursor = mouseCursor;
  }

  configureCanvas(props) {
    const canvas = this._canvas;
    const mouseCursor = this._mouseCursor;

    canvas.isDrawingMode = true;
    canvas.freeDrawingBrush.width = props.lineWidth;
    canvas.freeDrawingBrush.color = props.lineColor;
    mouseCursor.set({ radius: props.lineWidth / 2, fill: props.lineColor })
  }

  doMouseMove(event) {
    const canvas = this._canvas;
    const mouseCursor = this._mouseCursor;
    const mouse = canvas.getPointer(event.e);
    mouseCursor
      .set({ top: mouse.y, left: mouse.x })
      .setCoords()
      .canvas.renderAll();
  }

  doMouseOut() {
    const mouseCursor = this._mouseCursor;
    mouseCursor
      .set({ top: -100, left: -100 })
      .setCoords()
      .canvas.renderAll();
  }
}

export default Pencil;

//complete this code
class Rectangle {
	constructor(width, height){
		this._width = width;
		this._height = height;
	}

	getArea(width,height){
		return this._width * this._height;
	}

	get width(){
		return this._width;
	}

	get height(){
		return this._height;
	}
	
	set width(val){
		this._width = val;
	}

	set height(val){
		this._height = val;
	}
	
}

class Square extends Rectangle {
	constructor(side){
		super(side,side);
	}
	getPerimeter(){
		return 4 * this.width;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;

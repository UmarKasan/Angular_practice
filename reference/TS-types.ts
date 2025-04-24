let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1,2,3];
let f: any[] = [1, true, 'a', false];

// Transpile Typescript to Javascript
// tsc main.ts | node main.js

const ColorRed = 0;

enum Color { Red=0, Green=1, Blue=2};
let backgroundColor = Color.Red;

let messages;
messages = 'abc';
let endwithC = (<string>messages).endsWith('C');
let alternate = (messages as string).endsWith('C');

let drawPoint = (point: number) => {

}

drawPoint({
    x:1,
    y: 2
})

let drawPoint = (point: {x: number, y:number}) => {

}

// use Capital for intyerface
interface Point {
    x: number,
    y: number,
    draw: () => void
}

class Point {
    x: number;
    y: number;

    drawing() {
        // ..
    }
}

let point: Point = new Point();
point.drawing();

class Point {
    constructor(private x?:number, private y?: number){
        
    }

    drawing() {
        // ..
    }
}
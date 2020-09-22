const a = [[1,2,3,4],[2,2,2,2],[2,4,2,4],[5,6,7,8],[7,7,7,7]];

let whatShape = function(arr){ 
    let shape = {square: 0, rectangle: 0, other:0};

    for (let i=0; i<arr.length; i++) {
        if(arr[i][0] === arr[i][1] && arr[i][0] === arr[i][2] && arr[i][0] === arr[i][3]) {
            shape.square++;
        } else if(arr[i][0] === arr[i][1] && arr[i][2] === arr[i][3]){
            shape.rectangle++;
        } else if(arr[i][0] === arr[i][3] && arr[i][1] === arr[i][2]) {
            shape.rectangle++;
        } else if (arr[i][0] === arr[i][2] && arr[i][3] === arr[i][1]) {
            shape.rectangle++;
        } else {
            shape.other++;
        }
    }  
    
    return shape;
}

let shapes = whatShape(a);

const getSquareEl = document.getElementById("square");
getSquareEl.innerHTML = shapes.square;

const getRectangleEl = document.getElementById("rectangle");
getRectangleEl.innerHTML = shapes.rectangle;

const getOtherEl = document.getElementById("other");
getOtherEl.innerHTML = shapes.other;

console.log(getSquareEl);
console.log(shapes);





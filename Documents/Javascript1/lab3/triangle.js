function Triangle(x1, y1, x2, y2, x3, y3){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
    this.draw = function(canvas){
        let c = canvas.getContext('2d');
        c.beginPath();     // börja en path
        c.moveTo(this.x1, this.y1);  // gå till (50,10) - kommer inte ritas ut
        c.lineTo(this.x2, this.y2); // lägg till linje mellan (50,10) och (100,10)
        c.lineTo(this.x3, this.y3);  // lägg till linje
        c.closePath();     // bara om man vill ha en sammanhängande figur
        c.stroke();  
        //let select = document.getElementsByTagName('select')[0];  // rita alla linjer i path
        //c.fillStyle = select.value;
        //c.fill();

    }
}
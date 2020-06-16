const Painter = function(){
    this.stock = []
}

Painter.prototype.addCanOfPaint = function(paintCan){
    this.stock.push(paintCan)
}
Painter.prototype.checkLitresOfPaint = function(){
    let total = 0
    for (let i=0; i <this.stock.length; i++){
        total += this.stock[i].litres
    }
    return total
}
module.exports = Painter
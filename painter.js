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
Painter.prototype.checkEnoughPaintForRoom = function(stock, room){
    if(stock >= room){
        return true
    }  else {
        return false
    }
}
// Painter.prototype.paintIfStockSufficient = function()
module.exports = Painter
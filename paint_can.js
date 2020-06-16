const PaintCan = function(litres){
    this.litres = litres
    }

    PaintCan.prototype.checkIfEmpty = function() {
        if (this.litres === 0){
            return 'Empty'
        } else {
            return this.litres
        }
    }
    PaintCan.prototype.emptySelf = function(){
        this.litres -= this.litres
    }
module.exports = PaintCan
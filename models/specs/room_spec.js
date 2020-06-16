const assert = require('assert')
const Room = require('../../room.js')
const PaintCan = require('../../paint_can.js')
const Painter = require('../../painter.js')


describe('Room', function(){
    let room
    beforeEach(function(){
        room = new Room(1000)
    })
    describe ('Properties', function(){
        it('should have an area', function(){
            const actual = room.area
            assert.strictEqual(actual, 1000)
        })
        it('should start unpainted', function(){
            const actual = room.painted
            assert.strictEqual(actual, false)
        })
        it('can be painted', function(){
            room.paintRoom()
            const actual = room.painted
            assert.strictEqual(actual, true)
        })
    })


    describe('Paint Can', function(){
        let paintCan
        beforeEach(function(){
            paintCan = new PaintCan(100)
        })
        describe('Properties', function(){
            it('should contain paint', function(){
                const actual = paintCan.litres
                assert.strictEqual(actual, 100)
            })
            it('checks if the can is empty -- not empty', function(){
                const actual = paintCan.checkIfEmpty()
                assert.strictEqual(actual, 100)
            })
            it('checks if the can is empty -- after self emptying', function (){
                paintCan.emptySelf()
                const actual = paintCan.checkIfEmpty()
                assert.strictEqual(actual, 'Empty')
            })
        })
        describe('Painter', function(){
            let painter
            beforeEach(function(){
                painter = new Painter()
            })
            describe ('Properties', function(){
                it('should have an empty stock array to begin with', function(){
                    const actual = painter.stock
                    assert.deepStrictEqual(actual, [])
                })
                it('should be ablet to add a can of paint to the stock array', function(){
                    painter.addCanOfPaint(paintCan)
                    const actual = painter.stock.length
                    assert.deepStrictEqual(actual, 1)
                })
                it('can calculate how many litres of paint in stock--one can', function(){
                    painter.addCanOfPaint(paintCan)
                    const actual = painter.checkLitresOfPaint()
                    assert.strictEqual(actual, 100)
                })
                it('can calculate how many litres of paint in stock--three cans', function(){
                    painter.addCanOfPaint(paintCan)
                    painter.addCanOfPaint(paintCan)
                    painter.addCanOfPaint(paintCan)
                    const actual = painter.checkLitresOfPaint()
                    assert.strictEqual(actual, 300)
                })
                it('can calculate whether it has enough paint for a room -- insufficient', function(){
                    painter.addCanOfPaint(paintCan)

                    const actual = painter.checkEnoughPaintForRoom(painter.checkLitresOfPaint(), room.area)
                    assert.strictEqual(actual, false)
                })
                it('can calculate whether it has enough paint for a room -- sufficient', function(){
                    painter.addCanOfPaint(paintCan)
                    painter.addCanOfPaint(paintCan)
                    painter.addCanOfPaint(paintCan)
                    painter.addCanOfPaint(paintCan)
                    painter.addCanOfPaint(paintCan)
                    painter.addCanOfPaint(paintCan)
                    painter.addCanOfPaint(paintCan)
                    painter.addCanOfPaint(paintCan)
                    painter.addCanOfPaint(paintCan)
                    painter.addCanOfPaint(paintCan)
                    painter.addCanOfPaint(paintCan)
                    const actual = painter.checkEnoughPaintForRoom(painter.checkLitresOfPaint(), room.area)
                    assert.strictEqual(actual, true)
                })
                // it('can paint room if stosk sufficient', function(){
                //     assert.strictEqual(actual, true)
                })
            })
        })
    })
    
    
})

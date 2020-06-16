const assert = require('assert')
const Room = require('../../room.js')
const PaintCan = require('../../paint_can.js')


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
})

describe('Paint Can', function(){
    let paintCan
    beforeEach(function(){
        paintCan1 = new PaintCan(100)
        paintCan2 = new PaintCan(0)
    })
    describe('Properties', function(){
        it('should contain paint', function(){
            const actual = paintCan1.litres
            assert.strictEqual(actual, 100)
        })
        it('checks if the can is empty -- not empty', function(){
            const actual = paintCan1.checkIfEmpty()
            assert.strictEqual(actual, 100)
        })
        it('checks if the can is empty -- is empty', function (){
            const actual = paintCan2.checkIfEmpty()
            assert.strictEqual(actual, 'Empty')
        })
        it('checks if the can is empty -- after self emptying', function (){
            paintCan1.emptySelf()
            const actual = paintCan1.checkIfEmpty()
            assert.strictEqual(actual, 'Empty')

        })
    })
})
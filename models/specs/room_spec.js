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
        paintCan = new PaintCan(100)
    })
    describe('Properties', function(){
        it('should contain paint', function(){
            const actual = paintCan.litres
            assert.strictEqual(actual, 100)
        })
    })
})
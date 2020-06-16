const assert = require('assert')
const Room = require('../../room.js')

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
    })
})
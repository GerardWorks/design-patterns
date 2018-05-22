const { assert } = require('chai');
const EventObserver = require('../lib/observer/event_observer');
const Sprinter = require('../lib/observer/sprinter');
const CameraMan = require('../lib/observer/cameraman');
const Spectator = require('../lib/observer/spectator');
const StartGun = require('../lib/observer/start_gun');

describe("Observer Pattern", ()=>{
    it("should trigger a common method within every observer when the starting gun is executes bang", ()=>{
        const eventObserver = new EventObserver();
        const sprinter = new Sprinter();
        const spectator = new Spectator();
        const cameraMan = new CameraMan();
        const startGun = new StartGun(eventObserver);
        
        eventObserver.observers.push(sprinter);
        eventObserver.observers.push(spectator);
        eventObserver.observers.push(cameraMan);
        
        const result = startGun.bang();
        const expected = ["sprinter runs", "spectator cheering", "cameraman starts filming"]

        assert.deepEqual(expected, result);
    })
})
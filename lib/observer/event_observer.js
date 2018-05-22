class EventObserver{
    constructor(){
        this.observers = [];
    }
    action(){
        return this.observers.map(spectator => {
            return spectator.reaction;
        })
    }
}

module.exports = EventObserver;
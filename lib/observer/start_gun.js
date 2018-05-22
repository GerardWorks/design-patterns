class StartGun {
    constructor(eventObserver) {
        this.eventObserver = eventObserver;
    }
    bang() {
        return this.eventObserver.action();
    }
}

module.exports = StartGun;
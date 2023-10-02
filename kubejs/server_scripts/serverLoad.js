// priority: 10

ServerEvents.loaded((event) => {
    if (isServer()) {
        event.server.scheduleInTicks(48, () => {
            // Sometimes custom recipes don't load the first time. It's weird
            // event.server.tell('Reloading custom recipes...');
            event.server.runCommandSilent('reload');
        });
    }
});

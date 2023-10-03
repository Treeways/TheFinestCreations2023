// priority: 10

const $DedicatedServer = Java.loadClass('net.minecraft.server.dedicated.DedicatedServer');

ServerEvents.loaded((event) => {
    if (event.server instanceof $DedicatedServer) {
        event.server.scheduleInTicks(48, () => {
            // Sometimes custom recipes don't load the first time. It's weird
            // event.server.tell('Reloading custom recipes...');
            event.server.runCommandSilent('reload');
        });
    }
});

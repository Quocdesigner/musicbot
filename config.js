module.exports = {
    app: {
        token: 'ODA3OTMyMTcxNzU4ODYyMzQ3.GkmLCm.s2BervbGf83OLOVFpEjdMwA7jCishFKJWR6_cE',
        playing: 'by OnisoSweet ❤️',
        global: true,
        guild: '807932171758862347'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};

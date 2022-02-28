let a = {
    rtp:
        [{
            payload: 97,
            codec: 'H264',
            rate: 90000
        },
        {
            payload: 98,
            codec: 'VP8',
            rate: 90000
        }],
    fmtp:
        [{
            payload: 97,
            config: 'profile-level-id=4d0028;packetization-mode=1'
        }],
    type: 'video',
    port: 55400,
    protocol: 'RTP/SAVPF',
    payloads: '97 98',
    direction: 'sendrecv',
    candidates:
        [{
            foundation: 0,
            component: 1,
            transport: 'UDP',
            priority: 2113667327,
            ip: '203.0.113.1',
            port: 55400,
            type: 'host'
        },
        {
            foundation: 1,
            component: 2,
            transport: 'UDP',
            priority: 2113667326,
            ip: '203.0.113.1',
            port: 55401,
            type: 'host'
        }]
}
const PROXY_CONFIG = [
    {
        context: [
            "/telemetry/upload"
        ],
        "target": 'http://localhost:4000',
        "secure": false,
        "logLevel": "debug",
        "changeOrigin": true
    }
]

module.exports = PROXY_CONFIG;
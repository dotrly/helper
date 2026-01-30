# Server: Doctor

Provides a high-performance endpoint for the mobile app to monitor host machine health.

## Endpoint
`GET /api/doctor`

## Data Provided
- **Processor Load**: 1, 5, and 15-minute averages.
- **Memory**: Free vs Total human-readable stats.
- **Uptime**: System-wide uptime in seconds.
- **Platform**: Operating system details.

## Implementation
Utilizes the Node.js `os` module for low-overhead metric collection.

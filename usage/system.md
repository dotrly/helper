# API Usage: System

These endpoints provide information about the host machine's environment and performance.

## 1. Health Check
`GET /`

Returns the basic status of the Relay Helper.

**Example Response:**
```json
{
  "status": "ok",
  "version": "0.1.0",
  "engine": "Relay Helper (Engine Attached)"
}
```

## 2. Environment Info
`GET /api/info`

Provides technical details about the runtime environment.

**Returns:**
- `environment`: `development` or `production`.
- `platform`: e.g., `darwin`, `linux`, `win32`.
- `arch`: e.g., `x64`, `arm64`.

## 3. Real-time Diagnostics
`GET /api/doctor`

Returns live performance metrics from the host machine.

**Data Points:**
- CPU Load (1, 5, 15 min averages)
- Memory usage (Free vs Total)
- System Uptime
- Platform details

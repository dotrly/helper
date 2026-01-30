# Relay Helper

The open-source logic layer for the Relay platform.

Relay is a thin, lightweight window into your most powerful machines. This repository contains the command-line interface, server routes, and business logic that power the Relay Helper—the bridge between your mobile device and your desktop or cloud infrastructure.

## Our Philosophy

We believe your phone should be a window into your computing power, not a standalone silo. This repository enables the "Professional Tools" and "Unlimited Power" promised by the Relay experience by providing the logic for managing files, running local AI models, and controlling system services.

## Why the Binary is Signed

To ensure the integrity and security of the "Thin Window" bridge, the core Relay Engine is distributed as a signed binary. This architecture prevents the distribution of modified or compromised engines, ensuring your data stays private and secure between your devices—never touching a public cloud.

The logic that runs *within* this secure environment is fully open source here. You are encouraged to inspect, modify, and contribute to the bridge's capabilities.

## Usage

This package is intended to be loaded by the Relay Engine.

### Development

You can extend the bridge's capabilities or contribute fixes by running your local version of this logic on top of your installed Relay Engine.

1.  **Clone** this repository.
2.  **Attach**: Run `relay attach` in this directory.
3.  **Test**: The Relay Engine will hot-swap its internal logic with your local code in real-time.

## License

GNU Affero General Public License v3.0

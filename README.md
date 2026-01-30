# Relay Helper Extensions

<p align="center">
  <img src="https://relay.notapublicfigureanymore.com/assets/logo.png" alt="Relay Logo" width="120" />
</p>

Welcome to the **Relay Helper Extensions** repository. This is where the community can contribute new features, commands, and logic to the Relay CLI.

## 🚀 Features

Currently, this repository provides:
- **`relay doctor`**: A diagnostic tool to check your environment (Ollama, Git, Node.js status).

## 🛠 Contributing

We love contributions! Since the core Relay Engine is a signed binary, we have a special workflow that allows you to develop and test changes locally using your existing Relay installation.

### Quick Start

1.  **Clone this repo**:
    ```bash
    git clone https://github.com/dotrly/helper.git
    cd helper
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    ```

3.  **Run in Dev Mode**:
    ```bash
    relay attach
    ```
    This command tells your installed Relay binary to **hot-swap** its internal logic with the code in this directory. You can now test your changes in real-time!

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

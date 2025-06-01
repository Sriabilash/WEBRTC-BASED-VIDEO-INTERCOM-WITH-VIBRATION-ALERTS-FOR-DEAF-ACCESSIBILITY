# WebRTC-Based Video Intercom with Vibration Alerts for Deaf Accessibility

This project aims to build an accessible, browser-based video intercom system using **WebRTC**, enhanced with **vibration alerts** via an **ESP8266 and vibration sensor** for the Deaf and Hard-of-Hearing community.

## 🚀 Features

- 📹 **Real-time Video Calling** via WebRTC
- 🔔 **Vibration Sensor Alerts** triggered by door knock or motion
- 🌐 **Web-based Interface** (no app needed)
- 🔌 **Arduino + ESP8266 Integration** for IoT-based vibration sensing
- 🧏‍♂️ **Accessibility-Oriented Design**

---

## 📁 Project Structure

📦 Video-Intercom-Accessibility
-┣ 📂 client

-┃ ┣ 📜 index.html

-┃ ┣ 📜 script.js

-┃ ┗ 📜 style.css

-┣ 📂 server

-┃ ┣ 📜 server.js (Node.js + Socket.IO signaling server)

-┣ 📂 esp8266

-┃ ┣ 📜 esp8266_code.ino

-┗ 📜 README.md


---

## 📌 Features

- Real-time peer-to-peer video calling using WebRTC.
- Signaling handled through Socket.IO and Node.js server.
- Vibration alert system for Deaf users using ESP8266 and vibration sensor.
- Web-only interface (no app required), works across devices on the same network.
- Responsive and accessible design.

---

## 🔧 Tools & Technologies

| Tool/Tech | Description |
|----------|-------------|
| WebRTC | Peer-to-peer video streaming |
| Socket.IO | Signaling and room management |
| Node.js | Backend server |
| ESP8266 | Wi-Fi microcontroller for sensor interface |
| Arduino | Controls the vibration sensor |
| HTML/CSS/JS | Front-end interface |
| Serial Communication | ESP8266 to Arduino data relay |

---
## 🎯 Objectives

The project aims to develop a video intercom system that is not only functional and web-accessible but also specifically designed to cater to Deaf and Hard-of-Hearing users. By integrating a vibration sensor and ESP8266 module, the system provides knock/movement detection and alerting capabilities along with seamless video calling, making it inclusive and user-friendly.

---

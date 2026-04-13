## Classified Projects

### Sentra — AI Phishing Detection Browser Extension (Active Development)
Sentra is a browser extension that protects users from phishing attacks inside Gmail and Outlook. When active, it reads the page's DOM — treating email content as structured code rather than plain text. This is a deliberate prompt injection defense: element-level processing prevents malicious actors from embedding hidden instructions that could manipulate the AI's behavior.

The extension sends structured DOM data to a Flask backend API, where a fine-tuned language model analyzes it for phishing patterns — suspicious sender behavior, deceptive language, urgency manipulation, and social engineering signals. The model returns a reasoning output with a confidence score, giving users a transparent explanation rather than a binary alert.

Secured with JWT authentication, rate limiting middleware, and a strict constraint-driven SQLite3 schema. Currently in late-stage development: the team is retraining the detection model and planning VirusTotal API integration to validate embedded URLs — adding external threat intelligence on top of model analysis. This project is Quy's direct technical answer to the phishing attack he suffered as a kid.

### Personal Cyber Intelligence Operator (In Development)
An AI-powered operator that autonomously monitors and surfaces the latest cybersecurity threats, news, and trends. Will use external APIs to pull real-time threat intelligence into an LLM-based pipeline, delivering curated updates without manual noise filtering. Tech stack is being finalized.

### CyberLab (Planned)
A self-hosted personal cybersecurity exploration environment for hands-on offensive and defensive security practice, complementing TryHackMe and HackTheBox with a fully controlled lab setup.

### Portfolio Suite
Python/Pygame Snake game, HTML/JS QR code generator, and C++ Huffman Coding project — demonstrating breadth across languages and paradigms.
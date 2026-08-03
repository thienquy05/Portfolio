## Projects — Overview
Quy's flagship project is Fraudify, an AI phishing detection platform built with a 4-person team, where he serves as Cybersecurity Analyst & Developer. He also has two personal projects in earlier stages: a Personal Cyber Intelligence Operator (in development) and CyberLab (planned).

## Fraudify — AI Phishing Detection Platform (Active Development)
Fraudify is a browser extension (Gmail/Outlook) and Flask/PostgreSQL backend that detects phishing emails, built by a 4-person team with Quy serving as Cybersecurity Analyst & Developer. Repo: https://github.com/Phishing-Detection-Team/fraudify

Quy designed a regex pre-flight filter modeled on known jailbreak and prompt-injection patterns (DAN, ChatML tokens, instruction-override phrasing) that blocks attacks before they ever reach the LLM, cutting response time on blocked attempts from a 15-20 second model inference call to under 5 milliseconds. He red-teamed the filter against 41 real attack payloads, found the most common jailbreak phrase slipping through, and patched the gap — lifting the block rate by 10 percentage points with zero false positives on legitimate email.

He also closed a hidden-content injection vector in the browser extension by parsing email bodies with `innerText` rather than `textContent`, keeping CSS-hidden payloads out of the analyzer, and applied NIST CSF data-integrity practices to the PostgreSQL layer: bcrypt password hashing, 20 check constraints, and 15 field validators enforced at both the database and ORM layers across 5 models. This project is Quy's direct technical answer to the phishing attack he suffered as a kid.

## Personal Cyber Intelligence Operator (In Development)
An AI-powered operator that autonomously monitors and surfaces the latest cybersecurity threats, news, and trends. Will use external APIs to pull real-time threat intelligence into an LLM-based pipeline, delivering curated updates without manual noise filtering. Tech stack is being finalized.

## CyberLab (Planned)
A self-hosted personal cybersecurity exploration environment for hands-on offensive and defensive security practice, complementing TryHackMe and HackTheBox with a fully controlled lab setup.

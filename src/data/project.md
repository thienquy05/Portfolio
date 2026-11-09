## Projects — Overview
Quy's flagship project is Sentra, an AI phishing detection platform built with a 4-person team, where he serves as Cybersecurity Analyst & Developer. He also built AEGIS, a prompt-injection firewall and teaching platform, with a team at the MakeUC 2026 hackathon. He also has two personal projects in earlier stages: a Personal Cyber Intelligence Operator (in development) and CyberLab (planned).

## Sentra — AI Phishing Detection Platform (Active Development)
Sentra is a browser extension (Gmail/Outlook) and Flask/PostgreSQL backend that detects phishing emails, built by a 4-person team with Quy serving as Cybersecurity Analyst & Developer. Repo: https://github.com/Phishing-Detection-Team/fraudify

Quy designed a regex pre-flight filter modeled on known jailbreak and prompt-injection patterns (DAN, ChatML tokens, instruction-override phrasing) that blocks attacks before they ever reach the LLM, cutting response time on blocked attempts from a 15-20 second model inference call to under 5 milliseconds. He red-teamed the filter against 41 real attack payloads, found the most common jailbreak phrase slipping through, and patched the gap — lifting the block rate by 10 percentage points with zero false positives on legitimate email.

He also closed a hidden-content injection vector in the browser extension by parsing email bodies with `innerText` rather than `textContent`, keeping CSS-hidden payloads out of the analyzer, and applied NIST CSF data-integrity practices to the PostgreSQL layer: bcrypt password hashing, 20 check constraints, and 15 field validators enforced at both the database and ORM layers across 5 models. This project is Quy's direct technical answer to the phishing attack he suffered as a kid.

## AEGIS — Agent Firewall and Prompt-Injection Learning Platform (MakeUC 2026)
AEGIS (also called Injection Arena) is a team project built for MakeUC 2026 (Security and Education tracks). Students attack level chatbots with prompt injection to make them leak a protected secret or misuse a tool, while a deterministic, rule-based Agent Firewall decides on every action: allow, deny, human review, or divert to a decoy. Models recommend and rules decide, and the system fails closed. After each attempt a teach-back quiz (an AI "confused classmate" plus a grader) checks understanding, and a classroom dashboard shows teachers where the class struggles. Stack: Python/FastAPI, Next.js, PostgreSQL, Auth0, Gemini. Repo: https://github.com/MakeUC2026/AEGIS

Quy's part: he designed the firewall workflow (how each event moves through the allow, deny, review and divert decisions), built the admin and intelligence workers that process firewall events and draft new rule candidates for an admin to approve, and redesigned the admin and classroom console.

Results from the team's end-to-end MVP verification: an approved, Gemini-drafted "I am the administrator" deny rule blocked that attack in a new session while the session already running kept its old behaviour; every Deny and Divert event (12 of 12) got a forensic report; role checks were enforced on the server for all three roles. Known limits, reported honestly: the worker does not draft a rule for every blocked event, and a transient embedding API error makes Strict mode fail closed and deny a harmless request.

## Personal Cyber Intelligence Operator (In Development)
An AI-powered operator that autonomously monitors and surfaces the latest cybersecurity threats, news, and trends. Will use external APIs to pull real-time threat intelligence into an LLM-based pipeline, delivering curated updates without manual noise filtering. Tech stack is being finalized.

## CyberLab (Planned)
A self-hosted personal cybersecurity exploration environment for hands-on offensive and defensive security practice, complementing TryHackMe and HackTheBox with a fully controlled lab setup.

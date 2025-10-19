---
id: integrations
title: Integrations
---

An **Integration** is the parent object that securely stores credentials for a third-party service. Think of it as the keychain for a specific service like AWS or Google Cloud.

For example, if you have multiple Google Sheets, you would create one Google OAuth Integration. Then each Google Sheets Connection would reference that single Integration for authentication.

When creating an Integration, you'll typically provide credentials such as API keys, OAuth tokens, or service account details.

SaddleData encrypts and stores these credentials securely, so you only need to enter them once. When you create a Connection, you'll reference the parent Integration, which provides the necessary authentication.

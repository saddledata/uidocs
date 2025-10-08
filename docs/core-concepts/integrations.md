---
id: integrations
title: Integrations
---

An **Integration** is the parent object that securely stores credentials for a third-party service. Think of it as the keychain for a specific service like AWS or Google Cloud.

For example, if you have multiple PostgreSQL databases, you would create one PostgreSQL Integration for each database, with each Integration storing the unique connection credentials (host, user, password, etc.).

SaddleData encrypts and stores these credentials securely, so you only need to enter them once. When you create a Connection, you'll reference the parent Integration, which provides the necessary authentication.

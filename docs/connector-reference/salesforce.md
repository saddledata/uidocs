---
id: salesforce
title: Salesforce
---

## Overview

Salesforce is a leading customer relationship management (CRM) platform. SaddleData connects to Salesforce as both a **Source** and a **Destination**, allowing you to sync data to and from your CRM.

## Prerequisites

To connect to Salesforce, you will need:
*   A Salesforce account with API access enabled.
*   A connected app or user credentials for authentication.

### Permissions

The Salesforce user must have the following permissions:
*   **API Enabled:** System permission to allow API access.
*   **Object Access:**
    *   **Source:** "Read" permission for any objects you wish to extract (e.g., Contact, Account).
    *   **Destination:** "Create", "Edit", and "Delete" permissions for objects you wish to write to.
*   **Field Level Security:** Ensure the user has visibility into the fields you intend to sync.

## Configuration

SaddleData currently supports the **OAuth 2.0 Username-Password Flow**. You will need to provide:

*   **Client ID:** The Consumer Key from your Salesforce Connected App.
*   **Client Secret:** The Consumer Secret from your Salesforce Connected App.
*   **Username:** The username of the Salesforce user.
*   **Password:** The password of the Salesforce user.
*   **Security Token:** The security token for the Salesforce user. If your IP is whitelisted in Salesforce, this may not be required, but it is recommended.
*   **Login URL:** (Optional) Defaults to `https://login.salesforce.com`. Use `https://test.salesforce.com` for Sandboxes.

## Supported Data

SaddleData supports standard and custom Salesforce objects.

### Sync Modes

*   **Full Refresh:** Fetches all records from the selected object.
*   **Incremental:** Fetches only new or modified records based on a cursor field (e.g., `SystemModstamp`, `LastModifiedDate`, or `CreatedDate`).

## Schema Evolution

SaddleData discovers the schema of your Salesforce objects dynamically. If you add custom fields to your Salesforce objects, you can refresh the schema in SaddleData to include them in your syncs.

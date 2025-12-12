---
id: hubspot
title: HubSpot
---

## Overview

HubSpot is a CRM platform that includes marketing, sales, and customer service software. SaddleData connects to HubSpot as both a **Source** and a **Destination**.

## Prerequisites

To connect to HubSpot, you will need:
*   A HubSpot Private App Access Token.

### Required Scopes

Ensure your Private App has the following scopes based on the objects you intend to sync:

**Contacts:**
*   `crm.objects.contacts.read` (Source)
*   `crm.objects.contacts.write` (Destination)

**Companies:**
*   `crm.objects.companies.read`
*   `crm.objects.companies.write`

**Deals:**
*   `crm.objects.deals.read`
*   `crm.objects.deals.write`

**Other Objects:**
*   Equivalent `read` and `write` scopes for Tickets, Products, etc.

## Configuration

*   **Access Token:** The Access Token for your Private App. Ensure the app has the necessary scopes listed above.

## Supported Data

SaddleData supports syncing standard CRM objects such as:
*   Contacts
*   Companies
*   Deals
*   Tickets
*   Custom Objects

### Sync Modes

*   **Full Refresh:** Fetches all records for the selected object.
*   **Incremental:** Uses the HubSpot Search API to fetch records modified after the last sync. This typically relies on the `lastmodifieddate` property.

## Schema Evolution

SaddleData dynamically discovers the properties available for your HubSpot objects. You can choose which properties to sync.

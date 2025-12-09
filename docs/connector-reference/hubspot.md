---
id: hubspot
title: HubSpot
---

## Overview

HubSpot is a CRM platform that includes marketing, sales, and customer service software. SaddleData connects to HubSpot as a **Source**.

## Prerequisites

To connect to HubSpot, you will need:
*   A HubSpot Private App Access Token.

## Configuration

*   **Access Token:** The Access Token for your Private App. Ensure the app has the necessary scopes (e.g., `crm.objects.contacts.read`, `crm.objects.deals.read`) for the data you wish to sync.

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

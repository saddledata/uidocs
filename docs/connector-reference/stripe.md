---
id: stripe
title: Stripe
---

## Overview

Stripe is a suite of payment APIs that powers commerce for online businesses of all sizes. SaddleData can use Stripe as a data source.

## Prerequisites

To connect to Stripe, you will need your Stripe API key.

## Configuration

When creating a Stripe Integration, you will need to provide the following information:

*   **API Key:** Your Stripe secret API key.

## Sync Modes

### Stripe as a Source

When using Stripe as a source, you can choose from the following sync modes:

*   **Full Refresh:** Reads all data from the Stripe API for the selected object.
*   **Incremental:** Reads only new records based on the `created` timestamp.

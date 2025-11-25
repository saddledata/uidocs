---
id: google-sheets
title: Google Sheets
---

## Overview

Google Sheets is a powerful, web-based spreadsheet application. SaddleData can use Google Sheets as both a data source and a destination.

## Prerequisites

To connect to Google Sheets, you will need to:

*   Authenticate with your Google account via OAuth.
*   Ensure the Google Sheets API is enabled for your account. You can do this from the [Google API Console](https://console.developers.google.com/apis/library/sheets.googleapis.com).

## Configuration

When creating a Google Sheets Connection, you will need to provide the following information:

*   **Sheet ID:** The ID of the Google Sheet you want to connect to. You can find this in the URL of your sheet: `https://docs.google.com/spreadsheets/d/{SHEET_ID}/edit`
*   **Sheet Name:** The name of the specific sheet (tab) within the spreadsheet that you want to read from or write to.
*   **Entity Name:** This is the name that will be used to represent the sheet in your Flow configuration.

## Sync Modes

### Google Sheets as a Source

When using Google Sheets as a source, you can choose from the following sync modes:

*   **Full Refresh:** Reads all data from the sheet.
*   **Incremental:** Reads only new rows from the sheet based on a cursor column. This is done by reading the entire sheet and filtering in memory.

### Google Sheets as a Destination

When using Google Sheets as a destination, you can choose from the following sync modes:

*   **Full Refresh - Overwrite:** Replaces all data in the destination sheet.
*   **Incremental - Append:** Appends new records to the destination sheet.
*   **Incremental - Deduped (Upsert):** Updates existing rows and inserts new rows based on a primary key.

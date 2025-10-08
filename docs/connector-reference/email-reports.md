---
id: email-reports
title: Email Reports
---

## Overview

SaddleData can send the output of a Flow as a CSV email attachment. This is useful for daily reports or for sending data to non-technical users.

## Prerequisites

To send email reports, you must first create an **SMTP2GO Integration**. This will allow SaddleData to send emails on your behalf.

## Configuration

When creating an Email Report Connection, you will need to provide the following information:

*   **To:** The email address of the recipient.
*   **From:** The email address you want to send from (must be a verified sender in your SMTP2GO account).
*   **Subject:** The subject of the email.
*   **Body:** The body of the email.

In your Flow configuration, the `destination.name` will be used as the filename for the CSV attachment.

**Example Flow Configuration:**

```json
{
  "source": {
    "name": "my-source-db"
  },
  "destination": {
    "name": "daily-user-report.csv"
  },
  "tables": [
    {
      "name": "active_users"
    }
  ]
}
```

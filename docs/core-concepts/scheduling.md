---
id: scheduling
title: Scheduling
---

Saddle Data allows you to run your Flows on a schedule, so your data is always fresh and up-to-date.

Flows can be scheduled in two ways:

*   **Manual Runs:** You can trigger a Flow to run at any time by clicking the "Run Now" button in the UI.

*   **Scheduled Runs:** You can define a schedule for a Flow using a standard cron expression. This allows for a high degree of flexibility, from running a flow every 5 minutes to once a month.

For example, to run a flow every day at 2:00 AM, you would use the following cron expression:

```
0 2 * * *
```

While you can directly edit the cron expression, the UI also provides a user-friendly scheduling selector. This allows you to visually build your schedule without needing to understand the cron syntax.

You can set the schedule when creating or editing a Flow.
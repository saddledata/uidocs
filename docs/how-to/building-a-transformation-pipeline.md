---
id: building-a-transformation-pipeline
title: Building a Transformation Pipeline
---

One of the most powerful features of Saddle Data is the ability to chain multiple in-flight transformations together. This guide will show you how to build a simple yet practical transformation pipeline.

Let's say we have a `users` table with the following columns:

*   `id`
*   `name`
*   `email`
*   `is_active` (boolean)
*   `created_at`

Our goal is to create a new table in our destination that only contains the `id` and `email` of active users, with the `email` column renamed to `user_email`.

Here is the transformation pipeline we will build:

1.  **Filter Rows:** Keep only the rows where `is_active` is `true`.
2.  **Select Columns:** Keep only the `id` and `email` columns.
3.  **Rename Columns:** Rename the `email` column to `user_email`.

### Building the Flow

In your Flow configuration, you would add a `transformations` array like this:

```json
{
  "source": {
    "name": "my-source-db"
  },
  "destination": {
    "name": "my-destination-db"
  },
  "tables": [
    {
      "name": "users",
      "transformations": [
        {
          "type": "filter_rows",
          "config": {
            "column": "is_active",
            "operator": "eq",
            "value": true
          }
        },
        {
          "type": "select_columns",
          "config": {
            "columns": ["id", "email"]
          }
        },
        {
          "type": "rename_columns",
          "config": {
            "columns": {
              "email": "user_email"
            }
          }
        }
      ]
    }
  ]
}
```

When this Flow runs, Saddle Data will perform the transformations in order, resulting in a clean, targeted table in your destination.

---
id: transformations
title: Transformations
---

Saddle Data allows you to perform powerful in-flight transformations on your data as it moves from source to destination. This means you can clean, reshape, and filter your data without needing a separate transformation tool.

Transformations are defined within a Flow's configuration and are executed in the order they are listed. The currently supported transformation types are:

*   **Filter Rows:** Remove rows that don't match a specified condition. For example, you could filter a `users` table to only include users where `is_active = true`.

*   **Select Columns:** Choose which columns to include in the output. This is useful for removing sensitive or unnecessary data.

*   **Rename Columns:** Rename columns to match the schema of your destination or to create more descriptive field names. For example, renaming `email` to `user_email`.

These transformations can be chained together to create a powerful data quality pipeline. See the [How-To Guides](../how-to/building-a-transformation-pipeline) for a practical example.

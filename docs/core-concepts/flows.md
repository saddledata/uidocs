---
id: flows
title: Flows
---

A **Flow** is the core component of Saddle Data. It's a pipeline that moves data from a Source Connection to a Destination Connection.

Each Flow is defined by a simple configuration that specifies:

*   The **source** connection.
*   The **destination** connection.
*   The **tables** to be replicated.
*   An optional series of in-flight **transformations**.

A Flow can be run manually at any time or scheduled to run automatically.

### Sync Modes

When you configure a table to be synced in a Flow, you can choose one of the following sync modes:

*   **Full Refresh - Overwrite:** This mode replaces all data in the destination table with the data from the source. It's a destructive operation, so be careful when using it.

*   **Incremental - Append:** This mode only syncs new records from the source to the destination. It's a non-destructive operation. This mode is ideal for append-only data streams.

*   **Incremental - Deduped (Upsert):** This mode syncs new records and updates existing records in the destination. This requires a primary key to be defined for the table. It's a non-destructive operation and is the recommended mode for most incremental syncs.

It's important to note that not all destinations support all sync modes. The UI will guide you and provide warnings if there's a mismatch between the chosen sync mode and the destination's capabilities.

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

### Schema Drift Handling

Source schemas change over time—columns are added, removed, or renamed. FlowSlate allows you to define a **Schema Change Policy** for each table mapping to control how these changes are handled.

#### Policies

You can select one of the following policies:

*   **Automatically Update Destination (`allow_all`):**
    *   **Behavior:** When a new column is detected in the source, FlowSlate automatically adds the corresponding column to the destination table and continues the sync without interruption.
    *   **Use Case:** Best for development environments or pipelines where the destination schema should strictly mirror the source.

*   **Pause Pipeline (`block_on_new_column`):**
    *   **Behavior:** When a new or missing column is detected, the flow run is immediately halted with a status of `drift_detected`. A notification is sent (if configured).
    *   **Resolution:** You must review the drift in the Flow Details page. You can then choose to **"Approve & Sync"**, which will perform a one-time schema migration to align the destination with the source and resume the pipeline.
    *   **Use Case:** Essential for production environments where schema changes must be audited or could break downstream dependencies.

#### Drift Resolution Workflow

If a flow is paused due to schema drift:
1.  Navigate to the **Flow Details** page.
2.  Look for the run with the `drift_detected` status (indicated by an orange warning icon).
3.  Click **View Drift** to see the specific changes (e.g., "New columns: `user_score`, `last_login`").
4.  Click **Approve & Sync**. FlowSlate will update your flow configuration to include the new columns and trigger a run to apply the changes to the destination.

---
id: connections
title: Connections
---

A **Connection** is a specific, usable instance of an Integration. It represents a single, configured endpoint that a Flow can use as either a source or a destination.

To use an analogy:

> An **Integration** is like your keychain for AWS, holding the master keys.
> A **Connection** is the specific key on that keychain for a single S3 bucket or a specific Redshift database.

For example, you might have a single PostgreSQL **Integration** for your production database. From that Integration, you could create multiple **Connections**:

*   A read-only connection to the `analytics` schema.
*   A write-only connection to a specific `data_warehouse` table.

Each Flow requires a Source Connection and a Destination Connection to move data.

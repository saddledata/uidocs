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

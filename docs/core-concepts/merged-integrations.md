---
title: Merged Integrations
---

Merged integrations are a special type of connection where the integration details are bundled directly with the connection information. This approach is typically used for database systems like PostgreSQL or MySQL.

In these database systems, connection details such as the host, port, username, and password are often unique to a specific database instance. Unlike other integrations where you might have a single set of credentials to access multiple resources (e.g., a single Google account for accessing various Google Sheets), each database connection is distinct.

Attempting to separate the integration from the connection for these databases would lead to a confusing user experience. You would end up creating a new integration for every new database connection, which defeats the purpose of having reusable integrations.

By merging the integration and connection details, we simplify the process of connecting to these types of data sources. When you create a new PostgreSQL or MySQL connection, you provide all the necessary information in one step, and Saddle Data handles the rest.
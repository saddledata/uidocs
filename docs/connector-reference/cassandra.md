---
id: cassandra
title: Cassandra
---

## Overview

Apache Cassandra is a free and open-source, distributed, wide-column store, NoSQL database management system. SaddleData can use Cassandra as both a data source and a destination.

## Prerequisites

Before connecting to Cassandra, please ensure you have the following:

*   A dedicated user for your source database to ensure data security.
*   Whitelisted SaddleData's IP addresses in your firewall to allow for a successful connection. Our IP addresses are `100.20.10.1` and `100.20.10.2`.

## Configuration

When creating a Cassandra Integration, you will need to provide the following information:

*   **Contact Points:** A comma-separated list of hosts or IP addresses of your Cassandra cluster.
*   **Port:** The port your Cassandra cluster is listening on (default is `9042`).
*   **User:** The username for your user.
*   **Password:** The password for the user.
*   **Keyspace:** The name of the keyspace you want to connect to.

## Sync Modes

### Cassandra as a Source

When using Cassandra as a source, you can choose from the following sync modes:

*   **Full Refresh:** Reads all data from the table.
*   **Incremental:** Reads only new rows from the table based on a cursor column.

### Cassandra as a Destination

When using Cassandra as a destination, you can choose from the following sync modes:

*   **Full Refresh - Overwrite:** Replaces all data in the destination table.
*   **Incremental - Append:** Appends new records to the destination table.
*   **Incremental - Deduped (Upsert):** Updates existing rows and inserts new rows based on a primary key, as Cassandra's `INSERT` is an upsert.

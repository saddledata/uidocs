---
id: mysql
title: MySQL
---

## Overview

MySQL is a widely-used, open-source relational database management system. SaddleData can use MySQL as both a data source and a destination.

## Prerequisites

Before connecting to MySQL, please ensure you have the following:

*   A dedicated, read-only user for your source database to ensure data security.
*   Whitelisted SaddleData's IP addresses in your firewall to allow for a successful connection. Our IP addresses are `100.20.10.1` and `100.20.10.2`.

## Configuration

When creating a MySQL Integration, you will need to provide the following information:

*   **Host:** The hostname or IP address of your MySQL server.
*   **Port:** The port your MySQL server is listening on (default is `3306`).
*   **User:** The username for your dedicated read-only user.
*   **Password:** The password for the user.
*   **Database:** The name of the database you want to connect to.

## Sync Modes

### MySQL as a Source

When using MySQL as a source, you can choose from the following sync modes:

*   **Full Refresh:** Reads all data from the table.
*   **Incremental:** Reads only new rows from the table based on a cursor column.

### MySQL as a Destination

When using MySQL as a destination, you can choose from the following sync modes:

*   **Full Refresh - Overwrite:** Replaces all data in the destination table.
*   **Incremental - Append:** Appends new records to the destination table.
*   **Incremental - Deduped (Upsert):** Updates existing rows and inserts new rows based on a primary key, using an `INSERT ... ON DUPLICATE KEY UPDATE` statement.

## Schema Evolution

MySQL supports full Schema Drift handling:

*   **Source:** Detects new and dropped columns.
*   **Destination:** Supports `ALTER TABLE` operations to automatically add new columns when the "Automatically Update Destination" policy is active or when a drift is manually approved.

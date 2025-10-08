---
id: postgresql
title: PostgreSQL
---

## Overview

PostgreSQL is a powerful, open-source object-relational database system. SaddleData can use PostgreSQL as both a data source and a destination.

## Prerequisites

Before connecting to PostgreSQL, please ensure you have the following:

*   A dedicated, read-only user for your source database to ensure data security.
*   Whitelisted SaddleData's IP addresses in your firewall to allow for a successful connection. Our IP addresses are `100.20.10.1` and `100.20.10.2`.

## Configuration

When creating a PostgreSQL Integration, you will need to provide the following information:

*   **Host:** The hostname or IP address of your PostgreSQL server.
*   **Port:** The port your PostgreSQL server is listening on (default is `5432`).
*   **User:** The username for your dedicated read-only user.
*   **Password:** The password for the user.
*   **Database:** The name of the database you want to connect to.

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

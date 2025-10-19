---
id: quick-start
title: Quick Start - Your First Data Flow
---

This guide will walk you through creating your first data flow in SaddleData in under 10 minutes. We'll go from signing up to replicating a table from a source PostgreSQL database to a destination PostgreSQL database.

### 1. Sign Up and Create an Organization

First, head to the [SaddleData sign-up page](https://app.saddledata.io/register) and create your account. Once you've verified your email, you're ready to start building!

### 2. Connect to a Source (PostgreSQL)

A **Connection** is a specific instance of an **Integration**, which securely stores the credentials for a third-party service. For some database types like PostgreSQL, you can create both at the same time.

1.  From the action button on the bottom right, click **"New Connection"**.
2.  Give this connection a descriptive name, like `sample-pg-source.
3.  Select **PostgreSQL** from the list.
4.  The form will prompt you for both the Integration and Connection details in one place.
5.  Fill in the required credentials for your source database.
6.  Click **"Add Connection"**.

### 3. Connect to a Destination (PostgreSQL)

Follow the same process as in Step 2 for your destination database.

1.  From the action button on the bottom right, click **"New Connection"**.
2.  Give your connection a name, like `my-pg-destination`.
3.  Select **PostgreSQL** from the list.
4.  Fill in the credentials for your destination database.
5.  Click **"Add Connection"**.

### 4. Create Your First Flow

A **Flow** is the pipeline that moves data from a source to a destination.

1.  From the action button on the bottom right, click **"New Flow"**.
2.  Give your flow a name, for example, `replicate-users-table`.
3.  For the **Source**, select your `sample-pg-source` connection.
4.  Saddle Data will automatically detect the available tables in your source database. Select the tables you want to replicate.
5.  For the **Destination**, select your `my-pg-destination` connection.
6.  Fill in the destination schema (e.g., `public`). This is only required for databases that support schemas like PostgreSQL.
7.  Click **"Manual Trigger"** to set the flow to run only when you manually trigger it.
8.  Click **"Add Flow"**.

### 5. Run the Flow and Verify

1.  From the left navigation, click **Flows**.
2.  From the Flows list, find your new flow and click the **"Run Now"** button.
3.  The flow status will change to "Running" and then to "Succeeded".
4.  Connect to your destination PostgreSQL database. You should now see the replicated tables with the same data as in your source database.

Congratulations! You've just built your first data flow with SaddleData.

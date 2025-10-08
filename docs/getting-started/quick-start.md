---
id: quick-start
title: Quick Start - Your First Data Flow
---

This guide will walk you through creating your first data flow in SaddleData in under 10 minutes. We'll go from signing up to replicating a table from a source PostgreSQL database to a destination PostgreSQL database.

### 1. Sign Up and Create an Organization

First, head to the [SaddleData sign-up page](https://app.saddledata.io/register) and create your account. Once you've verified your email, you'll be prompted to create a new organization. Give it a name, and you're ready to start building!

### 2. Connect to a Source (PostgreSQL)

A **Connection** is a specific instance of an **Integration**, which securely stores the credentials for a third-party service. For some database types like PostgreSQL, you can create both at the same time.

1.  From the left navigation, click **Connections** and then **"New Connection"**.
2.  Select **PostgreSQL** from the list.
3.  The form will prompt you for both the Integration and Connection details in one place.
4.  Fill in the required credentials for your source database.
5.  Give your connection a descriptive name, like `sample-pg-source`.
6.  Click **"Create"**.

### 3. Connect to a Destination (PostgreSQL)

Follow the same process as in Step 2 for your destination database.

1.  From the left navigation, click **Connections** and then **"New Connection"**.
2.  Select **PostgreSQL**.
3.  Fill in the credentials for your destination database.
4.  Give your connection a name, like `my-pg-destination`.
5.  Click **"Create"**.

### 4. Create Your First Flow

A **Flow** is the pipeline that moves data from a source to a destination.

1.  Go to the **Flows** tab and click **"New Flow"**.
2.  Give your flow a name, for example, `replicate-users-table`.
3.  For the **Source**, select your `sample-pg-source` connection.
4.  For the **Destination**, select your `my-pg-destination` connection.
5.  In the configuration editor, you'll define which tables to replicate. For this example, we'll replicate a single table named `users`:

    ```json
    {
      "source": {
        "name": "sample-pg-source"
      },
      "destination": {
        "name": "my-pg-destination"
      },
      "tables": [
        {
          "name": "users"
        }
      ]
    }
    ```

6.  Click **"Create Flow"**.

### 5. Run the Flow and Verify

1.  From the Flows list, find your new flow and click the **"Run Now"** button.
2.  The flow status will change to "Running" and then to "Succeeded".
3.  Connect to your destination PostgreSQL database. You should now see a new table named `users` with the same data as the source table.

Congratulations! You've just built your first data flow with SaddleData.

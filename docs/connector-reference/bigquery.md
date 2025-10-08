---
id: bigquery
title: BigQuery
---

## Overview

Google BigQuery is a serverless, highly-scalable data warehouse. SaddleData can use BigQuery as a data destination.

## Prerequisites

To connect to BigQuery, you will need:

*   A Google Cloud Platform project with the BigQuery API enabled.
*   A service account with the "BigQuery Data Editor" and "BigQuery Job User" roles.
*   The JSON key file for the service account.

## Configuration

When creating a BigQuery Integration, you will need to provide the following information:

*   **Project ID:** The ID of your Google Cloud Platform project.
*   **Dataset:** The BigQuery dataset you want to write to.
*   **Service Account JSON:** The contents of the JSON key file for your service account.

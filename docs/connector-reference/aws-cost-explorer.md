---
id: aws-cost-explorer
title: AWS Cost Explorer
---

## Overview

AWS Cost Explorer is a tool that enables you to view and analyze your AWS costs and usage. SaddleData can use AWS Cost Explorer as a data source.

## Prerequisites

To connect to AWS Cost Explorer, you will need:

*   An AWS account with access to Cost Explorer.
*   An IAM user with permissions to access Cost Explorer data.
*   An AWS access key ID and secret access key for the IAM user.

## Configuration

When creating an AWS Integration, you will need to provide the following information:

*   **Access Key ID:** Your AWS access key ID.
*   **Secret Access Key:** Your AWS secret access key.
*   **Region:** The AWS region to connect to (e.g., `us-east-1`).

## Sync Modes

### AWS Cost Explorer as a Source

When using AWS Cost Explorer as a source, you can choose from the following sync modes:

*   **Full Refresh:** Reads the last 7 days of cost and usage data.
*   **Incremental:** Reads data since the last sync, based on the `time_period_start` date.

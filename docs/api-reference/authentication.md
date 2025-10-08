---
id: authentication
title: Authentication
---

To use the SaddleData API, you will need to generate an API token and include it in your requests.

### Generating an API Token

1.  Go to your **User Settings** page.
2.  In the **"API Tokens"** section, click **"Generate New Token"**.
3.  Give your token a descriptive name and click **"Generate"**.
4.  **Important:** Copy the token and store it in a safe place. You will not be able to see it again.

### Using the API Token

Include your API token in the `Authorization` header of your requests, with the "Bearer" scheme:

```
Authorization: Bearer <your-api-token>
```

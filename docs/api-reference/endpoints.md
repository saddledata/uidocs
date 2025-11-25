---
id: endpoints
title: API Endpoints
---

This is a summary of the available API endpoints. All endpoints are prefixed with `/v1`.

## Public Endpoints

These endpoints are not authenticated.

*   `GET /health`: Health check endpoint.
*   `GET /connectors/capabilities`: Get the capabilities of all available connectors.
*   `POST /webhooks/stripe`: Handle Stripe webhooks.
*   `GET /connections/google/auth/callback`: Callback for Google OAuth.

## User Endpoints

These endpoints are for managing the authenticated user.

*   `POST /invitations/accept`: Accept an organization invitation.
*   `POST /users/sync-profile`: Sync the user's profile with the authentication provider.
*   `GET /users/me`: Get the current user's details.
*   `PATCH /users/me`: Update the current user's details.

## Organization Endpoints

These endpoints are for managing organizations and their resources.

### Organizations

*   `GET /organizations`: List all organizations for the authenticated user.
*   `POST /organizations`: Create a new organization.
*   `GET /organizations/{orgId}`: Get details for a specific organization.
*   `PUT /organizations/{orgId}`: Update an organization.
*   `DELETE /organizations/{orgId}`: Delete an organization.
*   `GET /organizations/{orgId}/dashboard`: Get dashboard data for an organization.

### Members & Invitations

*   `GET /organizations/{orgId}/members`: List all members of an organization.
*   `PUT /organizations/{orgId}/members/{userId}`: Update a member's role.
*   `DELETE /organizations/{orgId}/members/{userId}`: Remove a member from an organization.
*   `POST /organizations/{orgId}/invitations`: Create an invitation to join an organization.

### Billing

*   `GET /organizations/{orgId}/billing/status`: Get the billing status for an organization.
*   `POST /organizations/{orgId}/billing/checkout-session`: Create a new Stripe Checkout session.
*   `POST /organizations/{orgId}/billing/customer-portal-session`: Create a new Stripe Customer Portal session.

### Integrations

*   `POST /organizations/{orgId}/integrations`: Create a new integration.
*   `GET /organizations/{orgId}/integrations`: List all integrations for an organization.
*   `GET /organizations/{orgId}/integrations/{integrationId}`: Get details for a specific integration.
*   `GET /organizations/{orgId}/integrations/{integrationId}/details`: Get sensitive details for a specific integration.
*   `PATCH /organizations/{orgId}/integrations/{integrationId}`: Update an integration.
*   `DELETE /organizations/{orgId}/integrations/{integrationId}`: Delete an integration.
*   `GET /organizations/{orgId}/integrations/google/auth/start`: Start the Google OAuth flow for an integration.

### Connections

*   `GET /organizations/{orgId}/connections`: List all connections for an organization.
*   `POST /organizations/{orgId}/connections`: Create a new connection.
*   `PATCH /organizations/{orgId}/connections/{connectionId}`: Update a connection.
*   `DELETE /organizations/{orgId}/connections/{connectionId}`: Delete a connection.
*   `POST /organizations/{orgId}/connections/test`: Test a new connection.
*   `POST /organizations/{orgId}/connections/{connectionId}/test`: Test an existing connection.
*   `POST /organizations/{orgId}/connections/{connectionId}/discover`: Discover the schema of a connection.
*   `POST /organizations/{orgId}/connections/{connectionId}/preview`: Preview the data of a connection.
*   `POST /organizations/{orgId}/connections/{connectionId}/preview/transform`: Preview the data of a connection with a transformation.

### Flows

*   `GET /organizations/{orgId}/flows`: List all flows for an organization.
*   `POST /organizations/{orgId}/flows`: Create a new flow.
*   `GET /organizations/{orgId}/flows/{flowId}`: Get details for a specific flow.
*   `PATCH /organizations/{orgId}/flows/{flowId}`: Update a flow.
*   `DELETE /organizations/{orgId}/flows/{flowId}`: Delete a flow.
*   `POST /organizations/{orgId}/flows/{flowId}/run`: Manually trigger a flow run.
*   `GET /organizations/{orgId}/flows/{flowId}/details`: Get detailed information about a flow.
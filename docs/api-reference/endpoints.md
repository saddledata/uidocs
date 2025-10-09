---
id: endpoints
title: API Endpoints
---

This is a summary of the available API endpoints.

## Resources

### Organizations

*   `GET /organizations`: List all organizations for the authenticated user.
*   `POST /organizations`: Create a new organization.
*   `GET /organizations/{orgId}`: Get details for a specific organization.
*   `PUT /organizations/{orgId}`: Update an organization.
*   `DELETE /organizations/{orgId}`: Delete an organization.

### Connections

*   `GET /organizations/{orgId}/connections`: List all connections for an organization.
*   `POST /organizations/{orgId}/connections`: Create a new connection.
*   `GET /organizations/{orgId}/connections/{connectionId}`: Get details for a specific connection.
*   `PATCH /organizations/{orgId}/connections/{connectionId}`: Update a connection.
*   `DELETE /organizations/{orgId}/connections/{connectionId}`: Delete a connection.

### Flows

*   `GET /organizations/{orgId}/flows`: List all flows for an organization.
*   `POST /organizations/{orgId}/flows`: Create a new flow.
*   `GET /organizations/{orgId}/flows/{flowId}`: Get details for a specific flow.
*   `PATCH /organizations/{orgId}/flows/{flowId}`: Update a flow.
*   `DELETE /organizations/{orgId}/flows/{flowId}`: Delete a flow.
*   `POST /organizations/{orgId}/flows/{flowId}/run`: Manually trigger a flow run.

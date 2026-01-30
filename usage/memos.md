# API Usage: Memos

The Memo API is a simple implementation of a volatile storage system for text snippets. It demonstrates how to handle POST requests and state management.

## 1. Create a Memo
`POST /api/memo`

Saves a new text snippet to the internal store.

**Request Body:**
```json
{
  "text": "Call the team for the standup."
}
```

**Response:**
```json
{
  "success": true,
  "count": 1
}
```

## 2. List Memos
`GET /api/memo`

Retrieves all stored snippets.

**Example Response:**
```json
{
  "memos": [
    "Call the team for the standup.",
    "Order more coffee"
  ]
}
```

> [!NOTE]
> Memos are currently stored in memory and will be cleared if the Relay Helper process restarts.

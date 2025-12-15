# SERVER-SENT-EVENTS

**What are Server-Sent Events (SSE)?**

Server-Sent Events (SSE) is a technology that enables a server to push automatic updates to a client (like a web browser) over a standard HTTP connection.

Think of it like a radio station. Once the client (the radio) tunes in to the server (the station), the server can continuously broadcast messages. The client doesn't need to ask "Is there new music?" repeatedly; it just plays whatever the server sends.

Key Characteristics:

- One-Way: Data flows only from Server → Client. (Unlike WebSockets, which are bidirectional).

- Text-Based: It uses simple text data encoded in UTF-8.

- Automatic Reconnection: If the connection drops, the browser automatically tries to reconnect.



### How to Emit Events (The Server Side)

Emitting an SSE is simpler than it sounds. You don't need a special protocol like WebSockets; you just need to keep an HTTP request open and write data to it in a specific format.

#### The Headers

To turn a standard HTTP request into an SSE stream, you must send these three headers:

- `Content-Type: text/event-stream` (Tells the browser this is a stream, not a standard page).

- `Cache-Control: no-cache` (Prevents the browser from caching the stream).

- `Connection: keep-alive` (Keeps the connection open).

#### The Data Format

To "emit" an event, you write a string to the response followed by two newlines `\n\n`

- res.write(data: ${data}\n\n`);



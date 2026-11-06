# Python Network Programming

Python provides two levels of access to network programming:

- **Low-Level Access** – At the low level, you can access the basic socket support of the operating system. This lets you implement clients and servers for both connection-oriented and connectionless protocols.
- **High-Level Access** – At the high level, Python lets you work with protocols like HTTP and FTP directly, without managing sockets yourself.

In this article, we'll focus on network socket programming. But first, let's understand what sockets actually are.

---

## What are Sockets?

Think of a socket as one endpoint of a bidirectional communication channel. Sockets can communicate within a single process, between processes on the same machine, or between processes on entirely different machines. They rely on various protocols to determine the connection type used for port-to-port communication between clients and servers.

---

## Sockets Vocabulary

Sockets come with their own vocabulary. Here are the key terms:

| Term | Description |
|---|---|
| Domain | The set of protocols used for the transport mechanism, e.g. `AF_INET`, `PF_INET`. |
| Type | The type of communication between sockets. |
| Protocol | Identifies the specific protocol used within the domain and type. Typically zero. |
| Port | The port a server listens on for client connections. Can be a port number, a service name, or an integer. |
| Hostname | Identifies a network interface. Can be a hostname string, an IPv6 address, a dotted-quad address, an integer, a zero-length string, or the string `"<broadcast>"`. |

---

## Socket Programming

Socket programming is a way of connecting two nodes on a network so they can communicate with each other. One socket listens on a particular port at an IP address, while the other socket reaches out to form a connection. The server creates the listening socket; the client reaches out to it. This client-server pattern is the backbone of most network communication, including web browsing.

Python's built-in `socket` module handles all of this:

```python
import socket
```

To create a socket, use the `socket.socket()` method.

**Syntax:**

```python
socket.socket(socket_family, socket_type, protocol=0)
```

Where:

- **socket_family** – Either `AF_UNIX` or `AF_INET`.
- **socket_type** – Either `SOCK_STREAM` (TCP) or `SOCK_DGRAM` (UDP).
- **protocol** – Usually left out, defaulting to `0`.

**Example:**

```python
import socket

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
print(s)
```

**Output:**

```
<socket.socket fd=74, family=AddressFamily.AF_INET, type=SocketKind.SOCK_STREAM, proto=0, laddr=('0.0.0.0', 0)>
```

The `socket` module provides various methods for both client-side and server-side programming. Let's look at each in detail.

---

## Socket Server Methods

These methods are used on the server side:

| Function | Description |
|---|---|
| `s.bind()` | Binds an address (hostname, port) to the socket. |
| `s.listen()` | Starts the TCP listener. |
| `s.accept()` | Passively accepts a TCP client connection, blocking until one arrives. |

## Socket Client Methods

This method is used on the client side:

| Function | Description |
|---|---|
| `s.connect()` | Actively initiates a connection to a TCP server. |

## Socket General Methods

These general-purpose methods apply on both sides:

| Function | Description |
|---|---|
| `s.send()` | Sends a TCP message. |
| `s.sendto()` | Sends a UDP message. |
| `s.recv()` | Receives a TCP message. |
| `s.recvfrom()` | Receives a UDP message. |
| `s.close()` | Closes the socket. |
| `socket.gethostname()` | Returns the local machine's hostname. |

---

## Simple Server-Client Program

### Server

A server uses `bind()` to attach itself to a specific IP and port so it can listen for incoming requests. `listen()` puts the server into listening mode, so it can accept incoming connections. `accept()` initiates a connection with a client, and `close()` ends the connection.

**Example: Network Programming — Server Side**

```python
# First, import the socket library
import socket

# Create a socket object
s = socket.socket()
print("Socket successfully created")

# Reserve a port on your computer — in this
# case it's 40674, but it can be anything
port = 40674

# Bind to the port. Passing an empty string as the host
# means the server listens for requests coming from other
# computers on the network, not just the local machine.
s.bind(('', port))
print("Socket bound to %s" % (port))

# Put the socket into listening mode
s.listen(5)
print("Socket is listening")

# A forever loop until we interrupt it or an error occurs
while True:
    # Establish connection with a client
    c, addr = s.accept()
    print('Got connection from', addr)

    # Send a thank-you message to the client
    c.send(b'Thank you for connecting')

    # Close the connection with the client
    c.close()
```

**Explanation:**

- We create a socket object and reserve a port on our machine.
- We bind the server to that port. Passing an empty string as the host means the server accepts connections from other computers on the network as well — if we'd passed `127.0.0.1` instead, it would only accept connections from the local machine.
- We put the server into listening mode. The `5` here means up to 5 connections are queued if the server is busy; a 6th connection attempt would be refused.
- We loop forever, accepting incoming connections, sending each one a thank-you message, and then closing that connection.

### Client

Now we need something to interact with the server. You can first verify the server is running using `telnet`. In a terminal:

```bash
# start the server
python server.py

# keep the above terminal open,
# then open another terminal and run:
telnet localhost 40674
```

If the server is working, the telnet terminal will show the thank-you message sent by the server.

Now, here's the actual client-side Python script:

**Example: Network Programming — Client Side**

```python
# Import the socket module
import socket

# Create a socket object
s = socket.socket()

# Define the port to connect to
port = 40674

# Connect to the server on the local computer
s.connect(('127.0.0.1', port))

# Receive data from the server
print(s.recv(1024))

# Close the connection
s.close()
```

**Output:**

```
b'Thank you for connecting'
```

**Explanation:**

- We connect to `localhost` on port `40674` (the same port the server is running on), receive the data the server sends, and then close the connection.
- Save this file as `client.py` and run it from the terminal after the server script is already running.

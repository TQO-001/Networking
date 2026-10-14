# 00 — Glossarick: centralized technical glossary

This is the canonical definition index for Course 15. Course chapters should link foundational terms here rather than duplicating definitions. Tags indicate the context in which each concept is typically used; they are not certification levels.

## A

<a id="api"></a>
### API
**Tags:** [Foundational] [Application]

An **Application Programming Interface** is a defined contract through which one software component requests behavior or data from another. In this course, the browser uses the task API routes to request validated operations from the application server.

<a id="authentication"></a>
### Authentication
**Tags:** [Foundational] [Security]

The process of establishing which identity is making a request. Authentication evidence must be validated by a trusted component; a name or email supplied by the client is not proof of identity.

<a id="authorization"></a>
### Authorization
**Tags:** [Foundational] [Security]

The decision about which actions an authenticated identity may perform on a resource. In this course, task access is constrained by the verified owner identity in each database query.

<a id="audience"></a>
### Audience
**Tags:** [Intermediate] [Identity]

The intended recipient identifier in a signed token. A verifier checks the expected audience so a valid token minted for one application cannot automatically be accepted by another.

<a id="attack-surface"></a>
### Attack surface
**Tags:** [Architecture] [Security]

The set of reachable interfaces, inputs, services, credentials and configurations that could be used to influence or compromise a system. Unused services and unnecessary network reachability increase this surface.

## C

<a id="cidr"></a>
### CIDR
**Tags:** [Foundational] [Networking]

**Classless Inter-Domain Routing** notation represents an IP address block using a prefix length, such as `192.0.2.0/24`. The prefix indicates how many leading bits identify the network. Use assigned values in real environments; documentation examples should use non-routable example ranges where possible.

<a id="container"></a>
### Container
**Tags:** [Foundational] [Platform]

An isolated process environment created from an image using operating-system kernel features. Containers share the host kernel and should not be mistaken for a separate physical machine or an absolute security boundary.

<a id="container-image"></a>
### Container image
**Tags:** [Foundational] [Platform]

A versioned package of an application's filesystem and runtime dependencies from which containers are created. Images should be rebuilt and reviewed as dependencies and security fixes change.

<a id="connection-pool"></a>
### Connection pool
**Tags:** [Intermediate] [Database]

A managed set of reusable database connections. Pooling avoids repeatedly establishing a new connection for every request and must be sized for the database's overall connection budget.

<a id="csrf"></a>
### CSRF
**Tags:** [Intermediate] [Web security]

**Cross-Site Request Forgery** is an attack in which a browser is induced to submit an unwanted request to a site where the user is already authenticated. Appropriate mitigations depend on the authentication mechanism, cookie settings, origin validation and the actions being protected.

## D

<a id="data-retention"></a>
### Data retention
**Tags:** [Architecture] [Operations]

The policy defining how long data or logs are kept, when they are archived, and how they are securely deleted. Retention should reflect operational, legal, contractual and privacy needs.

<a id="data-validation"></a>
### Data validation
**Tags:** [Foundational] [Application security]

The process of checking that incoming values conform to the application's expected type, format, length and business constraints before they are used. Validation improves correctness but does not replace parameterized database queries, authentication or authorization.

<a id="default-gateway"></a>
### Default gateway
**Tags:** [Foundational] [Networking]

The router a host uses for traffic to destinations not covered by a more specific route in its routing table. A default route can create broad reachability, so review it against the lab's intended boundary.

<a id="defense-in-depth"></a>
### Defense in depth
**Tags:** [Architecture] [Security]

Using multiple complementary controls so one failure does not automatically defeat the whole security design. In this course, identity enforcement at the gateway complements application-level token verification and owner-scoped data access.

<a id="dns"></a>
### DNS
**Tags:** [Foundational] [Networking]

**Domain Name System** maps domain names to records such as IP addresses and provides other naming information. A DNS record is not itself an access-control rule.

<a id="docker-compose"></a>
### Docker Compose
**Tags:** [Intermediate] [Platform]

A tool for declaring and operating related containers, networks, volumes and configuration together from a Compose file. It simplifies repeatable deployments but does not replace host, network or application security.

## E

<a id="egress-filtering"></a>
### Egress filtering
**Tags:** [Intermediate] [Networking]

A control that restricts outbound connections by destination, protocol, port or policy. A process that requires outbound access should be permitted only the destinations and transports needed by its approved purpose.

<a id="environment-variable"></a>
### Environment variable
**Tags:** [Foundational] [Configuration]

A named value provided to a process at runtime. Environment variables are convenient for configuration, but values containing secrets still need controlled access and should not appear in logs or source control.

## F

<a id="fail-closed"></a>
### Fail closed
**Tags:** [Architecture] [Security]

A failure behavior that denies access when a control cannot make a trustworthy decision. For example, a production app must reject a request when it cannot validate the required identity assertion.

<a id="firewall"></a>
### Firewall
**Tags:** [Foundational] [Networking]

A control that permits or denies network traffic according to rules such as source, destination, protocol, port and connection state. Firewall changes must follow the applicable system owner's change process.

## H

<a id="health-check"></a>
### Health check
**Tags:** [Intermediate] [Operations]

A probe used to decide whether a service is functioning or ready for traffic. A process being alive does not necessarily mean that its database, identity configuration or main application path is healthy.

<a id="horizontal-privilege-escalation"></a>
### Horizontal privilege escalation
**Tags:** [Intermediate] [Security]

A case where one user accesses or modifies resources belonging to another user with a similar privilege level. Owner-scoped queries are a core control for preventing this failure in Task Ledger.

<a id="http-status-code"></a>
### HTTP status code
**Tags:** [Foundational] [Web]

A numeric response code indicating the outcome of an HTTP request. Common examples include `200` (success), `201` (created), `400` (invalid request), `401` (not authenticated), `403` (forbidden), `404` (not found) and `500` (server error).

<a id="hypervisor"></a>
### Hypervisor
**Tags:** [Foundational] [Virtualization]

The software layer that creates and manages virtual machines and allocates underlying host resources. It is part of the infrastructure control plane and should have a restricted management path.

## I

<a id="identity-provider"></a>
### Identity provider
**Tags:** [Foundational] [Identity]

A system that authenticates identities and supplies identity information to relying applications or access gateways. Its trust relationship, MFA settings, account lifecycle and logs are important parts of the overall security model.

<a id="incident-response"></a>
### Incident response
**Tags:** [Architecture] [Operations]

The coordinated process for detecting, containing, investigating, recovering from and learning from a security or service incident.

<a id="issuer"></a>
### Issuer
**Tags:** [Intermediate] [Identity]

The authority identified as the creator of a signed token. A verifier checks that the issuer exactly matches the expected trusted authority.

## J

<a id="jwt"></a>
### JWT
**Tags:** [Intermediate] [Identity]

A **JSON Web Token** is a compact representation of claims, commonly carried in a signed token. A signature alone is not sufficient: the consumer must verify the signature and relevant claims, including expected issuer, audience, expiration and other policy requirements.

## L

<a id="least-privilege"></a>
### Least privilege
**Tags:** [Architecture] [Security]

A design principle that gives each account, service and component only the permissions necessary to perform its approved duties. Remove unnecessary privileges, routes, ports, filesystem access and credentials.

<a id="logical-backup"></a>
### Logical backup
**Tags:** [Intermediate] [Database]

A database export representing schema and data in a format that can be restored using database tooling. Logical backup success must be followed by validation and periodic restore testing.

## M

<a id="multi-factor-authentication"></a>
### MFA / Multi-factor authentication
**Tags:** [Foundational] [Identity]

Authentication requiring evidence from more than one factor category, such as knowledge, possession or inherence. MFA strength depends on the factor type, enrollment, recovery process and enforcement; enabling a checkbox alone does not establish the whole policy.

## N

<a id="network-segmentation"></a>
### Network segmentation
**Tags:** [Architecture] [Networking]

Dividing a network into zones with different reachability and control requirements. The objective is to make allowed paths explicit and restrict unnecessary lateral movement between systems.

## O

<a id="observability"></a>
### Observability
**Tags:** [Intermediate] [Operations]

The ability to infer a system's internal state from outputs such as logs, metrics and traces. Useful observability supports diagnosis without leaking credentials or sensitive payloads.

<a id="oidc"></a>
### OIDC
**Tags:** [Intermediate] [Identity]

**OpenID Connect** is an identity layer built on OAuth 2.0 that enables clients to authenticate users through an identity provider and receive standardized identity claims. Implementation must validate tokens according to the provider and protocol requirements.

<a id="operational-technology-ot"></a>
### Operational Technology (OT)
**Tags:** [Foundational] [Industrial systems]

Hardware and software that monitor or control physical processes. Availability, timing and safety constraints make changes to operational environments different from changes to a disposable software lab.

## P

<a id="parameterized-query"></a>
### Parameterized query
**Tags:** [Intermediate] [Database security]

A database operation in which SQL structure and input values are supplied separately. This helps prevent user-controlled values from being interpreted as SQL syntax.

<a id="persistent-volume"></a>
### Persistent volume
**Tags:** [Foundational] [Storage]

Storage whose lifecycle is decoupled from an application's individual container. Deleting a container should not remove its persistent data, but volume durability does not replace independent backups.

<a id="principal"></a>
### Principal
**Tags:** [Intermediate] [Identity]

The identity or entity on whose behalf an operation is performed, such as a person, workload or service account. An application should use a trusted principal established by verification, not a value freely submitted by the client.

<a id="port-group"></a>
### Port group
**Tags:** [Intermediate] [Virtualization]

A VMware networking construct through which virtual NICs connect to a virtual switch and inherit assigned network policies. Choose the correct port group according to the intended environment boundary.

## R

<a id="rest"></a>
### REST
**Tags:** [Intermediate] [Application architecture]

An architectural style for networked applications that treats data and functionality as resources accessed through a uniform interface. JSON APIs commonly use HTTP methods such as GET, POST, PATCH and DELETE, but method names alone do not guarantee good access control.

<a id="reverse-proxy"></a>
### Reverse proxy
**Tags:** [Intermediate] [Networking]

A server-side intermediary that receives client requests and forwards them to configured origin services. It can centralize routing and TLS termination, but does not replace application authorization.

<a id="rollback"></a>
### Rollback
**Tags:** [Foundational] [Operations]

Returning a system or deployment to a known earlier state after a failed change. A reliable rollback plan must account for database schema/data changes as well as application binaries and configuration.

<a id="routing"></a>
### Routing
**Tags:** [Foundational] [Networking]

The process of choosing where packets should be forwarded to reach a destination network. A route determines a possible path, not whether security policy permits the traffic.

<a id="rpo"></a>
### RPO
**Tags:** [Intermediate] [Recovery]

**Recovery Point Objective** is the maximum tolerable amount of data loss measured in time. Backup frequency and transaction-log retention influence the achievable recovery point.

<a id="rto"></a>
### RTO
**Tags:** [Intermediate] [Recovery]

**Recovery Time Objective** is the target time to restore a service after disruption. A credible value should be measured through exercises, not guessed from an ideal procedure.

## S

<a id="secrets-management"></a>
### Secrets management
**Tags:** [Architecture] [Security]

Processes and tooling for storing, access-controlling, rotating and auditing sensitive credentials and keys. A plain environment file may be acceptable for a small controlled lab, but should not be confused with an enterprise secrets platform.

<a id="security-header"></a>
### Security header
**Tags:** [Intermediate] [Web security]

An HTTP response header that communicates security-related browser behavior, for example content restrictions or transport policy. Correct values depend on the app's features and deployment; test for compatibility rather than pasting arbitrary policies.

<a id="server-side-rendering"></a>
### Server-side rendering
**Tags:** [Intermediate] [Web]

Generating page output on the server in response to a request. Server-side rendering can use server-only data sources, but sensitive data still requires authorization and safe output handling.

<a id="ssh"></a>
### SSH
**Tags:** [Foundational] [Administration]

**Secure Shell** is a protocol used for encrypted remote command execution and related secure access functions. Limit administrative access to approved sources and identities.

<a id="structured-logging"></a>
### Structured logging
**Tags:** [Intermediate] [Operations]

Recording events in a consistent machine-readable shape, often with fields such as timestamp, severity, service and event code. Secret-bearing headers and sensitive request bodies should be excluded.

<a id="subnet"></a>
### Subnet
**Tags:** [Foundational] [Networking]

A logical subdivision of an IP network. Subnets and their routing/ACL policy help define which systems can communicate.

<a id="sql-injection"></a>
### SQL injection
**Tags:** [Intermediate] [Application security]

A vulnerability in which untrusted input changes the meaning of a database statement. Parameterized queries and careful control of dynamic SQL are primary mitigations.

## T

<a id="tcp-ip"></a>
### TCP/IP
**Tags:** [Foundational] [Networking]

The Internet protocol suite used to address, route and transport data across interconnected networks. The course's access paths ultimately depend on correctly configured network interfaces, routes and allowed transport flows.

<a id="tls"></a>
### TLS
**Tags:** [Foundational] [Security]

**Transport Layer Security** protects network communication against certain forms of interception and tampering and can authenticate endpoints using certificates. Encryption on one hop does not automatically encrypt every other hop in a multi-service design.

<a id="threat-model"></a>
### Threat model
**Tags:** [Architecture] [Security]

A structured account of the assets being protected, trust boundaries, likely threats, security assumptions, mitigations and remaining risks. It should be revisited as the architecture changes.

<a id="ttl"></a>
### Time to live (TTL)
**Tags:** [Intermediate] [Networking]

A bounded lifetime value. In DNS, the TTL controls how long a record may be cached before it should be refreshed; it does not act as an authorization mechanism.

## U

<a id="uuid"></a>
### UUID
**Tags:** [Foundational] [Data modeling]

A **Universally Unique Identifier** is a 128-bit identifier commonly represented as hexadecimal groups separated by hyphens. A UUID is an identifier, not a secret or an authorization token.

## V

<a id="vlan"></a>
### VLAN
**Tags:** [Foundational] [Networking]

A **Virtual LAN** creates a logical Layer 2 broadcast domain. VLAN configuration must match the switching and routing design; assigning a VLAN ID alone is not a complete security boundary.

<a id="virtual-machine"></a>
### Virtual machine
**Tags:** [Foundational] [Virtualization]

A software-defined computer with virtualized compute, memory, storage and network devices, running its own guest operating system.

<a id="virtual-switch"></a>
### Virtual switch
**Tags:** [Intermediate] [Virtualization]

A software switch that connects virtual network interfaces and, depending on design, uplinks to physical network interfaces. Its port groups and upstream network configuration determine guest connectivity.

<a id="virtualization"></a>
### Virtualization
**Tags:** [Foundational] [Architecture]

The abstraction of physical computing resources into logical systems such as virtual machines. It supports resource sharing and isolation, but still relies on the security and availability of the hypervisor and physical host.

<a id="vmware"></a>
### VMware
**Tags:** [Foundational] [Virtualization]

A family of virtualization products and management tools. The exact product (for example, ESXi and vCenter) and version affect configuration menus, networking behavior and update procedures.

<a id="vpn"></a>
### VPN
**Tags:** [Foundational] [Remote access]

A **Virtual Private Network** establishes a protected logical path across another network. A VPN provides connectivity; authorization and segmentation still determine which applications and resources the connected user can reach.

<a id="vnic"></a>
### vNIC
**Tags:** [Intermediate] [Virtualization]

A virtual network interface assigned to a guest VM. Its network attachment and guest configuration determine the virtual machine's IP connectivity.

## Z

<a id="zero-trust"></a>
### Zero trust
**Tags:** [Architecture] [Security]

A security approach that does not assume a request is trustworthy solely because of its network location. Requests are evaluated using identity, device or context signals and policy, and access is limited to the required resource.

## Additional operations terms

<a id="change-management"></a>
### Change management
**Tags:** [Intermediate] [Operations]

A controlled process for proposing, reviewing, scheduling, implementing and validating changes, including ownership, rollback and communication.

<a id="negative-test"></a>
### Negative test
**Tags:** [Foundational] [Testing]

A test that supplies invalid input or an unauthorized condition and verifies that the system fails safely, instead of treating only successful behavior as proof of correctness.

<a id="restore-drill"></a>
### Restore drill
**Tags:** [Intermediate] [Recovery]

A practical exercise that restores backup data into a controlled target and verifies that the restored system is usable. A successful backup command without a restore drill is incomplete evidence.



## Additional platform and protocol terms

<a id="http"></a>
### HTTP
**Tags:** [Foundational] [Web]

**Hypertext Transfer Protocol** is an application-layer request/response protocol used to exchange web resources and API messages. Application authorization still has to be enforced by the service handling each request.

<a id="https"></a>
### HTTPS
**Tags:** [Foundational] [Web security]

**HTTPS** is HTTP carried over a connection protected with [TLS](#tls). It protects the client-to-endpoint communication on that hop; it does not prove that the endpoint is authorized to access internal data.

<a id="ip-address"></a>
### IP address
**Tags:** [Foundational] [Networking]

An **Internet Protocol address** identifies a network interface or endpoint for IP communication within the relevant addressing scope. Addressing alone is not an access-control decision.

<a id="json"></a>
### JSON
**Tags:** [Foundational] [Data format]

**JavaScript Object Notation** is a text format for representing structured values such as objects, arrays, strings, numbers, booleans and null. Incoming JSON must still be parsed and validated before the application trusts its values.

<a id="linux"></a>
### Linux
**Tags:** [Foundational] [Operating systems]

Linux is an open-source operating-system kernel used by many server distributions. Administration, service management, filesystem permissions, network configuration and security updates depend on the chosen distribution and release.

<a id="postgresql"></a>
### PostgreSQL
**Tags:** [Foundational] [Database]

PostgreSQL is an open-source relational database system. It stores structured records, enforces schema constraints and executes queries under database roles and permissions. Its access controls do not replace network isolation or application-level authorization.

<a id="sql"></a>
### SQL
**Tags:** [Foundational] [Database]

**Structured Query Language** is used to define, query and modify relational database structures and data. Query parameters should be used for external values rather than concatenating user-controlled strings into SQL syntax.

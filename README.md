# MicroVisualizer

**Your architecture, visualized from code.**

Define your microservices as code. MicroVisualizer generates interactive diagrams, maps event flows through topics and queues, and exposes the full topology to a built-in AI assistant.

---

## The problem

Once you pass a dozen services, nobody has the full picture. Ownership lives in `CODEOWNERS`. Topics live in Kafka admin UIs. Flows live in engineers' heads. Nothing ties them together.

## What you get

- **Auto-generated diagrams** — push service definitions from CI, the graph updates as soon as something changes. No hand-drawn maps to keep current.
- **Multi-team topology** — services owned by different teams land in one shared graph. Filter by flow, category, or owner.
- **Event-flow mapping** — producers, consumers, and the topics between them, rendered as first-class nodes.
- **Built-in AI assistant** — ask *"who consumes `order-events`?"* or *"who owns the checkout flow?"* and get answers grounded in your actual topology.
- **MCP server** — feed the topology to Claude, Cursor, and other AI tools so they understand what your repo connects to.
- **Exports** — Mermaid, SVG, PNG, JSON, and shareable public links.

## Plugs into your workflow

**Input** — REST API · GitHub Actions · JavaScript / Java / Python SDKs · JSON

**Output** — Browser · REST API · MCP · Mermaid · SVG · PNG · JSON · Share link

## Links

- **[microvisualizer.com](https://microvisualizer.com)** — product site and sign-up
- **[docs.microvisualizer.com](https://docs.microvisualizer.com)** — documentation
- **[docs.microvisualizer.com/api](https://docs.microvisualizer.com/api)** — API reference
- Support: `support@microvisualizer.com`

---

This repository hosts the public documentation site and the OpenAPI specification.

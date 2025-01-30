# Simple Proxy Server | Servidor Proxy Simples

A lightweight proxy server built with Fastify that redirects all requests from one DNS to another.

### Configuration

Only one environment variable is required:

```env
TARGET_DNS=https://dns-to-proxy.com
```

Optional configuration:
```env
PORT=3003  # Default: 3000
```

### Installation

```bash
bun install
```

### Running

```bash
bun src/index.ts
or
bun run start (run with tsx)
```

---

Um servidor proxy leve construído com Fastify que redireciona todas as requisições de um DNS para outro.

### Configuração

Apenas uma variável de ambiente é necessária:

```env
TARGET_DNS=https://dns-to-proxy.com
```

Configuração opcional:
```env
PORT=3003  # Padrão: 3000
```

### Instalação

```bash
bun install
```

### Executando

```bash
bun src/index.ts
ou
bun run start (executa com tsx)
```

---

Built with [Bun](https://bun.sh) and [Fastify](https://fastify.io/)

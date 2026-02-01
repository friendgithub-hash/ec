# EC E-Commerce Platform - Architecture Mindmap

## 🏗️ Project Overview

```
EC E-Commerce Platform
├── Turbo Monorepo Architecture
├── TypeScript Full-Stack Application
├── Microservices Architecture
└── Modern Web Technologies
```

## 📁 Root Structure

```
EC/
├── 🔧 Configuration Files
│   ├── package.json (Root workspace manager)
│   ├── pnpm-workspace.yaml (PNPM workspace config)
│   ├── turbo.json (Turbo build system config)
│   ├── .gitignore (Git ignore rules)
│   └── .npmrc (NPM configuration)
├── 📱 apps/ (Applications)
├── 📦 packages/ (Shared packages)
├── 🗂️ node_modules/ (Dependencies)
└── 🔄 .turbo/ (Turbo cache)
```

## 🏢 Applications Architecture

### 🎯 Admin Dashboard (`apps/admin/`)

**Technology Stack:**

- **Framework:** Next.js 15.4.5 (React 19.2.0)
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **Build Tool:** Turbopack
- **Port:** 3003

**Key Dependencies:**

```
├── UI Components
│   ├── @radix-ui/* (Headless UI primitives)
│   ├── @tanstack/react-table (Data tables)
│   ├── recharts (Charts & analytics)
│   ├── lucide-react (Icons)
│   └── class-variance-authority (Component variants)
├── Forms & Validation
│   ├── react-hook-form (Form management)
│   ├── @hookform/resolvers (Form validation)
│   └── zod (Schema validation)
├── Styling
│   ├── tailwindcss v4 (Utility-first CSS)
│   ├── tailwind-merge (Class merging)
│   └── next-themes (Theme management)
└── Date Handling
    └── date-fns (Date utilities)
```

**File Structure:**

```
apps/admin/
├── 📄 Configuration
│   ├── package.json (Dependencies & scripts)
│   ├── next.config.ts (Next.js config)
│   ├── tailwind.config.js (Tailwind config)
│   ├── postcss.config.mjs (PostCSS config)
│   ├── tsconfig.json (TypeScript config)
│   └── components.json (shadcn/ui config)
├── 🎨 src/
│   ├── app/ (App Router)
│   │   ├── layout.tsx (Root layout with sidebar)
│   │   ├── page.tsx (Dashboard home)
│   │   ├── globals.css (Global styles)
│   │   ├── users/ (User management)
│   │   ├── products/ (Product management)
│   │   └── payments/ (Payment management)
│   ├── components/ (Reusable components)
│   │   ├── ui/ (shadcn/ui components)
│   │   ├── AppSidebar.tsx (Navigation sidebar)
│   │   ├── Navbar.tsx (Top navigation)
│   │   ├── charts/ (Chart components)
│   │   └── providers/ (Context providers)
│   └── lib/ (Utilities)
│       └── utils.ts (Helper functions)
└── 🖼️ public/ (Static assets)
    ├── products/ (Product images)
    └── users/ (User avatars)
```

**Interdependencies:**

- **Shared Packages:** `@repo/eslint-config`, `@repo/typescript-config`
- **External APIs:** Product Service (port 8000), Payment Service (port 8002)
- **Authentication:** Integrated auth system
- **Database:** Connects to product and order databases

### 🛒 Client Store (`apps/client/`)

**Technology Stack:**

- **Framework:** Next.js 15.4.5 (React 19.1.0)
- **Styling:** Tailwind CSS v4
- **State Management:** Zustand
- **Build Tool:** Turbopack
- **Port:** 3002

**Key Dependencies:**

```
├── State Management
│   └── zustand (Lightweight state management)
├── Forms & Validation
│   ├── react-hook-form (Form handling)
│   ├── @hookform/resolvers (Validation resolvers)
│   └── zod v4 (Schema validation)
├── UI & UX
│   ├── lucide-react (Icon library)
│   ├── react-toastify (Notifications)
│   └── tailwindcss v4 (Styling)
├── Authentication
│   └── @clerk/nextjs (User authentication)
└── Payments
    ├── @stripe/stripe-js (Stripe integration)
    └── @stripe/react-stripe-js (React Stripe components)
```

**File Structure:**

```
apps/client/
├── 📄 Configuration
│   ├── package.json (Dependencies & scripts)
│   ├── next.config.ts (Next.js config)
│   ├── postcss.config.mjs (PostCSS config)
│   └── tsconfig.json (TypeScript config)
├── 🎨 src/
│   ├── app/ (App Router)
│   │   ├── layout.tsx (Root layout with navbar/footer)
│   │   ├── page.tsx (Homepage)
│   │   ├── globals.css (Global styles)
│   │   ├── products/ (Product catalog)
│   │   └── cart/ (Shopping cart)
│   ├── components/ (UI components)
│   │   ├── Navbar.tsx (Navigation)
│   │   ├── Footer.tsx (Footer)
│   │   ├── ProductCard.tsx (Product display)
│   │   ├── ProductList.tsx (Product grid)
│   │   ├── ShoppingCartIcon.tsx (Cart icon)
│   │   ├── SearchBar.tsx (Search functionality)
│   │   ├── Filter.tsx (Product filtering)
│   │   ├── Categories.tsx (Category navigation)
│   │   ├── PaymentForm.tsx (Stripe payment)
│   │   └── ShippingForm.tsx (Shipping details)
│   ├── stores/ (State management)
│   │   └── cartStore.ts (Shopping cart state)
│   └── types.ts (TypeScript definitions)
└── 🖼️ public/ (Static assets)
    ├── products/ (Product images)
    ├── logo.png (Brand logo)
    ├── featured.png (Featured content)
    ├── cards.png (Payment cards)
    ├── stripe.png (Stripe logo)
    └── klarna.png (Klarna logo)
```

**Interdependencies:**

- **Shared Packages:** `@repo/eslint-config`, `@repo/typescript-config`, `@repo/types`
- **External APIs:** Product Service, Payment Service, Order Service
- **Authentication:** Clerk integration
- **Payments:** Stripe integration
- **State:** Zustand for cart management

### ⚙️ Product Service (`apps/product-service/`)

**Technology Stack:**

- **Framework:** Express.js 5.2.1
- **Runtime:** Node.js with TypeScript
- **CORS:** Enabled for client/admin apps
- **Port:** 8000

**Key Dependencies:**

```
├── Server Framework
│   ├── express v5 (Web framework)
│   └── cors (Cross-origin requests)
├── Development
│   ├── tsx (TypeScript execution)
│   └── typescript (Type checking)
└── Shared Packages
    ├── @repo/typescript-config (TS config)
    └── @repo/types (Shared types)
```

**File Structure:**

```
apps/product-service/
├── 📄 Configuration
│   ├── package.json (Dependencies & scripts)
│   ├── tsconfig.json (TypeScript config)
│   └── .env (Environment variables)
├── 🎨 src/
│   └── index.ts (Express server setup)
└── 🗂️ node_modules/ (Dependencies)
```

**Interdependencies:**

- **Clients:** Admin Dashboard (3003), Client Store (3002)
- **Database:** Product Database (planned)
- **Shared Types:** `@repo/types`
- **CORS Origins:** Configured for localhost:3002, localhost:3003

### 📦 Order Service (`apps/order-service/`)

**Technology Stack:**

- **Framework:** Fastify 5.5.0
- **Runtime:** Node.js with TypeScript (ES Modules)
- **Port:** 8001

**Key Dependencies:**

```
├── Server Framework
│   └── fastify v5.5.0 (Fast web framework)
├── Development
│   ├── tsx v4.20.5 (TypeScript execution)
│   ├── typescript v5.9.2 (Type checking)
│   └── @types/node v20 (Node.js types)
└── Shared Packages
    └── @repo/typescript-config (TS config)
```

**File Structure:**

```
apps/order-service/
├── 📄 Configuration
│   ├── package.json (Dependencies & scripts)
│   ├── tsconfig.json (TypeScript config)
│   └── .env (Environment variables)
├── 🎨 src/
│   └── index.ts (Fastify server setup)
└── 🗂️ node_modules/ (Dependencies)
```

**Server Configuration:**

```typescript
// Fastify server with ES modules support
const fastify = Fastify();
await fastify.listen({ port: 8001 });
```

**Interdependencies:**

- **Clients:** Admin Dashboard (3003), Client Store (3002)
- **Database:** Order Database (planned)
- **Module System:** ES Modules (`"type": "module"`)
- **Development:** Watch mode with tsx and .env support

## 📦 Shared Packages

### 🔧 ESLint Configuration (`packages/eslint-config/`)

**Purpose:** Centralized linting rules for all applications

**Configuration Files:**

```
packages/eslint-config/
├── package.json (Package definition)
├── base.js (Base ESLint rules)
├── next.js (Next.js specific rules)
├── react-internal.js (React internal rules)
└── README.md (Documentation)
```

**Dependencies:**

```
├── Core ESLint
│   ├── eslint (Linting engine)
│   ├── eslint-config-prettier (Prettier integration)
│   └── eslint-plugin-only-warn (Warning-only mode)
├── TypeScript
│   └── typescript-eslint (TypeScript linting)
├── React
│   ├── eslint-plugin-react (React rules)
│   └── eslint-plugin-react-hooks (Hooks rules)
└── Turbo
    └── eslint-plugin-turbo (Monorepo rules)
```

**Usage:**

- **Admin:** Extends `@repo/eslint-config/next`
- **Client:** Extends `@repo/eslint-config/next`
- **Product Service:** Extends `@repo/eslint-config/base`

### 📝 TypeScript Configuration (`packages/typescript-config/`)

**Purpose:** Shared TypeScript configurations

**Configuration Files:**

```
packages/typescript-config/
├── package.json (Package definition)
├── base.json (Base TS config)
├── nextjs.json (Next.js TS config)
└── react-library.json (React library config)
```

**Usage:**

- **Admin:** Extends `@repo/typescript-config/nextjs`
- **Client:** Extends `@repo/typescript-config/nextjs`
- **Product Service:** Extends `@repo/typescript-config/base`

## 🔄 Build System & Development

### 🚀 Turbo Configuration (`turbo.json`)

**Build Pipeline:**

```json
{
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "!.next/cache/**"],
      "env": ["DATABASE_URL"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "lint": {
      "dependsOn": ["^lint"]
    },
    "check-types": {
      "dependsOn": ["^check-types"]
    }
  }
}
```

**Task Dependencies:**

```
build → ^build (Build dependencies first)
lint → ^lint (Lint dependencies first)
check-types → ^check-types (Type-check dependencies first)
dev → No dependencies (Parallel development)
```

### 📦 Package Management (`pnpm-workspace.yaml`)

**Workspace Configuration:**

```yaml
packages:
  - "apps/*"
  - "packages/*"
```

**Registry Configuration (`.npmrc`):**

```
registry=https://registry.npmjs.org/
```

**Dependency Resolution:**

- **Registry:** Official npm registry (fixed from Chinese mirror)
- **Hoisting:** Shared dependencies hoisted to root
- **Isolation:** App-specific dependencies isolated
- **Linking:** Workspace packages linked via `workspace:*`

## 🌐 Network Architecture

### 🔌 Port Allocation

```
┌─────────────────┬──────┬─────────────────────┐
│ Service         │ Port │ Purpose             │
├─────────────────┼──────┼─────────────────────┤
│ Client Store    │ 3002 │ Customer frontend   │
│ Admin Dashboard │ 3003 │ Admin interface     │
│ Product Service │ 8000 │ Product API         │
│ Order Service   │ 8001 │ Order management    │
│ Payment Service │ 8002 │ Payment processing  │
└─────────────────┴──────┴─────────────────────┘
```

### 🔗 Service Communication

```
Client (3002) ←→ Product Service (8000)
Client (3002) ←→ Payment Service (8002)
Client (3002) ←→ Order Service (8001)
Admin (3003) ←→ Product Service (8000)
Admin (3003) ←→ Payment Service (8002)
Admin (3003) ←→ Order Service (8001)
```

### 🛡️ CORS Configuration

**Product Service CORS:**

```javascript
cors({
  origin: ["http://localhost:3002", "http://localhost:3003"],
  credentials: true,
});
```

## 🎨 UI/UX Architecture

### 🎭 Design System (Admin)

**Component Library:** shadcn/ui + Radix UI

```
├── Primitives (Radix UI)
│   ├── @radix-ui/react-dialog (Modals)
│   ├── @radix-ui/react-dropdown-menu (Dropdowns)
│   ├── @radix-ui/react-select (Select inputs)
│   ├── @radix-ui/react-tooltip (Tooltips)
│   └── @radix-ui/react-progress (Progress bars)
├── Styled Components (shadcn/ui)
│   ├── Button, Card, Input, Label
│   ├── Table, Badge, Avatar, Skeleton
│   ├── Sheet, Sidebar, Breadcrumb
│   └── Chart components (recharts)
└── Layout Components
    ├── AppSidebar (Navigation)
    ├── Navbar (Top bar)
    └── ThemeProvider (Dark/light mode)
```

### 🎨 Styling Architecture

**Tailwind CSS v4:**

```
├── Configuration
│   ├── @tailwindcss/postcss (PostCSS plugin)
│   └── tailwindcss v4 (Core framework)
├── Utilities
│   ├── tailwind-merge (Class merging)
│   ├── class-variance-authority (Component variants)
│   └── clsx (Conditional classes)
└── Themes
    ├── next-themes (Theme switching)
    └── CSS variables (Color system)
```

## 🔐 Authentication & Security

### 👤 Authentication (Client)

**Clerk Integration:**

```
@clerk/nextjs
├── User Management
├── Session Handling
├── Route Protection
└── Social Logins
```

### 💳 Payment Security (Client)

**Stripe Integration:**

```
@stripe/stripe-js + @stripe/react-stripe-js
├── Secure Payment Processing
├── PCI Compliance
├── Payment Methods
└── Checkout Sessions
```

## 📊 Data Flow Architecture

### 🔄 State Management

**Client State (Zustand):**

```javascript
cartStore.ts
├── cart: CartItemsType[]
├── addToCart()
├── removeFromCart()
├── clearCart()
└── hasHydrated: boolean
```

**Form State (React Hook Form):**

```
├── Product Forms (Admin)
├── User Forms (Admin)
├── Shipping Forms (Client)
└── Payment Forms (Client)
```

### 📡 API Communication

**REST API Pattern:**

```
Frontend (Next.js) ←→ Backend Services (Express/Fastify/Hono)
├── Product CRUD operations
├── Order management
├── Payment processing
└── User authentication
```

## 🛠️ Development Workflow

### 🔧 Development Commands

```bash
# Root level commands
pnpm dev          # Start all services
pnpm build        # Build all apps
pnpm lint         # Lint all packages
pnpm check-types  # Type check all packages

# Individual app commands
pnpm dev --filter=client
pnpm dev --filter=admin
pnpm dev --filter=product-service
```

### 📦 Package Management

**Registry Configuration:**

```bash
# Fixed registry from Chinese mirror to official npm
pnpm config set registry https://registry.npmjs.org/
```

**Common Commands:**

```bash
pnpm install              # Install all dependencies
pnpm add <package>        # Add package to current workspace
pnpm add -w <package>     # Add package to root workspace
pnpm update               # Update all packages
```

### 🔍 Code Quality

**Linting & Formatting:**

```
├── ESLint (Code linting)
├── Prettier (Code formatting)
├── TypeScript (Type checking)
└── Turbo (Build optimization)
```

**Git Workflow:**

```
├── .gitignore (Ignore patterns)
├── Conventional commits
└── Branch protection
```

## 🚀 Deployment Architecture

### 📦 Build Outputs

```
apps/admin/.next/     # Next.js build output
apps/client/.next/    # Next.js build output
apps/product-service/ # Node.js service
.turbo/cache/         # Turbo build cache
```

### 🌐 Production Considerations

**Environment Variables:**

```
├── DATABASE_URL (Database connection)
├── CLERK_SECRET_KEY (Authentication)
├── STRIPE_SECRET_KEY (Payments)
└── CORS_ORIGINS (Security)
```

**Performance Optimizations:**

```
├── Turbopack (Fast bundling)
├── Next.js optimizations (SSR/SSG)
├── Image optimization
└── Code splitting
```

## 📈 Scalability & Future Enhancements

### 🔮 Current & Planned Services

```
├── ✅ Order Service (8001) - Order management (Fastify)
├── Payment Service (8002) - Payment processing (planned)
├── User Service - User management (planned)
├── Notification Service - Email/SMS (planned)
└── Analytics Service - Business intelligence (planned)
```

### 🗄️ Database Architecture (Planned)

```
├── Product Database (PostgreSQL/MongoDB)
├── Order Database (PostgreSQL)
├── User Database (PostgreSQL)
└── Analytics Database (ClickHouse/BigQuery)
```

### 🔧 Infrastructure (Planned)

```
├── Container Orchestration (Docker/Kubernetes)
├── API Gateway (Kong/Nginx)
├── Load Balancing
├── Caching (Redis)
├── CDN (Cloudflare/AWS CloudFront)
└── Monitoring (Prometheus/Grafana)
```

---

## 📋 Technology Summary

| Category             | Technologies                                          |
| -------------------- | ----------------------------------------------------- |
| **Frontend**         | Next.js 15.4.5, React 19, TypeScript, Tailwind CSS v4 |
| **Backend**          | Express.js 5, Fastify 5.5.0, Node.js, TypeScript      |
| **Build System**     | Turbo, pnpm, Turbopack                                |
| **UI Components**    | shadcn/ui, Radix UI, Recharts                         |
| **State Management** | Zustand, React Hook Form                              |
| **Authentication**   | Clerk                                                 |
| **Payments**         | Stripe                                                |
| **Styling**          | Tailwind CSS v4, PostCSS                              |
| **Code Quality**     | ESLint, Prettier, TypeScript                          |
| **Development**      | Hot reload, TypeScript, CORS                          |

---

_This mindmap represents the current state of the EC e-commerce platform as of the latest commit. The architecture is designed for scalability, maintainability, and developer experience._

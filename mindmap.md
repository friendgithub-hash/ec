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
├── Database
│   └── @repo/product-db (Prisma client & models)
├── Authentication
│   └── @clerk/express (JWT verification & user auth)
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
│   └── .env (Environment variables with Clerk & DB)
├── 🎨 src/
│   ├── index.ts (Express server with middleware)
│   ├── controllers/ (Business logic)
│   │   ├── product.controller.ts (Product CRUD)
│   │   └── category.controller.ts (Category CRUD)
│   ├── routes/ (API endpoints)
│   │   ├── product.route.ts (Product routes)
│   │   └── category.route.ts (Category routes)
│   └── middleware/ (Custom middleware)
│       └── authMiddleware.ts (Authentication helpers)
└── 🗂️ node_modules/ (Dependencies)
```

**Database Integration:**

```typescript
// Prisma client usage
import { prisma, Prisma } from "@repo/product-db";

// Category CRUD operations
export const createCategory = async (req: Request, res: Response) => {
  const data: Prisma.CategoryCreateInput = req.body;
  const category = await prisma.category.create({ data });
  res.status(201).json(category);
};
```

**API Endpoints:**

```
├── Categories
│   ├── POST /categories (Create category)
│   ├── GET /categories (List categories)
│   ├── PUT /categories/:id (Update category)
│   └── DELETE /categories/:id (Delete category)
├── Products
│   ├── POST /products (Create product)
│   ├── GET /products (List products)
│   ├── PUT /products/:id (Update product)
│   └── DELETE /products/:id (Delete product)
└── Health & Auth
    ├── GET /health (Health check)
    └── GET /test (Authentication test)
```

**Environment Configuration:**

```env
# Authentication
CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Database (Required for Prisma)
DATABASE_URL="postgresql://admin:123456@localhost:5432/products?schema=public"
```

**Common Issues & Solutions:**

```
Issue: "Cannot POST /categories"
Solution: Check route registration - app.use("/categories", router) not "./categories"

Issue: "Environment variable not found: DATABASE_URL"
Solution: Copy DATABASE_URL from product-db package to product-service .env

Issue: Prisma connection fails
Solutions:
  ✓ Ensure DATABASE_URL is in product-service .env
  ✓ Verify PostgreSQL is running on specified port
  ✓ Test connection with: pnpm prisma studio (from product-db)
  ✓ Run: npx prisma generate (if client is outdated)
```

**Authentication Setup:**

```typescript
// Clerk middleware for JWT verification
app.use(clerkMiddleware());

// Protected endpoint example
app.get("/test", (req, res) => {
  const auth = getAuth(req);
  if (!auth.userId) {
    return res.status(401).json({ message: "Not authenticated" });
  }
  res.json({ message: "Authenticated!" });
});
```

**Interdependencies:**

- **Clients:** Admin Dashboard (3003), Client Store (3002)
- **Database:** @repo/product-db (Prisma client)
- **Authentication:** Clerk JWT token verification
- **Shared Types:** `@repo/types`
- **CORS Origins:** Configured for localhost:3002, localhost:3003 with credentials

### 📦 Order Service (`apps/order-service/`)

**Technology Stack:**

- **Framework:** Fastify 5.5.0
- **Runtime:** Node.js with TypeScript (ES Modules)
- **Database:** MongoDB (Mongoose)
- **Message Queue:** Kafka (KafkaJS)
- **Authentication:** @clerk/fastify
- **Port:** 8001

**Key Dependencies:**

```
├── Server Framework
│   └── fastify v5.5.0 (Fast web framework)
├── Database
│   ├── mongoose (MongoDB ODM)
│   └── @repo/order-db (Order models & connection)
├── Message Queue
│   └── @repo/kafka (Kafka producer/consumer)
├── Authentication
│   └── @clerk/fastify (JWT verification)
├── Development
│   ├── tsx v4.20.5 (TypeScript execution)
│   ├── typescript v5.9.2 (Type checking)
│   └── @types/node v20 (Node.js types)
└── Shared Packages
    ├── @repo/typescript-config (TS config)
    └── @repo/types (Shared types)
```

**File Structure:**

```
apps/order-service/
├── 📄 Configuration
│   ├── package.json (Dependencies & scripts)
│   ├── tsconfig.json (TypeScript config)
│   └── .env (Environment variables: MongoDB, Clerk, Kafka)
├── 🎨 src/
│   ├── index.ts (Fastify server with Clerk & Kafka)
│   ├── middleware/
│   │   └── authMiddleware.ts (Clerk authentication)
│   ├── routes/
│   │   └── order.ts (Order API routes)
│   └── utils/
│       ├── kafka.ts (Kafka consumer setup)
│       ├── order.ts (Order creation logic)
│       └── subscription.ts (Kafka message handlers)
└── 🗂️ node_modules/ (Dependencies)
```

**Kafka Integration:**

```typescript
// Consumer setup
consumer.subscribe("payment.successful", async (message) => {
  const order = message.value;
  await createOrder(order);
});

// Order creation from Kafka message
export const createOrder = async (order: Ordertype) => {
  const newOrder = new Order(order);
  await newOrder.save();
};
```

**API Endpoints:**

```
├── Orders
│   ├── GET /user-orders (Get user's orders - protected)
│   └── GET /orders (Get all orders)
├── Health & Auth
│   ├── GET /health (Health check)
│   └── GET /test (Authentication test)
```

**Environment Configuration:**

```env
# Authentication
CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Database
MONGO_URL=mongodb+srv://user:pass@cluster.mongodb.net/orders

# Kafka (configured in @repo/kafka)
```

**Interdependencies:**

- **Clients:** Admin Dashboard (3003), Client Store (3002)
- **Database:** MongoDB via @repo/order-db
- **Message Queue:** Kafka via @repo/kafka (payment.successful topic)
- **Authentication:** Clerk Fastify plugin
- **Module System:** ES Modules (`"type": "module"`)

### 💳 Payment Service (`apps/payment-service/`)

**Technology Stack:**

- **Framework:** Hono (Lightweight web framework)
- **Runtime:** Node.js with TypeScript
- **Payment Provider:** Stripe
- **Message Queue:** Kafka (KafkaJS)
- **Authentication:** @hono/clerk-auth
- **Port:** 8002

**Key Dependencies:**

```
├── Server Framework
│   ├── hono (Web framework)
│   ├── @hono/node-server (Node.js adapter)
│   └── hono/cors (CORS middleware)
├── Payment Processing
│   └── stripe (Stripe SDK)
├── Message Queue
│   └── @repo/kafka (Kafka producer/consumer)
├── Authentication
│   └── @hono/clerk-auth (JWT verification)
├── Development
│   ├── tsx (TypeScript execution)
│   └── typescript (Type checking)
└── Shared Packages
    ├── @repo/typescript-config (TS config)
    └── @repo/types (Shared types)
```

**File Structure:**

```
apps/payment-service/
├── 📄 Configuration
│   ├── package.json (Dependencies & scripts)
│   ├── tsconfig.json (TypeScript config)
│   └── .env (Stripe keys, Clerk keys, Kafka config)
├── 🎨 src/
│   ├── index.ts (Hono server with middleware)
│   ├── middleware/
│   │   └── authMiddleware.ts (Clerk authentication)
│   ├── routes/
│   │   ├── session.route.ts (Stripe checkout sessions)
│   │   └── webhook.route.ts (Stripe webhooks)
│   └── utils/
│       ├── stripe.ts (Stripe client)
│       ├── stripeProduct.ts (Product/price helpers)
│       └── kafka.ts (Kafka producer setup)
└── 🗂️ node_modules/ (Dependencies)
```

**Stripe Integration:**

```typescript
// Create checkout session
const session = await stripe.checkout.sessions.create({
  line_items: lineItems,
  client_reference_id: userId,
  mode: "payment",
  ui_mode: "custom",
  return_url: `${process.env.RETURN_URL}/return?session_id={CHECKOUT_SESSION_ID}`,
});

// Webhook handler
webhookRoute.post("/stripe", async (c) => {
  const event = stripe.webhooks.constructEvent(body, sig, webhookSecret);

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    // Send to Kafka for order creation
    producer.send("payment.successful", {
      value: {
        userId: session.client_reference_id,
        email: session.customer_details?.email,
        amount: session.amount_total,
        status: session.payment_status === "paid" ? "success" : "failed",
        shippingaddress: formatAddress(session.collected_information),
        products: lineItems.data.map(item => ({...})),
      },
    });
  }
});
```

**API Endpoints:**

```
├── Sessions
│   ├── POST /sessions/create-checkout-session (Create payment session - protected)
│   └── GET /sessions/:session_id (Get session status)
├── Webhooks
│   └── POST /webhook/stripe (Stripe webhook events)
└── Health
    └── GET /health (Health check)
```

**Environment Configuration:**

```env
# Authentication
CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Stripe
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Return URL (for ngrok in development)
RETURN_URL=http://localhost:3002
```

**Webhook Setup (Development):**

```bash
# Option 1: Use ngrok to expose local server
ngrok http 8002
# Configure webhook in Stripe Dashboard: https://xxx.ngrok.io/webhook/stripe

# Option 2: Use Stripe CLI
stripe listen --forward-to localhost:8002/webhook/stripe
```

**Kafka Integration:**

```typescript
// Producer sends payment success event
producer.send("payment.successful", {
  value: {
    userId: string,
    email: string,
    amount: number,
    status: "success" | "failed",
    shippingaddress: string,
    products: Array<{ name; quantity; price }>,
  },
});

// Consumer listens for product events
consumer.subscribe("product.created", async (message) => {
  // Handle product creation
});
```

**Interdependencies:**

- **Clients:** Client Store (3002) for checkout
- **Payment Provider:** Stripe API
- **Message Queue:** Kafka (payment.successful topic)
- **Order Service:** Receives payment events via Kafka
- **Authentication:** Clerk Hono middleware

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

### 🗄️ Product Database (`packages/product-db/`)

**Purpose:** Prisma-based database layer for product and category management

**Technology Stack:**

- **ORM:** Prisma 5.x
- **Database:** PostgreSQL
- **Client Generation:** Custom output path
- **Environment:** Separate .env configuration

**File Structure:**

```
packages/product-db/
├── 📄 Configuration
│   ├── package.json (Prisma dependencies)
│   ├── tsconfig.json (TypeScript config)
│   ├── .env (DATABASE_URL configuration)
│   └── prisma.config.ts (Prisma configuration)
├── 🗂️ prisma/
│   └── schema.prisma (Database schema)
├── 🎨 src/
│   ├── index.ts (Package exports)
│   └── client.ts (Prisma client setup)
├── 📦 generated/
│   └── prisma/ (Generated Prisma client)
└── 🗂️ node_modules/ (Dependencies)
```

**Database Schema:**

```prisma
model Product {
  id               Int      @id @default(autoincrement())
  name             String
  shortDescription String
  description      String
  price            Int
  sizes            String[]
  colors           String[]
  images           Json
  categorySlug     String
  category         Category @relation(fields: [categorySlug], references: [slug])
  createdAt        DateTime @default(now())
  updatedAt        DateTime @updatedAt
}

model Category {
  id       Int       @id @default(autoincrement())
  name     String
  slug     String    @unique
  products Product[]
}
```

**Environment Configuration:**

```env
DATABASE_URL="postgresql://admin:123456@localhost:5432/products?schema=public"
```

**Prisma Client Setup:**

```typescript
// Custom client with global instance management
import { PrismaClient } from "../generated/prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };
export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
```

**Usage in Services:**

```typescript
// Import in product-service controllers
import { prisma, Prisma } from "@repo/product-db";

// Create operations
const category = await prisma.category.create({ data });
const product = await prisma.product.create({ data });
```

**Development Tools:**

```bash
# From packages/product-db/
pnpm prisma studio    # Database GUI on localhost:5555
pnpm prisma generate  # Generate Prisma client
pnpm prisma migrate   # Run database migrations
```

**Common Issues & Solutions:**

```
Issue: "Environment variable not found: DATABASE_URL"
Solution: Ensure DATABASE_URL exists in both:
  - packages/product-db/.env (for Prisma Studio)
  - apps/product-service/.env (for API usage)

Issue: Prisma client outdated
Solution: Run `npx prisma generate` from product-db directory

Issue: Database connection fails
Solution: Verify PostgreSQL is running and credentials are correct
```

### 🗄️ Order Database (`packages/order-db/`)

**Purpose:** Mongoose-based database layer for order management

**Technology Stack:**

- **ODM:** Mongoose 9.x
- **Database:** MongoDB
- **Schema:** Order model with validation

**File Structure:**

```
packages/order-db/
├── 📄 Configuration
│   ├── package.json (Mongoose dependencies)
│   ├── tsconfig.json (TypeScript config)
│   └── .env (MONGO_URL configuration)
├── 🎨 src/
│   ├── index.ts (Package exports)
│   ├── connection.ts (MongoDB connection)
│   └── order-model.ts (Order schema & model)
└── 🗂️ node_modules/ (Dependencies)
```

**Order Schema:**

```typescript
const OrderSchema = new Schema(
  {
    userId: { type: String, required: true },
    amount: { type: Number, required: true },
    status: { type: String, required: true, enum: ["success", "failed"] },
    products: {
      type: [
        {
          name: { type: String, required: true },
          quantity: { type: Number, required: true },
          price: { type: Number, required: true },
        },
      ],
      required: true,
    },
    shippingaddress: { type: String, required: true },
  },
  { timestamps: true },
);
```

**Environment Configuration:**

```env
MONGO_URL="mongodb+srv://user:pass@cluster.mongodb.net/orders?appName=cluster01"
```

**Connection Setup:**

```typescript
export const connectOrderDB = async () => {
  if (isConnected) return;
  if (!process.env.MONGO_URL) {
    throw new Error("MONGO_URL is not defined in env file!");
  }
  await mongoose.connect(process.env.MONGO_URL);
  isConnected = true;
  console.log("Connected to MongoDB");
};
```

**Usage in Services:**

```typescript
// Import in order-service
import { Order, connectOrderDB } from "@repo/order-db";

// Connect to database
await connectOrderDB();

// Create order
const newOrder = new Order(orderData);
await newOrder.save();
```

### 📨 Kafka Package (`packages/kafka/`)

**Purpose:** Centralized Kafka producer/consumer for event-driven architecture

**Technology Stack:**

- **Client:** KafkaJS 2.2.4
- **Brokers:** Multiple broker support
- **Topics:** payment.successful, product.created, product.deleted

**File Structure:**

```
packages/kafka/
├── 📄 Configuration
│   ├── package.json (KafkaJS dependencies)
│   └── tsconfig.json (TypeScript config)
├── 🎨 src/
│   ├── index.ts (Package exports)
│   ├── producer.ts (Kafka producer)
│   └── consumer.ts (Kafka consumer)
└── 🗂️ node_modules/ (Dependencies)
```

**Producer Setup:**

```typescript
import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "payment-service",
  brokers: ["localhost:9094", "localhost:9095", "localhost:9096"],
});

const producer = kafka.producer();

export const send = async (topic: string, message: any) => {
  await producer.connect();
  await producer.send({
    topic,
    messages: [{ value: JSON.stringify(message.value) }],
  });
};
```

**Consumer Setup:**

```typescript
const consumer = kafka.consumer({ groupId: "order-group" });

export const subscribe = async (topic: string, callback: Function) => {
  await consumer.connect();
  await consumer.subscribe({ topic, fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const value = JSON.parse(message.value.toString());
      await callback({ topic, partition, value });
    },
  });
};
```

**Topics & Events:**

```
├── payment.successful
│   ├── Producer: Payment Service
│   ├── Consumer: Order Service
│   └── Payload: { userId, email, amount, status, shippingaddress, products }
├── product.created
│   ├── Producer: Product Service
│   ├── Consumer: Payment Service
│   └── Payload: { id, name, price, ... }
└── product.deleted
    ├── Producer: Product Service
    ├── Consumer: Payment Service
    └── Payload: { id }
```

**Usage in Services:**

```typescript
// Producer (Payment Service)
import { producer } from "@repo/kafka";
producer.send("payment.successful", {
  value: { userId, email, amount, status, shippingaddress, products },
});

// Consumer (Order Service)
import { consumer } from "@repo/kafka";
consumer.subscribe("payment.successful", async (message) => {
  await createOrder(message.value);
});
```

**Configuration:**

```
Brokers: localhost:9094, localhost:9095, localhost:9096
Client IDs: payment-service, product-service, order-service
Consumer Groups: payment-group, product-group, order-group
```

### 🎯 Types Package (`packages/types/`)

**Purpose:** Shared TypeScript types across all services

**File Structure:**

```
packages/types/
├── 📄 Configuration
│   ├── package.json (Package definition)
│   └── tsconfig.json (TypeScript config)
├── 🎨 src/
│   ├── index.ts (Package exports)
│   ├── auth.ts (Authentication types)
│   ├── cart.ts (Cart & shipping types)
│   ├── order.ts (Order types)
│   └── product.ts (Product types)
└── 🗂️ node_modules/ (Dependencies)
```

**Type Definitions:**

```typescript
// Cart types
export type CartItemType = Product & {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
};

// Order types
export type Ordertype = OrderSchemaType & {
  _id: string;
};

// Stripe product types
export type StripeProductType = {
  id: string;
  name: string;
  price: number;
};

// Authentication types
export type CustomJwtSessionClaims = {
  metadata?: {
    role?: string;
  };
};
```

**Usage:**

```typescript
// Import in any service
import { CartItemType, Ordertype, StripeProductType } from "@repo/types";
```

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
│ Kafka Brokers   │ 9094 │ Message broker 1    │
│                 │ 9095 │ Message broker 2    │
│                 │ 9096 │ Message broker 3    │
│ PostgreSQL      │ 5432 │ Product database    │
│ MongoDB         │27017 │ Order database      │
│ Prisma Studio   │ 5555 │ Database GUI        │
└─────────────────┴──────┴─────────────────────┘
```

### 🔗 Service Communication

**Synchronous (REST API):**

```
Client (3002) ←→ Product Service (8000)
Client (3002) ←→ Payment Service (8002)
Client (3002) ←→ Order Service (8001)
Admin (3003) ←→ Product Service (8000)
Admin (3003) ←→ Payment Service (8002)
Admin (3003) ←→ Order Service (8001)
```

**Asynchronous (Kafka Events):**

```
Payment Service → Kafka → Order Service
  Topic: payment.successful
  Event: Payment completed, create order

Product Service → Kafka → Payment Service
  Topic: product.created
  Event: Product added, sync to Stripe

Product Service → Kafka → Payment Service
  Topic: product.deleted
  Event: Product removed, cleanup Stripe
```

### 🛡️ CORS Configuration

**Product Service CORS:**

```javascript
cors({
  origin: ["http://localhost:3002", "http://localhost:3003"],
  credentials: true,
});
```

**Payment Service CORS:**

```javascript
cors({
  origin: ["http://localhost:3002"],
});
```

## 📨 Event-Driven Architecture

### 🔄 Kafka Event Flow

**Payment Success Flow:**

```
1. User completes payment on Client (3002)
2. Stripe sends webhook to Payment Service (8002)
3. Payment Service validates webhook signature
4. Payment Service publishes to Kafka:
   Topic: payment.successful
   Data: { userId, email, amount, status, shippingaddress, products }
5. Order Service consumes event from Kafka
6. Order Service creates order in MongoDB
7. Order Service sends confirmation (future: email/notification)
```

**Product Sync Flow:**

```
1. Admin creates product on Admin Dashboard (3003)
2. Product Service saves to PostgreSQL
3. Product Service publishes to Kafka:
   Topic: product.created
   Data: { id, name, price, ... }
4. Payment Service consumes event
5. Payment Service creates/updates Stripe product
```

### 📊 Kafka Topics

```
├── payment.successful
│   ├── Partitions: 1
│   ├── Producer: Payment Service
│   ├── Consumer: Order Service (order-group)
│   └── Message: Order creation data
├── product.created
│   ├── Partitions: 3
│   ├── Producer: Product Service
│   ├── Consumer: Payment Service (payment-group)
│   └── Message: Product sync data
└── product.deleted
    ├── Partitions: 1
    ├── Producer: Product Service
    ├── Consumer: Payment Service (payment-group)
    └── Message: Product cleanup data
```

### ⚡ Event Processing

**Consumer Groups:**

```
├── order-group (Order Service)
│   └── Subscribed to: payment.successful
├── payment-group (Payment Service)
│   ├── Subscribed to: product.created
│   └── Subscribed to: product.deleted
└── product-group (Product Service)
    └── Reserved for future events
```

**Message Format:**

```typescript
{
  topic: string,
  partition: number,
  value: {
    // Event-specific payload
    userId?: string,
    email?: string,
    amount?: number,
    status?: "success" | "failed",
    shippingaddress?: string,
    products?: Array<{name, quantity, price}>,
  }
}
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

### 🖼️ Image Optimization

**Next.js Image Component:**

```typescript
// Proper usage with fill prop
<Image
  src="/products/1g.png"
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  alt="Product"
  className="object-cover"
/>
```

**Files using Image with fill:**

- `apps/client/src/components/ProductCard.tsx` - Product thumbnails
- `apps/client/src/app/products/[id]/page.tsx` - Product detail images
- `apps/client/src/app/cart/page.tsx` - Cart item images
- `apps/client/src/app/page.tsx` - Featured banner image

**Best Practices:**

```
✓ Always add sizes prop when using fill
✓ Use responsive sizes: "(max-width: 768px) 100vw, 50vw"
✓ Add appropriate alt text for accessibility
✓ Use object-cover or object-contain for proper scaling
```

**Common sizes values:**

```
Full width: "100vw"
Responsive: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
Fixed: "300px"
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

**Environment Configuration:**

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

**Middleware Setup:**

```typescript
// apps/client/src/middleware.ts
import { clerkMiddleware } from "@clerk/nextjs/server";
export default clerkMiddleware();
```

### 🔗 Cross-Origin Authentication (Product Service)

**Clerk Express Integration:**

```
@clerk/express
├── JWT Token Verification
├── User Context Extraction
├── Protected Route Middleware
└── Cross-Origin Request Handling
```

**Product Service Configuration:**

```typescript
// apps/product-service/src/index.ts
import { clerkMiddleware, getAuth } from "@clerk/express";

app.use(clerkMiddleware());

app.get("/test", (req, res) => {
  const auth = getAuth(req);
  const userId = auth.userId;
  if (!userId) {
    return res.status(401).json({ message: "Not authenticated" });
  }
  res.json({ message: "Product service authenticated!" });
});
```

**Environment Configuration:**

```
CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
```

**CORS Setup for Authentication:**

```typescript
app.use(
  cors({
    origin: ["http://localhost:3002", "http://localhost:3003"],
    credentials: true, // Required for cross-origin auth
  }),
);
```

**Client-Side Authentication Request:**

```typescript
// JWT-based authentication with Authorization header
const { getToken } = await auth();
const token = await getToken();

const response = await fetch("http://localhost:8000/test", {
  // credentials: "include" NOT required for JWT in Authorization header
  headers: {
    Authorization: `Bearer ${token}`, // JWT token is sufficient
  },
});
```

**Important Notes:**

- `credentials: "include"` is **NOT required** for JWT-based authentication
- JWT tokens in the `Authorization` header are stateless and self-contained
- `credentials: "include"` is only needed for cookie-based session authentication
- Clerk Express middleware validates the JWT from the Authorization header directly

**Authentication Flow:**

```
1. User signs in via Clerk on client (localhost:3002)
2. Client gets JWT token from Clerk
3. Client sends request to product service with:
   - Authorization: Bearer ${token} (JWT in header)
4. Product service verifies token via clerkMiddleware()
5. getAuth(req) extracts userId from JWT token
6. Protected routes check userId and respond accordingly
```

**Common Issues & Solutions:**

```
Issue: "You are not logged in" despite having valid token
Solutions:
  ✓ Ensure Authorization header uses ${token} not $(token)
  ✓ Verify CLERK_SECRET_KEY is set in product service .env
  ✓ Check clerkMiddleware() is registered before routes
  ✗ credentials: "include" is NOT needed for JWT auth
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

### ⚡ Performance Optimization

**Filesystem Performance (Windows):**

**Issue:** Slow filesystem warning during development

```
Slow filesystem detected. The benchmark took 223ms.
```

**Causes:**

- Windows Defender real-time scanning
- Antivirus software scanning project files
- HDD instead of SSD
- High disk usage

**Solutions:**

1. **Exclude from Windows Defender (Recommended):**

   ```
   Windows Security → Virus & threat protection → Exclusions
   Add folder: D:\Projects\EC
   ```

2. **Exclude specific folders:**

   ```
   D:\Projects\EC\node_modules
   D:\Projects\EC\apps\client\.next
   D:\Projects\EC\apps\admin\.next
   D:\Projects\EC\.turbo
   ```

3. **Use SSD for better performance**

**Impact:**

- ⚠️ Slower development builds (not critical)
- ⚠️ Longer hot reload times
- ✅ Does NOT affect production builds
- ✅ Does NOT break functionality

**Performance Tips:**

```
✓ Exclude project directory from antivirus
✓ Use SSD for Node.js projects
✓ Close unnecessary applications during development
✓ Clear .next and .turbo cache if builds are slow
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

| Category             | Technologies                                                            |
| -------------------- | ----------------------------------------------------------------------- |
| **Frontend**         | Next.js 15.4.5, React 19, TypeScript, Tailwind CSS v4                   |
| **Backend**          | Express.js 5, Fastify 5.5.0, Hono, Node.js, TypeScript                  |
| **Databases**        | PostgreSQL (Prisma), MongoDB (Mongoose)                                 |
| **Message Queue**    | Apache Kafka (KafkaJS)                                                  |
| **Build System**     | Turbo, pnpm, Turbopack                                                  |
| **UI Components**    | shadcn/ui, Radix UI, Recharts                                           |
| **State Management** | Zustand, React Hook Form                                                |
| **Authentication**   | Clerk (@clerk/nextjs, @clerk/express, @clerk/fastify, @hono/clerk-auth) |
| **Payments**         | Stripe (Checkout, Webhooks)                                             |
| **Styling**          | Tailwind CSS v4, PostCSS                                                |
| **Code Quality**     | ESLint, Prettier, TypeScript                                            |
| **Development**      | Hot reload, TypeScript, CORS, ngrok                                     |

## 🔧 Troubleshooting Guide

### 💳 Payment & Webhook Issues

**Issue: Stripe webhook not receiving events**

```
Symptoms: Payment completes but order not created
Cause: Webhook endpoint not publicly accessible

Solutions:
✓ Use ngrok: ngrok http 8002
✓ Configure webhook in Stripe Dashboard with ngrok URL
✓ Or use Stripe CLI: stripe listen --forward-to localhost:8002/webhook/stripe
✓ Verify STRIPE_WEBHOOK_SECRET is set in .env
```

**Issue: Order validation failed - amount is string**

```
Error: Cast to Number failed for value "success" at path "amount"
Cause: Webhook sending wrong data to Kafka

Solution:
✓ Fixed in webhook.route.ts line 33
✓ Changed: amount: "success" → amount: session.amount_total
✓ Added: status: "success" | "failed"
✓ Added: shippingaddress from session data
```

**Issue: Stripe product not found**

```
Error: No such product: '1'
Cause: Product doesn't exist in Stripe

Solutions:
✓ Auto-create products in session.route.ts
✓ Or manually create products in Stripe Dashboard
✓ Ensure product IDs match between database and Stripe
```

### 📨 Kafka Issues

**Issue: Kafka connection refused**

```
Error: ECONNREFUSED localhost:9094
Cause: Kafka brokers not running

Solutions:
✓ Start Kafka: docker-compose up -d kafka
✓ Or start Kafka manually
✓ Verify brokers are running on ports 9094, 9095, 9096
```

**Issue: KafkaJS partitioner warning**

```
Warning: KafkaJS v2.0.0 switched default partitioner
Solution:
✓ Set environment variable: KAFKAJS_NO_PARTITIONER_WARNING=1
✓ Or use Partitioners.LegacyPartitioner in producer config
```

**Issue: Consumer not receiving messages**

```
Symptoms: Payment succeeds but order not created
Causes:
1. Consumer not subscribed to topic
2. Consumer group offset issue
3. Kafka broker not running

Solutions:
✓ Check consumer subscription in subscription.ts
✓ Verify topic name matches: "payment.successful"
✓ Reset consumer group offset if needed
✓ Check Kafka logs for errors
```

### 🔐 Authentication Issues

**Issue: "You are not logged in" despite valid token**

```
Cause: Multiple possible issues

Solutions:
✓ Check Authorization header: Bearer ${token} not $(token)
✓ Verify CLERK_SECRET_KEY in service .env
✓ Ensure clerkMiddleware() is registered before routes
✓ Check CORS configuration allows credentials
✗ credentials: "include" NOT needed for JWT auth
```

**Issue: Fastify Clerk plugin duplicate registration**

```
Error: The decorator 'auth' has already been added
Cause: clerkPlugin registered multiple times

Solution:
✓ Register clerkPlugin only once at root level
✓ Remove duplicate registrations in route plugins
```

### 🗄️ Database Issues

**Issue: DATABASE_URL not found**

```
Error: Environment variable not found: DATABASE_URL
Cause: .env file missing or not in correct location

Solutions:
✓ Copy DATABASE_URL to service .env file
✓ For Prisma: packages/product-db/.env
✓ For API: apps/product-service/.env
✓ Verify .env file is in correct directory
```

**Issue: MongoDB connection failed**

```
Error: MongoServerError: Authentication failed
Cause: Invalid credentials or connection string

Solutions:
✓ Verify MONGO_URL in order-service/.env
✓ Check MongoDB Atlas IP whitelist
✓ Verify username/password are correct
✓ Test connection: mongosh "mongodb+srv://..."
```

### 🚀 Development Issues

**Issue: Port already in use**

```
Error: EADDRINUSE: address already in use :::3002
Solutions:
✓ Kill process: npx kill-port 3002
✓ Or find and kill: netstat -ano | findstr :3002
✓ Change port in package.json dev script
```

**Issue: Slow filesystem warning**

```
Warning: Slow filesystem detected
Solutions:
✓ Exclude project from Windows Defender
✓ Add to antivirus exclusions
✓ Use SSD instead of HDD
✓ Not critical - doesn't break functionality
```

**Issue: Module not found after adding package**

```
Error: Cannot find module '@repo/types'
Solutions:
✓ Run: pnpm install from root
✓ Verify package.json has correct workspace reference
✓ Check pnpm-workspace.yaml includes package
✓ Restart dev server
```

---

_This mindmap represents the current state of the EC e-commerce platform with full Kafka integration, Stripe payments, and microservices architecture. Last updated: February 2026._

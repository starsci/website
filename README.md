# SRSTHS Website (srsths.edu.ph)

This repository stores the code for the official website of Santa Rosa Science and Technology High School ([srsths.edu.ph](https://srsths.edu.ph)).

## Overview

This project is built using [Next.js](https://nextjs.org/) as the frontend framework and [Payload CMS](https://payloadcms.com/) as the content management system (CMS).

The application structure is split into two main parts:

- **Frontend**: Located in `app/(app)`, this is where the Next.js application handles the user interface, routing, and client-side logic.
- **Backend (CMS)**: Located in `app/(payload)`, this directory stores the configuration and API logic of Payload CMS, which handles content management, authentication, and database interactions.

## Tech Stack

- **Frontend**: Next.js 15.0
- **CMS**: Payload CMS 3.0
- **Database**: Supabase (PostgreSQL)
- **Hosting**: Netlify

## Directory Structure

```plaintext
.
├── app/
│   ├── (app)/         # Contains the Next.js frontend files (components, pages, etc.)
│   └── (payload)/     # Contains the Payload CMS backend files
├── public/            # Public assets such as images and icons
├── payload.config.ts  # Payload CMS configuration
├── next.config.js     # Next.js configuration
├── package.json       # Project dependencies and scripts
└── README.md          # This file
```

### `app/(app)`

This folder contains the Next.js frontend for the SRSTHS website. The frontend includes all user-facing pages.

### `app/(payload)`

This folder contains the backend for Payload CMS, which provides content management and API services. Payload CMS is used to create, edit, and manage content for the website, such as announcements and news.

## Getting Started

### Prerequisites

Make sure you have the following tools installed:

- Node.js (v18 or later)
- pnpm (npm alternative)
- PostgreSQL (for the CMS)
- A code editor like VSCode

### Installation

1. Clone the repository:

```bash
git clone https://github.com/starsci/website.git
cd website
```

2. Install dependencies:

```bash
pnpm install
```

3. Configure environment variables:

Create a `.env` file at the root of the project with the following variables:

```plaintext
# For Payload CMS
DATABASE_URI=your-local-postgresql-db
PAYLOAD_SECRET=your-secret-key

CLOUDINARY_URL=your-cloudinary-url
```

4. Run the development server:

```bash
pnpm dev
```

## Contributing

If you want to contribute to the development of the website, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MPL 2.0 License. See the [LICENSE](LICENSE) file for more information.

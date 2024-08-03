# Next.js Authentication Template with Prisma

This template provides a comprehensive setup for authentication in Next.js projects using `auth.js` and Prisma. It includes support for various authentication providers and is designed to be reused across multiple projects.

## Features

- **Authentication Providers**: Support for Google, GitHub, and Credentials-based authentication.
- **Prisma Integration**: Seamless integration with Prisma for database operations.
- **JWT Session Management**: Uses JWT for session management.
- **Customizable**: Easily extend or modify authentication logic and providers.

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- PostgreSQL, MySQL, or SQLite database
- Prisma CLI

  **Configure Environment Variables**

  Create a `.env` file in the root directory and add your environment variables:

  ```env
  DATABASE_URL=your-database-url
  GOOGLE_CLIENT_ID=your-google-client-id
  GOOGLE_CLIENT_SECRET=your-google-client-secret
  GITHUB_CLIENT_ID=your-github-client-id
  GITHUB_CLIENT_SECRET=your-github-client-secret
  NEXTAUTH_SECRET=your-nextauth-secret
  ```

## Contributing

If you find bugs or want to add new features, feel free to open an issue or submit a pull request. Contributions are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For questions or feedback, please reach out to [kushagra.sharma@thedarkartist.in](mailto:kushagra.sharma@thedarkartist.in).

### Key Sections

1. **Features**: Overview of what the template provides.
2. **Getting Started**: Instructions for setting up the template, including prerequisites and installation steps.
3. **Usage**: Guidelines on how to use and customize the template.
4. **Example Usage**: Quick example of integrating the template into a new project.
5. **Contributing**: Information on how others can contribute.
6. **License**: Licensing information.
7. **Contact**: Contact information for further inquiries.

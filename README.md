# RESTful web service

This project implements a message sender service using NestJS, a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. The service sends messages of different types (e.g., warnings, notifications) to various targets (e.g., Slack, Microsoft Teams) based on user requests.

## Project Structure

### Controller
- The `MessageController` handles incoming HTTP requests and delegates message sending tasks to the `MessageService`.

### Service
- The `MessageService` encapsulates the logic for sending messages, utilizing the injected `HttpService` to make HTTP requests.

### Interfaces
- The `MessageType` interface defines the structure of the message payload, ensuring type safety throughout the application.

### Module
- The `AppModule` configures the application, specifying imported modules, controllers, and providers.

## Running the App

```bash
# Development
$ npm run start

# Watch Mode
$ npm run start:dev

## Configuration

This project relies on environment variables for configuration. Create a `.env` file 
in the root directory and define the following variables:


If you have your own webhook URLs, you can create a `.env` file and store the data inside. 
Then, when sending a message, specify the `TARGET` field in the message payload object as 
the name of the webhook URL from the `.env` file. For example:

```typescript
{
  TYPE: "Notification",
  NAME: "New Message",
  DESCRIPTION: "This is a new notification message",
  TARGET: "MICROSOFT_TEAM_WEBHOOK_URL"
}

.env variable 
MICROSOFT_TEAM_WEBHOOK_URL = "your Microsoft Teams Webhook url"
SLACK_WEBHOOK_URL = "your Slack Webhook url"

This addition provides clear instructions on how users can configure their 
own webhook URLs and reference them in the message payload object. 
Let me know if you need further assistance!



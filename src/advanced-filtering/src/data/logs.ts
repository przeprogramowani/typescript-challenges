import {LogEntry} from "../types";

const fakeLogEntries: LogEntry[] = [
  {
    timestamp: new Date("2024-08-20T08:30:15Z"),
    level: "INFO",
    message: "User successfully logged in",
    source: "auth-service",
    userId: 1001,
  },
  {
    timestamp: new Date("2024-08-20T08:31:22Z"),
    level: "ERROR",
    message: "Failed to process payment: Invalid card number",
    source: "payment-service",
    userId: 1002,
  },
  {
    timestamp: new Date("2024-08-20T08:32:45Z"),
    level: "WARNING",
    message: "High CPU usage detected",
    source: "api-gateway",
  },
  {
    timestamp: new Date("2024-08-20T08:33:10Z"),
    level: "INFO",
    message: "New user registered",
    source: "user-service",
    userId: 1003,
  },
  {
    timestamp: new Date("2024-08-20T08:34:30Z"),
    level: "ERROR",
    message: "Database connection lost",
    source: "user-service",
  },
  {
    timestamp: new Date("2024-08-20T08:35:12Z"),
    level: "INFO",
    message: "Password reset email sent",
    source: "notification-service",
    userId: 1004,
  },
  {
    timestamp: new Date("2024-08-20T08:36:05Z"),
    level: "WARNING",
    message: "Rate limit exceeded for API key",
    source: "api-gateway",
  },
  {
    timestamp: new Date("2024-08-20T08:37:20Z"),
    level: "INFO",
    message: "Successful payment processed",
    source: "payment-service",
    userId: 1005,
  },
  {
    timestamp: new Date("2024-08-20T08:38:40Z"),
    level: "ERROR",
    message: "Failed to send notification: User not found",
    source: "notification-service",
    userId: 1006,
  },
  {
    timestamp: new Date("2024-08-20T08:39:55Z"),
    level: "INFO",
    message: "User profile updated",
    source: "user-service",
    userId: 1007,
  },
];

export default fakeLogEntries;

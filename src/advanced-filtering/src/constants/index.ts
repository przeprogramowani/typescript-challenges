import {LogEntry, LogLevel, LogSource} from "../types";

export const LogLevelOrder: Record<LogLevel, number> = {
  ERROR: 3,
  WARNING: 2,
  INFO: 1,
};

export const LogEntryFields: {
  key: keyof LogEntry;
  label: string;
  className?: string;
}[] = [
  {key: "timestamp", label: "Timestamp"},
  {key: "level", label: "Level"},
  {key: "source", label: "Source", className: "min-w-44"},
  {key: "message", label: "Message", className: "min-w-80"},
  {key: "userId", label: "User ID", className: "min-w-24"},
];

export const LogLevelMap: {[Key in LogLevel]: Key} = {
  INFO: "INFO",
  WARNING: "WARNING",
  ERROR: "ERROR",
};

export const LogSourceMap: {[Key in LogSource]: Key} = {
  "user-service": "user-service",
  "auth-service": "auth-service",
  "payment-service": "payment-service",
  "notification-service": "notification-service",
  "api-gateway": "api-gateway",
};

import React from "react";
import {LogLevel} from "../types";

interface LogLevelBadgeProps {
  level: LogLevel;
}

export const LogLevelBadge: React.FC<LogLevelBadgeProps> = ({level}) => {
  const getBadgeColor = (level: LogLevel) => {
    switch (level) {
      case "INFO":
        return "bg-blue-100 text-blue-800";
      case "WARNING":
        return "bg-yellow-100 text-yellow-800";
      case "ERROR":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-medium ${getBadgeColor(
        level
      )}`}
    >
      {level}
    </span>
  );
};

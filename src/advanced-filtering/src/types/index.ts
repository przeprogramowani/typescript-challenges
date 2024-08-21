export type LogLevel = 'INFO' | 'WARNING' | 'ERROR';
export type LogSource =
  | 'user-service'
  | 'auth-service'
  | 'payment-service'
  | 'notification-service'
  | 'api-gateway';

export interface LogEntry {
  timestamp: Date;
  level: LogLevel;
  message: string;
  source: LogSource;
  userId?: number;
}

export type CompareFunction<ItemTypeValue> = (
  a: ItemTypeValue,
  b: ItemTypeValue,
) => number;

export type SortCriteria<ItemType extends object> = {
  [Key in keyof ItemType]?: {
    direction: 'asc' | 'desc';
    customCompare?: CompareFunction<ItemType[Key]>;
  };
};

export type SimpleLogFilterCriteria = {
  level?: LogLevel | ((value: LogLevel) => boolean);
  source?: LogSource | ((value: LogSource) => boolean);
};

export type SimpleLogFilterKey = 'level' | 'source';

export type SimpleFilterableLogValue = LogLevel | LogSource;

export type UpdateLogFilterFunction = (
  key: SimpleLogFilterKey,
  value: SimpleFilterableLogValue | '',
) => void;

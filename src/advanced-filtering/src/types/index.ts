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

export type FilterCriteria<ItemType extends object> = {
  [Key in keyof ItemType]?: ItemType[Key] | ((value: ItemType[Key]) => boolean);
};

export type LogFilterKey = Extract<keyof LogEntry, 'level' | 'source'>;

export type FilterableLogValue = LogEntry[LogFilterKey];

export type UpdateLogFilterFunction = (
  key: LogFilterKey,
  value: FilterableLogValue | '',
) => void;

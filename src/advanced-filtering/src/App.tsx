import { useMemo, useState } from 'react';
import { LogFilter } from './components/LogFilter';
import { LogLevelBadge } from './components/LogLevelBadge';
import { LogSortingHeader } from './components/LogSortingHeader';
import {
  LogEntryFields,
  LogLevelMap,
  LogLevelOrder,
  LogSourceMap,
} from './constants';
import {
  advancedFilter,
  advancedSort,
  NO_FILTER,
} from './services/logProcessing';
import {
  FilterCriteria,
  LogEntry,
  LogLevel,
  SortCriteria,
  UpdateLogFilterFunction,
} from './types';

interface LogDashboardProps {
  logs: LogEntry[];
}

function LogDashboard({ logs }: LogDashboardProps) {
  const [sortCriteria, setSortCriteria] = useState<SortCriteria<LogEntry>>({
    timestamp: { direction: 'desc' },
  });
  const [filterCriteria, setFilterCriteria] = useState<
    FilterCriteria<LogEntry>
  >({});

  const compareLogLevels = (a: LogLevel, b: LogLevel) =>
    LogLevelOrder[a] - LogLevelOrder[b];

  const toggleSort = (key: keyof LogEntry) => {
    setSortCriteria((prev) => {
      const direction = prev[key]?.direction === 'asc' ? 'desc' : 'asc';
      const baseCriteria = { direction };

      return {
        [key]:
          key === 'level'
            ? { ...baseCriteria, customCompare: compareLogLevels }
            : baseCriteria,
      };
    });
  };

  const updateFilter: UpdateLogFilterFunction = (key, value) => {
    setFilterCriteria((prev) => ({
      ...prev,
      [key]: value === '' ? NO_FILTER : value,
    }));
  };

  const filteredAndSortedLogs = useMemo(() => {
    const filteredLogs = advancedFilter(logs, filterCriteria);
    return advancedSort(filteredLogs, sortCriteria);
  }, [logs, filterCriteria, sortCriteria]);

  return (
    <div className="container p-6 mx-auto">
      <div className="flex mb-4 space-x-4">
        <LogFilter
          updateFilter={updateFilter}
          filterKey="level"
          options={Object.values(LogLevelMap)}
          allLabel="All levels"
        />
        <LogFilter
          updateFilter={updateFilter}
          filterKey="source"
          options={Object.values(LogSourceMap)}
          allLabel="All sources"
        />
      </div>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full mx-auto text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              {LogEntryFields.map(({ key, label, className }) => (
                <LogSortingHeader
                  key={key}
                  field={key}
                  label={label}
                  sortCriteria={sortCriteria}
                  toggleSort={toggleSort}
                  className={className}
                />
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredAndSortedLogs.map((log, index) => (
              <tr key={index} className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4">
                  {log.timestamp.toISOString().slice(0, 19)}
                </td>
                <td className="px-6 py-4">
                  <LogLevelBadge level={log.level} />
                </td>
                <td className="px-6 py-4">{log.source}</td>
                <td className="px-6 py-4">{log.message}</td>
                <td className="px-6 py-4">{log.userId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LogDashboard;

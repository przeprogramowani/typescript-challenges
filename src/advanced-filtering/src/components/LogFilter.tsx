import {
  FilterableLogValue,
  LogFilterKey,
  UpdateLogFilterFunction,
} from "../types";

const SelectArrow = () => (
  <div className='absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none'>
    <svg
      className='w-4 h-4 fill-current'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
    >
      <path d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' />
    </svg>
  </div>
);

interface LogFilterProps {
  updateFilter: UpdateLogFilterFunction;
  filterKey: LogFilterKey;
  options: readonly FilterableLogValue[];
  allLabel: string;
}

export const LogFilter = ({
  updateFilter,
  filterKey,
  options,
  allLabel,
}: LogFilterProps) => (
  <div className='relative inline-block w-full'>
    <select
      onChange={(e) =>
        updateFilter(filterKey, e.target.value as FilterableLogValue | "")
      }
      className='w-full px-4 py-2 pr-10 text-gray-700 bg-white border rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500'
    >
      <option value=''>{allLabel}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    <SelectArrow />
  </div>
);

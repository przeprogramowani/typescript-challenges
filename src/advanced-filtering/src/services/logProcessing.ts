import { FilterCriteria, SortCriteria } from '../types';

export function advancedSort<ItemType extends object>(
  arr: ItemType[],
  criteria: SortCriteria<ItemType>,
): ItemType[] {
  return [...arr].sort((a, b) => {
    for (const key in criteria) {
      const { direction, customCompare } = criteria[key] || {};
      if (a[key] !== b[key]) {
        let comparison: number;
        if (customCompare) {
          comparison = customCompare(a[key], b[key]);
        } else {
          comparison = a[key] < b[key] ? -1 : 1;
        }
        return direction === 'desc' ? -comparison : comparison;
      }
    }
    return 0;
  });
}

export const NO_FILTER = null;

export function advancedFilter<ItemType extends object>(
  arr: ItemType[],
  criteria: FilterCriteria<ItemType>,
): ItemType[] {
  return arr.filter((log) => {
    return (
      Object.entries(criteria) as [
        keyof ItemType,
        FilterCriteria<ItemType>[keyof ItemType],
      ][]
    ).every(([key, condition]) => {
      if (condition === NO_FILTER) {
        return true;
      }
      const value = log[key];
      if (typeof condition === 'function') {
        return condition(value);
      }
      return value === condition;
    });
  });
}

import { QUERY_HISTORY_KEY } from 'constants/common';

export const setQueryHistory = (query: string) => {
  const getHistory = getQueryHistory();

  if (getHistory.includes(query)) {
    return;
  }

  getHistory.unshift(query);
  if (getHistory.length > 5) {
    getHistory.pop();
  }
  localStorage.setItem(QUERY_HISTORY_KEY, JSON.stringify(getHistory));
};

export const getQueryHistory = () => {
  return JSON.parse(localStorage.getItem(QUERY_HISTORY_KEY) || '[]');
};

export const popQueryHistory = () => {
  const getHistory = getQueryHistory();
  getHistory.pop();
  localStorage.setItem(QUERY_HISTORY_KEY, JSON.stringify(getHistory));
};

export const clearQueryHistory = () => {
  localStorage.setItem(QUERY_HISTORY_KEY, JSON.stringify([]));
};

const STORAGE_KEY = "finance-records";

export function saveRecords(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function loadRecords() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

export function clearRecords() {
  localStorage.removeItem(STORAGE_KEY);
}

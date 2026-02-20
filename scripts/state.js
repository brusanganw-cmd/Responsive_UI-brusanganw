let records = [];

/* Initialize state from storage */
export function initializeRecords(data = []) {
  records = [...data];
}

export function setRecords(data) {
  records = [...data];
}

export function getRecords() {
  return [...records];
}

export function addRecord(record) {
  records.push(record);
}

export function deleteRecord(id) {
  records = records.filter(r => r.id !== id);
}

export function sortRecords(by) {
  if (by === "date") {
    records.sort((a, b) => new Date(a.date) - new Date(b.date));
  }

  if (by === "description") {
    records.sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  }

  if (by === "amount") {
    records.sort((a, b) => a.amount - b.amount);
  }
}

export function getTotals() {
  const data = getRecords();

  const income = data
    .filter(r => r.amount > 0)
    .reduce((sum, r) => sum + r.amount, 0);

  const expenses = data
    .filter(r => r.amount < 0)
    .reduce((sum, r) => sum + r.amount, 0);

  const balance = income + expenses;

  return { income, expenses, balance };
}

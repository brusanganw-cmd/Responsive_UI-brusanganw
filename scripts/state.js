let records = [];

export function setRecords(data) {
  records = [...data];
}

export function getRecords() {
  return [...records];
}

export function addRecord(record) {
  records.push(record);
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

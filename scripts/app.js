import {
  initializeRecords,
  addRecord,
  deleteRecord,
  sortRecords,
  getRecords,
  getTotals
} from "./state.js";

import {
  saveRecords,
  loadRecords
} from "./storage.js";

import { renderTable, renderStats } from "./ui.js";
import { compileRegex, highlight } from "./search.js";

const storedData = loadRecords();
initializeRecords(storedData);

renderTable();
renderStats();

/* Helper to sync state and storage */
function syncStorage() {
  saveRecords(getRecords());
}

const form = document.getElementById("transaction-form");
const searchInput = document.getElementById("search-input");
const caseToggle = document.getElementById("case-toggle");

let currentRegex = null;

form.addEventListener("submit", e => {
  e.preventDefault();

  const description = document.getElementById("description").value.trim();
  const amount = parseFloat(document.getElementById("amount").value);
  const category = document.getElementById("category").value.trim();
  const date = document.getElementById("date").value;

  if (!description || isNaN(amount)) return;

  const newRecord = {
    id: crypto.randomUUID(),
    description,
    amount,
    category,
    date,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  addRecord(newRecord);
  syncStorage();
  renderTable();
  renderStats();
  form.reset();
});

document.querySelectorAll("[data-sort]").forEach(btn => {
  btn.addEventListener("click", () => {
    sortRecords(btn.dataset.sort);
    syncStorage();
    renderTable();
    renderStats();
  });
});

document.addEventListener("click", e => {
  if (e.target.classList.contains("delete-btn")) {
    deleteRecord(e.target.dataset.id);
    syncStorage();
    renderTable();
    renderStats();
  }
});

searchInput.addEventListener("input", () => {
  const flags = caseToggle.checked ? "i" : "";
  currentRegex = compileRegex(searchInput.value, flags);

  const records = getRecords();

  if (!currentRegex) {
    renderTable();
    renderStats();
    return;
  }

  const filtered = records.filter(r =>
    currentRegex.test(r.description)
  );

  renderTable(
    filtered.map(r => ({
      ...r,
      description: highlight(r.description, currentRegex)
    }))
  );
});

import { addRecord, setRecords, sortRecords, getRecords } from "./state.js";
import { renderTable } from "./ui.js";
import { compileRegex, highlight } from "./search.js";

const form = document.getElementById("transaction-form");
const searchInput = document.getElementById("search-input");
const caseToggle = document.getElementById("case-toggle");

let currentRegex = null;

/* ===== Add Record ===== */
form.addEventListener("submit", e => {
  e.preventDefault();

  const description = document.getElementById("description").value.trim();
  const amount = parseFloat(document.getElementById("amount").value);
  const category = document.getElementById("category").value.trim();
  const date = document.getElementById("date").value;

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
  renderTable();
  form.reset();
});

/* ===== Sorting ===== */
document.querySelectorAll("[data-sort]").forEach(btn => {
  btn.addEventListener("click", () => {
    sortRecords(btn.dataset.sort);
    renderTable();
  });
});

/* ===== Search ===== */
searchInput.addEventListener("input", () => {
  const flags = caseToggle.checked ? "i" : "";
  currentRegex = compileRegex(searchInput.value, flags);

  const records = getRecords();

  if (!currentRegex) {
    renderTable();
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

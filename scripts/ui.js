import { getRecords, getTotals } from "./state.js";

export function renderTable(filtered = null) {
  const tbody = document.getElementById("records-body");
  tbody.innerHTML = "";

  const data = filtered ?? getRecords();

  if (!data.length) {
    tbody.innerHTML = `
      <tr>
        <td colspan="5">No transactions found.</td>
      </tr>
    `;
    return;
  }

  data.forEach(record => {
    const tr = document.createElement("tr");

    const amount =
      typeof record.amount === "number"
        ? record.amount.toFixed(2)
        : "0.00";

    tr.innerHTML = `
      <td>${record.description}</td>
      <td>$${amount}</td>
      <td>${record.category}</td>
      <td>${record.date}</td>
      <td>
        <button data-id="${record.id}" class="delete-btn">
          Delete
        </button>
      </td>
    `;

    tbody.appendChild(tr);
  });
}

export function renderStats() {
  const { income, expenses, balance } = getTotals();

  document.getElementById("income-total").textContent =
    `$${income.toFixed(2)}`;

  document.getElementById("expense-total").textContent =
    `$${Math.abs(expenses).toFixed(2)}`;

  document.getElementById("balance-total").textContent =
    `$${balance.toFixed(2)}`;
}

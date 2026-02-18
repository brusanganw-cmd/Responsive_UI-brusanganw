import {
  validateDescription,
  validateAmount,
  validateDate,
  validateCategory
} from './validators.js';

const form = document.getElementById('transaction-form');

const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const categoryInput = document.getElementById('category');
const dateInput = document.getElementById('date');

const descriptionError = document.getElementById('description-error');
const amountError = document.getElementById('amount-error');
const categoryError = document.getElementById('category-error');
const dateError = document.getElementById('date-error');

function showError(input, errorElement, message) {
  errorElement.textContent = message;
  input.setAttribute('aria-invalid', message ? 'true' : 'false');
}

descriptionInput.addEventListener('input', () => {
  showError(
    descriptionInput,
    descriptionError,
    validateDescription(descriptionInput.value)
  );
});

amountInput.addEventListener('input', () => {
  showError(
    amountInput,
    amountError,
    validateAmount(amountInput.value)
  );
});

categoryInput.addEventListener('input', () => {
  showError(
    categoryInput,
    categoryError,
    validateCategory(categoryInput.value)
  );
});

dateInput.addEventListener('input', () => {
  showError(
    dateInput,
    dateError,
    validateDate(dateInput.value)
  );
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const descMsg = validateDescription(descriptionInput.value);
  const amtMsg = validateAmount(amountInput.value);
  const catMsg = validateCategory(categoryInput.value);
  const dateMsg = validateDate(dateInput.value);

  showError(descriptionInput, descriptionError, descMsg);
  showError(amountInput, amountError, amtMsg);
  showError(categoryInput, categoryError, catMsg);
  showError(dateInput, dateError, dateMsg);

  if (!descMsg && !amtMsg && !catMsg && !dateMsg) {
    document.getElementById('form-status').textContent =
      "Transaction validated successfully.";
  }
});

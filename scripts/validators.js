// 1. Description: no leading or trailing spaces
export const descriptionRegex = /^\S(?:.*\S)?$/;

// 2. Amount: positive number only, optional 2 decimals
export const amountRegex = /^(0|[1-9]\d*)(\.\d{1,2})?$/;

// 3. Date: YYYY-MM-DD
export const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

// 4. Category name: letters, spaces, hyphens (no leading/trailing spaces)
export const categoryRegex = /^[A-Za-z]+(?:[ -][A-Za-z]+)*$/;

// 5. Advanced: duplicate consecutive words (back-reference)
export const duplicateWordRegex = /\b(\w+)\s+\1\b/i;


export function validateDescription(value) {
  if (!descriptionRegex.test(value)) {
    return "Description cannot start or end with spaces.";
  }
  if (duplicateWordRegex.test(value)) {
    return "Duplicate consecutive words detected.";
  }
  return "";
}

export function validateAmount(value) {
  if (!amountRegex.test(value)) {
    return "Amount must be a valid number (max 2 decimals).";
  }
  return "";
}

export function validateDate(value) {
  if (!dateRegex.test(value)) {
    return "Date must be in YYYY-MM-DD format.";
  }
  return "";
}

export function validateCategory(value) {
  if (!categoryRegex.test(value)) {
    return "Category can contain letters, spaces, or hyphens only.";
  }
  return "";
}

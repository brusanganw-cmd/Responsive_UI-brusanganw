export function compileRegex(input, flags = "i") {
  try {
    return input ? new RegExp(input, flags) : null;
  } catch {
    return null;
  }
}

export function highlight(text, regex) {
  if (!regex) return text;
  return text.replace(regex, match => `<mark>${match}</mark>`);
}

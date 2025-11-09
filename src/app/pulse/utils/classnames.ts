export const cn = (...xs: Array<string | undefined | false>) =>
  xs.filter(Boolean).join(" ");

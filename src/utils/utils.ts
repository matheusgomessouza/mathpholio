export function isLastTechsItem(item: number, length: number) {
  if (item === length - 1) return true;
  return false;
}

export function convertDateFormat(date: string) {
  if (date) {
    const isoDate = new Date(date);
    const formattedDate = isoDate
      .toISOString()
      .split("T")[0]
      .replace(/-/g, "/");

    return formattedDate;
  }
}

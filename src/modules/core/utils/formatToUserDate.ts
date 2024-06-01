export function formatToUserDate(date: string | Date) {
  if (typeof date === "string")
    return new Date(date + "Z").toLocaleString([], {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });

  return date.toLocaleDateString();
}

export function formatOnlyTime(date: string) {
  return new Date(date + "Z")
    .toLocaleString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
    .replace(/AM|PM/, "");
}

export const getName = () => {
  return new URLSearchParams(window.location.search).get("name") || "NAJIHA"
}

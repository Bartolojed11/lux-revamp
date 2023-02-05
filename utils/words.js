export function titleCase(string) {
    let formatted = string.toLowerCase().split(" ");
    for (let i = 0; i < formatted.length; i++) {
        formatted[i] = formatted[i][0].toUpperCase() + formatted[i].slice(1);
    }
    return formatted.join(" ");
}

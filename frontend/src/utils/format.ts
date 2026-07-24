export function formatPrice(cents:number, currency:string):string {
    return new Intl.NumberFormat(undefined, {
        style: "currency",
        currency: (currency ?? "usd").toUpperCase(),
    }).format(cents / 100);
}

interface FormatOrderOpts {
    dateStyle?: "full" | "long" | "medium" | "short"
}

export function formatOrderWhen(iso?: null |string, opts: FormatOrderOpts = {}):string {
    const { dateStyle = "medium" } = opts;
    if (!iso) return "";

    const date = new Date(iso);
    if (Number.isNaN(date.getTime())) return "";

    return new Intl.DateTimeFormat(undefined, {
        dateStyle,
        timeStyle: "short",
    }).format(date);
}

export default function formatPrice (price: number) {
    const USDollar = new Intl.NumberFormat('en-US')

    return USDollar.format(price);
}
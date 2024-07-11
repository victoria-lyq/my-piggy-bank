type AssetType = "Cash" | "Investment" | "Crypto" | "Savings" | "Other"

export interface Asset {
    name: string,
    value: number,
    assetType: AssetType,
}
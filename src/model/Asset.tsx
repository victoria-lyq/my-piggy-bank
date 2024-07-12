type AssetType = 'Cash' | 'Investment' | 'Crypto' | 'Savings' | 'Other';
type DifferenceType = 'positive' | 'negative' | 'zero' | undefined;

export interface Asset {
    name: string;
    value: number;
    assetType: AssetType;
    difference?: DifferenceType;
}

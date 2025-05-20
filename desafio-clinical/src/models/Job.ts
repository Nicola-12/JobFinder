export interface Job {
    jobTitleText: string
    companyName: string
    companyLogoUrl: string
    locationName: string
    annualWage: number
    rating: number
    payPeriod: 'ANNUAL' | 'HOURLY'
    payCurrency: 'USD' | 'EUR' | 'BRL'
}
import type { Currency } from "@/enums/Currrency"
import type { Payment } from "@/enums/Payment"

export interface Job {
    jobTitleText: string
    companyName: string
    companyLogoUrl: string
    locationName: string
    annualWage: number
    rating: number
    payPeriod: Payment
    payCurrency: Currency
}
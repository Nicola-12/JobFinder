import { Currency, Payment } from "./enums/index";
import type { Job } from "./models/Job";

export const data: Job[] = [
    {
        jobTitleText: "Software Engineer I (NST)",
        companyName: "Nintendo",
        companyLogoUrl: "https://media.glassdoor.com/sql/3533/nintendo-squarelogo.png",
        locationName: "Redmond, WA",
        annualWage: 171505,
        rating: 4.1,
        payPeriod: Payment.ANNUAL,
        payCurrency: Currency.BRL
    },
    {
        jobTitleText: "Back End Software Engineer",
        companyName: "Disney Streaming Services",
        companyLogoUrl: "https://media.glassdoor.com/sql/1755978/disney-streaming-services-squarelogo-1559769078332.png",
        locationName: "New York, NY",
        annualWage: 153781,
        rating: 3.4,
        payPeriod: Payment.DAILY,
        payCurrency: Currency.USD
    },
    {
        jobTitleText: "Software Engineer - Python/AWS",
        companyName: "Infinity Consulting Solutions",
        companyLogoUrl: "https://media.glassdoor.com/sql/274004/infinity-consulting-solutions-squarelogo-1431041795684.png",
        locationName: "Philadelphia, PA",
        annualWage: 143357,
        rating: 3.6,
        payPeriod: Payment.DAILY,
        payCurrency: Currency.BRL
    },
    {
        jobTitleText: "Software Engineer",
        companyName: "Microsoft",
        companyLogoUrl: "https://media.glassdoor.com/sql/1651/microsoft-squarelogo-1479856042252.png",
        locationName: "Honolulu, HI",
        annualWage: 179743,
        rating: 4.4,
        payPeriod: Payment.ANNUAL,
        payCurrency: Currency.USD
    },
    {
        jobTitleText: "Software Engineer, Data Warehouse",
        companyName: "Pinterest",
        companyLogoUrl: "https://media.glassdoor.com/sql/503467/pinterest-squareLogo-1617809885495.png",
        locationName: "San Francisco, CA",
        annualWage: 198245,
        rating: 4.2,
        payPeriod: Payment.DAILY,
        payCurrency: Currency.USD
    },
    {
        jobTitleText: "Software Engineer (SRE)",
        companyName: "Comcentric",
        companyLogoUrl: "https://media.glassdoor.com/sql/719287/comcentric-squarelogo-1448025713959.png",
        locationName: "Lone Tree, CO",
        annualWage: 135000,
        rating: 4.8,
        payPeriod: Payment.HOURLY,
        payCurrency: Currency.EUR
    },
    {
        jobTitleText: "Software Engineer II",
        companyName: "Disney Streaming Services",
        companyLogoUrl: "https://media.glassdoor.com/sql/1755978/disney-streaming-services-squarelogo-1559769078332.png",
        locationName: "Seattle, WA",
        annualWage: 162018,
        rating: 3.4,
        payPeriod: Payment.ANNUAL,
        payCurrency: Currency.USD
    },
    {
        jobTitleText: "Software Engineer",
        companyName: "Fidelity Investments",
        companyLogoUrl: "https://media.glassdoor.com/sql/2786/fidelity-investments-squareLogo-1612542116323.png",
        locationName: "Durham, NC",
        annualWage: 136323,
        rating: 4.2,
        payPeriod: Payment.HOURLY,
        payCurrency: Currency.BRL
    },
    {
        jobTitleText: "Senior Software Engineer, Gameplay",
        companyName: "Blizzard Entertainment",
        companyLogoUrl: "https://media.glassdoor.com/sql/24858/blizzard-entertainment-squareLogo-1625606720830.png",
        locationName: "Irvine, CA",
        annualWage: 190756,
        rating: 3.4,
        payPeriod: Payment.ANNUAL,
        payCurrency: Currency.USD
    },
    {
        jobTitleText: "Senior Application Software Engineer (Test Automation)",
        companyName: "Cedent",
        companyLogoUrl: "https://media.glassdoor.com/sql/1464099/cedent-squarelogo-1582290523558.png",
        locationName: "Buffalo, NY",
        annualWage: 115000,
        rating: 0,
        payPeriod: Payment.HOURLY,
        payCurrency: Currency.EUR
    },
    {
        jobTitleText: "Software Engineering",
        companyName: "Chase",
        companyLogoUrl: "https://media.glassdoor.com/sql/690765/chase-squarelogo-1545241712897.png",
        locationName: "Wilmington, DE",
        annualWage: 168707,
        rating: 3.7,
        payPeriod: Payment.ANNUAL,
        payCurrency: Currency.USD
    },
    {
        jobTitleText: "Software Engineer",
        companyName: "Northwestern Mutual",
        companyLogoUrl: "https://media.glassdoor.com/sql/2919/northwestern-mutual-squarelogo-1505752677735.png",
        locationName: "Milwaukee, WI",
        annualWage: 106937,
        rating: 4,
        payPeriod: Payment.HOURLY,
        payCurrency: Currency.USD
    },
    {
        jobTitleText: "Ground Software — Associate Engineer (Summer 2022)",
        companyName: "Astranis",
        companyLogoUrl: "https://media.glassdoor.com/sql/1935038/astranis-squarelogo-1522847640036.png",
        locationName: "San Francisco, CA",
        annualWage: 132118,
        rating: 5,
        payPeriod: Payment.ANNUAL,
        payCurrency: Currency.BRL
    },
    {
        jobTitleText: "Junior Software Engineer, DevOps",
        companyName: "Ping Identity",
        companyLogoUrl: "https://media.glassdoor.com/sql/380907/ping-identity-squarelogo-1464970091149.png",
        locationName: "Denver, CO",
        annualWage: 80000,
        rating: 4.5,
        payPeriod: Payment.DAILY,
        payCurrency: Currency.EUR
    },
    {
        jobTitleText: "Software Developer",
        companyName: "Charles River Laboratories",
        companyLogoUrl: "https://media.glassdoor.com/sql/9837/charles-river-laboratories-squarelogo-1463687182149.png",
        locationName: "Wilmington, MA",
        annualWage: 138948,
        rating: 3.4,
        payPeriod: Payment.HOURLY,
        payCurrency: Currency.USD
    },
    {
        jobTitleText: "Associate Software Engineer",
        companyName: "Integral Ad Science",
        companyLogoUrl: "https://media.glassdoor.com/sql/782797/integral-ad-science-squarelogo-1473725099250.png",
        locationName: "San Francisco, CA",
        annualWage: 160408,
        rating: 3.7,
        payPeriod: Payment.ANNUAL,
        payCurrency: Currency.USD
    },
    {
        jobTitleText: "Software Engineer",
        companyName: "National Oilwell Varco",
        companyLogoUrl: "https://media.glassdoor.com/sql/3306/national-oilwell-varco-squarelogo-1431612939749.png",
        locationName: "Houston, TX",
        annualWage: 138683,
        rating: 3.5,
        payPeriod: Payment.DAILY,
        payCurrency: Currency.BRL
    },
    {
        jobTitleText: "Software Development Engineer",
        companyName: "Experian",
        companyLogoUrl: "https://media.glassdoor.com/sql/42406/experian-squarelogo-1594317302472.png",
        locationName: "Lincoln, NE",
        annualWage: 127886,
        rating: 4.3,
        payPeriod: Payment.ANNUAL,
        payCurrency: Currency.EUR
    },
    {
        jobTitleText: "Application Support Developer (Remote / Nationwide)",
        companyName: "BDO USA",
        companyLogoUrl: "https://media.glassdoor.com/sql/346477/bdo-usa-squarelogo-1481826662725.png",
        locationName: "Grand Rapids, MI",
        annualWage: 127440,
        rating: 3.7,
        payPeriod: Payment.ANNUAL,
        payCurrency: Currency.USD
    },
    {
        jobTitleText: "Engineer, Software",
        companyName: "T-Mobile",
        companyLogoUrl: "https://media.glassdoor.com/sql/9302/t-mobile-squarelogo-1579812467362.png",
        locationName: "Frisco, TX",
        annualWage: 127768,
        rating: 4,
        payPeriod: Payment.DAILY,
        payCurrency: Currency.USD
    },
    {
        jobTitleText: "Entry Level C++ Software Developer",
        companyName: "Smoothstack",
        companyLogoUrl: "https://media.glassdoor.com/sql/2269533/smoothstack-squarelogo-1595881450009.png",
        locationName: "McLean, VA",
        annualWage: 146610,
        rating: 4.7,
        payPeriod: Payment.ANNUAL,
        payCurrency: Currency.EUR
    },
    {
        jobTitleText: "Junior Software Engineer",
        companyName: "UCLA Health",
        companyLogoUrl: "https://media.glassdoor.com/sql/321780/ucla-health-system-squarelogo.png",
        locationName: "Los Angeles, CA",
        annualWage: 142686,
        rating: 4.1,
        payPeriod: Payment.ANNUAL,
        payCurrency: Currency.BRL
    },
    {
        jobTitleText: "Software Engineer",
        companyName: "Deloitte",
        companyLogoUrl: "https://media.glassdoor.com/sql/2763/deloitte-squarelogo-1481880537463.png",
        locationName: "Dallas, TX",
        annualWage: 122965,
        rating: 4,
        payPeriod: Payment.DAILY,
        payCurrency: Currency.USD
    },
    {
        jobTitleText: "Software Development Engineer II",
        companyName: "Mastercard",
        companyLogoUrl: "https://media.glassdoor.com/sql/3677/mastercard-squarelogo-1468516067022.png",
        locationName: "New York, NY",
        annualWage: 169896,
        rating: 4.2,
        payPeriod: Payment.ANNUAL,
        payCurrency: Currency.EUR
    }
]
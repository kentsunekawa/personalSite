export type CompanyNames = (typeof companyNames)[keyof typeof companyNames]

export const companyNames = {
  altura: "altura",
  foreignCompany: "foreignCompany",
} as const

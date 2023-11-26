export type CompanyNames = (typeof companyNames)[keyof typeof companyNames]

export const companyNames = {
  master: "master",
  masterEn: "masterEn",
  altura: "altura",
  foreignCompany: "foreignCompany",
} as const

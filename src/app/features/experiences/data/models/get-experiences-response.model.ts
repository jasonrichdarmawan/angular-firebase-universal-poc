// TODO: can algoliasearch have optional?
export interface GetExperiencesResponse {
    address: Address
    coverPhoto: string
    title: string
    expertiseLevel: string
    primaryLanguage: string
    slug: string
}

interface Address {
    city?: string
    country: string
}
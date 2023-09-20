export interface ExperienceEntity {
    title: string
    type: string
    category: string
    location: {
        city: string;
        country: string;
    }
    coverPhoto: {
        url: string
    }
}
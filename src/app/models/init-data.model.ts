export interface Section {
    id: string;
    type: string;
    sectionId: string;
    sectionName: string;
    webPublicationDate: Date;
    webTitle: string;
    webUrl: string;
    apiUrl: string;
    isHosted: boolean;
    pillarId: string;
    pillarName: string;
}
export interface SearchResult {
    id: string;
    webTitle: string;
    webUrl: string;
    apiUrl: string;
    editions: Edition[];
    activeSponsorships: ActiveSponsorship[];
}

export interface ApiData {
    status: string;
    userTier: string;
    total: number;
    startIndex: number;
    pageSize: number;
    currentPage: number;
    pages: number;
    orderBy: string;
    results: Section[];
}

export interface ApiResponse{
    response: ApiData;
}


export interface Edition {
    id: string;
    webTitle: string;
    webUrl: string;
    apiUrl: string;
    code: string;
}

export interface SponsorLogoDimensions {
    width: number;
    height: number;
}

export interface HighContrastSponsorLogoDimensions {
    width: number;
    height: number;
}

export interface ActiveSponsorship {
    sponsorshipType: string;
    sponsorName: string;
    sponsorLogo: string;
    sponsorLink: string;
    aboutLink: string;
    sponsorLogoDimensions: SponsorLogoDimensions;
    highContrastSponsorLogo: string;
    highContrastSponsorLogoDimensions: HighContrastSponsorLogoDimensions;
    validFrom: Date;
    validTo: Date;
}

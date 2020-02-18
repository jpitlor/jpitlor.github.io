export interface Location {
    lat: number;
    lon: number;
}

export interface Job {
    company: string
    contentful_id: string
    description: object // It's...complicated
    endDate: string
    endPay: number
    isHourly: boolean
    location: Location
    node_locale: string
    parent: Node
    spaceId: string
    startDate: string
    startPay: number
    title: string
}

export interface TransformedJob {
    company: string
    contentful_id: string
    description: object // It's...complicated
    endDate: Date | null
    endPay: number
    isHourly: boolean
    location: Location
    node_locale: string
    parent: Node
    spaceId: string
    startDate: Date
    startPay: number
    title: string
}

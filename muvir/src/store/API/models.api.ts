export type IEvent = {
    body: string;
    end_unix: number;
    event_id: number;
    images: Array<number>;
    start_unix: number;
    timestamp: number;
    title: string;
    type: string;
}

export type IGetEvents = {
    e: number;
    c: number;
    t: string;
}


export interface Lesson {
    [x: string]: any;
    id?: number;
    description?: string;
    duration?: string;
    seqNo?: number;
    courseId?: number;
    videoId?:string;
}

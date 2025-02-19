
export interface Exam {
    question?: number;
    time?: number;
}

export interface AccordionItemContent {
    title: string,
    available: boolean,
    id: number,
    url: string,
}

export interface AccordionItem {
    head: string;
    description: string;
    content: AccordionItemContent[];
}
export interface VideoItem {
    id?: number;
    title?: string;
    url?: string;
    available?: boolean;
    exam?: {
        question: string;
        time: number;
    };
}
export interface AccordionProps {
    section: AccordionItem[];
    onVideoSelect: (data: { sectionIndex: number; videoIndex: number }) => void;
}


export interface ProgressBarProps {
    percentage: number;
}



export interface Progress {
    played: number;
}


export interface VideoPlayerProps {
    video: Video;
    handler: () => void;
}


export interface Lesson {
    id: number;
    title: string;
    url: string;
    available: boolean;
}

export interface VideoProps {
    id: number;
    url: string;
    available: boolean;
}

export interface Module {
    head: string;
    description?: string;
    content: Lesson[];
}

export interface Video {
    id?: number;
    title: string;
    url: string;
}

export interface Section {
    head: string;
    description?: string;
    content: Lesson[];
}

export interface Comment {
    name: string;
    avatar: string;
    date: string;
    comment: string;
}

export interface Course {
    id: number;
    title: string;
    author: string;
    image: string;
    description: string;
    publishedDate: string;
    duration: string;
    sections: Section[];
    comments: Comment[];
}

export interface CommentItemProps {
    avatar: string;
    comment: string;
    date: string;
    name: string;
}
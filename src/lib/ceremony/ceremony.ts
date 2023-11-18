export interface Participant {
    id: string;
    name: string;
}

export interface NewSection {
    type: 'newSection',
    id: string;
    name: string;
}

export interface CloseSection {
    type: 'closeSection',
    id?: string;
}

export interface Instruction {
    who: string;
    action: string;
    description: string;
}

export interface Rubric {
    type: 'rubric',
    id: string;
    name: string;
    description?: string;
    instructions: Record<string, Instruction>;
}

export interface Ceremony {
    participants: Participant[];
    rubrics: (NewSection | CloseSection | Rubric)[];
}
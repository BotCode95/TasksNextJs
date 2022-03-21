export interface Entry{
    _id: string;
    description: string;
    createdAt: number;
    status: Status;
}

export type Status = 'pending' | 'in-progress' | 'finished'
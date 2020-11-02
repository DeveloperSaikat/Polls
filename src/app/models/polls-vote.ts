export class pollsVote{
    constructor(
    public slug: string,
    public question: string,
    public multiSelect: boolean,
    public votes: number,
    public options: any[]){}
}
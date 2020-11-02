export class pollsStructure{
    constructor(
    public slug: string,
    public question: string,
    public multiSelect: boolean,
    public options: any[]){}
}
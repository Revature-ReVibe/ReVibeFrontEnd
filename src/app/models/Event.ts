export class Event{

    constructor(public name: string, public memberId: number, public memberName: string)
    {
        this.name = name;
        this.memberId = memberId;
        this.memberName = memberName;
    }

    getName()
    {
        return this.name;
    }

    getMemberId()
    {
        return this.memberId;
    }

    getMemberName()
    {
        return this.memberName;
    }
}
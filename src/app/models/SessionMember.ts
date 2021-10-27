export class SessionMember{

    constructor(public name: string, public vibeId: number, public memberId: number, public memberName: string)
    {
        this.name = name;
        this.memberId = memberId;
        this.memberName = memberName;
    }

    getName()
    {
        return this.name;
    }

    getVibeId()
    {
        return this.vibeId;
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
import {Like} from "./Like";

export class Vibe {
  constructor(public vibeId: number, public vibeMessage: string, public vibeLike: number, public likes: Like[], public accountId: number, public date: string, public replyVibes: Vibe[], public vibePic?: string, public parentVibe?: number) {}
}

import { Account } from "./Account";

export class Vibe {
  constructor(public vibeId: number, public poster: Account, public vibeMessage: string, public likes: Account[], public vibePic?: string, public parentVibe?: Vibe) {}
}

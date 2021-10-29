import { Account } from "./Account";
import { Like } from "./Like";

export class Vibe {
  constructor(public vibeId: number, public poster: Account, public vibeMessage: string, public likes: Like[], public vibePic?: string, public parentVibe?: Vibe) {}
}

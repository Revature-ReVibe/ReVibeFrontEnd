import { Account } from "./Account";

export class Vibe {
  constructor(public _vibeId: number, public _poster: Account, public _vibePic: string, public _vibeMessage: string, public _likes: Account[], public _parentVibe: Vibe) {}

  get vibeId(): number {
    return this._vibeId;
  }

  set vibeId(value: number) {
    this._vibeId = value;
  }

  get poster(): Account {
    return this._poster;
  }

  set poster(value: Account) {
    this._poster = value;
  }

  get vibePic(): string {
    return this._vibePic;
  }

  set vibePic(value: string) {
    this._vibePic = value;
  }

  get vibeMessage(): string {
    return this._vibeMessage;
  }

  set vibeMessage(value: string) {
    this._vibeMessage = value;
  }

  get likes(): Account[] {
    return this._likes;
  }

  set likes(value: Account[]) {
    this._likes = value;
  }

  get parentVibe(): Vibe {
    return this._parentVibe;
  }

  set parentVibe(value: Vibe) {
    this._parentVibe = value;
  }
}

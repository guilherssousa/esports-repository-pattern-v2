import { slugify } from "../utils/slugify";

export class Player {
  public readonly slug: string;

  public name: string;
  public full_name: string;
  public nationality: string;

  constructor(data: Omit<Player, "slug">, slug?: string) {
    Object.assign(this, data);

    if (!slug) {
      this.slug = slugify(this.name);
    }
  }
}

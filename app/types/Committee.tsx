import React from "react";
import { Topic } from ".";
import { CommitteeCard } from "../components/CommitteeCard";

export class Committee {
  Name: string;

  Abbr: string;

  Site: string;

  Img: string;

  Size?: number;

  Topics?: Topic[];

  Guide?: string;

  Description?: string;

  Letter?: string;

  constructor(
    name: string,
    abbr: string,
    site: string,
    img: string,
    size?: number,
    topics?: Topic[],
    guide?: string,
    description?: string,
    letter?: string,
  ) {
    this.Name = name;
    this.Abbr = abbr;
    this.Site = site;
    this.Img = img;
    this.Size = size;
    this.Topics = topics;
    this.Guide = guide;
    this.Description = description;
    this.Letter = letter
  }

  getJSX(index?) {
    return <CommitteeCard key={index} committee={this} />;
  }
}

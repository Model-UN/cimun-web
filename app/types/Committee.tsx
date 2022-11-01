import React from 'react';
import {Topic} from ".";
import {CommitteeCard} from "../components/CommitteeCard";

export class Committee {
  Name: string;
  Abbr: string;
  Site: string;
  Img: string;
  Size?: number;
  Topics?: Topic[];
  Guide: string;

  constructor(
      name: string,
      abbr: string,
      site: string,
      img: string,
      size?: number,
      topics?: Topic[],
      guide?: string,
  ) {
    this.Name = name;
    this.Abbr = abbr;
    this.Site = site
    this.Img = img;
    this.Size = size;
    this.Topics = topics;
    this.Guide = guide;
  }

  getJSX() {
    return (
        <CommitteeCard committee={this}/>
    )
  }
}

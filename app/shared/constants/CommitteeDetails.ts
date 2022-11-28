import { Committee, CommitteeConfig, Topic } from "../../types";

export const CommitteeDetails: CommitteeConfig = {
  PD: {
    COMMS: [
      new Committee(
        "United Nations Security Council",
        "UNSC",
        "https://www.un.org/securitycouncil/",
        "united-nations.png",
        0,
        [
          new Topic(1, "Food & Climate Security"),
          new Topic(2, "The Iran Situation"),
          new Topic(3, "The Europe Situation"),
        ],
        null
      ),
      new Committee(
        "UN Environment Assembly (Novice)",
        "UNEA",
        "https://www.unep.org/environmentassembly/",
        "unea.png",
        0,
        [
          new Topic(1, "Powering the Energy Transformation"),
          new Topic(2, "Improving Climate Resiliency"),
          new Topic(3, "Protecting Bio-Diversity in the Ocean Ecosystem"),
        ],
        null
      ),
      new Committee(
        "African Union",
        "AU",
        "https://au.int/",
        "au.png",
        0,
        [
          new Topic(1, "Coping with Energy and Food Shortages"),
          new Topic(2, "DRC Refugee Crisis"),
          new Topic(3, "Protecting Africa's Biodiversity"),
        ],
        null
      ),
    ],
    CABS: [
      new Committee(
        "Cabinet of the United States",
        "USA",
        "https://www.whitehouse.gov/administration/cabinet/",
        "usa.png",
        0,
        [
          new Topic(1, "Israeli Attack on Iranian Facilities"),
          new Topic(2, "Supporting Democracy and Peace in the West"),
          new Topic(3, "The New Climate Normal"),
        ],
        null
      ),
      new Committee(
        "Council of Ministers of the Russian Federation",
        "RUS",
        "http://government.ru/en/ministries/#federal_ministries",
        "russia.png",
        0,
        [
          new Topic(
            1,
            "Adapting to the New Normal in Ukraine & Eastern Europe"
          ),
          new Topic(2, "Pivoting to New Allies in Asia & Africa"),
          new Topic(3, "Surviving the End of Oil & Gas"),
        ],
        null
      ),
      new Committee(
        "Ministries of the People's Republic of China",
        "PRC",
        "http://english.www.gov.cn/",
        "china.png",
        0,
        [
          new Topic(1, "New Friends! (Russia)"),
          new Topic(2, "Presence in Africa"),
          new Topic(3, "Domestic Topic - TBD"),
        ],
        null
      ),
    ],
  },
  HST: {
    COMMS: [
      new Committee(
        "United Nations Security Council",
        "UNSC",
        "https://www.un.org/securitycouncil/",
        "united-nations.png",
        0,
        [
          new Topic(1, "The Conflict Between Iran & Iraq"),
          new Topic(2, "The Situation in Afghanistan"),
          new Topic(3, "Ensuring the Peaceful Use of Outer Space"),
        ],
        null
      ),
      new Committee(
        "United Nations General Assembly",
        "UNGA",
        "https://www.un.org/en/ga/",
        "united-nations.png",
        0,
        [
          new Topic(1, "Ensuring the Peaceful Use of Outer Space"),
          new Topic(
            2,
            "Codifying & Protecting the International Rights of the Child"
          ),
        ],
        null
      ),
      new Committee(
        "Arab League",
        "LAS",
        null,
        "las.png",
        0,
        [
          new Topic(1, "The Conflict Between Iran & Iraq"),
          new Topic(2, "The Situation in Afghanistan"),
          new Topic(
            3,
            "Strengthening Good Neighborliness Between States in" +
              " the Region"
          ),
        ],
        null
      ),
      new Committee(
        "House of Commons of the United Kingdom",
        "",
        "https://www.parliament.uk/business/commons/",
        "bhoc.png",
        0,
        [
          new Topic(1, "Addressing the Domestic Economic Crisis"),
          new Topic(2, "Securing the Homeland Against External Threats"),
        ],
        null
      ),
    ],
    CABS: [
      new Committee(
        "Cabinet of the United States",
        "USA",
        "https://www.whitehouse.gov/administration/cabinet/",
        "usa.png",
        0,
        [
          new Topic(1, "The Conflict Between Iran & Iraq"),
          new Topic(2, "The Situation in Afghanistan"),
          new Topic(3, "Domestic Topic - TBD"),
        ],
        null
      ),
      new Committee(
        "Cabinet of the United Kingtom",
        "UK",
        "http://www.cabinetoffice.gov.uk/",
        "uk.png",
        0,
        [
          new Topic(1, "The Conflict Between Iran & Iraq"),
          new Topic(2, "The Situation in Afghanistan"),
          new Topic(3, "Domestic Topic - TBD"),
        ],
        null
      ),
      new Committee(
        "Council of Ministers of the Soviet Union",
        "USSR",
        "http://government.ru/en/",
        "soviet-union-hst.png",
        0,
        [
          new Topic(1, "The Conflict Between Iran & Iraq"),
          new Topic(2, "The Situation in Afghanistan"),
          new Topic(3, "Domestic Topic - TBD"),
        ],
        null
      ),
      new Committee(
        "Cabinet of Iran",
        "",
        "https://president.ir/en/president/cabinet/",
        "iran.png",
        0,
        [
          new Topic(1, "The Conflict Between Iran & Iraq"),
          new Topic(2, "The Situation in Afghanistan"),
          new Topic(3, "Domestic Topic - TBD"),
        ],
        null
      ),
      new Committee(
        "Council of Ministers of Iraq",
        "",
        "http://www.cabinet.iq/default.aspx",
        "iraq.png",
        0,
        [
          new Topic(1, "The Conflict Between Iran & Iraq"),
          new Topic(2, "The Situation in Afghanistan"),
          new Topic(3, "Domestic Topic - TBD"),
        ],
        null
      ),
    ],
  },
};

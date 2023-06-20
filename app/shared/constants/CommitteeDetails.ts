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
        [],
        "",
        "",
      ),
      new Committee(
        "United Nations General Assembly Plenary",
        "UNGA, Novice Committee",
        "https://www.un.org/en/ga/",
        "united-nations.png",
        0,
        [],
        "",
        "",
      ),
      new Committee(
        "Special Body",
        "Wild Card",
        "",
        "cimun-logo.png",
        0,
        [],
        "",
        "",
      ),
    ],
    CABS: [
      new Committee(
        "Cabinet of the United States",
        "USA",
        "https://www.whitehouse.gov/administration/cabinet/",
        "usa.png",
        0,
        [],
        "",
        "",
      ),
      new Committee(
        "Wild Card",
        "1",
        "",
        "cimun-logo.png",
        0,
        [],
        "",
        "",
      ),
      new Committee(
        "Wild Card",
        "2",
        "",
        "cimun-logo.png",
        0,
        [],
        "",
        "",
      ),
      new Committee(
        "Wild Card",
        "3",
        "",
        "cimun-logo.png",
        0,
        [],
        "",
        "",
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
        [],
        "",
        "",
      ),
      new Committee(
        "United Nations General Assembly",
        "UNGA",
        "https://www.un.org/en/ga/",
        "united-nations.png",
        0,
        [],
        "",
        "",
      ),
      new Committee(
        "United States Senate",
        "",
        "https://www.senate.gov",
        "senate.png",
        0,
        [],
        "",
        "",
      ),
      new Committee(
        "FIFA Executive Committee",
        "",
        "https://www.fifa.com/about-fifa/organisation/fifa-council",
        "fifa.png",
        0,
        [],
        "",
        "",
      ),
    ],
    CABS: [
      new Committee(
        "Cabinet of the United States",
        "USA",
        "https://www.whitehouse.gov/administration/cabinet/",
        "usa.png",
        0,
        [],
        "",
        "",
      ),
      new Committee(
        "State Council of the People's Republic of China",
        "PRC",
        "https://english.www.gov.cn/",
        "china-hst.png",
        0,
        [],
        "",
        "",
      ),
      new Committee(
        "Council of Ministers of the Soviet Union",
        "USSR",
        "http://government.ru/en/",
        "soviet-union-hst.png",
        0,
        [],
        "",
        "",
      ),
      new Committee(
        "Union Council of Ministers of the Republic of India",
        "IND",
        "https://www.india.gov.in/my-government/whos-who/council-ministers",
        "india.png",
        0,
        [],
        "",
        "",
      ),
    ],
  },
};

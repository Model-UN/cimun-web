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
          new Topic(1, "Russia/Ukraine"),
          new Topic(2, "Preventing Future Ideological Conflicts"),
          new Topic(3, "Enforcing Global Digital Borders"),
        ],
        "UNSC - CIMUN XX (PD).pdf",
        "",
      ),
      new Committee(
        "United Nations General Assembly Plenary",
        "UNGA, Novice Committee",
        "https://www.un.org/en/ga/",
        "united-nations.png",
        0,
        [
          new Topic(1, "Promotion of Beneficial AI"),
          new Topic(2, "Combatting the Growing Climate Crisis"),
          new Topic(3, "Preventing Ideological Wars of Expansion"),
        ],
        "UNGA - CIMUN XX (PD).pdf",
        "",
      ),
      new Committee(
        "Chicago City Council",
        "CCC",
        "https://www.chicago.gov/city/en/about/council.html",
        "seal-of-chicago-illinois.svg",
        0,
        [
          new Topic(1, "Public Safety"),
          new Topic(2, "Housing for all Chicagoans"),
          new Topic(3, "Municipal Marketing"),
        ],
        "CCC - CIMUN XX (PD).pdf",
        "",
        "https://docs.google.com/document/d/1nFCFUKim8jJ76KRglIGTcHtHNuIimkk1BCJa2zoAhbs/edit?usp=sharing"      
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
          new Topic(
            1,
            "Supporting the Victims of Ideological Expansionist Warfare",
          ),
          new Topic(2, "Securing a Modernized Automated Economy"),
          new Topic(
            3,
            "Combatting the Spread of Disinnformation & Racial Supremacy",
          ),
        ],
        "US Cab - CIMUN XX (PD).pdf",
        "",
      ),
      new Committee(
        "Cabinet of the People's Republic of China",
        "PRC",
        "",
        "china.png",
        0,
        [
          new Topic(1, "Jumpstarting the Chinese Economy"),
          new Topic(2, "Promoting the Expansionof Chinese Governance"),
          new Topic(3, "Seizing Opportunity Born from Global Conflict"),
        ],
        "PRC Cab - CIMUN XX (PD).pdf",
        "",
      ),
      new Committee(
        "Tencent Corporate Board",
        "TNCT",
        "",
        "tencent-logo.svg",
        0,
        [
          new Topic(1, "Domestic Market Strengthening"),
          new Topic(2, "Development of Technological Independence"),
          new Topic(3, "Strategies for a Globally Assertive Chinese Market"),
        ],
        "TNCT BoD - CIMUN XX (PD).pdf",
        "",
      ),
      new Committee(
        "X Corporate Board",
        "X",
        "",
        "x-logo.svg",
        0,
        [
          new Topic(1, "Consolidation of Elon Musk Subsidiaries"),
          new Topic(2, "Promotion of Global X Influence"),
          new Topic(3, "All Encompassing Personal Utility Tools"),
        ],
        "X BoD - CIMUN XX (PD).pdf",
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
        [
          new Topic(1, "Contending the Emerging Threat of Nuclear Armament"),
          new Topic(
            2,
            "Promoting Peaceful Transitions of Power During Decolonization",
          ),
          new Topic(3, "Forced resettlement and apartheid in South Africa"),
        ],
        "UNSC - CIMUN XX (1962).pdf",
        "",
      ),
      new Committee(
        "United Nations General Assembly",
        "UNGA",
        "https://www.un.org/en/ga/",
        "united-nations.png",
        0,
        [
          new Topic(1, "Contending the Emerging Threat of Nuclear Armament"),
          new Topic(
            2,
            "Promoting Peaceful Transitions of Power During Decolonization",
          ),
          new Topic(3, "Advancement of Women in Developing Countries"),
        ],
        "UNGA - CIMUN XX (1962).pdf",
        "",
      ),
      new Committee(
        "United States Senate",
        "",
        "https://www.senate.gov",
        "senate.png",
        0,
        [
          new Topic(1, "Investing in National Infrastructure and Innovation"),
          new Topic(2, "Civil Rights and Gender Inequality in the Workplace"),
          new Topic(3, "Expanding Trade and Multilateral Cooperation"),
        ],
        "SENATE - CIMUN XX (1962).pdf",
        "",
        "https://docs.google.com/document/d/1bYOmfrtdO98_8AX3W2Y5wDyBr6-AR0jEIaZ2Sx5WZqY/edit?usp=sharing"
      ),
      new Committee(
        "Presidential Commission on the Status of Women",
        "",
        "",
        "cimun-logo.png",
        0,
        [
          new Topic(1, "Women in the Workforce: Labor Standards and Practices"),
          new Topic(2, "Promoting the Civic Empowerment of Women"),
          new Topic(3, "Home and Community: Supporting Mothers and Homemakers"),
        ],
        "PCSW - CIMUN XX (1962).pdf",
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
        [
          new Topic(
            1,
            "Winning the Battle of Influences between Communism and Capitalism",
          ),
          new Topic(2, "Managing Tensions at the Sino-Indian Border"),
        ],
        "USA - CIMUN XX (1962).pdf",
        "",
      ),
      new Committee(
        "State Council of the People's Republic of China",
        "PRC",
        "https://english.www.gov.cn/",
        "china-hst.png",
        0,
        [
          new Topic(
            1,
            "Winning the Battle of Influences between Communism and Capitalism",
          ),
          new Topic(2, "Managing Tensions at the Sino-Indian Border"),
        ],
        "PRC - CIMUN XX (1962).pdf",
        "",
      ),
      new Committee(
        "Council of Ministers of the Union of Soviet Socialist Republics",
        "USSR",
        "http://government.ru/en/",
        "soviet-union-hst.png",
        0,
        [
          new Topic(
            1,
            "Winning the Battle of Influences between Communism and Capitalism",
          ),
          new Topic(2, "Managing Tensions at the Sino-Indian Border"),
        ],
        "USSR - CIMUN XX (1962).pdf",
        "",
      ),
      new Committee(
        "Union Council of Ministers of the Republic of India",
        "IND",
        "https://www.india.gov.in/my-government/whos-who/council-ministers",
        "india.png",
        0,
        [
          new Topic(
            1,
            "Winning the Battle of Influences between Communism and Capitalism",
          ),
          new Topic(2, "Managing Tensions at the Sino-Indian Border"),
        ],
        "IND - CIMUN XX (1962).pdf",
        "",
      ),
    ],
  },
};

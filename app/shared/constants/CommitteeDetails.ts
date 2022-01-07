import {Committee, CommitteeConfig, Topic} from "../../types";

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
            new Topic(
                1,
                "Defusing the Situation in Ethiopia and Preventing" +
                " Regional Instability"
            ),
            new Topic(
                2,
                "The Situation in Bosnia-Herzegovina"
            ),
            new Topic(
                3,
                "Preventing Armament in Space"
            )
          ]
      ),
      new Committee(
          "World Health Organization",
          "WHO",
          "https://www.who.int/",
          "who.svg",
          0,
          [
            new Topic(
                1,
                "Ensuring Equitable Vaccine Distribution"
            ),
            new Topic(
                2,
                "Sexual & Reproductive Health"
            ),
            new Topic(
                3,
                "Air Pollution & Its Effects on Human Health"
            )
          ]
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
                "Rivalry of Giants: Geopolitical Competition With China" +
                " And Our Standing on the Global Stage"
            ),
            new Topic(
                2,
                "Fall of Democracies and the Rise of Authoritarianism"
            ),
            new Topic(
                3,
                "Domestic Topics: Challenging Economy and a Changing" +
                " Social Landscape"
            )
          ]
      ),
      new Committee(
          "Ministries of the People's Republic of China",
          "PRC",
          "http://english.www.gov.cn/",
          "china.png",
          0,
          [
            new Topic(
                1,
                "Rivalry of Giants: Geopolitical Competition With the USA" +
                " and Our Standing on the Global Stage"
            ),
            new Topic(
                2,
                "Projecting Military Strength at Home and Abroad: Expanding" +
                " Our Military Sphere and Fighting Western Aggression"
            ),
            new Topic(
                3,
                "Domestic Topics: A Housing Boom, Avoiding the Fate of" +
                " Japan, and Becoming a Climate Change Leader at Home"
            )
          ]
      ),
      new Committee(
          "Council of Ministers of the Russian Federation",
          "",
          "http://government.ru/en/ministries/#federal_ministries",
          "russia.png",
          0,
          [
            new Topic(
                1,
                "Unrest in Neighboring Countries: Reacting to Events in" +
                " Bosnia-Herzegovina, Belarus, and Ukraine and Protecting" +
                " Russian Interests"
            ),
            new Topic(
                2,
                "Projecting Military Strength at Home and Abroad: Expanding" +
                " Our Military Sphere and Fighting Western Aggression"
            ),
            new Topic(
                3,
                "Domestic Topics: Domestic Unrest, Transitioning to an" +
                " Oil-free World, and the Fragility of Russian Civil Society"
            )
          ]
      ),
      new Committee(
          "Federal Cabinet of Germany",
          "",
          "https://www.bundesregierung.de/breg-en/federal-cabinet",
          "germany.png",
          0,
          [
            new Topic(
                1,
                "The Increasingly Shaky Promise of a European Leadership:" +
                " Refugees and a Rapidly Shrinking Sphere of Influence"
            ),
            new Topic(
                2,
                "Fall of Democracies: Instability in Belarus," +
                " Bosnia-Herzegovina and Germany's Role in Promoting" +
                " Democracy and Stability"
            ),
            new Topic(
                3,
                "Domestic Topics: The Fall of Merkel & the CDU and the New" +
                " Age of The German Green Party"
            )
          ]
      ),
      new Committee(
          "Presidential Cabinet of Turkey",
          "",
          "https://www.tccb.gov.tr/en/cabinet/",
          "turkey.png",
          0,
          [
            new Topic(
                1,
                "Unrest in Bosnia-Herzegovina and Cyprus: Potential" +
                " Benefits and Risks of Changes on the Horizon for Our" +
                " Neighbors"
            ),
            new Topic(
                2,
                "Refugee Crisis: The Complexities and Failures of the Past" +
                " Decade and How to Move Forward With Solving the Refugee Crisis"
            ),
            new Topic(
                3,
                "Domestic Topics: The Collapse of the Lira and the Rise of" +
                " the Turkish Feminist Movement With the Death of the" +
                " Istanbul Accords"
            )
          ]
      ),
      new Committee(
          "Bill & Melinda Gates Foundation",
          "",
          "https://www.gatesfoundation.org/",
          "gates-foundation.png",
          0,
          [
            new Topic(
                1,
                "Ensuring Equitable Vaccine Distribution and Preparing for" +
                " the Next Public Health Crisis"
            ),
            new Topic(
                2,
                "Reinventing Agriculture: The Role of New Technologies and" +
                " Practices in Fighting Global Hunger and Climate Change"
            ),
            new Topic(
                3,
                "Advocating for the Rights of Local Journalists, Activists," +
                " and NGOs to Operate Without Undue Negative Political" +
                " Repercussions"
            )
          ]
      ),
      new Committee(
          "Defense Leadership Forum",
          "USDLF",
          "https://www.usdlf.org/",
          "usdlf.png",
          0,
          [
            new Topic(
                1,
                "Adapting to a Changing Globalized Landscape: The" +
                " Homogenization of the Defense Industry and the Rise of New Tech"
            ),
            new Topic(
                2,
                "Working With Non-state Actors and Controversial State" +
                " Actors: Collaborating Within the Defense Industry to" +
                " Establish Ethical Industry Practices and Navigating the" +
                " Difficult Issue of Neutrality"
            ),
            new Topic(
                3,
                "The New Frontier of Space: R&D, Industry Collaboration, and" +
                " Working With Countries to Promote a New Space Age"
            )
          ]
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
            new Topic(
                1,
                "The Situation in Korea"
            ),
            new Topic(
                2,
                "The Situation in China"
            )
          ]
      ),
      new Committee(
          "United States Senate",
          "",
          "https://www.senate.gov/",
          "senate.png",
          0,
          [
            new Topic(
                1,
                "The United States' Involvement in the Situation in Korea"
            ),
            new Topic(
                2,
                "Protecting the Internal Security of the United States from" +
                " Sabotage and Espionage"
            )
          ]
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
                "Rising Conflict in Korea"
            ),
            new Topic(
                2,
                "The Situation in China"
            )
          ]
      ),
      new Committee(
          "Ministries of the Central People's Government",
          "PRC",
          "http://english.www.gov.cn/",
          "china-hst.png",
          0,
          [
            new Topic(
                1,
                "Rising Conflict in Korea"
            ),
            new Topic(
                2,
                "Managing Relations With the Communist Bloc"
            )
          ]
      ),
      new Committee(
          "Council of Ministers of the Soviet Union",
          "USSR",
          "http://government.ru/en/",
          "soviet-union-hst.png",
          0,
          [
            new Topic(
                1,
                "Rising Conflict in Korea"
            ),
            new Topic(
                2,
                "Managing Relations With the Communist Bloc"
            )
          ]
      ),
      new Committee(
          "Cabinet of North Korea",
          "DPRK",
          "http://www.minzu.rep.kp/?lang=en",
          "dprk.png",
          0,
          [
            new Topic(
                1,
                "Rising Conflict in Korea"
            ),
            new Topic(
                2,
                "Managing Relations With the Communist Bloc"
            )
          ]
      ),
    ],
  },
}

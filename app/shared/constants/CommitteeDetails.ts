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
          new Topic(1, "Food Security in Light of Geopolitical Threats"),
          new Topic(
            2,
            "Addressing the Complex Geopolitical Fallout Resulting from the Situation in Ukraine"
          ),
        ],
        null,
        "The Security Council (UNSC) was formed in 1945 with the founding of the United Nations and since has acted as one of the most powerful organs of the UN. According to the UN charter. It is the responsibility of the Security Council “to maintain international peace and security in accordance with the principles and purposes of the United Nations.” In today’s climate, some of the major issues faced by the Security Council include food insecurity, especially worsened due to recent events and bringing greater attention to the vulnerabilities that ladened the world system, and the violence surrounding the conflict in Ukraine. While the Security Council is focused on solving these issues, competing interests and viewpoints may make it difficult to reach a consensus. Delegates in this body should approach the other members with the spirit of collaboration and dedication that these international crisis’ merit."
      ),
      new Committee(
        "UN Environment Assembly",
        "UNEA, Novice Committee",
        "https://www.unep.org/environmentassembly/",
        "unea.png",
        0,
        [
          new Topic(1, "Powering the Energy Transformation"),
          new Topic(2, "Improving Climate Resiliency"),
          new Topic(3, "Protecting Bio-Diversity in the Ocean Ecosystem"),
        ],
        null,
        "The UN’s Environment Programme was started in 1972 and its central body assembly (the UNEA) started in 2012. For decades, UNEA delegates have been a key voice regarding the human harm that results from environmental degradation and the importance of multilateral efforts to combat the grave issues facing our planet. This 2023 Environmental Assembly must consider the ongoing climate crisis affecting countries worldwide, along with recent energy and food shortages impacted by the conflict in Ukraine. These shortages have reverberated through the supply chain, making plans for sustainable development even less certain and putting a brighter spotlight on the push towards advancing greener energy sources. Smaller nations with less resources have called out for more equity in climate funding and pushed for collective action to mitigate the worst effects of climate change and the subsequent natural disasters that come with that change. In  particular, this committee must confront the key issue areas relating to the way countries are endeavoring to transform their energy sector, strengthening climate resilience in the face of natural and man-made crises, and protecting biodiversity in the ocean."
      ),
      new Committee(
        "African Union",
        "AU",
        "https://au.int/",
        "au.png",
        0,
        [
          new Topic(
            1,
            "Coping with Energy and Food Shortages in a Globalized Market"
          ),
          new Topic(2, "Protecting Africa's Biodiversity"),
          new Topic(
            3,
            "Mitigating the Effects of the Refugee Crisis in the DRC"
          ),
        ],
        "African Union (2023).pdf",
        "Since 2002, the African Union has pushed a vision of “an integrated, prosperous and peaceful Africa, driven by its own citizens and representing a dynamic force in the global arena.” This body has tackled some of the most pressing and long-standing issues facing the continent, including: liberation movements, apartheid, continuing effects of colonialism, and many pressing public health crises. Today, the body faces many more pressing issues and collective and immediate action is required. Climate change is rewriting the status quo for communities and livelihoods worldwide and the African continent is disproportionately affected by the effects of climate change. Conflict areas in the DRC, Ethiopia, South Sudan, Cameroon, and Burkina Faso have created waves of immigrants and internally-displaced persons (IDPs). The most pressing of these areas is the DRC Congo where food insecurity affects about a third of the countries’ population. As part of this body, you are tasked with creating progress and dialogue on these issues. It will not be easy to bring differing voices together and there are often no clear solutions to these issues. However, the current situation is too severe for inaction, and with the right approach, the African Union can yet again show it’s mettle and make the continent a better place."
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
        null,
        "Fresh off a midterm victory, the Biden administration is looking abroad and seeing multiple areas of crisis that demand the urgent attention of this cabinet. First and foremost is the situation in Ukraine, the need to uphold NATO principles and be a counterweight to Russian aggression in Eastern Europe. The US is one of the biggest, if not the biggest, voice upholding NATO solidarity and unity in the face of a Russia that is probing and seeking to recreate its old USSR glory. The NATO alliance has held true for 70 years,even in light of recent isolationist trends domestically. Last year, Russia invaded its neighbor Ukraine, and though many expected Kiev to fall quickly, Ukrainian forces have managed to hold their own and defend their country. Even though Ukraine is not a part of NATO, for both the U.S. and its NATO allies, the country’s recent invasion from Russia can be considered another test of its commitment to NATO and undoubtedly will continue to be hugely significant for American foreign policy. In August 2022, the White House announced an additional $2.98 billion in aid and military aid to top off the over $13 billion sent to Ukraine, but some still argue it is far from enough. <br />" +
          "<br />" +
          "Outside of Ukraine, the Biden administration has sought to lead an international coalition against the PRC’s growing imperialism. PRC, as a rising hegemony keen on promoting authoritarianism, poses potentially the biggest threat to a US-led world order. The PRC has focused on economic diplomacy via its BRI/OBOR initiative to win over key allies in Africa and South America, while building its military capacity to defend Chinese interests in the South China Sea. Particularly troubling is the recent hawkish language by PRC officials with regards to Taiwan, or ROC. While the PRC has always maintained that it intends to reunite the island of Taiwan with the PRC, that language has sharply increased in both tone and urgency over the past year. Military analysts warn that President Xi Jinping could use a potential ROC hostility to distract from protests in Beijing and throughout the country. <br />" +
          "<br />" +
          "Domestically, for the Biden administration, some of the biggest complaints echoing through public opinion have emerged from rising gas prices and inflation. The recent invasion has created shocks through the supply chain, especially leading to food and energy shortages. However, how the United States deals with Russia and China will change the course of history and set precedent in policy for the watchful allies of other foreign states. Will the United States protect its reputation as a beacon of democracy and leader on the world stage, or choke in this pivotal moment?"
      ),
      new Committee(
        "Council of Ministers of the Russian Federation",
        "RUS",
        "http://government.ru/en/ministries/#federal_ministries",
        "russia.png",
        0,
        [],
        null,
        "Welcome to the esteemed cabinet of the Russian Federation, led by our beloved President Vladimir Putin. The main crisis facing this cabinet is the special operation in Ukraine. Recently, Russia has led the to demilitarize Ukraine and prevent their hostilities against innocent Russian civilians. Ukraine has responded by funneling western weapons against our people and banning Russian language and culture from their captive population. Moving forward, the Kremlin must continue to prioritize protecting Russian culture and interests as well as embracing national unity in times of uncertainty and strife.<br />" +
          "<br />" +
          "The execution of the special operation in Ukraine has not been flawless. There have been casualties and great costs to Russian forces. Potentially the biggest long term consequence is a push by Europe to cut off Russian oil and gas from not just their markets but from the international markets. Our most valuable oil and gas industry has adapted by finding new strategic allies outside the west, including the PRC and India. Moving forward, we will need to keep cultivating these new allies, pushing western governments to rethink their illegal economic sanctions against us, and innovating new ways to evade and work under crippling European and American sanctions. In doing so, we can avoid being at the beck and call of countries like the US and Germany.<br />" +
          "<br />" +
          "In September 2022, it was announced that the regions of Donetsk, Kherson, Luhansk and Zaporizhzhia would be annexed into the Russian federation, expanding Russian citizenship to millions. Western cronies have declared this a violation of international law and the UNGA condemned this annexation. This international response reveals the failures of global governance to abide by their own supposed commitments to impartiality and neutrality as well as the anti-russian bias of international bodies. Ukraine’s intention to join NATO remains a concern as well as the potential for Western forces to continue impeding on our sovereign interests.<br />" +
          "<br />" +
          "Although Putin’s approval rating remains high domestically, it would be incorrect to say that public image has not been negatively affected or that civil unrest has not unfolded, including rare protests in our cities and universities as well as considerable emigration. Sanctions from the West have sent shock waves through the supply chain and have reminded us of the importance of economic diversification and independence. In responding to these crises, this cabinet will lead Russia to international glory or to irrelevance."
      ),
      new Committee(
        "Ministries of the People's Republic of China",
        "PRC",
        "http://english.www.gov.cn/",
        "china.png",
        0,
        [],
        "Cabinet of the PRC (2023).pdf",
        "Two hundred years ago, Emperor Napoleon Bonaparte famously remarked that “China is a sleeping giant. Let her sleep for when she wakes up she will move the world.”<br />" +
          "<br />" +
          "Welcome to the cabinet of the People’s Republic of China. General Secretary Xi Jinping has embraced a precedent-breaking third term as president and is counting on this body to lead this country. It is your duty, as Xi Jinping’s trusted advisors in the Politburo and the national security apparatus, to help navigate the PRC through not only one of the most transformative and impactful periods in history, but also through the multiple crises that are currently developing.<br />" +
          "<br />" +
          "Abroad, the PRC Government has paid close attention to the international response to the invasion of Ukraine. The West, in particular the US, has been galvanized by the situation, which has led to a revitalization of NATO. Beijing considers Moscow a strategic ally, and supporting them will benefit us in the long term, yet we are keen on avoiding further military escalation, particularly when it comes to nuclear measures. Furthermore, the arguments deployed by Russia toward ownership of Ukraine are potentially similar to those of the PRC toward the island of Taiwan. The way in which the West responds to Ukraine may portend how they respond to the eventual reunification of China.<br />" +
          "<br />" +
          "Domestically, General Secretary Xi’s third term started with a slate of challenges, in particular when it comes to public obedience. After three years of proving Chinese cultural superiority by enduring stringent anti-Covid-19 measures, protests have erupted across China against the government’s actions to prevent mass contagion. These protests have been unable to be quelled by normal measures. Furthermore, zero COVID policy and a stuttering housing crisis have thrown a wrench in our economic growth. As a new century dawns, it is the responsibility of our Politburo to claim it for the Chinese people, leading us to our proper place in history as the center between heaven and earth."
      ),
      new Committee(
        "ExxonMobil",
        "XOM",
        "https://corporate.exxonmobil.com/",
        "exxonmobil.png",
        0,
        [
          new Topic(1, "Surviving the Post-Oil Energy Future"),
          new Topic(2, "Ensuring Continued Domestic Production and Goodwill"),
        ],
        "ExxonMobil (2023).pdf",
        "2023 marks over two centuries since ExxonMobil first formed in 1999. Over the past few decades it has grown to become one of the world’s largest companies by revenue and a true energy powerhouse. Operations have spread out across globally and our 21 oil refineries make us the second largest oil refinery in the world.<br />" +
          "<br />" +
          "The growth worldwide has not come without challenges or criticism. Oil spills like the 1979 Alaska Exxon Valdez incident and the scourge of climate change activism have put ExxonMobil squarely in the eyes of government regulatory bodies. The company has been accused of working with “shadow groups” to lobby against carbon taxes and key portions of President Biden’s climate agenda. One particularly embarrassing incident involved an ExxonMobil employee caught on a recording describing lawmakers as “fish” that he could reel in. In particular, the Democratic party has become much more skeptical of the oil and gas industry, pushing policies and regulatory actions that would shift America away from oil and renewables. In 2022, Exxon Mobil created a low-carbon alternative energy division that could help increase public image in the Hill but it will take time for this division to grow and make up a part of our energy portfolio.<br />" +
          "<br />" +
          "One of the biggest recent opportunities and challenges to our operations has been the situation in Ukraine. On one hand, the surges in oil and gas prices caused by Russian sanctions have led to healthy profit margins for our products. Q3 2022 saw a record breaking nearly $20B in profit, causing some US lawmakers to push for a windfall tax on energy profits. On the other hand, the situation has emboldened European countries to wean themselves off oil and gas for geopolitical reasons, particularly Germany. If this hastens the end of oil, this body could find itself on the wrong side of history."
      ),
      new Committee(
        "The Janes",
        null,
        null,
        "cimun-logo.png",
        0,
        [],
        "The Janes (2023).pdf",
        "In 1965, Heather Booth created a grassroots movement that directed pregnant women who wanted abortions to a network of underground doctors and activists who were willing to help. They were called the Janes after a “Jane” pseudonym that would identify any member of the group to outsiders. Over the course of the group’s lifetime the activists helped an estimated 11,000 women receive abortions. Eventually, the activists were arrested and the passage of Roe vs Wade eliminated the need for the Janes to continue their underground services. Now in 2023, Roe vs Wade has been repealed by the Supreme Court leaving the fate of reproductive rights to a patchwork of varying state laws and attitudes. Some states have implemented strong legislative rights for codifying and protecting rights to abortion while other states have gone in the other direction and implemented new restrictions and deadlines for legal abortions, or in some cases outlawing them all together. By late August 2022, one in three American women had lost access to legal abortion. Tamar Manasseh, a Chicago South Side activist, relaunched the grassroots group under the name We are Jane. As part of this new grassroots movement, you will face challenges with legal repercussions, public sentiment, logistics, and morality in this new unprecedented age."
      ),
      new Committee(
        "The Al Jazeera Editorial Board",
        null,
        "https://www.aljazeera.com/",
        "al-jazeera.png",
        0,
        [
          new Topic(
            1,
            "Protecting Al-Jazeera's Independence & Breadth of" +
              " Coverage in Light of the Situation in Iran"
          ),
          new Topic(
            2,
            "Charting the Future of Al-Jazeera's International Efforts"
          ),
        ],
        null,
        "Al Jazeera Media Network is an independent news organization funded in part by the Qatari government. It has expanded over the years to include 70 bureaus across the world in several languages and tackling every aspect of international news. It has been commended for its comprehensive video coverage of conflicts across the Middle East and has received a slew of international awards including the Webby award, responsible media of the year award, and scoop of the year Walkley award. The network has not been without criticism, with many saying that even though the network is nominally independent, it still takes a pro-Qatar bias in its reporting. Regardless, Al Jazeera has become the prominent network for many Arab news readers and readers worldwide, and has successfully fought the “west to the rest” format. “West to the rest” format describes the situation where previously many Arab citizens only’ access to media was from the BBC or other European and American media outlets. As part of this board, you will play a pivotal role in continuing to expand the reach and legitimacy of Al Jazeera, spreading trustworthy news across multiple mediums and platforms."
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
          new Topic(1, "The Situation Between Iran & Iraq"),
          new Topic(2, "The Situation in Afghanistan"),
          new Topic(3, "Ensuring the Peaceful Use of Outer Space"),
        ],
        "UNSC (1982).pdf",
        "The United Nations Security Council is considered to be the most powerful body in the United Nations, with binding power others do not possess. Yet, it often faces questions of its efficacy due to the nature of certain countries possessing veto power over its decisions. National representatives in the Security Council must determine how to resolve the world’s most pressing international crises in the face of Cold War divides threatening to stall all progress they make."
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
        "UNGA (1982).pdf",
        "As the international community’s largest, broadest legislative body, the United Nations General Assembly must consider questions of international importance and how they apply to all countries, rather than just those which appear to be the most powerful. In this regard, the UNGA will serve as a platform for all national representatives to make their voices heard and determine how the international community moves forward in the midst of crisis – both those ongoing and soon-to-appear."
      ),
      new Committee(
        "League of Arab States",
        "LAS",
        null,
        "las.png",
        0,
        [
          new Topic(1, "The Situation Between Iran & Iraq"),
          new Topic(2, "The Situation in Afghanistan"),
          new Topic(
            3,
            "Strengthening Good Neighborliness between States in the Region"
          ),
        ],
        null,
        "In 1982, the Arab region serves as a hotbed for several of the world’s most important international crises, including the Iran-Iraq War and the Soviet Union’s invasion of Afghanistan. Representatives of these countries must determine how and if it is possible to navigate these touchstones with regional solidarity knowing the eyes of the world are planted firmly on their actions."
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
        null,
        "The British House of Commons is one of the world’s liveliest legislative bodies, steeped in years of tradition (and just as much heckling). As the United Kingdom faces several crises, both internally and externally, BHOC’s Members of Parliament must represent their constituents and their parties in either working to advance Prime Minister Margaret Thatcher’s agenda – or stop it at any cost."
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
        null,
        "Riding high off an overwhelming victory in 1981, President Ronald Reagan’s Cabinet is now beset with the task of actually governing. With Reagan’s government looking to pass an ambitious domestic agenda while balancing a variety of commitments abroad, the U.S. Cabinet may be looking to achieve their ultimate goal – can the United States win the Cold War for good?"
      ),
      new Committee(
        "Cabinet of the United Kingdom",
        "UK",
        "http://www.cabinetoffice.gov.uk/",
        "uk.png",
        0,
        [],
        "Cabinet of the UK (1982).pdf",
        "With the United Kingdom on the brink of economic crisis and several international conflicts in full force across the world, Prime Minister Margaret Thatcher’s Cabinet must determine how best to navigate the complex tides of domestic governance and international relations. The Cabinet of the United Kingdom must secure its own safety while maintaining its relationships with allies — and perhaps restoring the British reputation across the globe."
      ),
      new Committee(
        "Council of Ministers of the Soviet Union",
        "USSR",
        "http://government.ru/en/",
        "soviet-union-hst.png",
        0,
        [],
        "Cabinet of the Soviet Union (1982).pdf",
        "The Soviet Union invaded Afghanistan in 1979 and, consequently, found itself in the midst of a difficult war that is growing more challenging each day. President Leonid Brezhnev and his closest advisors must determine how best to secure the USSR’s dominance throughout the world while battling the influence of an ever-powerful West."
      ),
      new Committee(
        "Cabinet of Iran",
        "",
        "https://president.ir/en/president/cabinet/",
        "iran.png",
        0,
        [],
        "Cabinet of Iran (1982).pdf",
        "After the 1979 Iranian Revolution, Iran’s theocratic government — controlled by the Ayatollah Ruhollah Khomeini — is shaking off years of Western influence while establishing itself as a regional power. Having fought back Iraq’s invasion to its border and sitting in a position of power, Iran must determine how best to end the Iran-Iraq War: in stalemate or total victory?"
      ),
      new Committee(
        "Council of Ministers of Iraq",
        "",
        "http://www.cabinet.iq/default.aspx",
        "iraq.png",
        0,
        [],
        "Cabinet of Iraq (1982).pdf",
        "President Saddam Hussein’s Iraqi government, seeing opportunity in the Iranian government’s transition, chose to invade its neighbor in 1979. Initially poised for victory, the Iranian army has fought back Iraq’s invasion to its border. On the losing side of the Iran-Iraq War, Saddam and his government must determine how to snatch victory from the jaws of defeat — or else become weakening in the Middle East for years to come."
      ),
    ],
  },
};

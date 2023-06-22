import { Title } from "../infoColumns/infoColumns.styles";
import { Body } from "../../styles/typography";
import { MaterialCard } from "../../app/components/elements";
import { colors } from "../../styles/colors";

const KieraKingAwardDetails = () => {
  return (
    <MaterialCard flexdirection="column" $noAnimate background={colors.ivory}>
      <Title margins="2vw 8rem 0 8rem" line={1.2} align={"left"}>
        Chicago International Model United Nations: Kiera King Delegate Award
      </Title>
      <Body
        margins="2rem 8rem 0.5rem 8rem"
        $mobMargins="1rem 1rem 0 1rem"
        line={1.4}
        align={"justify"}
        size="1.5rem"
      >
        The Kiera King Delegate Award is hereby established by CIMUN in the
        memory of Kiera King, a dedicated Model UN delegate and former member of
        Adlai E. Stevenson Model United Nations. Kiera competed at the high
        school level, participating in both the Illinois high school conference
        circuit as well as competitive national conferences. Kiera’s enthusiasm
        and growth throughout her Model UN career prompted CIMUN to recognize
        delegates with similar experiences so that they might continue their
        competitive and professional legacies with an acknowledgement of those
        who did not receive the same opportunities. The winner of the award will
        receive $500 to support their education or career after completing their
        high school education.
        <br />
        <br />
        Prior to the beginning of CIMUN, team advisors will nominate one student
        from their Model UN team to receive the award. Advisors should consider
        the following qualitative criteria for a Kiera King Delegate Award
        nominee:
        <br />
        <ul>
          <li>
            A Kiera King Delegate award recipient collaborates in committee and
            follows the principles of diplomacy inside and outside of their
            assigned role at the conference. This kind of delegate consistently
            sets an example for the rest of their team, and is accountable for
            their mistakes and missteps.
          </li>
          <li>
            A Kiera King Delegate award recipient demonstrates excellence in
            treating CIMUN as an educational experience and not just a
            competitive one, such as helping newer delegates in committee and on
            their team. They consistently bring a positive energy and new ideas
            to their team.
          </li>
          <li>
            A Kiera King Delegate award recipient has grown in their experience
            doing Model UN, becoming more likely to participate and share their
            ideas. The change and growth in their attitude and Model UN skills
            is identifiable by external observers.
          </li>
        </ul>
        Further,
        <br />
        <ul>
          <li>
            The nominee must be a senior and graduating at the end of the
            academic year in which CIMUN takes place.
          </li>
          <li>
            The nominee must have been enrolled at the high school from which
            they are representing CIMUN and been part of the Model UN team for
            at least two years.
          </li>
        </ul>
        A delegate at CIMUN that meets all the above criteria is eligible to
        receive the Kiera King Award.
        <br />
        <br />
        Yours in MUNDO,
        <br />
        Masha Polupan, Chief of Staff
      </Body>
    </MaterialCard>
  );
};

export default KieraKingAwardDetails;

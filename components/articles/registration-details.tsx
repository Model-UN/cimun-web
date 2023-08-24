import styled from "styled-components";
import Link from "next/link";
import { Title } from "../infoColumns/infoColumns.styles";
import { Body, SubTitle } from "../../styles/typography";
import {
  MaterialCard,
  PillButton,
  PillButtonRow,
} from "../../app/components/elements";
import { colors } from "../../styles/colors";

const PricingTable = styled.table`
  font-size: 1.5rem;
  margin-left: 3vw;
  margin-right: 3vw;
  border: 3px solid ${colors.indigo};
`;

const Pricing = () => {
  return (
    <PricingTable>
      <tr>
        <th scope="col">Item</th>
        <th scope="col">Priority Pricing (Before Nov. 1st)</th>
        <th scope="col">Standard Pricing (On/After Nov. 1st)</th>
      </tr>
      <tr>
        <th scope="row">Delegation Fee</th>
        <td>$200.00</td>
        <td>$250.00</td>
      </tr>
      <tr>
        <th scope="row">Delegate Fee</th>
        <td>$350.00</td>
        <td>$365.00</td>
      </tr>
      <tr>
        <th scope="row">Advisor Fee</th>
        <td>$660.00</td>
        <td>$675.00</td>
      </tr>
      <tr>
        <th scope="row">Advisor Room Share Fee</th>
        <td colSpan={2}>$75.00</td>
      </tr>
      <tr>
        <th scope="row">Delegate Drop Fee</th>
        <td colSpan={2}>$125.00</td>
      </tr>
      <tr>
        <th scope="row">Meal Plan</th>
        <td colSpan={2}>
          Contact{" "}
          <Link href="mailto:sc@cimun.org?subject=CIMUN XIX Meal Plan Inquiry">
            sc@cimun.org
          </Link>{" "}
          if interested.
        </td>
      </tr>
    </PricingTable>
  );
};

const RegistrationDetails = () => {
  return (
    <MaterialCard flexdirection="column" $noAnimate background={colors.ivory}>
      <Title margins="2vw 8rem 0 8rem" line={1.2} align="left">
        Registering for <span className="nowrap">CIMUN XX</span>
      </Title>
      <SubTitle
        color={colors.indigo}
        size="50px"
        margins="0.33vw 8rem 0 8rem"
        line={1.2}
        align="left"
        $mobSize="2.5rem"
      >
        <em>Interested in bringing your school to CIMUN XX?</em>
      </SubTitle>
      <Body
        margins="2rem 8rem 0.5rem 8rem"
        $mobMargins="1rem 1rem 0 1rem"
        line={1.4}
        align="justify"
        size="1.5rem"
      >
        Advisors, you are invited to use the form below to apply your Model UN
        delegation for CIMUN XX!
        <br />
        <br />
        CIMUN XX will be held{" "}
        <strong>
          in-person at the Fairmont Hotel in Chicago, IL from December 7th-10th,
          2023
        </strong>
        !
        <br />
        <br />
        {/* More information for our delegation, advisor, and meal plan pricing can
        be found below.
        <br />
        <br /> */}
      </Body>
      <PillButtonRow>
        <Link href="https://docs.google.com/forms/d/1LfPwbh78TJnkGgwd5_WyGYI8rpbaPsse_Od8Gx56sgI">
          <PillButton selectedColor={colors.carolinaBlue}>
            <br />
            Register Now
            <br />
            <br />
          </PillButton>
        </Link>
      </PillButtonRow>
      {/* <Pricing />
      <Body
        margins="0 8rem 0.5rem 8rem"
        $mobMargins="1rem 1rem 0 1rem"
        line={1.4}
        align="justify"
        size="1.5rem"
      >
        <br />
        <strong>
          Ask us about our CIMUN+<Link href="https://mimun.mx/">MIMUN</Link>{" "}
          discount!
        </strong>
        <br />
        <br />

        <strong>IMPORTANT DATES</strong>
        <ul>
          <li>
            <strong>November 1st</strong> - Priority Registration Deadline
          </li>
          <li>
            <strong>December 16th</strong> - Delegate Drop Deadline
          </li>
          <li>
            <strong>January 11th</strong> - Delegate and Advisor Fees due
          </li>
          <li>
            <strong>January 11th</strong> - Delegate and Hotel room rosters due
          </li>
        </ul>
      </Body> */}
    </MaterialCard>
  );
};

export default RegistrationDetails;

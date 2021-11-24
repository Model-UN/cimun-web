import styled from 'styled-components';
import { breakpoints } from '_app/styles/breakpoints';
import colors from '_app/styles/colors';
import { fonts } from '_app/styles/fonts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  ${breakpoints('width', '', [{ 800: '97.5%' }])};
  justify-content: center;
  margin: 7vh 0;
  ${breakpoints('margin', '', [{ 800: '3vh 0' }])};
  padding: 0;
`;

export const SeggsyInput = styled.input`
  width: 100%;
  height: 56px;
  position: relative;
  padding: 0 16px;
  border: 2px solid ${colors.kindaFadedltGray};
  border-radius: 4px;
  font-family: ${fonts.body}, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  background-color: rgba(255, 255, 255, 0.3);
  color: #282828;
  outline-color: ${colors.primaryBlue};
  transition: 0.3s background-color ease-in-out, 0.3s border-color ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.45);
    border-color: ${colors.ltGray};
  }
`;

export const SeggsySubmit = styled.input`
  width: 25%;
  ${breakpoints('width', '', [{ 800: '75%' }])};
  height: 56px;
  align-self: center;
  margin: 100px 0;
  padding: 0 16px;
  border: none;
  border-radius: 4px;
  font-family: ${fonts.body}, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  background-color: ${colors.primaryBlue};
  color: white;
  transition: 0.5s width ease-in-out;

  &:hover {
    cursor: pointer;
    width: 50%;
  }
`;

export const LongSeggsyInput = styled.textarea`
  width: 100%;
  height: 150px;
  position: relative;
  padding: 8px 16px;
  border: 2px solid ${colors.kindaFadedltGray};
  border-radius: 4px;
  font-family: ${fonts.body}, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  background-color: rgba(255, 255, 255, 0.3);
  color: #282828;
  outline-color: ${colors.primaryBlue};
  transition: 0.3s background-color ease-in-out, 0.3s border-color ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.45);
    border-color: ${colors.ltGray};
  }
`;

export const SelectSeggsyInput = styled.select`
  width: 100%;
  height: 56px;
  position: relative;
  padding: 4px 16px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 2px solid ${colors.kindaFadedltGray};
  border-radius: 4px;
  font-family: ${fonts.body}, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  background-color: rgba(255, 255, 255, 0.3);
  color: #282828;
  outline-color: ${colors.primaryBlue};
  transition: 0.3s background-color ease-in-out, 0.3s border-color ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.45);
    border-color: ${colors.ltGray};
  }
`;

export const CheckySeggsyInput = styled.input`
  width: 32px;
  height: 32px;
  appearance: none;
  -webkit-appearance: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: rgba(255, 255, 255, 0.3);
  border: 2px solid ${colors.kindaFadedltGray};
  border-radius: 4px;
  transition: 0.3s all ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.45);
    border-color: ${colors.ltGray};
  }

  &:active,
  :checked:active {
    background-color: ${colors.fadedPrimaryBlue};
    border: 2px solid ${colors.fadedPrimaryBlue};
  }

  &:checked {
    border: 2px solid ${colors.primaryBlue};
    color: white;
    background-color: ${colors.primaryBlue};
  }

  &:checked:after {
    content: "✓";
    font-family: ${fonts.body}, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    color: white;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 16px;
  height: 16px;
  margin-left: -32px;
  color: ${colors.dkGray};
`;

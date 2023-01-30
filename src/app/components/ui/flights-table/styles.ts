import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const TableContainer = styled.table`
  border-collapse: collapse;
  width: 100%;
  min-width: 830px;
  margin-top: 35px;
`;

export const TableHeader = styled.th`
  color: #95989a;
  font-size: 16px;
  font-weight: 600;
  padding: 12px;
  text-align: start;
`;

export const TableRow = styled.tr`
  :nth-of-type(odd) {
    background: ${({ theme }) => theme.colors.primaryDark};
  }

  :hover > td:last-of-type {
    opacity: 1;
  }
`;

export const TableCeil = styled.td`
  font-size: 18px;
  line-height: 40px;
  padding: 16px 10px;
  transition: .2s ease-out;

  :last-of-type {
    opacity: 0;
  }
`;

export const TableCeilCenter = styled(TableCeil)`
  text-align: center;
`;

export const TermField = styled.span`
  color: #63c745;
  font-weight: 700;
  border: 1px solid #63c745;
  border-radius: 50%;
  display: inline-block;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 35px;
  font-size: 22px;
`;

export const AirlineContainer = styled.div`
  display: flex;
`;

export const AirlineField = styled.div`
  height: 40px;
  text-align: center;
  margin-right: 5px;
`;

export const AirlineLogo = styled.img`
  max-width: 100%;
  max-height: 95%;
  top: 5%;
  position: relative;
  display: inline-block;
`;

export const AirlineName = styled.p`
  margin: 0;
`;

export const TableLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.primary};
`;
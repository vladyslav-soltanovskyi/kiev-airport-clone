import styled from "styled-components";

export const SearchContainer = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  max-width: 720px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;

export const SearchTitle = styled.h2`
  font-size: 70px;
  line-height: 60px;
  font-weight: 300;
  text-transform: uppercase;
`;

export const SearchFormContainer = styled.div`
  margin-top: 24px;
  position: relative;
  overflow: hidden;
`

export const SearchIcon = styled.i`
  width: 44px;
  height: 44px;
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled.input`
  height: 80px;
  font-size: 18px;
  padding-left: 70px;
  padding-right: 220px;
  display: block;
  border: none;
  width: 100%;
  outline: none;
  border-radius: 0 80px 0 0;
`

export const SearchBtn = styled.button`
  width: 200px;
  font-size: 26px;
  text-transform: uppercase;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-weight: 700;
  width: 200px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 26px;
  transition: .3s ease-in-out;
  border-radius: 0 80px 0 0;
  text-align: left;
  padding: 0 25px;
  cursor: pointer;

  :hover {
    border-radius: 0 40px 0 0;
  }
`
import styled from "styled-components";

export const SearchContainer = styled.div`
  padding: 0 10px;
  padding: 10px;
  max-width: 720px;
  width: 100%;
  margin: 0 auto;

  ${({ theme }) => theme.maxMedia.md} {
    padding: 0;
  }
`;

export const SearchTitle = styled.h2`
  font-size: 70px;
  line-height: 60px;
  font-weight: 300;
  text-transform: uppercase;

  ${({ theme }) => theme.maxMedia.lg} {
    line-height: 80px;
    font-size: 60px;
  }

  ${({ theme }) => theme.maxMedia.md} {
    font-size: 35px;
    line-height: 40px;
    padding: 0 10px;
  }
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

  ${({ theme }) => theme.maxMedia.md} {
    width: 30px;
    height: 30px;
    font-size: 20px;
    left: 10px;
  }
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
  transition: .3s ease-in-out;
  background: ${({ theme }) => theme.colors.backgroundLight};
  color: ${({ theme }) => theme.colors.text};

  ::placeholder {
    color: ${({ theme }) => theme.colors.textLight};
  }
  
  ${({ theme }) => theme.maxMedia.lg} {
    height: 60px;
    font-size: 18px;
  }

  ${({ theme }) => theme.maxMedia.md} {
    height: 50px;
    padding: 0 0 0 45px;
    border-radius: 0;
    font-size: 16px;
    width: calc(100%);
  }
`;

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

  ${({ theme }) => theme.maxMedia.lg} {
    width: 170px;
  }

  ${({ theme }) => theme.maxMedia.md} {
    display: none;
  }
`;
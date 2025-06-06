import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(
    343.07deg,
    rgba(132, 59, 206, 0.06) 5.71%,
    rgba(132, 59, 206, 0) 64.83%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0;
  min-height: fit-content;
  scroll-margin-top: 5px;
  @media (max-width: 768px) {
    padding: 20px 0;
    scroll-margin-top: 40px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 10px 0px 100px 0;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

export const ToggleButtonGroup = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin: 22px 0px;
  @media (max-width: 768px) {
    gap: 8px;
  }
`;

export const ToggleButton = styled.div`
  padding: 8px 18px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ active, theme }) =>
    active ? theme.primary + 30 : theme.card};
  border: 1.5px solid ${({ theme }) => theme.primary};
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.primary + 15};
  }

  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 14px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;

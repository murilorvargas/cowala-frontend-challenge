import styled from 'styled-components';

const Container = styled.form`
  width: 100%;
  padding: 48px 240px 60px 240px;

  background: ${props => props.theme.colors.gray100};

  display: flex;
  flex-direction: column;
  justify-content: center;

  > div:nth-child(1) {
    display: flex;
    flex-direction: column;

    > input {
      height: 44px;
      padding: 14px 12px;
    }
  }

  > div:nth-child(2) {
    margin-top: 24px;
    display: flex;

    > div:nth-child(1) {
      width: 100%;
      margin-right: 36px;
      display: flex;
      flex-direction: column;

      > input {
        height: 44px;
        padding: 14px 12px;
      }
    }

    > div:nth-child(2) {
      width: 100%;
      display: flex;
      flex-direction: column;

      > input {
        height: 44px;
        padding: 14px 12px;
      }
    }
  }

  > div:nth-child(3) {
    margin-top: 24px;
    display: flex;
    align-items: flex-end;

    > div:nth-child(1) {
      width: 100%;
      margin-right: 36px;
      display: flex;
      flex-direction: column;

      > input {
        height: 44px;
        padding: 14px 12px;
      }
    }

    > button {
      min-width: 184px;
      height: 44px;
      padding: 12px 28px;
      border: 0 none;

      color: ${props => props.theme.colors.blue800};
      background: ${props => props.theme.colors.cyan500};

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }

  > div:nth-child(4) {
    margin: 60px auto 0 auto;

    > button {
      min-width: 140px;
      height: 44px;
      padding: 12px 36px;
      border: 0 none;

      color: ${props => props.theme.colors.white};
      background: ${props => props.theme.colors.blue800};

      transition: 0.2s;

      &:hover {
        background: ${props => props.theme.colors.cyan500};
      }
    }

    button + button {
      margin-left: 36px;
    }
  }
`;

export default Container;

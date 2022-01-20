import styled from 'styled-components';

const Container = styled.header`
  height: 121px;
  padding: 0 28px;

  display: flex;
  align-items: center;

  background: ${props => props.theme.colors.blue800};

  img:nth-child(1) {
    margin-right: 24px;
  }
`;

export default Container;

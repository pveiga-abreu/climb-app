import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #F5F5F5;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  max-height: 500px;
  background-color: #F5F5F5;
  justify-content: center;
`;

export const ContentHeader = styled.View`
  flex: 0.6;
  background-color: #F5F5F5;
  justify-content: flex-start;
  align-items: center;
`;

export const ContentFooter = styled.View`
  flex: 0.4;
  padding-top: 120px;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.Image`
  width: 250px;
  height: 160px;
`;

export const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
  font-family: 'Poppins';
`;

export const Button = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    padding: 8px;
    border: 1px solid #62A5DF;
    border-radius: 30px;
    width: 40%;
`;

export const ExitButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    padding: 8px;
    width: 40%;
`;

export const TextButton = styled.Text`
    font-size: 20px;
    font-weight: 700;
    font-family: 'Poppins';
    color: #62A5DF;
`;
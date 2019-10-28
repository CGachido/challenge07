import styled from 'styled-components/native';
import { darken } from 'polished';
import colors from '../../styles/colors';

export const Container = styled.View`
  margin: 20px;
`;

export const ProductList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Product = styled.View`
  width: 220px;
  background: #fff;
  padding: 10px;
  border-radius: 4px;
  margin-right: 15px;
`;

export const ProductImage = styled.Image`
  height: 200px;
  width: 200px;
  background: #eee;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
`;

export const ProductPrice = styled.Text`
  margin: 14px 0px;
  font-size: 20px;
  margin-bottom: 14px;
  font-weight: bold;
`;

export const AddButton = styled.TouchableOpacity`
  background: ${colors.primary};
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-top: auto;
`;

export const ProductAmount = styled.View`
  padding: 12px;
  align-items: center;
  flex-direction: row;
  background: ${darken(0.03, colors.primary)};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  margin-left: 4px;
`;

export const AddButtonText = styled.Text`
  margin: 0 auto;
  font-weight: bold;
  color: #fff;
`;

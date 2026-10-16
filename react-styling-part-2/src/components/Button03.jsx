import styled from 'styled-components'

const Button03 = styled.button`
  padding: 10px 20px;
  border-radius: 8px;
  border: 2px solid #6633ba;
  background: ${({ $variant }) =>
    $variant === 'outline' ? 'transparent' : '#6633ba'};
  color: ${({ $variant }) =>
    $variant === 'outline' ? '#6633ba' : 'white'};
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
  &:hover {
    background: ${({ $variant }) =>
      $variant === 'outline' ? '#6633ba' : '#4a2192'};
    color: ${({ $variant }) =>
      $variant === 'outline' ? 'white' : 'white'};
  }
` 

export default Button03

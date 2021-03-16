import React from 'react';
import { Container, Header, BegginingContainer, IconContainer, ChildrenContainer, Label } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function MenuCategory({ icon, label, children, containerStyle, expandable = true, shrunken = true, ...rest }) {

  return (
    <Container style={{containerStyle}}>
      <Header {...rest}>
        <BegginingContainer>
          {icon && icon.name &&
            <IconContainer>
              <Icon
                name={icon.name}
                color={icon.color ? icon.color : '#757575'}
                size={24}
              />
            </IconContainer>
          }
          {label &&
            <Label>{label}</Label>
          }
        </BegginingContainer>
        {expandable &&
          <Icon
            name={shrunken ? 'arrow-down' : 'arrow-up'}
            color='#757575'
            size={24}
          />
        }
      </Header>
      {children && expandable && !shrunken &&
        <ChildrenContainer>
          {children}
        </ChildrenContainer>
      }
    </Container>
  );
}

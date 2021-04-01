import React from 'react';
import { Container, Header, BegginingContainer, IconContainer, ChildrenContainer, Label } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function MenuCategory({ leftIcon, label, children, containerStyle, labelStyle, expandable = true, shrunken = true, ...rest }) {

  const selectIconType = () => {
    switch (leftIcon.name) {
      case 'paw':
        return 'paw'
      case 'info':
        return 'info'
      case 'gear':
        return 'gear'
      default:
        return 'circle'
    }
  } 

  return (
    <Container style={containerStyle}>
      <Header {...rest}>
        <BegginingContainer>
          {leftIcon &&
            <IconContainer>
              <Icon
                name={selectIconType()}
                color={leftIcon.color ? leftIcon.color : '#757575'}
                size={24}
              />
            </IconContainer>
          }
          {label &&
            <Label style={labelStyle}>{label}</Label>
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

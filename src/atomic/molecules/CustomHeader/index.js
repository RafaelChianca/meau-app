import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Fontsome from 'react-native-vector-icons/Fontisto';
import EntIcon from 'react-native-vector-icons/Entypo';
import {
  Container,
  StartContainer,
  MiddleContainer,
  EndContainer,
  Button,
  Label,
  NotificationNumber,
  NotificationContainer,
} from './styles';
import { useNavigation, useNavigationState, } from '@react-navigation/native';
import { useSelector } from 'react-redux';

export default function CustomHeader({ label, showLeftIcon = true, leftIcon = 'back', rightIcon, onPressRightIcon, iconColor = '#434343', ...rest }) {

  const navigation = useNavigation();
  const navInfo = useNavigationState(state => state);
  const { notifications } = useSelector(state => state.profile);

  const buttonPressed = () => {
    if (leftIcon === 'back') {
      if(navigation.canGoBack()) {
        navigation.goBack();
      } else {
        navigation.navigate('Ops');
      }
    } else if (leftIcon === 'menu') {
      navigation.openDrawer();
    }
  }

  const renderLeftIcon = () => {
    switch (leftIcon) {
      case 'back':
        if (navInfo.index !== 0) {
          return <Icon name='arrow-left' color={iconColor} size={24}/>
        } else {
          return <></>
        }
      case 'menu':
        return <Icon name='bars' color={iconColor} size={24}/>
        
      default:
        return <></>
    }
  }

  const renderRightIcon = () => {
    switch (rightIcon) {
      case 'search':
        return <Icon name='search' color={iconColor} size={24}/>
      case 'share':
        return <EntIcon name="share" color="#434343" size={24}/>
      case 'notification':
        return (
          <>
            {notifications && notifications.length > 0 &&
              <NotificationContainer>
                <NotificationNumber>{notifications.length}</NotificationNumber>
              </NotificationContainer>
            }
            <Fontsome name="bell" color="#434343" size={24}/>
          </>
        )
      case 'opt':
         return <Icon name="ellipsis-v" color="#434343" size={24}/>
      default:
        return <></>
    }
  }

  const rightIconPressed = () => {
    if (onPressRightIcon) {
      onPressRightIcon();
    }
  }

  return (
    <Container {...rest}>
      {showLeftIcon &&
        <StartContainer>
          <Button onPress={buttonPressed}>
            {renderLeftIcon()}
          </Button>
        </StartContainer>
      }
      <MiddleContainer>
        <Label numberOfLines={1} adjustsFontSizeToFit>{label}</Label>
      </MiddleContainer>
      <EndContainer>
        <Button onPress={rightIconPressed}>
          {renderRightIcon()}
        </Button>
      </EndContainer>
    </Container>
  );
}
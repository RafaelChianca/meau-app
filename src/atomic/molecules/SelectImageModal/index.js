import React from "react";
import {
  Modal,
  View,
} from "react-native";
import { Container, Body, Header, Title, Background, OptionButton, OptionText } from './styles';
import CustomButton from "../../atoms/CustomButton";


export default function SelectImageModal({visible = false, onClose, selectedTakePicture, selectedGalleryPicture}) {

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={() => {
                onClose()
            }}
        >
            <Container>
                <Background onPress={()=>{onClose()}} />
                <Body>
                    <Header>
                        <Title>Selecione</Title>
                    </Header>
                    <OptionButton
                        onPress={()=>{
                            selectedTakePicture()
                            onClose();
                        }}
                    >
                        <OptionText>Tirar foto</OptionText>
                    </OptionButton>
                    <OptionButton style={{borderBottomWidth: 0}}
                        onPress={()=>{
                            onClose();
                            setTimeout(() => {
                                selectedGalleryPicture()
                            }, 800);
                        }}
                    >
                        <OptionText>Escolher da galeria</OptionText>
                    </OptionButton>
                    <View style={{height: 30}}/>
                </Body>
            </Container>
        </Modal>
     );
};

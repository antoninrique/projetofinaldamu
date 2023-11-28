import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { Text, Avatar, Card, Title, Paragraph } from 'react-native-paper';

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Olá, como posso ajudar?', sender: 'bot' },
  ]);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = async () => {
  if (inputText.trim() === '') return;

  setMessages([...messages, { id: messages.length + 1, text: inputText, sender: 'user' }]);
  setInputText('');

    // fazer uma solicitação para API da OpenAI para obter a resposta do chatbot
    
  }
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <View style={{ flex: 1 }}>
        {messages.map((message) => (
          <Card
            key={message.id}
            style={{
              marginBottom: 8,
              alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start',
            }}
          >
            <Card.Content>
              {message.sender === 'bot' && <Avatar.Icon size={24} icon="robot" />}
              <Paragraph>{message.text}</Paragraph>
            </Card.Content>
          </Card>
        ))}
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          style={{ flex: 1, marginRight: 8, borderWidth: 1, padding: 8, borderRadius: 4 }}
          placeholder="Digite uma mensagem"
          value={inputText}
          onChangeText={(text) => setInputText(text)}
        />
        <Button title="Enviar" onPress={handleSendMessage} />
      </View>
    </View>
  );
};

export default Chat;
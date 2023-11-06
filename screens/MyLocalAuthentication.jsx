import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, TextInput } from "react-native";
// import styles from "../utils/styles";
import * as LocalAuthentication from "expo-local-authentication";
import Header from "../components/Header";

export default function AuthScreen() {
  const [customMessage, setCustomMessage] = useState("");
  const [authAttempts, setAuthAttempts] = useState(0); // Track authentication attempts
  const [timer, setTimer] = useState(null); // Timer for resetting attempts
  const maxAttempts = 3; // Maximum number of authentication attempts allowed
  const cooldownTime = 30000; // 30 seconds cooldown period

  const autenticar = async () => {
    try {
      if (authAttempts >= maxAttempts) {
        alert("Limite de tentativas atingido. Aguarde um momento.");
        return;
      }

      const disponivel = await LocalAuthentication.hasHardwareAsync();
      if (!disponivel) {
        alert("Autenticação biométrica não disponível");
        return;
      }


      const { success, error } = await LocalAuthentication.authenticateAsync({
        promptMessage: customMessage || "Use o Impressao Digital para autenticar",
        fallbackLabel: "Use o código PIN",
      });

      if (success) {
        alert("Autenticado com sucesso");
      } else {
        if (error.code === "E_NOT_AVAILABLE") {
          alert("A autenticação biométrica não está disponível no momento.");
        } else if (error.code === "E_FALLBACK_CANCELLED") {
          alert("O usuário cancelou a autenticação");
        } else if (error.code === "E_USER_FALLBACK") {
          alert("O usuário escolheu usar um código PIN como alternativa.");
        } else {
          alert("Falha na autenticação: " + error.message);
        }
      }

      // Increment the authentication attempts
      setAuthAttempts(authAttempts + 1);

      // Set a timer to reset authentication attempts after the cooldown period
      clearTimeout(timer);
      const newTimer = setTimeout(() => {
        setAuthAttempts(0);
      }, cooldownTime);
      setTimer(newTimer);
    } catch (error) {
      alert("Ocorreu um erro inesperado: " + error.message);
    }
  };

  return (
    <View >
      <Header title="Autenticação" />
      <TextInput
        
        placeholder="Mensagem de autenticação personalizada"
        value={customMessage}
        onChangeText={(text) => setCustomMessage(text)}
      />
      <TouchableOpacity onPress={autenticar} >
        <Text>Autenticar</Text>
      </TouchableOpacity>
    </View>
  ) ;
}
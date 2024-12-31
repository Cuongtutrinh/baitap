import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPhoneValid, setIsPhoneValid] = useState(true);

  const handleContinue = () => {
    if (!validatePhoneNumber(phoneNumber)) {
      setIsPhoneValid(false);
      return;
    }
    setIsPhoneValid(true);
    console.log('Phone number:', phoneNumber);
    // Thực hiện xử lý logic tiếp theo
  };

  const validatePhoneNumber = (number) => {
    const phoneRegex = /^[0-9]{10,15}$/; // Định dạng số điện thoại (10-15 chữ số)
    return phoneRegex.test(number);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.header}>
          <Text style={styles.title}>Đăng nhập</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nhập số điện thoại</Text>
          <Text style={styles.subtitle}>
            Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
          </Text>
          <TextInput
            style={[
              styles.input,
              !isPhoneValid && styles.inputError,
            ]}
            placeholder="Nhập số điện thoại của bạn"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
          />
          {!isPhoneValid && (
            <Text style={styles.errorText}>Số điện thoại không hợp lệ.</Text>
          )}
        </View>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: phoneNumber ? '#007AFF' : '#f2f2f2' }]}
          onPress={handleContinue}
          disabled={!phoneNumber}
        >
          <Text style={[styles.buttonText, { color: phoneNumber ? '#fff' : '#000' }]}>
            Tiếp tục
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
    lineHeight: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
    fontSize: 16,
  },
  inputError: {
    borderBottomColor: '#FF0000',
  },
  errorText: {
    color: '#FF0000',
    fontSize: 14,
    marginTop: 5,
  },
  button: {
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 'auto',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default LoginScreen;
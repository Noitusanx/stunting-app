import React from "react";
import { View, Text, TouchableOpacity, ImageBackground, Platform, TextInput, StyleSheet, KeyboardAvoidingView, ScrollView } from "react-native";

const FormDataPribadi = ({ navigation, route }) => {
  const [name, onChangeName] = React.useState('');
  const [dateBirth, onChangeDateBirth] = React.useState('');
  const [address, onChangeAddress] = React.useState('');
  const [age, onChangeAge] = React.useState('');
  const [childTo, onChangeChildTo] = React.useState('');
  const [pregnancyAge, onChangepregnancyAge] = React.useState('');

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'android' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'android' ? 0 : 20}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <ImageBackground source={require('../img/ellipse.png')} resizeMode="cover" style={styles.image} className=" h-2/3">
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontFamily: 'Poppins_Bold' }} className="text-center text-xl mb-8 text-[#45B3CB]">Masukan Biodata Ibu Hamil</Text>
            </View>

            <View>
              <View style={styles.formContainer}>
                <TextInput onChangeText={onChangeName} value={name} style={{ ...styles.input, fontFamily: "Poppins_Regular" }} placeholder="Nama Ibu" className="rounded-md border-[#C0C0C0]" />
                <TextInput onChangeText={onChangeDateBirth} value={dateBirth} keyboardType="numeric" style={{ ...styles.input, fontFamily: "Poppins_Regular" }} className="rounded-md border-[#C0C0C0]" placeholder="Tanggal Lahir" />
                <TextInput onChangeText={onChangeAddress} value={address} style={{ ...styles.input, fontFamily: "Poppins_Regular" }} placeholder="Alamat" className="rounded-md border-[#C0C0C0]" />
                <TextInput onChangeText={onChangeAge} value={age} style={{ ...styles.input, fontFamily: "Poppins_Regular" }} className="rounded-md border-[#C0C0C0]" placeholder="Umur Kelahiran" />
                <TextInput onChangeText={onChangeChildTo} value={childTo} style={{ ...styles.input, fontFamily: "Poppins_Regular" }} className="rounded-md border-[#C0C0C0]" placeholder="Anak Ke-" />
                <TextInput onChangeText={onChangepregnancyAge} value={pregnancyAge} style={{ ...styles.input, fontFamily: "Poppins_Regular" }} className="rounded-md border-[#C0C0C0]" placeholder="Usia Kehamilan" />
                <TouchableOpacity style={{ backgroundColor: '#45B3CB', paddingVertical: 15, borderRadius: 10 }} className=" mt-5 w-[300]">
                    <Text style={{ color: '#fff', fontFamily: "Poppins_SemiBold" }} className="text-center">Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  formContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  input: {
    width: 300,
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  formLabel: {
    fontSize: 20,
    color: '#fff',
  },
  inputStyle: {
    marginTop: 20,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: '#b9e4c9',
  },
  formText: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: 20,
  },
});

export default FormDataPribadi;

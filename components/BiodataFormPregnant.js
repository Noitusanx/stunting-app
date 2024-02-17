import React, {useState} from "react";
import { View, Text, TouchableOpacity, ImageBackground, Platform, TextInput, StyleSheet, KeyboardAvoidingView, ScrollView } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';


const BiodataFormPregnant = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [name, onChangeName] = React.useState('');
  const [address, onChangeAddress] = React.useState('');
  const [dateBirth, onChangeDateBirth] = React.useState('');
  const [age, onChangeAge] = React.useState('');
  const [childTo, onChangeChildTo] = React.useState('');
  const [pregnancyAge, onChangepregnancyAge] = React.useState('');

  const showDatepicker = () => {
    setShowDatePicker(true);
};

const onChange = (event, selectedDate) => {
if (event.type === 'dismissed') {
  setShowDatePicker(false);
} else {
  const currentDate = selectedDate || date;
  setShowDatePicker(Platform.OS === 'android');
  setDate(currentDate);
  onChangeDateBirth(currentDate.toLocaleDateString());
}
};

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
                <TouchableOpacity onPress={showDatepicker} style={{ ...styles.input, fontFamily: "Poppins_Regular", justifyContent: 'center', alignItems: 'flex-start' }} className="rounded-md border-[#C0C0C0]">
                {!dateBirth ? (
                    <Text style={{ color: '#555', fontFamily: 'Poppins_Regular' }}>Tanggal Lahir</Text>
                ) : (
                    <Text style={{ color: '#000', fontFamily: 'Poppins_Regular' }}>{dateBirth}</Text>
                )}
                </TouchableOpacity>
                {showDatePicker && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode="date"
                    is24Hour={true}
                    display="calendar"
                    onChange={onChange}
                    placeholderText="Tanggal Lahir"
                />
                )}
                <TextInput onChangeText={onChangeAddress} value={address} style={{ ...styles.input, fontFamily: "Poppins_Regular" }} placeholder="Alamat" className="rounded-md border-[#C0C0C0]" />
                <TextInput onChangeText={onChangeAge} value={age} style={{ ...styles.input, fontFamily: "Poppins_Regular" }} className="rounded-md border-[#C0C0C0]" placeholder="Umur Kelahiran" />
                <TextInput onChangeText={onChangeChildTo} value={childTo} style={{ ...styles.input, fontFamily: "Poppins_Regular" }} className="rounded-md border-[#C0C0C0]" placeholder="Anak Ke-" keyboardType="numeric"/>
                <TextInput onChangeText={onChangepregnancyAge} value={pregnancyAge} style={{ ...styles.input, fontFamily: "Poppins_Regular" }} className="rounded-md border-[#C0C0C0]" placeholder="Usia Kehamilan" keyboardType="numeric" />
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

export default BiodataFormPregnant;

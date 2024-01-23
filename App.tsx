import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';

//from validation
import * as Yup from 'yup';
import {Formik} from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'should be min of 4 character.')
    .max(16, 'should be max of 16 character.')
    .required('length is required.'),
});

const App = () => {
  const [password, setPassword] = useState<string | undefined>('');
  const [isPasswordGenerated, setPasswordGenerated] = useState<boolean>(false);
  const [isLowerCase, setLowerCase] = useState<boolean>(true);
  const [isUpperCase, setUpperCase] = useState<boolean>(false);
  const [isNumber, setNumber] = useState<boolean>(false);
  const [isSymbols, setSymbols] = useState<boolean>(false);

  const createPassowrd = (characters: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const charIdx = Math.round(Math.random() * characters.length);
      result += characters.charAt(charIdx);
    }
    console.log(result);
    return result;
  };

  const generatePassowrdString = (passwordLength: number) => {
    let charList = '';
    const CapitalLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const SmallLetter = 'abcdefghijklmnopqrstuvwxyz';
    const specialChar = '`~!@#$%^&*()_-+=';
    const number = 1234567890;

    if (isUpperCase) {
      charList += CapitalLetter;
    }
    if (isLowerCase) {
      charList += SmallLetter;
    }
    if (isNumber) {
      charList += number;
    }
    if (isSymbols) {
      charList += specialChar;
    }

    const passwordResult = createPassowrd(charList, passwordLength);
    setPassword(passwordResult);
    setPasswordGenerated(true);
  };

  const resetPassword = () => {
    setPassword('');
    setPasswordGenerated(false);
    setLowerCase(true);
    setUpperCase(false);
    setNumber(false);
    setSymbols(false);
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>
          <Formik
            initialValues={{passwordLength: ''}}
            validationSchema={PasswordSchema}
            onSubmit={values => {
              generatePassowrdString(+values.passwordLength);
            }}>
            {({
              isValid,
              handleChange,
              handleSubmit,
              touched,
              errors,
              values,
              handleReset,
            }) => (
              <>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Password Generator</Text>
                  </View>
                  <View style={styles.inputColumn}>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.errorText}>
                        {errors.passwordLength}
                      </Text>
                    )}
                    <TextInput
                      style={styles.inputStyle}
                      value={values.passwordLength}
                      onChangeText={handleChange('passwordLength')}
                      placeholder="Ex. 8"
                      keyboardType="numeric"
                    />
                  </View>
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include lowercase</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={isLowerCase}
                    onPress={() => setLowerCase(!isLowerCase)}
                    fillColor="#29AB87"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Uppercase</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={isUpperCase}
                    onPress={() => setUpperCase(!isUpperCase)}
                    fillColor="#fed85c"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Inlcude Number</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={isNumber}
                    onPress={() => setNumber(!isNumber)}
                    fillColor="#c9a0dc"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Symbols</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={isSymbols}
                    onPress={() => setSymbols(!isSymbols)}
                    fillColor="#fc80a5"
                  />
                </View>

                <View style={styles.formActions}>
                  <TouchableOpacity
                    onPress={handleSubmit}
                    disabled={!isValid}
                    style={styles.primaryBtn}>
                    <Text style={styles.primaryBtnTxt}>Generate Passowrd</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      resetPassword();
                      handleReset();
                    }}
                    style={styles.secondaryBtn}>
                    <Text style={styles.primaryBtnTxt}>Reset</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
        {isPasswordGenerated ? (
          <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.subTitle}>Generated: </Text>
            <Text style={styles.description}>Long Press to copy </Text>
            <Text selectable style={styles.generatedPassword}>
              {password}
            </Text>
          </View>
        ) : null}
      </SafeAreaView>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
    color: '#000',
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: 200,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color: '#000',
  },
});

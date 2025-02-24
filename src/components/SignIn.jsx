import { StyleSheet, TextInput, Pressable, View} from 'react-native';
import Text from './Text';
import { useFormik } from 'formik';

const initialValues = {
  username: '',
  password: '',
};

const onSubmit = values => {
  console.log(values)
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  input: {
    height: 50,
    margin: 15,
    marginBottom: 0,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10
  },
  button: {
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 50,
    margin: 15,
    borderRadius: 4,
    padding: 10
  }
});

const SignIn = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username: "
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />
      <TextInput
      style={styles.input}
        placeholder="Password: "
        value={formik.values.password}
        secureTextEntry
        onChangeText={formik.handleChange('password')}
      />
      <Pressable onPress={formik.handleSubmit}>
        <Text fontSize="subheading" fontWeight="bold" color="inverted" bgColor="primary" style={ styles.button }>Login</Text>
      </Pressable>
    </View>
  )
};

export default SignIn;
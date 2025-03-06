import { StyleSheet, Pressable, View} from 'react-native';
import Text from './Text';
import TextInput from './TextInput';
import { useFormik } from 'formik';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn'
import { useNavigate } from 'react-router-native';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required')
})

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
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

export const SignInContainer = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={ styles.container }>
      <TextInput
        error={formik.errors.username}
        placeholder="Username: "
        value={ formik.values.username }
        onChangeText={ formik.handleChange('username') }
      />
      <TextInput
        error={formik.errors.password}
        placeholder="Password: "
        value={ formik.values.password }
        secureTextEntry
        onChangeText={ formik.handleChange('password') }
      />
      <Pressable onPress={formik.handleSubmit}>
        <Text fontSize="subheading" fontWeight="bold" color="inverted" bgColor="primary" style={ styles.button }>Login</Text>
      </Pressable>
    </View>
  )
};

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;
      try {
        const data = await signIn({ username, password });
        navigate('/')
      } catch (e) {
        console.log(e);
      }
  }
  return <SignInContainer onSubmit={ onSubmit } />;
};

export default SignIn;
import { StyleSheet, Pressable, View} from 'react-native';
import Text from './Text';
import TextInput from './TextInput';
import { useFormik } from 'formik';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn'
import useSignUp from '../hooks/useSignUp';
import { useNavigate } from 'react-router-native';

const initialValues = {
    username: '',
    password: '',
    password_confirmation: ''
};

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .min(5, 'Username must be atleast 5 letters long.')
        .max(30, 'Username must be at most 30 letters long.')
        .required('Username is required'),
    password: yup
        .string()
        .min(5, 'Password must be atleast 5 letters long.')
        .max(50, 'Password must be at most 50 letters long.')
        .required('Password is required'),
    password_confirmation: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Password confirmation must match password.')
        .required('Password confirmation is required'),
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

export const SignUpContainer = ({ onSubmit }) => {
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    return (
        <View style={ styles.container }>
        <TextInput
            error={formik.errors.username}
            placeholder="Username"
            value={ formik.values.username }
            onChangeText={ formik.handleChange('username') }
        />
        <TextInput
            error={formik.errors.password}
            placeholder="Password"
            value={ formik.values.password }
            secureTextEntry
            onChangeText={ formik.handleChange('password') }
        />
        <TextInput
            error={formik.errors.password_confirmation}
            placeholder="Password confirmation"
            value={ formik.values.password_confirmation }
            secureTextEntry
            onChangeText={ formik.handleChange('password_confirmation') }
        />
        <Pressable onPress={formik.handleSubmit}>
            <Text fontSize="subheading" fontWeight="bold" color="inverted" bgColor="primary" style={ styles.button }>Sign up</Text>
        </Pressable>
        </View>
    )
};

const SignUp = () => {
    const [signUp] = useSignUp();
    const [signIn] = useSignIn();
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        const { username, password, password_confirmation } = values;
            try {
                const sign_up_response = await signUp({ user : { username, password }});
                const sign_in_response = await signIn({ username, password });
                navigate('/')
            } catch (e) {
                console.log(e);
            }
    }
    return <SignUpContainer onSubmit={ onSubmit } />;
};

export default SignUp;
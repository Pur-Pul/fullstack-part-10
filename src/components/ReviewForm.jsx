import { useFormik } from 'formik';
import * as yup from 'yup';
import { View, StyleSheet, Pressable, useAnimatedValue } from 'react-native';
import TextInput from './TextInput';
import Text from './Text';
import useSubmitReview from '../hooks/useSubmitReview';
import { useNavigate } from 'react-router-native';

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

const ReviewForm = () => {
    const initialValues = {
        ownerName: '',
        repositoryName: '',
        rating: 0,
        text: ''
    };
    const validationSchema = yup.object().shape({
        ownerName: yup
            .string()
            .required('Repository owner is required'),
        repositoryName: yup
            .string()
            .required('Repository is required'),
        rating: yup
            .number()
            .min(0, 'Rating must be more or equal to 0')
            .max(100, 'Rating must be less or equal to 100')
            .required('Rating is required')
            .typeError('Rating must be a number'),
        text: yup
            .string()
    })
    const [submitReview] = useSubmitReview()
    const navigate = useNavigate()
    
    const onSubmit = async (values) => {
        const { ownerName, repositoryName, rating, text } = values;
            try {
                const data = await submitReview({ ownerName, repositoryName, rating: parseInt(rating, 10), text });
                navigate(`/repo/${data.createReview.repositoryId}`)
            } catch (e) {
                console.log(e);
            }
    }
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    return (
        <View style={ styles.container }>
            <TextInput
                error={formik.errors.ownerName}
                placeholder="Repository owner name"
                value={ formik.values.ownerName }
                onChangeText={ formik.handleChange('ownerName') }
            />
            <TextInput
                error={formik.errors.repositoryName}
                placeholder="Repository name"
                value={ formik.values.repositoryName }
                onChangeText={ formik.handleChange('repositoryName') }
            />
            <TextInput
                error={formik.errors.rating}
                placeholder="Rating between 0 and 100"
                keyboardType = 'numeric'
                value={ formik.values.rating }
                onChangeText={ formik.handleChange('rating') }
            />
            <TextInput
                error={formik.errors.text}
                placeholder="Review"
                value={ formik.values.text }
                onChangeText={ formik.handleChange('text') }
                multiline
            />
            <Pressable onPress={formik.handleSubmit}>
                <Text fontSize="subheading" fontWeight="bold" color="inverted" bgColor="primary" style={ styles.button }>Create review</Text>
            </Pressable>
        </View>
    )
};

export default ReviewForm;
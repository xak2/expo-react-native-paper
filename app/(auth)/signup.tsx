import { Formik } from 'formik'
import React from 'react'
import {
  Button,
  Surface,
  TextInput,
  HelperText,
  Text,
} from 'react-native-paper'
import * as Yup from 'yup'

import { styles } from '@/lib/ui'

const SignUp = () => (
  <Surface style={{ ...styles.screen, alignItems: undefined }}>
    <Text variant="headlineLarge">Sign up</Text>
    <Text variant="bodyLarge">Hey there, you look like new here.</Text>

    <Formik
      initialValues={{
        username: '',
        password: '',
        email: '',
        firstName: '',
        lastName: '',
      }}
      onSubmit={(values) => console.log(values)}
      validationSchema={Yup.object().shape({
        username: Yup.string()
          .min(3, 'Too Short!')
          .max(64, 'Too Long!')
          .required('Please enter a username.'),
        password: Yup.string()
          .min(8, 'Too Short! must be at least 8 characters.')
          .max(64, 'Too Long!')
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
            'Must 1 uppercase, 1 lowercase, 1 number and 1 special case character',
          )
          .required('Please enter a password'),
        email: Yup.string().email().required('Please enter an email.'),
        firstName: Yup.string()
          .min(3, 'Too Short!')
          .max(64, 'Too Long!')
          .required('Please enter a first name.'),
        lastName: Yup.string()
          .min(3, 'Too Short!')
          .max(64, 'Too Long!')
          .required('Please enter a last name.'),
      })}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <>
          <Surface elevation={0}>
            <TextInput
              maxLength={64}
              mode="outlined"
              label="Username"
              value={values.username}
              error={!!errors.username}
              onBlur={handleBlur('username')}
              right={64 - values.username.length}
              placeholder="Enter your username..."
              onChangeText={handleChange('username')}
            />
            <HelperText type="error" visible={!!errors.username}>
              {errors.username}
            </HelperText>
          </Surface>

          <Surface elevation={0}>
            <TextInput
              maxLength={64}
              mode="outlined"
              label="Password"
              value={values.password}
              error={!!errors.password}
              onBlur={handleBlur('password')}
              right={64 - values.password.length}
              placeholder="Enter your password..."
              onChangeText={handleChange('password')}
            />
            <HelperText type="error" visible={!!errors.password}>
              {errors.password}
            </HelperText>
          </Surface>

          <Surface elevation={0}>
            <TextInput
              maxLength={64}
              mode="outlined"
              label="Email"
              value={values.email}
              error={!!errors.email}
              onBlur={handleBlur('email')}
              right={64 - values.email.length}
              placeholder="Enter your email..."
              onChangeText={handleChange('email')}
            />
            <HelperText type="error" visible={!!errors.email}>
              {errors.email}
            </HelperText>
          </Surface>

          <Surface elevation={0}>
            <TextInput
              maxLength={64}
              mode="outlined"
              label="First"
              value={values.firstName}
              error={!!errors.firstName}
              onBlur={handleBlur('firstName')}
              right={64 - values.firstName.length}
              placeholder="Enter your first name..."
              onChangeText={handleChange('firstName')}
            />
            <HelperText type="error" visible={!!errors.firstName}>
              {errors.firstName}
            </HelperText>
          </Surface>

          <Surface elevation={0}>
            <TextInput
              maxLength={64}
              mode="outlined"
              label="First"
              value={values.lastName}
              error={!!errors.lastName}
              onBlur={handleBlur('lastName')}
              right={64 - values.lastName.length}
              placeholder="Enter your first name..."
              onChangeText={handleChange('lastName')}
            />
            <HelperText type="error" visible={!!errors.lastName}>
              {errors.lastName}
            </HelperText>
          </Surface>

          <Button mode="contained" onPress={() => handleSubmit()}>
            Sign up
          </Button>
        </>
      )}
    </Formik>
  </Surface>
)

export default SignUp
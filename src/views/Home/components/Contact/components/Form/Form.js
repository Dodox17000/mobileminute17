/* eslint-disable react/no-unescaped-entities */
import React, { useCallback, useState, useRef } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Container from 'components/Container';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import emailjs from 'emailjs-com';

const validationSchema = yup.object({
  firstName: yup
    .string()
    .trim()
    .min(3, 'Veuillez saisir un Nom valide')
    .max(20, 'Veuillez saisir un Nom valide')
    .required('Ce champ est requis'),
  lastName: yup
    .string()
    .trim()
    .min(3, 'Veuillez saisir un Prénom valide')
    .max(20, 'Veuillez saisir un Prénom valide')
    .required('Ce champ est requis'),
  email: yup
    // eslint-disable-next-line no-control-regex
    .string().matches(/^[^@\s]+@[^@\s]+\.[^@\s]+$/, 'Entrez une adresse mail Valide')
    .trim()
    .email('Veuillez saisir une adresse email valide')
    .required('Email requis'),
  phone: yup
    .string().matches(/^((\+|00)33\s?|0)[1-9](\s?\d{2}){4}$/, 'Entrez un numéro Valide')
    .trim()
    .max(10, 'Un numéro comprend 10 chiffres'),
  message: yup
    .string()
    .trim()
    .required('Message requis')
    .min(20, 'Le message doit faire minimun 20 caractères')
    .max(800, 'Le message est trop long (maximun 800 caractères'),
});

const Form = () => {
  const form = useRef();
  const [checked, setChecked] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState('');
  const handleCheck = useCallback((event) => {
    setChecked(event.target.checked);
  }, []);
  const closeAlert = useCallback(() => {
    setAlertOpen(false);
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log('values', values);
      emailjs.sendForm('service_9b8pu5b', 'template_6s1rxk4', form.current, '8ef_qaHr3yeb2EKiE')
        .then((result) => {
          if (result > 0) {
            result = 'ok';
          }
          setAlertOpen(true);
          setAlertSeverity(result === 'ok' ? 'error' : 'success');
        }, (error) => {
          setAlertOpen(true);
          setAlertSeverity('error');
          console.log(error);
        });
      //reset le formik
      resetForm();
    },
  });

  return (
    <Container position={'relative'} zIndex={2}>
      <Grid container spacing={5} paddingRight={0}>
        <Grid item xs={12} md={12}>
          <Box component={LazyLoadComponent} width={1} height="100%" display="flex" alignItems="center">
            <Box padding={{ xs: 3, sm: 3 }} width={1} component={Card} boxShadow={1}>
              <form autoComplete="on" ref={form} onSubmit={formik.handleSubmit} >
                <Grid item xs={12} md={12}>
                  <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Grid item xs={6} md={6}>
                      <Box sx={{ mb: 4, pr: 3 }}>
                        <TextField
                          sx={{ height: 54 }}
                          label="Nom*"
                          variant="outlined"
                          color="primary"
                          size="medium"
                          name="firstName"
                          fullWidth
                          value={formik.values.firstName}
                          onChange={formik.handleChange}
                          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                          helperText={formik.touched.firstName && formik.errors.firstName}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Box>
                        <TextField
                          sx={{ height: 54 }}
                          label="Prénom*"
                          variant="outlined"
                          color="primary"
                          size="medium"
                          name="lastName"
                          fullWidth
                          value={formik.values.lastName}
                          onChange={formik.handleChange}
                          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                          helperText={formik.touched.lastName && formik.errors.lastName}
                        />
                      </Box>
                    </Grid>
                  </Box>
                </Grid>
                <Box display="flex" flexDirection={'column'}>
                  <Box marginBottom={4}>
                    <TextField
                      sx={{ height: 54 }}
                      label="Email*"
                      type="email"
                      variant="outlined"
                      color="primary"
                      size="medium"
                      name="email"
                      fullWidth
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={formik.touched.email && Boolean(formik.errors.email)}
                      helperText={formik.touched.email && formik.errors.email}
                    />
                  </Box>
                  <Box sx={{ marginBottom: 4 }}>
                    <TextField
                      sx={{ height: 54 }}
                      label="Téléphone"
                      type="phone"
                      variant="outlined"
                      color="primary"
                      size="medium"
                      name="phone"
                      fullWidth
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      error={formik.touched.phone && Boolean(formik.errors.phone)}
                      helperText={formik.touched.phone && formik.errors.phone}
                    />
                  </Box>
                  <Box sx={{ marginBottom: 2, minHeight: 140 }}>
                    <TextField
                      multiline
                      rows={5}
                      sx={{ height: '15vh' }}
                      label="Message*"
                      type="message"
                      variant="outlined"
                      color="primary"
                      size="medium"
                      name="message"
                      fullWidth
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      error={formik.touched.message && Boolean(formik.errors.message)}
                      helperText={formik.touched.message && formik.errors.message}
                    />
                  </Box>
                  <Box sx={{ marginBottom: 1 }} >
                    <FormControlLabel
                      checked={checked}
                      control={<Checkbox required />}
                      label="J'accepte les Conditions générales"
                      onChange={handleCheck}
                    />
                  </Box>
                  <Box></Box>
                  <Box>
                    <Button onClick={closeAlert}>
                      <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'bottom' }} autoHideDuration={4000} open={alertOpen}>
                        <Alert severity={alertSeverity} sx={{ display: 'flex', width: 1 }}>
                          {alertSeverity === 'success'
                            ? 'Vous message a été envoyé avec succès !'
                            : 'Un problème est survenu, veuillez réessayer plus tard !'
                          }
                        </Alert>
                      </Snackbar>
                    </Button>
                  </Box>
                  <Box>
                    <Button
                      sx={{ height: 54 }}
                      variant="contained"
                      color="primary"
                      size="medium"
                      fullWidth
                      type="submit"

                    >
                      Envoyer
                    </Button>
                  </Box>
                </Box>
              </form>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Form;

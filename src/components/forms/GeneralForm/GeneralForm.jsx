import React from 'react'
import {
  Grid,
  Typography,
  Button,
  MenuItem,
  Chip,
  Tooltip
} from '@material-ui/core'
import { FieldArray } from 'formik'
import CustomTextField from '../../fields/CustomTextField'
import CustomSelectField from '../../fields/CustomSelectField'
import InfoIcon from '@material-ui/icons/Info'

export default function GeneralForm(props) {
  const { values, setFieldValue } = props
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Typography variant='h5' gutterBottom>
          General Information
        </Typography>
        <Grid item xs={12}>
          <Grid container direction='row' spacing={1}>
            <Grid item>
              <Typography variant='h6' gutterBottom>
                Title
              </Typography>
            </Grid>
            <Grid item>
              <Tooltip title='Title of the Dataset' placement='right'>
                <InfoIcon fontSize='small' color='action' />
              </Tooltip>
            </Grid>
          </Grid>
          <CustomTextField
            fullWidth
            name='title'
            label='Title of the Dataset'
            helperText='* Required'
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container direction='row' spacing={1}>
            <Grid item>
              <Typography variant='h6' gutterBottom>
                Creators
              </Typography>
            </Grid>
            <Grid item>
              <Tooltip title='Dataset Contributors' placement='right'>
                <InfoIcon fontSize='small' color='action' />
              </Tooltip>
            </Grid>
          </Grid>
          <FieldArray name='creators'>
            {(arrayHelpers) => (
              <Grid container item spacing={3} xs={12}>
                <Grid item xs={6}>
                  <CustomTextField
                    fullWidth
                    label='Contributor Name'
                    name='creator.name'
                    helperText='* Required'
                  />
                </Grid>
                <Grid item xs={3}>
                  <CustomSelectField name='creator.type' label='Role'>
                    <MenuItem value='pi'>PI</MenuItem>
                    <MenuItem value='contributor'>Contributor</MenuItem>
                  </CustomSelectField>
                </Grid>
                <Grid container item xs={3} justify='center'>
                  <Button
                    variant='contained'
                    onClick={() => {
                      arrayHelpers.push({
                        type: values.creator.type,
                        name: values.creator.name,
                        id: '' + Math.random()
                      })
                      setFieldValue({
                        creator: {
                          type: 'contributor',
                          name: ''
                        }
                      })
                    }}
                  >
                    Add
                  </Button>
                </Grid>
                <Grid item>
                  {values.creators.map((creator, index) => {
                    return (
                      <Chip
                        key={creator.id}
                        label={creator.name}
                        onDelete={() => arrayHelpers.remove(index)}
                        color='primary'
                      />
                    )
                  })}
                </Grid>
              </Grid>
            )}
          </FieldArray>
        </Grid>
        <Grid item xs={12}>
          <Grid container direction='row' spacing={1}>
            <Grid item>
              <Typography variant='h6' gutterBottom>
                Description
              </Typography>
            </Grid>
            <Grid item>
              <Tooltip title='Description of the Dataset' placement='right'>
                <InfoIcon fontSize='small' color='action' />
              </Tooltip>
            </Grid>
          </Grid>
          <CustomTextField
            fullWidth
            label='Description'
            name='description'
            helperText='* Required'
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container direction='row' spacing={1}>
            <Grid item>
              <Typography variant='h6' gutterBottom>
                Types
              </Typography>
            </Grid>
            <Grid item>
              <Tooltip title='Types' placement='right'>
                <InfoIcon fontSize='small' color='action' />
              </Tooltip>
            </Grid>
          </Grid>
          <FieldArray name='types'>
            {(arrayHelpers) => (
              <Grid container item spacing={3} xs={12}>
                <Grid item xs={9}>
                  <CustomTextField fullWidth placeholder='Type' name='type' />
                </Grid>
                <Grid container item xs={3} justify='center'>
                  <Button
                    variant='contained'
                    onClick={() => {
                      arrayHelpers.push(values.type)
                      setFieldValue({
                        type: ''
                      })
                    }}
                  >
                    Add
                  </Button>
                </Grid>
                <Grid item>
                  {values.types.map((type, index) => {
                    return (
                      <Chip
                        key={'' + Math.random()}
                        label={type}
                        onDelete={() => arrayHelpers.remove(index)}
                        color='primary'
                      />
                    )
                  })}
                </Grid>
              </Grid>
            )}
          </FieldArray>
        </Grid>
        <Grid item xs={12}>
          <Grid container direction='row' spacing={1}>
            <Grid item>
              <Typography variant='h6' gutterBottom>
                Version
              </Typography>
            </Grid>
            <Grid item>
              <Tooltip title='Version number of the dataset' placement='right'>
                <InfoIcon fontSize='small' color='action' />
              </Tooltip>
            </Grid>
          </Grid>
          <CustomTextField fullWidth placeholder='Version' name='version' />
        </Grid>
        <Grid item xs={12}>
          <Grid container direction='row' spacing={1}>
            <Grid item>
              <Typography variant='h6' gutterBottom>
                Licenses
              </Typography>
            </Grid>
            <Grid item>
              <Tooltip title='Dataset Licenses' placement='right'>
                <InfoIcon fontSize='small' color='action' />
              </Tooltip>
            </Grid>
          </Grid>
          <FieldArray name='licenses'>
            {(arrayHelpers) => (
              <Grid container item spacing={3} xs={12}>
                <Grid item xs={9}>
                  <CustomTextField
                    fullWidth
                    placeholder='License'
                    name='license'
                  />
                </Grid>
                <Grid container item xs={3} justify='center'>
                  <Button
                    variant='contained'
                    onClick={() => {
                      arrayHelpers.push(values.license)
                      setFieldValue({
                        type: ''
                      })
                    }}
                  >
                    Add
                  </Button>
                </Grid>
                <Grid item>
                  {values.licenses.map((license, index) => {
                    return (
                      <Chip
                        key={'' + Math.random()}
                        label={license}
                        onDelete={() => arrayHelpers.remove(index)}
                        color='primary'
                      />
                    )
                  })}
                </Grid>
              </Grid>
            )}
          </FieldArray>
        </Grid>
        <Grid item xs={12}>
          <Grid container direction='row' spacing={1}>
            <Grid item>
              <Typography variant='h6' gutterBottom>
                Keywords
              </Typography>
            </Grid>
            <Grid item>
              <Tooltip title='Dataset Keywords' placement='right'>
                <InfoIcon fontSize='small' color='action' />
              </Tooltip>
            </Grid>
          </Grid>
          <FieldArray name='keywords'>
            {(arrayHelpers) => (
              <Grid container item spacing={3} xs={12}>
                <Grid item xs={9}>
                  <CustomTextField
                    fullWidth
                    placeholder='Keyword'
                    name='keyword'
                  />
                </Grid>
                <Grid container item xs={3} justify='center'>
                  <Button
                    variant='contained'
                    onClick={() => {
                      arrayHelpers.push(values.keyword)
                      setFieldValue({
                        type: ''
                      })
                    }}
                  >
                    Add
                  </Button>
                </Grid>
                <Grid item>
                  {values.keywords.map((keyword, index) => {
                    return (
                      <Chip
                        key={'' + Math.random()}
                        label={keyword}
                        onDelete={() => arrayHelpers.remove(index)}
                        color='primary'
                      />
                    )
                  })}
                </Grid>
              </Grid>
            )}
          </FieldArray>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

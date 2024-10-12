import { Button, LinearProgress } from '@mui/material';
import { Box } from '@mui/system';
import { Formik, Form, Field, FieldArray, validateYupSchema, yupToFormErrors } from 'formik';
import { TextField,  } from 'formik-mui';
import { useContext } from 'react';
import { DataContext } from '../../context/Context';
import { object, string, number, array } from 'yup';
import DeleteIcon from '@mui/icons-material/Delete';

export default function GroupForm() {
    const style = { padding: '0.5rem 1rem' }
    const flex = { display: 'flex', justifyContent: "center"}

    const { data } = useContext(DataContext)

    //will throw errors based on wheater or not this schema is true or not
    let groupSchema = object({
      name: string().required("Group name is required").test({
        name: 'isUniqueGroupName',
        message: "Group name was taken already!",
        test: (value) => {
          if(value in data)
            return false
          return true
        }
      }),
      newMember: string(),
      description: string().required(),
      budget: number().required("Budget amount is required").positive().integer(),
      members: array().of(string().required("Name is required")).test({
        name: 'notEmpty',
        message: "You must include at least 1 member.",
        test: ( value ) => {
          return !value.length == 0
        }
      })
      
    });

    return (
        <Formik
          initialValues={{
            name: '',
            newMember: '',
            description: '',
            budget: '',
            members: [],
          }}
          context={data}
          validate={ (value) => {
            try {
              validateYupSchema(value, groupSchema, true, value)
            } catch( err){
              return yupToFormErrors(err)
            }
            return {}
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log("Submited: ", values)
            setSubmitting(false)
          }}
        >
          {({ submitForm, isSubmitting, values, setFieldValue, errors, touched, setErrors, setFieldError,setTouched }) => (
            <Form sx={flex}>
              <Box sx={style}>
                <Field
                  component={TextField}
                  name="name"
                  type="text"
                  label="Group Name"
                  id="name"
                />
              </Box>
              <Box sx={style}>
                <Field
                  component={TextField}
                  name="description"
                  type="text"
                  label="Group Description"
                />render
              </Box>
              <Box sx={style}>
                <Field
                  component={TextField}
                  name="budget"
                  type="number"
                  label="Alloted Budget"
                  id="budget"
                />
              </Box>
              <Box sx={style}>
                <FieldArray name="members">
                  { arrayHelpers => {
                      const members = values.members
                      console.log("errors", errors)
                      return (
                        <Box>
                          { members && members.length > 0
                              ? members.map(( member, index ) => (
                                <Box key={index}>
                                  <Box
                                    name={`members.${index}`}
                                    sx={{ color: 'black' }}
                                  >
                                    {member}
                                  </Box>
                                  <Button 
                                    variant="outlined" 
                                    startIcon={<DeleteIcon />}
                                    onClick={() => arrayHelpers.remove(index)}
                                  >
                                    Delete
                                  </Button>
                                </Box>))
                              : null
                          }
                          <Box>
                           
                            <Field
                              component={TextField}
                              id="newMember"
                              name="newMember"
                              label="New Member"
                              
                              error={touched.members && Boolean(errors.members)}
                              helperText={touched.members && errors.members}
                            />
                            <Button 
                              variant="outlined" 
                              onClick={(obj) => {
                              
                                if(values.newMember.length == 0){
                                  console.log('adding ', values.newMember)
                                  setFieldError('members', 'Cannot add empty name')
                                }
                                else if(values.members.includes( values.newMember)){
                                  setFieldError('members', `${values.newMember} has been added already.`)
                                }
                                else{
                                  console.log('adding ', values.newMember)
                                  arrayHelpers.push(values.newMember)
                                  setFieldValue('newMember', '')
                                }
                              }}
                            >
                              Add Name
                            </Button>
                          </Box>
                        </Box>
                      )
                  }}
                </FieldArray>
              </Box>
              
              {isSubmitting && <LinearProgress />}
              <Box sx={style}>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  onClick={submitForm} 
                >
                  Submit
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      );
}
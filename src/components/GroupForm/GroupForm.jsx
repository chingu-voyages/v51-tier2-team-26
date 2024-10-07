import { Button, LinearProgress, List, ListItem, ListItemText, } from '@mui/material';
import { Box } from '@mui/system';
import { Formik, Form, Field, FieldArray } from 'formik';
import { TextField,  } from 'formik-mui';
import { useContext } from 'react';
import { DataContext } from '../../context/Context';
import { object, string, number } from 'yup';

export default function GroupForm() {
    const style = { padding: '0.5rem 1rem' }
    const flex = { display: 'flex', justifyContent: "center"}

    const { data } = useContext(DataContext)

    //will throw errors based on wheater or not this schema is true or not
    let groupSchema = object({
      name: string().required().test({
        name: 'isUniqueGroupName',
        message: "Group name was taken already!",
        test: (value) => {
          if(value in data)
            return false
          return true
        }
      }),
      description: string().required(),
      budget: number().required().positive().integer(),
      members: yup.array().of(yup.string()).test({
        name: 'isUniqueName',
        message: "Member already exist.",
        test: ( value ) => {
          return !value.find( arrName => arrName == this.parent.name)
        }
      })
    });

    return (
        <Formik
          initialValues={{
            name: '',
            description: '',
            budget: '',
            members: [],
          }}
          context={data}
          validationSchema={ groupSchema }
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false)
          }}
        >
          {({ submitForm, isSubmitting, values }) => (
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
                />
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
              <FieldArray
                name="members"
                render={arrayHelpers => (
                  <Box>
                    {values.members && values.members.length > 0 ? (
                      values.members.map((arrName, index) => (
                        <div key={index}>
                          <Field  name={`arrName.${index}`} />
                          <button
                            type="button"
                            onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                          >
                            -
                          </button>
                          <button
                            type="button"
                            onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
                          >
                            +
                          </button>
                        </div>
                      ))
                    ) : (
                      <button type="button" onClick={() => arrayHelpers.push('')}>
                        {/* show this when user has removed all friends from the list */}
                        Add a friend
                      </button>
                    )}
                    <div>
                      <button type="submit">Submit</button>
                    </div>
                  </Box>
                )}
                />
                <Button> + Member </Button>
              </Box>
              <Box>
                <List>
                  {console.log(values)}
                </List>
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
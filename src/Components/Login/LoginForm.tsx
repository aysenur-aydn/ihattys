
import {useState} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ReactDOM from 'react-dom/client';
import { Switch,Button, Center, Square, Box, AbsoluteCenter } from "@chakra-ui/react"
import { Flex, Text, Spacer } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";


const Demo = () => {
    return (
      <Switch.Root>
        <Switch.HiddenInput />
        <Switch.Control />
        <Switch.Label>Remember me</Switch.Label>
      </Switch.Root>
    )
  }
// Validasyon şeması
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required."),
  password: Yup.string()
    .required("Password is required.")
});

function LoginForm () {
   const[formData, setFormData] = useState<{ [key: string]: any }>({});

    
    /* const handleChange = (event:any) => { 
         const name=event.target.name;
        const value= event.target.value;
    } */
   // Tek satırda obje yazarak düzelttim.
function handleChange (event:any){
        const {name,value} =event.target;
    setFormData ({
        ...formData,
        [name]:value,
    }); }
   const handleSubmit = (event:any) => {
     event.preventDefault();
    console.log(formData);
   }
   const sign = (() => {

   });

return (  
  <>
  <Flex color='white' h="100vh">
  
    {/* <Box bg="green.500" position="relative" width="50%" height="100%" overflow="hidden"> */} 
    
  <Image src='https://img.rolandberger.com/content_assets/content_images/captions/rb_dig_20_001_03_art_305_uam_passenger_drones_0003_it_image_caption_w1280.jpg' 
          alt='City' 
          objectFit="cover"
          />
  
  
    <AbsoluteCenter axis='both' width="50%" >
  <Box 
                   flex="1"
                   bg="#E3B462"
                   p="6"
                   borderRadius="md"
                   boxShadow="lg"
                   maxWidth="400px"
                   textAlign="" 
                    > 

            <form onSubmit={handleSubmit}>  
            <h1>Sign in to Savx</h1>

                <label htmlFor="name">Username:</label> 
                <input type="text"
                       name="username"
                        placeholder="Username"
                        onChange={handleChange}/>
                     
                <label htmlFor="password">Password:</label>
                <input type="password"
                        id="sifre"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}/>
                 
                <Button onClick={sign} type="submit"> Sign in</Button>
                <Demo/>

            </form>       
  </Box>
            </AbsoluteCenter> 
           
</Flex>
            </>    
)
}

export function LoginFormik() {

  const navigate = useNavigate()
  
return (

<Flex align="center" justify="center" height="100vh" bg="gray.100">
      <Box bg="white" p="6" borderRadius="md" boxShadow="lg" width="400px">
        <Text as="h1" fontSize="xl" fontWeight="bold" mb="4">
          Sign in to Savx
        </Text>

        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log("Form Submitted with values:", values);
            setSubmitting(false);
            // navigate("/test");
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              {/* Username Field */}
              <Box mb="4">
                <Field
                  type="text"
                  name="username"
                  placeholder="Username"
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                />
                <ErrorMessage
                  name="username"
                  component="div" />
                  <div style={{color: "red", fontSize: "0.875rem", marginTop: "4px"}}></div>
                
              </Box>

              {/* Password Field */}
              <Box mb="4">
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                />
                <ErrorMessage
                  name="password"
                  component="div" />
                  <div style={{ color: "red", fontSize: "0.875rem" , marginTop:"4px"}}></div>
              </Box>

              {/* Submit Button */}
              <Button
                type="submit"
                colorScheme="blue"
                width="100%"
               loading={isSubmitting}
              >
                Sign in
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Flex>

      //const root = ReactDOM.createRoot(document.getElementById('root'));
      //root.render(LoginForm);
    )
  }
  
export default LoginForm;





 
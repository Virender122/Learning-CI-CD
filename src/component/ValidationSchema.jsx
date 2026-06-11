import * as Yup from 'yup'
export const validationSchema = Yup.object({
    name :Yup.string()
     .required("Name is required"),

    email : Yup.string()
     .required("Email is required"),
     password : Yup.string()
      .min(6,"Minimum 6 lenght required")
      .required("Password is required"),

      confirmPassword : Yup.string()
       .oneOf(
        [Yup.ref("password")],
       " Password must be  same"
       )
       .required("confirm Passwird is required")
})
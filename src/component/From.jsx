import { useFormik } from "formik";
import { validationSchema } from "./ValidationSchema";  
import { useDispatch } from "react-redux";
import { clearuser, setUser } from "./UserSlice";
import { useSelector } from "react-redux";
export function NewForm() {
    const dispatch = useDispatch()
    const data = useSelector((state)=>state.user)
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema,
        onSubmit: (values) => {
            dispatch (setUser(values))
            console.log(values)

        },
        onReset:()=>{
            dispatch(clearuser())
        }
    })
    
    return (
        <>
            <form onSubmit={formik.handleSubmit}   onReset={formik.handleReset}
>
                <h1>Form</h1>
                <div>
                    <span>Name </span>
                    <input
                        type="text"
                        placeholder="Enter Name"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    ></input>
                    {formik.touched.name && formik.errors.name && (
                        <p>{formik.errors.name}</p>
                    )}
                </div>
                <div>
                    <span>Email</span>
                    <input
                        type="email"
                        placeholder="Enter Email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    ></input>
                    {formik.touched.email && formik.errors.email && (
                        <p>{formik.errors.email}</p>
                    )}
                </div>
                <div>
                    <span>Password</span>
                    <input
                        type="Password"
                        placeholder="Enter password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    ></input>
                    {formik.touched.password && formik.errors.password && (
                        <p>{formik.errors.password}</p>
                    )}
                </div>
                <div>
                    <span>Confirm Password</span>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    >
                    </input>
                    {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                        <p>{formik.errors.confirmPassword}</p>
                    )}
                </div>

                <div>
                    <button type="submit" disabled = {!formik.isValid}>Submit</button>
               
                    <button type='reset'>clear</button>
               </div>

            </form>
            <div>
                <h1>form Values</h1>
                <div>{data.name}</div>
                <div>{data.email}</div>
            </div>

        </>
    )
}

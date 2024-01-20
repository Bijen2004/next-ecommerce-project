import { signIn, useSession } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { SubmitHandler, useForm } from "react-hook-form"

type Inputs = {
    email:string
    password:string
}

const Form = ()=>{
    const { data : session } = useSession()

    const params = useSearchParams()
    let callbackUrl = params.get('callbackUrl')||'/'
    const router = useRouter()

    const{
        register,
        handleSubmit,
        formState:{errors,isSubmitting}
    } = useForm<Inputs>({
        defaultValues:{
            email:'',
            password:'',
        },
    })

    useEffect(()=>{
        if(session && session.user){
            router.push(callbackUrl)
        }
    },[callbackUrl,params,router,session])

    const formSubmit:SubmitHandler<Inputs>=async(form)=>{
        const{email,password}=form
        signIn('credentials',{
            email,
            password,
        })
    }
    return(
        <div className="max-w-sm mx-auto card bg-white/10 my-4">
            <div className="card-body">
                <h1 className="card-title">
                    Sign in
                </h1>
            </div>
        </div>
    )

}
export default Form
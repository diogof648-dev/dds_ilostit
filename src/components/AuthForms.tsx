import { FormEventHandler, useState } from "react";
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [userInformations, setUserInformations] = useState({email: "", password: ""})
  const [loginError, setLoginError] = useState("")

  const router = useRouter();

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    try
    {
      const res = await signIn("credentials", {
        email: userInformations.email,
        password: userInformations.password,
        redirect: false
      })

      if(res?.error){ 
        setLoginError(res.error)
        return
      }

      router.replace("/")
    } 
    catch (error)
    {
      setLoginError("Une erreur s'est produite, merci de réssayer plus tard...")
      return
    }
  }

  return (
    <form onSubmit={handleFormSubmit} method="post" className="space-y-4">
        <div className="title text-center text-3xl mb-10">Connexion</div>
        <div className="email">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              value={userInformations.email}
              pattern="[A-Za-z0-9._&percnt;\-]+(@eduvaud.ch)" 
              className="w-full border rounded-md border-gray-200 p-2"
              onChange={
                (e) => {
                  setUserInformations({...userInformations, email: e.target.value})
                }
              }
            />
        </div>
        <div className="password">
            <label htmlFor="password">Mot de passe</label>
            <input 
              type="password" 
              name="password" 
              id="password" 
              value={userInformations.password}
              className="w-full border rounded-md border-gray-200 p-2"
              onChange={
                (e) => {
                  setUserInformations({...userInformations, password: e.target.value})
                }
              }
            />
        </div>
        {
          loginError != "" &&
          <div className="error text-center w-full p-2 bg-red-500 text-white">
            {loginError}
          </div>
        }
        <input type="submit" value="Se connecter" className="w-full cursor-pointer px-2 py-3 bg-primary-400 rounded-md text-white"/>
    </form>
  )
}

const RegisterForm = () => {
  const [userInformations, setUserInformations] = useState({email: "", password: "", passwordConfirmation: ""})
  const [registerFormInformations, setregisterFormInformations] = useState({message: "", error: false})

  const borderIfFalse = userInformations.passwordConfirmation != "" && userInformations.password != userInformations.passwordConfirmation ? "border border-red-500" : "border"
  const textIfFalse = userInformations.passwordConfirmation != "" && userInformations.password != userInformations.passwordConfirmation ? "" : "hidden"
  
  const handleFormSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    const data = {
      email: userInformations.email,
      password: userInformations.password
    }

    await fetch('http://localhost:3000/api/register',{
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function(response) {
      return response.json()
    }).then(function(response) {
      if(response.ok != true){
        setregisterFormInformations({...registerFormInformations, message: response.message, error: true})
        return
      }

      setregisterFormInformations({...registerFormInformations, message: response.message, error: false})
      return
    })
  }

  return (
    <form onSubmit={handleFormSubmit} method="post" className="space-y-4">
      <div className="title text-center text-3xl mb-10">Enregistrement</div>
      <div className="email">
        <label htmlFor="email" className="after:content-['*'] after:ml-px after:text-red-500">Email</label>
        <input 
          type="email" 
          name="email" 
          id="email" 
          pattern="[A-Za-z0-9._&percnt;\-]+(@eduvaud.ch)" 
          className="w-full border rounded-md border-gray-200 p-2 invalid:after:content-['test']"
          onChange={
            (e) => {
              setUserInformations({...userInformations, email: e.target.value})
            }
          }
          required
        />
      </div>
      <div className="password">
        <label htmlFor="password" className="after:content-['*'] after:ml-px after:text-red-500">Mot de passe</label>
        <input 
          type="password" 
          name="password" 
          id="password" 
          className={"w-full rounded-md border-gray-200 p-2 " + borderIfFalse} 
          onChange={
            (e) => {
              setUserInformations({...userInformations, password: e.target.value})
            }
          }
          required
        />
      </div>
      <div className="password-confirm">
        <label htmlFor="password-confirm" className="after:content-['*'] after:ml-px after:text-red-500">Confirmation</label>
        <input 
          type="password" 
          name="password-confirm" 
          id="password-confirm" 
          className={"w-full rounded-md border-gray-200 p-2 " + borderIfFalse} 
          onChange={
            (e) => {
              setUserInformations({...userInformations, passwordConfirmation: e.target.value})
            }
          }
          required
        />
        <p className={"text-red-500 text-sm " + textIfFalse}>Vos 2 mots de passes de ne correspondent pas.</p>
      </div>
      {
          registerFormInformations.message != "" &&
          <div className={"error text-center w-full p-2 text-white" + (registerFormInformations.error == true ? " bg-red-500" : " bg-green-600")}>
            {registerFormInformations.message}
          </div>
        }
      <input type="submit" value="S'enregistrer" className="w-full cursor-pointer px-2 py-3 bg-primary-400 rounded-md text-white"/>
    </form>
  )
}

export { LoginForm, RegisterForm }
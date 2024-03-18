import { useState } from "react";

const LoginForm = () => {
  return (
    <form action="" method="post" className="space-y-4">
        <div className="title text-center text-3xl mb-10">Connexion</div>
        <div className="email">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              pattern="(?![_.-])((?![_.-][_.-])[\w.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}" 
              className="w-full border rounded-md border-gray-200 p-2"
            />
        </div>
        <div className="password">
            <label htmlFor="passwd">Mot de passe</label>
            <input type="password" name="passwd" id="passwd" className="w-full border rounded-md border-gray-200 p-2"/>
        </div>
        <input type="submit" value="Se connecter" className="w-full cursor-pointer px-2 py-3 bg-primary-400 rounded-md text-white"/>
    </form>
  )
}

const RegisterForm = () => {
  const [passwd, setPasswd] = useState("");
  const [passwdConfirm, setPasswdConfirm] = useState("");

  const borderIfFalse = passwdConfirm != "" && passwd != passwdConfirm ? "border border-red-500" : "border"
  const textIfFalse = passwdConfirm != "" && passwd != passwdConfirm ? "" : "hidden"
  
  return (
    <form action="" method="post" className="space-y-4">
      <div className="title text-center text-3xl mb-10">Enregistrement</div>
      <div className="email">
        <label htmlFor="email" className="after:content-['*'] after:ml-px after:text-red-500">Email</label>
        <input 
          type="email" 
          name="email" 
          id="email" 
          pattern="(?![_.-])((?![_.-][_.-])[\w.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}" 
          className="w-full border rounded-md border-gray-200 p-2 invalid:after:content-['test']"
          required
        />
      </div>
      <div className="password">
        <label htmlFor="passwd" className="after:content-['*'] after:ml-px after:text-red-500">Mot de passe</label>
        <input 
          type="password" 
          name="passwd" 
          id="passwd" 
          className={"w-full rounded-md border-gray-200 p-2 " + borderIfFalse} 
          onChange={(e) => {setPasswd(e.target.value)}}
          required
        />
      </div>
      <div className="password-confirm">
        <label htmlFor="passwd-confirm" className="after:content-['*'] after:ml-px after:text-red-500">Confirmation</label>
        <input 
          type="password" 
          name="passwd-confirm" 
          id="passwd-confirm" 
          className={"w-full rounded-md border-gray-200 p-2 " + borderIfFalse} 
          onChange={(e) => {setPasswdConfirm(e.target.value)}}
          required
        />
        <p className={"text-red-500 text-sm " + textIfFalse}>Vos 2 mots de passes de ne correspondent pas.</p>
      </div>
      <input type="submit" value="S'enregistrer" className="w-full cursor-pointer px-2 py-3 bg-primary-400 rounded-md text-white"/>
    </form>
  )
}

export { LoginForm, RegisterForm }
'use client'
 
import { useSearchParams } from 'next/navigation'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LoginForm, RegisterForm } from '@/components/AuthForms'

const tabs = [
  {
    title: "Se connecter",
    value: "login",
    form: <LoginForm/>
  },
  {
    title: "S'enregistrer",
    value: "register",
    form: <RegisterForm/>
  }
]

const Auth = () => {
  const searchParams = useSearchParams()
  const requestedForm : string | null = searchParams.get("r")

  return (
    <div className="Auth mt-10">
      <div className="content">
        <Tabs defaultValue={requestedForm != "login" && requestedForm != "register" ? "login" : requestedForm} className='w-5/12 mx-auto flex justify-center flex-col'>
          <TabsList className='w-full bg-gray-100'>
            {
              tabs.map((tab) => (
                <TabsTrigger value={tab.value} key={tab.value} className='w-1/2'>{tab.title}</TabsTrigger>
              ))
            }
          </TabsList>
          {
            tabs.map((tab) => (
              <TabsContent value={tab.value} key={tab.value} className='py-6 px-2 border rounded-md'>{tab.form}</TabsContent>
            ))
          }
        </Tabs>
      </div>
    </div>
  )
}
export default Auth
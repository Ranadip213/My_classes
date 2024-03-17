import MyClassLogo from '@/app/ui/myclass-logo';
import LoginForm from '@/app/ui/login-form';
 
export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px]  bg-sky-100 flex-col rounded-3xl space-y-2.5 p-4 mt-16 md:mt-0">
        <div className="flex h-20 w-full items-end rounded-lg text-white bg-indigo-500 p-3 md:h-32 ">
          
            <MyClassLogo />
          
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
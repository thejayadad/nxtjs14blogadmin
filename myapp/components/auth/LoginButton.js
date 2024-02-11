'use client'
import { useRouter } from "next/navigation";


const LoginButton = ({ children, mode = "redirect", asChild }) => {
  const router = useRouter();

  const onClick = () => {
    router.push("/auth/login");
  };

  if(mode === 'modal'){
    return (
     <>
     modal
     </>
    )
  }

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};

export default LoginButton;

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
 const [isLodding, setIsLodding] = useState(true);
 const { isSignedIn } = useUser();
const router = useRouter();

useEffect(() => {
  if (isSignedIn === false) {
    router.replace("/login");
  }else{
    setIsLodding(false);
  }
}, [isSignedIn, router]);
  
if (isLodding) {
  return <div>Loading...</div>;
}

return <div>{children}</div>;
};

export default AuthGuard;

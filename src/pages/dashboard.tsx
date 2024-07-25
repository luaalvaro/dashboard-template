import React, { useState } from "react";
import Head from "next/head";
import Button from "@/components/Button";

const AuthPage = () => {
  const [session, setSession] = useState(true);
  const handleLogout = async () => {};
  return (
    <div>
      {session ? (
        <div className="flex min-h-screen flex-1 flex-col justify-center bg-[#010101] px-6 py-12 text-white lg:px-8">
          <Head>
            <title>GZAPPY - FAZER LOGIN</title>
          </Head>

          <div className="mx-auto mt-8 w-full max-w-[388px] rounded bg-[#f2f2f2] p-3 text-black md:p-8">
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight">
              Olá, seja bem vindo ao Dashboard
            </h2>
          </div>

          <div className="max-w-[230px] mx-auto mt-4">
            <Button label="Sair" onClick={handleLogout} />
          </div>
        </div>
      ) : (
        <>Carregando...</>
      )}
    </div>
  );
};

export default AuthPage;

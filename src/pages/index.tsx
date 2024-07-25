import React, { useState } from "react";
import Head from "next/head";
import Button from "@/components/Button";
import { account, ID } from "@/models/appwrite";
import { useRouter } from "next/router";

const AuthPage = () => {
  const router = useRouter();
  const [isRegistering, setIsRegistering] = useState(false);
  const [isLogining, setIsLogiging] = useState(false);
  const [form, setForm] = React.useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleRegister = async () => {
    console.log(form);

    try {
      setIsRegistering(true);
      const created = await account.create(
        ID.unique(),
        form.email,
        form.password,
        form.fullname
      );

      console.log(created);
    } catch (error) {
      console.log(error);
    } finally {
      setIsRegistering(false);
    }
  };

  const handleSubmit = async () => {
    console.log(form);

    try {
      setIsLogiging(true);
      const session = await account.createEmailPasswordSession(
        form.email,
        form.password
      );

      return router.push("/dashboard");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLogiging(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center bg-[#010101] px-6 py-12 text-white lg:px-8">
      <Head>
        <title>GZAPPY - FAZER LOGIN</title>
      </Head>

      <div className="mx-auto mt-8 w-full max-w-[388px] rounded bg-[#f2f2f2] p-3 text-black md:p-8">
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight">
          Fazer login na sua conta
        </h2>

        <div className="mt-8 flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="fullname"
              className="block text-sm font-medium leading-6"
            >
              Seu Nome
            </label>

            <input
              id="fullname"
              name="fullname"
              type="fullname"
              autoComplete="fullname"
              className="block w-full rounded-md border-0 p-3 py-1.5 shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              value={form.fullname}
              onChange={(e) => setForm({ ...form, fullname: e.target.value })}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6"
            >
              Seu email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="block w-full rounded-md border-0 p-3 py-1.5 shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6"
            >
              Sua senha
            </label>

            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              className="block w-full rounded-md border-0 p-3 py-1.5 shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            />
          </div>

          <div className="mt-3 flex gap-4">
            <Button
              label="Registrar"
              variant="secondary"
              onClick={handleRegister}
              isLoading={isRegistering}
              isDisabled={isRegistering}
            />
            <Button
              label="Acessar"
              variant="primary"
              onClick={handleSubmit}
              isLoading={isLogining}
              isDisabled={isLogining}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;

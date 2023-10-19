"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import loginImage from "../../assets/Login-pana.svg"
import Image from "next/image";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "@/schemas/signin";
import { useUserloginMutation } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import { storeUserInfo } from "@/services/auth.service";

type FormValues = {
  id: string;
  password: string;
};

const SignInPage = () => {
  const [userlogin] = useUserloginMutation();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const res = await userlogin({...data}).unwrap();
      // console.log(res);

      if (res?.accessToken) {
        router.push("/");
      }
      storeUserInfo({ accessToken: res?.accessToken });

    } catch (err: any) {
      console.error(err.message);
    }
  };
  return (
    <div className="min-h-screen grid md:grid-cols-2 grid-cols-1 items-center px-5">
      <div className="mx-auto">
        <Image src={loginImage} alt="login" width={500} />
      </div>
      <div>
        <h1 className="text-3xl font-semibold uppercase">Sign-In</h1>
        <div>
          <Form submitHandler={onSubmit} resolver={yupResolver(signInSchema)}>
            <div>
              <FormInput
                name="email"
                type="text"
                label="Email"
                placeholder="Your email"
                required
                className="md:w-3/4"
              />
            </div>
            <div>
              <FormInput
                name="password"
                type="password"
                label="Password"
                placeholder="Your password"
                required
                className="md:w-3/4"
              />
            </div>
            <button
              type="submit"
              className="btn md:w-3/4 mt-5 bg-cBlue text-white hover:bg-cOrange"
            >
              SignIn
            </button>
          </Form>
        </div>
        <p className="mt-5">
          Don&apos;t have any account? Please{" "}
          <Link href="/signup" className="text-cBlue font-semibold">
            Signup
          </Link>{" "}
          here.
        </p>
      </div>
    </div>
  );
};

export default SignInPage;

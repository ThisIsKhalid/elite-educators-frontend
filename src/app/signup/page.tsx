"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import loginImage from "../../assets/Sign up-pana.svg";
import Image from "next/image";
import Link from "next/link";
import { signupSchema } from "@/schemas/signup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";

type FormValues = {
  name: string;
  email: string;
  password: string;
  profileImgUrl: string;
  phoneNumber: string;
};

const SignUpPage = () => {
  const router = useRouter()

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      // if(data.email){
      //   router.push('/home')
      // }
      console.log(data);
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
        <h1 className="text-3xl font-semibold uppercase">Sign-Up</h1>
        <div>
          <Form submitHandler={onSubmit} resolver={yupResolver(signupSchema)}>
            <div>
              <FormInput
                name="name"
                type="text"
                label="Name"
                placeholder="Your name"
                required
                className="md:w-3/4"
              />
            </div>
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
            <div>
              <FormInput
                name="profileImgUrl"
                type="file"
                label="Profile Image URL"
                placeholder="Your profile image url"
                required
                className="md:w-3/4"
              />
            </div>
            <div>
              <FormInput
                name="phoneNumber"
                type="text"
                label="Phone Number"
                placeholder="Your phone number"
                required
                className="md:w-3/4"
              />
            </div>
            <button
              type="submit"
              className="btn md:w-3/4 mt-5 bg-cBlue text-white hover:bg-cOrange"
            >
              SignUp
            </button>
          </Form>
        </div>
        <p className="mt-5">
          Already have an account? Please{" "}
          <Link href="/signin" className="text-cBlue font-semibold">
            Signin
          </Link>{" "}
          here.
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;

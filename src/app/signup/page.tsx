"use client";

import { useUserSignupMutation } from "@/redux/api/authApi";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import loginImage from "../../assets/Sign up-pana.svg";
import { storeUserInfo } from "@/services/auth.service";

type FormValues = {
  name: string;
  email: string;
  password: string;
  phonenumber: string;
};

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const [userSignup] = useUserSignupMutation();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const res = await userSignup({ ...data }).unwrap();
      // console.log(res);

      if (res?.accessToken) {
        router.push("/home");
      }
      storeUserInfo({ accessToken: res?.accessToken });
      

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2 grid-cols-1 items-center px-5">
      <div className="mx-auto">
        <Image src={loginImage} alt="login" width={500} />
      </div>
      <div>
        <h1 className="text-3xl font-semibold uppercase">Sign-Up</h1>
        <div className="my-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-2">
              <label className="label">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="border border-cBlack input focus:outline focus:outline-cOrange focus:border-none lg:w-3/4 w-full"
                {...register("name", { required: true })}
              />
              <p>{errors.name && <span>This field is required</span>}</p>
            </div>

            <div className="mb-2">
              <label className="label">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="border border-cBlack input focus:outline focus:outline-cOrange focus:border-none lg:w-3/4 w-full"
                {...register("email", { required: true })}
              />
              <p>{errors.email && <span>This field is required</span>}</p>
            </div>

            <div className="mb-2">
              <label className="label">Password</label>
              <input
                type="password"
                placeholder="Your Password"
                className="border border-cBlack input focus:outline focus:outline-cOrange focus:border-none lg:w-3/4 w-full"
                {...register("password", {
                  required: "This field is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
              />
              <p>{errors.password && <span>{errors.password.message}</span>}</p>
            </div>

            <div className="mb-3">
              <label className="label">Phone Number</label>
              <input
                type="text"
                placeholder="Your Phone Number"
                className="border border-cBlack input focus:outline focus:outline-cOrange focus:border-none lg:w-3/4 w-full"
                {...register("phonenumber", { required: true })}
              />
              <p>{errors.phonenumber && <span>This field is required</span>}</p>
            </div>

            <button
              type="submit"
              className="btn md:w-3/4 bg-cBlue text-white hover:bg-cOrange"
            >
              Signup
            </button>
          </form>
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

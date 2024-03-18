import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import { FaUser } from "react-icons/fa";
import LabelIcons from "@/Components/LabelIcons";
import { MdEmail } from "react-icons/md";
import { PiLockKeyFill } from "react-icons/pi";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <LabelIcons>
                        <FaUser />
                        <InputLabel htmlFor="name" value="Name" />
                    </LabelIcons>

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full placeholder:text-sm"
                        placeholder="your name"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <LabelIcons>
                        <MdEmail />
                        <InputLabel htmlFor="email" value="Email" />
                    </LabelIcons>

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full placeholder:text-sm"
                        placeholder="your email"
                        autoComplete="username"
                        onChange={(e) => setData("email", e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <LabelIcons>
                        <PiLockKeyFill />
                        <InputLabel htmlFor="password" value="Password" />
                    </LabelIcons>

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full placeholder:text-sm"
                        placeholder="password"
                        autoComplete="new-password"
                        onChange={(e) => setData("password", e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <LabelIcons>
                        <PiLockKeyFill />
                        <InputLabel
                            htmlFor="password_confirmation"
                            value="Confirm Password"
                        />
                    </LabelIcons>

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full placeholder:text-sm"
                        placeholder="confirm password"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="mt-4 flex items-center justify-center">
                    <PrimaryButton
                        className={`btn btn-block ms-4 ${
                            processing ? "hidden" : "block"
                        }`}
                        disabled={processing}
                    >
                        Register
                    </PrimaryButton>

                    {processing && (
                        <span className="loading loading-ring loading-lg block"></span>
                    )}
                </div>
                <h1 className="mt-4 text-center text-xs">
                    Do you have an account?{" "}
                    <Link href="/login" className="font-bold">
                        Login
                    </Link>
                </h1>
            </form>
        </GuestLayout>
    );
}

import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import { MdEmail } from "react-icons/md";
import { PiLockKeyFill } from "react-icons/pi";
import LabelIcons from "@/Components/LabelIcons";

export default function Login({ status }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <div>
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
                        placeholder="haniffathan@example.com"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData("email", e.target.value)}
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
                        placeholder="*******"
                        className="mt-1 block w-full placeholder:text-sm"
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4 flex items-center">
                    <Checkbox
                        name="remember"
                        checked={data.remember}
                        onChange={(e) => setData("remember", e.target.checked)}
                    />
                    <label
                        className="flex cursor-pointer items-center"
                        htmlFor="checkbox"
                    >
                        <span className="ms-2 text-sm text-gray-600 dark:text-gray-400">
                            Remember me
                        </span>
                    </label>
                </div>

                <div className="mt-4 flex items-center justify-center">
                    <PrimaryButton
                        className={`btn btn-block ms-4 ${
                            processing ? "hidden" : "block"
                        }`}
                        disabled={processing}
                    >
                        Log in
                    </PrimaryButton>

                    {processing && (
                        <span className="loading loading-ring loading-lg block"></span>
                    )}
                </div>

                <div className="mt-4 flex items-center justify-center text-xs">
                    <h1>
                        Don't have an account?{" "}
                        <Link href="/register" className="font-bold">
                            Register
                        </Link>
                    </h1>
                </div>
            </form>
        </GuestLayout>
    );
}

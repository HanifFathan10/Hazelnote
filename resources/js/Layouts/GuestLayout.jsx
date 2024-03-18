import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-primary">
            <h1 className="text-3xl lg:text-4xl font-roboto">
                Welcome to{" "}
                <span className="font-jetBrains font-semibold">Hazelnote</span>
            </h1>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-secondary shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}

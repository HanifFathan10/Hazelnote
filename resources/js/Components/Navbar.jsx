import React from "react";
import { Link, router, useForm } from "@inertiajs/react";

const Navbar = ({ auth }) => {
    const { post } = useForm();

    const showModal = (e) => {
        e.preventDefault();
        document.getElementById("my_modal_5").showModal();
    };

    const handleLogout = () => {
        try {
            post(route("logout"), {
                preserveScroll: true,
                onSuccess: () => router.visit("/login"),
            });
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    return (
        <div className="navbar mx-auto max-w-[1536px] bg-primary">
            <div className="flex-1">
                <Link className="px-6 font-jetBrains text-xl" href="/">
                    Hazelnote
                </Link>
            </div>
            <div className="flex-none gap-2">
                <h1 className="hidden text-lg md:block">
                    Welcome back,{" "}
                    <span className="font-bold uppercase">
                        {auth.user.name}
                    </span>
                </h1>
                <div className="dropdown dropdown-end">
                    <button
                        tabIndex={0}
                        type="button"
                        className="avatar btn btn-circle btn-ghost"
                    >
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="/svg/profile.svg"
                            />
                        </div>
                    </button>
                    <ul
                        tabIndex={0}
                        className="menu dropdown-content menu-sm z-[1] mt-3 w-52 gap-2 rounded-box bg-base-100 px-2 shadow"
                    >
                        <li>
                            <Link
                                className="btn justify-between"
                                href="/profile"
                            >
                                Profile
                                <span className="badge badge-accent">New</span>
                            </Link>
                        </li>
                        <li>
                            <button
                                className="btn justify-start"
                                onClick={showModal}
                                type="button"
                            >
                                Logout
                            </button>
                            <dialog
                                id="my_modal_5"
                                className="modal modal-bottom flex items-center justify-center sm:modal-middle"
                            >
                                <div className="modal-box">
                                    <h3 className="text-lg font-bold text-error">
                                        Stop!!
                                    </h3>
                                    <p className="py-4">Yakin mau logout?</p>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            <button
                                                className="btn btn-error"
                                                onClick={handleLogout}
                                            >
                                                Logout
                                            </button>
                                        </form>
                                        <form method="dialog">
                                            <button className="btn">
                                                Cancel
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

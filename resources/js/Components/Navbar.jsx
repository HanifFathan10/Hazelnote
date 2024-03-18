import { Link } from "@inertiajs/react";
import React from "react";

const Navbar = ({ auth }) => {
    const showModal = (e) => {
        e.preventDefault();
        document.getElementById("my_modal_5").showModal();
    };
    const closeModal = (e) => {
        e.preventDefault();
        document.getElementById("my_modal_5").close();
    };
    const handleLogout = () => {
        try {
            axios.post("/logout");
            window.location.href = "/login";
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };
    return (
        <div className="navbar bg-primary">
            <div className="flex-1">
                <Link className="px-6 font-jetBrains text-xl" href="/">
                    Hazelnote
                </Link>
            </div>
            <div className="flex-none gap-2">
                <h1 className="text-lg">
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
                                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
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
                            <div className="flex w-full items-center justify-center">
                                <dialog
                                    id="my_modal_5"
                                    className="modal modal-bottom sm:modal-middle"
                                >
                                    <div className="modal-box">
                                        <h3 className="text-lg font-bold text-error">
                                            Stop!!
                                        </h3>
                                        <p className="py-4">
                                            Yakin mau logout?
                                        </p>
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
                                                <button
                                                    className="btn"
                                                    onClick={closeModal}
                                                >
                                                    Cancel
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

import Navbar from "@/Components/Navbar";
import React from "react";

export const NoteLayout = ({ children, auth }) => {
    return (
        <header className="w-full">
            <Navbar auth={auth} />
            <main className="mx-auto flex w-full max-w-[1536px] bg-slate-700">
                {children}
            </main>
        </header>
    );
};

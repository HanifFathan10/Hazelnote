import Priority from "@/Components/Priority";
import { useDate, useTime } from "@/Hooks/useDate";
import { Link } from "@inertiajs/react";
import React from "react";

const Task = ({ slug, created_at, title, note }) => {
    return (
        <div className="h-28 w-full rounded-xl bg-secondary p-4 shadow-md shadow-secondary transition duration-500 hover:translate-y-2">
            <Link
                href={`/notes/${slug}`}
                className="flex flex-col justify-between gap-2"
            >
                <div className="flex items-center justify-between">
                    <h1 className="font-bold md:text-lg">
                        {useDate(created_at)}
                    </h1>
                    <Priority note={note} />
                </div>
                <div className="justfy-between flex items-center">
                    <h2 className="font-roboto text-lg font-bold">{title}</h2>
                </div>
                <h3 className="text-end font-jetBrains text-[10px] font-extralight md:text-xs">
                    <span>Dibuat pukul : </span>
                    {useTime(created_at)}
                </h3>
            </Link>
        </div>
    );
};

export default Task;

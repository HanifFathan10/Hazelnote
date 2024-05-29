import { useDate } from "@/Hooks/useDate";
import { Head, Link } from "@inertiajs/react";
import { CiCirclePlus } from "react-icons/ci";
import Task from "./Note/patrials/Task";
import { NoteLayout } from "@/Layouts/NoteLayout";
import React from "react";
import Pagination from "@/Components/Pagination";

export default function Welcome(props) {
    return (
        <React.Fragment>
            <Head title="Homepage" key="homepage" />

            <NoteLayout auth={props.auth}>
                <section className="grid w-full grid-flow-col gap-8 p-4 md:px-10 md:py-8 lg:px-14">
                    <div className="flex w-full grid-cols-7 flex-col gap-4">
                        <form className="w-full max-w-xl" action="/">
                            <label
                                htmlFor="default-search"
                                className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Search
                            </label>
                            <div className="relative">
                                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                                    <svg
                                        className="h-4 w-4 text-gray-500 dark:text-gray-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="search"
                                    name="search"
                                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    placeholder="Search Note...."
                                    required
                                />
                            </div>
                        </form>

                        <div className="flex items-center justify-between rounded-full bg-primary px-6 py-3 text-white shadow-md shadow-secondary">
                            <h1 className="font-jetBrains text-lg font-bold lg:text-xl">
                                {useDate()}
                            </h1>
                            <Link href="/notes/create">
                                <CiCirclePlus size="38px" />
                            </Link>
                        </div>
                        {props.note.data.length == 0 ? (
                            <div className="flex w-full flex-col items-center gap-4">
                                <img
                                    src="/images/not-found-cat.jpg"
                                    alt="cat"
                                    width={20}
                                    height={20}
                                    loading="lazy"
                                    className="h-80 w-80"
                                />
                                <h1 className="text-center font-roboto text-lg font-bold leading-10 text-[#eaeaea]">
                                    Belum ada note nihh, bikin dulu sana!!
                                </h1>
                            </div>
                        ) : (
                            <React.Fragment>
                                {props.note.data.map((note, i) => {
                                    return (
                                        <Task
                                            created_at={note.created_at}
                                            slug={note.slug}
                                            note={note}
                                            title={note.title}
                                            key={i}
                                        />
                                    );
                                })}
                            </React.Fragment>
                        )}
                        <Pagination note={props.note} />
                    </div>
                </section>
            </NoteLayout>
        </React.Fragment>
    );
}

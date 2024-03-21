import { useDate } from "@/Hooks/useDate";
import { Head, Link } from "@inertiajs/react";
import { CiCirclePlus } from "react-icons/ci";
import Task from "./Note/patrials/Task";
import { NoteLayout } from "@/Layouts/NoteLayout";

export default function Welcome(props) {
    return (
        <>
            <Head title="Homepage" key="homepage" />

            <NoteLayout auth={props.auth}>
                <section className="grid w-full grid-flow-col gap-8 p-4 md:px-10 md:py-8 lg:px-14">
                    <div className="flex w-full grid-cols-7 flex-col gap-4">
                        <div className="flex items-center justify-between rounded-full bg-primary px-6 py-3 text-white shadow-md shadow-secondary">
                            <h1 className="font-jetBrains text-lg font-bold lg:text-xl">
                                {useDate()}
                            </h1>
                            <Link href="/notes/create">
                                <CiCirclePlus size="38px" />
                            </Link>
                        </div>
                        {props.note.length === 0 ? (
                            <div className="m-auto w-full">
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
                            <>
                                {props.note.map((note, i) => {
                                    return (
                                        <Task
                                            created_at={note.created_at}
                                            id={note.id}
                                            note={note}
                                            title={note.title}
                                            key={i}
                                        />
                                    );
                                })}
                            </>
                        )}
                    </div>
                </section>
            </NoteLayout>
        </>
    );
}

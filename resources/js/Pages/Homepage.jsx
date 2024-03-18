import Navbar from "@/Components/Navbar";
import Priority from "@/Components/Priority";
import { useDate, useTime } from "@/Hooks/useDate";
import { Head, Link } from "@inertiajs/react";
import { CiCirclePlus } from "react-icons/ci";

export default function Welcome(props) {
    return (
        <>
            <Head title="Homepage" key="homepage" />

            <Navbar auth={props.auth} />
            <main className="flex h-screen w-full bg-slate-700">
                <section className="flex w-full flex-col justify-start gap-4 px-14 py-4">
                    <div className="flex items-center justify-between rounded-full bg-primary px-6 py-3 text-white">
                        <h1 className="font-jetBrains text-xl font-bold">
                            {useDate()}
                        </h1>
                        <Link href="/notes/create">
                            <CiCirclePlus size="38px" />
                        </Link>
                    </div>
                    {!props.note ? (
                        <div className="m-auto">
                            <img
                                src="/images/not-found-cat.jpg"
                                alt="cat"
                                width={20}
                                height={20}
                                fetchPriority="high"
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
                                    <div
                                        key={i}
                                        className="flex w-full flex-col gap-2 rounded-xl bg-secondary px-3 py-4"
                                    >
                                        <Link href={`/notes/${note.id}`}>
                                            <div className="flex items-center justify-between">
                                                <h1 className="font-bold">
                                                    {useDate(note.created_at)}
                                                </h1>
                                                <Priority note={note} />
                                            </div>
                                            <div className="justfy-between flex items-center">
                                                <h2 className="">
                                                    {note.title}
                                                </h2>
                                            </div>
                                            <h3 className="font-jetBrains text-xs font-extralight">
                                                <span>Dibuat pada : </span>
                                                {useTime(note.created_at)}
                                            </h3>
                                        </Link>
                                    </div>
                                );
                            })}
                        </>
                    )}
                </section>
            </main>
        </>
    );
}

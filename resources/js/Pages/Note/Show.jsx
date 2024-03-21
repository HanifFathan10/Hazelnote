import Priority from "@/Components/Priority";
import { NoteLayout } from "@/Layouts/NoteLayout";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";

const Show = () => {
    const { props } = usePage();
    const { delete: destroy } = useForm();

    const openModal = (e) => {
        e.preventDefault();
        document.getElementById("delete").showModal();
    };

    const deleteNote = (e) => {
        e.preventDefault();
        destroy(route("notes.destroy", { note: props.note.id }), {
            preserveScroll: true,
            onFinish: () => router.visit("/"),
        });
    };

    return (
        <>
            <Head title={props.title} key="1" />

            <NoteLayout auth={props.auth}>
                <section className="container mx-auto flex h-screen w-full flex-col justify-start gap-4 p-4 md:px-10 md:py-8 lg:px-14">
                    <div className="w-full space-y-3 rounded-xl bg-primary p-4">
                        <div className="flex items-center justify-between">
                            <h1 className="text-md font-bold md:text-xl">
                                {props.note.title}
                            </h1>
                            <Priority note={props.note}></Priority>
                        </div>
                        <hr />
                        <div
                            className="min-h-80 text-xs md:text-sm"
                            dangerouslySetInnerHTML={{
                                __html: props.note.description,
                            }}
                        />
                    </div>

                    <ul className="menu menu-horizontal mx-auto mt-6 rounded-box bg-base-200">
                        <li>
                            <Link
                                className="tooltip"
                                data-tip="Edit"
                                href={`/notes/${props.note.id}/edit`}
                            >
                                <FaRegEdit size={20} />
                            </Link>
                        </li>
                        <div className="divider divider-info divider-horizontal mx-0"></div>
                        <li>
                            <Link
                                className="tooltip"
                                data-tip="Delete"
                                onClick={openModal}
                            >
                                <FaTrashCan size={20} />
                            </Link>
                            <dialog
                                id="delete"
                                className="modal mx-auto flex w-full items-center justify-center"
                            >
                                <div className="modal-box max-w-xl">
                                    <h3 className="text-xs font-bold md:text-base lg:text-lg">
                                        Are you sure you want to delete this
                                        note?
                                    </h3>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            <button
                                                className="btn btn-outline btn-error btn-sm text-xs md:btn-md"
                                                onClick={deleteNote}
                                            >
                                                Delete
                                            </button>
                                        </form>
                                        <form method="dialog">
                                            <button className="btn btn-sm text-xs md:btn-md">
                                                Close
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </li>
                    </ul>
                </section>
            </NoteLayout>
        </>
    );
};

export default Show;

import Priority from "@/Components/Priority";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import React from "react";

const Show = () => {
    const { props } = usePage();
    const { delete: destroy, processing, errors } = useForm();

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

            <main className="flex flex-col gap-3 px-12 py-4">
                <section className="rounded-2xl bg-primary p-4">
                    <div className="mx-3 mb-2 flex items-center justify-between">
                        <h1 className="text-xl font-bold">
                            {props.note.title}
                        </h1>
                        <Priority note={props.note}></Priority>
                    </div>
                    <div
                        className="px-6 text-sm"
                        dangerouslySetInnerHTML={{
                            __html: props.note.description,
                        }}
                    />
                </section>
                <div className="flex gap-3">
                    <Link
                        href={`/notes/${props.note.id}/edit`}
                        className="btn btn-outline btn-warning"
                    >
                        Edit
                    </Link>
                    <form onSubmit={deleteNote}>
                        <button
                            className="btn btn-outline btn-error"
                            type="submit"
                        >
                            Delete
                        </button>
                    </form>
                </div>
            </main>
        </>
    );
};

export default Show;

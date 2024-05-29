import Action from "@/Components/Action";
import Priority from "@/Components/Priority";
import { NoteLayout } from "@/Layouts/NoteLayout";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import React from "react";

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
        <React.Fragment>
            <Head title={props.title} key="1" />

            <NoteLayout auth={props.auth}>
                <section className="container mx-auto flex h-screen w-full flex-col justify-start gap-4 p-4 md:px-10 md:py-8 lg:px-14">
                    <div className="w-full space-y-3 rounded-xl bg-primary p-4">
                        <div className="flex items-center justify-between">
                            <h1 className="text-xs font-bold md:text-xl">
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

                    <Action
                        openModal={openModal}
                        deleteNote={deleteNote}
                        slug={props.note.slug}
                    />
                </section>
            </NoteLayout>
        </React.Fragment>
    );
};

export default Show;

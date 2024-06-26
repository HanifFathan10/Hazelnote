import NoteForm from "@/Components/NoteForm";
import { NoteLayout } from "@/Layouts/NoteLayout";
import { Head, router, useForm } from "@inertiajs/react";
import React from "react";

const Update = (props) => {
    const { data, setData, patch, processing, reset } = useForm({
        title: props.note.title,
        slug: props.note.slug,
        priority: props.note.priority,
        description: props.note.description,
    });

    const submit = (e) => {
        e.preventDefault();

        try {
            patch(route("notes.update", { note: props.note.id }), {
                preserveScroll: true,
                onSuccess: (window.location.href = "/"),
            });
            reset();
        } catch (error) {
            console.log("Error :", error);
        }
    };

    return (
        <>
            <Head title={props.title} key="1" />

            <NoteLayout auth={props.auth}>
                <NoteForm
                    button="Update"
                    errors={props.errors}
                    processing={processing}
                    submit={submit}
                    data={data}
                    setData={setData}
                    tinyMce={props.tinyMce.tinyMce}
                />
            </NoteLayout>
        </>
    );
};

export default Update;

import NoteForm from "@/Components/NoteForm";
import { NoteLayout } from "@/Layouts/NoteLayout";
import { Head, useForm } from "@inertiajs/react";
import React from "react";

const Create = (props) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        priority: "",
        description: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("notes.store"));
        reset();
    };

    return (
        <>
            <Head title="Notes" />

            <NoteLayout auth={props.auth}>
                <NoteForm
                    button="Create"
                    errors={errors}
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

export default Create;

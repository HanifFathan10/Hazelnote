import { Head, useForm } from "@inertiajs/react";
import { Editor } from "@tinymce/tinymce-react";
import React, { useState } from "react";

const Update = (props) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { data, setData, put, processing, errors, reset } = useForm({
        title: props.note.title,
        priority: props.note.priority,
        description: props.note.description,
    });

    const submit = (e) => {
        e.preventDefault();

        try {
            put(
                route("notes.update", {
                    note: props.note.id,
                    preserveScroll: true,
                    onSuccess: () => reset(),
                }),
            );
            setIsSubmitted(true);
            reset();
        } catch (error) {
            console.log("Error :", error);
        }
    };

    if (isSubmitted == true) return (window.location.href = "/");

    const dateNow = new Date();
    const formatDate = dateNow.toLocaleDateString("id-ID", {
        minute: "2-digit",
        hour: "2-digit",
        day: "2-digit",
        month: "long",
        year: "numeric",
    });

    const handleEditorChange = (content) => {
        setData("description", content);
    };

    return (
        <>
            <Head title={props.title} key="1" />

            <form
                onSubmit={submit}
                method="POST"
                className="mx-auto max-w-7xl px-20 py-12"
            >
                <h1 className="font-semibold">{formatDate}</h1>
                <label className="form-control mb-3 w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Task today</span>
                    </div>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={data.title}
                        placeholder="Task name"
                        className="input input-bordered w-full max-w-xs placeholder:text-sm"
                        onChange={(e) => setData("title", e.target.value)}
                        required
                    />
                </label>

                <label className="form-control mb-3 w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Priority</span>
                    </div>
                    <select
                        className="select select-bordered"
                        name="selectOption"
                        defaultValue={data.priority}
                        onChange={(e) => setData("priority", e.target.value)}
                        required
                    >
                        <option value="option1">one day task Easy</option>
                        <option value="option2">one day task Normal</option>
                        <option value="option3">one day task Hard</option>
                        <option value="option4">Easy</option>
                        <option value="option5">Normal</option>
                        <option value="option6">Hard</option>
                    </select>
                </label>

                <Editor
                    apiKey={props.tinyMce.tinyMce}
                    value={data.description}
                    onEditorChange={handleEditorChange}
                    init={{
                        selector: "textarea",
                        skin: "oxide-dark",
                        content_css: "dark",
                        max_width: 200,
                        max_height: 400,
                        plugins: [
                            "advlist",
                            "autolink",
                            "lists",
                            "link",
                            "image",
                            "charmap",
                            "preview",
                            "anchor",
                            "searchreplace",
                            "visualblocks",
                            "code",
                            "fullscreen",
                            "insertdatetime",
                            "media",
                            "table",
                            "code",
                            "help",
                            "wordcount",
                        ],
                        toolbar_mode: "sliding",
                        spellchecker_ignore_list: [
                            "Ephox",
                            "Moxiecode",
                            "tinymce",
                            "TinyMCE",
                        ],
                        quickbars_selection_toolbar:
                            "bold italic | quicklink h2 h3 blockquote quickimage quicktable",
                        contextmenu:
                            "link image editimage table configurepermanentpen",
                        a11y_advanced_options: true,
                        toolbar:
                            "undo redo | aidialog aishortcuts | blocks fontsizeinput | bold italic | align numlist bullist | link image | table media pageembed | lineheight  outdent indent | strikethrough forecolor backcolor formatpainter removeformat | charmap emoticons checklist | code fullscreen preview | save print export | pagebreak anchor codesample footnotes mergetags | addtemplate inserttemplate | addcomment showcomments | ltr rtl casechange | spellcheckdialog a11ycheck",
                        content_style:
                            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                        editimage_cors_hosts: ["picsum.photos"],
                        menubar:
                            "file edit view insert format tools table help",
                        autosave_ask_before_unload: true,
                        autosave_interval: "30s",
                    }}
                />
                <button className="btn btn-success mt-3" type="submit">
                    Update Note
                </button>
            </form>
        </>
    );
};

export default Update;

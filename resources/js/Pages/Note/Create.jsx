import { Head, router, useForm } from "@inertiajs/react";
import { Editor } from "@tinymce/tinymce-react";
import React, { Suspense, useEffect } from "react";

const Create = (props) => {
    const { data, setData, post, processing, reset } = useForm({
        title: "",
        priority: "",
        description: "",
    });

    const submit = (e) => {
        e.preventDefault();

        try {
            post(route("notes.store"));
            reset();
        } catch (error) {
            console.log("Error :", error);
        }
    };

    useEffect(() => {
        setTimeout(() => {}, 1000);
    }, []);

    const dateNow = new Date();
    const formatDate = dateNow.toLocaleDateString("id-ID", {
        minute: "2-digit",
        hour: "2-digit",
        day: "2-digit",
        month: "long",
        year: "numeric",
    });

    function SkeletonEditor() {
        return <div className="skeleton h-56 w-full" />;
    }

    return (
        <>
            <Head title="Notes" />

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

                <Suspense fallback={<SkeletonEditor />}>
                    <Editor
                        apiKey={props.tinyMce.tinyMce}
                        onChange={(e) =>
                            setData("description", e.target.getContent())
                        }
                        init={{
                            selector: "textarea",
                            skin: "oxide-dark",
                            content_css: "tinymce-5-dark",
                            max_width: 200,
                            max_height: 400,
                            forced_root_block: false,
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
                                "body { font-family: 'Plus Jakarta Sans', sans-serif; font-size:12px }",
                            editimage_cors_hosts: ["picsum.photos"],
                            menubar:
                                "file edit view insert format tools table help",
                            autosave_ask_before_unload: true,
                        }}
                    />
                </Suspense>
                <button
                    className={`btn btn-success mt-3 ${
                        processing ? "hidden" : "block"
                    }`}
                    disabled={processing}
                    type="submit"
                >
                    Create Note
                </button>
                {processing && (
                    <span className="loading loading-ring loading-lg block"></span>
                )}
            </form>
        </>
    );
};

export default Create;

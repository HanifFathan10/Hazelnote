import { useDate } from "@/Hooks/useDate";
import { Editor } from "@tinymce/tinymce-react";
import React, { Suspense } from "react";

const NoteForm = ({
    submit,
    button,
    processing,
    errors,
    data,
    setData,
    tinyMce,
}) => {
    function SkeletonEditor() {
        return <div className="skeleton h-56 w-full" />;
    }

    const handleEditorChange = (content, editor) => {
        setData("description", content);
    };
    return (
        <form
            onSubmit={submit}
            method="POST"
            className="w-full p-4 md:px-10 md:py-8 lg:px-14"
        >
            <h1 className="mb-4 text-xl font-semibold text-white">
                {useDate()}
            </h1>
            <div className="flex items-center justify-between gap-3">
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
                        className="md:stext-base input input-bordered w-full max-w-xs text-sm placeholder:text-sm"
                        onChange={(e) => setData("title", e.target.value)}
                        required
                    />
                    {errors.title && <div>{errors.title}</div>}
                </label>

                <label className="form-control mb-3 w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Priority</span>
                    </div>
                    <select
                        className="select select-bordered w-full max-w-xs text-xs md:text-sm"
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
                    {errors.priority && <div>{errors.priority}</div>}
                </label>
            </div>

            <Suspense fallback={<SkeletonEditor />}>
                <Editor
                    apiKey={tinyMce}
                    value={data.description}
                    onEditorChange={handleEditorChange}
                    init={{
                        selector: "textarea",
                        skin: "oxide-dark",
                        content_css: "tinymce-5-dark",
                        max_width: 200,
                        max_height: 400,
                        mobile: {
                            menubar: true,
                            plugins: [
                                "advlist",
                                "autolink",
                                "lists",
                                "link",
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
                            ],
                        },
                        plugins: [
                            "advlist",
                            "autolink",
                            "lists",
                            "link",
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
                        contextmenu: "link table configurepermanentpen",
                        a11y_advanced_options: true,
                        toolbar:
                            "undo redo | aidialog aishortcuts | blocks fontsizeinput | bold italic | align numlist bullist | link image | table media pageembed | lineheight  outdent indent | strikethrough forecolor backcolor formatpainter removeformat | charmap emoticons checklist | code fullscreen preview | save print export | pagebreak anchor codesample footnotes mergetags | addtemplate inserttemplate | addcomment showcomments | ltr rtl casechange | spellcheckdialog a11ycheck",
                        content_style:
                            "body { font-family: 'Plus Jakarta Sans', sans-serif; font-size:14px; } h1,h2,h3,h4,h5,h6,p { margin: 0 }",
                        menubar:
                            "file edit view insert format tools table help",
                        autosave_ask_before_unload: true,
                        indent_use_margin: true,
                    }}
                />
            </Suspense>
            {errors.description && <div>{errors.description}</div>}
            <button
                className={`btn btn-outline btn-success mt-3 ${
                    processing ? "hidden" : "block"
                }`}
                disabled={processing}
                type="submit"
            >
                {button}
            </button>
            {processing && (
                <span className="loading loading-ring loading-lg block" />
            )}
        </form>
    );
};

export default NoteForm;

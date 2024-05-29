import { Link } from "@inertiajs/react";
import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";

const Action = ({ openModal, deleteNote, slug }) => {
    return (
        <ul className="menu menu-horizontal mx-auto mt-6 rounded-box bg-base-200">
            <li>
                <Link
                    className="tooltip"
                    data-tip="Edit"
                    href={`/notes/${slug}/edit`}
                >
                    <FaRegEdit size={20} />
                </Link>
            </li>
            <div className="divider divider-info divider-horizontal mx-0"></div>
            <li>
                <Link className="tooltip" data-tip="Delete" onClick={openModal}>
                    <FaTrashCan size={20} />
                </Link>
                <dialog
                    id="delete"
                    className="modal mx-auto flex w-full items-center justify-center"
                >
                    <div className="modal-box max-w-xl">
                        <h3 className="text-xs font-bold md:text-base lg:text-lg">
                            Are you sure you want to delete this note?
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
    );
};

export default Action;

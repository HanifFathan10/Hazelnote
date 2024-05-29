import React from "react";

const Pagination = ({ note }) => {
    return (
        <div className="flex items-center justify-between rounded-md bg-primary px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
                <a
                    href="#"
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Previous
                </a>
                <a
                    href="#"
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Next
                </a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-white">
                        Showing <span className="font-medium">{note.from}</span>{" "}
                        to <span className="font-medium">{note.to}</span> of{" "}
                        <span className="font-medium">{note.total}</span>{" "}
                        results
                    </p>
                </div>
                <div>
                    <nav
                        className="isolate inline-flex gap-3 -space-x-px rounded-md shadow-sm"
                        aria-label="Pagination"
                    >
                        <a
                            href={note.prev_page_url}
                            className={`relative inline-flex items-center rounded-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0  ${note.prev_page_url == null ? "hidden" : "block"}`}
                        >
                            <span className="sr-only">Previous</span>
                            &larr;
                        </a>
                        <div className="relative z-10 inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            {note.current_page}
                        </div>
                        <a
                            href={note.next_page_url}
                            className={`relative inline-flex items-center rounded-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${note.next_page_url == null ? "hidden" : "block"}`}
                        >
                            <span className="sr-only">Next</span>
                            &rarr;
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Pagination;

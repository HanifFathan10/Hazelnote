import React from "react";

const Priority = ({ note }) => {
    const priority = [
        {
            priority: "option1",
            style: "badge badge-neutral",
            text: "One day task Easy",
        },
        {
            priority: "option2",
            style: "badge badge-primary",
            text: "One day task Normal",
        },
        {
            priority: "option3",
            style: "badge badge-secondary",
            text: "One day task Hard",
        },
        {
            priority: "option4",
            style: "badge badge-accent",
            text: "Easy",
        },
        {
            priority: "option5",
            style: "badge badge-warning",
            text: "Normal",
        },
        {
            priority: "option6",
            style: "badge badge-error",
            text: "Hard",
        },
    ];

    return priority.map((data, i) => {
        return (
            note.priority === data.priority && (
                <span
                    className={`${data.style} px-4 py-3 font-jetBrains text-xs font-bold leading-4 tracking-tighter md:text-sm`}
                    key={i}
                >
                    {data.text}
                </span>
            )
        );
    });
};

export default Priority;

import React from "react";

const Priority = ({ note }) => {
    console.log(note);
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
                <div
                    className={`${data.style} px-4 py-3 font-semibold`}
                    key={i}
                >
                    {data.text}
                </div>
            )
        );
    });
};

export default Priority;

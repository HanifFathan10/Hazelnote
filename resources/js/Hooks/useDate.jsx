export const useDate = (yourDate) => {
    const dateCurrent = new Date(yourDate ?? new Date());
    const date = dateCurrent.toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });

    return date;
};

export const useTime = (yourDate) => {
    const dateCurrent = new Date(yourDate ?? new Date());
    const time = dateCurrent.toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
    });

    return time;
};

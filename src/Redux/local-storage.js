const getdata = (key) => {
    try {
        const data = localStorage.getItem(key);
        if (data === null) {
            return [];
        }
        return JSON.parse(data);
    } catch (error) {
        console.log(error);
        return [];
    }
}

const setdata = (key, data) => {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        console.log(error);
    }
}

export { getdata, setdata };
// time complexity => O(n)
const linearSearch = (haystack: number[], needle: number): boolean => {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle) return true;
    }

    return false;
};

module.exports = {
    linearSearch
};
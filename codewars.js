function filter_list(array) {
    var list = [];
    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] === "number") {
            list.push(array[i])
        }
        console.log(typeof l[i])
    } console.log("this is our list", list)
    return list
    // Return a new array with the strings filtered out
}
filter_list([1, 2, 'a', 'b']);
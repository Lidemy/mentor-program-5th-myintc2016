function join(arr, concatStr) {
    var ans  = arr[0];
    return ans += concatStr;
}

function repeat(str, times) {
    var ans = "";
    for (i = 1; i <= times; i++) {
        ans += str;
    }
    return ans;
}

console.log(join(['a'], '!'));
console.log(repeat('a', 5));

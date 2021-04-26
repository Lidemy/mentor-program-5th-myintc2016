function capitalize(str) {
    var Str = str.charCodeAt(0);
    if (Str >= 97 && Str <= 122) {
        var n = Str -= 32,
            ans = String.fromCharCode(n);
        for (i=1; i<str.length; i++) {
            ans += str[i]
        }
        return ans
    }
    return str
}

console.log(capitalize('hello'));
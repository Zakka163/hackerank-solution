function decrypt(string) {
    string = [...string]
    let temp_angka = []
    temp_string = string
    for (let x = 0; x < string.length; x++) {
        if (parseInt(string[x])) {
            if (parseInt(string[x]) != 0) {
                temp_angka.unshift(string[x])
                temp_string = temp_string.filter((y) => y != string[x])
            }
        }
    }
    let temp_string_2 = []
    for (let i = 0; i < temp_string.length; i++) {
        if (temp_string[i] == "*") {
            temp_string_2.push(temp_string[i - 1])
            temp_string_2.push(temp_string[i - 2])
        } else {
            if (i + 1 < temp_string.length) {
                if (i + 2 < temp_string.length) {
                    if (temp_string[i + 1] != "*") {
                        if (temp_string[i + 2] != "*") {
                            temp_string_2.push(temp_string[i])
                        }
                    }
                } else {
                    if (temp_string[i + 1] != "*") {
                        temp_string_2.push(temp_string[i])
                    }
                }
            } else {
                temp_string_2.push(temp_string[i])
            }
        }
    }
    let angka = 0
    for (let i = 0; i < temp_string_2.length; i++) {
       if(!isNaN(parseInt(temp_string_2[i]))){
        temp_string_2[i] = temp_angka[angka]
        angka++
       }
    }
    return temp_string_2.join('')
}

function decrypt_v2(string) {

    string = [...string]
    let result = []

    // ubah angka
    let temp_angka = []

    let temp_string = string.filter((x) => {
        if (!isNaN(parseInt(x))) {
            if (parseInt(x) != 0) {
                temp_angka.unshift(x)
            } else {
                return x
            }
        } else {
            return x
        }
    })
    let inc = 0
    for (let x = 0; x < temp_string.length; x++) {
        if (!isNaN(parseInt(temp_string[x]))) {
            result.push(temp_angka[inc])
            inc++
            continue
        }
        if (temp_string[x] == "*") {
            [result[x - 1], result[x - 2]] = [result[x - 2], result[x - 1]]
            continue
        }
        result.push(temp_string[x])

    }
    return result.join('')

}

const testString = "43Ah*ck0rr0nk";

console.time("decrypt");
console.log(decrypt(testString));
console.timeEnd("decrypt");

console.time("decrypt_v2");
console.log(decrypt_v2(testString));
console.timeEnd("decrypt_v2");

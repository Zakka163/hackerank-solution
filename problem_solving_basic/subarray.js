function longestSubarray(arr) {
    let maxLength = 0;
    let left = 0;
    let firstValue = null;
    let secondValue = null;
    let lastSeen = -1; // Posisi terakhir dari elemen sebelumnya

    for (let right = 0; right < arr.length; right++) {
        const current = arr[right];

        // Perbarui elemen yang dilacak
        if (firstValue === null || current === firstValue) {
            firstValue = current;
        } else if (secondValue === null || current === secondValue) {
            secondValue = current;
        } else {
            // Jika elemen saat ini berbeda dari dua elemen yang dilacak, geser jendela
            left = lastSeen + 1;
            firstValue = arr[lastSeen];
            secondValue = current;
        }

        // Periksa apakah subarray valid
        if (Math.abs(firstValue - secondValue) > 1) {
            left = right;
            firstValue = current;
            secondValue = null;
        }

        // Perbarui posisi terakhir dari elemen sebelumnya
        if (right > 0 && arr[right] !== arr[right - 1]) {
            lastSeen = right - 1;
        }

        // Perbarui panjang maksimum
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Contoh Penggunaan
const arr = [3, 3, 2, 1];
console.log("Panjang subarray terpanjang:", longestSubarray(arr));

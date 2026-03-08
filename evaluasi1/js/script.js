// Data deskripsi untuk angka 1 - 9
const descriptions = {
    1: `Bagi mereka yang jumlah angka lahirnya 1, kemandirian, kepemimpinan, dan inovasi sebagai pelajaran yang harus ditempuh dalam hidupnya. Pioneer sejati, orang-orang yang berani dan orisinal termasuk di dalamnya.`,
    2: `Bagi mereka yang jumlah angka lahirnya 2, kerjasama, keseimbangan, dan kepekaan sebagai pelajaran yang harus ditempuh dalam hidupnya. Diplomat sejati, orang-orang yang penuh pertimbangan dan harmonis termasuk di dalamnya.`,
    3: `Bagi mereka yang jumlah angka lahirnya 3, ekspresi, sosialisasi, dan kreativitas sebagai pelajaran yang harus ditempuh dalam hidupnya. Entertainer sejati, orang-orang yang bersinar dan optimistik termasuk di dalamnya.`,
    4: `Bagi mereka yang jumlah angka lahirnya 4, kerja keras, stabilitas, dan fondasi yang kokoh sebagai pelajaran yang harus ditempuh dalam hidupnya. Pembangun sejati, orang-orang yang disiplin dan dapat diandalkan termasuk di dalamnya.`,
    5: `Bagi mereka yang jumlah angka lahirnya 5, kebebasan, petualangan, dan perubahan sebagai pelajaran yang harus ditempuh dalam hidupnya. Petualang sejati, orang-orang yang dinamis dan fleksibel termasuk di dalamnya.`,
    6: `Bagi mereka yang jumlah angka lahirnya 6, tanggung jawab, cinta, dan pengasuhan sebagai pelajaran yang harus ditempuh dalam hidupnya. Pengasuh sejati, orang-orang yang harmonis dan melindungi termasuk di dalamnya.`,
    7: `Bagi mereka yang jumlah angka lahirnya 7, kebijaksanaan, analisis, dan spiritualitas sebagai pelajaran yang harus ditempuh dalam hidupnya. Pencari kebenaran, orang-orang yang introspektif dan bijaksana termasuk di dalamnya.`,
    8: `Bagi mereka yang jumlah angka lahirnya 8, ambisi, kekuasaan, dan kelimpahan sebagai pelajaran yang harus ditempuh dalam hidupnya. Pemimpin besar, orang-orang yang visioner dan berorientasi hasil termasuk di dalamnya.`,
    9: `Bagi mereka yang jumlah angka lahirnya 9, welas asih, kemanusiaan, dan kebijaksanaan universal sebagai pelajaran yang harus ditempuh dalam hidupnya. Humanis sejati, orang-orang yang dermawan dan berwawasan luas termasuk di dalamnya.`
};

// Element references
const dayInp = document.getElementById('dayInput');
const monthSel = document.getElementById('monthSelect');
const yearInp = document.getElementById('yearInput');
const kirim = document.getElementById('kirimBtn');

// Output spans
const outDay = document.getElementById('outDay');
const outMonth = document.getElementById('outMonth');
const outMonthName = document.getElementById('outMonthName');
const outYear = document.getElementById('outYear');
const outHasil1 = document.getElementById('outHasil1');
const outHasil2 = document.getElementById('outHasil2');
const outHasil3 = document.getElementById('outHasil3');
const lineTitle = document.getElementById('lineTitle');
const lineText = document.getElementById('lineText');

// Month names
const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

// Menu variables
let menuItems = {
    nasgor: { price: 25000, qty: 0 },
    mie: { price: 20000, qty: 0 },
    ayam: { price: 30000, qty: 0 },
    esteh: { price: 5000, qty: 0 },
    esjeruk: { price: 7000, qty: 0 }
};

// ========== FUNGSI NAVIGASI ==========
function showHome() {
    document.getElementById('homeSection').classList.remove('hidden');
    document.getElementById('menuSection').classList.add('hidden');
    document.getElementById('calculatorSection').classList.add('hidden');
    document.getElementById('mainTitle').innerText = 'Tampilan awal sistem';
}

function showMenu() {
    document.getElementById('homeSection').classList.add('hidden');
    document.getElementById('calculatorSection').classList.add('hidden');
    
    // Tampilkan alert dulu
    alert('Menu Makanan');
    
    // Setelah klik OK, tampilkan menu makanan
    document.getElementById('menuSection').classList.remove('hidden');
    document.getElementById('menuItems').classList.remove('hidden');
    document.getElementById('mainTitle').innerText = 'Menu Makanan';
}

function showCalculator() {
    document.getElementById('homeSection').classList.add('hidden');
    document.getElementById('menuSection').classList.add('hidden');
    document.getElementById('calculatorSection').classList.remove('hidden');
    document.getElementById('mainTitle').innerText = 'Calculator';
    
    // Reset input calculator
    document.getElementById('calcInput1').value = '';
    document.getElementById('calcInput2').value = '';
    document.getElementById('calcResult').innerText = '0';
}

function shoutAlert() {
    alert('SHOUT!');
}

// ========== FUNGSI GARIS HIDUP ==========
function sumAllDigits(day, month, year) {
    const dateStr = day.toString() + month.toString() + year.toString();
    let sum = 0;
    for (let i = 0; i < dateStr.length; i++) {
        sum += parseInt(dateStr[i]);
    }
    return sum;
}

function reduceToSingleWithSteps(num) {
    let steps = [];
    let current = num;
    
    while (current >= 10) {
        let digits = current.toString().split('').map(Number);
        let sum = digits.reduce((a, b) => a + b, 0);
        steps.push({
            digits: digits.join('+'),
            result: sum
        });
        current = sum;
    }
    
    return {
        final: current,
        steps: steps
    };
}

function hitungDanTampilkan() {
    let day = parseInt(dayInp.value, 10);
    let month = parseInt(monthSel.value, 10);
    let year = parseInt(yearInp.value, 10);
    
    if (isNaN(day) || day < 1 || day > 31) day = 25;
    if (isNaN(month) || month < 1 || month > 12) month = 12;
    if (isNaN(year) || year < 1000 || year > 2100) year = 2008;
    
    outDay.innerText = day;
    outMonth.innerText = month;
    outMonthName.innerText = monthNames[month - 1];
    outYear.innerText = year;
    
    const hasil1 = sumAllDigits(day, month, year);
    outHasil1.innerText = hasil1;
    
    const result = reduceToSingleWithSteps(hasil1);
    
    if (result.steps.length > 0) {
        outHasil2.innerText = result.steps[0].digits + '=' + result.steps[0].result;
    } else {
        outHasil2.innerText = hasil1 + '=' + hasil1;
    }
    
    if (result.steps.length > 1) {
        outHasil3.innerText = result.steps[1].digits + '=' + result.final;
    } else if (result.steps.length === 1 && result.steps[0].result !== hasil1) {
        outHasil3.innerText = result.final + '=' + result.final;
    } else {
        outHasil3.innerText = hasil1 + '=' + hasil1;
    }
    
    const finalNumber = result.final;
    lineTitle.innerText = `Tanggal Lahir Anda Berada Pada Garis Hidup ${finalNumber}`;
    lineText.innerText = descriptions[finalNumber] || descriptions[9];
}

// ========== FUNGSI MENU MAKANAN ==========
function updateQty(item, change) {
    if (item === 'nasgor') {
        menuItems.nasgor.qty = Math.max(0, menuItems.nasgor.qty + change);
        document.getElementById('qtyNasgor').value = menuItems.nasgor.qty;
    } else if (item === 'mie') {
        menuItems.mie.qty = Math.max(0, menuItems.mie.qty + change);
        document.getElementById('qtyMie').value = menuItems.mie.qty;
    } else if (item === 'ayam') {
        menuItems.ayam.qty = Math.max(0, menuItems.ayam.qty + change);
        document.getElementById('qtyAyam').value = menuItems.ayam.qty;
    } else if (item === 'esteh') {
        menuItems.esteh.qty = Math.max(0, menuItems.esteh.qty + change);
        document.getElementById('qtyEsteh').value = menuItems.esteh.qty;
    } else if (item === 'esjeruk') {
        menuItems.esjeruk.qty = Math.max(0, menuItems.esjeruk.qty + change);
        document.getElementById('qtyEsjeruk').value = menuItems.esjeruk.qty;
    }
    
    updateTotal();
}

function updateTotal() {
    let subtotal = 0;
    subtotal += menuItems.nasgor.qty * menuItems.nasgor.price;
    subtotal += menuItems.mie.qty * menuItems.mie.price;
    subtotal += menuItems.ayam.qty * menuItems.ayam.price;
    subtotal += menuItems.esteh.qty * menuItems.esteh.price;
    subtotal += menuItems.esjeruk.qty * menuItems.esjeruk.price;
    
    let discount = 0;
    if (subtotal > 50000) {
        discount = subtotal * 0.1;
    }
    
    let total = subtotal - discount;
    
    document.getElementById('subtotal').innerText = 'Rp ' + subtotal.toLocaleString('id-ID');
    document.getElementById('discount').innerText = 'Rp ' + discount.toLocaleString('id-ID');
    document.getElementById('totalBayar').innerText = 'Rp ' + total.toLocaleString('id-ID');
}

function resetMenu() {
    menuItems.nasgor.qty = 0;
    menuItems.mie.qty = 0;
    menuItems.ayam.qty = 0;
    menuItems.esteh.qty = 0;
    menuItems.esjeruk.qty = 0;
    
    document.getElementById('qtyNasgor').value = 0;
    document.getElementById('qtyMie').value = 0;
    document.getElementById('qtyAyam').value = 0;
    document.getElementById('qtyEsteh').value = 0;
    document.getElementById('qtyEsjeruk').value = 0;
    
    updateTotal();
}

// ========== FUNGSI CALCULATOR ==========
function calculate(operator) {
    const input1 = document.getElementById('calcInput1').value;
    const input2 = document.getElementById('calcInput2').value;
    const warning = document.getElementById('calcWarning');
    
    if (input1 === '' || input2 === '') {
        warning.classList.remove('hidden');
        return;
    }
    
    warning.classList.add('hidden');
    
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);
    let result = 0;
    
    switch(operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : 'Error';
            break;
        case '//':
            result = Math.floor(num1 / num2);
            break;
        case '++':
            result = num1 + 1;
            break;
        case '-3%':
            result = num1 - (num1 * 0.03);
            break;
        case '^':
            result = Math.pow(num1, num2);
            break;
    }
    
    document.getElementById('calcResult').innerText = result;
}

// Event listener
kirim.addEventListener('click', function(e) {
    e.preventDefault();
    hitungDanTampilkan();
});

// Inisialisasi
monthSel.value = 12;
dayInp.value = 25;
yearInp.value = 2008;
hitungDanTampilkan();
updateTotal();
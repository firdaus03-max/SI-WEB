// Data deskripsi untuk angka 1 - 9 (sesuai format gambar)
const descriptions = {
    1: `Bagi mereka yang jumlah angka hari lahirnya 1, kemandirian dan kepemimpinan sebagai pelajaran yang harus ditempuh dalam hidupnya. Pelopor sejati, orang-orang yang berani dan orisinal termasuk di dalamnya. Orang-orang dengan garis hidup yang telah mengasah bakatnya mempunyai bakat kepemimpinan yang intensif, biasanya dalam bisnis, inovasi, atau seni. Mereka juga memiliki kemampuan dalam membangun diri sendiri dan mengatasi kendala. Mereka dapat membantu orang lain. Mereka dapat membantu orang lain dalam kehidupan sehari-hari, seperti memberikan arahan dan motivasi.`,

    2: `Bagi mereka yang jumlah angka hari lahirnya 2, kerjasama dan keseimbangan sebagai pelajaran yang harus ditempuh dalam hidupnya. Diplomat sejati, orang-orang yang penuh pertimbangan dan harmonis termasuk di dalamnya. Orang-orang dengan garis hidup yang telah mengasah bakatnya mempunyai bakat kerjasama yang intensif, biasanya dalam mediasi, dukungan, atau seni. Mereka juga memiliki kemampuan dalam membangun hubungan dan mengatasi konflik. Mereka dapat membantu orang lain. Mereka dapat membantu orang lain dalam kehidupan sehari-hari, seperti menjadi penengah yang baik.`,

    3: `Bagi mereka yang jumlah angka hari lahirnya 3, ekspresi sosialisasi, dan kreativitas sebagai pelajaran yang harus ditempuh dalam hidupnya. Entertainer kelas dunia, orang-orang yang berklau dan optimistik termasuk di dalamnya. Orang-orang dengan garis hidup yang telah mengasah bakatnya mempunyai bakat kreatif yang intensif, biasanya dalam verbal, tulisan, aktiviti, atau seni. Mereka juga memiliki kemampuan dalam hidup dalam kesaksian dalam berkesempatan. Satu cara yang paling penting adalah membangun diri sendiri, kendalanya dan keinginan. Mereka dapat membantu orang lain. Mereka dapat membantu orang lain dalam kehidupan sehari-hari, seperti membantu memenuhi kebutuhan fisik, sosial, dan terkait.

Pembicara yang tampil dalam arti bukan hanya seseorang yang menyampaikan untuk didengar, tapi lebih penting lagi, seseorang yang mampu untuk mendengarkan. Mereka adalah individu-widya yang selalu diterima dengan baik dalam setiap situasi sosial, dan juga mereka sering kali memberikan nilai serta manfaat. Mereka tidak hanya menjadikan tempat selaku ada, tetapi juga menjadi sumber daya bagi orang lain. Mereka tidak hanya memberi pengembangan potensi, tetapi juga memberikan manfaat kepada orang lain. Mereka tidak hanya memberikan manfaat, tetapi juga memberikan nilai tambah. Mereka tidak hanya memberikan manfaat, tetapi juga memberikan nilai tambah. Mereka tidak hanya memberikan manfaat kepada orang lain, tetapi juga memberikan nilai tambah. Mereka tidak hanya memberikan manfaat kepada orang lain, tetapi juga mereka memberikan nilai tambah. Mereka tidak hanya memberikan manfaat kepada orang lain, tetapi juga mereka memberikan nilai Tambah. Mereka tidak hanya memberikan manfaat kepada orang lain, tetapi juga mereka memberikan nilai Tambah.`,

    4: `Bagi mereka yang jumlah angka hari lahirnya 4, kerja keras dan stabilitas sebagai pelajaran yang harus ditempuh dalam hidupnya. Pembangun sejati, orang-orang yang disiplin dan dapat diandalkan termasuk di dalamnya. Orang-orang dengan garis hidup yang telah mengasah bakatnya mempunyai bakat organisasi yang intensif, biasanya dalam manajemen, konstruksi, atau seni. Mereka juga memiliki kemampuan dalam membangun fondasi yang kokoh. Mereka dapat membantu orang lain dalam kehidupan sehari-hari.`,

    5: `Bagi mereka yang jumlah angka hari lahirnya 5, kebebasan dan petualangan sebagai pelajaran yang harus ditempuh dalam hidupnya. Petualang sejati, orang-orang yang dinamis dan fleksibel termasuk di dalamnya. Orang-orang dengan garis hidup yang telah mengasah bakatnya mempunyai bakat adaptasi yang intensif, biasanya dalam komunikasi, perjalanan, atau seni. Mereka juga memiliki kemampuan dalam beradaptasi dengan perubahan.`,

    6: `Bagi mereka yang jumlah angka hari lahirnya 6, tanggung jawab dan cinta sebagai pelajaran yang harus ditempuh dalam hidupnya. Pengasuh sejati, orang-orang yang harmonis dan melindungi termasuk di dalamnya. Orang-orang dengan garis hidup yang telah mengasah bakatnya mempunyai bakat mengasuh yang intensif, biasanya dalam keluarga, konseling, atau seni. Mereka juga memiliki kemampuan dalam merawat dan melindungi.`,

    7: `Bagi mereka yang jumlah angka hari lahirnya 7, kebijaksanaan dan spiritualitas sebagai pelajaran yang harus ditempuh dalam hidupnya. Pencari kebenaran, orang-orang yang introspektif dan bijaksana termasuk di dalamnya. Orang-orang dengan garis hidup yang telah mengasah bakatnya mempunyai bakat analitis yang intensif, biasanya dalam penelitian, filsafat, atau seni.`,

    8: `Bagi mereka yang jumlah angka hari lahirnya 8, ambisi dan kelimpahan sebagai pelajaran yang harus ditempuh dalam hidupnya. Pemimpin besar, orang-orang yang visioner dan berorientasi hasil termasuk di dalamnya. Orang-orang dengan garis hidup yang telah mengasah bakatnya mempunyai bakat eksekutif yang intensif, biasanya dalam bisnis, keuangan, atau seni.`,

    9: `Bagi mereka yang jumlah angka hari lahirnya 9, welas asih dan kemanusiaan sebagai pelajaran yang harus ditempuh dalam hidupnya. Humanis sejati, orang-orang yang dermawan dan berwawasan luas termasuk di dalamnya. Orang-orang dengan garis hidup yang telah mengasah bakatnya mempunyai bakat kemanusiaan yang intensif, biasanya dalam filantropi, seni, atau pendidikan.`
};

// Element references
const dayInp = document.getElementById('dayInput');
const monthSel = document.getElementById('monthSelect');
const yearInp = document.getElementById('yearInput');
const kirim = document.getElementById('kirimBtn');
const reset = document.getElementById('resetBtn');

// Output spans
const outDay = document.getElementById('outDay');
const outMonth = document.getElementById('outMonth');
const outYear = document.getElementById('outYear');
const outHasil1 = document.getElementById('outHasil1');
const outHasil2 = document.getElementById('outHasil2');
const outHasil3 = document.getElementById('outHasil3');
const lineTitle = document.getElementById('lineTitle');
const lineText = document.getElementById('lineText');

// Fungsi menghitung jumlah digit
function sumDigits(num) {
    return num.toString().split('').reduce((a, b) => a + parseInt(b), 0);
}

// Fungsi mengurangi sampai 1 digit
function reduceToSingleDigit(num) {
    while (num >= 10) {
        num = sumDigits(num);
    }
    return num;
}

// Fungsi utama
function hitungDanTampilkan() {
    // Ambil nilai
    let day = parseInt(dayInp.value, 10) || 1;
    let month = parseInt(monthSel.value, 10) || 1;
    let year = parseInt(yearInp.value, 10) || 2008;
    
    // Validasi
    day = Math.min(31, Math.max(1, day));
    month = Math.min(12, Math.max(1, month));
    year = Math.min(2100, Math.max(1900, year));
    
    // Update output tanggal
    outDay.innerText = day;
    outMonth.innerText = month;
    outYear.innerText = year;
    
    // Hitung hasil sesuai rumus di gambar
    // 25 + 12 + 1998 = 2+5+1+2+1+9+9+8 = 36 = 3+6 = 9
    const total1 = day + month + year;  // Ini untuk hasil pertama
    outHasil1.innerText = total1;
    
    // Jumlahkan semua digit dari total1
    const hasil2 = sumDigits(total1);
    outHasil2.innerText = hasil2;
    
    // Kurangi sampai 1 digit
    const hasil3 = reduceToSingleDigit(hasil2);
    outHasil3.innerText = hasil3;
    
    // Update judul dan deskripsi
    lineTitle.innerText = `# Tanggal Lahir Anda Berada Pada Garis Hidup ${hasil3}`;
    lineText.innerText = descriptions[hasil3] || descriptions[3];
}

// Event listener
kirim.addEventListener('click', function(e) {
    e.preventDefault();
    hitungDanTampilkan();
});

reset.addEventListener('click', function(e) {
    e.preventDefault();
    dayInp.value = 1;
    monthSel.value = 1;
    yearInp.value = 2008;
    hitungDanTampilkan();
});

// Inisialisasi
hitungDanTampilkan();
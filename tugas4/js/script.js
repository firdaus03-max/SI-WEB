// Data deskripsi untuk angka 1 - 9 (sesuai format PDF)
const descriptions = {
    1: `Bagi mereka yang jumlah angka lahirnya 1, kemandirian, kepemimpinan, dan inovasi sebagai pelajaran yang harus ditempuh dalam hidupnya. Pioneer sejati, orang-orang yang berani dan orisinal termasuk di dalamnya. Orang-orang dengan garis hidup 1 yang telah menemukan bakatnya mempunyai potensi kepemimpinan yang istimewa, biasanya dalam bisnis, penemuan, atau semacamnya. Misalkan seorang pemimpin proyek atau pengusaha. Sisi cerah: keberanian, ketegasan, serta kemampuan mengambil inisiatif. Mengasah kemampuan mandiri dan percaya diri adalah misi utama jiwa ini. Karakter mereka kuat dan berwibawa, pembicara yang meyakinkan, tegas dan terbuka. Mereka bukan hanya seseorang yang memimpin, tetapi juga mampu menginspirasi orang lain untuk mengikuti visinya. Potensi kreativitas selalu ada, namun kadang kurang terasah karena mereka terlalu fokus pada hasil akhir. Pandangan hidup yang maju, dan pembawaannya dinamis dan bersemangat. Anda bisa menghadapi tantangan dengan keberanian dan membantu orang lain menemukan arah. Hubungan dibangun dengan ketegasan, namun tetap peka akan kebutuhan orang lain. Anda dapat membantu orang lain dalam hidup Anda untuk mencapai potensi terbaik mereka.`,

    2: `Bagi mereka yang jumlah angka lahirnya 2, kerjasama, keseimbangan, dan kepekaan sebagai pelajaran yang harus ditempuh dalam hidupnya. Diplomat sejati, orang-orang yang penuh pertimbangan dan harmonis termasuk di dalamnya. Orang-orang dengan garis hidup 2 yang telah menemukan bakatnya mempunyai potensi kerjasama yang istimewa, biasanya dalam mediasi, dukungan, atau semacamnya. Misalkan seorang penengah dalam keluarga atau komunitas. Sisi cerah: kesabaran, loyalitas, serta kemampuan menciptakan harmoni. Mengasah kemampuan intuisi dan kerjasama adalah misi utama jiwa ini. Karakter mereka hangat dan bersahabat, pendengar yang baik, sosial dan terbuka. Mereka bukan hanya seseorang yang pandai bergaul, tetapi juga mampu membuat orang lain merasa didengar dan dipahami. Potensi empati selalu ada, namun kadang kurang terasah karena mereka terlalu fokus pada kebutuhan orang lain. Pandangan hidup yang seimbang, dan pembawaannya tenang dan terbuka. Anda bisa menghadapi konflik dengan bijaksana dan membantu orang lain menemukan titik temu. Hubungan dijalin sepenuh hati, peka akan perasaan dan emosi orang lain. Anda dapat membantu orang lain dalam hidup Anda yang membutuhkan dukungan.`,

    3: `Bagi mereka yang jumlah angka lahirnya 3, ekspresi, sosialisasi, dan kreativitas sebagai pelajaran yang harus ditempuh dalam hidupnya. Entertainer sejati, orang-orang yang bersinar dan optimistik termasuk di dalamnya. Orang-orang dengan garis hidup 3 yang telah menemukan bakatnya mempunyai potensi kreatif istimewa, biasanya dalam verbal, tulisan, akting, atau semacamnya. Misalkan seorang ibu dari keluarga yang tetap menyalurkan ekspresi. Sisi cerah: optimisme, antusiasme, serta kemampuan membagi kreativitas dengan orang lain. Mengasah kemampuan ekspresi kreatif adalah misi utama jiwa ini. Karakter mereka ramah dan bersahabat, pembicara yang baik, sosial dan terbuka. Pembicara yang tampil bukan hanya seseorang yang menghibur orang lain, tetapi juga pendengar yang baik, mampu membuat orang merasa diterima. Potensi imajinasi kreatif selalu ada, namun kadang kurang terasah. Pandangan hidup hampir selalu positif, dan pembawaannya hangat dan terbuka. Anda bisa menghadapi banyak rintangan dengan optimisme dan langsung bangkit bersama orang lain. Hubungan dijalin sepenuh hati, peka akan perasaan dan emosi orang lain. Anda dapat membantu orang lain dalam hidup Anda.`,

    4: `Bagi mereka yang jumlah angka lahirnya 4, kerja keras, stabilitas, dan fondasi yang kokoh sebagai pelajaran yang harus ditempuh dalam hidupnya. Pembangun sejati, orang-orang yang disiplin dan dapat diandalkan termasuk di dalamnya. Orang-orang dengan garis hidup 4 yang telah menemukan bakatnya mempunyai potensi organisasi yang istimewa, biasanya dalam manajemen, konstruksi, atau semacamnya. Misalkan seorang arsitek atau manajer proyek. Sisi cerah: ketekunan, kejujuran, serta kemampuan membangun sistem yang kuat. Mengasah kemampuan konsistensi dan detail adalah misi utama jiwa ini. Karakter mereka praktis dan terorganisir, pekerja keras, setia dan terbuka. Mereka bukan hanya seseorang yang bekerja keras, tetapi juga mampu menciptakan fondasi yang kokoh untuk orang lain. Potensi ketelitian selalu ada, namun kadang terlalu kaku. Pandangan hidup yang stabil, dan pembawaannya serius namun dapat diandalkan. Anda bisa menghadapi tantangan dengan ketekunan dan membantu orang lain membangun masa depan.`,

    5: `Bagi mereka yang jumlah angka lahirnya 5, kebebasan, petualangan, dan perubahan sebagai pelajaran yang harus ditempuh dalam hidupnya. Petualang sejati, orang-orang yang dinamis dan fleksibel termasuk di dalamnya. Orang-orang dengan garis hidup 5 yang telah menemukan bakatnya mempunyai potensi adaptasi yang istimewa, biasanya dalam komunikasi, perjalanan, atau semacamnya. Misalkan seorang jurnalis atau penjelajah. Sisi cerah: kebebasan, rasa ingin tahu, serta kemampuan beradaptasi. Mengasah kemampuan fleksibilitas dan komunikasi adalah misi utama jiwa ini. Karakter mereka energik dan penuh semangat, mudah bergaul, sosial dan terbuka. Mereka bukan hanya seseorang yang suka berpetualang, tetapi juga mampu membawa perubahan positif. Potensi inovasi selalu ada, namun kadang kurang fokus. Pandangan hidup yang dinamis, dan pembawaannya antusias dan menginspirasi.`,

    6: `Bagi mereka yang jumlah angka lahirnya 6, tanggung jawab, cinta, dan pengasuhan sebagai pelajaran yang harus ditempuh dalam hidupnya. Pengasuh sejati, orang-orang yang harmonis dan melindungi termasuk di dalamnya. Orang-orang dengan garis hidup 6 yang telah menemukan bakatnya mempunyai potensi mengasuh yang istimewa, biasanya dalam keluarga, konseling, atau semacamnya. Misalkan seorang ibu atau konselor. Sisi cerah: kasih sayang, loyalitas, serta kemampuan merawat. Mengasah kemampuan tanggung jawab dan cinta adalah misi utama jiwa ini. Karakter mereka penyayang dan harmonis, pendengar yang baik, sosial dan terbuka. Mereka bukan hanya seseorang yang mengasuh, tetapi juga mampu menciptakan lingkungan yang aman. Potensi kehangatan selalu ada, namun kadang terlalu posesif.`,

    7: `Bagi mereka yang jumlah angka lahirnya 7, kebijaksanaan, analisis, dan spiritualitas sebagai pelajaran yang harus ditempuh dalam hidupnya. Pencari kebenaran, orang-orang yang introspektif dan bijaksana termasuk di dalamnya. Orang-orang dengan garis hidup 7 yang telah menemukan bakatnya mempunyai potensi analitis yang istimewa, biasanya dalam penelitian, filsafat, atau semacamnya. Misalkan seorang ilmuwan atau filsuf. Sisi cerah: kecerdasan, intuisi, serta kemampuan analisis. Mengasah kemampuan berpikir dalam dan introspeksi adalah misi utama jiwa ini. Karakter mereka pendiam namun tajam, suka merenung, sosial selektif. Mereka bukan hanya seseorang yang berpikir, tetapi juga mampu menemukan kebenaran tersembunyi.`,

    8: `Bagi mereka yang jumlah angka lahirnya 8, ambisi, kekuasaan, dan kelimpahan sebagai pelajaran yang harus ditempuh dalam hidupnya. Pemimpin besar, orang-orang yang visioner dan berorientasi hasil termasuk di dalamnya. Orang-orang dengan garis hidup 8 yang telah menemukan bakatnya mempunyai potensi eksekutif yang istimewa, biasanya dalam bisnis, keuangan, atau semacamnya. Misalkan seorang CEO atau investor. Sisi cerah: ketegasan, visi, serta kemampuan mengelola sumber daya. Mengasah kemampuan kepemimpinan dan manajemen adalah misi utama jiwa ini. Karakter mereka karismatik dan berwibawa, visioner, tegas dan terbuka.`,

    9: `Bagi mereka yang jumlah angka lahirnya 9, welas asih, kemanusiaan, dan kebijaksanaan universal sebagai pelajaran yang harus ditempuh dalam hidupnya. Humanis sejati, orang-orang yang dermawan dan berwawasan luas termasuk di dalamnya. Orang-orang dengan garis hidup 9 yang telah menemukan bakatnya mempunyai potensi kemanusiaan yang istimewa, biasanya dalam filantropi, seni, atau semacamnya. Misalkan seorang dermawan atau seniman. Sisi cerah: empati, toleransi, serta kemampuan melihat gambaran besar. Mengasah kemampuan memberi dan melepaskan adalah misi utama jiwa ini. Karakter mereka idealis dan penyayang, dermawan, sosial dan terbuka. Mereka bukan hanya seseorang yang peduli, tetapi juga mampu menginspirasi perubahan global.`
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

// Fungsi menjumlahkan semua digit
function sumAllDigits(day, month, year) {
    // Ubah semua ke string dan gabungkan
    const dateStr = day.toString() + month.toString() + year.toString();
    let sum = 0;
    for (let i = 0; i < dateStr.length; i++) {
        sum += parseInt(dateStr[i]);
    }
    return sum;
}

// Fungsi mengurangi sampai 1 digit dengan menampilkan langkah
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

// Fungsi utama
function hitungDanTampilkan() {
    // Ambil nilai
    let day = parseInt(dayInp.value, 10);
    let month = parseInt(monthSel.value, 10);
    let year = parseInt(yearInp.value, 10);
    
    // Validasi
    if (isNaN(day) || day < 1 || day > 31) day = 25;
    if (isNaN(month) || month < 1 || month > 12) month = 12;
    if (isNaN(year) || year < 1000 || year > 2100) year = 2008;
    
    // Update output tanggal
    outDay.innerText = day;
    outMonth.innerText = month;
    outMonthName.innerText = monthNames[month - 1];
    outYear.innerText = year;
    
    // Hitung hasil 1 (jumlah semua digit)
    const hasil1 = sumAllDigits(day, month, year);
    outHasil1.innerText = hasil1;
    
    // Hitung hasil 2 dan 3 dengan langkah
    const result = reduceToSingleWithSteps(hasil1);
    
    // Format hasil 2
    if (result.steps.length > 0) {
        outHasil2.innerText = result.steps[0].digits + '=' + result.steps[0].result;
    } else {
        outHasil2.innerText = hasil1 + '=' + hasil1;
    }
    
    // Format hasil 3
    if (result.steps.length > 1) {
        outHasil3.innerText = result.steps[1].digits + '=' + result.final;
    } else if (result.steps.length === 1 && result.steps[0].result !== hasil1) {
        outHasil3.innerText = result.final + '=' + result.final;
    } else {
        outHasil3.innerText = hasil1 + '=' + hasil1;
    }
    
    // Update judul dan deskripsi
    const finalNumber = result.final;
    lineTitle.innerText = `Tanggal Lahir Anda Berada Pada Garis Hidup ${finalNumber}`;
    lineText.innerText = descriptions[finalNumber] || descriptions[9];
}

// Event listener
kirim.addEventListener('click', function(e) {
    e.preventDefault();
    hitungDanTampilkan();
});

// Inisialisasi dengan contoh (25 Desember 2008)
monthSel.value = 12;
dayInp.value = 25;
yearInp.value = 2008;
hitungDanTampilkan();
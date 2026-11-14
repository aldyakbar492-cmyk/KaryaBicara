        // Data Dummy Karya Khusus Anak Berkebutuhan Khusus (ABK)
        // const dataAwalABK = [
        //     {
        //         id: 1,
        //         judul: "Dunia Biru Rian",
        //         nama: "Rian Pratama",
        //         sekolah: "SLB Negeri A Pembina",
        //         kategoriAbk: "Teman Netra",
        //         kategoriKarya: "Seni Lukis",
        //         latarBelakang: "Siswa kelas 5 Teman Netra (low vision) dengan kepekaan tinggi terhadap tekstur dan kontras warna alami.",
        //         cerita: "Rian melukis menggunakan teknik sentuhan jari (finger painting) di atas kanvas bertekstur khusus. Bagi Rian, warna biru dan sapuan gelombang lembut ini mewakili rasa damai saat mendengarkan suara angin pagi di halaman sekolah.",
        //         foto: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80",
        //         likes: 28,
        //         liked: false,
        //         pesanDukungan: [
        //             { pengirim: "Ibu Ratna (Guru SLB)", teks: "Tekstur lukisan jari Rian luar biasa indah, teruslah berkarya Nak!", waktu: "2 jam lalu" }
        //         ]
        //     },
        //     {
        //         id: 2,
        //         judul: "Tas Rajut Pelangi",
        //         nama: "Siti Aisyah",
        //         sekolah: "SMP Inklusi Harapan Bangsa",
        //         kategoriAbk: "Teman Tuli",
        //         kategoriKarya: "Kerajinan Tangan",
        //         latarBelakang: "Siswi kelas 8 Teman Tuli yang berkomunikasi melalui Bahasa Isyarat Indonesia (BISINDO) dan seni kriya tekstil.",
        //         cerita: "Siti merajut benang katun warna-warni ini dengan ketelitian tinggi selama tiga minggu. Ia memadukan tujuh warna cerah sebagai simbol persahabatan hangat antara teman Tuli dan teman Dengar di sekolah inklusinya.",
        //         foto: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80",
        //         likes: 36,
        //         liked: false,
        //         pesanDukungan: [
        //             { pengirim: "Kak Dinda", teks: "Rajutannya sangat rapi dan cerah sekali Siti! Keren banget!", waktu: "4 jam lalu" }
        //         ]
        //     },
        //     {
        //         id: 3,
        //         judul: "Robot Penjaga Hutan",
        //         nama: "Dimas Anggara",
        //         sekolah: "SLB Autisma Mitra Al-Firdaus",
        //         kategoriAbk: "Spektrum Autisme",
        //         kategoriKarya: "Karya Digital",
        //         latarBelakang: "Siswa spektrum autisme dengan fokus visual luar biasa dan kecintaan mendalam pada sains serta robotika.",
        //         cerita: "Dimas menggambar ilustrasi digital ini menggunakan tablet gambarnya dengan detail simetris yang presisi. Menurut Dimas, robot ini bertugas menyiram pohon-pohon muda dan menjaga hewan di hutan agar tetap aman.",
        //         foto: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
        //         likes: 45,
        //         liked: false,
        //         pesanDukungan: [
        //             { pengirim: "Budi Santoso", teks: "Imajinasi Dimas tentang robot pelindung alam sungguh menginspirasi!", waktu: "1 hari lalu" }
        //         ]
        //     },
        //     {
        //         id: 4,
        //         judul: "Bunga Matahari Sahabatku",
        //         nama: "Tari Kusuma",
        //         sekolah: "SLB-C YPLB Nusantara",
        //         kategoriAbk: "Down Syndrome",
        //         kategoriKarya: "Seni Lukis",
        //         latarBelakang: "Siswi ceria dengan Down Syndrome yang selalu menyebarkan energi positif dan semangat di kelas seni.",
        //         cerita: "Tari melukis bunga matahari besar dengan warna kuning hangat karena menurutnya bunga matahari selalu tersenyum menyambut pagi, sama seperti dirinya saat bertemu teman-teman dan guru di sekolah.",
        //         foto: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
        //         likes: 33,
        //         liked: false,
        //         pesanDukungan: [
        //             { pengirim: "Maya Sari", teks: "Lukisanmu hangat sekali seperti senyummu, Tari!", waktu: "2 hari lalu" }
        //         ]
        //     },
        //     {
        //         id: 5,
        //         judul: "Puisi: Huruf yang Menari",
        //         nama: "Arka Mahendra",
        //         sekolah: "SD Inklusi Cahaya Bangsa",
        //         kategoriAbk: "Disleksia",
        //         kategoriKarya: "Puisi & Cerita",
        //         latarBelakang: "Siswa kelas 5 dengan disleksia yang memiliki daya imajinasi lisan dan kemampuan bercerita yang sangat kaya.",
        //         cerita: "Dulu Arka sering merasa huruf di buku terlihat melompat-lompat. Lewat puisi bergambar ini, Arka bercerita bahwa setiap anak punya cara belajar yang unik dan imajinasi adalah sayap terkuat untuk meraih mimpi.",
        //         foto: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
        //         likes: 29,
        //         liked: false,
        //         pesanDukungan: []
        //     },
        //     {
        //         id: 6,
        //         judul: "Vas Keramik Kelopak Senja",
        //         nama: "Fajar Ramadhan",
        //         sekolah: "SLB-D YPAC Mandiri",
        //         kategoriAbk: "Down Syndrome",
        //         kategoriKarya: "Kerajinan Tangan",
        //         latarBelakang: "Siswa remaja yang tekun berlatih keterampilan kriya keramik untuk mengasah koordinasi motorik halus.",
        //         cerita: "Membentuk tanah liat membutuhkan kesabaran dan ketenangan. Fajar mengukir motif kelopak bunga satu per satu pada vas keramik ini sebagai hadiah spesial untuk ibunya yang selalu mendampingi setiap hari.",
        //         foto: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80",
        //         likes: 31,
        //         liked: false,
        //         pesanDukungan: []
        //     }
        // ];

        // Muat data dari localStorage
        let daftarKarya = [];
        try {
            const tersimpan = localStorage.getItem('karyabicara_abk_v2');
            daftarKarya = tersimpan ? JSON.parse(tersimpan) : dataAwalABK;
        } catch (e) {
            daftarKarya = dataAwalABK;
        }

        function simpanKeStorage() {
            try {
                localStorage.setItem('karyabicara_abk_v2', JSON.stringify(daftarKarya));
            } catch (e) {
                console.warn('Penyimpanan lokal tidak tersedia.');
            }
        }

        // State Filter & Aksesibilitas
        let filterKaryaAktif = 'Semua';
        let filterAbkAktif = 'Semua';
        let kataKunciCari = '';
        let idKaryaTerbuka = null;
        let sedangMembacaSuara = false;

        const stateAkses = {
            dyslexic: false,
            largeText: false,
            calm: false
        };

        // Toggle Fitur Aksesibilitas ABK
        function toggleAksesibilitas(fitur) {
            stateAkses[fitur] = !stateAkses[fitur];

            if (fitur === 'dyslexic') {
                document.body.classList.toggle('mode-dyslexic', stateAkses.dyslexic);
                document.getElementById('status-dyslexic').innerText = stateAkses.dyslexic ? 'Aktif' : 'Mati';
                const btn = document.getElementById('btn-toggle-dyslexic');
                btn.setAttribute('aria-pressed', stateAkses.dyslexic);
                btn.classList.toggle('bg-amber-600', stateAkses.dyslexic);
            }

            if (fitur === 'largeText') {
                document.documentElement.classList.toggle('mode-large-text', stateAkses.largeText);
                document.getElementById('status-textsize').innerText = stateAkses.largeText ? 'Besar' : 'Normal';
                const btn = document.getElementById('btn-toggle-textsize');
                btn.setAttribute('aria-pressed', stateAkses.largeText);
                btn.classList.toggle('bg-amber-600', stateAkses.largeText);
            }

            if (fitur === 'calm') {
                document.body.classList.toggle('mode-calm', stateAkses.calm);
                document.getElementById('status-calm').innerText = stateAkses.calm ? 'Aktif' : 'Mati';
                const btn = document.getElementById('btn-toggle-calm');
                btn.setAttribute('aria-pressed', stateAkses.calm);
                btn.classList.toggle('bg-amber-600', stateAkses.calm);
            }
        }

        // Elemen DOM
        const gridKarya = document.getElementById('grid-karya');
        const emptyState = document.getElementById('empty-state');
        const searchInput = document.getElementById('search-input');
        const modalDetail = document.getElementById('modal-detail');
        const modalDetailContent = document.getElementById('modal-detail-content');
        const modalUnggah = document.getElementById('modal-unggah');

        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const iconMenu = document.getElementById('icon-menu');
        const iconClose = document.getElementById('icon-close');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            iconMenu.classList.toggle('hidden');
            iconClose.classList.toggle('hidden');
        });

        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                iconMenu.classList.remove('hidden');
                iconClose.classList.add('hidden');
            });
        });

        // Render Kartu Galeri
        function renderGaleri() {
            const hasilFilter = daftarKarya.filter(item => {
                const cocokKarya = filterKaryaAktif === 'Semua' || item.kategoriKarya === filterKaryaAktif;
                const cocokAbk = filterAbkAktif === 'Semua' || item.kategoriAbk === filterAbkAktif;
                const q = kataKunciCari.toLowerCase().trim();
                const cocokCari = !q ||
                    item.judul.toLowerCase().includes(q) ||
                    item.nama.toLowerCase().includes(q) ||
                    item.sekolah.toLowerCase().includes(q) ||
                    item.kategoriAbk.toLowerCase().includes(q);
                return cocokKarya && cocokAbk && cocokCari;
            });

            gridKarya.innerHTML = '';

            if (hasilFilter.length === 0) {
                emptyState.classList.remove('hidden');
                return;
            } else {
                emptyState.classList.add('hidden');
            }

            hasilFilter.forEach(karya => {
                const heartClass = karya.liked ? 'fill-amber-600 text-amber-600' : 'text-slate-500';
                gridKarya.innerHTML += `
                    <article class="bg-white rounded-2xl border border-cream-200 shadow-sm overflow-hidden flex flex-col justify-between transition hover:shadow-md">
                        <div>
                            <!-- Gambar Karya -->
                            <div class="relative aspect-[4/3] bg-cream-100 overflow-hidden cursor-pointer" onclick="bukaModalDetail(${karya.id})">
                                <img
                                    src="${karya.foto}"
                                    alt="Karya berjudul ${escapeHTML(karya.judul)} oleh ${escapeHTML(karya.nama)}"
                                    onerror="this.src='https://placehold.co/600x450/F3EFEA/2A7B7B?text=Karya+Siswa+ABK'"
                                    class="w-full h-full object-cover"
                                >
                                <!-- Badge Jenis Karya -->
                                <span class="absolute top-3 left-3 text-xs font-bold px-3 py-1.5 rounded-xl bg-cream-50/95 text-sage-800 border border-cream-200 shadow-sm">
                                    ${escapeHTML(karya.kategoriKarya)}
                                </span>
                            </div>

                            <!-- Konten Kartu -->
                            <div class="p-5">
                                <!-- Badge Sahabat ABK -->
                                <span class="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-lg bg-amber-50 text-amber-800 border border-amber-200/80 mb-2.5">
                                    <span class="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                                    ${escapeHTML(karya.kategoriAbk)}
                                </span>

                                <h3 onclick="bukaModalDetail(${karya.id})" class="text-lg font-extrabold text-slate-900 hover:text-sage-700 cursor-pointer leading-snug">
                                    ${escapeHTML(karya.judul)}
                                </h3>

                                <p class="text-sm font-bold text-sage-700 mt-1.5">${escapeHTML(karya.nama)}</p>
                                <p class="text-xs text-slate-500 mt-0.5">${escapeHTML(karya.sekolah)}</p>
                            </div>
                        </div>

                        <!-- Tombol Aksi (Target Sentuh Besar min 44px) -->
                        <div class="px-5 pb-5 pt-3 border-t border-cream-100 flex items-center gap-2.5">
                            <button
                                onclick="toggleLike(${karya.id})"
                                aria-label="Beri apresiasi bintang untuk karya ${escapeHTML(karya.judul)}"
                                class="min-h-[44px] px-3.5 py-2 rounded-xl bg-cream-50 hover:bg-amber-50 border border-cream-200 text-xs font-bold text-slate-800 flex items-center gap-1.5 transition"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 ${heartClass}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                                <span>${karya.likes}</span>
                            </button>

                            <button
                                onclick="bukaModalDetail(${karya.id})"
                                class="flex-1 min-h-[44px] bg-sage-600 hover:bg-sage-700 text-white text-xs sm:text-sm font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition"
                            >
                                <span>Baca & Dengar Cerita</span>
                            </button>
                        </div>
                    </article>
                `;
            });
        }

        // Toggle Apresiasi
        function toggleLike(id) {
            const karya = daftarKarya.find(item => item.id === id);
            if (!karya) return;
            karya.liked = !karya.liked;
            karya.likes += karya.liked ? 1 : -1;
            simpanKeStorage();
            renderGaleri();
            if (idKaryaTerbuka === id) {
                renderIsiModalDetail(id);
            }
        }

        // Event Filter Kategori Karya
        document.querySelectorAll('.filter-karya-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                filterKaryaAktif = btn.getAttribute('data-karya');
                document.querySelectorAll('.filter-karya-btn').forEach(b => {
                    b.classList.remove('bg-sage-600', 'text-white', 'font-bold');
                    b.classList.add('bg-cream-100', 'text-slate-700', 'font-semibold');
                });
                btn.classList.remove('bg-cream-100', 'text-slate-700', 'font-semibold');
                btn.classList.add('bg-sage-600', 'text-white', 'font-bold');
                renderGaleri();
            });
        });

        // Event Filter Sahabat ABK
        document.querySelectorAll('.filter-abk-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                filterAbkAktif = btn.getAttribute('data-abk');
                document.querySelectorAll('.filter-abk-btn').forEach(b => {
                    b.classList.remove('bg-amber-600', 'text-white', 'font-bold');
                    b.classList.add('bg-cream-50', 'text-slate-700', 'font-semibold');
                });
                btn.classList.remove('bg-cream-50', 'text-slate-700', 'font-semibold');
                btn.classList.add('bg-amber-600', 'text-white', 'font-bold');
                renderGaleri();
            });
        });

        // Pencarian Real-time
        searchInput.addEventListener('input', (e) => {
            kataKunciCari = e.target.value;
            renderGaleri();
        });

        function resetSemuaFilter() {
            filterKaryaAktif = 'Semua';
            filterAbkAktif = 'Semua';
            kataKunciCari = '';
            searchInput.value = '';
            document.querySelectorAll('.filter-karya-btn').forEach(b => {
                const aktif = b.getAttribute('data-karya') === 'Semua';
                b.className = aktif
                    ? 'filter-karya-btn min-h-[44px] px-4 py-2 rounded-xl text-sm font-bold bg-sage-600 text-white transition'
                    : 'filter-karya-btn min-h-[44px] px-4 py-2 rounded-xl text-sm font-semibold bg-cream-100 text-slate-700 hover:bg-cream-200 transition';
            });
            document.querySelectorAll('.filter-abk-btn').forEach(b => {
                const aktif = b.getAttribute('data-abk') === 'Semua';
                b.className = aktif
                    ? 'filter-abk-btn min-h-[40px] px-3.5 py-1.5 rounded-xl text-xs font-bold bg-amber-600 text-white transition'
                    : 'filter-abk-btn min-h-[40px] px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-cream-50 border border-cream-200 text-slate-700 hover:bg-cream-100 transition';
            });
            renderGaleri();
        }

        // ==========================================
        // FITUR TEXT-TO-SPEECH (SUARA BACAKAN INDONESIA)
        // ==========================================
        function hentikanSuara() {
            if ('speechSynthesis' in window) {
                window.speechSynthesis.cancel();
            }
            sedangMembacaSuara = false;
            const btnTts = document.getElementById('btn-tts-cerita');
            if (btnTts) {
                btnTts.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                    <span>Dengarkan Cerita (Suara)</span>
                `;
                btnTts.classList.remove('bg-amber-600');
                btnTts.classList.add('bg-sage-600');
            }
        }

        function bacakanCerita(id) {
            if (!('speechSynthesis' in window)) {
                const infoTts = document.getElementById('tts-info');
                if (infoTts) infoTts.classList.remove('hidden');
                return;
            }

            if (sedangMembacaSuara) {
                hentikanSuara();
                return;
            }

            const karya = daftarKarya.find(item => item.id === id);
            if (!karya) return;

            const teksNarasi = `Karya berjudul ${karya.judul}. Dibuat oleh ${karya.nama}, sahabat ${karya.kategoriAbk}, dari ${karya.sekolah}. ${karya.latarBelakang}. Cerita di balik karya: ${karya.cerita}`;

            const ucapan = new SpeechSynthesisUtterance(teksNarasi);
            ucapan.lang = 'id-ID';
            ucapan.rate = 0.92; // Sedikit lebih tenang dan jelas didengar
            ucapan.pitch = 1.0;

            ucapan.onstart = () => {
                sedangMembacaSuara = true;
                const btnTts = document.getElementById('btn-tts-cerita');
                if (btnTts) {
                    btnTts.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                        </svg>
                        <span>Hentikan Suara</span>
                    `;
                    btnTts.classList.remove('bg-sage-600');
                    btnTts.classList.add('bg-amber-600');
                }
            };

            ucapan.onend = () => {
                hentikanSuara();
            };

            ucapan.onerror = () => {
                hentikanSuara();
            };

            window.speechSynthesis.speak(ucapan);
        }

        // Modal Detail Karya
        function bukaModalDetail(id) {
            hentikanSuara();
            idKaryaTerbuka = id;
            renderIsiModalDetail(id);
            modalDetail.classList.remove('hidden');
            modalDetail.classList.add('flex');
            document.body.style.overflow = 'hidden';
        }

        function renderIsiModalDetail(id) {
            const karya = daftarKarya.find(item => item.id === id);
            if (!karya) return;

            const daftarPesanHTML = karya.pesanDukungan.length > 0
                ? karya.pesanDukungan.map(p => `
                    <div class="bg-white p-3.5 rounded-xl border border-cream-200">
                        <div class="flex justify-between items-center mb-1">
                            <span class="text-xs font-bold text-sage-800">${escapeHTML(p.pengirim)}</span>
                            <span class="text-[11px] text-slate-400">${escapeHTML(p.waktu)}</span>
                        </div>
                        <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">"${escapeHTML(p.teks)}"</p>
                    </div>
                `).join('')
                : `<p class="text-xs text-slate-500 italic text-center py-3">Belum ada pesan semangat. Yuk kirimkan dukungan pertama untuk ${escapeHTML(karya.nama)}!</p>`;

            modalDetailContent.innerHTML = `
                <!-- Gambar Karya -->
                <div class="rounded-2xl overflow-hidden bg-cream-100 aspect-[16/10] mb-5 border border-cream-200">
                    <img
                        src="${karya.foto}"
                        alt="${escapeHTML(karya.judul)}"
                        onerror="this.src='https://placehold.co/800x500/F3EFEA/2A7B7B?text=Karya+Siswa+ABK'"
                        class="w-full h-full object-cover"
                    >
                </div>

                <!-- Tombol Text-to-Speech (Suara Bacakan) -->
                <div class="mb-5">
                    <button
                        id="btn-tts-cerita"
                        onclick="bacakanCerita(${karya.id})"
                        class="w-full min-h-[48px] bg-sage-600 hover:bg-sage-700 text-white text-sm font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm transition"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                        </svg>
                        <span>Dengarkan Cerita (Suara)</span>
                    </button>
                    <p id="tts-info" class="hidden text-xs text-amber-700 mt-1.5 text-center">Browser ini tidak mendukung fitur pembaca suara otomatis.</p>
                </div>

                <!-- Badge & Judul -->
                <div class="flex flex-wrap items-center gap-2 mb-2">
                    <span class="text-xs font-bold px-3 py-1 rounded-lg bg-amber-50 text-amber-800 border border-amber-200">
                        ${escapeHTML(karya.kategoriAbk)}
                    </span>
                    <span class="text-xs font-bold px-3 py-1 rounded-lg bg-sage-50 text-sage-800 border border-sage-200">
                        ${escapeHTML(karya.kategoriKarya)}
                    </span>
                </div>

                <h3 id="modal-judul-karya" class="text-2xl font-extrabold text-slate-900">${escapeHTML(karya.judul)}</h3>

                <!-- Kartu Profil Siswa ABK -->
                <div class="mt-4 p-4 rounded-2xl bg-white border border-cream-200">
                    <div class="flex items-center gap-3">
                        <div class="w-11 h-11 rounded-full bg-sage-600 text-white font-extrabold flex items-center justify-center shrink-0">
                            ${escapeHTML(karya.nama.charAt(0))}
                        </div>
                        <div>
                            <p class="text-base font-extrabold text-slate-900">${escapeHTML(karya.nama)}</p>
                            <p class="text-xs font-bold text-sage-700">${escapeHTML(karya.sekolah)}</p>
                        </div>
                    </div>
                    <p class="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">${escapeHTML(karya.latarBelakang)}</p>
                </div>

                <!-- Cerita di Balik Karya -->
                <div class="mt-5">
                    <h4 class="text-sm font-extrabold text-slate-900 mb-2">Cerita di Balik Karya</h4>
                    <div class="bg-sage-50/70 p-4 rounded-2xl border border-sage-600/20 text-sm text-slate-800 leading-relaxed">
                        "${escapeHTML(karya.cerita)}"
                    </div>
                </div>

                <!-- Form Kirim Pesan Semangat -->
                <div class="mt-6 pt-5 border-t border-cream-200">
                    <h4 class="text-sm font-extrabold text-slate-900 mb-3">Kirim Pesan Semangat untuk ${escapeHTML(karya.nama)}</h4>
                    <form onsubmit="kirimDukungan(event, ${karya.id})" class="space-y-3">
                        <input
                            type="text"
                            id="input-nama-pengirim"
                            required
                            placeholder="Namamu (contoh: Kak Rina / Guru SLB)"
                            class="w-full min-h-[44px] text-sm bg-white border border-cream-200 rounded-xl px-3.5 py-2.5"
                        >
                        <textarea
                            id="input-pesan-dukungan"
                            required
                            rows="2"
                            placeholder="Tulis kata-kata dukungan yang hangat dan ramah..."
                            class="w-full text-sm bg-white border border-cream-200 rounded-xl px-3.5 py-2.5"
                        ></textarea>
                        <button
                            type="submit"
                            class="w-full min-h-[48px] bg-amber-600 hover:bg-amber-700 text-white text-sm font-bold py-3 rounded-xl shadow-sm transition"
                        >
                            Kirim Pesan Dukungan
                        </button>
                    </form>
                    <div id="toast-dukungan" class="hidden mt-3 p-3 rounded-xl bg-sage-50 border border-sage-600/30 text-sage-800 text-xs font-bold text-center">
                        Terima kasih! Pesan dukunganmu sudah tersimpan untuk ${escapeHTML(karya.nama)}.
                    </div>
                </div>

                <!-- Daftar Pesan Masuk -->
                <div class="mt-6">
                    <h4 class="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                        Pesan Semangat Masuk (${karya.pesanDukungan.length})
                    </h4>
                    <div class="space-y-2.5 max-h-48 overflow-y-auto pr-1">
                        ${daftarPesanHTML}
                    </div>
                </div>
            `;
        }

        function kirimDukungan(event, id) {
            event.preventDefault();
            const namaVal = document.getElementById('input-nama-pengirim').value.trim();
            const pesanVal = document.getElementById('input-pesan-dukungan').value.trim();
            if (!namaVal || !pesanVal) return;

            const karya = daftarKarya.find(item => item.id === id);
            if (karya) {
                karya.pesanDukungan.unshift({
                    pengirim: namaVal,
                    teks: pesanVal,
                    waktu: 'Baru saja'
                });
                simpanKeStorage();
                renderIsiModalDetail(id);
                const toast = document.getElementById('toast-dukungan');
                if (toast) {
                    toast.classList.remove('hidden');
                    setTimeout(() => toast.classList.add('hidden'), 3500);
                }
            }
        }

        function tutupModalDetail() {
            hentikanSuara();
            modalDetail.classList.remove('flex');
            modalDetail.classList.add('hidden');
            document.body.style.overflow = '';
            idKaryaTerbuka = null;
        }

        // Modal Unggah Karya Baru (Simulasi Demo)
        function bukaModalUnggah() {
            hentikanSuara();
            mobileMenu.classList.add('hidden');
            iconMenu.classList.remove('hidden');
            iconClose.classList.add('hidden');
            modalUnggah.classList.remove('hidden');
            modalUnggah.classList.add('flex');
            document.body.style.overflow = 'hidden';
        }

        function tutupModalUnggah() {
            modalUnggah.classList.remove('flex');
            modalUnggah.classList.add('hidden');
            document.body.style.overflow = '';
        }

        function simpanKaryaBaru(event) {
            event.preventDefault();
            const nama = document.getElementById('unggah-nama').value.trim();
            const sekolah = document.getElementById('unggah-sekolah').value.trim();
            const kategoriAbk = document.getElementById('unggah-abk').value;
            const kategoriKarya = document.getElementById('unggah-kategori').value;
            const judul = document.getElementById('unggah-judul').value.trim();
            const latarBelakang = document.getElementById('unggah-latar').value.trim();
            const cerita = document.getElementById('unggah-cerita').value.trim();

            const gambarDefault = {
                'Seni Lukis': 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80',
                'Kerajinan Tangan': 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80',
                'Karya Digital': 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
                'Puisi & Cerita': 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80'
            };

            const karyaBaru = {
                id: Date.now(),
                judul,
                nama,
                sekolah,
                kategoriAbk,
                kategoriKarya,
                latarBelakang,
                cerita,
                foto: gambarDefault[kategoriKarya] || gambarDefault['Seni Lukis'],
                likes: 1,
                liked: true,
                pesanDukungan: []
            };

            daftarKarya.unshift(karyaBaru);
            simpanKeStorage();
            resetSemuaFilter();
            event.target.reset();
            tutupModalUnggah();
            document.getElementById('galeri').scrollIntoView({ behavior: 'smooth' });
        }

        // Tutup modal saat klik backdrop atau Escape
        modalDetail.addEventListener('click', (e) => {
            if (e.target === modalDetail) tutupModalDetail();
        });
        modalUnggah.addEventListener('click', (e) => {
            if (e.target === modalUnggah) tutupModalUnggah();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (!modalDetail.classList.contains('hidden')) tutupModalDetail();
                if (!modalUnggah.classList.contains('hidden')) tutupModalUnggah();
            }
        });

        function escapeHTML(str) {
            return String(str).replace(/[&<>'"]/g, tag => ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                "'": '&#39;',
                '"': '&quot;'
            }[tag]));
        }

        // Inisialisasi Awal
        renderGaleri();
    
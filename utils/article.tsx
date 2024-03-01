"use client";

import { useLocale } from "@/contexts/LocaleContext";
import type { article } from "@/utils/types";

const getArticle = () => {
  const { locale } = useLocale();

  const articleList: article[] = [
    {
      id: 1,
      datetime: "05/11/2011",
      location: "Jakarta, Indonesia",
      isDiff: false,
      isReverse: false,
      url: "https://travel.detik.com/cerita-perjalanan/d-5405887/keindahan-pulau-nias",
      title:
        locale === "id" ? "Keindahan Pulau Nias" : "The beauty of Nias Island",
      text:
        locale === "id"
          ? "Ya'ahowu, itulah kata sapaan khas orang Nias ketika bertemu dengan seseorang. Pulau Nias dengan luas 5.318 kilometer persegi menyimpan sejumlah misteri dan keunikan beserta keindahan alam dan pantai yang begitu memesona. Dengan berbagai keindahan alamnya, potensi Pariwisata Bahari di Pulau Nias tersebar di hampir sejumlah tempat yang dikenal dengan sebutan 100 pulaunya.Wisata budaya juga tidak kalah menariknya untuk kita kunjungi. Desa-desa tradisional di Pulau Nias yang masih menyimpan sejumlah peninggalan budaya dan para penutur sejarah dapat menjadi pilihan utama. Selain menjalankan roda perekonomian, kegiatan pariwisata ini mampu mengembalikan kecintaan akan nilai-nilai tradisi yang diwariskan oleh para leluhur.Untuk menjangkau kawasan wisata di Pulau Nias, wisatawan bisa memilih jalur laut dan udara. Kalau jalur udara, penerbangan ke Nias saat ini sudah lumayan banyak. Ada beberapa maskapai penerbangan yang melayani rute Medan-Nias dan Nias-Medan.Lama penerbangan Medan-Nias setelah berangkat dari Bandara Polonia dan mendarat di Bandara Binaka Gunung Sitoli sekitar 55 menit. Demikian sebaliknya dari Binaka ke Polonia jarak tempuhnya juga 55 menit. Kalau memilih transportasi laut, bisa dilakukan dengan menumpang KMP dari Sibolga ke Gunung Sitoli lama perjalanan 8-10 jam. Kalau tujuan ke Nias Selatan berarti harus menempuh perjalanan lagi lewat perjalanan darat dengan jarak tempuh 2 sampai 3 jam.Kabupaten Nias atau Gunungsitoli juga memiliki beberapa tempat wisata yang patut untuk dikunjungi, yaitu Pantai Muara Indah, Holi'amaeta So'arowig, Pantai Carlita, pantai Laowomaru, Gua Laowomaru, pantai Bunda, Miga, Air Terjun Onowaembo, dan Arah Namohalu. Sedangkan tempat wisata khususnya di Kabupaten Nias Selatan, antara lain Gomo (peninggalan barang bersejarah [megalitikum]), pantai Lagundri Sorake, Pantai Moale, Gunung Lolomatua, Hombo Batu dan Rumah adat di Bawomataluo, Pulau-Pulau Batu, dan Pulau Telo. Sedangkan yang berada di Kabupaten Nias Utara, antara lain Asi Walo atau Pantai Walo, Air Terjun Luaha Ndroi, Pantai Turogaloko, Lahewa, Pantai Turodawola Kecamatan Afulu, Pantai Toretolo, dan Pulau Makora. Sedangkan untuk Kabupaten Nias Barat, antara lain Pulau Asu-Hinako dan Pantai Sirombu.Dengan begitu banyak tempat wisata dan keaneka ragaman budaya di Pulau Nias, tidak salah jika Pulau Nias disamakan dengan Pulau Bali. Yang membedakan hanyalah masalah infrastruktur dimana Bali jauh lebih lengkap. So, tunggu apalagi segera berkunjung ke Pulau Nias! Ya'ahowu."
          : "Ya'ahowu, that's a typical greeting from Nias people when they meet someone. Nias Island with an area of 5,318 square kilometers holds a number of mysteries and uniqueness along with natural beauty and enchanting beaches. With its various natural beauties, the potential for Marine Tourism on Nias Island is spread throughout almost a number of places are known as the 100 islands. Cultural tourism is also no less interesting for us to visit. Traditional villages on Nias Island which still contain a number of cultural relics and historical speakers can be the main choice. Apart from running the economy, this tourism activity able to restore the love of traditional values passed down from ancestors. To reach the tourist areas on Nias Island, tourists can choose sea and air routes. As for air routes, there are currently quite a lot of flights to Nias. There are several airlines that serve the route Medan-Nias and Nias-Medan. The duration of the Medan-Nias flight after departing from Polonia Airport and landing at Binaka Gunung Sitoli Airport is around 55 minutes. Likewise, from Binaka to Polonia the distance is also 55 minutes. If you choose sea transportation, you can take the KMP from Sibolga to Gunung Sitoli, a journey of 8-10 hours. If your destination is South Nias, it means you have to travel again by land with a distance of 2 to 3 hours. Nias or Gunungsitoli Regency also has several tourist attractions that are worth visiting, namely Muara Indah Beach, Holi'amaeta So'arowig, Carlita Beach, Laowomaru beach, Laowomaru Cave, Bunda beach, Miga, Onowaembo Waterfall, and Arah Namohalu. Meanwhile, tourist attractions, especially in South Nias Regency, include Gomo (historical remains [megalithic]), Lagundri Sorake beach, Moale Beach, Mount Lolomatua, Hombo Batu and traditional houses in Bawomataluo, Batu Islands and Telo Island. Meanwhile, those in North Nias Regency include Asi Walo or Walo Beach, Luaha Ndroi Waterfall, Turogaloko Beach, Lahewa, Turodawola Beach, Afulu District, Toretolo Beach, and Makora Island. Meanwhile, for West Nias Regency, these include Asu-Hinako Island and Sirombu Beach. With so many tourist attractions and cultural diversity on Nias Island, it is not wrong if Nias Island is compared to Bali Island. The only difference is the infrastructure problem, where Bali is much more complete. So, what are you waiting for, visit Nias Island immediately! Ya'ahowu.",
    },
    {
      id: 2,
      datetime: "18/10/2018",
      location: "Jakarta, Indonesia",
      isDiff: true,
      isReverse: true,
      url: "https://www.inews.id/travel/destinasi/pantai-sorake-nias-karang-dan-ombaknya-unik-incaran-peselancar-dunia",
      title:
        locale === "id"
          ? "Pantai Sorake Nias, Karang dan Ombaknya Unik Incaran Peselancar Dunia"
          : "Sorake Nias Beach, its unique coral and waves are sought after by world surfers",
      text:
        locale === "id"
          ? "Travelling ke Nias, Sumatera Utara, belum lengkap tanpa berkunjung ke Kota Gunung Sitoli. Ini merupakan pintu masuk utama menuju Kepulauan Nias. Memasuki gerbang utama tersebut, traveler akan dimanjakan dengan pemandangan Kepulauan Nias yang memesona. Untuk urusan pantai, Nias adalah juaranya. Bahkan Pantai Sorake yang berada di Desa Botohilitano, Kecamatan Teluk Dalam, Kabupaten Nias Selatan menjadi destinasi wisata yang paling diincar wisatawan mancanegara. Sorake adalah pantai yang bersebelahan dengan Lagundri. Terkenal dengan ombaknya yang besar sehingga sangat cocok untuk kegiatan berselancar. Tak hanya ombaknya yang diincar peselancar, pemandangan bebatuan karang di Pantai Sorake juga memiliki keunikan tersendiri. 'Pantai Sorake merupakan pantai yang memiliki karakteristik unik dan berbeda dari yang lain. Bebatuan karangnya ada di mana-mana di seluruh tepi pantai, serta lautannya berbatasan langsung dengan bebatuan karang tersebut. Tidak terlihat adanya pasir yang melandai seperti di pantai-pantai lainnya. Ombaknya yang sangat tinggi membuat tempat ini menjadi favorit para peselancar yang ada di seluruh dunia. Bahkan demi untuk melakukan selancar di pantai Sorake ini, mereka rela untuk berbulan-bulan tinggal di sini. Ombak di Pantai Sorake merupakan salah satu yang terbaik di seluruh dunia', tulis Instagram @visit_sumut dikutip Kamis (18/10/2018). Posisi Pantai Sorake berdekatan dengan samudera, sehingga membuat pantai ini memiliki karakter ombak yang mencapai ketinggian hingga 15 meter. Ombaknya bisa bergulung dengan utuh sampai ke bibir pantai dan memiliki 11 kali gelombang sebelum pecah dengan ketinggian gelombang antara tiga hingga lima meter. Ombaknya punya lima tingkatan, sehingga peselancar dapat melakukan atraksi dengan berbagai gaya di setiap tingkatan. Peselancar juga bisa menaiki ombak hingga mencapai jarak sejauh 200 meter. Karena keunikan tersebut, pantai ini dikenal dengan baik oleh para peselancar. Sorake merupakan tempat berselancar terbaik kedua setelah pantai Hawaii yang ada di Amerika Serikat (AS)."
          : "Traveling to Nias, North Sumatra, is not complete without a visit to the city of Gunung Sitoli. This is the main entrance to the Nias Islands. Entering the main gate, travelers will be treated to stunning views of the Nias Islands. When it comes to beaches, Nias is the champion. In fact Sorake Beach, which is located in Botohilitano Village, Teluk Dalam District, South Nias Regency, is a tourist destination most sought after by foreign tourists. Sorake is a beach adjacent to Lagundri. It is famous for its big waves so it is very suitable for surfing activities. It's not just the waves that are targeted by surfers. , the view of the coral rocks at Sorake Beach also has its own uniqueness. 'Sorake Beach is a beach that has unique characteristics and is different from the others. The coral rocks are everywhere along the coast, and the sea is directly adjacent to the coral rocks. You can't see it there is sloping sand like on other beaches. The very high waves make this place a favorite of surfers all over the world. In fact, for the sake of surfing at Sorake beach, they are willing to stay here for months. The waves at Sorake Beach are one of the best in the whole world,' wrote Instagram @visit_sumut quoted Thursday (18/10/2018). The position of Sorake Beach is close to the ocean, giving this beach the character of waves that reach a height of up to 15 meters. The waves can roll completely up to the shoreline and have 11 waves before breaking with wave heights between three and five meters. The waves have five levels, so surfers can do attractions with various styles at each level. Surfers can also ride waves up to a distance of 200 meters. Because of this uniqueness, this beach is well known to surfers. Sorake is the second best surfing spot after Hawaii beaches in the United States (US).",
    },
    {
      id: 3,
      datetime: "24/02/2022",
      location: "Jakarta, Indonesia",
      isDiff: false,
      isReverse: false,
      url: "https://medan.kompas.com/read/2022/02/24/182956078/sejarah-dan-asal-usul-orang-nias-dari-leluhur-hingga-usulan-pembentukan?page=all",
      title:
        locale === "id"
          ? "Sejarah dan Asal-usul Orang Nias, dari Leluhur hingga Usulan Pembentukan Provinsi Kepulauan Nias"
          : "History and Origins of the Nias People, from Ancestors to the Proposal for the Formation of the Nias Islands Province",
      text:
        locale === "id"
          ? "Nias merupakan sebutan untuk pulau, kepulauan, sekaligus kelompok etnik yang mendiaminya. Pulau Nias berada di sebelah barat Pulau Sumatera, yang secara administratif merupakan bagian dari Provinsi Sumatera Utara. Penduduk asli Nias atau yang disebut Suku Nias merupakan salah satu suku di Indonesia yang memiliki keragaman budaya. Masyarakat suku Nias hidup dalam budaya megalitik yang dibuktikan dengan banyaknya batu-batu besar di wilayah pedalaman Pulau Nias. Berbicara tentang asal-usul Suku Nias, maka akan ada beberapa versi yang berkembang di masyarakat sana. Secara mitologi, leluhur Nias banyak didasarkan pada cerita lisan Nias atau yang disebut dengan hoho. Hoho adalah cerita lisan yang berkembang di masyarakat Nias yang diwariskan secara turun-temurun sehingga menyerupai mitos. Salah satu versi hoho yang berkembang menyebutkan manusia pertama yang tinggal di Nias disebut sowanua atau ono mbela. Ono mbela ini merupakan keturunan penguasa kayangan bernama Ibu Sirici, yang jumlah anaknya ada enam orang. Suatu hari Ibu Sirici memerintahkan anak-anaknya untuk turun ke bumi menggunakan liana lagara, atau sejenis tumbuhan merambat. Saat proses turun itu, enam anak Ibu Sirici terbelah jadi dua. Sebagian memilih tetap di atas pohon, sebagian lagi jatuh ke bumi karena liana lagara yang rapuh. Keturunan Ibu Sirici yang tetap di atas pohon ini yang disebut Ono mbela atau manusia pohon, yang dicirikan berkulit putih dan berparas cantik. Sedangkan mereka yang jatuh ke bumi memilih untuk tinggal di gua-gua. Mereka tidak disebut Ono mbela, namun disebut Nadaoya atau manusia gua. Jika Ono mbela bercirikan cantik dan putih, maka Nadaoya disebut memiliki kepala dan tubuh yang lebih besar, dengan warna kulit lebih gelap. Hoho tentang asal-usul Orang Nias ini didukung dengan penemuan artefak di gua-gua di Nias yang menujukkan adanya kehidupan manusia di masa lalu. Benda-benda prasejarah itu antara lain alat-alat tulang, batu serpih, batu pukul, hingga pipihan. Selain itu juga ditemukan sisa vertebrata yang terdiri dari ikan, ular, kura-kura, dan cangkang moluska. Hingga saat ini belum diketahui kapan wilayah Nias mulai dihuni manusia. Dalam suatu penelitian arkeologi disebutkan bahwa Pulau nias sudah dihuni sejak 12.000 tahun yang lalu oleh imigran dari Asia. Namun demikian, penelitian lain menyebutkan kelompok etnis Nias atau yang menamakan diri Ono niha (anak manusia), sudah menetap di wilayah tersebut 700 tahun lalu. Catatan tentang Nias dapat ditemukan dari tulisan tahun 150 Masehi, saat menyebutkan Pulau-pulau Barus, dengan Nias sebagai pulau terbesar. Memasuki abad ke-7 Masehi, pulau di barat Sumatera, termasuk Nias, sudah dikenal oleh pedagang asing baik dari Tiongkok amaupun Arab. Adapun penulisan spesifik tentang Nias berasal dari seorang pedagang Persia bernama Sulayman yang berkunjung ke Nias pada tahun 851. Dalam perjalanannya, Nias banyak berinteraksi dengan peradaban luas, seperti dari Tiongkok hingga Aceh. Diketahui, pada abad ke-15, Kesultanan Aceh menguasai wilayah Nias sehingga terjadi akulturasi budaya di sana. Keberadaan Nias juga diperhitungkan oleh VOC. Terbukti, pada tahun 1688 VOC menjalin kontrak dagang dengan suku-suku di Nias. VOC bahkan mendirikan perwakilan dagangnya di Nias, tepatnya di Gunungsitoli. Di sana juga dibangun pelabuhan dan bangunan berfungsi gudang. Pulau Nias merupakan terbesar di antara gugusan pulau di barat Sumatera dan telah memiliki pemerintahan sendiri di bawah Provinsi Sumatera Utara. Di Pulau Nias terdapat lima daerah administrasi, yaitu satu pemerintahan kota dan empat kabupaten. Lima daerah administrasi itu adalah Kota Gunungsitoli, Kabupaten Nias, Kabupaten Nias Selatan, Kabupaten Nias Utara, dan Kabupaten Nias Barat. Sejak beberapa tahun, wilayah Kepulauan Nias ini mengusulkan diri untuk menjadi pemerintahan provinsi yang berdiri sendiri. Proses pembentukan provinsi baru itu sudah sampai pada penetapan daerah otonomi baru (DOB) Provinsi Kepulauan Nias pada tahun 2014. Namun, proses penetapan tersebut terjadi di masa peralihan pemerintahan dari Presiden SBY ke Presiden Joko Widodo. Sehingga pemerintahan Presiden Jokowi saat itu memutuskan untuk menunda pengesahan pembentukan Provinsi Kepulauan Nias."
          : "Nias is the name for the island, archipelago, as well as the ethnic group that inhabits it. Nias Island is to the west of Sumatra Island, which is administratively part of North Sumatra Province. The native Nias population or what is called the Nias Tribe is one of the tribes in Indonesia which has cultural diversity. The Nias tribe people live in a megalithic culture as evidenced by the many large stones in the interior of Nias Island. Talking about the origins of the Nias tribe, there will be several versions that have developed among the people there. Mythologically, the ancestors of Nias are based on many in Nias oral stories or what is called hoho. Hoho is an oral story that developed in the Nias community which was passed down from generation to generation so that it resembles a myth. One version of the hoho that developed states that the first human to live in Nias was called sowanua or ono mbela. Ono mbela. These are the descendants of the ruler of heaven named Mrs. Sirici, whose number of children was six. One day Mrs. Sirici ordered her children to come down to earth using liana lagara, or a type of vine. During the descent process, Mrs. Sirici's six children were split into two. Some choose to remain in the trees, others fall to the earth because of the fragile lagara liana. The descendants of Mrs. Sirici who remain on this tree are called Ono mbela or tree people, who are characterized by white skin and beautiful looks. Meanwhile, those who fell to earth chose to live in caves. They are not called Ono mbela, but are called Nadaoya or cavemen. If Ono mbela is characterized as beautiful and white, then Nadaoya is said to have a larger head and body, with darker skin color. Hoho about the origins of the Nias people is supported by the discovery of artifacts in caves in Nias which show the existence of human life in the past. These prehistoric objects include bone tools, stone flakes, hammer stones, and flat stones. Apart from that, vertebrate remains were also found consisting of fish, snakes, turtles and mollusk shells. Until now it is not known when the Nias area began to be inhabited by humans. In an archaeological study, it was stated that Nias Island was inhabited 12,000 years ago by immigrants from Asia. However, other research states that the Nias ethnic group, or those who call themselves Ono niha (son of man), have settled in the area 700 years ago. Records about Nias can be found from writings from 150 AD, when mentioning the Barus Islands, with Nias as the largest island. Entering the 7th century AD, the islands west of Sumatra, including Nias, were already known to foreign traders from both China and Arabia. The specific writing about Nias comes from a Persian trader named Sulayman who visited Nias in 851. During his journey, Nias interacted with many widespread civilizations, such as from China to Aceh. It is known that in the 15th century, the Aceh Sultanate controlled the Nias region, resulting in cultural acculturation there. The existence of Nias was also taken into account by the VOC. Evidently, in 1688 the VOC entered into a trade contract with the tribes in Nias. The VOC even established a trade representative in Nias, precisely in Gunungsitoli. There was also a port built and a warehouse building. Nias Island is the largest among the group of islands in western Sumatra and has its own government under North Sumatra Province. On Nias Island there are five administrative regions, namely one city government and four districts. The five administrative regions are Gunungsitoli City, Nias Regency, South Nias Regency, North Nias Regency and West Nias Regency. For several years, the Nias Islands region has proposed to become an independent provincial government. The process of forming a new province has reached the point of establishing a new autonomous region (DOB) for the Nias Islands Province in 2014. However, this determination process occurred during the transition of government from President SBY to President Joko Widodo. So President Jokowi's government at that time decided to postpone the ratification of the formation of the Nias Islands Province.",
    },
    {
      id: 4,
      datetime: "05/09/2023",
      location: "Nias, Indonesia",
      isDiff: true,
      isReverse: true,
      url: "https://travel.detik.com/travel-news/d-6915226/keren-kejuaraan-wsl-nias-pro-targetkan-20-ribu-lebih-wisatawan",
      title:
        locale === "id"
          ? "Keren! Kejuaraan WSL Nias Pro Targetkan 20 Ribu Lebih Wisatawan"
          : "Cool! WSL Nias Pro Championship Targets More than 20 Thousand Tourists",
      text:
        locale === "id"
          ? "World Surfing League (WSL) Nias Pro akan diselenggarakan untuk keempat kalinya. Kejuaraan surfing internasional ini ditargetkan menggaet lebih dari 20 ribu wisatawan. Event ini telah berlangsung pada tahun 2018 dan sempat terjeda selama pandemi, sebelum akhirnya berlangsung kembali di tahun 2023 dan tahun ini. WSL Nias Pro akan berlangsung selama seminggu, tepatnya pada 11-17 September 2023. Tepatnya akan ada di Pantai Sorake, Kabupaten Nias Selatan. Peserta selancar internasional yang hadir terdiri dari 12 negara. Kendati baru akan dimulai beberapa waktu ke depan, beberapa peselancar internasional dikabarkan telah tiba di sini. 'Persiapan terkait dengan pertandingan, kita bekerja sama dengan PSOI (Persatuan Selancar Ombak Indonesia) sejauh ini jumlah peserta yang mendaftar sudah 192 peserta dari 12 negara dan kami juga memantau bahwa sebagian kurang lebih mungkin sekitar 55 orang sudah tiba di Kabupaten Nias Selatan,' ucap Kadisbudparpora Kabupaten Nias Selatan, Anggraini Dachi, saat The Weekly Press Briefing secara daring, Senin (4/9/2023). Pada event internasional ini, pihaknya menargetkan lebih dari 20 ribu wisatawan yang berkunjung ke Nias Selatan. Hal itu terdiri dari para peserta dan official, serta para wisatawan baik lokal maupun internasional. 'Target wisatawan dari jumlah 192 peserta, kami bisa pastikan tidak akan hadir sendiri. Jadi ada yang hadir berdua, bertiga termasuk dengan official sehingga mungkin target jumlah wisatawan yang hadir kurang lebih 600 orang,' ucapnya. 'Sedangkan jumlah wisatawan nusantara atau lokal dalam 7 hari kami targetkan 20.000. Selain main event kejuaraan Surfing (WSL) Nias Pro, kita menyelenggarakan beberapa side event yang kita harapkan bisa menarik kunjungan wisatawan pada saat itu di Pantai Sorake, Nias Selatan,' ia menambahkan. Anggraini menyatakan bahwa pihaknya telah mengupayakan fasilitas pendukung untuk pelaku usaha dan kelancaran event WSL. 'Kami melakukan berbagai penguatan fasilitas kepada pelaku usaha dan memastikan bagaimana dalam penyelenggaraan event ini masyarakat dan pelaku usaha bisa siap untuk menerima dan menyambut baik kunjungan seluruh wisatawan yang datang,'ucapnya. Sedangkan menurut Sekjen PSOI, Tipi Jabrik, tahun ini Nias akan disuguhkan oleh ombak yang besar. Sehingga hal itu akan sangat menarik bagi para peselancar. 'Menurut saya tahun ini kita mendapatkan ramalan cuaca kalau ombaknya itu bakalan besar banget. Dan ini salah satu alasan besok itu banyak peserta yang membawa fotografer dan tim media mereka. Itu salah satu kelebihan dari ombak nias,' ucapnya dalam kesempatan yang sama. 'Tak hanya bertanding, tapi mereka juga ingin mendokumentasikan ombak yang sangat baik itu pada saat event,' ia menambahkan. Kabarnya, para peselancar internasional ini akan diajak juga berkunjung ke desa wisata Hilisimaetano, atau desa yang terkenal akan lompat batu yang tinggi. Selain itu, menurut Ketua Tim Pokja Olahraga Internasional Kementerian Pariwisata dan Ekonomi Kreatif (Kemenparekraf), Kiagoos Irvan Faisal, menjelaskan bahwa para peselancar datang dari negara yang jauh. Hal itu berpotensi akan membuat mereka bisa tinggal dengan lama dan meningkatkan ekonomi lokal. '12 negara hadir, akan bertambah menjadi 15. Salah satu keberhasilan nias pro karena memang beberapa peselancar ini datangnya dari negara-negara yang jauh seperti Brazil, jadi ini ada long flight. Jadi mudah-mudahan penerbangan nanti akan teratasi dan peselancar akan hadir di sana juga para officialnya sehingga dengan length of stay yang panjang ekonomi nias khususnya akan sangat teratas dengan devisa yang cukup besar dari penyelenggaraan kegiatan,' ucapnya."
          : "The World Surfing League (WSL) Nias Pro will be held for the fourth time. This international surfing championship is targeted to attract more than 20 thousand tourists. This event took place in 2018 and was paused during the pandemic, before finally taking place again in 2023 and this year . WSL Nias Pro will take place for a week, precisely on 11-17 September 2023. To be precise, it will be at Sorake Beach, South Nias Regency. The international surfing participants in attendance consist of 12 countries. Even though it will only start some time in the future, there are several international surfers reported to have arrived here. 'Preparations related to the competition, we are working together with PSOI (Indonesian Wave Surfing Association) so far the number of participants who have registered is 192 participants from 12 countries and we are also monitoring that some, perhaps around 55 people have arrived. South Nias Regency,' said the Head of the South Nias Regency Culture and Tourism Department, Anggraini Dachi, during The Weekly Press Briefing online, Monday (4/9/2023). At this international event, the party is targeting more than 20 thousand tourists visiting South Nias. This consists of participants and officials, as well as tourists, both local and international. 'We can confirm that the target tourists are 192 participants and will not attend alone. 'So there were people attending in twos and threes, including officials, so perhaps the target number of tourists attending was around 600 people,' he said. 'Meanwhile, we are targeting the number of domestic or local tourists in 7 days to be 20,000. 'Apart from the Nias Pro Surfing Championship (WSL) main event, we are holding several side events which we hope will attract tourist visits at Sorake Beach, South Nias,' he added. Anggraini stated that his party had provided supporting facilities for business actors and the smooth running of WSL events. 'We are strengthening various facilities for business actors and ensuring that in organizing this event, the community and business actors are ready to receive and welcome the visits of all tourists who come,' he said. Meanwhile, according to the Secretary General of PSOI, Tipi Jabrik, this year Nias will be presented with big waves. So it will be very interesting for surfers. 'I think this year we get a weather forecast that the waves will be really big. And this is one of the reasons that many participants will bring their photographers and media teams tomorrow. 'That's one of the advantages of the Nias waves,'he said on the same occasion. 'Not only competing, but they also want to document the excellent waves during the event,' he added. Reportedly, these international surfers will also be invited to visit the tourist village of Hilisimaetano, or a village famous for high rock jumping. Apart from that, according to the Chair of the International Sports Working Group Team of the Ministry of Tourism and Creative Economy (Kemenparekraf), Kiagoos Irvan Faisal, explained that surfers come from far away countries. This will potentially allow them to stay longer and improve the local economy. '12 countries are present, this will increase to 15. One of the successes of Nias Pro is that some of these surfers come from countries as far away as Brazil, so there are long flights. 'So hopefully the flights will be resolved and the surfers will be there as well as the officials so that with a long length of stay, the Nias economy in particular will be at the top with quite a large amount of foreign exchange from organizing activities,' he said.",
    },
  ];

  return articleList;
};

export default getArticle;
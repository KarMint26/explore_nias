"use client";

import { useLocale } from "@/contexts/LocaleContext";
import type { culture } from "@/utils/types";

const getCulture = () => {
  const { locale } = useLocale();

  const cultureList: Array<culture> = [
    {
      id: 1,
      title: locale === "id" ? "Lompat Batu" : "Rock Jump",
      longTitle: locale === "id" ? "Lompat Batu" : "Rock Jump",
      text:
        locale === "id"
          ? "Lompat batu (Hombo Batu) adalah praktek budaya Nias yang unik. Ini juga terkenal oleh orang Indonesia karena, upacara lompat batu Nias digambarkan pada uang lama seribu rupiah. Awalnya upacara lompat batu adalah sebagian dari ritual inisiasi  pria muda untuk diterima sebagai orang dewasa dan prajurit. Ketinggian piramida batu lompat itu adalah di antara 1,8 meter sampai 2,2 meter. Lompat ini dilakukan tanpa alas kaki dan latihan berulang-ulang diperlukan sebelum mencoba lompat ini."
          : "Stone jumping (Hombo Batu) is a unique Nias cultural practice. It is also famous among Indonesians because, the Nias stone jumping ceremony is depicted on the old thousand rupiah note. Initially the stone jumping ceremony was part of the initiation ritual for young men to be accepted as adults and warriors. The height of the jumping stone pyramid is between 1.8 meters and 2.2 meters. This jump is performed barefoot and repeated practice is required before attempting this jump.",
    },
    {
      id: 2,
      title: "Fondrakö",
      longTitle:
        locale === "id"
          ? "Pesta hukum adat (Fondrakö)"
          : "Traditional law festival (Fondrakö)",
      text:
        locale === "id"
          ? "Hukum adat dirumuskan dan disyahkan dalam upacara yang disebut Fondrakö. Pesta hukum itu secara periodis dibaharui. Hukum adat (fondrakö) tersebut disahkan dan ditetapkan dengan sumpah kutuk. Orang yang melanggar hukum itu dikutuki (larakö). Kerasnya hukuman tergantung dari apa pelanggaran yang dilakukan. Untuk setiap pelanggaran ada hukuman khusus. Hukuman bisa berkisar dari membayar denda ke penghukuman mati.  Denda bisa dibayar dengan beras, daging babi atau emas."
          : "Customary law is formulated and ratified in a ceremony called Fondrakö. The legal system is periodically updated. The customary law (fondrakö) is ratified and established with a curse oath. People who break the law are cursed (larakö). The severity of the punishment depends on the offense committed. For each violation there is a specific punishment. Punishments can range from paying a fine to the death penalty. Fines could be paid in rice, pork or gold.",
    },
    {
      id: 3,
      title: "Famatö Harimao",
      longTitle:
        locale === "id"
          ? "Upacara Harimau (Famatö Harimao)"
          : "Tiger Ceremony (Famatö Tiger)",
      text:
        locale === "id"
          ? "Pada zaman dulu di wilayah Maenamölö, Nias Selatan ada sebuah upacara di mana patung harimau diusung dan diarak keliling. Karena tidak ada harimau di Nias, patung itu (Adu Harimao) tampak lebih seperti anjing berkepala kucing. Upacara sakral ini digelar sekali setiap tujuh atau empat belas tahun. Usungan patung harimau itu kemudian dipatahkan dan patung harimau dibuang di sungai. Upacara tersebut dinamakan 'Famatö Harimao'. Masyarakat lokal percaya bahwa semua dosa yang mereka lakukan selama tahun-tahun sebelumnya akan hanyut bersama dengan patung."
          : "In ancient times in the Maenamölö region, South Nias there was a ceremony where a tiger statue was carried and paraded around. Because there were no tigers in Nias, the statue (Adu Harimao) looked more like a dog with a cat's head. This sacred ceremony was held once every seven or so fourteen years old. The stretcher of the tiger statue was then broken and the tiger statue was thrown into the river. The ceremony was called 'Famatö Harimao'. Local people believed that all the sins they had committed during the previous years would be washed away along with the statue.",
    },
    {
      id: 4,
      title: locale === "id" ? "Pakaian Adat" : "Traditional Clothes",
      longTitle:
        locale === "id" ? "Pakaian Adat Nias" : "Nias Traditional Clothes",
      text:
        locale === "id"
          ? "Pakaian tradisional Nias dinamakan 'Baru Oholu' untuk pakaian pria dan 'Baru Ladari' atau 'Baru Isitö' untuk pakaian wanita. Pakaian tradisional biasanya merah atau kuning dan dikombinasikan dengan warna hitam dan emas. Pada zaman dulu orang-orang di Nias tidak memiliki akses ke tekstil seperti kapas. Mereka membuat pakaian dari kulit pohon atau dengan menenun serat-serat dari kulit pohon atau rumput. Pakaian laki-laki terdiri dari rompi yang pada dasarnya cokelat atau hitam dan dihiasi ornamen kuning, merah dan hitam. Pakaian wanita hanya terdiri dari selembar kain yang melilit pinggang dan tanpa baju atas, tapi dihiasi dengan gulungan gelang kuningan dan anting besar."
          : "Nias traditional clothing is called 'Baru Oholu' for men's clothing and 'Baru Ladari' or 'Baru Isitö' for women's clothing. Traditional clothing is usually red or yellow and combined with black and gold. In ancient times people in Nias did not have access to textiles such as cotton. They made clothing from tree bark or by weaving fibers from tree bark or grass. Men's clothing consisted of a vest that was basically brown or black and decorated with yellow, red and black ornaments. Women's clothing consisted only of a piece of cloth wrapped around the waist and no top, but decorated with rolled brass bracelets and large earrings.",
    },
    {
      id: 5,
      title: locale === "id" ? "Pesta Perkawinan" : "Wedding party",
      longTitle:
        locale === "id" ? "Pesta Perkawinan Adat" : "Traditional Wedding Party",
      text:
        locale === "id"
          ? "Perkawinan di Nias adalah eksogami. Mempelai pria harus melunasi emas kawin kepada semua pihak yang punya hubungan famili dengan mempelai wanita itu, terutama kepada pihak ibunya (uwu). Kemudian di dalam desa sendiri masih diharapkan supaya mempelai pria mengadakan satu pesta untuk seluruh warga. Pesta itu merupakan syarat kalau di kemudian hari hendak diadakan pesta jasa (owasa). Kalau mempelai pria tidak memberi pesta dalam desanya, dia tetap dianggap sebagai anak-anak (iraono), sekalipun ia sudah tua secara umur, dan tidak punya hak suara dalam desa."
          : "Marriage in Nias is exogamous. The groom must pay the wedding gold to all parties who are related to the bride, especially to her mother (uwu). Then in the village itself it is still expected that the groom will throw a party for all the residents. This party is a requirement if in the future a service party (owasa) is to be held. If the groom does not give a party in his village, he is still considered a child (iraono), even though he is old in age, and has no voting rights in the village.",
    },
    {
      id: 6,
      title:
        locale === "id"
          ? "Penghormatan Para Leluhur"
          : "Honoring the Ancestors",
      longTitle:
        locale === "id"
          ? "Penghormatan Para Leluhur"
          : "Honoring the Ancestors",
      text:
        locale === "id"
          ? "Dibuat patung dari kayu untuk orangtua yang baru meninggal. Patung itu diresmikan pada hari keempat sesudah kematian. Kemudian roh orang tua hadir dalam patung itu (pemujaan leluhur). Segala peristiwa yang terjadi di dalam satu keluarga disampaikan dengan doa kepada mereka."
          : "A wooden statue is made for a parent who has just died. The statue was unveiled on the fourth day after death. Then the parent's spirit is present in the statue (ancestor worship). All events that occur in a family are conveyed with prayer to them.",
    },
    {
      id: 7,
      title: locale === "id" ? "Perhiasan Nias" : "Nias Jewelry",
      longTitle: locale === "id" ? "Perhiasan dari Nias" : "Jewelry from Nias",
      text:
        locale === "id"
          ? "Secara tradisional laki-laki dan perempuan memakai banyak perhiasan terutamanya bangsawan. Akun sejarah tertulis pertama dari Nias menyebutkan bahwa masyarakat setempat memakai banyak perhiasan emas. Hiasan yang paling penting bagi pria adalah kalung yang terbuat dari tempurung kelapa atau tempurung kura-kura, yang disebut 'Kalabubu'. Ini hanya bisa dipakai oleh pendekar yang telah membuktikan diri dalam pertempuran. Wanita memakai perhiasan emas, kuningan, tembaga, kerang dan manik-manik."
          : "Traditionally men and women wear a lot of jewelry, especially nobles. The first written historical accounts from Nias mention that local people wore a lot of gold jewelry. The most important decoration for men is a necklace made of coconut shell or turtle shell, called 'Kalabubu'. It can only be worn by warriors who have proven themselves in battle. Women wear gold, brass, copper, shell and bead jewelry.",
    },
    {
      id: 8,
      title: "Ni'okindrö",
      longTitle:
        locale === "id"
          ? "Ni'okindrö (Anyaman Daun Janur)"
          : "Ni'okindrö (Woven Coconut Leaves)",
      text:
        locale === "id"
          ? "Pada pesta-pesta dan upacara, tempat untuk acara ini sering dihiasi dengan anyaman daun-daun janur.  Dengan menyambungkan anyaman daun janur ini, Orang Nias membuat bentuk dan pola yang indah . Ini disebut Ni'okindrö (anyaman daun janur). Gaya Ni'okindrö bervariasi antara daerah ke daerah. Bentuk yang dibuat oleh daun janur memiliki banyak arti yang berbeda. Hari ini ketika kunjungan tamu penting ke Nias, mereka sering disajikan dengan kalung yang dibuat menggunakan teknik ini. Kalung ini dikenal sebagai Nifatali Bulumio."
          : "At parties and ceremonies, the venue for this event is often decorated with woven coconut leaves. By connecting woven coconut leaves together, Nias people create beautiful shapes and patterns. This is called Ni'okindrö (woven coconut leaves). Ni'okindrö's style varies from region to region. The shapes made by coconut leaves have many different meanings. Today when important guests visit Nias, they are often presented with necklaces made using this technique. This necklace is known as Nifatali Bulumio.",
    },
    {
      id: 9,
      title: locale === "id" ? "Tari Moyo" : "Moyo Dance",
      longTitle:
        locale === "id" ? "Tari Tradisional Moyo" : "Moyo Traditional Dance",
      text:
        locale === "id"
          ? "Tari Moyo ini merupakan tari tradisional yang sudah ada sejak zaman dahulu dan masih dilestarikan hingga kini. Tarian ini merupakan salah satu tarian kebanggaan bagi masyarakat Nias yang kini banyak ditampilkan diberbagai acara perayaan maupun festival budaya. Dilansir dari laman negerikuindonesia, meski asal-usul Tari Moyo belum diketahui secara pasti, namun tarian ini sudah ada sejak ratusan tahun yang lalu. Dulunya, Tari Moyo ini hanya ditampilkan di kalangan masyarakat bangsawan saja, yang memiliki penari khusus untuk melakukan tarian ini."
          : "Moyo Dance is a traditional dance that has existed since ancient times and is still preserved today. This dance is one of the proud dances of the Nias people which is now often performed at various celebrations and cultural festivals. Reporting from the Negerikuindonesia page, although the origins of the Moyo Dance are not yet known for certain, this dance has been around for hundreds of years. Previously, the Moyo Dance was only performed among noble people, who had special dancers to perform this dance.",
    },
    {
      id: 10,
      title: locale === "id" ? "Tari Maena" : "Maena Dance",
      longTitle:
        locale === "id" ? "Tari Tradisional Maena" : "Maena Traditional Dance",
      text:
        locale === "id"
          ? "Tari Maena termasuk dalam golongan tarian yang dilakukan bersama-sama oleh beberapa orang dalam satu kelompok. Secara budaya, tarian ini merupakan warisan dari nenek moyang yang dilakukan secara turun-menurun oleh masyarakat Nias. Melansir dari warisanbudaya.kemdikbud.go.id, fungsi utama dari Tari Maena sendiri adalah untuk menyambut tamu. Selain itu, tarian ini juga berfungsi sebagai hiburan pada sebuah acara tertentu."
          : "Maena Dance is included in the group of dances that are performed together by several people in one group. Culturally, this dance is a legacy from their ancestors which has been carried out from generation to generation by the people of Nias. Reporting from inheritancekultur.kemdikbud.go.id, the main function of the Maena Dance itself is to welcome guests. Apart from that, this dance also functions as entertainment at certain events.",
    },
  ];

  return cultureList;
};

export default getCulture;

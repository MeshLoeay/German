import React, { useState } from 'react';

export default function MeinKoerperApp() {
  const [currentMode, setCurrentMode] = useState('word');

  const bodyData = [
    {
      categoryTitle: "Mein Körper (أعضاء الجسم)",
      sections: [
        {
          type: "der",
          title: "المذكر (Maskulin)",
          article: "der",
          pronoun: "mein",
          items: [
            { de: "Finger", ar: "إصبع", img: "https://images.akhbarelyom.com/UP/20220511150149402.jpg", speakWith: "der Finger" },
            { de: "Mund", ar: "فم", img: "https://png.pngtree.com/element_our/20190603/ourlarge/pngtree-mouth-teeth-human-organs-image_1440716.jpg", speakWith: "der Mund" },
            { de: "Zahn", ar: "سن / ضرس", img: "https://png.pngtree.com/png-vector/20240910/ourlarge/pngtree-cute-happy-tooth-3d-dentist-strong-healthy-teeth-png-image_13803217.png", speakWith: "der Zahn" },
            { de: "Zeh", ar: "إصبع القدم", img: "https://www.shutterstock.com/image-vector/foot-thumb-cartoon-vector-toe-260nw-1278011215.jpg", speakWith: "der Zeh" },
            { de: "Arm", ar: "ذراع", img: "https://png.pngtree.com/png-vector/20240309/ourlarge/pngtree-sticker-of-a-flexing-strong-arm-cartoon-png-image_11911722.png", speakWith: "der Arm" },
        { de: "Bauch", ar: "بطن", img: process.env.PUBLIC_URL + "/3.jpg", speakWith: "der Bauch" },
            { de: "Hals", ar: "رقبة", img: "https://png.pngtree.com/png-vector/20191123/ourmid/pngtree-neck-plastic-correction-icon-cartoon-style-png-image_2007449.jpg", speakWith: "der Hals" },
            { de: "Kopf", ar: "رأس", img: "https://png.pngtree.com/png-vector/20191122/ourlarge/pngtree-a-long-neck-vector-or-color-illustration-png-image_2017474.jpg", speakWith: "der Kopf" },
            { de: "Fuß", ar: "قدم", img: "https://png.pngtree.com/recommend-works/png-clipart/20250101/ourlarge/pngtree-five-fingers-on-the-soles-of-both-feet-png-image_14982373.png", speakWith: "der Fuß" },
            { de: "Rücken", ar: "ظهر", img: "https://columbiaclinic.us/wp-content/uploads/2020/05/unnamed-file-1-1-768x576.jpg", speakWith: "der Rücken" },

            { de: "Nacken", ar: "مؤخرة الرقبة", img: "https://png.pngtree.com/background/20230728/original/pngtree-back-of-the-head-occiput-teenager-nucha-photo-picture-image_4322571.jpg", speakWith: "der Nacken" },
            { de: "Ellbogen", ar: "المرفق", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPKRxaIjMQMfTCIHsXA2zDljoRGlOh7vomkwmdNwAqlvhhGnwDdriecuc&s", speakWith: "der Ellbogen" },
            { de: "Nabel", ar: "السرة", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFIP0bFg3qquzXmxXi_Ot58rsC6OVdZ4pPDxRpX9FA8w&s", speakWith: "der Nabel" },
            { de: "Knöchel", ar: "الكاحل", img: "https://png.pngtree.com/thumb_back/fw800/background/20230516/pngtree-on-a-black-background-it-shows-the-feet-of-a-person-image_2570375.jpg", speakWith: "der Knöchel" },
            { de: "Daumen", ar: "الإبهام", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLRptdXzoqgXjmUziWrI9e4EZ3t2UXEtgHcZ_4Dt3PA&s", speakWith: "der Daumen" },
            { de: "Zeigefinger", ar: "السبابة", img: "https://images.akhbarelyom.com/UP/20220511150149402.jpg", speakWith: "der Zeigefinger" },
            { de: "Mittelfinger", ar: "الإصبع الأوسط", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7QWIcfRp8BcLw-cFrh3jVsft_8Sa9pKGTQNTwy7dp2Q&s", speakWith: "der Mittelfinger" },
            { de: "Ringfinger", ar: "البنصر", img: "https://static.aljamila.com/pictures/69/coloured-fingers4.jpg", speakWith: "der Ringfinger" },
            { de: "kleine Finger", ar: "الخنصر", img: "https://static.aljamila.com/pictures/69/coloured-fingers5.jpg", speakWith: "der kleine Finger" },
            { de: "Po / Popo", ar: "المؤخرة", img: process.env.PUBLIC_URL + "/2.jpg", speakWith: "der Po" },
            { de: "Oberschenkel", ar: "الفخذ", img: process.env.PUBLIC_URL + "/2.jpg", speakWith: "der Oberschenkel" },
            { de: "Unterschenkel", ar: "أسفل الساق", img: process.env.PUBLIC_URL + "/2.jpg", speakWith: "der Unterschenkel" },
            { de: "Unterarm", ar: "الساعد", img: "https://img.youm7.com/ArticleImgs/2019/4/25/4594-%D8%B9%D8%B8%D8%A7%D9%85-%D8%A7%D9%84%D8%B9%D8%B6%D8%AF.jpg", speakWith: "der Unterarm" },

            { de: "Fingernagel", ar: "ظفر الأصبع", img:  process.env.PUBLIC_URL + "/6.jpg", speakWith: "der Fingernagel" },
            { de: "Zehennagel", ar: "ظفر إصبع القدم", img: "https://www.shutterstock.com/image-vector/foot-thumb-cartoon-vector-toe-260nw-1278011215.jpg", speakWith: "der Zehennagel" },
            { de: "Rumpf", ar: "الجذع", img:  process.env.PUBLIC_URL + "/5.jpg", speakWith: "der Rumpf" },
            { de: "Muskel", ar: "العضلة", img: "", speakWith: "der Muskel" },

            { de: "Penis", ar: "العضو الذكري", img: process.env.PUBLIC_URL + "/2.jpg", speakWith: "der Penis" },
            { de: "Hodensack", ar: "كيس الخصية", img: process.env.PUBLIC_URL + "/2.jpg", speakWith: "der Hodensack" },
            { de: "Bart", ar: "اللحية / الذقن (للرجال)", img: "https://png.pngtree.com/png-clipart/20200701/original/pngtree-hand-drawn-beard-fake-mustache-bearded-png-image_5362366.jpg", speakWith: "der Bart" },
            { de: "Schnurrbart", ar: "الشارب (للرجال)", img: "https://png.pngtree.com/png-clipart/20200701/original/pngtree-hand-drawn-beard-black-beard-fake-mustache-png-image_5359903.jpg", speakWith: "der Schnurrbart" },
            { de: "Uterus", ar: "الرحم", img: process.env.PUBLIC_URL + "/2.jpg", speakWith: "der Uterus" }
          ]
        },
        {
          type: "das",
          title: "المحايد (Neutral)",
          article: "das",
          pronoun: "mein",
          items: [
            { de: "Auge", ar: "عين", img: "https://png.pngtree.com/png-vector/20240124/ourlarge/pngtree-cartoon-eyes-free-png-png-image_11482599.png", speakWith: "das Auge" },
            { de: "Haar", ar: "شعرة", img: "https://thumbs.dreamstime.com/b/single-human-hair-strand-growing-follicle-skin-layer-d-471552710.jpg?w=992", speakWith: "das Haar" },
            { de: "Ohr", ar: "أذن", img: "https://cdn.prod.website-files.com/639994c60c9babedd27b9981/67ac74c34ff82573acbf0501_Causes%20of%20Hearing%20Loss%20in%20One%20Ear.jpg", speakWith: "das Ohr" },
            { de: "Bein", ar: "ساق", img: "https://i.pinimg.com/736x/68/7d/30/687d30dccea8c3f51f85ea0093dd90ea.jpg", speakWith: "das Bein" },
            { de: "Gesicht", ar: "وجه", img: "https://png.pngtree.com/png-vector/20240624/ourlarge/pngtree-a-cartoon-girl-face-png-image_12840717.png", speakWith: "das Gesicht" },

            { de: "Knie", ar: "الركبة", img: "https://cdn.prod.website-files.com/639994c60c9babedd27b9981/67039a9ea260b82f3a555cbb_%D8%B9%D9%85%D9%84%D9%8A%D8%A9%20%D8%AA%D8%A8%D8%AF%D9%8A%D9%84%20%D9%85%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%B1%D9%83%D8%A8%D8%A9.jpg", speakWith: "das Knie" },
            { de: "Gesäß", ar: "المؤخرة (رسمي/طبي)", img: process.env.PUBLIC_URL + "/2.jpg", speakWith: "das Gesäß" },
            { de: "Kinn", ar: "الذقن", img: "https://static.webteb.net/images/content/slideshowslide_sss_8645_51110543a8-613f-43e1-9890-c2277b096477.jpg", speakWith: "das Kinn" },
            { de: "Becken", ar: "الحوض", img: "https://orthopedic-knee-hip.com/wp-content/uploads/2020/09/%D9%85%D9%81%D8%B5%D9%84-%D8%A7%D9%84%D8%AD%D9%88%D8%B6.png", speakWith: "das Becken" },

            { de: "Handgelenk", ar: "معصم اليد / الرسغ", img: process.env.PUBLIC_URL + "/4.jpg", speakWith: "das Handgelenk" },
            { de: "Sprunggelenk", ar: "مفصل الكاحل", img: "https://dralshouli.com/wp-content/uploads/2024/05/ankle-pain-2048x1966.jpg", speakWith: "das Sprunggelenk" },
            { de: "Ohrläppchen", ar: "شحمة الأذن", img: "https://cdn.prod.website-files.com/639994c60c9babedd27b9981/67ac74c34ff82573acbf0501_Causes%20of%20Hearing%20Loss%20in%20One%20Ear.jpg", speakWith: "das Ohrläppchen" },
            { de: "Augenlid", ar: "جفن العين", img: "https://png.pngtree.com/png-vector/20240124/ourlarge/pngtree-cartoon-eyes-free-png-png-image_11482599.png", speakWith: "das Augenlid" },
            { de: "Schlüsselbein", ar: "عظمة الترقوة", img: "https://www.orthopedics-sportsmedicine.com/wp-content/uploads/2018/02/Clavicle_-_animation2-300x300.gif", speakWith: "das Schlüsselbein" },
            { de: "Dekolleté", ar: "منطقة أعلى الصدر", img: "https://img.magnific.com/premium-vector/human-chest-muscles_1162360-11493.jpg?w=1060", speakWith: "das Dekolleté" },

            { de: "Glied", ar: "العضو التناسلي الذكري", img:process.env.PUBLIC_URL + "/2.jpg", speakWith: "das Glied" },
            { de: "Schamhaar", ar: "شعر العانة", img:process.env.PUBLIC_URL + "/2.jpg", speakWith: "das Schamhaar" }
          ]
        },
        {
          type: "die",
          title: "المؤنث (Feminin)",
          article: "die",
          pronoun: "meine",
          items: [
            { de: "Hand", ar: "يد", img: "https://png.pngtree.com/png-vector/20240628/ourlarge/pngtree-cartoon-of-a-cute-hand-png-image_12740911.png", speakWith: "die Hand" },
            { de: "Nase", ar: "أنف", img: "https://png.pngtree.com/png-vector/20240621/ourlarge/pngtree-a-cartoon-nose-with-an-exaggeratedly-large-size-featuring-comical-and-png-image_12751007.png", speakWith: "die Nase" },
            { de: "Brust", ar: "صدر / ثدي", img: "https://img.magnific.com/premium-vector/human-chest-muscles_1162360-11493.jpg?w=1060", speakWith: "die Brust" },

            { de: "Stirn", ar: "الجبهة", img: "https://kmadri.com/wp-content/uploads/2024/07/%D8%AA%D8%AC%D8%A7%D8%B9%D9%8A%D8%AF-%D8%A7%D9%84%D8%AC%D8%A8%D9%87%D8%A9-%D9%84%D9%84%D8%B1%D8%AC%D8%A7%D9%84.jpg.webp", speakWith: "die Stirn" },
            { de: "Schulter", ar: "الكتف", img: "https://img.magnific.com/premium-vector/human-shoulder-icon-cartoon-illustration-human-shoulder-vector-icon-web-design_96318-24158.jpg?w=2000", speakWith: "die Schulter" },
            { de: "Taille", ar: "الخصر", img: "https://png.pngtree.com/element_our/20200609/ourlarge/pngtree-thin-waist-image_2233898.jpg", speakWith: "die Taille" },
            { de: "Hüfte", ar: "الورك", img: "https://png.pngtree.com/png-vector/20231019/ourlarge/pngtree-grilled-chicken-leg-png-image_10248924.png", speakWith: "die Hüfte" },
            { de: "Handfläche", ar: "راحة اليد", img: "https://png.pngtree.com/png-vector/20240628/ourlarge/pngtree-cartoon-of-a-cute-hand-png-image_12740911.png", speakWith: "die Handfläche" },
            { de: "Zunge", ar: "اللسان", img: "https://e7.pngegg.com/pngimages/327/205/png-clipart-tongue-tongue-thumbnail.png", speakWith: "die Zunge" },
            { de: "Wange", ar: "الخد", img: "https://png.pngtree.com/png-vector/20240624/ourlarge/pngtree-a-cartoon-girl-face-png-image_12840717.png", speakWith: "die Wange" },
            { de: "Lippe", ar: "الشفة", img: "https://png.pngtree.com/element_our/20190603/ourlarge/pngtree-mouth-teeth-human-organs-image_1440716.jpg", speakWith: "die Lippe" },
            { de: "Ferse", ar: "كعب القدم", img: "https://png.pngtree.com/recommend-works/png-clipart/20250101/ourlarge/pngtree-five-fingers-on-the-soles-of-both-feet-png-image_14982373.png", speakWith: "die Ferse" },

            { de: "Haut", ar: "الجلد / البشرة", img: "https://static.webteb.net/images/content/tbl_articles_article_36561_477f08fec29-56ed-4ebc-8cdb-ae5bd99395c4.jpg", speakWith: "die Haut" },
            { de: "Achsel", ar: "الإبط", img: "https://png.pngtree.com/png-clipart/20220113/ourlarge/pngtree-men-s-armpit-sweating-original-hand-painted-cartoon-png-image_4167348.png", speakWith: "die Achsel" },
            { de: "Wade", ar: "ربلة الساق / العضلة الخلفية للساق", img: "https://i.pinimg.com/736x/68/7d/30/687d30dccea8c3f51f85ea0093dd90ea.jpg", speakWith: "die Wade" },
            { de: "Brustwarze", ar: "حلمة الثدي", img: process.env.PUBLIC_URL + "/2.jpg", speakWith: "die Brustwarze" },
            { de: "Fußsohle", ar: "باطن القدم", img: "https://png.pngtree.com/recommend-works/png-clipart/20250101/ourlarge/pngtree-five-fingers-on-the-soles-of-both-feet-png-image_14982373.png", speakWith: "die Fußsohle" },

            { de: "Vagina / Scheide", ar: "العضو التاسلى للمراه", img: process.env.PUBLIC_URL + "/2.jpg", speakWith: "die Vagina" },
            { de: "Gebärmutter", ar: "الرحم (للنساء)", img:process.env.PUBLIC_URL + "/2.jpg", speakWith: "die Gebärmutter" },
            { de: "Klitoris", ar: "البظر (للنساء)", img:process.env.PUBLIC_URL + "/2.jpg", speakWith: "die Klitoris" },
            { de: "Vulva", ar: "الفرج (للنساء)", img:process.env.PUBLIC_URL + "/2.jpg", speakWith: "die Vulva" },
            { de: "Vorhaut", ar: "القلفة (للرجال)", img: process.env.PUBLIC_URL + "/2.jpg", speakWith: "die Vorhaut" },
            { de: "Prostata", ar: "البروستاتا (للرجال)", img:process.env.PUBLIC_URL + "/2.jpg", speakWith: "die Prostata" }
          ]
        },
        {
          type: "plural",
          title: "الجمع (Plural)",
          article: "die (Pl.)",
          pronoun: "meine",
          items: [
            { de: "Haare", ar: "شعر", img: "https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-cartoon-red-scorpion-head-image_1234217.jpg", speakWith: "die Haare" },
            { de: "Zähne", ar: "أسنان", img: "https://vid.alarabiya.net/images/2016/11/07/460c0ca7-ae3c-4425-916c-f4c94ee85601/460c0ca7-ae3c-4425-916c-f4c94ee85601_16x9_1200x676.jpg?width=1120", speakWith: "die Zähne" },

            { de: "Augen", ar: "عيون", img: "https://png.pngtree.com/png-vector/20240124/ourlarge/pngtree-cartoon-eyes-free-png-png-image_11482599.png", speakWith: "die Augen" },
            { de: "Ohren", ar: "آذان", img: "https://cdn.prod.website-files.com/639994c60c9babedd27b9981/67ac74c34ff82573acbf0501_Causes%20of%20Hearing%20Loss%20in%20One%20Ear.jpg", speakWith: "die Ohren" },
            { de: "Hände", ar: "أيدٍ", img: "https://png.pngtree.com/png-vector/20240628/ourlarge/pngtree-cartoon-of-a-cute-hand-png-image_12740911.png", speakWith: "die Hände" },
            { de: "Füße", ar: "أقدام", img: "https://png.pngtree.com/recommend-works/png-clipart/20250101/ourlarge/pngtree-five-fingers-on-the-soles-of-both-feet-png-image_14982373.png", speakWith: "die Füße" },
            { de: "Arme", ar: "أذرع", img: "https://png.pngtree.com/png-vector/20240309/ourlarge/pngtree-sticker-of-a-flexing-strong-arm-cartoon-png-image_11911722.png", speakWith: "die Arme" },
            { de: "Beine", ar: "سيقان", img: "https://i.pinimg.com/736x/68/7d/30/687d30dccea8c3f51f85ea0093dd90ea.jpg", speakWith: "die Beine" },
            { de: "Finger", ar: "أصابع اليد", img: "https://images.akhbarelyom.com/UP/20220511150149402.jpg", speakWith: "die Finger" },
            { de: "Zehen", ar: "أصابع القدم", img: "https://www.shutterstock.com/image-vector/foot-thumb-cartoon-vector-toe-260nw-1278011215.jpg", speakWith: "die Zehen" },
            { de: "Lippen", ar: "شفاه", img: "https://png.pngtree.com/element_our/20190603/ourlarge/pngtree-mouth-teeth-human-organs-image_1440716.jpg", speakWith: "die Lippen" },
            { de: "Wangen", ar: "خدود", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXo9-CVxKG5KbBG4a-KcesJgQjwqJQtHYy6kkWK92ujw&s", speakWith: "die Wangen" },
            { de: "Augenbrauen", ar: "حواجب", img: "https://png.pngtree.com/png-clipart/20220329/ourlarge/pngtree-brown-eyebrows-png-image_4519509.png", speakWith: "die Augenbrauen" },
            { de: "Schultern", ar: "أكتاف", img: "https://img.magnific.com/premium-vector/human-shoulder-icon-cartoon-illustration-human-shoulder-vector-icon-web-design_96318-24158.jpg?w=2000", speakWith: "die Schultern" },
            { de: "Brüste", ar: "أثداء", img: "https://img.magnific.com/premium-vector/human-chest-muscles_1162360-11493.jpg?w=1060", speakWith: "die Brüste" },

            { de: "Wimpern", ar: "رموش", img: "https://png.pngtree.com/png-vector/20240124/ourlarge/pngtree-cartoon-eyes-free-png-png-image_11482599.png", speakWith: "die Wimpern" },
            { de: "Fingernägel", ar: "أظافر اليدين", img: process.env.PUBLIC_URL + "/6.jpg", speakWith: "die Fingernägel" },
            { de: "Zehennägel", ar: "أظافر القدمين", img: "https://www.shutterstock.com/image-vector/foot-thumb-cartoon-vector-toe-260nw-1278011215.jpg", speakWith: "die Zehennägel" },
            { de: "Achseln", ar: "إبطين", img: "https://png.pngtree.com/png-clipart/20220113/ourlarge/pngtree-men-s-armpit-sweating-original-hand-painted-cartoon-png-image_4167348.png", speakWith: "die Achseln" },
            { de: "Poren", ar: "مسام الجلد", img: "https://cdn.maruderm.com/site-media/site/marudermcosmetics/assets/blog/skin-pores.jpg", speakWith: "die Poren" },

            { de: "Hoden", ar: "الخصيتين (للرجال)", img:process.env.PUBLIC_URL + "/2.jpg", speakWith: "die Hoden" },
            { de: "Eierstöcke", ar: "المبايض (للنساء)", img: process.env.PUBLIC_URL + "/2.jpg", speakWith: "die Eierstöcke" },
            { de: "Schamlippen", ar: "أشفار الفرج (للنساء)", img:process.env.PUBLIC_URL + "/2.jpg", speakWith: "die Schamlippen" }
          ]
        }
      ]
    }
  ];

  const speakText = (text) => {
    if (!('speechSynthesis' in window)) {
      alert('متصفحك لا يدعم نطق الصوت.');
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'de-DE';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  const handleCardClick = (fullText, pureWord, e) => {
    let textToSpeak = (currentMode === 'article') ? fullText : pureWord;
    speakText(textToSpeak);

    const card = e.currentTarget;
    if (card) {
      card.classList.add('speaking');
      setTimeout(() => {
        if (card) card.classList.remove('speaking');
      }, 800);
    }
  };

  return (
    <div style={{ direction: 'rtl' }} className="app-container">
      <style>{`
        :root {
          --primary-der: #38bdf8;
          --primary-das: #4ade80;
          --primary-die: #f472b6;
          --primary-plural: #fb923c;
          --text-main: inherit;
          --text-sub: rgba(148, 163, 184, 0.85);
          --shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
          --border-strong: rgba(148, 163, 184, 0.55);
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          -webkit-tap-highlight-color: transparent;
        }

        body {
          font-family: 'Fredoka', 'Tajawal', sans-serif;
          background: transparent;
          min-height: 100vh;
          padding: 1rem 0.75rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .top-bar {
          width: 100%;
          max-width: 1000px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          padding: 0.8rem 1rem;
          background: transparent;
          border: 2px solid var(--border-strong);
          box-shadow: var(--shadow);
          text-align: center;
          gap: 0.3rem;
          border-radius: 30px 6px;
        }

        .top-bar .title-main {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--primary-der);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .clickable-text {
          cursor: pointer;
          user-select: none;
        }

        .header-subtext {
          text-align: center;
          margin-bottom: 1rem;
          width: 100%;
          max-width: 1000px;
        }

        .header-subtext p {
          font-size: 0.9rem;
          color: var(--text-sub);
          font-family: 'Tajawal', sans-serif;
        }

        .controls-container {
          background: transparent;
          border: 2px solid var(--border-strong);
          padding: 0.7rem 0.9rem;
          box-shadow: var(--shadow);
          margin-bottom: 1.2rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: center;
          max-width: 900px;
          width: 100%;
          border-radius: 30px 6px;
        }

        .mode-title {
          font-family: 'Tajawal', sans-serif;
          font-weight: 600;
          font-size: 0.95rem;
          opacity: 0.9;
        }

        .mode-buttons-wrapper {
          display: flex;
          gap: 0.6rem;
          width: 100%;
          justify-content: center;
        }

        .mode-btn {
          flex: 1;
          background-color: transparent;
          color: var(--text-sub);
          border: 2px solid var(--border-strong);
          padding: 0.5rem 0.5rem;
          font-size: 0.85rem;
          font-family: 'Tajawal', sans-serif;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          border-radius: 30px 6px;
        }

        .mode-btn.active {
          background-color: var(--primary-der);
          color: #0f172a;
          border-color: var(--primary-der);
          box-shadow: 0 4px 14px rgba(56, 189, 248, 0.3);
        }

        .section-container {
          width: 100%;
          max-width: 1100px;
          margin-bottom: 1.8rem;
        }

        .category-header-banner {
          display: inline-flex;
          background: transparent;
          border: 2px solid var(--border-strong);
          padding: 0.5rem 1rem;
          margin: 1.2rem auto 1rem auto;
          box-shadow: var(--shadow);
          border-radius: 30px 6px;
          text-align: center;
        }

        .category-wrapper-center {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .category-header-banner h1 {
          font-size: 1.1rem;
          color: #f472b6;
          font-family: 'Fredoka', 'Tajawal', sans-serif;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .section-header {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.4rem;
          margin-bottom: 0.8rem;
          padding-bottom: 0.4rem;
          border-bottom: 2px solid var(--border-strong);
          direction: rtl;
        }

        .section-header.der { color: var(--primary-der); }
        .section-header.das { color: var(--primary-das); }
        .section-header.die { color: var(--primary-die); }
        .section-header.plural { color: var(--primary-plural); }

        .section-header h2 {
          font-size: 1rem;
          font-family: 'Tajawal', sans-serif;
          font-weight: 600;
        }

        .section-badge {
          font-size: 0.9rem;
          font-weight: 700;
          padding: 0.2rem 0.6rem;
          color: #0f172a;
          cursor: pointer;
          direction: ltr;
          display: inline-flex;
          gap: 0.3rem;
          align-items: center;
          border-radius: 30px 6px;
        }

        .badge-der { background-color: var(--primary-der); }
        .badge-das { background-color: var(--primary-das); }
        .badge-die { background-color: var(--primary-die); }
        .badge-plural { background-color: var(--primary-plural); }

        .grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          direction: ltr;
        }

        @media (min-width: 640px) {
          .grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (min-width: 900px) {
          .grid { grid-template-columns: repeat(4, 1fr); }
        }

        .card {
          background: transparent;
          padding: 0.8rem 0.6rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow);
          cursor: pointer;
          position: relative;
          transition: all 0.25s ease;
          border: 2px solid var(--border-strong);
          user-select: none;
          overflow: hidden;
          direction: rtl;
          border-radius: 30px 6px;
          min-height: 120px;
        }

        .card:active { transform: scale(0.96); }

        .card.der-card:hover { border-color: var(--primary-der); }
        .card.das-card:hover { border-color: var(--primary-das); }
        .card.die-card:hover { border-color: var(--primary-die); }
        .card.plural-card:hover { border-color: var(--primary-plural); }

        .card.speaking {
          animation: pulse 0.8s infinite alternate;
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          100% { transform: scale(1.04); }
        }

        .top-badges-container {
          position: absolute;
          top: 6px;
          left: 6px;
          right: 6px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          z-index: 2;
          direction: ltr;
        }

        .article-tag {
          font-size: 0.7rem;
          font-weight: 700;
          padding: 2px 6px;
          color: #0f172a;
          display: inline-flex;
          gap: 4px;
          align-items: center;
          border-radius: 30px 6px;
        }

        .tag-der { background-color: var(--primary-der); }
        .tag-das { background-color: var(--primary-das); }
        .tag-die { background-color: var(--primary-die); }
        .tag-plural { background-color: var(--primary-plural); color: #fff; }

        .img-box {
          width: 100%;
          aspect-ratio: 1 / 1;
          margin: 0.2rem 0 0.4rem 0;
          overflow: hidden;
          background: transparent;
          border-radius: 30px 6px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
          border-radius: 30px 6px;
        }

        .card:hover .img-box img {
          transform: scale(1.08);
        }

        .words-container {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 3px;
          direction: ltr;
          margin-top: auto;
        }

        .word-title {
          font-size: 0.95rem;
          font-weight: 600;
          text-align: left;
        }

        .word-arabic {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-sub);
          text-align: right;
          font-family: 'Tajawal', sans-serif;
        }
      `}</style>

      {/* Top Bar Header */}
      <div className="top-bar">
        <div className="title-main clickable-text" onClick={() => speakText('Mein Körper')}>
          <i className="fa-solid fa-child"></i> Die Körperteile (أعضاء الجسم)
        </div>
      </div>

      <div className="header-subtext">
        <p>اضغط على أي عنصر لسماع النطق الصحيح باللغة الألمانية 🇩🇪</p>
      </div>

      {/* Mode Controls */}
      <div className="controls-container">
        <div className="mode-title">اختر طريقة النطق عند الضغط على الكروت:</div>
        <div className="mode-buttons-wrapper">
          <button
            className={`mode-btn ${currentMode === 'word' ? 'active' : ''}`}
            onClick={() => setCurrentMode('word')}
          >
            <i className="fa-solid fa-volume-high"></i> نطق الكلمة فقط
          </button>
          <button
            className={`mode-btn ${currentMode === 'article' ? 'active' : ''}`}
            onClick={() => setCurrentMode('article')}
          >
            <i className="fa-solid fa-rotate"></i> نطق (الكلمة + الأداة)
          </button>
        </div>
      </div>

      {/* CONTAINER FOR SECTIONS */}
      <div id="contentContainer">
        {bodyData.map((cat, catIdx) => (
          <React.Fragment key={catIdx}>
            <div className="category-wrapper-center">
              <div className="category-header-banner">
                <h1><i className="fa-solid fa-heart-pulse"></i> {cat.categoryTitle}</h1>
              </div>
            </div>

            {cat.sections.map((sec, secIdx) => (
              <div className="section-container" key={secIdx}>
                <div className={`section-header ${sec.type}`}>
                  <h2>{sec.title}</h2>
                  <span
                    className={`section-badge badge-${sec.type}`}
                    onClick={() => speakText(sec.article.replace(' (Pl.)', ''))}
                  >
                    <span>{sec.pronoun}</span> | <span>{sec.article}</span>
                  </span>
                </div>

                <div className="grid">
                  {sec.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className={`card ${sec.type}-card`}
                      onClick={(e) => handleCardClick(item.speakWith, item.de, e)}
                    >
                      <div className="top-badges-container">
                        <span className={`article-tag tag-${sec.type}`}>
                          <span>{sec.pronoun}</span> | <span>{sec.article}</span>
                        </span>
                      </div>

                      {item.img ? (
                        <div className="img-box">
                          <img src={item.img} alt={item.de} loading="lazy" />
                        </div>
                      ) : (
                        <div style={{ height: '30px' }}></div>
                      )}

                      <div className="words-container">
                        <div className="word-title">{item.de}</div>
                        <div className="word-arabic">{item.ar}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
import React, { useState } from 'react';

export default function Tamreed2() {
  const [currentMode, setCurrentMode] = useState('word');

  const organsData = [
    {
      categoryTitle: "Die inneren Organe des menschlichen Körpers (الأعضاء والأنظمة الداخلية)",
      sections: [
        {
          type: "der",
          title: "المذكر (Maskulin)",
          article: "der",
          pronoun: "mein",
          items: [
            { de: "Magen", ar: "المعدة", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI9IaFYes-xSMOm85RrsUYKIer-_4LKrSthlvP5EEE-A&s", speakWith: "der Magen" },
            { de: "Dünndarm", ar: "الأمعاء الدقيقة", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5HD_lG8NA3sHzfvNAHrt_kwXTNLDhT-wTqzMW8i07GA&s", speakWith: "der Dünndarm" },
            { de: "Dickdarm", ar: "الأمعاء الغليظة", img: "https://backend.donyayadonya.com/storage/images/news/110269-ansdad-alamaaa.jpg", speakWith: "der Dickdarm" },
            { de: "Blinddarm", ar: "الزائدة الدودية", img: "https://drhanyelembabypedsurg.com/wp-content/uploads/2024/07/%D9%84%D8%B0%D8%A7%D9%8A%D8%AF%D8%A9-1.png", speakWith: "der Blinddarm" },
            { de: "Darm", ar: "الأمعاء / القولون", img: "https://cdn.alweb.com/thumbs/colonmedcare/article/fit710x532/%D8%A3%D9%8A%D9%86-%D9%8A%D9%82%D8%B9-%D8%A7%D9%84%D9%82%D9%88%D9%84%D9%88%D9%86-%D9%88%D9%83%D9%8A%D9%81-%D9%8A%D9%83%D9%88%D9%86-%D8%A3%D9%84%D9%85%D9%87-8419.jpeg", speakWith: "der Darm" },
            { de: "Kehlkopf", ar: "الحنجرة", img: "https://cdn.alweb.com/thumbs/health/article/fit710x532/1/%D8%A7%D9%84%D8%AD%D9%86%D8%AC%D8%B1%D8%A9-%D8%A7%D9%84%D8%A3%D8%AC%D8%B2%D8%A7%D8%A1-%D8%A7%D9%84%D8%A3%D9%87%D9%85%D9%8A%D8%A9-%D9%85%D8%B9-%D8%B1%D8%B3%D9%85-%D8%AA%D9%88%D8%B6%D9%8A%D8%AD%D9%8A.jpg", speakWith: "der Kehlkopf" },
            { de: "Muskel", ar: "العضلة", img: "", speakWith: "der Muskel" },
            { de: "Knochen", ar: "العظمة", img: "https://png.pngtree.com/element_our/20200611/ourlarge/pngtree-joint-body-structure-image_2251691.jpg", speakWith: "der Knochen" },
            { de: "Nerv", ar: "العصب", img: "https://cdn.alweb.com/thumbs/health/article/fit710x532/1/%D8%A7%D9%84%D8%AE%D9%84%D9%8A%D8%A9-%D8%A7%D9%84%D8%B9%D8%B5%D8%A8%D9%8A%D8%A9-%D8%A3%D8%AC%D8%B2%D8%A7%D8%A4%D9%87%D8%A7-%D9%88%D9%88%D8%B8%D9%8A%D9%81%D8%AA%D9%87%D8%A7.jpg", speakWith: "der Nerv" },
            { de: "Herzmuskel", ar: "عضلة القلب", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-RuhawiaLBNakMYGPMXfZAZrXvYn_vziOpUCXPDCZBBju4_tU_nxBceI&s", speakWith: "der Herzmuskel" }
          ]
        },
        {
          type: "das",
          title: "المحايد (Neutral)",
          article: "das",
          pronoun: "mein",
          items: [
            { de: "Gehirn", ar: "الدماغ", img: "https://static.webteb.net/images/content/tbl_articles_article_27106_79504c78b8e-9a98-41fc-bfa0-052bfeba8b6b.jpg", speakWith: "das Gehirn" },
            { de: "Herz", ar: "القلب", img: "https://static.webteb.net/images/content/tbl_articles_article_27453_1666b7b9705-9876-4cdb-b83c-3c51d996737a.jpg", speakWith: "das Herz" },
            { de: "Herz", ar: "القلب", img: "https://meshloeay.github.io/Your-Age/My-img/5.png", speakWith: "das Herz" },
            { de: "Rückenmark", ar: "النخاع شوكي", img: "https://qbi.uq.edu.au/files/27952/spinal-cord-vertebra.jpg", speakWith: "das Rückenmark" },
            { de: "Blut", ar: "الدم", img: "https://www.ilajak.com/uploads/posts/dca5d303c2528b0ce5da9d8d79e8252f7.jpg", speakWith: "das Blut" },
            { de: "Blutgefäß", ar: "الوعاء الدموي", img: "https://ishefaa.com/wp-content/uploads/2020/07/2018_9_12_15_6_13_966-768x512.jpg", speakWith: "das Blutgefäß" },
            { de: "Zwerchfell", ar: "الحجاب الحاجز", img: "https://www.sehatok.com/sites/default/files/styles/details_page_image_large/public/media/images/BD375169-419A-4CA6-90D9-C7A7ECE5F3FF.jpg?h=d1cb525d&itok=uuADqyg6%201x", speakWith: "das Zwerchfell" },
            { de: "Skelett", ar: "الهيكل العظمي", img: "https://png.pngtree.com/png-vector/20250827/ourlarge/pngtree-detailed-full-human-skeleton-anatomy-drawing-front-view-illustration-png-image_17322861.webp", speakWith: "das Skelett" },
            { de: "Gelenk", ar: "المفصل", img: "https://scontent.fcai20-5.fna.fbcdn.net/v/t39.30808-6/467962569_10161915968133953_6585833809876855002_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x1024&ctp=s1024x1024&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Eqgt83EEeP4Q7kNvwHunswQ&_nc_oc=AdpZmtfNmUXSC_RMckJLkNY5a_xFlhRpRlRYlYJXCdCjLloDoMEmnXnPZxiEUODZ1xw&_nc_zt=23&_nc_ht=scontent.fcai20-5.fna&_nc_gid=_rlLsPUNdh92z0FKB4jkiQ&_nc_ss=7d2a8&oh=00_AQOPawTS2xcFvZW8ShN3saROnyE97d6Pbrl1umBvLTzEsg&oe=6ADC21FB", speakWith: "das Gelenk" },
            { de: "Gewebe", ar: "النسيج الحيوي", img: "https://www.marefa.org/w/images/thumb/0/07/Plant_cell_type_sclerenchyma_fibers.png/300px-Plant_cell_type_sclerenchyma_fibers.png", speakWith: "das Gewebe" }
          ]
        },
        {
          type: "die",
          title: "المؤنث (Feminin)",
          article: "die",
          pronoun: "meine",
          items: [
            { de: "Luftröhre", ar: "القصبة الهوائية", img: "https://static.webteb.net/images/content/tbl_articles_article_25550_85703344da3-0054-4a84-bf80-0842a0555264.jpg", speakWith: "die Luftröhre" },
            { de: "", ar: "القصب المصرى", img: "https://www.foodtodayeg.com/Content/Upload/large/7202221162558814964314.jpg", speakWith: "" },
            { de: "Lunge", ar: "الرئة", img: "https://www.dalilimedical.com/webp_uploads/3523_1750345280.webp", speakWith: "die Lunge" },
            { de: "Leber", ar: "الكبد", img: "https://static.bangkokhospital.com/uploads/2026/09/k2_items_src_f8091000de3f026d209837e21bc2e700-optimized.webp", speakWith: "die Leber" },
            { de: "Gallenblase", ar: "المرارة", img: "https://tebcanadminstorageprod.blob.core.windows.net/001/Years/2023/Timeline/aec808b8-a091-4876-9bf2-3995d25e781b.jpg?sv=2017-04-17&sr=b&si=PrivatePolicy&sig=TjhUe4I1GtM%2BSfnVsL9emQz3EiEAzd4wscSMGAgtdU0%3D", speakWith: "die Gallenblase" },
            { de: "Bauchspeicheldrüse", ar: "البنكرياس", img: "https://static.webteb.net/images/content/tbl_articles_article_33554_1130c609229-9cb5-46b8-805a-8db636f66ca1.jpg", speakWith: "die Bauchspeicheldrüse" },
            { de: "Niere", ar: "الكلى", img: "https://static.webteb.net/images/content/tbl_articles_article_25630_39102a55336-5270-4c33-aab9-55a7b81ab764.jpg", speakWith: "die Niere" },
            { de: "Milz", ar: "الطحال", img: "https://cdn.alweb.com/thumbs/health/article/fit710x532/1/%D8%A7%D9%84%D8%B7%D8%AD%D8%A7%D9%84-%D8%A3%D8%AC%D8%B2%D8%A7%D8%A4%D9%87-%D9%88%D8%B8%D9%8A%D9%81%D8%AA%D9%87-%D9%85%D8%B9-%D8%B1%D8%B3%D9%85-%D8%AA%D9%88%D8%B6%D9%8A%D8%AD%D9%8A.jpg", speakWith: "die Milz" },
            { de: "Schilddrüse", ar: "الغدة الدرقية", img: "https://www.ahdubai.com/uploads/departments/7317616093930281199711600661751thyriod.webp", speakWith: "die Schilddrüse" },
            { de: "Harnblase", ar: "المثانة", img: "https://cdn.alweb.com/thumbs/health/article/fit710x532/1/%D8%A7%D9%84%D9%85%D8%AB%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%AA%D8%B4%D8%B1%D9%8A%D8%AD-%D8%A7%D9%84%D9%88%D8%B8%D9%8A%D9%81%D8%A9-%D9%88%D8%A7%D9%84%D8%AE%D8%B5%D8%A7%D8%A6%D8%B5.jpg", speakWith: "die Harnblase" },
            { de: "Harnwege", ar: "المسالك البولية", img: "https://mustafasofikerim.com.tr/wp-content/uploads/2023/12/idrar-yolu-enfeksiyonu-1170x759-1.png", speakWith: "die Harnwege" },
            { de: "Speiseröhre", ar: "المريء", img: "https://www.albayan.ae/assets/archives/images/2018/11/11/3405784.jpg", speakWith: "die Speiseröhre" },
            { de: "Arterie", ar: "الشريان", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhU3mJkM5IfS_MfytdBEcIplfn2-F05bj92vHC2EV5bTC7jM99h7Snibo8hYZYPO1opsvxmxNLqefvsqI1MvwDOZDyocy6UeG2Kmw6IeyPJhH5KJB2qdUK03xGJGnhOAQM5XyWr8Wtvr6Y/s1600/branches+of+vertibral+arteries.png", speakWith: "die Arterie" },
            { de: "Vene", ar: "الوريد", img: "https://www.wikihow.com/images/thumb/5/5d/Inject-Into-a-Vein-Step-11.jpg/v4-728px-Inject-Into-a-Vein-Step-11.jpg.webp", speakWith: "die Vene" },
            { de: "Zelle", ar: "الخلية", img: "https://files.cdn-files-a.com/uploads/114821/normal_gi-66e6b6560fa51.jpg", speakWith: "die Zelle" },
            { de: "Aorta", ar: "الشريان الأورطي", img: "https://upload.wikimedia.org/wikipedia/commons/9/91/Aorta_scheme.jpg?utm_source=ar.wikipedia.org&utm_campaign=index&utm_content=original", speakWith: "die Aorta" }
          ]
        },
        {
          type: "plural",
          title: "الجمع (Plural)",
          article: "die (Pl.)",
          pronoun: "meine",
          items: [
            { de: "Lungen", ar: "الرئتين", img: "https://www.dalilimedical.com/webp_uploads/3523_1750345280.webp", speakWith: "die Lungen" },
            { de: "Nieren", ar: "الكليتين", img: "https://static.webteb.net/images/content/tbl_articles_article_25630_39102a55336-5270-4c33-aab9-55a7b81ab764.jpg", speakWith: "die Nieren" },
            { de: "Innereien", ar: "الأعضاء / الأحشاء الداخلية", img: "https://static.webteb.net/images/content/slideshowslide_sss_9350_3833fdd340d-76ed-4107-b04e-ed63207f6dc7.jpg", speakWith: "die Innereien" },
            { de: "Arterien", ar: "الشرايين", img: "https://assets.mayoclinic.org/content/dam/media/en/images/2023/02/09/large-arteries.jpg", speakWith: "die Arterien" },
            { de: "Venen", ar: "الأوردة", img: "https://img.youm7.com/ArticleImgs/2019/6/26/91395-%D8%A3%D9%83%D8%A8%D8%B1-%D8%A7%D9%84%D8%A3%D9%88%D8%B1%D8%AF%D8%A9-%D9%81%D9%89-%D8%A7%D9%84%D8%AC%D8%B3%D9%85.jpg", speakWith: "die Venen" },
            { de: "Nerven", ar: "الأعصاب", img: "https://dryasserreda.com/wp-content/uploads/2025/09/nerve_irritation-768x873.jpg", speakWith: "die Nerven" },
            { de: "Muskeln", ar: "العضلات", img: "https://png.pngtree.com/png-vector/20240913/ourlarge/pngtree-muscle-vector-png-image_13604098.png", speakWith: "die Muskeln" },
            { de: "Knochen", ar: "العظام", img: "https://png.pngtree.com/element_our/20200611/ourlarge/pngtree-joint-body-structure-image_2251691.jpg", speakWith: "die Knochen" },
            { de: "Zellen", ar: "الخلايا", img: "https://files.cdn-files-a.com/uploads/114821/normal_gi-66e6b6560fa51.jpg", speakWith: "die Zellen" }
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
        <div className="title-main clickable-text" onClick={() => speakText('Die inneren Organe des menschlichen Körpers')}>
          <i className="fa-solid fa-lungs"></i> Die inneren Organe des menschlichen Körpers - الأعضاء الداخلية في جسم الإنسان
        </div>
      </div>

      <div className="header-subtext">
        <p>اضغط على أي عضو لسماع النطق الصحيح باللغة الألمانية 🇩🇪</p>
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
        {organsData.map((cat, catIdx) => (
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
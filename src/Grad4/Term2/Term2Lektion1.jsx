import React, { useState } from 'react';

export default function Schule() {
  const [currentMode, setCurrentMode] = useState('word');
  const [speakingCard, setSpeakingCard] = useState(null);

  const setMode = (mode) => {
    setCurrentMode(mode);
  };

  const speakDirect = (text) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'de-DE';
    window.speechSynthesis.speak(utterance);
  };

  const speak = (word, article, cardId) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();

    setSpeakingCard(cardId);

    if (currentMode === 'full' && article) {
      // الترتيب: الكلمة + (وقف قصير) + الأداة + (سرعة بعد الأداة) + الكلمة
      const utterance1 = new SpeechSynthesisUtterance(word);
      utterance1.lang = 'de-DE';

      const utterance2 = new SpeechSynthesisUtterance(article);
      utterance2.lang = 'de-DE';

      const utterance3 = new SpeechSynthesisUtterance(word);
      utterance3.lang = 'de-DE';

      // تشغيل الكلمة الأولى
      window.speechSynthesis.speak(utterance1);

      // توقف بعد الكلمة الأولى قبل الأداة
      setTimeout(() => {
        if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
          window.speechSynthesis.speak(utterance2);
        }
      }, 450);

      // تقليل الوقت هنا لسرعة أكبر مباشرة بعد الأداة قبل نطق الكلمة الأخيرة
      setTimeout(() => {
        if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
          window.speechSynthesis.speak(utterance3);
        }
      }, 750);

      utterance3.onend = () => setSpeakingCard(null);
      utterance3.onerror = () => setSpeakingCard(null);
    } else {
      // الوضع العادي: نطق الكلمة مرة واحدة فقط
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'de-DE';

      utterance.onend = () => setSpeakingCard(null);
      utterance.onerror = () => setSpeakingCard(null);

      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div style={styles.body}>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&family=Fredoka:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      {/* الشريط العلوي */}
      <div style={styles.topBar}>
        <div
          style={{ ...styles.titleMain, ...styles.clickableText }}
          onClick={() => speakDirect('Schule')}
        >
          <span>Schule 🏫 مدرسة</span>
        </div>
      </div>

      <div style={styles.headerSubtext}>
        <p>اضغط على أي كلمة أو بطاقة للاستماع إلى النطق الألماني الصحيح</p>
      </div>

      {/* التحكم في وضع النطق */}
      <div style={styles.controlsContainer}>
        <span style={styles.modeTitle}>اختر طريقة النطق عند الضغط على الكروت:</span>
        <div style={styles.modeButtonsWrapper}>
          <button
            style={{
              ...styles.modeBtn,
              ...(currentMode === 'word' ? styles.modeBtnActive : {}),
            }}
            id="btn-mode-word"
            onClick={() => setMode('word')}
          >
            <i className="fa-solid fa-volume-high"></i>
            نطق الكلمة فقط
          </button>
          <button
            style={{
              ...styles.modeBtn,
              ...(currentMode === 'full' ? styles.modeBtnActive : {}),
            }}
            id="btn-mode-full"
            onClick={() => setMode('full')}
          >
            <i className="fa-solid fa-repeat"></i>
            نطق (الكلمة + الأداة + الكلمة)
          </button>
        </div>
      </div>

      <div style={styles.sectionContainer}>
        {/* ==================== CATEGORY 1: IN DER KLASSE ==================== */}
        <div
          style={{ ...styles.categoryHeaderBanner, ...styles.clickableText }}
          onClick={() => speakDirect('In der Klasse')}
        >
          <h1 style={{ margin: 0 }}>🏫 In der Klasse (في الفصل)</h1>
        </div>

        {/* DER */}
        <div style={{ ...styles.sectionHeader, ...styles.sectionHeaderDer }}>
          <span
            style={{ ...styles.sectionBadge, ...styles.badgeDer, ...styles.clickableText, position: 'relative', paddingLeft: '28px', paddingRight: '12px' }}
            onClick={() => speakDirect('der')}
          >
            der
            <i className="fa-solid fa-volume-high" style={{ ...styles.badgeSpeakerLeft, backgroundColor: 'rgba(56, 189, 248, 0.3)' }}></i>
          </span>
          <h2 style={{ margin: 0 }}>المذكر (Masculin)</h2>
        </div>
        <div style={styles.grid}>
          {[
            { word: 'Papierkorb', ar: 'سلة المهملات', img: 'https://media.zid.store/cd9db128-ebb6-4f68-bfbd-a0a93263f354/9fe873a8-6407-43af-8abd-842eb1d0e985.jpg', type: 'der', cardClass: styles.cardDer, tagClass: styles.badgeDer, tagBg: 'rgba(56, 189, 248, 0.3)' },
            { word: 'Schrank', ar: 'دولاب / خزانة', img: 'https://arkanelqasr.com/wp-content/uploads/2022/09/%D8%AE%D8%B2%D8%A7%D9%86%D8%A9-%D9%85%D9%84%D8%A7%D8%A8%D8%B3-2-2-1.webp', type: 'der', cardClass: styles.cardDer, tagClass: styles.badgeDer, tagBg: 'rgba(56, 189, 248, 0.3)' },
            { word: 'Stuhl', ar: 'كرسي', img: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=400&auto=format&fit=crop&q=80', type: 'der', cardClass: styles.cardDer, tagClass: styles.badgeDer, tagBg: 'rgba(56, 189, 248, 0.3)' },
            { word: 'Tisch', ar: 'طاولة / منضدة', img: 'https://media.zid.store/thumbs/eaeeaeee-3342-4288-94a1-7276aeaff27d/dd5ac33d-f479-4f80-ad8a-1c860932f346-thumbnail-1000x1000-70.jpg', type: 'der', cardClass: styles.cardDer, tagClass: styles.badgeDer, tagBg: 'rgba(56, 189, 248, 0.3)' }
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                ...styles.card,
                ...item.cardClass,
                ...(speakingCard === item.word ? styles.speaking : {}),
              }}
              onClick={() => speak(item.word, item.type, item.word)}
            >
              <span style={{ ...styles.articleTag, ...item.tagClass, backgroundColor: item.type === 'der' ? '#38bdf8' : item.type === 'das' ? '#4ade80' : '#f472b6', paddingLeft: '26px', paddingRight: '10px' }}>
                {item.type}
                <i className="fa-solid fa-volume-high" style={{ ...styles.articleSpeakerLeft, backgroundColor: item.tagBg }}></i>
              </span>
              <div style={styles.imgBox}>
                <img src={item.img} alt={item.word} style={styles.img} />
              </div>
              <div style={styles.wordTitle}>{item.word}</div>
              <div style={styles.wordArabic}>{item.ar}</div>
            </div>
          ))}
        </div>

        {/* DAS */}
        <div style={{ ...styles.sectionHeader, ...styles.sectionHeaderDas, marginTop: '2.5rem' }}>
          <span
            style={{ ...styles.sectionBadge, ...styles.badgeDas, ...styles.clickableText, position: 'relative', paddingLeft: '28px', paddingRight: '12px' }}
            onClick={() => speakDirect('das')}
          >
            das
            <i className="fa-solid fa-volume-high" style={{ ...styles.badgeSpeakerLeft, backgroundColor: 'rgba(74, 222, 128, 0.3)' }}></i>
          </span>
          <h2 style={{ margin: 0 }}>المحايد (Neutral)</h2>
        </div>
        <div style={styles.grid}>
          {[
            { word: 'Fenster', ar: 'شباك / نافذة', img: 'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?w=400&auto=format&fit=crop&q=80', type: 'das', cardClass: styles.cardDas, tagClass: styles.badgeDas, tagBg: 'rgba(74, 222, 128, 0.3)' },
            { word: 'Pult', ar: 'ديسك', img: 'https://hmofficefurniture.com/wp-content/uploads/2023/07/ChatGPT-Image-Aug-26-2025-03_15_46-PM-1.jpg', type: 'das', cardClass: styles.cardDas, tagClass: styles.badgeDas, tagBg: 'rgba(74, 222, 128, 0.3)' },
            { word: 'Waschbecken', ar: 'حوض غسيل', img: 'https://www.ceramicbasin.com/wp-content/uploads/2024/07/beautiful-wholesale-marble-wash-basins-with-high-quality-1-750x600.webp', type: 'das', cardClass: styles.cardDas, tagClass: styles.badgeDas, tagBg: 'rgba(74, 222, 128, 0.3)' }
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                ...styles.card,
                ...item.cardClass,
                ...(speakingCard === item.word ? styles.speaking : {}),
              }}
              onClick={() => speak(item.word, item.type, item.word)}
            >
              <span style={{ ...styles.articleTag, ...item.tagClass, backgroundColor: '#4ade80', paddingLeft: '26px', paddingRight: '10px' }}>
                {item.type}
                <i className="fa-solid fa-volume-high" style={{ ...styles.articleSpeakerLeft, backgroundColor: item.tagBg }}></i>
              </span>
              <div style={styles.imgBox}>
                <img src={item.img} alt={item.word} style={styles.img} />
              </div>
              <div style={styles.wordTitle}>{item.word}</div>
              <div style={styles.wordArabic}>{item.ar}</div>
            </div>
          ))}
        </div>

        {/* DIE */}
        <div style={{ ...styles.sectionHeader, ...styles.sectionHeaderDie, marginTop: '2.5rem' }}>
          <span
            style={{ ...styles.sectionBadge, ...styles.badgeDie, ...styles.clickableText, position: 'relative', paddingLeft: '28px', paddingRight: '12px' }}
            onClick={() => speakDirect('die')}
          >
            die
            <i className="fa-solid fa-volume-high" style={{ ...styles.badgeSpeakerLeft, backgroundColor: 'rgba(244, 114, 182, 0.3)' }}></i>
          </span>
          <h2 style={{ margin: 0 }}>المؤنث (Feminin)</h2>
        </div>
        <div style={styles.grid}>
          {[
            { word: 'Klasse', ar: 'فصل دراسي', img: 'https://i.pinimg.com/736x/f0/d6/f8/f0d6f84fb5f25ba657694707d229a7ac.jpg', type: 'die', cardClass: styles.cardDie, tagClass: styles.badgeDie, tagBg: 'rgba(244, 114, 182, 0.3)' },
            { word: 'Tafel', ar: 'سبورة', img: 'https://5.imimg.com/data5/SELLER/Default/2025/9/547889501/VL/KN/WG/4020506/writing-surface-blackboard-1000x1000.png', type: 'die', cardClass: styles.cardDie, tagClass: styles.badgeDie, tagBg: 'rgba(244, 114, 182, 0.3)' },
            { word: 'Tür', ar: 'باب', img: 'https://eg-rv.homzmart.net/catalog/product/M/A/MAGARDOA380-env.jpg', type: 'die', cardClass: styles.cardDie, tagClass: styles.badgeDie, tagBg: 'rgba(244, 114, 182, 0.3)' },
            { word: 'Schultasche', ar: 'شنطة مدرسية', img: 'https://elrobystore.com/storage/products/6a81ad3cbd47c.jpg', type: 'die', cardClass: styles.cardDie, tagClass: styles.badgeDie, tagBg: 'rgba(244, 114, 182, 0.3)' },
            { word: 'Landkarte', ar: 'خريطة', img: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&auto=format&fit=crop&q=80', type: 'die', cardClass: styles.cardDie, tagClass: styles.badgeDie, tagBg: 'rgba(244, 114, 182, 0.3)' }
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                ...styles.card,
                ...item.cardClass,
                ...(speakingCard === item.word ? styles.speaking : {}),
              }}
              onClick={() => speak(item.word, item.type, item.word)}
            >
              <span style={{ ...styles.articleTag, ...item.tagClass, backgroundColor: '#f472b6', paddingLeft: '26px', paddingRight: '10px' }}>
                {item.type}
                <i className="fa-solid fa-volume-high" style={{ ...styles.articleSpeakerLeft, backgroundColor: item.tagBg }}></i>
              </span>
              <div style={styles.imgBox}>
                <img src={item.img} alt={item.word} style={styles.img} />
              </div>
              <div style={styles.wordTitle}>{item.word}</div>
              <div style={styles.wordArabic}>{item.ar}</div>
            </div>
          ))}
        </div>

        {/* ==================== CATEGORY 2: IN DER TASCHE ==================== */}
        <div
          style={{ ...styles.categoryHeaderBanner, ...styles.clickableText, marginTop: '3.5rem' }}
          onClick={() => speakDirect('In der Tasche')}
        >
          <h1 style={{ margin: 0 }}>🎒 In der Tasche (في الشنطة)</h1>
        </div>

        {/* DER (TASCHE) */}
        <div style={{ ...styles.sectionHeader, ...styles.sectionHeaderDer }}>
          <span
            style={{ ...styles.sectionBadge, ...styles.badgeDer, ...styles.clickableText, position: 'relative', paddingLeft: '28px', paddingRight: '12px' }}
            onClick={() => speakDirect('der')}
          >
            der
            <i className="fa-solid fa-volume-high" style={{ ...styles.badgeSpeakerLeft, backgroundColor: 'rgba(56, 189, 248, 0.3)' }}></i>
          </span>
          <h2 style={{ margin: 0 }}>المذكر (Masculin)</h2>
        </div>
        <div style={styles.grid}>
          {[
            { word: 'Bleistift', ar: 'قلم رصاص', img: 'https://samir-and-aly-stationaries.fra1.cdn.digitaloceanspaces.com/media/catalog/product/cache/0ee050c3ffc3555709b9bb6062f4d7e9/0/7/0720002201250_4.jpg', type: 'der', cardClass: styles.cardDer, tagClass: styles.badgeDer, tagBg: 'rgba(56, 189, 248, 0.3)' },
            { word: 'Block', ar: 'دفتر ملاحظات / مفكرة', img: 'https://img.joomcdn.net/b6f936c6e1129e6ad8367210b9bba96cee9a5b4c_original.jpeg', type: 'der', cardClass: styles.cardDer, tagClass: styles.badgeDer, tagBg: 'rgba(56, 189, 248, 0.3)' },
            { word: 'Farbstift', ar: 'قلم ألوان', img: 'https://imychic.com/wp-content/uploads/2023/09/Crayons-Couleur-12Pcs-Grand-Modele-Cleo-CCLong12G-1-1.jpg', type: 'der', cardClass: styles.cardDer, tagClass: styles.badgeDer, tagBg: 'rgba(56, 189, 248, 0.3)' },
            { word: 'Füller', ar: 'قلم حبر', img: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400&auto=format&fit=crop&q=80', type: 'der', cardClass: styles.cardDer, tagClass: styles.badgeDer, tagBg: 'rgba(56, 189, 248, 0.3)' },
            { word: 'Malkasten', ar: 'علبه الوان', img: 'https://elghazawy.b-cdn.net/32470/6223001416012.jpg', type: 'der', cardClass: styles.cardDer, tagClass: styles.badgeDer, tagBg: 'rgba(56, 189, 248, 0.3)' },
            { word: 'Pinsel', ar: 'فرشاة رسم', img: 'https://png.pngtree.com/png-clipart/20250124/original/pngtree-contemporary-paintbrush-design-for-creative-projects-png-image_19692068.png', type: 'der', cardClass: styles.cardDer, tagClass: styles.badgeDer, tagBg: 'rgba(56, 189, 248, 0.3)' },
            { word: 'Radiergummi', ar: 'ممحاة / أستيكة', img: 'https://smartstationery.net/wp-content/webpc-passthru.php?src=https://smartstationery.net/wp-content/uploads/2023/11/1698789549_Untitled-120copy.jpg&nocache=1', type: 'der', cardClass: styles.cardDer, tagClass: styles.badgeDer, tagBg: 'rgba(56, 189, 248, 0.3)' },
            { word: 'Spitzer', ar: 'براية', img: 'https://www.maktaba.ps/image/cache/catalog/products/22201000-2-1100x1100w.jpg', type: 'der', cardClass: styles.cardDer, tagClass: styles.badgeDer, tagBg: 'rgba(56, 189, 248, 0.3)' }
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                ...styles.card,
                ...item.cardClass,
                ...(speakingCard === item.word ? styles.speaking : {}),
              }}
              onClick={() => speak(item.word, item.type, item.word)}
            >
              <span style={{ ...styles.articleTag, ...item.tagClass, backgroundColor: '#38bdf8', paddingLeft: '26px', paddingRight: '10px' }}>
                {item.type}
                <i className="fa-solid fa-volume-high" style={{ ...styles.articleSpeakerLeft, backgroundColor: item.tagBg }}></i>
              </span>
              <div style={styles.imgBox}>
                <img src={item.img} alt={item.word} style={styles.img} />
              </div>
              <div style={styles.wordTitle}>{item.word}</div>
              <div style={styles.wordArabic}>{item.ar}</div>
            </div>
          ))}
        </div>

        {/* DAS (TASCHE) */}
        <div style={{ ...styles.sectionHeader, ...styles.sectionHeaderDas, marginTop: '2.5rem' }}>
          <span
            style={{ ...styles.sectionBadge, ...styles.badgeDas, ...styles.clickableText, position: 'relative', paddingLeft: '28px', paddingRight: '12px' }}
            onClick={() => speakDirect('das')}
          >
            das
            <i className="fa-solid fa-volume-high" style={{ ...styles.badgeSpeakerLeft, backgroundColor: 'rgba(74, 222, 128, 0.3)' }}></i>
          </span>
          <h2 style={{ margin: 0 }}>المحايد (Neutral)</h2>
        </div>
        <div style={styles.grid}>
          {[
            { word: 'Buch', ar: 'كتاب', img: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&auto=format&fit=crop&q=80', type: 'das', cardClass: styles.cardDas, tagClass: styles.badgeDas, tagBg: 'rgba(74, 222, 128, 0.3)' },
            { word: 'Federmäppchen', ar: 'مقلمة', img: 'https://elghazawy.b-cdn.net/157538/69168488_2961559737251914_1592198209747288064_n.webp', type: 'das', cardClass: styles.cardDas, tagClass: styles.badgeDas, tagBg: 'rgba(74, 222, 128, 0.3)' },
            { word: 'Heft', ar: 'كراسة / كشكول', img: 'https://i.pinimg.com/736x/03/21/e8/0321e86a0ae25df50d6ce0493fa5cd04.jpg', type: 'das', cardClass: styles.cardDas, tagClass: styles.badgeDas, tagBg: 'rgba(74, 222, 128, 0.3)' },
            { word: 'Lineal', ar: 'مسطرة', img: 'https://cdn.salla.sa/GQjBoylaN1eVkTohGyxg4PUNOJiH01WOtZ8rrXO9.jpg', type: 'das', cardClass: styles.cardDas, tagClass: styles.badgeDas, tagBg: 'rgba(74, 222, 128, 0.3)' },
            { word: 'Turnzeug', ar: 'ملابس الرياضة', img: 'https://img4.dhresource.com/webp/m/0x0/f3/albu/ys/j/28/af8f42c6-b4e5-423b-9111-17fd5c46667e.jpg', type: 'das', cardClass: styles.cardDas, tagClass: styles.badgeDas, tagBg: 'rgba(74, 222, 128, 0.3)' }
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                ...styles.card,
                ...item.cardClass,
                ...(speakingCard === item.word ? styles.speaking : {}),
              }}
              onClick={() => speak(item.word, item.type, item.word)}
            >
              <span style={{ ...styles.articleTag, ...item.tagClass, backgroundColor: '#4ade80', paddingLeft: '26px', paddingRight: '10px' }}>
                {item.type}
                <i className="fa-solid fa-volume-high" style={{ ...styles.articleSpeakerLeft, backgroundColor: item.tagBg }}></i>
              </span>
              <div style={styles.imgBox}>
                <img src={item.img} alt={item.word} style={styles.img} />
              </div>
              <div style={styles.wordTitle}>{item.word}</div>
              <div style={styles.wordArabic}>{item.ar}</div>
            </div>
          ))}
        </div>

        {/* DIE (TASCHE) */}
        <div style={{ ...styles.sectionHeader, ...styles.sectionHeaderDie, marginTop: '2.5rem' }}>
          <span
            style={{ ...styles.sectionBadge, ...styles.badgeDie, ...styles.clickableText, position: 'relative', paddingLeft: '28px', paddingRight: '12px' }}
            onClick={() => speakDirect('die')}
          >
            die
            <i className="fa-solid fa-volume-high" style={{ ...styles.badgeSpeakerLeft, backgroundColor: 'rgba(244, 114, 182, 0.3)' }}></i>
          </span>
          <h2 style={{ margin: 0 }}>المؤنث (Feminin)</h2>
        </div>
        <div style={styles.grid}>
          {[
            { word: 'Kreide', ar: 'طباشير', img: 'https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/72/686691/1.jpg?7386', type: 'die', cardClass: styles.cardDie, tagClass: styles.badgeDie, tagBg: 'rgba(244, 114, 182, 0.3)' },
            { word: 'Schere', ar: 'مقص', img: 'https://png.pngtree.com/png-vector/20250917/ourmid/pngtree-smiling-cartoon-scissors-with-red-handles-isolated-on-a-transparent-background-png-image_17472972.webp', type: 'die', cardClass: styles.cardDie, tagClass: styles.badgeDie, tagBg: 'rgba(244, 114, 182, 0.3)' }
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                ...styles.card,
                ...item.cardClass,
                ...(speakingCard === item.word ? styles.speaking : {}),
              }}
              onClick={() => speak(item.word, item.type, item.word)}
            >
              <span style={{ ...styles.articleTag, ...item.tagClass, backgroundColor: '#f472b6', paddingLeft: '26px', paddingRight: '10px' }}>
                {item.type}
                <i className="fa-solid fa-volume-high" style={{ ...styles.articleSpeakerLeft, backgroundColor: item.tagBg }}></i>
              </span>
              <div style={styles.imgBox}>
                <img src={item.img} alt={item.word} style={styles.img} />
              </div>
              <div style={styles.wordTitle}>{item.word}</div>
              <div style={styles.wordArabic}>{item.ar}</div>
            </div>
          ))}
        </div>

        {/* ==================== CATEGORY 3: AKTIVITÄTEN ==================== */}
        <div
          style={{ ...styles.categoryHeaderBanner, ...styles.clickableText, marginTop: '3.5rem' }}
          onClick={() => speakDirect('Aktivitäten')}
        >
          <h1 style={{ margin: 0 }}>🎨 Aktivitäten (الأنشطة والأفعال)</h1>
        </div>
        <div style={{ ...styles.sectionHeader, ...styles.sectionHeaderVerb }}>
          <span
            style={{ ...styles.sectionBadge, ...styles.badgeVerb, ...styles.clickableText, position: 'relative', paddingLeft: '28px', paddingRight: '12px' }}
            onClick={() => speakDirect('Verben')}
          >
            Verben
            <i className="fa-solid fa-volume-high" style={{ ...styles.badgeSpeakerLeft, backgroundColor: 'rgba(168, 85, 247, 0.3)' }}></i>
          </span>
          <h2 style={{ margin: 0 }}>الأفعال (Verbs)</h2>
        </div>
        <div style={styles.grid}>
          {[
            { word: 'basteln', ar: 'يمارس الأشغال اليدوية', img: 'https://m.media-amazon.com/images/I/71Voiv5-POL._AC_SL1500_.jpg' },
            { word: 'lesen', ar: 'يقرأ', img: 'https://png.pngtree.com/png-vector/20240625/ourlarge/pngtree-baby-read-the-book-png-image_12839865.png' },
            { word: 'malen', ar: 'يلون', img: 'https://png.pngtree.com/png-vector/20260111/ourlarge/pngtree-little-artist-at-work-painting-a-colorful-landscape-png-image_18477493.webp' },
            { word: 'rechnen', ar: 'يحسب', img: 'https://png.pngtree.com/background/20241219/original/pngtree-man-calculating-finance-at-home-with-calculator-people-salary-account-photo-picture-image_11664022.jpg' },
            { word: 'schlafen', ar: 'ينام', img: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&auto=format&fit=crop&q=80' },
            { word: 'schreiben', ar: 'يكتب', img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&auto=format&fit=crop&q=80' },
            { word: 'singen', ar: 'يغني', img: 'https://png.pngtree.com/png-vector/20251026/ourlarge/pngtree-a-man-passionately-singing-into-microphone-with-music-notes-depicted-in-png-image_17835263.webp' },
            { word: 'spielen', ar: 'يلعب', img: 'https://png.pngtree.com/recommend-works/png-clipart/20250118/ourlarge/pngtree-little-boy-playing-football-png-image_15260129.png' },
            { word: 'tanzen', ar: 'يرقص', img: 'https://png.pngtree.com/element_our/20200611/ourlarge/pngtree-dancing-singing-boy-image_2253365.jpg' },
            { word: 'turnen', ar: 'يمارس ألعاب القوى / جمباز', img: 'https://png.pngtree.com/png-clipart/20211020/ourlarge/pngtree-pommel-horse-gymnastics-cartoon-characters-png-image_4000056.png' },
            { word: 'zeichnen', ar: 'يرسم بالقلم الرصاص', img: 'https://i.pinimg.com/736x/e4/2b/f5/e42bf5e292b4ce99dc3a4393ac294856.jpg' }
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                ...styles.card,
                ...styles.cardVerb,
                ...(speakingCard === item.word ? styles.speaking : {}),
              }}
              onClick={() => speak(item.word, '', item.word)}
            >
              <div style={styles.imgBox}>
                <img src={item.img} alt={item.word} style={styles.img} />
              </div>
              <div style={styles.wordTitle}>{item.word}</div>
              <div style={styles.wordArabic}>{item.ar}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  body: {
    fontFamily: "'Fredoka', 'Tajawal', sans-serif",
    backgroundColor: '#0f172a',
    color: '#f8fafc',
    minHeight: '100vh',
    padding: '1rem 0.75rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxSizing: 'border-box',
    margin: 0,
  },
  topBar: {
    width: '100%',
    maxWidth: '1000px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1rem',
    padding: '1rem 1.2rem',
    background: '#1e293b',
    borderRadius: '30px 6px',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.2)',
    border: '1px solid #334155',
    textAlign: 'center',
    gap: '0.3rem',
  },
  titleMain: {
    fontSize: '1.6rem',
    fontWeight: 800,
    color: '#38bdf8',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  clickableText: {
    cursor: 'pointer',
    userSelect: 'none',
  },
  headerSubtext: {
    textAlign: 'center',
    marginBottom: '1.5rem',
    width: '100%',
    maxWidth: '1000px',
  },
  controlsContainer: {
    background: '#1e293b',
    padding: '0.8rem 1rem',
    borderRadius: '30px 6px',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.2)',
    marginBottom: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    alignItems: 'center',
    maxWidth: '900px',
    width: '100%',
    border: '1px solid #334155',
  },
  modeTitle: {
    fontFamily: "'Tajawal', sans-serif",
    fontWeight: 700,
    fontSize: '1rem',
    color: '#e2e8f0',
  },
  modeButtonsWrapper: {
    display: 'flex',
    gap: '0.6rem',
    width: '100%',
    justifyContent: 'center',
  },
  modeBtn: {
    flex: 1,
    backgroundColor: '#0f172a',
    color: '#94a3b8',
    border: '1.5px solid #334155',
    padding: '0.7rem 0.5rem',
    borderRadius: '30px 6px',
    fontSize: '0.85rem',
    fontFamily: "'Tajawal', sans-serif",
    fontWeight: 700,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.4rem',
    textAlign: 'center',
  },
  modeBtnActive: {
    backgroundColor: '#38bdf8',
    color: '#0f172a',
    borderColor: '#38bdf8',
    boxShadow: '0 4px 14px rgba(56, 189, 248, 0.3)',
  },
  sectionContainer: {
    width: '100%',
    maxWidth: '1100px',
    marginBottom: '2.5rem',
  },
  categoryHeaderBanner: {
    background: 'linear-gradient(135deg, #1e293b, #0f172a)',
    border: '2px solid #334155',
    borderRadius: '30px 6px',
    padding: '0.8rem 1.5rem',
    margin: '2rem 0 1.5rem 0',
    textAlign: 'center',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.2)',
    color: '#facc15',
    fontFamily: "'Fredoka', 'Tajawal', sans-serif",
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
    marginBottom: '1.2rem',
    paddingBottom: '0.4rem',
    borderBottom: '2px solid',
  },
  sectionHeaderDer: { color: '#38bdf8', borderColor: '#38bdf8' },
  sectionHeaderDas: { color: '#4ade80', borderColor: '#4ade80' },
  sectionHeaderDie: { color: '#f472b6', borderColor: '#f472b6' },
  sectionHeaderVerb: { color: '#a855f7', borderColor: '#a855f7' },
  sectionBadge: {
    fontSize: '1.2rem',
    fontWeight: 800,
    padding: '0.1rem 0.8rem',
    borderRadius: '30px 6px',
    color: '#0f172a',
    textTransform: 'lowercase',
  },
  badgeDer: { backgroundColor: '#38bdf8' },
  badgeDas: { backgroundColor: '#4ade80' },
  badgeDie: { backgroundColor: '#f472b6' },
  badgeVerb: { backgroundColor: '#a855f7', color: '#fff' },
  badgeSpeakerLeft: {
    position: 'absolute',
    left: '6px',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '0.75rem',
    padding: '3px',
    borderRadius: '50%',
  },
  articleSpeakerLeft: {
    position: 'absolute',
    left: '6px',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '0.7rem',
    padding: '3px',
    borderRadius: '50%',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    '@media (min-width: 768px)': {
      gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    },
    gap: '1.2rem',
  },
  card: {
    background: '#1e293b',
    borderRadius: '30px 6px',
    padding: '1rem 0.8rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
    position: 'relative',
    border: '2px solid #334155',
    userSelect: 'none',
    overflow: 'hidden',
  },
  cardDer: { backgroundColor: 'rgba(56, 189, 248, 0.1)' },
  cardDas: { backgroundColor: 'rgba(74, 222, 128, 0.1)' },
  cardDie: { backgroundColor: 'rgba(244, 114, 182, 0.1)' },
  cardVerb: { backgroundColor: 'rgba(168, 85, 247, 0.1)' },
  speaking: {
    transform: 'scale(1.04)',
    borderColor: '#38bdf8',
    boxShadow: '0 0 20px rgba(56, 189, 248, 0.5)',
  },
  articleTag: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontSize: '0.75rem',
    fontWeight: 800,
    padding: '3px 8px',
    borderRadius: '30px 6px',
    color: '#0f172a',
    zIndex: 2,
  },
  imgBox: {
    width: '100%',
    aspectRatio: '1 / 1',
    margin: '0.4rem 0 0.6rem 0',
    borderRadius: '30px 6px',
    overflow: 'hidden',
    background: '#0f172a',
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  wordTitle: {
    fontSize: '1.2rem',
    fontWeight: 700,
    color: '#ffffff',
    textAlign: 'center',
  },
  wordArabic: {
    fontSize: '0.95rem',
    fontWeight: 600,
    color: '#94a3b8',
    textAlign: 'center',
    fontFamily: "'Tajawal', sans-serif",
    marginTop: '2px',
  },
};
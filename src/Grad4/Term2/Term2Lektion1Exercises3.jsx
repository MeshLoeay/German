import React from 'react';

export default function InDerKlasse() {
  // دالة النطق الصوتي
  const speak = (text, lang) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      let utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div style={styles.body}>
      {/* الشريط العلوي الرئيسي */}
      <div
        style={styles.mainHeader}
        onClick={() => speak('In der Klasse', 'de-DE')}
      >
        <span style={styles.micIcon}>🎤</span>
        <h1 style={styles.mainHeaderH1}>🏫 In der Klasse (في الفصل)</h1>
      </div>

      {/* القسم الأول: الأوامر والطلبات السابقة */}
      <div style={styles.categoryHeader}>
        <span style={styles.categoryBadge}>الأوامر والطلبات</span>
        <span
          style={{...styles.categoryTitle, cursor: 'pointer'}}
          onClick={() => speak('Gehen und Ankommen', 'de-DE')}
        >
          الذهاب والقدوم داخل الفصل
        </span>
      </div>

      <div style={styles.gridContainer}>
        <div style={styles.contentCard}>
          <div style={styles.cardHeading}>اذهب من فضلك إلى</div>
          <hr style={styles.cardDivider} />

          <div style={styles.phraseBtn} onClick={() => speak('Geh bitte zum ....... !', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <div style={styles.arabicSide}>اذهب من فضلك إلى <span style={styles.highlightWordAr}>.......</span> !</div>
            <br />
            <div style={styles.germanSide}>Geh bitte zum <span style={styles.highlightWordDe}>.......</span> !</div>
          </div>

          <div style={styles.phraseBtn} onClick={() => speak('Geh bitte zum Schrank !', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <div style={styles.arabicSide}>اذهب من فضلك إلى <span style={styles.highlightWordAr}>الدولاب</span>!</div>
            <br />
            <div style={styles.germanSide}>Geh bitte zum <span style={styles.highlightWordDe}>Schrank</span> !</div>
          </div>

          <div style={styles.phraseBtn} onClick={() => speak('Geh bitte zum Papierkorb !', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <div style={styles.arabicSide}>اذهب من فضلك إلى <span style={styles.highlightWordAr}>سلة المهملات</span>!</div>
            <br />
            <div style={styles.germanSide}>Geh bitte zum <span style={styles.highlightWordDe}>Papierkorb</span> !</div>
          </div>

          <div style={styles.phraseBtn} onClick={() => speak('Geh bitte zur Klasse !', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <div style={styles.arabicSide}>اذهب من فضلك إلى <span style={styles.highlightWordAr}>الفصل</span>!</div>
            <br />
            <div style={styles.germanSide}>Geh bitte zur <span style={styles.highlightWordDe}>Klasse</span> !</div>
          </div>
        </div>

        <div style={styles.contentCard}>
          <div style={styles.cardHeading}>تعالَ إلى</div>
          <hr style={styles.cardDivider} />

          <div style={styles.phraseBtn} onClick={() => speak('Komm bitte an die ....... !', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <div style={styles.arabicSide}>تعالَ إلى <span style={styles.highlightWordAr}>.......</span> من فضلك!</div>
            <br />
            <div style={styles.germanSide}>Komm bitte an die <span style={styles.highlightWordDe}>.......</span> !</div>
          </div>

          <div style={styles.phraseBtn} onClick={() => speak('Komm bitte an die Tafel !', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <div style={styles.arabicSide}>تعالَ إلى <span style={styles.highlightWordAr}>السبورة</span>!</div>
            <br />
            <div style={styles.germanSide}>Komm bitte an die <span style={styles.highlightWordDe}>Tafel</span> !</div>
          </div>

          <div style={styles.phraseBtn} onClick={() => speak('Komm bitte an die Tür !', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <div style={styles.arabicSide}>تعالَ إلى <span style={styles.highlightWordAr}>الباب</span>!</div>
            <br />
            <div style={styles.germanSide}>Komm bitte an die <span style={styles.highlightWordDe}>Tür</span> !</div>
          </div>
        </div>
      </div>

      {/* القسم الثاني: الفتح والإغلاق */}
      <div style={styles.categoryHeader}>
        <span style={styles.categoryBadge}>التحكم بالأشياء</span>
        <span
          style={{...styles.categoryTitle, cursor: 'pointer'}}
          onClick={() => speak('Öffnen und Schließen', 'de-DE')}
        >
          الفتح والإغلاق
        </span>
      </div>

      <div style={styles.gridContainer}>
        <div style={styles.contentCard}>
          <div style={{...styles.cardHeading, cursor: 'pointer'}} onClick={() => speak('Mach bitte auf', 'de-DE')}>
            افتح الـ ... (Mach bitte ... auf !)
          </div>
          <hr style={styles.cardDivider} />

          <div style={styles.phraseBtn} onClick={() => speak('Mach bitte ....... auf !', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <div style={styles.arabicSide}>افتح الـ <span style={styles.highlightWordAr}>.......</span> من فضلك!</div>
            <br />
            <div style={styles.germanSide}>Mach bitte <span style={styles.highlightWordDe}>.......</span> auf !</div>
          </div>

          <div style={styles.phraseBtn} onClick={() => speak('Mach bitte die Tür auf !', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <div style={styles.arabicSide}>افتح <span style={styles.highlightWordAr}>الباب</span> من فضلك!</div>
            <br />
            <div style={styles.germanSide}>Mach bitte die <span style={styles.highlightWordDe}>Tür</span> auf !</div>
          </div>

          <div style={styles.phraseBtn} onClick={() => speak('Mach bitte das Fenster auf !', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <div style={styles.arabicSide}>افتح <span style={styles.highlightWordAr}>النافذة</span> من فضلك!</div>
            <br />
            <div style={styles.germanSide}>Mach bitte das <span style={styles.highlightWordDe}>Fenster</span> auf !</div>
          </div>
        </div>

        <div style={styles.contentCard}>
          <div style={{...styles.cardHeading, cursor: 'pointer'}} onClick={() => speak('Mach bitte zu', 'de-DE')}>
            اقفل الـ ... (Mach bitte ... zu !)
          </div>
          <hr style={styles.cardDivider} />

          <div style={styles.phraseBtn} onClick={() => speak('Mach bitte ....... zu !', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <div style={styles.arabicSide}>اقفل الـ <span style={styles.highlightWordAr}>.......</span> من فضلك!</div>
            <br />
            <div style={styles.germanSide}>Mach bitte <span style={styles.highlightWordDe}>.......</span> zu !</div>
          </div>

          <div style={styles.phraseBtn} onClick={() => speak('Mach bitte die Tür zu !', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <div style={styles.arabicSide}>اقفل <span style={styles.highlightWordAr}>الباب</span> من فضلك!</div>
            <br />
            <div style={styles.germanSide}>Mach bitte die <span style={styles.highlightWordDe}>Tür</span> zu !</div>
          </div>

          <div style={styles.phraseBtn} onClick={() => speak('Mach bitte das Fenster zu !', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <div style={styles.arabicSide}>اقفل <span style={styles.highlightWordAr}>النافذة</span> من فضلك!</div>
            <br />
            <div style={styles.germanSide}>Mach bitte das <span style={styles.highlightWordDe}>Fenster</span> zu !</div>
          </div>
        </div>
      </div>

      {/* القسم الثالث: أنشطة إضافية */}
      <div style={styles.categoryHeader}>
        <span style={styles.categoryBadge}>أنشطة إضافية</span>
        <span style={styles.categoryTitle}>الكتاب والجلوس والوقوف</span>
      </div>

      <div style={styles.gridContainer}>
        <div style={styles.contentCard}>
          <div style={styles.cardHeading}>افتح واقفل الكتاب</div>
          <hr style={styles.cardDivider} />

          <div style={styles.phraseBtn} onClick={() => speak('Mach bitte das Buch auf !', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <div style={styles.arabicSide}>افتح <span style={styles.highlightWordAr}>الكتاب</span> من فضلك!</div>
            <br />
            <div style={styles.germanSide}>Mach bitte das <span style={styles.highlightWordDe}>Buch</span> auf !</div>
          </div>

          <div style={styles.phraseBtn} onClick={() => speak('Mach bitte das Buch zu !', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <div style={styles.arabicSide}>اقفل <span style={styles.highlightWordAr}>الكتاب</span> من فضلك!</div>
            <br />
            <div style={styles.germanSide}>Mach bitte das <span style={styles.highlightWordDe}>Buch</span> zu !</div>
          </div>
        </div>

        <div style={styles.contentCard}>
          <div style={styles.cardHeading}>الجلوس والوقوف</div>
          <hr style={styles.cardDivider} />

          <div style={styles.phraseBtn} onClick={() => speak('Setz dich bitte !', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <div style={styles.arabicSide}><span style={styles.highlightWordAr}>اجلس</span> من فضلك!</div>
            <br />
            <div style={styles.germanSide}>Setz dich <span style={styles.highlightWordDe}>bitte</span> !</div>
          </div>

          <div style={styles.phraseBtn} onClick={() => speak('Steh bitte auf !', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <div style={styles.arabicSide}><span style={styles.highlightWordAr}>قِف</span> من فضلك!</div>
            <br />
            <div style={styles.germanSide}>Steh bitte <span style={styles.highlightWordDe}>auf</span> !</div>
          </div>
        </div>
      </div>

      {/* القسم الرابع: أدوات التعريف */}
      <div style={styles.categoryHeader}>
        <span style={styles.categoryBadge}>قواعد الأدوات</span>
        <span
          style={{...styles.categoryTitle, cursor: 'pointer'}}
          onClick={() => speak('Artikel und Wörter', 'de-DE')}
        >
          أدوات التعريف والكلمات (Der, Das, Die)
        </span>
      </div>

      <div style={styles.grammarRow}>
        {/* Der */}
        <div style={{...styles.grammarCard, borderRight: '4px solid #38bdf8'}}>
          <div style={{...styles.grammarTitle, color: '#38bdf8', cursor: 'pointer'}} onClick={() => speak('Maskulinum', 'de-DE')}>
            Der (المذكر - Masculin)
          </div>
          <div style={styles.wordItem} onClick={() => speak('der Block', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <span style={styles.wordAr}>كشكول</span>
            <br />
            <span style={styles.wordDeContainer}><span style={styles.articleDer}>der</span><span style={{...styles.wordDe, ...styles.highlightWordDe}}>Block</span></span>
          </div>
          <div style={styles.wordItem} onClick={() => speak('der Radiergummi', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <span style={styles.wordAr}>استيكة</span>
            <br />
            <span style={styles.wordDeContainer}><span style={styles.articleDer}>der</span><span style={{...styles.wordDe, ...styles.highlightWordDe}}>Radiergummi</span></span>
          </div>
          <div style={styles.wordItem} onClick={() => speak('der Pinsel', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <span style={styles.wordAr}>فرشاة</span>
            <br />
            <span style={styles.wordDeContainer}><span style={styles.articleDer}>der</span><span style={{...styles.wordDe, ...styles.highlightWordDe}}>Pinsel</span></span>
          </div>
          <div style={styles.wordItem} onClick={() => speak('der Bleistift', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <span style={styles.wordAr}>قلم رصاص</span>
            <br />
            <span style={styles.wordDeContainer}><span style={styles.articleDer}>der</span><span style={{...styles.wordDe, ...styles.highlightWordDe}}>Bleistift</span></span>
          </div>
          <div style={styles.wordItem} onClick={() => speak('der Spitzer', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <span style={styles.wordAr}>براية</span>
            <br />
            <span style={styles.wordDeContainer}><span style={styles.articleDer}>der</span><span style={{...styles.wordDe, ...styles.highlightWordDe}}>Spitzer</span></span>
          </div>
          <div style={styles.wordItem} onClick={() => speak('der Füller', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <span style={styles.wordAr}>قلم جاف</span>
            <br />
            <span style={styles.wordDeContainer}><span style={styles.articleDer}>der</span><span style={{...styles.wordDe, ...styles.highlightWordDe}}>Füller</span></span>
          </div>
          <div style={styles.wordItem} onClick={() => speak('der Farbstift', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <span style={styles.wordAr}>قلم تلوين</span>
            <br />
            <span style={styles.wordDeContainer}><span style={styles.articleDer}>der</span><span style={{...styles.wordDe, ...styles.highlightWordDe}}>Farbstift</span></span>
          </div>
        </div>

        {/* Das */}
        <div style={{...styles.grammarCard, borderRight: '4px solid #38ef7d'}}>
          <div style={{...styles.grammarTitle, color: '#38ef7d', cursor: 'pointer'}} onClick={() => speak('Neutrum', 'de-DE')}>
            Das (المحايد - Neutral)
          </div>
          <div style={styles.wordItem} onClick={() => speak('das Buch', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <span style={styles.wordAr}>كتاب</span>
            <br />
            <span style={styles.wordDeContainer}><span style={styles.articleDas}>das</span><span style={{...styles.wordDe, ...styles.highlightWordDe}}>Buch</span></span>
          </div>
          <div style={styles.wordItem} onClick={() => speak('das Federmäppchen', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <span style={styles.wordAr}>مقلمة</span>
            <br />
            <span style={styles.wordDeContainer}><span style={styles.articleDas}>das</span><span style={{...styles.wordDe, ...styles.highlightWordDe}}>Federmäppchen</span></span>
          </div>
          <div style={styles.wordItem} onClick={() => speak('das Heft', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <span style={styles.wordAr}>كراسة</span>
            <br />
            <span style={styles.wordDeContainer}><span style={styles.articleDas}>das</span><span style={{...styles.wordDe, ...styles.highlightWordDe}}>Heft</span></span>
          </div>
          <div style={styles.wordItem} onClick={() => speak('das Turnzeug', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <span style={styles.wordAr}>أدوات الرياضة</span>
            <br />
            <span style={styles.wordDeContainer}><span style={styles.articleDas}>das</span><span style={{...styles.wordDe, ...styles.highlightWordDe}}>Turnzeug</span></span>
          </div>
        </div>

        {/* Die */}
        <div style={{...styles.grammarCard, borderRight: '4px solid #f472b6'}}>
          <div style={{...styles.grammarTitle, color: '#f472b6', cursor: 'pointer'}} onClick={() => speak('Femininum', 'de-DE')}>
            Die (المؤنث - Feminin)
          </div>
          <div style={styles.wordItem} onClick={() => speak('die Kreide', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <span style={styles.wordAr}>طباشير</span>
            <br />
            <span style={styles.wordDeContainer}><span style={styles.articleDie}>die</span><span style={{...styles.wordDe, ...styles.highlightWordDe}}>Kreide</span></span>
          </div>
          <div style={styles.wordItem} onClick={() => speak('die Schere', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <span style={styles.wordAr}>مقص</span>
            <br />
            <span style={styles.wordDeContainer}><span style={styles.articleDie}>die</span><span style={{...styles.wordDe, ...styles.highlightWordDe}}>Schere</span></span>
          </div>
        </div>
      </div>

      {/* قاعدة تحويل Der إلى Den */}
      <div style={styles.explanationCard}>
        <div style={{...styles.explanationTitle, cursor: 'pointer'}} onClick={() => speak('Wann wird der zu den?', 'de-DE')}>
          💡 قاعدة هامة: متى تحول (der) إلى (den)؟
        </div>
        <div style={styles.explanationDesc}>
          في اللغة الألمانية، عندما يكون الاسم المذكر واقعاً في جملة كـ <strong>مفعول به (Akkusativ)</strong> فإن أداة التعريف <strong>(der)</strong> تتغير لتصبح <strong>(den)</strong>. أما (das) و(die) فلا تتغير.<br /><br />
          إليك أبرز الأفعال والجمل:
        </div>

        <div style={styles.verbList}>
          <div style={styles.verbItem} onClick={() => speak('haben. Hast du den Block?', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <span style={styles.verbAr}>يملك / عندي :</span>
            <br />
            <span style={styles.verbDe}>haben : Hast du <span style={styles.highlightWordDe}>den</span> Block?</span>
          </div>
          <div style={styles.verbItem} onClick={() => speak('geben. Gib mir den Bleistift!', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <span style={styles.verbAr}>يعطي :</span>
            <br />
            <span style={styles.verbDe}>geben : Gib mir <span style={styles.highlightWordDe}>den</span> Bleistift!</span>
          </div>
          <div style={styles.verbItem} onClick={() => speak('suchen. Ich suche den Spitzer.', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <span style={styles.verbAr}>يبحث عن :</span>
            <br />
            <span style={styles.verbDe}>suchen : Ich suche <span style={styles.highlightWordDe}>den</span> Spitzer.</span>
          </div>
          <div style={styles.verbItem} onClick={() => speak('brauchen. Ich brauche den Füller.', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <span style={styles.verbAr}>يحتاج إلى :</span>
            <br />
            <span style={styles.verbDe}>brauchen : Ich brauche <span style={styles.highlightWordDe}>den</span> Füller.</span>
          </div>
          <div style={styles.verbItem} onClick={() => speak('sehen. Ich sehe den Pinsel.', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <span style={styles.verbAr}>يرى :</span>
            <br />
            <span style={styles.verbDe}>sehen : Ich sehe <span style={styles.highlightWordDe}>den</span> Pinsel.</span>
          </div>
          <div style={styles.verbItem} onClick={() => speak('kaufen. Er kauft den Farbstift.', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <span style={styles.verbAr}>يشتري :</span>
            <br />
            <span style={styles.verbDe}>kaufen : Er kauft <span style={styles.highlightWordDe}>den</span> Farbstift.</span>
          </div>
          <div style={styles.verbItem} onClick={() => speak('finden. Ich finde den Radiergummi.', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <span style={styles.verbAr}>يجد :</span>
            <br />
            <span style={styles.verbDe}>finden : Ich finde <span style={styles.highlightWordDe}>den</span> Radiergummi.</span>
          </div>
          <div style={styles.verbItem} onClick={() => speak('fotografieren. Er fotografiert den Tisch.', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <span style={styles.verbAr}>يصور :</span>
            <br />
            <span style={styles.verbDe}>fotografieren : Er fotografiert <span style={styles.highlightWordDe}>den</span> Tisch.</span>
          </div>
          <div style={styles.verbItem} onClick={() => speak('malen. Du malst den Stuhl.', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <span style={styles.verbAr}>يرسم / يلون :</span>
            <br />
            <span style={styles.verbDe}>malen : Du malst <span style={styles.highlightWordDe}>den</span> Stuhl.</span>
          </div>
          <div style={styles.verbItem} onClick={() => speak('verlieren. Ich verliere den Schlüssel.', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <span style={styles.verbAr}>يفقد / يضيع :</span>
            <br />
            <span style={styles.verbDe}>verlieren : Ich verliere <span style={styles.highlightWordDe}>den</span> Schlüssel.</span>
          </div>
          <div style={styles.verbItem} onClick={() => speak('lesen. Er liest den Text.', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <span style={styles.verbAr}>يقرأ :</span>
            <br />
            <span style={styles.verbDe}>lesen : Er liest <span style={styles.highlightWordDe}>den</span> Text.</span>
          </div>
        </div>

        <div style={styles.exampleBox} onClick={() => speak('geben. Gib mir bitte den Bleistift!', 'de-DE')}>
          📌 مثال توضيحي للمقارنة:<br />
          - أصل الكلمة: <span style={{color: '#38bdf8', fontWeight: 'bold'}}>der</span> Bleistift (قلم رصاص)<br />
          - بعد الفعل: Gib mir bitte <span style={styles.highlightWordDe}>den</span> Bleistift!
        </div>
      </div>

      {/* الأسئلة والطلبات */}
      <div style={styles.gridContainer}>
        <div style={styles.contentCard}>
          <div style={{...styles.cardHeading, cursor: 'pointer'}} onClick={() => speak('Frage und Antwort', 'de-DE')}>
            السؤال والإجابة (Hast du / Wer hat / Ich habe)
          </div>
          <hr style={styles.cardDivider} />

          <div style={styles.phraseBtn} onClick={() => speak('Hast du ....... ?', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <div style={styles.arabicSide}>هل معك <span style={styles.highlightWordAr}>.......</span> ؟</div>
            <br />
            <div style={styles.germanSide}>Hast du <span style={styles.highlightWordDe}>.......</span> ?</div>
          </div>
          <div style={styles.phraseBtn} onClick={() => speak('Hast du den Block ?', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <div style={styles.arabicSide}>هل معك <span style={styles.highlightWordAr}>الكشكول</span>؟</div>
            <br />
            <div style={styles.germanSide}>Hast du den <span style={styles.highlightWordDe}>Block</span> ?</div>
          </div>
          <div style={styles.phraseBtn} onClick={() => speak('Wer hat ....... ?', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <div style={styles.arabicSide}>مين معاه <span style={styles.highlightWordAr}>.......</span> ؟</div>
            <br />
            <div style={styles.germanSide}>Wer hat <span style={styles.highlightWordDe}>.......</span> ?</div>
          </div>
          <div style={styles.phraseBtn} onClick={() => speak('Wer hat das Buch ?', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <div style={styles.arabicSide}>مين معاه <span style={styles.highlightWordAr}>الكتاب</span>؟</div>
            <br />
            <div style={styles.germanSide}>Wer hat das <span style={styles.highlightWordDe}>Buch</span> ?</div>
          </div>
          <div style={styles.phraseBtn} onClick={() => speak('Ich habe ....... .', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <div style={styles.arabicSide}>انا معايا <span style={styles.highlightWordAr}>.......</span> .</div>
            <br />
            <div style={styles.germanSide}>Ich habe <span style={styles.highlightWordDe}>.......</span> .</div>
          </div>
          <div style={styles.phraseBtn} onClick={() => speak('Ich habe den Füller .', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <div style={styles.arabicSide}>انا معايا <span style={styles.highlightWordAr}>القلم الجاف</span>.</div>
            <br />
            <div style={styles.germanSide}>Ich habe den <span style={styles.highlightWordDe}>Füller</span> .</div>
          </div>
        </div>

        <div style={styles.contentCard}>
          <div style={{...styles.cardHeading, cursor: 'pointer'}} onClick={() => speak('Geben und Nehmen', 'de-DE')}>
            العطاء والطلب والأدوات (Gib mir / Nimm)
          </div>
          <hr style={styles.cardDivider} />

          <div style={styles.phraseBtn} onClick={() => speak('Gib mir bitte ....... !', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <div style={styles.arabicSide}>اعطيني من فضلك <span style={styles.highlightWordAr}>.......</span> !</div>
            <br />
            <div style={styles.germanSide}>Gib mir bitte <span style={styles.highlightWordDe}>.......</span> !</div>
          </div>
          <div style={styles.phraseBtn} onClick={() => speak('Gib mir bitte den Bleistift !', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <div style={styles.arabicSide}>اعطيني <span style={styles.highlightWordAr}>قلم الرصاص</span> من فضلك!</div>
            <br />
            <div style={styles.germanSide}>Gib mir bitte den <span style={styles.highlightWordDe}>Bleistift</span> !</div>
          </div>
          <div style={styles.phraseBtn} onClick={() => speak('Nimm bitte ....... !', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <div style={styles.arabicSide}>خذ من فضلك <span style={styles.highlightWordAr}>.......</span> !</div>
            <br />
            <div style={styles.germanSide}>Nimm bitte <span style={styles.highlightWordDe}>.......</span> !</div>
          </div>
          <div style={styles.phraseBtn} onClick={() => speak('Nimm bitte die Schere !', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <div style={styles.arabicSide}>خذ <span style={styles.highlightWordAr}>المقص</span> من فضلك!</div>
            <br />
            <div style={styles.germanSide}>Nimm bitte die <span style={styles.highlightWordDe}>Schere</span> !</div>
          </div>
        </div>
      </div>

      {/* القسم الأخير */}
      <div style={styles.categoryHeader}>
        <span style={styles.categoryBadge}>الرغبات والمتعة</span>
        <span style={{...styles.categoryTitle, cursor: 'pointer'}} onClick={() => speak('Wünsche und Hobbys', 'de-DE')}>
          التعبير عن الرغبة والأنشطة المسلية
        </span>
      </div>

      <div style={styles.gridContainer}>
        <div style={styles.contentCard}>
          <div style={{...styles.cardHeading, cursor: 'pointer'}} onClick={() => speak('Was möchtest du denn machen?', 'de-DE')}>
            ماذا تريد أن تفعل؟ (Was möchtest du denn machen?)
          </div>
          <hr style={styles.cardDivider} />
          <div style={styles.phraseBtn} onClick={() => speak('Ich möchte .......... ..........', 'de-DE')}>
            <span style={styles.micIcon}>🎤</span>
            <div style={styles.arabicSide}>أنا أريد أن <span style={styles.highlightWordAr}>.......... ..........</span></div>
            <br />
            <div style={styles.germanSide}>Ich möchte <span style={styles.highlightWordDe}>.......... ..........</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// الأنماط (Styles) المحدثة: بدون خلفيات، مع إضافة نمط أيقونة الميكروفون المركزية المطلقة (absolute)
const styles = {
  body: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: 'inherit',
    margin: 0,
    padding: '15px 10px',
    direction: 'rtl',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxSizing: 'border-box'
  },
  micIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '1rem',
    opacity: 0.4,
    pointerEvents: 'none',
    userSelect: 'none'
  },
  mainHeader: {
    border: '2px solid currentColor',
    borderRadius: '30px 6px',
    padding: '14px 20px',
    marginBottom: '25px',
    maxWidth: '1200px',
    width: '100%',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    position: 'relative'
  },
  mainHeaderH1: {
    margin: 0,
    fontSize: '1.4rem',
    fontWeight: 'bold'
  },
  categoryHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    maxWidth: '1200px',
    width: '100%',
    marginBottom: '15px',
    marginTop: '20px',
    borderBottom: '2px solid currentColor',
    paddingBottom: '8px',
    opacity: 0.9
  },
  categoryBadge: {
    color: 'inherit',
    padding: '4px 12px',
    borderRadius: '30px 6px',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    whiteSpace: 'nowrap'
  },
  categoryTitle: {
    fontSize: '1.05rem',
    fontWeight: 'bold'
  },
  gridContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    maxWidth: '1200px',
    width: '100%',
    marginBottom: '10px'
  },
  grammarRow: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    maxWidth: '1200px',
    width: '100%',
    marginBottom: '10px'
  },
  grammarCard: {
    border: '2px solid currentColor',
    borderRadius: '30px 6px',
    padding: '15px',
    width: '100%',
    boxSizing: 'border-box',
    position: 'relative'
  },
  grammarTitle: {
    fontWeight: 'bold',
    fontSize: '1.05rem',
    marginBottom: '10px',
    textAlign: 'right'
  },
  wordItem: {
    display: 'block',
    padding: '8px 10px',
    marginBottom: '6px',
    border: '1px solid currentColor',
    borderRadius: '30px 6px',
    fontSize: '0.9rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    position: 'relative'
  },
  wordDeContainer: {
    direction: 'ltr',
    fontWeight: 'bold',
    textAlign: 'left',
    display: 'block'
  },
  articleDer: { color: '#38bdf8', marginRight: '5px', fontWeight: 'bold' },
  articleDas: { color: '#38ef7d', marginRight: '5px', fontWeight: 'bold' },
  articleDie: { color: '#f472b6', marginRight: '5px', fontWeight: 'bold' },
  wordDe: { opacity: 0.95 },
  wordAr: { opacity: 0.95, fontSize: '0.85rem', display: 'block' },
  highlightWordDe: { color: '#fb923c', fontWeight: 'bold' },
  highlightWordAr: { color: '#fb923c', fontWeight: 'bold' },
  explanationCard: {
    border: '2px solid currentColor',
    borderRight: '6px solid #38ef7d',
    borderRadius: '30px 6px',
    padding: '20px',
    maxWidth: '1200px',
    width: '100%',
    boxSizing: 'border-box',
    marginBottom: '15px',
    position: 'relative'
  },
  explanationTitle: {
    fontSize: '1.15rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    textAlign: 'right'
  },
  explanationDesc: {
    fontSize: '0.95rem',
    marginBottom: '15px',
    textAlign: 'right',
    lineHeight: '1.6',
    opacity: 0.95
  },
  verbList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  verbItem: {
    display: 'block',
    border: '1px solid currentColor',
    padding: '10px 14px',
    borderRadius: '30px 6px',
    fontSize: '0.95rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    position: 'relative'
  },
  verbAr: { textAlign: 'right', opacity: 0.95, display: 'block' },
  verbDe: { fontWeight: 'bold', direction: 'ltr', textAlign: 'left', display: 'block' },
  exampleBox: {
    marginTop: '15px',
    padding: '12px',
    border: '1px dashed currentColor',
    borderRadius: '30px 6px',
    fontSize: '0.9rem',
    direction: 'ltr',
    textAlign: 'left',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    position: 'relative'
  },
  contentCard: {
    border: '2px solid currentColor',
    borderRadius: '30px 6px',
    padding: '16px',
    width: '100%',
    boxSizing: 'border-box',
    position: 'relative'
  },
  cardHeading: {
    fontSize: '1.05rem',
    textAlign: 'right',
    marginBottom: '10px',
    fontWeight: 'bold'
  },
  cardDivider: {
    border: 'none',
    borderTop: '1px dashed currentColor',
    marginBottom: '12px',
    opacity: 0.5
  },
  phraseBtn: {
    display: 'block',
    border: '1px solid currentColor',
    borderRadius: '30px 6px',
    padding: '12px 14px',
    marginBottom: '10px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    position: 'relative'
  },
  germanSide: {
    fontSize: '0.95rem',
    fontWeight: 'bold',
    direction: 'ltr',
    textAlign: 'left',
    display: 'block'
  },
  arabicSide: {
    fontSize: '0.95rem',
    textAlign: 'right',
    display: 'block'
  }
};
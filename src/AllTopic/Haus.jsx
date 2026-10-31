import React, { useState } from 'react';

// قائمة موسوعة المنزل الشاملة لكل ما يوجد في البيت باللغة الألمانية
const allHouseItemsData = [
  // --- القسم الأول: غرف ومرافق وأقسام المنزل الأساسية ---
  { id: 1, categoryNum: 1, categoryTitle: 'غرف ومرافق وأقسام المنزل', german: 'das Haus', pronunciation: 'داس هاوس', arabic: 'المنزل' },
  { id: 2, categoryNum: 1, categoryTitle: 'غرف ومرافق وأقسام المنزل', german: 'die Wohnung', pronunciation: 'دي فونونغ', arabic: 'الشقة' },
  { id: 3, categoryNum: 1, categoryTitle: 'غرف ومرافق وأقسام المنزل', german: 'das Zimmer', pronunciation: 'داس تسيمر', arabic: 'الغرفة' },
  { id: 4, categoryNum: 1, categoryTitle: 'غرف ومرافق وأقسام المنزل', german: 'das Schlafzimmer', pronunciation: 'داس شلاف تسيمر', arabic: 'غرفة النوم' },
  { id: 5, categoryNum: 1, categoryTitle: 'غرف ومرافق وأقسام المنزل', german: 'das Wohnzimmer', pronunciation: 'داس فون تسيمر', arabic: 'غرفة المعيشة / الجلوس' },
  { id: 6, categoryNum: 1, categoryTitle: 'غرف ومرافق وأقسام المنزل', german: 'das Kinderzimmer', pronunciation: 'داس كيندر تسيمر', arabic: 'غرفة الأطفال' },
  { id: 7, categoryNum: 1, categoryTitle: 'غرف ومرافق وأقسام المنزل', german: 'das Arbeitszimmer', pronunciation: 'داس أربايتس تسيمر', arabic: 'غرفة العمل / المكتب' },
  { id: 8, categoryNum: 1, categoryTitle: 'غرف ومرافق وأقسام المنزل', german: 'das Esszimmer', pronunciation: 'داس إس تسيمر', arabic: 'غرفة الطعام' },
  { id: 9, categoryNum: 1, categoryTitle: 'غرف ومرافق وأقسام المنزل', german: 'das Gästezimmer', pronunciation: 'داس غيسته تسيمر', arabic: 'غرفة الضيوف' },
  { id: 10, categoryNum: 1, categoryTitle: 'غرف ومرافق وأقسام المنزل', german: 'der Flur', pronunciation: 'در فلور', arabic: 'الردهة / الممر' },
  { id: 11, categoryNum: 1, categoryTitle: 'غرف ومرافق وأقسام المنزل', german: 'der Keller', pronunciation: 'در كيلر', arabic: 'القبو / البدروم' },
  { id: 12, categoryNum: 1, categoryTitle: 'غرف ومرافق وأقسام المنزل', german: 'der Dachboden', pronunciation: 'در داخبودن', arabic: 'العلية' },
  { id: 13, categoryNum: 1, categoryTitle: 'غرف ومرافق وأقسام المنزل', german: 'der Garten', pronunciation: 'در غارتن', arabic: 'الحديقة' },
  { id: 14, categoryNum: 1, categoryTitle: 'غرف ومرافق وأقسام المنزل', german: 'der Balkon', pronunciation: 'در بالكون', arabic: 'الشرفة' },
  { id: 15, categoryNum: 1, categoryTitle: 'غرف ومرافق وأقسام المنزل', german: 'die Garage', pronunciation: 'دي غاراجِ', arabic: 'المرآب / الكراج' },
  { id: 16, categoryNum: 1, categoryTitle: 'غرف ومرافق وأقسام المنزل', german: 'die Terrasse', pronunciation: 'دي تراسه', arabic: 'التراس / الفناء' },

  // --- القسم الثاني: هيكل البناء ومكونات الغرف ---
  { id: 17, categoryNum: 2, categoryTitle: 'هيكل البناء ومكونات الغرف', german: 'die Tür', pronunciation: 'دي تيور', arabic: 'الباب' },
  { id: 18, categoryNum: 2, categoryTitle: 'هيكل البناء ومكونات الغرف', german: 'das Tor', pronunciation: 'داس طور', arabic: 'البوابة الكبيرة' },
  { id: 19, categoryNum: 2, categoryTitle: 'هيكل البناء ومكونات الغرف', german: 'das Fenster', pronunciation: 'داس فينستر', arabic: 'النافذة' },
  { id: 20, categoryNum: 2, categoryTitle: 'هيكل البناء ومكونات الغرف', german: 'die Wand', pronunciation: 'دي فانت', arabic: 'الجدار الداخلي' },
  { id: 21, categoryNum: 2, categoryTitle: 'هيكل البناء ومكونات الغرف', german: 'die Mauer', pronunciation: 'دي ماوير', arabic: 'الجدار الخارجي / السور' },
  { id: 22, categoryNum: 2, categoryTitle: 'هيكل البناء ومكونات الغرف', german: 'der Boden', pronunciation: 'در بودن', arabic: 'الأرضية' },
  { id: 23, categoryNum: 2, categoryTitle: 'هيكل البناء ومكونات الغرف', german: 'die Decke', pronunciation: 'دي ديكه', arabic: 'السقف' },
  { id: 24, categoryNum: 2, categoryTitle: 'هيكل البناء ومكونات الغرف', german: 'die Treppe', pronunciation: 'دي تريبه', arabic: 'الدرج / السلم' },
  { id: 25, categoryNum: 2, categoryTitle: 'هيكل البناء ومكونات الغرف', german: 'der Aufzug', pronunciation: 'در أوفتسوغ', arabic: 'المصعد' },
  { id: 26, categoryNum: 2, categoryTitle: 'هيكل البناء ومكونات الغرف', german: 'der Zaun', pronunciation: 'در تساون', arabic: 'السياج' },

  // --- القسم الثالث: المطبخ وأدواته ومستلزماته الكاملة ---
  { id: 27, categoryNum: 3, categoryTitle: 'المطبخ ومستلزماته', german: 'die Küche', pronunciation: 'دي كيوشه', arabic: 'المطبخ' },
  { id: 28, categoryNum: 3, categoryTitle: 'المطبخ ومستلزماته', german: 'der Kühlschrank', pronunciation: 'در كيولشرانك', arabic: 'الثلاجة' },
  { id: 29, categoryNum: 3, categoryTitle: 'المطبخ ومستلزماته', german: 'der Gefrierschrank', pronunciation: 'در غفيرشرانك', arabic: 'الفريزر / المجمد' },
  { id: 30, categoryNum: 3, categoryTitle: 'المطبخ ومستلزماته', german: 'der Herd', pronunciation: 'در هيرت', arabic: 'الموقد' },
  { id: 31, categoryNum: 3, categoryTitle: 'المطبخ ومستلزماته', german: 'der Ofen', pronunciation: 'در أوفن', arabic: 'الفرن' },
  { id: 32, categoryNum: 3, categoryTitle: 'المطبخ ومستلزماته', german: 'die Mikrowelle', pronunciation: 'دي ميكروفيله', arabic: 'الميكروويف' },
  { id: 33, categoryNum: 3, categoryTitle: 'المطبخ ومستلزماته', german: 'die Spülmaschine', pronunciation: 'دي شبيولماشينه', arabic: 'غسالة الأطباق' },
  { id: 34, categoryNum: 3, categoryTitle: 'المطبخ ومستلزماته', german: 'die Dunstabzugshaube', pronunciation: 'دي دونست أبزوغ هاوبه', arabic: 'شفاط المطبخ' },
  { id: 35, categoryNum: 3, categoryTitle: 'المطبخ ومستلزماته', german: 'der Tisch', pronunciation: 'در تيش', arabic: 'طاولة الطعام' },
  { id: 36, categoryNum: 3, categoryTitle: 'المطبخ ومستلزماته', german: 'der Stuhl', pronunciation: 'در شتول', arabic: 'الكرسي' },
  { id: 37, categoryNum: 3, categoryTitle: 'المطبخ ومستلزماته', german: 'der Küchenschrank', pronunciation: 'در كوشين شرانك', arabic: 'خزانة المطبخ' },
  { id: 38, categoryNum: 3, categoryTitle: 'المطبخ ومستلزماته', german: 'das Regal', pronunciation: 'داس ريغال', arabic: 'الرف' },
  { id: 39, categoryNum: 3, categoryTitle: 'المطبخ ومستلزماته', german: 'der Teller', pronunciation: 'در تلر', arabic: 'الصحن / الطبق' },
  { id: 40, categoryNum: 3, categoryTitle: 'المطبخ ومستلزماته', german: 'das Messer', pronunciation: 'داس مسر', arabic: 'السكين' },
  { id: 41, categoryNum: 3, categoryTitle: 'المطبخ ومستلزماته', german: 'die Gabel', pronunciation: 'دي غابل', arabic: 'الشوكة' },
  { id: 42, categoryNum: 3, categoryTitle: 'المطبخ ومستلزماته', german: 'der Löffel', pronunciation: 'در لوفل', arabic: 'الملعقة' },
  { id: 43, categoryNum: 3, categoryTitle: 'المطبخ ومستلزماته', german: 'das Glas', pronunciation: 'داس غلاس', arabic: 'الكوب / الكأس' },
  { id: 44, categoryNum: 3, categoryTitle: 'المطبخ ومستلزماته', german: 'die Tasse', pronunciation: 'دي تاسه', arabic: 'الفنجان' },
  { id: 45, categoryNum: 3, categoryTitle: 'المطبخ ومستلزماته', german: 'der Topf', pronunciation: 'در توبف', arabic: 'القدر / الحلة' },
  { id: 46, categoryNum: 3, categoryTitle: 'المطبخ ومستلزماته', german: 'die Pfanne', pronunciation: 'دي فافنه', arabic: 'المقلاة' },
  { id: 47, categoryNum: 3, categoryTitle: 'المطبخ ومستلزماته', german: 'der Wasserkocher', pronunciation: 'در فاسركوخر', arabic: 'غلاية الماء' },
  { id: 48, categoryNum: 3, categoryTitle: 'المطبخ ومستلزماته', german: 'die Kaffeemaschine', pronunciation: 'دي كافيه ماشينه', arabic: 'صانعة القهوة' },
  { id: 49, categoryNum: 3, categoryTitle: 'المطبخ ومستلزماته', german: 'der Toaster', pronunciation: 'در توستر', arabic: 'محمصة الخبز' },
  { id: 50, categoryNum: 3, categoryTitle: 'المطبخ ومستلزماته', german: 'die Schüssel', pronunciation: 'دي شويسيل', arabic: 'السلطانية / وعاء' },

  // --- القسم الرابع: الحمام وأدواته ومستلزماته الكاملة ---
  { id: 51, categoryNum: 4, categoryTitle: 'الحمام ومستلزماته', german: 'das Badezimmer', pronunciation: 'داس بادتسيمر', arabic: 'الحمام' },
  { id: 52, categoryNum: 4, categoryTitle: 'الحمام ومستلزماته', german: 'das Waschbecken', pronunciation: 'داس فاشبكن', arabic: 'المغسلة / حوض الوجه' },
  { id: 53, categoryNum: 4, categoryTitle: 'الحمام ومستلزماته', german: 'die Dusche', pronunciation: 'دي دوشه', arabic: 'الدش / الشاور' },
  { id: 54, categoryNum: 4, categoryTitle: 'الحمام ومستلزماته', german: 'die Badewanne', pronunciation: 'دي بادفانه', arabic: 'حوض الاستحمام' },
  { id: 55, categoryNum: 4, categoryTitle: 'الحمام ومستلزماته', german: 'die Toilette', pronunciation: 'دي تواليته', arabic: 'المرحاض' },
  { id: 56, categoryNum: 4, categoryTitle: 'الحمام ومستلزماته', german: 'das Handtuch', pronunciation: 'داس هاندتوخ', arabic: 'المنشفة' },
  { id: 57, categoryNum: 4, categoryTitle: 'الحمام ومستلزماته', german: 'das Badetuch', pronunciation: 'داس باديتوخ', arabic: 'منشفة الاستحمام الكبيرة' },
  { id: 58, categoryNum: 4, categoryTitle: 'الحمام ومستلزماته', german: 'die Seife', pronunciation: 'دي زايفه', arabic: 'الصابون' },
  { id: 59, categoryNum: 4, categoryTitle: 'الحمام ومستلزماته', german: 'das Shampoo', pronunciation: 'داس شامبو', arabic: 'الشامبو' },
  { id: 60, categoryNum: 4, categoryTitle: 'الحمام ومستلزماته', german: 'die Duschgel', pronunciation: 'دي دوش غيل', arabic: 'جل الاستحمام' },
  { id: 61, categoryNum: 4, categoryTitle: 'الحمام ومستلزماته', german: 'die Bürste', pronunciation: 'دي بيورسته', arabic: 'الفرشاة' },
  { id: 62, categoryNum: 4, categoryTitle: 'الحمام ومستلزماته', german: 'der Kamm', pronunciation: 'در كام', arabic: 'المشط' },
  { id: 63, categoryNum: 4, categoryTitle: 'الحمام ومستلزماته', german: 'die Zahnbürste', pronunciation: 'دي تسانبيورسته', arabic: 'فرشاة الأسنان' },
  { id: 64, categoryNum: 4, categoryTitle: 'الحمام ومستلزماته', german: 'die Zahnpasta', pronunciation: 'دي تسانباستا', arabic: 'معجون الأسنان' },
  { id: 65, categoryNum: 4, categoryTitle: 'الحمام ومستلزماته', german: 'der Föhn', pronunciation: 'در فيون', arabic: 'مجفف الشعر' },
  { id: 66, categoryNum: 4, categoryTitle: 'الحمام ومستلزماته', german: 'der Toilettenpapier', pronunciation: 'در تواليت بابير', arabic: 'ورق المرحاض' },
  { id: 67, categoryNum: 4, categoryTitle: 'الحمام ومستلزماته', german: 'die Waage', pronunciation: 'دي فاغه', arabic: 'ميزان الحمام' },

  // --- القسم الخامس: أثاث وغرفة النوم والمعيشة ---
  { id: 68, categoryNum: 5, categoryTitle: 'أثاث وغرف النوم والمعيشة', german: 'das Sofa', pronunciation: 'داس زوفا', arabic: 'الأريكة / الكنبة' },
  { id: 69, categoryNum: 5, categoryTitle: 'أثاث وغرف النوم والمعيشة', german: 'der Sessel', pronunciation: 'در زسل', arabic: 'الكرسي المريح (فوتيه)' },
  { id: 70, categoryNum: 5, categoryTitle: 'أثاث وغرف النوم والمعيشة', german: 'das Bett', pronunciation: 'داس بيت', arabic: 'السرير' },
  { id: 71, categoryNum: 5, categoryTitle: 'أثاث وغرف النوم والمعيشة', german: 'der Nachttisch', pronunciation: 'در ناخت تيش', arabic: 'طاولة بجانب السرير (كومودينو)' },
  { id: 72, categoryNum: 5, categoryTitle: 'أثاث وغرف النوم والمعيشة', german: 'der Kleiderschrank', pronunciation: 'در كلايدر شرانك', arabic: 'خزانة الملابس' },
  { id: 73, categoryNum: 5, categoryTitle: 'أثاث وغرف النوم والمعيشة', german: 'die Kommode', pronunciation: 'دي كوموده', arabic: 'خزانة أدراج' },
  { id: 74, categoryNum: 5, categoryTitle: 'أثاث وغرف النوم والمعيشة', german: 'die Lampe', pronunciation: 'دي لامبه', arabic: 'المصباح' },
  { id: 75, categoryNum: 5, categoryTitle: 'أثاث وغرف النوم والمعيشة', german: 'die Stehlampe', pronunciation: 'دي شتي لامبه', arabic: 'مصباح أرضي' },
  { id: 76, categoryNum: 5, categoryTitle: 'أثاث وغرف النوم والمعيشة', german: 'der Spiegel', pronunciation: 'در شبيغل', arabic: 'المرآة' },
  { id: 77, categoryNum: 5, categoryTitle: 'أثاث وغرف النوم والمعيشة', german: 'der Teppich', pronunciation: 'در تيبيش', arabic: 'السجادة' },
  { id: 78, categoryNum: 5, categoryTitle: 'أثاث وغرف النوم والمعيشة', german: 'das Kissen', pronunciation: 'داس كيسن', arabic: 'الوسادة / المخدة' },
  { id: 79, categoryNum: 5, categoryTitle: 'أثاث وغرف النوم والمعيشة', german: 'die Decke', pronunciation: 'دي ديكه', arabic: 'الغطاء / البطانية' },
  { id: 80, categoryNum: 5, categoryTitle: 'أثاث وغرف النوم والمعيشة', german: 'die Vorhänge', pronunciation: 'دي فور هينغه', arabic: 'الستائر' },
  { id: 81, categoryNum: 5, categoryTitle: 'أثاث وغرف النوم والمعيشة', german: 'das Bild', pronunciation: 'داس بيلد', arabic: 'الصورة / اللوحة الفنية' },
  { id: 82, categoryNum: 5, categoryTitle: 'أثاث وغرف النوم والمعيشة', german: 'die Vase', pronunciation: 'دي فازه', arabic: 'مزهرية الورود' },

  // --- القسم السادس: الأجهزة الكهربائية والأدوات المنزلية ---
  { id: 83, categoryNum: 6, categoryTitle: 'الأجهزة الكهربائية والأدوات المنزلية', german: 'die Waschmaschine', pronunciation: 'دي فاشماشينه', arabic: 'الغسالة' },
  { id: 84, categoryNum: 6, categoryTitle: 'الأجهزة الكهربائية والأدوات المنزلية', german: 'der Wäschetrockner', pronunciation: 'در فيشه تروكنر', arabic: 'مجفف الملابس' },
  { id: 85, categoryNum: 6, categoryTitle: 'الأجهزة الكهربائية والأدوات المنزلية', german: 'der Staubsauger', pronunciation: 'در شتاوبزاوغر', arabic: 'المكنسة الكهربائية' },
  { id: 86, categoryNum: 6, categoryTitle: 'الأجهزة الكهربائية والأدوات المنزلية', german: 'das Bügeleisen', pronunciation: 'داس بيوغلايزن', arabic: 'المكواة' },
  { id: 87, categoryNum: 6, categoryTitle: 'الأجهزة الكهربائية والأدوات المنزلية', german: 'das Bügelbrett', pronunciation: 'داس بيغل بريت', arabic: 'طاولة الكي' },
  { id: 88, categoryNum: 6, categoryTitle: 'الأجهزة الكهربائية والأدوات المنزلية', german: 'der Fernseher', pronunciation: 'در فيرنزيهر', arabic: 'التلفاز' },
  { id: 89, categoryNum: 6, categoryTitle: 'الأجهزة الكهربائية والأدوات المنزلية', german: 'das Radio', pronunciation: 'داس راديو', arabic: 'الراديو' },
  { id: 90, categoryNum: 6, categoryTitle: 'الأجهزة الكهربائية والأدوات المنزلية', german: 'die Klimaanlage', pronunciation: 'دي كليما أنلاغه', arabic: 'المكيف' },
  { id: 91, categoryNum: 6, categoryTitle: 'الأجهزة الكهربائية والأدوات المنزلية', german: 'die Heizung', pronunciation: 'دي هايتسونغ', arabic: 'الدفّاية / التدفئة' },
  { id: 92, categoryNum: 6, categoryTitle: 'الأجهزة الكهربائية والأدوات المنزلية', german: 'der Ventilator', pronunciation: 'در فنتيلاتور', arabic: 'المروحة' },
  { id: 93, categoryNum: 6, categoryTitle: 'الأجهزة الكهربائية والأدوات المنزلية', german: 'die Steckdose', pronunciation: 'دي شتيكدوزه', arabic: 'مقبس الكهرباء (الفيشة)' },
  { id: 94, categoryNum: 6, categoryTitle: 'الأجهزة الكهربائية والأدوات المنزلية', german: 'der Stecker', pronunciation: 'در شتكر', arabic: 'قابس الكهرباء' },
  { id: 95, categoryNum: 6, categoryTitle: 'الأجهزة الكهربائية والأدوات المنزلية', german: 'der Lichtschalter', pronunciation: 'در ليشت شالتر', arabic: 'مفتاح الإضاءة' },
  { id: 96, categoryNum: 6, categoryTitle: 'الأجهزة الكهربائية والأدوات المنزلية', german: 'die Glühbirne', pronunciation: 'دي غليوبيرنه', arabic: 'لمبة الإضاءة' },
  { id: 97, categoryNum: 6, categoryTitle: 'الأجهزة الكهربائية والأدوات المنزلية', german: 'der Schlüssel', pronunciation: 'در شليوسل', arabic: 'المفتاح' },
  { id: 98, categoryNum: 6, categoryTitle: 'الأجهزة الكهربائية والأدوات المنزلية', german: 'das Schloss', pronunciation: 'داس شلوس', arabic: 'القفل' },
  { id: 99, categoryNum: 6, categoryTitle: 'الأجهزة الكهربائية والأدوات المنزلية', german: 'die Uhr', pronunciation: 'دي أوهر', arabic: 'الساعة' },
  { id: 100, categoryNum: 6, categoryTitle: 'الأجهزة الكهربائية والأدوات المنزلية', german: 'der Mülleimer', pronunciation: 'در مول إيمر', arabic: 'سلة المهملات' }
];

export default function HousePage() {
  const [searchTerm, setSearchTerm] = useState('');

  // دالة النطق الصوتي المباشر عبر Web Speech API
  const speakGerman = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'de-DE';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  const renderColoredGermanWord = (germanStr) => {
    const parts = germanStr.split(' ');
    if (parts.length > 0) {
      const firstWord = parts[0].toLowerCase();
      let wordColor = 'inherit';

      if (firstWord === 'der') wordColor = '#00bfff';
      else if (firstWord === 'das') wordColor = '#22c55e';
      else if (firstWord === 'die') wordColor = '#ec4899';

      if (wordColor !== 'inherit') {
        return (
          <span>
            <span style={{ color: wordColor, fontWeight: 'bold' }}>{parts[0]}</span> {parts.slice(1).join(' ')}
          </span>
        );
      }
    }
    return germanStr;
  };

  const filteredData = allHouseItemsData.filter(
    (item) =>
      item.german.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.arabic.includes(searchTerm) ||
      item.categoryTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  let lastCategoryNum = null;

  return (
    <div style={{ width: '100%', padding: '15px 0 40px 0', color: 'inherit', background: 'transparent', boxSizing: 'border-box' }}>
      <style>{`
        .page-title {
          text-align: center;
          font-size: 1.6rem;
          font-weight: 900;
          margin-bottom: 15px;
          color: inherit;
        }
        .page-subtitle {
          text-align: center;
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 25px;
          color: #00bfff;
        }
        .search-container {
          display: flex;
          justify-content: center;
          margin-bottom: 30px;
          width: 100%;
        }
        .search-input {
          width: 90%;
          max-width: 90%;
          padding: 8px 12px;
          border-radius: 20px;
          border: 1px solid currentColor;
          background: transparent;
          color: inherit;
          font-size: 0.88rem;
          font-weight: 700;
          outline: none;
          box-sizing: border-box;
          direction: rtl;
        }
        .category-heading {
          text-align: center;
          font-size: 1.0rem;
          font-weight: 900;
          margin: 35px 0 15px 0;
          color: #00bfff;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          width: 100%;
        }
        .category-badge {
          background-color: #ff3333;
          color: #ffffff;
          border-radius: 50%;
          width: 22px;
          height: 22px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          font-weight: bold;
        }
        .cards-container {
          display: flex;
          flex-direction: column;
          gap: 25px;
          align-items: center;
          width: 100%;
        }
        .vocab-card {
          position: relative;
          width: 90%;
          max-width: 90%;
          border: 2px solid currentColor;
          border-radius: 30px 6px;
          padding: 14px 16px 14px 16px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: inherit;
          background: transparent;
          box-sizing: border-box;
          cursor: pointer;
          user-select: none;
          transition: border-color 0.2s ease;
          min-height: 55px;
        }
        .vocab-card:hover {
          border-color: #00bfff;
        }
        .vocab-main-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        .item-number {
          position: absolute;
          top: -10px;
          left: 20px;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background-color: #ff3333;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.65rem;
          font-weight: bold;
          z-index: 2;
        }
        .pronunciation-wrapper {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #ffffff;
          color: #ff3333;
          border: 1px solid #ffffff;
          padding: 2px 14px;
          border-radius: 14px;
          font-size: 0.78rem;
          font-weight: 900;
          z-index: 2;
          white-space: nowrap;
          pointer-events: none;
        }
        .speaker-left {
          position: absolute;
          left: -20px;
          top: 20%;
          transform: translateY(-50%) rotate(-130deg);
          font-size: 0.78rem;
          display: inline-block;
        }
        .speaker-right {
          position: absolute;
          right: -20px;
          top: 20%;
          transform: translateY(-50%) rotate(-50deg);
          font-size: 0.78rem;
          display: inline-block;
        }
        .arabic-word {
          font-size: 1.1rem;
          font-weight: 900;
          text-align: right;
          display: flex;
          align-items: center;
        }
        .german-word {
          font-size: 1.0rem;
          font-weight: bold;
          direction: ltr;
          text-align: left;
          display: flex;
          align-items: center;
        }
      `}</style>

      <h1 className="page-title">المنزل</h1>
      <p className="page-subtitle">كل ما يوجد في البيت باللغة الألمانية</p>

      {/* حقل البحث */}
      <div className="search-container">
        <input
          type="text"
          placeholder="ابحث عن كلمة ألمانية أو عربية..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {/* حاوية الكروت */}
      <div className="cards-container">
        {filteredData.map((item) => {
          const showHeading = item.categoryNum !== lastCategoryNum;
          lastCategoryNum = item.categoryNum;

          return (
            <React.Fragment key={item.id}>
              {showHeading && (
                <div className="category-heading">
                  <span className="category-badge">{item.categoryNum}</span>
                  <span>{item.categoryTitle}</span>
                </div>
              )}
              <div
                className="vocab-card"
                onClick={() => speakGerman(item.german)}
              >
                {/* رقم الكارت */}
                <div className="item-number">{item.id}</div>

                {/* شريط النطق */}
                <div className="pronunciation-wrapper">
                  <span className="speaker-left">🔊</span>
                  <span>{item.pronunciation}</span>
                  <span className="speaker-right">🔊</span>
                </div>

                {/* الكلمات */}
                <div className="vocab-main-row">
                  <div className="arabic-word">{item.arabic}</div>
                  <div className="german-word">{renderColoredGermanWord(item.german)}</div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
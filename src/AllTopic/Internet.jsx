import React, { useState } from 'react';

// بيانات الكلمات الموسعة والمقسمة إلى 18 قسماً شاملاً للتكنولوجيا والإنترنت
const techAndInternetDat = [
  // --- القسم الأول: الأجهزة الذكية وأجهزة الحاسوب ---
  { id: 1, categoryNum: 1, categoryTitle: 'الأجهزة الذكية وأجهزة الحاسوب', german: 'das Telefon', pronunciation: 'داس تيليفون', arabic: 'الهاتف' },
  { id: 2, categoryNum: 1, categoryTitle: 'الأجهزة الذكية وأجهزة الحاسوب', german: 'das Handy', pronunciation: 'داس هاندي', arabic: 'الجوال' },
  { id: 3, categoryNum: 1, categoryTitle: 'الأجهزة الذكية وأجهزة الحاسوب', german: 'der Computer', pronunciation: 'در كومبيوتَر', arabic: 'الحاسوب' },
  { id: 4, categoryNum: 1, categoryTitle: 'الأجهزة الذكية وأجهزة الحاسوب', german: 'der Laptop', pronunciation: 'در لابتوب', arabic: 'الحاسوب المحمول' },
  { id: 5, categoryNum: 1, categoryTitle: 'الأجهزة الذكية وأجهزة الحاسوب', german: 'der Server', pronunciation: 'در زيرفر', arabic: 'الخادم' },
  { id: 6, categoryNum: 1, categoryTitle: 'الأجهزة الذكية وأجهزة الحاسوب', german: 'das Tablet', pronunciation: 'داس تابلت', arabic: 'الجهاز اللوحي' },

  // --- القسم الثاني: ملحقات الحاسوب والإدخال والإخراج ---
  { id: 7, categoryNum: 2, categoryTitle: 'ملحقات الحاسوب والإدخال والإخراج', german: 'die Tastatur', pronunciation: 'دي تاستاتور', arabic: 'لوحة المفاتيح' },
  { id: 8, categoryNum: 2, categoryTitle: 'ملحقات الحاسوب والإدخال والإخراج', german: 'die Maus', pronunciation: 'دي ماوس', arabic: 'الفأرة' },
  { id: 9, categoryNum: 2, categoryTitle: 'ملحقات الحاسوب والإدخال والإخراج', german: 'der Bildschirm', pronunciation: 'در بيلدشيرم', arabic: 'الشاشة' },
  { id: 10, categoryNum: 2, categoryTitle: 'ملحقات الحاسوب والإدخال والإخراج', german: 'der Drucker', pronunciation: 'در دروكر', arabic: 'الطابعة' },
  { id: 11, categoryNum: 2, categoryTitle: 'ملحقات الحاسوب والإدخال والإخراج', german: 'der Lautsprecher', pronunciation: 'در لاوتشبريشَر', arabic: 'السماعة' },
  { id: 12, categoryNum: 2, categoryTitle: 'ملحقات الحاسوب والإدخال والإخراج', german: 'der Kopfhörer', pronunciation: 'در كوبهويرر', arabic: 'سماعة الرأس' },
  { id: 13, categoryNum: 2, categoryTitle: 'ملحقات الحاسوب والإدخال والإخراج', german: 'das Mikrofon', pronunciation: 'داس ميكروفون', arabic: 'الميكروفون' },
  { id: 14, categoryNum: 2, categoryTitle: 'ملحقات الحاسوب والإدخال والإخراج', german: 'der Scanner', pronunciation: 'در سكانر', arabic: 'الماسح الضوئي' },

  // --- القسم الثالث: الوسائط والتخزين ---
  { id: 15, categoryNum: 3, categoryTitle: 'الوسائط والتخزين', german: 'die Kamera', pronunciation: 'دي كاميرا', arabic: 'الكاميرا' },
  { id: 16, categoryNum: 3, categoryTitle: 'الوسائط والتخزين', german: 'das Foto', pronunciation: 'داس فوتو', arabic: 'الصورة' },
  { id: 17, categoryNum: 3, categoryTitle: 'الوسائط والتخزين', german: 'das Video', pronunciation: 'داس فيديو', arabic: 'الفيديو' },
  { id: 18, categoryNum: 3, categoryTitle: 'الوسائط والتخزين', german: 'die Datei', pronunciation: 'دي داتاي', arabic: 'الملف' },
  { id: 19, categoryNum: 3, categoryTitle: 'الوسائط والتخزين', german: 'der Ordner', pronunciation: 'در أوردنر', arabic: 'المجلد' },
  { id: 20, categoryNum: 3, categoryTitle: 'الوسائط والتخزين', german: 'der USB-Stick', pronunciation: 'در أوبياس شتيك', arabic: 'ذاكرة USB' },
  { id: 21, categoryNum: 3, categoryTitle: 'الوسائط والتخزين', german: 'die Festplatte', pronunciation: 'دي فيستبلاته', arabic: 'القرص الصلب' },
  { id: 22, categoryNum: 3, categoryTitle: 'الوسائط والتخزين', german: 'die Cloud', pronunciation: 'دي كلاود', arabic: 'السحابة التخزينية' },

  // --- القسم الرابع: البرمجيات والإنترنت والشبكات ---
  { id: 23, categoryNum: 4, categoryTitle: 'البرمجيات والإنترنت والشبكات', german: 'das Programm', pronunciation: 'داس بروگرام', arabic: 'البرنامج' },
  { id: 24, categoryNum: 4, categoryTitle: 'البرمجيات والإنترنت والشبكات', german: 'die App', pronunciation: 'دي آب', arabic: 'التطبيق' },
  { id: 25, categoryNum: 4, categoryTitle: 'البرمجيات والإنترنت والشبكات', german: 'das Internet', pronunciation: 'داس إنترنت', arabic: 'الإنترنت' },
  { id: 26, categoryNum: 4, categoryTitle: 'البرمجيات والإنترنت والشبكات', german: 'die Website', pronunciation: 'دي فيبسايت', arabic: 'الموقع' },
  { id: 27, categoryNum: 4, categoryTitle: 'البرمجيات والإنترنت والشبكات', german: 'die E-Mail', pronunciation: 'دي إيميل', arabic: 'البريد الإلكتروني' },
  { id: 28, categoryNum: 4, categoryTitle: 'البرمجيات والإنترنت والشبكات', german: 'das Passwort', pronunciation: 'داس پاسفورت', arabic: 'كلمة المرور' },
  { id: 29, categoryNum: 4, categoryTitle: 'البرمجيات والإنترنت والشبكات', german: 'der Benutzer', pronunciation: 'در بنوتسر', arabic: 'المستخدم' },
  { id: 30, categoryNum: 4, categoryTitle: 'البرمجيات والإنترنت والشبكات', german: 'das Netzwerk', pronunciation: 'داس نيتسفيرك', arabic: 'الشبكة' },
  { id: 31, categoryNum: 4, categoryTitle: 'البرمجيات والإنترنت والشبكات', german: 'die Software', pronunciation: 'دي زوفتفير', arabic: 'البرمجيات' },
  { id: 32, categoryNum: 4, categoryTitle: 'البرمجيات والإنترنت والشبكات', german: 'die Hardware', pronunciation: 'دي هاردفير', arabic: 'العتاد' },
  { id: 33, categoryNum: 4, categoryTitle: 'البرمجيات والإنترنت والشبكات', german: 'der Browser', pronunciation: 'در براوزر', arabic: 'متصفح الإنترنت' },

  // --- القسم الخامس: الطاقة والملحقات التقنية ---
  { id: 34, categoryNum: 5, categoryTitle: 'الطاقة والملحقات التقنية', german: 'der Akku', pronunciation: 'در أكو', arabic: 'البطارية' },
  { id: 35, categoryNum: 5, categoryTitle: 'الطاقة والملحقات التقنية', german: 'das Ladegerät', pronunciation: 'داس لادغيرات', arabic: 'الشاحن' },
  { id: 36, categoryNum: 5, categoryTitle: 'الطاقة والملحقات التقنية', german: 'das Kabel', pronunciation: 'داس كابل', arabic: 'الكابل / السلك' },

  // --- القسم السادس: الأفعال التقنية ---
  { id: 37, categoryNum: 6, categoryTitle: 'الأفعال التقنية', german: 'herunterladen', pronunciation: 'هيرونترلادن', arabic: 'ينزل' },
  { id: 38, categoryNum: 6, categoryTitle: 'الأفعال التقنية', german: 'hochladen', pronunciation: 'هوخلادن', arabic: 'يرفع' },
  { id: 39, categoryNum: 6, categoryTitle: 'الأفعال التقنية', german: 'speichern', pronunciation: 'شبا يشرن', arabic: 'يحفظ' },
  { id: 40, categoryNum: 6, categoryTitle: 'الأفعال التقنية', german: 'löschen', pronunciation: 'لوشن', arabic: 'يحذف' },
  { id: 41, categoryNum: 6, categoryTitle: 'الأفعال التقنية', german: 'klicken', pronunciation: 'كليكن', arabic: 'ينقر' },
  { id: 42, categoryNum: 6, categoryTitle: 'الأفعال التقنية', german: 'tippen', pronunciation: 'تيبن', arabic: 'يكتب' },
  { id: 43, categoryNum: 6, categoryTitle: 'الأفعال التقنية', german: 'teilen', pronunciation: 'تايلن', arabic: 'يشارك' },
  { id: 44, categoryNum: 6, categoryTitle: 'الأفعال التقنية', german: 'senden', pronunciation: 'زيدن', arabic: 'يرسل' },
  { id: 45, categoryNum: 6, categoryTitle: 'الأفعال التقنية', german: 'verbinden', pronunciation: 'فريبيندن', arabic: 'يتصل' },
  { id: 46, categoryNum: 6, categoryTitle: 'الأفعال التقنية', german: 'installieren', pronunciation: 'إينستاليرين', arabic: 'يثبت برنامج' },

  // --- القسم السابع: أمن المعلومات والخصوصية ---
  { id: 47, categoryNum: 7, categoryTitle: 'أمن المعلومات والخصوصية', german: 'die Sicherheit', pronunciation: 'دي زيشرهايت', arabic: 'الأمان / الحماية' },
  { id: 48, categoryNum: 7, categoryTitle: 'أمن المعلومات والخصوصية', german: 'der Virus', pronunciation: 'در فيروس', arabic: 'الفيروس' },
  { id: 49, categoryNum: 7, categoryTitle: 'أمن المعلومات والخصوصية', german: 'der Hacker', pronunciation: 'در هاكر', arabic: 'المخترق / الهاكر' },
  { id: 50, categoryNum: 7, categoryTitle: 'أمن المعلومات والخصوصية', german: 'der Datenschutz', pronunciation: 'دي داتنشوتس', arabic: 'حماية البيانات' },

  // --- القسم الثامن: الذكاء الاصطناعي والتقنيات الحديثة ---
  { id: 51, categoryNum: 8, categoryTitle: 'الذكاء الاصطناعي والتقنيات الحديثة', german: 'die künstliche Intelligenz', pronunciation: 'دي كينستليشه إنتليغنتس', arabic: 'الذكاء الاصطناعي' },
  { id: 52, categoryNum: 8, categoryTitle: 'الذكاء الاصطناعي والتقنيات الحديثة', german: 'der Roboter', pronunciation: 'در روبوتير', arabic: 'الروبوت / الإنسان الآلي' },
  { id: 53, categoryNum: 8, categoryTitle: 'الذكاء الاصطناعي والتقنيات الحديثة', german: 'der Algorithmus', pronunciation: 'در أللغوريتن', arabic: 'خوارزمية' },
  { id: 54, categoryNum: 8, categoryTitle: 'الذكاء الاصطناعي والتقنيات الحديثة', german: 'die Innovation', pronunciation: 'دي إينوفاتسيون', arabic: 'الابتكار التقني' },

  // --- القسم التاسع: البرمجة وتطوير الويب ---
  { id: 55, categoryNum: 9, categoryTitle: 'البرمجة وتطوير الويب', german: 'der Code', pronunciation: 'در كود', arabic: 'الكود / الشفرة البرمجية' },
  { id: 56, categoryNum: 9, categoryTitle: 'البرمجة وتطوير الويب', german: 'die Programmiersprache', pronunciation: 'دي پروگراميرشبراخه', arabic: 'لغة البرمجة' },
  { id: 57, categoryNum: 9, categoryTitle: 'البرمجة وتطوير الويب', german: 'die Datenbank', pronunciation: 'دي داتنبنك', arabic: 'قاعدة البيانات' },
  { id: 58, categoryNum: 9, categoryTitle: 'البرمجة وتطوير الويب', german: 'der Entwickler', pronunciation: 'در إنتفيكلر', arabic: 'المطور / المبرمج' },

  // --- القسم العاشر: الاتصالات والشبكات اللاسلكية ---
  { id: 59, categoryNum: 10, categoryTitle: 'الاتصالات والشبكات اللاسلكية', german: 'das WLAN', pronunciation: 'داس فيلان', arabic: 'شبكة واي فاي' },
  { id: 60, categoryNum: 10, categoryTitle: 'الاتصالات والشبكات اللاسلكية', german: 'das Signal', pronunciation: 'داس سيگنال', arabic: 'الإشارة' },
  { id: 61, categoryNum: 10, categoryTitle: 'الاتصالات والشبكات اللاسلكية', german: 'die Antenne', pronunciation: 'دي آنتنه', arabic: 'الهوائي / الإريال' },
  { id: 62, categoryNum: 10, categoryTitle: 'الاتصالات والشبكات اللاسلكية', german: 'der Router', pronunciation: 'در روتر', arabic: 'الموجه (الراوتر)' },

  // --- القسم الحادي عشر: التجارة الإلكترونية والدفع الرقمي ---
  { id: 63, categoryNum: 11, categoryTitle: 'التجارة الإلكترونية والدفع الرقمي', german: 'der Online-Shop', pronunciation: 'در أونلاين شوب', arabic: 'المتجر الإلكتروني' },
  { id: 64, categoryNum: 11, categoryTitle: 'التجارة الإلكترونية والدفع الرقمي', german: 'die Bezahlung', pronunciation: 'دي بيتسالونغ', arabic: 'الدفع / السداد' },
  { id: 65, categoryNum: 11, categoryTitle: 'التجارة الإلكترونية والدفع الرقمي', german: 'die Kreditkarte', pronunciation: 'دي كريدتكارته', arabic: 'بطاقة الائتمان' },
  { id: 66, categoryNum: 11, categoryTitle: 'التجارة الإلكترونية والدفع الرقمي', german: 'der Rabatt', pronunciation: 'در ربات', arabic: 'الخصم / التخفيض' },

  // --- القسم الثاني عشر: وسائط التواصل ومنصات المحتوى ---
  { id: 67, categoryNum: 12, categoryTitle: 'وسائط التواصل ومنصات المحتوى', german: 'das soziale Netzwerk', pronunciation: 'داس صيتسياله نيتسفيرك', arabic: 'شبكة التواصل الاجتماعي' },
  { id: 68, categoryNum: 12, categoryTitle: 'وسائط التواصل ومنصات المحتوى', german: 'der Kanal', pronunciation: 'در كانال', arabic: 'القناة' },
  { id: 69, categoryNum: 12, categoryTitle: 'وسائط التواصل ومنصات المحتوى', german: 'der Beitrag', pronunciation: 'در بيتر اغ', arabic: 'المنشور / المشاركة' },
  { id: 70, categoryNum: 12, categoryTitle: 'وسائط التواصل ومنصات المحتوى', german: 'das Profil', pronunciation: 'داس پروفيل', arabic: 'الملف الشخصي' },

  // --- القسم الثالث عشر: واقع الحياة الرقمية والأجهزة القابلة للارتداء ---
  { id: 71, categoryNum: 13, categoryTitle: 'الحياة الرقمية والأجهزة القابلة للارتداء', german: 'die Smartwatch', pronunciation: 'دي سمارت‌واتش', arabic: 'الساعة الذكية' },
  { id: 72, categoryNum: 13, categoryTitle: 'الحياة الرقمية والأجهزة القابلة للارتداء', german: 'die virtuelle Realität', pronunciation: 'دي فيرتويلي رياليته‌ت', arabic: 'الواقع الافتراضي (VR)' },
  { id: 73, categoryNum: 13, categoryTitle: 'الحياة الرقمية والأجهزة القابلة للارتداء', german: 'der Sensor', pronunciation: 'در زينسور', arabic: 'المستشعر / الحساس' },
  { id: 74, categoryNum: 13, categoryTitle: 'الحياة الرقمية والأجهزة القابلة للارتداء', german: 'das Mikrochip', pronunciation: 'داس ميكروشيب', arabic: 'الشريحة الإلكترونية' },

  // --- القسم الرابع عشر: حل المشكلات التقنية والدعم الفني ---
  { id: 75, categoryNum: 14, categoryTitle: 'حل المشكلات التقنية والدعم الفني', german: 'der Fehler', pronunciation: 'در فيلر', arabic: 'الخطأ / العطل' },
  { id: 76, categoryNum: 14, categoryTitle: 'حل المشكلات التقنية والدعم الفني', german: 'das Update', pronunciation: 'داس أوبدات', arabic: 'التحديث' },
  { id: 77, categoryNum: 14, categoryTitle: 'حل المشكلات التقنية والدعم الفني', german: 'die Wiederherstellung', pronunciation: 'دي فيديرهيرشتيلونغ', arabic: 'الاستعادة / النسخ الاحتياطي' },
  { id: 78, categoryNum: 14, categoryTitle: 'حل المشكلات التقنية والدعم الفني', german: 'der Neustart', pronunciation: 'در نوي‌شارت', arabic: 'إعادة التشغيل' },

  // --- القسم الخامس عشر: أنظمة التشغيل والتشغيل الآلي ---
  { id: 79, categoryNum: 15, categoryTitle: 'أنظمة التشغيل والتشغيل الآلي', german: 'das Betriebssystem', pronunciation: 'داس بتريبتسزيستيم', arabic: 'نظام التشغيل' },
  { id: 80, categoryNum: 15, categoryTitle: 'أنظمة التشغيل والتشغيل الآلي', german: 'die Benutzeroberfläche', pronunciation: 'دي بنوتسيرأوبرفلاشي', arabic: 'واجهة المستخدم' },
  { id: 81, categoryNum: 15, categoryTitle: 'أنظمة التشغيل والتشغيل الآلي', german: 'die Automation', pronunciation: 'دي أوتوماتسيون', arabic: 'الأتمتة / التشغيل الآلي' },

  // --- القسم السادس عشر: إنترنت الأشياء والمدن الذكية ---
  { id: 82, categoryNum: 16, categoryTitle: 'إنترنت الأشياء والمدن الذكية', german: 'das Internet der Dinge', pronunciation: 'داس إنترنت دير دينغه', arabic: 'إنترنت الأشياء (IoT)' },
  { id: 83, categoryNum: 16, categoryTitle: 'إنترنت الأشياء والمدن الذكية', german: 'die Smart City', pronunciation: 'دي سمارت سيتي', arabic: 'المدينة الذكية' },
  { id: 84, categoryNum: 16, categoryTitle: 'إنترنت الأشياء والمدن الذكية', german: 'das Dashboard', pronunciation: 'داس داشبورد', arabic: 'لوحة المؤشرات والتحكم' },

  // --- القسم السابع عشر: تقنيات الويب المتقدمة (قسم جديد) ---
  { id: 85, categoryNum: 17, categoryTitle: 'تقنيات الويب المتقدمة', german: 'das Framework', pronunciation: 'داس فرام‌ورك', arabic: 'إطار العمل البرمجي' },
  { id: 86, categoryNum: 17, categoryTitle: 'تقنيات الويب المتقدمة', german: 'die Schnittstelle', pronunciation: 'دي شنيت‌شتيله', arabic: 'واجهة برمجة التطبيقات (API)' },
  { id: 87, categoryNum: 17, categoryTitle: 'تقنيات الويب المتقدمة', german: 'der Serverless', pronunciation: 'در سيرفرلس', arabic: 'الحوسبة بدون خادم' },

  // --- القسم الثامن عشر: الواقع المعزز والتقنيات الغامرة (قسم جديد) ---
  { id: 88, categoryNum: 18, categoryTitle: 'الواقع المعزز والتقنيات الغامرة', german: 'die erweiterte Realität', pronunciation: 'دي إيرفايترته رياليته‌ت', arabic: 'الواقع المعزز (AR)' },
  { id: 89, categoryNum: 18, categoryTitle: 'الواقع المعزز والتقنيات الغامرة', german: 'das Hologramm', pronunciation: 'داس هولوغرام', arabic: 'الصورة المجسمة (هولوجرام)' },
  { id: 90, categoryNum: 18, categoryTitle: 'الواقع المعزز والتقنيات الغامرة', german: 'die Simulation', pronunciation: 'دي زيمولاتسيون', arabic: 'المحاكاة الرقمية' }
];

export default function TechAndInternetPage() {
  const [searchTerm, setSearchTerm] = useState('');

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
      else if (firstWord === 'die' || firstWord === 'sich') wordColor = '#ec4899';

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

  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredData = techAndInternetDat.filter(
    (item) =>
      item.german.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.arabic.includes(searchTerm)
  );

  const groupedData = filteredData.reduce((acc, item) => {
    if (!acc[item.categoryTitle]) {
      acc[item.categoryTitle] = {
        categoryNum: item.categoryNum,
        items: []
      };
    }
    acc[item.categoryTitle].items.push(item);
    return acc;
  }, {});

  return (
    <div style={{ width: '100%', padding: '15px 0 40px 0', color: 'inherit', background: 'transparent', boxSizing: 'border-box' }}>
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        .page-title {
          text-align: center;
          font-size: 1.5rem;
          font-weight: 900;
          margin-bottom: 15px;
          color: inherit;
        }
        /* شريط التنقل السريع - تم تكبير الخط ليكون مريحاً وواضحاً على الموبايل */
        .quick-nav {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-bottom: 25px;
          flex-wrap: wrap;
          padding: 0 10px;
        }
        .quick-nav-link {
          padding: 7px 12px;
          border: 1.5px solid currentColor;
          border-radius: 14px;
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: bold;
          color: inherit;
          transition: all 0.2s ease;
          background: transparent;
          cursor: pointer;
          display: inline-block;
        }
        .quick-nav-link:hover {
          background-color: #00bfff;
          border-color: #00bfff;
          color: #ffffff;
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
          padding: 10px 15px;
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
        .category-section {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 35px;
          scroll-margin-top: 20px;
        }
        .section-header {
          width: 90%;
          max-width: 90%;
          font-size: 1.2rem;
          font-weight: 900;
          margin-bottom: 20px;
          padding-bottom: 8px;
          border-bottom: 2px dashed currentColor;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        .section-number-badge {
          background-color: #ff3333;
          color: #ffffff;
          padding: 2px 10px;
          border-radius: 12px;
          font-size: 0.9rem;
          font-weight: bold;
          display: inline-block;
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
          padding: 14px 16px;
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
          width: 24px;
          height: 22px;
          border-radius: 50%;
          background-color: #ff3333;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.6rem;
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

      {/* العنوان الرئيسي للصفحة */}
      <h1 className="page-title">التكنولوجيا والإنترنت (Technologie und Internet)[cite: 1]</h1>

      {/* روابط التنقل السريع للأقسام تحت العنوان الرئيسي (بحجم كبير ومناسب للموبايل) */}
      <div className="quick-nav">
        <a href="#section-1" onClick={(e) => handleScrollToSection(e, 'section-1')} className="quick-nav-link">1. الأجهزة</a>
        <a href="#section-2" onClick={(e) => handleScrollToSection(e, 'section-2')} className="quick-nav-link">2. الملحقات</a>
        <a href="#section-3" onClick={(e) => handleScrollToSection(e, 'section-3')} className="quick-nav-link">3. الوسائط</a>
        <a href="#section-4" onClick={(e) => handleScrollToSection(e, 'section-4')} className="quick-nav-link">4. البرمجيات</a>
        <a href="#section-5" onClick={(e) => handleScrollToSection(e, 'section-5')} className="quick-nav-link">5. الطاقة</a>
        <a href="#section-6" onClick={(e) => handleScrollToSection(e, 'section-6')} className="quick-nav-link">6. الأفعال</a>
        <a href="#section-7" onClick={(e) => handleScrollToSection(e, 'section-7')} className="quick-nav-link">7. الأمن</a>
        <a href="#section-8" onClick={(e) => handleScrollToSection(e, 'section-8')} className="quick-nav-link">8. الذكاء الاصطناعي</a>
        <a href="#section-9" onClick={(e) => handleScrollToSection(e, 'section-9')} className="quick-nav-link">9. البرمجة</a>
        <a href="#section-10" onClick={(e) => handleScrollToSection(e, 'section-10')} className="quick-nav-link">10. الاتصالات</a>
        <a href="#section-11" onClick={(e) => handleScrollToSection(e, 'section-11')} className="quick-nav-link">11. التجارة</a>
        <a href="#section-12" onClick={(e) => handleScrollToSection(e, 'section-12')} className="quick-nav-link">12. المنصات</a>
        <a href="#section-13" onClick={(e) => handleScrollToSection(e, 'section-13')} className="quick-nav-link">13. الحياة الرقمية</a>
        <a href="#section-14" onClick={(e) => handleScrollToSection(e, 'section-14')} className="quick-nav-link">14. الدعم الفني</a>
        <a href="#section-15" onClick={(e) => handleScrollToSection(e, 'section-15')} className="quick-nav-link">15. أنظمة التشغيل</a>
        <a href="#section-16" onClick={(e) => handleScrollToSection(e, 'section-16')} className="quick-nav-link">16. إنترنت الأشياء</a>
        <a href="#section-17" onClick={(e) => handleScrollToSection(e, 'section-17')} className="quick-nav-link">17. تقنيات الويب</a>
        <a href="#section-18" onClick={(e) => handleScrollToSection(e, 'section-18')} className="quick-nav-link">18. الواقع المعزز</a>
      </div>

      {/* حقل البحث داخل الصفحة */}
      <div className="search-container">
        <input
          type="text"
          placeholder="ابحث عن كلمة ألمانية أو عربية..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {/* عرض الأقسام المرقمة مع خلفية حمراء للأرقام */}
      {Object.keys(groupedData).map((categoryTitle) => {
        const group = groupedData[categoryTitle];
        return (
          <div key={categoryTitle} id={`section-${group.categoryNum}`} className="category-section">
            <h2 className="section-header">
              <span className="section-number-badge">{group.categoryNum}</span>
              <span>{categoryTitle}</span>
            </h2>
            <div className="cards-container">
              {group.items.map((item) => (
                <div
                  key={item.id}
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

                  {/* محتوى الكارت */}
                  <div className="vocab-main-row">
                    <div className="arabic-word">{item.arabic}</div>
                    <div className="german-word">{renderColoredGermanWord(item.german)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
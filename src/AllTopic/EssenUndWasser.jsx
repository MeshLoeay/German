import React, { useState } from 'react';

// قائمة مفردات عبارات الطعام والشراب والمطبخ ألمانية (مختصة بالمطبخ والطعام والتسوق الغذائي حصرياً وبدون تكرار)
const foodAndDrinksData = [
  // ----------------------------------------------------
  // القسم 1: أدوات المائدة والمطبخ
  // ----------------------------------------------------
  { id: 1, categoryId: 'cat-1', categoryNum: 1, categoryTitle: 'أدوات المائدة والمطبخ', german: 'der Teller', pronunciation: 'در تيلر', arabic: 'الصحن / الطبق' },
  { id: 2, categoryId: 'cat-1', categoryNum: 1, categoryTitle: 'أدوات المائدة والمطبخ', german: 'die Gabel', pronunciation: 'دي غابل', arabic: 'الشوكة' },
  { id: 3, categoryId: 'cat-1', categoryNum: 1, categoryTitle: 'أدوات المائدة والمطبخ', german: 'das Messer', pronunciation: 'داس ميسر', arabic: 'السكين' },
  { id: 4, categoryId: 'cat-1', categoryNum: 1, categoryTitle: 'أدوات المائدة والمطبخ', german: 'der Löffel', pronunciation: 'در لوفل', arabic: 'الملعقة' },
  { id: 5, categoryId: 'cat-1', categoryNum: 1, categoryTitle: 'أدوات المائدة والمطبخ', german: 'der Teelöffel', pronunciation: 'در تيه لوفل', arabic: 'ملعقة الشاي الصغيرة' },
  { id: 6, categoryId: 'cat-1', categoryNum: 1, categoryTitle: 'أدوات المائدة والمطبخ', german: 'das Glas', pronunciation: 'داس غلاس', arabic: 'الكوب / الكأس' },
  { id: 7, categoryId: 'cat-1', categoryNum: 1, categoryTitle: 'أدوات المائدة والمطبخ', german: 'die Tasse', pronunciation: 'دي طاسه', arabic: 'الفنجان' },
  { id: 8, categoryId: 'cat-1', categoryNum: 1, categoryTitle: 'أدوات المائدة والمطبخ', german: 'die Flasche', pronunciation: 'دي فلاشه', arabic: 'الزجاجة / القنينة' },
  { id: 9, categoryId: 'cat-1', categoryNum: 1, categoryTitle: 'أدوات المائدة والمطبخ', german: 'die Serviette', pronunciation: 'دي سيرفيرته', arabic: 'المنديل / المحرمة' },
  { id: 10, categoryId: 'cat-1', categoryNum: 1, categoryTitle: 'أدوات المائدة والمطبخ', german: 'der Topf', pronunciation: 'در توبف', arabic: 'القدر / الطنجرة' },
  { id: 11, categoryId: 'cat-1', categoryNum: 1, categoryTitle: 'أدوات المائدة والمطبخ', german: 'die Pfanne', pronunciation: 'دي بفانه', arabic: 'المقلاة' },
  { id: 12, categoryId: 'cat-1', categoryNum: 1, categoryTitle: 'أدوات المائدة والمطبخ', german: 'die Schüssel', pronunciation: 'دي شوصل', arabic: 'الزبدية / الوعاء' },
  { id: 13, categoryId: 'cat-1', categoryNum: 1, categoryTitle: 'أدوات المائدة والمطبخ', german: 'der Kühlschrank', pronunciation: 'در كيولشرانك', arabic: 'الثلاجة' },
  { id: 14, categoryId: 'cat-1', categoryNum: 1, categoryTitle: 'أدوات المائدة والمطبخ', german: 'der Ofen', pronunciation: 'در أوفن', arabic: 'الفرن' },
  { id: 15, categoryId: 'cat-1', categoryNum: 1, categoryTitle: 'أدوات المائدة والمطبخ', german: 'der Herd', pronunciation: 'در هيرد', arabic: 'الموقد / البوتجاز' },
  { id: 16, categoryId: 'cat-1', categoryNum: 1, categoryTitle: 'أدوات المائدة والمطبخ', german: 'die Mikrowelle', pronunciation: 'دي ميكروفيله', arabic: 'الميكروويف' },
  { id: 17, categoryId: 'cat-1', categoryNum: 1, categoryTitle: 'أدوات المائدة والمطبخ', german: 'der Dosenöffner', pronunciation: 'در دوزينأفنر', arabic: 'فتاحة المعلبات' },
  { id: 18, categoryId: 'cat-1', categoryNum: 1, categoryTitle: 'أدوات المائدة والمطبخ', german: 'der Kaffeelöffel', pronunciation: 'در كافيه لوفل', arabic: 'ملعقة القهوة' },
  { id: 19, categoryId: 'cat-1', categoryNum: 1, categoryTitle: 'أدوات المائدة والمطبخ', german: 'das Tablett', pronunciation: 'داس تابلت', arabic: 'الصينية' },
  { id: 20, categoryId: 'cat-1', categoryNum: 1, categoryTitle: 'أدوات المائدة والمطبخ', german: 'der Backofen', pronunciation: 'در باكأوفن', arabic: 'فرن الخبز والشواء' },
  { id: 21, categoryId: 'cat-1', categoryNum: 1, categoryTitle: 'أدوات المائدة والمطبخ', german: 'der Strohhalm', pronunciation: 'در شتروهالم', arabic: 'شفاطة العصير (الشاليموه)' },
  { id: 22, categoryId: 'cat-1', categoryNum: 1, categoryTitle: 'أدوات المائدة والمطبخ', german: 'der Wasserkocher', pronunciation: 'در فاسر كوخر', arabic: 'غلاية الماء' },
  { id: 23, categoryId: 'cat-1', categoryNum: 1, categoryTitle: 'أدوات المائدة والمطبخ', german: 'der Geschirrspüler', pronunciation: 'در غشير شبويلر', arabic: 'غسالة الأطباق' },
  { id: 24, categoryId: 'cat-1', categoryNum: 1, categoryTitle: 'أدوات المائدة والمطبخ', german: 'das Schneidebrett', pronunciation: 'داس شنايده بريت', arabic: 'لوح التقطيع' },
  { id: 25, categoryId: 'cat-1', categoryNum: 1, categoryTitle: 'أدوات المائدة والمطبخ', german: 'die Reibe', pronunciation: 'دي رايبه', arabic: 'المبشرة' },
  { id: 26, categoryId: 'cat-1', categoryNum: 1, categoryTitle: 'أدوات المائدة والمطبخ', german: 'der Schneebesen', pronunciation: 'در شنيه بيزن', arabic: 'المضرب اليدوي' },
  { id: 27, categoryId: 'cat-1', categoryNum: 1, categoryTitle: 'أدوات المائدة والمطبخ', german: 'der Sparschäler', pronunciation: 'در شبار شيلر', arabic: 'قشارة الخضار' },
  { id: 28, categoryId: 'cat-1', categoryNum: 1, categoryTitle: 'أدوات المائدة والمطبخ', german: 'das Sieb', pronunciation: 'داس زيب', arabic: 'المصفاة / المنخل' },
  { id: 29, categoryId: 'cat-1', categoryNum: 1, categoryTitle: 'أدوات المائدة والمطبخ', german: 'der Pfannenwender', pronunciation: 'در بفانين فيندر', arabic: 'ملعقة تقليب الطعام بالمقلاة (سباتولا)' },
  { id: 30, categoryId: 'cat-1', categoryNum: 1, categoryTitle: 'أدوات المائدة والمطبخ', german: 'der Schöpflöffel', pronunciation: 'در شوپ لوفل', arabic: 'مغرفة الشوربة' },
  { id: 31, categoryId: 'cat-1', categoryNum: 1, categoryTitle: 'أدوات المائدة والمطبخ', german: 'die Teekanne', pronunciation: 'دي تيه كانه', arabic: 'بريق الشاي' },
  { id: 32, categoryId: 'cat-1', categoryNum: 1, categoryTitle: 'أدوات المائدة والمطبخ', german: 'die Kaffeemaschine', pronunciation: 'دي كافيه ماشين', arabic: 'ماكينة صنع القهوة' },
  { id: 33, categoryId: 'cat-1', categoryNum: 1, categoryTitle: 'أدوات المائدة والمطبخ', german: 'der Toaster', pronunciation: 'در توستر', arabic: 'محمصة الخبز (التوستر)' },
  { id: 34, categoryId: 'cat-1', categoryNum: 1, categoryTitle: 'أدوات المائدة والمطبخ', german: 'der Mixer', pronunciation: 'در ميكسر', arabic: 'الخلاط الكهربائي' },
  { id: 35, categoryId: 'cat-1', categoryNum: 1, categoryTitle: 'أدوات المائدة والمطبخ', german: 'die Kaffeemühle', pronunciation: 'دي كافيه مولي', arabic: 'طاحونة القهوة' },
  { id: 36, categoryId: 'cat-1', categoryNum: 1, categoryTitle: 'أدوات المائدة والمطبخ', german: 'der Korkenzieher', pronunciation: 'در كوركن تسيهر', arabic: 'فتاحة زجاجات النبيذ (الفلين)' },

  // ----------------------------------------------------
  // القسم 2: الفاكهة
  // ----------------------------------------------------
  { id: 37, categoryId: 'cat-2', categoryNum: 2, categoryTitle: 'الفاكهة', german: 'das Obst', pronunciation: 'داس أوبست', arabic: 'الفواكه' },
  { id: 38, categoryId: 'cat-2', categoryNum: 2, categoryTitle: 'الفاكهة', german: 'der Apfel', pronunciation: 'در أبفل', arabic: 'التفاح' },
  { id: 39, categoryId: 'cat-2', categoryNum: 2, categoryTitle: 'الفاكهة', german: 'die Banane', pronunciation: 'دي بنانه', arabic: 'الموز' },
  { id: 40, categoryId: 'cat-2', categoryNum: 2, categoryTitle: 'الفاكهة', german: 'die Orange', pronunciation: 'دي أورانجه', arabic: 'البرتقال' },
  { id: 41, categoryId: 'cat-2', categoryNum: 2, categoryTitle: 'الفاكهة', german: 'die Zitrone', pronunciation: 'دي تسيترونه', arabic: 'الليمون' },
  { id: 42, categoryId: 'cat-2', categoryNum: 2, categoryTitle: 'الفاكهة', german: 'die Erdbeere', pronunciation: 'دي إردبيره', arabic: 'الفراولة' },
  { id: 43, categoryId: 'cat-2', categoryNum: 2, categoryTitle: 'الفاكهة', german: 'die Kirsche', pronunciation: 'دي كيرشه', arabic: 'الكرز' },
  { id: 44, categoryId: 'cat-2', categoryNum: 2, categoryTitle: 'الفاكهة', german: 'die Traube', pronunciation: 'دي تراوبه', arabic: 'العنب' },
  { id: 45, categoryId: 'cat-2', categoryNum: 2, categoryTitle: 'الفاكهة', german: 'der Pfirsich', pronunciation: 'در بفيززيش', arabic: 'الخوخ' },
  { id: 46, categoryId: 'cat-2', categoryNum: 2, categoryTitle: 'الفاكهة', german: 'die Birne', pronunciation: 'دي بيرنه', arabic: 'الكمثرى' },
  { id: 47, categoryId: 'cat-2', categoryNum: 2, categoryTitle: 'الفاكهة', german: 'die Wassermelone', pronunciation: 'دي فاسرميلونه', arabic: 'البطيخ' },
  { id: 48, categoryId: 'cat-2', categoryNum: 2, categoryTitle: 'الفاكهة', german: 'die Ananas', pronunciation: 'دي أناناس', arabic: 'الأناناس' },
  { id: 49, categoryId: 'cat-2', categoryNum: 2, categoryTitle: 'الفاكهة', german: 'die Mango', pronunciation: 'دي مانغو', arabic: 'المانجو' },
  { id: 50, categoryId: 'cat-2', categoryNum: 2, categoryTitle: 'الفاكهة', german: 'die Feige', pronunciation: 'دي فايغه', arabic: 'التين' },
  { id: 51, categoryId: 'cat-2', categoryNum: 2, categoryTitle: 'الفاكهة', german: 'die Dattel', pronunciation: 'دي داتل', arabic: 'التمر' },
  { id: 52, categoryId: 'cat-2', categoryNum: 2, categoryTitle: 'الفاكهة', german: 'die Himbeere', pronunciation: 'دي هيمبيره', arabic: 'توت العليق' },
  { id: 53, categoryId: 'cat-2', categoryNum: 2, categoryTitle: 'الفاكهة', german: 'die Blaubeere', pronunciation: 'دي بلوبيره', arabic: 'التوت الأزرق' },
  { id: 54, categoryId: 'cat-2', categoryNum: 2, categoryTitle: 'الفاكهة', german: 'die Kiwi', pronunciation: 'دي كيوي', arabic: 'الكيوي' },
  { id: 55, categoryId: 'cat-2', categoryNum: 2, categoryTitle: 'الفاكهة', german: 'die Mandarine', pronunciation: 'دي مندارينه', arabic: 'اليوسفي / المندرين' },
  { id: 56, categoryId: 'cat-2', categoryNum: 2, categoryTitle: 'الفاكهة', german: 'die Grapefruit', pronunciation: 'دي غريب فروت', arabic: 'الجريب فروت' },
  { id: 57, categoryId: 'cat-2', categoryNum: 2, categoryTitle: 'الفاكهة', german: 'die Granatapfel', pronunciation: 'دي غراناط أبفل', arabic: 'الرمان' },
  { id: 58, categoryId: 'cat-2', categoryNum: 2, categoryTitle: 'الفاكهة', german: 'die Aprikose', pronunciation: 'دي أبريكوزه', arabic: 'المشمش' },
  { id: 59, categoryId: 'cat-2', categoryNum: 2, categoryTitle: 'الفاكهة', german: 'die Pflaume', pronunciation: 'دي بفلاومه', arabic: 'البرقوق' },
  { id: 60, categoryId: 'cat-2', categoryNum: 2, categoryTitle: 'الفاكهة', german: 'die Kokosnuss', pronunciation: 'دي كوكوس نوس', arabic: 'جوز الهند' },
  { id: 61, categoryId: 'cat-2', categoryNum: 2, categoryTitle: 'الفاكهة', german: 'die Avokado', pronunciation: 'دي أفوكادو', arabic: 'الأفوكادو' },
  { id: 62, categoryId: 'cat-2', categoryNum: 2, categoryTitle: 'الفاكهة', german: 'die Melone', pronunciation: 'دي ميلونه', arabic: 'الشمام / الكنتالوب' },
  { id: 63, categoryId: 'cat-2', categoryNum: 2, categoryTitle: 'الفاكهة', german: 'die Brombeere', pronunciation: 'دي برومبيره', arabic: 'التوت البري الأسود' },
  { id: 64, categoryId: 'cat-2', categoryNum: 2, categoryTitle: 'الفاكهة', german: 'die Passionsfrucht', pronunciation: 'دي باسيون فروخت', arabic: 'فاكهة العاطفة (الباشن فروت)' },
  { id: 65, categoryId: 'cat-2', categoryNum: 2, categoryTitle: 'الفاكهة', german: 'die Drachenfrucht', pronunciation: 'دي دراخن فروخت', arabic: 'فاكهة التنين (الدراجون فروت)' },
  { id: 66, categoryId: 'cat-2', categoryNum: 2, categoryTitle: 'الفاكهة', german: 'die Stachelbeere', pronunciation: 'دي شتاغل بيره', arabic: 'عنب الثعلب (الغووسبيري)' },
  { id: 67, categoryId: 'cat-2', categoryNum: 2, categoryTitle: 'الفاكهة', german: 'die Johannisbeere', pronunciation: 'دي يوهانيس بيره', arabic: 'العنب البري (الكشمش)' },
  { id: 68, categoryId: 'cat-2', categoryNum: 2, categoryTitle: 'الفاكهة', german: 'die Limette', pronunciation: 'دي ليمته', arabic: 'الليمون الأخضر الحامض' },

  // ----------------------------------------------------
  // القسم 3: الخضراوات والأعشاب
  // ----------------------------------------------------
  { id: 69, categoryId: 'cat-3', categoryNum: 3, categoryTitle: 'الخضراوات والأعشاب', german: 'das Gemüse', pronunciation: 'داس غميوزه', arabic: 'الخضار' },
  { id: 70, categoryId: 'cat-3', categoryNum: 3, categoryTitle: 'الخضراوات والأعشاب', german: 'die Tomate', pronunciation: 'دي توماته', arabic: 'الطماطم' },
  { id: 71, categoryId: 'cat-3', categoryNum: 3, categoryTitle: 'الخضراوات والأعشاب', german: 'die Gurke', pronunciation: 'دي غوركه', arabic: 'الخيار' },
  { id: 72, categoryId: 'cat-3', categoryNum: 3, categoryTitle: 'الخضراوات والأعشاب', german: 'die Kartoffel', pronunciation: 'دي كارتوفل', arabic: 'البطاطس' },
  { id: 73, categoryId: 'cat-3', categoryNum: 3, categoryTitle: 'الخضراوات والأعشاب', german: 'die Zwiebel', pronunciation: 'دي تسفيبل', arabic: 'البصل' },
  { id: 74, categoryId: 'cat-3', categoryNum: 3, categoryTitle: 'الخضراوات والأعشاب', german: 'der Knoblauch', pronunciation: 'در كنوبلاوخ', arabic: 'الثوم' },
  { id: 75, categoryId: 'cat-3', categoryNum: 3, categoryTitle: 'الخضراوات والأعشاب', german: 'die Karotte', pronunciation: 'دي كاروته', arabic: 'الجزر' },
  { id: 76, categoryId: 'cat-3', categoryNum: 3, categoryTitle: 'الخضراوات والأعشاب', german: 'der Kohl', pronunciation: 'در كول', arabic: 'الملفوف' },
  { id: 77, categoryId: 'cat-3', categoryNum: 3, categoryTitle: 'الخضراوات والأعشاب', german: 'die Bohne', pronunciation: 'دي بونه', arabic: 'الفاصولياء' },
  { id: 78, categoryId: 'cat-3', categoryNum: 3, categoryTitle: 'الخضراوات والأعشاب', german: 'die Erbse', pronunciation: 'دي إربسه', arabic: 'البازلاء' },
  { id: 79, categoryId: 'cat-3', categoryNum: 3, categoryTitle: 'الخضراوات والأعشاب', german: 'der Mais', pronunciation: 'در مايس', arabic: 'الذرة' },
  { id: 80, categoryId: 'cat-3', categoryNum: 3, categoryTitle: 'الخضراوات والأعشاب', german: 'der Pilz', pronunciation: 'در بيلتس', arabic: 'الفطر' },
  { id: 81, categoryId: 'cat-3', categoryNum: 3, categoryTitle: 'الخضراوات والأعشاب', german: 'die Zucchini', pronunciation: 'دي تسوكيني', arabic: 'الكوسة' },
  { id: 82, categoryId: 'cat-3', categoryNum: 3, categoryTitle: 'الخضراوات والأعشاب', german: 'der Spinat', pronunciation: 'در شبينات', arabic: 'السبانخ' },
  { id: 83, categoryId: 'cat-3', categoryNum: 3, categoryTitle: 'الخضراوات والأعشاب', german: 'der Paprika', pronunciation: 'در بابريكا', arabic: 'الفلفل الرومي' },
  { id: 84, categoryId: 'cat-3', categoryNum: 3, categoryTitle: 'الخضراوات والأعشاب', german: 'die Aubergine', pronunciation: 'دي أوبرشينه', arabic: 'الباذنجان' },
  { id: 85, categoryId: 'cat-3', categoryNum: 3, categoryTitle: 'الخضراوات والأعشاب', german: 'der Kürbis', pronunciation: 'در كيوربيس', arabic: 'القرع / اليقطين' },
  { id: 86, categoryId: 'cat-3', categoryNum: 3, categoryTitle: 'الخضراوات والأعشاب', german: 'der Salat', pronunciation: 'در زالات', arabic: 'الخس / السلطة' },
  { id: 87, categoryId: 'cat-3', categoryNum: 3, categoryTitle: 'الخضراوات والأعشاب', german: 'die Radieschen', pronunciation: 'دي راديشين', arabic: 'الفجل' },
  { id: 88, categoryId: 'cat-3', categoryNum: 3, categoryTitle: 'الخضراوات والأعشاب', german: 'der Brokkoli', pronunciation: 'در بروكولي', arabic: 'البروكلي' },
  { id: 89, categoryId: 'cat-3', categoryNum: 3, categoryTitle: 'الخضراوات والأعشاب', german: 'der Blumenkohl', pronunciation: 'در بلومنكول', arabic: 'القرنبيط (الزهرة)' },
  { id: 90, categoryId: 'cat-3', categoryNum: 3, categoryTitle: 'الخضراوات والأعشاب', german: 'die Linsen', pronunciation: 'دي لينسن', arabic: 'العدس' },
  { id: 91, categoryId: 'cat-3', categoryNum: 3, categoryTitle: 'الخضراوات والأعشاب', german: 'die Petersilie', pronunciation: 'دي بيترزيلي', arabic: 'البقدونس' },
  { id: 92, categoryId: 'cat-3', categoryNum: 3, categoryTitle: 'الخضراوات والأعشاب', german: 'die Minze', pronunciation: 'دي مينتسه', arabic: 'النعناع' },
  { id: 93, categoryId: 'cat-3', categoryNum: 3, categoryTitle: 'الخضراوات والأعشاب', german: 'der Koriander', pronunciation: 'در كورياندر', arabic: 'الكزبرة' },
  { id: 94, categoryId: 'cat-3', categoryNum: 3, categoryTitle: 'الخضراوات والأعشاب', german: 'der Spargel', pronunciation: 'در شبارغل', arabic: 'الهليون' },
  { id: 95, categoryId: 'cat-3', categoryNum: 3, categoryTitle: 'الخضراوات والأعشاب', german: 'die Kichererbsen', pronunciation: 'دي كيخر إربسن', arabic: 'الحمص' },
  { id: 96, categoryId: 'cat-3', categoryNum: 3, categoryTitle: 'الخضراوات والأعشاب', german: 'der Ingwer', pronunciation: 'در إنغفر', arabic: 'الزنجبيل' },
  { id: 97, categoryId: 'cat-3', categoryNum: 3, categoryTitle: 'الخضراوات والأعشاب', german: 'die Lauchzwiebel', pronunciation: 'دي لاوخ تسفيبل', arabic: 'البصل الأخضر' },
  { id: 98, categoryId: 'cat-3', categoryNum: 3, categoryTitle: 'الخضراوات والأعشاب', german: 'der Dill', pronunciation: 'در ديل', arabic: 'الشبت' },
  { id: 99, categoryId: 'cat-3', categoryNum: 3, categoryTitle: 'الخضراوات والأعشاب', german: 'der Schnittlauch', pronunciation: 'در شنيت لاوخ', arabic: 'الثوم المعمر' },
  { id: 100, categoryId: 'cat-3', categoryNum: 3, categoryTitle: 'الخضراوات والأعشاب', german: 'die Süßkartoffel', pronunciation: 'دي زيوس كارتوفل', arabic: 'البطاطا الحلوة' },
  { id: 101, categoryId: 'cat-3', categoryNum: 3, categoryTitle: 'الخضراوات والأعشاب', german: 'der Sellerie', pronunciation: 'در سلري', arabic: 'الكرفس' },
  { id: 102, categoryId: 'cat-3', categoryNum: 3, categoryTitle: 'الخضراوات والأعشاب', german: 'die Rote Bete', pronunciation: 'دي روته بيته', arabic: 'البنجر (الشمندر)' },
  { id: 103, categoryId: 'cat-3', categoryNum: 3, categoryTitle: 'الخضراوات والأعشاب', german: 'der Fenchel', pronunciation: 'در فنشل', arabic: 'الشمر' },
  { id: 104, categoryId: 'cat-3', categoryNum: 3, categoryTitle: 'الخضراوات والأعشاب', german: 'die Artischocke', pronunciation: 'دي أرتيشوكه', arabic: 'الخرشوف' },
  { id: 105, categoryId: 'cat-3', categoryNum: 3, categoryTitle: 'الخضراوات والأعشاب', german: 'der Rosmarin', pronunciation: 'در روزمارين', arabic: 'إكليل الجبل (الروزماري)' },
  { id: 106, categoryId: 'cat-3', categoryNum: 3, categoryTitle: 'الخضراوات والأعشاب', german: 'der Thymian', pronunciation: 'در تيميان', arabic: 'الزعتر البري' },

  // ----------------------------------------------------
  // القسم 4: الطعام والوجبات الأساسية واللحوم
  // ----------------------------------------------------
  { id: 107, categoryId: 'cat-4', categoryNum: 4, categoryTitle: 'الطعام والوجبات واللحوم', german: 'das Essen', pronunciation: 'داس إسن', arabic: 'الطعام' },
  { id: 108, categoryId: 'cat-4', categoryNum: 4, categoryTitle: 'الطعام والوجبات واللحوم', german: 'das Frühstück', pronunciation: 'داس فريوشتيوك', arabic: 'الفطور' },
  { id: 109, categoryId: 'cat-4', categoryNum: 4, categoryTitle: 'الطعام والوجبات واللحوم', german: 'das Mittagessen', pronunciation: 'داس ميتاغإسن', arabic: 'الغداء' },
  { id: 110, categoryId: 'cat-4', categoryNum: 4, categoryTitle: 'الطعام والوجبات واللحوم', german: 'das Abendessen', pronunciation: 'داس أبندإسن', arabic: 'العشاء' },
  { id: 111, categoryId: 'cat-4', categoryNum: 4, categoryTitle: 'الطعام والوجبات واللحوم', german: 'die Mahlzeit', pronunciation: 'دي مالتسايت', arabic: 'الوجبة' },
  { id: 112, categoryId: 'cat-4', categoryNum: 4, categoryTitle: 'الطعام والوجبات واللحوم', german: 'das Brot', pronunciation: 'داس بروت', arabic: 'الخبز' },
  { id: 113, categoryId: 'cat-4', categoryNum: 4, categoryTitle: 'الطعام والوجبات واللحوم', german: 'das Brötchen', pronunciation: 'داس بروتشين', arabic: 'الخبز الصغير (الصمون)' },
  { id: 114, categoryId: 'cat-4', categoryNum: 4, categoryTitle: 'الطعام والوجبات واللحوم', german: 'die Butter', pronunciation: 'دي بوتر', arabic: 'الزبدة' },
  { id: 115, categoryId: 'cat-4', categoryNum: 4, categoryTitle: 'الطعام والوجبات واللحوم', german: 'der Käse', pronunciation: 'در كيزه', arabic: 'الجبن' },
  { id: 116, categoryId: 'cat-4', categoryNum: 4, categoryTitle: 'الطعام والوجبات واللحوم', german: 'der Joghurt', pronunciation: 'در يوغورت', arabic: 'الزبادي' },
  { id: 117, categoryId: 'cat-4', categoryNum: 4, categoryTitle: 'الطعام والوجبات واللحوم', german: 'die Sahne', pronunciation: 'دي زانه', arabic: 'الكريمة' },
  { id: 118, categoryId: 'cat-4', categoryNum: 4, categoryTitle: 'الطعام والوجبات واللحوم', german: 'das Ei', pronunciation: 'داس أي', arabic: 'البيضة' },
  { id: 119, categoryId: 'cat-4', categoryNum: 4, categoryTitle: 'الطعام والوجبات واللحوم', german: 'das Spiegelei', pronunciation: 'داس شبيغل أي', arabic: 'البيض المقلي (عيون)' },
  { id: 120, categoryId: 'cat-4', categoryNum: 4, categoryTitle: 'الطعام والوجبات واللحوم', german: 'das Rührei', pronunciation: 'داس رور أي', arabic: 'البيض المخفوق' },
  { id: 121, categoryId: 'cat-4', categoryNum: 4, categoryTitle: 'الطعام والوجبات واللحوم', german: 'das gekochte Ei', pronunciation: 'داس غيكوخته أي', arabic: 'البيض المسلوق' },
  { id: 122, categoryId: 'cat-4', categoryNum: 4, categoryTitle: 'الطعام والوجبات واللحوم', german: 'das Fleisch', pronunciation: 'داس فلايش', arabic: 'اللحم' },
  { id: 123, categoryId: 'cat-4', categoryNum: 4, categoryTitle: 'الطعام والوجبات واللحوم', german: 'das Rindfleisch', pronunciation: 'داس ريندفلايش', arabic: 'لحم البقر' },
  { id: 124, categoryId: 'cat-4', categoryNum: 4, categoryTitle: 'الطعام والوجبات واللحوم', german: 'das Hühnerfleisch', pronunciation: 'داس هيونرفلايش', arabic: 'لحم الدجاج' },
  { id: 125, categoryId: 'cat-4', categoryNum: 4, categoryTitle: 'الطعام والوجبات واللحوم', german: 'das Hähnchen', pronunciation: 'داس هينشين', arabic: 'الدجاج المشوي' },
  { id: 126, categoryId: 'cat-4', categoryNum: 4, categoryTitle: 'الطعام والوجبات واللحوم', german: 'das Lammfleisch', pronunciation: 'داس لامفلايش', arabic: 'لحم الخروف' },
  { id: 127, categoryId: 'cat-4', categoryNum: 4, categoryTitle: 'الطعام والوجبات واللحوم', german: 'der Fisch', pronunciation: 'در فيش', arabic: 'السمك' },
  { id: 128, categoryId: 'cat-4', categoryNum: 4, categoryTitle: 'الطعام والوجبات واللحوم', german: 'die Garnele', pronunciation: 'دي غارنيله', arabic: 'الجمبري' },
  { id: 129, categoryId: 'cat-4', categoryNum: 4, categoryTitle: 'الطعام والوجبات واللحوم', german: 'der Lachs', pronunciation: 'در لاكس', arabic: 'سمك السلمون' },
  { id: 130, categoryId: 'cat-4', categoryNum: 4, categoryTitle: 'الطعام والوجبات واللحوم', german: 'der Thunfisch', pronunciation: 'در تون فيش', arabic: 'سمك التونة' },
  { id: 131, categoryId: 'cat-4', categoryNum: 4, categoryTitle: 'الطعام والوجبات واللحوم', german: 'die Wurst', pronunciation: 'دي فورست', arabic: 'النقانق' },
  { id: 132, categoryId: 'cat-4', categoryNum: 4, categoryTitle: 'الطعام والوجبات واللحوم', german: 'der Schinken', pronunciation: 'در شينكن', arabic: 'لحم الخنزير المدخن' },
  { id: 133, categoryId: 'cat-4', categoryNum: 4, categoryTitle: 'الطعام والوجبات واللحوم', german: 'der Schweinefleisch', pronunciation: 'در شفاينه فلايش', arabic: 'لحم الخنزير' },
  { id: 134, categoryId: 'cat-4', categoryNum: 4, categoryTitle: 'الطعام والوجبات واللحوم', german: 'die Mortadella', pronunciation: 'دي مورتاديلا', arabic: 'اللانشون / المرتديلا' },
  { id: 135, categoryId: 'cat-4', categoryNum: 4, categoryTitle: 'الطعام والوجبات واللحوم', german: 'Schweinefleisch-Mortadella', pronunciation: 'شفاينه فلايش مورتاديلا', arabic: 'لانشون لحم الخنزير' },
  { id: 136, categoryId: 'cat-4', categoryNum: 4, categoryTitle: 'الطعام والوجبات واللحوم', german: 'Geflügelmortadella', pronunciation: 'غفلوغيل مورتاديلا', arabic: 'لانشون الدواجن (حلال)' },
  { id: 137, categoryId: 'cat-4', categoryNum: 4, categoryTitle: 'الطعام والوجبات واللحوم', german: 'der Fleischkäse', pronunciation: 'در فلايش كيزه', arabic: 'لانشون اللحم الألماني' },
  { id: 138, categoryId: 'cat-4', categoryNum: 4, categoryTitle: 'الطعام والوجبات واللحوم', german: 'der Schinkenwurst', pronunciation: 'در شينكن فورست', arabic: 'لانشون اللحم المقطع' },
  { id: 139, categoryId: 'cat-4', categoryNum: 4, categoryTitle: 'الطعام والوجبات واللحوم', german: 'der Aufschnitt', pronunciation: 'در أوفشنيت', arabic: 'تشكيلة اللحوم الباردة' },
  { id: 140, categoryId: 'cat-4', categoryNum: 4, categoryTitle: 'الطعام والوجبات واللحوم', german: 'das Salami', pronunciation: 'داس سالامي', arabic: 'السالمي' },
  { id: 141, categoryId: 'cat-4', categoryNum: 4, categoryTitle: 'الطعام والوجبات واللحوم', german: 'der Rohschinken', pronunciation: 'در روشينكن', arabic: 'لحم خنزير مدخن نيء' },
  { id: 142, categoryId: 'cat-4', categoryNum: 4, categoryTitle: 'الطعام والوجبات واللحوم', german: 'die Pizza', pronunciation: 'دي بيتسا', arabic: 'البيتزا' },
  { id: 143, categoryId: 'cat-4', categoryNum: 4, categoryTitle: 'الطعام والوجبات واللحوم', german: 'die Pommes frites', pronunciation: 'دي بومفرتس', arabic: 'البطاطس المقلية' },
  { id: 144, categoryId: 'cat-4', categoryNum: 4, categoryTitle: 'الطعام والوجبات واللحوم', german: 'der Döner', pronunciation: 'در دونر', arabic: 'الشاورما التركية' },
  { id: 145, categoryId: 'cat-4', categoryNum: 4, categoryTitle: 'الطعام والوجبات واللحوم', german: 'der Reis', pronunciation: 'در رايس', arabic: 'الأرز' },
  { id: 146, categoryId: 'cat-4', categoryNum: 4, categoryTitle: 'الطعام والوجبات واللحوم', german: 'die Nudeln', pronunciation: 'دي نودلن', arabic: 'المعكرونة' },
  { id: 147, categoryId: 'cat-4', categoryNum: 4, categoryTitle: 'الطعام والوجبات واللحوم', german: 'die Suppe', pronunciation: 'دي زوبه', arabic: 'الشوربة' },
  { id: 148, categoryId: 'cat-4', categoryNum: 4, categoryTitle: 'الطعام والوجبات واللحوم', german: 'der Burger', pronunciation: 'در بورغر', arabic: 'البرجر' },
  { id: 149, categoryId: 'cat-4', categoryNum: 4, categoryTitle: 'الطعام والوجبات واللحوم', german: 'die Haferflocken', pronunciation: 'دي هافر فلوكن', arabic: 'رقائق الشوفان' },
  { id: 150, categoryId: 'cat-4', categoryNum: 4, categoryTitle: 'الطعام والوجبات واللحوم', german: 'das Müsli', pronunciation: 'داس ميوزلي', arabic: 'الموسلي (حبوب الإفطار)' },
  { id: 151, categoryId: 'cat-4', categoryNum: 4, categoryTitle: 'الطعام والوجبات واللحوم', german: 'das Hackfleisch', pronunciation: 'داس هاك فلايش', arabic: 'اللحم المفروم' },
  { id: 152, categoryId: 'cat-4', categoryNum: 4, categoryTitle: 'الطعام والوجبات واللحوم', german: 'das Steak', pronunciation: 'داس شتيك', arabic: 'شرائح اللحم (ستيك)' },
  { id: 153, categoryId: 'cat-4', categoryNum: 4, categoryTitle: 'الطعام والوجبات واللحوم', german: 'das Schnitzel', pronunciation: 'داس شنيتسل', arabic: 'الشنيتزل (بانيه)' },
  { id: 154, categoryId: 'cat-4', categoryNum: 4, categoryTitle: 'الطعام والوجبات واللحوم', german: 'das Toastbrot', pronunciation: 'داس توست بروت', arabic: 'خبز التوست' },
  { id: 155, categoryId: 'cat-4', categoryNum: 4, categoryTitle: 'الطعام والوجبات واللحوم', german: 'der Quark', pronunciation: 'در كفارك', arabic: 'جبن القريش الألماني الكريمي' },
  { id: 156, categoryId: 'cat-4', categoryNum: 4, categoryTitle: 'الطعام والوجبات واللحوم', german: 'die Bratwurst', pronunciation: 'دي برات فورست', arabic: 'نقانق مشوية' },
  { id: 157, categoryId: 'cat-4', categoryNum: 4, categoryTitle: 'الطعام والوجبات واللحوم', german: 'das Hähnchenschenkel', pronunciation: 'داس هينشين شنكل', arabic: 'فخذ دجاج' },

  // ----------------------------------------------------
  // القسم 5: المشروبات
  // ----------------------------------------------------
  { id: 158, categoryId: 'cat-5', categoryNum: 5, categoryTitle: 'المشروبات', german: 'das Wasser', pronunciation: 'داس فاسر', arabic: 'الماء' },
  { id: 159, categoryId: 'cat-5', categoryNum: 5, categoryTitle: 'المشروبات', german: 'das Mineralwasser', pronunciation: 'داس مينيرال فاسر', arabic: 'الماء المعدني' },
  { id: 160, categoryId: 'cat-5', categoryNum: 5, categoryTitle: 'المشروبات', german: 'der Saft', pronunciation: 'در زافت', arabic: 'العصير' },
  { id: 161, categoryId: 'cat-5', categoryNum: 5, categoryTitle: 'المشروبات', german: 'der Orangensaft', pronunciation: 'در أورانجن زافت', arabic: 'عصير البرتقال' },
  { id: 162, categoryId: 'cat-5', categoryNum: 5, categoryTitle: 'المشروبات', german: 'der Apfelsaft', pronunciation: 'در أبفل زافت', arabic: 'عصير التفاح' },
  { id: 163, categoryId: 'cat-5', categoryNum: 5, categoryTitle: 'المشروبات', german: 'der Kaffee', pronunciation: 'در كافيه', arabic: 'القهوة' },
  { id: 164, categoryId: 'cat-5', categoryNum: 5, categoryTitle: 'المشروبات', german: 'der Tee', pronunciation: 'در تيه', arabic: 'الشاي' },
  { id: 165, categoryId: 'cat-5', categoryNum: 5, categoryTitle: 'المشروبات', german: 'der grüne Tee', pronunciation: 'در غروينه تيه', arabic: 'الشاي الأخضر' },
  { id: 166, categoryId: 'cat-5', categoryNum: 5, categoryTitle: 'المشروبات', german: 'der schwarze Tee', pronunciation: 'در شفارتسه تيه', arabic: 'الشاي الأسود' },
  { id: 167, categoryId: 'cat-5', categoryNum: 5, categoryTitle: 'المشروبات', german: 'die Milch', pronunciation: 'دي ميلش', arabic: 'الحليب' },
  { id: 168, categoryId: 'cat-5', categoryNum: 5, categoryTitle: 'المشروبات', german: 'die Buttermilch', pronunciation: 'دي بوتر ميلش', arabic: 'اللبن الرائب' },
  { id: 169, categoryId: 'cat-5', categoryNum: 5, categoryTitle: 'المشروبات', german: 'die Cola', pronunciation: 'دي كولا', arabic: 'الكولا' },
  { id: 170, categoryId: 'cat-5', categoryNum: 5, categoryTitle: 'المشروبات', german: 'die Limonade', pronunciation: 'دي ليموناده', arabic: 'الليموناضة' },
  { id: 171, categoryId: 'cat-5', categoryNum: 5, categoryTitle: 'المشروبات', german: 'das Bier', pronunciation: 'داس بير', arabic: 'البيرة' },
  { id: 172, categoryId: 'cat-5', categoryNum: 5, categoryTitle: 'المشروبات', german: 'der Wein', pronunciation: 'در فاين', arabic: 'النبيذ' },
  { id: 173, categoryId: 'cat-5', categoryNum: 5, categoryTitle: 'المشروبات', german: 'die Heiße Schokolade', pronunciation: 'دي هايسه شوكولاده', arabic: 'الشوكولاتة الساخنة' },
  { id: 174, categoryId: 'cat-5', categoryNum: 5, categoryTitle: 'المشروبات', german: 'der Espresso', pronunciation: 'در إسبريسو', arabic: 'الأسبريسو' },
  { id: 175, categoryId: 'cat-5', categoryNum: 5, categoryTitle: 'المشروبات', german: 'der Cappuccino', pronunciation: 'در كابتشينو', arabic: 'الكابتشينو' },
  { id: 176, categoryId: 'cat-5', categoryNum: 5, categoryTitle: 'المشروبات', german: 'der Eistee', pronunciation: 'در آيس تيه', arabic: 'الشاي المثلج' },
  { id: 177, categoryId: 'cat-5', categoryNum: 5, categoryTitle: 'المشروبات', german: 'der Kakao', pronunciation: 'در كاكاو', arabic: 'الكاكاو' },
  { id: 178, categoryId: 'cat-5', categoryNum: 5, categoryTitle: 'المشروبات', german: 'der Traubensaft', pronunciation: 'در تراوبن زافت', arabic: 'عصير العنب' },
  { id: 179, categoryId: 'cat-5', categoryNum: 5, categoryTitle: 'المشروبات', german: 'der Kirschsaft', pronunciation: 'در كيرش زافت', arabic: 'عصير الكرز' },
  { id: 180, categoryId: 'cat-5', categoryNum: 5, categoryTitle: 'المشروبات', german: 'der Latte Macchiato', pronunciation: 'در لاتي ماكياتو', arabic: 'لاتيه ماكياتو (قهوة بالحليب)' },

  // ----------------------------------------------------
  // القسم 6: المكونات والتوابل والزيوت
  // ----------------------------------------------------
  { id: 181, categoryId: 'cat-6', categoryNum: 6, categoryTitle: 'المكونات والتوابل والزيوت', german: 'der Zucker', pronunciation: 'در تسوكر', arabic: 'السكر' },
  { id: 182, categoryId: 'cat-6', categoryNum: 6, categoryTitle: 'المكونات والتوابل والزيوت', german: 'das Salz', pronunciation: 'داس زالتس', arabic: 'الملح' },
  { id: 183, categoryId: 'cat-6', categoryNum: 6, categoryTitle: 'المكونات والتوابل والزيوت', german: 'der Pfeffer', pronunciation: 'در بفيفير', arabic: 'الفلفل' },
  { id: 184, categoryId: 'cat-6', categoryNum: 6, categoryTitle: 'المكونات والتوابل والزيوت', german: 'das Öl', pronunciation: 'داس إول', arabic: 'الزيت' },
  { id: 185, categoryId: 'cat-6', categoryNum: 6, categoryTitle: 'المكونات والتوابل والزيوت', german: 'das Olivenöl', pronunciation: 'داس أوليفن إول', arabic: 'زيت الزيتون' },
  { id: 186, categoryId: 'cat-6', categoryNum: 6, categoryTitle: 'المكونات والتوابل والزيوت', german: 'das Sonnenblumenöl', pronunciation: 'داس زونن بلومن إول', arabic: 'زيت عباد الشمس' },
  { id: 187, categoryId: 'cat-6', categoryNum: 6, categoryTitle: 'المكونات والتوابل والزيوت', german: 'der Essig', pronunciation: 'در إسيش', arabic: 'الخل' },
  { id: 188, categoryId: 'cat-6', categoryNum: 6, categoryTitle: 'المكونات والتوابل والزيوت', german: 'die Soße', pronunciation: 'دي زوسه', arabic: 'الصلصة' },
  { id: 189, categoryId: 'cat-6', categoryNum: 6, categoryTitle: 'المكونات والتوابل والزيوت', german: 'das Mehl', pronunciation: 'داس ميل', arabic: 'الطحين' },
  { id: 190, categoryId: 'cat-6', categoryNum: 6, categoryTitle: 'المكونات والتوابل والزيوت', german: 'der Honig', pronunciation: 'در هونيغ', arabic: 'العسل' },
  { id: 191, categoryId: 'cat-6', categoryNum: 6, categoryTitle: 'المكونات والتوابل والزيوت', german: 'die Marmelade', pronunciation: 'دي مارملاده', arabic: 'المربى' },
  { id: 192, categoryId: 'cat-6', categoryNum: 6, categoryTitle: 'المكونات والتوابل والزيوت', german: 'der Senf', pronunciation: 'در زنفت', arabic: 'الخردل' },
  { id: 193, categoryId: 'cat-6', categoryNum: 6, categoryTitle: 'المكونات والتوابل والزيوت', german: 'der Ketchup', pronunciation: 'در كيتشاب', arabic: 'الكاتشب' },
  { id: 194, categoryId: 'cat-6', categoryNum: 6, categoryTitle: 'المكونات والتوابل والزيوت', german: 'die Mayonnaise', pronunciation: 'دي ماينيز', arabic: 'المايونيز' },
  { id: 195, categoryId: 'cat-6', categoryNum: 6, categoryTitle: 'المكونات والتوابل والزيوت', german: 'die Hefe', pronunciation: 'دي هيفه', arabic: 'الخميرة' },
  { id: 196, categoryId: 'cat-6', categoryNum: 6, categoryTitle: 'المكونات والتوابل والزيوت', german: 'der Zimt', pronunciation: 'در تسيمت', arabic: 'القرفة' },
  { id: 197, categoryId: 'cat-6', categoryNum: 6, categoryTitle: 'المكونات والتوابل والزيوت', german: 'der Kümmel', pronunciation: 'در كيومل', arabic: 'الكمون' },
  { id: 198, categoryId: 'cat-6', categoryNum: 6, categoryTitle: 'المكونات والتوابل والزيوت', german: 'das Currypulver', pronunciation: 'داس كوري بولفر', arabic: 'مسحوق الكاري' },
  { id: 199, categoryId: 'cat-6', categoryNum: 6, categoryTitle: 'المكونات والتوابل والزيوت', german: 'die Vanille', pronunciation: 'دي فانيليه', arabic: 'الفانيليا' },
  { id: 200, categoryId: 'cat-6', categoryNum: 6, categoryTitle: 'المكونات والتوابل والزيوت', german: 'das Backpulver', pronunciation: 'داس باك بولفر', arabic: 'بيكنج بودر' },
  { id: 201, categoryId: 'cat-6', categoryNum: 6, categoryTitle: 'المكونات والتوابل والزيوت', german: 'der Paprikapulver', pronunciation: 'در بابريكا بولفر', arabic: 'مسحوق الفلفل الأحمر الحلو (بابريكا)' },
  { id: 202, categoryId: 'cat-6', categoryNum: 6, categoryTitle: 'المكونات والتوابل والزيوت', german: 'die Sojasoße', pronunciation: 'دي صويا زوسه', arabic: 'صلصة الصويا' },

  // ----------------------------------------------------
  // القسم 7: الحلويات والمكسرات
  // ----------------------------------------------------
  { id: 203, categoryId: 'cat-7', categoryNum: 7, categoryTitle: 'الحلويات والمكسرات', german: 'der Kuchen', pronunciation: 'در كوخن', arabic: 'الكعك' },
  { id: 204, categoryId: 'cat-7', categoryNum: 7, categoryTitle: 'الحلويات والمكسرات', german: 'der Keks', pronunciation: 'در كيكس', arabic: 'البسكويت' },
  { id: 205, categoryId: 'cat-7', categoryNum: 7, categoryTitle: 'الحلويات والمكسرات', german: 'die Schokolade', pronunciation: 'دي شوكولاده', arabic: 'الشوكولاتة' },
  { id: 206, categoryId: 'cat-7', categoryNum: 7, categoryTitle: 'الحلويات والمكسرات', german: 'das Eis', pronunciation: 'داس آيس', arabic: 'الآيس كريم' },
  { id: 207, categoryId: 'cat-7', categoryNum: 7, categoryTitle: 'الحلويات والمكسرات', german: 'die Süßigkeiten', pronunciation: 'دي زيوسيغكايتن', arabic: 'الحلويات' },
  { id: 208, categoryId: 'cat-7', categoryNum: 7, categoryTitle: 'الحلويات والمكسرات', german: 'die Bonbons', pronunciation: 'دي بونبونس', arabic: 'الحلوى' },
  { id: 209, categoryId: 'cat-7', categoryNum: 7, categoryTitle: 'الحلويات والمكسرات', german: 'die Nüsse', pronunciation: 'دي نويسه', arabic: 'المكسرات' },
  { id: 210, categoryId: 'cat-7', categoryNum: 7, categoryTitle: 'الحلويات والمكسرات', german: 'der Milchreis', pronunciation: 'در ميلش رايس', arabic: 'الأرز باللبن' },
  { id: 211, categoryId: 'cat-7', categoryNum: 7, categoryTitle: 'الحلويات والمكسرات', german: 'der Pfannkuchen', pronunciation: 'در بفان كوخن', arabic: 'البان كيك' },
  { id: 212, categoryId: 'cat-7', categoryNum: 7, categoryTitle: 'الحلويات والمكسرات', german: 'die Torte', pronunciation: 'دي تورته', arabic: 'التورتة' },
  { id: 213, categoryId: 'cat-7', categoryNum: 7, categoryTitle: 'الحلويات والمكسرات', german: 'der Pudding', pronunciation: 'در بودينغ', arabic: 'البودينغ / المهلبية' },
  { id: 214, categoryId: 'cat-7', categoryNum: 7, categoryTitle: 'الحلويات والمكسرات', german: 'die Mandeln', pronunciation: 'دي موندلن', arabic: 'اللوز' },
  { id: 215, categoryId: 'cat-7', categoryNum: 7, categoryTitle: 'الحلويات والمكسرات', german: 'die Pistazien', pronunciation: 'دي بيستاتسين', arabic: 'الفستق' },
  { id: 216, categoryId: 'cat-7', categoryNum: 7, categoryTitle: 'الحلويات والمكسرات', german: 'die Walnüsse', pronunciation: 'دي فالنويسه', arabic: 'الجوز (عين الجمل)' },
  { id: 217, categoryId: 'cat-7', categoryNum: 7, categoryTitle: 'الحلويات والمكسرات', german: 'die Erdnüsse', pronunciation: 'دي إردنويسه', arabic: 'الفول السوداني' },

  // ----------------------------------------------------
  // القسم 8: الصفات وحالات الطعام والطعم
  // ----------------------------------------------------
  { id: 218, categoryId: 'cat-8', categoryNum: 8, categoryTitle: 'الصفات وطعم الطعام', german: 'satt', pronunciation: 'زات', arabic: 'شبعان' },
  { id: 219, categoryId: 'cat-8', categoryNum: 8, categoryTitle: 'الصفات وطعم الطعام', german: 'lecker', pronunciation: 'ليكر', arabic: 'لذيذ' },
  { id: 220, categoryId: 'cat-8', categoryNum: 8, categoryTitle: 'الصفات وطعم الطعام', german: 'frisch', pronunciation: 'فريش', arabic: 'طازج' },
  { id: 221, categoryId: 'cat-8', categoryNum: 8, categoryTitle: 'الصفات وطعم الطعام', german: 'bitter', pronunciation: 'بيتر', arabic: 'مر' },
  { id: 222, categoryId: 'cat-8', categoryNum: 8, categoryTitle: 'الصفات وطعم الطعام', german: 'heiß', pronunciation: 'هايس', arabic: 'ساخن' },
  { id: 223, categoryId: 'cat-8', categoryNum: 8, categoryTitle: 'الصفات وطعم الطعام', german: 'kalt', pronunciation: 'كالت', arabic: 'بارد' },
  { id: 224, categoryId: 'cat-8', categoryNum: 8, categoryTitle: 'الصفات وطعم الطعام', german: 'süß', pronunciation: 'زيوس', arabic: 'حلو' },
  { id: 225, categoryId: 'cat-8', categoryNum: 8, categoryTitle: 'الصفات وطعم الطعام', german: 'sauer', pronunciation: 'زاور', arabic: 'حامض' },
  { id: 226, categoryId: 'cat-8', categoryNum: 8, categoryTitle: 'الصفات وطعم الطعام', german: 'scharf', pronunciation: 'شارف', arabic: 'حار (توابل)' },
  { id: 227, categoryId: 'cat-8', categoryNum: 8, categoryTitle: 'الصفات وطعم الطعام', german: 'gekocht', pronunciation: 'غي كوخت', arabic: 'مطبوخ / مسلوق' },
  { id: 228, categoryId: 'cat-8', categoryNum: 8, categoryTitle: 'الصفات وطعم الطعام', german: 'gebraten', pronunciation: 'غي براتن', arabic: 'مقلي بالزيت' },
  { id: 229, categoryId: 'cat-8', categoryNum: 8, categoryTitle: 'الصفات وطعم الطعام', german: 'gegrillt', pronunciation: 'غي غريلت', arabic: 'مشوي' },
  { id: 230, categoryId: 'cat-8', categoryNum: 8, categoryTitle: 'الصفات وطعم الطعام', german: 'fettig', pronunciation: 'فيتيش', arabic: 'دسم' },
  { id: 231, categoryId: 'cat-8', categoryNum: 8, categoryTitle: 'الصفات وطعم الطعام', german: 'trocken', pronunciation: 'تروكن', arabic: 'جاف' },
  { id: 232, categoryId: 'cat-8', categoryNum: 8, categoryTitle: 'الصفات وطعم الطعام', german: 'salzig', pronunciation: 'زالتسيش', arabic: 'مالح' },
  { id: 233, categoryId: 'cat-8', categoryNum: 8, categoryTitle: 'الصفات وطعم الطعام', german: 'milder', pronunciation: 'ميلدر', arabic: 'خفيف المذاق' },
  { id: 234, categoryId: 'cat-8', categoryNum: 8, categoryTitle: 'الصفات وطعم الطعام', german: 'roh', pronunciation: 'روه', arabic: 'نيء' },
  { id: 235, categoryId: 'cat-8', categoryNum: 8, categoryTitle: 'الصفات وطعم الطعام', german: 'knusprig', pronunciation: 'كنوسبريخ', arabic: 'مقرمش' },
  { id: 236, categoryId: 'cat-8', categoryNum: 8, categoryTitle: 'الصفات وطعم الطعام', german: 'gut durch', pronunciation: 'غوت دورش', arabic: 'ناضج تماماً (لحم)' },
  { id: 237, categoryId: 'cat-8', categoryNum: 8, categoryTitle: 'الصفات وطعم الطعام', german: 'reif', pronunciation: 'رايف', arabic: 'ناضج (للفواكه)' },

  // ----------------------------------------------------
  // القسم 9: مصطلحات وجمل المطعم والطلب
  // ----------------------------------------------------
  { id: 238, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'das Rezept', pronunciation: 'داس رتسيبت', arabic: 'الوصفة' },
  { id: 239, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'die Speisekarte', pronunciation: 'دي شبايزكارته', arabic: 'قائمة الطعام' },
  { id: 240, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'die Rechnung', pronunciation: 'دي ريشنونغ', arabic: 'الفاتورة' },
  { id: 241, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'das Gericht', pronunciation: 'داس غريشت', arabic: 'الطبق' },
  { id: 242, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'der Hunger', pronunciation: 'در هونغر', arabic: 'الجوع' },
  { id: 243, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'der Durst', pronunciation: 'در دورست', arabic: 'العطش' },
  { id: 244, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'der Kellner', pronunciation: 'در كيلنر', arabic: 'النادل / الجرسون' },
  { id: 245, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Guten Appetit!', pronunciation: 'غوتن أبيتيت', arabic: 'بالهناء والشفاء' },
  { id: 246, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Prost!', pronunciation: 'بروست', arabic: 'في صحتك' },
  { id: 247, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Ich möchte bestellen', pronunciation: 'إش موشته بشتيلن', arabic: 'أود أن أطلب' },
  { id: 248, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Ich hätte gern...', pronunciation: 'إش هيته غيرن', arabic: 'أرغب بـ...' },
  { id: 249, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Die Rechnung, bitte', pronunciation: 'دي ريشنونغ بته', arabic: 'الفاتورة لو سمحت' },
  { id: 250, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Zusammen oder getrennt?', pronunciation: 'تسو زامن أودر غترينت', arabic: 'معاً أم الحساب منفصل؟' },
  { id: 251, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Getrennt, bitte', pronunciation: 'غترينت بته', arabic: 'كل شخص لوحده' },
  { id: 252, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Das schmeckt gut', pronunciation: 'داس شميكت غوت', arabic: 'هذا طعمه لذيذ' },
  { id: 253, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Ich habe Hunger', pronunciation: 'إش هابه هونغر', arabic: 'أنا جائع' },
  { id: 254, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Ich habe Durst', pronunciation: 'إش هابه دورست', arabic: 'أنا عطشان' },
  { id: 255, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Ich bin satt', pronunciation: 'إش بين زات', arabic: 'أنا شبعان' },
  { id: 256, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Ist das Halal?', pronunciation: 'إست داس حلال', arabic: 'هل هذا حلال؟' },
  { id: 257, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Enthält das Schweinefleisch?', pronunciation: 'إنت هيلت داس شفاينه فلايش', arabic: 'هل يحتوي على لحم خنزير؟' },
  { id: 258, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Enthält das Alkohol?', pronunciation: 'إنت هيلت داس الكوهول', arabic: 'هل يحتوي على كحول؟' },
  { id: 259, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Einen Tisch für zwei, bitte', pronunciation: 'أينن تيش فور تسفاي بته', arabic: 'طاولة لشخصين لو سمحت' },
  { id: 260, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Stilles Wasser, bitte', pronunciation: 'شتيلس فاسر بته', arabic: 'ماء بدون غازات' },
  { id: 261, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Wasser mit Kohlensäure', pronunciation: 'فاسر ميت كولن زويره', arabic: 'ماء فوار غازي' },
  { id: 262, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Zum Mitnehmen, bitte', pronunciation: 'تسوم ميت نيمين بته', arabic: 'سفري للخارج' },
  { id: 263, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Hier essen, bitte', pronunciation: 'هير إسن بته', arabic: 'للأكل هنا بالمطعم' },
  { id: 264, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Kann ich mit Karte zahlen?', pronunciation: 'كان إش ميت كارته تسالن', arabic: 'هل يمكنني الدفع بالبطاقة؟' },
  { id: 265, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Nur Barzahlung', pronunciation: 'نور بار تسالونغ', arabic: 'الدفع نقداً فقط' },
  { id: 266, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Das Stimmt so', pronunciation: 'داس شتيمت زو', arabic: 'احتفظ بالباقي كإكرامية' },
  { id: 267, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Ich bin Vegetarier', pronunciation: 'إش بين فيغيتارير', arabic: 'أنا نباتي' },
  { id: 268, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Ich habe eine Allergie gegen...', pronunciation: 'إش هابه أينه أليرغي غيغن', arabic: 'لدي حساسية من...' },
  { id: 269, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Ohne Zwiebeln, bitte', pronunciation: 'أونه تسفيبلن بته', arabic: 'بدون بصل لو سمحت' },
  { id: 270, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Ohne Eis, bitte', pronunciation: 'أونه آيس بته', arabic: 'بدون ثلج لو سمحت' },
  { id: 271, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Gibt es ein Tagesgericht?', pronunciation: 'غيبت إس أين تاغس غريشت', arabic: 'هل يوجد طبق اليوم؟' },
  { id: 272, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Wo ist die Toilette?', pronunciation: 'فو إست دي تواليتها', arabic: 'أين يوجد الحمام؟' },
  { id: 273, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Dazu bitte ein Wasser', pronunciation: 'دا تسو بته أين فاسر', arabic: 'ومع ذلك كوب ماء' },
  { id: 274, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Sehr lecker, danke!', pronunciation: 'زير ليكر دانكه', arabic: 'لذيذ جداً، شكراً!' },
  { id: 275, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Entschuldigung, Kellner!', pronunciation: 'إنتشولديغونغ كيلنر', arabic: 'معذرةً يا نادل!' },
  { id: 276, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Ich möchte reservieren', pronunciation: 'إش موشته ريزيرفيرن', arabic: 'أريد إجراء حجز طاولة' },
  { id: 277, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Ein Glas Wasser, bitte', pronunciation: 'أين غلاس فاسر بته', arabic: 'كوب ماء لو سمحت' },
  { id: 278, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Die Speisekarte, bitte', pronunciation: 'دي شبايزكارته بته', arabic: 'قائمة الطعام لو سمحت' },
  { id: 279, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Ist dieser Tisch frei?', pronunciation: 'إست ديزر تيش فراي', arabic: 'هل هذه الطاولة فارغة؟' },
  { id: 280, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Wir möchten bestellen', pronunciation: 'فير موشتن بشتيلن', arabic: 'نريد أن نطلب الطعام' },
  { id: 281, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Das Essen ist kalt', pronunciation: 'داس إسن إست كالت', arabic: 'الطعام بارد' },
  { id: 282, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Vielen Dank für den Service', pronunciation: 'فيلن دانك فور دين سيرفيس', arabic: 'شكراً على الخدمة الممتازة' },
  { id: 283, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Gibt es einen Tisch draußen?', pronunciation: 'غيبت إس أينن تيش دراوسن', arabic: 'هل توجد طاولة بالخارج؟' },
  { id: 284, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Ich bin allergisch gegen Nüsse', pronunciation: 'إش بين أليرغيش غيغن نويسه', arabic: 'لدي حساسية ضد المكسرات' },
  { id: 285, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Guten Appetit wünsche ich Ihnen', pronunciation: 'غوتن أبيتيت وونشه إش إيネン', arabic: 'أتمنى لكم شهية طيبة' },
  { id: 286, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Schmeckts Ihnen?', pronunciation: 'شميكتس إيネン', arabic: 'هل يعجبك طعم الطعام؟' },
  { id: 287, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Ich hätte gern die Suppe', pronunciation: 'إش هيته غيرن دي زوبه', arabic: 'أود الحصول على الشوربة' },
  { id: 288, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Wo finde ich das Salz?', pronunciation: 'فو فينده إش داس زالتس', arabic: 'أين أجد الملح؟' },
  { id: 289, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Das ist zu teuer', pronunciation: 'داس إست تسو توير', arabic: 'هذا غالي الثمن' },
  { id: 290, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Haben Sie frisches Brot?', pronunciation: 'هابن زي فريشس بروت', arabic: 'هل لديكم خبز طازج؟' },
  { id: 291, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Ein Kilo Tomaten, bitte', pronunciation: 'أين كيلو تومانتن بته', arabic: 'كيلو طماطم لو سمحت' },
  { id: 292, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Fünf Brötchen, bitte', pronunciation: 'فونف بروتشين بته', arabic: 'خمس أرغفة خبز صغيرة لو سمحت' },
  { id: 293, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Wo ist die Bäckerei?', pronunciation: 'فو إست دي بيكراي', arabic: 'أين المخبز؟' },
  { id: 294, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Ich brauche eine Tüte', pronunciation: 'إش براوخه أينه تيوته', arabic: 'أحتاج كيساً (للتسوق)' },
  { id: 295, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Sind die Äpfel frisch?', pronunciation: 'زيند دي أبفل فريش', arabic: 'هل التفاح طازج؟' },
  { id: 296, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Gibt es Rabatt darauf?', pronunciation: 'غيبت إس راباط دراوف', arabic: 'هل يوجد خصم على هذا؟' },
  { id: 297, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Wo ist die Kasse?', pronunciation: 'فو إست دي كاسه', arabic: 'أين خينة الدفع (الكاشير)؟' },
  { id: 298, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Das ist im Angebot', pronunciation: 'داس إست إم أنغيبوت', arabic: 'هذا عليه عرض (تخفيض)' },
  { id: 299, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Ich suche Bio-Produkte', pronunciation: 'إش زوخه بيو برودوكتي', arabic: 'أبحث عن منتجات عضوية' },
  { id: 300, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Wie viel kostet das?', pronunciation: 'في فيل كوسته داس', arabic: 'كم يتكلف هذا؟' },
  { id: 301, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Ich möchte Fleisch kaufen', pronunciation: 'إش موشته فلايش كاوفن', arabic: 'أريد شراء لحم' },
  { id: 302, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Geflügel oder Rind?', pronunciation: 'غفلوغيل أودر ريند', arabic: 'دواجن أم لحم بقري؟' },
  { id: 303, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Haben Sie zuckerfreie Getränke?', pronunciation: 'هابن زي تسوكر فريئه غيترينكه', arabic: 'هل لديكم مشروبات خالية من السكر؟' },
  { id: 304, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Ich koche gerne zu Hause', pronunciation: 'إش كوشه غيرن تسو هاوزه', arabic: 'أحب الطبخ في المنزل' },
  { id: 305, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Das Wasser kocht', pronunciation: 'داس فاسر كوشت', arabic: 'الماء يغلي' },
  { id: 306, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Ich schneide das Gemüse', pronunciation: 'إش شنايده داس غميوزه', arabic: 'أنا أقطع الخضار' },
  { id: 307, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Den Ofen vorheizen', pronunciation: 'دين أوفن فور هايزن', arabic: 'تسخين الفرن مسبقاً' },
  { id: 308, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Das Fleisch anbraten', pronunciation: 'داس فلايش أنبراتن', arabic: 'تحمير اللحم' },
  { id: 309, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Die Suppe umrühren', pronunciation: 'دي زوبه أوم رورين', arabic: 'تقليب الشوربة' },
  { id: 310, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Mit Salz würzen', pronunciation: 'ميت زالتس وورتسين', arabic: 'التتبيل بالملح' },
  { id: 311, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Das Essen ist fertig', pronunciation: 'داس إسن إست فيرتيغ', arabic: 'الطعام جاهز' },
  { id: 312, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Den Tisch decken', pronunciation: 'دين تيش ديكن', arabic: 'إعداد وترتيب المائدة' },
  { id: 313, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Das Geschirr abwaschen', pronunciation: 'داس غشير أب واشن', arabic: 'غسل الأطباق' },
  { id: 314, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Guten Appetit beim Essen', pronunciation: 'غوتن أبيتيت بايم إسن', arabic: 'أتمنى لكم شهية طيبة أثناء تناول الطعام' },
  { id: 315, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Das schmeckt hervorragend', pronunciation: 'داس شميكت هيرفور راغند', arabic: 'طعمه ممتاز ورائع للغاية' },
  { id: 316, categoryId: 'cat-9', categoryNum: 9, categoryTitle: 'مصطلحات وجمل المطعم والطلب', german: 'Ich bin satt und zufrieden', pronunciation: 'إش بين زات أوند تسوفريدن', arabic: 'أنا شبعان ومسرور' }
];

export default function GermanFoodAndDrinksPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const speakGerman = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'de-DE';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const scrollToSection = (e, categoryId) => {
    e.preventDefault();
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

  const filteredData = foodAndDrinksData.filter(
    (item) =>
      item.german.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.arabic.includes(searchTerm) ||
      item.categoryTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  let lastCategoryNum = null;

  return (
    <div style={{ padding: '15px 15px 40px 15px', color: 'inherit', background: 'transparent' }}>
      <style>{`
        .page-title {
          text-align: center;
          font-size: 1.1rem;
          font-weight: 800;
          margin-bottom: 12px;
          color: inherit;
        }
        .jump-nav-instruction {
          text-align: center;
          font-size: 0.85rem;
          font-weight: bold;
          margin-bottom: 8px;
          color: #00bfff;
        }
        .jump-nav {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px;
          margin-bottom: 25px;
          padding: 0 10px;
        }
        .jump-btn {
          background: transparent;
          border: 1px solid #00bfff;
          color: inherit;
          padding: 6px 12px;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
        }
        .jump-btn:hover {
          background-color: #00bfff;
          color: #ffffff;
        }
        .search-container {
          display: flex;
          justify-content: center;
          margin-bottom: 30px;
        }
        .search-input {
          width: 100%;
          max-width: 400px;
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
          font-size: 1.1rem;
          font-weight: 900;
          margin: 35px 0 15px 0;
          color: #00bfff;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          scroll-margin-top: 20px;
          cursor: pointer;
          user-select: none;
          transition: opacity 0.2s ease;
        }
        .category-heading:hover {
          opacity: 0.8;
          text-decoration: underline;
        }
        .category-badge {
          background-color: #ff3333;
          color: #ffffff;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
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
          width: 100%;
          max-width: 400px;
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
          width: 20px;
          height: 20px;
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

      <h1 className="page-title">الطعام والشراب (Essen und Trinken)</h1>

      <div className="jump-nav-instruction">اضغط على القسم الذي تود الذهاب إليه</div>

      <div className="jump-nav">
        <button onClick={(e) => scrollToSection(e, 'cat-1')} className="jump-btn">1. أدوات المطبخ</button>
        <button onClick={(e) => scrollToSection(e, 'cat-2')} className="jump-btn">2. الفاكهة</button>
        <button onClick={(e) => scrollToSection(e, 'cat-3')} className="jump-btn">3. الخضراوات</button>
        <button onClick={(e) => scrollToSection(e, 'cat-4')} className="jump-btn">4. الوجبات واللحوم</button>
        <button onClick={(e) => scrollToSection(e, 'cat-5')} className="jump-btn">5. المشروبات</button>
        <button onClick={(e) => scrollToSection(e, 'cat-6')} className="jump-btn">6. المكونات والتوابل</button>
        <button onClick={(e) => scrollToSection(e, 'cat-7')} className="jump-btn">7. الحلويات</button>
        <button onClick={(e) => scrollToSection(e, 'cat-8')} className="jump-btn">8. الصفات والطعم</button>
        <button onClick={(e) => scrollToSection(e, 'cat-9')} className="jump-btn">9. جمل المطعم</button>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="ابحث عن كلمة ألمانية أو عربية..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="cards-container">
        {filteredData.map((item, index) => {
          const showHeading = item.categoryNum !== lastCategoryNum;
          lastCategoryNum = item.categoryNum;

          return (
            <React.Fragment key={item.id}>
              {showHeading && (
                <div
                  id={item.categoryId}
                  className="category-heading"
                  onClick={(e) => scrollToSection(e, item.categoryId)}
                >
                  <span className="category-badge">{item.categoryNum}</span>
                  <span>{item.categoryTitle}</span>
                </div>
              )}
              <div
                className="vocab-card"
                onClick={() => speakGerman(item.german)}
              >
                <div className="item-number">{index + 1}</div>

                <div className="pronunciation-wrapper">
                  <span className="speaker-left">🔊</span>
                  <span>{item.pronunciation}</span>
                  <span className="speaker-right">🔊</span>
                </div>

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
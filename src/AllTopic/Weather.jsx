import React, { useState } from 'react';

// بيانات الكلمات (قسم الطبيعة والطقس + قسم فصول السنة)
const natureAndWeatherDat = [
  // --- القسم الأول: الطبيعة والطقس ---
  { id: 1, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Natur', pronunciation: 'دي ناتور', arabic: 'الطبيعة' },
  { id: 2, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Sonne', pronunciation: 'دي زونه', arabic: 'الشمس' },
  { id: 3, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Mond', pronunciation: 'در مونت', arabic: 'القمر' },
  { id: 4, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Stern', pronunciation: 'در شتيرن', arabic: 'النجمة' },
  { id: 5, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Himmel', pronunciation: 'در هيمل', arabic: 'السماء' },
  { id: 6, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Wolke', pronunciation: 'دي فولكه', arabic: 'السحابة' },
  { id: 7, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Regen', pronunciation: 'در ريغن', arabic: 'المطر' },
  { id: 8, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Schnee', pronunciation: 'در شني', arabic: 'الثلج' },
  { id: 9, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Wind', pronunciation: 'در فينت', arabic: 'الريح' },
  { id: 10, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Sturm', pronunciation: 'در شتورم', arabic: 'العاصفة' },
  { id: 11, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'das Gewitter', pronunciation: 'داس غفيتير', arabic: 'العاصفة الرعدية' },
  { id: 12, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Blitz', pronunciation: 'در بليتس', arabic: 'البرق' },
  { id: 13, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Donner', pronunciation: 'در دونر', arabic: 'الرعد' },
  { id: 14, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Nebel', pronunciation: 'در نبيل', arabic: 'الضباب' },
  { id: 15, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Regenbogen', pronunciation: 'در ريغنبوغن', arabic: 'قوس قزح' },
  { id: 16, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'das Wetter', pronunciation: 'داس فيتر', arabic: 'الطقس' },
  { id: 17, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Temperatur', pronunciation: 'دي تيمبيراتور', arabic: 'درجة الحرارة' },
  { id: 18, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Grad', pronunciation: 'در غراد', arabic: 'الدرجة' },
  { id: 19, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'warm', pronunciation: 'فارم', arabic: 'دافئ' },
  { id: 20, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'kalt', pronunciation: 'كالت', arabic: 'بارد' },
  { id: 21, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'sonnig', pronunciation: 'زونيغ', arabic: 'مشمس' },
  { id: 22, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'wolkig', pronunciation: 'فولكيغ', arabic: 'غائم' },
  { id: 23, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'regnerisch', pronunciation: 'ريغنريش', arabic: 'ممطر' },
  { id: 24, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'schneit', pronunciation: 'شنايت', arabic: 'يثلج' },
  { id: 25, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Berg', pronunciation: 'در بيرغ', arabic: 'الجبل' },
  { id: 26, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'das Tal', pronunciation: 'داس تال', arabic: 'الوادي' },
  { id: 27, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Fluss', pronunciation: 'در فلوس', arabic: 'النهر' },
  { id: 28, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der See', pronunciation: 'در زيه', arabic: 'البحيرة' },
  { id: 29, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'das Meer', pronunciation: 'داس مير', arabic: 'البحر' },
  { id: 30, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Ozean', pronunciation: 'در أوتسبان', arabic: 'المحيط' },
  { id: 31, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Küste', pronunciation: 'دي كيويسته', arabic: 'الساحل' },
  { id: 32, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Strand', pronunciation: 'در شترانت', arabic: 'الشاطئ' },
  { id: 33, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Insel', pronunciation: 'دي إنزل', arabic: 'الجزيرة' },
  { id: 34, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Wüste', pronunciation: 'دي فيسته', arabic: 'الصحرآء' },
  { id: 35, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Wald', pronunciation: 'در فالت', arabic: 'الغابة' },
  { id: 36, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Baum', pronunciation: 'در باوم', arabic: 'الشجرة' },
  { id: 37, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Blume', pronunciation: 'دي بلومه', arabic: 'الزهرة' },
  { id: 38, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'das Gras', pronunciation: 'داس غراس', arabic: 'العشب' },
  { id: 39, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'das Blatt', pronunciation: 'داس بلات', arabic: 'الورقة' },
  { id: 40, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Wurzel', pronunciation: 'دي فورتسل', arabic: 'الجذر' },
  { id: 41, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Samen', pronunciation: 'در زامن', arabic: 'البذرة' },
  { id: 42, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Stein', pronunciation: 'در شتاين', arabic: 'الحجر' },
  { id: 43, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Sand', pronunciation: 'در زانت', arabic: 'الرمال' },
  { id: 44, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'das Holz', pronunciation: 'داس هولتس', arabic: 'الخشب' },
  { id: 45, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'das Feuer', pronunciation: 'داس فوير', arabic: 'النار' },
  { id: 46, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Erde', pronunciation: 'دي إرده', arabic: 'الأرض' },
  { id: 47, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Luft', pronunciation: 'دي لوفت', arabic: 'الهواء' },
  { id: 48, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'das Eis', pronunciation: 'داس آيس', arabic: 'الجليد' },
  { id: 49, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Landschaft', pronunciation: 'دي لاندشافت', arabic: 'المنظر الطبيعي' },
  { id: 50, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Umwelt', pronunciation: 'دي أومفيلت', arabic: 'البيئة' },
  { id: 51, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Vulkane', pronunciation: 'در فولكان', arabic: 'البركان' },
  { id: 52, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'das Erdbeben', pronunciation: 'داس إردبيبن', arabic: 'الزلزال' },
  { id: 53, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Dschungel', pronunciation: 'در جونغل', arabic: 'الأدغال' },
  { id: 54, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Höhle', pronunciation: 'دي هوله', arabic: 'الكهف' },
  { id: 55, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Wasserfall', pronunciation: 'در فاسرفال', arabic: 'الشلال' },
  { id: 56, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Wiese', pronunciation: 'دي فيزه', arabic: 'المَرْج / الحقل الأخضر' },
  { id: 57, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Planet', pronunciation: 'در بلانيت', arabic: 'الكوكب' },
  { id: 58, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Schlamm', pronunciation: 'در شلام', arabic: 'الطين / الوحل' },
  { id: 59, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Quelle', pronunciation: 'دي كفيله', arabic: 'الينبوع' },
  { id: 60, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Eiskristall', pronunciation: 'در آيسكريستال', arabic: 'بلورة الثلج' },
  { id: 61, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Ast', pronunciation: 'در أست', arabic: 'غصن الشجرة' },
  { id: 62, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Strauch', pronunciation: 'در شراوخ', arabic: 'الشجيرة / العوسج' },
  { id: 63, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Welle', pronunciation: 'دي فيله', arabic: 'الموجة' },
  { id: 64, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Horizont', pronunciation: 'در هوريزونت', arabic: 'الأفق' },
  { id: 65, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Hitze', pronunciation: 'دي هيتسه', arabic: 'الحر الشديد' },
  { id: 66, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Schatten', pronunciation: 'در شاتن', arabic: 'الظل' },
  { id: 67, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'das Licht', pronunciation: 'داس ليشت', arabic: 'الضوء' },
  { id: 68, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Schauer', pronunciation: 'در شاور', arabic: 'زخة مطر' },
  { id: 69, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Hagel', pronunciation: 'در هاغل', arabic: 'البرد (البَرَد)' },
  { id: 70, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Flocke', pronunciation: 'دي فلوكه', arabic: 'ندفة الثلج' },
  { id: 71, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Dämmerung', pronunciation: 'دي ديميرونغ', arabic: 'الغسق / الفجر' },
  { id: 72, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Felsen', pronunciation: 'در فيلسن', arabic: 'الصخرة الكبيرة' },
  { id: 73, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Bucht', pronunciation: 'دي بوخت', arabic: 'الخليج' },
  { id: 74, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Sumpf', pronunciation: 'در زومف', arabic: 'المستنقع' },
  { id: 75, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Brise', pronunciation: 'دي بريزه', arabic: 'نسيم عليل' },
  { id: 76, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Kosmos', pronunciation: 'در كوزموس', arabic: 'الكون' },
  { id: 77, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Klippe', pronunciation: 'دي كليبه', arabic: 'المنحدر الصخري' },
  { id: 78, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'das Riff', pronunciation: 'داس ريف', arabic: 'الشعاب المرجانية' },
  { id: 79, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Halbinsel', pronunciation: 'دي هالبإنزل', arabic: 'شبه الجزيرة' },
  { id: 80, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Oase', pronunciation: 'دي أوآزه', arabic: 'الواحة' },
  { id: 81, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Düne', pronunciation: 'دي دونه', arabic: 'الكثبان الرملية' },
  { id: 82, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Bach', pronunciation: 'در باخ', arabic: 'الجدول / الساقية' },
  { id: 83, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Abgrund', pronunciation: 'در أبغروند', arabic: 'الهاوية' },
  { id: 84, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'das Moos', pronunciation: 'داس موس', arabic: 'الطحالب' },
  { id: 85, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Knospe', pronunciation: 'دي كنوسبه', arabic: 'برعم الزهرة' },
  { id: 86, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Stamm', pronunciation: 'در شتام', arabic: 'جذع الشجرة' },
  { id: 87, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Rinde', pronunciation: 'دي رينده', arabic: 'لحاء الشجرة' },
  { id: 88, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Dürre', pronunciation: 'دي دوريه', arabic: 'الجفاف' },
  { id: 89, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Flut', pronunciation: 'دي فلوت', arabic: 'المد البحري' },
  { id: 90, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Ebbe', pronunciation: 'دي إبه', arabic: 'الجزر البحري' },
  { id: 91, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Sonnenschein', pronunciation: 'در زونينشاين', arabic: 'أشعة الشمس' },
  { id: 92, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Bewölkung', pronunciation: 'دي بفولكونغ', arabic: 'الغطاء السحابي' },
  { id: 93, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Dunst', pronunciation: 'در دونست', arabic: 'الشبورة / البخار الخفيف' },
  { id: 94, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'das Vakuum', pronunciation: 'داس فاكويوم', arabic: 'الفراغ / الخلاء' },
  { id: 95, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Schicht', pronunciation: 'دي شيشت', arabic: 'طبقة الأرض' },
  { id: 96, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Trockenheit', pronunciation: 'دي تروكنهايت', arabic: 'اليبوسة / الجفاف' },
  { id: 97, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Feuchtigkeit', pronunciation: 'دي فويشتيغكايت', arabic: 'الرطوبة' },
  { id: 98, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'das Biotop', pronunciation: 'داس بيوتوب', arabic: 'المحمية الطبيعية / البيئة الحيوية' },
  { id: 99, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'das Ökosystem', pronunciation: 'داس إيكوزيستيم', arabic: 'النظام البيئي' },
  { id: 100, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Komet', pronunciation: 'در كومت', arabic: 'المذنب' },
  { id: 101, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Meteorit', pronunciation: 'در ميتيوريت', arabic: 'النيازك' },
  { id: 102, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Galaxie', pronunciation: 'دي غالاكسي', arabic: 'المجرة' },
  { id: 103, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'das Universum', pronunciation: 'داس يونيفيرسوم', arabic: 'الكون الفسيح' },
  { id: 104, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Finsternis', pronunciation: 'دي فينستيرنيس', arabic: 'الكسوف / الخسوف / الظلمة' },
  { id: 105, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Äquator', pronunciation: 'دي إكفاتور', arabic: 'خط الاستواء' },
  { id: 106, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Pol', pronunciation: 'در بول', arabic: 'القطب (الشمالي أو الجنوبي)' },
  { id: 107, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Lawine', pronunciation: 'دي لافينه', arabic: 'انهيار جليدي' },
  { id: 108, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Wirbelsturm', pronunciation: 'در فيربيلشتورم', arabic: 'الإعصار القمعي' },
  { id: 109, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Monsun', pronunciation: 'در مونزون', arabic: 'الرياح الموسمية' },
  { id: 110, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Böe', pronunciation: 'دي بوه', arabic: 'هبة ريح شديدة مفاجئة' },
  { id: 111, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'das Unterholz', pronunciation: 'داس أونترهولتس', arabic: 'الشجيرات المنخفضة تحت الأشجار' },
  { id: 112, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Nadel', pronunciation: 'دي نادل', arabic: 'إبرة الصنوبر' },
  { id: 113, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Zapfen', pronunciation: 'در تسابفن', arabic: 'كوز الصنوبر' },
  { id: 114, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Bachlauf', pronunciation: 'در باخلاوف', arabic: 'مجرى الجدول' },
  { id: 115, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Mündung', pronunciation: 'دي ميندونغ', arabic: 'مصب النهر' },
  { id: 116, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Rinne', pronunciation: 'دي رينه', arabic: 'الساقية / الأخدود المائي' },
  { id: 117, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Erdboden', pronunciation: 'در إردبودن', arabic: 'تربة الأرض' },
  { id: 118, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'das Gestein', pronunciation: 'داس غيشتاين', arabic: 'الصخور المتنوعة' },
  { id: 119, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'das Mineral', pronunciation: 'داس مينيرال', arabic: 'المعدن الطبيعي' },
  { id: 120, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Biosphäre', pronunciation: 'در بيوسفير', arabic: 'الغلاف الحيوى' },
  { id: 121, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'das Gewässer', pronunciation: 'داس غفيسر', arabic: 'المسطح المائي' },
  { id: 122, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Tsunami', pronunciation: 'در تسونامي', arabic: 'تسونامي / موجة زلزالية' },
  { id: 123, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'das Polarlicht', pronunciation: 'داس بولارليخت', arabic: 'الشفق القطبى' },
  { id: 124, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Meteor', pronunciation: 'در ميتيور', arabic: 'الشهاب' },
  { id: 125, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Mondfinsternis', pronunciation: 'دي مونتفینستيرنيس', arabic: 'خسوف القمر' },
  { id: 126, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Sonnenfinsternis', pronunciation: 'دي زونينفينستيرنيس', arabic: 'كسوف الشمس' },
  { id: 127, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Meeresströmung', pronunciation: 'دي ميريشسترومونغ', arabic: 'التيار البحري' },
  { id: 128, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Korallenriff', pronunciation: 'در كورالينريف', arabic: 'الشعاب المرجانية الضخمة' },
  { id: 129, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Gezeiten', pronunciation: 'دي غايتسين', arabic: 'المد والجزر' },
  { id: 130, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'das Treibhausgas', pronunciation: 'داس تريبهاوسغاس', arabic: 'غاز الاحتباس الحراري' },
  { id: 131, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Erderwärmung', pronunciation: 'دي إرديرفارمونغ', arabic: 'الاحتباس الحراري / الاحترار العالمي' },
  { id: 132, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Niederschlag', pronunciation: 'در نيدرشلاغ', arabic: 'هطول الأمطار والثلوج' },
  { id: 133, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Bewässerung', pronunciation: 'دي بفاسيرونغ', arabic: 'الري الزراعي الطبيعي' },
  { id: 134, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Dunstkreis', pronunciation: 'در دونستكرايس', arabic: 'الغلاف الجوي المحيط' },
  { id: 135, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'das Ökosystem', pronunciation: 'داس إيكوزيستيم', arabic: 'البيئة الطبيعية المتكاملة' },
  { id: 136, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Windstärke', pronunciation: 'دي فينتشتاركه', arabic: 'سرعة أو قوة الرياح' },
  { id: 137, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Luftfeuchtigkeit', pronunciation: 'دي لوفتفويشتيغكايت', arabic: 'رطوبة الهواء' },
  { id: 138, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Wetterbericht', pronunciation: 'در فيتربيريشت', arabic: 'النشرة الجوية' },
  { id: 139, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Klimazone', pronunciation: 'دي كليمازونه', arabic: 'المنطقة المناخية' },
  { id: 140, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Naturkatastrophe', pronunciation: 'دي ناتوركاتاستروفه', arabic: 'كارثة طبيعية' },
  { id: 141, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Regenschauer', pronunciation: 'در ريغنشارك', arabic: 'زخة مطر مفاجئة' },
  { id: 142, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Trockenperiode', pronunciation: 'دي تروكنبيريوده', arabic: 'فترة الجفاف' },
  { id: 143, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Sturmböe', pronunciation: 'دي شتورمبوه', arabic: 'عاصفة ريح قوية مفاجئة' },
  { id: 144, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Sternenhimmel', pronunciation: 'در شتيرنهيمل', arabic: 'السماء المرصعة بالنجوم' },
  { id: 145, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Vollmond', pronunciation: 'در فولمونت', arabic: 'القمر البدر' },
  { id: 146, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Neumond', pronunciation: 'در نيومونت', arabic: 'القمر المحاق' },
  { id: 147, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Himmelsrichtung', pronunciation: 'دي هيملسريشتونغ', arabic: 'الاتجاه الجغرافي' },
  { id: 148, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Erdkruste', pronunciation: 'دي إردكروسته', arabic: 'قشرة الأرض' },
  { id: 149, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Erdkern', pronunciation: 'در إردكيرن', arabic: 'لب الأرض / المركز' },
  { id: 150, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'das Magma', pronunciation: 'داس ماغما', arabic: 'الصهارة البركانية' },
  { id: 151, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Lava', pronunciation: 'دي لافا', arabic: 'الحمم البركانية' },
  { id: 152, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Urwald', pronunciation: 'در أورفالت', arabic: 'الغابة العذراء / الاستوائية البكر' },
  { id: 153, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'das Baumblatt', pronunciation: 'داس باومبلات', arabic: 'ورقة الشجرة' },
  { id: 154, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Waldbrand', pronunciation: 'دي فالدبراند', arabic: 'حريق الغابات' },
  { id: 155, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Wüstenei', pronunciation: 'دي فيستيناي', arabic: 'الصحراء القاحلة الواسعة' },
  { id: 156, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Sandsturm', pronunciation: 'در زاندشتورم', arabic: 'عاصفة رملية' },
  { id: 157, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Frost', pronunciation: 'دي فروست', arabic: 'الصقيع' },
  { id: 158, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Glatteis', pronunciation: 'دي غلاتآيس', arabic: 'الجليد الأسود / الانزلاق الجليدي' },
  { id: 159, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Bewölkungsgrad', pronunciation: 'دي بفولكونغسغراد', arabic: 'درجة التغطية السحابية' },
  { id: 160, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'das Sommergewitter', pronunciation: 'داس زوميرغفيتير', arabic: 'عاصفة رعدية صيفية' },
  { id: 161, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Urknall', pronunciation: 'در أوركنال', arabic: 'الانفجار العظيم' },
  { id: 162, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Astrologie', pronunciation: 'دي استرولوجي', arabic: 'علم الفلك الطبيعي' },
  { id: 163, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Wettersatellit', pronunciation: 'در فيترزاتيليت', arabic: 'قمر صناعي للطقس' },
  { id: 164, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Luftströmung', pronunciation: 'دي لوفتسترومونغ', arabic: 'تيار هوائي' },
  { id: 165, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Meereswelle', pronunciation: 'دي ميريشفيلي', arabic: 'موجة بحرية عالية' },
  { id: 166, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Sandstrand', pronunciation: 'در زاندشترانت', arabic: 'شاطئ رملي' },
  { id: 167, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Felsenstrand', pronunciation: 'در فيلسنشترانت', arabic: 'شاطئ صخري' },
  { id: 168, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Bergspitze', pronunciation: 'دي بيرغشبيتسه', arabic: 'قمة الجبل' },
  { id: 169, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'das Bergmassiv', pronunciation: 'داس بيرغماكيف', arabic: 'الكتلة الجبلية' },
  { id: 170, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Steppe', pronunciation: 'دي شتيبي', arabic: 'سهل السهوب / العشب الجاف' },
  { id: 171, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Savanne', pronunciation: 'دي سافانه', arabic: 'غابات السافانا العشبية' },
  { id: 172, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Tundra', pronunciation: 'دي توندرا', arabic: 'إقليم التندرا البارد' },
  { id: 173, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Taiga', pronunciation: 'دي تايغا', arabic: 'غابات التايغا الشمالية' },
  { id: 174, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Gletscherschmelze', pronunciation: 'دي غليتشيرشملتسيه', arabic: 'ذوبان الأنهار الجليدية' },
  { id: 175, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Ozonschicht', pronunciation: 'دي أوزونشيشت', arabic: 'طبقة الأوزون' },
  { id: 176, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'das Treibeneis', pronunciation: 'داس تريبينآيس', arabic: 'الجليد الطافي' },
  { id: 177, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Wettervorhersage', pronunciation: 'دي فيترفورهرساغه', arabic: 'توقعات الطقس' },
  { id: 178, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'das Hochdruckgebiet', pronunciation: 'داس هوخدروكغيبيه', arabic: 'منطقة ضغط جوي مرتفع' },
  { id: 179, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'das Tiefdruckgebiet', pronunciation: 'داس تيفدروكغيبيه', arabic: 'منطقة ضغط جوي منخفض' },
  { id: 180, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Sonnenstrahlung', pronunciation: 'دي زونينشترالونغ', arabic: 'الإشعاع الشمسي' },
  { id: 181, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Erdatmosphäre', pronunciation: 'دي إرداتموسفير', arabic: 'الغلاف الجوي للأرض' },
  { id: 182, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Tidenhub', pronunciation: 'در تيدينهوب', arabic: 'مدى المد والجزر' },
  { id: 183, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Windböe', pronunciation: 'دي فينتبوه', arabic: 'هبة ريح عاتية' },
  { id: 184, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Nebelschletz', pronunciation: 'دي نبيلشليتس', arabic: 'كتيبة ضباب كثيفة' },
  { id: 185, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Sommerhitze', pronunciation: 'دي زوميرهيتسه', arabic: 'حر الصيف الشديد' },
  { id: 186, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Wintersturm', pronunciation: 'در فينتيرشتورم', arabic: 'عاصفة شتوية' },
  { id: 187, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Frühlingsblume', pronunciation: 'دي فريلينغسبلومه', arabic: 'زهرة الربيع' },
  { id: 188, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'das Herbstblatt', pronunciation: 'داس هيربستبلات', arabic: 'ورقة الخريف' },
  { id: 189, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Regenfütters', pronunciation: 'دي ريغنفوتيرس', arabic: 'موسم الأمطار' },
  { id: 190, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Sonnenuntergang', pronunciation: 'در زونيناونترغانغ', arabic: 'غروب الشمس' },
  { id: 191, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Sonnenaufgang', pronunciation: 'در زونينأوفغانغ', arabic: 'شروق الشمس' },
  { id: 192, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Sternschnuppe', pronunciation: 'دي شتيرنشنوبه', arabic: 'الشهاب الثاقب' },
  { id: 193, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'das Himmelszelt', pronunciation: 'داس هيملسزيلت', arabic: 'قبة السماء' },
  { id: 194, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Erdball', pronunciation: 'در إردبال', arabic: 'كرة الأرض' },
  { id: 195, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Wüsteneis', pronunciation: 'دي فيستينآيس', arabic: 'الصقيع الصحراوي' },
  { id: 196, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Felsenbach', pronunciation: 'در فيلسنباخ', arabic: 'جدول جبلي صخري' },
  { id: 197, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Meeresbucht', pronunciation: 'دي ميريشبوخت', arabic: 'خليج بحري' },
  { id: 198, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Berggipfel', pronunciation: 'در بيرغغيوبفل', arabic: 'قمة الجبل الشاهقة' },
  { id: 199, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Talsohle', pronunciation: 'دي تالسوله', arabic: 'قاع الوادي' },
  { id: 200, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'das Naturwunder', pronunciation: 'داس ناتورڤوندر', arabic: 'أعجوبة طبيعية' },
  { id: 201, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Nebelschleier', pronunciation: 'در نبيلشلاير', arabic: 'سجاف الضباب / وشاح الضباب' },
  { id: 202, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Schneedecke', pronunciation: 'دي شنيه ديكي', arabic: 'غطاء الثلج' },
  { id: 203, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Wolkenbruch', pronunciation: 'در فولكنبروخ', arabic: 'سحابة مطر غزيرة مفاجئة / طوفان مطري' },
  { id: 204, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Dschungelnacht', pronunciation: 'دي جونغلناخت', arabic: 'ليل الأدغال' },
  { id: 205, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'das Buschland', pronunciation: 'داس بوشلاند', arabic: 'أراضي الشجيرات والأعشاب البرية' },
  { id: 206, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Steilküste', pronunciation: 'دي شتايلكويسته', arabic: 'ساحل منحدر صخري حاد' },
  { id: 207, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Meeresgrund', pronunciation: 'در ميريشغروند', arabic: 'قاع البحر' },
  { id: 208, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Flussmündung', pronunciation: 'دي فلوسميندونغ', arabic: 'مصب النهر في البحر' },
  { id: 209, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Bergbach', pronunciation: 'در بيرغباخ', arabic: 'ساقية جبلية' },
  { id: 210, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Felswand', pronunciation: 'دي فيلسفاند', arabic: 'جدار صخري / جرف' },
  { id: 211, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'das Tunneltal', pronunciation: 'داس تونلتال', arabic: 'الوادي الضيق' },
  { id: 212, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Sonnenscheibe', pronunciation: 'دي زونينشايبي', arabic: 'قرص الشمس' },
  { id: 213, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Mondschein', pronunciation: 'در مونتشاين', arabic: 'ضوء القمر' },
  { id: 214, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'das Himmelslicht', pronunciation: 'داس هيملسليخت', arabic: 'نور السماء' },
  { id: 215, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Wetterleuchten', pronunciation: 'دي فيترلوشتين', arabic: 'البرق الصامت / البرق البعيد' },
  { id: 216, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Frostschaden', pronunciation: 'در فروستشادن', arabic: 'ضرر الصقيع' },
  { id: 217, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Frühlingsluft', pronunciation: 'دي فريلينغسلوفت', arabic: 'هواء الربيع العليل' },
  { id: 218, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Herbststurm', pronunciation: 'در هيربستشتورم', arabic: 'عاصفة الخريف' },
  { id: 219, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Sommernacht', pronunciation: 'دي زوميرناخت', arabic: 'ليلة صيفية' },
  { id: 220, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'das Erbe', pronunciation: 'داس إيربي', arabic: 'إرث الطبيعة' },
  { id: 221, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Himmelsbläue', pronunciation: 'دي هيملسبلوي', arabic: 'زرقة السماء' },
  { id: 222, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Sonnenschein', pronunciation: 'در زونينشاين', arabic: 'سناء الشمس' },
  { id: 223, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'das Baumgeäst', pronunciation: 'داس باومغيست', arabic: 'فروع الأشجار التشابكية' },
  { id: 224, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Waldlichtung', pronunciation: 'دي فالدليختونغ', arabic: 'فسحة أو خلوء في الغابة' },
  { id: 225, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Flusslauf', pronunciation: 'در فلوسلاوف', arabic: 'مجرى النهر' },
  { id: 226, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Seeoberfläche', pronunciation: 'دي زيهأوبرفلاشي', arabic: 'سطح البحيرة' },
  { id: 227, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Meerespiegel', pronunciation: 'در ميريشبيغل', arabic: 'مستوى سطح البحر' },
  { id: 228, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Wüstensand', pronunciation: 'دي فيستينزاند', arabic: 'رمال الصحراء' },
  { id: 229, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Steingarten', pronunciation: 'در شتاينغارتن', arabic: 'الحديقة الصخرية الطبيعية' },
  { id: 230, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Grasfläche', pronunciation: 'دي غراسفلاشي', arabic: 'المساحة العشبية' },
  { id: 231, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Frühlingsregen', pronunciation: 'در فريلينغسريغن', arabic: 'مطر الربيع' },
  { id: 232, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Herbstsonne', pronunciation: 'دي هيربستزونه', arabic: 'شمس الخريف' },
  { id: 233, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Wintertag', pronunciation: 'در فينتيرتاغ', arabic: 'يوم شتوي' },
  { id: 234, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Sommerluft', pronunciation: 'دي زوميرلوفت', arabic: 'هواء الصيف' },
  { id: 235, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'das Wolkenband', pronunciation: 'داس فولكنباند', arabic: 'حزام السحاب' },
  { id: 236, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Regendistanz', pronunciation: 'دي ريغندستانتس', arabic: 'مدى هطول المطر' },
  { id: 237, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Sturmwolke', pronunciation: 'در شتورمولكه', arabic: 'سحابة عاصفة' },
  { id: 238, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Blitzschlag', pronunciation: 'دي بليتسشلاغ', arabic: 'صاعقة البرق' },
  { id: 239, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Donnergrollen', pronunciation: 'در دونرغرولين', arabic: 'دوي الرعد المتواصل' },
  { id: 240, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Naturschönheit', pronunciation: 'دي ناتورشونهايت', arabic: 'جمال الطبيعة الخلاب' },
  { id: 241, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Urwaldpfad', pronunciation: 'در أورفالدپفاد', arabic: 'مسار الغابة البكر' },
  { id: 242, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Bergquelle', pronunciation: 'دي بيرغكفيله', arabic: 'الينبوع الجبلي' },
  { id: 243, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'das Talbecken', pronunciation: 'داس تالبكين', arabic: 'حوض الوادي' },
  { id: 244, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Sonnenfinsternisphase', pronunciation: 'دي زونينفينستيرنيسفازه', arabic: 'مرحلة كسوف الشمس' },
  { id: 245, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Himmelskörper', pronunciation: 'در هيملسكوربر', arabic: 'الجرم السماوي' },
  { id: 246, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Wolkenschicht', pronunciation: 'دي فولكنشيشت', arabic: 'طبقة السحب' },
  { id: 247, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Regensturm', pronunciation: 'در ريغنشتورم', arabic: 'عاصفة مطرية ممطرة' },
  { id: 248, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Schneewehe', pronunciation: 'دي شنيفيِه', arabic: 'جرف الثلج / ركام الثلج الريحي' },
  { id: 249, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Eiszapfen', pronunciation: 'در آيستسابفن', arabic: 'عمود ثلجي متدلي / صنوبرة جليدية' },
  { id: 250, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Waldwiese', pronunciation: 'دي فالدفيزه', arabic: 'مرج الغابة' },
  { id: 251, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Wüstenwind', pronunciation: 'در فيستينفينت', arabic: 'رياح الصحراء' },
  { id: 252, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Meeresküste', pronunciation: 'دي ميريشكويسته', arabic: 'الساحل البحري' },
  { id: 253, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'das Felsgestein', pronunciation: 'داس فيلسغيشتاين', arabic: 'الصخر الصلب' },
  { id: 254, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Erdachse', pronunciation: 'دي إرداكسه', arabic: 'محور الأرض' },
  { id: 255, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Kosmosraum', pronunciation: 'در كوزموسراوم', arabic: 'الفضاء الكوني' },
  { id: 256, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Sternenbahn', pronunciation: 'دي شتيرنينبان', arabic: 'مدار النجوم' },
  { id: 257, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'das Sturmtief', pronunciation: 'داس شتورمتيف', arabic: 'منخفض جوي عاصف' },
  { id: 258, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Wetterfront', pronunciation: 'دي فيترفرونت', arabic: 'الجبهة الجوية' },
  { id: 259, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Frühlingsmorgen', pronunciation: 'در فريلينغسمورغن', arabic: 'صباح الربيع' },
  { id: 260, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Herbstnacht', pronunciation: 'دي هيربستناخت', arabic: 'ليلة خريفية' },
  { id: 261, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Felsspalte', pronunciation: 'دي فيلسسبالته', arabic: 'الصدع الصخري / الشق الصخري' },
  { id: 262, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Wüstengürtel', pronunciation: 'در فيستينگورتيل', arabic: 'الحزام الصحراوي' },
  { id: 263, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'das Wolkenmeer', pronunciation: 'داس فولكنمير', arabic: 'بحر السحاب' },
  { id: 264, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Sturmbahn', pronunciation: 'دي شتورمنبان', arabic: 'مسار العاصفة' },
  { id: 265, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Regenguss', pronunciation: 'در ريغنغوس', arabic: 'الهطول المطرى الغزير' },
  { id: 266, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Frostnacht', pronunciation: 'دي فروستناخت', arabic: 'ليلة صقيعية' },
  { id: 267, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Sonnenspitz', pronunciation: 'در زونينشبيتس', arabic: 'وميض الشمس' },
  { id: 268, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Mondphase', pronunciation: 'دي مونتفازه', arabic: 'طور القمر' },
  { id: 269, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'das Baumkronendach', pronunciation: 'داس باومكرونينداخ', arabic: 'مظلة قمم الأشجار' },
  { id: 270, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Flussbiegung', pronunciation: 'دي فلوسبيغونغ', arabic: 'منحنى النهر / التواء النهري' },
  { id: 271, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Bergabhang', pronunciation: 'در بيرغأبهاڭ', arabic: 'منحدر الجبل / سفح الجبل' },
  { id: 272, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Küstenlinie', pronunciation: 'دي كويستينيليه', arabic: 'خط الساحل' },
  { id: 273, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'das Himmelsblau', pronunciation: 'داس هيملسبلاو', arabic: 'صفاء السماء الأزرق' },
  { id: 274, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Erdoberfläche', pronunciation: 'دي إردأوبرفلاشي', arabic: 'سطح الأرض' },
  { id: 275, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Kosmosstern', pronunciation: 'در كوزموسشتيرن', arabic: 'نجم كوني' },
  { id: 276, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Naturlandschaft', pronunciation: 'دي ناتورلاندشافت', arabic: 'طبيعة عذراء / مشهد طبيعي أصلي' },
  { id: 277, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Frühlingsanfang', pronunciation: 'در فريلينغسأنفانغ', arabic: 'بداية فصل الربيع' },
  { id: 278, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Sommerfrische', pronunciation: 'دي زوميرفريشه', arabic: 'مصيف / هواء الصيف المنعش' },
  { id: 279, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'der Herbstwind', pronunciation: 'در هيربستفينت', arabic: 'رياح الخريف' },
  { id: 280, categoryNum: 1, categoryTitle: 'الطبيعة والطقس', german: 'die Winterkälte', pronunciation: 'دي فينتيركيلته', arabic: 'برودة الشتاء القارسة' },

  // --- القسم الثاني: فصول السنة (Jahreszeiten) ---
  { id: 281, categoryNum: 2, categoryTitle: 'فصول السنة', german: 'die Jahreszeit', pronunciation: 'دي ياريس‌زايت', arabic: 'فصل السنة' },
  { id: 282, categoryNum: 2, categoryTitle: 'فصول السنة', german: 'der Frühling', pronunciation: 'در فريلينغ', arabic: 'الربيع' },
  { id: 283, categoryNum: 2, categoryTitle: 'فصول السنة', german: 'der Sommer', pronunciation: 'در زومر', arabic: 'الصيف' },
  { id: 284, categoryNum: 2, categoryTitle: 'فصول السنة', german: 'der Herbst', pronunciation: 'در هيربست', arabic: 'الخريف' },
  { id: 285, categoryNum: 2, categoryTitle: 'فصول السنة', german: 'der Winter', pronunciation: 'در فينتير', arabic: 'الشتاء' },
  { id: 286, categoryNum: 2, categoryTitle: 'فصول السنة', german: 'die Jahreszeiten', pronunciation: 'دي ياريس‌زايتن', arabic: 'فصول السنة (جمع)' },
  { id: 287, categoryNum: 2, categoryTitle: 'فصول السنة', german: 'das Frühlingswetter', pronunciation: 'داس فريلينغسفيتر', arabic: 'طقس الربيع' },
  { id: 288, categoryNum: 2, categoryTitle: 'فصول السنة', german: 'die Sommerhitze', pronunciation: 'دي زوميرهيتسه', arabic: 'حر الصيف' },
  { id: 289, categoryNum: 2, categoryTitle: 'فصول السنة', german: 'die Herbsttage', pronunciation: 'دي هيربستتاغه', arabic: 'أيام الخريف' },
  { id: 290, categoryNum: 2, categoryTitle: 'فصول السنة', german: 'der Winterabend', pronunciation: 'در فينتيرابند', arabic: 'أمسية شتوية' }
];

export default function NatureAndWeatherPage() {
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

  // دالة التعامل مع الضغط على روابط التنقل السريع للانتقال بسلاسة داخل نفس الصفحة
  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredData = natureAndWeatherDat.filter(
    (item) =>
      item.german.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.arabic.includes(searchTerm)
  );

  // تجميع الكلمات المفلترة حسب القسم لتنظيم عرضها تحت كل عنوان فرعي مرقم
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
        /* تفعيل التمرير السلس للصفحة بالكامل */
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
        /* شريط روابط التنقل السريع بين الأقسام */
        .quick-nav {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-bottom: 25px;
          flex-wrap: wrap;
        }
        .quick-nav-link {
          padding: 6px 14px;
          border: 1px solid currentColor;
          border-radius: 15px;
          text-decoration: none;
          font-size: 0.82rem;
          font-weight: bold;
          color: inherit;
          transition: all 0.2s ease;
          background: transparent;
          cursor: pointer;
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
        /* توسيط العنوان في منتصف الصفحة مع رقم قبله */
        .section-header {
          width: 90%;
          max-width: 90%;
          font-size: 1.25rem;
          font-weight: 900;
          margin-bottom: 20px;
          padding-bottom: 8px;
          border-bottom: 2px dashed currentColor;
          text-align: center;
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

      {/* عنوان الصفحة الرئيسي (متوسط في نص الصفحة) */}
      <h1 className="page-title">الطبيعة والطقس (Natur und Wetter)</h1>

      {/* روابط الانتقال السريع للأقسام تحت العنوان الرئيسي (داخل نفس الصفحة بسلاسة) */}
      <div className="quick-nav">
        <a href="#section-1" onClick={(e) => handleScrollToSection(e, 'section-1')} className="quick-nav-link">
          1. الطبيعة والطقس
        </a>
        <a href="#section-2" onClick={(e) => handleScrollToSection(e, 'section-2')} className="quick-nav-link">
          2. فصول السنة
        </a>
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

      {/* الأقسام المرقمة والمتوسطة في نص الصفحة */}
      {Object.keys(groupedData).map((categoryTitle) => {
        const group = groupedData[categoryTitle];
        return (
          <div key={categoryTitle} id={`section-${group.categoryNum}`} className="category-section">
            <h2 className="section-header">
              {group.categoryNum}. {categoryTitle}
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
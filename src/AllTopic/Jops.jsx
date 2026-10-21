import React, { useState } from 'react';


const jobsData = [
  // 1. مفردات عامة عن العمل
  { id: 1, categoryNum: "1", categoryTitle: "مفردات عامة عن العمل", german: "der Beruf", arabic: "المهنة", pronunciation: "دِر بروف" },
  { id: 2, categoryNum: "1", categoryTitle: "مفردات عامة عن العمل", german: "die Berufe", arabic: "المهن (جمع)", pronunciation: "دي بروفه" },
  { id: 3, categoryNum: "1", categoryTitle: "مفردات عامة عن العمل", german: "die Arbeit", arabic: "العمل", pronunciation: "دي أربايت" },
  { id: 4, categoryNum: "1", categoryTitle: "مفردات عامة عن العمل", german: "die Arbeiten", arabic: "الأعمال (جمع)", pronunciation: "دي أربايتن" },
  { id: 5, categoryNum: "1", categoryTitle: "مفردات عامة عن العمل", german: "der Arbeitsplatz", arabic: "مكان العمل", pronunciation: "دِر أربايتس بلاتس" },
  { id: 6, categoryNum: "1", categoryTitle: "مفردات عامة عن العمل", german: "das Büro", arabic: "المكتب", pronunciation: "داس بيورو" },
  { id: 7, categoryNum: "1", categoryTitle: "مفردات عامة عن العمل", german: "die Büros", arabic: "المكاتب (جمع)", pronunciation: "دي بيوروس" },
  { id: 8, categoryNum: "1", categoryTitle: "مفردات عامة عن العمل", german: "die Firma", arabic: "الشركة", pronunciation: "دي فيرما" },
  { id: 9, categoryNum: "1", categoryTitle: "مفردات عامة عن العمل", german: "die Firmen", arabic: "الشركات (جمع)", pronunciation: "دي فيرمن" },
  { id: 10, categoryNum: "1", categoryTitle: "مفردات عامة عن العمل", german: "der Job", arabic: "الوظيفة", pronunciation: "دِر جوب" },
  { id: 11, categoryNum: "1", categoryTitle: "مفردات عامة عن العمل", german: "die Jobs", arabic: "الوظائف (جمع)", pronunciation: "دي جوبس" },
  { id: 12, categoryNum: "1", categoryTitle: "مفردات عامة عن العمل", german: "das Gehalt", arabic: "الراتب", pronunciation: "داس غهالت" },
  { id: 13, categoryNum: "1", categoryTitle: "مفردات عامة عن العمل", german: "die Gehälter", arabic: "الرواتب (جمع)", pronunciation: "دي غهيلتر" },
  { id: 14, categoryNum: "1", categoryTitle: "مفردات عامة عن العمل", german: "der Lohn", arabic: "الأجر", pronunciation: "دِر لون" },
  { id: 15, categoryNum: "1", categoryTitle: "مفردات عامة عن العمل", german: "die Löhne", arabic: "الأجور (جمع)", pronunciation: "دي أليونه" },
  { id: 16, categoryNum: "1", categoryTitle: "مفردات عامة عن العمل", german: "der Vertrag", arabic: "العقد", pronunciation: "دِر فرتراغ" },
  { id: 17, categoryNum: "1", categoryTitle: "مفردات عامة عن العمل", german: "die Verträge", arabic: "العقود (جمع)", pronunciation: "دي فرتريغه" },
  { id: 18, categoryNum: "1", categoryTitle: "مفردات عامة عن العمل", german: "die Bewerbung", arabic: "طلب التوظيف", pronunciation: "دي بڤيربونغ" },
  { id: 19, categoryNum: "1", categoryTitle: "مفردات عامة عن العمل", german: "die Bewerbungen", arabic: "طلبات التوظيف (جمع)", pronunciation: "دي بڤيربونغن" },
  { id: 20, categoryNum: "1", categoryTitle: "مفردات عامة عن العمل", german: "das Vorstellungsgespräch", arabic: "مقابلة العمل", pronunciation: "داس فورشتيلونغسغشبريش" },
  { id: 21, categoryNum: "1", categoryTitle: "مفردات عامة عن العمل", german: "der Lebenslauf", arabic: "السيرة الذاتية", pronunciation: "دِر ليبنسلاوف" },
  { id: 22, categoryNum: "1", categoryTitle: "مفردات عامة عن العمل", german: "die Erfahrung", arabic: "الخبرة", pronunciation: "دي إرفارونغ" },
  { id: 23, categoryNum: "1", categoryTitle: "مفردات عامة عن العمل", german: "die Ausbildung", arabic: "التدريب المهني", pronunciation: "دي أوسبيلدونغ" },
  { id: 24, categoryNum: "1", categoryTitle: "مفردات عامة عن العمل", german: "das Studium", arabic: "الدراسة الجامعية", pronunciation: "داس شتوديوم" },
  { id: 25, categoryNum: "1", categoryTitle: "مفردات عامة عن العمل", german: "die Karriere", arabic: "المسيرة المهنية", pronunciation: "دي كارييره" },

  // 2. الرئيس / المدير
  { id: 26, categoryNum: "2", categoryTitle: "الرئيس / المدير", german: "der Chef", arabic: "الرئيس / المدير", pronunciation: "دِر شيف" },
  { id: 27, categoryNum: "2", categoryTitle: "الرئيس / المدير", german: "die Chefin", arabic: "الرئيسة / المديرة", pronunciation: "دي شيفين" },
  { id: 28, categoryNum: "2", categoryTitle: "الرئيس / المدير", german: "die Chefs", arabic: "الرؤساء / المدراء", pronunciation: "دي شيفس" },
  { id: 29, categoryNum: "2", categoryTitle: "الرئيس / المدير", german: "die Chefinnen", arabic: "الرئيسات / المديرات", pronunciation: "دي شيفينن" },

  // 3. الموظف
  { id: 30, categoryNum: "3", categoryTitle: "الموظف", german: "der Mitarbeiter", arabic: "الموظف", pronunciation: "دِر ميتاربيتر" },
  { id: 31, categoryNum: "3", categoryTitle: "الموظف", german: "die Mitarbeiterin", arabic: "الموظفة", pronunciation: "دي ميتاربيتيرين" },
  { id: 32, categoryNum: "3", categoryTitle: "الموظف", german: "die Mitarbeiter", arabic: "الموظفون", pronunciation: "دي ميتاربيتر" },
  { id: 33, categoryNum: "3", categoryTitle: "الموظف", german: "die Mitarbeiterinnen", arabic: "الموظفات", pronunciation: "دي ميتاربيتيرينن" },

  // 4. الزميل
  { id: 34, categoryNum: "4", categoryTitle: "الزميل", german: "der Kollege", arabic: "الزميل", pronunciation: "دِر كوليغه" },
  { id: 35, categoryNum: "4", categoryTitle: "الزميل", german: "die Kollegin", arabic: "الزميلة", pronunciation: "دي كوليغين" },
  { id: 36, categoryNum: "4", categoryTitle: "الزميل", german: "die Kollegen", arabic: "الزملاء", pronunciation: "دي كوليغن" },
  { id: 37, categoryNum: "4", categoryTitle: "الزميل", german: "die Kolleginnen", arabic: "الزميلات", pronunciation: "دي كوليغينن" },

  // 5. المساعد
  { id: 38, categoryNum: "5", categoryTitle: "المساعد", german: "der Assistent", arabic: "المساعد", pronunciation: "دِر أسيستنت" },
  { id: 39, categoryNum: "5", categoryTitle: "المساعد", german: "die Assistentin", arabic: "المساعدة", pronunciation: "دي أسيستنتين" },
  { id: 40, categoryNum: "5", categoryTitle: "المساعد", german: "die Assistenten", arabic: "المساعدون", pronunciation: "دي أسيستنتن" },
  { id: 41, categoryNum: "5", categoryTitle: "المساعد", german: "die Assistentinnen", arabic: "المساعدات", pronunciation: "دي أسيستنتينن" },

  // 6. السكرتير
  { id: 42, categoryNum: "6", categoryTitle: "السكرتير", german: "der Sekretär", arabic: "السكرتير", pronunciation: "دِر زكريتير" },
  { id: 43, categoryNum: "6", categoryTitle: "السكرتير", german: "die Sekretärin", arabic: "السكرتيرة", pronunciation: "دي زكريتيرين" },
  { id: 44, categoryNum: "6", categoryTitle: "السكرتير", german: "die Sekretäre", arabic: "السكرتاريون", pronunciation: "دي زكريتيره" },
  { id: 45, categoryNum: "6", categoryTitle: "السكرتير", german: "die Sekretärinnen", arabic: "السكرتيرات", pronunciation: "دي زكريتيرينن" },

  // 7. المهندس
  { id: 46, categoryNum: "7", categoryTitle: "المهندس", german: "der Ingenieur", arabic: "المهندس", pronunciation: "دِر إنجينيور" },
  { id: 47, categoryNum: "7", categoryTitle: "المهندس", german: "die Ingenieurin", arabic: "المهندسة", pronunciation: "دي إنجينيورين" },
  { id: 48, categoryNum: "7", categoryTitle: "المهندس", german: "die Ingenieure", arabic: "المهندسون", pronunciation: "دي إنجينيوره" },
  { id: 49, categoryNum: "7", categoryTitle: "المهندس", german: "die Ingenieurinnen", arabic: "المهندسات", pronunciation: "دي إنجينيورينن" },
  { id: 50, categoryNum: "7", categoryTitle: "المهندس", german: "die Baustelle", arabic: "موقع البناء (مكان عمل المهندس)", pronunciation: "دي باوشتيله" },

  // 8. الطبيب
  { id: 51, categoryNum: "8", categoryTitle: "الطبيب", german: "der Arzt", arabic: "الطبيب", pronunciation: "دِر أرست" },
  { id: 52, categoryNum: "8", categoryTitle: "الطبيب", german: "die Ärztin", arabic: "الطبيبة", pronunciation: "دي أرتسين" },
  { id: 53, categoryNum: "8", categoryTitle: "الطبيب", german: "die Ärzte", arabic: "الأطباء", pronunciation: "دي أيرتسته" },
  { id: 54, categoryNum: "8", categoryTitle: "الطبيب", german: "die Ärztinnen", arabic: "الطبيبات", pronunciation: "دي أرتسينن" },
  { id: 55, categoryNum: "8", categoryTitle: "الطبيب", german: "das Krankenhaus", arabic: "المستشفى (مكان عمل الطبيب)", pronunciation: "داس كرانكنهاوس" },
  { id: 56, categoryNum: "8", categoryTitle: "الطبيب", german: "die Praxis", arabic: "العيادة الطبية (مكان عمل الطبيب)", pronunciation: "دي براكسيس" },

  // 9. الممرض والممرضة
  { id: 57, categoryNum: "9", categoryTitle: "الممرض", german: "der Krankenpfleger", arabic: "الممرض", pronunciation: "دِر كرانكنفليغر" },
  { id: 58, categoryNum: "9", categoryTitle: "الممرض", german: "die Krankenschwester", arabic: "الممرضة", pronunciation: "دي كرانكنشفستر" },
  { id: 59, categoryNum: "9", categoryTitle: "الممرض", german: "die Krankenpfleger", arabic: "الممرضون", pronunciation: "دِر كرانكنفليغر" },
  { id: 60, categoryNum: "9", categoryTitle: "الممرض", german: "die Krankenschwestern", arabic: "الممرضات", pronunciation: "دي كرانكنشفسترن" },

  // 10. طبيب الأسنان
  { id: 61, categoryNum: "10", categoryTitle: "طبيب الأسنان", german: "der Zahnarzt", arabic: "طبيب الأسنان", pronunciation: "دِر تسانأرست" },
  { id: 62, categoryNum: "10", categoryTitle: "طبيب الأسنان", german: "die Zahnärztin", arabic: "طبيبة الأسنان", pronunciation: "دي تسانأرتسين" },
  { id: 63, categoryNum: "10", categoryTitle: "طبيب الأسنان", german: "die Zahnärzte", arabic: "أطباء الأسنان", pronunciation: "دي تسانأيرتسته" },
  { id: 64, categoryNum: "10", categoryTitle: "طبيب الأسنان", german: "die Zahnärztinnen", arabic: "طبيبات الأسنان", pronunciation: "دي تسانأرتسينن" },

  // 11. الصيدلي
  { id: 65, categoryNum: "11", categoryTitle: "الصيدلي", german: "der Apotheker", arabic: "الصيدلي", pronunciation: "دِر أبوتيكر" },
  { id: 66, categoryNum: "11", categoryTitle: "الصيدلي", german: "die Apothekerin", arabic: "الصيدلانية", pronunciation: "دي أبوتيكرين" },
  { id: 67, categoryNum: "11", categoryTitle: "الصيدلي", german: "die Apotheker", arabic: "الصيادلة", pronunciation: "دي أبوتيكر" },
  { id: 68, categoryNum: "11", categoryTitle: "الصيدلي", german: "die Apothekerinnen", arabic: "الصيدلانيات", pronunciation: "دي أبوتيكرينن" },
  { id: 69, categoryNum: "11", categoryTitle: "الصيدلي", german: "die Apotheke", arabic: "الصيدلية (مكان عمل الصيدلي)", pronunciation: "دي أبوتيكه" },

  // 12. المحامي
  { id: 70, categoryNum: "12", categoryTitle: "المحامي", german: "der Anwalt", arabic: "المحامي", pronunciation: "دِر أنڤالت" },
  { id: 71, categoryNum: "12", categoryTitle: "المحامي", german: "die Anwältin", arabic: "المحامية", pronunciation: "دي أنڤالتين" },
  { id: 72, categoryNum: "12", categoryTitle: "المحامي", german: "die Anwälte", arabic: "المحامون", pronunciation: "دي أنڤيلته" },
  { id: 73, categoryNum: "12", categoryTitle: "المحامي", german: "die Anwältinnen", arabic: "المحاميات", pronunciation: "دي أنڤالتينن" },
  { id: 74, categoryNum: "12", categoryTitle: "المحامي", german: "die Kanzlei", arabic: "مكتب المحاماة (مكان عمل المحامي)", pronunciation: "دي كانتسلاي" },

  // 13. القاضي
  { id: 75, categoryNum: "13", categoryTitle: "القاضي", german: "der Richter", arabic: "القاضي", pronunciation: "دِر ريشتر" },
  { id: 76, categoryNum: "13", categoryTitle: "القاضي", german: "die Richterin", arabic: "القاضية", pronunciation: "دي ريشتيرين" },
  { id: 77, categoryNum: "13", categoryTitle: "القاضي", german: "die Richter", arabic: "القضاة", pronunciation: "دي ريشتر" },
  { id: 78, categoryNum: "13", categoryTitle: "القاضي", german: "die Richterinnen", arabic: "القاضيات", pronunciation: "دي ريشتيرينن" },
  { id: 79, categoryNum: "13", categoryTitle: "القاضي", german: "das Gericht", arabic: "المحكمة (مكان عمل القاضي)", pronunciation: "داس غيريخت" },

  // 14. الشرطي
  { id: 80, categoryNum: "14", categoryTitle: "الشرطي", german: "der Polizist", arabic: "الشرطي", pronunciation: "دِر بوليتسيست" },
  { id: 81, categoryNum: "14", categoryTitle: "الشرطي", german: "die Polizistin", arabic: "الشرطية", pronunciation: "دي بوليتسيستين" },
  { id: 82, categoryNum: "14", categoryTitle: "الشرطي", german: "die Polizisten", arabic: "رجال الشرطة", pronunciation: "دي بوليتسيستن" },
  { id: 83, categoryNum: "14", categoryTitle: "الشرطي", german: "die Polizistinnen", arabic: "الشرطيات", pronunciation: "دي بوليتسيستينن" },
  { id: 84, categoryNum: "14", categoryTitle: "الشرطي", german: "die Polizeiwache", arabic: "مركز الشرطة (مكان العمل)", pronunciation: "دي بوليتسايڤاحه" },

  // 15. رجل الإطفاء
  { id: 85, categoryNum: "15", categoryTitle: "رجل الإطفاء", german: "der Feuerwehrmann", arabic: "رجل الإطفاء", pronunciation: "دِر فويرڤيرمان" },
  { id: 86, categoryNum: "15", categoryTitle: "رجل الإطفاء", german: "die Feuerwehrfrau", arabic: "امرأة الإطفاء", pronunciation: "دي فويرڤيرفراو" },
  { id: 87, categoryNum: "15", categoryTitle: "رجل الإطفاء", german: "die Feuerwehrleute", arabic: "رجال ونساء الإطفاء (جمع)", pronunciation: "دي فويرڤيرلويته" },
  { id: 88, categoryNum: "15", categoryTitle: "رجل الإطفاء", german: "die Feuerwache", arabic: "محطة الإطفاء (مكان العمل)", pronunciation: "دي فويرڤاحه" },

  // 16. الجندي
  { id: 89, categoryNum: "16", categoryTitle: "الجندي", german: "der Soldat", arabic: "الجندي", pronunciation: "دِر زولدات" },
  { id: 90, categoryNum: "16", categoryTitle: "الجندي", german: "die Soldatin", arabic: "الجندية", pronunciation: "دي زولداتين" },
  { id: 91, categoryNum: "16", categoryTitle: "الجندي", german: "die Soldaten", arabic: "الجنود", pronunciation: "دي زولداتن" },
  { id: 92, categoryNum: "16", categoryTitle: "الجندي", german: "die Soldatinnen", arabic: "الجنديات", pronunciation: "دي زولداتينن" },
  { id: 93, categoryNum: "16", categoryTitle: "الجندي", german: "die Kaserne", arabic: "الثكنة العسكرية (مكان العمل)", pronunciation: "دي كازيرنه" },

  // 17. الطيار
  { id: 94, categoryNum: "17", categoryTitle: "الطيار", german: "der Pilot", arabic: "الطيار", pronunciation: "دِر بيلوت" },
  { id: 95, categoryNum: "17", categoryTitle: "الطيار", german: "die Pilotin", arabic: "الطيارة", pronunciation: "دي بيلوتين" },
  { id: 96, categoryNum: "17", categoryTitle: "الطيار", german: "die Piloten", arabic: "الطيارون", pronunciation: "دي بيلوتن" },
  { id: 97, categoryNum: "17", categoryTitle: "الطيار", german: "die Pilotinnen", arabic: "الطيارات", pronunciation: "دي بيلوتينن" },
  { id: 98, categoryNum: "17", categoryTitle: "الطيار", german: "der Flughafen", arabic: "المطار (مكان العمل)", pronunciation: "دِر فلوغهافن" },

  // 18. السائق
  { id: 99, categoryNum: "18", categoryTitle: "السائق", german: "der Fahrer", arabic: "السائق", pronunciation: "دِر فارر" },
  { id: 100, categoryNum: "18", categoryTitle: "السائق", german: "die Fahrerin", arabic: "السائقة", pronunciation: "دي فاريارين" },
  { id: 101, categoryNum: "18", categoryTitle: "السائق", german: "die Fahrer", arabic: "السائقون", pronunciation: "دي فارر" },
  { id: 102, categoryNum: "18", categoryTitle: "السائق", german: "die Fahrerinnen", arabic: "السائقات", pronunciation: "دي فاريارينن" },

  // 19. الطاهي
  { id: 103, categoryNum: "19", categoryTitle: "الطاهي", german: "der Koch", arabic: "الطاهي / الطباخ", pronunciation: "دِر كوخ" },
  { id: 104, categoryNum: "19", categoryTitle: "الطاهي", german: "die Köchin", arabic: "الطاهية / الطباخة", pronunciation: "دي كوشين" },
  { id: 105, categoryNum: "19", categoryTitle: "الطاهي", german: "die Köche", arabic: "الطهاة / الطباخون", pronunciation: "دي كوشه" },
  { id: 106, categoryNum: "19", categoryTitle: "الطاهي", german: "die Köchinnen", arabic: "الطاهيات / الطباخات", pronunciation: "دي كوشينن" },
  { id: 107, categoryNum: "19", categoryTitle: "الطاهي", german: "das Restaurant", arabic: "المطعم (مكان العمل)", pronunciation: "داس ريستوران" },
  { id: 108, categoryNum: "19", categoryTitle: "الطاهي", german: "die Küche", arabic: "المطبخ (مكان العمل)", pronunciation: "دي كوشه" },

  // 20. النادل
  { id: 109, categoryNum: "20", categoryTitle: "النادل", german: "der Kellner", arabic: "النادل", pronunciation: "دِر كيلنر" },
  { id: 110, categoryNum: "20", categoryTitle: "النادل", german: "die Kellnerin", arabic: "النادلة", pronunciation: "دي كيلنيرين" },
  { id: 111, categoryNum: "20", categoryTitle: "النادل", german: "die Kellner", arabic: "النادلون", pronunciation: "دي كيلنر" },
  { id: 112, categoryNum: "20", categoryTitle: "النادل", german: "die Kellnerinnen", arabic: "النادلات", pronunciation: "دي كيلنيرينن" },

  // 21. الخباز
  { id: 113, categoryNum: "21", categoryTitle: "الخباز", german: "der Bäcker", arabic: "الخباز", pronunciation: "دِر بيكر" },
  { id: 114, categoryNum: "21", categoryTitle: "الخباز", german: "die Bäckerin", arabic: "الخبازة", pronunciation: "دي بيكرين" },
  { id: 115, categoryNum: "21", categoryTitle: "الخباز", german: "die Bäcker", arabic: "الخبازون", pronunciation: "دي بيكر" },
  { id: 116, categoryNum: "21", categoryTitle: "الخباز", german: "die Bäckerinnen", arabic: "الخبازات", pronunciation: "دي بيكرينن" },
  { id: 117, categoryNum: "21", categoryTitle: "الخباز", german: "die Bäckerei", arabic: "المخبز (مكان العمل)", pronunciation: "دي بيكراي" },

  // 22. الجزار
  { id: 118, categoryNum: "22", categoryTitle: "الجزار", german: "der Metzger", arabic: "الجزار", pronunciation: "دِر ميتسغر" },
  { id: 119, categoryNum: "22", categoryTitle: "الجزار", german: "die Metzgerin", arabic: "الجزارة", pronunciation: "دي ميتسغارين" },
  { id: 120, categoryNum: "22", categoryTitle: "الجزار", german: "die Metzger", arabic: "الجزارون", pronunciation: "دي ميتسغر" },
  { id: 121, categoryNum: "22", categoryTitle: "الجزار", german: "die Metzgerinnen", arabic: "الجزارات", pronunciation: "دي ميتسغارينن" },
  { id: 122, categoryNum: "22", categoryTitle: "الجزار", german: "die Metzgerei", arabic: "الملحمة (مكان العمل)", pronunciation: "دي ميتسغراي" },

  // 23. الحلاق
  { id: 123, categoryNum: "23", categoryTitle: "الحلاق", german: "der Friseur", arabic: "الحلاق / مصفف الشعر", pronunciation: "دِر فريزيور" },
  { id: 124, categoryNum: "23", categoryTitle: "الحلاق", german: "die Friseuse", arabic: "الحلاقة / مصففة الشعر", pronunciation: "دي فريزوزة" },
  { id: 125, categoryNum: "23", categoryTitle: "الحلاق", german: "die Friseure", arabic: "الحلاقون", pronunciation: "دي فريزيوره" },
  { id: 126, categoryNum: "23", categoryTitle: "الحلاق", german: "die Friseusen", arabic: "الحلاقات", pronunciation: "دي فريزوزن" },
  { id: 127, categoryNum: "23", categoryTitle: "الحلاق", german: "der Friseursalon", arabic: "صالون الحلاقة (مكان العمل)", pronunciation: "دِر فريزيورسالون" },

  // 24. البائع
  { id: 128, categoryNum: "24", categoryTitle: "البائع", german: "der Verkäufer", arabic: "البائع", pronunciation: "دِر فيركاوفر" },
  { id: 129, categoryNum: "24", categoryTitle: "البائع", german: "die Verkäuferin", arabic: "البائعة", pronunciation: "دي فيركاوفرين" },
  { id: 130, categoryNum: "24", categoryTitle: "البائع", german: "die Verkäufer", arabic: "البائعون", pronunciation: "دي فيركاوفر" },
  { id: 131, categoryNum: "24", categoryTitle: "البائع", german: "die Verkäuferinnen", arabic: "البائعات", pronunciation: "دي فيركاوفرينن" },
  { id: 132, categoryNum: "24", categoryTitle: "البائع", german: "das Geschäft", arabic: "المتجر (مكان العمل)", pronunciation: "داس غيشفِت" },
  { id: 133, categoryNum: "24", categoryTitle: "البائع", german: "der Supermarkt", arabic: "السوبرماركت (مكان العمل)", pronunciation: "دِر زوبرماركت" },

  // 25. التاجر
  { id: 134, categoryNum: "25", categoryTitle: "التاجر", german: "der Kaufmann", arabic: "التاجر", pronunciation: "دِر كاوفمان" },
  { id: 135, categoryNum: "25", categoryTitle: "التاجر", german: "die Kauffrau", arabic: "التاجرة", pronunciation: "دي كاوففراو" },
  { id: 136, categoryNum: "25", categoryTitle: "التاجر", german: "die Kaufleute", arabic: "التجار (جمع)", pronunciation: "دي كاوفلويته" },

  // 26. المزارع
  { id: 137, categoryNum: "26", categoryTitle: "المزارع", german: "der Bauer", arabic: "المزارع", pronunciation: "دِر باور" },
  { id: 138, categoryNum: "26", categoryTitle: "المزارع", german: "die Bäuerin", arabic: "المزارعة", pronunciation: "دي بويارين" },
  { id: 139, categoryNum: "26", categoryTitle: "المزارع", german: "die Bauern", arabic: "المزارعون", pronunciation: "دي باورن" },
  { id: 140, categoryNum: "26", categoryTitle: "المزارع", german: "die Bäuerinnen", arabic: "المزارعات", pronunciation: "دي بويارينن" },
  { id: 141, categoryNum: "26", categoryTitle: "المزارع", german: "der Bauernhof", arabic: "المزرعة (مكان العمل)", pronunciation: "دِر باورنهوف" },

  // 27. البستاني
  { id: 142, categoryNum: "27", categoryTitle: "البستاني", german: "der Gärtner", arabic: "البستاني", pronunciation: "دِر غيرتنر" },
  { id: 143, categoryNum: "27", categoryTitle: "البستاني", german: "die Gärtnerin", arabic: "البستانية", pronunciation: "دي غيرتنرين" },
  { id: 144, categoryNum: "27", categoryTitle: "البستاني", german: "die Gärtner", arabic: "البستانيون", pronunciation: "دي غيرتنر" },
  { id: 145, categoryNum: "27", categoryTitle: "البستاني", german: "die Gärtnerinnen", arabic: "البستانيات", pronunciation: "دي غيرتنرينن" },
  { id: 146, categoryNum: "27", categoryTitle: "البستاني", german: "der Garten", arabic: "الحديقة (مكان العمل)", pronunciation: "دِر غارتن" },

  // 28. الرسام
  { id: 147, categoryNum: "28", categoryTitle: "الرسام", german: "der Maler", arabic: "الرسام / الدهان", pronunciation: "دِر مالر" },
  { id: 148, categoryNum: "28", categoryTitle: "الرسام", german: "die Malerin", arabic: "الرسامة / الدهانة", pronunciation: "دي ماليرين" },
  { id: 149, categoryNum: "28", categoryTitle: "الرسام", german: "die Maler", arabic: "الرسامون", pronunciation: "دي مالر" },
  { id: 150, categoryNum: "28", categoryTitle: "الرسام", german: "die Malerinnen", arabic: "الرسامات", pronunciation: "دي ماليرينن" },
  { id: 151, categoryNum: "28", categoryTitle: "الرسام", german: "das Atelier", arabic: "المرسم (مكان العمل)", pronunciation: "داس أتليه" },

  // 29. الكاتب
  { id: 152, categoryNum: "29", categoryTitle: "الكاتب", german: "der Schriftsteller", arabic: "الكاتب", pronunciation: "دِر شريفتشتيلر" },
  { id: 153, categoryNum: "29", categoryTitle: "الكاتب", german: "die Schriftstellerin", arabic: "الكاتبة", pronunciation: "دي شريفتشتيلرين" },
  { id: 154, categoryNum: "29", categoryTitle: "الكاتب", german: "die Schriftsteller", arabic: "الكتّاب", pronunciation: "دي شريفتشتيلر" },
  { id: 155, categoryNum: "29", categoryTitle: "الكاتب", german: "die Schriftstellerinnen", arabic: "الكاتبات", pronunciation: "دي شريفتشتيلرينن" },

  // 30. الصحفي
  { id: 156, categoryNum: "30", categoryTitle: "الصحفي", german: "der Journalist", arabic: "الصحفي", pronunciation: "دِر جورناليست" },
  { id: 157, categoryNum: "30", categoryTitle: "الصحفي", german: "die Journalistin", arabic: "الصحفية", pronunciation: "دي جورناليستين" },
  { id: 158, categoryNum: "30", categoryTitle: "الصحفي", german: "die Journalisten", arabic: "الصحفيون", pronunciation: "دي جورناليستن" },
  { id: 159, categoryNum: "30", categoryTitle: "الصحفي", german: "die Journalistinnen", arabic: "الصحفيات", pronunciation: "دي جورناليستينن" },
  { id: 160, categoryNum: "30", categoryTitle: "الصحفي", german: "die Redaktion", arabic: "دار التحرير (مكان العمل)", pronunciation: "دي ريداكسيون" },

  // 31. المصور
  { id: 161, categoryNum: "31", categoryTitle: "المصور", german: "der Fotograf", arabic: "المصور الفوتوغرافي", pronunciation: "دِر فوتوغراف" },
  { id: 162, categoryNum: "31", categoryTitle: "المصور", german: "die Fotografin", arabic: "المصورة الفوتوغرافية", pronunciation: "دي فوتوغرافين" },
  { id: 163, categoryNum: "31", categoryTitle: "المصور", german: "die Fotografen", arabic: "المصورون", pronunciation: "دي فوتوغرافت" },
  { id: 164, categoryNum: "31", categoryTitle: "المصور", german: "die Fotografinnen", arabic: "المصورات", pronunciation: "دي فوتوغرافينن" },
  { id: 165, categoryNum: "31", categoryTitle: "المصور", german: "das Fotostudio", arabic: "استوديو التصوير", pronunciation: "داس فوتوستوديو" },

  // 32. الموسيقي
  { id: 166, categoryNum: "32", categoryTitle: "الموسيقي", german: "der Musiker", arabic: "الموسيقي", pronunciation: "دِر موزيكر" },
  { id: 167, categoryNum: "32", categoryTitle: "الموسيقي", german: "die Musikerin", arabic: "الموسيقية", pronunciation: "دي موزيكرين" },
  { id: 168, categoryNum: "32", categoryTitle: "الموسيقي", german: "die Musiker", arabic: "الموسيقيون", pronunciation: "دي موزيكر" },
  { id: 169, categoryNum: "32", categoryTitle: "الموسيقي", german: "die Musikerinnen", arabic: "الموسيقيات", pronunciation: "دي موزيكرينن" },

  // 33. المغني
  { id: 170, categoryNum: "33", categoryTitle: "المغني", german: "der Sänger", arabic: "المغني", pronunciation: "دِر زينغر" },
  { id: 171, categoryNum: "33", categoryTitle: "المغني", german: "die Sängerin", arabic: "المغنية", pronunciation: "دي زينغيرين" },
  { id: 172, categoryNum: "33", categoryTitle: "المغني", german: "die Sänger", arabic: "المغنون", pronunciation: "دي زينغر" },
  { id: 173, categoryNum: "33", categoryTitle: "المغني", german: "die Sängerinnen", arabic: "المغنيات", pronunciation: "دي زينغيرينن" },
  { id: 174, categoryNum: "33", categoryTitle: "المغني", german: "die Bühne", arabic: "المسرح / المنصة (مكان العمل)", pronunciation: "دي بيونه" },

  // 34. الممثل
  { id: 175, categoryNum: "34", categoryTitle: "الممثل", german: "der Schauspieler", arabic: "الممثل", pronunciation: "دِر شاوشبيلر" },
  { id: 176, categoryNum: "34", categoryTitle: "الممثل", german: "die Schauspielerin", arabic: "الممثلة", pronunciation: "دي شاوشبيلرين" },
  { id: 177, categoryNum: "34", categoryTitle: "الممثل", german: "die Schauspieler", arabic: "الممثلون", pronunciation: "دي شاوشبيلر" },
  { id: 178, categoryNum: "34", categoryTitle: "الممثل", german: "die Schauspielerinnen", arabic: "الممثلات", pronunciation: "دي شاوشبيلرينن" },
  { id: 179, categoryNum: "34", categoryTitle: "الممثل", german: "das Theater", arabic: "المسرح (مكان العمل)", pronunciation: "داس تيادر" },

  // 35. المعلم
  { id: 180, categoryNum: "35", categoryTitle: "المعلم", german: "der Lehrer", arabic: "المعلم", pronunciation: "دِر ليرر" },
  { id: 181, categoryNum: "35", categoryTitle: "المعلم", german: "die Lehrerin", arabic: "المعلمة", pronunciation: "دي ليررين" },
  { id: 182, categoryNum: "35", categoryTitle: "المعلم", german: "die Lehrer", arabic: "المعلمون", pronunciation: "دي ليرر" },
  { id: 183, categoryNum: "35", categoryTitle: "المعلم", german: "die Lehrerinnen", arabic: "المعلمات", pronunciation: "دي ليررينن" },
  { id: 184, categoryNum: "35", categoryTitle: "المعلم", german: "die Schule", arabic: "المدرسة (مكان العمل)", pronunciation: "دي شوله" },

  // 36. الأستاذ الجامعي
  { id: 185, categoryNum: "36", categoryTitle: "الأستاذ الجامعي", german: "der Professor", arabic: "الأستاذ الجامعي", pronunciation: "دِر بروفيسور" },
  { id: 186, categoryNum: "36", categoryTitle: "الأستاذ الجامعي", german: "die Professorin", arabic: "الأستاذة الجامعية", pronunciation: "دي بروفيسورين" },
  { id: 187, categoryNum: "36", categoryTitle: "الأستاذ الجامعي", german: "die Professoren", arabic: "الأساتذة الجامعيون", pronunciation: "دي بروفيسورن" },
  { id: 188, categoryNum: "36", categoryTitle: "الأستاذ الجامعي", german: "die Professorinnen", arabic: "الأستاذات الجامعيات", pronunciation: "دي بروفيسورينن" },
  { id: 189, categoryNum: "36", categoryTitle: "الأستاذ الجامعي", german: "die Universität", arabic: "الجامعة (مكان العمل)", pronunciation: "دي أونيفيرسيتات" },

  // 37. العالم
  { id: 190, categoryNum: "37", categoryTitle: "العالم", german: "der Wissenschaftler", arabic: "العالم", pronunciation: "دِر ڤيسنشافتيلر" },
  { id: 191, categoryNum: "37", categoryTitle: "العالم", german: "die Wissenschaftlerin", arabic: "العالمة", pronunciation: "دي ڤيسنشافتيلرين" },
  { id: 192, categoryNum: "37", categoryTitle: "العالم", german: "die Wissenschaftler", arabic: "العلماء", pronunciation: "دي ڤيسنشافتيلر" },
  { id: 193, categoryNum: "37", categoryTitle: "العالم", german: "die Wissenschaftlerinnen", arabic: "العالمات", pronunciation: "دي ڤيسنشافتيلرينن" },
  { id: 194, categoryNum: "37", categoryTitle: "العالم", german: "das Labor", arabic: "المختبر (مكان العمل)", pronunciation: "داس لابور" },

  // 38. المبرمج
  { id: 195, categoryNum: "38", categoryTitle: "المبرمج", german: "der Programmierer", arabic: "المبرمج", pronunciation: "دِر بروغرَاميرر" },
  { id: 196, categoryNum: "38", categoryTitle: "المبرمج", german: "die Programmiererin", arabic: "المبرمجة", pronunciation: "دي بروغرَاميررين" },
  { id: 197, categoryNum: "38", categoryTitle: "المبرمج", german: "die Programmierer", arabic: "المبرمجون", pronunciation: "دي بروغرَاميرر" },
  { id: 198, categoryNum: "38", categoryTitle: "المبرمج", german: "die Programmiererinnen", arabic: "المبرمجات", pronunciation: "دي بروغرَاميررينن" },

  // 39. المهندس المعماري
  { id: 199, categoryNum: "39", categoryTitle: "المهندس المعماري", german: "der Architekt", arabic: "المهندس المعماري", pronunciation: "دِر أرشيتكت" },
  { id: 200, categoryNum: "39", categoryTitle: "المهندس المعماري", german: "die Architektin", arabic: "المهندسة المعمارية", pronunciation: "دي أرشيتكتين" },
  { id: 201, categoryNum: "39", categoryTitle: "المهندس المعماري", german: "die Architekten", arabic: "المهندسون المعماريون", pronunciation: "دي أرشيتكتن" },
  { id: 202, categoryNum: "39", categoryTitle: "المهندس المعماري", german: "die Architektinnen", arabic: "المهندسات المعماريات", pronunciation: "دي أرشيتكتينن" },

  // 40. الكهربائي
  { id: 203, categoryNum: "40", categoryTitle: "الكهربائي", german: "der Elektriker", arabic: "الكهربائي", pronunciation: "دِر إليكتريكر" },
  { id: 204, categoryNum: "40", categoryTitle: "الكهربائي", german: "die Elektrikerin", arabic: "الكهربائية", pronunciation: "دي إليكتريكرين" },
  { id: 205, categoryNum: "40", categoryTitle: "الكهربائي", german: "die Elektriker", arabic: "الكهربائيون", pronunciation: "دي إليكتريكر" },
  { id: 206, categoryNum: "40", categoryTitle: "الكهربائي", german: "die Elektrikerinnen", arabic: "الكهربائيات", pronunciation: "دي إليكتريكرينن" },

  // 41. الميكانيكي
  { id: 207, categoryNum: "41", categoryTitle: "الميكانيكي", german: "der Mechaniker", arabic: "الميكانيكي", pronunciation: "دِر ميشانيكر" },
  { id: 208, categoryNum: "41", categoryTitle: "الميكانيكي", german: "die Mechanikerin", arabic: "الميكانيكية", pronunciation: "دي ميشانيكرين" },
  { id: 209, categoryNum: "41", categoryTitle: "الميكانيكي", german: "die Mechaniker", arabic: "الميكانيكيون", pronunciation: "دي ميشانيكر" },
  { id: 210, categoryNum: "41", categoryTitle: "الميكانيكي", german: "die Mechanikerinnen", arabic: "الميكانيكيات", pronunciation: "دي ميشانيكرينن" },
  { id: 211, categoryNum: "41", categoryTitle: "الميكانيكي", german: "die Autowerkstatt", arabic: "ورشة السيارات (مكان العمل)", pronunciation: "دي أوتوڤيركشتات" },

  // 42. السباك
  { id: 212, categoryNum: "42", categoryTitle: "السباك", german: "der Klempner", arabic: "السباك", pronunciation: "دِر كليمبنر" },
  { id: 213, categoryNum: "42", categoryTitle: "السباك", german: "die Klempnerin", arabic: "السباكة", pronunciation: "دي كليمبنرين" },
  { id: 214, categoryNum: "42", categoryTitle: "السباك", german: "die Klempner", arabic: "السباكون", pronunciation: "دي كليمبنر" },
  { id: 215, categoryNum: "42", categoryTitle: "السباك", german: "die Klempnerinnen", arabic: "السباكات", pronunciation: "دي كليمبنرينن" },

  // 43. الحداد
  { id: 216, categoryNum: "43", categoryTitle: "الحداد", german: "der Schlosser", arabic: "الحداد", pronunciation: "دِر شلوسر" },
  { id: 217, categoryNum: "43", categoryTitle: "الحداد", german: "die Schlosserin", arabic: "الحدادة", pronunciation: "دي شلوسرين" },
  { id: 218, categoryNum: "43", categoryTitle: "الحداد", german: "die Schlosser", arabic: "الحدادون", pronunciation: "دي شلوسر" },
  { id: 219, categoryNum: "43", categoryTitle: "الحداد", german: "die Schlosserinnen", arabic: "الحدادات", pronunciation: "دي شلوسرينن" },
  { id: 220, categoryNum: "43", categoryTitle: "الحداد", german: "die Werkstatt", arabic: "الورشة (مكان العمل)", pronunciation: "دي ڤيركشتات" },

  // 44. النجار
  { id: 221, categoryNum: "44", categoryTitle: "النجار", german: "der Tischler", arabic: "النجار", pronunciation: "دِر تيشلر" },
  { id: 222, categoryNum: "44", categoryTitle: "النجار", german: "die Tischlerin", arabic: "النجارة", pronunciation: "دي تيشليرين" },
  { id: 223, categoryNum: "44", categoryTitle: "النجار", german: "die Tischler", arabic: "النجارون", pronunciation: "دي تيشلر" },
  { id: 224, categoryNum: "44", categoryTitle: "النجار", german: "die Tischlerinnen", arabic: "النجارات", pronunciation: "دي تيشليرينن" },
  { id: 225, categoryNum: "44", categoryTitle: "النجار", german: "die Tischlerei", arabic: "ورشة النجارة", pronunciation: "دي تيشلراي" },

  // 45. رائد الفضاء
  { id: 226, categoryNum: "45", categoryTitle: "رائد الفضاء", german: "der Astronaut", arabic: "رائد الفضاء", pronunciation: "دِر أسترونات" },
  { id: 227, categoryNum: "45", categoryTitle: "رائد الفضاء", german: "die Astronautin", arabic: "رائدة الفضاء", pronunciation: "دي أستروناتين" },
  { id: 228, categoryNum: "45", categoryTitle: "رائد الفضاء", german: "die Astronauten", arabic: "رواد الفضاء", pronunciation: "دي أستروناتن" },
  { id: 229, categoryNum: "45", categoryTitle: "رائد الفضاء", german: "die Astronautinnen", arabic: "رائدات الفضاء", pronunciation: "دي أستروناتينن" },
  { id: 230, categoryNum: "45", categoryTitle: "رائد الفضاء", german: "das Raumschiff", arabic: "مركبة الفضاء (مكان العمل)", pronunciation: "داس راومشيف" },

  // 46. المدير الإداري
  { id: 231, categoryNum: "46", categoryTitle: "المدير الإداري", german: "der Manager", arabic: "المدير الإداري", pronunciation: "دِر ميندجر" },
  { id: 232, categoryNum: "46", categoryTitle: "المدير الإداري", german: "die Managerin", arabic: "المديرة الإدارية", pronunciation: "دي ميندجرين" },
  { id: 233, categoryNum: "46", categoryTitle: "المدير الإداري", german: "die Manager", arabic: "المدراء الإداريون", pronunciation: "دي ميندجر" },
  { id: 234, categoryNum: "46", categoryTitle: "المدير الإداري", german: "die Managerinnen", arabic: "المديرات الإداريات", pronunciation: "دي ميندجرينن" },

  // 47. الموظف الحكومي
  { id: 235, categoryNum: "47", categoryTitle: "الموظف الحكومي", german: "der Beamte", arabic: "الموظف الحكومي", pronunciation: "دِر بيامته" },
  { id: 236, categoryNum: "47", categoryTitle: "الموظف الحكومي", german: "die Beamtin", arabic: "الموظفة الحكومية", pronunciation: "دي بيامتين" },
  { id: 237, categoryNum: "47", categoryTitle: "الموظف الحكومي", german: "die Beamten", arabic: "الموظفون الحكوميون", pronunciation: "دي بيامتن" },
  { id: 238, categoryNum: "47", categoryTitle: "الموظف الحكومي", german: "die Beamtinnen", arabic: "الموظفات الحكوميات", pronunciation: "دي بيامتينن" },
  { id: 239, categoryNum: "47", categoryTitle: "الموظف الحكومي", german: "das Amt", arabic: "الدائرة الحكومية (مكان العمل)", pronunciation: "داس أمِت" },

  // 48. صاحب العمل
  { id: 240, categoryNum: "48", categoryTitle: "صاحب العمل", german: "der Unternehmungsleiter", arabic: "صاحب العمل / رئيس الشركة", pronunciation: "دِر أونترنيمونغسلايتر" },
  { id: 241, categoryNum: "48", categoryTitle: "صاحب العمل", german: "die Unternehmungsleiterin", arabic: "صاحبة العمل / رئيسة الشركة", pronunciation: "دي أونترنيمونغسلايترين" },
  { id: 242, categoryNum: "48", categoryTitle: "صاحب العمل", german: "die Unternehmungsleiter", arabic: "أصحاب الأعمال", pronunciation: "دي أونترنيمونغسلايتر" },

  // 49. المحاسب
  { id: 243, categoryNum: "49", categoryTitle: "المحاسب", german: "der Buchhalter", arabic: "المحاسب", pronunciation: "دِر بوخهالتر" },
  { id: 244, categoryNum: "49", categoryTitle: "المحاسب", german: "die Buchhalterin", arabic: "المحاسبة", pronunciation: "دي بوخهالترين" },
  { id: 245, categoryNum: "49", categoryTitle: "المحاسب", german: "die Buchhalter", arabic: "المحاسبون", pronunciation: "دي بوخهالتر" },
  { id: 246, categoryNum: "49", categoryTitle: "المحاسب", german: "die Buchhalterinnen", arabic: "المحاسبات", pronunciation: "دي بوخهالترينن" },

  // 50. موظف الاستقبال
  { id: 247, categoryNum: "50", categoryTitle: "موظف الاستقبال", german: "der Rezeptionist", arabic: "موظف الاستقبال", pronunciation: "دِر ريتسيبتونيست" },
  { id: 248, categoryNum: "50", categoryTitle: "موظف الاستقبال", german: "die Rezeptionistin", arabic: "موظفة الاستقبال", pronunciation: "دي ريتسيبتونيستين" },
  { id: 249, categoryNum: "50", categoryTitle: "موظف الاستقبال", german: "die Rezeptionisten", arabic: "موظفو الاستقبال", pronunciation: "دي ريتسيبتونيستن" },
  { id: 250, categoryNum: "50", categoryTitle: "موظف الاستقبال", german: "die Rezeptionistinnen", arabic: "موظفات الاستقبال", pronunciation: "دي ريتسيبتونيستينن" },
  { id: 251, categoryNum: "50", categoryTitle: "موظف الاستقبال", german: "das Hotel", arabic: "الفندق (مكان العمل)", pronunciation: "داس أوتيل" },

  // 51. ساعي البريد
  { id: 252, categoryNum: "51", categoryTitle: "ساعي البريد", german: "der Postbote", arabic: "ساعي البريد", pronunciation: "دِر بوستبوته" },
  { id: 253, categoryNum: "51", categoryTitle: "ساعي البريد", german: "die Postbotin", arabic: "ساعية البريد", pronunciation: "دي بوستبوتين" },
  { id: 254, categoryNum: "51", categoryTitle: "ساعي البريد", german: "die Postboten", arabic: "سعاة البريد", pronunciation: "دي بوستبوتن" },
  { id: 255, categoryNum: "51", categoryTitle: "ساعي البريد", german: "die Postbotinnen", arabic: "ساعيات البريد", pronunciation: "دي بوستبوتينن" },
  { id: 256, categoryNum: "51", categoryTitle: "ساعي البريد", german: "die Post", arabic: "مكتب البريد (مكان العمل)", pronunciation: "دي بوست" },

  // 52. الطبيب البيطري
  { id: 257, categoryNum: "52", categoryTitle: "الطبيب البيطري", german: "der Tierarzt", arabic: "الطبيب البيطري", pronunciation: "دِر تيرأرست" },
  { id: 258, categoryNum: "52", categoryTitle: "الطبيب البيطري", german: "die Tierärztin", arabic: "الطبيبة البيطرية", pronunciation: "دي تيرأرتسين" },
  { id: 259, categoryNum: "52", categoryTitle: "الطبيب البيطري", german: "die Tierärzte", arabic: "الأطباء البيطريون", pronunciation: "دي تيرأيرتسته" },
  { id: 260, categoryNum: "52", categoryTitle: "الطبيب البيطري", german: "die Tierärztinnen", arabic: "الطبيبات البيطريات", pronunciation: "دي تيرأرتسينن" },
  { id: 261, categoryNum: "52", categoryTitle: "الطبيب البيطري", german: "die Tierklinik", arabic: "العيادة البيطرية (مكان العمل)", pronunciation: "دي تيركلينيك" },

  // 53. المصمم
  { id: 262, categoryNum: "53", categoryTitle: "المصمم", german: "der Designer", arabic: "المصمم", pronunciation: "دِر ديزاينر" },
  { id: 263, categoryNum: "53", categoryTitle: "المصمم", german: "die Designerin", arabic: "المصممة", pronunciation: "دي ديزاينرين" },
  { id: 264, categoryNum: "53", categoryTitle: "المصمم", german: "die Designer", arabic: "المصممون", pronunciation: "دي ديزاينر" },
  { id: 265, categoryNum: "53", categoryTitle: "المصمم", german: "die Designerinnen", arabic: "المصممات", pronunciation: "دي ديزاينرينن" },

  // 54. حالات وقضايا العمل
  { id: 266, categoryNum: "54", categoryTitle: "حالات وقضايا العمل", german: "die Rente", arabic: "التقاعد / المعاش", pronunciation: "دي رينته" },
  { id: 267, categoryNum: "54", categoryTitle: "حالات وقضايا العمل", german: "die Überstunden", arabic: "ساعات العمل الإضافية", pronunciation: "دي إيوبرشتوندن" },
  { id: 268, categoryNum: "54", categoryTitle: "حالات وقضايا العمل", german: "die Kündigung", arabic: "الإقالة / الاستقالة", pronunciation: "دي كيونديغونغ" },
  { id: 269, categoryNum: "54", categoryTitle: "حالات وقضايا العمل", german: "arbeitslos", arabic: "عاطل عن العمل", pronunciation: "أربايتس لوس" }
];

export default function JobsAndCareersPage() {
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

  const renderColoredGermanWord = (germanStr) => {
    const parts = germanStr.split(' ');
    if (parts.length > 0) {
      const firstWord = parts[0].toLowerCase();
      let wordColor = 'inherit';

      if (firstWord === 'der') wordColor = '#00bfff'; // لبنى
      else if (firstWord === 'das') wordColor = '#22c55e'; // أخضر
      else if (firstWord === 'die') wordColor = '#ec4899'; // بمبي

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

  const filteredData = jobsData.filter(
    (item) =>
      item.german.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.arabic.includes(searchTerm) ||
      (item.categoryTitle && item.categoryTitle.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  let lastCategoryNum = null;

  return (
    <div style={{ padding: '15px 15px 40px 15px', color: 'inherit', background: 'transparent' }}>
      <style>{`
        .page-title {
          text-align: center;
          font-size: 1.5rem;
          font-weight: 900;
          margin-bottom: 15px;
          color: inherit;
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
          font-size: 1.0rem;
          font-weight: 900;
          margin: 35px 0 15px 0;
          color: #00bfff;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
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

      <h1 className="page-title">الوظائف والمهن (Berufe und Arbeit)</h1>

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
        {filteredData.map((item, index) => {
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
                <div className="item-number">{index + 1}</div>

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
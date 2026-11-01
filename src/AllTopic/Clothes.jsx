import React, { useState } from 'react';

// قائمة البيانات الشاملة والمرتبة بدقة في 20 قسماً متوازناً وعملياً
const extendedClothesData = [
  // --- القسم 1: الملابس العامة الأساسية ---
  { id: 1, categoryNum: 1, categoryTitle: 'الملابس العامة الأساسية', german: 'die Kleidung', pronunciation: 'دي كلايدونغ', arabic: 'الملابس' },
  { id: 2, categoryNum: 1, categoryTitle: 'الملابس العامة الأساسية', german: 'das Hemd', pronunciation: 'داس هيمت', arabic: 'القميص' },
  { id: 3, categoryNum: 1, categoryTitle: 'الملابس العامة الأساسية', german: 'das T-Shirt', pronunciation: 'داس تيشيرت', arabic: 'التي شيرت' },
  { id: 4, categoryNum: 1, categoryTitle: 'الملابس العامة الأساسية', german: 'die Hose', pronunciation: 'دي هوزه', arabic: 'البنطال' },
  { id: 5, categoryNum: 1, categoryTitle: 'الملابس العامة الأساسية', german: 'die Jeans', pronunciation: 'دي جينس', arabic: 'الجينز' },
  { id: 6, categoryNum: 1, categoryTitle: 'الملابس العامة الأساسية', german: 'die Jacke', pronunciation: 'دي ياكه', arabic: 'الجاكيت' },
  { id: 7, categoryNum: 1, categoryTitle: 'الملابس العامة الأساسية', german: 'der Mantel', pronunciation: 'در مانتل', arabic: 'المعطف' },
  { id: 8, categoryNum: 1, categoryTitle: 'الملابس العامة الأساسية', german: 'der Pullover', pronunciation: 'در بولوفر', arabic: 'الكنزة / البلوفر' },
  { id: 9, categoryNum: 1, categoryTitle: 'الملابس العامة الأساسية', german: 'die Weste', pronunciation: 'دي ڤيسته', arabic: 'السترة (فيست)' },
  { id: 10, categoryNum: 1, categoryTitle: 'الملابس العامة الأساسية', german: 'der Trainingsanzug', pronunciation: 'در تراينينغز‌أنتسوغ', arabic: 'بدلة رياضية (تريننج)' },
  { id: 11, categoryNum: 1, categoryTitle: 'الملابس العامة الأساسية', german: 'der Kapuzenpullover', pronunciation: 'در كابوتسن‌بولوفر', arabic: 'سويت شيرت بقلنسوة (هودي)' },

// --- القسم 2: ملابس النساء والفساتين ---
  { id: 12, categoryNum: 2, categoryTitle: 'ملابس النساء والفساتين', german: 'das Kleid', pronunciation: 'داس كلايد', arabic: 'الفستان' },
  { id: 13, categoryNum: 2, categoryTitle: 'ملابس النساء والفساتين', german: 'der Rock', pronunciation: 'در روك', arabic: 'التنورة (الجونلة)' },
  { id: 14, categoryNum: 2, categoryTitle: 'ملابس النساء والفساتين', german: 'die Bluse', pronunciation: 'دي بلوزه', arabic: 'البلوزة' },
  { id: 15, categoryNum: 2, categoryTitle: 'ملابس النساء والفساتين', german: 'die Strumpfhose', pronunciation: 'دي شترومبف‌هوزه', arabic: 'جورب طويل نسائي (كولون)' },
  { id: 16, categoryNum: 2, categoryTitle: 'ملابس النساء والفساتين', german: 'das Abendkleid', pronunciation: 'داس آبندكلايد', arabic: 'فستان سهرة' },
  { id: 17, categoryNum: 2, categoryTitle: 'ملابس النساء والفساتين', german: 'der Hosenanzug', pronunciation: 'در هوزين‌أنتسوغ', arabic: 'بدلة نسائية بنطال' },
  { id: 18, categoryNum: 2, categoryTitle: 'ملابس النساء والفساتين', german: 'das Top', pronunciation: 'داس توب', arabic: 'بلوزة صيفية بدون أكمام (تاپ)' },
  { id: 1801, categoryNum: 2, categoryTitle: 'ملابس النساء والفساتين', german: 'die Binde', pronunciation: 'دي بينده', arabic: 'الفوطة الصحية للنساء' },
  { id: 1802, categoryNum: 2, categoryTitle: 'ملابس النساء والفساتين', german: 'die Slipeinlage', pronunciation: 'دي شليب‌آينلاغه', arabic: 'فوطة يومية نسائية' },
  // --- القسم 3: ملابس الرجال والبدلات الرسمية ---
  { id: 19, categoryNum: 3, categoryTitle: 'ملابس الرجال والبدلات الرسمية', german: 'der Anzug', pronunciation: 'در آنتسوغ', arabic: 'البدلة الرجالي' },
  { id: 20, categoryNum: 3, categoryTitle: 'ملابس الرجال والبدلات الرسمية', german: 'die Krawatte', pronunciation: 'دي كرافاته', arabic: 'ربطة العنق (الكرفتة)' },
  { id: 21, categoryNum: 3, categoryTitle: 'ملابس الرجال والبدلات الرسمية', german: 'die Fliege', pronunciation: 'دي فليغه', arabic: 'ربطة العنق الفراشة' },
  { id: 22, categoryNum: 3, categoryTitle: 'ملابس الرجال والبدلات الرسمية', german: 'das Sakko', pronunciation: 'در ساكو', arabic: 'جاكيت البدلة الرسمي' },
  { id: 23, categoryNum: 3, categoryTitle: 'ملابس الرجال والبدلات الرسمية', german: 'die Anzughose', pronunciation: 'دي آنتسوغ‌هوزه', arabic: 'بنطال البدلة' },
  { id: 24, categoryNum: 3, categoryTitle: 'ملابس الرجال والبدلات الرسمية', german: 'der Smoking', pronunciation: 'در سموكينغ', arabic: 'بدلة سهرة رسمية' },
  { id: 25, categoryNum: 3, categoryTitle: 'ملابس الرجال والبدلات الرسمية', german: 'das Brautkleid', pronunciation: 'داس براوت‌كلايد', arabic: 'فستان الزفاف' },
  { id: 26, categoryNum: 3, categoryTitle: 'ملابس الرجال والبدلات الرسمية', german: 'der Tuxedo', pronunciation: 'در توكسيدو', arabic: 'بدلة السهرة (تكسيدو)' },
  { id: 27, categoryNum: 3, categoryTitle: 'ملابس الرجال والبدلات الرسمية', german: 'die Festkleidung', pronunciation: 'دي فيست‌كلايدونغ', arabic: 'ملابس الاحتفالات' },

  // --- القسم 4: ملابس الأطفال والرضع ---
  { id: 28, categoryNum: 4, categoryTitle: 'ملابس الأطفال والرضع', german: 'der Strampler', pronunciation: 'در شترامبلر', arabic: 'سلوبيت الأطفال الرضع' },
  { id: 29, categoryNum: 4, categoryTitle: 'ملابس الأطفال والرضع', german: 'die Latzhose', pronunciation: 'دي لاتس‌هوزه', arabic: 'بنطال بحمالات للأطفال' },
  { id: 30, categoryNum: 4, categoryTitle: 'ملابس الأطفال والرضع', german: 'das Lätzchen', pronunciation: 'داس ليتشين', arabic: 'مريلة طعام الأطفال' },
  { id: 31, categoryNum: 4, categoryTitle: 'ملابس الأطفال والرضع', german: 'der Kinderpullover', pronunciation: 'در كيندر‌پولوفر', arabic: 'كنزة أطفال' },
  { id: 32, categoryNum: 4, categoryTitle: 'ملابس الأطفال والرضع', german: 'die Windel', pronunciation: 'دي ڤيندل', arabic: 'حفاضة أطفال' },
  { id: 33, categoryNum: 4, categoryTitle: 'ملابس الأطفال والرضع', german: 'das Spucktuch', pronunciation: 'داس شپوكتوخ', arabic: 'قماش التجشؤ للرضيع' },

  // --- القسم 5: الملابس الداخلية والنوم ---
  { id: 34, categoryNum: 5, categoryTitle: 'الملابس الداخلية والنوم', german: 'die Unterwäsche', pronunciation: 'دي أونترفيشه', arabic: 'الملابس الداخلية' },
  { id: 35, categoryNum: 5, categoryTitle: 'الملابس الداخلية والنوم', german: 'der Slip', pronunciation: 'در سليپ', arabic: 'سروال داخلي' },
  { id: 36, categoryNum: 5, categoryTitle: 'الملابس الداخلية والنوم', german: 'der BH', pronunciation: 'در بي إتش', arabic: 'حمالة صدر' },
  { id: 37, categoryNum: 5, categoryTitle: 'الملابس الداخلية والنوم', german: 'das Nachthemd', pronunciation: 'داس ناختهيمت', arabic: 'قميص النوم' },
  { id: 38, categoryNum: 5, categoryTitle: 'الملابس الداخلية والنوم', german: 'der Schlafanzug', pronunciation: 'در شلافانتسوغ', arabic: 'بيجامة النوم' },
  { id: 39, categoryNum: 5, categoryTitle: 'الملابس الداخلية والنوم', german: 'der Morgenrock', pronunciation: 'در مورغن‌روك', arabic: 'رداء الصباح (الروب)' },
  { id: 40, categoryNum: 5, categoryTitle: 'الملابس الداخلية والنوم', german: 'die Haussocken', pronunciation: 'دي هاوس‌زوكن', arabic: 'جوارب منزلية سميكة' },
  { id: 41, categoryNum: 5, categoryTitle: 'الملابس الداخلية والنوم', german: 'das Schlafkissen', pronunciation: 'داس شلاف‌كيسن', arabic: 'وسادة النوم' },

  // --- القسم 6: ملابس البحر والرياضات المائية ---
  { id: 42, categoryNum: 6, categoryTitle: 'ملابس البحر والرياضات المائية', german: 'der Badeanzug', pronunciation: 'دي بادتآنتسوغ', arabic: 'لباس سباحة نسائي' },
  { id: 43, categoryNum: 6, categoryTitle: 'ملابس البحر والرياضات المائية', german: 'die Badehose', pronunciation: 'دي باد‌هوزه', arabic: 'شورت سباحة رجالي' },
  { id: 44, categoryNum: 6, categoryTitle: 'الملابس الداخلية والنوم', german: 'der Bademantel', pronunciation: 'در بادمانتل', arabic: 'رداء الحمام (برنص)' },
  { id: 45, categoryNum: 6, categoryTitle: 'ملابس البحر والرياضات المائية', german: 'der Bikini', pronunciation: 'در بيكيني', arabic: 'مايوه بيكيني' },
  { id: 46, categoryNum: 6, categoryTitle: 'ملابس البحر والرياضات المائية', german: 'die Badekappe', pronunciation: 'دي باد‌كابه', arabic: 'قبعة السباحة' },
  { id: 47, categoryNum: 6, categoryTitle: 'ملابس البحر والرياضات المائية', german: 'die Taucherbrille', pronunciation: 'دي تاوخر‌بريله', arabic: 'نظارة الغوص' },
  { id: 48, categoryNum: 6, categoryTitle: 'ملابس البحر والرياضات المائية', german: 'der Neoprenanzug', pronunciation: 'در نيوپرين‌أنتسوغ', arabic: 'بدلة غطس (نيوبرين)' },

  // --- القسم 7: الأحذية العادية والرياضية ---
  { id: 49, categoryNum: 7, categoryTitle: 'الأحذية العادية والرياضية', german: 'die Schuhe', pronunciation: 'دي شويه', arabic: 'الأحذية' },
  { id: 50, categoryNum: 7, categoryTitle: 'الأحذية العادية والرياضية', german: 'die Socken', pronunciation: 'دي زوكن', arabic: 'الجوارب' },
  { id: 51, categoryNum: 7, categoryTitle: 'الأحذية العادية والرياضية', german: 'die Stiefel', pronunciation: 'دي شتيبفل', arabic: 'الجزمة الطويلة' },
  { id: 52, categoryNum: 7, categoryTitle: 'الأحذية العادية والرياضية', german: 'die Sandalen', pronunciation: 'دي زاندالن', arabic: 'الصنادل' },
  { id: 53, categoryNum: 7, categoryTitle: 'الأحذية العادية والرياضية', german: 'die Turnschuhe', pronunciation: 'دي تورن‌شوه', arabic: 'حذاء رياضي (سنيكرز)' },
  { id: 54, categoryNum: 7, categoryTitle: 'الأحذية العادية والرياضية', german: 'die Halbschuhe', pronunciation: 'دي هالب‌شوه', arabic: 'أحذية خفيفة' },
  { id: 55, categoryNum: 7, categoryTitle: 'الأحذية العادية والرياضية', german: 'die High Heels', pronunciation: 'دي هاي هيلز', arabic: 'حذاء كعب عالي' },

  // --- القسم 8: الأحذية الخاصة والمنزلية والشتوية ---
  { id: 56, categoryNum: 8, categoryTitle: 'الأحذية الخاصة والمنزلية والشتوية', german: 'die Hausschuhe', pronunciation: 'دي هاوس‌شوه', arabic: 'أحذية البيت (الشبشب)' },
  { id: 57, categoryNum: 8, categoryTitle: 'الأحذية الخاصة والمنزلية والشتوية', german: 'die Gummistiefel', pronunciation: 'دي غومي‌شتيبفل', arabic: 'جزمة مطاطية للمطر' },
  { id: 58, categoryNum: 8, categoryTitle: 'الأحذية الخاصة والمنزلية والشتوية', german: 'die Wanderschuhe', pronunciation: 'دي ڤاندر‌شوه', arabic: 'أحذية المشي والتسلق' },
  { id: 59, categoryNum: 8, categoryTitle: 'الأحذية الخاصة والمنزلية والشتوية', german: 'die Schlittschuhe', pronunciation: 'دي شليت‌شوه', arabic: 'أحذية التزلج على الجليد' },
  { id: 60, categoryNum: 8, categoryTitle: 'الأحذية الخاصة والمنزلية والشتوية', german: 'die Badeschuhe', pronunciation: 'دي باد‌شوه', arabic: 'أحذية البحر' },
  { id: 61, categoryNum: 8, categoryTitle: 'الأحذية الخاصة والمنزلية والشتوية', german: 'die Pantoletten', pronunciation: 'دي پانتوليتن', arabic: 'شبشب منزلي مفتوح (بانتوفل)' },
  { id: 62, categoryNum: 8, categoryTitle: 'الأحذية الخاصة والمنزلية والشتوية', german: 'die Gesundheitsschuhe', pronunciation: 'دي غيزوندهايتس‌شوه', arabic: 'أحذية طبية مريحة' },
  { id: 63, categoryNum: 8, categoryTitle: 'الأحذية الخاصة والمنزلية والشتوية', german: 'die Flip-Flops', pronunciation: 'دي فليب فلوبس', arabic: 'شبشب الشاطئ' },

  // --- القسم 9: القبعات والإكسسوارات الشتوية والصيفية ---
  { id: 64, categoryNum: 9, categoryTitle: 'القبعات والإكسسوارات الشتوية والصيفية', german: 'der Gürtel', pronunciation: 'در غيورتل', arabic: 'الحزام' },
  { id: 65, categoryNum: 9, categoryTitle: 'القبعات والإكسسوارات الشتوية والصيفية', german: 'der Hut', pronunciation: 'در هوت', arabic: 'القبعة' },
  { id: 66, categoryNum: 9, categoryTitle: 'القبعات والإكسسوارات الشتوية والصيفية', german: 'die Mütze', pronunciation: 'دي ميتسه', arabic: 'طاقية / قبعة صوفية' },
  { id: 67, categoryNum: 9, categoryTitle: 'القبعات والإكسسوارات الشتوية والصيفية', german: 'der Schal', pronunciation: 'در شال', arabic: 'الوشاح (الكوفية)' },
  { id: 68, categoryNum: 9, categoryTitle: 'القبعات والإكسسوارات الشتوية والصيفية', german: 'die Handschuhe', pronunciation: 'دي هاندشوه', arabic: 'القفازات' },
  { id: 69, categoryNum: 9, categoryTitle: 'القبعات والإكسسوارات الشتوية والصيفية', german: 'das Tuch', pronunciation: 'داس توخ', arabic: 'إشارب الرأس' },
  { id: 70, categoryNum: 9, categoryTitle: 'القبعات والإكسسوارات الشتوية والصيفية', german: 'die Kappe', pronunciation: 'دي كابه', arabic: 'كاب (قبعة رياضية)' },
  { id: 71, categoryNum: 9, categoryTitle: 'القبعات والإكسسوارات الشتوية والصيفية', german: 'der Fächer', pronunciation: 'در فيشر', arabic: 'مروحة يدوية' },
  { id: 72, categoryNum: 9, categoryTitle: 'القبعات والإكسسوارات الشتوية والصيفية', german: 'der Regenschirm', pronunciation: 'در ريغن‌شيرم', arabic: 'مظلة المطر' },
  { id: 73, categoryNum: 9, categoryTitle: 'القبعات والإكسسوارات الشتوية والصيفية', german: 'das Haarband', pronunciation: 'داس هار‌باند', arabic: 'طوق / ربطة الشعر' },
  { id: 74, categoryNum: 9, categoryTitle: 'القبعات والإكسسوارات الشتوية والصيفية', german: 'die Haarnadel', pronunciation: 'دي هار‌نادل', arabic: 'دبوس شعر' },
  { id: 75, categoryNum: 9, categoryTitle: 'القبعات والإكسسوارات الشتوية والصيفية', german: 'die Ohrenschützer', pronunciation: 'دي أورين‌شوتسر', arabic: 'غطاء الأذنين للشتاء' },
  { id: 76, categoryNum: 9, categoryTitle: 'القبعات والإكسسوارات الشتوية والصيفية', german: 'der Fäustling', pronunciation: 'در فويستلينغ', arabic: 'قفاز شتوي' },

  // --- القسم 10: الحقائب والمحافظ والنظارات والمجوهرات ---
  { id: 77, categoryNum: 10, categoryTitle: 'الحقائب والمحافظ والنظارات والمجوهرات', german: 'die Tasche', pronunciation: 'دي تاشه', arabic: 'الحقيبة' },
  { id: 78, categoryNum: 10, categoryTitle: 'الحقائب والمحافظ والنظارات والمجوهرات', german: 'der Rucksack', pronunciation: 'در روكزاك', arabic: 'حقيبة الظهر' },
  { id: 79, categoryNum: 10, categoryTitle: 'الحقائب والمحافظ والنظارات والمجوهرات', german: 'die Brieftasche', pronunciation: 'دي بريفتاشه', arabic: 'المحفظة' },
  { id: 80, categoryNum: 10, categoryTitle: 'الحقائب والمحافظ والنظارات والمجوهرات', german: 'die Brille', pronunciation: 'دي بريله', arabic: 'النظارة' },
  { id: 81, categoryNum: 10, categoryTitle: 'الحقائب والمحافظ والنظارات والمجوهرات', german: 'die Sonnenbrille', pronunciation: 'دي زونين‌بريله', arabic: 'نظارة شمسية' },
  { id: 82, categoryNum: 10, categoryTitle: 'الحقائب والمحافظ والنظارات والمجوهرات', german: 'der Schmuck', pronunciation: 'در شموك', arabic: 'الحلي / المجوهرات' },
  { id: 83, categoryNum: 10, categoryTitle: 'الحقائب والمحافظ والنظارات والمجوهرات', german: 'der Ring', pronunciation: 'در رينغ', arabic: 'الخاتم' },
  { id: 84, categoryNum: 10, categoryTitle: 'الحقائب والمحافظ والنظارات والمجوهرات', german: 'die Kette', pronunciation: 'دي كيته', arabic: 'العقد / السلسلة' },
  { id: 85, categoryNum: 10, categoryTitle: 'الحقائب والمحافظ والنظارات والمجوهرات', german: 'das Armband', pronunciation: 'داس أرمباند', arabic: 'السوار' },
  { id: 86, categoryNum: 10, categoryTitle: 'الحقائب والمحافظ والنظارات والمجوهرات', german: 'die Ohrringe', pronunciation: 'دي أورينغه', arabic: 'الأقراط (الحلق)' },
  { id: 87, categoryNum: 10, categoryTitle: 'الحقائب والمحافظ والنظارات والمجوهرات', german: 'die Armbanduhr', pronunciation: 'دي أرمباند‌أور', arabic: 'ساعة اليد' },
  { id: 88, categoryNum: 10, categoryTitle: 'الحقائب والمحافظ والنظارات والمجوهرات', german: 'der Koffer', pronunciation: 'در كوفر', arabic: 'حقيبة السفر' },
  { id: 89, categoryNum: 10, categoryTitle: 'الحقائب والمحافظ والنظارات والمجوهرات', german: 'die Handtasche', pronunciation: 'دي هاند‌تاشه', arabic: 'حقيبة يد نسائية' },
  { id: 90, categoryNum: 10, categoryTitle: 'الحقائب والمحافظ والنظارات والمجوهرات', german: 'der Geldbörse', pronunciation: 'در غيلد‌بيرزه', arabic: 'محفظة النقود' },
  { id: 91, categoryNum: 10, categoryTitle: 'الحقائب والمحافظ والنظارات والمجوهرات', german: 'die Bauchtasche', pronunciation: 'دي باوخ‌تاشه', arabic: 'حقيبة الخصر' },
  { id: 92, categoryNum: 10, categoryTitle: 'الحقائب والمحافظ والنظارات والمجوهرات', german: 'der Kulturbeutel', pronunciation: 'در كولتور‌بويتل', arabic: 'حقيبة العناية الشخصية' },
  { id: 93, categoryNum: 10, categoryTitle: 'الحقائب والمحافظ والنظارات والمجوهرات', german: 'die Kofferwaage', pronunciation: 'دي كوفر‌ڤاغه', arabic: 'ميزان حقائب السفر' },
  { id: 94, categoryNum: 10, categoryTitle: 'الحقائب والمحافظ والنظارات والمجوهرات', german: 'die Einkaufstasche', pronunciation: 'دي آين‌كاوفس‌تاشه', arabic: 'حقيبة التسوق' },
  { id: 95, categoryNum: 10, categoryTitle: 'الحقائب والمحافظ والنظارات والمجوهرات', german: 'die Brosche', pronunciation: 'دي بروشه', arabic: 'دبوس زينة (بروش)' },
  { id: 96, categoryNum: 10, categoryTitle: 'الحقائب والمحافظ والنظارات والمجوهرات', german: 'das Einstecktuch', pronunciation: 'داس آين‌شتيك‌توخ', arabic: 'منديل جيب البدلة' },
  { id: 97, categoryNum: 10, categoryTitle: 'الحقائب والمحافظ والنظارات والمجوهرات', german: 'die Manschettenknöpfe', pronunciation: 'دي مانشيتين‌كنوپفه', arabic: 'أزرار أكمام القميص' },

  // --- القسم 11: الدولاب ومحتوياته وتخزينه ---
  { id: 98, categoryNum: 11, categoryTitle: 'الدولاب ومحتوياته وتخزينه', german: 'der Kleiderschrank', pronunciation: 'در كلايدر‌شيرانك', arabic: 'دولاب الملابس' },
  { id: 99, categoryNum: 11, categoryTitle: 'الدولاب ومحتوياته وتخزينه', german: 'das Fach', pronunciation: 'داس فاخ', arabic: 'رف الدولاب' },
  { id: 100, categoryNum: 11, categoryTitle: 'الدولاب ومحتوياته وتخزينه', german: 'die Schublade', pronunciation: 'دي شوبلاده', arabic: 'درج الدولاب' },
  { id: 101, categoryNum: 11, categoryTitle: 'الدولاب ومحتوياته وتخزينه', german: 'der Kleiderbügel', pronunciation: 'در كلايدر‌بيوغل', arabic: 'شماعة ملابس' },
  { id: 102, categoryNum: 11, categoryTitle: 'الدولاب ومحتوياته وتخزينه', german: 'die Tür', pronunciation: 'دي تور', arabic: 'باب الدولاب' },
  { id: 103, categoryNum: 11, categoryTitle: 'الدولاب ومحتوياته وتخزينه', german: 'der Spiegel', pronunciation: 'در شبيغل', arabic: 'مرآة الدولاب' },
  { id: 104, categoryNum: 11, categoryTitle: 'الدولاب ومحتوياته وتخزينه', german: 'die Kleiderstange', pronunciation: 'دي كلايدر‌شتانغه', arabic: 'عمود تعليق الملابس' },
  { id: 105, categoryNum: 11, categoryTitle: 'الدولاب ومحتوياته وتخزينه', german: 'der Kleidersack', pronunciation: 'در كلايدر‌زاك', arabic: 'كيس حفظ البدلات' },
  { id: 106, categoryNum: 11, categoryTitle: 'الدولاب ومحتوياته وتخزينه', german: 'die Vakuumtasche', pronunciation: 'دي فاكيوم‌تاشه', arabic: 'كيس تخزين مفرغ' },

  // --- القسم 12: الأقمشة والخامات وأنواع التبطين ---
  { id: 107, categoryNum: 12, categoryTitle: 'الأقمشة والخامات وأنواع التبطين', german: 'die Baumwolle', pronunciation: 'دي باوم‌ڤوله', arabic: 'قطن' },
  { id: 108, categoryNum: 12, categoryTitle: 'الأقمشة والخامات وأنواع التبطين', german: 'die Wolle', pronunciation: 'دي ڤوله', arabic: 'صوف' },
  { id: 109, categoryNum: 12, categoryTitle: 'الأقمشة والخامات وأنواع التبطين', german: 'die Seide', pronunciation: 'دي زايده', arabic: 'حرير' },
  { id: 110, categoryNum: 12, categoryTitle: 'الأقمشة والخامات وأنواع التبطين', german: 'das Leder', pronunciation: 'داس ليدر', arabic: 'جلد' },
  { id: 111, categoryNum: 12, categoryTitle: 'الأقمشة والخامات وأنواع التبطين', german: 'das Leinen', pronunciation: 'داس لاينين', arabic: 'كتان' },
  { id: 112, categoryNum: 12, categoryTitle: 'الأقمشة والخامات وأنواع التبطين', german: 'das Kunstmaterial', pronunciation: 'داس كونسشتوف', arabic: 'ألياف صناعية' },
  { id: 113, categoryNum: 12, categoryTitle: 'الأقمشة والخامات وأنواع التبطين', german: 'der Samt', pronunciation: 'در زامت', arabic: 'قطيفة / مخمل' },
  { id: 114, categoryNum: 12, categoryTitle: 'الأقمشة والخامات وأنواع التبطين', german: 'die Spitze', pronunciation: 'دي شپيتسه', arabic: 'دانتيل / جوبير' },
  { id: 115, categoryNum: 12, categoryTitle: 'الأقمشة والخامات وأنواع التبطين', german: 'der Chiffon', pronunciation: 'در شيفون', arabic: 'قماش الشيفون' },
  { id: 116, categoryNum: 12, categoryTitle: 'الأقمشة والخامات وأنواع التبطين', german: 'das Satin', pronunciation: 'داس ساتين', arabic: 'قماش الساتان' },
  { id: 117, categoryNum: 12, categoryTitle: 'الأقمشة والخامات وأنواع التبطين', german: 'der Fleece', pronunciation: 'در فليس', arabic: 'قماش الفليس' },
  { id: 118, categoryNum: 12, categoryTitle: 'الأقمشة والخامات وأنواع التبطين', german: 'das Futter', pronunciation: 'داس فُوتر', arabic: 'بطانة الملابس' },
  { id: 119, categoryNum: 12, categoryTitle: 'الأقمشة والخامات وأنواع التبطين', german: 'die Daune', pronunciation: 'دي داونه', arabic: 'ريش لتبطين المعاطف' },
  { id: 120, categoryNum: 12, categoryTitle: 'الأقمشة والخامات وأنواع التبطين', german: 'das Thermalgewebe', pronunciation: 'داس تيرمال‌غِڤيبه', arabic: 'قماش حراري عازل' },

  // --- القسم 13: النقوش والأنماط والألوان الأساسية ---
  { id: 121, categoryNum: 13, categoryTitle: 'النقوش والأنماط والألوان الأساسية', german: 'gestreift', pronunciation: 'غِشترايفت', arabic: 'مخطط / مقلم' },
  { id: 122, categoryNum: 13, categoryTitle: 'النقوش والأنماط والألوان الأساسية', german: 'gepunktet', pronunciation: 'غِپونكتيت', arabic: 'منقط' },
  { id: 123, categoryNum: 13, categoryTitle: 'النقوش والأنماط والألوان الأساسية', german: 'kariert', pronunciation: 'كارييرت', arabic: 'مكارِه / مربعات' },
  { id: 124, categoryNum: 13, categoryTitle: 'النقوش والأنماط والألوان الأساسية', german: 'unifarben', pronunciation: 'ئوني‌فاربين', arabic: 'لون سادة / موحد' },
  { id: 125, categoryNum: 13, categoryTitle: 'النقوش والأنماط والألوان الأساسية', german: 'blumig', pronunciation: 'بلوميغ', arabic: 'منقوش بالزهور' },
  { id: 126, categoryNum: 13, categoryTitle: 'النقوش والأنماط والألوان الأساسية', german: 'schwarz', pronunciation: 'شفارتس', arabic: 'أسود' },
  { id: 127, categoryNum: 13, categoryTitle: 'النقوش والأنماط والألوان الأساسية', german: 'weiß', pronunciation: 'ڤايس', arabic: 'أبيض' },
  { id: 128, categoryNum: 13, categoryTitle: 'النقوش والأنماط والألوان الأساسية', german: 'blau', pronunciation: 'بلاو', arabic: 'أزرق' },
  { id: 129, categoryNum: 13, categoryTitle: 'النقوش والأنماط والألوان الأساسية', german: 'rot', pronunciation: 'روت', arabic: 'أحمر' },
  { id: 130, categoryNum: 13, categoryTitle: 'النقوش والأنماط والألوان الأساسية', german: 'grün', pronunciation: 'غرون', arabic: 'أخضر' },
  { id: 131, categoryNum: 13, categoryTitle: 'النقوش والأنماط والألوان الأساسية', german: 'bunt', pronunciation: 'بونت', arabic: 'ملون / متعدد الألوان' },

  // --- القسم 14: العناية بالملابس والغسيل والكي ---
  { id: 132, categoryNum: 14, categoryTitle: 'العناية بالملابس والغسيل والكي', german: 'die Waschmaschine', pronunciation: 'دي فاش‌ماشينه', arabic: 'غسالة الملابس' },
  { id: 133, categoryNum: 14, categoryTitle: 'العناية بالملابس والغسيل والكي', german: 'das Waschmittel', pronunciation: 'داس فاش‌ميتل', arabic: 'مسحوق الغسيل' },
  { id: 134, categoryNum: 14, categoryTitle: 'العناية بالملابس والغسيل والكي', german: 'das Bügeleisen', pronunciation: 'داس بيغل‌ايزن', arabic: 'المكواة' },
  { id: 135, categoryNum: 14, categoryTitle: 'العناية بالملابس والغسيل والكي', german: 'bügeln', pronunciation: 'بيغلن', arabic: 'يكوي الملابس' },
  { id: 136, categoryNum: 14, categoryTitle: 'العناية بالملابس والغسيل والكي', german: 'waschen', pronunciation: 'فاشن', arabic: 'يغسل' },
  { id: 137, categoryNum: 14, categoryTitle: 'العناية بالملابس والغسيل والكي', german: 'die Wäscheleine', pronunciation: 'دي فاش‌لاينه', arabic: 'حبل الغسيل' },
  { id: 138, categoryNum: 14, categoryTitle: 'العناية بالملابس والغسيل والكي', german: 'der Wäschetrockner', pronunciation: 'در فاشه‌تروكنر', arabic: 'مجفف الملابس' },
  { id: 139, categoryNum: 14, categoryTitle: 'العناية بالملابس والغسيل والكي', german: 'der Wäschekorb', pronunciation: 'در فاشه‌كورب', arabic: 'سلة الغسيل' },
  { id: 140, categoryNum: 14, categoryTitle: 'العناية بالملابس والغسيل والكي', german: 'das Bügelbrett', pronunciation: 'داس بيغل‌بريت', arabic: 'طاولة الكي' },
  { id: 141, categoryNum: 14, categoryTitle: 'العناية بالملابس والغسيل والكي', german: 'die Fusselrolle', pronunciation: 'دي فوسل‌روله', arabic: 'بكرة إزالة الوبر' },
  { id: 142, categoryNum: 14, categoryTitle: 'العناية بالملابس والغسيل والكي', german: 'der Kleiderdampfer', pronunciation: 'در كلايدر‌دامپفر', arabic: 'جهاز البخار اليدوي' },
  { id: 143, categoryNum: 14, categoryTitle: 'العناية بالملابس والغسيل والكي', german: 'der Fleckenentferner', pronunciation: 'در فليكين‌إنتفيرنر', arabic: 'مزيل البقع' },
  { id: 144, categoryNum: 14, categoryTitle: 'العناية بالملابس والغسيل والكي', german: 'der Weichspüler', pronunciation: 'در ڤايخ‌شپولر', arabic: 'منعم الأقمشة' },

  // --- القسم 15: عيوب الملابس وعلامات الإرشادات ---
  { id: 145, categoryNum: 15, categoryTitle: 'عيوب الملابس وعلامات الإرشادات', german: 'das Etikett', pronunciation: 'داس إتيكيت', arabic: 'ملصق العناية / التكت' },
  { id: 146, categoryNum: 15, categoryTitle: 'عيوب الملابس وعلامات الإرشادات', german: 'Handwäsche', pronunciation: 'هاند‌فِشه', arabic: 'غسيل يدوي فقط' },
  { id: 147, categoryNum: 15, categoryTitle: 'عيوب الملابس وعلامات الإرشادات', german: 'nicht bügeln', pronunciation: 'نيشت بيغلن', arabic: 'ممنوع الكوي' },
  { id: 148, categoryNum: 15, categoryTitle: 'عيوب الملابس وعلامات الإرشادات', german: 'der Fleck', pronunciation: 'در فليك', arabic: 'البقعة' },
  { id: 149, categoryNum: 15, categoryTitle: 'عيوب الملابس وعلامات الإرشادات', german: 'das Loch', pronunciation: 'داس لوخ', arabic: 'الثقب / الخرق' },
  { id: 150, categoryNum: 15, categoryTitle: 'عيوب الملابس وعلامات الإرشادات', german: 'zerrißen', pronunciation: 'تسيريسن', arabic: 'ممزق' },

  // --- القسم 16: تفاصيل الثوب وأزراره وسحاباته ---
  { id: 151, categoryNum: 16, categoryTitle: 'تفاصيل الثوب وأزراره وسحاباته', german: 'der Knopf', pronunciation: 'در كنوپف', arabic: 'الزر (زرار)' },
  { id: 152, categoryNum: 16, categoryTitle: 'تفاصيل الثوب وأزراره وسحاباته', german: 'der Reißverschluss', pronunciation: 'در رايس‌فيرشْلوس', arabic: 'السحاب (السوستة)' },
  { id: 153, categoryNum: 16, categoryTitle: 'تفاصيل الثوب وأزراره وسحاباته', german: 'die Tasche', pronunciation: 'دي تاشه', arabic: 'الجيب' },
  { id: 154, categoryNum: 16, categoryTitle: 'تفاصيل الثوب وأزراره وسحاباته', german: 'der Kragen', pronunciation: 'در كراغن', arabic: 'ياقة القميص' },
  { id: 155, categoryNum: 16, categoryTitle: 'تفاصيل الثوب وأزراره وسحاباته', german: 'der Ärmel', pronunciation: 'در إيرمل', arabic: 'الكم' },
  { id: 156, categoryNum: 16, categoryTitle: 'تفاصيل الثوب وأزراره وسحاباته', german: 'die Schleife', pronunciation: 'دي شلايفه', arabic: 'الفيونكة / العقدة' },
  { id: 157, categoryNum: 16, categoryTitle: 'تفاصيل الثوب وأزراره وسحاباته', german: 'die Kapuze', pronunciation: 'دي كابوتسه', arabic: 'غطاء الرأس (القلنسوة)' },
  { id: 158, categoryNum: 16, categoryTitle: 'تفاصيل الثوب وأزراره وسحاباته', german: 'der Saum', pronunciation: 'در زاوم', arabic: 'حاشية الثوب' },

  // --- القسم 17: أدوات الخياطة والتفصيل وأجزاء الأحذية ---
  { id: 159, categoryNum: 17, categoryTitle: 'أدوات الخياطة والتفصيل وأجزاء الأحذية', german: 'die Nadel', pronunciation: 'دي نادل', arabic: 'الإبرة' },
  { id: 160, categoryNum: 17, categoryTitle: 'أدوات الخياطة والتفصيل وأجزاء الأحذية', german: 'der Faden', pronunciation: 'در فادن', arabic: 'الخيط' },
  { id: 161, categoryNum: 17, categoryTitle: 'أدوات الخياطة والتفصيل وأجزاء الأحذية', german: 'die Schere', pronunciation: 'دي شيره', arabic: 'المقص' },
  { id: 162, categoryNum: 17, categoryTitle: 'أدوات الخياطة والتفصيل وأجزاء الأحذية', german: 'das Maßband', pronunciation: 'داس ماس‌باند', arabic: 'شريط القياس (المازورة)' },
  { id: 163, categoryNum: 17, categoryTitle: 'أدوات الخياطة والتفصيل وأجزاء الأحذية', german: 'در شْنور‌زنكل', german: 'der Schnürsenkel', pronunciation: 'در شْنور‌زنكل', arabic: 'رباط الحذاء' },
  { id: 164, categoryNum: 17, categoryTitle: 'أدوات الخياطة والتفصيل وأجزاء الأحذية', german: 'die Sohle', pronunciation: 'دي زوله', arabic: 'نعل الحذاء' },
  { id: 165, categoryNum: 17, categoryTitle: 'أدوات الخياطة والتفصيل وأجزاء الأحذية', german: 'der Absatz', pronunciation: 'در أبزاتس', arabic: 'كعب الحذاء' },
  { id: 166, categoryNum: 17, categoryTitle: 'أدوات الخياطة والتفصيل وأجزاء الأحذية', german: 'die Schuhcreme', pronunciation: 'دي شويه‌كريم', arabic: 'ورنيش الأحذية' },
  { id: 167, categoryNum: 17, categoryTitle: 'أدوات الخياطة والتفصيل وأجزاء الأحذية', german: 'der Schuhlöffel', pronunciation: 'در شويه‌ليفيل', arabic: 'لباسة الحذاء' },
  { id: 168, categoryNum: 17, categoryTitle: 'أدوات الخياطة والتفصيل وأجزاء الأحذية', german: 'die Schuhbürste', pronunciation: 'دي شويه‌بيورسته', arabic: 'فرشاة تنظيف الأحذية' },
  { id: 169, categoryNum: 17, categoryTitle: 'أدوات الخياطة والتفصيل وأجزاء الأحذية', german: 'der Hosenträger', pronunciation: 'در هوزين‌تريغر', arabic: 'حمالات البنطال' },
  { id: 170, categoryNum: 17, categoryTitle: 'أدوات الخياطة والتفصيل وأجزاء الأحذية', german: 'die Sicherheitsnadel', pronunciation: 'دي زيشرهايتس‌نادل', arabic: 'دبوس المشبك الآمن' },
  { id: 171, categoryNum: 17, categoryTitle: 'أدوات الخياطة والتفصيل وأجزاء الأحذية', german: 'das Schneiderkissen', pronunciation: 'داس شنايدر‌كيسن', arabic: 'وسادة دبابيس الخياطة' },
  { id: 172, categoryNum: 17, categoryTitle: 'أدوات الخياطة والتفصيل وأجزاء الأحذية', german: 'die Schneiderkreide', pronunciation: 'دي شنايدر‌كرايده', arabic: 'طباشير تفصيل الملابس' },
  { id: 173, categoryNum: 17, categoryTitle: 'أدوات الخياطة والتفصيل وأجزاء الأحذية', german: 'der Abnäher', pronunciation: 'در آب‌نير', arabic: 'بننسة الخياطة' },

  // --- القسم 18: التسوق والمقاسات والفواتير والخصومات ---
  { id: 174, categoryNum: 18, categoryTitle: 'التسوق والمقاسات والفواتير والخصومات', german: 'die Umkleidekabine', pronunciation: 'دي أوم‌كلايده‌كابينه', arabic: 'غرفة قياس الملابس (البروفا)' },
  { id: 175, categoryNum: 18, categoryTitle: 'التسوق والمقاسات والفواتير والخصومات', german: 'der Rabatt', pronunciation: 'در رابات', arabic: 'الخصم / التخفيض' },
  { id: 176, categoryNum: 18, categoryTitle: 'التسوق والمقاسات والفواتير والخصومات', german: 'die Quittung', pronunciation: 'دي كفيتونغ', arabic: 'فاتورة الشراء / الإيصال' },
  { id: 177, categoryNum: 18, categoryTitle: 'التسوق والمقاسات والفواتير والخصومات', german: 'umtauschen', pronunciation: 'أوم‌تاوشن', arabic: 'يستبدل / يغير البضاعة' },
  { id: 178, categoryNum: 18, categoryTitle: 'التسوق والمقاسات والفواتير والخصومات', german: 'eng', pronunciation: 'إينغ', arabic: 'ضيّق' },
  { id: 179, categoryNum: 18, categoryTitle: 'التسوق والمقاسات والفواتير والخصومات', german: 'weit', pronunciation: 'ڤايت', arabic: 'واسع / فضفاض' },
  { id: 180, categoryNum: 18, categoryTitle: 'التسوق والمقاسات والفواتير والخصومات', german: 'bequem', pronunciation: 'بِكڤيم', arabic: 'مريح' },
  { id: 181, categoryNum: 18, categoryTitle: 'التسوق والمقاسات والفواتير والخصومات', german: 'chic', pronunciation: 'شيك', arabic: 'أنيق / جذاب' },
  { id: 182, categoryNum: 18, categoryTitle: 'التسوق والمقاسات والفواتير والخصومات', german: 'die Größe', pronunciation: 'دي غريوسه', arabic: 'المقاس' },
  { id: 183, categoryNum: 18, categoryTitle: 'التسوق والمقاسات والفواتير والخصومات', german: 'die Mode', pronunciation: 'دي موده', arabic: 'الموضة' },
  { id: 184, categoryNum: 18, categoryTitle: 'التسوق والمقاسات والفواتير والخصومات', german: 'der Stoff', pronunciation: 'در شتوف', arabic: 'القماش' },
  { id: 185, categoryNum: 18, categoryTitle: 'التسوق والمقاسات والفواتير والخصومات', german: 'die Naht', pronunciation: 'دي نات', arabic: 'الخياطة' },
  { id: 186, categoryNum: 18, categoryTitle: 'التسوق والمقاسات والفواتير والخصومات', german: 'anziehen', pronunciation: 'آنتسيين', arabic: 'يلبس' },
  { id: 187, categoryNum: 18, categoryTitle: 'التسوق والمقاسات والفواتير والخصومات', german: 'ausziehen', pronunciation: 'آوستسيين', arabic: 'يخلع' },
  { id: 188, categoryNum: 18, categoryTitle: 'التسوق والمقاسات والفواتير والخصومات', german: 'sich umziehen', pronunciation: 'زيخ أوم‌تسيين', arabic: 'يغير الملابس' },
  { id: 189, categoryNum: 18, categoryTitle: 'التسوق والمقاسات والفواتير والخصومات', german: 'anprobieren', pronunciation: 'آن‌پروبيرن', arabic: 'يقيس ملابس' },
  { id: 190, categoryNum: 18, categoryTitle: 'التسوق والمقاسات والفواتير والخصومات', german: 'passen', pronunciation: 'پاسن', arabic: 'يُناسب / يَليق' },
  { id: 191, categoryNum: 18, categoryTitle: 'التسوق والمقاسات والفواتير والخصومات', german: 'die Konfektionsgröße', pronunciation: 'دي كونفيكتيونز‌غريوسه', arabic: 'مقاس الملابس القياسي' },
  { id: 192, categoryNum: 18, categoryTitle: 'التسوق والمقاسات والفواتير والخصومات', german: 'der V-Ausschnitt', pronunciation: 'در فايلاند‌أوسشنيت', arabic: 'ياقة على شكل V' },
  { id: 193, categoryNum: 18, categoryTitle: 'التسوق والمقاسات والفواتير والخصومات', german: 'reklamieren', pronunciation: 'ريكلاميرن', arabic: 'يقدم شكوى / بضاعة معيبة' },

  // --- القسم 19: ملابس الطقس الحار والصيفي والموسمي ---
  { id: 194, categoryNum: 19, categoryTitle: 'ملابس الطقس الحار والصيفي والموسمي', german: 'der Regenmantel', pronunciation: 'در ريغن‌مانتل', arabic: 'معطف المطر' },
  { id: 195, categoryNum: 19, categoryTitle: 'ملابس الطقس الحار والصيفي والموسمي', german: 'die Winterjacke', pronunciation: 'دي ڤينتر‌ياكه', arabic: 'جاكيت الشتاء' },
  { id: 196, categoryNum: 19, categoryTitle: 'ملابس الطقس الحار والصيفي والموسمي', german: 'die Sommerkleidung', pronunciation: 'دي زومر‌كلايدونغ', arabic: 'ملابس الصيف' },
  { id: 197, categoryNum: 19, categoryTitle: 'ملابس الطقس الحار والصيفي والموسمي', german: 'die Windjacke', pronunciation: 'دي ڤيند‌ياكه', arabic: 'سترة واقية للرياح' },
  { id: 198, categoryNum: 19, categoryTitle: 'ملابس الطقس الحار والصيفي والموسمي', german: 'der Eiskratzer', pronunciation: 'در آيس‌كراتسر', arabic: 'قاشطة الجليد' },
  { id: 199, categoryNum: 19, categoryTitle: 'ملابس الطقس الحار والصيفي والموسمي', german: 'die Thermounterwäsche', pronunciation: 'دي تيرمو‌أونترفيشه', arabic: 'ملابس حرارية' },
  { id: 200, categoryNum: 19, categoryTitle: 'ملابس الطقس الحار والصيفي والموسمي', german: 'der Sonnenhut', pronunciation: 'در زونين‌هوت', arabic: 'قبعة الشمس العريضة' },
  { id: 201, categoryNum: 19, categoryTitle: 'ملابس الطقس الحار والصيفي والموسمي', german: 'das Strandtuch', pronunciation: 'داس شتراند‌توخ', arabic: 'منشفة الشاطئ' },
  { id: 202, categoryNum: 19, categoryTitle: 'ملابس الطقس الحار والصيفي والموسمي', german: 'der Ostfriesennerz', pronunciation: 'در أوست‌فريزن‌نيرتس', arabic: 'معطف المطر الأصفر' },

  // --- القسم 20: أزياء المهن والتقليدية والتنكرية والعطور ---
  { id: 203, categoryNum: 20, categoryTitle: 'أزياء المهن والتقليدية والتنكرية والعطور', german: 'das Kostüm', pronunciation: 'داس كوستيوم', arabic: 'الزي التنكري' },
  { id: 204, categoryNum: 20, categoryTitle: 'أزياء المهن والتقليدية والتنكرية والعطور', german: 'die Maske', pronunciation: 'دي ماسكه', arabic: 'القناع' },
  { id: 205, categoryNum: 20, categoryTitle: 'أزياء المهن والتقليدية والتنكرية والعطور', german: 'das Trikot', pronunciation: 'داس تريكو', arabic: 'قميص الفريق الرياضي' },
  { id: 206, categoryNum: 20, categoryTitle: 'أزياء المهن والتقليدية والتنكرية والعطور', german: 'die Leggings', pronunciation: 'دي ليغينغز', arabic: 'بنطال رياضي ضيق (ليجنز)' },
  { id: 207, categoryNum: 20, categoryTitle: 'أزياء المهن والتقليدية والتنكرية والعطور', german: 'die Perücke', pronunciation: 'دي بوريکه', arabic: 'باروكة شعر' },
  { id: 208, categoryNum: 20, categoryTitle: 'أزياء المهن والتقليدية والتنكرية والعطور', german: 'der Umhang', pronunciation: 'در أوم‌هانغ', arabic: 'العباءة / الرداء الطويل' },
  { id: 209, categoryNum: 20, categoryTitle: 'أزياء المهن والتقليدية والتنكرية والعطور', german: 'die Tracht', pronunciation: 'دي تراخت', arabic: 'الزي التقليدي الشعبي' },
  { id: 210, categoryNum: 20, categoryTitle: 'أزياء المهن والتقليدية والتنكرية والعطور', german: 'das Dirndl', pronunciation: 'داس ديرندل', arabic: 'الفستان البافاري' },
  { id: 211, categoryNum: 20, categoryTitle: 'أزياء المهن والتقليدية والتنكرية والعطور', german: 'die Lederhose', pronunciation: 'دي ليدر‌هوزه', arabic: 'البنطال الجلدي' },
  { id: 212, categoryNum: 20, categoryTitle: 'أزياء المهن والتقليدية والتنكرية والعطور', german: 'die Uniform', pronunciation: 'دي يونيفورم', arabic: 'الزي الرسمي / الموحد' },
  { id: 213, categoryNum: 20, categoryTitle: 'أزياء المهن والتقليدية والتنكرية والعطور', german: 'der Kittel', pronunciation: 'در كيتل', arabic: 'البالطو المهني' },
  { id: 214, categoryNum: 20, categoryTitle: 'أزياء المهن والتقليدية والتنكرية والعطور', german: 'die Schürze', pronunciation: 'دي شورتسه', arabic: 'مريلة العمل' },
  { id: 215, categoryNum: 20, categoryTitle: 'أزياء المهن والتقليدية والتنكرية والعطور', german: 'die Warnweste', pronunciation: 'دي ڤارن‌ڤيسته', arabic: 'سترة السلامة الفسفورية' },
  { id: 216, categoryNum: 20, categoryTitle: 'أزياء المهن والتقليدية والتنكرية والعطور', german: 'der Schutzhelm', pronunciation: 'در شوتس‌هيلم', arabic: 'خوذة الحماية' },
  { id: 217, categoryNum: 20, categoryTitle: 'أزياء المهن والتقليدية والتنكرية والعطور', german: 'das Parfüm', pronunciation: 'داس بارفيوم', arabic: 'العطر' },
  { id: 218, categoryNum: 20, categoryTitle: 'أزياء المهن والتقليدية والتنكرية والعطور', german: 'das Deo', pronunciation: 'داس ديو', arabic: 'مزيل العرق' },
  { id: 219, categoryNum: 20, categoryTitle: 'أزياء المهن والتقليدية والتنكرية والعطور', german: 'der Haartrockner', pronunciation: 'در هار‌تروكنر', arabic: 'مجفف الشعر (سشوار)' },
  { id: 220, categoryNum: 20, categoryTitle: 'أزياء المهن والتقليدية والتنكرية والعطور', german: 'der Blaumann', pronunciation: 'در بلاومان', arabic: 'عفريتة العمل الزرقاء' }
];

// استخراج الأقسام الفرعية بشكل فريد للقائمة المنسدلة
const categoriesList = Array.from(
  new Map(extendedClothesData.map((item) => [item.categoryNum, item.categoryTitle])).entries()
).map(([num, title]) => ({ num, title }));

export default function GermanCategorizedClothesPage() {
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

  const scrollToCategory = (categoryNum) => {
    if (!categoryNum) return;
    const element = document.getElementById(`category-sec-${categoryNum}`);
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

  const filteredData = extendedClothesData.filter(
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
          font-size: 1.5rem;
          font-weight: 900;
          margin-bottom: 20px;
          color: inherit;
        }
        /* تصميم القائمة المنسدلة الاحترافية بعد العنوان الرئيسي */
        .dropdown-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 25px;
          width: 100%;
        }
        .custom-select-container {
          position: relative;
          width: 90%;
          max-width: 90%;
        }
        .category-dropdown {
          width: 100%;
          padding: 12px 20px 12px 45px;
          border-radius: 25px;
          border: 2px solid #00bfff;
          background: rgba(0, 191, 255, 0.05);
          color: inherit;
          font-size: 0.95rem;
          font-weight: 900;
          outline: none;
          box-sizing: border-box;
          direction: rtl;
          cursor: pointer;
          appearance: none;
          transition: all 0.3s ease;
        }
        .category-dropdown:hover, .category-dropdown:focus {
          border-color: #ff3333;
          background: rgba(255, 51, 51, 0.05);
        }
        .dropdown-icon {
          position: absolute;
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
          color: #00bfff;
          font-size: 1rem;
          pointer-events: none;
        }
        .category-dropdown option {
          background-color: #1a1a1a;
          color: #ffffff;
          padding: 10px;
          font-weight: bold;
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
          scroll-margin-top: 20px;
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

      {/* العنوان الرئيسي */}
      <h1 className="page-title">قسم الملابس والدولاب الشامل</h1>

      {/* القائمة المنسدلة (Drop-down) بعد العنوان الرئيسي مباشرة */}
      <div className="dropdown-wrapper">
        <div className="custom-select-container">
          <select
            className="category-dropdown"
            onChange={(e) => scrollToCategory(e.target.value)}
            defaultValue=""
          >
            <option value="" disabled>
              📂 تصفح وانتقل إلى أي قسم (اختر القسم)...
            </option>
            {categoriesList.map((cat) => (
              <option key={cat.num} value={cat.num}>
                القسم ({cat.num}) : {cat.title}
              </option>
            ))}
          </select>
          <span className="dropdown-icon">▼</span>
        </div>
      </div>

      {/* حقل البحث */}
      <div className="search-container">
        <input
          type="text"
          placeholder="ابحث عن كلمة ألمانية أو عربية أو قسم..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {/* حاوية الكروت والأقسام */}
      <div className="cards-container">
        {filteredData.map((item) => {
          const showHeading = item.categoryNum !== lastCategoryNum;
          lastCategoryNum = item.categoryNum;

          return (
            <React.Fragment key={item.id}>
              {showHeading && (
                <div
                  id={`category-sec-${item.categoryNum}`}
                  className="category-heading"
                >
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
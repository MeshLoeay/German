import React, { useState } from 'react';

const travelData = [
  // مجموعة 1: المفردات الأساسية (الصور 1 - 40)
  { id: 1, german: "die Reise", arabic: "الرحلة", pronunciation: "دي رايزه", group: "المفردات الأساسية" },
  { id: 2, german: "der Urlaub", arabic: "العطلة", pronunciation: "دِر أورلاوب", group: "المفردات الأساسية" },
  { id: 3, german: "das Ticket", arabic: "التذكرة", pronunciation: "داس تيكت", group: "المفردات الأساسية" },
  { id: 4, german: "der Pass", arabic: "جواز السفر", pronunciation: "دِر پاس", group: "المفردات الأساسية" },
  { id: 5, german: "der Koffer", arabic: "الحقيبة", pronunciation: "دِر كوفر", group: "المفردات الأساسية" },
  { id: 6, german: "der Rucksack", arabic: "حقيبة الظهر", pronunciation: "دِر روكساك", group: "المفردات الأساسية" },
  { id: 7, german: "die Grenze", arabic: "الحدود", pronunciation: "دي غريبنتسه", group: "المفردات الأساسية" },
  { id: 8, german: "das Ausland", arabic: "الخارج", pronunciation: "داس أوسلانت", group: "المفردات الأساسية" },
  { id: 9, german: "die Botschaft", arabic: "السفارة", pronunciation: "دي بوتشافت", group: "المفردات الأساسية" },
  { id: 10, german: "das Visum", arabic: "التأشيرة", pronunciation: "داس فيزوم", group: "المفردات الأساسية" },
  { id: 11, german: "der Zoll", arabic: "الجمارك", pronunciation: "دِر تسول", group: "المفردات الأساسية" },
  { id: 12, german: "die Versicherung", arabic: "التأمين", pronunciation: "دي فرزيشرونغ", group: "المفردات الأساسية" },
  { id: 13, german: "der Flug", arabic: "الرحلة الجوية", pronunciation: "دِر فلوغ", group: "المفردات الأساسية" },
  { id: 14, german: "der Flughafen", arabic: "المطار", pronunciation: "دِر فلوغهافن", group: "المفردات الأساسية" },
  { id: 15, german: "das Terminal", arabic: "الصالة", pronunciation: "داس تيرمينال", group: "المفردات الأساسية" },
  { id: 16, german: "der Sitzplatz", arabic: "المقعد", pronunciation: "دِر زيتسپلاتس", group: "المفردات الأساسية" },
  { id: 17, german: "das Gepäck", arabic: "الأمتعة", pronunciation: "داس غيبك", group: "المفردات الأساسية" },
  { id: 18, german: "die Ankunft", arabic: "الوصول", pronunciation: "دي آنكونفت", group: "المفردات الأساسية" },
  { id: 19, german: "die Abfahrt", arabic: "المغادرة", pronunciation: "دي أبفارت", group: "المفردات الأساسية" },
  { id: 20, german: "die Verspätung", arabic: "التأخير", pronunciation: "دي فيرشبيتونغ", group: "المفردات الأساسية" },
  { id: 21, german: "die Reservierung", arabic: "الحجز", pronunciation: "دي رزيرفيرونغ", group: "المفردات الأساسية" },
  { id: 22, german: "die Rezeption", arabic: "الاستقبال", pronunciation: "دي ريتسيبسيون", group: "المفردات الأساسية" },
  { id: 23, german: "der Aufenthalt", arabic: "الإقامة", pronunciation: "دِر أوفنتهالت", group: "المفردات الأساسية" },
  { id: 24, german: "die Sehenswürdigkeit", arabic: "المعلم السياحي", pronunciation: "دي زيهنسفيورديكايت", group: "المفردات الأساسية" },
  { id: 25, german: "das Denkmal", arabic: "النصب التذكاري", pronunciation: "داس دينكمال", group: "المفردات الأساسية" },
  { id: 26, german: "die Führung", arabic: "الجولة", pronunciation: "دي فيورونغ", group: "المفردات الأساسية" },
  { id: 27, german: "der Reiseführer", arabic: "المرشد السياحي", pronunciation: "دِر رايزفيورر", group: "المفردات الأساسية" },
  { id: 28, german: "die Postkarte", arabic: "البطاقة البريدية", pronunciation: "دي پوستكارته", group: "المفردات الأساسية" },
  { id: 29, german: "das Souvenir", arabic: "الهدية التذكارية", pronunciation: "داس زوفينير", group: "المفردات الأساسية" },
  { id: 30, german: "das Geld", arabic: "المال", pronunciation: "داس غيلت", group: "المفردات الأساسية" },
  { id: 31, german: "die Währung", arabic: "العملة", pronunciation: "دي فيرونغ", group: "المفردات الأساسية" },
  { id: 32, german: "der Wechselkurs", arabic: "سعر الصرف", pronunciation: "دِر فيكسل كورس", group: "المفردات الأساسية" },
  { id: 33, german: "die Kreditkarte", arabic: "بطاقة الائتمان", pronunciation: "دي كريديتكارته", group: "المفردات الأساسية" },
  { id: 34, german: "das Bargeld", arabic: "النقد", pronunciation: "داس بارغيلت", group: "المفردات الأساسية" },
  { id: 35, german: "das Trinkgeld", arabic: "البقشيش", pronunciation: "داس ترينكغيلت", group: "المفردات الأساسية" },
  { id: 36, german: "die Buchung", arabic: "الحجز", pronunciation: "دي بوخونغ", group: "المفردات الأساسية" },
  { id: 37, german: "die Rundreise", arabic: "الجولة", pronunciation: "دي روندرايزه", group: "المفردات الأساسية" },
  { id: 38, german: "das Abenteuer", arabic: "المغامرة", pronunciation: "داس أبنتوير", group: "المفردات الأساسية" },
  { id: 39, german: "die Unterkunft", arabic: "المأوى / سكن الإقامة", pronunciation: "دي أونتركونفت", group: "المفردات الأساسية" },
  { id: 40, german: "der Kiosk", arabic: "الكشك", pronunciation: "دِر كيوسك", group: "المفردات الأساسية" },

  // مجموعة 2: الفنادق ووسائل النقل والمطار
  { id: 41, german: "das Hotel", arabic: "الفندق", pronunciation: "داس هوتيل", group: "الفنادق ووسائل النقل والمطار" },
  { id: 42, german: "die Flugkarte", arabic: "تذكرة الطيران", pronunciation: "دي فلوغكارته", group: "الفنادق ووسائل النقل والمطار" },
  { id: 43, german: "der Bahnhof", arabic: "محطة القطار", pronunciation: "دِر باهن هوف", group: "الفنادق ووسائل النقل والمطار" },
  { id: 44, german: "das Gleis", arabic: "رصيف القطار", pronunciation: "داس غلايس", group: "الفنادق ووسائل النقل والمطار" },
  { id: 45, german: "der Flugsteig", arabic: "بوابة المغادرة (Gate)", pronunciation: "دِر فلوغشتايغ", group: "الفنادق ووسائل النقل والمطار" },
  { id: 46, german: "die Bordkarte", arabic: "بطاقة الصعود للطائرة", pronunciation: "دي بوردكارته", group: "الفنادق ووسائل النقل والمطار" },
  { id: 47, german: "der Personalausweis", arabic: "بطاقة الهوية الشخصية", pronunciation: "دِر بيرسونال أوسفايس", group: "الفنادق ووسائل النقل والمطار" },
  { id: 48, german: "das Einzelzimmer", arabic: "غرفة مفردة", pronunciation: "داس آينتسل تسيمر", group: "الفنادق ووسائل النقل والمطار" },
  { id: 49, german: "das Doppelzimmer", arabic: "غرفة مزدوجة", pronunciation: "داس دوپل تسيمر", group: "الفنادق ووسائل النقل والمطار" },
  { id: 50, german: "die Vollpension", arabic: "إقامة كاملة مع الوجبات", pronunciation: "دي فول بنسيون", group: "الفنادق ووسائل النقل والمطار" },
  { id: 51, german: "die Halbpension", arabic: "إقامة مع وجبتين", pronunciation: "دي هالب بنسيون", group: "الفنادق ووسائل النقل والمطار" },
  { id: 52, german: "der Mietwagen", arabic: "سيارة مستأجرة", pronunciation: "دِر ميت فاغن", group: "الفنادق ووسائل النقل والمطار" },
  { id: 53, german: "die Reiseagentur", arabic: "وكالة السفر", pronunciation: "دي رايزه أجينتور", group: "الفنادق ووسائل النقل والمطار" },
  { id: 54, german: "der Tourist", arabic: "السائح", pronunciation: "دِر تور يست", group: "الفنادق ووسائل النقل والمطار" },
  { id: 55, german: "die Passkontrolle", arabic: "تفتيش الجوازات", pronunciation: "دي پاس كونتروله", group: "الفنادق ووسائل النقل والمطار" },
  { id: 56, german: "die Sicherheitskontrolle", arabic: "التفتيش الأمني", pronunciation: "دي زيشرهليتس كونتروله", group: "الفنادق ووسائل النقل والمطار" },
  { id: 57, german: "das Handgepäck", arabic: "أمتعة اليد", pronunciation: "داس هاند غيبك", group: "الفنادق ووسائل النقل والمطار" },
  { id: 58, german: "die Gepäckausgabe", arabic: "منطقة استلام الأمتعة", pronunciation: "دي غيبك أوسغابه", group: "الفنادق ووسائل النقل والمطار" },
  { id: 59, german: "der Informationsschalter", arabic: "مكتب الاستعلامات", pronunciation: "دِر إنفورماسيونس شالتر", group: "الفنادق ووسائل النقل والمطار" },
  { id: 60, german: "die Stadtrundfahrt", arabic: "جولة حول المدينة", pronunciation: "دي شتاتوند فارت", group: "الفنادق ووسائل النقل والمطار" },
  { id: 61, german: "die Reiseversicherung", arabic: "تأمين السفر", pronunciation: "دي رايزه فيرزيشرونغ", group: "الفنادق ووسائل النقل والمطار" },
  { id: 62, german: "der Schalter", arabic: "شباك التذاكر / كاونتر الخدمة", pronunciation: "دِر شالتر", group: "الفنادق ووسائل النقل والمطار" },
  { id: 63, german: "das Konsulat", arabic: "القنصلية", pronunciation: "داس كونسولات", group: "الفنادق ووسائل النقل والمطار" },
  { id: 64, german: "der Fahrplan", arabic: "جدول مواعيد الرحلات", pronunciation: "دِر فاهرپلان", group: "الفنادق ووسائل النقل والمطار" },
  { id: 65, german: "der Notausgang", arabic: "مخرج الطوارئ", pronunciation: "دِر نوت أوسغانغ", group: "الفنادق ووسائل النقل والمطار" },
  { id: 66, german: "die Ferienwohnung", arabic: "شقة مفروشة للعطلات", pronunciation: "دي فيرين فونونغ", group: "الفنادق ووسائل النقل والمطار" },
  { id: 67, german: "die Jugendherberge", arabic: "بيوت الشباب (سكن اقتصادي)", pronunciation: "دي يوغند هيربيرغه", group: "الفنادق ووسائل النقل والمطار" },
  { id: 68, german: "der Zwischenstopp", arabic: "ترانزيت / توقف مؤقت", pronunciation: "دِر تسفيشين شتوب", group: "الفنادق ووسائل النقل والمطار" },
  { id: 69, german: "die Fluggesellschaft", arabic: "شركة الطيران", pronunciation: "دي فلوغ غيزيلشافت", group: "الفنادق ووسائل النقل والمطار" },
  { id: 70, german: "der Taxistand", arabic: "موقف سيارات الأجرة", pronunciation: "دِر تاكسي شتاند", group: "الفنادق ووسائل النقل والمطار" },
  { id: 71, german: "die Fahrkarte", arabic: "تذكرة المواصلات", pronunciation: "دي فاهركارته", group: "الفنادق ووسائل النقل والمطار" },
  { id: 72, german: "der Fahrkartenautomat", arabic: "ماكينة شراء التذاكر", pronunciation: "دِر فاهر كارتن أوتومات", group: "الفنادق ووسائل النقل والمطار" },
  { id: 73, german: "das Reiseziel", arabic: "وجهة السفر / المقصد", pronunciation: "داس رايزه تسيل", group: "الفنادق ووسائل النقل والمطار" },
  { id: 74, german: "die Hauptsaison", arabic: "موسم الذروة السياحي", pronunciation: "دي هاوبت زيسون", group: "الفنادق ووسائل النقل والمطار" },
  { id: 75, german: "die Nebensaison", arabic: "الموسم السياحي المنخفض", pronunciation: "دي نيبن زيسون", group: "الفنادق ووسائل النقل والمطار" },
  { id: 76, german: "der Reisebegleiter", arabic: "المرافق في السفر", pronunciation: "دِر رايزه بيغلايتر", group: "الفنادق ووسائل النقل والمطار" },
  { id: 77, german: "der Zollbeamte", arabic: "موظف الجمرك", pronunciation: "دِر تسول بيآمته", group: "الفنادق ووسائل النقل والمطار" },
  { id: 78, german: "die Gepäckaufgabe", arabic: "شباك تسليم الأمتعة", pronunciation: "دي غيبك أوفغابه", group: "الفنادق ووسائل النقل والمطار" },
  { id: 79, german: "das Fundbüro", arabic: "مكتب المفقودات", pronunciation: "داس فوند بيورو", group: "الفنادق ووسائل النقل والمطار" },
  { id: 80, german: "der Stadtplan", arabic: "خريطة المدينة", pronunciation: "دِر شتات پلان", group: "الفنادق ووسائل النقل والمطار" },

  // مجموعة 3: المواصلات العامة والبحرية
  { id: 81, german: "die Bushaltestelle", arabic: "محطة الحافلة (الباص)", pronunciation: "دي بوس هالتشتيله", group: "المواصلات العامة والبحرية" },
  { id: 82, german: "die U-Bahn", arabic: "مترو الأنفاق", pronunciation: "دي أوباهن", group: "المواصلات العامة والبحرية" },
  { id: 83, german: "die S-Bahn", arabic: "قطار الضواحي السريع", pronunciation: "دي إسباهن", group: "المواصلات العامة والبحرية" },
  { id: 84, german: "die Fähre", arabic: "العبّارة / الباخرة البحرية", pronunciation: "دي فيره", group: "المواصلات العامة والبحرية" },
  { id: 85, german: "das Kreuzfahrtschiff", arabic: "السفينة السياحية (الكركروز)", pronunciation: "داس كرويتس فارت شيف", group: "المواصلات العامة والبحرية" },
  { id: 86, german: "der Zug", arabic: "القطار", pronunciation: "دِر تسوغ", group: "المواصلات العامة والبحرية" },
  { id: 87, german: "die Flugnummer", arabic: "رقم الرحلة الجوية", pronunciation: "دي فلوغ نومر", group: "المواصلات العامة والبحرية" },
  { id: 88, german: "die Durchsage", arabic: "الإعلان الصوتي / النداء", pronunciation: "دي دورش زاغه", group: "المواصلات العامة والبحرية" },
  { id: 89, german: "der Warteraum", arabic: "قاعة الانتظار", pronunciation: "دِر فارت راوم", group: "المواصلات العامة والبحرية" },
  { id: 90, german: "die Gepäckaufbewahrung", arabic: "مكتب الأمانات / حفظ الأمتعة", pronunciation: "دي غيبك أوف بيفاهرونغ", group: "المواصلات العامة والبحرية" },
  { id: 91, german: "der Fahrpreis", arabic: "سعر التذكرة / الأجرة", pronunciation: "دِر فاهر برايس", group: "المواصلات العامة والبحرية" },
  { id: 92, german: "die Gültigkeit", arabic: "صلاحية التذكرة أو الوثيقة", pronunciation: "دي غيلتيغكايت", group: "المواصلات العامة والبحرية" },
  { id: 93, german: "das Navi", arabic: "جهاز الملاحة / GPS", pronunciation: "داس نافي", group: "المواصلات العامة والبحرية" },
  { id: 94, german: "die Umbuchung", arabic: "تغيير ميعاد الحجز", pronunciation: "دي أوم بوخونغ", group: "المواصلات العامة والبحرية" },
  { id: 95, german: "die Stornierung", arabic: "إلغاء الحجز", pronunciation: "دي شتورنيرونغ", group: "المواصلات العامة والبحرية" },
  { id: 96, german: "der Ausflug", arabic: "النزهة / الرحلة القصيرة", pronunciation: "دِر أوس فلوغ", group: "المواصلات العامة والبحرية" },
  { id: 97, german: "das Warten", arabic: "الانتظار", pronunciation: "داس فارتن", group: "المواصلات العامة والبحرية" },
  { id: 98, german: "der Notfall", arabic: "حالة الطوارئ", pronunciation: "دِر نوت فال", group: "المواصلات العامة والبحرية" },
  { id: 99, german: "die Einreise", arabic: "الدخول للبلد", pronunciation: "دي آين رايزه", group: "المواصلات العامة والبحرية" },
  { id: 100, german: "die Ausreise", arabic: "المغادرة من البلد", pronunciation: "دي أوس رايزه", group: "المواصلات العامة والبحرية" },

  // مجموعة 4: الشواطئ والطبيعة والإقامة الفندقية
  { id: 101, german: "der Strand", arabic: "الشاطئ", pronunciation: "دِر شتراند", group: "الشواطئ والطبيعة والإقامة" },
  { id: 102, german: "das Meer", arabic: "البحر", pronunciation: "داس مير", group: "الشواطئ والطبيعة والإقامة" },
  { id: 103, german: "der Berg", arabic: "الجبل", pronunciation: "دِر بيرغ", group: "الشواطئ والطبيعة والإقامة" },
  { id: 104, german: "der See", arabic: "البحيرة", pronunciation: "دِر زي", group: "الشواطئ والطبيعة والإقامة" },
  { id: 105, german: "die Küste", arabic: "الساحل", pronunciation: "دي كيوسته", group: "الشواطئ والطبيعة والإقامة" },
  { id: 106, german: "die Insel", arabic: "الجزيرة", pronunciation: "دي إينزل", group: "الشواطئ والطبيعة والإقامة" },
  { id: 107, german: "der Campingplatz", arabic: "موقع التخييم", pronunciation: "دِر كامبينغ بلاتس", group: "الشواطئ والطبيعة والإقامة" },
  { id: 108, german: "das Wohnmobil", arabic: "سيارة التخييم (الكرفان)", pronunciation: "داس فون موبيل", group: "الشواطئ والطبيعة والإقامة" },
  { id: 109, german: "der Sonnenschirm", arabic: "مظلة الشمس / الشمسية", pronunciation: "دِر زونن شيرم", group: "الشواطئ والطبيعة والإقامة" },
  { id: 110, german: "die Sonnencreme", arabic: "واقي الشمس", pronunciation: "دي زونن كريم", group: "الشواطئ والطبيعة والإقامة" },
  { id: 111, german: "die Auslandskrankenversicherung", arabic: "التأمين الصحي الدولي", pronunciation: "دي أوسلاندس كرانكن فيرزيشرونغ", group: "الشواطئ والطبيعة والإقامة" },
  { id: 112, german: "der Zimmer-Schlüssel", arabic: "مفتاح الغرفة", pronunciation: "دِر تسيمر شلوسل", group: "الشواطئ والطبيعة والإقامة" },
  { id: 113, german: "der Safe", arabic: "خزنة الأمانات", pronunciation: "دِر سيف", group: "الشواطئ والطبيعة والإقامة" },
  { id: 114, german: "die Minibar", arabic: "الثلاجة الصغيرة في الغرفة", pronunciation: "دي ميني بار", group: "الشواطئ والطبيعة والإقامة" },
  { id: 115, german: "die Klimaanlage", arabic: "مكيف الهواء", pronunciation: "دي كليما أنلاغه", group: "الشواطئ والطبيعة والإقامة" },
  { id: 116, german: "der Meerblick", arabic: "الإطلالة على البحر", pronunciation: "دِر مير بليك", group: "الشواطئ والطبيعة والإقامة" },
  { id: 117, german: "der Zimmerservice", arabic: "خدمة الغرف", pronunciation: "دِر تسيمر سيرفيس", group: "الشواطئ والطبيعة والإقامة" },
  { id: 118, german: "der Mietwagenanbieter", arabic: "شركة تأجير السيارات", pronunciation: "دِر ميت فاغن آنبيتر", group: "الشواطئ والطبيعة والإقامة" },
  { id: 119, german: "die Reiseapotheke", arabic: "حقيبة الأدوية للسفر", pronunciation: "دي رايزه أبوتيكه", group: "الشواطئ والطبيعة والإقامة" },
  { id: 120, german: "der Reisescheck", arabic: "شيك المسافر", pronunciation: "دِر رايزه شيك", group: "الشواطئ والطبيعة والإقامة" },

  // مجموعة 5: الجبال والغابات والمغامرات الطبيعية
  { id: 121, german: "die Landschaft", arabic: "المنظر الطبيعي", pronunciation: "دي لاندشافت", group: "الجبال والغابات والمغامرات" },
  { id: 122, german: "das Tal", arabic: "الوادى", pronunciation: "داس تال", group: "الجبال والغابات والمغامرات" },
  { id: 123, german: "der Wald", arabic: "الغابة", pronunciation: "دِر فالد", group: "الجبال والغابات والمغامرات" },
  { id: 124, german: "der Fluss", arabic: "النهر", pronunciation: "دِر فلوس", group: "الجبال والغابات والمغامرات" },
  { id: 125, german: "der Wasserfall", arabic: "الشلال", pronunciation: "دِر فاسرفال", group: "الجبال والغابات والمغامرات" },
  { id: 126, german: "die Wüste", arabic: "الصحراء", pronunciation: "دي فوسته", group: "الجبال والغابات والمغامرات" },
  { id: 127, german: "die Höhle", arabic: "الكهف", pronunciation: "دي هوهله", group: "الجبال والغابات والمغامرات" },
  { id: 128, german: "das Nationalpark", arabic: "المنتزه الوطني / المحمية", pronunciation: "داس ناشيونال پارك", group: "الجبال والغابات والمغامرات" },
  { id: 129, german: "die Wanderkarte", arabic: "خريطة مسار المشي لمسافات طويلة", pronunciation: "دي فاندير كارته", group: "الجبال والغابات والمغامرات" },
  { id: 130, german: "der Wanderweg", arabic: "مسار المشي السياحي", pronunciation: "دِر فاندير فيغ", group: "الجبال والغابات والمغامرات" },
  { id: 131, german: "der Liegestuhl", arabic: "كرسي الاسترخاء (على الشاطئ)", pronunciation: "دِر ليغه شتول", group: "الجبال والغابات والمغامرات" },
  { id: 132, german: "das Handtuch", arabic: "منشفة / فوطة", pronunciation: "داس هاند توخ", group: "الجبال والغابات والمغامرات" },
  { id: 133, german: "die Badehose", arabic: "سروال السباحة للرجال", pronunciation: "دي باد هوزه", group: "الجبال والغابات والمغامرات" },
  { id: 134, german: "der Badeanzug", arabic: "ملابس السباحة للنساء", pronunciation: "دِر باد آنتسوغ", group: "الجبال والغابات والمغامرات" },
  { id: 135, german: "die Sonnenbrille", arabic: "النظارات الشمسية", pronunciation: "دي زونن بريله", group: "الجبال والغابات والمغامرات" },
  { id: 136, german: "der Reisebericht", arabic: "تقرير الرحلة / مدونة السفر", pronunciation: "دِر رايزه بيريشت", group: "الجبال والغابات والمغامرات" },
  { id: 137, german: "die Reisedauer", arabic: "مدة الرحلة", pronunciation: "دي رايزه داور", group: "الجبال والغابات والمغامرات" },
  { id: 138, german: "das Fernweh", arabic: "الحنين إلى السفر والترحال", pronunciation: "داس فيرن فيه", group: "الجبال والغابات والمغامرات" },
  { id: 139, german: "die Erholung", arabic: "الاستجمام والراحة", pronunciation: "دي إرهولونغ", group: "الجبال والغابات والمغامرات" },
  { id: 140, german: "der Urlauber", arabic: "المصطاف / السائح في عطلة", pronunciation: "دِر أورلاوبر", group: "الجبال والغابات والمغامرات" },

  // مجموعة 6: الطيران وحالات الطوارئ والقيادة
  { id: 141, german: "der Passagier", arabic: "الراكب / المسافر", pronunciation: "دِر پاساغير", group: "الطيران وحالات الطوارئ والقيادة" },
  { id: 142, german: "die Flugbegleiterin", arabic: "مضيفة الطيران", pronunciation: "دي فلوغ بيغلايتيرين", group: "الطيران وحالات الطوارئ والقيادة" },
  { id: 143, german: "der Pilot", arabic: "طيار", pronunciation: "دِر پيلوت", group: "الطيران وحالات الطوارئ والقيادة" },
  { id: 144, german: "das Flugzeug", arabic: "الطائرة", pronunciation: "داس فلوغ تسويغ", group: "الطيران وحالات الطوارئ والقيادة" },
  { id: 145, german: "der Hubschraub", arabic: "طائرة مروحية (هليكوبتر)", pronunciation: "دِر هوپ شتراوب", group: "الطيران وحالات الطوارئ والقيادة" },
  { id: 146, german: "die Landung", arabic: "الهبوط (للطائرة)", pronunciation: "دي لاندونغ", group: "الطيران وحالات الطوارئ والقيادة" },
  { id: 147, german: "der Start", arabic: "الإقلاع (للطائرة)", pronunciation: "دِر شتارت", group: "الطيران وحالات الطوارئ والقيادة" },
  { id: 148, german: "die Autobahnvignette", arabic: "ملصق رسوم الطرق السريعة", pronunciation: "دي أوتوبان فينيته", group: "الطيران وحالات الطوارئ والقيادة" },
  { id: 149, german: "die Tankstelle", arabic: "محطة وقود السيارات", pronunciation: "دي تانك شتيله", group: "الطيران وحالات الطوارئ والقيادة" },
  { id: 150, german: "der Stau", arabic: "ازدحام مروري / زحمة سير", pronunciation: "دِر شتاو", group: "الطيران وحالات الطوارئ والقيادة" },
  { id: 151, german: "die Panne", arabic: "عطل مفاجئ في السيارة", pronunciation: "دي پانه", group: "الطيران وحالات الطوارئ والقيادة" },
  { id: 152, german: "der Abschleppdienst", arabic: "خدمة قطر السيارات المعطلة", pronunciation: "دِر آپ شليپ دينست", group: "الطيران وحالات الطوارئ والقيادة" },
  { id: 153, german: "die Reisekrankheit", arabic: "دوار السفر أو البحر", pronunciation: "دي رايزه كرانكهايت", group: "الطيران وحالات الطوارئ والقيادة" },
  { id: 154, german: "das Pflaster", arabic: "لاصة طبية / بندايد", pronunciation: "داس پفلاستر", group: "الطيران وحالات الطوارئ والقيادة" },
  { id: 155, german: "die Höhensonne", arabic: "أشعة الشمس المرتفعة / الجبلية", pronunciation: "دي هيهين زونه", group: "الطيران وحالات الطوارئ والقيادة" },
  { id: 156, german: "das Trekking", arabic: "رحلات السير الطويلة في الطبيعة", pronunciation: "داس تريكيغ", group: "الطيران وحالات الطوارئ والقيادة" },
  { id: 157, german: "die Orientierung", arabic: "تحديد الاتجاهات / الاهتداء بالمكان", pronunciation: "دي أورينتيرونغ", group: "الطيران وحالات الطوارئ والقيادة" },
  { id: 158, german: "der Kompass", arabic: "البوصلة", pronunciation: "دِر كومپاس", group: "الطيران وحالات الطوارئ والقيادة" },
  { id: 159, german: "das Taschenmesser", arabic: "سكين جيب متعدد الاستخدامات", pronunciation: "داس تاشين ميسر", group: "الطيران وحالات الطوارئ والقيادة" },
  { id: 160, german: "die Taschenlampe", arabic: "مصباح يدوي", pronunciation: "دي تاشين لامپي", group: "الطيران وحالات الطوارئ والقيادة" },

  // مجموعة 7: الخدمات السياحية والترفيهية والتنقلات داخل المدن
  { id: 161, german: "der Reiseleiter", arabic: "قائد الرحلة الجماعية", pronunciation: "دِر رايزه لايتر", group: "الخدمات السياحية الإضافية" },
  { id: 162, german: "die Ortsangabe", arabic: "تحديد الموقع الجغرافي", pronunciation: "دي أورتس آنغابه", group: "الخدمات السياحية الإضافية" },
  { id: 163, german: "die Weltkarte", arabic: "خريطة العالم", pronunciation: "دي فيلت كارته", group: "الخدمات السياحية الإضافية" },
  { id: 164, german: "der Globus", arabic: "الكرة الأرضية", pronunciation: "دِر غلوبوس", group: "الخدمات السياحية الإضافية" },
  { id: 165, german: "das Zelt", arabic: "الخيمة (للتخييم)", pronunciation: "داس تسيلت", group: "الخدمات السياحية الإضافية" },
  { id: 166, german: "der Schlafsack", arabic: "كيس النوم المخصص للتخييم", pronunciation: "دِر شلاف ساك", group: "الخدمات السياحية الإضافية" },
  { id: 167, german: "das Lagerfeuer", arabic: "نار المخيم", pronunciation: "داس لاغر فوير", group: "الخدمات السياحية الإضافية" },
  { id: 168, german: "der Ausblick", arabic: "الإطلالة البانورامية", pronunciation: "دِر أوس بليك", group: "الخدمات السياحية الإضافية" },
  { id: 169, german: "die Hauptstraße", arabic: "الشارع الرئيسي", pronunciation: "دي هاوبت شتراسه", group: "الخدمات السياحية الإضافية" },
  { id: 170, german: "die Seitenstraße", arabic: "شارع جانبي / فرعي", pronunciation: "دي زايتن شتراسه", group: "الخدمات السياحية الإضافية" },
  { id: 171, german: "die Fußgängerzone", arabic: "منطقة مخصصة للمشاة فقط", pronunciation: "دي فوس غينغر تسونه", group: "الخدمات السياحية الإضافية" },
  { id: 172, german: "die Stadtmitte", arabic: "وسط المدينة / دوان تاون", pronunciation: "دي شتات ميته", group: "الخدمات السياحية الإضافية" },
  { id: 173, german: "die Vorstadt", arabic: "ضواحي المدينة", pronunciation: "دي فور شتات", group: "الخدمات السياحية الإضافية" },
  { id: 174, german: "der Hafen", arabic: "الميناء البحري", pronunciation: "دِر هافن", group: "الخدمات السياحية الإضافية" },
  { id: 175, german: "die Anlegestelle", arabic: "مرسى القوارب أو السفن", pronunciation: "دي آنليغه شتيله", group: "الخدمات السياحية الإضافية" },
  { id: 176, german: "das Motorboot", arabic: "قارب سُريّ بمحرك", pronunciation: "داس موتور بوت", group: "الخدمات السياحية الإضافية" },
  { id: 177, german: "die Seilbahn", arabic: "التلفريك / القطار المعلق", pronunciation: "دي زيل باهن", group: "الخدمات السياحية الإضافية" },
  { id: 178, german: "die Treppe", arabic: "الدرج / السلم", pronunciation: "دي تريپه", group: "الخدمات السياحية الإضافية" },
  { id: 179, german: "der Aufzug", arabic: "المصعد الكهربائي (الأسانسير)", pronunciation: "دِر أوف تسوغ", group: "الخدمات السياحية الإضافية" },
  { id: 180, german: "die Hotelhalle", arabic: "بهو الفندق / اللوبي", pronunciation: "دي هوتيل هاله", group: "الخدمات السياحية الإضافية" },

  // مجموعة 8: المطارات والإجراءات الجمركية المتقدمة
  { id: 181, german: "der Metalldetektor", arabic: "جهاز كشف المعادن", pronunciation: "دي ميتال ديتكتور", group: "المطارات والإجراءات الجمركية" },
  { id: 182, german: "die Zollerklärung", arabic: "إقرار جمركي للبضائع", pronunciation: "دي تسول إيركلارونغ", group: "المطارات والإجراءات الجمركية" },
  { id: 183, german: "der Sicherheitsbeamte", arabic: "رجل الأمن / ضابط التفتيش", pronunciation: "دِر زيشرهايتس بيآمته", group: "المطارات والإجراءات الجمركية" },
  { id: 184, german: "die Passkontrollstelle", arabic: "نقطة مراقبة جوازات السفر", pronunciation: "دي پاس كونترول شتيله", group: "المطارات والإجراءات الجمركية" },
  { id: 185, german: "das Visumantragsformular", arabic: "استمارة طلب تأشيرة الدخول", pronunciation: "داس فيزوم أنتراتس فورمولار", group: "المطارات والإجراءات الجمركية" },
  { id: 186, german: "die Flugzeugkabine", arabic: "مقصورة الركاب في الطائرة", pronunciation: "دي فلوغ تسويغ كابينه", group: "المطارات والإجراءات الجمركية" },
  { id: 187, german: "der Notausgangssitz", arabic: "مقعد مخرج الطوارئ في الطائرة", pronunciation: "دِر نوت أوسغانغس زيتس", group: "المطارات والإجراءات الجمركية" },
  { id: 188, german: "die Sicherheitsunterweisung", arabic: "إرشادات وتعليمات الأمان", pronunciation: "دي زيشرهايتس أونتر فايزونغ", group: "المطارات والإجراءات الجمركية" },
  { id: 189, german: "die Rettungsweste", arabic: "سترة النجاة (طوارئ الطائرة أو السفينة)", pronunciation: "دي ريتونغ فيسته", group: "المطارات والإجراءات الجمركية" },
  { id: 190, german: "die Sauerstoffmaske", arabic: "قناع الأكسجين للطوارئ", pronunciation: "دي زاور شتوف ماسكه", group: "المطارات والإجراءات الجمركية" },
  { id: 191, german: "das Flugticket", arabic: "تذكرة السفر الجوي", pronunciation: "داس فلوغ تيكت", group: "المطارات والإجراءات الجمركية" },
  { id: 192, german: "der Online-Check-in", arabic: "تسجيل السفر عبر الإنترنت مسبقاً", pronunciation: "دِر أونلاين تشيك إن", group: "المطارات والإجراءات الجمركية" },
  { id: 193, german: "der Gepäckanhänger", arabic: "بطاقة تعريف الحقائب والأمتعة", pronunciation: "دِر غيبك أن هانغر", group: "المطارات والإجراءات الجمركية" },
  { id: 194, german: "die Gewichtsbegrenzung", arabic: "الحد الأقصى المسموح به للوزن", pronunciation: "دي غيڤيتس بيغレンزونغ", group: "المطارات والإجراءات الجمركية" },
  { id: 195, german: "das Uebergepäck", arabic: "الأمتعة الزائدة عن الوزن المسموح", pronunciation: "داس إيبر غيبك", group: "المطارات والإجراءات الجمركية" },
  { id: 196, german: "der Duty-free-Shop", arabic: "متجر السوق الحرة في المطار", pronunciation: "دِر دوتي فري شوب", group: "المطارات والإجراءات الجمركية" },
  { id: 197, german: "die Fluggesellschafts-Lounge", arabic: "صالة كبار الشخصيات لشركة الطيران", pronunciation: "دي فلوغ غيزيلشافتس لاونج", group: "المطارات والإجراءات الجمركية" },
  { id: 198, german: "der Abflughafen", arabic: "مطار المغادرة الأصلي", pronunciation: "دِر أبفلوغ هافن", group: "المطارات والإجراءات الجمركية" },
  { id: 199, german: "der Zielflughafen", arabic: "مطار الوصول النهائي", pronunciation: "دِر تسيل فلوغهافن", group: "المطارات والإجراءات الجمركية" },
  { id: 200, german: "die Grenzpolizei", arabic: "شرطة الحدود / أمن المنافذ", pronunciation: "دي غرينتس بوليتساي", group: "المطارات والإجراءات الجمركية" }
];

export default function TravelPage() {
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
    if (parts.length > 1) {
      const article = parts[0].toLowerCase();
      const rest = parts.slice(1).join(' ');
      let articleColor = 'inherit';

      if (article === 'der') articleColor = '#00bfff'; // لبنى
      else if (article === 'das') articleColor = '#22c55e'; // أخضر
      else if (article === 'die') articleColor = '#ec4899'; // بمبي

      return (
        <span>
          <span style={{ color: articleColor, fontWeight: 'bold' }}>{parts[0]}</span> {rest}
        </span>
      );
    }
    return germanStr;
  };

  const filteredData = travelData.filter(
    (item) =>
      item.german.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.arabic.includes(searchTerm)
  );

  const groupedData = filteredData.reduce((acc, item) => {
    if (!acc[item.group]) {
      acc[item.group] = [];
    }
    acc[item.group].push(item);
    return acc;
  }, {});

  return (
    <div style={{ padding: '15px 10px 40px 10px', color: 'inherit', background: 'transparent', width: '100%', boxSizing: 'border-box' }}>
      <style>{`
        .page-title {
          text-align: center;
          font-size: 1.6rem;
          font-weight: bold;
          margin-bottom: 20px;
          color: inherit;
        }
        .search-container {
          display: flex;
          justify-content: center;
          margin-bottom: 30px;
          width: 100%;
          padding: 0 10px;
          box-sizing: border-box;
        }
        .search-input {
          width: 100%;
          max-width: 500px;
          padding: 10px 16px;
          border-radius: 25px;
          border: 1px solid currentColor;
          background: transparent;
          color: inherit;
          font-size: 1rem;
          outline: none;
          box-sizing: border-box;
          direction: rtl;
        }
        .group-title {
          font-size: 1.25rem;
          font-weight: bold;
          margin: 35px 0 20px 0;
          text-align: center;
          color: #00bfff;
          border-bottom: 2px dashed currentColor;
          padding-bottom: 8px;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }
        .cards-container {
          display: flex;
          flex-direction: column;
          /* تم تعيين المسافة بين كل كارت والآخر إلى 20 بكسل بالضبط */
          gap: 20px;
          align-items: center;
          width: 100%;
          padding: 0 10px;
          box-sizing: border-box;
        }
        .vocab-card {
          position: relative;
          width: 100%;
          max-width: 500px;
          border: 2px solid currentColor;
          border-radius: 25px 8px;
          padding: 14px 18px 12px 18px;
          display: flex;
          flex-direction: column;
          color: inherit;
          background: transparent;
          box-sizing: border-box;
          cursor: pointer;
          user-select: none;
          transition: border-color 0.2s ease;
        }
        .vocab-card:hover {
          border-color: #00bfff;
        }
        .vocab-main-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          flex-wrap: wrap;
          gap: 10px;
        }
        .item-number {
          position: absolute;
          top: -11px;
          left: 20px;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background-color: #ff3333;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          font-weight: bold;
          z-index: 2;
        }
        .audio-icon {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 1.15rem;
          z-index: 2;
          pointer-events: none;
        }
        .pronunciation-text {
          position: absolute;
          top: 4px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.85rem;
          color: #00bfff;
          font-weight: bold;
          z-index: 2;
          white-space: nowrap;
          pointer-events: none;
        }
        .arabic-word {
          font-size: 1.2rem;
          font-weight: bold;
          text-align: right;
        }
        .german-word {
          font-size: 1.15rem;
          font-weight: bold;
          direction: ltr;
          text-align: left;
        }

        @media (max-width: 480px) {
          .vocab-card {
            padding: 16px 14px 12px 14px;
          }
          .arabic-word {
            font-size: 1.1rem;
          }
          .german-word {
            font-size: 1.05rem;
          }
        }
      `}</style>

      <h1 className="page-title">السفر والسياحة (Das Reisen)</h1>

      {/* حقل البحث */}
      <div className="search-container">
        <input
          type="text"
          placeholder="ابحث عن كلمة بالعربية أو الألمانية..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {/* عرض الكروت مقسمة حسب المجموعات والعناوين */}
      <div className="cards-container">
        {Object.keys(groupedData).map((groupName) => (
          <div key={groupName} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <h2 className="group-title">{groupName}</h2>
            {groupedData[groupName].map((item) => (
              <div
                key={item.id}
                className="vocab-card"
                onClick={() => speakGerman(item.german)}
              >
                {/* رقم الكارت */}
                <div className="item-number">{item.id}</div>

                {/* أيقونة السماعة */}
                <div className="audio-icon">🔊</div>

                {/* نطق الكلمة */}
                <div className="pronunciation-text">{item.pronunciation}</div>

                {/* الصف الرئيسي */}
                <div className="vocab-main-row">
                  <div className="arabic-word">{item.arabic}</div>
                  <div className="german-word">{renderColoredGermanWord(item.german)}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
import React, { useState } from 'react';

const categoriesData = [
  {
    id: "cat-1",
    title: "1. 🏥 الصحة والأطباء (Gesundheit & Medizin)",
    sentences: [
      { id: 1, german: "Ich muss zum Arzt gehen.", arabic: "يجب أن أذهب إلى الطبيب." },
      { id: 2, german: "Ich habe Kopfschmerzen.", arabic: "عندي صداع في الرأس." },
      { id: 3, german: "Ich fühle mich heute nicht gut.", arabic: "لا أشعر بأني بخير اليوم." },
      { id: 4, german: "Gute Besserung!", arabic: "اتمنى لك الشفاء العاجل!" },
      { id: 5, german: "Ich brauche Schmerztabletten aus der Apotheke.", arabic: "أحتاج إلى مسكن للآلام من الصيدلية." },
      { id: 6, german: "Haben Sie etwas gegen Husten?", arabic: "هل لديك شيء علاج للسعال؟" },
      { id: 7, german: "Ich habe seit drei Tagen Fieber.", arabic: "لدي حمى منذ ثلاثة أيام." },
      { id: 8, german: "Wo tut es Ihnen weh?", arabic: "أين تشعر بالألم؟" },
      { id: 9, german: "Trinken Sie viel Tee und ruhen Sie sich aus.", arabic: "اشرب الكثير من الشاي واسترخِ." },
      { id: 10, german: "Ich brauche ein Rezept für Medizin.", arabic: "أحتاج إلى وصفة طبية (روشتة) للدواء." },
      { id: 11, german: "Ich suche einen Arzt, der Englisch spricht.", arabic: "أبحث عن طبيب يتحدث الإنجليزية." },
      { id: 12, german: "Ich brauche ein Pflaster für meinen Finger.", arabic: "أحتاج إلى لاصق طبي لإصبعي." },
      { id: 13, german: "Mein Bauch tut weh.", arabic: "بطني تؤلمني." },
      { id: 14, german: "Nehmen Sie die Medizin nach dem Essen.", arabic: "تناول الدواء بعد الأكل." },
      { id: 15, german: "Meine Schwester arbeitet im Krankenhaus.", arabic: "أختي تعمل في المستشفى." },
      { id: 16, german: "Ich wünsche dir eine schnelle Genesung.", arabic: "أتمنى لك شفاءً سريعاً." },
      { id: 17, german: "Ich habe Zahnschmerzen und brauche einen Termin.", arabic: "لدي ألم في الأسنان وأحتاج إلى موعد." },
      { id: 18, german: "Rufen Sie bitte einen Krankenwagen!", arabic: "اتصل بالإسعاف من فضلك!" },
      { id: 19, german: "Ich bin allergisch gegen Nüsse.", arabic: "لدي حساسية من المكسرات." },
      { id: 20, german: "Messen Sie bitte mein Fieber.", arabic: "قِس درجة حرارتي من فضلك." },
      { id: 21, german: "Ich habe Halsschmerzen und Schnupfen.", arabic: "لدي ألم في الحلق وزكام." },
      { id: 22, german: "Wo ist die nächste Notaufnahme?", arabic: "أين تقع أقرب غرفة طوارئ؟" },
      { id: 23, german: "Ich muss meine Augentropfen nehmen.", arabic: "يجب أن آخذ قطرة العين الخاصة بي." },
      { id: 24, german: "Der Arzt hat mich gründlich untersucht.", arabic: "فحصني الطبيب بدقة." },
      { id: 25, german: "Ich muss zwei Tage im Bett bleiben.", arabic: "يجب أن أبقى في السرير لمدة يومين." },
      { id: 26, german: "Ich brauche eine Krankschreibung für die Arbeit.", arabic: "أحتاج إلى إجازة مرضية للعمل." },
      { id: 27, german: "Mein Rücken tut nach der Arbeit weh.", arabic: "ظهري تؤلمني بعد العمل." },
      { id: 28, german: "Haben Sie ein Mittel gegen Übelkeit?", arabic: "هل لديك علاج للغثيان؟" },
      { id: 29, german: "Die Wunde muss desinfiziert werden.", arabic: "يجب تطهير الجرح." },
      { id: 30, german: "Ich muss regelmäßig meine Tabletten einnehmen.", arabic: "يجب أن آخذ حبوبي بانتظام." },
      { id: 31, german: "Der Zahnarzt hat meinen Zahn repariert.", arabic: "طبيب الأسنان عالج/أصلح سني." },
      { id: 32, german: "Ich habe eine Salbe für die Haut bekommen.", arabic: "حصلت على مرهم للجلد." },
      { id: 33, german: "Der Blutdruck ist etwas zu hoch.", arabic: "ضغط الدم مرتفع قليلاً." },
      { id: 34, german: "Sie müssen mehr Wasser trinken.", arabic: "يجب عليك شرب المزيد من الماء." },
      { id: 35, german: "Ich brauche einen Termin bei der Praxis.", arabic: "أحتاج إلى موعد في العيادة الطبية." },
      { id: 36, german: "Ich habe mir den Fuß verstaucht.", arabic: "لقد التوت قدمي." },
      { id: 37, german: "Der Arzt schreibt mir ein Rezept aus.", arabic: "الطبيب يكتب لي وصفة طبية." },
      { id: 38, german: "Ich fühle mich schwindelig.", arabic: "أشعر بالدوار/الدوخة." },
      { id: 39, german: "Kühlen Sie die Stelle mit Eis.", arabic: "برد المكان بالثلج." },
      { id: 40, german: "Die Praxis bleibt am Mittwochnachmittag geschlossen.", arabic: "تغلق العيادة ظهر يوم الأربعاء." },
      { id: 41, german: "Ich brauche eine Impfung gegen Grippe.", arabic: "أحتاج إلى تطعيم ضد الإنفلونزا." },
      { id: 42, german: "Der Arzt hat mir Ruhe verordnet.", arabic: "وصف لي الطبيب الراحة." },
      { id: 43, german: "Ist die Behandlung schmerzhaft?", arabic: "هل العلاج مؤلم؟" },
      { id: 44, german: "Ich habe mir den Arm gebrochen.", arabic: "لقد كسرت ذراعي." },
      { id: 45, german: "Ich brauche Tropfen für die Ohren.", arabic: "أحتاج إلى قطرة للأذن." },
      { id: 46, german: "Können Sie meine Krankenversicherungskarte prüfen?", arabic: "هل يمكنك فحص بطاقة التأمين الصحي الخاصة بي؟" },
      { id: 47, german: "Ich habe Atemnot beim Treppensteigen.", arabic: "لدي ضيق في التنفس أثناء صعود السلم." },
      { id: 48, german: "Die Narbe heilt sehr gut.", arabic: "الجرح/الندبة تتشافى بشكل جيد جداً." },
      { id: 49, german: "Ich muss zur Nachuntersuchung kommen.", arabic: "يجب أن آتي للفحص المتابعة." },
      { id: 50, german: "Tragen Sie den Verband für drei Tage.", arabic: "ارتدِ الضمادة لمدة ثلاثة أيام." },
      { id: 51, german: "Der Arzt nimmt mir Blut ab.", arabic: "الطبيب يسحب مني عينة دم." },
      { id: 52, german: "Ich brauche eine Überweisung zum Facharzt.", arabic: "أحتاج إلى تحويل إلى طبيب متخصص." },
      { id: 53, german: "Die Sprechstunde beginnt um acht Uhr.", arabic: "ساعات العيادة/المعاينة تبدأ في الساعة الثامنة." },
      { id: 54, german: "Ich habe Schmerzen im Schulterbereich.", arabic: "لدي آلام في منطقة الكتف." },
      { id: 55, german: "Trinken Sie die Tropfen mit etwas Wasser.", arabic: "اشرب القطرة مع القليل من الماء." },
      // جمل جديدة للوصول لـ 600
      { id: 56, german: "Ich benötige ein Attest für die Schule.", arabic: "أحتاج شهادة طبية للمدرسة." },
      { id: 57, german: "Die Arzthelferin misst meinen Puls.", arabic: "مساعدة الطبيب تقيس نبضي." },
      { id: 58, german: "Der Sanitäter leistet erste Hilfe.", arabic: "المسعف يقدم الإسعافات الأولية." },
      { id: 59, german: "Ich muss nüchtern zur Untersuchung kommen.", arabic: "يجب أن آتي صائماً للفحص." },
      { id: 60, german: "Das Medikament hat keine Nebenwirkungen.", arabic: "الدواء ليس له أي آثار جانبية." }
    ]
  },
  {
    id: "cat-2",
    title: "2. ⚽ الرياضة والأنشطة واللعب (Sport & Freizeit)",
    sentences: [
      { id: 61, german: "Kinder spielen im Park.", arabic: "الأطفال يلعبون في الحديقة." },
      { id: 62, german: "Spielt ihr am Wochenende Fußball?", arabic: "هل تلعبون كرة القدم في نهاية الأسبوع؟" },
      { id: 63, german: "Ich kann sehr gut schwimmen.", arabic: "يمكنني السباحة بشكل جيد جداً." },
      { id: 64, german: "Meine Hobbys sind Lesen und Reisen.", arabic: "هواياتي هي القراءة والسفر." },
      { id: 65, german: "Das Spiel beginnt um achtzehn Uhr.", arabic: "المباراة تبدأ في الساعة السادسة مساءً." },
      { id: 66, german: "Welche Sportart machst du gern?", arabic: "ما هي الرياضة التي تحب ممارستها؟" },
      { id: 67, german: "Ich gehe dreimal in der Woche ins Fitnessstudio.", arabic: "أذهب إلى صالة الألعاب الرياضية ثلاث مرات في الأسبوع." },
      { id: 68, german: "Ich habe heute eine Stunde Sport gemacht.", arabic: "مارست الرياضة لمدة ساعة اليوم." },
      { id: 69, german: "Wir spielen am Abend oft Brettspiele.", arabic: "نحن نلعب ألعاب اللوحة (الطاولة) كثيراً في المساء." },
      { id: 70, german: "Mein Hobby ist Fotografie.", arabic: "هوايتي هي التصوير الفوتوغرافي." },
      { id: 71, german: "Ich gehe gern im Park spazieren.", arabic: "أحب المشي في الحديقة." },
      { id: 72, german: "Wir machen heute einen kurzen Spaziergang.", arabic: "نقوم بنزهة قصيرة اليوم." },
      { id: 73, german: "Wir machen morgen ein Picknick.", arabic: "سنقوم بنزهة غداً." },
      { id: 74, german: "Ich mag Musik hören und entspannen.", arabic: "أحب الاستماع إلى الموسيقى والاسترخاء." },
      { id: 75, german: "Ich gehe gerne im Wald spazieren.", arabic: "أحب الذهاب للنزهة في الغابة." },
      { id: 76, german: "Wir laufen morgens im Stadion.", arabic: "نركض صباحاً في الاستاد." },
      { id: 77, german: "Spielst du gerne Computerspiele?", arabic: "هل تحب لعب ألعاب الكمبيوتر؟" },
      { id: 78, german: "Wir haben ein Fahrradrennen gemacht.", arabic: "قمنا بسباق دراجات." },
      { id: 79, german: "Ich fahre am Wochenende Inlineskates.", arabic: "أمارس التزلج بالعجلات في نهاية الأسبوع." },
      { id: 80, german: "Er spielt sehr gut Tennis.", arabic: "هو يلعب التنس بشكل ممتاز." },
      { id: 81, german: "Möchtest du mit mir Basketball spielen?", arabic: "هل ترغب في لعب كرة السلة معي؟" },
      { id: 82, german: "Wir haben das Spiel gestern gewonnen.", arabic: "فزنا بالمباراة بالأمس." },
      { id: 83, german: "Ich fahre gern Ski im Winter.", arabic: "أحب التزلج على الثلج في الشتاء." },
      { id: 84, german: "Kommst du mit zum Yoga-Kurs?", arabic: "هل ستأتي معي إلى درس اليوجا؟" },
      { id: 85, german: "Wir machen eine Wanderung in den Bergen.", arabic: "نقوم برحلة سيراً على الأقدام في الجبال." },
      { id: 86, german: "Im Sommer gehe ich gern im See schwimmen.", arabic: "في الصيف أحب السباحة في البحيرة." },
      { id: 87, german: "Ich spiele jeden Samstag Volleyball.", arabic: "أنا ألعاب كرة الطائرة كل سبت." },
      { id: 88, german: "Hast du Lust auf eine Runde Schach?", arabic: "هل لديك رغبة في جولة شطرنج؟" },
      { id: 89, german: "Wir haben Karten im Garten gespielt.", arabic: "لعبنا الورق (الكوتشينة) في الحديقة." },
      { id: 90, german: "Ich mache jeden Morgen Dehnübungen.", arabic: "أقوم بتمارين الإطالة كل صباح." },
      { id: 91, german: "Wir schauen das Fußballspiel zusammen an.", arabic: "نشاهد مباراة كرة القدم معاً." },
      { id: 92, german: "Ich habe ein neues Fahrrad gekauft.", arabic: "اشتريت دراجة جديدة." },
      { id: 93, german: "Tischtennis macht mir sehr viel Spaß.", arabic: "كرة الطاولة ممتعة جداً بالنسبة لي." },
      { id: 94, german: "Wir haben einen Ausflug ans Meer gemacht.", arabic: "قمنا بنزهة إلى البحر." },
      { id: 95, german: "Er läuft jeden Morgen fünf Kilometer.", arabic: "هو يجري خمسة كيلومترات كل صباح." },
      { id: 96, german: "Wir klettern am Wochenende in der Halle.", arabic: "نتسلق الجدران في الصالة في نهاية الأسبوع." },
      { id: 97, german: "Ich nehme an einem Marathon teil.", arabic: "أشارك في ماراثون." },
      { id: 98, german: "Meine Mannschaft hat das Turnier gewonnen.", arabic: "فريقي فاز بالبطولة." },
      { id: 99, german: "Ich spiele gerne Badminton in der Freizeit.", arabic: "أحب لعب الريشة الطائرة في وقت الفراغ." },
      { id: 100, german: "Wir haben ein Zelt auf dem Campingplatz aufgebaut.", arabic: "نصبنا خيمة في موقع التخييم." },
      { id: 101, german: "Ich gehe abends gern ins Fitnessstudio.", arabic: "أحب الذهاب للجيم مساءً." },
      { id: 102, german: "Wir haben heute ein spannendes Spiel gesehen.", arabic: "شاهدنا مباراة حماسية اليوم." },
      { id: 103, german: "Spielst du ein Musikinstrument?", arabic: "هل تعزف على آلة موسيقية؟" },
      { id: 104, german: "Ich lerne Gitarre spielen.", arabic: "أتعلم عزف جيتار." },
      { id: 105, german: "Sport hält den Körper gesund.", arabic: "الرياضة تحافظ على صحة الجسم." },
      { id: 106, german: "Wir haben einen Ausflug mit dem Boot gemacht.", arabic: "قمنا بنزهة بالقارب." },
      { id: 107, german: "Ich gehe regelmäßig zum Tanzkurs.", arabic: "أذهب بانتظام إلى كورس الرقص." },
      { id: 108, german: "Das Stadion war komplett ausverkauft.", arabic: "كان الاستاد مباعاً بالكامل." },
      { id: 109, german: "Ich spiele am liebsten Abenteuerspiele.", arabic: "أفضل لعب ألعاب المغامرات." },
      { id: 110, german: "Wir haben ein Picknick am Fluss gemacht.", arabic: "قمنا بنزهة على ضفاف النهر." },
      { id: 111, german: "Ich gehe am Samstag zum Kegeln.", arabic: "أذهب يوم السبت للعب البولينج/الكيلل." },
      { id: 112, german: "Wir tauchen im Roten Meer.", arabic: "نحن نغوص في البحر الأحمر." },
      { id: 113, german: "Der Schiedsrichter pfeift das Spiel ab.", arabic: "الحكم يطلق صافرة نهاية المباراة." },
      { id: 114, german: "Ich trainiere für einen Biathlon.", arabic: "أتدرب من أجل سباق الثنائي (سباق وملاحظة)." },
      { id: 115, german: "Wir mieten uns ein Tretboot am See.", arabic: "نستأجر قارب بدالات في البحيرة." },
      // جمل جديدة للوصول لـ 600
      { id: 116, german: "Ich spiele gern Handball im Verein.", arabic: "أحب لعب كرة اليد في النادي." },
      { id: 117, german: "Der Trainer gibt uns gute Anweisungen.", arabic: "المدرب يعطينا تعليمات جيدة." },
      { id: 118, german: "Wir haben ein Fitnessband für das Training gekauft.", arabic: "اشترينا شريط لياقة بدنية للتدريب." },
      { id: 119, german: "Ich fahre gerne Inline-Skates am Flussufer.", arabic: "أحب التزلج بالعجلات على ضفة النهر." },
      { id: 120, german: "Das Spiel endete unentschieden.", arabic: "انتهت المباراة بالتعادل." }
    ]
  },
  {
    id: "cat-3",
    title: "3. 👋 التعارف والشخصيات (Vorstellen & Kennenlernen)",
    sentences: [
      { id: 121, german: "Wie geht es dir heute?", arabic: "كيف حالك اليوم؟" },
      { id: 122, german: "Mir geht es sehr gut, danke.", arabic: "أنا بخير جداً، شكراً لك." },
      { id: 123, german: "Woher kommst du?", arabic: "من أين أنت؟" },
      { id: 124, german: "Ich komme aus Ägypten.", arabic: "أنا من مصر." },
      { id: 125, german: "Wo wohnst du zurzeit?", arabic: "أين تسكن في الوقت الحالي؟" },
      { id: 126, german: "Ich wohne in einer schönen Stadt.", arabic: "أسكن في مدينة جميلة." },
      { id: 127, german: "Ich heiße Loeay und lerne Deutsch.", arabic: "اسمي لؤي وأتعلم الألمانية." },
      { id: 128, german: "Wie alt bist du?", arabic: "كم عمرك؟" },
      { id: 129, german: "Ich bin zwanzig Jahre alt.", arabic: "عمري عشرون عامًا." },
      { id: 130, german: "Was bist du von Beruf?", arabic: "ما هي مهنتك؟" },
      { id: 131, german: "Ich bin Webentwickler.", arabic: "أنا مطور ويب." },
      { id: 132, german: "Hast du Geschwister?", arabic: "هل لديك إخوة؟" },
      { id: 133, german: "Ja, ich habe eine Schwester.", arabic: "نعم، لدي أخت واحدة." },
      { id: 134, german: "Sprechen Sie Deutsch oder Englisch?", arabic: "هل تتحدث الألمانية أم الإنجليزية؟" },
      { id: 135, german: "Ich spreche ein bisschen Deutsch.", arabic: "أتحدث القليل من الألمانية." },
      { id: 136, german: "Mein Bruder lernt auch in der Schule.", arabic: "أخي يتعلم أيضاً في المدرسة." },
      { id: 137, german: "Unsere Familie wohnt in einem großen Haus.", arabic: "عائلتنا تسكن في منزل كبير." },
      { id: 138, german: "Ich habe zwei Onkel und eine Tante.", arabic: "لدي خالان (أو عمّان) وعمة (أو خالة) واحدة." },
      { id: 139, german: "Mein Opa erzählt immer schöne Geschichten.", arabic: "جدي يحكي دائمًا قصصاً جميلة." },
      { id: 140, german: "Meine Oma kocht das beste Essen.", arabic: "جدتي تطبخ أفضل طعام." },
      { id: 141, german: "Wie ist dein Name?", arabic: "ما هو اسمك؟" },
      { id: 142, german: "Freut mich, dich kennenzulernen!", arabic: "سعيد بمعرفتك!" },
      { id: 143, german: "Ich bin Ledig.", arabic: "أنا أعزب." },
      { id: 144, german: "Ich bin verheiratet und habe zwei Kinder.", arabic: "أنا متزوج ولدي طفلان." },
      { id: 145, german: "Wo bist du geboren?", arabic: "أين ولدت؟" },
      { id: 146, german: "Ich lebe seit zwei Jahren in Deutschland.", arabic: "أعيش في ألمانيا منذ سنتين." },
      { id: 147, german: "Mein Vater ist Lehrer von Beruf.", arabic: "والدي معلم بالمهنة." },
      { id: 148, german: "Ich habe viele gute Freunde.", arabic: "لدي الكثير من الأصدقاء الطيبين." },
      { id: 149, german: "Das ist mein Bester Freund.", arabic: "هذا هو صديقي المفضل." },
      { id: 150, german: "Meine Muttersprache ist Arabisch.", arabic: "لغتي الأم هي العربية." },
      { id: 151, german: "Ich wohne zusammen mit meiner Familie.", arabic: "أنا أسكن مع عائلتي." },
      { id: 152, german: "Ich habe einen kleinen Hund als Haustier.", arabic: "لدي كلب صغير كحيوان أليف." },
      { id: 153, german: "Meine Katze schläft sehr viel.", arabic: "قطتي تنام كثيراً." },
      { id: 154, german: "Meine Nachbarn sind sehr nett.", arabic: "جيراني لطيفون جداً." },
      { id: 155, german: "Ich helfe meinem Freund bei den Hausaufgaben.", arabic: "أساعد صديقي في الواجبات المنزلية." },
      { id: 156, german: "Meine Cousine studiert Medizin.", arabic: "ابنة عمي/خالي تدرس الطب." },
      { id: 157, german: "Er ist sehr hilfsbereit und freundlich.", arabic: "هو خدوم ولطيف للغاية." },
      { id: 158, german: "Wir kennen uns schon seit der Kindheit.", arabic: "نعرف بعضنا البعض منذ الطفولة." },
      { id: 159, german: "Ich verstehe mich gut mit meinen Kollegen.", arabic: "أتفاهم جيداً مع زملائي." },
      { id: 160, german: "Sie ist eine sehr aufgeschlossene Person.", arabic: "هي شخصية منفتحة للغاية." },
      { id: 161, german: "Wie heißt du mit Nachnamen?", arabic: "ما هو اسم عائلتك؟" },
      { id: 162, german: "Ich habe zwei Neffen und eine Nichte.", arabic: "لدي ابنا أخ/أخت وابنة أخ/أخت." },
      { id: 163, german: "Mein Schwager wohnt in Berlin.", arabic: "زوج أختي/أخو زوجتي يسكن في برلين." },
      { id: 164, german: "Wir sind eine große und glückliche Familie.", arabic: "نحن عائلة كبيرة وسعيدة." },
      { id: 165, german: "Ich treffe mich heute Abend mit Freunden.", arabic: "سألتقي ببعض الأصدقاء هذا المساء." },
      { id: 166, german: "Ich habe Verwandte in der Schweiz.", arabic: "لدي أقارب في سويسرا." },
      { id: 167, german: "Sie ist immer pünktlich und zuverlässig.", arabic: "هي دائمًا ملتزمة بالوقت وموثوقة." },
      { id: 168, german: "Wir feierten gestern seinen Geburtstag.", arabic: "احتفلنا بالأمس بعيد ميلاده." },
      { id: 169, german: "Ich bin stolz auf meine kleine Familie.", arabic: "أنا فخور بعائلتي الصغيرة." },
      { id: 170, german: "Wir haben uns lange nicht gesehen!", arabic: "لم ننتقِ منذ فترة طويلة!" },
      { id: 171, german: "Ich lade meine Freunde zum Abendessen ein.", arabic: "أدعو أصدقائي لوجبة العشاء." },
      { id: 172, german: "Mein Schwiegervater ist sehr freundlich.", arabic: "حماي (والد زوجتي/زوجي) لطيف جداً." },
      { id: 173, german: "Ich habe mich gut an das Leben hier gewöhnt.", arabic: "اعتادت جيداً على الحياة هنا." },
      { id: 174, german: "Sie hat ein fröhliches Lachen.", arabic: "لديها ضحكة مبهجة." },
      { id: 175, german: "Wir halten immer zusammen.", arabic: "نحن نتصرف دائماً ونتكاتف معاً." },
      // جمل جديدة للوصول لـ 600
      { id: 176, german: "Er hat einen sehr guten Humor.", arabic: "لديه حس دعابة ممتاز." },
      { id: 177, german: "Meine Tante hat uns gestern besucht.", arabic: "زارتنا عمتي/خالتي بالأمس." },
      { id: 178, german: "Wir sind seit fünf Jahren gut befreundet.", arabic: "نحن أصدقاء مقربون منذ خمس سنوات." },
      { id: 179, german: "Ich schätze seine ehrliche Art.", arabic: "أقدر أسلوبه الصادق." },
      { id: 180, german: "Sie ist eine sehr geduldige Person.", arabic: "هي شخصية صبورة للغاية." }
    ]
  },
  {
    id: "cat-4",
    title: "4. 💼 العمل والمكتب (Arbeit & Büro)",
    sentences: [
      { id: 181, german: "Ich gehe heute früh zur Arbeit.", arabic: "أذهب اليوم مبكرًا إلى العمل." },
      { id: 182, german: "Mein Kollege hilft mir bei der Aufgabe.", arabic: "زميلي يساعدني في المهمة." },
      { id: 183, german: "Heute habe ich einen wichtigen Termin.", arabic: "لدي موعد مهم اليوم." },
      { id: 184, german: "Ich arbeite heute bis fünf Uhr.", arabic: "أعمل اليوم حتى الساعة الخامسة." },
      { id: 185, german: "Ich arbeite heute im Büro.", arabic: "أعمل اليوم في المكتب." },
      { id: 186, german: "Mein Chef gibt mir eine Aufgabe.", arabic: "مديري يعطيني مهمة." },
      { id: 187, german: "Ich schreibe einen Bericht.", arabic: "أكتب تقريرًا." },
      { id: 188, german: "Wir haben eine kurze Besprechung.", arabic: "لدينا اجتماع قصير." },
      { id: 189, german: "Ich sende eine E-Mail.", arabic: "أرسل بريدًا إلكترونيًا." },
      { id: 190, german: "Ich mache eine kleine Pause.", arabic: "آخذ استراحة قصيرة." },
      { id: 191, german: "Danach arbeite ich weiter.", arabic: "بعد ذلك أواصل العمل." },
      { id: 192, german: "Ich habe ein Problem mit dem Computer.", arabic: "لدي مشكلة في الكمبيوتر." },
      { id: 193, german: "Ich habe heute viel zu tun.", arabic: "لدي الكثير لأفعله اليوم." },
      { id: 194, german: "Ich wünsche dir einen schönen Feierabend!", arabic: "أتمنى لك وقت استراحة بعد العمل سعيداً!" },
      { id: 195, german: "Die Besprechung fängt um zehn Uhr an.", arabic: "الاجتماع يبدأ في الساعة العاشرة." },
      { id: 196, german: "Ich muss das Dokument drucken.", arabic: "يجب أن أطبع الوثيقة." },
      { id: 197, german: "Können Sie mir die Datei per E-Mail schicken?", arabic: "هل يمكنك إرسال الملف لي عبر البريد الإلكتروني؟" },
      { id: 198, german: "Ich habe das Projekt pünktlich abgeschlossen.", arabic: "أنهيت المشروع في الوقت المحدد." },
      { id: 199, german: "Wo steht der Fotokopierer?", arabic: "أين تقع ماكينة التصوير؟" },
      { id: 200, german: "Wir suchen einen neuen Mitarbeiter.", arabic: "نحن نرحب/نبحث عن موظف جديد." },
      { id: 201, german: "Ich habe nächste Woche Urlaub.", arabic: "لدي إجازة الأسبوع القادم." },
      { id: 202, german: "Ich muss eine Präsentation vorbereiten.", arabic: "يجب أن أجهز عرضاً تقديمياً." },
      { id: 203, german: "Mein Arbeitsplatz ist sehr aufgeräumt.", arabic: "مكان عملي منظم جداً." },
      { id: 204, german: "Wir arbeiten gemeinsam im Team.", arabic: "نحن نعمل معاً كفريق." },
      { id: 205, german: "Ich habe meine Zugangsdaten vergessen.", arabic: "نسيت بيانات الدخول الخاصة بي." },
      { id: 206, german: "Ich trage die Termine in den Kalender ein.", arabic: "أسجل المواعيد في التقويم." },
      { id: 207, german: "Mein Gehalt wird am Monatsende überwiesen.", arabic: "يتم تحويل راتبي في نهاية الشهر." },
      { id: 208, german: "Ich brauche eine neue Tastatur.", arabic: "أحتاج إلى لوحة مفاتيح جديدة." },
      { id: 209, german: "Der Bildschirm funktioniert nicht mehr.", arabic: "الشاشة لم تعد تعمل." },
      { id: 210, german: "Wir machen morgen eine Kaffeepause.", arabic: "سنأخذ استراحة قهوة غداً." },
      { id: 211, german: "Die Frist läuft morgen ab.", arabic: "الموعد النهائي ينتهي غداً." },
      { id: 212, german: "Ich schicke Ihnen den Vertrag per Post.", arabic: "سأرسل لك العقد عبر البريد." },
      { id: 213, german: "Wir haben die Ziele für dieses Quartal erreicht.", arabic: "حققت أهدافنا لهذا الربع من السنة." },
      { id: 214, german: "Ich mache heute Überstunden.", arabic: "أعمل ساعات إضافية اليوم." },
      { id: 215, german: "Der Chef ist heute auf Geschäftsreise.", arabic: "المدير في رحلة عمل اليوم." },
      { id: 216, german: "Ich speichere die Datei auf dem Server.", arabic: "أحفظ الملف على الخادم (السيرفر)." },
      { id: 217, german: "Wir planen ein wichtiges Projekt.", arabic: "نحن نخطط لمشروع مهم." },
      { id: 218, german: "Haben Sie die Unterlagen unterschrieben?", arabic: "هل وقعت الأوراق/الوثائق؟" },
      { id: 219, german: "Ich leite die E-Mail an Sie weiter.", arabic: "سأعيد توجيه الإيميل إليك." },
      { id: 220, german: "Der Kopierer hat kein Papier mehr.", arabic: "ماكينة التصوير ليس بها ورق." },
      { id: 221, german: "Ich habe ein Vorstellungsgespräch am Dienstag.", arabic: "لدي مقابلة عمل يوم الثلاثاء." },
      { id: 222, german: "Die Firma hat ihren Sitz in Frankfurt.", arabic: "الشركة مقرها في فرانكفورت." },
      { id: 223, german: "Ich schalte mein Arbeitshandy am Abend aus.", arabic: "أغلق هاتف العمل في المساء." },
      { id: 224, german: "Wir arbeiten heute im Homeoffice.", arabic: "نحن نعمل اليوم من المنزل." },
      { id: 225, german: "Ich brauche die Bestätigung von der Personalabteilung.", arabic: "أحتاج لتأكيد من قسم الموارد البشرية (HR)." },
      { id: 226, german: "Die Konferenz findet im ersten Stock statt.", arabic: "المؤتمر يقام في الطابق الأول." },
      { id: 227, german: "Ich habe eine Notiz auf den Schreibtisch gelegt.", arabic: "وضعت ملاحظة على المكتب." },
      { id: 228, german: "Wir verhandeln über das Budget.", arabic: "نحن نتفاوض حول الميزانية." },
      { id: 229, german: "Der Kunde ist sehr zufrieden mit unserem Service.", arabic: "العميل راضٍ جداً عن خدمتنا." },
      { id: 230, german: "Ich schicke den Abwesenheitsnotiz raus.", arabic: "أفعل إشعار الرسالة التلقائية للغياب." },
      // جمل جديدة للوصول لـ 600
      { id: 231, german: "Ich organisiere den Ausbildungsplan.", arabic: "أنظم خطة التدريب المهني." },
      { id: 232, german: "Wir schicken eine Bestätigung per E-Mail.", arabic: "نرسل تأكيداً عبر البريد الإلكتروني." },
      { id: 233, german: "Der Termin wurde verschoben.", arabic: "تم تأجيل/تغيير الموعد." },
      { id: 234, german: "Ich erstelle eine Tabelle in Excel.", arabic: "أنشئ جدولاً في إكسل." },
      { id: 235, german: "Wir besprechen das weitere Vorgehen.", arabic: "نناقش الخطوات التالية." }
    ]
  },
  {
    id: "cat-5",
    title: "5. 📚 الدراسة والتعليم (Lernen & Deutschkurs)",
    sentences: [
      { id: 236, german: "Ich lerne jeden Abend neue Wörter.", arabic: "أتعلم كلمات جديدة كل مساء." },
      { id: 237, german: "Ich lese jeden Tag eine Seite Deutsch.", arabic: "أقرا صفحة ألمانية كل يوم." },
      { id: 238, german: "Wir lernen zusammen für die Prüfung.", arabic: "ندرس معًا من أجل الامتحان." },
      { id: 239, german: "Der Lehrer erklärt die Grammatik.", arabic: "المعلم يشرح القواعد." },
      { id: 240, german: "Ich verstehe die Frage jetzt.", arabic: "أفهم السؤال الآن." },
      { id: 241, german: "Wir wiederholen die Lektion.", arabic: "نراجع الدرس." },
      { id: 242, german: "Ich schreibe meine Notizen.", arabic: "أكتب ملاحظاتي." },
      { id: 243, german: "Wir sprechen im Kurs Deutsch.", arabic: "نتحدث بالألمانية في الكورس." },
      { id: 244, german: "Ich mache jeden Tag eine Übung.", arabic: "أقوم بمرين كل يوم." },
      { id: 245, german: "Heute lernen wir neue Verben.", arabic: "نتعلم أفعالاً جديدة اليوم." },
      { id: 246, german: "Ich stelle eine Frage im Unterricht.", arabic: "أطرح سؤالاً في الدرس." },
      { id: 247, german: "Ich besuche einen Deutschkurs.", arabic: "أحضر دورة لغة ألمانية." },
      { id: 248, german: "Der Kurs beginnt um neun Uhr.", arabic: "الكورس يبدأ الساعة التاسعة." },
      { id: 249, german: "Ich schreibe die Wörter in mein Heft.", arabic: "أكتب الكلمات في دفتري." },
      { id: 250, german: "Der Lehrer spricht langsam.", arabic: "المعلم يتحدث ببطء." },
      { id: 251, german: "Ich verstehe fast alles.", arabic: "أفهم تقريبًا كل شيء." },
      { id: 252, german: "Der Unterricht macht Spaß.", arabic: "الدرس ممتع." },
      { id: 253, german: "Fehler sind normal beim Lernen.", arabic: "الأخطاء طبيعية أثناء التعلم." },
      { id: 254, german: "Übung macht den Meister.", arabic: "التكرار يصنع المهارة." },
      { id: 255, german: "Was bedeutet dieses Wort?", arabic: "ماذا تعني هذه الكلمة؟" },
      { id: 256, german: "Können Sie das bitte an die Tafel schreiben?", arabic: "هل يمكنك كتابة ذلك على السبورة من فضلك؟" },
      { id: 257, german: "Ich möchte meine Aussprache verbessern.", arabic: "أريد تحسين نطقة للكلمات." },
      { id: 258, german: "Morgen schreiben wir einen Test.", arabic: "غداً سنكتب اختباراً." },
      { id: 259, german: "Ich schlage das Wort im Wörterbuch nach.", arabic: "أبحث عن الكلمة في القاموس." },
      { id: 260, german: "Ich habe die A1-Prüfung bestanden.", arabic: "لقد اجتزت امتحان A1." },
      { id: 261, german: "Wir arbeiten in Zweiergruppen.", arabic: "نحن نعمل في ثنائيات." },
      { id: 262, german: "Der Bleistift ist nicht scharf.", arabic: "قلم الرصاص ليس حاداً." },
      { id: 263, german: "Hast du einen Radiergummi für mich?", arabic: "هل لديك ممحاة لي؟" },
      { id: 264, german: "Ich höre mir den Dialog noch einmal an.", arabic: "أستمع إلى الحوار مرة أخرى." },
      { id: 265, german: "Das Thema ist sehr interessant.", arabic: "الموضوع ممتع للغاية." },
      { id: 266, german: "Ich mache mir Lernkarten zum Üben.", arabic: "أصنع بطاقات تذكيرية للتدريب." },
      { id: 267, german: "Wir korrigieren die Aufgaben zusammen.", arabic: "نصحح الواجبات معاً." },
      { id: 268, german: "Können Sie das bitte buchstabieren?", arabic: "هل يمكنك تهجئة ذلك من فضلك؟" },
      { id: 269, german: "Ich muss mehr deutsche Texte lesen.", arabic: "يجب أن أقرأ المزيد من النصوص الألمانية." },
      { id: 270, german: "Der Kursleiter ist sehr geduldig.", arabic: "مدرب الكورس صبور جداً." },
      { id: 271, german: "Das Hörverstehen war etwas schwierig.", arabic: "استماع الفهم كان صعباً قليلاً." },
      { id: 272, german: "Ich versuche, ohne Übersetzung zu denken.", arabic: "أحاول التفكير بدون ترجمة." },
      { id: 273, german: "Wo kann ich den Sprachkurs anmelden?", arabic: "أين يمكنني التسجيل في دورة اللغة؟" },
      { id: 274, german: "Ich lerne die unregelmäßigen Verben auswendig.", arabic: "أحفظ الأفعال الشاذة عن ظهر قلب." },
      { id: 275, german: "Wir haben eine Zertifikatsprüfung im Juni.", arabic: "لدينا اختبار شهادة في شهر يونيو." },
      { id: 276, german: "Ich mache eine Grammatikübung im Buch.", arabic: "أقوم بتمرين قواعد في الكتاب." },
      { id: 277, german: "Kannst du mir diesen Satz korrigieren?", arabic: "هل يمكنك تصحيح هذه الجملة لي؟" },
      { id: 278, german: "Ich benutze eine Sprachlern-App.", arabic: "أستخدم تطبيقًا لتعلم اللغة." },
      { id: 279, german: "Die Prüfung hat zwei Teile.", arabic: "الامتحان يحتوي على جزءين." },
      { id: 280, german: "Ich lerne Deutsch für mein Studium.", arabic: "أتعلم الألمانية من أجل دراستي." },
      { id: 281, german: "Die Hausaufgabe ist für morgen aufgetragen.", arabic: "الواجب المنزلي محدد لموعد غد." },
      { id: 282, german: "Ich habe den Text dreimal gelesen.", arabic: "قرأت النص ثلاث مرات." },
      { id: 283, german: "Der Bibliothekarausweis ist ein Jahr gültig.", arabic: "كارنيه المكتبة صالحة لمدة سنة." },
      { id: 284, german: "Wir bilden kurze Sätze mit den neuen Wörtern.", arabic: "نشكل جملًا قصيرة بالكلمات الجديدة." },
      { id: 285, german: "Ich habe eine Frage zur Satzstellung.", arabic: "لدي سؤال حول ترتيب الجملة." },
      { id: 286, german: "Ich habe einen Sprachpartner zum Sprechen gefunden.", arabic: "وجدت شريكاً لغوياً للتحدث معه." },
      { id: 287, german: "Die Dozentin hält eine interessante Vorlesung.", arabic: "المحاضِرة تلقي محاضرة ممتعة." },
      { id: 288, german: "Wir schreiben eine Zusammenfassung der Lektion.", arabic: "نحن نكتب ملخصاً للدرس." },
      { id: 289, german: "Ich muss das Kapitel noch einmal lesen.", arabic: "يجب أن أقرأ الفصل مرة أخرى." },
      { id: 290, german: "Wir machen einen Einstufungstest am Montag.", arabic: "سنقوم باختبار تحديد مستوى يوم الاثنين." },
      // جمل جديدة للوصول لـ 600
      { id: 291, german: "Ich benutze Karteikarten zum Vokabellernen.", arabic: "أستخدم البطاقات الاستذكارية لتعلم المفردات." },
      { id: 292, german: "Das Ergebnis der Prüfung kommt nächste Woche.", arabic: "نتيجة الامتحان ستظهر الأسبوع القادم." },
      { id: 293, german: "Wir haben die Aussprache im Unterricht geübt.", arabic: "تدربنا على النطق في الدرس." },
      { id: 294, german: "Ich schreibe den Aufsatz mit einem Füller.", arabic: "أكتب المقال بقلم حبر." },
      { id: 295, german: "Das Wörterbuch steht im Regalfach.", arabic: "القاموس موجود في رف المكتبة." }
    ]
  },
  {
    id: "cat-6",
    title: "6. 🛒 التسوق والمال (Einkaufen & Geld)",
    sentences: [
      { id: 296, german: "Ich kaufe heute Lebensmittel.", arabic: "أشتري مواد غذائية اليوم." },
      { id: 297, german: "Ich gehe am Abend einkaufen.", arabic: "أذهب للتسوق مساءً." },
      { id: 298, german: "Ich kaufe Brot und Milch.", arabic: "أشتري خبزًا وحليبًا." },
      { id: 299, german: "Die Verkäuferin ist freundlich.", arabic: "البائعة لطيفة." },
      { id: 300, german: "Ich bezahle an der Kasse.", arabic: "أدفع عند الصندوق." },
      { id: 301, german: "Wie viel kostet das?", arabic: "كم يتكلف هذا؟" },
      { id: 302, german: "Die Rechnung, bitte!", arabic: "الفاتورة من فضلك!" },
      { id: 303, german: "Kann ich mit Karte bezahlen?", arabic: "هل يمكنني الدفع بالبطاقة؟" },
      { id: 304, german: "Ich habe nur Bargeld dabei.", arabic: "معي نقود كاش فقط." },
      { id: 305, german: "Das ist mir zu teuer.", arabic: "هذا غالي الثمن بالنسبة لي." },
      { id: 306, german: "Haben Sie etwas Günstigeres?", arabic: "هل لديك شيء أرخص؟" },
      { id: 307, german: "Ich hätte gern ein Kilogramm Äpfel.", arabic: "أود الحصول على كيلو جرام من التفاح." },
      { id: 308, german: "Sonst noch etwas?", arabic: "أي شيء آخر؟" },
      { id: 309, german: "Nein danke, das ist alles.", arabic: "لا شكراً، هذا كل شيء." },
      { id: 310, german: "Ich brauche die Quittung, bitte.", arabic: "أحتاج إلى الإيصال (الفاكتورة) من فضلك." },
      { id: 311, german: "Ich muss Geld am Geldautomaten abheben.", arabic: "يجب أن أسحب نقوداً من الصراف الآلي." },
      { id: 312, german: "Das Hemd passt mir sehr gut.", arabic: "القميص يناسبني جداً." },
      { id: 313, german: "Haben Sie das auch in Größe L?", arabic: "هل لديك هذا أيضاً بمقاس L؟" },
      { id: 314, german: "Ich probiere die Jacke an.", arabic: "سأقيس الجاكيت." },
      { id: 315, german: "Ich möchte diese Hose umtauschen.", arabic: "أريد استبدال هذا البنطال." },
      { id: 316, german: "Wo finde ich die Umkleidekabine?", arabic: "أين أجد غرفة قياس الملابس؟" },
      { id: 317, german: "Gibt es diese Schuhe in Schwarz?", arabic: "هل يتوفر هذا الحذاء باللون الأسود؟" },
      { id: 318, german: "Das ist ein Sonderangebot.", arabic: "هذا عرض خاص." },
      { id: 319, german: "Der Einkaufswagen ist voll.", arabic: "عربة التسوق مليئة." },
      { id: 320, german: "Haben Sie eine Kundenkarte?", arabic: "هل لديك بطاقة عملاء؟" },
      { id: 321, german: "Wo finde ich frisches Gemüse?", arabic: "أين أجد خضروات طازجة؟" },
      { id: 322, german: "Das Mindesthaltbarkeitsdatum ist abgelaufen.", arabic: "تاريخ انتهاء الصلاحية انتهى." },
      { id: 323, german: "Ich brauche noch eine Plastiktüte.", arabic: "أحتاج إلى كيس بلاستيكي آخر." },
      { id: 324, german: "Hier gibt es fünfzig Prozent Rabatt.", arabic: "هناك خصم خمسون بالمائة هنا." },
      { id: 325, german: "Ich habe kein Kleingeld mehr.", arabic: "لم يعد معي فكة صغيرة." },
      { id: 326, german: "Ich muss die Rechnung pünktlich bezahlen.", arabic: "يجب أن أدفع الفاتورة في الموعد." },
      { id: 327, german: "Wo ist die Bäckerei in der Nähe?", arabic: "أين المخبز القريب؟" },
      { id: 328, german: "Ich kaufe sechs Eier und Butter.", arabic: "أشتري ست بيضات وزبدة." },
      { id: 329, german: "Die Tasche ist sehr praktisch.", arabic: "الحقيبة عملية جداً." },
      { id: 330, german: "Haben Sie Wechselgeld für einen Fünfziger?", arabic: "هل لديك فكة لورقة أربعين/خمسين يورو؟" },
      { id: 331, german: "Die Qualität dieser Kleidung ist hervorragend.", arabic: "جودة هذه الملابس ممتازة." },
      { id: 332, german: "Wo kann ich den Pfandbon einlösen?", arabic: "أين يمكنني صرف إيصال المرتجعات (الزجاجات)؟" },
      { id: 333, german: "Gibt es eine Garantie auf dieses Gerät?", arabic: "هل يوجد ضمان على هذا الجهاز؟" },
      { id: 334, german: "Ich kaufe lieber Bioprodukte.", arabic: "أفضل شراء المنتجات العضوية (البايو)." },
      { id: 335, german: "Das Geschäft hat heute geschlossen.", arabic: "المحل مغلق اليوم." },
      { id: 336, german: "Kann ich das Kontaktlos bezahlen?", arabic: "هل يمكنني الدفع بدون تلامس (Tap)؟" },
      { id: 337, german: "Ich vergleiche die Preise im Internet.", arabic: "أقارن الأسعار على الإنترنت." },
      { id: 338, german: "Das Buch ist im Preis reduziert.", arabic: "الكتاب مخفض السعر." },
      { id: 339, german: "Ich habe mein Portemonnaie vergessen.", arabic: "نسيت محفظتي." },
      { id: 340, german: "Die Öffnungszeiten stehen an der Tür.", arabic: "أوقات العمل مكتوبة على الباب." },
      { id: 341, german: "Kann ich die Ware online bestellen?", arabic: "هل يمكنني طلب البضاعة عبر الإنترنت؟" },
      { id: 342, german: "Die Lieferung dauert etwa zwei Werktage.", arabic: "التوصيل يستغرق حوالي يومي عمل." },
      { id: 343, german: "Ich möchte ein Sparkonto eröffnen.", arabic: "أريد فتح حساب توفير." },
      { id: 344, german: "Wo ist die Rolltreppe nach oben?", arabic: "أين السلم الكهربائي للصعود للأعلى؟" },
      { id: 345, german: "Das Hemd ist aus reiner Baumwolle.", arabic: "القميص مصنوع من القطن الخالص." },
      { id: 346, german: "Ich trage die Einkäufe in einer Papiertüte.", arabic: "أحمل المشتريات في كيس ورقي." },
      { id: 347, german: "Der Supermarkt liegt gleich um die Ecke.", arabic: "السوبرماركت يقع عند الناصية تماماً." },
      { id: 348, german: "Haben Sie diesen Artikel auf Lager?", arabic: "هل لديكم هذا المنتج في المخزن؟" },
      { id: 349, german: "Ich möchte eine Reklamation machen.", arabic: "أريد تقديم شكوى/استرجاع بسبب عيب." },
      { id: 350, german: "Die Versandkosten sind im Preis enthalten.", arabic: "مصاريف الشحن مشمولة في السعر." },
      // جمل جديدة للوصول لـ 600
      { id: 351, german: "Ich habe einen Gutschein für das Bekleidungsgeschäft.", arabic: "لدي قسيمة شراء لمحل الملابس." },
      { id: 352, german: "Die Preise sind in Euro angegeben.", arabic: "الأسعار معروضة باليورو." },
      { id: 353, german: "Wir bieten kostenlosen Rückversand an.", arabic: "نحن نقدم خدمة الإرجاع المجاني." },
      { id: 354, german: "Wo finde ich die Drogerieabteilung?", arabic: "أين أجد قسم مستحضرات العناية والتنظيف؟" },
      { id: 355, german: "Ich bezahle per Überweisung.", arabic: "أدفع عن طريق التحويل البنكي." }
    ]
  },
  {
    id: "cat-7",
    title: "7. 🍕 الطعام والشراب (Essen & Trinken)",
    sentences: [
      { id: 356, german: "Ich trinke morgens gern Tee.", arabic: "أحب شرب الشاي صباحًا." },
      { id: 357, german: "Ich koche heute Reis und Gemüse.", arabic: "أطبخ اليوم أرزًا وخضارًا." },
      { id: 358, german: "Meine Mutter macht das Frühstück.", arabic: "أمي تحضر الإفطار." },
      { id: 359, german: "Wir essen zusammen zu Mittag.", arabic: "نتناول الغداء معًا." },
      { id: 360, german: "Das Essen schmeckt sehr gut.", arabic: "الطعام طعمه جيد جداً." },
      { id: 361, german: "Ich bestelle Reis mit Hähnchen.", arabic: "أطلب أرزًا مع دجاج." },
      { id: 362, german: "Guten Appetit beim Essen!", arabic: "شهية طيبة عند الأكل!" },
      { id: 363, german: "Ich trinke ein Glas Wasser.", arabic: "أشرب كوباً من الماء." },
      { id: 364, german: "Ich möchte einen Tisch reservieren.", arabic: "أريد حجز طاولة." },
      { id: 365, german: "Mein Lieblingsessen ist Pizza.", arabic: "طعامي المفضّل هو البيتزا." },
      { id: 366, german: "Ich trinke Kaffee ohne Zucker.", arabic: "أشرب القهوة بدون سكر." },
      { id: 367, german: "Kannst du mir die Speisekarte bringen?", arabic: "هل يمكنك إحضار قائمة الطعام لي؟" },
      { id: 368, german: "Das Schnitzel schmeckt sehr lecker.", arabic: "الشنسل طعمه لديد جداً." },
      { id: 369, german: "Ich nehme ein Mineralwasser.", arabic: "سآخذ مياه معدنية." },
      { id: 370, german: "Kannst du mir bitte das Salz geben?", arabic: "هل يمكنك أعطائي الملح من فضلك؟" },
      { id: 371, german: "Ich bin schon satt, danke.", arabic: "أنا شبعت بالفعل، شكراً." },
      { id: 372, german: "Ich habe großen Hunger.", arabic: "أنا جائع جداً." },
      { id: 373, german: "Ich habe Durst, ich brauche etwas zu trinken.", arabic: "أنا عطشان، أحتاج شيئاً لأشربه." },
      { id: 374, german: "Wir bestellen eine Pizza zum Mitnehmen.", arabic: "نطلب بيتزا للأخذ معًا (سفري)." },
      { id: 375, german: "Ich esse lieber Fisch als Fleisch.", arabic: "أفضل أكل السمك على اللحم." },
      { id: 376, german: "Ich möchte gern eine Suppe als Vorspeise.", arabic: "أود شوربة كمقبلات من فضلك." },
      { id: 377, german: "Ist das Essen scharf?", arabic: "هل الطعام حار (حار المذاق)؟" },
      { id: 378, german: "Ich ernähre mich vegetarisch.", arabic: "أنا أتبع نظاماً غذائياً نباتياً." },
      { id: 379, german: "Wir hätten gern die Speisekarte, bitte.", arabic: "نود الحصول على قائمة الطعام من فضلك." },
      { id: 380, german: "Stimmt so, der Rest ist für Sie!", arabic: "احتفظ بالباقي لك (إكرامية في المطعم)!" },
      { id: 381, german: "Das Brot ist ganz frisch.", arabic: "الخبز طازج تماماً." },
      { id: 382, german: "Ich möchte noch ein Stück Kuchen.", arabic: "أريد قطعة أخرى من الكعك." },
      { id: 383, german: "Prost und zum Wohl!", arabic: "في صحتك! (نخب الصحه)." },
      { id: 384, german: "Das Fleisch ist sehr zart.", arabic: "اللحم طري جداً." },
      { id: 385, german: "Trinkst du lieber Kaffee oder Tee?", arabic: "هل تحب شرب القهوة أم الشاي أكثر؟" },
      { id: 386, german: "Ich esse gern frischen Salat.", arabic: "أحب أكل السلطة الطازجة." },
      { id: 387, german: "Möchtest du Eis zum Nachtisch?", arabic: "هل ترغب في آيس كريم كتحلية؟" },
      { id: 388, german: "Der Apfelkuchen schmeckt wunderbar.", arabic: "كعكة التفاح طعمها رائع." },
      { id: 389, german: "Ich trinke gern eine heiße Schokolade.", arabic: "أحب شرب شوكولاتة ساخنة." },
      { id: 390, german: "Wir frühstücken jeden Morgen um sieben Uhr.", arabic: "نتناول الإفطار كل صباح في الساعة السابعة." },
      { id: 391, german: "Können wir getrennt bezahlen?", arabic: "هل يمكننا الدفع بشكل منفصل؟" },
      { id: 392, german: "Das Hähnchen ist perfekt gewürzt.", arabic: "الدجاج متبل بشكل ممتاز." },
      { id: 393, german: "Möchten Sie noch etwas Olivenöl dazu?", arabic: "هل ترغب في المزيد من زيت الزيتون مع ذلك؟" },
      { id: 394, german: "Ich möchte einen Saft ohne Eis.", arabic: "أريد عصيراً بدون ثلج." },
      { id: 395, german: "Vielen Dank, das Essen war fantastisch.", arabic: "شكراً جزيلاً، كان الطعام رائعاً." },
      { id: 396, german: "Der Kellner bringt die Getränke.", arabic: "النادل يحضر المشروبات." },
      { id: 397, german: "Ich nehme einen Kaffee mit Milch.", arabic: "سآخذ قهوة مع حليب." },
      { id: 398, german: "Gibt es hier laktosefreie Milch?", arabic: "هل يوجد حليب خالي من اللاكتوز هنا؟" },
      { id: 399, german: "Ich hätte gern eine kleine Portion.", arabic: "أود الحصول على وجبة صغيرة." },
      { id: 400, german: "Die Pizza ist direkt aus dem Ofen.", arabic: "البيتزا مباشرة من الفرن." },
      { id: 401, german: "Können Sie die Suppe bitte aufwärmen?", arabic: "هل يمكنك تسخين الشوربة من فضلك؟" },
      { id: 402, german: "Das Restaurant hat einen schönen Biergarten.", arabic: "المطعم يحتوي على جلسة خارجية جميلة." },
      { id: 403, german: "Die Nudeln sind perfekt al dente gekocht.", arabic: "المكرونة مطبوخة بشكل مثالي." },
      { id: 404, german: "Ich trinke vor dem Schlafen einen Kräutertee.", arabic: "أشرب شاي أعشاب قبل النوم." },
      { id: 405, german: "Wir haben ein Drei-Gänge-Menü bestellt.", arabic: "طلبنا قائمة طعام من ثلاثة أطباق." },
      { id: 406, german: "Ich probiere gerne regionale Spezialitäten.", arabic: "أحب تجربة الأطباق المحلية المتميزة." },
      { id: 407, german: "Das Gericht ist sehr schmackhaft.", arabic: "الطبق لذيذ جداً ومشهٍ." },
      { id: 408, german: "Ich habe eine Reservierung für vier Personen.", arabic: "لدي حجز لربعة أفراد." },
      { id: 409, german: "Möchten Sie Pfeffer zum Salat?", arabic: "هل ترغب في فلفل أسود مع السلطة؟" },
      { id: 410, german: "Das Brot wird mit Butter serviert.", arabic: "يقدم الخبز مع الزبدة." },
      // جمل جديدة للوصول لـ 600
      { id: 411, german: "Die Soße ist sehr cremig und lecker.", arabic: "الصلصة كريمية ولذيذة جداً." },
      { id: 412, german: "Das Wasser ist ohne Kohlensäure.", arabic: "الماء بدون غازات (غير فوار)." },
      { id: 413, german: "Der Fisch wurde frisch gefangen.", arabic: "السمك تم صيده طازجاً." },
      { id: 414, german: "Wir haben einen Tisch im Innenbereich gewählt.", arabic: "اخترنا طاولة في الصالة الداخلية." },
      { id: 415, german: "Die Nachspeise war köstlich.", arabic: "الحلوى كانت لديدة للغاية." }
    ]
  },
  {
    id: "cat-8",
    title: "8. 🚗 السفر والمواصلات (Reisen & Verkehr)",
    sentences: [
      { id: 416, german: "Ich fahre jeden Tag mit dem Bus.", arabic: "أذهب كل يوم بالحافلة." },
      { id: 417, german: "Wo ist die nächste Haltestelle?", arabic: "أين تقع المحطة القادمة؟" },
      { id: 418, german: "Ich möchte ein Ticket kaufen.", arabic: "أريد شراء تذكرة." },
      { id: 419, german: "Ich suche den Bahnhof.", arabic: "أنا أبحث عن محطة القطار." },
      { id: 420, german: "Gehen Sie bitte geradeaus.", arabic: "امشِ مباشرة من فضلك." },
      { id: 421, german: "Wann fährt der nächste Zug?", arabic: "متى ينطلق القطار القادم؟" },
      { id: 422, german: "Der Zug hat zehn Minuten Verspätung.", arabic: "القطار متأخر عشر دقائق." },
      { id: 423, german: "Der Bus kommt in fünf Minuten.", arabic: "الحافلة ستصل خلال خمس دقائق." },
      { id: 424, german: "Ich steige an der nächsten Station aus.", arabic: "سأنزل في المحطة القادمة." },
      { id: 425, german: "Muss ich hier umsteigen?", arabic: "هل يجب عليّ التبديل (تغيير المواصلة) هنا؟" },
      { id: 426, german: "Können Sie mir ein Taxi rufen?", arabic: "هل يمكنك الاتصال بتاكسي من أجلي؟" },
      { id: 427, german: "Der Zug kommt pünktlich an.", arabic: "القطار يصل في الموعد المحدد." },
      { id: 428, german: "Das Flugzeug landet in zwanzig Minuten.", arabic: "الطائرة تهبط خلال عشرين دقيقة." },
      { id: 429, german: "Wo ist die Gepäckausgabe?", arabic: "أين يقع مكان استلام الأمتعة؟" },
      { id: 430, german: "Gute Reise!", arabic: "رحلة سعيدة!" },
      { id: 431, german: "Ich habe meinen Pass vergessen.", arabic: "لقد نسيت جواز سفري." },
      { id: 432, german: "Zeigen Sie mir bitte Ihren Ausweis.", arabic: "أرني بطاقة هويتك من فضلك." },
      { id: 433, german: "Biegen Sie an der Kreuzung nach rechts ab.", arabic: "انعطف إلى اليمين عند التقاطع." },
      { id: 434, german: "Ich habe nur ein Handgepäck dabei.", arabic: "معي حقيبة يد فقط." },
      { id: 435, german: "Fahren Sie bitte vorsichtig!", arabic: "قُد بحذر من فضلك!" },
      { id: 436, german: "Von welchem Gleis fährt der Zug ab?", arabic: "من أي رصيف ينطلق القطار؟" },
      { id: 437, german: "Ich habe ein Ticket hin und zurück gekauft.", arabic: "اشتريت تذكرة ذهاب وإياد." },
      { id: 438, german: "Der Flug hat leider Verspätung.", arabic: "الرحلة الجوية متأخرة مع الأسف." },
      { id: 439, german: "Wo kann ich ein Auto mieten?", arabic: "أين يمكنني استئجار سيارة؟" },
      { id: 440, german: "Ich möchte ein Hotelzimmer reservieren.", arabic: "أريد حجز غرفة في فندق." },
      { id: 441, german: "Ist die Fahrt sehr lang?", arabic: "هل الرحلة طويلة جداً؟" },
      { id: 442, german: "Wo ist die Auskunft?", arabic: "أين تقع الاستعلامات؟" },
      { id: 443, german: "Ich habe den Anschlusszug verpasst.", arabic: "لقد فاتني قطار الوصلة." },
      { id: 444, german: "Bitte entwertet eure Fahrkarten!", arabic: "من فضلك اختموا تذاكركم!" },
      { id: 445, german: "Die Ampel steht auf Rot.", arabic: "إشارة المرور حمراء." },
      { id: 446, german: "Wir fahren mit der U-Bahn zum Zentrum.", arabic: "نحن نركب مترو الأنفاق إلى المركز." },
      { id: 447, german: "Gibt es hier eine Parkgarage?", arabic: "هل يوجد جراج سيارات هنا؟" },
      { id: 448, german: "Die Straße ist voll von Autos.", arabic: "الشارع مليء بالسيارات." },
      { id: 449, german: "Ich brauche eine Fahrkarte für die Zone A.", arabic: "أحتاج تذكرة للمنطقة A." },
      { id: 450, german: "Wir sind endlich am Ziel angekommen.", arabic: "وصلنا أخيراً إلى وجهتنا." },
      { id: 451, german: "Der Zug hält an allen Stationen.", arabic: "القطار يتوقف في جميع المحطات." },
      { id: 452, german: "Haben Sie einen Sitzplatz reserviert?", arabic: "هل حجزت مقعداً؟" },
      { id: 453, german: "Wo ist die Fahrkartenkontrolle?", arabic: "أين مكان تفتيش التذاكر؟" },
      { id: 454, german: "Ich fahre gerne mit dem Fahrrad zur Arbeit.", arabic: "أحب الذهاب إلى العمل بالدراجة." },
      { id: 455, german: "Die Autobahn ist frei von Stau.", arabic: "الطريق السريع خالٍ من الازدحام." },
      { id: 456, german: "Wo ist das Fundbüro am Flughafen?", arabic: "أين مكتب المفقودات بالمطار؟" },
      { id: 457, german: "Bitte schnallen Sie sich an!", arabic: "من فضلك اربط حزام الأمان!" },
      { id: 458, german: "Wir machen eine Pause an der Raststätte.", arabic: "سنتوقف في استراحة الطريق السريع." },
      { id: 459, german: "Der Zug fährt in fünf Minuten ab.", arabic: "القطار سينطلق بعد خمس دقائق." },
      { id: 460, german: "Ich habe mein Gepäck im Taxi vergessen.", arabic: "نسيت أمتعتي في التاكسي." },
      { id: 461, german: "Das Flugzeug startet von Gate B12.", arabic: "الطائرة تقلع من البوابة B12." },
      { id: 462, german: "Wo ist die nächste Straßenbahnhaltestelle?", arabic: "أين محطة الترام التالية؟" },
      { id: 463, german: "Der Passagier sucht seinen Sitzplatz.", arabic: "الراكب يكتب بحثاً عن مقعده." },
      { id: 464, german: "Die Fahrkarte gilt für den ganzen Tag.", arabic: "التذكرة صالحة لليوم بأكمله." },
      { id: 465, german: "Ich wünsche dir einen guten Flug!", arabic: "أتمنى لك رحلة جوية سعيدة!" },
      { id: 466, german: "Wir haben den Fahrplan online überprüft.", arabic: "تحققنا من جدول المواعيد على الإنترنت." },
      { id: 467, german: "Das Taxi wartet vor dem Haupteingang.", arabic: "التاكسي ينتظر أمام المدخل الرئيسي." },
      { id: 468, german: "Ich steige an der Endstation um.", arabic: "سأغير المواصلات في المحطة الأخيرة." },
      { id: 469, german: "Die Fähre überquert den Fluss.", arabic: "العبّارة تعبر النهر." },
      { id: 470, german: "Beachten Sie die Durchsagen am Bahnsteig!", arabic: "انتبه للإعلانات الصوتية على رصيف القطار!" },
      // جمل جديدة للوصول لـ 600
      { id: 471, german: "Der Schaffner kontrolliert die Tickets.", arabic: "مفتش القطار يفحص التذاكر." },
      { id: 472, german: "Wir nehmen die Abfahrt Richtung Berlin.", arabic: "نأخذ المخرج باتجاه برلين." },
      { id: 473, german: "Das Hotel bietet einen Shuttle-Service an.", arabic: "الفندق يقدم خدمة نقل بالحافلة." },
      { id: 474, german: "Der Tunnel ist wegen Bauarbeiten gesperrt.", arabic: "النفق مغلق بسبب أعمال الصيانة." },
      { id: 475, german: "Bitte halten Sie den Notausgang frei!", arabic: "من فضلك حافظ على مخرج الطوارئ خالياً!" }
    ]
  },
  {
    id: "cat-9",
    title: "9. 🏠 البيت والروتين اليومي (Zuhause & Alltag)",
    sentences: [
      { id: 476, german: "Ich gehe nach der Arbeit nach Hause.", arabic: "أذهب إلى المنزل بعد العمل." },
      { id: 477, german: "Ich mache das Fenster auf.", arabic: "أفتح النافذة." },
      { id: 478, german: "Danach sehe ich fern.", arabic: "بعد ذلك أشاهد التلفاز." },
      { id: 479, german: "Ich stehe jeden Morgen um sechs Uhr auf.", arabic: "أستيقظ كل صباح في الساعة السادسة." },
      { id: 480, german: "Ich putze meine Zähne.", arabic: "أنظف أسناني." },
      { id: 481, german: "Ich ziehe mich schnell an.", arabic: "أرتدي ملابسي بسرعة." },
      { id: 482, german: "Ich suche eine kleine Wohnung.", arabic: "أنا أبحث عن شقة صغيرة." },
      { id: 483, german: "Das Zimmer ist hell und sauber.", arabic: "الغرفة مضيئة ونظيفة." },
      { id: 484, german: "Ich gehe jetzt ins Bett.", arabic: "أنا ذاهب إلى السرير الآن." },
      { id: 485, german: "Schlaf gut und träum etwas Schönes!", arabic: "نم جيداً وأحلاماً سعيدة!" },
      { id: 486, german: "Ich öffne die Tür.", arabic: "أفتح الباب." },
      { id: 487, german: "Bitte schließen Sie die Tür.", arabic: "من فضلك أغلق الباب." },
      { id: 488, german: "Schalten Sie bitte das Licht aus.", arabic: "من فضلك أطفئ الضوء." },
      { id: 489, german: "Ich wasche meine Wäsche am Wochenende.", arabic: "أغسل ملابسي في نهاية الأسبوع." },
      { id: 490, german: "Ich muss die Küche aufräumen.", arabic: "يجب أن أنظف / أرتب المطبخ." },
      { id: 491, german: "Bring bitte den Müll nach draußen!", arabic: "من فضلك أخرج القمامة إلى الخارج!" },
      { id: 492, german: "Ich sauge heute das Wohnzimmer.", arabic: "أنظف غرفة المعيشة بالمكنسة الكهربائية اليوم." },
      { id: 493, german: "Ich wische den Tisch ab.", arabic: "أمسح الطاولة." },
      { id: 494, german: "Wir müssen die Blumen gießen.", arabic: "يجب علينا سقي الزهور." },
      { id: 495, german: "Der Kühlschrank ist voll.", arabic: "الثلاجة مليئة." },
      { id: 496, german: "Ich mache mir am Morgen einen Kaffee.", arabic: "أحضر لنفسي قهوة في الصباح." },
      { id: 497, german: "Die Schlüssel liegen auf dem Tisch.", arabic: "المفاتيح موضوعة على الطاولة." },
      { id: 498, german: "Ich lüfte das Schlafzimmer jeden Tag.", arabic: "أهوي غرفة النوم كل يوم." },
      { id: 499, german: "Ich nehme eine heiße Dusche.", arabic: "آخذ حماماً دافئاً." },
      { id: 500, german: "Ich mache das Bett nach dem Aufstehen.", arabic: "أرتب السرير بعد الاستيقاظ." },
      { id: 501, german: "Ich koche ein leckeres Abendessen.", arabic: "أطبخ عشاءً لذيذاً." },
      { id: 502, german: "Wo ist die Fernbedienung?", arabic: "أين جهاز التحكم عن بعد (الريموت)؟" },
      { id: 503, german: "Ich stecke den Stecker in die Steckdose.", arabic: "أضع القابس في المقبس (الفيشة)." },
      { id: 504, german: "Das Bad ist frisch geputzt.", arabic: "الحمام تم تنظيفه حديثاً." },
      { id: 505, german: "Wir wohnen im zweiten Stock.", arabic: "نحن نسكن في الطابق الثاني." },
      { id: 506, german: "Ich gieße die Pflanzen auf dem Balkon.", arabic: "أسقي النباتات في الشرفة." },
      { id: 507, german: "Ich ziehe meine Schuhe an der Tür aus.", arabic: "أخلع حذائي عند الباب." },
      { id: 508, german: "Wir essen jeden Abend zusammen am Esstisch.", arabic: "نأكل كل مساء معاً على طاولة الطعام." },
      { id: 509, german: "Das Sofa im Wohnzimmer ist sehr bequem.", arabic: "الأريكة في غرفة المعيشة مريحة جداً." },
      { id: 510, german: "Ich stelle den Wecker auf sieben Uhr.", arabic: "أضبط المنبه على الساعة السابعة." },
      { id: 511, german: "Ich hänge die Wäsche auf den Wäscheständer.", arabic: "أنشر الغسيل على منشر الغسيل." },
      { id: 512, german: "Ich bügle meine Hemden für die Arbeit.", arabic: "أكوي قمصاني للعمل." },
      { id: 513, german: "Der Postbote hat ein Paket brought.", arabic: "ساعي البريد أحضر طرداً." },
      { id: 514, german: "Ich muss den Teppich reinigen.", arabic: "يجب أن أنظف السجادة." },
      { id: 515, german: "Die Nachbarn machen am Abend Musik.", arabic: "الجيران يعزفون/يشغلون الموسيقى في المساء." },
      { id: 516, german: "Ich schließe die Haustür ab.", arabic: "أغلق باب المنزل بالمفتاح." },
      { id: 517, german: "Wo steht der Mülleimer?", arabic: "أين تقع سلة المهملات؟" },
      { id: 518, german: "Ich räume den Geschirrspüler ein.", arabic: "أرتب الأطباق في غسالة الأطباق." },
      { id: 519, german: "Das Fenster ist leicht geöffnet.", arabic: "النافذة مفتوحة قليلاً." },
      { id: 520, german: "Ich schlafe am Wochenende gerne aus.", arabic: "أحب النوم براحتي في نهاية الأسبوع." },
      { id: 521, german: "Ich bringe das Altpapier zum Container.", arabic: "أحضر أوراق القديمة إلى الحاوية." },
      { id: 522, german: "Der Spiegel im Flur ist sauber.", arabic: "المرآة في الممر نظيفة." },
      { id: 523, german: "Ich habe den Backofen vorgeheizt.", arabic: "قمت بتسخين الفرن مسبقًا." },
      { id: 524, german: "Wir haben eine neue Waschmaschine bestellt.", arabic: "طلبنا غسالة جديدة." },
      { id: 525, german: "Die Nachbarschaft ist sehr ruhig.", arabic: "الحي السكني هادئ جداً." },
      { id: 526, german: "Ich wische den Fußboden mit einem Mopp.", arabic: "أمسح الأرضية بـ الممسحة." },
      { id: 527, german: "Die Klingel an der Tür funktioniert wieder.", arabic: "جرس الباب يعمل مجدداً." },
      { id: 528, german: "Ich sortiere die Kleidung im Kleiderschrank.", arabic: "أفرز الملابس في خزانة الملابس." },
      { id: 529, german: "Der Kamin wärmt das ganze Zimmer.", arabic: "المدفأة تدفئ الغرفة بأكملها." },
      { id: 530, german: "Ich schalte das Radio in der Küche ein.", arabic: "أشغل الراديو في المطبخ." },
      // جمل جديدة للوصول لـ 600
      { id: 531, german: "Ich wechsele die Bettwäsche einmal pro Woche.", arabic: "أغير أغطية السرير مرة واحدة في الأسبوع." },
      { id: 532, german: "Der Staubsaugerbeutel ist voll.", arabic: "كيس المكنسة الكهربائية امتلأ." },
      { id: 533, german: "Ich putze die Fenster am Frühlingsanfang.", arabic: "أنظف النوافذ في بداية الربيع." },
      { id: 534, german: "Die Heizung ist auf Stufe drei eingestellt.", arabic: "التدفئة مضبوطة على المستوى الثالث." },
      { id: 535, german: "Ich zünde eine Kerze im Wohnzimmer an.", arabic: "أشعل شمعة في غرفة المعيشة." }
    ]
  },
  {
    id: "cat-10",
    title: "10. ☀️ الطقس والوقت والمشاعر (Wetter, Zeit & Gefühle)",
    sentences: [
      { id: 536, german: "Die Sonne scheint heute.", arabic: "الشمس مشرفة اليوم." },
      { id: 537, german: "Das Wetter ist angenehm.", arabic: "الطقس لطيف." },
      { id: 538, german: "Heute ist das Wetter sehr kalt.", arabic: "الطقس بارد جداً اليوم." },
      { id: 539, german: "Es regnet draußen stark.", arabic: "إنها تمطر بغزارة بالخارج." },
      { id: 540, german: "Ich brauche einen Regenschirm.", arabic: "أحتاج إلى مظلة مطر." },
      { id: 541, german: "Welcher Tag ist heute?", arabic: "أي يوم نحن اليوم؟" },
      { id: 542, german: "Entschuldigung, wie spät ist es?", arabic: "عذراً، كم الساعة الآن؟" },
      { id: 543, german: "Ich bin heute sehr müde.", arabic: "أنا تعبان جداً اليوم." },
      { id: 544, german: "Ich freue mich auf das Wochenende.", arabic: "أنا يتطلع بشوق إلى نهاية الأسبوع." },
      { id: 545, german: "Das war ein wunderschöner Tag.", arabic: "كان هذا يوماً رائعاً جداً." },
      { id: 546, german: "Es schneit draußen sehr schön.", arabic: "يتساقط الثلج بالخارج بشكل جميل." },
      { id: 547, german: "Der Wind ist heute sehr stark.", arabic: "الرياح قوية جداً اليوم." },
      { id: 548, german: "Morgen wird es sonnig sein.", arabic: "غداً سيكون الجو مشمساً." },
      { id: 549, german: "Ich bin sehr stolz auf dich.", arabic: "أنا فخور بك جداً." },
      { id: 550, german: "Ich drücke dir die Daumen!", arabic: "أتمنى لك التوفيق من كل قلبي!" },
      { id: 551, german: "Du schaffst das ganz bestimmt!", arabic: "ستنجح في ذلك بالتأكيد!" },
      { id: 552, german: "Pass auf dich auf!", arabic: "اعتني بنفسك!" },
      { id: 553, german: "Alles wird gut sein.", arabic: "كل شيء سيكون بخير." },
      { id: 554, german: "Ich bin bereit zu lernen.", arabic: "أنا مستعد للتعلم." },
      { id: 555, german: "Vielen Dank für alles und gute Nacht!", arabic: "شكراً جزيلاً على كل شيء وليلة سعيدة!" },
      { id: 556, german: "Heute ist der Himmel ganz blau.", arabic: "السماء زرقاء تماماً اليوم." },
      { id: 557, german: "Es gibt heute Abend ein Gewitter.", arabic: "توجد عاصفة رعدية هذا المساء." },
      { id: 558, german: "Ich bin heute sehr glücklich und zufrieden.", arabic: "أنا سعيد ومكتفٍ جداً اليوم." },
      { id: 559, german: "Es tut mir leid, das war mein Fehler.", arabic: "أنا آسف، كان هذا خطأي." },
      { id: 560, german: "Die Zeit vergeht wie im Fluge.", arabic: "الوقت يمر بسرعة كأن يطير." },
      { id: 561, german: "Es ist heute sehr neblig draußen.", arabic: "الجو مليء بالضباب بالخارج اليوم." },
      { id: 562, german: "Ich bin traurig über die Nachricht.", arabic: "أنا حزين على الخبر." },
      { id: 563, german: "Das macht mich sehr wütend.", arabic: "هذا يجعلني غاضباً جداً." },
      { id: 564, german: "Wir haben Sommer und es ist heiß.", arabic: "نحن في الصيف والجو حار." },
      { id: 565, german: "Ich liebe den Herbst und die bunten Blätter.", arabic: "أحب الخريف والأوراق الملونة." },
      { id: 566, german: "Heute schlägt das Thermometer dreißig Grad.", arabic: "درجة الحرارة تسجل ثلاثين درجة اليوم." },
      { id: 567, german: "Ich schätze deine ehrliche Meinung.", arabic: "أقدر رأيك الصادق." },
      { id: 568, german: "Ich habe Überraschung für dich.", arabic: "لدي مفاجأة لك." },
      { id: 569, german: "Mach dir keine Sorgen!", arabic: "لا تقلق!" },
      { id: 570, german: "Gute Nacht und angenehme Träume!", arabic: "ليلة سعيدة وأحلام هادئة!" },
      { id: 571, german: "Die Luft ist heute sehr erfrischend.", arabic: "الهواء منعش جداً اليوم." },
      { id: 572, german: "Ich bin überrascht über das Ergebnis.", arabic: "أنا متفاجئ من النتيجة." },
      { id: 573, german: "Wir hoffen auf gutes Wetter am Samstag.", arabic: "نأمل في طقس جيد يوم السبت." },
      { id: 574, german: "Ich bin erleichtert, dass alles geklappt hat.", arabic: "أنا مرتاح لأن كل شيء تم بنجاح." },
      { id: 575, german: "Der Frühling ist meine Lieblingsjahreszeit.", arabic: "الربيع هو فصلي المفضل." },
      { id: 576, german: "Ich habe ein gutes Gefühl dabei.", arabic: "لدي شعور إيجابي/جيد تجاه هذا." },
      { id: 577, german: "Es friert heute draußen stark.", arabic: "الجو يتجمد شديداً بالخارج اليوم." },
      { id: 578, german: "Ich bin gespannt auf die Zukunftsplanung.", arabic: "أنا متلهف ومتطلع لخطط المستقبل." },
      { id: 579, german: "Der Abend war ruhig und entspannt.", arabic: "كان المساء هادئاً ومسترخياً." },
      { id: 580, german: "Ich hoffe, wir sehen uns bald wieder.", arabic: "أتمنى أن نلتقي مجدداً قريباً." },
      { id: 581, german: "Es weht ein kühler Wind am Nachmittag.", arabic: "تهب رياح باردة بعد الظهر." },
      { id: 582, german: "Ich bin dankbar für deine Unterstützung.", arabic: "أنا ممتن لدعمك." },
      { id: 583, german: "Der Sonnenuntergang ist heute wunderschön.", arabic: "غروب الشمس اليوم جميل جداً." },
      { id: 584, german: "Wir genießen die Ruhe im Garten.", arabic: "نحن نستمتع بالهدوء في الحديقة." },
      { id: 585, german: "Ich fühle mich voll Energie und Motivation.", arabic: "أشعر بطاقة وحافز كاملين." },
      { id: 586, german: "Es hat die ganze Nacht geregnet.", arabic: "لقد هطل المطر طوال الليل." },
      { id: 587, german: "Ich bin vorsichtig bei glatten Straßen.", arabic: "أنا حذر عند الطرق الزلقة." },
      { id: 588, german: "Wir haben heute einen Termin vereinbart.", arabic: "اتفقنا على موعد اليوم." },
      { id: 589, german: "Das Leben bringt jeden Tag Neues.", arabic: "الحياة تحضر أشياء جديدة كل يوم." },
      { id: 590, german: "Ich wünsche dir von Herzen viel Erfolg!", arabic: "أتمنى لك النجاح والتوفيق من قلبي!" },
      { id: 591, german: "Die Luftfeuchtigkeit ist heute sehr hoch.", arabic: "نسبة الرطوبة عالية جداً اليوم." },
      { id: 592, german: "Ich habe Heimweh nach meiner Heimat.", arabic: "لدي حنين/شوق لوطني." },
      { id: 593, german: "Wir haben den Regenbogen am Himmel gesehen.", arabic: "رأينا قوس قزح في السماء." },
      { id: 594, german: "Ich blicke optimistisch in die Zukunft.", arabic: "أنظر بتفاؤل إلى المستقبل." },
      { id: 595, german: "Möge dein Tag voller Freude und Glück sein!", arabic: "أتمنى أن يكون يومك مليئاً بالفرح والسعادة!" },
      // جمل جديدة للوصول لـ 600
      { id: 596, german: "Die Dämmerung beginnt am späten Nachmittag.", arabic: "يبدأ الغسق في وقت متأخر من بعد الظهر." },
      { id: 597, german: "Ich schätze deine Freundschaft sehr.", arabic: "أقدر صداقتك كثيراً." },
      { id: 598, german: "Es ist ein milder Wintertag.", arabic: "إنه يوم شتوي معتدل البرودة." },
      { id: 599, german: "Ich bin positiv überrascht von dir.", arabic: "أنا متفاجئ بشكل إيجابي منك." },
      { id: 600, german: "Wir blicken voller Hoffnung nach vorne.", arabic: "ننظر إلى الأمام وكلنا أمل." }
    ]
  }
];

export default function GermanSentencesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  // حساب إجمالي عدد الجمل في كل المجموعات تلقائيًا
  const totalSentencesCount = categoriesData.reduce(
    (acc, cat) => acc + cat.sentences.length,
    0
  );

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

      if (article === 'der') articleColor = '#00bfff';
      else if (article === 'das') articleColor = '#22c55e';
      else if (article === 'die') articleColor = '#ec4899';

      return (
        <span>
          <span style={{ color: articleColor, fontWeight: 'bold' }}>{parts[0]}</span> {rest}
        </span>
      );
    }
    return germanStr;
  };

  const scrollToCategory = (catId) => {
    const element = document.getElementById(catId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ padding: '15px 10px 40px 10px', color: 'inherit', background: 'transparent', width: '100%', boxSizing: 'border-box' }}>
      <style>{`
        .page-title {
          text-align: center;
          font-size: 1.6rem;
          font-weight: bold;
          margin-bottom: 8px;
          color: inherit;
        }
        .total-count-badge {
          text-align: center;
          font-size: 1.15rem;
          font-weight: bold;
          margin-bottom: 20px;
          color: #22c55e;
          direction: rtl;
        }
        .level-title {
          text-align: center;
          font-size: 1.4rem;
          font-weight: bold;
          margin: 15px 0 20px 0;
          color: #00bfff;
          border-bottom: 2px solid currentColor;
          padding-bottom: 6px;
          width: 100%;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }
        .nav-header-box {
          width: 100%;
          max-width: 500px;
          margin: 0 auto 30px auto;
          padding: 15px;
          border: 2px dashed #00bfff;
          border-radius: 15px;
          box-sizing: border-box;
          direction: rtl;
        }
        .nav-instruction {
          font-weight: bold;
          font-size: 1.1rem;
          margin-bottom: 12px;
          color: #00bfff;
          text-align: center;
        }
        .nav-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .nav-item-btn {
          background: transparent;
          border: 1px solid currentColor;
          color: inherit;
          padding: 8px 12px;
          border-radius: 8px;
          text-align: right;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.2s ease;
          font-weight: bold;
        }
        .nav-item-btn:hover {
          background-color: #00bfff;
          color: #ffffff;
          border-color: #00bfff;
        }
        .category-title {
          text-align: right;
          font-size: 1.25rem;
          font-weight: bold;
          margin: 35px 0 15px 0;
          color: #22c55e;
          width: 100%;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
          direction: rtl;
          scroll-margin-top: 20px;
        }
        .search-container {
          display: flex;
          justify-content: center;
          margin-bottom: 25px;
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
        .cards-container {
          display: flex;
          flex-direction: column;
          gap: 25px;
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
          padding: 16px 18px 14px 18px;
          display: flex;
          flex-direction: column;
          gap: 10px;
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
        .sentence-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          width: 100%;
          gap: 15px;
          flex-wrap: wrap;
          margin-top: 8px;
        }
        .german-sentence {
          font-size: 1.05rem;
          font-weight: bold;
          direction: ltr;
          text-align: left;
          flex: 1 1 auto;
          word-break: break-word;
        }
        .arabic-sentence {
          font-size: 1.05rem;
          font-weight: bold;
          text-align: right;
          direction: rtl;
          flex: 1 1 auto;
          word-break: break-word;
        }
      `}</style>

      {/* عنوان الصفحة الرئيسي */}
      <h1 className="page-title">جمل ألمانية لجميع المراحل (Deutsch für alle Stufen)</h1>

      {/* عرض إجمالي عدد الجمل في بداية الصفحة */}
      <div className="total-count-badge">
        إجمالي عدد الجمل المتاحة: <span>{totalSentencesCount}</span> جملة
      </div>

      {/* حقل البحث */}
      <div className="search-container">
        <input
          type="text"
          placeholder="ابحث عن جملة بالعربية أو الألمانية..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {/* عنوان المستوى A1 */}
      <h2 className="level-title">المستوى A1</h2>

      {/* قائمة العناوين للذهاب السريع */}
      <div className="nav-header-box">
        <div className="nav-instruction">اضغط على القسم الذي تود الذهاب إليه:</div>
        <div className="nav-list">
          {categoriesData.map((cat) => (
            <button
              key={cat.id}
              className="nav-item-btn"
              onClick={() => scrollToCategory(cat.id)}
            >
              {cat.title} ({cat.sentences.length} جملة)
            </button>
          ))}
        </div>
      </div>

      {/* عرض المجموعات والمرشحات */}
      {categoriesData.map((category) => {
        const filteredSentences = category.sentences.filter(
          (item) =>
            item.german.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.arabic.includes(searchTerm)
        );

        if (filteredSentences.length === 0) return null;

        return (
          <div key={category.id} style={{ width: '100%' }}>
            {/* عنوان المجموعة مع الـ ID للانتقال إليه */}
            <h3 id={category.id} className="category-title">{category.title}</h3>

            {/* كروت المجموعة */}
            <div className="cards-container">
              {filteredSentences.map((item) => (
                <div
                  key={item.id}
                  className="vocab-card"
                  onClick={() => speakGerman(item.german)}
                >
                  <div className="item-number">{item.id}</div>
                  <div className="audio-icon">🔊</div>
                  <div className="sentence-row">
                    <div className="arabic-sentence">{item.arabic}</div>
                    <div className="german-sentence">{renderColoredGermanWord(item.german)}</div>
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
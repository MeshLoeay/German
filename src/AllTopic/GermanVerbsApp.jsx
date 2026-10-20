import React, { useState } from 'react';

const verbsData = [
  { id: 1, german: 'sein', pron: 'زاين', arabic: 'يكون', conj: { ich: 'bin', du: 'bist', 'er/sie/es': 'ist', 'wir/sie/Sie': 'sind', ihr: 'seid' } },
  { id: 2, german: 'haben', pron: 'هابن', arabic: 'يملك', conj: { ich: 'habe', du: 'hast', 'er/sie/es': 'hat', 'wir/sie/Sie': 'haben', ihr: 'habt' } },
  { id: 3, german: 'werden', pron: 'فِردن', arabic: 'يصبح', conj: { ich: 'werde', du: 'wirst', 'er/sie/es': 'wird', 'wir/sie/Sie': 'werden', ihr: 'werdet' } },
  { id: 4, german: 'können', pron: 'كيونن', arabic: 'يستطيع', conj: { ich: 'kann', du: 'kannst', 'er/sie/es': 'kann', 'wir/sie/Sie': 'können', ihr: 'könnt' } },
  { id: 5, german: 'müssen', pron: 'ميوسن', arabic: 'يجب', conj: { ich: 'muss', du: 'musst', 'er/sie/es': 'muss', 'wir/sie/Sie': 'müssen', ihr: 'müsst' } },
  { id: 6, german: 'wollen', pron: 'فولن', arabic: 'يريد', conj: { ich: 'will', du: 'willst', 'er/sie/es': 'will', 'wir/sie/Sie': 'wollen', ihr: 'wollt' } },
  { id: 7, german: 'sollen', pron: 'زولن', arabic: 'ينبغي', conj: { ich: 'soll', du: 'sollst', 'er/sie/es': 'soll', 'wir/sie/Sie': 'sollen', ihr: 'sollt' } },
  { id: 8, german: 'dürfen', pron: 'ديورفن', arabic: 'يُسمح له', conj: { ich: 'darf', du: 'darfst', 'er/sie/es': 'darf', 'wir/sie/Sie': 'dürfen', ihr: 'dürft' } },
  { id: 9, german: 'mögen', pron: 'موغن', arabic: 'يحب', conj: { ich: 'mag', du: 'magst', 'er/sie/es': 'mag', 'wir/sie/Sie': 'mögen', ihr: 'mögt' } },
  { id: 10, german: 'machen', pron: 'ماخن', arabic: 'يفعل', conj: { ich: 'mache', du: 'machst', 'er/sie/es': 'macht', 'wir/sie/Sie': 'machen', ihr: 'macht' } },
  { id: 11, german: 'tun', pron: 'تون', arabic: 'يفعل', conj: { ich: 'tue', du: 'tust', 'er/sie/es': 'tut', 'wir/sie/Sie': 'tun', ihr: 'tut' } },
  { id: 12, german: 'gehen', pron: 'غيهن', arabic: 'يمشي', conj: { ich: 'gehe', du: 'gehst', 'er/sie/es': 'geht', 'wir/sie/Sie': 'gehen', ihr: 'geht' } },
  { id: 13, german: 'kommen', pron: 'كومن', arabic: 'يأتي', conj: { ich: 'komme', du: 'kommst', 'er/sie/es': 'kommt', 'wir/sie/Sie': 'kommen', ihr: 'kommt' } },
  { id: 14, german: 'sehen', pron: 'زيحن', arabic: 'يرى', conj: { ich: 'sehe', du: 'siehst', 'er/sie/es': 'sieht', 'wir/sie/Sie': 'sehen', ihr: 'seht' } },
  { id: 15, german: 'schauen', pron: 'شاون', arabic: 'ينظر', conj: { ich: 'schaue', du: 'schauast', 'er/sie/es': 'schaut', 'wir/sie/Sie': 'schauen', ihr: 'schaut' } },
  { id: 16, german: 'hören', pron: 'هوبرن', arabic: 'يسمع', conj: { ich: 'höre', du: 'hörst', 'er/sie/es': 'hört', 'wir/sie/Sie': 'hören', ihr: 'hört' } },
  { id: 17, german: 'sprechen', pron: 'شپريشن', arabic: 'يتكلم', conj: { ich: 'spreche', du: 'sprichst', 'er/sie/es': 'spricht', 'wir/sie/Sie': 'sprechen', ihr: 'sprecht' } },
  { id: 18, german: 'sagen', pron: 'زاگن', arabic: 'يقول', conj: { ich: 'sage', du: 'sagst', 'er/sie/es': 'sagt', 'wir/sie/Sie': 'sagen', ihr: 'sagt' } },
  { id: 19, german: 'reden', pron: 'ريدن', arabic: 'يتحدث', conj: { ich: 'rede', du: 'redest', 'er/sie/es': 'redet', 'wir/sie/Sie': 'reden', ihr: 'redet' } },
  { id: 20, german: 'fragen', pron: 'فراغن', arabic: 'يسأل', conj: { ich: 'frage', du: 'fragst', 'er/sie/es': 'fragt', 'wir/sie/Sie': 'fragen', ihr: 'fragt' } },
  { id: 21, german: 'antworten', pron: 'آنتفورتن', arabic: 'يجيب', conj: { ich: 'antworte', du: 'antwortest', 'er/sie/es': 'antwortet', 'wir/sie/Sie': 'antworten', ihr: 'antwortet' } },
  { id: 22, german: 'geben', pron: 'غين', arabic: 'يعطي', conj: { ich: 'gebe', du: 'gibst', 'er/sie/es': 'gibt', 'wir/sie/Sie': 'geben', ihr: 'gebt' } },
  { id: 23, german: 'nehmen', pron: 'نيمن', arabic: 'يأخذ', conj: { ich: 'nehme', du: 'nimmst', 'er/sie/es': 'nimmt', 'wir/sie/Sie': 'nehmen', ihr: 'nehmt' } },
  { id: 24, german: 'bringen', pron: 'برينغن', arabic: 'يجلب', conj: { ich: 'bringe', du: 'bringst', 'er/sie/es': 'bringt', 'wir/sie/Sie': 'bringen', ihr: 'bringt' } },
  { id: 25, german: 'holen', pron: 'هولن', arabic: 'يحضر', conj: { ich: 'hole', du: 'holst', 'er/sie/es': 'holt', 'wir/sie/Sie': 'holen', ihr: 'holt' } },
  { id: 26, german: 'kaufen', pron: 'كاوفن', arabic: 'يشتري', conj: { ich: 'kaufe', du: 'kaufst', 'er/sie/es': 'kauft', 'wir/sie/Sie': 'kaufen', ihr: 'kauft' } },
  { id: 27, german: 'verkaufen', pron: 'فركاوفن', arabic: 'يبيع', conj: { ich: 'verkaufe', du: 'verkaufst', 'er/sie/es': 'verkauft', 'wir/sie/Sie': 'verkaufen', ihr: 'verkauft' } },
  { id: 28, german: 'bezahlen', pron: 'بتسالن', arabic: 'يدفع', conj: { ich: 'bezahle', du: 'bezahlst', 'er/sie/es': 'bezahlt', 'wir/sie/Sie': 'bezahlen', ihr: 'bezahlt' } },
  { id: 29, german: 'kosten', pron: 'كوستن', arabic: 'يكلف', conj: { ich: 'koste', du: 'kostest', 'er/sie/es': 'kostet', 'wir/sie/Sie': 'kosten', ihr: 'kostet' } },
  { id: 30, german: 'arbeiten', pron: 'آربايتن', arabic: 'يعمل', conj: { ich: 'arbeite', du: 'arbeitest', 'er/sie/es': 'arbeitet', 'wir/sie/Sie': 'arbeiten', ihr: 'arbeitet' } },
  { id: 31, german: 'lernen', pron: 'ليرنن', arabic: 'يتعلم', conj: { ich: 'lerne', du: 'lernst', 'er/sie/es': 'lernt', 'wir/sie/Sie': 'lernen', ihr: 'lernt' } },
  { id: 32, german: 'studieren', pron: 'شتوديرن', arabic: 'يدرس (جامعة)', conj: { ich: 'studiere', du: 'studierst', 'er/sie/es': 'studiert', 'wir/sie/Sie': 'studieren', ihr: 'studiert' } },
  { id: 33, german: 'lesen', pron: 'ليزن', arabic: 'يقرأ', conj: { ich: 'lese', du: 'liest', 'er/sie/es': 'liest', 'wir/sie/Sie': 'lesen', ihr: 'lest' } },
  { id: 34, german: 'schreiben', pron: 'شرايبن', arabic: 'يكتب', conj: { ich: 'schreibe', du: 'schreibst', 'er/sie/es': 'schreibt', 'wir/sie/Sie': 'schreiben', ihr: 'schreibt' } },
  { id: 35, german: 'rechnen', pron: 'ريشنن', arabic: 'يحسب', conj: { ich: 'rechne', du: 'rechnest', 'er/sie/es': 'rechnet', 'wir/sie/Sie': 'rechnen', ihr: 'rechnet' } },
  { id: 36, german: 'verstehen', pron: 'فرشتيهن', arabic: 'يفهم', conj: { ich: 'verstehe', du: 'verstehst', 'er/sie/es': 'versteht', 'wir/sie/Sie': 'verstehen', ihr: 'versteht' } },
  { id: 37, german: 'wissen', pron: 'فيسن', arabic: 'يعرف', conj: { ich: 'weiß', du: 'weißt', 'er/sie/es': 'weiß', 'wir/sie/Sie': 'wissen', ihr: 'wisst' } },
  { id: 38, german: 'denken', pron: 'دينكن', arabic: 'يفكر', conj: { ich: 'denke', du: 'denkst', 'er/sie/es': 'denkt', 'wir/sie/Sie': 'denken', ihr: 'denkt' } },
  { id: 39, german: 'glauben', pron: 'غلاوبن', arabic: 'يعتقِد', conj: { ich: 'glaube', du: 'glaubst', 'er/sie/es': 'glaubt', 'wir/sie/Sie': 'glauben', ihr: 'glaubt' } },
  { id: 40, german: 'meinen', pron: 'ماينن', arabic: 'يعني', conj: { ich: 'meine', du: 'meinst', 'er/sie/es': 'meint', 'wir/sie/Sie': 'meinen', ihr: 'meint' } },
  { id: 41, german: 'finden', pron: 'فيندن', arabic: 'يجد', conj: { ich: 'finde', du: 'findest', 'er/sie/es': 'findet', 'wir/sie/Sie': 'finden', ihr: 'findet' } },
  { id: 42, german: 'suchen', pron: 'زوخن', arabic: 'يبحث', conj: { ich: 'suche', du: 'suchst', 'er/sie/es': 'sucht', 'wir/sie/Sie': 'suchen', ihr: 'sucht' } },
  { id: 43, german: 'verlieren', pron: 'فرليرن', arabic: 'يفقد', conj: { ich: 'verliere', du: 'verlierst', 'er/sie/es': 'verliert', 'wir/sie/Sie': 'verlieren', ihr: 'verliert' } },
  { id: 44, german: 'bekommen', pron: 'بكومن', arabic: 'يحصل على', conj: { ich: 'bekomme', du: 'bekommst', 'er/sie/es': 'bekommt', 'wir/sie/Sie': 'bekommen', ihr: 'bekommt' } },
  { id: 45, german: 'bleiben', pron: 'بلايبن', arabic: 'يبقى', conj: { ich: 'bleibe', du: 'bleibst', 'er/sie/es': 'bleibt', 'wir/sie/Sie': 'bleiben', ihr: 'bleibt' } },
  { id: 46, german: 'wohnen', pron: 'فونن', arabic: 'يسكن', conj: { ich: 'wohne', du: 'wohnst', 'er/sie/es': 'wohnt', 'wir/sie/Sie': 'wohnen', ihr: 'wohnt' } },
  { id: 47, german: 'leben', pron: 'ليبين', arabic: 'يعيش', conj: { ich: 'lebe', du: 'lebst', 'er/sie/es': 'lebt', 'wir/sie/Sie': 'leben', ihr: 'lebt' } },
  { id: 48, german: 'lieben', pron: 'ليبين', arabic: 'يحب', conj: { ich: 'liebe', du: 'liebst', 'er/sie/es': 'liebt', 'wir/sie/Sie': 'lieben', ihr: 'liebt' } },
  { id: 49, german: 'hassen', pron: 'هاسن', arabic: 'يكره', conj: { ich: 'hasse', du: 'hasst', 'er/sie/es': 'hasst', 'wir/sie/Sie': 'hassen', ihr: 'hasst' } },
  { id: 50, german: 'helfen', pron: 'هيلفن', arabic: 'يساعد', conj: { ich: 'helfe', du: 'hilfst', 'er/sie/es': 'hilft', 'wir/sie/Sie': 'helfen', ihr: 'helft' } },
  { id: 51, german: 'brauchen', pron: 'براوخن', arabic: 'يحتاج', conj: { ich: 'brauche', du: 'brauchst', 'er/sie/es': 'braucht', 'wir/sie/Sie': 'brauchen', ihr: 'braucht' } },
  { id: 52, german: 'öffnen', pron: 'إوفنن', arabic: 'يفتح', conj: { ich: 'öffne', du: 'öffnest', 'er/sie/es': 'öffnet', 'wir/sie/Sie': 'öffnen', ihr: 'öffnet' } },
  { id: 53, german: 'schließen', pron: 'شليسن', arabic: 'يغلق', conj: { ich: 'schließe', du: 'schließt', 'er/sie/es': 'schließt', 'wir/sie/Sie': 'schließen', ihr: 'schließt' } },
  { id: 54, german: 'anfangen', pron: 'آنفانغن', arabic: 'يبدأ', conj: { ich: 'fange an', du: 'fängst an', 'er/sie/es': 'fängt an', 'wir/sie/Sie': 'fangen an', ihr: 'fangt an' } },
  { id: 55, german: 'beginnen', pron: 'بغينن', arabic: 'يبدأ', conj: { ich: 'beginne', du: 'beginnst', 'er/sie/es': 'beginnt', 'wir/sie/Sie': 'beginnen', ihr: 'beginnt' } },
  { id: 56, german: 'beenden', pron: 'بئيندن', arabic: 'ينهي', conj: { ich: 'beende', du: 'beendest', 'er/sie/es': 'beendet', 'wir/sie/Sie': 'beenden', ihr: 'beendet' } },
  { id: 57, german: 'aufhören', pron: 'أوفهويرن', arabic: 'يتوقف', conj: { ich: 'höre auf', du: 'hörst auf', 'er/sie/es': 'hört auf', 'wir/sie/Sie': 'hören auf', ihr: 'hört auf' } },
  { id: 58, german: 'weitermachen', pron: 'فايتر ماخن', arabic: 'يكمل', conj: { ich: 'mache weiter', du: 'machst weiter', 'er/sie/es': 'macht weiter', 'wir/sie/Sie': 'machen weiter', ihr: 'macht weiter' } },
  { id: 59, german: 'spielen', pron: 'شبيلن', arabic: 'يلعب', conj: { ich: 'spiele', du: 'spielst', 'er/sie/es': 'spielt', 'wir/sie/Sie': 'spielen', ihr: 'spielt' } },
  { id: 60, german: 'laufen', pron: 'لاوفن', arabic: 'يجري', conj: { ich: 'laufe', du: 'läufst', 'er/sie/es': 'läuft', 'wir/sie/Sie': 'laufen', ihr: 'lauft' } },
  { id: 61, german: 'rennen', pron: 'رينن', arabic: 'يركض', conj: { ich: 'renne', du: 'rennst', 'er/sie/es': 'rennt', 'wir/sie/Sie': 'rennen', ihr: 'rennt' } },
  { id: 62, german: 'fahren', pron: 'فارن', arabic: 'يقود/يسافر', conj: { ich: 'fahre', du: 'fährst', 'er/sie/es': 'fährt', 'wir/sie/Sie': 'fahren', ihr: 'fahrt' } },
  { id: 63, german: 'fliegen', pron: 'فليغن', arabic: 'يطير', conj: { ich: 'fliege', du: 'fliegst', 'er/sie/es': 'fliegt', 'wir/sie/Sie': 'fliegen', ihr: 'fliegt' } },
  { id: 64, german: 'reisen', pron: 'رايزن', arabic: 'يسافر', conj: { ich: 'reise', du: 'reist', 'er/sie/es': 'reist', 'wir/sie/Sie': 'reisen', ihr: 'reist' } },
  { id: 65, german: 'stehen', pron: 'شتيهن', arabic: 'يقف', conj: { ich: 'stehe', du: 'stehst', 'er/sie/es': 'steht', 'wir/sie/Sie': 'stehen', ihr: 'steht' } },
  { id: 66, german: 'sitzen', pron: 'زيتسن', arabic: 'يجلس', conj: { ich: 'sitze', du: 'sitzt', 'er/sie/es': 'sitzt', 'wir/sie/Sie': 'sitzen', ihr: 'sitzt' } },
  { id: 67, german: 'liegen', pron: 'ليغن', arabic: 'يستلقي', conj: { ich: 'liege', du: 'liegst', 'er/sie/es': 'liegt', 'wir/sie/Sie': 'liegen', ihr: 'liegst' } },
  { id: 68, german: 'schlafen', pron: 'شلافن', arabic: 'ينام', conj: { ich: 'schlafe', du: 'schläfst', 'er/sie/es': 'schläft', 'wir/sie/Sie': 'schlafen', ihr: 'schlaft' } },
  { id: 69, german: 'aufwachen', pron: 'أوففاخن', arabic: 'يستيقظ', conj: { ich: 'wache auf', du: 'wachst auf', 'er/sie/es': 'wacht auf', 'wir/sie/Sie': 'wachen auf', ihr: 'wacht auf' } },
  { id: 70, german: 'essen', pron: 'إسن', arabic: 'يأكل', conj: { ich: 'esse', du: 'isst', 'er/sie/es': 'isst', 'wir/sie/Sie': 'essen', ihr: 'esst' } },
  { id: 71, german: 'trinken', pron: 'ترينكن', arabic: 'يشرب', conj: { ich: 'trinke', du: 'trinkst', 'er/sie/es': 'trinkt', 'wir/sie/Sie': 'trinken', ihr: 'trinkt' } },
  { id: 72, german: 'kochen', pron: 'كوخن', arabic: 'يطبخ', conj: { ich: 'koche', du: 'kochst', 'er/sie/es': 'kocht', 'wir/sie/Sie': 'kochen', ihr: 'kocht' } },
  { id: 73, german: 'backen', pron: 'باكن', arabic: 'يخبز', conj: { ich: 'backe', du: 'bäckst', 'er/sie/es': 'bäckt', 'wir/sie/Sie': 'backen', ihr: 'backt' } },
  { id: 74, german: 'schmecken', pron: 'شميكن', arabic: 'يتذوق', conj: { ich: 'schmecke', du: 'schmeckst', 'er/sie/es': 'schmeckt', 'wir/sie/Sie': 'schmecken', ihr: 'schmeckt' } },
  { id: 75, german: 'riechen', pron: 'ريشن', arabic: 'يشم', conj: { ich: 'rieche', du: 'riechst', 'er/sie/es': 'riecht', 'wir/sie/Sie': 'riechen', ihr: 'riecht' } },
  { id: 76, german: 'fühlen', pron: 'فيولن', arabic: 'يشعر', conj: { ich: 'fühle', du: 'fühlst', 'er/sie/es': 'fühlt', 'wir/sie/Sie': 'fühlen', ihr: 'fühlt' } },
  { id: 77, german: 'tragen', pron: 'تراغن', arabic: 'يحمل/يلبس', conj: { ich: 'trage', du: 'trägst', 'er/sie/es': 'trägt', 'wir/sie/Sie': 'tragen', ihr: 'tragt' } },
  { id: 78, german: 'ziehen', pron: 'تسيهن', arabic: 'يسحب', conj: { ich: 'ziehe', du: 'ziehst', 'er/sie/es': 'zieht', 'wir/sie/Sie': 'ziehen', ihr: 'zieht' } },
  { id: 79, german: 'drücken', pron: 'دريوكن', arabic: 'يضغط', conj: { ich: 'drücke', du: 'drückst', 'er/sie/es': 'drückt', 'wir/sie/Sie': 'drücken', ihr: 'drückt' } },
  { id: 80, german: 'schicken', pron: 'شيكن', arabic: 'يرسل', conj: { ich: 'schicke', du: 'schickst', 'er/sie/es': 'schickt', 'wir/sie/Sie': 'schicken', ihr: 'schickt' } },
  { id: 81, german: 'zeigen', pron: 'تسايغن', arabic: 'يُري', conj: { ich: 'zeige', du: 'zeigst', 'er/sie/es': 'zeigt', 'wir/sie/Sie': 'zeigen', ihr: 'zeigt' } },
  { id: 82, german: 'erklären', pron: 'إركليرن', arabic: 'يشرح', conj: { ich: 'erkläre', du: 'erklärst', 'er/sie/es': 'erklärt', 'wir/sie/Sie': 'erklären', ihr: 'erklärt' } },
  { id: 83, german: 'heißen', pron: 'هايسن', arabic: 'يُسمى', conj: { ich: 'heiße', du: 'heißt', 'er/sie/es': 'heißt', 'wir/sie/Sie': 'heißen', ihr: 'heißt' } },
  { id: 84, german: 'nennen', pron: 'نينن', arabic: 'يسمي', conj: { ich: 'nenne', du: 'nennst', 'er/sie/es': 'nennt', 'wir/sie/Sie': 'nennen', ihr: 'nennt' } },
  { id: 85, german: 'rufen', pron: 'روفن', arabic: 'ينادي', conj: { ich: 'rufe', du: 'rufst', 'er/sie/es': 'ruft', 'wir/sie/Sie': 'rufen', ihr: 'ruft' } },
  { id: 86, german: 'warten', pron: 'فارتن', arabic: 'ينتظر', conj: { ich: 'warte', du: 'wartest', 'er/sie/es': 'wartet', 'wir/sie/Sie': 'warten', ihr: 'wartet' } },
  { id: 87, german: 'treffen', pron: 'تريفن', arabic: 'يلتقي', conj: { ich: 'treffe', du: 'triffst', 'er/sie/es': 'trifft', 'wir/sie/Sie': 'treffen', ihr: 'trefft' } },
  { id: 88, german: 'besuchen', pron: 'بزوخن', arabic: 'يزور', conj: { ich: 'besuche', du: 'besuchst', 'er/sie/es': 'besucht', 'wir/sie/Sie': 'besuchen', ihr: 'besucht' } },
  { id: 89, german: 'einladen', pron: 'آينلادن', arabic: 'يدعو', conj: { ich: 'lade ein', du: 'lädst ein', 'er/sie/es': 'lädt ein', 'wir/sie/Sie': 'laden ein', ihr: 'ladet ein' } },
  { id: 90, german: 'danken', pron: 'دانكن', arabic: 'يشكر', conj: { ich: 'danke', du: 'dankst', 'er/sie/es': 'dankt', 'wir/sie/Sie': 'danken', ihr: 'dankt' } },
  { id: 91, german: 'entschuldigen', pron: 'إنتشولديغن', arabic: 'يعتذر', conj: { ich: 'entschuldige', du: 'entschuldigst', 'er/sie/es': 'entschuldigt', 'wir/sie/Sie': 'entschuldigen', ihr: 'entschuldigt' } },
  { id: 92, german: 'vergessen', pron: 'فرغيسن', arabic: 'ينسى', conj: { ich: 'vergesse', du: 'vergisst', 'er/sie/es': 'vergisst', 'wir/sie/Sie': 'vergessen', ihr: 'vergesst' } },
  { id: 93, german: 'erinnern', pron: 'إرينرن', arabic: 'يتذكر', conj: { ich: 'erinnere', du: 'erinnerst', 'er/sie/es': 'erinnert', 'wir/sie/Sie': 'erinnern', ihr: 'erinnert' } },
  { id: 94, german: 'verändern', pron: 'فرإندرن', arabic: 'يغيّر', conj: { ich: 'verändere', du: 'veränderst', 'er/sie/es': 'verändert', 'wir/sie/Sie': 'verändern', ihr: 'verändert' } },
  { id: 95, german: 'wachsen', pron: 'فاكسن', arabic: 'ينمو', conj: { ich: 'wachse', du: 'wächst', 'er/sie/es': 'wächst', 'wir/sie/Sie': 'wachsen', ihr: 'wachst' } },
  { id: 96, german: 'bauen', pron: 'باون', arabic: 'يبني', conj: { ich: 'baue', du: 'baust', 'er/sie/es': 'baut', 'wir/sie/Sie': 'bauen', ihr: 'baut' } },
  { id: 97, german: 'reparieren', pron: 'ريباريرن', arabic: 'يصلح', conj: { ich: 'repariere', du: 'reparierst', 'er/sie/es': 'repariert', 'wir/sie/Sie': 'reparieren', ihr: 'repariert' } },
  { id: 98, german: 'putzen', pron: 'بوتسن', arabic: 'ينظف', conj: { ich: 'putze', du: 'putzt', 'er/sie/es': 'putzt', 'wir/sie/Sie': 'putzen', ihr: 'putzt' } },
  { id: 99, german: 'waschen', pron: 'فاشن', arabic: 'يغسل', conj: { ich: 'wasche', du: 'wäschst', 'er/sie/es': 'wäscht', 'wir/sie/Sie': 'waschen', ihr: 'wascht' } },
  { id: 100, german: 'singen', pron: 'زينغن', arabic: 'يغني', conj: { ich: 'singe', du: 'singst', 'er/sie/es': 'singt', 'wir/sie/Sie': 'singen', ihr: 'singt' } },
  { id: 101, german: 'tanzen', pron: 'تانتسن', arabic: 'يرقص', conj: { ich: 'tanze', du: 'tanzt', 'er/sie/es': 'tanzt', 'wir/sie/Sie': 'tanzen', ihr: 'tanzt' } },
  { id: 102, german: 'schwimmen', pron: 'شڤيمين', arabic: 'يسبح', conj: { ich: 'schwimme', du: 'schwimmst', 'er/sie/es': 'schwimmt', 'wir/sie/Sie': 'schwimmen', ihr: 'schwimmt' } },
  { id: 103, german: 'malen', pron: 'مالن', arabic: 'يرسم', conj: { ich: 'male', du: 'malst', 'er/sie/es': 'malt', 'wir/sie/Sie': 'malen', ihr: 'malt' } },
  { id: 104, german: 'zeichnen', pron: 'تسايشنن', arabic: 'يرسم تخطيطاً', conj: { ich: 'zeichne', du: 'zeichnest', 'er/sie/es': 'zeichnet', 'wir/sie/Sie': 'zeichnen', ihr: 'zeichnet' } },
  { id: 105, german: 'feiern', pron: 'فايرن', arabic: 'يحتفل', conj: { ich: 'feiere', du: 'feierst', 'er/sie/es': 'feiert', 'wir/sie/Sie': 'feiern', ihr: 'feiert' } },
  { id: 106, german: 'lachen', pron: 'لاخن', arabic: 'يضحك', conj: { ich: 'lache', du: 'lachst', 'er/sie/es': 'lacht', 'wir/sie/Sie': 'lachen', ihr: 'lacht' } },
  { id: 107, german: 'weinen', pron: 'واينن', arabic: 'يبكي', conj: { ich: 'weine', du: 'weinst', 'er/sie/es': 'weint', 'wir/sie/Sie': 'weinen', ihr: 'weint' } },
  { id: 108, german: 'kennen', pron: 'كينن', arabic: 'يعرف (شخص)', conj: { ich: 'kenne', du: 'kennst', 'er/sie/es': 'kennt', 'wir/sie/Sie': 'kennen', ihr: 'kennt' } },
  { id: 109, german: 'bieten', pron: 'بيتن', arabic: 'يعرض', conj: { ich: 'biete', du: 'bietest', 'er/sie/es': 'bietet', 'wir/sie/Sie': 'bieten', ihr: 'bietet' } },
  { id: 110, german: 'passieren', pron: 'پاسيرن', arabic: 'يحدث', conj: { ich: 'passiere', du: 'passierst', 'er/sie/es': 'passiert', 'wir/sie/Sie': 'passieren', ihr: 'passiert' } },
  { id: 111, german: 'planen', pron: 'پلانن', arabic: 'يخطط', conj: { ich: 'plane', du: 'planst', 'er/sie/es': 'plant', 'wir/sie/Sie': 'planen', ihr: 'plant' } },
  { id: 112, german: 'reservieren', pron: 'ريزيرفيرن', arabic: 'يحجز', conj: { ich: 'reserviere', du: 'reservierst', 'er/sie/es': 'reserviert', 'wir/sie/Sie': 'reservieren', ihr: 'reserviert' } },
  { id: 113, german: 'diskutieren', pron: 'ديسكوتيرن', arabic: 'يناقش', conj: { ich: 'diskutiere', du: 'diskutierst', 'er/sie/es': 'diskutiert', 'wir/sie/Sie': 'diskutieren', ihr: 'diskutiert' } },
  { id: 114, german: 'trainieren', pron: 'ترانيرن', arabic: 'يتدرب', conj: { ich: 'trainiere', du: 'trainierst', 'er/sie/es': 'trainiert', 'wir/sie/Sie': 'trainieren', ihr: 'trainiert' } },
  { id: 115, german: 'spazieren', pron: 'شپاتسيرن', arabic: 'يتنزه', conj: { ich: 'spaziere', du: 'spazierst', 'er/sie/es': 'spaziert', 'wir/sie/Sie': 'spazieren', ihr: 'spaziert' } },
  { id: 116, german: 'bedeuten', pron: 'بدويتن', arabic: 'يعني/يقصد', conj: { ich: 'bedeute', du: 'bedeutest', 'er/sie/es': 'bedeutet', 'wir/sie/Sie': 'bedeuten', ihr: 'bedeutet' } },
  { id: 117, german: 'benutzen', pron: 'بينوتسن', arabic: 'يستخدِم', conj: { ich: 'benutze', du: 'benutzt', 'er/sie/es': 'benutzt', 'wir/sie/Sie': 'benutzen', ihr: 'benutzt' } },
  { id: 118, german: 'bestellen', pron: 'بشتيلن', arabic: 'يطلب (طعام/سلعة)', conj: { ich: 'bestelle', du: 'bestellst', 'er/sie/es': 'bestellt', 'wir/sie/Sie': 'bestellen', ihr: 'bestellt' } },
  { id: 119, german: 'empfehlen', pron: 'إمپفيلن', arabic: 'يوصي بـ', conj: { ich: 'empfehle', du: 'empfiehlst', 'er/sie/es': 'empfiehlt', 'wir/sie/Sie': 'empfehlen', ihr: 'empfehlt' } },
  { id: 120, german: 'entscheiden', pron: 'إنتشايدن', arabic: 'يقرر', conj: { ich: 'entscheide', du: 'entscheidest', 'er/sie/es': 'entscheidet', 'wir/sie/Sie': 'entscheiden', ihr: 'entscheidet' } },
  { id: 121, german: 'erzählen', pron: 'إرتسيلن', arabic: 'يحكي/يروي', conj: { ich: 'erzähle', du: 'erzählst', 'er/sie/es': 'erzählt', 'wir/sie/Sie': 'erzählen', ihr: 'erzählt' } },
  { id: 122, german: 'fehlen', pron: 'فيلن', arabic: 'يُقصّر/ينقص', conj: { ich: 'fehle', du: 'fehlst', 'er/sie/es': 'fehlt', 'wir/sie/Sie': 'fehlen', ihr: 'fehlt' } },
  { id: 123, german: 'gewinnen', pron: 'غڤينين', arabic: 'يفوز/يكسب', conj: { ich: 'gewinne', du: 'gewinnst', 'er/sie/es': 'gewinnt', 'wir/sie/Sie': 'gewinnen', ihr: 'gewinnt' } },
  { id: 124, german: 'kennenlernen', pron: 'كيننليرنن', arabic: 'يتعرف على', conj: { ich: 'lerne kennen', du: 'lernst kennen', 'er/sie/es': 'lernt kennen', 'wir/sie/Sie': 'lernen kennen', ihr: 'lernt kennen' } },
  { id: 125, german: 'legen', pron: 'ليغن', arabic: 'يضع (أفقياً)', conj: { ich: 'lege', du: 'legst', 'er/sie/es': 'legt', 'wir/sie/Sie': 'legen', ihr: 'legt' } },
  { id: 126, german: 'passen', pron: 'پاسن', arabic: 'يُناسب', conj: { ich: 'passe', du: 'passt', 'er/sie/es': 'passt', 'wir/sie/Sie': 'passen', ihr: 'passt' } },
  { id: 127, german: 'scheinen', pron: 'شايمن', arabic: 'يُشرق/يَبدو', conj: { ich: 'scheine', du: 'scheinst', 'er/sie/es': 'scheint', 'wir/sie/Sie': 'scheinen', ihr: 'scheint' } },
  { id: 128, german: 'setzen', pron: 'زيتسن', arabic: 'يُجلس/يضع', conj: { ich: 'setze', du: 'setzt', 'er/sie/es': 'setzt', 'wir/sie/Sie': 'setzen', ihr: 'setzt' } },
  { id: 129, german: 'stimmen', pron: 'شتيمين', arabic: 'يصح/يوافق', conj: { ich: 'stimme', du: 'stimmst', 'er/sie/es': 'stimmt', 'wir/sie/Sie': 'stimmen', ihr: 'stimmt' } },
  { id: 130, german: 'vorschlagen', pron: 'فورشلاغن', arabic: 'يقترح', conj: { ich: 'schlage vor', du: 'schlägst vor', 'er/sie/es': 'schlägt vor', 'wir/sie/Sie': 'vorschlagen', ihr: 'schlagt vor' } },
  { id: 131, german: 'anrufen', pron: 'آنروفن', arabic: 'يتصل هاتفياً', conj: { ich: 'rufe an', du: 'rufst an', 'er/sie/es': 'ruft an', 'wir/sie/Sie': 'rufen an', ihr: 'ruft an' } },
  { id: 132, german: 'aufstehen', pron: 'أوفشتيهن', arabic: 'ينهض من السرير', conj: { ich: 'stehe auf', du: 'stehst auf', 'er/sie/es': 'steht auf', 'wir/sie/Sie': 'stehen auf', ihr: 'steht auf' } },
  { id: 133, german: 'fernsehen', pron: 'فيرنزيحن', arabic: 'يشاهد التلفاز', conj: { ich: 'sehe fern', du: 'siehst fern', 'er/sie/es': 'sieht fern', 'wir/sie/Sie': 'sehen fern', ihr: 'seht fern' } },
  { id: 134, german: 'mitbringen', pron: 'ميتبرينغن', arabic: 'يُحضِر معه', conj: { ich: 'bringe mit', du: 'bringst mit', 'er/sie/es': 'bringt mit', 'wir/sie/Sie': 'bringen mit', ihr: 'bringt mit' } },
  { id: 135, german: 'abholen', pron: 'آپهولن', arabic: 'يصطحب شخصاً', conj: { ich: 'hole ab', du: 'holst ab', 'er/sie/es': 'holt ab', 'wir/sie/Sie': 'holen ab', ihr: 'holt ab' } },
  { id: 136, german: 'einkaufen', pron: 'آينكاوفن', arabic: 'يتسوق', conj: { ich: 'kaufe ein', du: 'kaufst ein', 'er/sie/es': 'kauft ein', 'wir/sie/Sie': 'kaufen ein', ihr: 'kauft ein' } },
  { id: 137, german: 'mitkommen', pron: 'ميتكومن', arabic: 'يأتي صحبةً', conj: { ich: 'komme mit', du: 'kommst mit', 'er/sie/es': 'kommt mit', 'wir/sie/Sie': 'kommen mit', ihr: 'kommt mit' } },
  { id: 138, german: 'zuhören', pron: 'تسيهوبرن', arabic: 'يُنصت', conj: { ich: 'höre zu', du: 'hörst zu', 'er/sie/es': 'hört zu', 'wir/sie/Sie': 'hören zu', ihr: 'hört zu' } },
  { id: 139, german: 'umsteigen', pron: 'أومشتايغن', arabic: 'يغيّر وسيلة مواصلات', conj: { ich: 'steige um', du: 'steigst um', 'er/sie/es': 'steigt um', 'wir/sie/Sie': 'steigen um', ihr: 'steigt um' } },
  { id: 140, german: 'wiederholen', pron: 'فيدرهولن', arabic: 'يُكرر', conj: { ich: 'wiederhole', du: 'wiederholst', 'er/sie/es': 'wiederholt', 'wir/sie/Sie': 'wiederholen', ihr: 'wiederholt' } },
  { id: 141, german: 'erzielen', pron: 'إرتسيلن', arabic: 'يحقق هدفاً', conj: { ich: 'erziele', du: 'erzielst', 'er/sie/es': 'erzielt', 'wir/sie/Sie': 'erzielen', ihr: 'erzielt' } },
  { id: 142, german: 'erschrecken', pron: 'إرشريكن', arabic: 'يفزع/يخيف', conj: { ich: 'erschrecke', du: 'erschrickst', 'er/sie/es': 'erschrickt', 'wir/sie/Sie': 'erschrecken', ihr: 'erschreckt' } },
  { id: 143, german: 'verbessern', pron: 'فربيسرن', arabic: 'يُحسن/يُطوّر', conj: { ich: 'verbessere', du: 'verbesserst', 'er/sie/es': 'verbessert', 'wir/sie/Sie': 'verbessern', ihr: 'verbessert' } },
  { id: 144, german: 'vorbereiten', pron: 'فوربايتن', arabic: 'يجهّز/يحضّر', conj: { ich: 'bereite vor', du: 'bereitest vor', 'er/sie/es': 'bereitet vor', 'wir/sie/Sie': 'bereiten vor', ihr: 'bereitest vor' } },
  { id: 145, german: 'teilnehmen', pron: 'تايلنيمن', arabic: 'يشارك', conj: { ich: 'nehme teil', du: 'nimmst teil', 'er/sie/es': 'nimmt teil', 'wir/sie/Sie': 'nehmen teil', ihr: 'nehmt teil' } },
  { id: 146, german: 'stattfinden', pron: 'شتاتفيندن', arabic: 'يقام/يُعقد', conj: { ich: 'finde statt', du: 'findest statt', 'er/sie/es': 'findet statt', 'wir/sie/Sie': 'finden statt', ihr: 'findet statt' } },
  { id: 147, german: 'unterrichten', pron: 'اونترريختن', arabic: 'يُدرّس/يعلّم', conj: { ich: 'unterrichte', du: 'unterrichtest', 'er/sie/es': 'unterrichtet', 'wir/sie/Sie': 'unterrichten', ihr: 'unterrichtet' } },
  { id: 148, german: 'verabreden', pron: 'فرابردن', arabic: 'يتفق على موعد', conj: { ich: 'verabrede', du: 'verabredest', 'er/sie/es': 'verabredet', 'wir/sie/Sie': 'verabreden', ihr: 'verabredet' } },
  { id: 149, german: 'vorstellen', pron: 'فورشتيلن', arabic: 'يُقدّم (نفسه/شيئاً)', conj: { ich: 'stelle vor', du: 'stellst vor', 'er/sie/es': 'stellt vor', 'wir/sie/Sie': 'stellen vor', ihr: 'stellt vor' } },
  { id: 150, german: 'zusammenarbeiten', pron: 'تسوزامينآربايتن', arabic: 'يعمل معاً/يتعاون', conj: { ich: 'arbeite zusammen', du: 'arbeitest zusammen', 'er/sie/es': 'arbeitet zusammen', 'wir/sie/Sie': 'arbeiten zusammen', ihr: 'arbeitet zusammen' } }
];

export default function GermanVerbsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [openVerbs, setOpenVerbs] = useState({ 1: true });

  const toggleVerb = (id) => {
    setOpenVerbs((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const speakGerman = (text, e) => {
    if (e) e.stopPropagation();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'de-DE';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const filteredVerbs = verbsData.filter(
    (item) =>
      item.german.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.arabic.includes(searchTerm) ||
      item.pron.includes(searchTerm)
  );

  return (
    <div style={{ padding: '20px 0 40px 0', width: '95%', margin: '0 auto', color: '#ffffff', boxSizing: 'border-box' }}>
      <style>{`
        .page-title {
          text-align: center;
          font-size: 1.5rem;
          font-weight: 900;
          margin-bottom: 20px;
          color: inherit;
        }
        .search-container {
          display: flex;
          justify-content: center;
          margin-bottom: 30px;
          width: 100%;
        }
        .search-input {
          width: 100%;
          padding: 8px 14px;
          border-radius: 20px;
          border: 1px solid #ffffff;
          background: transparent;
          color: #ffffff;
          font-size: 0.88rem;
          font-weight: 700;
          outline: none;
          box-sizing: border-box;
          direction: rtl;
        }
        .cards-container {
          display: flex;
          flex-direction: column;
          gap: 42px;
          align-items: center;
          width: 100%;
        }
        .vocab-card {
          position: relative;
          width: 100%;
          border: 1.5px solid #ffffff;
          border-radius: 22px 6px 22px 6px;
          padding: 12px 16px;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          background: transparent;
          user-select: none;
          transition: border-color 0.2s ease;
        }
        .item-number {
          position: absolute;
          top: -12px;
          left: 18px;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-color: #ff3333;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: bold;
          font-style: italic;
          z-index: 2;
        }
        .pronunciation-wrapper {
          position: absolute;
          top: -14px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #ffffff;
          color: #ff3333;
          padding: 2px 18px;
          border-radius: 14px;
          font-size: 0.85rem;
          font-weight: 900;
          z-index: 2;
          white-space: nowrap;
          cursor: pointer;
        }
        .speaker-left {
          position: absolute;
          left: -20px;
          top: 30%;
          transform: translateY(-50%) rotate(-130deg);
          font-size: 0.85rem;
          display: inline-block;
        }
        .speaker-right {
          position: absolute;
          right: -20px;
          top: 30%;
          transform: translateY(-50%) rotate(-50deg);
          font-size: 0.85rem;
          display: inline-block;
        }
        .verb-main-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          direction: ltr;
          padding: 4px 8px;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }
        .verb-main-row:hover {
          background-color: rgba(0, 191, 255, 0.15);
        }
        .verb-main-row:hover .german-word {
          color: #00bfff;
        }
        .german-word {
          font-size: 1.25rem;
          font-weight: 900;
          font-style: italic;
          direction: ltr;
          text-align: left;
          transition: color 0.2s ease;
        }
        .arabic-word {
          font-size: 1.25rem;
          font-weight: 900;
          text-align: right;
          direction: rtl;
          color: #ffffff;
        }
        .toggle-btn {
          position: absolute;
          bottom: -14px;
          left: 50%;
          transform: translateX(-50%);
          padding: 3px 18px;
          border-radius: 30px 6px;
          font-size: 0.75rem;
          font-weight: 900;
          color: #ffffff;
          border: none;
          cursor: pointer;
          z-index: 3;
          white-space: nowrap;
        }
        .toggle-btn.btn-show {
          background-color: #22c55e;
        }
        .toggle-btn.btn-hide {
          background-color: #ff3333;
        }
        .divider {
          border-top: 1px dashed rgba(255, 255, 255, 0.4);
          margin: 12px 0 10px 0;
          width: 100%;
        }
        .conjugation-table {
          display: flex;
          flex-direction: column;
          gap: 6px;
          width: 100%;
          margin-bottom: 6px;
          direction: ltr;
        }
        .conj-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          direction: ltr;
          padding: 4px 8px;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }
        .conj-row:hover {
          background-color: rgba(0, 191, 255, 0.15);
        }
        .conj-row:hover .pronoun {
          color: #ffffff;
        }
        .conj-row:hover .verb-form {
          color: #00bfff;
        }
        .pronoun {
          color: #00bfff;
          font-size: 1.05rem;
          font-weight: 900;
          font-style: italic;
          direction: ltr;
          text-align: left;
          transition: color 0.2s ease;
        }
        .verb-form {
          color: #ffffff;
          font-size: 1.05rem;
          font-weight: bold;
          font-style: italic;
          direction: ltr;
          text-align: right;
          transition: color 0.2s ease;
        }
      `}</style>

      <h1 className="page-title">تصريف الأفعال الألمانية 📖</h1>

      {/* حقل البحث */}
      <div className="search-container">
        <input
          type="text"
          placeholder="ابحث عن فعل، ترجمته، أو نطقه..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {/* حاوية الكروت */}
      <div className="cards-container">
        {filteredVerbs.map((item, index) => {
          const isOpen = !!openVerbs[item.id];
          return (
            <div key={item.id} className="vocab-card">
              {/* رقم الكارت */}
              <div className="item-number">{index + 1}</div>

              {/* شريط النطق والسماعات */}
              <div className="pronunciation-wrapper" onClick={(e) => speakGerman(item.german, e)}>
                <span className="speaker-left">🔊</span>
                <span>{item.pron}</span>
                <span className="speaker-right">🔊</span>
              </div>

              {/* الصف الرئيسي: الضغط في أي مكان على السطر يسمع الفعل ويعمل Hover تماماً مثل التصريفات */}
              <div
                className="verb-main-row"
                onClick={(e) => speakGerman(item.german, e)}
              >
                <div className="german-word">{item.german}</div>
                <div className="arabic-word">{item.arabic}</div>
              </div>

              {/* قائمة التصريفات عند الفتح */}
              {isOpen && (
                <>
                  <div className="divider"></div>
                  <div className="conjugation-table">
                    {Object.entries(item.conj).map(([pronoun, form]) => {
                      const speechText = pronoun === 'wir/sie/Sie' ? `wir, sie, Sie ${form}` : `${pronoun} ${form}`;
                      const displayPronoun = pronoun === 'wir/sie/Sie' ? 'wir / sie / Sie' : pronoun;

                      return (
                        <div
                          key={pronoun}
                          className="conj-row"
                          onClick={(e) => speakGerman(speechText, e)}
                        >
                          <div className="pronoun">{displayPronoun}</div>
                          <div className="verb-form">{form}</div>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}

              {/* زر الإظهار والإخفاء للتحكم بالفتح والقفل حصراً */}
              <button
                className={`toggle-btn ${isOpen ? 'btn-hide' : 'btn-show'}`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleVerb(item.id);
                }}
              >
                {isOpen ? 'إخفاء التصريفات' : 'إظهار التصريفات'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
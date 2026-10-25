import React, { useState } from 'react';

const animalsData = [
  // 1. مجموعة der (المذكر - حيوانات وطيور)
  { id: 1, name: "der Löwe", plural: "die Löwen", ar: "اسد", cat: "wild", article: "der", emoji: "🦁" },
  { id: 2, name: "der Elefant", plural: "die Elefanten", ar: "فيل", cat: "wild", article: "der", emoji: "🐘" },
  { id: 3, name: "der Tiger", plural: "die Tiger", ar: "نمر", cat: "wild", article: "der", emoji: "🐅" },
  { id: 4, name: "der Hund", plural: "die Hunde", ar: "كلب", cat: "pet", article: "der", emoji: "🐕" },
  { id: 5, name: "der Hamster", plural: "die Hamster", ar: "هامستر", cat: "pet", article: "der", emoji: "🐹" },
  { id: 6, name: "der Fisch", plural: "die Fische", ar: "سمكة", cat: "water", article: "der", emoji: "🐠" },
  { id: 7, name: "der Adler", plural: "die Adler", ar: "نسر", cat: "wild", article: "der", emoji: "🦅" },
  { id: 8, name: "der Pinguin", plural: "die Pinguine", ar: "بطريق", cat: "wild", article: "der", emoji: "🐧" },
  { id: 9, name: "der Papagei", plural: "die Papageien", ar: "ببغاء", cat: "pet", article: "der", emoji: "🦜" },
  { id: 10, name: "der Schwan", plural: "die Schwäne", ar: "بجعة", cat: "water", article: "der", emoji: "🦢" },
  { id: 11, name: "der Hai", plural: "die Haie", ar: "قرش", cat: "water", article: "der", emoji: "🦈" },
  { id: 12, name: "der Wal", plural: "die Wale", ar: "حوت", cat: "water", article: "der", emoji: "🐋" },
  { id: 13, name: "der Delfin", plural: "die Delfine", ar: "دلفين", cat: "water", article: "der", emoji: "🐬" },
  { id: 14, name: "der Oktopus", plural: "die Oktopusse", ar: "أخطبوط", cat: "water", article: "der", emoji: "🐙" },
  { id: 15, name: "der Bär", plural: "die Bären", ar: "دب", cat: "wild", article: "der", emoji: "🐻" },
  { id: 16, name: "der Fuchs", plural: "die Füchse", ar: "ثعلب", cat: "wild", article: "der", emoji: "🦊" },
  { id: 17, name: "der Wolf", plural: "die Wölfe", ar: "ذئب", cat: "wild", article: "der", emoji: "🐺" },
  { id: 18, name: "der Hirsch", plural: "die Hirsche", ar: "أيل / غزال", cat: "wild", article: "der", emoji: "🦌" },
  { id: 19, name: "der Frosch", plural: "die Frösche", ar: "ضفدع", cat: "wild", article: "der", emoji: "🐸" },
  { id: 20, name: "der Affe", plural: "die Affen", ar: "قرد", cat: "wild", article: "der", emoji: "🐒" },
  { id: 21, name: "der Hase", plural: "die Hasen", ar: "أرنب بري", cat: "wild", article: "der", emoji: "🐇" },
  { id: 22, name: "der Igel", plural: "die Igel", ar: "قنفذ", cat: "wild", article: "der", emoji: "🦔" },
  { id: 23, name: "der Stier", plural: "die Stiere", ar: "ثور", cat: "farm", article: "der", emoji: "🐂" },
  { id: 24, name: "der Esel", plural: "die Esel", ar: "حمار", cat: "farm", article: "der", emoji: "🫏" },
  { id: 25, name: "der Falke", plural: "die Falken", ar: "صقر", cat: "wild", article: "der", emoji: "🦅" },
  { id: 26, name: "der Biber", plural: "die Biber", ar: "قندس", cat: "wild", article: "der", emoji: "🦫" },
  { id: 27, name: "der Leopard", plural: "die Leoparden", ar: "فهد", cat: "wild", article: "der", emoji: "🐆" },
  { id: 28, name: "der Panda", plural: "die Pandas", ar: "باندا", cat: "wild", article: "der", emoji: "🐼" },
  { id: 29, name: "der Hahn", plural: "die Hähne", ar: "ديك", cat: "farm", article: "der", emoji: "🐓" },
  { id: 30, name: "der Pfau", plural: "die Pfauen", ar: "طاووس", cat: "wild", article: "der", emoji: "🦚" },
  { id: 31, name: "der Koala", plural: "die Koalas", ar: "كوالا", cat: "wild", article: "der", emoji: "🐨" },
  { id: 32, name: "der Flamingo", plural: "die Flamingos", ar: "فلامنجو", cat: "wild", article: "der", emoji: "🦩" },
  { id: 78, name: "der Krebs", plural: "die Krebse", ar: "سلطعون / سلطعيل", cat: "water", article: "der", emoji: "🦀" },
  { id: 79, name: "der Dachs", plural: "die Dachse", ar: "غرير", cat: "wild", article: "der", emoji: "🦡" },
  { id: 80, name: "der Gepard", plural: "die Geparde", ar: "فهد صياد", cat: "wild", article: "der", emoji: "🐆" },
  { id: 81, name: "der Strauß", plural: "die Strauße", ar: "نعامة", cat: "wild", article: "der", emoji: "🦩" },
  { id: 82, name: "der Truthahn", plural: "die Truthähne", ar: "ديك رومي", cat: "farm", article: "der", emoji: "🦃" },
  { id: 83, name: "der Seehund", plural: "die Seehunde", ar: "عجل البحر", cat: "water", article: "der", emoji: "🦭" },
  { id: 96, name: "der Panther", plural: "die Panther", ar: "نمر أسود / فهد أسود", cat: "wild", article: "der", emoji: "🐈‍⬛" },
  // الإضافات الجديدة في der:
  { id: 102, name: "der Rabe", plural: "die Raben", ar: "غراب", cat: "wild", article: "der", emoji: "🐦‍⬛" },
  { id: 103, name: "der Storch", plural: "die Störche", ar: "لقلق", cat: "wild", article: "der", emoji: "🦩" },
  { id: 104, name: "der Specht", plural: "die Spechte", ar: "نكار الخشب", cat: "wild", article: "der", emoji: "🐦" },
  { id: 105, name: "der Uhu", plural: "die Uhus", ar: "بومة قرناء / بوهة", cat: "wild", article: "der", emoji: "🦉" },
  { id: 106, name: "der Otter", plural: "die Otter", ar: "قضاعة / ثعلب الماء", cat: "water", article: "der", emoji: "🦦" },
  { id: 107, name: "der Waschbär", plural: "die Waschbären", ar: "راكون", cat: "wild", article: "der", emoji: "🦝" },
  { id: 108, name: "der Skunk", plural: "die Skunks", ar: "ظربان أمريكي", cat: "wild", article: "der", emoji: "🦨" },

  // 2. مجموعة das (المحايد - حيوانات وطيور)
  { id: 33, name: "das Zebra", plural: "die Zebras", ar: "حمار وحشي", cat: "wild", article: "das", emoji: "🦓" },
  { id: 34, name: "das Pferd", plural: "die Pferde", ar: "حصان", cat: "farm", article: "das", emoji: "🐎" },
  { id: 35, name: "das Schwein", plural: "die Schweine", ar: "خنزير", cat: "farm", article: "das", emoji: "🐖" },
  { id: 36, name: "das Schaf", plural: "die Schafe", ar: "خروف", cat: "farm", article: "das", emoji: "🐑" },
  { id: 37, name: "das Huhn", plural: "die Hühner", ar: "دجاجة", cat: "farm", article: "das", emoji: "🐔" },
  { id: 38, name: "das Kaninchen", plural: "die Kaninchen", ar: "أرنب أليف", cat: "pet", article: "das", emoji: "🐇" },
  { id: 39, name: "das Krokodil", plural: "die Krokodile", ar: "تمساح", cat: "wild", article: "das", emoji: "🐊" },
  { id: 40, name: "das Nilpferd", plural: "die Nilpferde", ar: "فرس النهر", cat: "wild", article: "das", emoji: "🦛" },
  { id: 41, name: "das Kamel", plural: "die Kamele", ar: "جمل", cat: "farm", article: "das", emoji: "🐪" },
  { id: 42, name: "das Eichhörnchen", plural: "die Eichhörnchen", ar: "سنجاب", cat: "wild", article: "das", emoji: "🐿️" },
  { id: 43, name: "das Nashorn", plural: "die Nashörner", ar: "وحيد القرن", cat: "wild", article: "das", emoji: "🦏" },
  { id: 44, name: "das Küken", plural: "die Küken", ar: "كتكوت", cat: "farm", article: "das", emoji: "🐥" },
  { id: 45, name: "das Lamm", plural: "die Lämmer", ar: "حمل صغير", cat: "farm", article: "das", emoji: "🐑" },
  { id: 46, name: "das Fohlen", plural: "die Fohlen", ar: "مهر", cat: "farm", article: "das", emoji: "🐴" },
  { id: 47, name: "das Rind", plural: "die Rinder", ar: "ماشية / بقرة", cat: "farm", article: "das", emoji: "🐂" },
  { id: 48, name: "das Lama", plural: "die Lamas", ar: "لاما", cat: "wild", article: "das", emoji: "🦙" },
  { id: 49, name: "das Känguru", plural: "die Kängurus", ar: "كنغر", cat: "wild", article: "das", emoji: "🦘" },
  { id: 50, name: "das Faultier", plural: "die Faultiere", ar: "كسلان", cat: "wild", article: "das", emoji: "🦥" },
  { id: 51, name: "das Chamäleon", plural: "die Chamäleons", ar: "حرباء", cat: "wild", article: "das", emoji: "🦎" },
  { id: 52, name: "das Erdmännchen", plural: "die Erdmännchen", ar: "ميركات", cat: "wild", article: "das", emoji: "🦦" },
  { id: 84, name: "das Meerschweinchen", plural: "die Meerschweinchen", ar: "خنزير غينيا", cat: "pet", article: "das", emoji: "🐹" },
  { id: 85, name: "das Rentier", plural: "die Rentiere", ar: "رنة", cat: "wild", article: "das", emoji: "🦌" },
  { id: 86, name: "das Walross", plural: "die Walrosse", ar: "حيوان الفولرس", cat: "water", article: "das", emoji: "🦭" },
  { id: 87, name: "das Wildschwein", plural: "die Wildschweine", ar: "خنزير بري", cat: "wild", article: "das", emoji: "🐗" },
  { id: 88, name: "das Stinktier", plural: "die Stinktiere", ar: "ظربان", cat: "wild", article: "das", emoji: "🦨" },
  { id: 98, name: "das Aquarium", plural: "die Aquarien", ar: "حوض سمك", cat: "water", article: "das", emoji: "🐠" },
  // الإضافات الجديدة في das:
  { id: 109, name: "das Gürteltier", plural: "die Gürteltiere", ar: "مدرع", cat: "wild", article: "das", emoji: "🦔" },
  { id: 110, name: "das Schnabeltier", plural: "die Schnabeltiere", ar: "خلد الماء", cat: "water", article: "das", emoji: "🦆" },

  // 3. مجموعة die (المؤنث - حيوانات وطيور)
  { id: 53, name: "die Giraffe", plural: "die Giraffen", ar: "زرافة", cat: "wild", article: "die", emoji: "🦒" },
  { id: 54, name: "die Kuh", plural: "die Kühe", ar: "بقرة", cat: "farm", article: "die", emoji: "🐄" },
  { id: 55, name: "die Katze", plural: "die Katzen", ar: "قطة", cat: "pet", article: "die", emoji: "🐈" },
  { id: 56, name: "die Eule", plural: "die Eulen", ar: "بومة", cat: "wild", article: "die", emoji: "🦉" },
  { id: 57, name: "die Schildkröte", plural: "die Schildkröten", ar: "سلحفاة", cat: "wild", article: "die", emoji: "🐢" },
  { id: 58, name: "die Ente", plural: "die Enten", ar: "بطة", cat: "water", article: "die", emoji: "🦆" },
  { id: 59, name: "die Ziege", plural: "die Ziegen", ar: "معزة", cat: "farm", article: "die", emoji: "🐐" },
  { id: 60, name: "die Schlange", plural: "die Schlangen", ar: "ثعبان", cat: "wild", article: "die", emoji: "🐍" },
  { id: 61, name: "die Maus", plural: "die Mäuse", ar: "فأر", cat: "pet", article: "die", emoji: "🐁" },
  { id: 62, name: "die Taube", plural: "die Tauben", ar: "حمامة", cat: "wild", article: "die", emoji: "🕊️" },
  { id: 63, name: "die Gans", plural: "die Gänse", ar: "أوزة", cat: "farm", article: "die", emoji: "🦢" },
  { id: 89, name: "die Fledermaus", plural: "die Fledermäuse", ar: "خفاش", cat: "wild", article: "die", emoji: "🦇" },
  { id: 90, name: "die Robbe", plural: "die Robben", ar: "فقمة", cat: "water", article: "die", emoji: "🦭" },
  { id: 91, name: "die Kröte", plural: "die Kröten", ar: "علجوم", cat: "wild", article: "die", emoji: "🐸" },
  { id: 92, name: "die Hyäne", plural: "die Hyänen", ar: "ضبع", cat: "wild", article: "die", emoji: "🦊" },
  { id: 100, name: "die Qualle", plural: "die Quallen", ar: "قنديل البحر", cat: "water", article: "die", emoji: "🪼" },
  { id: 101, name: "die Meise", plural: "die Meisen", ar: "طائر القيقب / عصفور دوري", cat: "wild", article: "die", emoji: "🐦" },
  // الإضافات الجديدة في die:
  { id: 111, name: "die Krähe", plural: "die Krähen", ar: "غراب (عقعق / غراب الزرع)", cat: "wild", article: "die", emoji: "🐦‍⬛" },
  { id: 112, name: "die Möwe", plural: "die Möwen", ar: "نورس", cat: "water", article: "die", emoji: "🐦" },
  { id: 113, name: "die Schwalbe", plural: "die Schwalben", ar: "سنونو / السنونو", cat: "wild", article: "die", emoji: "🐦" },
  { id: 114, name: "die Wachtel", plural: "die Wachteln", ar: "سمان", cat: "wild", article: "die", emoji: "🐦" },
  { id: 115, name: "die Elster", plural: "die Elstern", ar: "عقعق", cat: "wild", article: "die", emoji: "🐦" },
  { id: 116, name: "die Ratte", plural: "die Ratten", ar: "جرذ / جرذ كبير", cat: "pet", article: "die", emoji: "🐀" },

  // 4. مجموعة الحشرات (توضع في الآخر)
  { id: 64, name: "der Schmetterling", plural: "die Schmetterlinge", ar: "فراشة", cat: "insect", article: "der", emoji: "🦋" },
  { id: 65, name: "der Marienkäfer", plural: "die Marienkäfer", ar: "خنفسة", cat: "insect", article: "der", emoji: "🐞" },
  { id: 66, name: "der Skorpion", plural: "die Skorpione", ar: "عقرب", cat: "insect", article: "der", emoji: "🦂" },
  { id: 67, name: "der Wurm", plural: "die Würmer", ar: "دودة", cat: "insect", article: "der", emoji: "🪱" },
  { id: 93, name: "der Käfer", plural: "die Käfer", ar: "خنفساء", cat: "insect", article: "der", emoji: "🪲" },
  { id: 94, name: "der Floh", plural: "die Flöhe", ar: "برغوث", cat: "insect", article: "der", emoji: "🦟" },
  { id: 68, name: "das Insekt", plural: "die Insekten", ar: "حشرة عامة", cat: "insect", article: "das", emoji: "🐛" },
  { id: 69, name: "die Biene", plural: "die Bienen", ar: "نحلة", cat: "insect", article: "die", emoji: "🐝" },
  { id: 70, name: "die Spinne", plural: "die Spinnen", ar: "عنكبوت", cat: "insect", article: "die", emoji: "🕷️" },
  { id: 71, name: "die Ameise", plural: "die Ameisen", ar: "نملة", cat: "insect", article: "die", emoji: "🐜" },
  { id: 72, name: "die Mücke", plural: "die Mücken", ar: "بعوضة", cat: "insect", article: "die", emoji: "🦟" },
  { id: 73, name: "die Fliege", plural: "die Fliegen", ar: "ذُبابة", cat: "insect", article: "die", emoji: "🪰" },
  { id: 74, name: "die Wespe", plural: "die Wespen", ar: "دبور", cat: "insect", article: "die", emoji: "🐝" },
  { id: 75, name: "die Libelle", plural: "die Libellen", ar: "يعسوب", cat: "insect", article: "die", emoji: "🪲" },
  { id: 76, name: "die Heuschrecke", plural: "die Heuschrecken", ar: "جرادة", cat: "insect", article: "die", emoji: "🦗" },
  { id: 77, name: "die Raupe", plural: "die Raupen", ar: "يرقة الفراشة", cat: "insect", article: "die", emoji: "🐛" },
  // الإضافات الجديدة في الحشرات:
  { id: 117, name: "der Tausendfüßler", plural: "die Tausendfüßler", ar: "أم أربعة وأربعين / أم 44", cat: "insect", article: "der", emoji: "🐛" },
  { id: 118, name: "die Hornisse", plural: "die Hornissen", ar: "دبور كبير", cat: "insect", article: "die", emoji: "🐝" },
  { id: 119, name: "die Termite", plural: "die Termiten", ar: "نمل أبيض / نملة بيضاء", cat: "insect", article: "die", emoji: "🐜" },
  { id: 120, name: "die Zecke", plural: "die Zecken", ar: "قرادة", cat: "insect", article: "die", emoji: "🕷️" },
  { id: 95, name: "die Schabe", plural: "die Schaben", ar: "صرصور", cat: "insect", article: "die", emoji: "🪳" },
];

export default function Animals() {
  const [filter, setFilter] = useState('all');
  const [speechRate, setSpeechRate] = useState(0.5);
  const [searchQuery, setSearchQuery] = useState('');

  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'de-DE';
      utterance.rate = speechRate;
      window.speechSynthesis.speak(utterance);
    }
  };

  const speakAnimalWithPlural = (animal) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();

      const utterance1 = new SpeechSynthesisUtterance(animal.name);
      utterance1.lang = 'de-DE';
      utterance1.rate = speechRate;

      utterance1.onend = () => {
        setTimeout(() => {
          const utterance2 = new SpeechSynthesisUtterance(animal.plural);
          utterance2.lang = 'de-DE';
          utterance2.rate = speechRate;
          window.speechSynthesis.speak(utterance2);
        }, 50);
      };

      window.speechSynthesis.speak(utterance1);
    }
  };

  const filteredAnimals = animalsData.filter(item => {
    const matchesFilter =
      filter === 'all' ? true :
      ['der', 'das', 'die'].includes(filter) ? item.article === filter :
      item.cat === filter;

    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.plural.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.ar.includes(searchQuery);

    return matchesFilter && matchesSearch;
  });

  const derItems = filteredAnimals.filter(i => i.article === 'der' && i.cat !== 'insect');
  const dasItems = filteredAnimals.filter(i => i.article === 'das' && i.cat !== 'insect');
  const dieItems = filteredAnimals.filter(i => i.article === 'die' && i.cat !== 'insect');
  const insectItems = filteredAnimals.filter(i => i.cat === 'insect');

  const renderCard = (animal) => {
    const borderClass =
      animal.article === 'der' ? 'border-der' :
      animal.article === 'das' ? 'border-das' : 'border-die';

    const textClass =
      animal.article === 'der' ? 'text-der' :
      animal.article === 'das' ? 'text-das' : 'text-die';

    const wordClass =
      animal.article === 'der' ? 'text-der-word' :
      animal.article === 'das' ? 'text-das-word' : 'text-die-word';

    const parts = animal.name.split(' ');
    const articleWord = parts[0];
    const restOfName = parts.slice(1).join(' ');

    const pluralParts = animal.plural.split(' ');
    const pluralArticle = pluralParts[0];
    const pluralRest = pluralParts.slice(1).join(' ');

    return (
      <div
        key={animal.id}
        onClick={() => speakAnimalWithPlural(animal)}
        className={`tiere-card ${borderClass}`}
      >
        <span className="card-speaker-icon" title="اسمع النطق">
          🔊
        </span>

        <span className={`tiere-article-tag ${textClass}`}>
          {animal.article}
        </span>

        <div className="animal-icon-wrapper" style={{ fontSize: '2.5rem', margin: '6px 0', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }}>
          {animal.emoji}
        </div>

        <div className="card-content-area">
          <h3 style={{ fontWeight: 'bold', marginBottom: '2px', fontSize: '1.05rem', lineHeight: '1.3' }}>
            <span className={wordClass}>
              {articleWord}
            </span>
            <span> </span>
            <span className="animal-rest-name">
              {restOfName}
            </span>
          </h3>
          <div style={{ fontSize: '0.95rem', marginBottom: '4px', fontWeight: 'bold', lineHeight: '1.2' }}>
            <span style={{ color: '#f97316' }}>{pluralArticle}</span>{' '}
            <span className="animal-rest-name">{pluralRest}</span>
          </div>
          <p style={{ opacity: 0.9, margin: 0, fontSize: '0.9rem' }}>
            {animal.ar}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="tiere-app-container">
      <style>{`
        .tiere-app-container {
          min-height: 100vh;
          padding: 20px;
          direction: rtl;
          font-family: inherit;
          background-color: transparent !important;
        }
        .tiere-max-w {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .tiere-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 9999px;
          font-size: 12px;
          font-weight: 600;
          margin-bottom: 12px;
        }
        .tiere-title {
          font-size: 3rem;
          font-weight: 900;
          margin-bottom: 20px;
          text-align: center;
        }
        .section-heading {
          font-size: 1.5rem;
          font-weight: 800;
          margin: 30px 0 15px 0;
          width: 100%;
          text-align: right;
          border-right: 4px solid #f97316;
          padding-right: 10px;
        }
        .tiere-speed-box {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: 16px;
          margin-bottom: 15px;
        }
        .tiere-btn {
          padding: 8px 16px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .tiere-btn.active {
          background-color: #f97316 !important;
          color: #ffffff !important;
          border-color: #f97316 !important;
        }
        .tiere-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          width: 100%;
        }
        @media (min-width: 768px) {
          .tiere-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (min-width: 1024px) {
          .tiere-grid { grid-template-columns: repeat(4, 1fr); }
        }

        .tiere-card {
          position: relative;
          background-color: #ffffff !important;
          border-radius: 30px 6px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          text-align: center;
          cursor: pointer;
          min-height: 245px;
          box-sizing: border-box;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 12px rgba(0,0,0,0.06);
          overflow: hidden;
        }
        .tiere-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 24px rgba(0,0,0,0.14);
        }
        .tiere-card:hover .animal-icon-wrapper {
          transform: scale(1.1);
          transition: transform 0.2s ease;
        }
        .card-content-area {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-top: auto;
          margin-bottom: auto;
        }

        .card-speaker-icon {
          position: absolute;
          top: 10px;
          right: 14px;
          font-size: 16px;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.35));
          transition: transform 0.2s;
        }
        .tiere-card:hover .card-speaker-icon {
          transform: scale(1.2);
        }

        .border-der { border: 2.5px solid #3b82f6; }
        .text-der { color: #3b82f6 !important; background-color: rgba(59, 130, 246, 0.1); }
        .text-der-word { color: #3b82f6 !important; font-weight: 900; }

        .border-das { border: 2.5px solid #10b981; }
        .text-das { color: #10b981 !important; background-color: rgba(16, 185, 129, 0.1); }
        .text-das-word { color: #10b981 !important; font-weight: 900; }

        .border-die { border: 2.5px solid #ec4899; }
        .text-die { color: #ec4899 !important; background-color: rgba(236, 72, 153, 0.1); }
        .text-die-word { color: #ec4899 !important; font-weight: 900; }

        .tiere-article-tag {
          padding: 3px 14px;
          border-radius: 9999px;
          font-size: 11px;
          font-weight: 900;
          text-transform: uppercase;
        }
        .tiere-search-input {
          width: 100%;
          max-width: 400px;
          padding: 10px 16px;
          border-radius: 16px;
          font-size: 13px;
          outline: none;
          margin-bottom: 24px;
        }

        /* الوضع الداكن (Dark Mode) */
        @media (prefers-color-scheme: dark) {
          .tiere-app-container { color: #f3f4f6; }
          .animal-rest-name { color: #111827 !important; }
          .tiere-card p { color: #4b5563 !important; font-weight: 600; }
          .card-speaker-icon { filter: drop-shadow(0 2px 5px rgba(255, 255, 255, 0.4)); }
          .tiere-badge {
            background-color: rgba(255, 255, 255, 0.1);
            color: #fdba74;
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
          .tiere-speed-box {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: #ffffff;
          }
          .tiere-btn {
            background: rgba(255, 255, 255, 0.1);
            color: #ffffff;
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
          .tiere-search-input {
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: #ffffff;
          }
          .tiere-search-input::placeholder { color: rgba(255, 255, 255, 0.6); }
          .tiere-title, .section-heading { color: #ffffff !important; }
        }

        /* الوضع الفاتح (Light Mode) */
        @media (prefers-color-scheme: light) {
          .tiere-app-container { color: #111827; }
          .animal-rest-name { color: #111827 !important; }
          .tiere-card p { color: #374151 !important; font-weight: 600; }
          .tiere-badge {
            background-color: #fff7ed;
            color: #c2410c;
            border: 1px solid #fed7aa;
          }
          .tiere-speed-box {
            background: #ffffff;
            border: 1px solid #e5e7eb;
            color: #111827;
          }
          .tiere-btn {
            background: #f3f4f6;
            color: #374151;
            border: 1px solid #e5e7eb;
          }
          .tiere-search-input {
            background: #ffffff;
            border: 1px solid #e5e7eb;
            color: #111827;
          }
          .tiere-title, .section-heading { color: #000000 !important; }
        }
      `}</style>

      <div className="tiere-max-w">

        {/* شارة العنوان العلوية */}
        <div className="tiere-badge">
          <span>✨</span> Deutsch macht Spaß! 🇩🇪
        </div>

        {/* العنوان الرئيسي */}
        <h1 className="tiere-title">Tiere</h1>

        {/* أزرار سرعة النطق */}
        <div className="tiere-speed-box">
          <span style={{ fontSize: '12px', fontWeight: 'bold' }}>سرعة النطق:</span>
          <button
            onClick={() => setSpeechRate(0.5)}
            className={`tiere-btn ${speechRate === 0.5 ? 'active' : ''}`}
          >
            0.5x (بطيء جداً)
          </button>
          <button
            onClick={() => setSpeechRate(1.0)}
            className={`tiere-btn ${speechRate === 1.0 ? 'active' : ''}`}
          >
            1.0x (عادي)
          </button>
        </div>

        {/* أزرار سماع الكلمات المنفصلة */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '20px' }}>
          <button onClick={() => speakText("die Tiere")} className="tiere-btn" style={{ fontWeight: 'bold' }}>
            🔊 سماع "الحيوانات" (die Tiere)
          </button>
          <button onClick={() => speakText("die Insekten")} className="tiere-btn" style={{ fontWeight: 'bold' }}>
            🔊 سماع "الحشرات" (die Insekten)
          </button>
        </div>

        {/* أزرار الفلترة والترتيب */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', width: '100%', marginBottom: '20px' }}>

          {/* زر الكل لوحده فوق */}
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <button
              onClick={() => setFilter('all')}
              className={`tiere-btn ${filter === 'all' ? 'active' : ''}`}
              style={{ padding: '10px 24px', fontSize: '14px' }}
            >
              الكل (Alle)
            </button>
          </div>

          {/* أدوات التعريف */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              { id: 'der', label: 'مذكر (Der)' },
              { id: 'das', label: 'محايد (Das)' },
              { id: 'die', label: 'مؤنث (Die)' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setFilter(item.id)}
                className={`tiere-btn ${filter === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* التصنيفات الخمسة */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              { id: 'wild', label: 'برية' },
              { id: 'farm', label: 'مزرعة' },
              { id: 'pet', label: 'أليفة' },
              { id: 'water', label: 'مائية' },
              { id: 'insect', label: 'حشرات' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setFilter(item.id)}
                className={`tiere-btn ${filter === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </div>

        </div>

        {/* شريط البحث */}
        <input
          type="text"
          placeholder="ابحث بالعربية أو الألمانية (مثال: Löwe, أسد)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="tiere-search-input"
        />

        {/* عرض العناصر مرتبة */}
        {filter !== 'all' ? (
          <div className="tiere-grid">
            {filteredAnimals.map(animal => renderCard(animal))}
          </div>
        ) : (
          <div style={{ width: '100%' }}>
            {derItems.length > 0 && (
              <>
                <h2 className="section-heading">التي تبدأ بـ Der (المذكر)</h2>
                <div className="tiere-grid">
                  {derItems.map(animal => renderCard(animal))}
                </div>
              </>
            )}

            {dasItems.length > 0 && (
              <>
                <h2 className="section-heading">التي تبدأ بـ Das (المحايد)</h2>
                <div className="tiere-grid">
                  {dasItems.map(animal => renderCard(animal))}
                </div>
              </>
            )}

            {dieItems.length > 0 && (
              <>
                <h2 className="section-heading">التي تبدأ بـ Die (المؤنث)</h2>
                <div className="tiere-grid">
                  {dieItems.map(animal => renderCard(animal))}
                </div>
              </>
            )}

            {insectItems.length > 0 && (
              <>
                <h2 className="section-heading">الحشرات (Insekten)</h2>
                <div className="tiere-grid">
                  {insectItems.map(animal => renderCard(animal))}
                </div>
              </>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
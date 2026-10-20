import React from 'react';

const countries = [
  // --- دول بدون أداة (Null / Neutral) ---
  { id: 1, de: 'Deutschland', article: '', ar: 'ألمانيا', code: 'de', sentenceDe: 'Ich komme aus Deutschland.\nIch spreche Deutsch.', sentenceAr: 'أنا قادم من ألمانيا.\nأنا أتحدث الألمانية.' },
  { id: 2, de: 'Ägypten', article: '', ar: 'مصر', code: 'eg', sentenceDe: 'Ich komme aus Ägypten.\nIch spreche Arabisch.', sentenceAr: 'أنا قادم من مصر.\nأنا أتحدث العربية.' },
  { id: 3, de: 'Spanien', article: '', ar: 'إسبانيا', code: 'es', sentenceDe: 'Ich komme aus Spanien.\nIch spreche Spanisch.', sentenceAr: 'أنا قادم من إسبانيا.\nأنا أتحدث الإسبانية.' },
  { id: 4, de: 'Frankreich', article: '', ar: 'فرنسا', code: 'fr', sentenceDe: 'Ich komme aus Frankreich.\nIch spreche Französisch.', sentenceAr: 'أنا قادم من فرنسا.\nأنا أتحدث الفرنسية.' },
  { id: 5, de: 'Italien', article: '', ar: 'إيطاليا', code: 'it', sentenceDe: 'Ich komme aus Italien.\nIch spreche Italienisch.', sentenceAr: 'أنا قادم من إيطاليا.\nأنا أتحدث الإيطالية.' },
  { id: 6, de: 'Österreich', article: '', ar: 'النمسا', code: 'at', sentenceDe: 'Ich komme aus Österreich.\nIch spreche Deutsch.', sentenceAr: 'أنا قادم من النمسا.\nأنا أتحدث الألمانية.' },
  { id: 7, de: 'Großbritannien', article: '', ar: 'بريطانيا', code: 'gb', sentenceDe: 'Ich komme aus Großbritannien.\nIch spreche Englisch.', sentenceAr: 'أنا قادم من بريطانيا.\nأنا أتحدث الإنجليزية.' },
  { id: 8, de: 'Griechenland', article: '', ar: 'اليونان', code: 'gr', sentenceDe: 'Ich komme aus Griechenland.\nIch spreche Griechisch.', sentenceAr: 'أنا قادم من اليونان.\nأنا أتحدث اليونانية.' },
  { id: 9, de: 'Saudi-Arabien', article: '', ar: 'السعودية', code: 'sa', sentenceDe: 'Ich komme aus Saudi-Arabien.\nIch spreche Arabisch.', sentenceAr: 'أنا قادم من السعودية.\nأنا أتحدث العربية.' },
  { id: 10, de: 'Algerien', article: '', ar: 'الجزائر', code: 'dz', sentenceDe: 'Ich komme aus Algerien.\nIch spreche Arabisch.', sentenceAr: 'أنا قادم من الجزائر.\nأنا أتحدث العربية.' },
  { id: 11, de: 'Marokko', article: '', ar: 'المغرب', code: 'ma', sentenceDe: 'Ich komme aus Marokko.\nIch spreche Arabisch.', sentenceAr: 'أنا قادم من المغرب.\nأنا أتحدث العربية.' },
  { id: 12, de: 'Katar', article: '', ar: 'قطر', code: 'qa', sentenceDe: 'Ich komme aus Katar.\nIch spreche Arabisch.', sentenceAr: 'أنا قادم من قطر.\nأنا أتحدث العربية.' },
  { id: 13, de: 'Kuwait', article: '', ar: 'الكويت', code: 'kw', sentenceDe: 'Ich komme aus Kuwait.\nIch spreche Arabisch.', sentenceAr: 'أنا قادم من الكويت.\nأنا أتحدث العربية.' },
  { id: 14, de: 'Tunisien', article: '', ar: 'تونس', code: 'tn', sentenceDe: 'Ich komme aus Tunisien.\nIch spreche Arabisch.', sentenceAr: 'أنا قادم من تونس.\nأنا أتحدث العربية.' },
  { id: 15, de: 'Jordanien', article: '', ar: 'الأردن', code: 'jo', sentenceDe: 'Ich komme aus Jordanien.\nIch spreche Arabisch.', sentenceAr: 'أنا قادم من الأردن.\nأنا أتحدث العربية.' },
  { id: 16, de: 'Oman', article: '', ar: 'عُمان', code: 'om', sentenceDe: 'Ich komme aus Oman.\nIch spreche Arabisch.', sentenceAr: 'أنا قادم من عُمان.\nأنا أتحدث العربية.' },
  { id: 17, de: 'Palästina', article: '', ar: 'فلسطين', code: 'ps', sentenceDe: 'Ich komme aus Palästina.\nIch spreche Arabisch.', sentenceAr: 'أنا قادم من فلسطين.\nأنا أتحدث العربية.' },
  { id: 18, de: 'Syrien', article: '', ar: 'سوريا', code: 'sy', sentenceDe: 'Ich komme aus Syrien.\nIch spreche Arabisch.', sentenceAr: 'أنا قادم من سوريا.\nأنا أتحدث العربية.' },
  { id: 19, de: 'Libyen', article: '', ar: 'ليبيا', code: 'ly', sentenceDe: 'Ich komme aus Libyen.\nIch spreche Arabisch.', sentenceAr: 'أنا قادم من ليبيا.\nأنا أتحدث العربية.' },
  { id: 20, de: 'Kanada', article: '', ar: 'كندا', code: 'ca', sentenceDe: 'Ich komme aus Kanada.\nIch spreche Englisch und Französisch.', sentenceAr: 'أنا قادم من كندا.\nأنا أتحدث الإنجليزية والفرنسية.' },
  { id: 21, de: 'Brasilien', article: '', ar: 'البرازيل', code: 'br', sentenceDe: 'Ich komme aus Brasilien.\nIch spreche Portugiesisch.', sentenceAr: 'أنا قادم من البرازيل.\nأنا أتحدث البرتغالية.' },
  { id: 22, de: 'Japan', article: '', ar: 'اليابان', code: 'jp', sentenceDe: 'Ich komme aus Japan.\nIch spreche Japanisch.', sentenceAr: 'أنا قادم من اليابان.\nأنا أتحدث اليابانية.' },
  { id: 23, de: 'China', article: '', ar: 'الصين', code: 'cn', sentenceDe: 'Ich komme aus China.\nIch spreche Chinesisch.', sentenceAr: 'أنا قادم من الصين.\nأنا أتحدث الصينية.' },
  { id: 24, de: 'Indien', article: '', ar: 'الهند', code: 'in', sentenceDe: 'Ich komme aus Indien.\nIch spreche Hindi und Englisch.', sentenceAr: 'أنا قادم من الهند.\nأنا أتحدث الهندية والإنجليزية.' },
  { id: 25, de: 'Russland', article: '', ar: 'روسيا', code: 'ru', sentenceDe: 'Ich komme aus Russland.\nIch spreche Russisch.', sentenceAr: 'أنا قادم من روسيا.\nأنا أتحدث الروسية.' },
  { id: 26, de: 'Australien', article: '', ar: 'أستراليا', code: 'au', sentenceDe: 'Ich komme aus Australien.\nIch spreche Englisch.', sentenceAr: 'أنا قادم من أستراليا.\nأنا أتحدث الإنجليزية.' },
  { id: 27, de: 'Schweden', article: '', ar: 'السويد', code: 'se', sentenceDe: 'Ich komme aus Schweden.\nIch spreche Schwedisch.', sentenceAr: 'أنا قادم من السويد.\nأنا أتحدث السويدية.' },
  { id: 28, de: 'Norwegen', article: '', ar: 'النرويج', code: 'no', sentenceDe: 'Ich komme aus Norwegen.\nIch spreche Norwegisch.', sentenceAr: 'أنا قادم من النرويج.\nأنا أتحدث النرويجية.' },
  { id: 29, de: 'Dänemark', article: '', ar: 'الدنمارك', code: 'dk', sentenceDe: 'Ich komme aus Dänemark.\nIch spreche Dänisch.', sentenceAr: 'أنا قادم من الدنمارك.\nأنا أتحدث الدنماركية.' },
  { id: 30, de: 'Finnland', article: '', ar: 'فنلندا', code: 'fi', sentenceDe: 'Ich komme aus Finnland.\nIch spreche Finnisch.', sentenceAr: 'أنا قادم من فنلندا.\nأنا أتحدث الفنلندية.' },
  { id: 31, de: 'Polen', article: '', ar: 'بولندا', code: 'pl', sentenceDe: 'Ich komme aus Polen.\nIch spreche Polnisch.', sentenceAr: 'أنا قادم من بولندا.\nأنا أتحدث البولندية.' },
  { id: 32, de: 'Portugal', article: '', ar: 'البرتغال', code: 'pt', sentenceDe: 'Ich komme aus Portugal.\nIch spreche Portugiesisch.', sentenceAr: 'أنا قادم من البرتغال.\nأنا أتحدث البرتغالية.' },
  { id: 33, de: 'Belgien', article: '', ar: 'بلجيكا', code: 'be', sentenceDe: 'Ich komme aus Belgien.\nIch spreche Niederländisch und Französisch.', sentenceAr: 'أنا قادم من بلجيكا.\nأنا أتحدث الهولندية والفرنسية.' },
  { id: 34, de: 'Ungarn', article: '', ar: 'المجر', code: 'hu', sentenceDe: 'Ich komme aus Ungarn.\nIch spreche Ungarisch.', sentenceAr: 'أنا قادم من المجر.\nأنا أتحدث المجرية.' },
  { id: 35, de: 'Rumänien', article: '', ar: 'رومانيا', code: 'ro', sentenceDe: 'Ich komme aus Rumänien.\nIch spreche Rumänisch.', sentenceAr: 'أنا قادم من رومانيا.\nأنا أتحدث الرومانية.' },

  // --- دول تأخذ الأداة feminin (die -> aus der) ---
  { id: 36, de: 'die Schweiz', article: 'die', ar: 'سويسرا', code: 'ch', sentenceDe: 'Ich komme aus der Schweiz.\nIch spreche Deutsch.', sentenceAr: 'أنا قادم من سويسرا.\nأنا أتحدث الألمانية.' },
  { id: 37, de: 'die Türkei', article: 'die', ar: 'تركيا', code: 'tr', sentenceDe: 'Ich komme aus der Türkei.\nIch spreche Türkisch.', sentenceAr: 'أنا قادم من تركيا.\nأنا أتحدث التركية.' },
  { id: 38, de: 'die Ukraine', article: 'die', ar: 'أوكرانيا', code: 'ua', sentenceDe: 'Ich komme aus der Ukraine.\nIch spreche Ukrainisch.', sentenceAr: 'أنا قادم من أوكرانيا.\nأنا أتحدث الأوكرانية.' },
  { id: 39, de: 'die Slowakei', article: 'die', ar: 'سلوفاكيا', code: 'sk', sentenceDe: 'Ich komme aus der Slowakei.\nIch spreche Slowakisch.', sentenceAr: 'أنا قادم من سلوفاكيا.\nأنا أتحدث السلوفاكية.' },
  { id: 40, de: 'die Mongolei', article: 'die', ar: 'منغوليا', code: 'mn', sentenceDe: 'Ich komme aus der Mongolei.\nIch spreche Mongolisch.', sentenceAr: 'أنا قادم من منغوليا.\nأنا أتحدث المغولية.' },

  // --- دول تأخذ الأداة Plural (die -> aus den) ---
  { id: 41, de: 'die USA', article: 'die', ar: 'الولايات المتحدة', code: 'us', sentenceDe: 'Ich komme aus den USA.\nIch spreche Englisch.', sentenceAr: 'أنا قادم من الولايات المتحدة.\nأنا أتحدث الإنجليزية.' },
  { id: 42, de: 'die Niederlande', article: 'die', ar: 'هولندا', code: 'nl', sentenceDe: 'Ich komme aus den Niederlanden.\nIch spreche Niederländisch.', sentenceAr: 'أنا قادم من هولندا.\nأنا أتحدث الهولندية.' },
  { id: 43, de: 'die UAE', article: 'die', ar: 'الإمارات', code: 'ae', sentenceDe: 'Ich komme aus den VAE.\nIch spreche Arabisch.', sentenceAr: 'أنا قادم من الإمارات.\nأنا أتحدث العربية.' },

  // --- دول تأخذ الأداة maskulin (der -> aus dem) ---
  { id: 44, de: 'der Irak', article: 'der', ar: 'العراق', code: 'iq', sentenceDe: 'Ich komme aus dem Irak.\nIch spreche Arabisch.', sentenceAr: 'أنا قادم من العراق.\nأنا أتحدث العربية.' },
  { id: 45, de: 'der Iran', article: 'der', ar: 'إيران', code: 'ir', sentenceDe: 'Ich komme aus dem Iran.\nIch spreche Persisch.', sentenceAr: 'أنا قادم من إيران.\nأنا أتحدث الفارسية.' },
  { id: 46, de: 'der Sudan', article: 'der', ar: 'السودان', code: 'sd', sentenceDe: 'Ich komme aus dem Sudan.\nIch spreche Arabisch.', sentenceAr: 'أنا قادم من السودان.\nأنا أتحدث العربية.' },
  { id: 47, de: 'der Libanon', article: 'der', ar: 'لبنان', code: 'lb', sentenceDe: 'Ich komme aus dem Libanon.\nIch spreche Arabisch.', sentenceAr: 'أنا قادم من لبنان.\nأنا أتحدث العربية.' },
  { id: 48, de: 'der Jemen', article: 'der', ar: 'اليمن', code: 'ye', sentenceDe: 'Ich komme aus dem Jemen.\nIch spreche Arabisch.', sentenceAr: 'أنا قادم من اليمن.\nأنا أتحدث العربية.' },

  // --- دول تأخذ الأداة neutral (das -> aus dem) ---
  { id: 49, de: 'das Kosovo', article: 'das', ar: 'كوسوفو', code: 'xk', sentenceDe: 'Ich komme aus dem Kosovo.\nIch spreche Albanisch.', sentenceAr: 'أنا قادم من كوسوفو.\nأنا أتحدث الألبانية.' }
];

// مصفوفة الألوان للتغيير دورياً لنص اللغة الألمانية فقط (بمبه، أخضر، برتقالي، لبني)
const germanTextColors = ['#ff69b4', '#2ecc71', '#e67e22', '#00d2ff'];

export default function Country() {
  // دالة تشغيل الصوت للكلمة ثم الجملة
  const speakGerman = (countryName, sentence) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();

      const fullText = `${countryName}. ${sentence.replace('\n', '. ')}`;
      const utterance = new SpeechSynthesisUtterance(fullText);
      utterance.lang = 'de-DE';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div
      style={{
        backgroundColor: 'transparent',
        padding: '20px 10px',
        fontFamily: "'Courgette', cursive, sans-serif",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        boxSizing: 'border-box'
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px', width: '100%', maxWidth: '600px' }}>
        {countries.map((country, index) => {
          const highlightedColor = germanTextColors[index % germanTextColors.length];

          return (
            <div key={country.id} style={{ position: 'relative', width: '100%' }}>

              {/* العلم بـ border-radius: 12px */}
              <div
                style={{
                  position: 'absolute',
                  top: '-22px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '50px',
                  height: '35px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
                  zIndex: 2,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#fff',
                  border: '1.5px solid #ffffff'
                }}
              >
                <img
                  src={`https://flagcdn.com/w160/${country.code}.png`}
                  alt={country.de}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* البطاقة الرئيسية (العلويّة) */}
              <div
                onClick={() => speakGerman(country.de, country.sentenceDe)}
                style={{
                  backgroundColor: 'transparent',
                  border: '1.5px solid #ffffff',
                  borderRadius: '30px 6px 0 0',
                  padding: '16px 24px',
                  display: 'flex',
                  direction:'ltr',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  position: 'relative',
                  cursor: 'pointer',
                  userSelect: 'none',
                  width: '100%',
                  boxSizing: 'border-box',
                  color: '#ffffff'
                }}
              >
                {/* 1. الألماني على الشمال */}
                <span
                  dir="ltr"
                  style={{
                    fontSize: '20px',
                    fontStyle: 'italic',
                    fontWeight: 'bold',
                    textAlign: 'left'
                  }}
                >
                  {country.article && (
                    <span style={{ color: highlightedColor, marginRight: '6px', fontWeight: 'bold' }}>
                      {country.article}
                    </span>
                  )}
                  {country.article ? country.de.replace(`${country.article} `, '') : country.de}
                </span>

                {/* أيقونة السماعة بالمنتصف تماماً */}
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '20px',
                    lineHeight: '1',
                    pointerEvents: 'none'
                  }}
                >
                  🔊
                </div>

                {/* 2. العربي على اليمين */}
                <span
                  dir="rtl"
                  style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    textAlign: 'right',
                    color: '#ffffff'
                  }}
                >
                  {country.ar}
                </span>
              </div>

              {/* ديف الجملة السفلية (الملتصق) - تمت إضافة direction: 'ltr' هنا */}
              <div
                onClick={() => speakGerman(country.de, country.sentenceDe)}
                style={{
                  direction: 'ltr',
                  marginTop: '-1.5px',
                  border: '1.5px solid #ffffff',
                  borderTop: 'none',
                  borderRadius: '0 0 30px 6px',
                  padding: '12px 24px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  userSelect: 'none',
                  width: '100%',
                  boxSizing: 'border-box',
                  color: '#ffffff'
                }}
              >
                {/* 1. الجملة الألمانية على الشمال */}
                <span
                  dir="ltr"
                  style={{
                    fontSize: '14px',
                    fontStyle: 'italic',
                    fontWeight: 'bold',
                    textAlign: 'left',
                    color: highlightedColor,
                    whiteSpace: 'pre-line',
                    lineHeight: '1.6'
                  }}
                >
                  {country.sentenceDe}
                </span>

                {/* 2. الجملة العربية على اليمين */}
                <span
                  dir="rtl"
                  style={{
                    fontSize: '14px',
                    fontWeight: 'bold',
                    textAlign: 'right',
                    color: '#ffffff',
                    whiteSpace: 'pre-line',
                    lineHeight: '1.6'
                  }}
                >
                  {country.sentenceAr}
                </span>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}
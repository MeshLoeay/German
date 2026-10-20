import React, { useState } from 'react';

export default function Lektion6X1() {
  const [speakingWord, setSpeakingWord] = useState(null);

  const speakText = (phrase, id) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(phrase);
      utterance.lang = 'de-DE';
      utterance.rate = 0.85;

      setSpeakingWord(id);
      utterance.onend = () => setSpeakingWord(null);
      utterance.onerror = () => setSpeakingWord(null);

      window.speechSynthesis.speak(utterance);
    }
  };

  const derCards = [
    { id: 'der-opa', title: 'Opa', arabic: 'جدي', article: 'der' },
    { id: 'der-vater', title: 'Vater', arabic: 'أبي', article: 'der' },
    { id: 'der-bruder', title: 'Bruder', arabic: 'أخي', article: 'der' },
    { id: 'der-onkel', title: 'Onkel', arabic: 'العم - الخال', article: 'der' },
    { id: 'der-lehrer', title: 'Lehrer', arabic: 'المدرس', article: 'der' },
    { id: 'der-freund', title: 'Freund', arabic: 'الصديق', article: 'der' },
    { id: 'der-hund', title: 'Hund', arabic: 'الكلب', article: 'der' },
  ];

  const dieCards = [
    { id: 'die-oma', title: 'Oma', arabic: 'جدتي', article: 'die' },
    { id: 'die-mutter', title: 'Mutter', arabic: 'أمي', article: 'die' },
    { id: 'die-schwester', title: 'Schwester', arabic: 'أختي', article: 'die' },
    { id: 'die-tante', title: 'Tante', arabic: 'العمه - الخاله', article: 'die' },
    { id: 'die-lehrerin', title: 'Lehrerin', arabic: 'المدرسه', article: 'die' },
    { id: 'die-freundin', title: 'Freundin', arabic: 'الصديقه', article: 'die' },
    { id: 'die-katze', title: 'Katze', arabic: 'القطه', article: 'die' },
  ];

  const qaList = [
    { id: 'qa-1', q: 'Wer ist das?', qAr: 'من هذا؟', ansDe: 'Das ist mein Vater.', ansAr: 'الإجابة: هذا أبي', articleType: 'der' },
    { id: 'qa-2', q: 'Wer ist das?', qAr: 'من هذا؟', ansDe: 'Das ist mein Bruder.', ansAr: 'الإجابة: هذا أخي', articleType: 'der' },
    { id: 'qa-3', q: 'Wer ist das?', qAr: 'من هذه؟', ansDe: 'Das ist meine Mutter.', ansAr: 'الإجابة: هذه أمي', articleType: 'die' },
    { id: 'qa-4', q: 'Wer ist das?', qAr: 'من هذه؟', ansDe: 'Das ist meine Schwester.', ansAr: 'الإجابة: هذه أختي', articleType: 'die' },
    { id: 'qa-5', q: 'Wer ist das?', qAr: 'من هذا؟', ansDe: 'Das ist mein Opa.', ansAr: 'الإجابة: هذا جدي', articleType: 'der' },
    { id: 'qa-6', q: 'Wer ist das?', qAr: 'من هذه؟', ansDe: 'Das ist meine Oma.', ansAr: 'الإجابة: هذه جدتي', articleType: 'die' },
  ];

  return (
    <div style={styles.body}>
      <div style={styles.container}>

        {/* Top Header */}
        <div
          style={styles.topBar}
          onClick={() => speakText('Das ist meine Familie', 'header')}
        >
          <div style={styles.titleMain}>
            <i className="fa-solid fa-users" style={{ color: '#38bdf8' }}></i> العائلة (Familie)
          </div>
          <div style={styles.headerSubtext}>
            <p>اضغط على أي عنصر في الأعلى للاستماع للنطق الصحيح باللغة الألمانية</p>
          </div>
        </div>

        {/* Section 1: DER */}
        <div style={styles.sectionContainer}>
          <div
            style={{ ...styles.sectionHeader, borderColor: '#38bdf8', color: '#38bdf8' }}
            onClick={() => speakText('der', 'sec-der')}
          >
            <span style={{ ...styles.sectionBadge, backgroundColor: '#38bdf8' }}>der</span>
            <h2 style={styles.sectionTitle}>الكلمات المذكرة (Der)</h2>
          </div>
          <div style={styles.grid}>
            {derCards.map((item) => {
              const isSpeaking = speakingWord === item.id;
              return (
                <div
                  key={item.id}
                  style={{
                    ...styles.card,
                    backgroundColor: 'rgba(56, 189, 248, 0.08)',
                    borderColor: isSpeaking ? '#38bdf8' : '#334155',
                    transform: isSpeaking ? 'scale(1.04)' : 'scale(1)',
                    boxShadow: isSpeaking ? '0 0 20px rgba(56, 189, 248, 0.5)' : '0 6px 15px -3px rgba(0, 0, 0, 0.3)'
                  }}
                  onClick={() => speakText(`der ${item.title}`, item.id)}
                >
                  <span style={{ ...styles.articleTag, backgroundColor: '#38bdf8' }}>der</span>
                  <div style={styles.imgBox}>
                    <span style={styles.boxLabel}>{item.arabic}</span>
                    <span style={styles.boxName}>{item.title}</span>
                  </div>
                  <div style={styles.wordTitle}>{item.title}</div>
                  <div style={styles.wordArabic}>{item.arabic}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 2: DIE */}
        <div style={styles.sectionContainer}>
          <div
            style={{ ...styles.sectionHeader, borderColor: '#f472b6', color: '#f472b6' }}
            onClick={() => speakText('die', 'sec-die')}
          >
            <span style={{ ...styles.sectionBadge, backgroundColor: '#f472b6' }}>die</span>
            <h2 style={styles.sectionTitle}>الكلمات المؤنثة (Die)</h2>
          </div>
          <div style={styles.grid}>
            {dieCards.map((item) => {
              const isSpeaking = speakingWord === item.id;
              return (
                <div
                  key={item.id}
                  style={{
                    ...styles.card,
                    backgroundColor: 'rgba(244, 114, 182, 0.08)',
                    borderColor: isSpeaking ? '#f472b6' : '#334155',
                    transform: isSpeaking ? 'scale(1.04)' : 'scale(1)',
                    boxShadow: isSpeaking ? '0 0 20px rgba(244, 114, 182, 0.5)' : '0 6px 15px -3px rgba(0, 0, 0, 0.3)'
                  }}
                  onClick={() => speakText(`die ${item.title}`, item.id)}
                >
                  <span style={{ ...styles.articleTag, backgroundColor: '#f472b6' }}>die</span>
                  <div style={styles.imgBox}>
                    <span style={styles.boxLabel}>{item.arabic}</span>
                    <span style={styles.boxName}>{item.title}</span>
                  </div>
                  <div style={styles.wordTitle}>{item.title}</div>
                  <div style={styles.wordArabic}>{item.arabic}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION 3: QA */}
        <div style={styles.qaContainer}>
          <div style={styles.qaTitle} onClick={() => speakText('Wer ist das?', 'qa-main')}>
            <i className="fa-solid fa-circle-question" style={{ color: '#38bdf8' }}></i> أسئلة عن أفراد العائلة (Wer ist das? - من هذا؟)
          </div>
          <div style={styles.qaGrid}>
            {qaList.map((qa) => (
              <div key={qa.id} style={styles.qaBox}>
                <div style={styles.questionRow} onClick={() => speakText(qa.q, `${qa.id}-q`)}>
                  <i className="fa-solid fa-volume-high" style={{ color: '#38bdf8', fontSize: '0.9rem' }}></i>
                  <span style={styles.questionText}>
                    {qa.q} <span style={{ fontFamily: 'Tajawal, sans-serif', fontSize: '0.75rem', color: '#94a3b8' }}>({qa.qAr})</span>
                  </span>
                </div>
                <div style={styles.answerRow} onClick={() => speakText(qa.ansDe, `${qa.id}-a`)}>
                  <span style={styles.answerDe}>
                    ➔ Das ist <span style={{ color: qa.articleType === 'der' ? '#38bdf8' : '#f472b6' }}>{qa.ansDe.replace('Das ist ', '').replace('.', '')}</span>.
                  </span>
                  <span style={styles.answerAr}>{qa.ansAr}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TABLE 1 */}
        <div style={styles.tableWrapper}>
          <div style={styles.tableTitle}>1. جدول ضمير الملكية للمتكلم (Mein / Meine) - ملكي</div>
          <div style={{ overflowX: 'auto' }}>
            <table style={styles.customTable}>
              <thead>
                <tr>
                  <th style={styles.th}>الأداة الأصلية</th>
                  <th style={styles.th}>الضمير المستخدم</th>
                  <th style={styles.th}>مثال ألماني</th>
                  <th style={{ ...styles.th, direction: 'rtl' }}>المعنى بالعربية</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={styles.td}><span style={{ color: '#38bdf8', fontWeight: 'bold' }}>der</span></td>
                  <td style={styles.td}><strong>mein</strong></td>
                  <td style={styles.td}>mein Vater</td>
                  <td style={{ ...styles.td, direction: 'rtl', color: '#94a3b8' }}>أبي</td>
                </tr>
                <tr>
                  <td style={styles.td}><span style={{ color: '#38bdf8', fontWeight: 'bold' }}>der</span></td>
                  <td style={styles.td}><strong>mein</strong></td>
                  <td style={styles.td}>mein Lehrer</td>
                  <td style={{ ...styles.td, direction: 'rtl', color: '#94a3b8' }}>مدرسي</td>
                </tr>
                <tr>
                  <td style={styles.td}><span style={{ color: '#38bdf8', fontWeight: 'bold' }}>der</span></td>
                  <td style={styles.td}><strong>mein</strong></td>
                  <td style={styles.td}>mein Hund</td>
                  <td style={{ ...styles.td, direction: 'rtl', color: '#94a3b8' }}>كلبي</td>
                </tr>
                <tr>
                  <td style={styles.td}><span style={{ color: '#f472b6', fontWeight: 'bold' }}>die</span></td>
                  <td style={styles.td}><strong>meine</strong></td>
                  <td style={styles.td}>meine Mutter</td>
                  <td style={{ ...styles.td, direction: 'rtl', color: '#94a3b8' }}>أمي</td>
                </tr>
                <tr>
                  <td style={styles.td}><span style={{ color: '#f472b6', fontWeight: 'bold' }}>die</span></td>
                  <td style={styles.td}><strong>meine</strong></td>
                  <td style={styles.td}>meine Lehrerin</td>
                  <td style={{ ...styles.td, direction: 'rtl', color: '#94a3b8' }}>مدرستي</td>
                </tr>
                <tr>
                  <td style={styles.td}><span style={{ color: '#f472b6', fontWeight: 'bold' }}>die</span></td>
                  <td style={styles.td}><strong>meine</strong></td>
                  <td style={styles.td}>meine Katze</td>
                  <td style={{ ...styles.td, direction: 'rtl', color: '#94a3b8' }}>قطتي</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* TABLE 2 */}
        <div style={styles.tableWrapper}>
          <div style={styles.tableTitle}>2. جدول ضمير الملكية للمخاطب (Dein / Deine) - ملكك</div>
          <div style={{ overflowX: 'auto' }}>
            <table style={styles.customTable}>
              <thead>
                <tr>
                  <th style={styles.th}>الأداة الأصلية</th>
                  <th style={styles.th}>الضمير المستخدم</th>
                  <th style={styles.th}>مثال ألماني</th>
                  <th style={{ ...styles.th, direction: 'rtl' }}>المعنى بالعربية</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={styles.td}><span style={{ color: '#38bdf8', fontWeight: 'bold' }}>der</span></td>
                  <td style={styles.td}><strong>dein</strong></td>
                  <td style={styles.td}>dein Vater</td>
                  <td style={{ ...styles.td, direction: 'rtl', color: '#94a3b8' }}>أبوك</td>
                </tr>
                <tr>
                  <td style={styles.td}><span style={{ color: '#38bdf8', fontWeight: 'bold' }}>der</span></td>
                  <td style={styles.td}><strong>dein</strong></td>
                  <td style={styles.td}>dein Onkel</td>
                  <td style={{ ...styles.td, direction: 'rtl', color: '#94a3b8' }}>عمك / خالك</td>
                </tr>
                <tr>
                  <td style={styles.td}><span style={{ color: '#38bdf8', fontWeight: 'bold' }}>der</span></td>
                  <td style={styles.td}><strong>dein</strong></td>
                  <td style={styles.td}>dein Freund</td>
                  <td style={{ ...styles.td, direction: 'rtl', color: '#94a3b8' }}>صديقك</td>
                </tr>
                <tr>
                  <td style={styles.td}><span style={{ color: '#f472b6', fontWeight: 'bold' }}>die</span></td>
                  <td style={styles.td}><strong>deine</strong></td>
                  <td style={styles.td}>deine Mutter</td>
                  <td style={{ ...styles.td, direction: 'rtl', color: '#94a3b8' }}>أمك</td>
                </tr>
                <tr>
                  <td style={styles.td}><span style={{ color: '#f472b6', fontWeight: 'bold' }}>die</span></td>
                  <td style={styles.td}><strong>deine</strong></td>
                  <td style={styles.td}>deine Tante</td>
                  <td style={{ ...styles.td, direction: 'rtl', color: '#94a3b8' }}>عمتك / خالتك</td>
                </tr>
                <tr>
                  <td style={styles.td}><span style={{ color: '#f472b6', fontWeight: 'bold' }}>die</span></td>
                  <td style={styles.td}><strong>deine</strong></td>
                  <td style={styles.td}>deine Freundin</td>
                  <td style={{ ...styles.td, direction: 'rtl', color: '#94a3b8' }}>صديقتك</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* TABLE 3 */}
        <div style={styles.tableWrapper}>
          <div style={styles.tableTitle}>3. أدوات التعريف في اللغة الألمانية (Der, Das, Die, Plural) وما يأخذونه</div>
          <div style={{ overflowX: 'auto' }}>
            <table style={styles.customTable}>
              <thead>
                <tr>
                  <th style={styles.th}>الأداة (Artikel)</th>
                  <th style={styles.th}>النوع / الجنس</th>
                  <th style={styles.th}>مع ضمير الملكية (Mein / Dein)</th>
                  <th style={{ ...styles.th, direction: 'rtl' }}>التوضيح والأمثلة الشائعة</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={styles.td}><span style={{ color: '#38bdf8', fontWeight: 'bold' }}>der</span></td>
                  <td style={styles.td}>مذكر (Maskulin)</td>
                  <td style={styles.td}><strong>mein / dein</strong></td>
                  <td style={{ ...styles.td, direction: 'rtl', color: '#94a3b8' }}>للكلمات المذكرة (مثل: Vater, Opa, Bruder)</td>
                </tr>
                <tr>
                  <td style={styles.td}><span style={{ color: '#4ade80', fontWeight: 'bold' }}>das</span></td>
                  <td style={styles.td}>محايد (Neutrum)</td>
                  <td style={styles.td}><strong>mein / dein</strong></td>
                  <td style={{ ...styles.td, direction: 'rtl', color: '#94a3b8' }}>للكلمات المحايدة (مثل: Kind, Haus, Auto)</td>
                </tr>
                <tr>
                  <td style={styles.td}><span style={{ color: '#f472b6', fontWeight: 'bold' }}>die</span></td>
                  <td style={styles.td}>مؤنث (Feminin)</td>
                  <td style={styles.td}><strong>meine / deine</strong></td>
                  <td style={{ ...styles.td, direction: 'rtl', color: '#94a3b8' }}>للكلمات المؤنثة (مثل: Mutter, Oma, Schwester)</td>
                </tr>
                <tr>
                  <td style={styles.td}><span style={{ color: '#fb923c', fontWeight: 'bold' }}>die (Pl.)</span></td>
                  <td style={styles.td}>جمع (Plural)</td>
                  <td style={styles.td}><strong>meine / deine</strong></td>
                  <td style={{ ...styles.td, direction: 'rtl', color: '#94a3b8' }}>لصيغة الجمع (مثل: Eltern, Geschwister, Freunde)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

const styles = {
  body: {
    backgroundColor: '#0f172a',
    color: '#f8fafc',
    minHeight: '100vh',
    padding: '1.2rem 0.8rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: "'Fredoka', 'Tajawal', sans-serif",
  },
  container: {
    width: '100%',
    maxWidth: '1050px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem',
  },
  topBar: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.9rem 1rem',
    background: '#1e293b',
    borderRadius: '30px 6px',
    boxShadow: '0 6px 18px -4px rgba(0, 0, 0, 0.3)',
    border: '1px solid #334155',
    textAlign: 'center',
    gap: '0.2rem',
    cursor: 'pointer',
    boxSizing: 'border-box'
  },
  titleMain: {
    fontSize: '1.35rem',
    fontWeight: '800',
    color: '#38bdf8',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  headerSubtext: {
    fontSize: '0.88rem',
    color: '#94a3b8',
    fontFamily: "'Tajawal', sans-serif",
  },
  sectionContainer: {
    width: '100%',
    background: '#1e293b',
    border: '1px solid #334155',
    borderRadius: '30px 6px',
    padding: '1rem',
    boxShadow: '0 6px 18px -4px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    boxSizing: 'border-box'
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
    paddingBottom: '0.4rem',
    borderBottom: '2px solid',
    direction: 'rtl',
  },
  sectionBadge: {
    fontSize: '0.8rem',
    fontWeight: '800',
    padding: '0.1rem 0.45rem',
    borderRadius: '30px 6px',
    color: '#0f172a',
    direction: 'ltr',
    display: 'inline-flex',
    gap: '4px',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: '1rem',
    fontFamily: "'Tajawal', sans-serif",
    margin: 0,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))',
    gap: '0.6rem',
    direction: 'ltr',
  },
  card: {
    borderRadius: '30px 6px',
    padding: '0.6rem 0.4rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    position: 'relative',
    transition: 'all 0.25s ease',
    border: '2px solid #334155',
    userSelect: 'none',
    overflow: 'hidden',
    direction: 'rtl',
    boxSizing: 'border-box'
  },
  articleTag: {
    position: 'absolute',
    top: '6px',
    right: '6px',
    fontSize: '0.7rem',
    fontWeight: '800',
    padding: '2px 5px',
    borderRadius: '30px 6px',
    color: '#0f172a',
    zIndex: 2,
    direction: 'ltr',
  },
  imgBox: {
    width: '100%',
    aspectRatio: '1 / 1',
    margin: '0.2rem 0 0.4rem 0',
    borderRadius: '30px 6px',
    overflow: 'hidden',
    background: '#0b1329',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '3px',
    padding: '0.4rem',
    textAlign: 'center',
  },
  boxLabel: {
    fontSize: '0.72rem',
    fontFamily: "'Tajawal', sans-serif",
    color: '#94a3b8',
    fontWeight: '600',
  },
  boxName: {
    fontSize: '0.95rem',
    fontWeight: '800',
    color: '#38bdf8',
  },
  wordTitle: {
    fontSize: '0.92rem',
    fontWeight: '700',
    color: '#ffffff',
    textAlign: 'center',
  },
  wordArabic: {
    fontSize: '0.78rem',
    fontWeight: '600',
    color: '#94a3b8',
    textAlign: 'center',
    fontFamily: "'Tajawal', sans-serif",
    marginTop: '2px',
  },
  qaContainer: {
    width: '100%',
    background: '#1e293b',
    border: '1px solid #334155',
    borderRadius: '30px 6px',
    padding: '1rem',
    boxShadow: '0 6px 18px -4px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem',
    boxSizing: 'border-box'
  },
  qaTitle: {
    fontSize: '1rem',
    fontWeight: '700',
    color: '#38bdf8',
    textAlign: 'center',
    fontFamily: "'Tajawal', sans-serif",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    cursor: 'pointer',
  },
  qaGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '0.6rem',
  },
  qaBox: {
    background: '#0f172a',
    border: '1px solid #334155',
    borderRadius: '30px 6px',
    padding: '0.7rem 0.8rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
    boxSizing: 'border-box'
  },
  questionRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    direction: 'ltr',
    background: '#162032',
    padding: '6px 9px',
    borderRadius: '30px 6px',
    borderLeft: '4px solid #38bdf8',
    cursor: 'pointer',
  },
  questionText: {
    fontSize: '0.88rem',
    fontWeight: 'bold',
    color: '#fff',
    direction: 'ltr',
  },
  answerRow: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
    direction: 'ltr',
    background: 'rgba(56, 189, 248, 0.05)',
    padding: '6px 9px',
    borderRadius: '30px 6px',
    borderRight: '4px solid #f472b6',
    cursor: 'pointer',
  },
  answerDe: {
    fontSize: '0.88rem',
    fontWeight: 'bold',
    color: '#38bdf8',
  },
  answerAr: {
    fontSize: '0.75rem',
    fontFamily: "'Tajawal', sans-serif",
    color: '#94a3b8',
    direction: 'rtl',
  },
  tableWrapper: {
    width: '100%',
    background: '#1e293b',
    border: '1px solid #334155',
    borderRadius: '30px 6px',
    padding: '1rem',
    boxShadow: '0 6px 18px -4px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem',
    boxSizing: 'border-box'
  },
  tableTitle: {
    fontSize: '0.95rem',
    fontWeight: '700',
    color: '#38bdf8',
    textAlign: 'center',
    fontFamily: "'Tajawal', sans-serif",
  },
  customTable: {
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: '0',
    textAlign: 'center',
    direction: 'ltr',
    borderRadius: '30px 6px',
    overflow: 'hidden',
    border: '1px solid #334155',
  },
  th: {
    padding: '8px',
    borderBottom: '1px solid #334155',
    borderRight: '1px solid #334155',
    fontSize: '0.82rem',
    background: '#0f172a',
    color: '#38bdf8',
    fontFamily: "'Tajawal', sans-serif",
  },
  td: {
    padding: '8px',
    borderBottom: '1px solid #334155',
    borderRight: '1px solid #334155',
    fontSize: '0.82rem',
    background: '#162032',
    color: '#fff',
  },
};
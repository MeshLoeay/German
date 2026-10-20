import React, { useState, useEffect, useRef } from 'react';

// تعريف بيانات مجموعات لعبة التوصيل
const boardsData = [
  {
    id: 'board-a',
    title: 'Gruppe A',
    words: [
      { id: 'fenster', text: 'Fenster' },
      { id: 'papierkorb', text: 'Papierkorb' },
      { id: 'schrank', text: 'Schrank' },
      { id: 'klasse', text: 'Klasse' }
    ],
    images: [
      { id: 'papierkorb', src: 'https://media.zid.store/cd9db128-ebb6-4f68-bfbd-a0a93263f354/9fe873a8-6407-43af-8abd-842eb1d0e985.jpg', alt: 'Papierkorb' },
      { id: 'klasse', src: 'https://i.pinimg.com/736x/f0/d6/f8/f0d6f84fb5f25ba657694707d229a7ac.jpg', alt: 'Klasse' },
      { id: 'fenster', src: 'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?w=400&auto=format&fit=crop&q=80', alt: 'Fenster' },
      { id: 'schrank', src: 'https://arkanelqasr.com/wp-content/uploads/2022/09/%D8%AE%D8%B2%D8%A7%D9%86%D8%A9-%D9%85%D9%84%D8%A7%D8%A8%D8%B3-2-2-1.webp', alt: 'Schrank' }
    ]
  },
  {
    id: 'board-b',
    title: 'Gruppe B',
    words: [
      { id: 'tisch', text: 'Tisch' },
      { id: 'tuer', text: 'Tür' },
      { id: 'tafel', text: 'Tafel' },
      { id: 'stuhl', text: 'Stuhl' }
    ],
    images: [
      { id: 'stuhl', src: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=400&auto=format&fit=crop&q=80', alt: 'Stuhl' },
      { id: 'tafel', src: 'https://5.imimg.com/data5/SELLER/Default/2025/9/547889501/VL/KN/WG/4020506/writing-surface-blackboard-1000x1000.png', alt: 'Tafel' },
      { id: 'tisch', src: 'https://media.zid.store/thumbs/eaeeaeee-3342-4288-94a1-7276aeaff27d/dd5ac33d-f479-4f80-ad8a-1c860932f346-thumbnail-1000x1000-70.jpg', alt: 'Tisch' },
      { id: 'tuer', src: 'https://eg-rv.homzmart.net/catalog/product/M/A/MAGARDOA380-env.jpg', alt: 'Tür' }
    ]
  },
  {
    id: 'board-c',
    title: 'Gruppe C',
    words: [
      { id: 'buch', text: 'Buch' },
      { id: 'schere', text: 'Schere' },
      { id: 'bleistift', text: 'Bleistift' },
      { id: 'lineal', text: 'Lineal' }
    ],
    images: [
      { id: 'bleistift', src: 'https://samir-and-aly-stationaries.fra1.cdn.digitaloceanspaces.com/media/catalog/product/cache/0ee050c3ffc3555709b9bb6062f4d7e9/0/7/0720002201250_4.jpg', alt: 'Bleistift' },
      { id: 'lineal', src: 'https://cdn.salla.sa/GQjBoylaN1eVkTohGyxg4PUNOJiH01WOtZ8rrXO9.jpg', alt: 'Lineal' },
      { id: 'schere', src: 'https://png.pngtree.com/png-vector/20250917/ourmid/pngtree-smiling-cartoon-scissors-with-red-handles-isolated-on-a-transparent-background-png-image_17472972.webp', alt: 'Schere' },
      { id: 'buch', src: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&auto=format&fit=crop&q=80', alt: 'Buch' }
    ]
  },
  {
    id: 'board-d',
    title: 'Gruppe D',
    words: [
      { id: 'block', text: 'Block' },
      { id: 'malkasten', text: 'Malkasten' },
      { id: 'spitzer', text: 'Spitzer' },
      { id: 'pinsel', text: 'Pinsel' }
    ],
    images: [
      { id: 'pinsel', src: 'https://png.pngtree.com/png-clipart/20250124/original/pngtree-contemporary-paintbrush-design-for-creative-projects-png-image_19692068.png', alt: 'Pinsel' },
      { id: 'block', src: 'https://img.joomcdn.net/b6f936c6e1129e6ad8367210b9bba96cee9a5b4c_original.jpeg', alt: 'Block' },
      { id: 'spitzer', src: 'https://www.maktaba.ps/image/cache/catalog/products/22201000-2-1100x1100w.jpg', alt: 'Spitzer' },
      { id: 'malkasten', src: 'https://elghazawy.b-cdn.net/32470/6223001416012.jpg', alt: 'Malkasten' }
    ]
  },
  {
    id: 'board-e',
    title: 'Gruppe E',
    words: [
      { id: 'basteln', text: 'basteln' },
      { id: 'lesen', text: 'lesen' },
      { id: 'malen', text: 'malen' },
      { id: 'schlafen', text: 'schlafen' }
    ],
    images: [
      { id: 'malen', src: 'https://png.pngtree.com/png-vector/20260111/ourlarge/pngtree-little-artist-at-work-painting-a-colorful-landscape-png-image_18477493.webp', alt: 'Malen' },
      { id: 'lesen', src: 'https://png.pngtree.com/png-vector/20240625/ourlarge/pngtree-baby-read-the-book-png-image_12839865.png', alt: 'Lesen' },
      { id: 'schlafen', src: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&auto=format&fit=crop&q=80', alt: 'Schlafen' },
      { id: 'basteln', src: 'https://m.media-amazon.com/images/I/71Voiv5-POL._AC_SL1500_.jpg', alt: 'Basteln' }
    ]
  },
  {
    id: 'board-f',
    title: 'Gruppe F',
    words: [
      { id: 'singen', text: 'singen' },
      { id: 'spielen', text: 'spielen' },
      { id: 'tanzen', text: 'tanzen' },
      { id: 'zeichnen', text: 'zeichnen' }
    ],
    images: [
      { id: 'singen', src: 'https://png.pngtree.com/png-vector/20251026/ourlarge/pngtree-a-man-passionately-singing-into-microphone-with-music-notes-depicted-in-png-image_17835263.webp', alt: 'Singen' },
      { id: 'spielen', src: 'https://png.pngtree.com/recommend-works/png-clipart/20250118/ourlarge/pngtree-little-boy-playing-football-png-image_15260129.png', alt: 'Spielen' },
      { id: 'tanzen', src: 'https://png.pngtree.com/element_our/20200611/ourlarge/pngtree-dancing-singing-boy-image_2253365.jpg', alt: 'Tanzen' },
      { id: 'zeichnen', src: 'https://instagram.fcai26-1.fna.fbcdn.net/v/t51.82787-15/731022417_18003389576947171_1737468565954533590_n.webp', alt: 'Zeichnen' }
    ]
  }
];

export default function CombinedGermanApp() {
  const [alertInfo, setAlertInfo] = useState({ show: false, success: true, text: '' });
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalQuestions = 24;

  const showAlert = (isSuccess, message) => {
    setAlertInfo({ show: true, success: isSuccess, text: message });
    setTimeout(() => {
      setAlertInfo(prev => ({ ...prev, show: false }));
    }, 1200);
  };

  const speak = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'de-DE';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleSelect = (boardKey, qIndex, word, correctVal) => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [`${boardKey}-${qIndex}`]: { word, correctVal }
    }));
  };

  const checkStatus = (boardKey, qIndex, word, correctVal) => {
    const answerObj = selectedAnswers[`${boardKey}-${qIndex}`];
    if (!answerObj) return '';

    if (answerObj.word === word) {
      return word === correctVal ? 'correct' : 'wrong';
    }
    if (isSubmitted && word === correctVal && answerObj.word !== correctVal) {
      return 'correct';
    }
    return '';
  };

  const calculateScore = () => {
    let score = 0;
    const correctAnswersMap = {
      "A-1": "machen", "A-2": "Kreide", "A-3": "hier", "A-4": "sofort", "A-5": "schwarz", "A-6": "gut",
      "B-1": "Klasse", "B-2": "Kreide", "B-3": "wo", "B-4": "Heft", "B-5": "blau", "B-6": "Kreide",
      "C-1": "gelb", "C-2": "was", "C-3": "bitte", "C-4": "Radiergummi", "C-5": "Tafel", "C-6": "Kreide",
      "D-1": "Schultasche", "D-2": "nichts", "D-3": "nein", "D-4": "gut", "D-5": "ja", "D-6": "so"
    };

    Object.keys(correctAnswersMap).forEach(key => {
      if (selectedAnswers[key] && selectedAnswers[key].word === correctAnswersMap[key]) {
        score++;
      }
    });
    return score;
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
  };

  const answeredCount = Object.keys(selectedAnswers).length;
  const currentScore = calculateScore();

  return (
    <>
      <style>{`
        .boards-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          direction: ltr;
          gap: 1.5rem;
          max-width: 1400px;
          margin: 0 auto;
        }
        @media (max-width: 992px) {
          .boards-container {
            grid-template-columns: 1fr !important;
          }
        }
        .footer-control {
          max-width: 1400px;
          margin: 3rem auto 0 auto;
          padding: 20px;
          background: #1e293b;
          border-radius: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: 1px solid #334155;
          flex-wrap: wrap;
          gap: 1rem;
        }
        @media (max-width: 600px) {
          .footer-control {
            flex-direction: column;
            text-align: center;
          }
          .result-box {
            flex-direction: column;
            gap: 0.8rem !important;
          }
        }
      `}</style>

      <div style={styles.body}>
        {/* القسم الأول: لعبة التوصيل */}
        <div style={styles.header}>
          <h1 style={styles.h1}>🔗 لعبة التوصيل التفاعلية</h1>
          <p style={styles.p}>وصل الكلمة بالصورة المناسبة عن طريق السحب والإفلات</p>
        </div>

        <div style={styles.boardsGrid}>
          {boardsData.map(board => (
            <GameBoard key={board.id} board={board} showAlert={showAlert} speak={speak} />
          ))}
        </div>

        {/* فاصل بين القسمين */}
        <hr style={styles.divider} />

        {/* القسم الثاني: اختبار Was passt hier nicht */}
        <div style={styles.header}>
          <h1 style={styles.h1}>Was passt hier nicht</h1>
          <p style={styles.p}>اختر الكلمة التي لا تنتمي للمجموعة في كل سطر</p>
        </div>

        <div className="boards-container">
          {/* لوحة القسم A */}
          <div style={styles.gameBoardQuiz}>
            <div style={styles.boardTitle}>
              <span>Teil A</span>
              <span style={styles.badge}>A</span>
            </div>
            <QuestionRow boardKey="A" qIndex={1} correctVal="machen" options={['Bleistift', 'Buch', 'machen', 'Lineal']} selectedAnswers={selectedAnswers} handleSelect={handleSelect} checkStatus={checkStatus} isSubmitted={isSubmitted} />
            <QuestionRow boardKey="A" qIndex={2} correctVal="Kreide" options={['schreiben', 'Kreide', 'haben', 'tanzen']} selectedAnswers={selectedAnswers} handleSelect={handleSelect} checkStatus={checkStatus} isSubmitted={isSubmitted} />
            <QuestionRow boardKey="A" qIndex={3} correctVal="hier" options={['blau', 'grün', 'rot', 'hier']} selectedAnswers={selectedAnswers} handleSelect={handleSelect} checkStatus={checkStatus} isSubmitted={isSubmitted} />
            <QuestionRow boardKey="A" qIndex={4} correctVal="sofort" options={['sofort', 'Stuhl', 'Tafel', 'Fenster']} selectedAnswers={selectedAnswers} handleSelect={handleSelect} checkStatus={checkStatus} isSubmitted={isSubmitted} />
            <QuestionRow boardKey="A" qIndex={5} correctVal="schwarz" options={['singen', 'schwarz', 'turnen', 'geben']} selectedAnswers={selectedAnswers} handleSelect={handleSelect} checkStatus={checkStatus} isSubmitted={isSubmitted} />
            <QuestionRow boardKey="A" qIndex={6} correctVal="gut" options={['gut', 'Heft', 'Buch', 'Block']} selectedAnswers={selectedAnswers} handleSelect={handleSelect} checkStatus={checkStatus} isSubmitted={isSubmitted} />
          </div>

          {/* لوحة القسم B */}
          <div style={styles.gameBoardQuiz}>
            <div style={styles.boardTitle}>
              <span>Teil B</span>
              <span style={styles.badge}>B</span>
            </div>
            <QuestionRow boardKey="B" qIndex={1} correctVal="Klasse" options={['Klasse', 'malen', 'schlafen', 'turnen']} selectedAnswers={selectedAnswers} handleSelect={handleSelect} checkStatus={checkStatus} isSubmitted={isSubmitted} />
            <QuestionRow boardKey="B" qIndex={2} correctVal="Kreide" options={['Tisch', 'Kreide', 'Pult', 'weiß']} selectedAnswers={selectedAnswers} handleSelect={handleSelect} checkStatus={checkStatus} isSubmitted={isSubmitted} />
            <QuestionRow boardKey="B" qIndex={3} correctVal="wo" options={['wo', 'Malkasten', 'Federmäppchen', 'Pinsel']} selectedAnswers={selectedAnswers} handleSelect={handleSelect} checkStatus={checkStatus} isSubmitted={isSubmitted} />
            <QuestionRow boardKey="B" qIndex={4} correctVal="Heft" options={['grau', 'schwarz', 'braun', 'Heft']} selectedAnswers={selectedAnswers} handleSelect={handleSelect} checkStatus={checkStatus} isSubmitted={isSubmitted} />
            <QuestionRow boardKey="B" qIndex={5} correctVal="blau" options={['Papierkorb', 'Tasche', 'blau', 'Schere']} selectedAnswers={selectedAnswers} handleSelect={handleSelect} checkStatus={checkStatus} isSubmitted={isSubmitted} />
            <QuestionRow boardKey="B" qIndex={6} correctVal="Kreide" options={['Kreide', 'rechnen', 'schlafen', 'schreiben']} selectedAnswers={selectedAnswers} handleSelect={handleSelect} checkStatus={checkStatus} isSubmitted={isSubmitted} />
          </div>

          {/* لوحة القسم C */}
          <div style={styles.gameBoardQuiz}>
            <div style={styles.boardTitle}>
              <span>Teil C</span>
              <span style={styles.badge}>C</span>
            </div>
            <QuestionRow boardKey="C" qIndex={1} correctVal="gelb" options={['Tafel', 'gelb', 'Waschbecken', 'Schrank']} selectedAnswers={selectedAnswers} handleSelect={handleSelect} checkStatus={checkStatus} isSubmitted={isSubmitted} />
            <QuestionRow boardKey="C" qIndex={2} correctVal="was" options={['basteln', 'lesen', 'rechnen', 'was']} selectedAnswers={selectedAnswers} handleSelect={handleSelect} checkStatus={checkStatus} isSubmitted={isSubmitted} />
            <QuestionRow boardKey="C" qIndex={3} correctVal="bitte" options={['bitte', 'rot', 'weiß', 'grau']} selectedAnswers={selectedAnswers} handleSelect={handleSelect} checkStatus={checkStatus} isSubmitted={isSubmitted} />
            <QuestionRow boardKey="C" qIndex={4} correctVal="Radiergummi" options={['singen', 'zeichnen', 'Radiergummi', 'geben']} selectedAnswers={selectedAnswers} handleSelect={handleSelect} checkStatus={checkStatus} isSubmitted={isSubmitted} />
            <QuestionRow boardKey="C" qIndex={5} correctVal="Tafel" options={['grün', 'blau', 'Tafel', 'weiß']} selectedAnswers={selectedAnswers} handleSelect={handleSelect} checkStatus={checkStatus} isSubmitted={isSubmitted} />
            <QuestionRow boardKey="C" qIndex={6} correctVal="Kreide" options={['Schrank', 'Tisch', 'Stuhl', 'Kreide']} selectedAnswers={selectedAnswers} handleSelect={handleSelect} checkStatus={checkStatus} isSubmitted={isSubmitted} />
          </div>

          {/* لوحة القسم D */}
          <div style={styles.gameBoardQuiz}>
            <div style={styles.boardTitle}>
              <span>Teil D</span>
              <span style={styles.badge}>D</span>
            </div>
            <QuestionRow boardKey="D" qIndex={1} correctVal="Schultasche" options={['Schultasche', 'grün', 'gelb', 'blau']} selectedAnswers={selectedAnswers} handleSelect={handleSelect} checkStatus={checkStatus} isSubmitted={isSubmitted} />
            <QuestionRow boardKey="D" qIndex={2} correctVal="nichts" options={['nichts', 'Spitzer', 'Füller', 'Farbstift']} selectedAnswers={selectedAnswers} handleSelect={handleSelect} checkStatus={checkStatus} isSubmitted={isSubmitted} />
            <QuestionRow boardKey="D" qIndex={3} correctVal="nein" options={['haben', 'möchten', 'spielen', 'nein']} selectedAnswers={selectedAnswers} handleSelect={handleSelect} checkStatus={checkStatus} isSubmitted={isSubmitted} />
            <QuestionRow boardKey="D" qIndex={4} correctVal="gut" options={['Fenster', 'Tür', 'Tafel', 'gut']} selectedAnswers={selectedAnswers} handleSelect={handleSelect} checkStatus={checkStatus} isSubmitted={isSubmitted} />
            <QuestionRow boardKey="D" qIndex={5} correctVal="ja" options={['Lust', 'Quatsch', 'ja', 'Spaß']} selectedAnswers={selectedAnswers} handleSelect={handleSelect} checkStatus={checkStatus} isSubmitted={isSubmitted} />
            <QuestionRow boardKey="D" qIndex={6} correctVal="so" options={['Fußball', 'Turnzeug', 'Federmäppchen', 'so']} selectedAnswers={selectedAnswers} handleSelect={handleSelect} checkStatus={checkStatus} isSubmitted={isSubmitted} />
          </div>
        </div>

        {/* شريط التحكم وحساب النتيجة */}
        <div className="footer-control" style={styles.footerControl}>
          <div style={styles.progressText}>
            تم حل: <strong>{answeredCount}</strong> من <strong>{totalQuestions}</strong> سؤالاً
          </div>

          {!isSubmitted ? (
            <button
              style={styles.submitButton}
              onClick={() => setIsSubmitted(true)}
            >
              إنهاء وإظهار النتيجة
            </button>
          ) : (
            <div className="result-box" style={styles.resultBox}>
              <span style={styles.resultText}>
                نتيجتك النهائية: {currentScore} / {totalQuestions}
                {currentScore === totalQuestions ? ' 🎉 ممتاز جداً!' : ' 👏 أداء رائع!'}
              </span>
              <button style={styles.resetButton} onClick={handleReset}>
                إعادة الاختبار
              </button>
            </div>
          )}
        </div>

        {/* تنبيهات لعبة التوصيل */}
        <div style={{
          ...styles.alertBox,
          ...(alertInfo.success ? styles.alertSuccess : styles.alertError),
          ...(alertInfo.show ? styles.alertShow : {})
        }}>
          <div style={{ ...styles.alertIcon, color: alertInfo.success ? '#22c55e' : '#ef4444' }}>
            {alertInfo.success ? '✔' : '✖'}
          </div>
          <h3 style={styles.alertTextCss}>{alertInfo.text}</h3>
        </div>
      </div>
    </>
  );
}

function GameBoard({ board, showAlert, speak }) {
  const boardRef = useRef(null);
  const canvasRef = useRef(null);
  const [connections, setConnections] = useState([]);
  const [activeDrag, setActiveDrag] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [preventScroll, setPreventScroll] = useState(true); // مفتاح منع النزول (يبدأ أحمر بمعني مانع للنزول)

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    if (boardRef.current) {
      canvas.width = boardRef.current.clientWidth;
      canvas.height = boardRef.current.clientHeight;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    connections.forEach(conn => {
      ctx.beginPath();
      ctx.moveTo(conn.startX, conn.startY);
      ctx.lineTo(conn.endX, conn.endY);
      ctx.strokeStyle = '#22c55e';
      ctx.lineWidth = 4;
      ctx.lineCap = 'round';
      ctx.stroke();
    });

    if (activeDrag) {
      ctx.beginPath();
      ctx.moveTo(activeDrag.startX, activeDrag.startY);
      ctx.lineTo(mousePos.x, mousePos.y);
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 4;
      ctx.lineCap = 'round';
      ctx.setLineDash([6, 6]);
      ctx.stroke();
      ctx.setLineDash([]);
    }
  }, [connections, activeDrag, mousePos]);

  const getDotCenter = (itemElement) => {
    const dot = itemElement.querySelector('.dot');
    const dotRect = dot.getBoundingClientRect();
    const boardRect = boardRef.current.getBoundingClientRect();
    return {
      x: dotRect.left + dotRect.width / 2 - boardRect.left,
      y: dotRect.top + dotRect.height / 2 - boardRect.top
    };
  };

  const handleStart = (e, item) => {
    if (item.text) {
      speak(item.text);
    }
    const targetElement = e.currentTarget;
    const dotCoords = getDotCenter(targetElement);

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const boardRect = boardRef.current.getBoundingClientRect();

    setActiveDrag({
      item,
      type: item.text ? 'word' : 'image',
      startX: dotCoords.x,
      startY: dotCoords.y
    });

    setMousePos({
      x: clientX - boardRect.left,
      y: clientY - boardRect.top
    });
  };

  const handleMove = (e) => {
    if (!activeDrag) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const boardRect = boardRef.current.getBoundingClientRect();

    setMousePos({
      x: clientX - boardRect.left,
      y: clientY - boardRect.top
    });
  };

  const handleEnd = (e) => {
    if (!activeDrag) return;

    const clientX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const clientY = e.changedTouches ? e.changedTouches[0].clientY : e.clientY;

    const targetElement = document.elementFromPoint(clientX, clientY);
    const targetItemNode = targetElement ? targetElement.closest('.item-node') : null;

    if (targetItemNode) {
      const targetId = targetItemNode.getAttribute('data-id');
      const targetType = targetItemNode.getAttribute('data-type');

      if (activeDrag.type !== targetType) {
        if (activeDrag.item.id === targetId) {
          const targetDotCoords = getDotCenter(targetItemNode);
          setConnections(prev => [
            ...prev,
            {
              startX: activeDrag.startX,
              startY: activeDrag.startY,
              endX: targetDotCoords.x,
              endY: targetDotCoords.y
            }
          ]);
          showAlert(true, 'إجابة صحيحة!');
        } else {
          showAlert(false, 'إجابة خاطئة!');
        }
      }
    }

    setActiveDrag(null);
  };

  return (
    <div
      className="game-board"
      ref={boardRef}
      style={{
        ...styles.gameBoard,
        touchAction: preventScroll ? 'none' : 'auto'
      }}
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
    >
      <canvas ref={canvasRef} style={styles.canvas} />
      <div style={styles.boardTitle}>
        <span>{board.title}</span>
        <button
          onClick={() => setPreventScroll(!preventScroll)}
          style={{
            ...styles.scrollToggleBtn,
            backgroundColor: preventScroll ? '#ef4444' : '#22c55e'
          }}
          title={preventScroll ? 'إيقاف النزول مفعل (أحمر) - انقر لتشغيله' : 'تشغيل النزول مفعل (أخضر) - انقر لإيقافه'}
        >
          {preventScroll ? 'اضغط لإيقاف النزول لتحت' : 'اضغط لتشغيل النزول لتحت'}
        </button>
      </div>
      <div style={styles.matchingContainer}>
        <div style={{ ...styles.column, alignItems: 'flex-start' }}>
          {board.words.map(word => (
            <div
              key={word.id}
              className="item-node"
              data-id={word.id}
              data-type="word"
              style={{ ...styles.item, ...styles.wordItem }}
              onMouseDown={(e) => handleStart(e, word)}
              onTouchStart={(e) => handleStart(e, word)}
            >
              <span>{word.text}</span>
              <span style={styles.dot} className="dot"></span>
            </div>
          ))}
        </div>

        <div style={{ ...styles.column, alignItems: 'flex-end' }}>
          {board.images.map(img => (
            <div
              key={img.id}
              className="item-node"
              data-id={img.id}
              data-type="image"
              style={{ ...styles.item, ...styles.imageItem }}
              onMouseDown={(e) => handleStart(e, img)}
              onTouchStart={(e) => handleStart(e, img)}
            >
              <span style={styles.dot} className="dot"></span>
              <img src={img.src} alt={img.alt} style={styles.imgStyle} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function QuestionRow({ boardKey, qIndex, correctVal, options, selectedAnswers, handleSelect, checkStatus, isSubmitted }) {
  return (
    <div style={styles.questionRow}>
      <div style={styles.optionsContainer}>
        <span style={styles.questionNumber}>{qIndex}.</span>
        {options.map((opt, idx) => {
          const status = checkStatus(boardKey, qIndex, opt, correctVal);
          let itemStyle = { ...styles.wordItemQuiz };

          if (status === 'correct') {
            itemStyle.backgroundColor = '#22c55e';
            itemStyle.borderColor = '#22c55e';
            itemStyle.color = '#ffffff';
          } else if (status === 'wrong') {
            itemStyle.backgroundColor = '#ef4444';
            itemStyle.borderColor = '#ef4444';
            itemStyle.color = '#ffffff';
          }

          return (
            <div
              key={idx}
              style={itemStyle}
              onClick={() => handleSelect(boardKey, qIndex, opt, correctVal)}
              onMouseEnter={(e) => {
                if (!status && !isSubmitted) {
                  e.currentTarget.style.borderColor = '#38bdf8';
                  e.currentTarget.style.backgroundColor = '#1e293b';
                }
              }}
              onMouseLeave={(e) => {
                if (!status && !isSubmitted) {
                  e.currentTarget.style.borderColor = '#334155';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              {opt}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const styles = {
  body: {
    fontFamily: "'Poppins', 'Tajawal', sans-serif",
    backgroundColor: 'transparent',
    color: '#f8fafc',
    padding: '2rem 1rem',
    minHeight: '100vh',
    width: '100%',
    boxSizing: 'border-box',
    overflowX: 'hidden'
  },
  header: {
    textAlign: 'center',
    marginBottom: '2.5rem',
  },
  h1: {
    fontSize: 'clamp(1.7rem, 4vw, 2.2rem)',
    color: '#38bdf8',
    marginBottom: '0.5rem',
    fontWeight: '800',
  },
  p: {
    fontFamily: "'Tajawal', sans-serif",
    fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
    color: '#94a3b8',
  },
  divider: {
    border: '0',
    height: '1px',
    background: '#334155',
    margin: '4rem 0',
  },
  boardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
    maxWidth: '1300px',
    margin: '0 auto',
    width: '100%'
  },
  gameBoard: {
    position: 'relative',
    background: 'transparent',
    borderRadius: '20px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
    border: '1px solid #334155',
    width: '100%',
    overflow: 'hidden',
    boxSizing: 'border-box'
  },
  gameBoardQuiz: {
    position: 'relative',
    background: 'transparent',
    borderRadius: '16px',
    padding: 'clamp(10px, 2vw, 16px)',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
    border: '1px solid #334155',
    direction: 'rtl',
    width: '100%',
    boxSizing: 'border-box',
  },
  boardTitle: {
    fontSize: '1.25rem',
    fontWeight: '800',
    marginBottom: '1rem',
    paddingBottom: '0.4rem',
    borderBottom: '3px solid #38bdf8',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#ffffff',
    width: '100%',
  },
  scrollToggleBtn: {
    border: 'none',
    padding: '4px 10px',
    borderRadius: '6px',
    color: '#fff',
    fontSize: '0.7rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background 0.2s ease',
  },
  badge: {
    background: '#38bdf8',
    color: '#0f172a',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '18px',
    boxShadow: '0 2px 8px rgba(56, 189, 248, 0.3)',
  },
  canvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 5
  },
  matchingContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1rem',
    position: 'relative',
    zIndex: 2,
    width: '100%'
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '48%'
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    boxSizing: 'border-box'
  },
  wordItem: {
    background: '#0f172a',
    border: '2px solid #334155',
    borderRadius: '12px',
    padding: '0.5rem 0.7rem',
    fontSize: 'clamp(0.85rem, 2vw, 1.05rem)',
    fontWeight: '700',
    width: 'fit-content',
    maxWidth: '100%',
    gap: '0.8rem',
    justifyContent: 'space-between',
    color: '#f8fafc'
  },
  wordItemQuiz: {
    background: 'transparent',
    border: '2px solid #334155',
    borderRadius: '8px',
    padding: '0.3rem 0.5rem',
    fontSize: 'clamp(0.7rem, 1.4vw, 0.88rem)',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    color: '#f8fafc',
    width: 'fit-content',
    whiteSpace: 'nowrap',
    textAlign: 'center'
  },
  imageItem: {
    padding: 0,
    border: 'none',
    background: 'transparent',
    height: 'clamp(60px, 12vw, 75px)',
    width: 'clamp(60px, 12vw, 75px)',
    position: 'relative',
    gap: '0.8rem'
  },
  imgStyle: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '10px',
    border: '2px solid #334155'
  },
  dot: {
    width: '12px',
    height: '12px',
    backgroundColor: '#38bdf8',
    borderRadius: '50%',
    display: 'inline-block',
    flexShrink: '0'
  },
  questionRow: {
    marginBottom: '0.6rem',
    background: 'transparent',
    border: 'none',
    borderRadius: '0',
    padding: '4px 0',
  },
  optionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '2px',
    direction: 'ltr',
    width: '100%',
    boxSizing: 'border-box'
  },
  questionNumber: {
    fontSize: '0.95rem',
    color: '#94a3b8',
    fontWeight: '700',
    marginRight: '6px',
    flexShrink: 0,
  },
  footerControl: {
    maxWidth: '1400px',
    margin: '3rem auto 0 auto',
    padding: '20px',
    background: '#1e293b',
    borderRadius: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid #334155',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  progressText: {
    fontSize: '1.1rem',
    color: '#cbd5e1',
  },
  submitButton: {
    backgroundColor: '#38bdf8',
    color: '#0f172a',
    border: 'none',
    padding: '0.75rem 2rem',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'background 0.2s',
  },
  resultBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
  },
  resultText: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#38bdf8',
  },
  resetButton: {
    backgroundColor: '#ef4444',
    color: '#ffffff',
    border: 'none',
    padding: '0.6rem 1.5rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  alertBox: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) scale(0.8)',
    background: '#1e293b',
    color: '#fff',
    padding: '1.25rem 2rem',
    borderRadius: '16px',
    boxShadow: '0 20px 35px rgba(0,0,0,0.4)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
    zIndex: 100,
    opacity: 0,
    pointerEvents: 'none',
    transition: 'all 0.25s ease-out',
    fontFamily: "'Tajawal', sans-serif"
  },
  alertShow: {
    opacity: 1,
    transform: 'translate(-50%, -50%) scale(1)'
  },
  alertError: { border: '3px solid #ef4444' },
  alertSuccess: { border: '3px solid #22c55e' },
  alertIcon: { fontSize: '2.5rem' },
  alertTextCss: { margin: 0 }
};
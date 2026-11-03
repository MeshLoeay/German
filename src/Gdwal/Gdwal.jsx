import React, { useRef, useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Gdwal = () => {
  const table1Ref = useRef(null);
  const table2Ref = useRef(null);

  // قائمة الأسماء الموحدة والمواد للجداول
  const defaultTeachers = [
    { id: 1, name: 'سامي عبد الرحمن إبراهيم', subject: 'محاسبة مالية' },
    { id: 2, name: 'مصطفى عبد الحكيم صابر', subject: 'س . ف .' },
    { id: 3, name: 'أمل مصطفى سليمان', subject: 'رياضة مالية وإحصاء' },
    { id: 4, name: 'فاطمة محروس عبد الفتاح', subject: 'تأمينات' },
    { id: 5, name: 'سامي عبد الرازق عبد الجليل', subject: 'حاسب آلي' },
    { id: 6, name: 'صباح عبد الواحد إدريس', subject: 'قوانين العمل' },
    { id: 7, name: 'عزة سمير حسن', subject: 'مواد قانون' },
    { id: 8, name: 'أحمد محمود أحمد علي', subject: 'صيانة حاسب' },
    { id: 9, name: 'أحمد محمدي أحمد الجابري', subject: 'حاسب آلي' },
    { id: 10, name: 'موسى عبد الله موسى', subject: 'س . ع .' },
    { id: 11, name: 'غادة محمد رمضان', subject: 'مواد فندقية' },
    { id: 12, name: 'عبد العال منصور عبد العال', subject: 'مواد قانون' },
    { id: 13, name: 'عبد الغني محمد عبد الغني', subject: 'مواد قانون' },
  ];

  // 1. بيانات الجدول الأول (الأحد - الخميس)
  const [tableData1, setTableData1] = useState(
    defaultTeachers.map(item => ({ ...item, sun: '', mon: '', tue: '', wed: '', thu: '', notes: '' }))
  );

  // 2. بيانات الجدول الثاني (السبت - الخميس)
  const [tableData2, setTableData2] = useState(
    defaultTeachers.map(item => ({ ...item, sat: '', sun: '', mon: '', tue: '', wed: '', thu: '', notes: '' }))
  );

  // 3. تواريخ أسفل أيام الأسبوع للجدول الأول (تم إرجاع الحجم الطبيعي)
  const [dates1, setDates1] = useState({
    sun1: '', sun2: '', mon1: '', mon2: '', tue1: '', tue2: '', wed1: '', wed2: '', thu1: '', thu2: ''
  });

  // 4. تواريخ أسفل أيام الأسبوع للجدول الثاني
  const [dates2, setDates2] = useState({
    sat1: '', sat2: '', sun1: '', sun2: '', mon1: '', mon2: '', tue1: '', tue2: '', wed1: '', wed2: '', thu1: '', thu2: ''
  });

  // بيانات الهيدر المزدوج للتاريخ
  const [headerInfo, setHeaderInfo] = useState({
    fromDay: '', fromMonth: '', fromYear: '2026',
    toDay: '', toMonth: '', toYear: '2026',
  });

  useEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.id = 'table-responsive-styles';
    styleTag.innerHTML = `
      .doc-table th, .doc-table td {
        border: 1px solid #000 !important;
        padding: 8px 4px 12px 4px !important;
        text-align: center;
        vertical-align: middle;
        box-sizing: border-box;
      }
      .doc-table th {
        background-color: #f8f9fa;
        font-size: 13px;
        line-height: 1.5;
      }
      .doc-table input {
        line-height: 1.8 !important;
        height: auto !important;
        padding: 2px 0 !important;
        margin: 0 !important;
        box-sizing: border-box !important;
      }
      @media screen and (max-width: 1024px) {
        .responsive-rotate-wrapper {
          transform: rotate(90deg);
          transform-origin: center center;
          margin: 180px 0;
        }
      }
      @media screen and (min-width: 1025px) {
        .responsive-rotate-wrapper {
          transform: none !important;
          margin: 0 !important;
        }
      }
    `;
    document.head.appendChild(styleTag);
    return () => {
      const existingStyle = document.getElementById('table-responsive-styles');
      if (existingStyle) existingStyle.remove();
    };
  }, []);

  const handleInput1Change = (index, field, value) => {
    setTableData1(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const handleInput2Change = (index, field, value) => {
    setTableData2(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const clearNamesAndSubjects1 = () => setTableData1(tableData1.map(row => ({ ...row, name: '', subject: '' })));
  const clearNamesAndSubjects2 = () => setTableData2(tableData2.map(row => ({ ...row, name: '', subject: '' })));

  const clearFields1 = () => setTableData1(tableData1.map(row => ({ ...row, sun: '', mon: '', tue: '', wed: '', thu: '', notes: '' })));
  const clearFields2 = () => setTableData2(tableData2.map(row => ({ ...row, sat: '', sun: '', mon: '', tue: '', wed: '', thu: '', notes: '' })));

  const addRow1 = () => {
    setTableData1([...tableData1, { id: tableData1.length + 1, name: '', subject: '', sun: '', mon: '', tue: '', wed: '', thu: '', notes: '' }]);
  };

  const addRow2 = () => {
    setTableData2([...tableData2, { id: tableData2.length + 1, name: '', subject: '', sat: '', sun: '', mon: '', tue: '', wed: '', thu: '', notes: '' }]);
  };

  const removeRow1 = () => {
    if (tableData1.length > 0) {
      setTableData1(tableData1.slice(0, -1));
    }
  };

  const removeRow2 = () => {
    if (tableData2.length > 0) {
      setTableData2(tableData2.slice(0, -1));
    }
  };

  const exportAsImage = async (elementRef, filename) => {
    if (!elementRef.current) return;
    const hideElements = elementRef.current.querySelectorAll('.no-print');
    hideElements.forEach(el => (el.style.display = 'none'));

    try {
      const canvas = await html2canvas(elementRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        scrollY: -window.scrollY,
        windowWidth: document.documentElement.offsetWidth
      });
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = `${filename}.png`;
      link.click();
    } catch (error) {
      console.error('خطأ أثناء تصدير الصورة:', error);
    } finally {
      hideElements.forEach(el => (el.style.display = 'block'));
    }
  };

  const exportAsPDF = async (elementRef, filename) => {
    if (!elementRef.current) return;
    const hideElements = elementRef.current.querySelectorAll('.no-print');
    hideElements.forEach(el => (el.style.display = 'none'));

    try {
      const canvas = await html2canvas(elementRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        scrollY: -window.scrollY
      });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('landscape', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${filename}.pdf`);
    } catch (error) {
      console.error('خطأ أثناء تصدير PDF:', error);
    } finally {
      hideElements.forEach(el => (el.style.display = 'block'));
    }
  };

  const RenderHeader = () => (
    <div style={styles.headerRow}>
      <div style={styles.headerRight}>
        <p>مديرية التربية والتعليم</p>
        <p>إدارة التعليم التجاري</p>
        <p>مكتب توجيه المواد التجارية</p>
      </div>
      <div style={styles.headerCenter}>
        <h2 style={{ margin: '0 0 5px 0', fontSize: '18px' }}>الموجهون العموم والأوائل</h2>
        <h3 style={{ margin: 0, fontSize: '16px' }}>والموجهون</h3>
      </div>
      <div style={styles.headerLeft}>
        <div style={styles.dateLine}>
          <span>من</span>
          <input
            type="text"
            value={headerInfo.fromDay}
            onChange={(e) => setHeaderInfo({ ...headerInfo, fromDay: e.target.value })}
            style={styles.blankDateInput}
          />
          <span>/</span>
          <input
            type="text"
            value={headerInfo.fromMonth}
            onChange={(e) => setHeaderInfo({ ...headerInfo, fromMonth: e.target.value })}
            style={styles.blankDateInput}
          />
          <span>/</span>
          <input
            type="text"
            value={headerInfo.fromYear}
            onChange={(e) => setHeaderInfo({ ...headerInfo, fromYear: e.target.value })}
            style={{ ...styles.blankDateInput, width: '45px' }}
          />
        </div>
        <div style={{ ...styles.dateLine, marginTop: '6px' }}>
          <span>إلى</span>
          <input
            type="text"
            value={headerInfo.toDay}
            onChange={(e) => setHeaderInfo({ ...headerInfo, toDay: e.target.value })}
            style={styles.blankDateInput}
          />
          <span>/</span>
          <input
            type="text"
            value={headerInfo.toMonth}
            onChange={(e) => setHeaderInfo({ ...headerInfo, toMonth: e.target.value })}
            style={styles.blankDateInput}
          />
          <span>/</span>
          <input
            type="text"
            value={headerInfo.toYear}
            onChange={(e) => setHeaderInfo({ ...headerInfo, toYear: e.target.value })}
            style={{ ...styles.blankDateInput, width: '45px' }}
          />
        </div>
      </div>
    </div>
  );

  const RenderFooter = () => (
    <div style={styles.footerRow}>
      <div style={styles.footerCol}><p>مدير مكتب التوجيه</p></div>
      <div style={styles.footerCol}><p>مدير إدارة التعليم التجاري</p></div>
      <div style={styles.footerCol}>
        <p>يعتمد ،،</p>
        <p style={{ fontWeight: 'bold', marginTop: '15px' }}>مدير عام التعليم الفني</p>
      </div>
    </div>
  );

  // رأس اليوم مع التواريخ بحجمها الطبيعي الأصلي
  const renderDayThWithSplitDate = (dayName, prefix, datesState, setDatesState) => (
    <th style={{ verticalAlign: 'middle', padding: '6px 2px' }}>
      <div style={{ fontWeight: 'bold', marginBottom: '4px', fontSize: '13px' }}>{dayName}</div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2px' }}>
        <input
          type="text"
          value={datesState[`${prefix}1`]}
          onChange={(e) => setDatesState({ ...datesState, [`${prefix}1`]: e.target.value })}
          style={styles.splitDateInput}
        />
        <span style={{ fontSize: '13px', fontWeight: 'bold' }}>/</span>
        <input
          type="text"
          value={datesState[`${prefix}2`]}
          onChange={(e) => setDatesState({ ...datesState, [`${prefix}2`]: e.target.value })}
          style={styles.splitDateInput}
        />
      </div>
    </th>
  );

  return (
    <div style={styles.container}>

      {/* ======================= الجدول الأول (من الأحد إلى الخميس) ======================= */}
      <div style={styles.tableCard}>
        <div style={styles.actionsBar}>
          <button style={styles.pngBtn} onClick={() => exportAsImage(table1Ref, 'جدول_الأحد')}>🖼️ حفظ صورة</button>
          <button style={styles.pdfBtn} onClick={() => exportAsPDF(table1Ref, 'جدول_الأحد')}>📄 حفظ PDF</button>
          <button style={styles.clearNameBtn} onClick={clearNamesAndSubjects1}>❌ مسح الأسماء والمواد</button>
          <button style={styles.clearFieldsBtn} onClick={clearFields1}>🧹 تفريغ الخانات</button>
        </div>

        <div className="responsive-rotate-wrapper">
          <div ref={table1Ref} style={styles.documentPage} dir="rtl">
            <RenderHeader />
            <table className="doc-table" style={styles.table}>
              <thead>
                <tr>
                  <th style={{ width: '35px' }}>م</th>
                  <th style={{ width: '180px' }}>الاسم</th>
                  <th style={{ width: '130px' }}>المادة</th>
                  {renderDayThWithSplitDate('الأحد', 'sun', dates1, setDates1)}
                  {renderDayThWithSplitDate('الإثنين', 'mon', dates1, setDates1)}
                  {renderDayThWithSplitDate('الثلاثاء', 'tue', dates1, setDates1)}
                  {renderDayThWithSplitDate('الأربعاء', 'wed', dates1, setDates1)}
                  {renderDayThWithSplitDate('الخميس', 'thu', dates1, setDates1)}
                  <th style={{ width: '65px' }}>ملاحظات</th>
                </tr>
              </thead>
              <tbody>
                {tableData1.map((row, idx) => (
                  <tr key={row.id}>
                    <td style={{ fontWeight: 'bold' }}>{row.id}</td>
                    <td><input style={styles.boldTableInput} value={row.name} onChange={(e) => handleInput1Change(idx, 'name', e.target.value)} /></td>
                    <td><input style={styles.boldTableInput} value={row.subject} onChange={(e) => handleInput1Change(idx, 'subject', e.target.value)} /></td>
                    <td><input style={styles.tableCellBoldInput} value={row.sun} onChange={(e) => handleInput1Change(idx, 'sun', e.target.value)} /></td>
                    <td><input style={styles.tableCellBoldInput} value={row.mon} onChange={(e) => handleInput1Change(idx, 'mon', e.target.value)} /></td>
                    <td><input style={styles.tableCellBoldInput} value={row.tue} onChange={(e) => handleInput1Change(idx, 'tue', e.target.value)} /></td>
                    <td><input style={styles.tableCellBoldInput} value={row.wed} onChange={(e) => handleInput1Change(idx, 'wed', e.target.value)} /></td>
                    <td><input style={styles.tableCellBoldInput} value={row.thu} onChange={(e) => handleInput1Change(idx, 'thu', e.target.value)} /></td>
                    <td><input style={styles.tableCellBoldInput} value={row.notes || ''} onChange={(e) => handleInput1Change(idx, 'notes', e.target.value)} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <RenderFooter />

            <div className="no-print" style={{ textAlign: 'center', marginTop: '10px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
              <button style={styles.addRowBtnInside} onClick={addRow1}>➕ إضافة صف جديد</button>
              <button style={styles.removeRowBtnInside} onClick={removeRow1}>🗑️ مسح صف</button>
            </div>
          </div>
        </div>
      </div>

      {/* ======================= الجدول الثاني (من السبت إلى الخميس) ======================= */}
      <div style={styles.tableCard}>
        <div style={styles.actionsBar}>
          <button style={styles.pngBtn} onClick={() => exportAsImage(table2Ref, 'جدول_السبت')}>🖼️ حفظ صورة</button>
          <button style={styles.pdfBtn} onClick={() => exportAsPDF(table2Ref, 'جدول_السبت')}>📄 حفظ PDF</button>
          <button style={styles.clearNameBtn} onClick={clearNamesAndSubjects2}>❌ مسح الأسماء والمواد</button>
          <button style={styles.clearFieldsBtn} onClick={clearFields2}>🧹 تفريغ الخانات</button>
        </div>

        <div className="responsive-rotate-wrapper">
          <div ref={table2Ref} style={styles.documentPage} dir="rtl">
            <RenderHeader />
            <h4 style={styles.sectionTitle}>الجدول الثاني (من السبت إلى الخميس)</h4>
            <table className="doc-table" style={styles.table}>
              <thead>
                <tr>
                  <th style={{ width: '35px' }}>م</th>
                  <th style={{ width: '180px' }}>الاسم</th>
                  <th style={{ width: '130px' }}>المادة</th>
                  {renderDayThWithSplitDate('السبت', 'sat', dates2, setDates2)}
                  {renderDayThWithSplitDate('الأحد', 'sun', dates2, setDates2)}
                  {renderDayThWithSplitDate('الإثنين', 'mon', dates2, setDates2)}
                  {renderDayThWithSplitDate('الثلاثاء', 'tue', dates2, setDates2)}
                  {renderDayThWithSplitDate('الأربعاء', 'wed', dates2, setDates2)}
                  {renderDayThWithSplitDate('الخميس', 'thu', dates2, setDates2)}
                  <th style={{ width: '65px' }}>ملاحظات</th>
                </tr>
              </thead>
              <tbody>
                {tableData2.map((row, idx) => (
                  <tr key={row.id}>
                    <td style={{ fontWeight: 'bold' }}>{row.id}</td>
                    <td><input style={styles.boldTableInput} value={row.name} onChange={(e) => handleInput2Change(idx, 'name', e.target.value)} /></td>
                    <td><input style={styles.boldTableInput} value={row.subject} onChange={(e) => handleInput2Change(idx, 'subject', e.target.value)} /></td>
                    <td><input style={styles.tableCellBoldInput} value={row.sat} onChange={(e) => handleInput2Change(idx, 'sat', e.target.value)} /></td>
                    <td><input style={styles.tableCellBoldInput} value={row.sun} onChange={(e) => handleInput2Change(idx, 'sun', e.target.value)} /></td>
                    <td><input style={styles.tableCellBoldInput} value={row.mon} onChange={(e) => handleInput2Change(idx, 'mon', e.target.value)} /></td>
                    <td><input style={styles.tableCellBoldInput} value={row.tue} onChange={(e) => handleInput2Change(idx, 'tue', e.target.value)} /></td>
                    <td><input style={styles.tableCellBoldInput} value={row.wed} onChange={(e) => handleInput2Change(idx, 'wed', e.target.value)} /></td>
                    <td><input style={styles.tableCellBoldInput} value={row.thu} onChange={(e) => handleInput2Change(idx, 'thu', e.target.value)} /></td>
                    <td><input style={styles.tableCellBoldInput} value={row.notes} onChange={(e) => handleInput2Change(idx, 'notes', e.target.value)} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <RenderFooter />

            <div className="no-print" style={{ textAlign: 'center', marginTop: '10px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
              <button style={styles.addRowBtnInside} onClick={addRow2}>➕ إضافة صف جديد</button>
              <button style={styles.removeRowBtnInside} onClick={removeRow2}>🗑️ مسح صف</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '30px 10px',
    backgroundColor: '#eceff1',
    minHeight: '100vh',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    overflowX: 'hidden',
  },
  tableCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '50px',
    width: '100%',
  },
  actionsBar: {
    display: 'flex',
    gap: '10px',
    marginBottom: '15px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  pngBtn: {
    padding: '8px 16px', fontSize: '13px', fontWeight: 'bold', backgroundColor: '#00695c', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer',
  },
  pdfBtn: {
    padding: '8px 16px', fontSize: '13px', fontWeight: 'bold', backgroundColor: '#c62828', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer',
  },
  clearNameBtn: {
    padding: '8px 16px', fontSize: '13px', fontWeight: 'bold', backgroundColor: '#ef6c00', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer',
  },
  clearFieldsBtn: {
    padding: '8px 16px', fontSize: '13px', fontWeight: 'bold', backgroundColor: '#455a64', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer',
  },
  addRowBtnInside: {
    padding: '6px 16px',
    fontSize: '13px',
    fontWeight: 'bold',
    backgroundColor: '#1976d2',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  removeRowBtnInside: {
    padding: '6px 16px',
    fontSize: '13px',
    fontWeight: 'bold',
    backgroundColor: '#d32f2f',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  documentPage: {
    width: '1050px',
    backgroundColor: '#ffffff',
    padding: '25px 35px',
    border: '1px solid #b0bec5',
    boxShadow: '0 0 12px rgba(0,0,0,0.1)',
    color: '#000000',
    boxSizing: 'border-box',
  },
  headerRow: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px', fontSize: '13px', fontWeight: 'bold',
  },
  headerRight: { textAlign: 'right', lineHeight: '1.5' },
  headerCenter: { textAlign: 'center' },
  headerLeft: { textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' },
  dateLine: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  blankDateInput: {
    border: 'none',
    outline: 'none',
    fontSize: '14px',
    fontFamily: 'inherit',
    fontWeight: 'bold',
    background: 'transparent',
    textAlign: 'center',
    width: '55px',
    borderBottom: '1px solid #000',
  },
  splitDateInput: {
    border: 'none',
    outline: 'none',
    fontSize: '13px', // تم إرجاع حجم الخط للتاريخ كما كان أصلاً
    fontFamily: 'inherit',
    fontWeight: 'bold',
    background: 'transparent',
    textAlign: 'center',
    width: '38px',
    borderBottom: '1px dashed #666',
    marginTop: '4px',
  },
  sectionTitle: {
    margin: '15px 0 8px 0', fontSize: '14px', fontWeight: 'bold', color: '#333', textAlign: 'right',
  },
  table: {
    width: '100%', borderCollapse: 'collapse', border: '2px solid #000000', marginBottom: '10px',
  },
  // خانات اليوم في الجدول (بجانب مادة محاسبة مالية): تكبير الخط إلى 14px وجعله عريضاً Bold
  tableCellBoldInput: {
    width: '100%', border: 'none', outline: 'none', padding: '0', fontSize: '14px', fontFamily: 'inherit', fontWeight: 'bold', backgroundColor: 'transparent', textAlign: 'center', display: 'block',
  },
  boldTableInput: {
    width: '100%', border: 'none', outline: 'none', padding: '0', fontSize: '12px', fontFamily: 'inherit', fontWeight: 'bold', backgroundColor: 'transparent', textAlign: 'center', display: 'block',
  },
  footerRow: {
    display: 'flex', justifyContent: 'space-between', marginTop: '20px', padding: '0 10px', fontSize: '13px', fontWeight: 'bold', textAlign: 'center',
  },
  footerCol: { flex: 1 },
};

export default Gdwal;
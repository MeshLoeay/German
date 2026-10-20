import React, { useState } from 'react';

const produceData = [
  // الفواكه (Obst)
  // Der (مذكر)
  { id: 1, name: "der Apfel", pluralWord: "Äpfel", ar: "تفاحة", cat: "fruit", article: "der", img: "https://www.elsupplier.com/_next/image?url=https%3A%2F%2Fportal.elsupplier.com%2Fbackend%2Fpublic%2Fstorage%2Fproducts%2F1580298068.jpeg&w=640&q=50" },
  { id: 2, name: "der Pfirsich", pluralWord: "Pfirsiche", ar: "خوخ", cat: "fruit", article: "der", img: "https://cdn.salla.sa/AzeKdY/acc638ca-7583-4e0f-a721-40fd7a179456-1000x1000-m0h5mDrB5EACmjTOHWVqgVHDoG3RFyV6rSDcTmS6.jpg" },
  { id: 3, name: "der Granatapfel", pluralWord: "Granatäpfel", ar: "رمان", cat: "fruit", article: "der", img: "https://png.pngtree.com/background/20250120/original/pngtree-ripe-pomegranate-fruit-fresh-picture-image_15405041.jpg" },
  { id: 4, name: "der Aprikose", pluralWord: "Aprikosen", ar: "مشمش", cat: "fruit", article: "der", img: "https://bazar-center.com/246031-large_default/%D9%85%D8%B4%D9%85%D8%B4_%D9%84%D8%A8%D9%86%D8%A7%D9%86%D9%8A_%D9%88%D8%B2%D9%86.jpg" },
  { id: 5, name: "der Saft", pluralWord: "Säfte", ar: "عصير", cat: "fruit", article: "der", img: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=300&auto=format&fit=crop&q=80" },
  { id: 6, name: "der Feigenkaktus", pluralWord: "Feigenkakteen", ar: "تين شوكي", cat: "fruit", article: "der", img: "https://cdn.mafrservices.com/sys-master-root/h35/h8a/11007951405086/438496_main.jpg" },
  { id: 7, name: "der Kaki", pluralWord: "Kakis", ar: "كاكا", cat: "fruit", article: "der", img: "https://alarabkitchen.com/wp-content/uploads/2024/10/%D9%81%D9%88%D8%A7%D8%A6%D8%AF-%D8%A7%D9%84%D9%83%D8%A7%D9%83%D8%A7-%D9%81%D9%8A-%D8%AE%D9%81%D8%B6-%D8%B6%D8%BA%D8%B7-%D8%A7%D9%84%D8%AF%D9%85-%D9%88%D8%AA%D9%82%D9%88%D9%8A%D8%A9-%D8%A7%D9%84%D9%82%D9%84%D8%A8.jpg" },

  // Das (محايد)
  { id: 8, name: "das Obst", pluralWord: "", ar: "فاكهة", cat: "fruit", article: "das", img: "https://vid.alarabiya.net/images/2023/08/27/5504f7c7-8899-4b09-920d-22d4d43d7c3d/5504f7c7-8899-4b09-920d-22d4d43d7c3d_16x9_1200x676.jpg?width=801" },

  // Die (مؤنث)
  { id: 9, name: "die Banane", pluralWord: "Bananen", ar: "موزة", cat: "fruit", article: "die", img: "https://q8eg.com/wp-content/uploads/2022/08/20246.imgcache.jpg" },
  { id: 10, name: "die Orange", pluralWord: "Orangen", ar: "برتقالة", cat: "fruit", article: "die", img: "https://png.pngtree.com/png-clipart/20190515/original/pngtree-orange-png-png-image_3619070.jpg" },
  { id: 11, name: "die Erdbeere", pluralWord: "Erdbeeren", ar: "فراولة", cat: "fruit", article: "die", img: "https://png.pngtree.com/png-clipart/20250105/original/pngtree-red-strawberry-graphic-with-shiny-details-png-image_18768074.png" },
  { id: 12, name: "die Zitrone", pluralWord: "Zitronen", ar: "ليمونة", cat: "fruit", article: "die", img: "https://www.justfood.tv/UserFiles/t-3-4-7-2016.jpg" },
  { id: 13, name: "die Wassermelone", pluralWord: "Wassermelonen", ar: "بطيخة", cat: "fruit", article: "die", img: "https://png.pngtree.com/png-vector/20250125/ourlarge/pngtree-a-whole-watermelon-with-sliced-piece-symbolizing-freshness-and-summer-vibes-png-image_15333324.png" },
  { id: 14, name: "die Weintraube", pluralWord: "Weintrauben", ar: "عنبة / عنب", cat: "fruit", article: "die", img: "https://kumquaty.com/public/uploads/all/mjlz3SbZDYh7W1Np9qp2NCxM5cscLpiYeGz9pgiV.jpg" },
  { id: 15, name: "die Ananas", pluralWord: "Ananas", ar: "أناناس", cat: "fruit", article: "die", img: "https://www.kumquaty.com/public/uploads/all/m19DsPrMfdiPZi8SnFTWbhnijpDOVE2AN9bdCxWt.jpg" },
  { id: 16, name: "die Kirsche", pluralWord: "Kirschen", ar: "كرز", cat: "fruit", article: "die", img: "https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=300&auto=format&fit=crop&q=80" },
  { id: 17, name: "die Birne", pluralWord: "Birnen", ar: "كمثرى / كمثري", cat: "fruit", article: "die", img: "https://alkhan-mart.com/images/thumbs/0001525_-1_450.jpeg" },
  { id: 18, name: "die Kiwi", pluralWord: "Kiwis", ar: "كيوي", cat: "fruit", article: "die", img: "https://elsupplier.com/_next/image?url=https%3A%2F%2Fportal.elsupplier.com%2Fbackend%2Fpublic%2Fstorage%2Fproducts%2F1581326065.jpeg&w=640&q=50" },
  { id: 19, name: "die Mango", pluralWord: "Mangos", ar: "مانجو", cat: "fruit", article: "die", img: "https://egyptianwatermelon.com/wp-content/uploads/2026/01/%D9%85%D8%A7%D9%86%D8%AC%D9%88-%D9%86%D8%B9%D9%88%D9%85%D9%8A.webp" },
  { id: 20, name: "die Feige", pluralWord: "Feigen", ar: "تين برشومي", cat: "fruit", article: "die", img: "https://cdn.mafrservices.com/sys-master-root/hbe/hf3/10066485346334/308079_main.jpg" },
  { id: 21, name: "die Dattel", pluralWord: "Datteln", ar: "بلح / تمر", cat: "fruit", article: "die", img: "https://images.ninelife.io/products/HAB001SB3S18/1_61O6QOw-XhL_desktop.webp" },
  { id: 22, name: "die Pflaume", pluralWord: "Pflaumen", ar: "برقوق", cat: "fruit", article: "die", img: "https://cdn.alweb.com/thumbs/daleelalnabatat/article/fit710x532/%D9%85%D8%AA%D9%89-%D8%AA%D8%AB%D9%85%D8%B1-%D8%B4%D8%AC%D8%B1%D8%A9-%D8%A7%D9%84%D8%A8%D8%B1%D9%82%D9%88%D9%82.jpg" },
  { id: 24, name: "die Melone", pluralWord: "Melonen", ar: "كنتالوب / شمام", cat: "fruit", article: "die", img: "https://gaaraseeds.com/wp-content/uploads/2024/09/Cantaloupe.png" },
  { id: 25, name: "die Papaya", pluralWord: "Papayas", ar: "بابايا", cat: "fruit", article: "die", img: "https://shopfreshway.com/wp-content/uploads/2020/05/PAPAYA-KG.jpg" },
  { id: 26, name: "die Avocado", pluralWord: "Avocados", ar: "أفوكادو", cat: "fruit", article: "die", img: "https://cdn.mafrservices.com/sys-master-root/h92/h8c/17380583866398/558638_main.jpg" },
  { id: 23, name: "die Blaubeere", pluralWord: "Blaubeeren", ar: "توت أزرق", cat: "fruit", article: "die", img: "https://www.unsfarms.com/cdn/shop/files/BLUEBERRYUAE.png?v=1787058423&width=980" },
  { id: 27, name: "die Himbeere", pluralWord: "Himbeeren", ar: "توت أحمر", cat: "fruit", article: "die", img: "https://png.pngtree.com/png-vector/20240203/ourlarge/pngtree-three-red-raspberries-png-image_11593323.png" },
  { id: 28, name: "die Brombeere", pluralWord: "Brombeeren", ar: "توت أسود", cat: "fruit", article: "die", img: "https://png.pngtree.com/png-clipart/20250110/original/pngtree-fresh-blackberries-isolated-png-image_19908601.png" },
  { id: 29, name: "die Grapefruit", pluralWord: "Grapefruits", ar: "جريب فروت", cat: "fruit", article: "die", img: "https://www.expoegypt.gov.eg/uploads/2023/02/63f216c36a013.jpg" },
  { id: 30, name: "die Limette", pluralWord: "Limetten", ar: "ليمون أضاليا / أخضر", cat: "fruit", article: "die", img: "https://sc04.alicdn.com/kf/U55beff9b35114b2893b939dafe8b143dc.jpg" },
  { id: 31, name: "die Passionsfrucht", pluralWord: "Passionsfrüchte", ar: "باشن فروت", cat: "fruit", article: "die", img: "https://shopfreshway.com/wp-content/uploads/2020/05/PASSION-FRUIT-KG-1.jpg" },
  { id: 32, name: "die Guave", pluralWord: "Guaven", ar: "جوافة", cat: "fruit", article: "die", img: "https://alahmadiashop.com/eg/wp-content/uploads/2019/11/082-guava.jpg" },
  { id: 68, name: "die Physalis", pluralWord: "Physalis", ar: "الحرنكش", cat: "fruit", article: "die", img: "https://m.media-amazon.com/images/I/4178YVeNegL._AC_.jpg" },

  // 2. الخضروات (Gemüse)
  // Der (مذكر)
  { id: 33, name: "der Salat", pluralWord: "Salate", ar: "خس", cat: "veg", article: "der", img: "https://media.zid.store/a44a5136-8837-49cc-b57e-bca87eaa69ed/09af5efe-976a-4ccc-a59a-2e704908f0eb.webp" },
  { id: 34, name: "der Broccoli", pluralWord: "Broccolis", ar: "بروكلي", cat: "veg", article: "der", img: "https://i.ebayimg.com/images/g/kGAAAOSwGUlm7DIT/s-l1600.webp" },
  { id: 35, name: "der Blumenkohl", pluralWord: "Blumenkohl", ar: "قرنبيط / أبيض", cat: "veg", article: "der", img: "https://static.webteb.net/images/content/tbl_articles_article_31320_981fb7b7c6e-d678-4168-8547-d392c2042d0f.jpg" },
  { id: 36, name: "der Kürbis", pluralWord: "Kürbisse", ar: "قرع عسلي / يقطين", cat: "veg", article: "der", img: "https://market.hypermousa.com/28666-large_default/%D9%82%D8%B1%D8%B9-%D8%B9%D8%B3%D9%84-500-%D8%AC%D8%B1%D8%A7%D9%85-%D8%AB%D9%85%D8%A7%D8%B1.jpg" },
  { id: 37, name: "der Spargel", pluralWord: "Spargel", ar: "هليون", cat: "veg", article: "der", img: "https://shopfreshway.com/wp-content/uploads/2020/05/ASPARAGUS-GREEN-JUMBO-KG.jpg" },
  { id: 38, name: "der Lauch", pluralWord: "Lauche", ar: "بصل اخضر", cat: "veg", article: "der", img: "https://2img.net/h/site.iugaza.edu.ps/rhashish/files/2011/06/11263883215.jpg" },
  { id: 39, name: "der Knoblauch", pluralWord: "", ar: "ثوم", cat: "veg", article: "der", img: "https://i.ebayimg.com/images/g/6Y4AAeSw8fBqEa9j/s-l1600.webp" },
  { id: 40, name: "der Mais", pluralWord: "", ar: "ذرة مشوي/ممسوح", cat: "veg", article: "der", img: "https://png.pngtree.com/png-vector/20250609/ourlarge/pngtree-grilled-corn-with-butter-and-paprika-isolated-png-image_16490109.png" },
  { id: 41, name: "der Spinat", pluralWord: "", ar: "سبانخ", cat: "veg", article: "der", img: "https://images.matjrah.online/1404/image/cache/catalog/1751117359-%D8%B3%D8%A8%D8%A7%D9%86%D8%AE-1100x1100.png" },
  { id: 42, name: "der Pilz", pluralWord: "Pilze", ar: "عش الغراب / فطر", cat: "veg", article: "der", img: "https://emdadx.com/wp-content/uploads/2023/09/Mushroom-White-Button-1-Kg.jpg" },
  { id: 43, name: "der Sellerie", pluralWord: "", ar: "كرفس", cat: "veg", article: "der", img: "https://pngimg.com/uploads/parsley/parsley_PNG5.png" },
  { id: 44, name: "der Fenchel", pluralWord: "Fenchel", ar: "شبت / شمر", cat: "veg", article: "der", img: "https://png.pngtree.com/png-clipart/20250415/original/pngtree-fresh-dill-herb-bundle-for-culinary-creativity-png-image_20753374.png" },

  // Das (محايد)
  { id: 45, name: "das Gemüse", pluralWord: "", ar: "خضروات مشكلة", cat: "veg", article: "das", img: "https://reef-misr.com/wp-content/uploads/2024/12/mixed1.jpg" },
  { id: 46, name: "das Radieschen", pluralWord: "Radieschen", ar: "فجل أحمر", cat: "veg", article: "das", img: "https://media.zid.store/a44a5136-8837-49cc-b57e-bca87eaa69ed/11194c5a-b2ec-44dd-91a2-b9cd1420231a.webp" },
  { id: 47, name: "das Kraut", pluralWord: "Kräuter", ar: "ملفوف / كرنب", cat: "veg", article: "das", img: "https://media.zid.store/3dfac062-0e10-4b87-af14-41b816f1152c/f0fb95dd-58f1-482f-ad0b-a0ccf6e380f4.png" },
  { id: 48, name: "das Basilikum", pluralWord: "", ar: "ريحان", cat: "veg", article: "das", img: "https://cdn.mafrservices.com/sys-master-root/hc5/h66/16764254552094/365352_main.jpg" },
  { id: 49, name: "das Rote Bete", pluralWord: "Rote Bete", ar: "بنجر / شمندر", cat: "veg", article: "das", img: "https://m.media-amazon.com/images/I/81CXs0YlPTL._AC_SY300_SX300_QL70_ML2_.jpg" },

  // Die (مؤنث)
  { id: 50, name: "die Tomate", pluralWord: "Tomaten", ar: "طماطم / قوطه", cat: "veg", article: "die", img: "https://cdn.mafrservices.com/sys-master-root/h6d/he2/13754262978590/1767482_main.jpg" },
  { id: 51, name: "die Gurke", pluralWord: "Gurken", ar: "خيار", cat: "veg", article: "die", img: "https://gardencells.com/files/original/products/100.jpg" },
  { id: 52, name: "die Kartoffel", pluralWord: "Kartoffeln", ar: "بطاطس", cat: "veg", article: "die", img: "https://www.expoegypt.gov.eg/uploads/2024/01/65b3f0ae5bebf.jpg" },
  { id: 53, name: "die Zwiebel", pluralWord: "Zwiebeln", ar: "بصل", cat: "veg", article: "die", img: "https://mozare3.net/wp-content/uploads/2024/04/Red-Onion.jpg" },
  { id: 54, name: "die Karotte", pluralWord: "Karotten", ar: "جزر", cat: "veg", article: "die", img: "https://5.imimg.com/data5/SELLER/Default/2025/3/495997683/HX/FF/FQ/66789684/fresh-vegetables-carrot-1000x1000.jpg" },
  { id: 55, name: "die Zucchini", pluralWord: "Zucchinis", ar: "كوسة", cat: "veg", article: "die", img: "https://png.pngtree.com/png-vector/20241219/ourlarge/pngtree-zucchini-vegetable-3d-clipart-png-image_14814185.png" },
  { id: 56, name: "die Paprika", pluralWord: "Paprikas", ar: "فلفل رومي / ألوان", cat: "veg", article: "die", img: "https://cdn.mafrservices.com/sys-master-root/h07/hd0/28721378885662/583821_main.jpg" },
  { id: 57, name: "die Petersilie", pluralWord: "", ar: "بقدونس", cat: "veg", article: "die", img: "https://png.pngtree.com/png-vector/20240626/ourlarge/pngtree-fresh-parsley-bunch-isolated-of-png-image_12780241.png" },
  { id: 58, name: "die Olive", pluralWord: "Oliven", ar: "زيتون", cat: "veg", article: "die", img: "https://png.pngtree.com/png-clipart/20250821/original/pngtree-fresh-black-olive-cluster-png-image_22175730.png" },
  { id: 59, name: "die Artischocke", pluralWord: "Artischocken", ar: "خرشوف", cat: "veg", article: "die", img: "https://cdn.mafrservices.com/sys-master-root/h42/h71/14662035374110/78607_main.jpg" },
  { id: 60, name: "die Erbse", pluralWord: "Erbsen", ar: "بسلة / بازلاء", cat: "veg", article: "die", img: "https://images.ninelife.io/products/HAB0DKV8DS2D/1_6116OTpHtKL_desktop.webp" },
  { id: 61, name: "die Bohne", pluralWord: "Bohnen", ar: "فاصوليا", cat: "veg", article: "die", img: "https://i.ebayimg.com/images/g/RlgAAeSwWtdqNOUg/s-l1600.webp" },
  { id: 62, name: "die Linse", pluralWord: "Linsen", ar: "عدس", cat: "veg", article: "die", img: "https://www.justfood.tv/UserFiles/orange80016012024.jpg" },
  { id: 63, name: "die Okra", pluralWord: "Okras", ar: "بامية", cat: "veg", article: "die", img: "https://genenastore.com/wp-content/uploads/2023/11/okra.jpg" },
  { id: 64, name: "die Malve", pluralWord: "Malven", ar: "ملوخية", cat: "veg", article: "die", img: "https://shopfreshway.com/wp-content/uploads/2020/05/MULOKHIA-BUNCH.jpg" },
  { id: 65, name: "die Auberginen", pluralWord: "Auberginen", ar: "بتنجان / باذنجان", cat: "veg", article: "die", img: "https://kumquaty.com/public/uploads/all/6sjUgfAB8mDOjn7KqDtrWWjBq9GKPynkzsN4KRhD.jpg" },
  { id: 66, name: "die Kichererbse", pluralWord: "Kichererbsen", ar: "حمص", cat: "veg", article: "die", img: "https://i.ebayimg.com/images/g/6zcAAOSwADxcBnJ9/s-l960.webp" },
  // الإضافات الجديدة (الجرجير والخضروات/الأعشاب الإضافية)
  { id: 69, name: "die Rucola", pluralWord: "Rucolas", ar: "جرجير", cat: "veg", article: "die", img: "https://cdn.salla.sa/NNKNq/2VLrknqVEeac7NucYL3hYGwGGfIVT91pQ2SVeT3J.jpg" },
  { id: 70, name: "der Koriander", pluralWord: "", ar: "كزبرة", cat: "veg", article: "der", img: "https://www.elsupplier.com/_next/image?url=https%3A%2F%2Fportal.elsupplier.com%2Fbackend%2Fpublic%2Fstorage%2Fproducts%2F1605917533.jpeg&w=640&q=50" },
  { id: 71, name: "die Minze", pluralWord: "", ar: "نعناع", cat: "veg", article: "die", img: "https://shopfreshway.com/wp-content/uploads/2020/05/MINT-LEAVES-BUNCH.jpg" }
];

export default function FruitAndVegetables() {
  const [filter, setFilter] = useState('all');
  const [speechRate, setSpeechRate] = useState(0.35); // السرعة الافتراضية هادئة وواضحة
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

  // دالة نطق المفرد ثم الجمع بفاصل زمني نصف ثانية (500 ملي ثانية)
  const speakCard = (item) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();

      const singularUtterance = new SpeechSynthesisUtterance(item.name);
      singularUtterance.lang = 'de-DE';
      singularUtterance.rate = speechRate;
      window.speechSynthesis.speak(singularUtterance);

      if (item.pluralWord) {
        setTimeout(() => {
          const pluralUtterance = new SpeechSynthesisUtterance(`die ${item.pluralWord}`);
          pluralUtterance.lang = 'de-DE';
          pluralUtterance.rate = speechRate;
          window.speechSynthesis.speak(pluralUtterance);
        }, 1000); // 500ms = نصف ثانية
      }
    }
  };

  const filteredItems = produceData.filter(item => {
    const matchesFilter =
      filter === 'all' ? true :
      ['der', 'das', 'die'].includes(filter) ? item.article === filter :
      item.cat === filter;

    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.ar.includes(searchQuery);

    return matchesFilter && matchesSearch;
  });

  const getGroupedItems = (catType) => {
    const itemsInCat = filteredItems.filter(i => i.cat === catType);
    return {
      der: itemsInCat.filter(i => i.article === 'der'),
      das: itemsInCat.filter(i => i.article === 'das'),
      die: itemsInCat.filter(i => i.article === 'die')
    };
  };

  const fruitGroups = getGroupedItems('fruit');
  const vegGroups = getGroupedItems('veg');

  const renderCard = (item) => {
    const borderClass =
      item.article === 'der' ? 'border-der' :
      item.article === 'das' ? 'border-das' : 'border-die';

    const textClass =
      item.article === 'der' ? 'text-der' :
      item.article === 'das' ? 'text-das' : 'text-die';

    const wordClass =
      item.article === 'der' ? 'text-der-word' :
      item.article === 'das' ? 'text-das-word' : 'text-die-word';

    const parts = item.name.split(' ');
    const articleWord = parts[0];
    const restOfName = parts.slice(1).join(' ');

    return (
      <div
        key={item.id}
        onClick={() => speakCard(item)}
        className={`tiere-card ${borderClass}`}
      >
        <span className="card-speaker-icon" title="اسمع النطق">
          🔊
        </span>

        <span className={`tiere-article-tag ${textClass}`}>
          {item.article}
        </span>

        {/* حاوية الصورة المربعة مع مارجن توب 15 بكسل */}
        <div className="card-img-container">
          <img src={item.img} alt={item.name} className="card-produce-img" />
        </div>

        <div>
          <h3 style={{ fontWeight: 'bold', marginBottom: '2px', fontSize: '1.05rem' }}>
            <span className={wordClass}>
              {articleWord}
            </span>
            <span> </span>
            <span className="animal-rest-name">
              {restOfName}
            </span>
          </h3>

          {/* عرض أداة الجمع باللون البرتقالي والكلمة الجمع بخط عريض (Bold) */}
          {item.pluralWord && (
            <p style={{ fontSize: '0.95rem', margin: '2px 0' }}>
              <span style={{ color: '#ff7700', fontWeight: '900' }}>die</span>{' '}
              <span className="animal-rest-name" style={{ fontWeight: '900' }}>{item.pluralWord}</span>
            </p>
          )}

          <p style={{ opacity: 0.9, fontSize: '0.9rem', margin: 0 }}>
            {item.ar}
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
          font-size: 1.8rem;
          font-weight: 900;
          margin: 40px 0 20px 0;
          width: 100%;
          text-align: right;
          border-right: 5px solid #10b981;
          padding-right: 12px;
        }
        .sub-heading {
          font-size: 1.25rem;
          font-weight: 800;
          margin: 20px 0 10px 0;
          width: 100%;
          text-align: right;
          padding-right: 8px;
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
          background-color: #10b981 !important;
          color: #ffffff !important;
          border-color: #10b981 !important;
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
          padding: 16px 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          text-align: center;
          cursor: pointer;
          box-sizing: border-box;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 12px rgba(0,0,0,0.06);
        }
        .tiere-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.12);
        }

        .card-img-container {
          width: 110px;
          height: 110px;
          border-radius: 12px;
          overflow: hidden;
          margin-top: 15px;
          margin-bottom: 8px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.06);
          background-color: #f3f4f6;
          flex-shrink: 0;
        }

        .card-produce-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s;
        }
        .tiere-card:hover .card-produce-img {
          transform: scale(1.05);
        }

        .card-speaker-icon {
          position: absolute;
          top: 10px;
          right: 12px;
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
          padding: 2px 12px;
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
          .tiere-card h3 { font-size: 1.05rem; }
          .animal-rest-name { color: #111827 !important; }
          .tiere-card p { color: #4b5563 !important; font-size: 0.9rem; font-weight: 600; }
          .card-speaker-icon { filter: drop-shadow(0 2px 5px rgba(255, 255, 255, 0.4)); }
          .tiere-badge {
            background-color: rgba(255, 255, 255, 0.1);
            color: #34d399;
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
          .tiere-title, .section-heading, .sub-heading { color: #ffffff !important; }
        }

        /* الوضع الفاتح (Light Mode) */
        @media (prefers-color-scheme: light) {
          .tiere-app-container { color: #111827; }
          .tiere-card h3 { font-size: 1.05rem; }
          .animal-rest-name { color: #111827 !important; }
          .tiere-card p { color: #374151 !important; font-size: 0.9rem; font-weight: 600; }
          .tiere-badge {
            background-color: #ecfdf5;
            color: #047857;
            border: 1px solid #a7f3d0;
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
          .tiere-title, .section-heading, .sub-heading { color: #000000 !important; }
        }
      `}</style>

      <div className="tiere-max-w">

        {/* شارة العنوان العلوية */}
        <div className="tiere-badge">
          <span>🍏</span> Gesundes Essen! 🇩🇪
        </div>

        {/* العنوان الرئيسي */}
        <h1 className="tiere-title">Obst & Gemüse</h1>

        {/* أزرار سرعة النطق */}
        <div className="tiere-speed-box">
          <span style={{ fontSize: '12px', fontWeight: 'bold' }}>سرعة النطق:</span>
          <button
            onClick={() => setSpeechRate(0.35)}
            className={`tiere-btn ${speechRate === 0.35 ? 'active' : ''}`}
          >
            0.35x (بطيء جداً)
          </button>
          <button
            onClick={() => setSpeechRate(0.7)}
            className={`tiere-btn ${speechRate === 0.7 ? 'active' : ''}`}
          >
            0.7x (متوسط)
          </button>
          <button
            onClick={() => setSpeechRate(1.0)}
            className={`tiere-btn ${speechRate === 1.0 ? 'active' : ''}`}
          >
            1.0x (عادي)
          </button>
        </div>

        {/* أزرار سماع الكلمات العامة */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '20px' }}>
          <button onClick={() => speakText("das Obst")} className="tiere-btn" style={{ fontWeight: 'bold' }}>
            🔊 سماع "الفواكه" (das Obst)
          </button>
          <button onClick={() => speakText("das Gemüse")} className="tiere-btn" style={{ fontWeight: 'bold' }}>
            🔊 سماع "الخضروات" (das Gemüse)
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

          {/* تصنيفات الأكل */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              { id: 'fruit', label: 'الفواكه (Obst)' },
              { id: 'veg', label: 'الخضروات (Gemüse)' }
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
          placeholder="ابحث بالعربية أو الألمانية (مثال: Apfel, تفاحة)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="tiere-search-input"
        />

        {/* عرض العناصر مرتبة حسب الأقسام وأدوات التعريف */}
        {filter !== 'all' ? (
          <div className="tiere-grid">
            {filteredItems.map(item => renderCard(item))}
          </div>
        ) : (
          <div style={{ width: '100%' }}>

            {/* قسم الفواكه (Obst) */}
            {(fruitGroups.der.length > 0 || fruitGroups.das.length > 0 || fruitGroups.die.length > 0) && (
              <>
                <h2 className="section-heading">🍏 الفواكه (Obst)</h2>

                {fruitGroups.der.length > 0 && (
                  <>
                    <h3 className="sub-heading" style={{ color: '#3b82f6' }}>Der (مذكر)</h3>
                    <div className="tiere-grid">
                      {fruitGroups.der.map(item => renderCard(item))}
                    </div>
                  </>
                )}

                {fruitGroups.das.length > 0 && (
                  <>
                    <h3 className="sub-heading" style={{ color: '#10b981' }}>Das (محايد)</h3>
                    <div className="tiere-grid">
                      {fruitGroups.das.map(item => renderCard(item))}
                    </div>
                  </>
                )}

                {fruitGroups.die.length > 0 && (
                  <>
                    <h3 className="sub-heading" style={{ color: '#ec4899' }}>Die (مؤنث)</h3>
                    <div className="tiere-grid">
                      {fruitGroups.die.map(item => renderCard(item))}
                    </div>
                  </>
                )}
              </>
            )}

            {/* قسم الخضروات (Gemüse) */}
            {(vegGroups.der.length > 0 || vegGroups.das.length > 0 || vegGroups.die.length > 0) && (
              <>
                <h2 className="section-heading">🥕 الخضروات (Gemüse)</h2>

                {vegGroups.der.length > 0 && (
                  <>
                    <h3 className="sub-heading" style={{ color: '#3b82f6' }}>Der (مذكر)</h3>
                    <div className="tiere-grid">
                      {vegGroups.der.map(item => renderCard(item))}
                    </div>
                  </>
                )}

                {vegGroups.das.length > 0 && (
                  <>
                    <h3 className="sub-heading" style={{ color: '#10b981' }}>Das (محايد)</h3>
                    <div className="tiere-grid">
                      {vegGroups.das.map(item => renderCard(item))}
                    </div>
                  </>
                )}

                {vegGroups.die.length > 0 && (
                  <>
                    <h3 className="sub-heading" style={{ color: '#ec4899' }}>Die (مؤنث)</h3>
                    <div className="tiere-grid">
                      {vegGroups.die.map(item => renderCard(item))}
                    </div>
                  </>
                )}
              </>
            )}

          </div>
        )}

      </div>
    </div>
  );
}
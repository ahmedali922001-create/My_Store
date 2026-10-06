const BASE_PRODUCTS = Array.from({length:30},(_,i)=>{
  const id=i+1;
  const category=['tshirt','shoes','pants','hoodie'][i%4];
  let price=7, oldPrice=null;
  if(category==='tshirt'){
    price=6.5;
    oldPrice=7;
  } else if(category==='shoes') {
    // Existing shoe catalog: some at OMR 12, some discounted from OMR 14 to OMR 13.
    const shoeIndex=Math.floor(i/5);
    price=shoeIndex%2===0?12:13;
    oldPrice=price===13?14:null;
  } else if(category==='pants') price=7;
  else if(category==='hoodie') price=10;
  const sizes = category==='shoes' ? ['41','42','43','44','45'] : ['S','M','L','XL'];
  return {
    id,
    name:`منتج فت ${String(id).padStart(2,'0')}`,
    nameEn:`FETT Product ${String(id).padStart(2,'0')}`,
    price, oldPrice,
    category,
    categoryAr:{tshirt:'تيشيرتات',shoes:'أحذية',pants:'بناطيل',hoodie:'هوديز'}[category],
    categoryEn:{tshirt:'T-Shirts',shoes:'Shoes',pants:'Pants',hoodie:'Hoodies'}[category],
    sizes,
    image:`images/product-${String(id).padStart(2,'0')}.svg`,
    desc:'وصف مختصر للمنتج — استبدل هذه البيانات باسم المنتج الحقيقي والمواصفات والصورة عند تجهيز المنتجات الفعلية.'
  };
});

const NEW_SHOES = [
  {
    id:31,
    name:'نيوبالانس الأسود والأبيض',
    nameEn:'New Balance Black & White',
    price:13,
    oldPrice:14,
    category:'shoes', categoryAr:'أحذية', categoryEn:'Shoes',
    sizes:['41','42','43','44','45'],
    image:'images/shoe-31.jpg',
    desc:'حذاء نيوبالانس باللون الأسود والأبيض بتصميم رياضي أنيق ومناسب للاستخدام اليومي.'
  },
  {
    id:32,
    name:'نيوبالانس الأسود والبيج',
    nameEn:'New Balance Black & Beige',
    price:13,
    oldPrice:14,
    category:'shoes', categoryAr:'أحذية', categoryEn:'Shoes',
    sizes:['41','42','43','44','45'],
    image:'images/shoe-32.jpg',
    desc:'حذاء نيوبالانس باللون الأسود مع تفاصيل بيج ولمسة رياضية عصرية.'
  },
  {
    id:33,
    name:'نيوبالانس الأزرق',
    nameEn:'New Balance Blue',
    price:13,
    oldPrice:14,
    category:'shoes', categoryAr:'أحذية', categoryEn:'Shoes',
    sizes:['41','42','43','44','45'],
    image:'images/shoe-33.jpg',
    desc:'حذاء نيوبالانس أزرق فاتح مع تفاصيل بيج، بتصميم شبابي أنيق.'
  },
  {
    id:34,
    name:'نيوبالانس الأسود',
    nameEn:'New Balance Black',
    price:13,
    oldPrice:14,
    category:'shoes', categoryAr:'أحذية', categoryEn:'Shoes',
    sizes:['41','42','43','44','45'],
    image:'images/shoe-34.jpg',
    desc:'حذاء نيوبالانس أسود بالكامل بتصميم عصري ورياضي.'
  }
];

// All existing shoes use 41–45 as requested; keep other categories unchanged.
BASE_PRODUCTS.filter(p=>p.category==='shoes').forEach(p=>{
  p.sizes=['41','42','43','44','45'];
});

// Apply the store-wide T-shirt promotion: OMR 7 crossed out → OMR 6.5.
BASE_PRODUCTS.filter(p=>p.category==='tshirt').forEach(p=>{
  p.price=6.5;
  p.oldPrice=7;
});


const NEW_TSHIRTS = [
  {id:101,name:'برشلونة الكلاسيكي الأزرق والأحمر',nameEn:'Barcelona Classic Blue & Red',price:6.5,oldPrice:7,category:'tshirt',categoryAr:'تيشيرتات',categoryEn:'T-Shirts',sizes:['S','M','L','XL'],image:'images/tshirt-101.jpg',desc:'تيشيرت برشلونة بتصميم كلاسيكي باللونين الأزرق والأحمر.'},
  {id:102,name:'برشلونة الأسود والأبيض',nameEn:'Barcelona Black & White',price:6.5,oldPrice:7,category:'tshirt',categoryAr:'تيشيرتات',categoryEn:'T-Shirts',sizes:['S','M','L','XL'],image:'images/tshirt-102.jpg',desc:'تيشيرت برشلونة باللونين الأسود والأبيض مع تصميم رياضي أنيق.'},
  {id:103,name:'ريال مدريد تيكا الأسود',nameEn:'Real Madrid Teka Black',price:6.5,oldPrice:7,category:'tshirt',categoryAr:'تيشيرتات',categoryEn:'T-Shirts',sizes:['S','M','L','XL'],image:'images/tshirt-103.jpg',desc:'تيشيرت ريال مدريد الأسود بتفاصيل ذهبية وتصميم تيكا الكلاسيكي.'},
  {id:104,name:'ألمانيا الأسود',nameEn:'Germany Black',price:6.5,oldPrice:7,category:'tshirt',categoryAr:'تيشيرتات',categoryEn:'T-Shirts',sizes:['S','M','L','XL'],image:'images/tshirt-104.jpg',desc:'تيشيرت المنتخب الألماني باللون الأسود مع تصميم مستوحى من الطابع الكلاسيكي.'},
  {id:105,name:'برشلونة الأبيض والأحمر',nameEn:'Barcelona White & Red',price:6.5,oldPrice:7,category:'tshirt',categoryAr:'تيشيرتات',categoryEn:'T-Shirts',sizes:['S','M','L','XL'],image:'images/tshirt-105.jpg',desc:'تيشيرت برشلونة أبيض مع تفاصيل حمراء وتصميم رياضي بسيط.'},
  {id:106,name:'الأرجنتين الأبيض',nameEn:'Argentina White',price:6.5,oldPrice:7,category:'tshirt',categoryAr:'تيشيرتات',categoryEn:'T-Shirts',sizes:['S','M','L','XL'],image:'images/tshirt-106.jpg',desc:'تيشيرت الأرجنتين الأبيض بتفاصيل المنتخب ورقم 10.'},
  {id:107,name:'البرازيل الأصفر والأخضر',nameEn:'Brazil Yellow & Green',price:6.5,oldPrice:7,category:'tshirt',categoryAr:'تيشيرتات',categoryEn:'T-Shirts',sizes:['S','M','L','XL'],image:'images/tshirt-107.jpg',desc:'تيشيرت البرازيل بتصميم أصفر وأخضر مستوحى من ألوان المنتخب.'},
  {id:108,name:'مانشستر سيتي السماوي',nameEn:'Manchester City Sky Blue',price:6.5,oldPrice:7,category:'tshirt',categoryAr:'تيشيرتات',categoryEn:'T-Shirts',sizes:['S','M','L','XL'],image:'images/tshirt-108.jpg',desc:'تيشيرت مانشستر سيتي باللون السماوي مع تصميم بسيط وأنيق.'},
  {id:109,name:'برشلونة المخطط الأزرق والأحمر',nameEn:'Barcelona Striped Blue & Red',price:6.5,oldPrice:7,category:'tshirt',categoryAr:'تيشيرتات',categoryEn:'T-Shirts',sizes:['S','M','L','XL'],image:'images/tshirt-109.jpg',desc:'تيشيرت برشلونة بتصميم مخطط أزرق وأحمر ولمسة رياضية عصرية.'},
  {id:110,name:'ريال مدريد التنين',nameEn:'Real Madrid Dragon',price:6.5,oldPrice:7,category:'tshirt',categoryAr:'تيشيرتات',categoryEn:'T-Shirts',sizes:['S','M','L','XL'],image:'images/tshirt-110.jpg',desc:'تيشيرت ريال مدريد بتصميم التنين الجرافيكي المميز.'},
  {id:111,name:'ريال مدريد تيكا الكحلي',nameEn:'Real Madrid Teka Navy',price:6.5,oldPrice:7,category:'tshirt',categoryAr:'تيشيرتات',categoryEn:'T-Shirts',sizes:['S','M','L','XL'],image:'images/tshirt-111.jpg',desc:'تيشيرت ريال مدريد الكحلي بتصميم تيكا الكلاسيكي.'},
  {id:112,name:'برشلونة الأبيض متعدد الألوان',nameEn:'Barcelona White Colorblock',price:6.5,oldPrice:7,category:'tshirt',categoryAr:'تيشيرتات',categoryEn:'T-Shirts',sizes:['S','M','L','XL'],image:'images/tshirt-112.jpg',desc:'تيشيرت برشلونة الأبيض مع تفاصيل جانبية حمراء وزرقاء.'},
  {id:113,name:'ريال مدريد الأسود والأبيض',nameEn:'Real Madrid Black & White',price:6.5,oldPrice:7,category:'tshirt',categoryAr:'تيشيرتات',categoryEn:'T-Shirts',sizes:['S','M','L','XL'],image:'images/tshirt-113.jpg',desc:'تيشيرت ريال مدريد الأسود والأبيض بتصميم رياضي مميز.'},
  {id:114,name:'الأرجنتين السماوي',nameEn:'Argentina Sky Blue',price:6.5,oldPrice:7,category:'tshirt',categoryAr:'تيشيرتات',categoryEn:'T-Shirts',sizes:['S','M','L','XL'],image:'images/tshirt-114.jpg',desc:'تيشيرت الأرجنتين السماوي بتصميم المنتخب الكلاسيكي.'},
  {id:115,name:'برشلونة الأبيض والأزرق والأحمر',nameEn:'Barcelona White Blue & Red',price:6.5,oldPrice:7,category:'tshirt',categoryAr:'تيشيرتات',categoryEn:'T-Shirts',sizes:['S','M','L','XL'],image:'images/tshirt-115.jpg',desc:'تيشيرت برشلونة الأبيض بتفاصيل الأزرق والأحمر وتصميم رياضي.'},
  {id:116,name:'البرازيل الأخضر',nameEn:'Brazil Green',price:6.5,oldPrice:7,category:'tshirt',categoryAr:'تيشيرتات',categoryEn:'T-Shirts',sizes:['S','M','L','XL'],image:'images/tshirt-116.jpg',desc:'تيشيرت البرازيل الأخضر بتصميم رياضي بسيط.'},
  {id:117,name:'ريال مدريد الأسود والذهبي',nameEn:'Real Madrid Black & Gold',price:6.5,oldPrice:7,category:'tshirt',categoryAr:'تيشيرتات',categoryEn:'T-Shirts',sizes:['S','M','L','XL'],image:'images/tshirt-117.jpg',desc:'تيشيرت ريال مدريد الأسود مع تفاصيل ذهبية وشعار الفريق.'},
  {id:118,name:'برشلونة الأحمر والكحلي',nameEn:'Barcelona Red & Navy',price:6.5,oldPrice:7,category:'tshirt',categoryAr:'تيشيرتات',categoryEn:'T-Shirts',sizes:['S','M','L','XL'],image:'images/tshirt-118.jpg',desc:'تيشيرت برشلونة الأحمر والكحلي بتصميم جرافيكي مميز.'},
  {id:119,name:'برشلونة الأحمر والأزرق',nameEn:'Barcelona Red & Blue',price:6.5,oldPrice:7,category:'tshirt',categoryAr:'تيشيرتات',categoryEn:'T-Shirts',sizes:['S','M','L','XL'],image:'images/tshirt-119.jpg',desc:'تيشيرت برشلونة بتصميم نصفين باللونين الأحمر والأزرق.'},
  {id:120,name:'ميلان الأسود والأحمر',nameEn:'AC Milan Black & Red',price:6.5,oldPrice:7,category:'tshirt',categoryAr:'تيشيرتات',categoryEn:'T-Shirts',sizes:['S','M','L','XL'],image:'images/tshirt-120.jpg',desc:'تيشيرت ميلان بالأسود والأحمر بتصميم مخطط رياضي.'}
];


const MORE_TSHIRTS = [
  {id:121,name:'برشلونة الرمادي',nameEn:'Barcelona Grey',price:6.5,oldPrice:7,category:'tshirt',categoryAr:'تيشيرتات',categoryEn:'T-Shirts',sizes:['S','M','L','XL'],image:'images/tshirt-121.jpg',desc:'تيشيرت برشلونة باللون الرمادي مع تفاصيل الفريق باللونين الأحمر والأزرق.'},
  {id:122,name:'ريال مدريد الأسود والرمادي',nameEn:'Real Madrid Black & Grey',price:6.5,oldPrice:7,category:'tshirt',categoryAr:'تيشيرتات',categoryEn:'T-Shirts',sizes:['S','M','L','XL'],image:'images/tshirt-122.jpg',desc:'تيشيرت ريال مدريد بتصميم مخطط بالأسود والرمادي وأكمام طويلة.'},
  {id:123,name:'ريال مدريد الأبيض والأسود',nameEn:'Real Madrid White & Black',price:6.5,oldPrice:7,category:'tshirt',categoryAr:'تيشيرتات',categoryEn:'T-Shirts',sizes:['S','M','L','XL'],image:'images/tshirt-123.jpg',desc:'تيشيرت ريال مدريد أبيض بتفاصيل سوداء وتصميم رياضي مميز.'},
  {id:124,name:'ريال مدريد الأبيض الكلاسيكي',nameEn:'Real Madrid Classic White',price:6.5,oldPrice:7,category:'tshirt',categoryAr:'تيشيرتات',categoryEn:'T-Shirts',sizes:['S','M','L','XL'],image:'images/tshirt-124.jpg',desc:'تيشيرت ريال مدريد أبيض بتصميم كلاسيكي مستوحى من المدينة وشعار النادي.'},
  {id:125,name:'برشلونة قطر',nameEn:'Barcelona Qatar',price:6.5,oldPrice:7,category:'tshirt',categoryAr:'تيشيرتات',categoryEn:'T-Shirts',sizes:['S','M','L','XL'],image:'images/tshirt-125.jpg',desc:'تيشيرت برشلونة بتصميم مخطط أفقي باللونين الكحلي والأحمر.'},
  {id:126,name:'ريال مدريد الشريط الأسود',nameEn:'Real Madrid Black Stripe',price:6.5,oldPrice:7,category:'tshirt',categoryAr:'تيشيرتات',categoryEn:'T-Shirts',sizes:['S','M','L','XL'],image:'images/tshirt-126.jpg',desc:'تيشيرت ريال مدريد الأبيض مع شريط أسود وشعار Emirates.'},
  {id:127,name:'برشلونة الكلاسيكي',nameEn:'Barcelona Classic',price:6.5,oldPrice:7,category:'tshirt',categoryAr:'تيشيرتات',categoryEn:'T-Shirts',sizes:['S','M','L','XL'],image:'images/tshirt-127.jpg',desc:'تيشيرت برشلونة كلاسيكي باللونين الأحمر والأزرق مع ياقة بيضاء.'},
  {id:128,name:'اليابان الأزرق',nameEn:'Japan Blue',price:6.5,oldPrice:7,category:'tshirt',categoryAr:'تيشيرتات',categoryEn:'T-Shirts',sizes:['S','M','L','XL'],image:'images/tshirt-128.jpg',desc:'تيشيرت منتخب اليابان باللون الأزرق مع تفاصيل المنتخب.'},
  {id:129,name:'برشلونة المخطط',nameEn:'Barcelona Striped',price:6.5,oldPrice:7,category:'tshirt',categoryAr:'تيشيرتات',categoryEn:'T-Shirts',sizes:['S','M','L','XL'],image:'images/tshirt-129.jpg',desc:'تيشيرت برشلونة مخطط بالأحمر والكحلي بتصميم بسيط وأنيق.'},
  {id:130,name:'برشلونة المغسول',nameEn:'Barcelona Washed',price:6.5,oldPrice:7,category:'tshirt',categoryAr:'تيشيرتات',categoryEn:'T-Shirts',sizes:['S','M','L','XL'],image:'images/tshirt-130.jpg',desc:'تيشيرت برشلونة بتأثير مغسول وتفاصيل حمراء وكحلية مع شعار Spotify.'},
  {id:131,name:'برشلونة بارسا',nameEn:'Barcelona Barca',price:6.5,oldPrice:7,category:'tshirt',categoryAr:'تيشيرتات',categoryEn:'T-Shirts',sizes:['S','M','L','XL'],image:'images/tshirt-131.jpg',desc:'تيشيرت برشلونة بتصميم متعدد الألوان وكلمة Barça في المنتصف.'},
  {id:132,name:'ريال مدريد الأبيض والذهبي',nameEn:'Real Madrid White & Gold',price:6.5,oldPrice:7,category:'tshirt',categoryAr:'تيشيرتات',categoryEn:'T-Shirts',sizes:['S','M','L','XL'],image:'images/tshirt-132.jpg',desc:'تيشيرت ريال مدريد الأبيض بتفاصيل ذهبية وشعار Emirates.'},
  {id:133,name:'ريال مدريد البيج والبني',nameEn:'Real Madrid Beige & Brown',price:6.5,oldPrice:7,category:'tshirt',categoryAr:'تيشيرتات',categoryEn:'T-Shirts',sizes:['S','M','L','XL'],image:'images/tshirt-133.jpg',desc:'تيشيرت ريال مدريد بلون بيج مع تفاصيل بنية وتصميم عصري.'},
  {id:134,name:'برشلونة 1989-1999',nameEn:'Barcelona 1989-1999',price:6.5,oldPrice:7,category:'tshirt',categoryAr:'تيشيرتات',categoryEn:'T-Shirts',sizes:['S','M','L','XL'],image:'images/tshirt-134.jpg',desc:'تيشيرت برشلونة بتصميم نصفين أحمر وأزرق ولمسة مستوحاة من 1989-1999.'},
  {id:135,name:'برشلونة الأحمر والكحلي',nameEn:'Barcelona Red & Navy',price:6.5,oldPrice:7,category:'tshirt',categoryAr:'تيشيرتات',categoryEn:'T-Shirts',sizes:['S','M','L','XL'],image:'images/tshirt-135.jpg',desc:'تيشيرت برشلونة مخطط بالأحمر والكحلي مع ياقة بيضاء.'},
  {id:136,name:'البرازيل الأصفر',nameEn:'Brazil Yellow',price:6.5,oldPrice:7,category:'tshirt',categoryAr:'تيشيرتات',categoryEn:'T-Shirts',sizes:['S','M','L','XL'],image:'images/tshirt-136.jpg',desc:'تيشيرت منتخب البرازيل باللون الأصفر مع تفاصيل رياضية.'},
  {id:137,name:'برشلونة الأبيض والبني',nameEn:'Barcelona White & Brown',price:6.5,oldPrice:7,category:'tshirt',categoryAr:'تيشيرتات',categoryEn:'T-Shirts',sizes:['S','M','L','XL'],image:'images/tshirt-137.jpg',desc:'تيشيرت برشلونة أبيض مع خطوط بنية وشعار Spotify.'},
  {id:138,name:'البرتغال الأحمر',nameEn:'Portugal Red',price:6.5,oldPrice:7,category:'tshirt',categoryAr:'تيشيرتات',categoryEn:'T-Shirts',sizes:['S','M','L','XL'],image:'images/tshirt-138.jpg',desc:'تيشيرت منتخب البرتغال الأحمر بدون أكمام مع الرقم 7.'},
  {id:139,name:'ريال مدريد الأسود',nameEn:'Real Madrid Black',price:6.5,oldPrice:7,category:'tshirt',categoryAr:'تيشيرتات',categoryEn:'T-Shirts',sizes:['S','M','L','XL'],image:'images/tshirt-139.jpg',desc:'تيشيرت ريال مدريد أسود بتفاصيل بيضاء ولمسات ذهبية.'},
  {id:140,name:'ريال مدريد تيكا الأبيض',nameEn:'Real Madrid Teka White',price:6.5,oldPrice:7,category:'tshirt',categoryAr:'تيشيرتات',categoryEn:'T-Shirts',sizes:['S','M','L','XL'],image:'images/tshirt-140.jpg',desc:'تيشيرت ريال مدريد أبيض بتفاصيل ذهبية وشعار Teka الكلاسيكي.'}
];

const LIMITED_HOODIES = BASE_PRODUCTS.filter(p=>p.category==='hoodie').slice(0,2).map((p,i)=>({
  ...p,
  name:`هودي فت ${String(i+1).padStart(2,'0')}`,
  nameEn:`FETT Hoodie ${String(i+1).padStart(2,'0')}`,
  price:10, oldPrice:null,
  desc:'سيتم توفير هذا المنتج قريبًا.'
}));
const LIMITED_PANTS = BASE_PRODUCTS.filter(p=>p.category==='pants').slice(0,2).map((p,i)=>({
  ...p,
  name:`بنطال فت ${String(i+1).padStart(2,'0')}`,
  nameEn:`FETT Pants ${String(i+1).padStart(2,'0')}`,
  price:7, oldPrice:null,
  desc:'سيتم توفير هذا المنتج قريبًا.'
}));

// Keep only the products supplied by the store owner for T-shirts and shoes.
// Hoodies and pants are limited to two placeholder entries until new stock is available.
const PRODUCTS = [...NEW_TSHIRTS, ...MORE_TSHIRTS, ...NEW_SHOES, ...LIMITED_HOODIES, ...LIMITED_PANTS];

// Stock currently available for the products marked in the owner's screenshots.
// Products not listed here retain all of their normal sizes.
const SIZE_STOCK = {
  113: ['S'],
  111: ['M'],
  122: ['S','M','L'],
  132: ['S','M'],
  126: ['M'],
  115: ['M'],
  112: ['M'],
  105: ['M'],
  102: ['M','S'],
  137: ['S','M','L','XL'],
  134: ['S'],
  130: ['M','S'],
  131: [],
  118: ['L','M','S'],
  119: ['S'],
  109: ['S'],
  101: ['L','M','S'],
  125: ['S'],
  135: ['S'],
  129: ['S'],
  127: []
};
PRODUCTS.forEach(p => {
  p.availableSizes = Object.prototype.hasOwnProperty.call(SIZE_STOCK, p.id) ? [...SIZE_STOCK[p.id]] : [...p.sizes];
  p.inStock = p.availableSizes.length > 0;
});

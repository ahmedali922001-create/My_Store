let lang = localStorage.getItem('fettLang') || 'ar';
let cart = JSON.parse(localStorage.getItem('fettCart') || '[]');
const WHATSAPP = '96877185956';
const money = n => `${Number(n).toFixed(3)} ر.ع`;
const categoryNames = {
  tshirt:{ar:'تيشيرتات',en:'T-Shirts'},
  shoes:{ar:'أحذية',en:'Shoes'},
  pants:{ar:'بناطيل',en:'Pants'},
  hoodie:{ar:'هوديز',en:'Hoodies'}
};

const tr = {
  ar:{
    'nav.home':'الرئيسية','nav.products':'المنتجات','nav.about':'من نحن','nav.policy':'سياسة الاستبدال','nav.contact':'تواصل معنا',
    'hero.eyebrow':'عرض FETT.OM','hero.title':'توصيل مجاني عند طلب 3 منتجات أو أكثر','hero.desc':'اطلب 3 منتجات أو أكثر واستمتع بالتوصيل المجاني إلى جميع محافظات السلطنة.','hero.shop':'تسوق الآن','hero.whatsapp':'اطلب عبر واتساب',
    'slide1.eyebrow':'عرض خاص','slide1.title':'توصيل مجاني عند طلب 3 منتجات أو أكثر','slide1.desc':'اطلب 3 منتجات أو أكثر واستمتع بالتوصيل المجاني إلى جميع محافظات السلطنة.',
    'slide2.eyebrow':'FETT.OM','slide2.title':'ستايل بسيط يناسبك كل يوم','slide2.desc':'اكتشف تشكيلتنا من التيشيرتات والهوديز والبناطيل والأحذية.',
    'slide3.eyebrow':'تسوق بسهولة','slide3.title':'اطلب الآن عبر واتساب','slide3.desc':'اختر منتجاتك، أضفها إلى السلة وأرسل طلبك مباشرة عبر واتساب.',
    'benefit.shipping':'توصيل السلطنة','benefit.shipping2':'مكتب 1 ر.ع • منزل 2 ر.ع','benefit.free':'توصيل مجاني','benefit.free2':'عند طلب 3 منتجات','benefit.pay':'خيارات دفع','benefit.pay2':'عند الاستلام أو التحويل البنكي',
    'products.eyebrow':'COLLECTION','products.title':'منتجاتنا','products.viewAll':'مشاهدة جميع المنتجات','products.allEyebrow':'ALL PRODUCTS','products.back':'العودة للأقسام','products.viewCategory':'مشاهدة الكل',
    'products.search':'ابحث عن منتج...','products.searchLabel':'بحث','products.noResults':'لا توجد منتجات مطابقة لبحثك.',
    'about.title':'أزياء يومية بروح رياضية','about.text':'فت متجر عماني يهتم بالستايل البسيط والعملي، مع اختيارات مناسبة للخروج والنادي والاستخدام اليومي. هدفنا تجربة شراء سهلة، تصميم واضح، وتوصيل إلى جميع محافظات السلطنة.',
    'policy.eyebrow':'POLICY','policy.title':'سياسة الاستبدال','policy.p1':'نستقبل طلبات الاستبدال وفق حالة المنتج وتوفر المقاس المطلوب.','policy.p2':'يجب أن يكون المنتج غير مستخدم وبحالته الأصلية مع التغليف والملصقات إن وجدت.','policy.p3':'قبل إرسال أي طلب استبدال، تواصل معنا عبر واتساب للتأكد من التفاصيل.',
    'contact.title':'تواصل معنا','contact.text':'للاستفسارات والطلبات المباشرة تواصل معنا على واتساب.','footer':'صُنع ببساطة، لستايل مختلف.',
    'trust.title':'تسوق بثقة','trust.shipping':'توصيل لجميع محافظات السلطنة','trust.shipping2':'مكتب 1 ر.ع • منزل 2 ر.ع','trust.free':'توصيل مجاني','trust.free2':'عند طلب 3 منتجات أو أكثر','trust.pay':'دفع مرن','trust.pay2':'عند الاستلام أو التحويل البنكي','trust.exchange':'استبدال سهل','trust.exchange2':'بحسب سياسة المتجر',
    'cart.title':'سلة المشتريات','cart.subtotal':'المجموع','cart.delivery':'التوصيل','cart.deliveryPending':'يُحدد عند إتمام الطلب','cart.total':'الإجمالي','cart.free':'التوصيل مجاني عند 3 منتجات أو أكثر.','cart.checkout':'إتمام الطلب','cart.continue':'متابعة التسوق','cart.remove':'إزالة',
    'cart.progressAddOne':'أضف منتجًا واحدًا لتحصل على توصيل مجاني 🚚','cart.progressAddMore':'أضف {n} منتجات لتحصل على توصيل مجاني 🚚','cart.progressFree':'🎉 حصلت على توصيل مجاني','cart.item':'منتج',
    'checkout.title':'إتمام الطلب','checkout.name':'الاسم','checkout.phone':'رقم الهاتف','checkout.governorate':'المحافظة','checkout.wilaya':'الولاية','checkout.area':'المنطقة','checkout.notes':'الملاحظات','checkout.delivery':'نوع التوصيل','checkout.payment':'طريقة الدفع','checkout.whatsapp':'إرسال الطلب عبر واتساب','checkout.note':'يمكن كتابة أي تفاصيل إضافية هنا، مثل طلب تغليف كهدية أو كتابة عبارة.','checkout.home':'التوصيل للمنزل — 2 ر.ع','checkout.office':'التوصيل للمكتب — 1 ر.ع','checkout.chooseDelivery':'اختر طريقة التوصيل','checkout.chooseGovernorate':'اختر المحافظة','checkout.chooseWilaya':'اختر الولاية','checkout.areaPlaceholder':'اكتب المنطقة / الحي','checkout.notesPlaceholder':'مثال: الطلب هدية، الرجاء كتابة عبارة...','checkout.cod':'الدفع عند الاستلام','checkout.bank':'تحويل بنكي','checkout.back':'العودة للسلة','checkout.deliveryCost':'تكلفة التوصيل','checkout.free':'مجاني','checkout.chooseFirst':'اختر طريقة التوصيل',
    'product.size':'المقاس','product.sizes':'المقاسات','product.add':'أضف للسلة','product.buy':'اشترِ الآن','product.chooseSize':'اختر المقاس','product.sold':'نفد من المخزون','product.oversized':'جميع المقاسات أوفر سايز.','product.material':'الخامة','product.materialValue':'قطن تركي 100%','product.fit':'القصة','product.fitValue':'قصة أوفر سايز','product.delivery':'التوصيل','product.deliveryValue':'إلى جميع محافظات السلطنة','product.freeDelivery':'مجاني عند 3 منتجات أو أكثر','product.chooseSizeAlert':'اختر المقاس أولاً',
    'categories.all':'الكل'
  },
  en:{
    'nav.home':'Home','nav.products':'Products','nav.about':'About','nav.policy':'Exchange Policy','nav.contact':'Contact',
    'hero.eyebrow':'FETT.OM Offer','hero.title':'Free delivery on 3 products or more','hero.desc':'Order 3 products or more and enjoy free delivery across Oman.','hero.shop':'Shop now','hero.whatsapp':'Order via WhatsApp',
    'slide1.eyebrow':'Special offer','slide1.title':'Free delivery on 3 products or more','slide1.desc':'Order 3 products or more and enjoy free delivery across Oman.',
    'slide2.eyebrow':'FETT.OM','slide2.title':'Simple style for every day','slide2.desc':'Explore our collection of T-shirts, hoodies, pants and shoes.',
    'slide3.eyebrow':'Easy shopping','slide3.title':'Order now via WhatsApp','slide3.desc':'Choose your products, add them to cart and send your order directly via WhatsApp.',
    'benefit.shipping':'Oman delivery','benefit.shipping2':'Office OMR 1 • Home OMR 2','benefit.free':'Free delivery','benefit.free2':'On 3 products','benefit.pay':'Payment options','benefit.pay2':'Cash on delivery or bank transfer',
    'products.eyebrow':'COLLECTION','products.title':'Our products','products.viewAll':'View all products','products.allEyebrow':'ALL PRODUCTS','products.back':'Back to categories','products.viewCategory':'View all',
    'products.search':'Search products...','products.searchLabel':'Search','products.noResults':'No products match your search.',
    'about.title':'Everyday wear with a sporty spirit','about.text':'FETT is an Omani store focused on simple, practical style for everyday life, outings and training.',
    'policy.eyebrow':'POLICY','policy.title':'Exchange policy','policy.p1':'Exchange requests are accepted depending on product condition and availability.','policy.p2':'Items must be unused and in original condition with packaging and tags where applicable.','policy.p3':'Contact us on WhatsApp before requesting an exchange.',
    'contact.title':'Get in touch','contact.text':'For questions and direct orders, contact us on WhatsApp.','footer':'Made simple for a different style.',
    'trust.title':'Shop with confidence','trust.shipping':'Delivery across Oman','trust.shipping2':'Office OMR 1 • Home OMR 2','trust.free':'Free delivery','trust.free2':'On 3 products or more','trust.pay':'Flexible payment','trust.pay2':'Cash on delivery or bank transfer','trust.exchange':'Easy exchange','trust.exchange2':'According to store policy',
    'cart.title':'Shopping cart','cart.subtotal':'Subtotal','cart.delivery':'Delivery','cart.deliveryPending':'Selected at checkout','cart.total':'Total','cart.free':'Free delivery on 3 products or more.','cart.checkout':'Checkout','cart.continue':'Continue shopping','cart.remove':'Remove',
    'cart.progressAddOne':'Add one more item for free delivery 🚚','cart.progressAddMore':'Add {n} more items for free delivery 🚚','cart.progressFree':'🎉 Free delivery unlocked','cart.item':'items',
    'checkout.title':'Checkout','checkout.name':'Name','checkout.phone':'Phone','checkout.governorate':'Governorate','checkout.wilaya':'Wilayat','checkout.area':'Area','checkout.notes':'Notes','checkout.delivery':'Delivery type','checkout.payment':'Payment method','checkout.whatsapp':'Send order via WhatsApp','checkout.note':'Add any extra details here, such as gift wrapping or a message.','checkout.home':'Home delivery — OMR 2','checkout.office':'Office delivery — OMR 1','checkout.chooseDelivery':'Choose delivery','checkout.chooseGovernorate':'Choose governorate','checkout.chooseWilaya':'Choose wilayat','checkout.areaPlaceholder':'Enter area / neighborhood','checkout.notesPlaceholder':'Example: This is a gift, please add a message...','checkout.cod':'Cash on delivery','checkout.bank':'Bank transfer','checkout.back':'Back to cart','checkout.deliveryCost':'Delivery cost','checkout.free':'Free','checkout.chooseFirst':'Choose delivery',
    'product.size':'Size','product.sizes':'Sizes','product.add':'Add to cart','product.buy':'Buy now','product.chooseSize':'Choose size','product.sold':'Out of stock','product.oversized':'All sizes are oversized.','product.material':'Material','product.materialValue':'100% Turkish cotton','product.fit':'Fit','product.fitValue':'Oversized fit','product.delivery':'Delivery','product.deliveryValue':'Across Oman','product.freeDelivery':'Free on 3 products or more','product.chooseSizeAlert':'Please choose a size first',
    'categories.all':'All'
  }
};

const WILAYATS = {
  'مسقط':['مسقط','مطرح','العامرات','بوشر','السيب','قريات'],
  'ظفار':['صلالة','طاقة','مرباط','رخيوت','ثمريت','ضلكوت','المزيونة','مقشن','شليم وجزر الحلانيات','سدح'],
  'مسندم':['خصب','دبا','بخاء','مدحاء'],
  'البريمي':['البريمي','محضة','السنينة'],
  'الداخلية':['نزوى','بهلاء','منح','الحمراء','أدم','إزكي','سمائل','بدبد','الجبل الأخضر'],
  'شمال الباطنة':['صحار','شناص','لوى','صحم','الخابورة','السويق'],
  'جنوب الباطنة':['الرستاق','العوابي','نخل','وادي المعاول','بركاء','المصنعة'],
  'شمال الشرقية':['إبراء','المضيبي','بدية','القابل','وادي بني خالد','دماء والطائيين','سناو'],
  'جنوب الشرقية':['صور','الكامل والوافي','جعلان بني بو حسن','جعلان بني بو علي','مصيرة'],
  'الظاهرة':['عبري','ينقل','ضنك'],
  'الوسطى':['هيماء','محوت','الدقم','الجازر']
};

let currentCat = 'all';
let selectedSize = null;
let sliderTimer;
let currentSlide = 0;

function t(key){return tr[lang][key] || key}
function applyLang(){
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  localStorage.setItem('fettLang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;if(tr[lang][key])el.textContent=tr[lang][key]});
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{const key=el.dataset.i18nPlaceholder;if(tr[lang][key])el.placeholder=tr[lang][key]});
  const langBtn = document.getElementById('langBtn'); if(langBtn) langBtn.textContent = lang==='ar'?'EN':'AR';
  const search = document.getElementById('productSearch'); if(search) search.placeholder = t('products.search');
  const area = document.querySelector('[name=area]'); if(area) area.placeholder = t('checkout.areaPlaceholder');
  const notes = document.querySelector('[name=notes]'); if(notes) notes.placeholder = t('checkout.notesPlaceholder');
  populateWilayas();
  renderCategorySections();
  if(!document.getElementById('allProducts').classList.contains('is-hidden')) renderProducts(currentCat);
  updateCart();
  updateCheckoutTotal();
  showSlide(currentSlide);
}

function priceMarkup(p){
  const now = money(p.price);
  return p.oldPrice ? `<span class="old">${money(p.oldPrice)}</span><span class="sale-price">${now}</span><span class="sale-badge">خصم</span>` : `<span>${now}</span>`;
}
function productImg(p){return `<img class="product-image" src="${p.image}" alt="${lang==='ar'?p.name:p.nameEn}" loading="lazy" decoding="async">`}
function detailProductImg(p){return `<img class="detail-product-image" src="${p.image}" alt="${lang==='ar'?p.name:p.nameEn}" decoding="async">`}
function productCard(p){
  const available = p.availableSizes || p.sizes || [];
  const soldOut = available.length===0;
  return `<article class="product-card ${soldOut?'is-sold-out':''}" data-id="${p.id}" tabindex="0" role="button" aria-label="${lang==='ar'?p.name:p.nameEn}">${productImg(p)}${soldOut?`<span class="stock-badge">${t('product.sold')}</span>`:''}<div class="product-info"><div class="product-top"><div><div class="product-name">${lang==='ar'?p.name:p.nameEn}</div><div class="product-cat">${lang==='ar'?p.categoryAr:p.categoryEn}</div></div><div class="price">${priceMarkup(p)}</div></div></div></article>`;
}

const tshirtOrder=[101,109,119,118,127,129,135,125,102,105,112,115,131,130,134,137,103,111,140,123,126,132,139,122,133,110,113,117,104,128,107,116,136,106,114,138,108,120,101,102];
function orderedProducts(cat){
  const base=PRODUCTS.filter(p=>p.category===cat);
  if(cat==='tshirt'){
    const byId=new Map(base.map(p=>[p.id,p]));
    return [...tshirtOrder.map(id=>byId.get(id)).filter(Boolean), ...base.filter(p=>!tshirtOrder.includes(p.id))];
  }
  if(cat==='shoes') return [...base.filter(p=>p.id>=31&&p.id<=34), ...base.filter(p=>p.id<31)];
  return base;
}

function bindProductCards(root){
  root.querySelectorAll('.product-card').forEach(card=>{
    const fn=()=>openProduct(Number(card.dataset.id));
    card.addEventListener('click',fn);
    card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' ') {e.preventDefault();fn()}});
  });
}
function renderCategorySections(){
  const root=document.getElementById('categorySections'); if(!root)return;
  const cats=['tshirt','shoes','pants','hoodie'];
  root.innerHTML=cats.map(cat=>{
    const items=orderedProducts(cat).slice(0,4);
    if(!items.length)return '';
    const title=categoryNames[cat][lang];
    return `<section class="category-block"><div class="category-head"><div><span class="eyebrow">${cat==='tshirt'?'COLLECTION':title}</span><h3>${title}</h3></div><button class="btn btn-ghost dark-btn view-cat" type="button" data-cat="${cat}">${t('products.viewCategory')}</button></div><div class="product-grid">${items.map(productCard).join('')}</div></section>`;
  }).join('');
  root.querySelectorAll('.view-cat').forEach(btn=>btn.addEventListener('click',()=>{currentCat=btn.dataset.cat;document.getElementById('allProducts').classList.remove('is-hidden');renderProducts(currentCat);document.getElementById('allProducts').scrollIntoView({behavior:'smooth',block:'start'});}));
  bindProductCards(root);
}
function showAll(){currentCat='all';document.getElementById('allProducts').classList.remove('is-hidden');renderProducts('all');document.getElementById('allProducts').scrollIntoView({behavior:'smooth',block:'start'});}
function renderProducts(cat='all'){
  currentCat=cat;
  const grid=document.getElementById('productGrid'); if(!grid)return;
  const q=(document.getElementById('productSearch')?.value||'').trim().toLowerCase();
  let ps=cat==='all'?PRODUCTS:orderedProducts(cat);
  if(q)ps=ps.filter(p=>`${p.name} ${p.nameEn} ${p.categoryAr} ${p.categoryEn}`.toLowerCase().includes(q));
  document.getElementById('catalogTitle').textContent=cat==='all'?(lang==='ar'?'جميع المنتجات':'All products'):categoryNames[cat][lang];
  grid.innerHTML=ps.length?ps.map(productCard).join(''):`<div class="empty search-empty">${t('products.noResults')}</div>`;
  bindProductCards(grid);
  document.querySelectorAll('.filter').forEach(b=>b.classList.toggle('active',b.dataset.cat===cat));
}

function sizeGuideMarkup(category){
  if(!['tshirt','hoodie'].includes(category)) return '';
  const isHoodie=category==='hoodie';
  const title=lang==='ar'?(isHoodie?'دليل مقاسات الهوديات':'دليل مقاسات التيشيرتات'):(isHoodie?'Hoodie Size Guide':'T-Shirt Size Guide');
  const note=t('product.oversized');
  const rows=isHoodie?[
    ['العرض','21 in / 53.34 cm','23 in / 58.42 cm','24 in / 60.96 cm','25 in / 63.50 cm'],
    ['الطول','31 in / 78.74 cm','31 in / 78.74 cm','31 in / 78.74 cm','31 in / 78.74 cm'],
    ['طول الكم','31 in / 78.74 cm','31 in / 78.74 cm','31 in / 78.74 cm','31 in / 78.74 cm']
  ]:[
    ['العرض','21 in / 53 cm','23 in / 59 cm','24 in / 61 cm','25 in / 64 cm'],
    ['الطول','29 in / 74 cm','29 in / 74 cm','30 in / 76 cm','31 in / 79 cm'],
    ['طول الكم','18 in / 46 cm','18 in / 46 cm','18 in / 46 cm','18 in / 46 cm']
  ];
  return `<div class="size-guide"><div class="size-guide-head"><strong>${title}</strong><span>${note}</span></div><div class="size-guide-table-wrap"><table class="size-guide-table"><thead><tr><th>SIZE</th><th>S</th><th>M</th><th>L</th><th>XL</th></tr></thead><tbody>${rows.map(r=>`<tr><th>${r[0]}</th>${r.slice(1).map(v=>`<td>${v}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div>`;
}

function openProduct(id){
  const p=PRODUCTS.find(x=>x.id===id); if(!p)return;
  selectedSize=null;
  const available=new Set(p.availableSizes||p.sizes||[]);
  const soldOut=!available.size;
  const isClothing=['tshirt','hoodie'].includes(p.category);
  const sizes=p.sizes||[];
  const chips=soldOut?`<div class="soldout-message">${t('product.sold')}</div>`:`<div class="detail-section"><strong>${t('product.size')}</strong><div class="chips" id="sizeChips">${sizes.map(x=>`<button type="button" class="chip option-chip ${available.has(x)?'':'disabled'}" data-kind="size" data-value="${x}" ${available.has(x)?'':'disabled'}>${x}</button>`).join('')}</div>${isClothing?`<p class="oversized-note">${t('product.oversized')}</p>`:''}</div>${sizeGuideMarkup(p.category)}`;
  const meta=isClothing?`<div class="detail-meta"><div><span>${t('product.material')}</span><strong>${t('product.materialValue')}</strong></div><div><span>${t('product.fit')}</span><strong>${t('product.fitValue')}</strong></div><div><span>${t('product.delivery')}</span><strong>${t('product.deliveryValue')}</strong></div><div><span>${t('product.freeDelivery')}</span><strong>✓</strong></div></div>`:`<div class="detail-meta shoe-meta"><div><span>${t('product.sizes')}</span><strong>${sizes.join(' • ')}</strong></div><div><span>${t('product.delivery')}</span><strong>${t('product.deliveryValue')}</strong></div><div><span>${t('product.freeDelivery')}</span><strong>✓</strong></div></div>`;
  document.getElementById('modalContent').innerHTML=`<div class="product-detail"><div class="detail-media">${detailProductImg(p)}</div><div class="detail"><span class="eyebrow">${lang==='ar'?p.categoryAr:p.categoryEn}</span><h3>${lang==='ar'?p.name:p.nameEn}</h3><div class="price detail-price">${priceMarkup(p)}</div><p class="detail-desc">${p.desc}</p>${meta}${chips}<div class="detail-actions"><button class="btn btn-primary" id="detailAddBtn" ${soldOut?'disabled':''}>${soldOut?t('product.sold'):t('product.add')}</button><button class="btn btn-ghost dark-outline" id="detailBuyBtn" ${soldOut?'disabled':''}>${t('product.buy')}</button></div></div></div>`;
  document.getElementById('productModal').classList.add('show');
  document.body.classList.add('modal-open');
  document.querySelectorAll('.option-chip[data-kind="size"]:not([disabled])').forEach(ch=>ch.addEventListener('click',()=>{selectedSize=ch.dataset.value;document.querySelectorAll('.option-chip[data-kind="size"]').forEach(x=>x.classList.remove('selected'));ch.classList.add('selected');document.getElementById('detailAddBtn').textContent=t('product.add');}));
  document.getElementById('detailAddBtn').addEventListener('click',()=>{if(!selectedSize){alert(t('product.chooseSizeAlert'));return;}addToCart(p.id,selectedSize);closeModal('productModal');});
  document.getElementById('detailBuyBtn').addEventListener('click',()=>{if(!selectedSize){alert(t('product.chooseSizeAlert'));return;}addToCart(p.id,selectedSize,false);closeModal('productModal');openCart(true);});
}
function closeModal(id){const el=document.getElementById(id);if(el)el.classList.remove('show');document.body.classList.remove('modal-open')}

function saveCart(){localStorage.setItem('fettCart',JSON.stringify(cart));updateCart()}
function cartCount(){return cart.reduce((s,x)=>s+x.qty,0)}
function subtotalValue(){return cart.reduce((s,i)=>{const p=PRODUCTS.find(x=>x.id===i.id);return s+(p?p.price:0)*i.qty},0)}
function updateCart(){
  const count=cartCount();
  const badge=document.getElementById('cartCount'); if(badge)badge.textContent=count;
  const itemsEl=document.getElementById('cartItems');
  const subtotalEl=document.getElementById('subtotal');
  const deliveryEl=document.getElementById('delivery');
  const totalEl=document.getElementById('total');
  const progressEl=document.getElementById('cartProgress');
  if(!itemsEl)return;
  if(!cart.length){
    itemsEl.innerHTML=`<div class="empty-cart"><div class="empty-cart-icon">🛒</div><strong>${lang==='ar'?'السلة فارغة':'Your cart is empty'}</strong><span>${lang==='ar'?'أضف المنتجات التي تعجبك وستظهر هنا.':'Add products you like and they will appear here.'}</span><button class="btn btn-primary" type="button" id="continueShoppingEmpty">${t('cart.continue')}</button></div>`;
    document.getElementById('continueShoppingEmpty')?.addEventListener('click',()=>{closeCart();document.getElementById('products')?.scrollIntoView({behavior:'smooth'})});
  } else {
    itemsEl.innerHTML=cart.map((i,index)=>{const p=PRODUCTS.find(x=>x.id===i.id);return p?`<div class="cart-row"><img src="${p.image}" alt="${lang==='ar'?p.name:p.nameEn}" loading="lazy"><div><strong>${lang==='ar'?p.name:p.nameEn}</strong><div class="small">${t('product.size')}: ${i.size}</div><div class="qty"><button type="button" data-qty="-1" data-index="${index}">−</button><span>${i.qty}</span><button type="button" data-qty="1" data-index="${index}">+</button></div></div><div class="cart-row-end"><strong>${money(p.price*i.qty)}</strong><button type="button" class="remove" data-remove="${index}">${t('cart.remove')}</button></div></div>`:''}).join('');
    itemsEl.querySelectorAll('[data-qty]').forEach(btn=>btn.addEventListener('click',()=>changeQty(Number(btn.dataset.index),Number(btn.dataset.qty))));
    itemsEl.querySelectorAll('[data-remove]').forEach(btn=>btn.addEventListener('click',()=>removeItem(Number(btn.dataset.remove))));
  }
  const sub=subtotalValue();
  if(subtotalEl)subtotalEl.textContent=money(sub);
  if(deliveryEl)deliveryEl.textContent=t('cart.deliveryPending');
  if(totalEl)totalEl.textContent=money(sub);
  if(progressEl){
    let msg='';
    if(count>=3)msg=t('cart.progressFree');
    else if(count===2)msg=t('cart.progressAddOne');
    else if(count===1)msg=t('cart.progressAddMore').replace('{n}','2');
    else msg='';
    progressEl.textContent=msg;
    progressEl.classList.toggle('is-complete',count>=3);
  }
}
function addToCart(id,size,open=true){
  const p=PRODUCTS.find(x=>x.id===id);if(!p||!(p.availableSizes||p.sizes||[]).includes(size)){alert(lang==='ar'?'هذا المقاس غير متوفر حالياً':'This size is currently unavailable');return;}
  const x=cart.find(i=>i.id===id&&i.size===size);if(x)x.qty++;else cart.push({id,qty:1,size});saveCart();if(open)openCart();
}
function changeQty(index,n){const x=cart[index];if(!x)return;x.qty+=n;if(x.qty<=0)cart.splice(index,1);saveCart()}
function removeItem(index){cart.splice(index,1);saveCart()}
function openCart(force=false){const drawer=document.getElementById('cartDrawer');const backdrop=document.getElementById('backdrop');if(!drawer||!backdrop)return;updateCart();drawer.classList.add('open');backdrop.classList.add('open');drawer.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';if(force)drawer.classList.remove('checkout-mode')}
function closeCart(){const drawer=document.getElementById('cartDrawer');const backdrop=document.getElementById('backdrop');if(!drawer||!backdrop)return;drawer.classList.remove('open');drawer.classList.remove('checkout-mode');backdrop.classList.remove('open');drawer.setAttribute('aria-hidden','true');document.body.style.overflow=''}

function populateWilayas(){
  const gov=document.querySelector('[name=governorate]');const wil=document.querySelector('[name=wilaya]');if(!gov||!wil)return;
  const list=WILAYATS[gov.value]||[];
  const current=wil.value;
  wil.innerHTML=`<option value="">${t('checkout.chooseWilaya')}</option>`+list.map(x=>`<option value="${x}">${x}</option>`).join('');
  wil.disabled=!list.length;
  if(list.includes(current))wil.value=current;
}
function updateCheckoutTotal(){
  const sub=subtotalValue();const count=cartCount();const type=document.querySelector('[name=deliveryType]')?.value||'';
  const chosen=type==='home'||type==='office';const del=count>=3?0:(type==='office'?1:2);
  const cost=document.getElementById('checkoutDeliveryCost');const total=document.getElementById('checkoutTotal');
  if(cost)cost.textContent=count>=3?t('checkout.free'):(chosen?money(del):t('checkout.chooseFirst'));
  if(total)total.textContent=(chosen||count>=3)?money(sub+del):money(sub);
}
function buildWhatsappMessage(f){
  const count=cartCount();const sub=subtotalValue();const del=count>=3?0:(f.get('deliveryType')==='office'?1:2);const total=sub+del;
  const lines=cart.map(i=>{const p=PRODUCTS.find(x=>x.id===i.id);return `• ${(lang==='ar'?p.name:p.nameEn)} — ${t('product.size')} ${i.size} × ${i.qty} = ${money(p.price*i.qty)}`}).join('\n');
  return `FETT.OM Order\n\n${lines}\n\n${t('checkout.name')}: ${f.get('name')}\n${t('checkout.phone')}: ${f.get('phone')}\n${t('checkout.governorate')}: ${f.get('governorate')}\n${t('checkout.wilaya')}: ${f.get('wilaya')}\n${t('checkout.area')}: ${f.get('area')||'-'}\n${t('checkout.notes')}: ${f.get('notes')||'-'}\n${t('checkout.delivery')}: ${f.get('deliveryType')==='office'?t('checkout.office'):t('checkout.home')}\n${t('checkout.payment')}: ${f.get('payment')==='bank'?t('checkout.bank'):t('checkout.cod')}\n${t('cart.subtotal')}: ${money(sub)}\n${t('cart.delivery')}: ${count>=3?t('checkout.free'):money(del)}\n${t('cart.total')}: ${money(total)}`;
}

function init(){
  document.querySelectorAll('.filter').forEach(b=>b.addEventListener('click',()=>{if(document.getElementById('productSearch'))document.getElementById('productSearch').value='';renderProducts(b.dataset.cat)}));
  document.getElementById('cartOpenBtn')?.addEventListener('click',()=>openCart());
  document.getElementById('closeCart')?.addEventListener('click',closeCart);
  document.getElementById('backdrop')?.addEventListener('click',closeCart);
  document.querySelectorAll('[data-close-modal]').forEach(b=>b.addEventListener('click',()=>closeModal('productModal')));
  document.getElementById('langBtn')?.addEventListener('click',()=>{lang=lang==='ar'?'en':'ar';applyLang()});
  document.getElementById('menuBtn')?.addEventListener('click',()=>document.getElementById('mobileNav')?.classList.toggle('open'));
  document.querySelectorAll('.mobile-nav a').forEach(a=>a.addEventListener('click',()=>document.getElementById('mobileNav')?.classList.remove('open')));
  document.getElementById('backToCategories')?.addEventListener('click',()=>{document.getElementById('allProducts').classList.add('is-hidden');document.getElementById('categorySections').scrollIntoView({behavior:'smooth',block:'start'})});
  document.querySelector('[href="#allProducts"]')?.addEventListener('click',e=>{e.preventDefault();showAll()});
  document.getElementById('productSearch')?.addEventListener('input',()=>renderProducts(currentCat));
  document.getElementById('checkoutBtn')?.addEventListener('click',()=>{
    if(!cart.length){alert(lang==='ar'?'السلة فارغة':'Your cart is empty');return}
    document.getElementById('cartDrawer').classList.add('checkout-mode');
    document.getElementById('cartCheckout').hidden=false;
    const form=document.getElementById('checkoutForm'); form.reset();
    document.querySelector('[name=wilaya]')?.setAttribute('disabled','disabled');
    updateCheckoutTotal();
  });
  document.getElementById('backToCart')?.addEventListener('click',()=>{document.getElementById('cartDrawer').classList.remove('checkout-mode');document.getElementById('cartCheckout').hidden=true;updateCart()});
  document.querySelector('[name=governorate]')?.addEventListener('change',()=>{populateWilayas();document.querySelector('[name=wilaya]').value=''});
  document.querySelector('[name=deliveryType]')?.addEventListener('change',updateCheckoutTotal);
  document.getElementById('checkoutForm')?.addEventListener('submit',e=>{
    e.preventDefault();
    if(!cart.length)return;
    const f=new FormData(e.target);
    if(!f.get('name')||!f.get('phone')||!f.get('governorate')||!f.get('wilaya')){alert(lang==='ar'?'أكمل الاسم ورقم الهاتف والمحافظة والولاية':'Please complete name, phone, governorate and wilayat');return}
    if(!f.get('deliveryType')){alert(lang==='ar'?'اختر طريقة التوصيل أولاً':'Please choose a delivery method first');return}
    const msg=buildWhatsappMessage(f);
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`,'_blank','noopener');
    cart=[];localStorage.removeItem('fettCart');updateCart();e.target.reset();document.getElementById('cartDrawer').classList.remove('checkout-mode');document.getElementById('cartCheckout').hidden=true;closeCart();
  });
  document.querySelectorAll('[href^="#"]').forEach(a=>a.addEventListener('click',()=>document.getElementById('mobileNav')?.classList.remove('open')));

  const heroData=[
    {bg1:'#010027',bg2:'#25256a',eyebrow:'slide1.eyebrow',title:'slide1.title',desc:'slide1.desc'},
    {bg1:'#10122f',bg2:'#3a3d7a',eyebrow:'slide2.eyebrow',title:'slide2.title',desc:'slide2.desc'},
    {bg1:'#171717',bg2:'#4b4b4b',eyebrow:'slide3.eyebrow',title:'slide3.title',desc:'slide3.desc'}
  ];
  const hs=document.getElementById('heroSlider');const dots=document.getElementById('sliderDots');
  heroData.forEach((c,i)=>{const s=document.createElement('div');s.className='hero-slide';s.style.background=`radial-gradient(circle at ${72+i*7}% 30%,${c.bg2},transparent 34%),linear-gradient(135deg,${c.bg1},#050512)`;hs?.appendChild(s);const d=document.createElement('button');d.className='dot';d.type='button';d.setAttribute('aria-label',`Slide ${i+1}`);d.addEventListener('click',()=>showSlide(i));dots?.appendChild(d)});
  window.showSlide = i => {currentSlide=(i+heroData.length)%heroData.length;hs?.querySelectorAll('.hero-slide').forEach((el,n)=>el.classList.toggle('active',n===currentSlide));dots?.querySelectorAll('.dot').forEach((el,n)=>el.classList.toggle('active',n===currentSlide));const d=heroData[currentSlide];const eb=document.getElementById('heroEyebrow');const ti=document.getElementById('heroTitle');const de=document.getElementById('heroDesc');if(eb)eb.textContent=t(d.eyebrow);if(ti)ti.textContent=t(d.title);if(de)de.textContent=t(d.desc);document.getElementById('heroShop')&&(document.getElementById('heroShop').textContent=t('hero.shop'));document.getElementById('heroWhatsapp')&&(document.getElementById('heroWhatsapp').textContent=t('hero.whatsapp'))};
  function startSlider(){clearInterval(sliderTimer);sliderTimer=setInterval(()=>window.showSlide(currentSlide+1),4500)}
  window.showSlide(0);startSlider();

  document.getElementById('year').textContent=new Date().getFullYear();
  renderCategorySections();
  applyLang();
}

document.addEventListener('DOMContentLoaded',init);

"use client";

import React, { useState } from "react";
import { 
  Search, ShoppingCart, Heart, User, ArrowLeft, Star, 
  Plus, Minus, CheckCircle, CreditCard, ChevronRight, Home, 
  Grid, Bell, Sliders, Truck, ShieldCheck 
} from "lucide-react";

// Mock Data
const PRODUCTS = [
  {
    id: 1,
    name: "หูฟังบลูทูธไร้สาย Pro Sound",
    category: "หูฟัง & แอคเซสเซอรี",
    price: 1590,
    originalPrice: 2590,
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    description: "สัมผัสประสบการณ์เสียงคมชัดระดับพรีเมียม พร้อมระบบตัดเสียงรบกวน Active Noise Cancelling (ANC) แบตเตอรี่ใช้งานได้นานสูงสุด 30 ชั่วโมง",
    colors: ["#1F2937", "#F3F4F6", "#3B82F6"]
  },
  {
    id: 2,
    name: "นาฬิกาอัจฉริยะ Smart Watch Ultra",
    category: "อุปกรณ์สวมใส่",
    price: 3290,
    originalPrice: 4500,
    rating: 4.9,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    description: "ติดตามสุขภาพและการออกกำลังกายของคุณตลอด 24 ชั่วโมง วัดอัตราการเต้นของหัวใจ และรองรับโหมดออกกำลังกายมากกว่า 50 โหมด",
    colors: ["#000000", "#EF4444", "#10B981"]
  },
  {
    id: 3,
    name: "ลำโพงบลูทูธพกพา Mini Bass",
    category: "เครื่องเสียง",
    price: 890,
    originalPrice: 1290,
    rating: 4.6,
    reviews: 76,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80",
    description: "เบสหนักแน่น ขนาดเล็กพกพาสะดวก พร้อมมาตรฐานกันน้ำ IPX7",
    colors: ["#1E40AF", "#DC2626"]
  }
];

export default function AppPrototype() {
  const [activeScreen, setActiveScreen] = useState<number>(1);
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);
  const [cartCount, setCartCount] = useState<number>(1);
  const [viewMode, setViewMode] = useState<"grid" | "single">("grid");

  const handleScreenSwitch = (screenNum: number) => {
    setActiveScreen(screenNum);
    if (viewMode === "grid") {
      const target = document.getElementById(`screen-container-${screenNum}`);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-4 md:p-8 font-sans">
      {/* Top Header & Controls */}
      <header className="max-w-7xl mx-auto mb-6 flex flex-col sm:flex-row justify-between items-center gap-4 bg-slate-800/80 p-4 rounded-2xl border border-slate-700/60 shadow-xl backdrop-blur">
        <div>
          <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-amber-400">
            Next.js App Prototype
          </h1>
          <p className="text-xs text-slate-400">ขนาดหน้าจอ 390 x 882px (4 Screens Mobile UX Mockup)</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setViewMode(viewMode === "grid" ? "single" : "grid")}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 transition shadow"
          >
            {viewMode === "grid" ? "แสดงทีละหน้า (Focused View)" : "แสดง 4 หน้าพร้อมกัน (Grid View)"}
          </button>
        </div>
      </header>

      {/* Navigation Switcher for Mobile Prototype */}
      <div className="max-w-7xl mx-auto mb-8 flex flex-wrap justify-center gap-2">
        {[
          { id: 1, label: "1. หน้าแรก (Home)" },
          { id: 2, label: "2. รายละเอียดสินค้า (Product)" },
          { id: 3, label: "3. ตะกร้า & ชำระเงิน (Cart)" },
          { id: 4, label: "4. ชำระเงินสำเร็จ (Success)" },
        ].map((screen) => (
          <button
            key={screen.id}
            onClick={() => handleScreenSwitch(screen.id)}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition ${
              activeScreen === screen.id
                ? "bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            {screen.label}
          </button>
        ))}
      </div>

      {/* Main Screen Container */}
      <div
        className={
          viewMode === "grid"
            ? "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center"
            : "max-w-md mx-auto flex justify-center"
        }
      >
        {/* Screen 1: Home / Discovery */}
        {(viewMode === "grid" || activeScreen === 1) && (
          <div id="screen-container-1" className="scroll-mt-6">
            <ScreenFrame title="1. หน้าแรก (Home)">
              <ScreenHome 
                onSelectProduct={(p) => {
                  setSelectedProduct(p);
                  handleScreenSwitch(2);
                }}
              />
            </ScreenFrame>
          </div>
        )}

        {/* Screen 2: Product Detail */}
        {(viewMode === "grid" || activeScreen === 2) && (
          <div id="screen-container-2" className="scroll-mt-6">
            <ScreenFrame title="2. รายละเอียดสินค้า (Detail)">
              <ScreenDetail 
                product={selectedProduct} 
                onAddToCart={() => {
                  setCartCount(prev => prev + 1);
                  handleScreenSwitch(3);
                }} 
              />
            </ScreenFrame>
          </div>
        )}

        {/* Screen 3: Cart & Checkout */}
        {(viewMode === "grid" || activeScreen === 3) && (
          <div id="screen-container-3" className="scroll-mt-6">
            <ScreenFrame title="3. ตะกร้า & ชำระเงิน (Cart)">
              <ScreenCart 
                product={selectedProduct} 
                count={cartCount}
                setCount={setCartCount}
                onCheckout={() => handleScreenSwitch(4)}
              />
            </ScreenFrame>
          </div>
        )}

        {/* Screen 4: Order Success */}
        {(viewMode === "grid" || activeScreen === 4) && (
          <div id="screen-container-4" className="scroll-mt-6">
            <ScreenFrame title="4. สั่งซื้อสำเร็จ (Success)">
              <ScreenSuccess onBackHome={() => handleScreenSwitch(1)} />
            </ScreenFrame>
          </div>
        )}
      </div>
    </div>
  );
}

// Phone Shell Component (390 x 882 px)
function ScreenFrame({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center">
      <span className="mb-2 text-xs font-semibold text-slate-400 tracking-wider">{title}</span>
      <div 
        className="w-[390px] h-[882px] bg-white text-slate-900 rounded-[48px] shadow-2xl border-[10px] border-slate-800 relative overflow-hidden flex flex-col select-none"
      >
        {/* Top Notch / Dynamic Island Header */}
        <div className="w-full bg-slate-900 text-white px-6 pt-3 pb-2 flex justify-between items-center z-50">
          <span className="text-xs font-semibold tracking-tight">09:41</span>
          <div className="w-24 h-4 bg-black rounded-full flex items-center justify-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-slate-800"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-indigo-900/40 border border-indigo-500/40"></div>
          </div>
          <div className="flex items-center gap-1 text-[10px] font-bold">
            <span>5G</span>
            <div className="w-4 h-2 border border-white rounded-sm p-[0.5px]">
              <div className="w-full h-full bg-white"></div>
            </div>
          </div>
        </div>

        {/* Dynamic Screen Content Body */}
        <div className="flex-1 overflow-y-auto bg-slate-50 flex flex-col relative">
          {children}
        </div>

        {/* Home Bottom Indicator Bar */}
        <div className="w-full h-6 bg-slate-50 flex justify-center items-center shrink-0">
          <div className="w-32 h-1 bg-slate-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

// SCREEN 1: HOME
function ScreenHome({ onSelectProduct }: { onSelectProduct: (p: typeof PRODUCTS[0]) => void }) {
  return (
    <div className="flex-1 flex flex-col">
      <div className="p-4 bg-white border-b border-slate-100 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" 
            alt="Profile" 
            className="w-10 h-10 rounded-full object-cover border-2 border-indigo-600" 
          />
          <div>
            <p className="text-[10px] text-slate-400 font-medium">ยินดีต้อนรับกลับ</p>
            <p className="text-xs font-bold text-slate-800">คุณสมชาย ใจดี</p>
          </div>
        </div>
        <div className="relative">
          <Bell className="w-6 h-6 text-slate-600" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-rose-500 rounded-full"></span>
        </div>
      </div>

      <div className="p-4 space-y-4 flex-1">
        <div className="flex items-center gap-2">
          <div className="flex-1 flex items-center gap-2 bg-slate-100 px-3 py-2.5 rounded-xl border border-slate-200">
            <Search className="w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="ค้นหาสินค้าไอที หูฟัง สมาร์ทวอทช์..." 
              className="bg-transparent text-xs w-full outline-none text-slate-700" 
              readOnly 
            />
          </div>
          <button className="p-2.5 bg-indigo-600 text-white rounded-xl">
            <Sliders className="w-4 h-4" />
          </button>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-5">
          <span className="bg-amber-400 text-slate-900 text-[10px] font-extrabold px-2 py-0.5 rounded-full inline-block mb-2">
            SPECIAL OFFER
          </span>
          <h2 className="text-lg font-bold leading-tight">โปรโมชันพิเศษลดสูงสุด 50%</h2>
          <p className="text-[11px] text-indigo-100 mt-1">สินค้าอุปกรณ์ไอทีและแกดเจ็ตยอดนิยมประจำเดือน</p>
          <button className="mt-3 px-4 py-1.5 bg-white text-indigo-700 rounded-lg text-xs font-bold shadow">
            ช้อปเลย
          </button>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xs font-bold text-slate-800">หมวดหมู่สินค้า</h3>
            <span className="text-[11px] text-indigo-600 font-semibold cursor-pointer">ดูทั้งหมด</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[
              { label: "หูฟัง", icon: "🎧" },
              { label: "นาฬิกา", icon: "⌚" },
              { label: "เครื่องเสียง", icon: "🔊" },
              { label: "แกดเจ็ต", icon: "📱" },
            ].map((cat, idx) => (
              <div key={idx} className="bg-white border border-slate-100 p-2.5 rounded-xl flex flex-col items-center gap-1 shadow-sm">
                <span className="text-xl">{cat.icon}</span>
                <span className="text-[10px] font-medium text-slate-600">{cat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold text-slate-800 mb-3">สินค้ายอดนิยม</h3>
          <div className="space-y-3">
            {PRODUCTS.map((product) => (
              <div 
                key={product.id}
                onClick={() => onSelectProduct(product)}
                className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm flex gap-3 cursor-pointer hover:border-indigo-200 transition"
              >
                <img src={product.image} alt={product.name} className="w-20 h-20 rounded-xl object-cover" />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
                      {product.category}
                    </span>
                    <h4 className="text-xs font-bold text-slate-800 mt-1 line-clamp-1">{product.name}</h4>
                    <div className="flex items-center gap-1 mt-0.5">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span className="text-[10px] font-bold text-slate-700">{product.rating}</span>
                      <span className="text-[9px] text-slate-400">({product.reviews})</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-xs font-extrabold text-indigo-600">฿{product.price.toLocaleString()}</span>
                      <span className="text-[10px] text-slate-400 line-through ml-1.5">฿{product.originalPrice.toLocaleString()}</span>
                    </div>
                    <span className="text-[10px] bg-indigo-600 text-white px-2 py-1 rounded-lg font-bold">เลือก</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white border-t border-slate-100 p-3 flex justify-around items-center">
        <div className="flex flex-col items-center text-indigo-600">
          <Home className="w-5 h-5" />
          <span className="text-[9px] font-bold mt-0.5">หน้าแรก</span>
        </div>
        <div className="flex flex-col items-center text-slate-400">
          <Grid className="w-5 h-5" />
          <span className="text-[9px] font-medium mt-0.5">หมวดหมู่</span>
        </div>
        <div className="flex flex-col items-center text-slate-400">
          <ShoppingCart className="w-5 h-5" />
          <span className="text-[9px] font-medium mt-0.5">ตะกร้า</span>
        </div>
        <div className="flex flex-col items-center text-slate-400">
          <User className="w-5 h-5" />
          <span className="text-[9px] font-medium mt-0.5">บัญชี</span>
        </div>
      </div>
    </div>
  );
}

// SCREEN 2: PRODUCT DETAIL
function ScreenDetail({ product, onAddToCart }: { product: typeof PRODUCTS[0]; onAddToCart: () => void }) {
  return (
    <div className="flex-1 flex flex-col">
      <div className="p-4 bg-white flex items-center justify-between border-b border-slate-100">
        <button className="p-1.5 bg-slate-100 rounded-full text-slate-600">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <span className="text-xs font-bold text-slate-700">รายละเอียดสินค้า</span>
        <button className="p-1.5 bg-slate-100 rounded-full text-rose-500">
          <Heart className="w-4 h-4 fill-rose-500" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="relative rounded-2xl overflow-hidden shadow-md h-56 bg-slate-100">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          <span className="absolute top-3 left-3 bg-amber-400 text-slate-900 text-[10px] font-extrabold px-2 py-0.5 rounded-full">
            ลดราคา 40%
          </span>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-100 space-y-2">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-[10px] font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
                {product.category}
              </span>
              <h2 className="text-sm font-bold text-slate-900 mt-1">{product.name}</h2>
            </div>
            <div className="text-right">
              <p className="text-base font-extrabold text-indigo-600">฿{product.price.toLocaleString()}</p>
              <p className="text-xs text-slate-400 line-through">฿{product.originalPrice.toLocaleString()}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-2 border-t border-slate-100 text-xs">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="font-bold">{product.rating}</span>
            </div>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500">{product.reviews} รีวิวจากผู้ใช้จริง</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-100">
          <h3 className="text-xs font-bold text-slate-800 mb-2">เลือกตัวเลือกสี</h3>
          <div className="flex gap-3">
            {product.colors.map((c, i) => (
              <div 
                key={i} 
                style={{ backgroundColor: c }} 
                className={`w-7 h-7 rounded-full cursor-pointer border-2 ${i === 0 ? "border-indigo-600 ring-2 ring-indigo-200" : "border-white shadow"}`}
              />
            ))}
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-100 space-y-2">
          <h3 className="text-xs font-bold text-slate-800">รายละเอียดและคุณสมบัติ</h3>
          <p className="text-xs text-slate-600 leading-relaxed">{product.description}</p>
          <div className="pt-2 space-y-1 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <Truck className="w-3.5 h-3.5 text-indigo-600" />
              <span>จัดส่งฟรีทั่วประเทศ เมื่อซื้อครบ 500 บาท</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>รับประกันสินค้าศูนย์ไทย 1 ปีเต็ม</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-white border-t border-slate-100 flex gap-3">
        <button className="p-3 border border-indigo-600 text-indigo-600 rounded-xl font-bold">
          <ShoppingCart className="w-5 h-5" />
        </button>
        <button 
          onClick={onAddToCart}
          className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl text-xs shadow-lg shadow-indigo-500/20"
        >
          ซื้อทันที
        </button>
      </div>
    </div>
  );
}

// SCREEN 3: CART & CHECKOUT
function ScreenCart({ product, count, setCount, onCheckout }: { product: typeof PRODUCTS[0]; count: number; setCount: any; onCheckout: () => void }) {
  const subtotal = product.price * count;
  const shipping = 50;
  const discount = 100;
  const total = subtotal + shipping - discount;

  return (
    <div className="flex-1 flex flex-col">
      <div className="p-4 bg-white flex items-center justify-between border-b border-slate-100">
        <button className="p-1.5 bg-slate-100 rounded-full text-slate-600">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <span className="text-xs font-bold text-slate-700">ตะกร้าสินค้า & ชำระเงิน</span>
        <span className="text-xs text-indigo-600 font-semibold">{count} รายการ</span>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm flex gap-3">
          <img src={product.image} alt={product.name} className="w-16 h-16 rounded-xl object-cover" />
          <div className="flex-1 flex flex-col justify-between">
            <div className="flex justify-between">
              <h4 className="text-xs font-bold text-slate-800 line-clamp-1">{product.name}</h4>
            </div>
            <p className="text-xs font-bold text-indigo-600">฿{product.price.toLocaleString()}</p>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setCount(Math.max(1, count - 1))}
                className="w-5 h-5 bg-slate-100 rounded flex items-center justify-center text-xs text-slate-700 font-bold"
              >
                -
              </button>
              <span className="text-xs font-bold text-slate-800">{count}</span>
              <button 
                onClick={() => setCount(count + 1)}
                className="w-5 h-5 bg-slate-100 rounded flex items-center justify-center text-xs text-slate-700 font-bold"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white p-3.5 rounded-2xl border border-slate-100 space-y-1.5">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-slate-800">ที่อยู่ในการจัดส่ง</span>
            <span className="text-[10px] text-indigo-600 font-semibold">เปลี่ยน</span>
          </div>
          <p className="text-xs text-slate-700 font-medium">คุณสมชาย ใจดี (+66 81 234 5678)</p>
          <p className="text-[11px] text-slate-500">99/123 ถนนสุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพมหานคร 10110</p>
        </div>

        <div className="bg-white p-3.5 rounded-2xl border border-slate-100 space-y-2">
          <span className="text-xs font-bold text-slate-800">วิธีการชำระเงิน</span>
          <div className="flex items-center justify-between p-2.5 bg-slate-50 border border-slate-200 rounded-xl">
            <div className="flex items-center gap-2.5">
              <CreditCard className="w-5 h-5 text-indigo-600" />
              <div>
                <p className="text-xs font-bold text-slate-800">บัตรเครดิต / เดบิต</p>
                <p className="text-[10px] text-slate-400">VISA •••• 4242</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </div>
        </div>

        <div className="bg-white p-3.5 rounded-2xl border border-slate-100 space-y-2">
          <h4 className="text-xs font-bold text-slate-800 mb-1">สรุปยอดชำระเงิน</h4>
          <div className="flex justify-between text-xs text-slate-600">
            <span>รวมราคาสินค้า</span>
            <span>฿{subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-xs text-slate-600">
            <span>ค่าจัดส่ง</span>
            <span>฿{shipping}</span>
          </div>
          <div className="flex justify-between text-xs text-emerald-600">
            <span>ส่วนลดคูปอง</span>
            <span>-฿{discount}</span>
          </div>
          <div className="pt-2 border-t border-slate-100 flex justify-between text-sm font-bold text-slate-900">
            <span>ยอดชำระสุทธิ</span>
            <span className="text-indigo-600">฿{total.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div className="p-4 bg-white border-t border-slate-100">
        <button 
          onClick={onCheckout}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 rounded-xl text-xs shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2"
        >
          <span>ยืนยันชำระเงิน ฿{total.toLocaleString()}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

// SCREEN 4: SUCCESS
function ScreenSuccess({ onBackHome }: { onBackHome: () => void }) {
  return (
    <div className="flex-1 flex flex-col justify-between p-6 bg-white text-center">
      <div className="pt-8 flex flex-col items-center">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-4 text-emerald-600">
          <CheckCircle className="w-12 h-12" />
        </div>
        <h2 className="text-lg font-bold text-slate-900">สั่งซื้อสำเร็จ!</h2>
        <p className="text-xs text-slate-500 mt-1">หมายเลขคำสั่งซื้อ #ORD-2026-8892</p>

        <div className="w-full bg-slate-50 rounded-2xl p-4 border border-slate-100 mt-6 space-y-3 text-left">
          <div className="flex justify-between items-center text-xs pb-2 border-b border-slate-200">
            <span className="text-slate-500">สถานะ</span>
            <span className="font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">กำลังเตรียมจัดส่ง</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-500">คาดว่าจะได้รับ</span>
            <span className="font-bold text-slate-800">14 พ.ย. 2026</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-500">ช่องทางชำระ</span>
            <span className="font-bold text-slate-800">Visa ending in 4242</span>
          </div>
        </div>

        <div className="w-full mt-6 text-left space-y-3">
          <h4 className="text-xs font-bold text-slate-800">ติดตามสถานะ</h4>
          <div className="space-y-3 pl-2 border-l-2 border-indigo-600">
            <div className="relative pl-4">
              <div className="absolute -left-[13px] top-0 w-3.5 h-3.5 rounded-full bg-indigo-600 ring-4 ring-indigo-100"></div>
              <p className="text-xs font-bold text-slate-800">ยืนยันคำสั่งซื้อเรียบร้อย</p>
              <p className="text-[10px] text-slate-400">11 พ.ย. 2026 - 11:30 น.</p>
            </div>
            <div className="relative pl-4">
              <div className="absolute -left-[13px] top-0 w-3.5 h-3.5 rounded-full bg-slate-300"></div>
              <p className="text-xs font-semibold text-slate-500">กำลังจัดเตรียมสินค้า</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2 pb-4">
        <button 
          onClick={onBackHome}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 rounded-xl text-xs shadow-lg shadow-indigo-500/20"
        >
          กลับสู่หน้าแรก
        </button>
      </div>
    </div>
  );
}
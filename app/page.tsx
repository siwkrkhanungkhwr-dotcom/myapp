"use client";

import React, { useState } from "react";
import {
Search,
Bell,
ChevronDown,
SlidersHorizontal,
Headphones,
Watch,
Speaker,
Laptop,
Star,
Home,
Compass,
ShoppingBag,
User,
ArrowLeft,
Share2,
Heart,
Check,
Bluetooth,
BatteryCharging,
ShieldCheck,
Truck,
Trash2,
Ticket,
CheckCircle2,
ArrowRight,
Wifi,
Battery,
Grid,
Smartphone,
Info,
} from "lucide-react";

export default function AppPrototypePage() {
const [activeViewMode, setActiveViewMode] = useState<"grid" | "single">("grid");
const [activeSingleScreen, setActiveSingleScreen] = useState(1);
const [showAnnotations, setShowAnnotations] = useState(true);
const [zoomLevel, setZoomLevel] = useState(1);

const navigateTo = (screenNum: number) => {
if (activeViewMode === "single") {
setActiveSingleScreen(screenNum);
} else {
const target = document.getElementById(screen-container-${screenNum});
if (target) {
target.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
}
}
};

const handleZoom = (delta: number) => {
setZoomLevel((prev) => Math.min(Math.max(0.5, prev + delta), 1.4));
};

return (


    <div className="flex items-center space-x-3 mt-3 sm:mt-0">
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-1 flex items-center text-xs">
        <button
          onClick={() => setActiveViewMode("grid")}
          className={`px-3 py-1.5 rounded-lg font-medium transition flex items-center gap-1.5 ${
            activeViewMode === "grid"
              ? "bg-indigo-600 text-white shadow-sm"
              : "text-slate-400 hover:text-white"
          }`}
        >
          <Grid className="w-3.5 h-3.5" /> แสดงครบ 4 หน้าจอ
        </button>
        <button
          onClick={() => setActiveViewMode("single")}
          className={`px-3 py-1.5 rounded-lg font-medium transition flex items-center gap-1.5 ${
            activeViewMode === "single"
              ? "bg-indigo-600 text-white shadow-sm"
              : "text-slate-400 hover:text-white"
          }`}
        >
          <Smartphone className="w-3.5 h-3.5" /> ดูทีละหน้าจอ
        </button>
      </div>

      <button
        onClick={() => setShowAnnotations(!showAnnotations)}
        className="px-3 py-1.5 bg-slate-800 border border-slate-700 hover:bg-slate-700 text-slate-200 text-xs rounded-xl font-medium flex items-center gap-1.5 transition"
      >
        <Info className="w-3.5 h-3.5 text-indigo-400" />
        <span>{showAnnotations ? "ซ่อน UX Annotations" : "แสดง UX Annotations"}</span>
      </button>

      <div className="bg-slate-800 border border-slate-700 rounded-xl flex items-center text-xs overflow-hidden">
        <button
          onClick={() => handleZoom(-0.1)}
          className="px-2.5 py-1.5 text-slate-300 hover:bg-slate-700 border-r border-slate-700"
        >
          -
        </button>
        <span className="px-2 text-slate-300 font-mono">
          {Math.round(zoomLevel * 100)}%
        </span>
        <button
          onClick={() => handleZoom(0.1)}
          className="px-2.5 py-1.5 text-slate-300 hover:bg-slate-700 border-l border-slate-700"
        >
          +
        </button>
      </div>
    </div>
  </header>

  {/* Single Screen Tabs Navigation */}
  {activeViewMode === "single" && (
    <div className="bg-slate-900 border-b border-slate-800 px-6 py-2.5 flex justify-center gap-2 text-xs">
      {[
        { id: 1, label: "1. หน้าแรก (Home)" },
        { id: 2, label: "2. รายละเอียดสินค้า" },
        { id: 3, label: "3. ตะกร้า & ชำระเงิน" },
        { id: 4, label: "4. สั่งซื้อสำเร็จ" },
      ].map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveSingleScreen(tab.id)}
          className={`px-4 py-1.5 rounded-full font-medium transition ${
            activeSingleScreen === tab.id
              ? "bg-indigo-600 text-white shadow"
              : "bg-slate-800 text-slate-400 hover:text-white"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )}

  {/* Main Viewport Container */}
  <main className="flex-1 overflow-auto p-8 flex justify-center items-start bg-slate-950">
    <div
      style={{ transform: `scale(${zoomLevel})` }}
      className="transition-transform origin-top duration-200"
    >
      <div className="flex flex-row gap-8 flex-wrap justify-center items-start">
        {/* SCREEN 1: HOME */}
        {(activeViewMode === "grid" || activeSingleScreen === 1) && (
          <div id="screen-container-1" className="flex flex-col items-center">
            <div className="text-xs text-slate-300 font-medium mb-3 flex items-center gap-2">
              <span className="bg-indigo-600 text-white w-5 h-5 rounded-full inline-flex items-center justify-center font-bold text-[11px]">
                1
              </span>
              <span>หน้า 1: หน้าแรก (Home / Discovery)</span>
            </div>

            <div className="w-[390px] h-[882px] min-w-[390px] min-h-[882px] bg-slate-50 border-[10px] border-slate-800 rounded-[46px] shadow-2xl relative overflow-hidden flex flex-col text-slate-900">
              {/* Dynamic Notch & Status */}
              <div className="w-full h-8 bg-slate-950 flex justify-between items-center px-6 pt-1 shrink-0 select-none z-30">
                <span className="text-[11px] font-semibold text-white font-mono">09:41</span>
                <div className="w-20 h-4 bg-black rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-slate-800 rounded-full mr-2"></div>
                  <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Wifi className="w-3 h-3 text-white" />
                  <Battery className="w-3.5 h-3.5 text-white" />
                </div>
              </div>

              {/* Header */}
              <div className="p-4 border-b border-slate-100 bg-white/90 backdrop-blur-md sticky top-0 z-20 shrink-0">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-indigo-500 shadow-sm relative shrink-0">
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                        alt="Avatar"
                        className="w-full h-full object-cover"
                      />
                      {showAnnotations && (
                        <div className="absolute -top-1 -left-1 bg-red-600 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white z-40">
                          1
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">
                        จัดส่งที่
                      </div>
                      <div className="text-xs font-bold text-slate-800 flex items-center gap-0.5">
                        คอนโดสุขุมวิท 24, กทม. <ChevronDown className="w-3.5 h-3.5 text-indigo-600" />
                      </div>
                    </div>
                  </div>
                  <button className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center relative hover:bg-slate-200 transition">
                    <Bell className="w-4 h-4 text-slate-700" />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-white"></span>
                  </button>
                </div>

                {/* Search */}
                <div className="relative">
                  <div className="w-full h-10 bg-slate-100 border border-slate-200 rounded-xl flex items-center px-3.5 text-slate-500 text-xs gap-2">
                    <Search className="w-4 h-4 text-indigo-500" />
                    <span className="text-slate-400">ค้นหาหูฟัง, สเปกเตอร์, Gadget...</span>
                    <div className="ml-auto border-l border-slate-200 pl-2 text-slate-600">
                      <SlidersHorizontal className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  {showAnnotations && (
                    <div className="absolute -top-2 -right-2 bg-red-600 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white z-40">
                      2
                    </div>
                  )}
                </div>
              </div>

              {/* Scroll Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-5 bg-slate-50">
                {/* Hero Banner */}
                <div className="relative">
                  <div className="w-full h-40 rounded-2xl overflow-hidden relative shadow-md">
                    <img
                      src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80"
                      className="w-full h-full object-cover"
                      alt="Banner"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/40 to-transparent p-4 flex flex-col justify-end">
                      <span className="bg-amber-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-md w-max mb-1">
                        โปรเด็ดประจำสัปดาห์
                      </span>
                      <h3 className="text-white text-sm font-bold">เปิดตัว SoundPro Max Pro</h3>
                      <p className="text-slate-200 text-[11px]">ลดสูงสุด 30% พร้อมส่งฟรีทั่วไทย</p>
                    </div>
                  </div>
                  {showAnnotations && (
                    <div className="absolute top-2 right-2 bg-red-600 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white z-40">
                      3
                    </div>
                  )}
                </div>

                {/* Categories */}
                <div>
                  <div className="flex justify-between items-center mb-2.5">
                    <span class="text-xs font-bold text-slate-900">หมวดหมู่ยอดนิยม</span>
                    <span className="text-[11px] text-indigo-600 font-semibold cursor-pointer">ดูทั้งหมด</span>
                  </div>
                  <div className="grid grid-cols-4 gap-3">
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-1">
                        <Headphones className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] text-slate-700 font-medium">หูฟังไร้สาย</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 mb-1">
                        <Watch className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] text-slate-700 font-medium">สมาร์ทวอทช์</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-1">
                        <Speaker className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] text-slate-700 font-medium">ลำโพงบลูทูธ</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 mb-1">
                        <Laptop className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] text-slate-700 font-medium">อุปกรณ์เสริม</span>
                    </div>
                  </div>
                </div>

                {/* Flash Sale Grid */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-900">สินค้าขายดี Flash Sale</span>
                      <span className="bg-rose-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded font-mono">
                        02:45:12
                      </span>
                    </div>
                    <span className="text-[11px] text-indigo-600 font-semibold cursor-pointer">ดูทั้งหมด</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div
                      onClick={() => navigateTo(2)}
                      className="bg-white border border-slate-200/80 rounded-2xl p-2.5 shadow-sm hover:border-indigo-500 transition cursor-pointer relative"
                    >
                      <div className="w-full h-32 rounded-xl overflow-hidden mb-2 relative bg-slate-100">
                        <img
                          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop&q=80"
                          className="w-full h-full object-cover"
                          alt="Product"
                        />
                        <span className="absolute top-2 left-2 bg-rose-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow">
                          -20%
                        </span>
                      </div>
                      <div className="text-xs font-bold text-slate-900 truncate">Studio Wireless Headphones</div>
                      <div className="text-[10px] text-slate-400 mb-1">ตัดเสียงรบกวน ANC</div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-indigo-600">฿6,990</span>
                        <div className="flex items-center text-[10px] text-amber-500 font-semibold">
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400 mr-0.5" /> 4.8
                        </div>
                      </div>
                      {showAnnotations && (
                        <div className="absolute -bottom-1 -right-1 bg-red-600 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white z-40">
                          4
                        </div>
                      )}
                    </div>

                    <div className="bg-white border border-slate-200/80 rounded-2xl p-2.5 shadow-sm">
                      <div className="w-full h-32 rounded-xl overflow-hidden mb-2 relative bg-slate-100">
                        <img
                          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&auto=format&fit=crop&q=80"
                          className="w-full h-full object-cover"
                          alt="Product 2"
                        />
                        <span className="absolute top-2 left-2 bg-indigo-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow">
                          NEW
                        </span>
                      </div>
                      <div className="text-xs font-bold text-slate-900 truncate">Minimalist Smart Watch V2</div>
                      <div className="text-[10px] text-slate-400 mb-1">วัดชีพจร & GPS</div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-indigo-600">฿8,490</span>
                        <div className="flex items-center text-[10px] text-amber-500 font-semibold">
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400 mr-0.5" /> 4.9
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Bar */}
              <div className="h-16 border-t border-slate-200 bg-white px-6 flex justify-between items-center shrink-0">
                <button className="flex flex-col items-center text-indigo-600 font-bold">
                  <Home className="w-5 h-5" />
                  <span className="text-[9px] mt-1">หน้าแรก</span>
                </button>
                <button className="flex flex-col items-center text-slate-400 hover:text-slate-800">
                  <Compass className="w-5 h-5" />
                  <span className="text-[9px] mt-1">ค้นหา</span>
                </button>
                <button
                  onClick={() => navigateTo(3)}
                  className="flex flex-col items-center text-slate-400 hover:text-slate-800 relative"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span className="text-[9px] mt-1">ตะกร้า</span>
                  <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-white">
                    2
                  </span>
                </button>
                <button className="flex flex-col items-center text-slate-400 hover:text-slate-800">
                  <User className="w-5 h-5" />
                  <span className="text-[9px] mt-1">โปรไฟล์</span>
                </button>
              </div>

              {/* Home Indicator */}
              <div className="w-full h-4 bg-white flex justify-center items-center shrink-0">
                <div className="w-32 h-1 bg-slate-300 rounded-full"></div>
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 2: DETAILS */}
        {(activeViewMode === "grid" || activeSingleScreen === 2) && (
          <div id="screen-container-2" className="flex flex-col items-center">
            <div className="text-xs text-slate-300 font-medium mb-3 flex items-center gap-2">
              <span className="bg-indigo-600 text-white w-5 h-5 rounded-full inline-flex items-center justify-center font-bold text-[11px]">
                2
              </span>
              <span>หน้า 2: หน้ารายละเอียดสินค้า (Product Details)</span>
            </div>

            <div className="w-[390px] h-[882px] min-w-[390px] min-h-[882px] bg-slate-50 border-[10px] border-slate-800 rounded-[46px] shadow-2xl relative overflow-hidden flex flex-col text-slate-900">
              <div className="w-full h-8 bg-slate-950 flex justify-between items-center px-6 pt-1 shrink-0 select-none z-30">
                <span className="text-[11px] font-semibold text-white font-mono">09:42</span>
                <div className="w-20 h-4 bg-black rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-slate-800 rounded-full mr-2"></div>
                  <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Wifi className="w-3 h-3 text-white" />
                  <Battery className="w-3.5 h-3.5 text-white" />
                </div>
              </div>

              {/* Header */}
              <div className="p-3 border-b border-slate-100 bg-white/90 backdrop-blur-md flex justify-between items-center sticky top-0 z-20 shrink-0">
                <button
                  onClick={() => navigateTo(1)}
                  className="w-9 h-9 border border-slate-200 rounded-full flex items-center justify-center bg-white shadow-sm"
                >
                  <ArrowLeft className="w-4 h-4 text-slate-700" />
                </button>
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  รายละเอียดสินค้า
                </span>
                <div className="flex items-center space-x-2">
                  <button className="w-9 h-9 border border-slate-200 rounded-full flex items-center justify-center bg-white shadow-sm">
                    <Share2 className="w-4 h-4 text-slate-700" />
                  </button>
                  <button className="w-9 h-9 border border-slate-200 rounded-full flex items-center justify-center bg-white shadow-sm">
                    <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
                <div className="relative">
                  <div className="w-full h-64 rounded-2xl overflow-hidden relative shadow-md bg-white">
                    <img
                      src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80"
                      className="w-full h-full object-cover"
                      alt="Main Product"
                    />
                    <span className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                      1/4
                    </span>
                  </div>
                  {showAnnotations && (
                    <div className="absolute top-3 left-3 bg-red-600 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white z-40">
                      1
                    </div>
                  )}
                </div>

                <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-sm">
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <h2 className="text-sm font-bold text-slate-900">Studio Wireless Headphones Pro</h2>
                      <p className="text-[11px] text-slate-500 mt-0.5">รุ่น ANC-900X • Matte Black Edition</p>
                    </div>
                    <span className="text-lg font-extrabold text-indigo-600 shrink-0">฿6,990</span>
                  </div>
                  <div className="flex items-center space-x-3 mt-3 pt-3 border-t border-slate-100 text-xs">
                    <div className="flex items-center text-amber-500 font-semibold">
                      <Star className="w-4 h-4 fill-amber-400 mr-1" />
                      <span>4.8</span>
                      <span className="text-slate-400 font-normal ml-1">(124 รีวิว)</span>
                    </div>
                    <span className="text-slate-300">•</span>
                    <span className="text-emerald-600 font-medium bg-emerald-50 px-2 py-0.5 rounded-md">
                      มีสินค้า (เหลือ 18 ชิ้น)
                    </span>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-sm">
                  <label className="text-xs font-bold text-slate-800 block mb-2">เลือกสีสินค้า (Color)</label>
                  <div className="flex space-x-3">
                    <button className="w-9 h-9 rounded-full bg-slate-900 ring-2 ring-indigo-600 ring-offset-2 flex items-center justify-center shadow-sm">
                      <Check className="w-4 h-4 text-white" />
                    </button>
                    <button className="w-9 h-9 rounded-full bg-slate-400 shadow-sm"></button>
                    <button className="w-9 h-9 rounded-full bg-amber-100 border border-amber-300 shadow-sm"></button>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-sm relative">
                  <span className="text-xs font-bold text-slate-800 block mb-1.5">รายละเอียดสินค้า</span>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    หูฟังไร้สายระดับพรีเมียมพร้อมเทคโนโลยี Active Noise Cancelling ป้องกันเสียงรบกวนภายนอกได้สูงสุด 98% ให้มิติเสียงคมชัด เบสแน่น
                  </p>
                  {showAnnotations && (
                    <div className="absolute -top-2 -right-2 bg-red-600 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white z-40">
                      2
                    </div>
                  )}
                </div>

                <div className="bg-indigo-50/60 border border-indigo-100 rounded-2xl p-3.5 space-y-2">
                  <span className="text-xs font-bold text-indigo-950 block">จุดเด่นคุณสมบัติ</span>
                  <div className="grid grid-cols-2 gap-2.5 text-[11px] text-indigo-900">
                    <div className="flex items-center gap-2">
                      <Bluetooth className="w-4 h-4 text-indigo-600" />
                      <span>Bluetooth 5.3</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BatteryCharging className="w-4 h-4 text-indigo-600" />
                      <span>แบตเตอรี่ 40 ชั่วโมง</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-indigo-600" />
                      <span>ประกันศูนย์ 2 ปี</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Truck className="w-4 h-4 text-indigo-600" />
                      <span>จัดส่งฟรีด่วนพิเศษ</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-4 border-t border-slate-200 bg-white flex items-center gap-3 shrink-0 relative shadow-xl">
                <button
                  onClick={() => navigateTo(3)}
                  className="w-12 h-12 border border-slate-200 rounded-xl flex items-center justify-center bg-slate-50 text-slate-700"
                >
                  <ShoppingBag className="w-5 h-5" />
                </button>
                <button
                  onClick={() => navigateTo(3)}
                  className="flex-1 h-12 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-md"
                >
                  <span>หยิบใส่ตะกร้า</span>
                  <span>•</span>
                  <span>฿6,990</span>
                </button>
                {showAnnotations && (
                  <div className="absolute -top-2 right-4 bg-red-600 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white z-40">
                    3
                  </div>
                )}
              </div>

              <div className="w-full h-4 bg-white flex justify-center items-center shrink-0">
                <div className="w-32 h-1 bg-slate-300 rounded-full"></div>
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 3: CART & CHECKOUT */}
        {(activeViewMode === "grid" || activeSingleScreen === 3) && (
          <div id="screen-container-3" className="flex flex-col items-center">
            <div className="text-xs text-slate-300 font-medium mb-3 flex items-center gap-2">
              <span className="bg-indigo-600 text-white w-5 h-5 rounded-full inline-flex items-center justify-center font-bold text-[11px]">
                3
              </span>
              <span>หน้า 3: ตะกร้า & ชำระเงิน (Cart & Checkout)</span>
            </div>

            <div className="w-[390px] h-[882px] min-w-[390px] min-h-[882px] bg-slate-50 border-[10px] border-slate-800 rounded-[46px] shadow-2xl relative overflow-hidden flex flex-col text-slate-900">
              <div className="w-full h-8 bg-slate-950 flex justify-between items-center px-6 pt-1 shrink-0 select-none z-30">
                <span className="text-[11px] font-semibold text-white font-mono">09:43</span>
                <div className="w-20 h-4 bg-black rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-slate-800 rounded-full mr-2"></div>
                  <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Wifi className="w-3 h-3 text-white" />
                  <Battery className="w-3.5 h-3.5 text-white" />
                </div>
              </div>

              <div className="p-3 border-b border-slate-100 bg-white/90 backdrop-blur-md flex justify-between items-center sticky top-0 z-20 shrink-0">
                <button
                  onClick={() => navigateTo(2)}
                  className="w-9 h-9 border border-slate-200 rounded-full flex items-center justify-center bg-white shadow-sm"
                >
                  <ArrowLeft className="w-4 h-4 text-slate-700" />
                </button>
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  ตะกร้าสินค้า (2 รายการ)
                </span>
                <button className="text-xs text-rose-500 font-semibold">ลบทั้งหมด</button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
                {/* Item 1 */}
                <div className="bg-white p-3 rounded-2xl border border-slate-200/80 shadow-sm flex gap-3 relative">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-100">
                    <img
                      src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&auto=format&fit=crop&q=80"
                      className="w-full h-full object-cover"
                      alt="Cart item 1"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xs font-bold text-slate-900">Studio Headphones Pro</h4>
                        <p className="text-[10px] text-slate-400">สี: Matte Black</p>
                      </div>
                      <button className="text-slate-400 hover:text-rose-500">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs font-bold text-indigo-600">฿6,990</span>
                      <div className="flex items-center border border-slate-200 rounded-lg h-7 bg-slate-50">
                        <button className="px-2 text-xs font-bold text-slate-500">-</button>
                        <span className="px-2 text-xs font-bold text-slate-800 border-x border-slate-200">1</span>
                        <button className="px-2 text-xs font-bold text-slate-500">+</button>
                      </div>
                    </div>
                  </div>
                  {showAnnotations && (
                    <div className="absolute -top-2 -left-2 bg-red-600 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white z-40">
                      1
                    </div>
                  )}
                </div>

                {/* Promo */}
                <div className="relative">
                  <div className="flex gap-2">
                    <div className="flex-1 bg-white border border-dashed border-indigo-300 rounded-xl px-3 flex items-center text-xs shadow-sm">
                      <Ticket className="w-4 h-4 text-indigo-500 mr-2" />
                      <input
                        type="text"
                        defaultValue="PROMO2026"
                        className="bg-transparent outline-none w-full text-slate-800 font-medium"
                      />
                    </div>
                    <button className="px-4 py-2.5 bg-indigo-50 text-indigo-600 border border-indigo-200 text-xs font-bold rounded-xl">
                      ใช้งาน
                    </button>
                  </div>
                  {showAnnotations && (
                    <div className="absolute -top-2 -right-2 bg-red-600 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white z-40">
                      2
                    </div>
                  )}
                </div>

                {/* Payment Method */}
                <div className="bg-white border border-slate-200/80 rounded-2xl p-3.5 space-y-2.5 shadow-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-900">ช่องทางการชำระเงิน</span>
                    <span className="text-[11px] text-indigo-600 font-semibold cursor-pointer">เปลี่ยน</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-indigo-50/50 rounded-xl border border-indigo-100">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-8 h-5 bg-blue-600 rounded flex items-center justify-center text-white text-[9px] font-bold">
                        VISA
                      </div>
                      <span className="text-xs text-slate-800 font-medium">•••• •••• •••• 4242</span>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                  </div>
                </div>

                {/* Summary */}
                <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 space-y-2 text-xs shadow-sm relative">
                  <div className="flex justify-between text-slate-500">
                    <span>ราคาสินค้าทั้งหมด</span>
                    <span>฿7,880</span>
                  </div>
                  <div className="flex justify-between text-emerald-600">
                    <span>ส่วนลดคูปอง (PROMO2026)</span>
                    <span className="font-semibold">-฿500</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>ค่าจัดส่ง</span>
                    <span className="text-emerald-600 font-medium">ฟรี</span>
                  </div>
                  <hr className="border-slate-100 my-1" />
                  <div className="flex justify-between text-sm font-extrabold text-slate-900 pt-1">
                    <span>ยอดชำระสุทธิ</span>
                    <span className="text-indigo-600">฿7,380</span>
                  </div>
                  {showAnnotations && (
                    <div className="absolute top-2 -right-2 bg-red-600 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white z-40">
                      3
                    </div>
                  )}
                </div>
              </div>

              <div className="p-4 border-t border-slate-200 bg-white shrink-0 shadow-lg">
                <button
                  onClick={() => navigateTo(4)}
                  className="w-full h-12 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-md"
                >
                  <span>ชำระเงิน ฿7,380</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="w-full h-4 bg-white flex justify-center items-center shrink-0">
                <div className="w-32 h-1 bg-slate-300 rounded-full"></div>
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 4: SUCCESS */}
        {(activeViewMode === "grid" || activeSingleScreen === 4) && (
          <div id="screen-container-4" className="flex flex-col items-center">
            <div className="text-xs text-slate-300 font-medium mb-3 flex items-center gap-2">
              <span className="bg-indigo-600 text-white w-5 h-5 rounded-full inline-flex items-center justify-center font-bold text-[11px]">
                4
              </span>
              <span>หน้า 4: สั่งซื้อสำเร็จ (Order Success)</span>
            </div>

            <div className="w-[390px] h-[882px] min-w-[390px] min-h-[882px] bg-slate-50 border-[10px] border-slate-800 rounded-[46px] shadow-2xl relative overflow-hidden flex flex-col text-slate-900">
              <div className="w-full h-8 bg-slate-950 flex justify-between items-center px-6 pt-1 shrink-0 select-none z-30">
                <span className="text-[11px] font-semibold text-white font-mono">09:44</span>
                <div className="w-20 h-4 bg-black rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-slate-800 rounded-full mr-2"></div>
                  <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Wifi className="w-3 h-3 text-white" />
                  <Battery className="w-3.5 h-3.5 text-white" />
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-6 flex flex-col justify-between bg-slate-50 text-center">
                <div className="pt-4 space-y-3">
                  <div className="relative inline-block">
                    <div className="w-20 h-20 rounded-full bg-emerald-100 border-4 border-emerald-500/20 flex items-center justify-center mx-auto text-emerald-600 shadow-inner">
                      <Check className="w-10 h-10 stroke-[3]" />
                    </div>
                    {showAnnotations && (
                      <div className="absolute top-0 right-0 bg-red-600 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white z-40">
                        1
                      </div>
                    )}
                  </div>

                  <div>
                    <h2 className="text-lg font-extrabold text-slate-900">สั่งซื้อสินค้าเรียบร้อยแล้ว!</h2>
                    <p className="text-xs text-slate-500 mt-1">
                      ขอบคุณสำหรับการสั่งซื้อ เราได้ส่งใบเสร็จไปทางอีเมลของคุณแล้ว
                    </p>
                  </div>

                  <div className="inline-block bg-white border border-slate-200 rounded-xl px-3.5 py-1.5 text-xs text-slate-800 font-mono shadow-sm">
                    หมายเลขคำสั่งซื้อ: <span className="font-bold text-indigo-600">#ORD-99824-TH</span>
                  </div>
                </div>

                <div className="bg-white border border-slate-200/80 rounded-2xl p-4 text-left shadow-sm relative">
                  <span className="text-xs font-bold text-slate-900 block mb-3">สถานะการจัดส่งพัสดุ</span>
                  <div className="space-y-4 text-xs relative pl-4 border-l-2 border-indigo-100">
                    <div className="relative">
                      <div className="absolute -left-[21px] top-0.5 w-3.5 h-3.5 rounded-full bg-indigo-600 ring-4 ring-indigo-50"></div>
                      <span className="font-bold text-slate-900 block text-[11px]">ชำระเงินสำเร็จ</span>
                      <span className="text-[10px] text-slate-400">วันนี้, 09:44 น.</span>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[21px] top-0.5 w-3.5 h-3.5 rounded-full bg-amber-500 ring-4 ring-amber-50"></div>
                      <span className="font-bold text-slate-900 block text-[11px]">กำลังเตรียมจัดส่งสินค้า</span>
                      <span className="text-[10px] text-slate-500">คาดว่าแล้วเสร็จ 14:00 น.</span>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[21px] top-0.5 w-3.5 h-3.5 rounded-full bg-slate-200"></div>
                      <span className="font-bold text-slate-400 block text-[11px]">บริษัทขนส่งเข้ารับพัสดุ</span>
                      <span className="text-[10px] text-slate-400">คาดว่าจะได้รับวันพรุ่งนี้</span>
                    </div>
                  </div>
                  {showAnnotations && (
                    <div className="absolute -top-2 -right-2 bg-red-600 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white z-40">
                      2
                    </div>
                  )}
                </div>

                <div className="bg-white border border-slate-200/80 rounded-2xl p-3 text-left text-xs space-y-1 shadow-sm">
                  <div className="flex justify-between text-slate-400 text-[10px]">
                    <span>รายการสินค้า: 2 ชิ้น</span>
                    <span>จ่ายผ่าน VISA •••• 4242</span>
                  </div>
                  <div className="flex justify-between font-bold text-slate-900">
                    <span>ราคารวมทั้งสิ้น:</span>
                    <span className="text-indigo-600">฿7,380</span>
                  </div>
                </div>

                <div className="space-y-2 pt-2 relative">
                  <button
                    onClick={() => navigateTo(1)}
                    className="w-full h-11 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-md"
                  >
                    <Truck className="w-4 h-4" />
                    <span>ติดตามสถานะพัสดุ</span>
                  </button>
                  <button
                    onClick={() => navigateTo(1)}
                    className="w-full h-11 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Home className="w-4 h-4" />
                    <span>กลับสู่หน้าแรก</span>
                  </button>
                  {showAnnotations && (
                    <div className="absolute -top-1 -right-1 bg-red-600 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white z-40">
                      3
                    </div>
                  )}
                </div>
              </div>

              <div className="w-full h-4 bg-white flex justify-center items-center shrink-0">
                <div className="w-32 h-1 bg-slate-300 rounded-full"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  </main>
</div>


);
}
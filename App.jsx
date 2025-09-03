import React, { useState, useMemo } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, Info, Layers, FileText, HelpCircle, Calculator, MessageCircle, Moon, Sun } from 'lucide-react'

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 dark:text-white transition-colors">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-8">{children}</main>
      <Footer />
    </div>
  )
}

function Header() {
  const [dark, setDark] = useState(false)
  function toggleDark() {
    setDark(!dark)
    document.documentElement.classList.toggle('dark')
  }
  const navItem = (to, label, Icon) => (
    <NavLink to={to} end className={({isActive}) =>
      `flex items-center gap-1 px-3 py-1 rounded-lg transition-colors ${isActive ? 'bg-primary text-white' : 'hover:bg-slate-200 dark:hover:bg-slate-700'}`}>
      <Icon size={18} /> <span>{label}</span>
    </NavLink>
  )
  return (
    <header className="sticky top-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur border-b border-slate-200 dark:border-slate-700 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="logo" className="w-10 h-10" />
          <span className="font-bold text-lg">تأمينات تك</span>
        </div>
        <nav className="hidden md:flex gap-2">
          {navItem('/', 'الرئيسية', Home)}
          {navItem('/about', 'عن المشروع', Info)}
          {navItem('/services', 'الخدمات', Layers)}
          {navItem('/articles', 'المقالات', FileText)}
          {navItem('/faq', 'الأسئلة الشائعة', HelpCircle)}
          {navItem('/calculator', 'حاسبة المعاش', Calculator)}
          {navItem('/contact', 'تواصل', MessageCircle)}
        </nav>
        <button onClick={toggleDark} className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700">
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="mt-8 border-t border-slate-200 dark:border-slate-700 text-center py-4 text-sm">
      © {new Date().getFullYear()} تأمينات تك — موقع تجريبي
    </footer>
  )
}

// ---------- الصفحات ----------
function HomePage() {
  return (
    <Layout>
      <motion.div initial={{opacity:0, y:10}} animate={{opacity:1,y:0}} transition={{duration:0.5}}>
        <h1 className="text-2xl font-bold mb-4">مرحبًا بك في تأمينات تك</h1>
        <p className="mb-6 text-slate-600 dark:text-slate-300">منصة توعوية مبسطة عن التأمينات والمعاشات في مصر.</p>
        <div className="grid md:grid-cols-3 gap-4">
          <Card title="حاسبة المعاش التجريبية" text="جرّب تقديرًا تقريبيًا لقيمة المعاش بناءً على مُدخلاتك." link="/calculator" />
          <Card title="شروحات خطوة بخطوة" text="مقالات مُبسطة حول الإجراءات والأوراق المطلوبة." link="/articles" />
          <Card title="الأسئلة الشائعة" text="إجابات سريعة لأكثر الأسئلة تكرارًا." link="/faq" />
        </div>
      </motion.div>
    </Layout>
  )
}

function AboutPage() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">عن المشروع</h1>
      <ul className="list-disc pr-6 space-y-2">
        <li>تقديم محتوى عملي موثوق ومبسّط.</li>
        <li>بناء أدوات مثل الحاسبات والنماذج الذكية.</li>
        <li>دمج الفيديوهات والإنفوجرافيك لشرح الخطوات.</li>
      </ul>
    </Layout>
  )
}

function ServicesPage() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">الخدمات</h1>
      <div className="grid md:grid-cols-2 gap-4">
        <Card title="دليل الإجراءات" text="صفحات خطوة بخطوة لجمع المستندات وتقديم الطلبات." />
        <Card title="نماذج قابلة للتنزيل" text="مستندات بصيغة PDF/Word جاهزة للتعبئة." />
        <Card title="حسابات تقريبية" text="حاسبات تعليمية لتصوّر النتائج المحتملة." />
        <Card title="دعم المجتمع" text="قسم أسئلة وأجوبة وروابط لقنوات التواصل." />
      </div>
    </Layout>
  )
}

function ArticlesPage() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">المقالات</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {[1,2,3,4].map(i => <Card key={i} title={`مقال تجريبي #${i}`} text="فقرة موجزة تلخّص موضوع المقال." />)}
      </div>
    </Layout>
  )
}

function FaqPage() {
  const faqs = [
    {q: "كيف أبدأ باستخدام الموقع؟", a: "تصفّح الأقسام من القائمة العلوية."},
    {q: "هل الحاسبات إلزامية النتائج؟", a: "لا، هي تقديرات تعليمية فقط."},
    {q: "كيف أتواصل للدعم؟", a: "من صفحة التواصل ستجد القنوات."}
  ]
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">الأسئلة الشائعة</h1>
      {faqs.map((f,i) => (
        <div key={i} className="border rounded-lg p-4 mb-3 dark:border-slate-700">
          <div className="font-semibold mb-1">{f.q}</div>
          <div className="text-slate-600 dark:text-slate-300">{f.a}</div>
        </div>
      ))}
    </Layout>
  )
}

function CalculatorPage() {
  const [salary, setSalary] = useState(15000)
  const [years, setYears] = useState(20)
  const estimate = useMemo(() => {
    const accrual = Math.min(years * 0.015, 0.8)
    const gross = Math.round(salary * accrual)
    const net = Math.round(gross * 0.98)
    return { accrual: (accrual*100).toFixed(1), gross, net }
  }, [salary, years])

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">حاسبة المعاش (تجريبية)</h1>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label>متوسط الأجر الشهري: <input type="number" value={salary} onChange={e=>setSalary(Number(e.target.value))} className="border p-1 rounded w-full dark:bg-slate-800" /></label>
          <label>سنوات الاشتراك: <input type="number" value={years} onChange={e=>setYears(Number(e.target.value))} className="border p-1 rounded w-full dark:bg-slate-800" /></label>
        </div>
        <div className="border rounded-lg p-4 dark:border-slate-700">
          <p>نسبة الاستحقاق: {estimate.accrual}%</p>
          <p>المعاش قبل الخصم: {estimate.gross} جنيه</p>
          <p>المعاش بعد الخصم: {estimate.net} جنيه</p>
        </div>
      </div>
    </Layout>
  )
}

function ContactPage() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">تواصل معنا</h1>
      <form className="space-y-2">
        <input type="text" placeholder="اسمك" className="border p-2 rounded w-full dark:bg-slate-800" />
        <input type="email" placeholder="you@example.com" className="border p-2 rounded w-full dark:bg-slate-800" />
        <textarea rows="4" placeholder="رسالتك" className="border p-2 rounded w-full dark:bg-slate-800"></textarea>
        <button type="button" className="px-4 py-2 rounded bg-primary text-white">إرسال (تجريبي)</button>
      </form>
    </Layout>
  )
}

// ---------- مكون بطاقة ----------
function Card({title, text, link}) {
  return (
    <div className="border rounded-lg p-4 shadow-sm dark:border-slate-700">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-slate-600 dark:text-slate-300 mb-2">{text}</p>
      {link && <NavLink to={link} className="inline-block px-3 py-1 bg-primary text-white rounded">المزيد</NavLink>}
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}
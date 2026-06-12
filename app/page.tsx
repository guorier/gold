const categories = [
  { icon: "▦", label: "인테리어", color: "#dfe8ff" },
  { icon: "▰", label: "설비", color: "#fff48a" },
  { icon: "▱", label: "도배", color: "#ffe5b5" },
  { icon: "□", label: "타일", color: "#dcfbf4" },
  { icon: "≋", label: "에어컨", color: "#eef3ff" },
  { icon: "◌", label: "디자인", color: "#fff3c7" },
  { icon: "▥", label: "가구", color: "#ffd7c3" },
  { icon: "▤", label: "샷시", color: "#d9fbff" },
  { icon: "⚡", label: "전기", color: "#fff0a6" },
  { icon: "✦", label: "청소", color: "#e7f2ff" },
];

const popular = [
  { category: "인테리어", title: "실내 인테리어", color: "#cbd7ff", icon: "◉" },
  { category: "설비", title: "배관설비", color: "#f2f78e", icon: "⌁" },
  { category: "가구", title: "부엌", color: "#ffc4a8", icon: "▥" },
  { category: "전기", title: "조명", color: "#d7cdfc", icon: "✺" },
  { category: "샷시", title: "베란다 창문", color: "#cce9ff", icon: "▯" },
];

const heroSlides = [
  {
    eyebrow: "프리랜서 마켓 No.1 금손에서",
    title: "원하는 전문가를 찾아보세요!",
    query: "인테리어",
    tone: "blue",
  },
  {
    eyebrow: "성공이 필요한 순간",
    title: "딱 맞는 전문가를 빠르게 만나보세요",
    query: "상세페이지",
    tone: "yellow",
  },
  {
    eyebrow: "시간과 비용을 아끼는 의뢰",
    title: "기획부터 시공까지 한 번에 비교하세요",
    query: "리모델링",
    tone: "mint",
  },
  {
    eyebrow: "요즘 많이 찾는 생활 서비스",
    title: "청소, 설비, 전기 전문가를 확인하세요",
    query: "배관 수리",
    tone: "dark",
  },
];

const services = [
  {
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=520&q=80",
    title: "브랜드의 시작, 기획부터 디자인까지 제공해 드립니다.",
    rating: "",
    price: "₩ 850,000",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=520&q=80",
    title: "고퀄리티 커피숍 인테리어 전문 깔끔하게 해드립니다.",
    rating: "5.0 | 39명의 평가",
    price: "₩ 30,000",
  },
  {
    image:
      "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=520&q=80",
    title: "24시간 내로 진정성있는 배관설비 수리 해드립니다.",
    rating: "5.0 | 15명의 평가",
    price: "₩ 50,000",
  },
  {
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=520&q=80",
    title: "소중한 일상을 동화처럼 따뜻한 인테리어 해드립니다",
    rating: "5.0 | 3명의 평가",
    price: "₩ 50,000",
  },
  {
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=520&q=80",
    title: "생동감 있는 공간 3D 이미지, 인테리어 디자인 제안",
    rating: "4.9 | 4명의 평가",
    price: "₩ 45,000",
  },
  {
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=520&q=80",
    title: "깨끗한 청소 확실한 청소 믿고 확실하게 처리합니다",
    rating: "5.0 | 1076명의 평가",
    price: "₩ 30,000",
  },
];

const rankings = [
  {
    title: "인테리어",
    total: "1,300,821,120원",
    items: ["사무실 리모델링", "아파트 부분시공", "상가 인테리어", "욕실 리뉴얼"],
  },
  {
    title: "설비/배관",
    total: "229,830,600원",
    items: ["누수 탐지", "하수구 막힘", "보일러 배관", "싱크대 수전"],
  },
  {
    title: "가구",
    total: "1,010,679,000원",
    items: ["붙박이장", "주방 수납", "사무 가구", "맞춤 테이블"],
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header desktop-only">
        <div className="header-inner">
          <a className="brand" href="#" aria-label="금손 홈">
            <span className="brand-mark">⌂</span>
            <span>
              <strong>금손</strong>
              <small>우리동네 금손</small>
            </span>
          </a>
          <div className="header-search">
            <span>무엇이 필요하세요?</span>
            <b>⌕</b>
          </div>
          <nav>
            <a href="#">전문가 등록</a>
            <a href="#">로그인</a>
            <a className="join-link" href="#">
              무료 회원가입
            </a>
          </nav>
        </div>
        <div className="subnav">
          <div>
            <span>☰ 전체 카테고리</span>
            <a href="#">인테리어</a>
            <a href="#">지역별</a>
            <a href="#">비교견적</a>
          </div>
          <p>원하는 서비스를 못 찾았다면, 프로에게 의뢰해보세요</p>
        </div>
      </header>

      <header className="mobile-header mobile-only">
        <button aria-label="알림">⌾</button>
        <a className="mobile-logo" href="#">
          <span>⌂</span> 금손
        </a>
        <button aria-label="검색">⌕</button>
      </header>

      <section className="hero">
        <div className="mobile-hero-slider mobile-only" aria-label="메인 배너">
          {heroSlides.map((slide) => (
            <article className={`mobile-hero-slide ${slide.tone}`} key={slide.title}>
              <p>{slide.eyebrow}</p>
              <h1>{slide.title}</h1>
              <label className="search-box">
                <span>{slide.query}</span>
                <button aria-label="검색어 삭제">×</button>
              </label>
            </article>
          ))}
        </div>
        <div className="hero-inner">
          <div className="hero-copy">
            <p>프리랜서 마켓 No.1 금손에서</p>
            <h1>원하는 전문가를 찾아보세요!</h1>
            <label className="search-box">
              <span>인테리어</span>
              <button aria-label="검색어 삭제">×</button>
            </label>
            <div className="quick-tags desktop-only">
              <a href="#">#리모델링</a>
              <a href="#">#배관</a>
              <a href="#">#부분시공</a>
              <a href="#">#주방</a>
              <a href="#">#전기</a>
            </div>
          </div>
          <article className="hero-card desktop-only">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=85"
              alt="카페 인테리어"
            />
            <div>
              <span>2030년 시니어 · 인테리어</span>
              <strong>인테리어 최강 전문가 찾기</strong>
            </div>
          </article>
        </div>
      </section>

      <section className="section category-section">
        <h2>700여 개 카테고리에서 필요한 서비스를 찾아보세요!</h2>
        <div className="category-grid">
          {categories.map((item) => (
            <a className="category-item" href="#" key={item.label}>
              <span style={{ backgroundColor: item.color }}>{item.icon}</span>
              <b>{item.label}</b>
            </a>
          ))}
        </div>
      </section>

      <section className="section popular-section">
        <h2>우리동네 금손에서 가장 인기가 있어요!</h2>
        <div className="popular-grid">
          {popular.map((item) => (
            <a className="popular-card" href="#" style={{ backgroundColor: item.color }} key={item.title}>
              <span>{item.category}</span>
              <strong>{item.title}</strong>
              <i>{item.icon}</i>
            </a>
          ))}
        </div>
      </section>

      <section className="section mobile-services mobile-only">
        <h2>스페셜 서비스</h2>
        <div className="service-list">
          {services.map((service) => (
            <article className="service-row" key={service.title}>
              <img src={service.image} alt="" />
              <div>
                <h3>{service.title}</h3>
                {service.rating ? <p>★ {service.rating}</p> : null}
                <strong>{service.price}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="story-band desktop-only">
        <div className="section story-layout">
          <div className="story-copy">
            <h2>내게 필요한 모든 전문가를 만날 수 있는 금손!</h2>
            <p>
              누적 거래수 350만 건, 500여 개의 카테고리, 전문가와 서비스에서 이어져온
              믿음으로 모든 작업을 빠르게 연결합니다.
            </p>
          </div>
          <article className="video-card">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85"
              alt="전문가 인터뷰"
            />
            <button aria-label="영상 재생">▶</button>
            <strong>전문가를 만나다</strong>
          </article>
        </div>
        <div className="section promise-grid">
          {["홈 전문가 매칭", "안전한 에스크로 결제", "만족스러운 결과물"].map((title, index) => (
            <article className="promise-card" key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>원하는 조건을 비교하고 검증된 전문가와 작업을 시작하세요.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="yellow-band desktop-only">
        <div className="section">
          <h2>최신 트렌드 성공사례 고객들의 생생후기!</h2>
          <div className="review-grid">
            {services.slice(1, 4).map((service) => (
              <article className="review-card" key={service.title}>
                <img src={service.image} alt="" />
                <button aria-label="후기 영상 재생">▶</button>
                <h3>{service.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="guide-band desktop-only">
        <div className="section">
          <h2>금손을 200% 활용하는 법</h2>
          <p className="section-subtitle">금손에게 내 상황에 맞는 조건으로 맡겨보세요</p>
          <div className="guide-grid">
            {["금손 활용 가이드", "예상 견적 비교하기", "전문가 CEO 인터뷰"].map((title, index) => (
              <article className="guide-card" key={title}>
                <img src={services[index].image} alt="" />
                <h3>{title}</h3>
                <p>처음 맡기는 의뢰도 쉽게 진행할 수 있도록 핵심만 정리했습니다.</p>
              </article>
            ))}
          </div>
          <a className="more-button" href="#">
            더 둘러보기
          </a>
        </div>
      </section>

      <section className="section ranking-section desktop-only">
        <h2>TOP 카테고리 전문가 랭킹</h2>
        <p className="section-subtitle">금손에서 가장 많이 선택한 인기 전문가 랭킹입니다.</p>
        <div className="ranking-grid">
          {rankings.map((ranking) => (
            <article className="ranking-card" key={ranking.title}>
              <div className="ranking-head">
                <h3>{ranking.title}</h3>
                <strong>{ranking.total}</strong>
              </div>
              <ol>
                {ranking.items.map((item) => (
                  <li key={item}>
                    <span>{item}</span>
                    <b>금손 인증</b>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </section>

      <aside className="section expert-cta desktop-only">
        <div>
          <h2>금손 전문가로 등록하고, 수익활동을 해보세요</h2>
          <a href="#">전문가 등록하기</a>
        </div>
      </aside>

      <footer className="site-footer desktop-only">
        <div className="section footer-grid">
          <div>
            <h3>고객센터</h3>
            <p>10:30~18:00 · 주말, 공휴일 휴무</p>
            <button>1:1 문의</button>
          </div>
          <div>
            <h3>금손</h3>
            <a href="#">이용약관</a>
            <a href="#">개인정보처리방침</a>
            <a href="#">회사소개</a>
          </div>
          <div>
            <h3>금손 정보</h3>
            <a href="#">서비스 소개</a>
            <a href="#">안전결제</a>
            <a href="#">전문가센터</a>
          </div>
          <div>
            <h3>제휴</h3>
            <a href="#">회사소개</a>
            <a href="#">제휴 문의</a>
            <a href="#">마케팅 제안</a>
          </div>
        </div>
        <p className="copyright">Copyright © 2026 goldson. All rights reserved.</p>
      </footer>

      <nav className="bottom-nav mobile-only" aria-label="모바일 메뉴">
        <a className="active" href="#">
          <span>⌂</span>홈
        </a>
        <a href="#">
          <span>⌕</span>검색
        </a>
        <a href="#">
          <span>♡</span>찜하기
        </a>
        <a href="#">
          <span>✉</span>메시지
        </a>
        <a href="#">
          <span>♙</span>금손
        </a>
      </nav>
    </main>
  );
}

// js/data_audi.js

carData.brands.audi = { name: "아우디 (Audi)", type: "import" };

carData.models.audi = [
    { id: "a6", name: "A6" },
    { id: "a4", name: "A4" },
    { id: "a7", name: "A7" },
    { id: "q5", name: "Q5" }
];

carData.generations.a6 = [
    { id: "audi_c8_45tfsi", name: "A6 (C8) 45 TFSI (19년~현재)" },
    { id: "audi_c7_35tdi", name: "A6 (C7) 35 TDI (11~19년)" }
];
carData.generations.a4 = [
    { id: "audi_b9_40tfsi", name: "A4 (B9) 40 TFSI (16년~현재)" }
];
carData.generations.a7 = [
    { id: "audi_4k_55tfsi", name: "A7 (4K) 55 TFSI (19년~현재)" }
];
carData.generations.q5 = [
    { id: "audi_fy_45tfsi", name: "Q5 (FY) 45 TFSI (17년~현재)" }
];

Object.assign(carData.details, {
    /* ---------------- 아우디 A6 ---------------- */
    "audi_c8_45tfsi": {
        title: "아우디 A6 (C8)", subtitle: "2019.10 ~ 현재 | 준대형 세단 | 45 TFSI 가솔린", tags: ["#조명의아우디", "#첨단디지털", "#콰트로"], specs: { mpg: "10.8", power: "265", cc: "1,984" },
        commonOptions: "매트릭스 LED 헤드램프, 듀얼 터치스크린(MMI), 버추얼 콕핏(디지털 계기판), S라인 익스테리어",
        trims: [{ name: "45 TFSI 콰트로 프리미엄", price: "7,800만 원대", isRec: true, options: "<strong class='text-emerald-700'>[아우디는 무조건 콰트로]</strong><br>• 19인치 알로이 휠<br>• HUD (헤드업 디스플레이)<br>• 통풍 및 마사지 시트" }],
        pros: [{ title: "✨ 미래지향적 하이테크 인테리어", desc: "물리 버튼을 최소화하고 듀얼 터치스크린을 적용해 동급 E클래스나 5시리즈보다 훨씬 미래차 같은 느낌을 줌." }, { title: "💡 압도적인 라이팅 시스템", desc: "매트릭스 LED와 다이내믹 턴시그널(스르륵 켜지는 깜빡이)은 '조명회사' 아우디의 진수를 보여줌." }],
        cons: [{ title: "⚡ 발전기(알터네이터) 사망 결함", severity: "★★★★★", desc: "48V 마일드 하이브리드(ISG) 제너레이터 불량으로 주행 중 시동이 꺼지는 치명적 결함(리콜 진행 중)." }, { title: "📺 MMI 스크린 렉 및 고장", severity: "★★★★☆", desc: "터치스크린 반응이 가끔 멍청해지거나 시스템 오류로 화면이 안 들어오는 렉 현상이 잦음." }],
        maintenance: [{ name: "엔진오일", spec: "VW 508.00 (5.2L)", search: "아우디 A6 C8 엔진오일" }, { name: "미션오일", spec: "S트로닉 전용", search: "A6 S트로닉 미션오일" }]
    },
    "audi_c7_35tdi": {
        title: "아우디 A6 (C7)", subtitle: "2011.08 ~ 2019.10 | 준대형 세단 | 35 TDI 디젤", tags: ["#명차_C7", "#디자인사골", "#가성비수입차"], specs: { mpg: "14.9", power: "190", cc: "1,968" },
        commonOptions: "제논/LED 헤드램프, 선루프, 팝업식 내비게이션, 크루즈 컨트롤",
        trims: [{ name: "35 TDI 콰트로", price: "6,000만 원대", isRec: true, options: "• 아우디 기계식 4륜구동(콰트로)<br>• 우드 트림 인테리어" }],
        pros: [{ title: "🎨 세월을 타지 않는 정석적 디자인", desc: "직선 위주의 깔끔한 디자인으로 지금 봐도 구형 느낌이 크게 나지 않는 잘 만들어진 외관." }, { title: "🏔️ 콰트로의 안정적인 주행 질감", desc: "고속 주행이나 눈/빗길에서 바닥을 움켜쥐고 달리는 기계식 콰트로의 신뢰도가 매우 높음." }],
        cons: [{ title: "⚙️ S트로닉 메카트로닉스 고장", severity: "★★★★★", desc: "듀얼클러치(S트로닉) 밸브바디 결함으로 변속 시 철컥거리는 충격 발생 및 수리비 폭탄 위험." }, { title: "💧 냉각수 차단 밸브 누수", severity: "★★★★☆", desc: "냉각수 밸브 쪽에 고질적인 누수가 발생하여 배선을 타고 ECU까지 손상시킬 수 있음." }],
        maintenance: [{ name: "엔진오일", spec: "VW 507.00 (4.7L)", search: "아우디 A6 C7 엔진오일" }, { name: "듀얼클러치", spec: "메카트로닉스 점검", search: "A6 메카트로닉스 수리" }]
    },

    /* ---------------- 아우디 A4 ---------------- */
    "audi_b9_40tfsi": {
        title: "아우디 A4 (B9)", subtitle: "2016.05 ~ 현재 | 중형 세단 | 40 TFSI 가솔린", tags: ["#엔트리세단", "#단정한매력", "#조용한승차감"], specs: { mpg: "12.2", power: "204", cc: "1,984" },
        commonOptions: "버추얼 콕핏, 3존 자동 에어컨, 시퀀셜 방향지시등, LED 헤드램프",
        trims: [{ name: "40 TFSI 프리미엄", price: "5,400만 원대", isRec: true, options: "• 18인치 휠<br>• 스포츠 시트<br>• 앰비언트 라이트" }],
        pros: [{ title: "🤫 3시리즈 대비 부드러운 승차감", desc: "경쟁 모델인 BMW 3시리즈가 스포티하다면, A4는 전륜구동 기반(콰트로 제외)의 조용하고 편안한 세팅임." }],
        cons: [{ title: "💧 워터펌프 및 써모스탯 누수", severity: "★★★★☆", desc: "폭스바겐/아우디 2.0 TFSI 엔진의 공통 고질병으로 플라스틱 하우징 열변형으로 인한 냉각수 누수 발생." }, { title: "좁은 뒷좌석 공간", severity: "★★★☆☆", desc: "전륜구동 기반임에도 불구하고 센터 터널이 매우 높아 2열 거주성이 아쉬움." }],
        maintenance: [{ name: "엔진오일", spec: "VW 508.00 (5.2L)", search: "아우디 A4 엔진오일" }]
    },

    /* ---------------- 아우디 A7 ---------------- */
    "audi_4k_55tfsi": {
        title: "아우디 A7 (4K)", subtitle: "2019.08 ~ 현재 | 대형 패스트백 | 55 TFSI 가솔린", tags: ["#디자인끝판왕", "#드림카", "#스포티백"], specs: { mpg: "9.5", power: "340", cc: "2,995" },
        commonOptions: "HD 매트릭스 LED, S라인 익스테리어, 반자율주행, 듀얼 모니터",
        trims: [{ name: "55 TFSI 콰트로 프리미엄", price: "1억 원대", isRec: true, options: "<strong class='text-emerald-700'>[외관 포스 원탑]</strong><br>• 20인치 5-트윈 스포크 휠<br>• 소프트 도어 클로징" }],
        pros: [{ title: "🎨 자동차 역사상 최고의 패스트백", desc: "아름답게 떨어지는 루프라인과 가변형 리어 스포일러는 도로 위 모든 시선을 사로잡음." }, { title: "🚀 V6 3.0 가솔린의 실크 같은 회전", desc: "340마력의 넘치는 힘과 콰트로가 만나 폭발적이면서도 안정적인 고속 크루징을 보여줌." }],
        cons: [{ title: "⚡ 48V 알터네이터 고질병", severity: "★★★★★", desc: "A6와 동일하게 ISG 발전기 결함으로 운행 중 차량이 멈출 수 있는 치명적인 단점이 있음." }],
        maintenance: [{ name: "엔진오일", spec: "VW 508.00 (7.6L)", search: "아우디 A7 엔진오일" }]
    },

    /* ---------------- 아우디 Q5 ---------------- */
    "audi_fy_45tfsi": {
        title: "아우디 Q5 (FY)", subtitle: "2017.06 ~ 현재 | 중형 SUV | 45 TFSI 가솔린", tags: ["#패밀리SUV", "#조용한수입차", "#무난함의정석"], specs: { mpg: "10.2", power: "265", cc: "1,984" },
        commonOptions: "콰트로 울트라, 버추얼 콕핏, 파노라마 선루프, 3존 에어컨",
        trims: [{ name: "45 TFSI 콰트로 프리미엄", price: "7,300만 원대", isRec: true, options: "• 매트릭스 LED 헤드램프<br>• 19인치 휠<br>• 반자율주행 시스템" }],
        pros: [{ title: "⚖️ 호불호 없는 완벽한 밸런스", desc: "튀지 않는 디자인, 적당한 공간, 콰트로의 안정성 등 독일 3사 SUV 중 가장 무난하고 편안함." }],
        cons: [{ title: "📺 구형 느낌의 실내 레이아웃", severity: "★★★☆☆", desc: "신형 A6나 A7에 들어간 듀얼 스크린이 아닌 태블릿 툭 튀어나온(플로팅 타입) 옛날 실내 디자인임." }],
        maintenance: [{ name: "엔진오일", spec: "VW 508.00 (5.2L)", search: "아우디 Q5 엔진오일" }]
    }
});
// js/data_genesis.js

carData.brands.genesis = { name: "제네시스 (Genesis)", type: "domestic" };

carData.models.genesis = [
    { id: "g80", name: "G80 / DH" },
    { id: "gv80", name: "GV80" },
    { id: "gv70", name: "GV70" },
    { id: "g70", name: "G70" },
    { id: "g90", name: "G90 / EQ900" }
];

carData.generations.g80 = [
    { id: "g80_rg3_25t", name: "G80 (RG3) 2.5 터보 (20년~현재)" },
    { id: "g80_dh_33g", name: "제네시스 DH / G80 (13~20년)" }
];
carData.generations.gv80 = [
    { id: "gv80_jx1_25t", name: "GV80 (JX1) 2.5 터보 (20년~현재)" }
];
carData.generations.gv70 = [
    { id: "gv70_jk1_25t", name: "GV70 (JK1) 2.5 터보 (20년~현재)" }
];
carData.generations.g70 = [
    { id: "g70_ik_20t", name: "G70 (IK) 2.0 터보 (17년~23년)" }
];
carData.generations.g90 = [
    { id: "g90_rs4_35t", name: "G90 (RS4) 3.5 터보 (21년~현재)" },
    { id: "g90_hi_38g", name: "EQ900 / G90 (HI) 3.8 (15~21년)" }
];

Object.assign(carData.details, {
    /* ---------------- G80 / DH ---------------- */
    "g80_rg3_25t": {
        title: "제네시스 G80 (RG3)", subtitle: "2020.03 ~ 현재 | 대형 세단 | 2.5 터보", tags: ["#조선_S클래스", "#역동적인_우아함", "#사장님차"], specs: { mpg: "10.8", power: "304", cc: "2,497" },
        commonOptions: "10 에어백, 풀 LED 쿼드램프, 14.5인치 인포테인먼트, 스마트 크루즈 컨트롤",
        trims: [{ name: "기본형 (2.5T 2WD)", price: "5,548만 원", isRec: true, options: "<strong class='text-emerald-700'>[깡통도 풀옵션급]</strong><br>• 파퓰러 패키지 추가 강력 추천." }],
        pros: [{ title: "✨ 수입차 압도하는 우아함", desc: "동급 벤츠, BMW보다 고급스러운 디자인." }, { title: "🤫 정숙성과 승차감", desc: "이중접합 차음 유리 적용으로 실내가 완벽에 가깝게 조용함." }],
        cons: [{ title: "🩸 2.5T 엔진오일 감소", severity: "★★★★☆", desc: "초기형 2.5 터보 엔진오일 소모 이슈 확인 필수." }, { title: "⚖️ 무거운 공차중량", desc: "시내 연비 6~7km/L 수준." }],
        maintenance: [{ name: "엔진오일", spec: "0W-30 (6.2L)", search: "G80 2.5T 엔진오일" }]
    },
    "g80_dh_33g": {
        title: "현대 제네시스 (DH)", subtitle: "2013.11 ~ 2020.03 | 대형 세단 | 3.3 가솔린", tags: ["#제네시스_독립의_시작", "#탱크장갑차", "#가성비대형차"], specs: { mpg: "9.4", power: "282", cc: "3,342" },
        commonOptions: "9 에어백, HTRAC(사륜구동 옵션), 8인치 내비게이션, 앞/뒷좌석 열선",
        trims: [{ name: "G330 프리미엄", price: "5,200만 원대", isRec: true, options: "• HUD (헤드업 디스플레이)<br>• 어라운드 뷰 모니터<br>• 전동식 트렁크" }],
        pros: [{ title: "🛡️ 독일차 압도하는 차체 강성", desc: "초고장력 강판을 엄청나게 쏟아부어 문짝 두께와 닫히는 묵직함이 독일 프리미엄 3사를 능가함." }, { title: "🤫 조용하고 부드러운 회전 질감", desc: "V6 3.3 자연흡기 엔진의 부드러움과 방음 대책으로 고속 주행 시 풍절음이 거의 없음." }],
        cons: [{ title: "💸 극악무도한 연비", severity: "★★★★★", desc: "차가 너무 무거워(약 1.9톤) 연비가 바닥을 침. 시내 주행 시 4~5km/L는 각오해야 함." }, { title: "⚙️ 프로펠러 샤프트 및 조향 소음", severity: "★★★☆☆", desc: "연식이 차면 4륜 모델(HTRAC) 하부 샤프트 소음이나 핸들 돌릴 때 귀뚜라미 소리 고질병 발생." }],
        maintenance: [{ name: "엔진오일", spec: "5W-30 (6.5L)", search: "제네시스 DH 엔진오일" }, { name: "미션오일", spec: "8단 전용 (ZF아님)", search: "제네시스 DH 미션오일" }]
    },

    /* ---------------- GV80 / GV70 / G70 ---------------- */
    "gv80_jx1_25t": {
        title: "제네시스 GV80 (JX1)", subtitle: "2020.01 ~ 현재 | 대형 SUV | 2.5 터보", tags: ["#아빠들의_드림카", "#럭셔리_패밀리SUV", "#하차감"], specs: { mpg: "9.7", power: "304", cc: "2,497" },
        commonOptions: "10 에어백, 터치타입 공조 패널, 전방/후측방 충돌방지 보조",
        trims: [{ name: "기본형 (2.5T 2WD)", price: "6,430만 원", isRec: true, options: "• 파퓰러 패키지 및 하이테크 패키지 추가 추천" }],
        pros: [{ title: "👑 프리미엄 실내", desc: "여백의 미를 강조한 실내와 우드/가죽 질감이 훌륭함." }, { title: "📷 프리뷰 전자제어 서스펜션", desc: "노면을 인식해 감쇠력을 미리 조절하여 승차감 극대화." }],
        cons: [{ title: "🎈 에어 서스펜션 부재", severity: "★★★★☆", desc: "프리미엄 대형 SUV임에도 초기/중기형에 에어서스 옵션 없음." }, { title: "💸 22인치 타이어 교체 비용", severity: "★★★☆☆", desc: "타이어 4짝 교체 시 200만 원 이상 깨짐." }],
        maintenance: [{ name: "엔진오일", spec: "0W-30 (6.2L)", search: "GV80 2.5T 엔진오일" }]
    },
    "gv70_jk1_25t": {
        title: "제네시스 GV70 (JK1)", subtitle: "2020.12 ~ 현재 | 중형 SUV | 2.5 터보", tags: ["#조선의_마칸", "#스포티함", "#여성오너_선호"], specs: { mpg: "10.7", power: "304", cc: "2,497" },
        commonOptions: "풀 LED 쿼드램프, 지문 인증 시스템, 스마트 크루즈 컨트롤",
        trims: [{ name: "기본형 (2.5T 2WD)", price: "5,040만 원", isRec: true, options: "• 스포츠 패키지 적용 시 외관 디자인이 훨씬 공격적임." }],
        pros: [{ title: "🏃 독보적인 스포티 디자인", desc: "포르쉐 마칸과 비교될 정도로 날렵한 쿠페형 디자인." }, { title: "🚀 경쾌한 주행 질감", desc: "가벼운 차체로 핸들링이 민첩하고 가속이 시원함." }],
        cons: [{ title: "🦵 좁은 2열 공간", severity: "★★★★★", desc: "후륜구동 특성상 2열 레그룸이 좁아 카시트용 패밀리카로는 부적합." }],
        maintenance: [{ name: "엔진오일", spec: "0W-30 (6.2L)", search: "GV70 엔진오일" }]
    },
    "g70_ik_20t": {
        title: "제네시스 G70 (IK)", subtitle: "2017.09 ~ 2023.05 | 중형 스포츠 세단 | 2.0 터보", tags: ["#엔트리_스포츠세단", "#운전재미", "#스팅어_라이벌"], specs: { mpg: "10.4", power: "252", cc: "1,998" },
        commonOptions: "9 에어백, 런치 컨트롤, 고속도로 주행 보조(HDA)",
        trims: [{ name: "스포츠 패키지", price: "4,300만 원", isRec: true, options: "• 브렘보 브레이크 포함<br>• 차동제한장치(LSD)" }],
        pros: [{ title: "🏎️ BMW 3시리즈 급 핸들링", desc: "칼같은 코너링과 펀 드라이빙 보장." }],
        cons: [{ title: "🤏 아반떼보다 좁은 2열", severity: "★★★★★", desc: "성인 남성이 타면 무릎이 앞좌석에 닿음." }, { title: "🧳 비좁은 트렁크", severity: "★★★★☆", desc: "골프백 1개도 싣기 어려움." }],
        maintenance: [{ name: "브레이크 패드", spec: "브렘보 전용 규격", search: "G70 브렘보 패드" }]
    },

    /* ---------------- G90 / EQ900 ---------------- */
    "g90_rs4_35t": {
        title: "제네시스 G90 (RS4)", subtitle: "2021.12 ~ 현재 | 대형 플래그십 | 3.5 터보", tags: ["#회장님차", "#끝판왕_승차감", "#쇼퍼드리븐"], specs: { mpg: "8.5", power: "380", cc: "3,470" },
        commonOptions: "10 에어백, 이지 클로즈 시스템(자동 문닫힘), 멀티 챔버 에어 서스펜션",
        trims: [{ name: "기본형 (3.5T)", price: "9,445만 원", isRec: true, options: "• VIP 시트 옵션 추가 추천." }],
        pros: [{ title: "☁️ 에어 서스펜션 승차감", desc: "구름 위를 떠가는 듯한 궁극의 승차감." }, { title: "👑 압도적인 하차감", desc: "어디를 가든 VIP 대접을 받는 국산 최고의 밸류." }],
        cons: [{ title: "💸 유지비의 압박", severity: "★★★★★", desc: "시내 연비 4~5km/L, 보증 만료 후 부품비 수백만 원." }, { title: "🅿️ 주차의 어려움", severity: "★★★★☆", desc: "전장이 5.2m를 넘어 주차칸 밖으로 튀어나옴." }],
        maintenance: [{ name: "엔진오일", spec: "0W-30 (7.0L)", search: "G90 3.5T 엔진오일" }]
    },
    "g90_hi_38g": {
        title: "제네시스 EQ900 / G90 (HI)", subtitle: "2015.12 ~ 2021.12 | 대형 플래그십 | 3.8 가솔린", tags: ["#중고차_감가대마왕", "#가성비_회장님차", "#광활한2열"], specs: { mpg: "8.7", power: "315", cc: "3,778" },
        commonOptions: "제네시스 스마트 센스(초기 자율주행), 고스트 도어 클로징, 이중접합 차음 유리",
        trims: [{ name: "프리미엄 럭셔리", price: "9,000만 원대", isRec: true, options: "• 어댑티브 풀 LED 헤드램프<br>• 뒷좌석 듀얼 모니터" }],
        pros: [{ title: "📉 깡패 수준의 중고 가성비", desc: "신차가 1억에 육박하던 차량이 현재 2~3천만 원대면 상태 좋은 매물을 주워올 수 있음." }, { title: "👑 국산차 최고 수준의 조립 품질", desc: "플래그십 모델답게 가죽이나 내장재 우드 품질이 매우 좋고 내구성도 탄탄하게 설계됨." }],
        cons: [{ title: "⛽ 길바닥에 돈 뿌리는 연비", severity: "★★★★★", desc: "배기량이 큰 데다 차가 워낙 무거워 유류비 폭탄을 맞을 수 있음." }, { title: "⚠️ 전자장비 노후화 고장", severity: "★★★★☆", desc: "연식이 차면서 고스트 도어 모터나 어라운드 뷰 카메라 백화현상 등 짜잘한 전자장비 수리비가 꽤 비쌈." }],
        maintenance: [{ name: "엔진오일", spec: "5W-30 (6.5L)", search: "EQ900 엔진오일" }, { name: "디퍼런셜 오일", spec: "사륜구동 필수 정비", search: "EQ900 데후오일" }]
    }
});
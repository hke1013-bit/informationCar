// js/data_bmw.js

carData.brands.bmw = { name: "BMW", type: "import" };

carData.models.bmw = [
    { id: "5series", name: "5시리즈 (5 Series)" },
    { id: "3series", name: "3시리즈 (3 Series)" },
    { id: "x3_x4", name: "X3 / X4" },
    { id: "x5_x6", name: "X5 / X6" },
    { id: "7series", name: "7시리즈 (7 Series)" }
];

carData.generations["5series"] = [
    { id: "bmw_g30_520i", name: "5시리즈 (G30) 520i (17~23년)" },
    { id: "bmw_f10_520d", name: "5시리즈 (F10) 520d (10~17년)" }
];
carData.generations["3series"] = [
    { id: "bmw_g20_320i", name: "3시리즈 (G20) 320i (19년~현재)" },
    { id: "bmw_f30_320d", name: "3시리즈 (F30) 320d (12~19년)" }
];
carData.generations["x3_x4"] = [
    { id: "bmw_g01_20i", name: "X3/X4 (G01/G02) 20i (17년~현재)" }
];
carData.generations["x5_x6"] = [
    { id: "x5_30d", name: "X5 (G05) 30d (19~23년)" },
    { id: "bmw_f15_30d", name: "X5 (F15) 30d (13~18년)" }
];
carData.generations["7series"] = [
    { id: "bmw_g11_730d", name: "7시리즈 (G11) 730d (15~22년)" },
    { id: "bmw_f01_730d", name: "7시리즈 (F01) 730d (08~15년)" }
];

Object.assign(carData.details, {
    /* ---------------- 5시리즈 ---------------- */
    "bmw_g30_520i": {
        title: "BMW 5시리즈 (G30)", subtitle: "2017.02 ~ 2023.10 | 중형 세단 | 520i 가솔린", tags: ["#강남쏘나타", "#완벽한밸런스", "#가성비수입차"], specs: { mpg: "12.4", power: "184", cc: "1,998" },
        commonOptions: "반자율주행(드라이빙 어시스턴트 플러스), 어댑티브 LED 헤드램프, HUD, 전동식 트렁크",
        trims: [{ name: "M Sport Package", price: "6,000만 원대", isRec: true, options: "<strong class='text-emerald-700'>[최고 인기 트림]</strong><br>• M 에어로다이내믹 범퍼<br>• M 스포츠 스티어링 휠<br>• M 서스펜션" }],
        pros: [{ title: "⚖️ 동급 최고의 운동 성능과 승차감", desc: "이전 세대(F10)보다 가벼워졌으나 하체는 더 탄탄해져 고속 주행 안정감과 코너링 밸런스가 E클래스를 압도함." }, { title: "🤫 520i의 훌륭한 정숙성", desc: "디젤(520d)의 소음 스트레스가 전혀 없으며 4기통 가솔린 엔진의 회전 질감이 매우 매끄러움." }],
        cons: [{ title: "💧 냉각수 누수 고질병", severity: "★★★★☆", desc: "B48 가솔린 엔진의 고질병으로 워터펌프 및 써모스탯 하우징 크랙으로 인한 냉각수 누수가 잦음." }, { title: "❄️ 에어컨 증발기(에바) 누설", severity: "★★★☆☆", desc: "에어컨 가스가 새어 찬 바람이 나오지 않는 증상으로, 대시보드를 내려야 해서 수리비가 비쌈." }],
        maintenance: [{ name: "엔진오일", spec: "LL-01 FE (5.2L)", search: "BMW G30 520i 엔진오일" }, { name: "냉각수", spec: "규격 확인 필수", search: "BMW 정품 부동액" }]
    },
    "bmw_f10_520d": {
        title: "BMW 5시리즈 (F10)", subtitle: "2010.04 ~ 2017.02 | 중형 세단 | 520d 디젤", tags: ["#불자동차오명", "#디젤세단열풍", "#가성비중고"], specs: { mpg: "16.1", power: "190", cc: "1,995" },
        commonOptions: "HUD, 선루프, 1열 전동/메모리 시트, 크루즈 컨트롤",
        trims: [{ name: "M Aerodynamic", price: "6,000만 원대", isRec: true, options: "• M 스포츠 범퍼<br>• 18인치 알로이 휠<br>• M 가죽 스티어링 휠" }],
        pros: [{ title: "⛽ 기름 냄새만 맡고 달리는 연비", desc: "고속도로 정속 주행 시 20km/L는 가볍게 넘기는 압도적인 연비로 장거리 출퇴근용으로 최적임." }, { title: "🛡️ 단단한 차체와 고속 안정감", desc: "당시 국산차들과는 궤를 달리하는 고속도로 묵직함과 안정적인 브레이킹 성능을 가짐." }],
        cons: [{ title: "🔥 EGR 쿨러 화재 및 리콜", severity: "★★★★★", desc: "대한민국을 떠들썩하게 했던 BMW 연쇄 화재 사태의 주인공. EGR 모듈 리콜 수리 이력 확인 필수." }, { title: "🔗 밥솥 소리와 타이밍 체인 절단", severity: "★★★★★", desc: "B47 이전 N47 엔진(14년식 이전)의 경우 밥솥 끓는 소리가 나다가 타이밍 체인이 끊어져 엔진이 박살나는 치명적 결함 있음." }],
        maintenance: [{ name: "엔진오일", spec: "LL-04 규격 (5.0L)", search: "BMW F10 520d 엔진오일" }, { name: "디퍼런셜 오일", spec: "75W-90", search: "BMW 데후오일" }]
    },

    /* ---------------- 3시리즈 ---------------- */
    "bmw_g20_320i": {
        title: "BMW 3시리즈 (G20)", subtitle: "2019.03 ~ 현재 | 중형 스포츠 세단 | 320i 가솔린", tags: ["#D세그먼트_제왕", "#칼치기_원탑", "#스포츠세단"], specs: { mpg: "11.2", power: "184", cc: "1,998" },
        commonOptions: "반자율주행, LED 헤드램프, 3존 에어컨, 무선 애플 카플레이",
        trims: [{ name: "M Sport Package", price: "5,000만 원대", isRec: true, options: "<strong class='text-emerald-700'>[3시리즈는 무조건 MSP]</strong><br>• M 스포츠 브레이크(파란색)<br>• 18인치 M 휠<br>• M 스포츠 서스펜션" }],
        pros: [{ title: "🏎️ 외계인이 깎아 만든 핸들링", desc: "스포츠 세단의 교과서답게 앞뒤 무게배분 50:50을 맞추어 운전자가 원하는 대로 오차 없이 코너를 파고듦." }, { title: "📏 이전 세대 대비 넓어진 실내", desc: "차체가 커져 2열 레그룸이 아반떼 수준으로 넓어져 패밀리카로도 충분히 타협 가능함." }],
        cons: [{ title: "🫨 MSP 특유의 하드한 승차감", severity: "★★★★☆", desc: "M 서스펜션이 적용되어 방지턱을 넘을 때 국산 세단처럼 부드럽지 않고 꽤 충격이 옴." }, { title: "🔊 하체 방음의 아쉬움", severity: "★★★☆☆", desc: "스포츠 세단 특성상 5시리즈 대비 노면 소음과 배기음(인위적) 유입이 꽤 있는 편." }],
        maintenance: [{ name: "브레이크 패드", spec: "M 스포츠 전용(파란색)", search: "G20 M스포츠 브레이크 패드" }]
    },
    "bmw_f30_320d": {
        title: "BMW 3시리즈 (F30)", subtitle: "2012.02 ~ 2019.03 | 중형 스포츠 세단 | 320d 디젤", tags: ["#연비깡패", "#입문용수입차", "#딸딸이"], specs: { mpg: "16.6", power: "190", cc: "1,995" },
        commonOptions: "HUD, 선루프, 17인치 휠, 1열 전동시트",
        trims: [{ name: "M Sport Package", price: "5,000만 원대", isRec: true, options: "• 알칸타라/직물 스포츠 시트<br>• M 스포츠 서스펜션" }],
        pros: [{ title: "💸 국산차 뺨치는 중고 가성비", desc: "1천만 원 초중반대에 독일 스포츠 세단의 펀 드라이빙을 맛볼 수 있는 최고의 장난감." }, { title: "⛽ 주유소 갈 일 없는 연비", desc: "연비 운전 시 서울-부산 왕복을 해도 게이지가 1/3밖에 닳지 않는 기적을 보여줌." }],
        cons: [{ title: "🚜 트랙터 수준의 엔진 소음", severity: "★★★★★", desc: "4기통 디젤 종특으로 외부에서 들으면 경운기 소리가 나고 실내에서도 덜덜거림이 심함." }, { title: "🔥 테일램프 전구 녹음 결함", severity: "★★★★☆", desc: "깜빡이 전구 쪽 커넥터가 열에 의해 녹아내리는 결함이 매우 빈번함." }],
        maintenance: [{ name: "엔진오일", spec: "LL-04 (5.0L)", search: "F30 320d 엔진오일" }]
    },

    /* ---------------- X3 / X4 ---------------- */
    "bmw_g01_20i": {
        title: "BMW X3 / X4 (G01/G02)", subtitle: "2017.11 ~ 현재 | 중형 SUV | 20i 가솔린", tags: ["#아빠들의로망", "#패밀리SUV_종결", "#X4쿠페형"], specs: { mpg: "9.8", power: "184", cc: "1,998" },
        commonOptions: "xDrive(사륜구동), 파노라마 선루프, 드라이빙 어시스턴트, 3존 에어컨",
        trims: [{ name: "M Sport Package", price: "7,000만 원대", isRec: true, options: "<strong class='text-emerald-700'>[외관 포스 압도적]</strong><br>• 19인치 M 휠<br>• M 브레이크 및 스티어링 휠" }],
        pros: [{ title: "⚖️ 완벽한 차체 밸런스와 시야", desc: "SUV임에도 불구하고 세단처럼 깔끔하게 코너를 돌며 5시리즈보다 탁 트인 시야를 제공함." }, { title: "👨‍👩‍👧‍👦 부족함 없는 2열 공간(X3)", desc: "X3의 경우 싼타페에 버금가는 넉넉한 2열과 트렁크 공간으로 4인 가족 패밀리카로 종결됨." }],
        cons: [{ title: "🐢 약간 아쉬운 출력 (20i)", severity: "★★★☆☆", desc: "184마력으로 시내 주행은 문제없으나 고속도로 추월 시 20d나 30e 대비 펀치력이 다소 부족함." }, { title: "🔥 트랜스퍼 케이스 떨림 고질병", severity: "★★★★☆", desc: "BMW xDrive 공통 고질병으로 저속 유턴 시 드드득 거리는 진동 발생 시 수리비 꽤 나옴." }],
        maintenance: [{ name: "엔진오일", spec: "LL-01 FE (5.2L)", search: "BMW X3 20i 엔진오일" }, { name: "TC오일 (트랜스퍼)", spec: "DTF-1 규격", search: "BMW TC오일" }]
    },

    /* ---------------- X5 / X6 ---------------- */
    "x5_30d": {
        title: "BMW X5 (G05)", subtitle: "2019.01 ~ 2023.07 | 준대형 SUV | 30d 디젤", tags: ["#SUV의_교과서", "#디젤끝판왕", "#하차감_최고"], specs: { mpg: "10.0", power: "265", cc: "2,993" },
        commonOptions: "어댑티브 LED 헤드라이트, 파노라마 글라스 루프, 전동식 테일게이트, 컴포트 엑세스, 드라이빙 어시스턴트 프로페셔널",
        trims: [{ name: "M Sport Pkg", price: "약 1.06억 원", isRec: true, options: "<strong class='text-emerald-700'>[가장 인기 많은 트림]</strong><br>• M 에어로다이내믹 범퍼<br>• M 스티어링 휠 / M 브레이크<br>• 크리스탈 기어 노브 적용" }],
        pros: [{ title: "⚙️ 2축 에어 서스펜션", desc: "차고 높이 조절 및 적재 모드 지원. 승차감과 오프로드 성능 양립." }, { title: "⚙️ ZF 8단 미션 매칭", desc: "B57 엔진과의 궁합이 좋아 변속 충격이 거의 없고 토크감이 예술임." }],
        cons: [{ title: "🔥 트랜스퍼 케이스 떨림", severity: "★★★★★", desc: "저속 유턴이나 가속 시 드드득 거림. 타이어 마모도 편차에 매우 민감하여 타이어 관리가 생명임." }, { title: "🩸 에어 서스펜션 누설", severity: "★★★☆☆", desc: "주머니 터짐 현상으로 아침에 차고가 주저앉아 있을 수 있음 (수리비 약 100~200만 원)." }],
        maintenance: [{ name: "엔진오일", spec: "LL-04 규격 (6.5L)", search: "BMW X5 G05 엔진오일 LL-04" }, { name: "타이어(20인치)", spec: "전 275/45 / 후 305/40", search: "275 45 20 타이어" }]
    },
    "bmw_f15_30d": {
        title: "BMW X5 (F15)", subtitle: "2013.11 ~ 2018.12 | 준대형 SUV | 30d 디젤", tags: ["#가성비대형SUV", "#캠핑용수입차", "#육중함"], specs: { mpg: "12.3", power: "258", cc: "2,993" },
        commonOptions: "HUD, 파노라마 선루프, 어라운드 뷰, 파워 테일게이트",
        trims: [{ name: "30d xDrive", price: "9,000만 원대", isRec: true, options: "• 19인치 알로이 휠<br>• 가죽 대시보드 마감<br>• 하만카돈 서라운드 사운드" }],
        pros: [{ title: "💪 고장 안 나는 명기 N57/B57 엔진", desc: "3.0 직렬 6기통 디젤 엔진의 회전 질감이 뛰어나며 내구성이 국산차 대비 압도적으로 좋음." }, { title: "📉 훌륭한 중고차 가성비", desc: "3~4천만 원대에 BMW 특유의 운전 재미를 갖춘 프리미엄 대형 SUV를 탈 수 있음." }],
        cons: [{ title: "🎈 뒤쪽 에어스프링 터짐 (고질병)", severity: "★★★★★", desc: "무거운 차체 탓에 리어 에어 서스펜션 주머니가 찢어져 차가 주저앉는 현상이 100% 옴." }, { title: "🔥 요소수(SCR) 시스템 고장", severity: "★★★★☆", desc: "SCR 노즐 막힘이나 펌프 고장 시 수백만 원의 수리비가 발생함." }],
        maintenance: [{ name: "리어 에어스프링", spec: "애프터마켓 부품 추천", search: "BMW F15 에어서스" }, { name: "디퍼런셜 오일", spec: "전/후륜 모두 교환", search: "BMW F15 데후오일" }]
    },

    /* ---------------- 7시리즈 ---------------- */
    "bmw_g11_730d": {
        title: "BMW 7시리즈 (G11)", subtitle: "2015.10 ~ 2022.06 | 대형 플래그십 세단 | 730d 디젤", tags: ["#S클래스_라이벌", "#스포티한_플래그십", "#사장님차"], specs: { mpg: "12.2", power: "265", cc: "2,993" },
        commonOptions: "레이저 라이트, 에어 서스펜션, 소프트 클로징, 디스플레이 키",
        trims: [{ name: "730Ld xDrive (롱바디)", price: "1.4억 원대", isRec: true, options: "<strong class='text-emerald-700'>[2열 거주성 극대화]</strong><br>• 이그제큐티브 라운지 시트<br>• 뒷좌석 모니터<br>• 바워스 앤 윌킨스 사운드" }],
        pros: [{ title: "🚀 플래그십인데 코너링이 예술", desc: "카본 코어(탄소섬유) 플랫폼 적용으로 차체가 매우 가벼워 S클래스에서는 느낄 수 없는 날렵한 운전 재미가 있음." }, { title: "✨ 최첨단 옵션의 집약체", desc: "제스처 컨트롤, 레이저 라이트 등 당시 최첨단 기술이 모두 적용되어 매우 화려함." }],
        cons: [{ title: "👑 S클래스에 밀리는 승차감", severity: "★★★★☆", desc: "탄탄한 세팅 탓에 뒷좌석 회장님 입장에서는 벤츠 S클래스의 매직바디컨트롤 승차감보다 떨어짐." }, { title: "💸 디스플레이 키 배터리 및 고장", severity: "★★★☆☆", desc: "화려한 디스플레이 스마트키가 무겁고 배터리가 빨리 닳으며 떨어뜨리면 수리비가 엄청남." }],
        maintenance: [{ name: "엔진오일", spec: "LL-04 (6.5L)", search: "BMW G11 730d 엔진오일" }]
    },
    "bmw_f01_730d": {
        title: "BMW 7시리즈 (F01)", subtitle: "2008.11 ~ 2015.10 | 대형 플래그십 세단 | 730d 디젤", tags: ["#수리비지옥", "#명차와똥차사이", "#디자인명작"], specs: { mpg: "15.2", power: "258", cc: "2,993" },
        commonOptions: "HUD, 압축도어(소프트클로징), 전자식 파킹 브레이크, 어라운드 뷰",
        trims: [{ name: "730Ld (롱바디)", price: "1.2억 원대", isRec: true, options: "• 뒷좌석 전동시트<br>• 선블라인드<br>• 뒷좌석 듀얼 모니터" }],
        pros: [{ title: "🎨 세월이 지나도 중후한 디자인", desc: "BMW 특유의 콧구멍(키드니 그릴)이 적당한 크기라 클래식하고 웅장한 맛이 있음." }],
        cons: [{ title: "🔥 엔진오일 누유 및 먹는 하마", severity: "★★★★★", desc: "밸브스템씰(가이드고무) 경화로 엔진오일을 엄청나게 퍼먹으며 하부 누유가 기본 패시브임." }, { title: "💨 DPF 및 하체 부품 노후화", severity: "★★★★★", desc: "연식이 오래되어 에어서스 터짐, DPF 막힘 등 차값보다 수리비가 배로 나오는 수리비 지옥 차량임." }],
        maintenance: [{ name: "가이드고무", spec: "엔진오일 소모 시 필수", search: "BMW F01 가이드고무 작업" }]
    }
});
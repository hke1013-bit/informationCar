// js/data_chevrolet.js

carData.brands.chevrolet = { name: "쉐보레 (Chevrolet)", type: "domestic" };

carData.models.chevrolet = [
    { id: "spark", name: "스파크 (Spark)" },
    { id: "malibu", name: "말리부 (Malibu)" },
    { id: "trax", name: "트랙스 크로스오버" },
    { id: "trailblazer", name: "트레일블레이저" },
    { id: "cruze", name: "크루즈 (Cruze)" }
];

carData.generations.spark = [
    { id: "spark_m400", name: "더 넥스트 스파크 (15~22년)" }
];
carData.generations.malibu = [
    { id: "malibu_15t", name: "올 뉴 말리부 1.5 터보 (16~22년)" }
];
carData.generations.trax = [
    { id: "trax_12t", name: "트랙스 크로스오버 1.2 터보 (23년~현재)" }
];
carData.generations.trailblazer = [
    { id: "trailblazer_135t", name: "트레일블레이저 1.35 터보 (20년~현재)" }
];
carData.generations.cruze = [
    { id: "cruze_j300_18g", name: "크루즈 (J300) 1.8 가솔린 (08~17년)" }
];

Object.assign(carData.details, {
    /* ---------------- 스파크 ---------------- */
    "spark_m400": {
        title: "쉐보레 더 넥스트 스파크", subtitle: "2015.07 ~ 2022.09 | 경차 | 1.0 가솔린", tags: ["#단단한경차", "#고속안정성", "#주행감1위"], specs: { mpg: "15.0", power: "75", cc: "999" },
        commonOptions: "초고장력 강판 73%, 전방충돌 경고, 차선이탈 경고",
        trims: [{ name: "LT 플러스", price: "1,400만 원대", isRec: true, options: "<strong class='text-emerald-700'>[가성비 중고 트림]</strong><br>• 1열 열선 시트<br>• 스마트키<br>• 14인치 알로이 휠" }],
        pros: [{ title: "🛡️ 경차를 뛰어넘는 주행 안정성", desc: "고속도로에서 100km/h 이상 달려도 모닝이나 레이와 달리 바닥에 착 깔리는 묵직함이 있음." }, { title: "💪 탱크 같은 튼튼한 뼈대", desc: "초고장력 강판을 엄청나게 발라놔서 사고 시 탑승자 생존 확률이 경차 중 가장 높음." }],
        cons: [{ title: "💸 비싼 쉐보레 부품값", severity: "★★★★☆", desc: "엔진오일만 갈아도 현대기아 대비 1.5배 비싸며, 외판 수리 시 수입차 오너가 된 기분을 느낌." }, { title: "좁은 뒷좌석과 트렁크", severity: "★★★☆☆", desc: "모닝보다도 2열이 좁게 느껴지며 수납공간이 매우 부족함." }],
        maintenance: [{ name: "엔진오일", spec: "0W-20 (3.2L) dexos1", search: "스파크 0W-20 엔진오일" }, { name: "미션오일", spec: "CVT 전용", search: "스파크 미션오일" }]
    },

    /* ---------------- 말리부 ---------------- */
    "malibu_15t": {
        title: "쉐보레 올 뉴 말리부", subtitle: "2016.04 ~ 2022.08 | 중형 세단 | 1.5 가솔린 터보", tags: ["#기본기탄탄", "#광활한실내", "#보령미션"], specs: { mpg: "13.0", power: "166", cc: "1,490" },
        commonOptions: "8 에어백, 전자식 파킹 브레이크, 스마트키, 마이링크 디스플레이",
        trims: [{ name: "LTZ", price: "2,900만 원대", isRec: true, options: "• 1열 통풍시트<br>• 풀 가죽 시트<br>• 19인치 알로이 휠" }],
        pros: [{ title: "📏 그랜저에 맞먹는 광활한 크기", desc: "전장이 4.9미터를 넘어 당시 쏘나타, K5를 뒷좌석과 트렁크 크기로 완벽하게 압도함." }, { title: "고속 주행 안정감", desc: "탄탄한 하체 세팅으로 쉐보레 특유의 묵직하고 신뢰감 있는 코너링을 선사함." }],
        cons: [{ title: "⚙️ 악명 높은 젠3 보령미션", severity: "★★★★★", desc: "미션 반응이 멍청한 것은 둘째치고, 주행거리 누적 시 미션이 퍼지는 고질병이 여전함." }, { title: "🥱 플라스틱 도배된 싼티 실내", severity: "★★★★☆", desc: "우레탄과 싸구려 플라스틱을 남발해 천만 원대 차를 탄 것 같은 실내 감성을 줌." }],
        maintenance: [{ name: "엔진오일", spec: "5W-30 dexos1 (4.0L)", search: "올뉴말리부 1.5 엔진오일" }, { name: "미션오일", spec: "Dexron VI", search: "보령미션오일" }]
    },

    /* ---------------- 트랙스 크로스오버 ---------------- */
    "trax_12t": {
        title: "쉐보레 트랙스 크로스오버", subtitle: "2023.03 ~ 현재 | CUV | 1.2 가솔린 터보", tags: ["#시작가2천", "#디자인대박", "#가성비"], specs: { mpg: "12.7", power: "139", cc: "1,199" },
        commonOptions: "오토 홀드, LED 헤드램프, 차선 유지 보조, 전방 충돌 경고",
        trims: [{ name: "ACTIV", price: "2,681만 원", isRec: true, options: "<strong class='text-emerald-700'>[아웃도어 디자인 특화]</strong><br>• 11인치 컬러 터치스크린<br>• 1열 통풍 시트<br>• 루프랙" }],
        pros: [{ title: "💰 미친 가성비의 시작 가격", desc: "2,052만 원부터 시작하는 가격으로 아반떼 살 돈으로 멋진 CUV를 살 수 있게 해줌." }, { title: "📏 셀토스보다 넓은 실내", desc: "휠베이스가 2,700mm로 차급을 뛰어넘는 2열 레그룸을 뽑아냄." }],
        cons: [{ title: "🫨 3기통 1.2 터보의 한계", severity: "★★★☆☆", desc: "정차 시 3기통 특유의 덜덜거리는 진동이 핸들로 꽤 많이 올라옴." }, { title: "🔊 아쉬운 방음과 플라스틱", severity: "★★★☆☆", desc: "가격을 낮춘 만큼 도어트림 대시보드가 전부 깡플라스틱이며 하체 소음 유입이 있음." }],
        maintenance: [{ name: "엔진오일", spec: "0W-20 dexos1 Gen3", search: "트랙스 크로스오버 엔진오일" }]
    },

    /* ---------------- 트레일블레이저 ---------------- */
    "trailblazer_135t": {
        title: "쉐보레 트레일블레이저", subtitle: "2020.01 ~ 현재 | 소형 SUV | 1.35 가솔린 터보", tags: ["#탄탄한기본기", "#Z링크", "#안전성"], specs: { mpg: "12.9", power: "156", cc: "1,341" },
        commonOptions: "전방 충돌 경고, 차선 유지 보조, 8인치 디스플레이",
        trims: [{ name: "RS (AWD)", price: "2,900만 원대", isRec: true, options: "<strong class='text-emerald-700'>[4륜+9단 미션+Z링크 필수]</strong><br>• 18인치 전면가공 휠<br>• 스포츠 매쉬 그릴<br>• D컷 스티어링 휠" }],
        pros: [{ title: "⚙️ AWD 모델의 완벽한 셋팅", desc: "4륜 선택 시 들어가는 9단 자동미션과 Z링크 서스펜션 조합이 승차감과 고속 코너링을 예술로 만듦." }, { title: "🛡️ 동급 최고의 안전성", desc: "문을 닫아보면 쇳덩어리 소리가 날 정도로 차체가 두껍고 튼튼함." }],
        cons: [{ title: "💸 투싼 뺨치는 비싼 가격", severity: "★★★★☆", desc: "RS 풀옵션을 찍으면 3,300만 원이 넘어가 상위 급인 스포티지나 투싼과 겹침." }, { title: "좁은 후방 시야", severity: "★★★☆☆", desc: "리어 글라스가 좁아 룸미러를 통한 후방 시야가 다소 답답함." }],
        maintenance: [{ name: "엔진오일", spec: "0W-20 dexos1 (4.5L)", search: "트레일블레이저 엔진오일" }, { name: "미션오일", spec: "9단 자동용", search: "트레일블레이저 미션오일" }]
    },

    /* ---------------- 크루즈 (라세티 프리미어) ---------------- */
    "cruze_j300_18g": {
        title: "쉐보레 크루즈 (J300)", subtitle: "2008.11 ~ 2017.01 | 준중형 세단 | 1.8 가솔린", tags: ["#라프", "#탱크장갑차", "#보령미션의_전설"], specs: { mpg: "11.3", power: "142", cc: "1,796" },
        commonOptions: "듀얼 에어백, 매뉴얼 에어컨, 16인치 휠",
        trims: [{ name: "1.8 LTZ", price: "2,100만 원대", isRec: true, options: "• 가죽 시트<br>• 크루즈 컨트롤<br>• 17인치 알로이 휠" }],
        pros: [{ title: "🛡️ 독일차 버금가는 묵직한 하체", desc: "당시 종잇장 같던 아반떼(MD)와 비교할 수 없는 묵직한 핸들링과 고속도로 주행 안정감을 보여줌." }],
        cons: [{ title: "💥 젠1, 젠2 보령미션의 저주", severity: "★★★★★", desc: "미션 내부 부품이 깨지면서 쇳가루가 도는 치명적 결함으로 미션 오버홀(약 100만 원)을 평생 안고 가야 함." }, { title: "🔥 엔진오일/냉각수 혼유 고질병", severity: "★★★★★", desc: "엔진 오일쿨러 가스켓이 터져 냉각수에 오일이 섞이는(초코우유 현상) 고질병이 100% 확률로 옴." }],
        maintenance: [{ name: "미션오일", spec: "Dexron VI (자주 교환)", search: "보령미션오일" }, { name: "엔진오일", spec: "5W-30 (4.5L)", search: "크루즈 1.8 엔진오일" }]
    }
});
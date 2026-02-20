// js/data_kia.js

// 1. 브랜드 등록 (안전장치: core가 먼저 로드되었으므로 바로 덮어씀)
carData.brands.kia = { name: "기아 (Kia)", type: "domestic" };

// 2. 모델 등록
carData.models.kia = [
    { id: "sorento", name: "쏘렌토 (Sorento)" },
    { id: "carnival", name: "카니발 (Carnival)" },
    { id: "sportage", name: "스포티지 (Sportage)" },
    { id: "k5", name: "K5" },
    { id: "k8_k7", name: "K8 / K7" },
    { id: "ray", name: "레이 (Ray)" },
    { id: "morning", name: "모닝 (Morning)" },
    { id: "seltos", name: "셀토스 (Seltos)" },
    { id: "ev6", name: "EV6" },
    { id: "mohave", name: "모하비 (Mohave)" }
];

// 3. 세대 등록
carData.generations.sorento = [
    { id: "sorento_mq4_22d", name: "MQ4 2.2 디젤 (20년~현재)" },
    { id: "sorento_um_20d", name: "UM 2.0 디젤 (14~20년)" }
];
carData.generations.carnival = [
    { id: "carnival_ka4_22d", name: "KA4 2.2 디젤 (20년~현재)" },
    { id: "carnival_yp_22d", name: "YP 2.2 디젤 (14~20년)" }
];
carData.generations.sportage = [
    { id: "sportage_nq5_16t", name: "NQ5 1.6 터보 (21년~현재)" },
    { id: "sportage_ql_17d", name: "QL 1.7 디젤 (15~21년)" }
];
carData.generations.k5 = [
    { id: "k5_dl3_20g", name: "DL3 2.0 가솔린 (19년~현재)" },
    { id: "k5_jf_20g", name: "JF 2.0 가솔린 (15~19년)" },
    { id: "k5_tf_20g", name: "TF 1세대 2.0 가솔린 (10~15년)" }
];
carData.generations.k8_k7 = [
    { id: "k8_gl3_25g", name: "K8 (GL3) 2.5 가솔린 (21년~현재)" },
    { id: "k7_yg_24g", name: "K7 (YG) 2.4 가솔린 (16~21년)" },
    { id: "k7_vg_24g", name: "K7 1세대 (VG) 2.4 가솔린 (09~16년)" }
];
carData.generations.ray = [
    { id: "ray_tam_10g", name: "더 뉴 레이 1.0 가솔린 (17년~현재)" }
];
carData.generations.morning = [
    { id: "morning_ja_10g", name: "모닝 (JA) 1.0 가솔린 (17년~현재)" },
    { id: "morning_ta_10g", name: "올 뉴 모닝 (TA) 1.0 가솔린 (11~17년)" }
];
carData.generations.seltos = [
    { id: "seltos_sp2_16t", name: "셀토스 (SP2) 1.6 터보 (19년~현재)" }
];
carData.generations.ev6 = [
    { id: "ev6_cv_lr", name: "EV6 롱레인지 2WD (21년~현재)" }
];
carData.generations.mohave = [
    { id: "mohave_master_30d", name: "모하비 더 마스터 3.0 디젤 (19년~현재)" },
    { id: "mohave_hm_30d", name: "모하비 (HM) 3.0 디젤 (08~19년)" }
];

// 4. 상세 데이터 병합
Object.assign(carData.details, {

    /* ---------------- 쏘렌토 ---------------- */
    "sorento_mq4_22d": {
        title: "기아 쏘렌토 (MQ4)", subtitle: "2020.03 ~ 현재 | 중형 SUV | 2.2 디젤", tags: ["#캠핑_최강자", "#국민SUV", "#넓은_트렁크"], specs: { mpg: "14.3", power: "202", cc: "2,151" },
        commonOptions: "8 에어백, 다중 충돌방지 자동 제동, 전방 충돌방지 보조, LED 헤드램프, 전자식 파킹 브레이크(EPB)",
        trims: [{ name: "노블레스 (Noblesse)", price: "약 3,600만 원", isRec: true, options: "<strong class='text-emerald-700'>[가장 완벽한 패밀리 SUV 셋팅]</strong><br>• 12.3인치 슈퍼비전 클러스터<br>• 서라운드 뷰 모니터" }],
        pros: [{ title: "🏕️ 완벽한 공간 활용성", desc: "2열 시트가 완벽히 평탄화(풀플랫)되어 차박 캠핑을 떠나기에 최상의 조건을 갖춤." }, { title: "⚡ 습식 8단 DCT의 직결감", desc: "변속 속도가 매우 빠르고 동력 손실이 적어 시원한 가속감을 줌." }],
        cons: [{ title: "⚙️ DCT 저단 울컥거림", severity: "★★★☆☆", desc: "막히는 시내 주행 시 1-2단 구간에서 듀얼 클러치 특유의 울컥거림 존재." }, { title: "💧 에바 가루 및 냄새", severity: "★★☆☆☆", desc: "에어컨 가동 후 건조를 제대로 하지 않으면 쉰내가 심하게 남." }],
        maintenance: [{ name: "엔진오일", spec: "0W-20 C5 (5.6L)", search: "쏘렌토 MQ4 디젤 엔진오일" }, { name: "요소수", spec: "AdBlue 규격", search: "유록스 요소수" }]
    },
    "sorento_um_20d": {
        title: "기아 쏘렌토 (UM)", subtitle: "2014.08 ~ 2020.03 | 중형 SUV | 2.0 디젤", tags: ["#올뉴쏘렌토", "#중고차_스테디셀러", "#가성비패밀리카"], specs: { mpg: "13.5", power: "186", cc: "1,995" },
        commonOptions: "6 에어백, 전/후방 주차보조, 크루즈 컨트롤, 1열 열선 및 통풍 시트(트림별 상이)",
        trims: [{ name: "프레스티지", price: "2,985만 원", isRec: true, options: "• 버튼시동 스마트키<br>• 1열 통풍시트<br>• 스마트 파워 테일게이트" }],
        pros: [{ title: "📏 싼타페 압도하는 실내 크기", desc: "동세대 싼타페 DM보다 휠베이스가 길어 2열 레그룸과 트렁크가 훨씬 넓음." }, { title: "🛡️ 초고장력 강판 적용", desc: "차체가 묵직하고 고속 주행 안정성이 매우 뛰어남." }],
        cons: [{ title: "❄️ 에바 가루 결함 (올뉴)", severity: "★★★★★", desc: "14~17년식 모델에서 에어컨 송풍구로 흰색 가루가 나오는 결함 확인 필수." }, { title: "💨 DPF 막힘 현상", severity: "★★★★☆", desc: "시내 주행만 반복할 경우 DPF에 매연이 쌓여 막히는 고질병." }],
        maintenance: [{ name: "엔진오일", spec: "5W-30 DPF용 (6.3L)", search: "쏘렌토 UM 엔진오일" }, { name: "에어컨필터", spec: "활성탄 권장", search: "올뉴쏘렌토 에어컨필터" }]
    },

    /* ---------------- 카니발 ---------------- */
    "carnival_ka4_22d": {
        title: "기아 카니발 (KA4)", subtitle: "2020.08 ~ 현재 | 대형 MPV | 2.2 디젤", tags: ["#독보적_미니밴", "#아빠차_1위", "#버스전용차로"], specs: { mpg: "13.0", power: "202", cc: "2,151" },
        commonOptions: "전방 충돌방지 보조, 스마트 파워 슬라이딩 도어, 다중 충돌방지 자동 제동",
        trims: [{ name: "9인승 시그니처", price: "4,105만 원", isRec: true, options: "<strong class='text-emerald-700'>[세금 혜택 + 버스전용차로 진리]</strong><br>• 12.3인치 내비게이션<br>• 서라운드 뷰 모니터" }],
        pros: [{ title: "👑 대체 불가한 대한민국 1위 밴", desc: "대형 SUV 3열과는 비교가 안 되는 거주성과 슬라이딩 도어의 압도적 편의성." }, { title: "🚌 9인승의 엄청난 혜택", desc: "6명 이상 탑승 시 고속도로 버스전용차로를 달릴 수 있고 사업자 부가세 환급 가능." }],
        cons: [{ title: "🫨 2/3열 멀미와 승차감", severity: "★★★★☆", desc: "차가 길고 무거워 방지턱을 넘을 때 뒷좌석 승객이 크게 흔들리며 멀미를 유발함." }, { title: "🔊 디젤 엔진 공명음", severity: "★★★☆☆", desc: "정차 시 특정 RPM에서 실내를 울리는 디젤 특유의 공명음(웅~웅~) 존재." }],
        maintenance: [{ name: "엔진오일", spec: "0W-20 C5 (5.6L)", search: "카니발 KA4 엔진오일" }, { name: "요소수", spec: "AdBlue", search: "요소수" }]
    },
    "carnival_yp_22d": {
        title: "기아 카니발 (YP)", subtitle: "2014.06 ~ 2020.08 | 대형 MPV | 2.2 디젤", tags: ["#올뉴카니발", "#다둥이아빠", "#차박개조"], specs: { mpg: "11.4", power: "202", cc: "2,199" },
        commonOptions: "6 에어백, 오토 라이트 컨트롤, 크루즈 컨트롤, 1열 열선",
        trims: [{ name: "9인승 프레스티지", price: "3,200만 원대", isRec: true, options: "• 오토 슬라이딩 도어(필수)<br>• 버튼시동 스마트키<br>• 1열 통풍시트" }],
        pros: [{ title: "📉 훌륭한 중고 가성비", desc: "1천만 원대에 상태 좋은 패밀리 밴을 구할 수 있어 다둥이 아빠들에게 최고." }, { title: "🛠️ 넓은 애프터마켓", desc: "레일 개조, 차박 평탄화, 방음 등 튜닝 인프라가 대한민국 최고 수준임." }],
        cons: [{ title: "🔊 지옥의 공명음 (올뉴 한정)", severity: "★★★★★", desc: "초기형 모델 겨울철 정차 시 귀를 먹먹하게 만드는 엄청난 진동과 공명음 결함." }, { title: "🚪 오토 슬라이딩 도어 고장", severity: "★★★★☆", desc: "연식이 차면 문이 닫히다 튕겨 나오는 슬라이딩 도어 모터(와이어) 고장 빈번함." }],
        maintenance: [{ name: "엔진오일", spec: "5W-30 (6.3L)", search: "올뉴카니발 엔진오일" }, { name: "연료필터", spec: "디젤 수분 분리", search: "카니발 YP 연료필터" }]
    },

    /* ---------------- 스포티지 ---------------- */
    "sportage_nq5_16t": {
        title: "기아 스포티지 (NQ5)", subtitle: "2021.07 ~ 현재 | 준중형 SUV | 1.6 터보", tags: ["#커브드디스플레이", "#투싼_압살", "#준중형1위"], specs: { mpg: "12.5", power: "180", cc: "1,598" },
        commonOptions: "다중 충돌방지 자동 제동, 차로 유지 보조, 전자식 파킹 브레이크",
        trims: [{ name: "시그니처", price: "3,193만 원", isRec: true, options: "• 파노라믹 커브드 디스플레이<br>• 1열 열선/통풍 시트<br>• 전자식 변속 다이얼(SBW)" }],
        pros: [{ title: "✨ K8급 실내 디자인", desc: "파노라믹 커브드 디스플레이 적용으로 경쟁 모델인 투싼의 실내를 완벽히 압도함." }, { title: "📏 엄청나게 커진 차체", desc: "이전 세대 대비 확연히 커져서 패밀리카로 써도 무방할 만큼 2열이 쾌적함." }],
        cons: [{ title: "⚙️ 건식 7단 DCT의 꿀렁임", severity: "★★★☆☆", desc: "막히는 길에서 저단 변속 시 듀얼클러치 특유의 이질감이 거슬림." }, { title: "💸 비싼 차량 가격", severity: "★★★☆☆", desc: "옵션을 넣다 보면 쏘렌토 깡통 가격과 겹쳐 심각한 선택 장애를 유발함." }],
        maintenance: [{ name: "엔진오일", spec: "0W-20 (4.8L)", search: "스포티지 NQ5 엔진오일" }, { name: "와이퍼", spec: "650 / 400mm", search: "스포티지 NQ5 와이퍼" }]
    },
    "sportage_ql_17d": {
        title: "기아 스포티지 (QL)", subtitle: "2015.09 ~ 2021.07 | 준중형 SUV | 1.7 디젤", tags: ["#볼링공_디자인", "#스포티주행", "#가성비SUV"], specs: { mpg: "15.0", power: "141", cc: "1,685" },
        commonOptions: "6 에어백, 경사로 밀림방지, ISG(스톱앤고)",
        trims: [{ name: "노블레스", price: "2,500만 원대", isRec: true, options: "• 버튼시동 스마트키<br>• 1열 통풍 및 열선시트<br>• 18인치 알로이 휠" }],
        pros: [{ title: "⛽ 1.7 디젤의 훌륭한 연비", desc: "세금도 저렴하고 실주행 연비가 매우 높아 출퇴근용으로 가성비가 최고임." }, { title: "🏃 탄탄하고 스포티한 주행감", desc: "서스펜션 세팅이 단단해 코너링 시 롤링이 적고 주행 질감이 경쾌함." }],
        cons: [{ title: "👀 포르쉐를 닮으려다 만 디자인", severity: "★★★★☆", desc: "헤드램프가 보닛 위로 올라간 디자인 탓에 '망둥어', '볼링공'이라는 조롱을 많이 받음." }, { title: "⚙️ 건식 7단 DCT 쇳소리", severity: "★★★★★", desc: "10만km 부근 미션에서 '찰찰찰' 쇳소리 발생 및 플라이휠 교체(약 100만 원) 고질병." }],
        maintenance: [{ name: "엔진오일", spec: "5W-30 (5.3L)", search: "스포티지 1.7 엔진오일" }, { name: "미션오일", spec: "건식 DCT 전용", search: "스포티지 QL 미션오일" }]
    },

    /* ---------------- K5 ---------------- */
    "k5_dl3_20g": {
        title: "기아 K5 (DL3)", subtitle: "2019.12 ~ 현재 | 중형 세단 | 2.0 가솔린", tags: ["#과학차의_진화", "#쏘나타_압살", "#역대급디자인"], specs: { mpg: "13.0", power: "160", cc: "1,999" },
        commonOptions: "9 에어백, 전방 충돌방지 보조, 전자식 변속 다이얼(SBW), 전동식 파킹 브레이크",
        trims: [{ name: "노블레스", price: "2,783만 원", isRec: true, options: "• 12.3인치 클러스터<br>• 서라운드 뷰 모니터<br>• 앞좌석 통풍/열선 시트" }],
        pros: [{ title: "🎨 동급 디자인 1티어", desc: "패스트백 스타일의 완벽한 측면 라인과 심장박동을 형상화한 DRL로 쏘나타 판매량을 완전히 압살함." }, { title: "📐 3세대 플랫폼 적용", desc: "무게 중심이 낮아져 코너링 한계가 높아지고 고속 주행 안정감이 발군임." }],
        cons: [{ title: "🏎️ 지울 수 없는 '과학차' 꼬리표", severity: "★★★☆☆", desc: "양아치 운전자들이 많이 탄다는 편견 때문에 운전 시 쓸데없는 시비를 당할 수 있음." }, { title: "🔊 얇은 유리와 하체 소음", severity: "★★★★☆", desc: "스포티한 세팅 탓인지 바닥에서 올라오는 노면 소음과 풍절음 방어가 다소 미흡함." }],
        maintenance: [{ name: "엔진오일", spec: "0W-20 (4.3L)", search: "K5 DL3 엔진오일" }, { name: "에어컨필터", spec: "K5 3세대 전용", search: "K5 DL3 에어컨필터" }]
    },
    "k5_jf_20g": {
        title: "기아 K5 (JF)", subtitle: "2015.07 ~ 2019.12 | 중형 세단 | 2.0 가솔린", tags: ["#두개의얼굴", "#탄탄한기본기", "#무난함"], specs: { mpg: "12.1", power: "168", cc: "1,999" },
        commonOptions: "7 에어백, 경사로 밀림방지(HAC), 타이어 공기압 경보(TPMS)",
        trims: [{ name: "프레스티지", price: "2,500만 원대", isRec: true, options: "• 버튼시동 스마트키<br>• 1열 열선 및 통풍 시트<br>• 스마트 트렁크" }],
        pros: [{ title: "🛡️ LF쏘나타 급의 훌륭한 뼈대", desc: "초고장력 강판이 50% 이상 적용되어 1세대(TF) 대비 차체가 눈에 띄게 탄탄해짐." }, { title: "✌️ 모던(MX)과 스포티(SX) 디자인 선택", desc: "범퍼 디자인을 2가지로 나누어 출시해 취향에 맞는 매물 선택이 가능함." }],
        cons: [{ title: "🥱 다소 심심한 실내", severity: "★★★☆☆", desc: "1세대의 파격적인 디자인에 비해 너무 무난하고 심심해진 인테리어 레이아웃." }, { title: "🔊 CVVL 엔진 소음", severity: "★★★☆☆", desc: "엔진 특성상 주행거리가 누적되면 '찰찰찰' 거리는 태핏 소음이 크게 들림." }],
        maintenance: [{ name: "엔진오일", spec: "5W-30 (4.0L)", search: "K5 JF 엔진오일" }, { name: "와이퍼", spec: "650 / 450mm", search: "K5 2세대 와이퍼" }]
    },
    "k5_tf_20g": {
        title: "기아 K5 1세대 (TF)", subtitle: "2010.04 ~ 2015.07 | 중형 세단 | 2.0 가솔린", tags: ["#피터슈라이어", "#디자인혁명", "#전설의시작"], specs: { mpg: "13.0", power: "165", cc: "1,998" },
        commonOptions: "운전석/동승석 에어백, VDC(차체자세제어)",
        trims: [{ name: "프레스티지", price: "2,500만 원대", isRec: true, options: "• 파노라마 선루프(인기 옵션)<br>• 18인치 불판 휠<br>• 앞좌석 열선 시트" }],
        pros: [{ title: "🎨 시대를 초월한 명작 디자인", desc: "피터 슈라이어 영입 후 기아차의 운명을 바꾼, 한국 자동차 역사상 가장 완벽한 비율의 중형 세단 디자인." }, { title: "💸 2~3백만 원대의 극강 가성비", desc: "현재 중고차 시장에서 연습용 첫차로 이만한 가성비를 내는 차가 없음." }],
        cons: [{ title: "🔥 세타2 엔진 결함 (스커핑)", severity: "★★★★★", desc: "엔진 실린더 벽을 긁어먹는 결함으로 경운기 소리가 나면 엔진 보링(약 150만 원) 확정임." }, { title: "🥫 엄청난 하체 소음과 부식", severity: "★★★★☆", desc: "철판이 얇아 깡통 구르는 소리가 나며 하체 부식이 꽤 많이 진행된 매물이 많음." }],
        maintenance: [{ name: "엔진오일", spec: "5W-30 (4.0L)", search: "1세대 K5 엔진오일" }, { name: "와이퍼", spec: "600 / 450mm", search: "K5 1세대 와이퍼" }]
    },

    /* ---------------- K8 / K7 ---------------- */
    "k8_gl3_25g": {
        title: "기아 K8 (GL3)", subtitle: "2021.04 ~ 현재 | 준대형 세단 | 2.5 가솔린", tags: ["#그랜저_라이벌", "#5미터_세단", "#에르고모션"], specs: { mpg: "12.0", power: "198", cc: "2,497" },
        commonOptions: "9 에어백, 전방 충돌방지 보조, 12.3인치 내비게이션, 다이얼식 기어",
        trims: [{ name: "노블레스", price: "3,510만 원", isRec: true, options: "• 파노라믹 커브드 디스플레이<br>• 서라운드 뷰 모니터<br>• 앞좌석 통풍 시트" }],
        pros: [{ title: "📏 그랜저 IG를 압도하는 5미터 크기", desc: "전장이 5,015mm로 대형차 버금가는 웅장한 크기와 광활한 실내를 자랑함." }, { title: "🎶 메리디안 프리미엄 사운드", desc: "옵션 선택 시 국산차 최고 수준의 해상도를 자랑하는 오디오 시스템을 경험할 수 있음." }],
        cons: [{ title: "👀 바디컬러 라디에이터 그릴 호불호", severity: "★★★★☆", desc: "그릴이 차체와 같은 색상으로 도색되어 있어 프론트 마스크 디자인에 대한 호불호가 극심함." }, { title: "🩸 2.5 스마트스트림 오일 감소", severity: "★★★☆☆", desc: "초기 연식 모델에서 엔진오일이 줄어드는 이슈가 있음." }],
        maintenance: [{ name: "엔진오일", spec: "0W-20 (5.8L)", search: "K8 2.5 가솔린 엔진오일" }, { name: "에어컨필터", spec: "K8 전용 규격", search: "K8 에어컨필터" }]
    },
    "k7_yg_24g": {
        title: "기아 K7 (YG)", subtitle: "2016.01 ~ 2021.04 | 준대형 세단 | 2.4 가솔린", tags: ["#올뉴K7", "#Z램프", "#중고가성비"], specs: { mpg: "11.2", power: "190", cc: "2,359" },
        commonOptions: "9 에어백, 후방 카메라, 크루즈 컨트롤, 전동식 파킹 브레이크",
        trims: [{ name: "프레스티지", price: "3,100만 원대", isRec: true, options: "• 음각(인탈리오) 그릴<br>• 1열 통풍 및 열선시트<br>• 풀 LED 헤드램프(선택)" }],
        pros: [{ title: "✨ Z 형상의 독보적인 램프 디자인", desc: "데이라이트와 테일램프에 적용된 Z 형상의 LED가 차량을 매우 세련되고 고급스럽게 만듦." }, { title: "☁️ 그랜저 IG보다 부드러운 승차감", desc: "동급 그랜저 IG가 다소 단단한 세팅인 반면, K7은 전통적인 고급 세단의 부드러운 승차감을 지향함." }],
        cons: [{ title: "🔊 세타2 엔진 소음 (스커핑)", severity: "★★★★★", desc: "냉간 시 탕탕탕 거리는 엔진 소음 발생. 보증 연장 여부 확인 및 오일 게이지 확인 필수." }, { title: "🧲 MDPS 조향 이질감", severity: "★★★☆☆", desc: "고속 주행 중 핸들이 자석처럼 툭툭 걸리는 느낌이 있어 보타 피로도가 있음." }],
        maintenance: [{ name: "엔진오일", spec: "5W-30 (4.8L)", search: "올뉴K7 2.4 엔진오일" }, { name: "와이퍼", spec: "650 / 450mm", search: "올뉴K7 와이퍼" }]
    },
    "k7_vg_24g": {
        title: "기아 K7 1세대 (VG)", subtitle: "2009.11 ~ 2016.01 | 준대형 세단 | 2.4 가솔린", tags: ["#면발광_최초", "#아이리스_차", "#양카이미지"], specs: { mpg: "11.8", power: "201", cc: "2,359" },
        commonOptions: "8 에어백, VDC, 버튼시동 스마트키, 1열 전동시트",
        trims: [{ name: "프레스티지", price: "3,000만 원대", isRec: true, options: "• 파노라마 선루프<br>• 1열 열선 시트<br>• HID 헤드램프" }],
        pros: [{ title: "💡 대한민국 면발광의 시초", desc: "당시 아우디에서나 쓰던 면발광 DRL을 눈썹처럼 넣어 밤에 보면 엄청난 포스를 뿜어냄." }, { title: "💸 3~4백만 원대 대형차", desc: "차값은 아반떼 중고보다 싸지만 공간은 대형차 수준이라 가성비가 훌륭함." }],
        cons: [{ title: "🔥 초기 GDi 엔진 노킹 결함", severity: "★★★★★", desc: "2.4 GDi 엔진의 실린더 긁힘 및 엔진오일 소모 증상이 매우 빈번함." }, { title: "🥫 하체 부식 및 소음", severity: "★★★★☆", desc: "리어 멤버나 하체 부품 부식이 잦고 주행 소음이 그랜저 HG 대비 크게 유입됨." }],
        maintenance: [{ name: "엔진오일", spec: "5W-30 (4.6L)", search: "1세대 K7 엔진오일" }, { name: "점화플러그", spec: "GDi 전용", search: "K7 2.4 점화플러그" }]
    },

    /* ---------------- 레이 ---------------- */
    "ray_tam_10g": {
        title: "기아 더 뉴 레이 (TAM)", subtitle: "2017.12 ~ 현재 | 경차 (박스카) | 1.0 가솔린", tags: ["#미니_캠핑카", "#공간의_마법사", "#감가방어_끝판왕"], specs: { mpg: "13.0", power: "76", cc: "998" },
        commonOptions: "경차 혜택(취등록세 면제, 톨게이트 반값), 슬라이딩 도어, 풋파킹 브레이크",
        trims: [{ name: "시그니처 (Signature)", price: "1,580만 원", isRec: true, options: "<strong class='text-emerald-700'>[최고 인기 트림]</strong><br>• 프로젝션 헤드램프<br>• 8인치 내비게이션<br>• 앞/뒷좌석 열선 시트" }],
        pros: [{ title: "📦 미니 밴 수준의 박스카 공간", desc: "실내고가 높아 개방감이 미쳤으며 뒷좌석을 접으면 엄청난 짐을 싣거나 차박이 가능함." }, { title: "🚪 B필러 리스 슬라이딩 도어", desc: "조수석 쪽에 기둥이 없어 문을 활짝 열고 짐을 싣거나 아이를 태우기 압도적으로 편함." }],
        cons: [{ title: "🐢 답답함을 넘어선 출력 부족", severity: "★★★★☆", desc: "차체는 무겁고 각진데 엔진은 76마력이라 오르막길이나 고속도로에서 에어컨을 끄게 됨." }, { title: "🌬️ 측면 풍에 매우 취약", severity: "★★★☆☆", desc: "고속 주행 시 옆에서 바람이 불면 차가 심하게 흔들려 핸들을 꽉 잡아야 함." }],
        maintenance: [{ name: "엔진오일", spec: "5W-20 (3.0L)", search: "레이 가솔린 엔진오일" }, { name: "에어컨필터", spec: "모닝/레이 공용", search: "기아 레이 에어컨필터" }]
    },

    /* ---------------- 모닝 ---------------- */
    "morning_ja_10g": {
        title: "기아 모닝 (JA)", subtitle: "2017.01 ~ 현재 | 경차 (해치백) | 1.0 가솔린", tags: ["#통뼈경차", "#가성비첫차", "#도심최적화"], specs: { mpg: "15.4", power: "76", cc: "998" },
        commonOptions: "경차 혜택, 타이어 공기압 경보장치, 경사로 밀림 방지(HAC)",
        trims: [{ name: "프레스티지", price: "1,350만 원대", isRec: true, options: "• 14인치 알로이 휠<br>• 인조가죽 및 1열 열선 시트<br>• 버튼시동 스마트키" }],
        pros: [{ title: "🛡️ 초고장력 강판 44% (통뼈 경차)", desc: "경차의 안전성 논란을 잠재우기 위해 뼈대를 엄청나게 보강해 주행 안정감이 훌륭함." }, { title: "🏃 짱짱한 코너링과 핸들링", desc: "토크벡터링 시스템 적용으로 작고 단단하게 코너를 도는 맛이 일품임." }],
        cons: [{ title: "🦵 아쉬운 뒷좌석 공간", severity: "★★★☆☆", desc: "레이나 스파크에 비해 2열 레그룸이 좁아 성인이 타기에는 매우 비좁음." }, { title: "⚙️ 4단 자동변속기의 한계", severity: "★★★☆☆", desc: "구형 4단 미션이라 고속도로에서 100km/h로 달려도 RPM이 3천을 넘어가 시끄러움." }],
        maintenance: [{ name: "엔진오일", spec: "5W-20 (3.0L)", search: "모닝 JA 엔진오일" }, { name: "와이퍼", spec: "600 / 350 / 250(후방)mm", search: "올뉴모닝 와이퍼" }]
    },
    "morning_ta_10g": {
        title: "기아 올 뉴 모닝 (TA)", subtitle: "2011.01 ~ 2017.01 | 경차 | 1.0 가솔린", tags: ["#국민경차", "#출퇴근용", "#3백만원대"], specs: { mpg: "15.2", power: "82", cc: "998" },
        commonOptions: "경차 혜택, 6 에어백, VSM(차세대 VDC)",
        trims: [{ name: "럭셔리", price: "1,200만 원대 (출시가)", isRec: true, options: "• 하이패스 룸미러<br>• 버튼시동 스마트키<br>• 15인치 블랙 럭셔리 휠" }],
        pros: [{ title: "🎨 세월이 지나도 귀여운 디자인", desc: "전면부 호랑이코 그릴과 둥글둥글한 라인이 지금 봐도 촌스럽지 않은 디자인임." }, { title: "💸 극강의 중고 가성비", desc: "300만 원대에 취등록세 없이 구매 가능해 마실용이나 배달용으로 최고." }],
        cons: [{ title: "🦗 고질적인 귀뚜라미 소리", severity: "★★★★☆", desc: "엔진 겉벨트(발전기 벨트) 장력 문제로 시동을 걸면 귀뚜라미 우는 쇳소리가 빈번함." }, { title: "🔥 가스켓 오일 누유", severity: "★★★☆☆", desc: "엔진 프론트 케이스 및 헤드 가스켓 쪽 미세 누유는 이 연식 모닝의 필수 수리 항목임." }],
        maintenance: [{ name: "엔진오일", spec: "5W-20 (3.0L)", search: "올뉴모닝 TA 엔진오일" }, { name: "겉벨트 셋트", spec: "텐셔너 포함", search: "올뉴모닝 겉벨트 세트" }]
    },

    /* ---------------- 셀토스 ---------------- */
    "seltos_sp2_16t": {
        title: "기아 셀토스 (SP2)", subtitle: "2019.07 ~ 현재 | 소형 SUV | 1.6 터보", tags: ["#소형SUV_1위", "#미니_쏘렌토", "#완벽한비율"], specs: { mpg: "12.7", power: "177", cc: "1,598" },
        commonOptions: "전방 충돌방지 보조, 차로 유지 보조, 다중 충돌방지 자동 제동",
        trims: [{ name: "시그니처", price: "2,520만 원", isRec: true, options: "• 18인치 전면가공 휠<br>• 1열 열선/통풍 및 동승석 전동<br>• LED DRL 및 헤드램프" }],
        pros: [{ title: "📏 급을 파괴하는 넉넉한 공간", desc: "소형 SUV 중 가장 큰 크기를 자랑하며 2열 성인 탑승 및 트렁크 활용도가 투싼 못지않음." }, { title: "🚀 1.6 터보의 시원한 가속력", desc: "작은 차체에 177마력 터보 엔진이 들어가 고속 주행이나 언덕길에서 전혀 답답함이 없음." }],
        cons: [{ title: "⚙️ 건식 7단 DCT의 한계", severity: "★★★★☆", desc: "페리 이전 모델의 경우 저속 꿀렁임과 클러치 팩 마모 이슈가 있음 (페리 후 8단 자동 변경)." }, { title: "🫨 다소 통통 튀는 승차감", severity: "★★★☆☆", desc: "토션빔(2WD) 적용과 단단한 서스펜션 세팅 탓에 방지턱 넘을 때 2열 승차감이 꽤 거침." }],
        maintenance: [{ name: "엔진오일", spec: "0W-20 (4.8L)", search: "셀토스 1.6 터보 엔진오일" }, { name: "와이퍼", spec: "600 / 450mm", search: "셀토스 와이퍼" }]
    },

    /* ---------------- EV6 ---------------- */
    "ev6_cv_lr": {
        title: "기아 EV6 (CV)", subtitle: "2021.08 ~ 현재 | 준중형 CUV (전기) | 롱레인지 2WD", tags: ["#고성능전기차", "#날렵함", "#주행거리갑"], specs: { mpg: "5.4(전비)", power: "225", cc: "모터" },
        commonOptions: "800V 초급속 충전 시스템, V2L, 배터리 컨디셔닝, 다이얼식 기어(SBW)",
        trims: [{ name: "어스 (Earth)", price: "5,595만 원", isRec: true, options: "<strong class='text-emerald-700'>[안전/편의 옵션 풀패키지]</strong><br>• 서라운드 뷰 모니터<br>• 1열 릴렉션 컴포트 시트<br>• 증강현실 HUD" }],
        pros: [{ title: "🏎️ 스포츠카 부럽지 않은 주행 질감", desc: "디자인만큼이나 차체가 낮게 깔려있어 코너를 감아 도는 핸들링과 가속 반응이 매우 날카로움." }, { title: "🔋 아이오닉5 대비 긴 주행거리", desc: "공기역학적 디자인 덕분에 동일 배터리임에도 전비가 미세하게 더 좋아 실주행 450km 이상 가능." }],
        cons: [{ title: "🤕 다소 답답한 2열 헤드룸", severity: "★★★☆☆", desc: "루프 라인이 쿠페처럼 떨어져 뒷좌석에 키 큰 성인이 타면 머리가 천장에 닿을 듯함." }, { title: "⚠️ ICCU 리콜 및 경고등", severity: "★★★★★", desc: "전원 공급 장치 불량으로 주행 중 멈추는 현대기아 전기차 공통 고질병 (무상수리 확인 필수)." }],
        maintenance: [{ name: "에어컨필터", spec: "전기차 전용 활성탄", search: "EV6 에어컨필터" }, { name: "타이어(19인치)", spec: "235/55 R19 EV전용", search: "EV6 19인치 타이어" }]
    },

    /* ---------------- 모하비 ---------------- */
    "mohave_master_30d": {
        title: "기아 모하비 더 마스터", subtitle: "2019.09 ~ 현재 | 대형 SUV | 3.0 디젤", tags: ["#조선_G바겐", "#상남자차", "#6기통디젤"], specs: { mpg: "9.4", power: "260", cc: "2,959" },
        commonOptions: "프레임 바디, 전자식 4WD, 12.3인치 내비게이션, 전방 충돌방지 보조, 풀 LED 헤드램프",
        trims: [{ name: "마스터즈 (6인승)", price: "5,286만 원", isRec: true, options: "<strong class='text-emerald-700'>[2열 독립 시트로 패밀리카 최적화]</strong><br>• 퀼팅 나파 가죽 시트<br>• 렉시콘 프리미엄 사운드<br>• HUD" }],
        pros: [{ title: "💪 국산 유일의 V6 3.0 디젤 엔진", desc: "4기통 딸딸이들과 차원이 다른 웅장한 엔진음과 57토크의 파워풀한 견인력을 뽐냄." }, { title: "🧱 튼튼한 바디 온 프레임 구조", desc: "탱크처럼 튼튼한 뼈대를 가져 대형 사고 시 탑승자 보호 능력이 매우 뛰어나고 오프로드에 강함." }],
        cons: [{ title: "🫨 우당탕탕 트럭 승차감", severity: "★★★★★", desc: "프레임 바디의 숙명으로 방지턱이나 요철을 지날 때 차체가 통째로 흔들려 2열 승객의 원성이 자자함." }, { title: "👴 15년 넘은 사골 뼈대", severity: "★★★★☆", desc: "껍데기만 최신이지 기본 설계가 2008년에 머물러 있어 첨단 주행감각을 기대하기 어려움." }],
        maintenance: [{ name: "엔진오일", spec: "5W-30 C3 (7.4L)", search: "모하비 3.0 디젤 엔진오일" }, { name: "요소수", spec: "더 마스터 필수", search: "디젤 요소수" }]
    },
    "mohave_hm_30d": {
        title: "기아 모하비 1세대 (HM)", subtitle: "2008.01 ~ 2019.09 | 대형 SUV | 3.0 디젤", tags: ["#사막의왕", "#캠핑트레일러", "#가성비명차"], specs: { mpg: "10.2", power: "250", cc: "2,959" },
        commonOptions: "프레임 바디, 파트타임/상시 4WD, 1열 열선 및 통풍(후기형)",
        trims: [{ name: "KV300 (상시 4륜)", price: "4,500만 원대", isRec: true, options: "• 전자제어 에어서스펜션(리어)<br>• 메모리 시트<br>• 크롬 휠" }],
        pros: [{ title: "⚙️ ZF 8단 미션의 축복 (11~15년식)", desc: "특정 연식(S2 엔진)에 독일 명품 ZF 8단 미션이 들어가 변속 체결감과 내구성이 전설로 남음." }, { title: "🏕️ 카라반 견인 끝판왕", desc: "무거운 프레임과 넘치는 토크 덕분에 2톤급 캠핑 카라반을 끌고 다니는 유저들에게 대체 불가 차량임." }],
        cons: [{ title: "💸 후륜 에어 서스펜션 터짐", severity: "★★★★☆", desc: "KV300 최고 등급에 들어간 뒷좌석 에어서스 주머니가 찢어지는 고질병(수리비 수십만 원) 발생." }, { title: "🥱 구닥다리 실내 인테리어", severity: "★★★☆☆", desc: "연식이 오래된 만큼 센터페시아 버튼이나 우드 트림이 90년대 차를 보는 것처럼 매우 올드함." }],
        maintenance: [{ name: "엔진오일", spec: "5W-30 (7.4L)", search: "모하비 구형 엔진오일" }, { name: "미션오일", spec: "ZF 8단 전용 (연식확인)", search: "모하비 ZF 미션오일" }]
    }

});
// js/data_hyundai.js

carData.brands.hyundai = { name: "현대 (Hyundai)", type: "domestic" };

carData.models.hyundai = [
    { id: "grandeur", name: "그랜저 (Grandeur)" },
    { id: "avante", name: "아반떼 (Avante)" },
    { id: "sonata", name: "쏘나타 (Sonata)" },
    { id: "santafe", name: "싼타페 (Santa Fe)" },
    { id: "palisade", name: "팰리세이드 (Palisade)" },
    { id: "tucson", name: "투싼 (Tucson)" },
    { id: "casper", name: "캐스퍼 (Casper)" },
    { id: "ioniq5", name: "아이오닉 5 (Ioniq 5)" },
    { id: "porter2", name: "포터2 (Porter II)" },
    { id: "staria", name: "스타리아/스타렉스" }
];

carData.generations.grandeur = [
    { id: "gn7_25g", name: "GN7 2.5 가솔린 (22년~현재)" },
    { id: "ig_24g", name: "IG 2.4 가솔린 (16~19년)" },
    { id: "hg_30g", name: "HG 3.0 가솔린 (11~16년)" }
];
carData.generations.avante = [
    { id: "avante_cn7_16g", name: "CN7 1.6 가솔린 (20년~현재)" },
    { id: "avante_ad_16g", name: "AD 1.6 가솔린 (15~18년)" },
    { id: "avante_md_16g", name: "MD 1.6 가솔린 (10~15년)" }
];
carData.generations.sonata = [
    { id: "sonata_dn8_20g", name: "DN8 2.0 가솔린 (19~23년)" },
    { id: "sonata_lf_20g", name: "LF 2.0 가솔린 (14~17년)" },
    { id: "sonata_yf_20l", name: "YF 2.0 LPi (09~14년)" }
];
carData.generations.santafe = [
    { id: "santafe_mx5_25t", name: "MX5 2.5 터보 (23년~현재)" },
    { id: "santafe_tm_22d", name: "TM 2.2 디젤 (18~20년)" },
    { id: "santafe_dm_20d", name: "DM 2.0 디젤 (12~15년)" }
];
carData.generations.palisade = [
    { id: "palisade_lx2_38g", name: "LX2 3.8 가솔린 (18년~현재)" }
];
carData.generations.tucson = [
    { id: "tucson_nx4_16t", name: "NX4 1.6 터보 (20년~현재)" },
    { id: "tucson_tl_17d", name: "TL 1.7 디젤 (15~20년)" }
];
carData.generations.casper = [
    { id: "casper_ax1_10t", name: "AX1 1.0 터보 (21년~현재)" }
];
carData.generations.ioniq5 = [
    { id: "ioniq5_ne_lr", name: "NE 롱레인지 (21년~현재)" }
];
carData.generations.porter2 = [
    { id: "porter2_crdi", name: "포터2 2.5 디젤 (04~23년)" }
];
carData.generations.staria = [
    { id: "staria_us4_22d", name: "스타리아 US4 (21년~현재)" },
    { id: "starex_tq_25d", name: "그랜드 스타렉스 TQ (07~21년)" }
];

Object.assign(carData.details, {
    /* ---------------- 그랜저 ---------------- */
    "gn7_25g": {
        title: "현대 그랜저 (GN7)", subtitle: "2022.11 ~ 현재 | 준대형 세단 | 2.5 가솔린", tags: ["#국민_아빠차", "#광활한뒷좌석", "#중고방어율1위"], specs: { mpg: "11.7", power: "198", cc: "2,497" },
        commonOptions: "9 에어백 시스템, 전방 충돌방지 보조, 12.3인치 컬러 클러스터, 스마트키 원격 시동",
        trims: [{ name: "익스클루시브", price: "4,202만 원", isRec: true, options: "• 천연 가죽 시트<br>• 앞좌석 통풍 시트<br>• 전동 트렁크 & 서라운드 뷰" }],
        pros: [{ title: "⚙️ GDI+MPI 듀얼 인젝션", desc: "엔진 카본 퇴적을 감소시키고 정숙성을 확보함." }, { title: "🕹️ 컬럼식 기어 & 팜레스트", desc: "센터콘솔 공간 활용성이 극대화됨." }],
        cons: [{ title: "🩸 엔진오일 감소", severity: "★★★★☆", desc: "피스톤 링 장력 문제로 오일 소모 발생 이력 있음." }, { title: "🚪 도어 캐치 오작동", severity: "★★☆☆☆", desc: "히든 타입 도어 핸들이 간헐적으로 안 들어가는 현상." }],
        maintenance: [{ name: "엔진오일", spec: "0W-20 (5.8L)", search: "그랜저 GN7 엔진오일" }, { name: "에어컨필터", spec: "활성탄 규격", search: "그랜저 GN7 에어컨필터" }]
    },
    "ig_24g": {
        title: "현대 그랜저 (IG)", subtitle: "2016.11 ~ 2019.11 | 준대형 세단 | 2.4 가솔린", tags: ["#가성비_중고차", "#완성형_디자인", "#무난함의_극치"], specs: { mpg: "11.2", power: "190", cc: "2,359" },
        commonOptions: "9 에어백, 후방 카메라, 전/후방 주차 보조, 8인치 내비게이션, 크루즈 컨트롤",
        trims: [{ name: "프리미엄", price: "3,175만 원", isRec: true, options: "• 앞좌석 통풍 시트 기본 적용<br>• 하이패스 시스템<br>• 스마트 후측방 경보" }],
        pros: [{ title: "💪 탄탄한 기본기", desc: "차체 강성이 이전 모델(HG) 대비 크게 향상되어 안정감이 탁월함." }, { title: "🛠️ 완벽한 정비성", desc: "부품 수급이 100% 원활하며 수리비가 저렴함." }],
        cons: [{ title: "🔊 세타2 엔진 소음", severity: "★★★★★", desc: "냉간 시 경운기 소음 발생. 보증 연장 여부 확인 필수." }, { title: "🧲 C-MDPS 핸들 자석 현상", severity: "★★★☆☆", desc: "고속 주행 시 핸들이 미세하게 걸리는 느낌이 남." }],
        maintenance: [{ name: "엔진오일", spec: "5W-30 (4.8L)", search: "그랜저 IG 2.4 엔진오일" }, { name: "와이퍼", spec: "650 / 450mm", search: "그랜저 IG 와이퍼" }]
    },
    "hg_30g": {
        title: "현대 그랜저 (HG)", subtitle: "2011.01 ~ 2016.11 | 준대형 세단 | 3.0 가솔린", tags: ["#명차_반열", "#5백만원대_세단", "#V6감성"], specs: { mpg: "10.4", power: "270", cc: "2,999" },
        commonOptions: "VDC(차체자세제어), 버튼시동 스마트키, 열선 스티어링 휠, 1열 전동시트",
        trims: [{ name: "익스클루시브", price: "3,400만 원대", isRec: true, options: "• 1열 통풍시트<br>• 18인치 알로이 휠<br>• HID 헤드램프" }],
        pros: [{ title: "🔇 V6 3.0 엔진의 정숙성", desc: "4기통 2.4 엔진 대비 회전 질감이 압도적으로 부드럽고 조용함." }, { title: "🛋️ 푹신한 승차감", desc: "최근 출시되는 탄탄한 세단들과 달리 전형적인 물침대 승차감으로 어르신들 선호도가 높음." }],
        cons: [{ title: "💨 실내 배기가스 유입 (초기형)", severity: "★★★★★", desc: "11~12년식 초기형 모델 고속 주행 시 트렁크 쪽으로 배기가스가 유입되는 치명적 결함 있음." }, { title: "🧲 초기형 MDPS 불량", severity: "★★★★☆", desc: "핸들 커플링 마모로 조향 시 '딸깍' 거리는 소음이 발생함." }],
        maintenance: [{ name: "엔진오일", spec: "5W-30 (5.2L)", search: "그랜저 HG 엔진오일" }, { name: "와이퍼", spec: "650 / 450mm", search: "그랜저 HG 와이퍼" }]
    },

    /* ---------------- 아반떼 ---------------- */
    "avante_cn7_16g": {
        title: "현대 아반떼 (CN7)", subtitle: "2020.04 ~ 현재 | 준중형 세단 | 1.6 가솔린", tags: ["#사회초년생_원픽", "#가성비_우주방어", "#디자인_대박"], specs: { mpg: "15.4", power: "123", cc: "1,598" },
        commonOptions: "6 에어백, 전방 충돌방지 보조, 차로 유지 보조, 후방 주차거리 경고",
        trims: [{ name: "모던 (Modern)", price: "2,256만 원", isRec: true, options: "• 인조가죽 시트<br>• 앞좌석 열선/통풍 시트<br>• 열선 스티어링 휠" }],
        pros: [{ title: "📐 3세대 신규 플랫폼", desc: "무게 중심이 낮아져 안정성이 크게 향상됨." }, { title: "⛽ 압도적인 실연비", desc: "고속도로 정속 주행 시 20km/L 이상의 연비를 쉽게 뽑아냄." }],
        cons: [{ title: "⚙️ IVT 변속기 꿀렁임", severity: "★★★☆☆", desc: "저속 구간에서 무단변속기 특유의 꿀렁거림 간헐적 발생." }, { title: "🔊 실내 잡소리", severity: "★★☆☆☆", desc: "내장재 플라스틱 마찰음(잡소리) 이슈." }],
        maintenance: [{ name: "엔진오일", spec: "0W-20 (4.2L)", search: "아반떼 CN7 엔진오일" }, { name: "에어컨필터", spec: "공용 규격", search: "아반떼 CN7 에어컨필터" }]
    },
    "avante_ad_16g": {
        title: "현대 아반떼 (AD)", subtitle: "2015.09 ~ 2018.09 | 준중형 세단 | 1.6 가솔린", tags: ["#슈퍼노멀", "#최고의명차", "#입문용중고차"], specs: { mpg: "13.7", power: "132", cc: "1,591" },
        commonOptions: "7 에어백, 차체자세제어장치(ESC), 타이어 공기압 경보장치(TPMS)",
        trims: [{ name: "스마트 (Smart)", price: "1,825만 원", isRec: true, options: "• 버튼 시동 스마트키<br>• 1열 열선시트<br>• 오토라이트 컨트롤" }],
        pros: [{ title: "⚖️ 완벽한 밸런스 (슈퍼 노멀)", desc: "디자인, 승차감, 연비, 수리비 등 모든 면에서 육각형에 가까운 완벽한 밸런스를 자랑함." }, { title: "🛡️ 초고장력 강판 적용", desc: "이전 세대(MD) 대비 차체가 눈에 띄게 탄탄해져 고속 주행 안정성이 탁월함." }],
        cons: [{ title: "🔥 GDi 엔진 고질병", severity: "★★★★☆", desc: "주행거리가 누적되면 엔진오일 소모 및 노킹 소음(경운기 소리)이 발생하는 GDi 종특이 있음." }, { title: "💡 헤드램프 고질병", severity: "★★☆☆☆", desc: "헤드램프 전구가 자주 나가는 고질적인 문제가 있음." }],
        maintenance: [{ name: "엔진오일", spec: "5W-30 (3.6L)", search: "아반떼 AD 엔진오일" }, { name: "와이퍼", spec: "650 / 400mm", search: "아반떼 AD 와이퍼" }]
    },
    "avante_md_16g": {
        title: "현대 아반떼 (MD)", subtitle: "2010.08 ~ 2015.09 | 준중형 세단 | 1.6 GDi", tags: ["#피쉬테일", "#우주선디자인", "#첫차"], specs: { mpg: "14.0", power: "140", cc: "1,591" },
        commonOptions: "6 에어백, 액티브 에코 시스템, 후방 주차보조 시스템",
        trims: [{ name: "프리미어", price: "1,800만 원대", isRec: true, options: "• 가죽시트<br>• 풀오토 에어컨<br>• 버튼시동 스마트키" }],
        pros: [{ title: "🚀 시대를 앞서간 실내 공간", desc: "준중형이라고 믿기지 않을 만큼 휠베이스를 극한으로 뽑아내 뒷좌석이 굉장히 넓음." }, { title: "💸 매우 저렴한 중고가", desc: "300~400만 원대면 상태 좋은 매물을 구할 수 있어 연습용 첫차로 최고임." }],
        cons: [{ title: "🐟 피쉬테일 현상", severity: "★★★★★", desc: "고속 주행 중 급차선 변경 시 뒤쪽 차체가 물고기 꼬리처럼 흔들리며 제어 불능에 빠지는 치명적 결함." }, { title: "🔥 GDi 엔진 결함 (리콜)", severity: "★★★★★", desc: "엔진오일 소모 및 피스톤 파손 리콜 이력이 있는 엔진이므로 엔진 상태 확인 필수." }],
        maintenance: [{ name: "엔진오일", spec: "5W-30 (3.6L)", search: "아반떼 MD 엔진오일" }, { name: "에어컨필터", spec: "공용 규격", search: "아반떼 MD 에어컨필터" }]
    },

    /* ---------------- 쏘나타 ---------------- */
    "sonata_dn8_20g": {
        title: "현대 쏘나타 (DN8)", subtitle: "2019.03 ~ 2023.04 | 중형 세단 | 2.0 가솔린", tags: ["#메기타", "#실내공간_갑", "#택시없음"], specs: { mpg: "13.3", power: "160", cc: "1,999" },
        commonOptions: "9 에어백, 전방 충돌방지 보조, 전자식 변속 버튼(SBW), 전동식 파킹 브레이크",
        trims: [{ name: "인스퍼레이션", price: "3,287만 원", isRec: true, options: "• 10.25인치 내비게이션<br>• 나파 가죽 시트 및 1열 통풍<br>• 보스 프리미엄 사운드" }],
        pros: [{ title: "📐 3세대 플랫폼 적용", desc: "차체 중심을 낮춰 승차감과 고속 주행 안정성이 비약적으로 상승함." }, { title: "📱 최신 디지털 편의사양", desc: "디지털 키, 빌트인 캠 등 첨단 기술 적용." }],
        cons: [{ title: "🐟 호불호 갈리는 '메기' 디자인", severity: "★★★★★", desc: "중고 감가가 K5 대비 심함." }, { title: "⚙️ 스마트스트림 2.0 엔진 소음", severity: "★★★☆☆", desc: "냉간 시 엔진 소음이 다소 거친 편." }],
        maintenance: [{ name: "엔진오일", spec: "0W-20 (4.3L)", search: "쏘나타 DN8 엔진오일" }, { name: "에어컨필터", spec: "DN8 전용", search: "쏘나타 DN8 에어컨필터" }]
    },
    "sonata_lf_20g": {
        title: "현대 쏘나타 (LF)", subtitle: "2014.03 ~ 2017.03 | 중형 세단 | 2.0 가솔린", tags: ["#명차_LF", "#탄탄한기본기", "#중고차_스테디셀러"], specs: { mpg: "12.1", power: "168", cc: "1,999" },
        commonOptions: "7 에어백, 차체자세제어장치(ESC), 경사로 밀림방지(HAC)",
        trims: [{ name: "스마트", price: "2,545만 원", isRec: true, options: "• 버튼시동 스마트키<br>• 크루즈 컨트롤<br>• 1열 열선시트" }],
        pros: [{ title: "🛡️ 초고장력 강판 51% 적용", desc: "본질(기본기)에 충실하겠다는 슬로건처럼 차체 강성이 매우 뛰어나고 코너링 안정감이 발군임." }, { title: "🛋️ 직관적이고 넓은 실내", desc: "센터페시아 조작 버튼이 직관적이며 공간 창출 능력이 뛰어나 패밀리카로 제격임." }],
        cons: [{ title: "🐢 약간 굼뜬 초반 가속력", severity: "★★★☆☆", desc: "차체가 튼튼해지며 무거워진 반면 엔진 출력은 그대로라 초반 가속이 다소 답답함." }, { title: "🔊 CVVL 엔진 소음", severity: "★★★☆☆", desc: "GDi보다는 낫지만 CVVL 엔진 특유의 태핏(찰찰찰) 소음이 주행거리가 늘어날수록 커짐." }],
        maintenance: [{ name: "엔진오일", spec: "5W-30 (4.0L)", search: "쏘나타 LF 엔진오일" }, { name: "와이퍼", spec: "650 / 450mm", search: "쏘나타 LF 와이퍼" }]
    },
    "sonata_yf_20l": {
        title: "현대 쏘나타 (YF)", subtitle: "2009.09 ~ 2014.03 | 중형 세단 | 2.0 LPi (가스)", tags: ["#삼엽충", "#택시의_전설", "#유지비최강"], specs: { mpg: "9.0", power: "157", cc: "1,998" },
        commonOptions: "운전석/동승석 에어백, 후방 주차보조, 매뉴얼 에어컨",
        trims: [{ name: "프리미어", price: "1,800만 원대", isRec: true, options: "• 가죽시트<br>• 풀오토 에어컨<br>• 스마트키" }],
        pros: [{ title: "⛽ LPi의 압도적인 유지비", desc: "LPG 연료를 사용하여 가솔린 대비 연료비가 매우 저렴하며, LPi 엔진 내구성이 택시로 검증됨." }, { title: "💃 파격적인 오키드 디자인", desc: "당시 중형차 시장에 충격을 준 쿠페형 디자인으로 지금 봐도 날렵함." }],
        cons: [{ title: "🔥 세타 LPi 엔진 노킹/보링", severity: "★★★★★", desc: "누우 엔진 변경(12년식 이후) 전 세타 LPi 엔진은 피스톤 긁힘(보링 필수) 고질병이 심각함." }, { title: "🥫 얇은 철판 및 소음", severity: "★★★★☆", desc: "차체 강성이 약해 고속 주행 시 노면 소음과 풍절음이 매우 심하게 유입됨." }],
        maintenance: [{ name: "엔진오일", spec: "5W-30 (4.0L)", search: "쏘나타 YF LPi 엔진오일" }, { name: "점화플러그", spec: "LPi 전용", search: "YF LPi 점화플러그" }]
    },

    /* ---------------- 싼타페 ---------------- */
    "santafe_mx5_25t": {
        title: "현대 싼타페 (MX5)", subtitle: "2023.08 ~ 현재 | 중형 SUV | 2.5 가솔린 터보", tags: ["#조선_디펜더", "#차박_끝판왕", "#H_디자인"], specs: { mpg: "10.0", power: "281", cc: "2,497" },
        commonOptions: "10 에어백, 차로 유지 보조 2, 양방향 멀티 콘솔, 파워 테일게이트",
        trims: [{ name: "프레스티지", price: "3,794만 원", isRec: true, options: "• 파노라믹 커브드 디스플레이<br>• 2열 수동 도어 커튼<br>• 후진 가이드 램프" }],
        pros: [{ title: "🏕️ 테라스 수준의 트렁크 공간", desc: "완전한 박스형 디자인으로 트렁크 입구가 엄청나게 넓고 평탄화가 완벽해 차박 대체 불가." }, { title: "💪 2.5 터보의 시원한 가속력", desc: "무거운 짐을 싣고도 언덕길에서 스트레스 없는 주행 가능." }],
        cons: [{ title: "👀 후면부 디자인 논란", severity: "★★★★☆", desc: "방향지시등이 하단에 위치해 있고 디자인 호불호 극심함." }, { title: "⚙️ 습식 8단 DCT 저속 꿀렁임", severity: "★★★☆☆", desc: "시내 주행(1-2단) 시 미세한 꿀렁임 존재." }],
        maintenance: [{ name: "엔진오일", spec: "0W-30 (5.8L)", search: "싼타페 MX5 2.5T 엔진오일" }, { name: "에어컨필터", spec: "디올뉴 싼타페 전용", search: "싼타페 MX5 에어컨필터" }]
    },
    "santafe_tm_22d": {
        title: "현대 싼타페 (TM)", subtitle: "2018.02 ~ 2020.06 | 중형 SUV | 2.2 디젤", tags: ["#국민패밀리SUV", "#완성형_싼타페", "#8단미션"], specs: { mpg: "13.6", power: "202", cc: "2,199" },
        commonOptions: "전방 충돌방지 보조, 차로 이탈방지 보조, 8단 자동변속기(2.2 전용)",
        trims: [{ name: "프레스티지", price: "3,400만 원대", isRec: true, options: "• 풀 LED 헤드램프<br>• 1열 통풍 및 동승석 전동시트<br>• 스마트 파워 테일게이트" }],
        pros: [{ title: "⚙️ 2.2D와 8단 미션의 궁합", desc: "2.0D 모델의 6단 미션 대비 2.2D의 8단 자동변속기 매칭이 매우 훌륭해 부드러운 가속을 보여줌." }, { title: "👨‍👩‍👧‍👦 넉넉한 2열 거주성", desc: "패밀리 SUV의 정석답게 2열 리클라이닝 각도가 크고 공간이 넓음." }],
        cons: [{ title: "❄️ 초기형 에바 가루 이슈", severity: "★★★★☆", desc: "초기 연식(18년식) 공조기에서 백색 가루(수산화알루미늄)가 뿜어져 나오는 결함 확인 필수." }, { title: "🫨 디젤 특유의 진동", severity: "★★★☆☆", desc: "연식이 지날수록 엔진 마운트 노후화로 인한 정차 중 진동이 핸들로 올라옴." }],
        maintenance: [{ name: "엔진오일", spec: "5W-30 DPF (6.5L)", search: "싼타페 TM 디젤 엔진오일" }, { name: "연료필터", spec: "2.2D 전용", search: "싼타페 TM 연료필터" }]
    },
    "santafe_dm_20d": {
        title: "현대 싼타페 (DM)", subtitle: "2012.04 ~ 2015.06 | 중형 SUV | 2.0 디젤", tags: ["#수타페", "#역대급디자인", "#캠핑입문용"], specs: { mpg: "14.4", power: "184", cc: "1,995" },
        commonOptions: "7 에어백, VDC, 1열 열선시트, 크루즈 컨트롤",
        trims: [{ name: "프리미엄", price: "2,900만 원대", isRec: true, options: "• 버튼시동 스마트키<br>• 운전석 통풍시트<br>• 18인치 알로이 휠" }],
        pros: [{ title: "🎨 역대 가장 유려한 디자인", desc: "투박했던 기존 SUV 디자인을 세련된 도심형으로 완벽히 바꿔놓은 명작 디자인." }, { title: "💪 내구성 좋은 R엔진", desc: "현대의 실수라 불리는 디젤 R엔진이 탑재되어 소모품만 갈아줘도 20만km 거뜬함." }],
        cons: [{ title: "💧 트렁크 누수 (수타페)", severity: "★★★★★", desc: "초기형 모델 비 오는 날 트렁크쪽으로 빗물이 새어 들어오는 치명적인 설계 결함 (수리 이력 필수 확인)." }, { title: "💨 고압펌프 쇳가루", severity: "★★★★☆", desc: "디젤 연료라인 고압펌프에서 쇳가루가 발생해 인젝터까지 다 망가지는 고비용 수리 이슈가 간혹 발생함." }],
        maintenance: [{ name: "엔진오일", spec: "5W-30 (6.5L)", search: "싼타페 DM 엔진오일" }, { name: "와이퍼", spec: "650 / 350mm", search: "싼타페 DM 와이퍼" }]
    },

    /* ---------------- 투싼 ---------------- */
    "tucson_nx4_16t": {
        title: "현대 투싼 (NX4)", subtitle: "2020.09 ~ 현재 | 준중형 SUV | 1.6 가솔린 터보", tags: ["#파라메트릭_쥬얼", "#넓은_준중형", "#스포티함"], specs: { mpg: "12.5", power: "180", cc: "1,598" },
        commonOptions: "다중 충돌방지 자동 제동, 전방 충돌방지 보조, 전자식 파킹 브레이크(EPB)",
        trims: [{ name: "인스퍼레이션", price: "3,238만 원", isRec: true, options: "• 10.25인치 내비게이션<br>• 1열 열선/통풍 시트<br>• 스마트 파워 테일게이트" }],
        pros: [{ title: "🌌 파격적인 히든 라이팅 디자인", desc: "날개 모양 주간주행등으로 도로에서 독보적인 존재감." }, { title: "📏 중형차 뺨치는 실내 크기", desc: "이전 세대 싼타페(DM)와 맞먹는 2열 공간 자랑." }],
        cons: [{ title: "🔘 버튼식 기어의 불편함", severity: "★★★★☆", desc: "직관성이 떨어져 오작동 사고 위험이 높음." }, { title: "⚙️ 건식 7단 DCT 꿀렁임", severity: "★★★☆☆", desc: "저속 변속 충격 및 클러치 팩 교환 비용(약 100만 원) 발생." }],
        maintenance: [{ name: "엔진오일", spec: "0W-20 (4.8L)", search: "투싼 NX4 엔진오일" }, { name: "에어컨필터", spec: "투싼 전용", search: "투싼 NX4 에어컨필터" }]
    },
    "tucson_tl_17d": {
        title: "현대 투싼 (TL)", subtitle: "2015.03 ~ 2020.09 | 준중형 SUV | 1.7 디젤", tags: ["#다이나믹_도심형", "#아담한패밀리SUV", "#명기디자인"], specs: { mpg: "15.6", power: "141", cc: "1,685" },
        commonOptions: "6 에어백, 경사로 밀림방지(HAC), ISG(스톱앤고)",
        trims: [{ name: "모던", price: "2,500만 원대", isRec: true, options: "• 버튼시동 스마트키<br>• 1열 열선시트<br>• 풀오토 에어컨" }],
        pros: [{ title: "🏃 경쾌한 핸들링과 주행감", desc: "유럽 시장을 타겟으로 세팅되어 코너링과 주행 질감이 상당히 쫀쫀하고 경쾌함." }, { title: "⛽ 1.7 디젤의 훌륭한 연비", desc: "세금도 저렴하고 실주행 연비가 매우 높아 출퇴근용으로 가성비가 최고임." }],
        cons: [{ title: "⚙️ 건식 7단 DCT 플라이휠 소음", severity: "★★★★★", desc: "마일리지 10만km 부근에서 미션에서 '찰찰찰' 쇳소리가 나면 플라이휠 및 듀얼클러치 팩 교체(100만 원 이상) 당첨임." }, { title: "🧲 초기형 MDPS 이슈", severity: "★★★☆☆", desc: "핸들 복원력이 인위적이고 이질감이 큼." }],
        maintenance: [{ name: "엔진오일", spec: "5W-30 (5.3L)", search: "투싼 1.7 디젤 엔진오일" }, { name: "미션오일", spec: "DCT 전용 오일", search: "투싼 TL DCT 미션오일" }]
    },

    /* ---------------- 팰리세이드 ---------------- */
    "palisade_lx2_38g": {
        title: "현대 팰리세이드 (LX2)", subtitle: "2018.12 ~ 현재 | 대형 SUV | 3.8 가솔린", tags: ["#가족을_위한_집", "#가성비_대형SUV", "#웅장함"], specs: { mpg: "9.3", power: "295", cc: "3,778" },
        commonOptions: "9 에어백, 3존 독립제어 에어컨, 1열/2열 스마트폰 무선 충전",
        trims: [{ name: "프레스티지", price: "4,431만 원", isRec: true, options: "• 2열 통풍 시트 기본<br>• 서라운드 뷰 및 후측방 모니터<br>• 스마트 파워 테일게이트" }],
        pros: [{ title: "👨‍👩‍👧‍👦 진짜 사람 타는 3열 공간", desc: "성인이 타도 장거리 이동이 가능한 실용적인 3열 거주성." }, { title: "🔇 6기통 3.8 가솔린의 정숙성", desc: "디젤 진동 없이 조용하고 부드러운 승차감." }],
        cons: [{ title: "💸 극악의 연비와 자동차세", severity: "★★★★★", desc: "1년 자동차세 약 100만 원. 시내 연비 5~6km/L." }, { title: "🅿️ 주차 스트레스", severity: "★★★★☆", desc: "전폭이 너무 넓어 주차장 문콕 원인이 되며 주차 난이도 높음." }],
        maintenance: [{ name: "엔진오일", spec: "0W-20 (6.5L)", search: "팰리세이드 3.8 엔진오일" }, { name: "와이퍼", spec: "650 / 500mm", search: "팰리세이드 와이퍼" }]
    },

    /* ---------------- 캐스퍼 / 아이오닉5 ---------------- */
    "casper_ax1_10t": {
        title: "현대 캐스퍼 (AX1)", subtitle: "2021.09 ~ 현재 | 경형 SUV | 1.0 터보", tags: ["#귀여운_경형SUV", "#차박가능", "#광주글로벌모터스"], specs: { mpg: "12.8", power: "100", cc: "998" },
        commonOptions: "7 에어백 시스템, 차로 유지 보조, 4.2인치 클러스터",
        trims: [{ name: "디 에센셜", price: "1,690만 원", isRec: true, options: "• 8인치 내비게이션<br>• 1열 열선/통풍 시트<br>• 버튼 시동" }],
        pros: [{ title: "🛏️ 세계 최초 1열 풀 폴딩 시트", desc: "조수석/운전석 완전 폴딩으로 완벽한 평탄화 차박 가능." }, { title: "🚀 1.0 터보의 시원한 주행성능", desc: "자연흡기의 답답함을 완벽히 해소." }],
        cons: [{ title: "💸 비싼 가격", severity: "★★★★☆", desc: "터보 엔진+옵션 시 2,000만 원 육박." }, { title: "🫨 3기통 특유의 진동", severity: "★★★☆☆", desc: "신호 대기 시 덜덜거리는 진동 있음." }],
        maintenance: [{ name: "엔진오일", spec: "0W-20 (3.6L)", search: "캐스퍼 터보 엔진오일" }]
    },
    "ioniq5_ne_lr": {
        title: "현대 아이오닉 5 (NE)", subtitle: "2021.04 ~ 현재 | 준중형 CUV (전기) | 롱레인지 2WD", tags: ["#전기차_혁명", "#바퀴달린_보조배터리", "#넓은실내"], specs: { mpg: "5.1", power: "225", cc: "모터" },
        commonOptions: "800V 초급속 충전, E-GMP 플랫폼, V2L, 배터리 히팅",
        trims: [{ name: "익스클루시브", price: "5,410만 원", isRec: true, options: "• 12.3인치 듀얼 모니터<br>• 1열 열선/통풍 시트<br>• 스마트 파워 테일게이트" }],
        pros: [{ title: "🔌 V2L (Vehicle to Load)", desc: "차량 배터리를 220V 콘센트처럼 뽑아 쓸 수 있음." }, { title: "🛋️ 플랫 플로어", desc: "뒷좌석 바닥이 완전히 평평해 거실 같은 개방감." }],
        cons: [{ title: "❄️ 겨울철 주행거리 급감", severity: "★★★★☆", desc: "영하 기온 시 실주행 거리 300km 초반대 하락." }, { title: "⚠️ ICCU 리콜", severity: "★★★★★", desc: "주행 중 멈추는 결함으로 무상수리 확인 필수." }],
        maintenance: [{ name: "에어컨필터", spec: "활성탄 권장", search: "아이오닉 5 에어컨필터" }]
    },

    /* ---------------- 포터 / 스타리아(스타렉스) ---------------- */
    "porter2_crdi": {
        title: "현대 포터2", subtitle: "2004.01 ~ 2023.11 | 소형 트럭 | 2.5 디젤", tags: ["#소상공인의_발", "#1톤트럭_황제", "#토크깡패"], specs: { mpg: "8.9", power: "133", cc: "2,497" },
        commonOptions: "LD(차동기어 잠금장치), 블루투스 핸즈프리",
        trims: [{ name: "슈퍼캡 초장축 스마트", price: "1,854만 원", isRec: true, options: "• 후방 주차거리 경고<br>• 운전석 열선 시트" }],
        pros: [{ title: "💪 무적의 등판 능력", desc: "과적 상태에서도 언덕을 거뜬히 올라가는 괴력 발휘." }, { title: "👁️ 시야 확보와 회전 반경", desc: "좁은 농로에서 회전하기 매우 수월함." }],
        cons: [{ title: "💥 치명적인 충돌 안전성", severity: "★★★★★", desc: "전면 충돌 시 충격이 하체로 전달되어 치사율 높음." }, { title: "💨 DPF 막힘", severity: "★★★★☆", desc: "단거리 배달 시 DPF에 매연 쌓이는 고질병." }],
        maintenance: [{ name: "엔진오일", spec: "5W-30 DPF용", search: "포터2 엔진오일 DPF" }]
    },
    "staria_us4_22d": {
        title: "현대 스타리아 (US4)", subtitle: "2021.04 ~ 현재 | 대형 MPV | 2.2 디젤 투어러", tags: ["#우주선_디자인", "#개방감_미쳤음", "#승합차"], specs: { mpg: "10.8", power: "177", cc: "2,199" },
        commonOptions: "전방 충돌방지 보조, 차로 유지 보조, 18인치 알로이 휠",
        trims: [{ name: "투어러 9인승 모던", price: "3,169만 원", isRec: true, options: "• 1열 열선/통풍 시트<br>• 8인치 디스플레이" }],
        pros: [{ title: "🛸 우주선 디자인 & 통유리", desc: "유람선을 탄 것 같은 압도적인 개방감을 선사." }, { title: "💺 멀티링크 서스펜션", desc: "전작 대비 승차감이 세단급으로 좋아짐." }],
        cons: [{ title: "🚚 봉고차 이미지", severity: "★★★☆☆", desc: "학원차, 짐차 인식이 강함." }, { title: "🪟 단열/소음 취약", severity: "★★★★☆", desc: "유리창 면적이 커 한여름 직사광선 유입 및 풍절음 큼." }],
        maintenance: [{ name: "엔진오일", spec: "0W-20 C5 (5.6L)", search: "스타리아 디젤 엔진오일" }]
    },
    "starex_tq_25d": {
        title: "현대 그랜드 스타렉스 (TQ)", subtitle: "2007.05 ~ 2021.04 | 대형 MPV | 2.5 디젤", tags: ["#노가다의_발", "#캠핑카_개조1위", "#후륜구동"], specs: { mpg: "9.3", power: "175", cc: "2,497" },
        commonOptions: "운전석 에어백, EBD ABS, 차동기어 잠금장치(LD 옵션 필수)",
        trims: [{ name: "11/12인승 왜건 모던", price: "2,500만 원대", isRec: true, options: "• 인조가죽 시트<br>• 1열 열선시트<br>• 후방 주차보조" }],
        pros: [{ title: "🏕️ 광활한 뒷좌석 (캠핑카 최적화)", desc: "실내고가 높고 각진 디자인이라 시트를 탈거하고 캠핑카로 개조하기에 국내 최고의 베이스 차량임." }, { title: "🧱 후륜구동의 짐 싣기 능력", desc: "뒤로 짐을 무겁게 실을수록 접지력이 좋아져 화물/승합차 본연의 역할에 충실함." }],
        cons: [{ title: "❄️ 후륜구동 빗길/눈길 취약", severity: "★★★★★", desc: "빈 차 상태로 눈길이나 언덕에서 미끄러지기 매우 쉬워 겨울철 체인 필수." }, { title: "📉 판스프링의 끔찍한 승차감", severity: "★★★★☆", desc: "화물 적재를 위한 판스프링(11인승/밴) 적용으로 방지턱 넘을 때 2,3열 승객 척추 브레이커임." }],
        maintenance: [{ name: "엔진오일", spec: "5W-30 (7.4L)", search: "그랜드스타렉스 엔진오일" }, { name: "디퍼런셜 오일", spec: "GL-5 (뒷데후 오일)", search: "스타렉스 데후오일" }]
    }
});
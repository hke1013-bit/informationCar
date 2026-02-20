// js/data_benz.js

carData.brands.benz = { name: "메르세데스-벤츠", type: "import" };

carData.models.benz = [
    { id: "e_class", name: "E-클래스 (E-Class)" },
    { id: "s_class", name: "S-클래스 (S-Class)" },
    { id: "c_class", name: "C-클래스 (C-Class)" },
    { id: "glc", name: "GLC" },
    { id: "gle", name: "GLE / M-클래스" }
];

carData.generations["e_class"] = [
    { id: "benz_w213_e250", name: "E-클래스 (W213) E250 (16~23년)" },
    { id: "benz_w212_e300", name: "E-클래스 (W212) E300 (09~16년)" }
];
carData.generations["s_class"] = [
    { id: "benz_w222_s350d", name: "S-클래스 (W222) S350d (13~21년)" },
    { id: "benz_w221_s350", name: "S-클래스 (W221) S350 (05~13년)" }
];
carData.generations["c_class"] = [
    { id: "benz_w205_c200", name: "C-클래스 (W205) C200 (14~21년)" },
    { id: "benz_w204_c200", name: "C-클래스 (W204) C200 (07~14년)" }
];
carData.generations["glc"] = [
    { id: "benz_x253_glc220d", name: "GLC (X253) 220d (16~22년)" }
];
carData.generations["gle"] = [
    { id: "benz_v167_gle300d", name: "GLE (V167) 300d (19년~현재)" },
    { id: "benz_w166_gle250d", name: "GLE/M-클래스 (W166) 250d (12~19년)" }
];

Object.assign(carData.details, {
    /* ---------------- E-클래스 ---------------- */
    "benz_w213_e250": {
        title: "벤츠 E-클래스 (W213)", subtitle: "2016.06 ~ 2023.10 | 준대형 세단 | E250 가솔린", tags: ["#강남쏘나타", "#하차감_끝판왕", "#성공의_상징"], specs: { mpg: "10.1", power: "211", cc: "1,991" },
        commonOptions: "LED 하이퍼포먼스 헤드램프, 64색 앰비언트 라이트, 파노라마 선루프, 사각지대 어시스트",
        trims: [{ name: "아방가르드 (Avantgarde)", price: "약 6,960만 원", isRec: true, options: "<strong class='text-emerald-700'>[젊고 스포티한 디자인, 중고 거래 1위]</strong><br>• 그릴 중앙 커다란 벤츠 엠블럼" }],
        pros: [{ title: "✨ 넘사벽 실내 감성과 앰비언트 라이트", desc: "야간 주행 시 감성을 자극하는 64색 앰비언트 라이트로 실내 분위기 최상." }, { title: "🛣️ 고속 주행 특화 승차감", desc: "고속도로에 올려놓으면 차체가 바닥에 깔리며 나아가는 특유의 묵직하고 편안한 승차감." }],
        cons: [{ title: "⚡ 48V 마일드 하이브리드 배터리 경고등", severity: "★★★★☆", desc: "MHEV 적용 모델(E350 등)에서 48V 배터리 불량으로 시동 불량 이슈 발생 (보증수리 필수)." }, { title: "🔊 실내 찌그덕 소리", severity: "★★☆☆☆", desc: "센터페시아 패널을 누르거나 방지턱 넘을 때 플라스틱 마찰음(잡소리)이 다소 있음." }],
        maintenance: [{ name: "엔진오일", spec: "MB 229.51 규격 (7.0L)", search: "벤츠 W213 엔진오일" }, { name: "와이퍼", spec: "벤츠 전용 (클립형)", search: "벤츠 W213 와이퍼" }]
    },
    "benz_w212_e300": {
        title: "벤츠 E-클래스 (W212)", subtitle: "2009.08 ~ 2016.06 | 준대형 세단 | E300 가솔린", tags: ["#마지막_각벤츠", "#명기엔진", "#우주방어내구성"], specs: { mpg: "10.3", power: "252", cc: "3,498" },
        commonOptions: "프리세이프(충돌방지), 아질리티 컨트롤 서스펜션, 1열 전동/메모리 시트",
        trims: [{ name: "엘레강스 (Elegance)", price: "6,000만 원대", isRec: true, options: "• 클래식한 본넷 위 삼각별<br>• 리얼 우드 트림<br>• 컴포트 서스펜션" }],
        pros: [{ title: "💪 외계인이 만든 내구성 (M276 엔진)", desc: "후기형 V6 가솔린 엔진은 소모품만 제때 갈아주면 30만km도 거뜬한 엄청난 내구성을 자랑함." }, { title: "🛡️ 전차 같은 묵직함", desc: "문짝 두께와 닫히는 소리부터 다르며, 고속도로에서 노면을 움켜쥐고 달리는 안정감이 일품임." }],
        cons: [{ title: "🔒 ELV (스티어링 락) 고장", severity: "★★★★★", desc: "핸들 잠금장치 모터 수명이 다해 시동이 아예 안 걸리는 고질병이 100% 확률로 옴 (수리비 꽤 나옴)." }, { title: "🔥 캠마그넷 / VVT 누유", severity: "★★★★☆", desc: "엔진 앞쪽 캠 축 센서 쪽에서 엔진오일이 누유되는 증상이 흔함." }],
        maintenance: [{ name: "엔진오일", spec: "MB 229.5 (6.5L)", search: "벤츠 W212 엔진오일" }, { name: "보조배터리", spec: "트렁크 쪽에 위치", search: "W212 보조배터리 교체" }]
    },

    /* ---------------- S-클래스 ---------------- */
    "benz_w222_s350d": {
        title: "벤츠 S-클래스 (W222)", subtitle: "2013.11 ~ 2021.04 | 대형 플래그십 | S350d 디젤", tags: ["#회장님차_원탑", "#성공의증명", "#매직바디컨트롤"], specs: { mpg: "13.0", power: "286", cc: "2,925" },
        commonOptions: "에어매틱 서스펜션, 멀티빔 LED 헤드램프, 부메스터 3D 사운드, VIP 뒷좌석 패키지",
        trims: [{ name: "S350d 4MATIC", price: "1.4억 원대", isRec: true, options: "<strong class='text-emerald-700'>[숏바디 오너드리븐 최적화]</strong><br>• 앞좌석 안마 시트<br>• 나파 가죽 인테리어" }],
        pros: [{ title: "☁️ 세계 최고의 승차감", desc: "카메라로 노면을 읽고 서스펜션을 조절하는 매직바디컨트롤(가솔린 상위모델)과 에어서스의 조합은 마법에 가까움." }, { title: "👑 독보적인 S클래스의 하차감", desc: "BMW 7시리즈나 아우디 A8이 범접할 수 없는 '진짜 성공한 사람'의 아우라를 뿜어냄." }],
        cons: [{ title: "🎈 에어 서스펜션 주저앉음", severity: "★★★★★", desc: "10만km 부근에 도달하면 네 바퀴 중 한 곳의 에어서스가 터져 차가 주저앉는 엄청난 수리비용의 고질병." }, { title: "🔊 디젤 특유의 진동 (노후화 시)", severity: "★★★☆☆", desc: "아무리 S클래스라도 연식이 차고 엔진 마운트가 닳으면 디젤 특유의 덜덜거림이 실내로 유입됨." }],
        maintenance: [{ name: "엔진마운트", spec: "진동 심할 시 교체", search: "W222 엔진미션마운트" }, { name: "에어쇼바", spec: "터짐 주의", search: "W222 에어쇼바 재생" }]
    },
    "benz_w221_s350": {
        title: "벤츠 S-클래스 (W221)", subtitle: "2005.10 ~ 2013.11 | 대형 플래그십 | S350 가솔린", tags: ["#클래식_끝판왕", "#오버펜더포스", "#올드카입문"], specs: { mpg: "8.6", power: "272", cc: "3,498" },
        commonOptions: "7G-Tronic 미션, 에어매틱, 나이트 뷰 어시스트, 소프트 클로징",
        trims: [{ name: "S350 Long", price: "1.3억 원대", isRec: true, options: "• 뒷좌석 VIP 독립 시트<br>• 하만카돈 로직7 사운드" }],
        pros: [{ title: "🏰 근육질 오버펜더의 웅장함", desc: "최신 S클래스의 유선형 디자인과 달리, 각지고 빵빵한 펜더 덕분에 남성적이고 웅장한 클래식 카의 맛이 있음." }],
        cons: [{ title: "💸 폭탄 돌리기 수리비", severity: "★★★★★", desc: "에어매틱 컴프레서, V6 엔진 밸런스 샤프트 마모, 미션 밸브바디 고장 등 샀다가 차값보다 수리비가 더 나옴." }],
        maintenance: [{ name: "에어매틱 컴프레서", spec: "자주 고장남", search: "W221 에어쇼바 콤프레샤" }]
    },

    /* ---------------- C-클래스 ---------------- */
    "benz_w205_c200": {
        title: "벤츠 C-클래스 (W205)", subtitle: "2014.06 ~ 2021.12 | 중형 세단 | C200 가솔린", tags: ["#베이비_S클래스", "#우아한외관", "#여성오너_선호"], specs: { mpg: "11.3", power: "204", cc: "1,991" },
        commonOptions: "LED 하이퍼포먼스 램프, 어질리티 컨트롤 서스펜션, 터치패드 컨트롤러",
        trims: [{ name: "아방가르드", price: "5,000만 원대", isRec: true, options: "<strong class='text-emerald-700'>[S클래스 축소판 디자인]</strong><br>• 17인치 투톤 휠<br>• 앰비언트 라이트" }],
        pros: [{ title: "✨ S클래스를 빼닮은 고급스러움", desc: "외관 곡선과 실내 폭포수 형태의 센터페시아 디자인은 동급 3시리즈의 투박함을 완전히 압살함." }, { title: "🤫 가솔린의 조용함", desc: "220d 디젤 모델의 달구지 소음과 달리 C200 가솔린은 진동이 없고 매우 부드러움." }],
        cons: [{ title: "🫨 다소 딱딱한 승차감", severity: "★★★★☆", desc: "스포티함을 챙기려다 보니 방지턱을 넘을 때 벤츠답지 않게 쿵쾅거리고 통통 튀는 승차감을 보여줌." }, { title: "🔊 찌그덕거리는 하체/실내 소음", severity: "★★★☆☆", desc: "겨울철에 과속방지턱을 넘으면 로워암 고무 부싱에서 찌그덕 소리가 나고 실내 하이그로시 마찰음이 있음." }],
        maintenance: [{ name: "엔진오일", spec: "MB 229.5 (6.0L)", search: "벤츠 W205 엔진오일" }]
    },
    "benz_w204_c200": {
        title: "벤츠 C-클래스 (W204)", subtitle: "2007.11 ~ 2014.06 | 중형 세단 | C200 CGI", tags: ["#잔고장없는명차", "#입문용수입차", "#클래식벤츠"], specs: { mpg: "11.9", power: "184", cc: "1,796" },
        commonOptions: "5단/7단 자동미션, 썬루프, 1열 전동시트",
        trims: [{ name: "아방가르드", price: "4,000만 원대", isRec: true, options: "• 알루미늄 트림<br>• 스포츠 서스펜션" }],
        pros: [{ title: "🛡️ 잔고장 없는 좀비 내구성", desc: "구형이긴 하지만 벤츠 특유의 기계적 완성도가 절정에 달했던 시기라 엔진/미션 파워트레인 내구성이 미쳤음." }],
        cons: [{ title: "🔥 캠마그넷 누유 고질병", severity: "★★★★☆", desc: "M271 가솔린 엔진 특성상 캠 쪽에 오일 누유가 잦아 배선 타고 ECU로 오일이 스며드는 것(수리 필수)을 주의해야 함." }],
        maintenance: [{ name: "캠마그넷 배선", spec: "개선품 교체 필수", search: "W204 캠마그넷 케이블" }]
    },

    /* ---------------- GLC / GLE ---------------- */
    "benz_x253_glc220d": {
        title: "벤츠 GLC (X253)", subtitle: "2016.01 ~ 2022.06 | 중형 SUV | 220d 디젤", tags: ["#강남_싼타페", "#패밀리프리미엄", "#완벽한비율"], specs: { mpg: "12.9", power: "170", cc: "2,143" },
        commonOptions: "4MATIC(사륜구동), 9G-Tronic 미션, 사각지대 어시스트, 파워 테일게이트",
        trims: [{ name: "GLC 220d 4MATIC", price: "6,500만 원대", isRec: true, options: "• 19인치 알로이 휠<br>• 알루미늄 러닝보드(사이드스텝)<br>• 파노라마 선루프" }],
        pros: [{ title: "⚖️ 최적의 사이즈와 디자인", desc: "너무 크지도 작지도 않은 딱 좋은 패밀리 SUV 사이즈에, 호불호 없는 둥글고 우아한 벤츠 특유의 디자인을 가짐." }, { title: "🏔️ 4MATIC의 안정적인 주행감", desc: "항시 사륜구동과 9단 미션의 조합으로 빗길/눈길 안정감이 탁월하며 변속이 구름처럼 부드러움." }],
        cons: [{ title: "🔊 윈터 타이어 소음 (귀뚜라미)", severity: "★★★★☆", desc: "겨울철에 핸들을 꺾은 채로 저속 전진/후진 시 뚝뚝 끊어지거나 드드득거리는 아커만 지오메트리 소음이 심함." }, { title: "🥶 2.2 디젤(OM651) 진동", severity: "★★★☆☆", desc: "연식이 좀 된 2.2 디젤 모델의 경우 정차 시 디젤 특유의 덜덜거림이 핸들을 타고 많이 넘어옴." }],
        maintenance: [{ name: "엔진오일", spec: "MB 229.51 (6.0L)", search: "GLC 220d 엔진오일" }, { name: "미션오일", spec: "9단 전용 규격", search: "벤츠 9단 미션오일" }]
    },
    "benz_v167_gle300d": {
        title: "벤츠 GLE (V167)", subtitle: "2019.09 ~ 현재 | 준대형 SUV | 300d 디젤", tags: ["#아빠들의_로망", "#웅장함", "#마이바흐_감성"], specs: { mpg: "10.6", power: "245", cc: "1,950" },
        commonOptions: "MBUX 인포테인먼트, 파노라믹 디스플레이, 64색 앰비언트 라이트, 에어매틱 패키지(선택)",
        trims: [{ name: "GLE 300d 4MATIC", price: "9,000만 원대", isRec: true, options: "• 20인치 AMG 트윈스포크 휠<br>• 오픈포어 오크 우드 트림" }],
        pros: [{ title: "🏰 요새 같은 넓은 실내와 고급감", desc: "이전 세대 대비 휠베이스가 대폭 길어져 2열 공간이 엄청나게 넓어졌고, 듀얼 스크린이 주는 하이테크 감성이 최고임." }],
        cons: [{ title: "🫨 300d 기본 서스펜션의 아쉬움", severity: "★★★★☆", desc: "하위 트림(300d)에는 에어 서스펜션이 빠져 방지턱을 넘을 때 차가 좌우로 심하게 기우뚱거림(롤링)." }],
        maintenance: [{ name: "엔진오일", spec: "MB 229.52", search: "GLE 300d 엔진오일" }]
    },
    "benz_w166_gle250d": {
        title: "벤츠 GLE / M-클래스 (W166)", subtitle: "2012.05 ~ 2019.09 | 준대형 SUV | 250d 디젤", tags: ["#상남자SUV", "#구형감성", "#ML클래스"], specs: { mpg: "11.1", power: "204", cc: "2,143" },
        commonOptions: "4MATIC, 파워 테일게이트, 19인치 휠",
        trims: [{ name: "GLE 250d 4MATIC", price: "8,000만 원대", isRec: true, options: "• 인조가죽 시트<br>• 사각지대 어시스트" }],
        pros: [{ title: "🧱 탱크 같은 튼튼함과 정비성", desc: "전자장비가 많이 들어가기 전 세대라 기계적으로 잔고장이 적고 하체가 매우 튼튼해 안전함." }],
        cons: [{ title: "🥱 할 말을 잃게 만드는 센터페시아", severity: "★★★★☆", desc: "숫자 키패드가 다닥다닥 붙어있는 2010년대 초반 벤츠 실내 디자인이라 매우 올드함." }],
        maintenance: [{ name: "연료필터", spec: "겨울철 필수 교환", search: "GLE 250d 연료필터" }]
    }
});
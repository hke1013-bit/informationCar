// js/data_renault.js

carData.brands.renault = { name: "르노 (Renault)", type: "domestic" };

carData.models.renault = [
    { id: "qm6", name: "QM6" },
    { id: "xm3", name: "XM3" },
    { id: "sm6", name: "SM6" },
    { id: "qm3", name: "QM3" }
];

carData.generations.qm6 = [
    { id: "qm6_20lpe", name: "QM6 2.0 LPe (19년~현재)" },
    { id: "qm6_20gde", name: "QM6 2.0 GDe 가솔린 (17년~현재)" }
];
carData.generations.xm3 = [
    { id: "xm3_13t", name: "XM3 1.3 터보 (20년~현재)" },
    { id: "xm3_16g", name: "XM3 1.6 GTe 가솔린 (20년~현재)" }
];
carData.generations.sm6 = [
    { id: "sm6_20g", name: "SM6 2.0 가솔린 (16년~현재)" }
];
carData.generations.qm3 = [
    { id: "qm3_15d", name: "QM3 1.5 디젤 (13~19년)" }
];

Object.assign(carData.details, {
    /* ---------------- QM6 ---------------- */
    "qm6_20lpe": {
        title: "르노 QM6", subtitle: "2019.06 ~ 현재 | 중형 SUV | 2.0 LPe (LPG)", tags: ["#가성비_중형SUV", "#조용한SUV", "#LPG특화"], specs: { mpg: "8.9", power: "140", cc: "1,998" },
        commonOptions: "도넛 탱크(LPG), LED 헤드램프, 전자식 파킹 브레이크, 크루즈 컨트롤",
        trims: [{ name: "RE 시그니처", price: "3,000만 원대", isRec: true, options: "<strong class='text-emerald-700'>[최고 인기 트림]</strong><br>• S-Link 8.7인치 내비게이션<br>• 1열 열선/통풍 시트" }],
        pros: [{ title: "⛽ 독보적인 LPG SUV의 경제성", desc: "도넛 탱크를 적용해 트렁크 공간을 살리면서도 가솔린 대비 압도적으로 저렴한 유류비를 자랑함." }, { title: "🤫 세단 버금가는 정숙성", desc: "가솔린 기반의 가스 엔진과 CVT(무단변속기) 조합으로 디젤 SUV와는 비교도 안 되게 조용함." }],
        cons: [{ title: "🐢 답답한 초반 가속력", severity: "★★★★☆", desc: "무거운 차체에 140마력 자연흡기 엔진이라 언덕길이나 풀악셀 시 엔진만 웽웽거리고 차가 안 나감." }, { title: "📺 S-Link의 끔찍한 조작감", severity: "★★★★★", desc: "공조기(에어컨) 버튼을 터치스크린에 다 집어넣어 운전 중 에어컨 조작이 불가능에 가까움." }],
        maintenance: [{ name: "엔진오일", spec: "5W-30 (4.0L)", search: "QM6 LPe 엔진오일" }, { name: "미션오일", spec: "CVT 전용", search: "QM6 CVT 미션오일" }]
    },
    "qm6_20gde": {
        title: "르노 QM6", subtitle: "2017.09 ~ 현재 | 중형 SUV | 2.0 GDe (가솔린)", tags: ["#도심형SUV", "#가성비", "#디자인사골"], specs: { mpg: "11.6", power: "144", cc: "1,997" },
        commonOptions: "LED 퓨어비전 헤드램프, 전자식 파킹 브레이크, 오토 클로징",
        trims: [{ name: "RE", price: "2,800만 원대", isRec: true, options: "• 18인치 투톤 알로이 휠<br>• 앞좌석 통풍 시트" }],
        pros: [{ title: "📉 깡패 수준의 중고 가성비", desc: "동급 싼타페/쏘렌토 대비 중고 가격이 매우 저렴해 1천만 원대 패밀리 SUV로 완벽함." }, { title: "🎨 질리지 않는 디자인", desc: "사골이라는 비판도 있지만, 반대로 말하면 17년식이나 23년식이나 구형 티가 나지 않음." }],
        cons: [{ title: "좁은 2열 공간", severity: "★★★☆☆", desc: "투싼(NX4)보다도 2열 레그룸과 트렁크가 좁게 느껴짐." }, { title: "🛠️ 악명 높은 정비성", severity: "★★★★☆", desc: "에어컨 필터 하나 가는데도 대시보드를 뜯어야 할 정도로 르노 특유의 끔찍한 정비성을 자랑함." }],
        maintenance: [{ name: "엔진오일", spec: "5W-30 (4.0L)", search: "QM6 GDe 엔진오일" }, { name: "에어컨필터", spec: "르노 전용", search: "QM6 에어컨필터" }]
    },

    /* ---------------- XM3 ---------------- */
    "xm3_13t": {
        title: "르노 XM3", subtitle: "2020.03 ~ 현재 | 소형 SUV | 1.3 가솔린 터보", tags: ["#쿠페형SUV", "#디자인원탑", "#벤츠엔진"], specs: { mpg: "13.7", power: "152", cc: "1,332" },
        commonOptions: "LED 퓨어비전 헤드램프, 전자식 파킹 브레이크, 패들 시프트",
        trims: [{ name: "RE 시그니처", price: "2,700만 원대", isRec: true, options: "• 9.3인치 디스플레이<br>• 1열 통풍 시트<br>• 어댑티브 크루즈 컨트롤" }],
        pros: [{ title: "벤츠와 공동 개발한 1.3 터보", desc: "엔진 회전 질감이 훌륭하며, 게트락 7단 습식 DCT와 물려 고속도로에서 시원한 가속감을 줌." }, { title: "🎨 동급 유일의 쿠페형 디자인", desc: "수입차(X4, GLC쿠페)에서나 보던 루프 라인으로 디자인 만족도가 최상임." }],
        cons: [{ title: "⚙️ DCT 저속 울컥거림", severity: "★★★★☆", desc: "건식 대비 낫다지만 여전히 시내 막히는 구간에서 1~2단 꿀렁임과 변속 지연이 있음." }, { title: "⚠️ 시동 꺼짐 이슈 (초기형)", severity: "★★★★★", desc: "20년식 초기형 모델 연료 펌프 이슈로 주행 중 시동 꺼짐 결함이 있었음 (리콜 여부 확인 필수)." }],
        maintenance: [{ name: "엔진오일", spec: "0W-20 (5.4L)", search: "XM3 1.3 엔진오일" }, { name: "에어컨필터", spec: "르노 공용", search: "XM3 에어컨필터" }]
    },
    "xm3_16g": {
        title: "르노 XM3", subtitle: "2020.03 ~ 현재 | 소형 SUV | 1.6 GTe (자연흡기)", tags: ["#가성비원탑", "#사회초년생", "#잔고장없음"], specs: { mpg: "13.6", power: "123", cc: "1,598" },
        commonOptions: "LED 헤드램프, 전자식 파킹 브레이크, 오토 클로징",
        trims: [{ name: "LE", price: "2,200만 원대", isRec: true, options: "• 1열 열선 시트<br>• 스마트키<br>• 인조가죽 시트" }],
        pros: [{ title: "💸 극강의 가성비", desc: "신차가도 아반떼 수준인데 중고가는 더 저렴함." }, { title: "🛠️ 검증된 파워트레인 내구성", desc: "오래된 1.6 자연흡기 엔진과 CVT 조합으로 터보(DCT) 모델 대비 잔고장 스트레스가 아예 없음." }],
        cons: [{ title: "🐢 매우 답답한 가속", severity: "★★★★☆", desc: "123마력이라 고속도로 1차선 추월 시 엔진이 터질 듯이 소리만 지르고 속도는 안 올라감." }],
        maintenance: [{ name: "엔진오일", spec: "5W-30 (4.2L)", search: "XM3 1.6 엔진오일" }]
    },

    /* ---------------- SM6 ---------------- */
    "sm6_20g": {
        title: "르노 SM6", subtitle: "2016.03 ~ 현재 | 중형 세단 | 2.0 가솔린", tags: ["#이쁜쓰레기", "#승차감논란", "#중고가성비"], specs: { mpg: "12.0", power: "150", cc: "1,998" },
        commonOptions: "오토 클로징, 전자식 파킹 브레이크, LED 헤드램프",
        trims: [{ name: "RE", price: "2,900만 원대", isRec: true, options: "• 1열 마사지/통풍 시트<br>• 19인치 투톤 휠<br>• 액티브 댐핑 컨트롤(ADC)" }],
        pros: [{ title: "🎨 시대를 앞서간 완벽한 디자인", desc: "출시 당시 쏘나타와 K5를 압살했던 중후하고 세련된 외관 디자인." }, { title: "📉 쏘나타 대비 천만 원 싼 중고가", desc: "감가가 너무 심하게 맞아서 중고로 구매 시 이보다 훌륭한 가성비 세단이 없음." }],
        cons: [{ title: "🫨 악명 높은 토션빔 승차감", severity: "★★★★★", desc: "뒷좌석에 AM링크(토션빔)를 달아놔 방지턱 넘을 때 2열 승객의 허리를 부숴버림." }, { title: "📺 S-Link의 버그와 불편함", severity: "★★★★☆", desc: "공조기 조작이 매우 불편하며, 블루투스 연결 불량 등 시스템 버그가 잦음." }],
        maintenance: [{ name: "엔진오일", spec: "5W-30 (4.0L)", search: "SM6 2.0 엔진오일" }, { name: "타이어(19인치)", spec: "245/40 R19", search: "245 40 19 타이어" }]
    },

    /* ---------------- QM3 ---------------- */
    "qm3_15d": {
        title: "르노 QM3", subtitle: "2013.12 ~ 2019.07 | 소형 SUV | 1.5 디젤", tags: ["#연비괴물", "#수입차수리비", "#유럽감성"], specs: { mpg: "17.3", power: "90", cc: "1,461" },
        commonOptions: "17인치 투톤 휠, 크루즈 컨트롤, 오토 에어컨",
        trims: [{ name: "RE", price: "2,400만 원대", isRec: true, options: "• 직물/가죽 탈착식 시트<br>• 후방 카메라<br>• T map 내비게이션" }],
        pros: [{ title: "⛽ 기름 냄새만 맡아도 가는 차", desc: "실연비가 리터당 20km는 우습게 넘겨, 출퇴근 거리가 먼 직장인들에게 구세주 같은 차." }, { title: "🏃 유럽 특유의 쫀득한 핸들링", desc: "차는 작지만 고속에서 바닥에 착 깔리는 르노(스페인 공장 생산) 특유의 주행 질감이 일품임." }],
        cons: [{ title: "💸 수입차 뺨치는 부품값", severity: "★★★★★", desc: "태생이 스페인 수입차라 범퍼나 헤드램프 하나 깨져도 수리비가 외제차 수준으로 나옴." }, { title: "⚙️ 타이밍 벨트 교환 주기", severity: "★★★★☆", desc: "체인 방식이 아닌 고무 벨트라 10만km 부근에서 무조건 교체(비용 비쌈) 해야 함." }],
        maintenance: [{ name: "타이밍벨트", spec: "10만km 교체 필수", search: "QM3 타이밍벨트 교환" }, { name: "엔진오일", spec: "5W-30 C4 (4.5L)", search: "QM3 엔진오일" }]
    }
});
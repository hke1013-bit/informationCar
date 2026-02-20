// js/data_mini.js

carData.brands.mini = { name: "미니 (MINI)", type: "import" };

carData.models.mini = [
    { id: "cooper", name: "미니 쿠퍼 (Hatch)" },
    { id: "countryman", name: "컨트리맨 (Countryman)" },
    { id: "clubman", name: "클럽맨 (Clubman)" }
];

carData.generations.cooper = [
    { id: "mini_cooper_f56_15g", name: "쿠퍼 3도어 (F56) 1.5 가솔린 (14~23년)" },
    { id: "mini_cooper_r56_16g", name: "쿠퍼 2세대 (R56) 1.6 가솔린 (06~13년)" }
];
carData.generations.countryman = [
    { id: "mini_countryman_f60", name: "컨트리맨 (F60) (17~23년)" }
];
carData.generations.clubman = [
    { id: "mini_clubman_f54", name: "클럽맨 (F54) (15~23년)" }
];

Object.assign(carData.details, {
    /* ---------------- 미니 쿠퍼 ---------------- */
    "mini_cooper_f56_15g": {
        title: "MINI 쿠퍼 3도어 (F56)", subtitle: "2014.04 ~ 2023.12 | 해치백 | 1.5 가솔린", tags: ["#감성디자인", "#고카트필링", "#여성오너_원픽"], specs: { mpg: "13.4", power: "136", cc: "1,499" },
        commonOptions: "LED 헤드램프, 파노라마 선루프, 앰비언트 라이트, 후방 카메라",
        trims: [{ name: "Cooper High Trim", price: "3,800만 원대", isRec: true, options: "<strong class='text-emerald-700'>[옵션 밸런스가 가장 좋음]</strong><br>• 8.8인치 디스플레이<br>• 헤드업 디스플레이 (HUD 팝업형)<br>• 자동 2존 에어컨" }],
        pros: [{ title: "🏎️ 쫀득한 고카트 필링(Go-Kart)", desc: "차체가 작고 휠베이스가 짧아 핸들을 꺾는 대로 차체가 민첩하게 따라오는 운전의 재미가 엄청남." }, { title: "🎨 대체 불가한 아이코닉 디자인", desc: "동그란 헤드램프와 항공기 조종석 같은 토글 스위치 등 미니만의 독보적인 감성이 있음." }],
        cons: [{ title: "🫨 척추 브레이커 승차감", severity: "★★★★★", desc: "서스펜션이 돌덩이 수준으로 딱딱해서 과속방지턱을 넘을 때마다 내장재와 뼈가 울리는 고통이 있음." }, { title: "🧳 짐칸 수준의 2열과 트렁크", severity: "★★★★☆", desc: "3도어 특성상 2열은 사람이 탈 수 없고 가방을 던져두는 용도이며 트렁크도 매우 협소함." }],
        maintenance: [{ name: "엔진오일", spec: "BMW LL-01 FE (4.25L)", search: "미니쿠퍼 3도어 1.5 엔진오일" }, { name: "브레이크 패드", spec: "분진 매우 많음", search: "미니 F56 브레이크 패드" }]
    },
    "mini_cooper_r56_16g": {
        title: "MINI 쿠퍼 (2세대 R56)", subtitle: "2006.11 ~ 2013.12 | 해치백 | 1.6 가솔린", tags: ["#클래식미니", "#디자인명작", "#수리비지옥"], specs: { mpg: "15.3", power: "122", cc: "1,598" },
        commonOptions: "할로겐 헤드램프, 매뉴얼 에어컨",
        trims: [{ name: "Cooper S (터보)", price: "3,000만 원대 (출시가)", isRec: true, options: "• 본넷 에어스쿠프<br>• 1.6 터보 (184마력)<br>• 듀얼 머플러" }],
        pros: [{ title: "🏁 진정한 아날로그 감성", desc: "전자장비가 개입하지 않는 순수한 핸들링과 아날로그 계기판 감성을 가장 잘 간직한 세대임." }],
        cons: [{ title: "🔥 N14/N18 엔진오일 먹는 하마", severity: "★★★★★", desc: "가이드고무(밸브스템씰) 경화로 엔진오일을 엄청나게 연소시켜 1천km마다 오일을 보충하며 타야 함." }, { title: "💧 고질적인 오일 및 냉각수 누유", severity: "★★★★★", desc: "진공펌프, 오일팬, 워터펌프 등 엔진룸 전체에서 누유가 발생하여 중고차 구매 시 백만 원 이상 수리비 각오해야 함." }],
        maintenance: [{ name: "가이드고무", spec: "백연 발생 시 교체 필수", search: "미니 2세대 가이드고무" }]
    },

    /* ---------------- 미니 컨트리맨 ---------------- */
    "mini_countryman_f60": {
        title: "MINI 컨트리맨 (F60)", subtitle: "2017.04 ~ 2023.12 | 소형 SUV | 1.5 터보 / 2.0 터보", tags: ["#가족을위한미니", "#실용성", "#맥시(MAXI)"], specs: { mpg: "11.6", power: "136", cc: "1,499" },
        commonOptions: "ALL4(사륜구동 선택), 파노라마 선루프, 전동식 트렁크",
        trims: [{ name: "Cooper High Trim", price: "4,600만 원대", isRec: true, options: "<strong class='text-emerald-700'>[실용성 최적화 트림]</strong><br>• 18인치 블랙 핀 스포크 휠<br>• 8.8인치 내비게이션" }],
        pros: [{ title: "👨‍👩‍👧‍👦 미니멀리즘 패밀리 SUV", desc: "미니 쿠퍼의 감성을 유지하면서도 2열 공간과 트렁크가 대폭 넓어져 3~4인 가족이 타기에 부족함이 없음." }, { title: "☁️ 한층 부드러워진 승차감", desc: "일반 해치백(3도어) 모델의 끔찍한 승차감 대비 훨씬 나긋나긋하고 부드럽게 방지턱을 넘어감." }],
        cons: [{ title: "🐢 무거운 차체로 인한 답답함", severity: "★★★★☆", desc: "1.5 가솔린(136마력)의 경우 차가 워낙 크고 무거워 초반 가속이 굼뜨고 답답하여 2.0(S) 모델이 강제됨." }],
        maintenance: [{ name: "엔진오일", spec: "BMW LL-01 (4.25L)", search: "컨트리맨 엔진오일" }]
    },

    /* ---------------- 미니 클럽맨 ---------------- */
    "mini_clubman_f54": {
        title: "MINI 클럽맨 (F54)", subtitle: "2015.11 ~ 2023.12 | 소형 왜건 | 1.5 가솔린", tags: ["#양문형트렁크", "#유니크왜건", "#스플릿도어"], specs: { mpg: "11.5", power: "136", cc: "1,499" },
        commonOptions: "스플릿 도어(양문형 트렁크), 전자식 파킹 브레이크, LED 라이트",
        trims: [{ name: "Cooper High Trim", price: "4,300만 원대", isRec: true, options: "• 컴포트 액세스(발로 트렁크 열기)<br>• 후방 카메라" }],
        pros: [{ title: "🚪 독보적인 양문형 스플릿 도어", desc: "트렁크가 냉장고처럼 양쪽으로 열리는 독특한 디자인 덕분에 마트나 캠핑장에서 시선을 집중시킴." }, { title: "📏 3도어 대비 긴 휠베이스", desc: "차체가 길어져 2열 거주성이 훨씬 좋아졌고, 고속 주행 시 3도어보다 훨씬 안정적임." }],
        cons: [{ title: "🪟 스플릿 도어로 인한 후방 시야 가림", severity: "★★★☆☆", desc: "트렁크 문이 양쪽으로 나뉘어 있어 룸미러를 볼 때 중앙에 기둥이 시야를 정통으로 가림." }],
        maintenance: [{ name: "엔진오일", spec: "BMW LL-01", search: "미니 클럽맨 엔진오일" }]
    }
});
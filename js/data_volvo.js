// js/data_volvo.js

carData.brands.volvo = { name: "볼보 (Volvo)", type: "import" };

carData.models.volvo = [
    { id: "xc60", name: "XC60" },
    { id: "s90", name: "S90" },
    { id: "xc90", name: "XC90" },
    { id: "s60_v60", name: "S60 / V60" }
];

carData.generations.xc60 = [
    { id: "volvo_xc60_2nd_b5", name: "XC60 2세대 B5 MHEV (20년~현재)" },
    { id: "volvo_xc60_1st_d4", name: "XC60 1세대 D4 디젤 (08~17년)" }
];
carData.generations.s90 = [
    { id: "volvo_s90_b5", name: "S90 B5 MHEV (20년~현재)" }
];
carData.generations.xc90 = [
    { id: "volvo_xc90_2nd_b6", name: "XC90 2세대 B6 MHEV (20년~현재)" }
];
carData.generations.s60_v60 = [
    { id: "volvo_s60_3rd_b5", name: "S60 3세대 B5 MHEV (19년~현재)" }
];

Object.assign(carData.details, {
    /* ---------------- XC60 ---------------- */
    "volvo_xc60_2nd_b5": {
        title: "볼보 XC60 (2세대)", subtitle: "2017.09 ~ 현재 | 중형 SUV | B5 (마일드 하이브리드)", tags: ["#강남엄마차", "#안전제일", "#토르의망치"], specs: { mpg: "9.5", power: "250", cc: "1,969" },
        commonOptions: "파일럿 어시스트(반자율주행), 시티 세이프티, 파노라마 선루프, TMAP 인포테인먼트(22년식 이후)",
        trims: [{ name: "B5 Ultimate (구 Inscription)", price: "6,900만 원대", isRec: true, options: "<strong class='text-emerald-700'>[무조건 인스크립션(얼티메이트) 필수]</strong><br>• 바워스 앤 윌킨스(B&W) 오디오<br>• 나파 가죽 시트<br>• 크리스탈 기어 노브" }],
        pros: [{ title: "🎶 차를 콘서트홀로 만드는 B&W 오디오", desc: "동급 수입차 중 단연코 1위 해상도를 자랑하는 바워스 앤 윌킨스 스피커가 탑재되어 귀가 호강함." }, { title: "🛡️ 타협 없는 안전 사양", desc: "엔트리 모델부터 최고급 모델까지 시티 세이프티 등 능동형 안전 장비가 차별 없이 기본 적용됨." }],
        cons: [{ title: "🫨 다소 딱딱한 승차감", severity: "★★★★☆", desc: "안전을 위한 세팅인지 동급 벤츠 GLC나 BMW X3 대비 하체가 단단하고 방지턱 충격이 제법 큼." }, { title: "📺 인포테인먼트 오류 (초기형 센서스)", severity: "★★★☆☆", desc: "TMAP 적용 전 연식(21년식 이전)의 세로형 모니터(센서스)는 부팅이 느리고 공조기 터치 조작이 매우 불편함." }],
        maintenance: [{ name: "엔진오일", spec: "0W-20 (5.6L)", search: "볼보 XC60 B5 엔진오일" }, { name: "에어컨필터", spec: "볼보 공용 규격", search: "볼보 XC60 에어컨필터" }]
    },

    /* ---------------- S90 ---------------- */
    "volvo_s90_b5": {
        title: "볼보 S90", subtitle: "2016.09 ~ 현재 | 대형 세단 | B5 (마일드 하이브리드)", tags: ["#E클래스대안", "#가성비플래그십", "#광활한뒷좌석"], specs: { mpg: "11.2", power: "250", cc: "1,969" },
        commonOptions: "파일럿 어시스트, 어댑티브 크루즈 컨트롤, 4존 에어컨, 19인치 휠",
        trims: [{ name: "B5 Ultimate", price: "7,300만 원대", isRec: true, options: "• B&W 프리미엄 사운드<br>• 1열/2열 통풍 시트<br>• 리얼 우드 트림" }],
        pros: [{ title: "📏 전장 5.1미터의 압도적인 크기", desc: "초기형 이후 롱휠베이스(LWB) 모델이 수입되면서, 2열 레그룸이 S클래스 숏바디 수준으로 엄청나게 넓어짐." }, { title: "💰 7천만 원대 최고의 가성비", desc: "벤츠 E클래스나 BMW 5시리즈 살 돈으로 풀옵션에 크기도 더 큰 대형 세단을 살 수 있음." }],
        cons: [{ title: "🚗 전륜구동 특유의 비율과 주행감", severity: "★★★☆☆", desc: "차는 5미터가 넘는데 전륜구동 기반이라 앞 오버행이 길어 디자인 비율이 후륜구동 세단보다 둔해 보임." }, { title: "🔊 4기통 엔진의 한계", severity: "★★★☆☆", desc: "플래그십 세단임에도 6기통 모델이 아예 없어, 엔진 회전 질감이 다소 거칠고 고급스러움이 떨어짐." }],
        maintenance: [{ name: "엔진오일", spec: "0W-20 (5.6L)", search: "볼보 S90 엔진오일" }]
    },

    /* ---------------- XC90 ---------------- */
    "volvo_xc90_2nd_b6": {
        title: "볼보 XC90 (2세대)", subtitle: "2015.10 ~ 현재 | 대형 SUV | B6 (마일드 하이브리드)", tags: ["#안전끝판왕", "#사망자제로", "#이효리차"], specs: { mpg: "9.3", power: "300", cc: "1,969" },
        commonOptions: "7인승 시트, 인텔리세이프 서라운드, 에어 서스펜션(T8 PHEV 한정)",
        trims: [{ name: "B6 Ultimate", price: "8,600만 원대", isRec: true, options: "<strong class='text-emerald-700'>[대기 기간이 가장 긴 베스트셀러]</strong><br>• 20인치 알로이 휠<br>• 오레포스 크리스탈 기어" }],
        pros: [{ title: "🛡️ 전 세계 사망사고 0건의 신화", desc: "볼보의 플래그십 SUV답게 튼튼한 뼈대와 완벽한 안전 시스템으로 가족을 태우기에 이보다 안심되는 차가 없음." }, { title: "🎨 10년이 지나도 완벽한 디자인", desc: "2015년에 나온 디자인임에도 비율과 디테일이 너무 훌륭해 아직도 풀체인지 없이 잘 팔림." }],
        cons: [{ title: "🥱 구형 느낌이 물씬 나는 실내", severity: "★★★★☆", desc: "외관은 괜찮으나 실내 세로형 디스플레이와 센터페시아 레이아웃은 너무 오래된 티가 남." }, { title: "🫨 노면 충격 유입", severity: "★★★☆☆", desc: "PHEV(T8)가 아닌 B6 모델은 에어 서스펜션이 빠져 차급에 비해 승차감이 쿵쾅거리고 아쉬움." }],
        maintenance: [{ name: "엔진오일", spec: "0W-20 (5.6L)", search: "볼보 XC90 엔진오일" }]
    },

    /* ---------------- S60 ---------------- */
    "volvo_s60_3rd_b5": {
        title: "볼보 S60 (3세대)", subtitle: "2019.08 ~ 현재 | 중형 세단 | B5 (마일드 하이브리드)", tags: ["#컴팩트세단", "#디자인명작", "#가성비갑"], specs: { mpg: "11.3", power: "250", cc: "1,969" },
        commonOptions: "파일럿 어시스트, 시티 세이프티, 전동 선루프",
        trims: [{ name: "B5 Ultimate", price: "5,600만 원대", isRec: true, options: "• B&W 스피커 탑재<br>• 19인치 알로이 휠" }],
        pros: [{ title: "⚖️ 동급 최고의 옵션 구성", desc: "5천만 원대에 반자율주행, 나파가죽, 통풍/마사지 시트, B&W 오디오가 전부 들어가는 미친 가성비." }],
        cons: [{ title: "🦵 아쉬운 2열 레그룸", severity: "★★★★☆", desc: "차체 크기가 BMW 3시리즈보다 조금 작게 느껴지며, 뒷좌석 공간이 좁아 패밀리카로는 한계가 있음." }],
        maintenance: [{ name: "엔진오일", spec: "0W-20 (5.6L)", search: "볼보 S60 엔진오일" }]
    }
});
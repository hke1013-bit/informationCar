// js/data_vw.js

carData.brands.vw = { name: "폭스바겐 (VW)", type: "import" };

carData.models.vw = [
    { id: "golf", name: "골프 (Golf)" },
    { id: "tiguan", name: "티구안 (Tiguan)" },
    { id: "passat", name: "파사트 (Passat)" },
    { id: "jetta", name: "제타 (Jetta)" }
];

carData.generations.golf = [
    { id: "vw_golf_8th", name: "골프 8세대 2.0 TDI (22년~현재)" },
    { id: "vw_golf_7th", name: "골프 7세대 2.0 TDI (13~21년)" }
];
carData.generations.tiguan = [
    { id: "vw_tiguan_2nd", name: "티구안 2세대 2.0 TDI (18년~현재)" }
];
carData.generations.passat = [
    { id: "vw_passat_gt", name: "파사트 GT 8세대 (18년~현재)" }
];
carData.generations.jetta = [
    { id: "vw_jetta_7th", name: "제타 7세대 1.4 TSI (20년~현재)" }
];

Object.assign(carData.details, {
    /* ---------------- 골프 ---------------- */
    "vw_golf_7th": {
        title: "폭스바겐 골프 (7세대)", subtitle: "2013.07 ~ 2021.12 | 해치백 | 2.0 TDI", tags: ["#해치백의_교과서", "#명차", "#연비깡패"], specs: { mpg: "16.7", power: "150", cc: "1,968" },
        commonOptions: "블루모션(ISG), 오토홀드, 전자식 파킹 브레이크, 플랫바텀(D컷) 스티어링 휠",
        trims: [{ name: "2.0 TDI 프리미엄", price: "3,000만 원대", isRec: true, options: "<strong class='text-emerald-700'>[수입차 입문용 베스트]</strong><br>• 알칸타라/직물 혼합 시트<br>• 17인치 휠" }],
        pros: [{ title: "🏎️ 클래스를 뛰어넘는 하체 세팅", desc: "아반떼 크기임에도 고속도로에서 150km/h로 달려도 바닥에 착 붙어가는 독일차 특유의 묵직함이 엄청남." }, { title: "⛽ 주유소 가는 길을 잊는 연비", desc: "DSG 미션과 TDI 엔진 조합으로 고속도로 정속 주행 시 리터당 20km는 우습게 나옴." }],
        cons: [{ title: "⚙️ DSG 플라이휠 쇳소리", severity: "★★★★★", desc: "10만km 부근에서 냉간 시 미션 쪽에서 찰찰찰 쇳소리가 나면 플라이휠 교체(약 100만 원) 필수." }, { title: "💧 워터펌프 및 타이밍벨트 누수", severity: "★★★★☆", desc: "10만km 주기로 워터펌프와 타이밍벨트 앗세이 교환을 무조건 해줘야 하는 정비 스케줄이 있음." }],
        maintenance: [{ name: "플라이휠", spec: "LUK 또는 Sachs 제품", search: "골프 7세대 플라이휠" }, { name: "미션오일", spec: "DSG 습식 6단", search: "폭스바겐 DSG 미션오일" }]
    },
    "vw_golf_8th": {
        title: "폭스바겐 골프 (8세대)", subtitle: "2022.01 ~ 현재 | 해치백 | 2.0 TDI", tags: ["#디지털화", "#IQ라이트", "#여전한명차"], specs: { mpg: "17.8", power: "150", cc: "1,968" },
        commonOptions: "IQ.Drive(반자율주행), 디지털 콕핏, 시프트 바이 와이어(조그만 기어셀렉터)",
        trims: [{ name: "프레스티지", price: "3,800만 원대", isRec: true, options: "• IQ.Light (지능형 매트릭스 LED)<br>• 마사지/메모리 시트<br>• HUD" }],
        pros: [{ title: "✨ 완벽한 디지털 인테리어", desc: "물리버튼을 완전히 없애고 터치와 스크린으로 도배하여 7세대 대비 실내가 혁신적으로 예뻐짐." }],
        cons: [{ title: "📺 인포테인먼트 소프트웨어 렉", severity: "★★★☆☆", desc: "터치로 바뀐 공조기 및 볼륨 조절이 직관적이지 않으며, 시스템 부팅이나 카플레이 연결이 가끔 먹통됨." }],
        maintenance: [{ name: "엔진오일", spec: "VW 507.00 (4.7L)", search: "골프 8세대 엔진오일" }]
    },

    /* ---------------- 티구안 ---------------- */
    "vw_tiguan_2nd": {
        title: "폭스바겐 티구안 (2세대)", subtitle: "2018.05 ~ 현재 | 준중형 SUV | 2.0 TDI", tags: ["#수입SUV_판매1위", "#가족을위한차", "#실용성갑"], specs: { mpg: "15.6", power: "150", cc: "1,968" },
        commonOptions: "어댑티브 크루즈 컨트롤, 프론트 어시스트, 파노라마 선루프, 3존 에어컨",
        trims: [{ name: "프레스티지 (Prestige)", price: "4,400만 원대", isRec: true, options: "<strong class='text-emerald-700'>[가장 완벽한 패밀리카]</strong><br>• 19인치 알로이 휠<br>• 어라운드 뷰<br>• 헤드업 디스플레이" }],
        pros: [{ title: "📏 투싼/스포티지 부럽지 않은 공간", desc: "각진 디자인으로 트렁크 적재 효율이 매우 뛰어나며, 2열 슬라이딩 및 리클라이닝이 지원됨." }, { title: "🛡️ 독일차의 탄탄한 기본기", desc: "하체가 단단하여 패밀리 SUV임에도 코너링과 롤링 억제력이 탁월함." }],
        cons: [{ title: "⚙️ 저속 꿀렁임과 플라이휠", severity: "★★★★☆", desc: "DSG 미션 특성상 가다 서다 하는 시내 구간에서 꿀렁임이 있으며, 역시 플라이휠 고질병이 있음." }, { title: "🚜 정차 시 디젤 진동", severity: "★★★☆☆", desc: "가솔린 모델 가뭄으로 2.0 TDI가 주력인데, 겨울철 정차 시 핸들과 시트로 진동이 꽤 올라옴." }],
        maintenance: [{ name: "엔진오일", spec: "VW 507.00 (4.7L)", search: "티구안 2.0 TDI 엔진오일" }, { name: "할덱스 오일", spec: "4Motion (4륜) 전용", search: "티구안 할덱스 오일" }]
    },

    /* ---------------- 파사트 / 제타 ---------------- */
    "vw_passat_gt": {
        title: "폭스바겐 파사트 GT (8세대)", subtitle: "2018.03 ~ 현재 | 중형 세단 | 2.0 TDI", tags: ["#유럽형파사트", "#그랜저대안", "#고속크루저"], specs: { mpg: "14.9", power: "190", cc: "1,968" },
        commonOptions: "IQ.Drive(트래블 어시스트), 나파 가죽 시트, 전동 트렁크, 통풍 시트",
        trims: [{ name: "프리미엄", price: "4,300만 원대", isRec: true, options: "• 디지털 콕핏<br>• LED 헤드램프" }],
        pros: [{ title: "🛣️ 고속도로 크루징의 제왕", desc: "독일 아우토반 세팅으로 만들어져 100km/h 이상 고속 주행 시 쏘나타, 그랜저를 압도하는 안정감을 보여줌." }],
        cons: [{ title: "🥱 아저씨 같은 올드한 디자인", severity: "★★★☆☆", desc: "가로줄이 너무 많은 그릴과 보수적인 디자인 탓에 젊은 층에게는 인기가 없음." }],
        maintenance: [{ name: "엔진오일", spec: "VW 507.00 (4.7L)", search: "파사트 GT 엔진오일" }]
    },
    "vw_jetta_7th": {
        title: "폭스바겐 제타 (7세대)", subtitle: "2020.10 ~ 현재 | 준중형 세단 | 1.4 TSI 가솔린", tags: ["#아반떼_저격수", "#가솔린수입차", "#미친가성비"], specs: { mpg: "13.7", power: "150", cc: "1,395" },
        commonOptions: "어댑티브 크루즈 컨트롤, 1열 열선/통풍 시트, 17인치 휠",
        trims: [{ name: "프레스티지", price: "2,900만 원대", isRec: true, options: "<strong class='text-emerald-700'>[아반떼 인스퍼레이션 가격]</strong><br>• 파노라마 선루프<br>• 비츠(Beats) 오디오" }],
        pros: [{ title: "💰 아반떼 살 돈으로 사는 독일차", desc: "할인받으면 2천만 원 후반대에 풍부한 옵션이 들어간 독일 가솔린 세단을 살 수 있음." }, { title: "⚙️ 토크컨버터 8단 미션의 부드러움", desc: "폭스바겐 특유의 꿀렁이는 DSG 미션이 아닌 일반 8단 자동미션이 들어가 시내 주행이 매우 부드러움." }],
        cons: [{ title: "🫨 후륜 토션빔 승차감", severity: "★★★★☆", desc: "원가 절감을 위해 후륜에 토션빔을 넣어 방지턱을 넘을 때 2열 승차감이 상당히 저렴함." }, { title: "🪞 전동접이 사이드미러 부재 (초기형)", severity: "★★★☆☆", desc: "20년식 초기 수입 물량은 손으로 사이드미러를 접어야 하는 황당한 원가 절감이 있었음." }],
        maintenance: [{ name: "엔진오일", spec: "VW 502.00 (4.0L)", search: "제타 1.4 TSI 엔진오일" }]
    }
});
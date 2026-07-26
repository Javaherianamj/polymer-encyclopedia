import { PolymerData } from '../types/polymer';

export const polymersData: PolymerData[] = [
  // ---------------------------------------------------------
  // 1. LDPE (Low-Density Polyethylene)
  // ---------------------------------------------------------
  {
    id: 'ldpe',
    nameFa: 'پلی‌اتیلن با چگالی پایین',
    nameEn: 'Low-Density Polyethylene',
    code: 'LDPE',
    cas: '9002-88-4',
    resinCode: 4,
    family: 'Polyolefins',
    discoveryYear: '1933 (ICI)',
    tradeNames: ['Lupolen (LyondellBasell)', 'Alathon (Dow)', 'Lotrene (QAPCO)'],
    iranianManufacturers: [
      'پتروشیمی جم (گریدهای فیلم و تزریقی)',
      'پتروشیمی امیرکبیر (گریدهای عمومی)',
      'پتروشیمی لاله (تولید LDPE سبک)',
      'پتروشیمی بندر امام (گریدهای مختلف)',
      'پتروشیمی تبریز (ظرفیت متوسط)'
    ],
    multinationalManufacturers: [
      'Dow Chemical (آمریکا)',
      'LyondellBasell (هلند/آمریکا)',
      'ExxonMobil (آمریکا)',
      'SABIC (عربستان سعودی)',
      'QAPCO (قطر)',
      'INEOS (بریتانیا)',
      'Borealis (اتریش)',
      'LG Chem (کره جنوبی)',
      'Mitsubishi Chemical (ژاپن)'
    ],
    overviewText:
      'پلی‌اتیلن با چگالی پایین که با اختصار LDPE شناخته می‌شود، یکی از مهم‌ترین و پرکاربردترین پلیمرهای ترموپلاستیک نیمه‌بلوری در جهان است. این پلیمر عضوی از خانواده بزرگ پلی‌اولفین‌ها محسوب می‌شود و اولین بار در سال 1933 توسط شرکت Imperial Chemical Industries (ICI) بریتانیا به روش صنعتی تولید شد.',
    marketShare: [
      { label: 'بسته‌بندی منعطف (فیلم)', percentage: 58.8 },
      { label: 'کشاورزی (گلخانه و مالچ)', percentage: 24.0 },
      { label: 'پوشش‌های صنعتی و کابل', percentage: 12.0 },
      { label: 'پزشکی و سایر', percentage: 5.2 }
    ],
    applications: [
      'صنعت بسته‌بندی: تولید فیلم‌های بسته‌بندی، کیسه‌های پلاستیکی، و فیلم‌های شرینک و استرچ.',
      'صنعت برق و مخابرات: عایق‌کاری الکتریکی سیم و کابل (به دلیل ضریب تلفات دی‌الکتریک 0.0002).',
      'کشاورزی: فیلم‌های گلخانه‌ای و مالچ.',
      'مصارف عمومی: تولید بطری‌های قابل‌فشردن مانند بطری‌های سس و عسل.'
    ],
    processing: {
      processTemp: '180 - 230 °C',
      mfi: '0.2 - 20 g/10min',
      bur: '2:1 تا 4:1',
      specialNoteTitle: '✨ کاربرد ویژه در صنایع رنگ و رزین‌های پوششی',
      specialNoteContent:
        'LDPE به دلیل برخورداری از ویسکوزیته مناسب و آب‌گریزی عالی (جذب آب زیر 0.01%)، یکی از مواد استراتژیک در فرآیند اکستروژن پوششی (Extrusion Coating) محسوب می‌شود. در این صنعت، از رزین‌های LDPE برای پوشش‌دهی سطوح کاغذ و کارتن استفاده می‌شود تا مقاومت در برابر نفوذ رطوبت به حداکثر برسد.',
      techniques: [
        'تولید فیلم دمشی (Blown Film)',
        'قالب‌گیری تزریقی برای قطعات صنعتی و درب بطری‌ها',
        'قالب‌گیری دورانی برای مخازن بزرگ و اسباب‌بازی‌ها',
        'پوشش سیم و کابل'
      ]
    },
    thermal: {
      tg: '-110 °C',
      tgValue: -110,
      tm: '105 - 115 °C',
      tmValue: 110,
      enthalpyExp: '120 - 180 J/g',
      enthalpy100Cryst: '293 J/g',
      degradationTemp: '300 - 400 °C',
      degradationValue: 350,
      hdt: '45 - 70 °C',
      vicat: '85 - 95 °C',
      conductivity: '0.33 - 0.40 W/m·K',
      cte: '150 - 200 µm/°C'
    },
    mechanical: {
      tensileStrength: '8 - 15 MPa',
      youngModulus: '0.15 - 0.35 GPa',
      elongationAtBreak: '100 - 650 %',
      flexuralModulus: '0.2 - 0.4 GPa',
      hardnessShoreD: '40 - 50',
      description:
        'مقاومت ضربه‌ای LDPE به ویژه در دماهای پایین بسیار بالاست، اما رفتار خزشی (Creep) آن در بارگذاری طولانی‌مدت قابل توجه بوده و باید در طراحی قطعات مدنظر قرار گیرد.'
    },
    physical: {
      density: '0.910 - 0.925 g/cm³',
      minDensity: 0.910,
      maxDensity: 0.925,
      waterAbsorption: '< 0.01 %',
      refractiveIndex: '~ 1.51',
      oxygenPermeability: '400 - 600',
      co2Permeability: '1500 - 2000',
      appearance: 'نیمه‌شفاف (Translucent)'
    },
    chemicalResistance: [
      { category: 'اسیدها و بازها', rating: 'بسیار عالی', colorClass: 'text-emerald-400' },
      { category: 'الکل‌ها', rating: 'خیلی خوب', colorClass: 'text-emerald-400' },
      { category: 'ترک‌خوردگی تنشی محیطی (ESCR)', rating: 'خوب', colorClass: 'text-blue-400' },
      { category: 'هیدروکربن‌های آلیفاتیک', rating: 'خوب (تورم جزئی)', colorClass: 'text-amber-400' },
      { category: 'هیدروکربن‌های آروماتیک', rating: 'ضعیف', colorClass: 'text-rose-400' },
      { category: 'حلال‌های هالوژنه', rating: 'ضعیف', colorClass: 'text-rose-400' },
      { category: 'اشعه فرابنفش (UV)', rating: 'ضعیف (نیاز به پایدارکننده)', colorClass: 'text-rose-400' }
    ],
    electrical: {
      dielectricConstant: '2.25 - 2.35',
      dielectricStrength: '20 - 30 kV/mm',
      volumeResistivity: '10¹⁶ - 10¹⁸ Ω·cm',
      dissipationFactor: '~ 0.0002'
    },
    academic: {
      monomerName: 'اتیلن (Ethylene)',
      monomerFormula: 'C2H4',
      monomerMolarMass: 28.05,
      repeatingUnit: '[CH2 - CH2]n',
      crystallinityRange: '40 - 55 %',
      minCrystallinity: 40,
      maxCrystallinity: 55,
      unitCell: '7.4, 4.93, 2.55 Å (Orthorhombic)',
      lamellaThickness: '10 - 20 nm',
      spheruliteSize: '10 - 50 µm',
      mechanism: 'رادیکال آزاد (فشار بالا 1000-3000 بار و دمای 200-300 °C با آغازگر پراکسید آلی)',
      reactorTypes: ['راکتور لوله‌ای (Tubular) - PDI باریک‌تر', 'راکتور اتوکلاو (Autoclave) - LCB بیشتر'],
      kineticNotes: 'وقوع مکرر واکنش‌های انتقال زنجیر (Chain Transfer) و Backbiting عامل اصلی ایجاد شاخه‌های کوتاه و بلند در زنجیر است.',
      mw: '100,000 - 300,000 g/mol',
      mn: '20,000 - 80,000 g/mol',
      mnDefaultValue: 42000,
      pdi: '3 - 12',
      dpRange: '1,500 - 15,000',
      entanglementMw: '~ 1,300 g/mol',
      radiusOfGyration: '20 - 40 nm',
      zeroShearViscosity: '10⁴ - 10⁶ Pa·s',
      powerLawIndex: '0.3 - 0.5',
      rheologyNotes: 'رفتار ویسکوزیته مذاب از نوع شبه‌پلاستیک (Shear-Thinning) با استحکام مذاب (Melt Strength) فوق‌العاده بالا به دلیل شاخه‌های بلند است.',
      solubilityParameter: '16 - 17 MPa¹/²',
      hansenD: '~ 16',
      hansenP: '~ 0',
      hansenH: '~ 0',
      floryHugginsChi: '0.1 - 0.3',
      ffv: '0.16 - 0.20',
      persistenceLength: '~ 0.7 nm',
      thermoNotes: 'مقدار آنتالپی ذوب تجربی برای LDPE کاملاً بلوری (100% فرضی) برابر با 293 J/g می‌باشد که مبنای محاسبات تجربی بلورینگی است.'
    },
    chainType: 'branched_long_short',
    quiz: [
      {
        q: 'طبق کاتالوگ، مقدار آنتالپی ذوب برای LDPE کاملاً بلوری (100% بلورینگی فرضی) چقدر است؟',
        opts: ['120 J/g', '293 J/g', '180 J/g', '46 MJ/kg'],
        correct: 1,
        fb: 'آفرین! عدد 293 J/g مبنای محاسبه درصد بلورینگی تجربی است.'
      },
      {
        q: 'علت اصلی بالا بودن استحکام مذاب در LDPE چیست؟',
        opts: ['بلورینگی بالا', 'وزن مولکولی عددی بسیار بالا', 'حضور شاخه‌های بلند (Long Chain Branching)', 'ساختار ارتورومبیک'],
        correct: 2,
        fb: 'دقیقاً! شاخه‌های بلند باعث افزایش شدید استحکام مذاب و مناسب شدن برای فیلم دمشی می‌شوند.'
      },
      {
        q: 'استفاده از کدام نوع راکتور پلیمریزاسیون، منجر به توزیع وزن مولکولی باریک‌تری در تولید LDPE می‌شود؟',
        opts: ['راکتور اتوکلاو', 'راکتور لوله‌ای (Tubular)', 'راکتور زیگلر-ناتا', 'هیچکدام'],
        correct: 1,
        fb: 'درست است، راکتور لوله‌ای بازده بالاتر و توزیع وزن مولکولی باریک‌تری می‌دهد.'
      },
      {
        q: 'کدام گزینه درباره مقاومت شیمیایی LDPE صادق است؟',
        opts: [
          'در برابر حلال‌های هالوژنه مقاوم است',
          'در برابر اسیدها و بازها مقاومت بسیار عالی دارد',
          'در برابر اشعه فرابنفش (UV) بسیار پایدار است',
          'در برابر هیدروکربن‌های آروماتیک متورم نمی‌شود'
        ],
        correct: 1,
        fb: 'صحیح! LDPE در برابر اسیدها و بازها مقاومت فوق‌العاده‌ای دارد.'
      }
    ],
    atoms3d: [
      { element: 'C', x: 0.0, y: 0.0, z: 0.0 },
      { element: 'C', x: 1.52, y: 0.0, z: 0.0 },
      { element: 'C', x: 2.28, y: 1.25, z: 0.0 },
      { element: 'C', x: 3.80, y: 1.25, z: 0.0 },
      { element: 'C', x: 1.52, y: -1.25, z: 0.0 }, // Short branch
      { element: 'H', x: -0.5, y: 0.88, z: 0.0 },
      { element: 'H', x: -0.5, y: -0.88, z: 0.0 },
      { element: 'H', x: 2.02, y: 0.88, z: 0.88 },
      { element: 'H', x: 2.02, y: 0.88, z: -0.88 }
    ]
  },

  // ---------------------------------------------------------
  // 2. HDPE (High-Density Polyethylene)
  // ---------------------------------------------------------
  {
    id: 'hdpe',
    nameFa: 'پلی‌اتیلن با چگالی بالا',
    nameEn: 'High-Density Polyethylene',
    code: 'HDPE',
    cas: '9002-88-4',
    resinCode: 2,
    family: 'Polyolefins',
    discoveryYear: '1953 (Karl Ziegler)',
    tradeNames: ['Marlex (Chevron Phillips)', 'Hostaform (Celanese)', 'Sclair (Nova Chemicals)'],
    iranianManufacturers: [
      'پتروشیمی مروارید (تکنولوژی INEOS)',
      'پتروشیمی ایلام (گریدهای لوله و تزریقی)',
      'پتروشیمی جم (تولید HDPE و LLDPE)',
      'پتروشیمی بندر امام و امیرکبیر',
      'پتروشیمی تبریز و شازند'
    ],
    multinationalManufacturers: [
      'Dow Chemical (آمریکا)',
      'LyondellBasell (هلند/آمریکا)',
      'ExxonMobil (آمریکا)',
      'SABIC (عربستان سعودی)',
      'Chevron Phillips Chemical (آمریکا)',
      'INEOS (بریتانیا)',
      'Borealis (اتریش)',
      'LG Chem (کره جنوبی)',
      'Mitsui Chemicals (ژاپن)',
      'Formosa Plastics (تایوان)'
    ],
    overviewText:
      'پلی‌اتیلن با چگالی بالا که با اختصار HDPE شناخته می‌شود، یکی از مهم‌ترین و پرکاربردترین پلیمرهای ترموپلاستیک نیمه‌بلوری در جهان است. این پلیمر به دلیل معماری خطی، از استحکام و بلورینگی بسیار بالایی برخوردار است و در سال 1953 توسط کارل زیگلر کشف شد.',
    marketShare: [
      { label: 'بسته‌بندی صلب (بطری و ظروف)', percentage: 41.2 },
      { label: 'لوله‌کشی و زیرساخت', percentage: 36.5 },
      { label: 'کالاهای مصرفی', percentage: 12.3 },
      { label: 'صنعتی و اتومبیل', percentage: 10.0 }
    ],
    applications: [
      'صنعت بسته‌بندی: بطری‌های شیر، آبمیوه، ظروف مواد شوینده و درب بطری‌ها.',
      'صنعت لوله و اتصالات: انتقال آب آشامیدنی، گاز طبیعی و فاضلاب.',
      'صنایع سنگین: مخازن شیمیایی، پالت‌ها و ژئوممبران‌های پوشش دفن زباله.',
      'صنعت خودرو: تولید باک‌های بنزین و قطعات داخلی به دلیل استحکام و مقاومت شیمیایی عالی.'
    ],
    processing: {
      processTemp: '200 - 240 °C',
      mfi: '0.02 - 20 g/10min',
      bur: '2:1 تا 6:1',
      specialNoteTitle: '✨ کاربرد استراتژیک در صنایع لوله و اتصالات',
      specialNoteContent:
        'در تولید لوله‌های تحت فشار، گریدهای PE80 و PE100 با استفاده از HDPE تولید می‌شوند. این لوله‌ها بر اساس حداقل مقاومت لازم (MRS) طبقه‌بندی شده و مقاومت فوق‌العاده‌ای در برابر خوردگی، فشار بالا و تنش‌های محیطی (ESCR) از خود نشان می‌دهند که آنها را برای انتقال گاز و آب شرب ایده‌آل ساخته است.',
      techniques: [
        'قالب‌گیری تزریقی (قطعات صنعتی، ظروف، درب بطری‌ها)',
        'اکستروژن لوله (PE80, PE100)',
        'قالب‌گیری دمشی (بطری شیر و مواد شوینده)',
        'قالب‌گیری دورانی (مخازن بزرگ)',
        'اکستروژن ورق (ژئوممبران)'
      ]
    },
    thermal: {
      tg: '-120 °C',
      tgValue: -120,
      tm: '130 - 138 °C',
      tmValue: 134,
      enthalpyExp: '200 - 250 J/g',
      enthalpy100Cryst: '293 J/g',
      degradationTemp: '350 - 450 °C',
      degradationValue: 400,
      hdt: '60 - 85 °C',
      vicat: '110 - 130 °C',
      conductivity: '0.45 - 0.55 W/m·K',
      cte: '120 - 180 µm/°C'
    },
    mechanical: {
      tensileStrength: '25 - 40 MPa',
      youngModulus: '0.5 - 1.5 GPa',
      elongationAtBreak: '50 - 600 %',
      flexuralModulus: '0.5 - 1.5 GPa',
      hardnessShoreD: '55 - 65',
      izodImpact: '20 - 60 J/m',
      description:
        'چالش مهم HDPE مقاومت متوسط در برابر ترک‌خوردگی تحت تنش محیطی (ESCR) است که در گریدهای دارای وزن مولکولی بالاتر جبران شده و بهبود می‌یابد.'
    },
    physical: {
      density: '0.940 - 0.970 g/cm³',
      minDensity: 0.940,
      maxDensity: 0.970,
      waterAbsorption: '< 0.01 %',
      refractiveIndex: '1.54',
      oxygenPermeability: '150 - 300',
      co2Permeability: '500 - 1000',
      appearance: 'کدر / کدر متمایل به سفید (Opaque)'
    },
    chemicalResistance: [
      { category: 'اسیدها، بازها و نمک‌ها', rating: 'بسیار عالی', colorClass: 'text-emerald-400' },
      { category: 'الکل‌ها', rating: 'عالی', colorClass: 'text-emerald-400' },
      { category: 'هیدروکربن‌های آلیفاتیک', rating: 'خوب (کمی تورم)', colorClass: 'text-amber-400' },
      { category: 'هیدروکربن‌های آروماتیک', rating: 'ضعیف', colorClass: 'text-rose-400' },
      { category: 'حلال‌های هالوژنه', rating: 'ضعیف', colorClass: 'text-rose-400' },
      { category: 'روغن‌های داغ', rating: 'ضعیف', colorClass: 'text-rose-400' },
      { category: 'اشعه فرابنفش (UV)', rating: 'ضعیف (نیاز به دوده)', colorClass: 'text-rose-400' }
    ],
    electrical: {
      dielectricConstant: '2.30 - 2.40',
      dielectricStrength: '25 - 35 kV/mm',
      volumeResistivity: '10¹⁶ - 10¹⁸ Ω·cm',
      dissipationFactor: '0.0003'
    },
    academic: {
      monomerName: 'اتیلن (Ethylene)',
      monomerFormula: 'C2H4',
      monomerMolarMass: 28.05,
      repeatingUnit: '[CH2 - CH2]n',
      crystallinityRange: '70 - 90 %',
      minCrystallinity: 70,
      maxCrystallinity: 90,
      unitCell: '7.42, 4.95, 2.55 Å (Orthorhombic)',
      lamellaThickness: '20 - 30 nm',
      spheruliteSize: '5 - 50 µm',
      mechanism: 'کاتالیزوری (فشار 1-50 بار و دمای 70-120 °C با کاتالیزور زیگلر-ناتا، کروم فیلیپس یا متالوسن)',
      reactorTypes: ['راکتور دوغابی (Slurry) - Mw بالا', 'راکتور فاز گازی (Gas Phase) - تنوع گرید', 'راکتور محلول (Solution)'],
      kineticNotes: 'کاهش شدید واکنش‌های انتقال زنجیر، منجر به تولید زنجیرهای کاملاً خطی با تراکم شاخه کمتر از 5 در هر 1000 کربن می‌شود.',
      mw: '50,000 - 300,000 g/mol',
      mn: '15,000 - 50,000 g/mol',
      mnDefaultValue: 35000,
      pdi: '3 - 12 (در متالوسن ~ 2)',
      dpRange: '3,500 - 15,000',
      entanglementMw: '~ 1,000 g/mol',
      radiusOfGyration: '15 - 30 nm',
      zeroShearViscosity: '10³ - 10⁶ Pa·s',
      powerLawIndex: '0.3 - 0.5',
      rheologyNotes: 'رفتار ویسکوزیته مذاب شبه‌پلاستیک است. زمان خنک‌سازی آن در قالب به علت بلورینگی سریع، کوتاه است.',
      solubilityParameter: '16 - 17.5 MPa¹/²',
      hansenD: '16.5',
      hansenP: '~ 0',
      hansenH: '~ 0',
      floryHugginsChi: '0.1 - 0.3',
      ffv: '0.10 - 0.15',
      persistenceLength: '0.7 nm',
      thermoNotes: 'به دلیل درصد بلورینگی بالاتر نسبت به LDPE، میزان کسر حجم آزاد کمتر است و نفوذپذیری گازها کاهش می‌یابد.'
    },
    chainType: 'linear_pure',
    quiz: [
      {
        q: 'پلی‌اتیلن سنگین (HDPE) عمدتاً توسط کدام مکانیزم سنتز می‌شود؟',
        opts: ['رادیکال آزاد', 'کاتالیزوری (مانند زیگلر-ناتا)', 'پلیمریزاسیون تراکمی', 'تابش فرابنفش'],
        correct: 1,
        fb: 'صحیح! HDPE با استفاده از کاتالیزورهای زیگلر-ناتا، فیلیپس یا متالوسن تولید می‌شود.'
      },
      {
        q: 'ساختار زنجیر پلیمری در HDPE چگونه است؟',
        opts: ['دارای شاخه‌های بلند و کوتاه فراوان', 'خطی و با تراکم شاخه بسیار کم', 'کاملاً شبکه‌ای (Cross-linked)', 'شاخه‌دار بودن منظم'],
        correct: 1,
        fb: 'دقیقاً. خطی بودن و کمبود شاخه‌ها باعث بلورینگی بالای HDPE می‌شود.'
      },
      {
        q: 'استفاده از کاتالیزور متالوسن در تولید HDPE چه نتیجه‌ای در بر دارد؟',
        opts: ['افزایش شدید شاخص چندپخشی (PDI)', 'تولید پلیمر با PDI باریک (نزدیک به 2)', 'کاهش شدید وزن مولکولی', 'تولید شاخه‌های بلند'],
        correct: 1,
        fb: 'بله. کاتالیزورهای متالوسن کنترل دقیقی روی وزن مولکولی دارند.'
      }
    ],
    atoms3d: [
      { element: 'C', x: 0.0, y: 0.0, z: 0.0 },
      { element: 'C', x: 1.52, y: 0.0, z: 0.0 },
      { element: 'C', x: 2.28, y: 1.25, z: 0.0 },
      { element: 'C', x: 3.80, y: 1.25, z: 0.0 },
      { element: 'C', x: 4.56, y: 0.0, z: 0.0 },
      { element: 'H', x: -0.5, y: 0.88, z: 0.0 },
      { element: 'H', x: -0.5, y: -0.88, z: 0.0 },
      { element: 'H', x: 2.02, y: -0.88, z: 0.0 },
      { element: 'H', x: 2.02, y: 0.88, z: 0.88 }
    ]
  },

  // ---------------------------------------------------------
  // 3. PP (Polypropylene)
  // ---------------------------------------------------------
  {
    id: 'pp',
    nameFa: 'پلی‌پروپیلن',
    nameEn: 'Polypropylene',
    code: 'PP',
    cas: '9003-07-0',
    resinCode: 5,
    family: 'Polyolefins',
    discoveryYear: '1954 (Giulio Natta)',
    tradeNames: ['Moplen (LyondellBasell)', 'Hostalen (Borealis)', 'Sabic PP (SABIC)'],
    iranianManufacturers: [
      'پتروشیمی جم (هموپلیمر و کوپلیمر)',
      'پتروشیمی رجال (پلی‌پروپیلن)',
      'پتروشیمی مارون',
      'پتروشیمی نوید زرشیمی',
      'پتروشیمی تبریز و شازند'
    ],
    multinationalManufacturers: [
      'LyondellBasell',
      'SABIC',
      'Borealis',
      'ExxonMobil Chemical',
      'TotalEnergies',
      'Formosa Plastics',
      'Braskem'
    ],
    overviewText:
      'پلی‌پروپیلن (PP) یکی از پرمصرف‌ترین ترموپلاستیک‌های جهان از خانواده پلی‌اولفین‌هاست. به دلیل وزن مخصوص بسیار پایین (حدود 0.90 g/cm³)، مقاومت حرارتی بالا و خاصیت لولای زنده (Living Hinge)، در صنایع بسته‌بندی، الیاف، خودرو و قطعات تزریقی کاربرد وسیع دارد.',
    marketShare: [
      { label: 'بسته‌بندی و فیلم (BOPP)', percentage: 32.0 },
      { label: 'الیاف و نساجی (گونی و موکت)', percentage: 28.5 },
      { label: 'قطعات خودرو و لوازم خانگی', percentage: 24.5 },
      { label: 'پزشکی و تزریقی صلب', percentage: 15.0 }
    ],
    applications: [
      'الیاف و گونی‌بافی: موکت، نخ‌های BCF، گونی و پارچه‌های اسپان‌باند (Spunbond) ماسک پزشکی.',
      'فیلم‌های BOPP: بسته‌بندی چیپس، پفک و مواد غذایی خشک.',
      'قطعات خودرو: سپر خودرو، رودری و باطری خودرو.',
      'لوازم خانگی: ظروف قابل استفاده در مایکروویو، سطل و صندلی.'
    ],
    processing: {
      processTemp: '210 - 270 °C',
      mfi: '0.3 - 100 g/10min',
      bur: '3:1 تا 5:1',
      specialNoteTitle: '✨ پدیده لولای زنده (Living Hinge)',
      specialNoteContent:
        'پلی‌پروپیلن به دلیل انعطاف‌پذیری مولکولی فوق‌العاده در جهت‌گیری زنجیرها، امکان ساخت لولاهای پلاستیکی یکپارچه را دارد که میلیون‌ها بار بدون پارگی باز و بست می‌شوند.',
      techniques: [
        'قالب‌گیری تزریقی (ظروف و قطعات خودرو)',
        'تولید فیلم BOPP و IPP',
        'اکستروژن الیاف و نخ صنعتی',
        'ترموفرمینگ (ظروف یکبار مصرف)'
      ]
    },
    thermal: {
      tg: '-10 °C',
      tgValue: -10,
      tm: '160 - 168 °C',
      tmValue: 165,
      enthalpyExp: '80 - 110 J/g',
      enthalpy100Cryst: '207 J/g',
      degradationTemp: '320 - 400 °C',
      degradationValue: 360,
      hdt: '90 - 115 °C',
      vicat: '145 - 155 °C',
      conductivity: '0.12 - 0.22 W/m·K',
      cte: '100 - 180 µm/°C'
    },
    mechanical: {
      tensileStrength: '30 - 40 MPa',
      youngModulus: '1.1 - 1.6 GPa',
      elongationAtBreak: '100 - 600 %',
      flexuralModulus: '1.2 - 1.8 GPa',
      hardnessShoreD: '68 - 75',
      izodImpact: '30 - 100 J/m',
      description: 'PP در دمای محیط دارای مدول و استحکام عالی است اما در دماهای زیر صفر درجه (نزدیک Tg) ترد می‌شود، لذا از کوپلیمرهای اتان-پروپیلن برای کاربردهای برودتی استفاده می‌شود.'
    },
    physical: {
      density: '0.895 - 0.915 g/cm³',
      minDensity: 0.895,
      maxDensity: 0.915,
      waterAbsorption: '< 0.01 %',
      refractiveIndex: '1.49',
      oxygenPermeability: '1500 - 2000',
      co2Permeability: '4000 - 6000',
      appearance: 'شفاف تا نیمه‌شفاف'
    },
    chemicalResistance: [
      { category: 'اسیدها و بازها', rating: 'بسیار عالی', colorClass: 'text-emerald-400' },
      { category: 'الکل‌ها و شوینده‌ها', rating: 'عالی', colorClass: 'text-emerald-400' },
      { category: 'حلال‌های آلی در دمای محیط', rating: 'خوب', colorClass: 'text-amber-400' },
      { category: 'عوامل اکسیدکننده قوی', rating: 'ضعیف', colorClass: 'text-rose-400' },
      { category: 'اشعه فرابنفش (UV)', rating: 'ضعیف (نیاز به UV stabilizer)', colorClass: 'text-rose-400' }
    ],
    electrical: {
      dielectricConstant: '2.2 - 2.3',
      dielectricStrength: '30 - 40 kV/mm',
      volumeResistivity: '10¹⁶ - 10¹⁸ Ω·cm',
      dissipationFactor: '0.0003'
    },
    academic: {
      monomerName: 'پروپیلن (Propylene)',
      monomerFormula: 'C3H6',
      monomerMolarMass: 42.08,
      repeatingUnit: '[CH2 - CH(CH3)]n',
      crystallinityRange: '50 - 70 %',
      minCrystallinity: 50,
      maxCrystallinity: 70,
      unitCell: '6.66, 20.78, 6.50 Å (Monoclinic alpha-form)',
      lamellaThickness: '10 - 25 nm',
      spheruliteSize: '10 - 100 µm',
      mechanism: 'کاتالیزور زیگلر-ناتا پایه تیتانیوم (Stereospecific) یا کاتالیزور متالوسن جهت کنترل تتاکتیسیته (Isotactic PP)',
      reactorTypes: ['راکتور فاز گازی (Gas Phase Loop)', 'راکتور دوغابی (Bulk Liquid Monomer)'],
      kineticNotes: 'کنترل تاکتیسیته (ایزوتاکتیک، سیندیوتاکتیک، آتاکتیک) تعیین‌کننده درجه بلورینگی و خواص مکانیکی است.',
      mw: '150,000 - 400,000 g/mol',
      mn: '30,000 - 80,000 g/mol',
      mnDefaultValue: 50000,
      pdi: '3 - 8',
      dpRange: '3,000 - 10,000',
      entanglementMw: '~ 7,000 g/mol',
      radiusOfGyration: '15 - 35 nm',
      zeroShearViscosity: '10³ - 10⁵ Pa·s',
      powerLawIndex: '0.35 - 0.45',
      rheologyNotes: 'مذاب PP رفتار ویسکوالاستیک و لغزش شدید برشی دارد.',
      solubilityParameter: '16.5 - 17.5 MPa¹/²',
      hansenD: '16.8',
      hansenP: '~ 0',
      hansenH: '~ 0',
      floryHugginsChi: '0.2 - 0.4',
      ffv: '0.14 - 0.18',
      persistenceLength: '0.8 nm',
      thermoNotes: 'وجود گروه متیل روی کربن زوج، صلبیت زنجیر و دمای ذوب را به 165 °C می‌رساند.'
    },
    chainType: 'isotactic',
    quiz: [
      {
        q: 'کدام نوع تاکتیسیته (Tacticity) در پلی‌پروپیلن منجر به بالاترین درصد بلورینگی و دمای ذوب می‌شود؟',
        opts: ['آتاکتیک (Atactic)', 'ایزوتاکتیک (Isotactic)', 'سیندیوتاکتیک (Syndiotactic)', 'نامنظم'],
        correct: 1,
        fb: 'آفرین! در PP ایزوتاکتیک، همه گروه‌های متیل در یک سمت زنجیر قرار دارند که اجازه تشکیل بلور را می‌دهد.'
      },
      {
        q: 'چرا پلی‌پروپیلن برای تولید لولای زنده (Living Hinge) انتخاب اول است؟',
        opts: ['به دلیل چگالی بالا', 'به دلیل مقاومت عالی در برابر خستگی ناشی از خم شدن مکرر', 'به دلیل شفافیت مطلق', 'به دلیل دمای ذوب پایین'],
        correct: 1,
        fb: 'دقیقاً! جهت‌گیری زنجیرها در لولا مقاومت خستگی بی‌نظیری ایجاد می‌کند.'
      }
    ],
    atoms3d: [
      { element: 'C', x: 0.0, y: 0.0, z: 0.0 },
      { element: 'C', x: 1.52, y: 0.0, z: 0.0 },
      { element: 'C', x: 2.28, y: 1.25, z: 0.0 },
      { element: 'C', x: 1.52, y: -1.25, z: 0.0 }, // Methyl
      { element: 'H', x: -0.5, y: 0.88, z: 0.0 },
      { element: 'H', x: -0.5, y: -0.88, z: 0.0 },
      { element: 'H', x: 2.02, y: -1.88, z: 0.0 }
    ]
  },

  // ---------------------------------------------------------
  // 4. PVC (Polyvinyl Chloride)
  // ---------------------------------------------------------
  {
    id: 'pvc',
    nameFa: 'پلی‌وینیل کلراید',
    nameEn: 'Polyvinyl Chloride',
    code: 'PVC',
    cas: '9002-86-2',
    resinCode: 3,
    family: 'Vinyl Polymers',
    discoveryYear: '1872 (Eugen Baumann)',
    tradeNames: ['Vinnolit (Westlake)', 'Vestolit (Orbia)', 'Shin-Etsu PVC'],
    iranianManufacturers: [
      'پتروشیمی بندر امام (S-PVC)',
      'پتروشیمی غدیر (گرید S-65)',
      'پتروشیمی اروند (E-PVC و S-PVC)',
      'پتروشیمی آبادان'
    ],
    multinationalManufacturers: [
      'Shin-Etsu Chemical (ژاپن)',
      'Formosa Plastics (تایوان)',
      'Westlake Chemical (آمریکا)',
      'Orbia / Vestolit (مکزیک/آلمان)',
      'Kem One (فرانسه)'
    ],
    overviewText:
      'پلی‌وینیل کلراید (PVC) سومین ترموپلاستیک پرمصرف جهان است. به دلیل وجود اتم قطبی کلر، قطبیت بالا، و قابلیت آمیخته‌شدن با انواع نرم‌کننده‌ها (Plasticizers) به دو فرم قطعات سخت (Rigid PVC یا U-PVC) و نرم و انعطاف‌پذیر (Flexible PVC) عرضه می‌شود.',
    marketShare: [
      { label: 'لوله، اتصالات و پروفیل در و پنجره (U-PVC)', percentage: 62.0 },
      { label: 'سیم، کابل و روکش کابل نرم', percentage: 14.5 },
      { label: 'سفره، چرم مصنوعی و ورق‌های انعطاف‌پذیر', percentage: 13.5 },
      { label: 'بطری‌های تزریقی و ملزومات پزشکی (کیسه خون)', percentage: 10.0 }
    ],
    applications: [
      'پروفیل در و پنجره U-PVC: عایق حرارتی و صوتی عالی.',
      'لوله‌های فاضلاب و آبرسانی: مقاومت در برابر خوردگی و طول عمر بیش از 50 سال.',
      'تجهیزات پزشکی: کیسه خون و لوله‌های سرم (PVC نرم شده با DOP/DINP).',
      'چرم مصنوعی و کف‌پوش: روکش صندلی اتومبیل و تارپالین.'
    ],
    processing: {
      processTemp: '160 - 200 °C',
      mfi: 'ارزیابی با K-Value (مثلاً K-67 یا K-57)',
      bur: 'عدم استفاده مستقیم از BUR فیلم ساده',
      specialNoteTitle: '⚠️ حساسیت حرارتی و تخریب HCl',
      specialNoteContent:
        'PVC در دماهای بالای 140 °C شروع به آزاد کردن گاز هیدروژن کلرید (HCl) می‌کند، بنابراین افزودن استبیلازرهای حرارتی (Ca/Zn یا ترکیبات قلع) در تمام آمیزه‌ها ضروری است.',
      techniques: [
        'اکستروژن پروفیل و لوله U-PVC',
        'تقویم‌کاری (Calendering) برای تولید فیلم و چرم',
        'قالب‌گیری تزریقی اتصالات',
        'پلاستیسول (Plastisol) برای دیپینگ و روکش‌دهی'
      ]
    },
    thermal: {
      tg: '80 - 85 °C',
      tgValue: 82,
      tm: '212 - 230 °C (غالباً بی‌شکل/کم‌بلور)',
      tmValue: 220,
      enthalpyExp: '10 - 25 J/g',
      enthalpy100Cryst: '181 J/g',
      degradationTemp: '160 - 220 °C (بدون استبیلازر)',
      degradationValue: 180,
      hdt: '65 - 80 °C',
      vicat: '75 - 85 °C',
      conductivity: '0.14 - 0.17 W/m·K',
      cte: '50 - 80 µm/°C'
    },
    mechanical: {
      tensileStrength: '40 - 60 MPa (Rigid) / 10 - 25 MPa (Flexible)',
      youngModulus: '2.5 - 4.0 GPa (Rigid)',
      elongationAtBreak: '20 - 100 % (Rigid) / 200 - 450 % (Flexible)',
      flexuralModulus: '3.0 - 4.5 GPa',
      hardnessShoreD: '75 - 85 (Rigid)',
      izodImpact: '30 - 50 J/m',
      description: 'خواص مکانیکی PVC وابسته به میزان پلاستیسایزر است. U-PVC کاملاً سخت و صلب است، در حالی که PVC نرم انعطاف‌پذیری فوق‌العاده‌ای دارد.'
    },
    physical: {
      density: '1.30 - 1.45 g/cm³',
      minDensity: 1.30,
      maxDensity: 1.45,
      waterAbsorption: '0.05 - 0.15 %',
      refractiveIndex: '1.54',
      oxygenPermeability: '20 - 40',
      co2Permeability: '100 - 200',
      appearance: 'شفاف یا کدر رنگی'
    },
    chemicalResistance: [
      { category: 'اسیدها و بازها', rating: 'بسیار عالی', colorClass: 'text-emerald-400' },
      { category: 'روغن‌ها و چربی‌ها', rating: 'عالی', colorClass: 'text-emerald-400' },
      { category: 'الکل‌ها', rating: 'خوب', colorClass: 'text-emerald-400' },
      { category: 'کتون‌ها و استرها (MEK, THF)', rating: 'حلال و ضعیف', colorClass: 'text-rose-400' },
      { category: 'هیدروکربن‌های آروماتیک', rating: 'تورم شدید', colorClass: 'text-rose-400' }
    ],
    electrical: {
      dielectricConstant: '3.0 - 3.3',
      dielectricStrength: '20 - 40 kV/mm',
      volumeResistivity: '10¹⁵ Ω·cm',
      dissipationFactor: '0.01 - 0.02'
    },
    academic: {
      monomerName: 'وینیل کلراید (Vinyl Chloride Monomer - VCM)',
      monomerFormula: 'C2H3Cl',
      monomerMolarMass: 62.50,
      repeatingUnit: '[CH2 - CH(Cl)]n',
      crystallinityRange: '5 - 10 % (غالباً آمورف / بی‌شکل)',
      minCrystallinity: 5,
      maxCrystallinity: 10,
      unitCell: '10.6, 5.4, 5.1 Å (Orthorhombic syndiotactic domain)',
      lamellaThickness: '< 5 nm',
      spheruliteSize: 'دیده نمی‌شود',
      mechanism: 'پلیمریزاسیون رادیکال آزاد معلق (Suspension PVC) یا امولسیونی (Emulsion PVC)',
      reactorTypes: ['راکتور دسته‌ای معلق (Suspension Batch Reactor)'],
      kineticNotes: 'به علت حلالیت پایین پلیمر در مونومر خود، پلیمریزاسیون ناهمگن رخ می‌دهد.',
      mw: '60,000 - 150,000 g/mol',
      mn: '30,000 - 70,000 g/mol',
      mnDefaultValue: 45000,
      pdi: '2.0 - 2.5',
      dpRange: '700 - 1,500',
      entanglementMw: '~ 3,000 g/mol',
      radiusOfGyration: '15 - 25 nm',
      zeroShearViscosity: '10⁴ - 10⁷ Pa·s',
      powerLawIndex: '0.25 - 0.35',
      rheologyNotes: 'ذرات PVC در مذاب ساختار گرانولی خود را حفظ می‌کنند و فرآیند پخت (Fusion) رخ می‌دهد.',
      solubilityParameter: '19.0 - 20.0 MPa¹/²',
      hansenD: '18.2',
      hansenP: '7.5',
      hansenH: '8.3',
      floryHugginsChi: '0.3 - 0.5',
      ffv: '0.10 - 0.12',
      persistenceLength: '0.6 nm',
      thermoNotes: 'گروه قطبی C-Cl گشتاور دو قطبی ایجاد کرده و Tg را به بالای 80 درجه سانتی‌گراد می‌رساند.'
    },
    chainType: 'polar_cl',
    quiz: [
      {
        q: 'مهم‌ترین افزودنی برای جلوگیری از تخریب حرارتی PVC در فرآیند شکل‌دهی چیست؟',
        opts: ['نرم‌کننده (DOP)', 'پایدارکننده حرارتی (Heat Stabilizer)', 'رنگدانه', 'پرکننده کربنات کلسیم'],
        correct: 1,
        fb: 'آفرین! پایدارکننده‌های حرارتی جلوی آزاد شدن گاز HCl را می‌گیرند.'
      }
    ],
    atoms3d: [
      { element: 'C', x: 0.0, y: 0.0, z: 0.0 },
      { element: 'C', x: 1.52, y: 0.0, z: 0.0 },
      { element: 'Cl', x: 2.28, y: 1.45, z: 0.0 }, // Chlorine
      { element: 'H', x: -0.5, y: 0.88, z: 0.0 },
      { element: 'H', x: -0.5, y: -0.88, z: 0.0 }
    ]
  },

  // ---------------------------------------------------------
  // 5. PET (Polyethylene Terephthalate)
  // ---------------------------------------------------------
  {
    id: 'pet',
    nameFa: 'پلی‌اتیلن ترفتالات',
    nameEn: 'Polyethylene Terephthalate',
    code: 'PET',
    cas: '25038-59-9',
    resinCode: 1,
    family: 'Polyesters',
    discoveryYear: '1941 (John Rex Whinfield)',
    tradeNames: ['Trevira (Indorama)', 'Mylar (DuPont)', 'Arnite (Envalior)'],
    iranianManufacturers: [
      'پتروشیمی تندگویان (بزرگترین تولیدکننده گرید بطری و نساجی)',
      'پتروشیمی اصفهان'
    ],
    multinationalManufacturers: [
      'Indorama Ventures (تایلند/جهانی)',
      'Far Eastern New Century (تایوان)',
      'Alpek (مکزیک)',
      'SABIC',
      'DuPont / Teijin'
    ],
    overviewText:
      'پلی‌اتیلن ترفتالات (PET) یک پلی‌استر ترموپلاستیک مهندسی نیمه‌بلوری است. به دلیل شفافیت فوق‌العاده، نفوذپذیری بسیار پایین نسبت به گاز دی‌اکسید کربن و اکسیژن، و استحکام کششی بالا، استاندارد طلایی صنعت بطری‌سازی آب‌معدنی و نوشابه و الیاف نساجی (پلی‌استر / نخ فلامنت) است.',
    marketShare: [
      { label: 'الیاف نساجی و نخ پلی‌استر (Polyester Fiber)', percentage: 60.0 },
      { label: 'بطری‌های نوشیدنی و بسته‌بندی (PET Bottle Grade)', percentage: 30.0 },
      { label: 'ورق، فیلم BOPET و بسته‌بندی دارویی', percentage: 7.0 },
      { label: 'قطعات مهندسی تزریقی', percentage: 3.0 }
    ],
    applications: [
      'بطری نوشابه و آب آشامیدنی: مانع عالی برای نگهداری فشار CO2.',
      'صنعت نساجی: الیاف پلی‌استر، نخ‌های فیلامنتی و پارچه لباس.',
      'فیلم‌های شفاف BOPET: بسته‌بندی مواد غذایی و نوارهای عایق برق.',
      'تجهیزات پزشکی: نخ‌های جراحی و الیاف مصنوعی.'
    ],
    processing: {
      processTemp: '260 - 290 °C',
      mfi: 'ارزیابی با ویسکوزیته ذاتی IV (مثلاً 0.80 dL/g برای بطری)',
      bur: 'فرآیند کشش دو محوره (Stretch Blow Molding)',
      specialNoteTitle: '💧 اهمیت خشک‌سازی (Dehumidifying Drying)',
      specialNoteContent:
        'PET به شدت هیدرولیزپذیر است. قبل از فرآیند مذاب، رطوبت رزین باید به زیر 50 ppm (0.005%) برسد، در غیر این صورت زنجیرهای استری شکسته شده و IV افت شدید خواهد داشت.',
      techniques: [
        'تزریق پریفرم (Preform Injection)',
        'باد کردن کششی پریفرم (Stretch Blow Molding)',
        'ذوب‌ریزی الیاف (Melt Spinning)',
        'اکستروژن فیلم دو محوره (BOPET)'
      ]
    },
    thermal: {
      tg: '67 - 80 °C',
      tgValue: 75,
      tm: '250 - 260 °C',
      tmValue: 255,
      enthalpyExp: '50 - 85 J/g',
      enthalpy100Cryst: '140 J/g',
      degradationTemp: '340 - 420 °C',
      degradationValue: 380,
      hdt: '70 - 80 °C (بدون الیاف) / 220 °C (با الیاف شیشه)',
      vicat: '170 - 180 °C',
      conductivity: '0.15 - 0.24 W/m·K',
      cte: '60 - 80 µm/°C'
    },
    mechanical: {
      tensileStrength: '50 - 80 MPa (Unoriented) / 150 - 250 MPa (Oriented Film/Fiber)',
      youngModulus: '2.8 - 4.0 GPa',
      elongationAtBreak: '30 - 300 %',
      flexuralModulus: '3.0 - 4.0 GPa',
      hardnessShoreD: '80 - 85',
      izodImpact: '20 - 40 J/m',
      description: 'کشش دو محوره (Biaxial Orientation) جهت‌گیری زنجیرها و بلورینگی ناشی از کرنش ایجاد کرده و استحکام کششی را تا 250 MPa می‌رساند.'
    },
    physical: {
      density: '1.38 - 1.40 g/cm³ (Amorphous: 1.33 g/cm³)',
      minDensity: 1.33,
      maxDensity: 1.40,
      waterAbsorption: '0.1 - 0.2 %',
      refractiveIndex: '1.575',
      oxygenPermeability: '3 - 6',
      co2Permeability: '15 - 25',
      appearance: 'کاملاً شفاف (Glass-like Transparency)'
    },
    chemicalResistance: [
      { category: 'اسیدهای رقیق', rating: 'عالی', colorClass: 'text-emerald-400' },
      { category: 'روغن‌ها و حلال‌های آلیفاتیک', rating: 'عالی', colorClass: 'text-emerald-400' },
      { category: 'بازهای قوی و آمین‌ها', rating: 'ضعیف (تخریب استری)', colorClass: 'text-rose-400' },
      { category: 'آب جوش و بخار آب', rating: 'ضعیف (هیدرولیز)', colorClass: 'text-rose-400' }
    ],
    electrical: {
      dielectricConstant: '3.2 - 3.4',
      dielectricStrength: '20 - 25 kV/mm',
      volumeResistivity: '10¹⁶ Ω·cm',
      dissipationFactor: '0.002'
    },
    academic: {
      monomerName: 'ترفتالیک اسید (TPA) / DMT و اتیلن گلیکول (EG)',
      monomerFormula: 'C10H8O4',
      monomerMolarMass: 192.17,
      repeatingUnit: '[CO - C6H4 - CO - O - CH2 - CH2 - O]n',
      crystallinityRange: '30 - 50 %',
      minCrystallinity: 30,
      maxCrystallinity: 50,
      unitCell: '4.56, 5.94, 10.75 Å (Triclinic)',
      lamellaThickness: '5 - 15 nm',
      spheruliteSize: '1 - 20 µm',
      mechanism: 'پلیمریزاسیون تراکمی (Polycondensation) فاز مذاب و سپس ارتقاء وزن مولکولی در فاز جامد (SSP)',
      reactorTypes: ['راکتور Esterification', 'راکتور Polycondensation', 'برج SSP (Solid State Polymerization)'],
      kineticNotes: 'فرآیند SSP برای افزایش IV بطری تا بالای 0.80 dL/g ضروری است.',
      mw: '30,000 - 80,000 g/mol',
      mn: '15,000 - 40,000 g/mol',
      mnDefaultValue: 25000,
      pdi: '1.8 - 2.2',
      dpRange: '100 - 300',
      entanglementMw: '~ 1,500 g/mol',
      radiusOfGyration: '8 - 18 nm',
      zeroShearViscosity: '10² - 10³ Pa·s',
      powerLawIndex: '0.6 - 0.8',
      rheologyNotes: 'مذاب PET رفتار نیوتنی‌تر دارد و ویسکوزیته آن وابستگی شدیدی به دمای مذاب دارد.',
      solubilityParameter: '20.5 - 21.5 MPa¹/²',
      hansenD: '18.5',
      hansenP: '4.0',
      hansenH: '7.5',
      floryHugginsChi: '0.3 - 0.5',
      ffv: '0.08 - 0.10',
      persistenceLength: '0.9 nm',
      thermoNotes: 'وجود حلقه بنزنی در ستون فقرات زنجیر صلبیت حرارتی و شفافیت بالا ایجاد می‌کند.'
    },
    chainType: 'ester',
    quiz: [
      {
        q: 'پارامتر اصلی سنجش وزن مولکولی رزین PET گرید بطری چیست؟',
        opts: ['شاخص MFI', 'ویسکوزیته ذاتی (Intrinsic Viscosity - IV)', 'درجد سختی', 'چگالی ظاهری'],
        correct: 1,
        fb: 'آفرین! ویسکوزیته ذاتی (IV) پارامتر کلیدی کنترل کیفیت PET است.'
      }
    ],
    atoms3d: [
      { element: 'C', x: 0.0, y: 0.0, z: 0.0 },
      { element: 'C', x: 1.4, y: 0.0, z: 0.0 },
      { element: 'O', x: 2.1, y: 1.1, z: 0.0 },
      { element: 'O', x: 2.1, y: -1.1, z: 0.0 }
    ]
  },

  // ---------------------------------------------------------
  // 6. PS (Polystyrene)
  // ---------------------------------------------------------
  {
    id: 'ps',
    nameFa: 'پلی‌استایرن',
    nameEn: 'Polystyrene',
    code: 'PS',
    cas: '9003-53-6',
    resinCode: 6,
    family: 'Styrenic Polymers',
    discoveryYear: '1839 (Eduard Simon)',
    tradeNames: ['Styron (Trinseo)', 'Luran (Ineos Styrolution)', 'Polystyrene INEOS'],
    iranianManufacturers: [
      'پتروشیمی تبریز (تولیدکننده اصلی GPPS, HIPS, EPS)',
      'پتروشیمی پارس (مونومر استایرن)',
      'پتروشیمی انتخاب (EPS)'
    ],
    multinationalManufacturers: [
      'Ineos Styrolution',
      'Trinseo',
      'TotalEnergies Petrochemicals',
      'Formosa Plastics',
      'SABIC'
    ],
    overviewText:
      'پلی‌استایرن (PS) یک ترموپلاستیک کاملاً آمورف و شفاف از خانواده استایرنیک‌هاست. به دلیل وجود حلقه حجیم فنیل، بلورینگی ندارد. در سه فرم عمومی شفاف (GPPS)، مقاوم به ضربه (HIPS حاوی لاستیک پولی‌بوتادین) و منبسط شونده (EPS / یونولیت) تولید می‌شود.',
    marketShare: [
      { label: 'بسته‌بندی یکبار مصرف و ظروف غذا', percentage: 40.0 },
      { label: 'عایق حرارتی ساختمان (یونولیت EPS)', percentage: 30.0 },
      { label: 'لوازم خانگی و بدنه تلویزیون (HIPS)', percentage: 20.0 },
      { label: 'تجهیزات آزمایشگاهی و CD کیس', percentage: 10.0 }
    ],
    applications: [
      'GPPS: ظروف کریستالی یکبار مصرف، قاب سی‌دی، و وسایل آزمایشگاهی.',
      'HIPS: بدنه یخچال، بدنه تلویزیون، اسباب‌بازی و ظروف ماست.',
      'EPS (یونولیت): بلوک‌های سقف ساختمان و بسته‌بندی محافظ لوازم خانگی.'
    ],
    processing: {
      processTemp: '180 - 250 °C',
      mfi: '1 - 25 g/10min',
      bur: 'فیلم استرچ استایرنیک',
      specialNoteTitle: '✨ شفافیت کریستالی GPPS',
      specialNoteContent:
        'GPPS به دلیل عدم تشکیل بلور (آمورف بودن) دارای ضریب شکست نور بالا (1.59) و شفافیت شبیه‌به‌شیشه است اما شکنندگی بالایی دارد.',
      techniques: [
        'قالب‌گیری تزریقی',
        'ورق‌سازی و ترموفرمینگ ظروف',
        'پخت با بخار آب برای پارتیکل‌های EPS'
      ]
    },
    thermal: {
      tg: '95 - 105 °C',
      tgValue: 100,
      tm: 'ندارد (کاملاً آمورف)',
      tmValue: 240,
      enthalpyExp: '0 J/g (آمورف)',
      enthalpy100Cryst: 'ندارد',
      degradationTemp: '300 - 380 °C',
      degradationValue: 340,
      hdt: '75 - 90 °C',
      vicat: '85 - 100 °C',
      conductivity: '0.10 - 0.14 W/m·K (EPS: 0.033 W/m·K)',
      cte: '60 - 80 µm/°C'
    },
    mechanical: {
      tensileStrength: '35 - 55 MPa (GPPS) / 20 - 35 MPa (HIPS)',
      youngModulus: '2.8 - 3.5 GPa',
      elongationAtBreak: '1 - 3 % (GPPS) / 30 - 65 % (HIPS)',
      flexuralModulus: '3.0 - 3.4 GPa',
      hardnessShoreD: '80 - 90',
      izodImpact: '15 - 25 J/m (GPPS) / 70 - 120 J/m (HIPS)',
      description: 'GPPS بسیار سخت اما ترد و شکننده است، در حالی که HIPS با افزودن ذرات لاستیک PB چقرمه شده است.'
    },
    physical: {
      density: '1.04 - 1.06 g/cm³',
      minDensity: 1.04,
      maxDensity: 1.06,
      waterAbsorption: '0.02 - 0.05 %',
      refractiveIndex: '1.59',
      oxygenPermeability: '250 - 350',
      co2Permeability: '800 - 1200',
      appearance: 'کاملاً شفاف و کریستالی (GPPS)'
    },
    chemicalResistance: [
      { category: 'اسیدها و بازها', rating: 'عالی', colorClass: 'text-emerald-400' },
      { category: 'الکل‌ها', rating: 'خیلی خوب', colorClass: 'text-emerald-400' },
      { category: 'حلال‌های آلیفاتیک و استون', rating: 'حل‌شونده و ضعیف', colorClass: 'text-rose-400' },
      { category: 'هیدروکربن‌های آروماتیک', rating: 'حلالیت کامل', colorClass: 'text-rose-400' }
    ],
    electrical: {
      dielectricConstant: '2.4 - 2.6',
      dielectricStrength: '20 - 30 kV/mm',
      volumeResistivity: '10¹⁶ Ω·cm',
      dissipationFactor: '0.0003'
    },
    academic: {
      monomerName: 'استایرن (Styrene)',
      monomerFormula: 'C8H8',
      monomerMolarMass: 104.15,
      repeatingUnit: '[CH2 - CH(C6H5)]n',
      crystallinityRange: '0 % (Atactic Amorphous)',
      minCrystallinity: 0,
      maxCrystallinity: 0,
      unitCell: 'ندارد (ساختار مایع منجمد آمورف)',
      lamellaThickness: 'ندارد',
      spheruliteSize: 'ندارد',
      mechanism: 'پلیمریزاسیون رادیکال آزاد توده‌ای (Bulk) یا معلق (Suspension)',
      reactorTypes: ['راکتور توده‌ای پیوسته (Continuous Bulk)'],
      kineticNotes: 'وجود حلقه فنیل مانع نظم زنجیر و بلورینگی می‌شود.',
      mw: '180,000 - 320,000 g/mol',
      mn: '60,000 - 120,000 g/mol',
      mnDefaultValue: 85000,
      pdi: '2.2 - 3.0',
      dpRange: '1,500 - 3,000',
      entanglementMw: '~ 18,000 g/mol',
      radiusOfGyration: '12 - 22 nm',
      zeroShearViscosity: '10³ - 10⁵ Pa·s',
      powerLawIndex: '0.3 - 0.5',
      rheologyNotes: 'مذابی با گرانروی مناسب و پایداری حرارتی عالی.',
      solubilityParameter: '18.5 - 19.5 MPa¹/²',
      hansenD: '18.5',
      hansenP: '1.0',
      hansenH: '3.0',
      floryHugginsChi: '0.3 - 0.4',
      ffv: '0.18 - 0.22',
      persistenceLength: '1.0 nm',
      thermoNotes: 'ممان ممانعت فضایی حلقه فنیل Tg را تا 100 °C بالا می‌برد.'
    },
    chainType: 'aromatic',
    quiz: [
      {
        q: 'علت اصلی شفافیت بالایی و عدم بلورینگی پلی‌استایرن عمومی (GPPS) چیست؟',
        opts: ['چگالی بالا', 'وجود حلقه فنیل حجیم و ساختار آتاکتیک آمورف', 'کشش دو محوره', 'درصد بلورینگی 90%'],
        correct: 1,
        fb: 'آفرین! عدم نظم فضایی حلقه فنیل مانع بلورینگی می‌شود.'
      }
    ],
    atoms3d: [
      { element: 'C', x: 0.0, y: 0.0, z: 0.0 },
      { element: 'C', x: 1.52, y: 0.0, z: 0.0 },
      { element: 'C', x: 2.28, y: 1.25, z: 0.0 }, // Phenyl ring start
      { element: 'C', x: 3.66, y: 1.25, z: 0.0 },
      { element: 'C', x: 4.35, y: 2.45, z: 0.0 }
    ]
  },

  // ---------------------------------------------------------
  // 7. LLDPE (Linear Low-Density Polyethylene)
  // ---------------------------------------------------------
  {
    id: 'lldpe',
    nameFa: 'پلی‌اتیلن سبک خطی',
    nameEn: 'Linear Low-Density Polyethylene',
    code: 'LLDPE',
    cas: '25087-34-7',
    resinCode: 4,
    family: 'Polyolefins',
    discoveryYear: '1970s (DuPont / Union Carbide)',
    tradeNames: ['Dowlex (Dow)', 'Exceed (ExxonMobil)', 'Sabic LLDPE'],
    iranianManufacturers: [
      'پتروشیمی جم (گرید 23511)',
      'پتروشیمی امیرکبیر (گرید LL0209AA)',
      'پتروشیمی تبریز',
      'پتروشیمی ایلام'
    ],
    multinationalManufacturers: [
      'Dow Chemical',
      'ExxonMobil Chemical',
      'SABIC',
      'LyondellBasell',
      'Borealis'
    ],
    overviewText:
      'پلی‌اتیلن سبک خطی (LLDPE) حاصل کوپلیمریزاسیون اتیلن با آلفا-اولفین‌ها (1-بوتن، 1-هگزن یا 1-اکتن) در فشار پایین است. برخلاف LDPE، دارای شاخه‌های کوتاه فراوان و فاقد شاخه بلند است که استحکام کششی، مقاومت به سوراخ شدن (Puncture Resistance) و چقرمگی فیلم را افزایش می‌دهد.',
    marketShare: [
      { label: 'فیلم‌های استرچ و شرینک صنعتی', percentage: 65.0 },
      { label: 'کیسه‌های سنگین و بسته‌بندی مواد غذایی', percentage: 20.0 },
      { label: 'روکش کابل و تزریقی', percentage: 10.0 },
      { label: 'قالب‌گیری دورانی (Rotomolding)', percentage: 5.0 }
    ],
    applications: [
      'فیلم استرچ پالت‌پیچی: مقاومت فوق‌العاده در برابر سوراخ شدن و پارگی.',
      'کیسه‌های پتروشیمی و سیمان (Heavy Duty Bags).',
      'فیلم‌های کشاورزی و پوشش گلخانه ترکیب با LDPE.'
    ],
    processing: {
      processTemp: '190 - 240 °C',
      mfi: '0.5 - 50 g/10min',
      bur: '2.5:1 تا 4.5:1',
      specialNoteTitle: '✨ مقاومت به سوراخ شدن (Puncture Resistance)',
      specialNoteContent:
        'حضور شاخه‌های کوتاه آلفا-اولفین توزیع بارهای مکانیکی را بهبود داده و فیلم‌های بسیار نازک با مقاومت کششی عالی ایجاد می‌کند.',
      techniques: [
        'اکستروژن فیلم دمشی و کست (Cast Film)',
        'قالب‌گیری دورانی مخازن آب',
        'تزریق قطعات انعطاف‌پذیر'
      ]
    },
    thermal: {
      tg: '-115 °C',
      tgValue: -115,
      tm: '120 - 126 °C',
      tmValue: 122,
      enthalpyExp: '130 - 160 J/g',
      enthalpy100Cryst: '293 J/g',
      degradationTemp: '350 - 420 °C',
      degradationValue: 380,
      hdt: '50 - 65 °C',
      vicat: '95 - 105 °C',
      conductivity: '0.35 - 0.42 W/m·K',
      cte: '140 - 180 µm/°C'
    },
    mechanical: {
      tensileStrength: '15 - 30 MPa',
      youngModulus: '0.25 - 0.55 GPa',
      elongationAtBreak: '400 - 800 %',
      flexuralModulus: '0.3 - 0.6 GPa',
      hardnessShoreD: '48 - 56',
      izodImpact: 'عالی (تست پاندول دارت بالا)',
      description: 'LLDPE نسبت به LDPE دارای مقاومت کششی و ازدیاد طول بالاتر و مقاومت به پارگی بی‌نظیر است.'
    },
    physical: {
      density: '0.915 - 0.928 g/cm³',
      minDensity: 0.915,
      maxDensity: 0.928,
      waterAbsorption: '< 0.01 %',
      refractiveIndex: '1.52',
      oxygenPermeability: '350 - 500',
      co2Permeability: '1200 - 1800',
      appearance: 'نیمه‌شفاف'
    },
    chemicalResistance: [
      { category: 'اسیدها و بازها', rating: 'بسیار عالی', colorClass: 'text-emerald-400' },
      { category: 'الکل‌ها', rating: 'عالی', colorClass: 'text-emerald-400' },
      { category: 'ESCR مقاومت تنش محیطی', rating: 'فوق‌العاده عالی', colorClass: 'text-emerald-400' },
      { category: 'هیدروکربن‌های آروماتیک', rating: 'ضعیف', colorClass: 'text-rose-400' }
    ],
    electrical: {
      dielectricConstant: '2.28',
      dielectricStrength: '25 - 35 kV/mm',
      volumeResistivity: '10¹⁶ Ω·cm',
      dissipationFactor: '0.0002'
    },
    academic: {
      monomerName: 'اتیلن + آلفا اولفین (1-Butene, 1-Hexene, 1-Octene)',
      monomerFormula: 'C2H4 + C4H8 / C6H12',
      monomerMolarMass: 28.05,
      repeatingUnit: '[CH2 - CH2]n - [CH2 - CH(R)]m',
      crystallinityRange: '45 - 60 %',
      minCrystallinity: 45,
      maxCrystallinity: 60,
      unitCell: '7.4, 4.9, 2.55 Å (Orthorhombic)',
      lamellaThickness: '12 - 22 nm',
      spheruliteSize: '5 - 30 µm',
      mechanism: 'پلیمریزاسیون کاتالیزوری متالوسن یا زیگلر-ناتا فاز گازی / دوغابی',
      reactorTypes: ['راکتور فاز گازی بستر سیال (Fluidized Bed Gas Phase)'],
      kineticNotes: 'عدم وجود شاخه بلند باعث کاهش ویسکوزیته و نازک‌شدگی برشی کمتر مذاب می‌شود.',
      mw: '80,000 - 200,000 g/mol',
      mn: '25,000 - 60,000 g/mol',
      mnDefaultValue: 40000,
      pdi: '2.5 - 4.5',
      dpRange: '2,500 - 7,000',
      entanglementMw: '~ 1,200 g/mol',
      radiusOfGyration: '18 - 32 nm',
      zeroShearViscosity: '10³ - 10⁵ Pa·s',
      powerLawIndex: '0.4 - 0.6',
      rheologyNotes: 'مذاب LLDPE به علت نبود LCB استحکام مذاب کمتری در دمش نسبت به LDPE دارد.',
      solubilityParameter: '16.2 - 17.2 MPa¹/²',
      hansenD: '16.3',
      hansenP: '~ 0',
      hansenH: '~ 0',
      floryHugginsChi: '0.1 - 0.3',
      ffv: '0.15 - 0.18',
      persistenceLength: '0.7 nm',
      thermoNotes: 'توزیع یکنواخت شاخه‌های کوتاه بلورینگی را کنترل می‌کند.'
    },
    chainType: 'branched_long_short',
    quiz: [
      {
        q: 'تفاوت کلیدی ساختاری LLDPE با LDPE چیست؟',
        opts: [
          'LLDPE دارای شاخه‌های کوتاه یکنواخت و فاقد شاخه بلند است',
          'LLDPE کاملاً آمورف است',
          'LDPE چگالی بالاتری دارد',
          'LLDPE پلیمریزاسیون رادیکال آزاد فشار بالا دارد'
        ],
        correct: 0,
        fb: 'آفرین! LLDPE شاخه‌های کوتاه حاصل از آلفا-اولفین‌ها دارد و فاقد شاخه بلند است.'
      }
    ],
    atoms3d: [
      { element: 'C', x: 0.0, y: 0.0, z: 0.0 },
      { element: 'C', x: 1.52, y: 0.0, z: 0.0 },
      { element: 'C', x: 2.28, y: 1.25, z: 0.0 },
      { element: 'C', x: 1.52, y: -1.25, z: 0.0 },
      { element: 'C', x: 2.28, y: -2.0, z: 0.0 }
    ]
  }
];

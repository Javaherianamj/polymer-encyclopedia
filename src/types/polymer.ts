export interface MarketShareItem {
  label: string;
  percentage: number;
}

export interface ProcessingInfo {
  processTemp: string; // e.g. "180 - 230 °C"
  mfi: string;         // e.g. "0.2 - 20 g/10min"
  bur: string;         // e.g. "2:1 تا 4:1"
  specialNoteTitle?: string;
  specialNoteContent?: string;
  techniques: string[];
}

export interface ThermalProperties {
  tg: string;                   // Glass Transition Temp
  tgValue: number;              // Numeric for slider (-110)
  tm: string;                   // Melting Temp
  tmValue: number;              // Numeric for slider (110)
  enthalpyExp: string;          // Experimental Enthalpy
  enthalpy100Cryst: string;     // 100% Cryst Enthalpy
  degradationTemp: string;      // Degradation Temp
  degradationValue: number;     // Numeric for slider (350)
  hdt: string;                  // Heat Deflection Temp
  vicat: string;                // Vicat Softening
  conductivity: string;         // Thermal Conductivity
  cte: string;                  // Coefficient of Thermal Expansion
}

export interface MechanicalProperties {
  tensileStrength: string;
  youngModulus: string;
  elongationAtBreak: string;
  flexuralModulus: string;
  hardnessShoreD: string;
  izodImpact?: string;
  description?: string;
}

export interface PhysicalProperties {
  density: string;              // e.g. "0.910 - 0.925 g/cm³"
  minDensity: number;
  maxDensity: number;
  waterAbsorption: string;
  refractiveIndex: string;
  oxygenPermeability: string;
  co2Permeability: string;
  appearance: string;
}

export interface ChemicalResistanceItem {
  category: string;
  rating: string;
  colorClass: string; // e.g. 'text-emerald-400'
}

export interface ElectricalProperties {
  dielectricConstant: string;
  dielectricStrength: string;
  volumeResistivity: string;
  dissipationFactor: string;
}

export interface MolecularAcademicInfo {
  monomerName: string;
  monomerFormula: string;
  monomerMolarMass: number; // M_0 in g/mol
  repeatingUnit: string;
  crystallinityRange: string;
  minCrystallinity: number;
  maxCrystallinity: number;
  unitCell: string; // e.g. "7.4, 4.93, 2.55 Å"
  lamellaThickness: string;
  spheruliteSize: string;
  mechanism: string;
  reactorTypes: string[];
  kineticNotes: string;
  mw: string; // M_w
  mn: string; // M_n
  mnDefaultValue: number;
  pdi: string;
  dpRange: string;
  entanglementMw: string;
  radiusOfGyration: string;
  zeroShearViscosity: string;
  powerLawIndex: string;
  rheologyNotes: string;
  solubilityParameter: string;
  hansenD: string;
  hansenP: string;
  hansenH: string;
  floryHugginsChi: string;
  ffv: string; // Fractional Free Volume
  persistenceLength: string;
  thermoNotes: string;
}

export interface QuizQuestion {
  q: string;
  opts: string[];
  correct: number;
  fb: string;
}

export interface Atom3D {
  element: 'C' | 'H' | 'O' | 'N' | 'Cl' | 'F';
  x: number;
  y: number;
  z: number;
}

export interface PolymerData {
  id: string; // e.g. 'ldpe', 'hdpe', 'pp', 'pvc', 'pet', 'ps'
  nameFa: string;
  nameEn: string;
  code: string; // e.g. 'LDPE'
  cas: string;
  resinCode: number; // 1, 2, 3, 4, 5, 6, 7
  family: string;
  discoveryYear: string;
  tradeNames: string[];
  iranianManufacturers: string[];
  multinationalManufacturers: string[];
  overviewText: string;
  marketShare: MarketShareItem[];
  applications: string[];
  processing: ProcessingInfo;
  thermal: ThermalProperties;
  mechanical: MechanicalProperties;
  physical: PhysicalProperties;
  chemicalResistance: ChemicalResistanceItem[];
  electrical: ElectricalProperties;
  academic: MolecularAcademicInfo;
  quiz: QuizQuestion[];
  chainType: 'branched_long_short' | 'linear_pure' | 'isotactic' | 'atactic' | 'polar_cl' | 'aromatic' | 'ester';
  atoms3d: Atom3D[];
}

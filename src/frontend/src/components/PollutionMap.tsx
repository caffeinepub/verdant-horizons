import { useState } from 'react';
import { MapPin, AlertTriangle } from 'lucide-react';

interface PollutionMapProps {
  onRegionSelect: (region: string) => void;
}

// Comprehensive country data with pollution levels for all major countries
const countryData: Record<string, { 
  level: 'very-high' | 'high' | 'medium' | 'low' | 'very-low';
  name: string;
  mwiScore: number;
}> = {
  // Very High pollution countries
  CHN: { level: 'very-high', name: 'China', mwiScore: 95 },
  IND: { level: 'very-high', name: 'India', mwiScore: 94 },
  BRA: { level: 'very-high', name: 'Brazil', mwiScore: 92 },
  IDN: { level: 'very-high', name: 'Indonesia', mwiScore: 91 },
  NGA: { level: 'very-high', name: 'Nigeria', mwiScore: 93 },
  RUS: { level: 'very-high', name: 'Russia', mwiScore: 88 },
  IRN: { level: 'very-high', name: 'Iran', mwiScore: 87 },
  EGY: { level: 'very-high', name: 'Egypt', mwiScore: 89 },
  KEN: { level: 'very-high', name: 'Kenya', mwiScore: 90 },
  ETH: { level: 'very-high', name: 'Ethiopia', mwiScore: 91 },
  DRC: { level: 'very-high', name: 'DR Congo', mwiScore: 92 },
  PHL: { level: 'very-high', name: 'Philippines', mwiScore: 90 },
  COL: { level: 'very-high', name: 'Colombia', mwiScore: 86 },
  PAK: { level: 'very-high', name: 'Pakistan', mwiScore: 93 },
  BGD: { level: 'very-high', name: 'Bangladesh', mwiScore: 94 },
  MMR: { level: 'very-high', name: 'Myanmar', mwiScore: 89 },
  
  // High pollution countries
  MEX: { level: 'high', name: 'Mexico', mwiScore: 78 },
  GTM: { level: 'high', name: 'Guatemala', mwiScore: 75 },
  PER: { level: 'high', name: 'Peru', mwiScore: 76 },
  ZAF: { level: 'high', name: 'South Africa', mwiScore: 79 },
  TUR: { level: 'high', name: 'Turkey', mwiScore: 77 },
  SAU: { level: 'high', name: 'Saudi Arabia', mwiScore: 74 },
  MAR: { level: 'high', name: 'Morocco', mwiScore: 73 },
  DZA: { level: 'high', name: 'Algeria', mwiScore: 75 },
  THA: { level: 'high', name: 'Thailand', mwiScore: 80 },
  VNM: { level: 'high', name: 'Vietnam', mwiScore: 79 },
  UKR: { level: 'high', name: 'Ukraine', mwiScore: 72 },
  VEN: { level: 'high', name: 'Venezuela', mwiScore: 77 },
  IRQ: { level: 'high', name: 'Iraq', mwiScore: 78 },
  AFG: { level: 'high', name: 'Afghanistan', mwiScore: 76 },
  YEM: { level: 'high', name: 'Yemen', mwiScore: 80 },
  SYR: { level: 'high', name: 'Syria', mwiScore: 74 },
  TZA: { level: 'high', name: 'Tanzania', mwiScore: 79 },
  UGA: { level: 'high', name: 'Uganda', mwiScore: 77 },
  GHA: { level: 'high', name: 'Ghana', mwiScore: 75 },
  CMR: { level: 'high', name: 'Cameroon', mwiScore: 76 },
  CIV: { level: 'high', name: 'Ivory Coast', mwiScore: 78 },
  MDG: { level: 'high', name: 'Madagascar', mwiScore: 80 },
  NPL: { level: 'high', name: 'Nepal', mwiScore: 81 },
  LKA: { level: 'high', name: 'Sri Lanka', mwiScore: 79 },
  KHM: { level: 'high', name: 'Cambodia', mwiScore: 77 },
  LAO: { level: 'high', name: 'Laos', mwiScore: 75 },
  
  // Medium pollution countries
  CUB: { level: 'medium', name: 'Cuba', mwiScore: 58 },
  ARG: { level: 'medium', name: 'Argentina', mwiScore: 62 },
  ESP: { level: 'medium', name: 'Spain', mwiScore: 55 },
  ITA: { level: 'medium', name: 'Italy', mwiScore: 57 },
  POL: { level: 'medium', name: 'Poland', mwiScore: 60 },
  ROU: { level: 'medium', name: 'Romania', mwiScore: 59 },
  GRC: { level: 'medium', name: 'Greece', mwiScore: 56 },
  PRT: { level: 'medium', name: 'Portugal', mwiScore: 54 },
  HUN: { level: 'medium', name: 'Hungary', mwiScore: 58 },
  CZE: { level: 'medium', name: 'Czech Republic', mwiScore: 55 },
  BGR: { level: 'medium', name: 'Bulgaria', mwiScore: 61 },
  SRB: { level: 'medium', name: 'Serbia', mwiScore: 60 },
  HRV: { level: 'medium', name: 'Croatia', mwiScore: 53 },
  BIH: { level: 'medium', name: 'Bosnia', mwiScore: 59 },
  ALB: { level: 'medium', name: 'Albania', mwiScore: 62 },
  MKD: { level: 'medium', name: 'North Macedonia', mwiScore: 58 },
  SVK: { level: 'medium', name: 'Slovakia', mwiScore: 56 },
  SVN: { level: 'medium', name: 'Slovenia', mwiScore: 52 },
  LTU: { level: 'medium', name: 'Lithuania', mwiScore: 54 },
  LVA: { level: 'medium', name: 'Latvia', mwiScore: 55 },
  EST: { level: 'medium', name: 'Estonia', mwiScore: 53 },
  BLR: { level: 'medium', name: 'Belarus', mwiScore: 61 },
  MDA: { level: 'medium', name: 'Moldova', mwiScore: 60 },
  KAZ: { level: 'medium', name: 'Kazakhstan', mwiScore: 63 },
  UZB: { level: 'medium', name: 'Uzbekistan', mwiScore: 64 },
  TKM: { level: 'medium', name: 'Turkmenistan', mwiScore: 62 },
  KGZ: { level: 'medium', name: 'Kyrgyzstan', mwiScore: 61 },
  TJK: { level: 'medium', name: 'Tajikistan', mwiScore: 63 },
  MNG: { level: 'medium', name: 'Mongolia', mwiScore: 59 },
  PRK: { level: 'medium', name: 'North Korea', mwiScore: 65 },
  ECU: { level: 'medium', name: 'Ecuador', mwiScore: 64 },
  BOL: { level: 'medium', name: 'Bolivia', mwiScore: 66 },
  PRY: { level: 'medium', name: 'Paraguay', mwiScore: 63 },
  URY: { level: 'medium', name: 'Uruguay', mwiScore: 54 },
  NIC: { level: 'medium', name: 'Nicaragua', mwiScore: 67 },
  HND: { level: 'medium', name: 'Honduras', mwiScore: 68 },
  SLV: { level: 'medium', name: 'El Salvador', mwiScore: 66 },
  CRI: { level: 'medium', name: 'Costa Rica', mwiScore: 52 },
  PAN: { level: 'medium', name: 'Panama', mwiScore: 58 },
  DOM: { level: 'medium', name: 'Dominican Republic', mwiScore: 65 },
  HTI: { level: 'medium', name: 'Haiti', mwiScore: 70 },
  JAM: { level: 'medium', name: 'Jamaica', mwiScore: 64 },
  TTO: { level: 'medium', name: 'Trinidad and Tobago', mwiScore: 61 },
  GUY: { level: 'medium', name: 'Guyana', mwiScore: 62 },
  SUR: { level: 'medium', name: 'Suriname', mwiScore: 60 },
  BLZ: { level: 'medium', name: 'Belize', mwiScore: 63 },
  SEN: { level: 'medium', name: 'Senegal', mwiScore: 69 },
  MLI: { level: 'medium', name: 'Mali', mwiScore: 71 },
  BFA: { level: 'medium', name: 'Burkina Faso', mwiScore: 72 },
  NER: { level: 'medium', name: 'Niger', mwiScore: 73 },
  TCD: { level: 'medium', name: 'Chad', mwiScore: 74 },
  SOM: { level: 'medium', name: 'Somalia', mwiScore: 75 },
  SDN: { level: 'medium', name: 'Sudan', mwiScore: 76 },
  SSD: { level: 'medium', name: 'South Sudan', mwiScore: 77 },
  ERI: { level: 'medium', name: 'Eritrea', mwiScore: 72 },
  DJI: { level: 'medium', name: 'Djibouti', mwiScore: 70 },
  MWI: { level: 'medium', name: 'Malawi', mwiScore: 71 },
  ZMB: { level: 'medium', name: 'Zambia', mwiScore: 69 },
  ZWE: { level: 'medium', name: 'Zimbabwe', mwiScore: 70 },
  MOZ: { level: 'medium', name: 'Mozambique', mwiScore: 73 },
  AGO: { level: 'medium', name: 'Angola', mwiScore: 74 },
  NAM: { level: 'medium', name: 'Namibia', mwiScore: 62 },
  BWA: { level: 'medium', name: 'Botswana', mwiScore: 60 },
  LSO: { level: 'medium', name: 'Lesotho', mwiScore: 65 },
  SWZ: { level: 'medium', name: 'Eswatini', mwiScore: 64 },
  RWA: { level: 'medium', name: 'Rwanda', mwiScore: 68 },
  BDI: { level: 'medium', name: 'Burundi', mwiScore: 70 },
  GAB: { level: 'medium', name: 'Gabon', mwiScore: 66 },
  GNQ: { level: 'medium', name: 'Equatorial Guinea', mwiScore: 67 },
  COG: { level: 'medium', name: 'Congo', mwiScore: 69 },
  CAF: { level: 'medium', name: 'Central African Republic', mwiScore: 72 },
  BEN: { level: 'medium', name: 'Benin', mwiScore: 68 },
  TGO: { level: 'medium', name: 'Togo', mwiScore: 69 },
  LBR: { level: 'medium', name: 'Liberia', mwiScore: 71 },
  SLE: { level: 'medium', name: 'Sierra Leone', mwiScore: 72 },
  GIN: { level: 'medium', name: 'Guinea', mwiScore: 73 },
  GMB: { level: 'medium', name: 'Gambia', mwiScore: 68 },
  GNB: { level: 'medium', name: 'Guinea-Bissau', mwiScore: 70 },
  MRT: { level: 'medium', name: 'Mauritania', mwiScore: 69 },
  LBY: { level: 'medium', name: 'Libya', mwiScore: 65 },
  TUN: { level: 'medium', name: 'Tunisia', mwiScore: 61 },
  JOR: { level: 'medium', name: 'Jordan', mwiScore: 64 },
  LBN: { level: 'medium', name: 'Lebanon', mwiScore: 66 },
  ISR: { level: 'medium', name: 'Israel', mwiScore: 48 },
  PSE: { level: 'medium', name: 'Palestine', mwiScore: 67 },
  KWT: { level: 'medium', name: 'Kuwait', mwiScore: 62 },
  QAT: { level: 'medium', name: 'Qatar', mwiScore: 58 },
  BHR: { level: 'medium', name: 'Bahrain', mwiScore: 59 },
  ARE: { level: 'medium', name: 'UAE', mwiScore: 55 },
  OMN: { level: 'medium', name: 'Oman', mwiScore: 60 },
  AZE: { level: 'medium', name: 'Azerbaijan', mwiScore: 63 },
  ARM: { level: 'medium', name: 'Armenia', mwiScore: 61 },
  GEO: { level: 'medium', name: 'Georgia', mwiScore: 60 },
  MYS: { level: 'medium', name: 'Malaysia', mwiScore: 64 },
  SGP: { level: 'medium', name: 'Singapore', mwiScore: 35 },
  BRN: { level: 'medium', name: 'Brunei', mwiScore: 52 },
  TLS: { level: 'medium', name: 'Timor-Leste', mwiScore: 68 },
  PNG: { level: 'medium', name: 'Papua New Guinea', mwiScore: 70 },
  
  // Low pollution countries
  USA: { level: 'low', name: 'United States', mwiScore: 42 },
  GBR: { level: 'low', name: 'United Kingdom', mwiScore: 38 },
  FRA: { level: 'low', name: 'France', mwiScore: 40 },
  DEU: { level: 'low', name: 'Germany', mwiScore: 35 },
  CHL: { level: 'low', name: 'Chile', mwiScore: 45 },
  JPN: { level: 'low', name: 'Japan', mwiScore: 37 },
  KOR: { level: 'low', name: 'South Korea', mwiScore: 39 },
  NLD: { level: 'low', name: 'Netherlands', mwiScore: 32 },
  BEL: { level: 'low', name: 'Belgium', mwiScore: 34 },
  AUT: { level: 'low', name: 'Austria', mwiScore: 31 },
  CHE: { level: 'low', name: 'Switzerland', mwiScore: 28 },
  IRL: { level: 'low', name: 'Ireland', mwiScore: 33 },
  DNK: { level: 'low', name: 'Denmark', mwiScore: 30 },
  FIN: { level: 'low', name: 'Finland', mwiScore: 29 },
  
  // Very Low pollution countries
  CAN: { level: 'very-low', name: 'Canada', mwiScore: 22 },
  AUS: { level: 'very-low', name: 'Australia', mwiScore: 25 },
  NZL: { level: 'very-low', name: 'New Zealand', mwiScore: 18 },
  SWE: { level: 'very-low', name: 'Sweden', mwiScore: 24 },
  NOR: { level: 'very-low', name: 'Norway', mwiScore: 20 },
  ISL: { level: 'very-low', name: 'Iceland', mwiScore: 15 },
  LUX: { level: 'very-low', name: 'Luxembourg', mwiScore: 26 },
};

// Comprehensive SVG paths for all countries (simplified Mercator-like projection)
const countryPaths: Record<string, string> = {
  // North America
  USA: "M150,120 L180,115 L220,110 L250,115 L270,125 L280,140 L275,160 L260,170 L240,175 L220,180 L200,185 L180,180 L160,170 L145,155 L140,135 Z",
  CAN: "M140,60 L180,55 L220,50 L260,55 L290,65 L300,80 L295,95 L280,105 L260,108 L240,105 L220,100 L200,95 L180,90 L160,85 L145,75 Z",
  MEX: "M160,185 L180,183 L200,185 L215,190 L220,200 L215,210 L205,215 L190,213 L175,208 L165,200 Z",
  GTM: "M185,215 L195,213 L205,215 L208,220 L205,225 L195,227 L188,223 Z",
  CUB: "M220,195 L240,193 L250,195 L248,200 L238,202 L225,200 Z",
  HND: "M190,220 L200,218 L208,222 L206,228 L198,230 L192,226 Z",
  NIC: "M195,230 L205,228 L213,232 L211,238 L203,240 L197,236 Z",
  CRI: "M200,240 L208,238 L215,242 L213,247 L206,249 L201,245 Z",
  PAN: "M210,248 L220,246 L228,250 L226,255 L218,257 L212,253 Z",
  SLV: "M188,225 L195,223 L200,227 L198,232 L192,234 L189,230 Z",
  BLZ: "M183,218 L190,216 L195,220 L193,225 L187,227 L184,223 Z",
  DOM: "M255,200 L265,198 L273,202 L271,208 L263,210 L257,206 Z",
  HTI: "M248,202 L256,200 L262,204 L260,209 L253,211 L249,207 Z",
  JAM: "M235,205 L243,203 L248,207 L246,212 L239,214 L236,210 Z",
  TTO: "M275,235 L283,233 L288,237 L286,242 L279,244 L276,240 Z",
  
  // South America
  BRA: "M280,240 L310,235 L330,240 L340,255 L345,275 L340,295 L330,310 L315,320 L300,315 L285,305 L275,285 L270,265 Z",
  COL: "M240,230 L255,228 L265,232 L268,245 L263,255 L253,258 L243,252 L238,240 Z",
  VEN: "M260,235 L275,233 L285,237 L288,248 L283,258 L273,261 L263,255 Z",
  GUY: "M285,245 L295,243 L302,247 L300,255 L292,257 L286,252 Z",
  SUR: "M295,248 L303,246 L308,250 L306,257 L299,259 L296,254 Z",
  ECU: "M230,255 L240,253 L248,257 L246,265 L238,267 L232,262 Z",
  PER: "M245,260 L260,258 L270,265 L272,280 L268,295 L258,300 L248,295 L243,280 Z",
  BOL: "M265,285 L280,283 L290,290 L288,305 L280,312 L270,308 L267,295 Z",
  PRY: "M285,310 L295,308 L302,315 L300,325 L292,327 L286,320 Z",
  URY: "M295,330 L303,328 L308,335 L306,342 L299,344 L296,338 Z",
  ARG: "M270,320 L285,318 L295,325 L298,345 L295,370 L288,390 L278,400 L268,395 L263,375 L265,350 Z",
  CHL: "M255,320 L265,318 L268,340 L270,365 L268,390 L263,400 L258,395 L256,370 L254,345 Z",
  
  // Europe
  GBR: "M470,105 L478,103 L485,105 L487,112 L483,118 L475,120 L468,115 Z",
  IRL: "M460,108 L467,106 L472,110 L470,116 L464,118 L461,113 Z",
  FRA: "M485,125 L495,123 L505,125 L508,135 L505,145 L495,148 L485,145 L482,135 Z",
  ESP: "M470,145 L485,143 L500,145 L505,152 L500,160 L485,162 L472,158 Z",
  PRT: "M462,148 L470,146 L475,152 L473,160 L466,162 L463,156 Z",
  ITA: "M510,140 L518,138 L525,142 L528,155 L523,165 L515,168 L508,160 L507,148 Z",
  DEU: "M505,115 L515,113 L525,115 L528,125 L523,133 L513,135 L505,130 Z",
  POL: "M525,105 L540,103 L550,105 L553,115 L548,125 L538,127 L528,122 Z",
  UKR: "M555,115 L575,113 L590,115 L595,125 L590,135 L575,137 L560,132 Z",
  RUS: "M560,50 L620,45 L680,50 L720,60 L750,75 L760,90 L755,105 L740,115 L720,118 L700,115 L680,110 L660,105 L640,100 L620,95 L600,90 L580,85 L565,75 Z",
  TUR: "M540,145 L560,143 L575,145 L580,152 L575,160 L560,162 L545,158 Z",
  GRC: "M525,155 L535,153 L543,157 L541,165 L533,167 L527,162 Z",
  ROU: "M530,125 L543,123 L553,127 L551,135 L541,137 L532,132 Z",
  BGR: "M535,135 L545,133 L553,137 L551,143 L543,145 L537,140 Z",
  HUN: "M515,125 L525,123 L533,127 L531,133 L523,135 L517,130 Z",
  CZE: "M510,118 L518,116 L525,120 L523,126 L516,128 L512,123 Z",
  SVK: "M520,120 L528,118 L535,122 L533,128 L526,130 L522,125 Z",
  AUT: "M505,128 L513,126 L520,130 L518,136 L511,138 L507,133 Z",
  CHE: "M495,130 L502,128 L508,132 L506,138 L500,140 L497,135 Z",
  BEL: "M485,118 L492,116 L498,120 L496,126 L490,128 L487,123 Z",
  NLD: "M490,110 L497,108 L503,112 L501,118 L495,120 L492,115 Z",
  DNK: "M505,100 L512,98 L518,102 L516,108 L510,110 L507,105 Z",
  SWE: "M515,75 L525,73 L535,78 L533,90 L525,95 L517,90 Z",
  NOR: "M505,65 L515,60 L525,65 L523,80 L515,85 L507,80 Z",
  FIN: "M530,70 L543,68 L553,73 L551,88 L543,93 L532,88 Z",
  EST: "M540,95 L548,93 L555,97 L553,103 L546,105 L542,100 Z",
  LVA: "M535,100 L543,98 L550,102 L548,108 L541,110 L537,105 Z",
  LTU: "M530,105 L538,103 L545,107 L543,113 L536,115 L532,110 Z",
  BLR: "M545,110 L558,108 L568,112 L566,122 L556,124 L547,118 Z",
  MDA: "M540,130 L548,128 L555,132 L553,138 L546,140 L542,135 Z",
  SVN: "M512,135 L518,133 L524,137 L522,142 L516,144 L513,139 Z",
  HRV: "M515,138 L523,136 L530,140 L528,147 L521,149 L517,144 Z",
  BIH: "M520,142 L527,140 L533,144 L531,150 L525,152 L521,147 Z",
  SRB: "M525,145 L533,143 L540,147 L538,153 L531,155 L527,150 Z",
  MKD: "M530,153 L537,151 L543,155 L541,160 L535,162 L531,157 Z",
  ALB: "M525,158 L532,156 L538,160 L536,166 L530,168 L526,163 Z",
  ISL: "M430,70 L440,68 L448,72 L446,80 L438,82 L432,78 Z",
  
  // Africa
  MAR: "M465,165 L480,163 L490,165 L492,175 L488,183 L478,185 L468,180 Z",
  DZA: "M485,170 L510,168 L530,170 L535,185 L530,200 L515,205 L495,203 L485,195 Z",
  TUN: "M505,165 L515,163 L522,167 L520,175 L513,177 L507,172 Z",
  LBY: "M520,175 L540,173 L555,177 L553,195 L543,200 L528,198 L522,188 Z",
  EGY: "M540,175 L560,173 L575,175 L578,190 L573,205 L558,208 L545,200 Z",
  SDN: "M560,210 L580,208 L595,212 L593,235 L583,240 L568,238 L562,225 Z",
  SSD: "M570,240 L585,238 L595,242 L593,255 L583,260 L573,255 Z",
  ETH: "M585,245 L600,243 L610,247 L608,260 L598,265 L588,260 Z",
  ERI: "M595,235 L605,233 L612,237 L610,245 L603,247 L597,242 Z",
  DJI: "M608,248 L615,246 L620,250 L618,256 L612,258 L609,253 Z",
  SOM: "M610,255 L625,253 L635,260 L633,275 L623,280 L613,275 Z",
  KEN: "M595,260 L610,258 L620,262 L618,275 L608,280 L598,275 Z",
  UGA: "M585,258 L595,256 L602,260 L600,268 L592,270 L587,265 Z",
  TZA: "M595,275 L610,273 L620,277 L618,290 L608,295 L598,290 Z",
  RWA: "M588,268 L595,266 L600,270 L598,276 L592,278 L589,273 Z",
  BDI: "M590,276 L597,274 L602,278 L600,284 L594,286 L591,281 Z",
  NGA: "M505,215 L520,213 L535,215 L538,228 L533,238 L520,240 L508,235 Z",
  CMR: "M520,240 L533,238 L543,242 L541,255 L533,260 L523,255 Z",
  CAF: "M543,245 L560,243 L573,247 L571,260 L561,265 L548,262 Z",
  TCD: "M540,220 L558,218 L570,222 L568,240 L558,245 L545,242 Z",
  NER: "M515,210 L535,208 L548,212 L546,225 L536,230 L520,228 Z",
  MLI: "M480,195 L505,193 L520,197 L518,215 L508,220 L488,218 Z",
  MRT: "M465,185 L485,183 L498,187 L496,200 L486,205 L470,203 Z",
  SEN: "M455,200 L468,198 L478,202 L476,210 L468,212 L458,208 Z",
  GMB: "M460,203 L468,201 L473,205 L471,210 L465,212 L461,207 Z",
  GNB: "M458,208 L465,206 L470,210 L468,215 L462,217 L459,212 Z",
  GIN: "M465,210 L478,208 L488,212 L486,222 L478,224 L468,220 Z",
  SLE: "M468,220 L478,218 L485,222 L483,228 L476,230 L470,226 Z",
  LBR: "M475,228 L485,226 L492,230 L490,238 L483,240 L477,236 Z",
  CIV: "M485,218 L500,216 L510,220 L508,232 L500,234 L488,230 Z",
  GHA: "M500,225 L510,223 L518,227 L516,235 L508,237 L502,233 Z",
  TGO: "M508,230 L515,228 L520,232 L518,238 L512,240 L509,235 Z",
  BEN: "M512,225 L520,223 L527,227 L525,237 L518,239 L514,234 Z",
  BFA: "M495,208 L513,206 L525,210 L523,220 L513,225 L500,223 Z",
  GNQ: "M525,250 L533,248 L538,252 L536,258 L530,260 L526,255 Z",
  GAB: "M525,258 L538,256 L548,260 L546,272 L538,274 L528,270 Z",
  COG: "M538,262 L553,260 L563,264 L561,278 L553,280 L543,276 Z",
  DRC: "M548,270 L570,268 L585,272 L583,295 L573,300 L558,298 L548,290 Z",
  AGO: "M540,295 L560,293 L575,297 L573,315 L563,320 L548,318 L542,308 Z",
  ZMB: "M575,295 L595,293 L608,297 L606,312 L596,317 L580,315 Z",
  MWI: "M605,290 L615,288 L622,292 L620,305 L612,307 L607,302 Z",
  MOZ: "M608,305 L625,303 L638,310 L636,330 L626,335 L613,333 Z",
  ZWE: "M595,310 L610,308 L620,312 L618,323 L608,328 L598,323 Z",
  BWA: "M580,315 L598,313 L610,317 L608,332 L598,337 L585,335 Z",
  NAM: "M560,318 L580,316 L590,322 L588,342 L578,347 L565,345 Z",
  ZAF: "M585,335 L610,333 L628,337 L630,352 L620,365 L600,367 L585,360 Z",
  LSO: "M608,350 L615,348 L620,352 L618,358 L612,360 L609,355 Z",
  SWZ: "M618,345 L625,343 L630,347 L628,353 L622,355 L619,350 Z",
  
  // Middle East
  SAU: "M580,180 L605,178 L625,182 L630,195 L625,210 L605,213 L585,208 Z",
  YEM: "M605,215 L620,213 L630,217 L628,228 L620,230 L608,226 Z",
  OMN: "M630,195 L645,193 L655,197 L653,210 L643,212 L633,208 Z",
  ARE: "M640,200 L650,198 L658,202 L656,210 L648,212 L642,208 Z",
  QAT: "M635,195 L642,193 L647,197 L645,203 L639,205 L636,200 Z",
  BHR: "M630,192 L635,190 L639,194 L637,199 L632,201 L631,196 Z",
  KWT: "M615,175 L623,173 L630,177 L628,183 L621,185 L617,180 Z",
  IRQ: "M595,165 L615,163 L630,167 L628,182 L618,187 L603,185 Z",
  SYR: "M570,155 L585,153 L598,157 L596,168 L586,170 L573,166 Z",
  LBN: "M575,158 L582,156 L587,160 L585,166 L579,168 L576,163 Z",
  ISR: "M570,165 L577,163 L582,167 L580,173 L574,175 L571,170 Z",
  PSE: "M575,168 L580,166 L584,170 L582,175 L577,177 L576,172 Z",
  JOR: "M580,168 L590,166 L598,170 L596,180 L588,182 L582,178 Z",
  IRN: "M610,165 L635,163 L655,167 L660,180 L655,195 L635,198 L615,192 Z",
  AFG: "M650,155 L675,153 L690,157 L688,172 L678,177 L658,175 Z",
  PAK: "M675,165 L700,163 L715,170 L713,190 L703,195 L683,193 Z",
  
  // Central Asia
  KAZ: "M620,110 L660,108 L695,112 L700,125 L695,140 L670,142 L640,138 L625,128 Z",
  UZB: "M650,130 L670,128 L685,132 L683,145 L673,150 L658,148 Z",
  TKM: "M630,140 L650,138 L665,142 L663,155 L653,160 L638,158 Z",
  TJK: "M670,145 L685,143 L695,147 L693,158 L683,163 L673,158 Z",
  KGZ: "M680,135 L695,133 L705,137 L703,148 L693,153 L683,148 Z",
  
  // South Asia
  IND: "M660,200 L685,198 L705,205 L715,220 L710,240 L695,250 L675,248 L665,235 Z",
  NPL: "M700,195 L715,193 L725,197 L723,207 L713,209 L703,205 Z",
  BGD: "M715,210 L728,208 L738,212 L736,223 L726,225 L718,221 Z",
  BTN: "M720,200 L728,198 L733,202 L731,208 L725,210 L721,205 Z",
  LKA: "M695,255 L703,253 L708,257 L706,265 L699,267 L696,262 Z",
  MDV: "M680,265 L685,263 L689,267 L687,272 L682,274 L681,269 Z",
  
  // Southeast Asia
  MMR: "M730,215 L748,213 L760,220 L758,240 L748,245 L735,240 Z",
  THA: "M745,225 L758,223 L768,228 L766,243 L756,248 L748,243 Z",
  LAO: "M755,220 L765,218 L773,222 L771,233 L763,235 L757,230 Z",
  VNM: "M765,215 L778,213 L788,220 L786,240 L776,245 L768,240 Z",
  KHM: "M760,235 L770,233 L778,237 L776,248 L768,250 L762,245 Z",
  MYS: "M760,250 L780,248 L795,255 L793,268 L783,273 L768,271 Z",
  SGP: "M778,268 L783,266 L787,270 L785,275 L780,277 L779,272 Z",
  BRN: "M785,255 L792,253 L797,257 L795,263 L789,265 L786,260 Z",
  IDN: "M740,260 L770,258 L800,263 L810,275 L805,288 L785,293 L760,290 L745,280 Z",
  TLS: "M810,280 L820,278 L828,282 L826,290 L818,292 L812,288 Z",
  PHL: "M790,220 L805,218 L815,223 L818,238 L813,250 L803,252 L793,245 Z",
  PNG: "M840,285 L865,283 L885,290 L883,305 L873,310 L853,308 Z",
  
  // East Asia
  CHN: "M700,130 L740,125 L780,130 L810,145 L820,165 L815,185 L800,200 L780,205 L760,200 L740,190 L720,180 L705,165 Z",
  MNG: "M720,100 L760,95 L795,100 L800,115 L795,130 L770,135 L740,130 L725,120 Z",
  PRK: "M810,155 L825,153 L835,157 L833,168 L823,170 L813,166 Z",
  KOR: "M820,165 L833,163 L843,167 L841,180 L831,182 L823,178 Z",
  JPN: "M830,155 L845,153 L855,157 L858,170 L853,183 L843,185 L833,178 Z",
  TWN: "M795,210 L805,208 L812,212 L810,222 L802,224 L797,220 Z",
  
  // Oceania
  AUS: "M780,320 L820,318 L860,325 L880,340 L875,360 L855,370 L825,368 L795,360 L785,345 Z",
  NZL: "M900,370 L915,368 L925,373 L928,385 L923,395 L913,397 L903,390 Z",
  FJI: "M920,310 L930,308 L938,312 L936,320 L928,322 L922,318 Z",
  SLB: "M870,295 L883,293 L893,297 L891,307 L881,309 L873,305 Z",
  VUT: "M895,315 L903,313 L910,317 L908,325 L900,327 L897,322 Z",
  NCL: "M890,330 L900,328 L908,332 L906,340 L898,342 L892,338 Z",
  WSM: "M950,315 L958,313 L965,317 L963,325 L956,327 L952,322 Z",
  TON: "M945,325 L953,323 L960,327 L958,335 L951,337 L947,332 Z",
  KIR: "M935,285 L943,283 L950,287 L948,295 L941,297 L937,292 Z",
};

// Color scheme matching the original map
const levelColors = {
  'very-low': '#6DD5ED',
  'low': '#2B7FD5',
  'medium': '#8B5CF6',
  'high': '#A02040',
  'very-high': '#4A1128',
};

const levelLabels = {
  'very-low': 'Very Low',
  'low': 'Low',
  'medium': 'Medium',
  'high': 'High',
  'very-high': 'Very High',
};

export default function PollutionMap({ onRegionSelect }: PollutionMapProps) {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  const hasMarker = (level: string) => level === 'very-high' || level === 'high';

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-blue-100 dark:from-ocean-900 dark:to-ocean-950">
      {/* Title Banner Section */}
      <div className="relative bg-gradient-to-r from-ocean-100 via-ocean-50 to-ocean-100 dark:from-ocean-800 dark:via-ocean-700 dark:to-ocean-800 py-8 px-6 border-b-4 border-ocean-400">
        <div className="max-w-7xl mx-auto">
          {/* Decorative Images */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 opacity-80 hidden md:block">
            <img 
              src="/assets/generated/ocean-waves.dim_200x80.png" 
              alt="Ocean waves decoration" 
              className="w-32 h-auto md:w-40"
            />
          </div>
          
          <div className="absolute right-4 top-2 opacity-80 hidden md:block">
            <img 
              src="/assets/generated/sea-turtle.dim_100x100.png" 
              alt="Sea turtle decoration" 
              className="w-16 h-auto md:w-20"
            />
          </div>
          
          <div className="absolute right-20 bottom-2 opacity-80 hidden md:block">
            <img 
              src="/assets/generated/fish-school.dim_120x80.png" 
              alt="Fish school decoration" 
              className="w-20 h-auto md:w-24"
            />
          </div>

          {/* Title */}
          <div className="text-center relative z-10">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-ocean-900 dark:text-ocean-50 mb-4 tracking-tight">
              WORLD MAP OF COUNTRIES BY
            </h1>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-ocean-600 via-ocean-500 to-ocean-600 bg-clip-text text-transparent mb-6">
              PLASTIC POLLUTION
            </h2>
            
            {/* Description */}
            <div className="max-w-3xl mx-auto bg-white/90 dark:bg-ocean-900/90 rounded-lg p-4 shadow-lg">
              <p className="text-sm md:text-base text-ocean-800 dark:text-ocean-100 leading-relaxed">
                This interactive map visualizes the <strong>Mismanaged Waste Index (MWI)</strong> across countries worldwide. 
                Countries are displayed as geographic shapes with colors representing severity from{' '}
                <span className="font-semibold" style={{ color: levelColors['very-low'] }}>Very Low</span> (light turquoise) 
                to <span className="font-semibold" style={{ color: levelColors['very-high'] }}>Very High</span> (deep maroon). 
                Prominent markers highlight pollution hotspots. Hover over any country to see detailed data.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Legend */}
        <div className="bg-white dark:bg-ocean-900 rounded-lg p-6 mb-6 shadow-lg">
          <h3 className="text-lg font-bold text-ocean-900 dark:text-ocean-50 mb-4">
            Mismanaged Waste Index (MWI) Level
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {Object.entries(levelColors).map(([level, color]) => (
              <div key={level} className="flex items-center gap-2">
                <div 
                  className="w-6 h-6 rounded border-2 border-gray-800"
                  style={{ backgroundColor: color }}
                />
                <span className="text-sm font-medium text-ocean-800 dark:text-ocean-100">
                  {levelLabels[level as keyof typeof levelLabels]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Geographic World Map */}
        <div className="bg-white dark:bg-ocean-900 rounded-lg p-6 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-ocean-900 dark:text-ocean-50">
              Interactive World Map
            </h3>
            <span className="text-sm text-ocean-600 dark:text-ocean-300">
              {Object.keys(countryData).length} Countries
            </span>
          </div>

          {/* SVG Map Container */}
          <div className="relative w-full bg-gradient-to-br from-blue-100 to-blue-50 dark:from-ocean-950 dark:to-ocean-900 rounded-xl overflow-hidden border-4 border-ocean-300 dark:border-ocean-700">
            <svg 
              viewBox="0 0 1000 500" 
              className="w-full h-auto"
              style={{ minHeight: '400px' }}
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Ocean background with gradient */}
              <defs>
                <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#E0F2FE', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#BAE6FD', stopOpacity: 1 }} />
                </linearGradient>
                
                {/* Grid pattern for map background */}
                <pattern id="mapGrid" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#CBD5E1" strokeWidth="0.5" opacity="0.3"/>
                </pattern>
              </defs>
              
              {/* Ocean background */}
              <rect width="1000" height="500" fill="url(#oceanGradient)" />
              <rect width="1000" height="500" fill="url(#mapGrid)" />
              
              {/* Latitude/Longitude lines */}
              <g stroke="#94A3B8" strokeWidth="0.5" opacity="0.4">
                {/* Latitude lines */}
                <line x1="0" y1="100" x2="1000" y2="100" />
                <line x1="0" y1="200" x2="1000" y2="200" />
                <line x1="0" y1="300" x2="1000" y2="300" />
                <line x1="0" y1="400" x2="1000" y2="400" />
                
                {/* Longitude lines */}
                <line x1="200" y1="0" x2="200" y2="500" />
                <line x1="400" y1="0" x2="400" y2="500" />
                <line x1="600" y1="0" x2="600" y2="500" />
                <line x1="800" y1="0" x2="800" y2="500" />
              </g>

              {/* Ocean labels */}
              <text x="100" y="250" fill="#64748B" fontSize="18" fontStyle="italic" opacity="0.5">Pacific Ocean</text>
              <text x="300" y="150" fill="#64748B" fontSize="18" fontStyle="italic" opacity="0.5">Atlantic Ocean</text>
              <text x="700" y="280" fill="#64748B" fontSize="18" fontStyle="italic" opacity="0.5">Indian Ocean</text>

              {/* Country paths */}
              {Object.entries(countryPaths).map(([code, path]) => {
                const data = countryData[code];
                if (!data) return null;
                
                const isHovered = hoveredCountry === code;
                const showMarker = hasMarker(data.level);
                
                return (
                  <g key={code}>
                    {/* Country shape */}
                    <path
                      d={path}
                      fill={levelColors[data.level]}
                      stroke="#1E293B"
                      strokeWidth={isHovered ? "2" : "1"}
                      opacity={isHovered ? 1 : 0.9}
                      className="cursor-pointer transition-all duration-200"
                      onMouseEnter={() => setHoveredCountry(code)}
                      onMouseLeave={() => setHoveredCountry(null)}
                      onClick={() => onRegionSelect(data.name)}
                    >
                      <title>{`${data.name}: MWI ${data.mwiScore}`}</title>
                    </path>
                    
                    {/* Pollution marker for high-risk areas */}
                    {showMarker && (
                      <g transform={`translate(${path.split(' ')[0].substring(1)}, ${path.split(' ')[1]})`}>
                        <circle
                          cx="0"
                          cy="0"
                          r="4"
                          fill="#DC2626"
                          stroke="#FFF"
                          strokeWidth="1"
                          className="animate-pulse"
                        />
                        <circle
                          cx="0"
                          cy="0"
                          r="8"
                          fill="none"
                          stroke="#DC2626"
                          strokeWidth="1"
                          opacity="0.5"
                        />
                      </g>
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Hover tooltip */}
            {hoveredCountry && countryData[hoveredCountry] && (
              <div className="absolute top-4 left-4 bg-white dark:bg-ocean-900 rounded-lg shadow-xl p-4 border-2 border-ocean-400 dark:border-ocean-600 z-10">
                <div className="flex items-start gap-3">
                  <div 
                    className="w-8 h-8 rounded border-2 border-gray-800 flex-shrink-0"
                    style={{ backgroundColor: levelColors[countryData[hoveredCountry].level] }}
                  />
                  <div>
                    <h4 className="font-bold text-ocean-900 dark:text-ocean-50 text-lg">
                      {countryData[hoveredCountry].name}
                    </h4>
                    <p className="text-sm text-ocean-700 dark:text-ocean-200">
                      MWI Score: <span className="font-semibold">{countryData[hoveredCountry].mwiScore}</span>
                    </p>
                    <p className="text-xs text-ocean-600 dark:text-ocean-300 mt-1">
                      Level: {levelLabels[countryData[hoveredCountry].level]}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Map Statistics */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-lg p-4 border-2 border-red-200 dark:border-red-800">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
                <h4 className="font-bold text-red-900 dark:text-red-100">High Risk Zones</h4>
              </div>
              <p className="text-2xl font-bold text-red-700 dark:text-red-300">
                {Object.values(countryData).filter(d => d.level === 'very-high' || d.level === 'high').length}
              </p>
              <p className="text-xs text-red-600 dark:text-red-400 mt-1">Countries with severe pollution</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-4 border-2 border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-bold text-blue-900 dark:text-blue-100">Total Coverage</h4>
              </div>
              <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                {Object.keys(countryData).length}
              </p>
              <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">Countries monitored globally</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg p-4 border-2 border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-bold text-green-900 dark:text-green-100">Low Risk Zones</h4>
              </div>
              <p className="text-2xl font-bold text-green-700 dark:text-green-300">
                {Object.values(countryData).filter(d => d.level === 'very-low' || d.level === 'low').length}
              </p>
              <p className="text-xs text-green-600 dark:text-green-400 mt-1">Countries with minimal pollution</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

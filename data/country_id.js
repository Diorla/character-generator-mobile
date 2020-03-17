// TODO: Add countries like "Andorra" to the list of countries
const countryId = {
  Afghanistan: 1,
  Albania: 2,
  Algeria: 3,
  "American Samoa": 4,
  Andorra: 5,
  Angola: 6,
  Anguilla: 7,
  Antarctica: 8,
  "Antigua And Barbuda": 9,
  Argentina: 10,
  Armenia: 11,
  Aruba: 12,
  Australia: 13,
  Austria: 14,
  Azerbaijan: 15,
  Bahamas: 16,
  Bahrain: 17,
  Bangladesh: 18,
  Barbados: 19,
  Belarus: 20,
  Belgium: 21,
  Belize: 22,
  Benin: 23,
  Bermuda: 24,
  Bhutan: 25,
  Bolivia: 26,
  "Bosnia and Herzegovina": 27,
  Botswana: 28,
  "Bouvet Island": 29,
  Brazil: 30,
  "British Indian Ocean Territory": 31,
  Brunei: 32,
  Bulgaria: 33,
  "Burkina Faso": 34,
  Burundi: 35,
  Cambodia: 36,
  Cameroon: 37,
  Canada: 38,
  "Cape Verde": 39, 
  "Cayman Islands": 40,
  "Central African Republic": 41,
  Chad: 42,
  Chile: 43,
  China: 44,
  "Christmas Island": 45,
  "Cocos Islands": 46,
  Colombia: 47,
  Comoros: 48,
  "Republic Of The Congo": 49,
  "Democratic Republic Of The Congo": 50,
  "Cook Islands": 51,
  "Costa Rica": 52,
  "Ivory Coast": 53,
  Croatia: 54,
  Cuba: 55,
  Cyprus: 56,
  "Czech Republic": 57,
  Denmark: 58,
  Djibouti: 59,
  Dominica: 60,
  "Dominican Republic": 61,
  "East Timor": 62,
  Ecuador: 63,
  Egypt: 64,
  "El Salvador": 65,
  "Equatorial Guinea": 66,
  Eritrea: 67,
  Estonia: 68,
  Ethiopia: 69,
  "External Territories of Australia": 70,
  "Falkland Islands": 71,
  "Faroe Islands": 72,
  "Fiji": 73,
  Finland: 74,
  France: 75,
  "French Guiana": 76,
  "French Polynesia": 77,
  "French Southern Territories": 78,
  Gabon: 79,
  Gambia: 80,
  Georgia: 81,
  Germany: 82,
  Ghana: 83,
  Gibraltar: 84,
  Greece: 85,
  Greenland: 86,
  Grenada: 87,
  Guadeloupe: 88,
  Guam: 89,
  Guatemala: 90,
  "Guernsey": 91,
  Guinea: 92,
  "Guinea-Bissau": 93,
  Guyana: 94,
  Haiti: 95,
  "Heard and McDonald Islands": 96,
  Honduras: 97,
  Hungary: 99,
  Iceland: 100,
  India: 101,
  Indonesia: 102,
  Iran: 103,
  Iraq: 104,
  Ireland: 105,
  Israel: 106,
  Italy: 107,
  Jamaica: 108,
  Japan: 109,
  Jersey: 110,
  Jordan: 111,
  Kazakhstan: 112,
  Kenya: 113,
  Kiribati: 114,
  "North Korea": 115,
  "South Korea": 116,
  Kuwait: 117,
  Kyrgyzstan: 118,
  Laos: 119,
  Latvia: 120,
  Lebanon: 121,
  Lesotho: 122,
  Liberia: 123,
  Libya: 124,
  Liechtenstein: 125,
  Lithuania: 126,
  Luxembourg: 127,
  "Macau S.A.R.": 128,
  Macedonia: 129,//
  Madagascar: 130,
  Malawi: 131,
  Malaysia: 132,
  Maldives: 133,//
  Mali: 134,
  Malta: 135,//
  "Man (Isle of)": 136,//
  "Marshall Islands": 137,//
  Martinique: 138,//
  Mauritania: 139,
  Mauritius: 140,
  Mayotte: 141,//
  Mexico: 142,
  Micronesia: 143,//
  Moldova: 144,
  Monaco: 145,//
  Mongolia: 146,
  Montserrat: 147,//
  Morocco: 148,
  Mozambique: 149,
  Myanmar: 150,
  Namibia: 151,
  Nauru: 152,//
  Nepal: 153,
  "Netherlands Antilles": 154,//
  Netherlands: 155,
  "New Caledonia": 156,//
  Nicaragua: 158,
  Niger: 159,
  Nigeria: 160,
  Niue: 161,//
  "Norfolk Island": 162,//
  "Northern Mariana Islands": 163,//
  Norway: 164,
  Oman: 165,
  Pakistan: 166,
  Palau: 167,//
  Palestine: 168,
  Panama: 169,
  "Papua new Guinea": 170,
  Paraguay: 171,
  Peru: 172,
  Philippines: 173,
  "Pitcairn Island": 174,//
  Poland: 175,
  Portugal: 176,
  "Puerto Rico": 177,
  Qatar: 178,
  Reunion: 179,//
  Romania: 180,
  Russia: 181,
  Rwanda: 182,
  "Saint Helena": 183,//
  "Saint Kitts And Nevis": 184,//
  "Saint Lucia": 185,//
  "Saint Pierre and Miquelon": 186,//
  "Saint Vincent And The Grenadines": 187,//
  Samoa: 188,//
  "San Marino": 189,//
  "Sao Tome and Principe": 190,//
  "Saudi Arabia": 191,
  Senegal: 192,
  Serbia: 193,
  Seychelles: 194,//
  "Sierra Leone": 195,
  Singapore: 196,
  Slovakia: 197,
  Slovenia: 198,
  "Smaller Territories of the UK": 199,//
  "Solomon Islands": 200,//
  Somalia: 201,
  "South Africa": 202,
  "South Georgia": 203,
  "South Sudan": 204,
  Spain: 205,
  "Sri Lanka": 206,
  Sudan: 207,
  Suriname: 208,//
  "Svalbard And Jan Mayen Islands": 209,//
  Swaziland: 210,
  Sweden: 211,
  Switzerland: 212,
  Syria: 213,
  Taiwan: 214,
  Tajikistan: 215,
  Tanzania: 216,
  Thailand: 217,
  Togo: 218,
  Tokelau: 219,//
  Tonga: 220,//
  "Trinidad And Tobago": 221,
  Tunisia: 222,
  Turkey: 223,
  Turkmenistan: 224,
  "Turks And Caicos Islands": 225,//
  Tuvalu: 226,//
  Uganda: 227,
  Ukraine: 228,
  "United Arab Emirates": 229,
  "United Kingdom": 230,
  "United States": 231,
  "United States Minor Outlying Islands": 232,//
  Uruguay: 233,
  Uzbekistan: 234,
  Vanuatu: 235,//
  "Vatican City State": 236,//
  Venezuela: 237,
  Vietnam: 238,
  "Virgin Islands (British)": 239,//
  "Virgin Islands (US)": 240,//
  "Wallis And Futuna Islands": 241,//
  "Western Sahara": 242,//
  Yemen: 243,
  Yugoslavia: 244,//
  Zambia: 245,
  Zimbabwe: 246
};


export default countryId;
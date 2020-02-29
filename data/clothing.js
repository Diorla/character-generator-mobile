import oddCalculator from "./../modules/oddCalculator";
/**
 * Contains different style with description and demographic.
 * @property {Array} desc - description of the types of clothes
 * @property {Object} demo - the demographics e.g. age, gender, social class or education level
 * @readonly
 */
const outfit = {
  streetwear: {
    desc:
      "T-shirts, Hoodies, Baseball caps, Sneakers, Bomber jacket, Track pants or Jeans",
    demo: {
      age: [15, 30],
      gender: "Male",
      social: "",
      education: "",
      specific: [] //e.g. only nationality, sexual orientantion etc
    }
  },
  streetwearF: {
    desc:
      "T-shirts, Crop/halter tops, Baseball caps, Sneakers, Hoodies, Bomber jackets, Track pants, Tennis style skirts, Gym shorts, Leggings or Jeans",
    demo: {
      age: [15, 30],
      gender: "Female",
      social: "",
      education: "",
      specific: []
    }
  },
  ethnic: {
    desc:
      "Ethnic wears e.g. Afghan coats, Japanese Kimonos or West African Buba",
    demo: {
      age: [0, 100],
      gender: "Male",
      social: "",
      education: "",
      specific: []
    }
  },
  office: {
    desc:
      "Dark coloured suits, Dress pants, Collared shirts, Jackets, Black or brown loafers/oxford and Tie",
    demo: {
      age: [18, 100],
      gender: "Male",
      social: "",
      education: "",
      specific: []
    }
  },
  officeF: {
    desc:
      "Blouse or Shirt with Pullover sweater or jacket, Dress Skirt or Slacks, Close-toe pumps, Flats, Pantsuit with Stocking or Pantyhose",
    demo: {
      age: [18, 100],
      gender: "Female",
      social: "",
      education: "",
      specific: []
    }
  },
  // Business Casual
  // Evening black tie: I think this is specific
  sportsWear: {
    desc:
      "Outerwear, Polo shirt or T-shirts, Yoga pants, Tracksuits and Trainers",
    demo: {
      age: [15, 65],
      gender: "Male",
      social: "",
      education: "",
      specific: []
    }
  },
  sportsWearF: {
    desc:
      "Tank tops, Sports bras, T-shirt or Polo shirt, Outerwear, Yoga pants or leggings, tracksuits, outerwear and trainers",
    demo: {
      age: [15, 65],
      gender: "Female",
      social: "",
      education: "",
      specific: []
    }
  },
  girl: {
    desc:
      "Skirts, Dresses, Blouses with Cute details like bows, laces or ruffles with sandals, slippers or comfortable shoes.",
    demo: {
      age: [0, 100],
      gender: "Female",
      social: "",
      education: "",
      specific: []
    }
  },
  rockerChic: {
    desc:
      "Skinny leather pants/jeans, Boots, Spiky heals, Vintage t-shirts with patches, Bomber or motocycle jackers. Most are in dark colours.",
    demo: {
      age: [0, 30],
      gender: "Female",
      social: "",
      education: "",
      specific: []
    }
  },
  skateboard: {
    desc:
      "Oversized graphic t-shirt with open over shirt, sneakers, skater shoes, skater pants/shorts and hoodies",
    demo: {
      age: [0, 30],
      gender: "",
      social: "",
      education: "",
      specific: []
    }
  },
  goth: {
    desc:
      "Gothic fashion ie. Dark clothings(velvet, laces, fishnets and leather) tinged with purple, Dark make-up, Dark eyeliner and Dark nails",
    demo: {
      age: [15, 30],
      gender: "",
      social: "",
      education: "",
      specific: []
    }
  },
  // Maternity
  lolita: {
    desc:
      "Frily petticoats, dresses with puffy sleeves, cute headwears, printed socks, light jackets, cute collars, cuffs and gloves.",
    demo: {
      age: [15, 30],
      gender: "Female",
      social: "",
      education: "",
      specific: ["Japan"]
    }
  },
  hiphop: {
    desc:
      "Bomber or leather jacket, Chain, baseball jersey, jeans, sneakers, sunglasses and hoodies",
    demo: {
      age: [15, 30],
      gender: "Male",
      social: "",
      education: "",
      specific: []
    }
  },
  hiphopF: {
    desc:
      "Bomber or leather jacket, Chain, bikini tops, crop/halter tops, tube tops, tank tops, jeans, baggy trousers, sneakers, sunglasses and hoodies",
    demo: {
      age: [15, 30],
      gender: "Female",
      social: "",
      education: "",
      specific: []
    }
  },
  Chave: {
    desc:
      "Football t-shirt, anoraks and loafers. May wear flashy(gold) jewellery(bling).",
    demo: {
      age: [0, 18],
      gender: "",
      social: "",
      education: "",
      specific: []
    }
  },
  Kawaii: {
    desc:
      "Short skirts and t-shirt or dress with cute cartoon emblazoned on them.",
    demo: {
      age: [0, 18],
      gender: "Female",
      social: "",
      education: "",
      specific: []
    }
  },
  Preppy: {
    desc:
      "Chino or Khaki trousers. Polo shirts or button-down oxfords. Henley shirts paired with sports jackets or crew neck sweaters",
    demo: {
      age: [0, 100],
      gender: "Male",
      social: "",
      education: "Junior secondary/Middle school",
      specific: []
    }
  },
  PreppyF: {
    desc:
      "Chino or Khaki trousers with polo shirts or button-down oxfords. Henley shirts paired with sports jackets, crew neck sweaters and plaid short skirts",
    demo: {
      age: [0, 100],
      gender: "Female",
      social: "",
      education: "Junior secondary/Middle school",
      specific: []
    }
  },
  Cowboy: {
    desc: "Button down shirt, cow boy boots, wide brimmed hats and jeans",
    demo: {
      age: [0, 100],
      gender: "Male",
      social: "",
      education: "Diploma/Associate degrees",
      specific: []
    }
  },
  CowboyF: {
    desc:
      "Button down shirt, cow boy boots, wide brimmed hats and denim skirts",
    demo: {
      age: [0, 100],
      gender: "Female",
      social: "",
      education: "Diploma/Associate degrees",
      specific: []
    }
  },
  girlNextDoor: {
    desc:
      "Graphic tees, simple sundress, comfortable skirts, shorts or trousers and flat footwear",
    demo: {
      age: [0, 100],
      gender: "",
      social: "",
      education: "",
      specific: []
    }
  },
  casualChic: {
    desc:
      "Blouse or embellished scoo neck t-shirt with tailored slacks, pair of jeans, leather jackets and ballet flats.",
    demo: {
      age: [0, 100],
      gender: "Female",
      social: "",
      education: "",
      specific: []
    }
  },
  geekyChic: {
    desc:
      "Loose fitting like slouchy pants, t-shirt or simple dress and loafers",
    demo: {
      age: [0, 34],
      gender: "Female",
      social: "",
      education: "",
      specific: []
    }
  },
  military: {
    desc: "Everything in khaki or chinos and sometimes jeans.",
    demo: {
      age: [0, 34],
      gender: "",
      social: "",
      education: "",
      specific: []
    }
  },
  flapper: {
    desc:
      "Loose dropped waistline calf length dress with plunging necklines and flat chest.",
    demo: {
      age: [0, 30],
      gender: "Female",
      social: "",
      education: "",
      specific: []
    }
  },
  tomboy: {
    desc: "Nondescript t-shirts with shorts or jeans and sneakers",
    demo: {
      age: [0, 34],
      gender: "Female",
      social: "",
      education: "",
      specific: []
    }
  },
  garconne: {
    desc:
      "Loose-fit blouse and jeans, leather or tailored jackets with shiny loafers or pumps.",
    demo: {
      age: [0, 100],
      gender: "Female",
      social: "",
      education: "",
      specific: []
    }
  },
  artsy: {
    desc:
      "Bright and bold coloured clothes with exaggerated print and unusual outline with handcrafted accessories, handmade fabrics and sandals, slippers or flats.",
    demo: {
      age: [12, 100],
      gender: "Female",
      social: "",
      education: "",
      specific: []
    }
  },
  grunge: {
    desc:
      "Leather or metallic jackets, flannel shirts, cool slogan t-shirt or crop/halter tops with ripped denim or mom jeans, combat boots, fishnet stockings, beanies and slouchy sweaters.",
    demo: {
      age: [0, 34],
      gender: "Female",
      social: "",
      education: "",
      specific: []
    }
  },
  punk: {
    desc:
      "Black coloured clothings. T-shirts with provocative wordings, leather jackets, studded black boots, tight black pants.",
    demo: {
      age: [0, 24],
      gender: "Male",
      social: "",
      education: "",
      specific: []
    }
  },
  punkF: {
    desc:
      "Black coloured clothings. T-shirts with provocative wordings, fishnet stockings, leather jackets, studded black boots, tight black pants, skater skirt.",
    demo: {
      age: [0, 24],
      gender: "Female",
      social: "",
      education: "",
      specific: []
    }
  },
  boho: {
    desc:
      "Embroidered jackets/coat, wide-brim hats, long/midi sundresses, usually with loose silhouttes, beaded blouses and faux fur vest over skinny jeans or short floaty skirts.",
    demo: {
      age: [0, 54],
      gender: "Female",
      social: "",
      education: "",
      specific: []
    }
  },
  biker: {
    desc:
      "Leather jackets, motocycle vest, skin tight pants or leather pants, exposed zippers and boots.",
    demo: {
      age: [0, 34],
      gender: "",
      social: "",
      education: "",
      specific: []
    }
  },
  prairie: {
    desc:
      "Button down or plaid top with long flowy skirts or flared skirts. Denim overalls or high-waisted jeans with strappy sandals, stillettos or heeled boots. A bandana as a top, neckpiece or headpiece.",
    demo: {
      age: [0, 34],
      gender: "Female",
      social: "",
      education: "",
      specific: []
    }
  }
};

const notAge = (age, arr) => {
  if (age > arr[0] && age < arr[1]) return false;
  return true;
};

const educationLevel = [
  "Preschool", //1
  "Primary/Elementary school", //1
  "Junior secondary/Middle school", //2
  "Senior secondary/High school", //2
  "Diploma/Associate degrees", //3
  "Degree", //3
  "Masters", //4
  "Doctorate" //4
];

const socialStatus = [
  "Underclass", //8==> 8
  "Working poor", //6==> 6
  "Working class", //40==> 8
  "Lower middle class", // 26==> 13
  "Upper middle class", //13==> 40
  "Upper class" //8==> 26
];

const getEducationLevel = (education, outfitEducation) => {
  if (
    educationLevel.indexOf(education) < educationLevel.indexOf(outfitEducation)
  )
    return false;
  return true;
};

const getsocialStatus = (social, outfitSocial) => {
  if (socialStatus.indexOf(social) < socialStatus.indexOf(outfitSocial))
    return false;
  return true;
};

const getOdds = (age, gender, education, social, specific = []) => {
  const outfitType = [];
  const outfitOdds = [];
  let tempOdds = 1;
  Object.keys(outfit).map(key => {
    tempOdds = 1;
    const obj = outfit[key];
    if (getEducationLevel(education, obj["demo"]["education"])) tempOdds += 5;
    if (getsocialStatus(social, obj["demo"]["social"])) tempOdds += 5;
    for (let i of specific) {
      if (obj["demo"]["specific"].includes(i)) tempOdds += 5;
    }
    // Not age or gender appropriate
    if (notAge(age, obj["demo"]["age"])) return 0;
    else {
      if (obj["demo"]["gender"]) {
        if (gender != obj["demo"]["gender"]) {
          if (gender) return 0;
        }
      }
    }
    outfitType.push(key);
    outfitOdds.push(tempOdds);
  });

  return {
    outfitType,
    outfitOdds
  };
};

const getClothing = (age, gender, education, social, specific) => {
  const { outfitOdds, outfitType } = getOdds(
    age,
    gender,
    education,
    social,
    specific
  );
  return outfit[oddCalculator(outfitType, outfitOdds)]["desc"];
};

export default getClothing;

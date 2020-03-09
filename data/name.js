// These names are sourced from players of the most popular sports in the country.
// Each names(Male, Female and Surname) must have max of 5 lines, in of 2 lines
// Nations are ordered according to their population
// Note, middles names is considered as first name.
// I'll skip some countries now because I believe they share similar names with an 
// already predetermined country e.g. UK, Canada, Australia=> USA, Belgium=> France, Middle east
// I may skip similar names e.g Mohammed, Filipe, Christian, Stephen etc.
// So I'm going to write the names using comma e.g. Surname, First Middle. This will prevent defining
// any special order because different countries using different order.
const names = {
  China: { // Sinophone
    Male: [
      "Dianzuo", "Chunyu", "Dehai", "Dabao", "Zhipeng", "Fang", "Shenchao", "Ang", "Tian", "Fan", 
      "Xizhe", "Huikang", "Jingdao", "Xiang", "Muzepper", "Yunding", "Jin", "Hang", "Shangyuan",
      "Shibao", "Xuesheng", "Long", "Ziming"
    ],
    Female: [
      "Yu", "Shanshan", "Yuping", "Mengwen", "Haiyan", "Qingwei", "Shuang", "Jun", "Jiali", "Ying",
      "Li", "Shimeng", "Duan", "Ying", "Jie", "Man", "Yasha", "Xiaolin", "Fengyue", "Rui", "Wei",
      "Guiping", "Xin"
    ],
    Surname: [
      "Liu", "Dong", "Zou", "Yu", "Jiang", "Mei", "Wang", "Li", "Ming", "Yang", "Zhang", "Cai", "Jin", 
      "Ji", "Mirahmetjan", "Cao", "Feng", "Wei", "Tan", "Zhu", "Zhai", "Ma", "Tang", "Peng", "Song",
      "Fang", "Gu", "Bi", "Pang", "Zhang", "Yao", "Luo"
    ]
  },
  India: {
    Male: [
      "Virat", "Ajinkya", "Rohit", "Mayank", "Shikhar", "Shubman", "Shreyas", "Manish", "Cheteshwar", 
      "Ambati", "Hanuma", "Ravichandran", "Ravindra", "Kedar", "Hardik", "Krunal", "Vijay", "Shivam",
      "Washington", "Mahendra", "Singh", "Dinesh", "Rishabh", "Sanju", "Wriddhiman", "Khaleel", "Jasprit",
      "Deepak", "Siddarth", "Bhuvneshwar", "Shardul", "Navdeep", "Mohammed", "Ishant", "Umesh", "Yuzvendra",
      "Mayank", "Rahul", "Kuldeep", "Shahbaz"
    ],
    Female: [
      "Mithali", "Harmanpreet", "Thirush", "Veda", "Smriti", "Mona", "Poonam", "Vellaswamy", "Latika", 
      "Jemimah", "Priya", "Shafali", "Sushma", "Ravi", "Nuzhat", "Taniya", "Jhulan", "Shikha", "Deepti",
      "Dayalan", "Anuja", "Ekta", "Rajeshwari", "Mansi", "Sneh", "Arundhati", "Pooja", "Poonam", "Radha"
    ],
    Surname: [
      "Kohli", "Rahane", "Sharma", "Agarawal", "Dhawan", "Rahul", "Gill", "Iyer", "Pandey",  "Pujara",
      "Rayudu", "Vihari", "Ashwin", "Jadeja", "Jadhav", "Pandya", "Shankar", "Dube", "Sundar", "Dhoni", 
      "Karthik", "Pant", "Samson", "Saha", "Ahmed", "Bumrah", "Chahar", "Kaul", "Kumar", "Thakur", "Saini",
      "Shami", "Siraj", "Yadav", "Chahal", "Markande", "Nadeem", "Raj", "Kaur", "Kamini", "Krishnamurthy",
      "Mandhana", "Meshram", "Raut", "Vanitha", "Kumari", "Rodrigues", "Punia", "Verma", "Kalpana", "Parveen"
    ]
  },
  "United States": { // Anglophone
    Male: [
      "Sean", "Bill", "Matt", "Aaron", "Walker", "Reggie", "Julian", "Chase", "Justen", "Mark", "Sam", 
      "Sebastian", "Jackson", "Paxton", "Brenden", "Christian", "Bryang", "Brandon", "Gyasi",
      "Jordan", "Paul", "Jonathan", "Jesus", "Ulysses", "DeAndre", 
    ],
    Female: [
      "Alyssa", "Ashlyn", "Jane", "Adriana", "Becky", "Kelley", "Alexandra", "Crystal", "Abby", "Emily", 
      "Casey", "Tierna", "Margaret", "Julie", "Morgan", "Lindsey", "Sam", "Allie", "Rose", "Andi", "Carli",
      "Tobin", "Megan", "Christen", "Mallory", "Lynn", "Jessica", "Sophia"
    ],
    Surname: [
      "Johnson", "Hamid", "Marcinkowski", "Turner", "Long", "Zimmerman", "Cannon", "Araujo", "Gasper",
      "Glad", "McKenzie", "Vines", "Roldan", "Lletget", "Yueill", "Pomykal", "Aaronson", "Cappis", 
      "Kayo", "Servania", "Zardes", "Morris", "Arriola", "Lewis", "Ferreira", "Llanez", "Naeher", "Harris",
      "Campbell", "Franch", "Sauerbrunn", "O'Hara", "Krieger", "Dunn", "Dahlkemper", "Sonnett", "Short",
      "Davidson", "Purce", "Ertz", "Brian", "Horan", "Mewis", "Long", "Lavelle", "Sullivan", "Lloyd"
    ]
  },
  Indonesia: {
    Male: [
      "Muhammad", "Teja", "Andritany", "Putu", "Abduh", "Otavio", "Ricky", "Yanto", "Ardi", "Dedi", "Gavin",
      "Teuku", "Hendro", "Septian", "Dendi", "Febri", "Rizky", "Bayu", "Greg", "Osas", "Lerby", "Irfan",
    ],
    Female: [
      "Norvince", "Riska", "Vivi", "Oktavia", "Shalika", "Aurelia", "Sabrina", "Mutiara", "Firdaus", "Nur",
      "Shafira", "Ika", "Putri", "Laili", "Berlian", "Arsya", "Anggi", "Jesella", "Arifya", "Nisma", 
      "Francida", "Octavianti", "Dwi", "Ade", "Mustikiana", "Baiq", "Amiatun", "Rani", "Mayang", "Febriana",
      "Dewi", "Tia", "Zahra"
    ],
    Surname: [
      "Ridho", "Alam", "Ardhiyasa", "Gede", "Lestaluhu", "Dutra", "Fajrin", "Basna", "Idrus", "Gusmawan",
      "Kwan", "Ichsan", "Siswanto", "David", "Santoso", "Hariyadi", "Pora", "Pradana", "Nwokolo", "Saha",
      "Eliandry", "Bachdim", "Boma", "Juliani", "Riski", "Viandrisa", "Wibowo", "Kartini", "Khomariyah", 
      "Pertiwi", "Puspitasari", "Sari", "Rusdiana", "Nurmalita", "Oktafiani", "Shalihah", "Mulyasari",
      "Kusumaningrum", "Safitri", "Musdalifah"
    ]
  },
  Brazil: { //Portugal
    Male: [
      "Daniel", "Thiago", "Alex", "Eder", "Renan", "Filipe", "Lucas", "Douglas", "Roberto", "Gabriel",
      "Dani", "Rodrigo", "Matheus", "David", "Gabriel", "Bruno", "Vinicius", "Cleber", "Claudio", "Fabio",
      "Juninho", "Victor", 
    ],
    Female: [
      "Leticia", "Gabrielli", "Bruna", "Isabella", "Aline", "Gabi", "Bia", "Victoria", "Cristiane", "Camila",
      "Andressa", "Maria", "Emily", "Katia", "Daniela", "Andreia", "Luciana", "Carla", "Giovanna", "Erika",
      "Poliana", "Fabiana"
    ],
    Surname: [
      "Fuzato", "Silva", "Sandro", "Militao", "Lodi", "Coutinho", "Paqueta", "Luiz", "Firmino", "Jesus",
      "Luis", "Telles", "Henrique", "Anderson", "Neres", "Barbosa", "Junior", "Xavier", "Bacchi", "Taffarel",
      "Mahseredjian", "Paulista", "Perez", "Izidoro", "Croco", "Benites", "Fernandes", "Calderan", "Milene",
      "Zanotti", "Zaneratto", "Villares", "Santos", "Martins", "Alves", "Cilene", "Suntaque", 
    ]
  },
  Pakistan: { //Paki
    Male:[
      "Azhar", "Asad", "Babar", "Imam", "Fakhar", "Abid", "Shan", "Haris", "Khushdil", "Asif", "Umar",
      "Fawad", "Mohammad", "Hussain", "Iftikhar", "Shoaib", "Imad", "Faheem", "Shadab", "Bilal", "Kashif",
      "Sarfaraz", "Hasan", "Wahab", "Shaheen", "Usman", "Junaid", "Rumman", "Rahat", "Imran", "Musa", 
      "Naseem", "Yasir", 
    ],
    Female: [
      "Sana", "Bismah", "Nain", "Muneeba", "Sidra", "Anam", "Aiman", "Javeria", "Nahida", "Aliya",
      "Kainat", "Nashra", "Rabiya", "Maham", "Sadia", "Ayesha", "Diana", "Fatima", "Kiran", "Nazia", 
      "Deebah", "Khursheed", "Mahewish", "Sajjida"
    ],
    Surname: [
      "Ali", "Shafiq", "Azam", "Zaman", "Masood", "Sohail", "Shah", "Akmal", "Alam", "Hafeez", "Talat",
      "Ahmed", "Malik", "Wasim", "Ashraf", "Nawaz", "Khan", "Asif", "Bhatti", "Rizwan", "Riaz", "Afridi",
      "Abbas", "Amir", "Shinwari", "Khan", "Raees", "Hasnain", "Irfan", "Qadir", "Mir", "Maroof", "Baig",
      "Abidi", "Amin", "Anwer", "Ghulam", "Imtiaz", "Sandhu", "Yousuf", "Zafar", "Baluch", "Nazir", 
      "Sherazi", "Jabeen"
    ]
  },
  Nigeria: {
    Male: [
      "Ikechukwu", "Daniel", "Maduka", "Kenneth", "William", "Chidozie", "Ifeanyi", "Alex", "Wilfred", 
      "Shehu", "Jamilu", "Ramon", "Ahmed", "Aboubakar", "Shamsudeen", "Mubarak", "Mohammed", "Salim",
      "Ola", "Semi", "Mudashiru", "Rashidi", "Segun", "Obafemi", "Sunday", "Samson", "Juwon", "Adeola",
      "Akeem", "Raheem",
    ],
    Female: [
      "Tochukwu", "Chiamaka", "Chidinma", "Osinachi", "Ngozi", "Ugochi", "Regina", "Chinaza", "Ihuoma",
      "Mariam", "Rasheedat", "Asisat", "Suliat", "Halima", "Fridaous", "Zeenat", "Azeezat", "Amira",
      "Glory", "Folashade", "Gift", "Alaba", "Tosin", "Opeyemi", "Abidemi", "Adebisi", "Titilayo", "Adejoke",
      "Lola", "Omotayo", "Yetunde", "Teniayo", "Olufunke", 
    ],
    Surname: [
      "Ezenwa", "Akpeyi", "Okoye", "Omeruo", "Ekong", "Awaziem", "Collins", "Anaemena", "Iwobi", "Ndidi", 
      "Abdullahi", "Azeez", "Musa", "Lawal", "Bello", "Aboubakar", "Umar", "Hussein", "Waziri", "Amir",
      "Aina", "Idowu", "Balogun", "Olayinka", "Ighalo", "Rufai", "Yekini", "Odegbami", "Martins", "Amodu",
      "Adepoju", "Ajibade", "Adedotun", "Oke", 
    ]
  },
  Bangladesh: { //=> Pakistan
    Male: [],
    Female: [],
    Surname: []
  },
  Russia: {
    Male: [
      "Anton", "Soslan", "Yuri", "Fyodor", "Georgi", "Mario", "Andrei", "Sergei", "Maksim", "Vyacheslav", 
      "Dmitri", "Aleksandr", "Roman", "Aleksei", "Magomed", "Daler", "Ilzat", "Zelimkhan", "Daniil", "Rifat",
      "Artem", "Nikolay",
    ],
    Female: [
      "Tatyana", "Anastasiya", "Anna", "Ekaterina", "Alena", "Irina", "Valentina", "Maria", "Nadezhda", 
      "Elvira", "Nasiba", "Elena", "Marina", "Sofia", "Elvira", "Margarita", "Yulia", "Natalia", "Kseniia",
      "Raisa", "Anastasia"
    ],
    Surname: [
      "Shunin", "Dzhaneyez", "Zhikov", "Kudryashov", "Dzhikiya", "Fernandes", "Semyonov", "Petrov", "Belyayev",
      "Karaveyev", "Chistyakov", "Golovin", "Zobnin", "Ionov", "Miranchuk", "Yerokhin", "Ozdoyev", "Kuzyayev",
      "Ahkmetov", "Bakayev", "Fomin", "Zhemaletdinov", "Dzyuba", "Komlichenko", "Shcherbak", "Akimova", 
      "Kozhnikova", "Lazareva", "Tyryshkina", "Andreeva", "Podshibyakina", "Zhukova", "Galay", "Smirnova",
      "Sochneva", "Todua", "Belomyttseva", "Gasanova", "Danilova", "Fedorova", "Shishkina", "Ziyastinova",
    ]
  },
  Mexico: { // Hispanic
    Male: [
      "Guillermo", "Hugo", "Sebastian", "Hector", "Jesus", "Luis", "Cesar", "Jorge", "Cristian", "Johan",
      "Gilberto", "Edson", "Rodolfo", "Orbelin", "Erick", "Roberto", "Uriel", "Carlos", "Sebastien", "Raul",
      "Jose", "Juan", 
    ],
    Female: [
      "Cecilia", "Emily", "Itzel", "Kenti", "Bianca", "Jimena", "Jocelyn", "Janelly", "Mariana", "Stephany",
      "Karla", "Maria", "Rebeca", "Liliana", "Lizbeth", "Joana", "Diana", "Renae", "Kiana", "katty", 
      "Daniela", "Adriana"
    ],
    Surname: [
      "Ochoa", "Gonzalez", "Jurado", "Moreno", "Gallardo", "Rodriguez", "Montes", "Sanchez", "Calderon",
      "Romo", "Vasquez", "Sepulveda", "Alvarez", "Pizarro", "Pineda", "Gutierrez", "Alvarado", "Antuna", 
      "Aguirre", "Cordova", "Jimenez", "Macias", "Santiago", "Gonzalez", "Robles", "Sierra", "Lopez", 
      "Orejel", "Farias", "Cadena", "Mayor", "Nieto", "Sanchez", "Bernal", "Mercado", "Ovalle", "Robles",
      "Evangelista", "Cuellar", "Palacios", "Martinez", "Espinosa", "Iturbide"
    ]
  },
  Japan: {
    Male: [
      "Kosuke", "Keisuke", "Ryosuke", "Genta", "Sho", "Shinnosuke", "Daiki", "Taiyo", "Tsuyoshi", "Yosuke", 
      "Kento", "Ryota", "Yuki", "Keita", "Tsukasa", "Teruhito", "Ao", "Shunta", "Musashi", "Kyosuke", "Koki",
    ],
    Female: [
      "Moeko", "Manami", "Saki", "Maki", "Rui", "Nako", "Mika", "Evelyn", "Haruno", "Yuki", "Tomomi", "Akane",
      "Himawari", "Ayami", "Yukari", "Risa", "Yui", "Nana", "Moemi", "Minami", "Ayumi", "Yukiko",
      "Airi", "Ayako", "Ayaka", "Miki", "Akiko", "Iori"
      
    ],
    Surname: [
      "Nakamura", "Osako", "Kojima", "Miura", "Sasaki", "Hatanaka", "Suga", "Koga", "Watanabe", "Ideguchi",
      "Hashimoto", "Oshima", "Soma", "Endo", "Morishima", "Nakagawa", "Tanaka", "Suzuki", "Ueda", "Tagawa",
      "Ogawa", "Nagaoka", "Fujioka", "Mizushima", "Takada", "Machida", "Motohashi", "Fujitaka", "Mawuli", 
      "Nemoto", "Miyazawa", "Akaho", "Sato", "Isozaki", "Nakashima", "Shingu", "Sasanuma", "Yoshii", "Yano",
      "Nishi", "Terabe", "Kon", "Hiraga", "Kaneko", "Ishida", "Deguchi", "Rokkaku", "Atsugase", "Kawabata"
    ]
  },
  Ethiopia: {
    Male: [
      "Mintesinot", "Jamal", "Lealem", "Getu", "Desta", "Anteneh", "Ramadan", "Ahmed", "Aschalew", "Yared",
      "Mujib", "Haider", "Gatoch", "Amanuel", "Beneyam", "Shimelis", "Canaan", "Yonas", "Mesfin", "Oumed",
      "Addis", "Fuad"
    ],
    Female: [
      "Liya", "Dagmawet", "Israel", "Woinshet", "Tiruanchi", "Kelem", "Hiwot", "Bezuhan", "Adanech",
      "Eden", "Tutu", "Zulka", "Aynalem", "Berktawit", "Kidest", "Akberet", "Erehima", "Shetaye", "Helen",
      "Birtukan"
    ],
    Surname: [
      "Allo", "Tassew", "Birhanu", "Hailemaryam", "Tura", "Tesfaye", "Yusef", "Reshid", "Tamene", "Baye",
      "Kasim", "Sherefa", "Panom", "Yohannes", "Demte", "Bekele", "Markneh", "Berta", "Gebremichael", 
      "Tafesse", "Oukri", "Gidey", "Fereje", "Ossa", "Gebru", "Deste", "Sisay", "Mamuye", "Buwli", "Alemar",
      "Adere", "Negeri", "Melaku", "Badega", "Gebra", "Aboye", "Endale", "Hadera", "Biza", "Abaa", 
    ]
  },
  Phillippines: {
    Male: [
      "Patrick", "Neil", "Michael", "Daisuke", "Carli", "Martin", "Amani", "Luke", "Alvaro", "Justin",
      "Elias", "Marco", "Sean", "Patrick", "Stephan", "Iain", "Mike", "John", "Yrick", "Angel", "Mark",
      "Curt",
    ],
    Female: [
      "Inna", "Kimberly", "Claire", "Chelo", "Cathrine", "Hali", "Alesa", "Mea", "Tara", "Eloiza", "Camille",
      "Patrice", "Sara", "Hazel", "Charisa", "Eva", "Sarina", "Quinley", "Shelah", "Alisha", "Stacey",
      "Mari", "Analou", "Mary", "Hannah", "Calah", "Patricia"
    ],
    Surname: [
      "Deyto", "Etheridge", "Falkesgaard", "Sato", "Murga", "Steuble", "Aguinaldo", "Woodland", "Silva",
      "Baas", "Mordal", "Casambre", "Kane", "Schrock", "Ramsay", "Ott", "Straub", "Gallantes", "Reichelt",
      "Guirado", "Hartmann", "Porteria", "Dizon", "Palacios", "Parina", "Lim", "Hodges", "Graversen",
      "Long", "Dolino", "Bernal", "Shelton", "Fagsao", "Rodriguez", "Impelido", "Castaneda", "Lustan", 
      "Lemoran", "Madarang", "Bolden", "Quezada", "Cadag", "Campo", "Cavill", "Caparros", "Amita", "Lam"
    ]
  },
  Egypt: { //Middle east
    Male: [
      "Mohamed", "Baher", "Abdallah", "Ramy", "Ahmed", "Ayman", "Mahmoud", "Tarek", "Hussein", "Amr", 
      "Hossam", "Karim", "Marwan", "Amer", "Omar", "Ragab", "Ali", "Islam", "Walid", "Salah", "Mostafa",
      "Abdel Rahman"
    ],
    Female: [
      "Maha", "Samia", "Rana", "Sara", "Mervat", "Engy", "Nadin", "Omnia", "Amany", "Salma", "Fayza", 
      "Suzanne", "Aliaa", "Mahira", "Noha", "Elham", "Sherouk", "Mirna", "Esraa", "Rehad", "Farah", "Aisha"
    ],
    Surname: [
      "El Shenawy", "Awad", "Bassam", "El Mohamady", "Gomaa", "Hany", "Rabia", "Hegazi", "Fathy", "Ashraf",
      "Wahid", "Alaa", "Hamed", "El Shahat", "El Solia", "El Neny", "Salah", "Hassan", "Tarek", "Hamdy",
      "Mohamed", "Gaber", "Ayman", "Bakar", "Gabr", "Hafez", "Fathy", "El Said", "Farouk", "Issa", "Warda",
      "Soliman", "Mohsen", "Magdy", "Shehata", "Adam", "Rashwan", "Sayed", "Ghazy", "Rashad"
    ]
  },
  Vietnam: { //like 15 out of 20 is Nguyen! Also, Surname starts first, and according to
    // stats, 50% family names are. 
    Male: [
      "Tuan Manh", "Van Curong", "Van Lam", "Duy Manh", "Ngoc Hai", "Tien Dung", "Van Hau", "Van Dai",
      "Van Thanh", "Thanh Chung", "Hoang Duc", "Phong Hong", "Hong Duy", "Trong Hoang", "Tuan Anh", 
      "Duc Huy", "Hung Dung", 
    ],
    Female: [
      "Thi Kim", "Thi Thanh", "Thi Hong", "Thi Nhung", "Thi Kieu", "Thi Thuy", "Thi Lieu", "Thi Turoi", 
      "Thi Xuyen", "Thi Loan", "Thi Dung", "Tuyet Dung", "Thi My", "Diem My", "Thi Van", "Bao Chau", 
      "Thi Van", "Thi Nhung", "Thi Thuy", "Bich Thuy", "Thi Thao", "Phurong Thao", "Nhur", "Hai Yen", 
    ],
    Surname: [
      "Nguyen", "Pham", "Dang", "Do", "Que", "Bui", "Doan", "Le", "Vu", "Ha", "Tran", "Khong", "Churong",
      "Nguyen", "Nguyen", "Nguyen", "Nguyen", "Nguyen", "Hoang", "Durong", "Tran", "Huynh", "Thai", "Pham", 
      "Pham", "Le",
    ],
  },
  Germany: {
    Male: [
      "Manuel", "Marc-Andre", "Bernd", "Jonas", "Matthias", "Emre", "Nico", "Jonathan", "Lukas", "Robin",
      "Niklas", "Toni", "Joshua", "Ilkay", "Julian", "Sebastian", "Leon", "Nadiem", "Suat", "Timo", 
      "Serge", "Luca"
    ],
    Female: [
      "Merle", "Sophia", "Kathrin", "Leonie", "Marina", "Lena", "Lea", "Pauline", "Sandra", "Dzsenifer",
      "Alexandra", "Laura", "Sara", "Linda", "Felicitas", "Melanie", "Klara", "Lina", "Lisa", "Turid", 
      "Anna", "Lena"
    ],
    Surname: [
      "Neuer", "Stegen", "Leno", "Hector", "Ginter", "Can", "Schulz", "Tah", "Klostermann", "Koch", "Starke",
      "Kroos", "Kimmich", "Brandt", "Gundogan", "Rudy", "Goretzka", "Amiri", "Serdar", "Werner", "Gnabry",
      "Waldschmidt", "Frohms", "Kleinherne", "Hendrich", "Maier", "Hegering", "Oberdorf", "Schuller", 
      "Bremer", "Marozsan", "Popp", "Benkarth", "Dabritz", "Dallmann", "Rauch", "Leupolz", "Buhl", "Magull",
      "Schmitz", "Knaak", "Doorsoun", "Gasper", "Lattwein"
    ]
  },
  "Democratic Republic Of The Congo": {
    Male: [
      "Joel", "Timothy", "Jackson", "Marcel", "Ngonda", "Christian", "Wilfred", "Fabrice", "Jordan", 
      "Arthur", "Amale", "Chancel", "Neeskens", "Paul-Jose", "Chadrac", "Jody", "Samuel", "Giannelli",
      "Yannick", "Cedric", "Jonathan", "Dieumerci", "Nelson",
    ],
    Female: [
      "Fideline", "Sarrive", "Racheele", "Mamie", "Natacha", "Tina", "Naomie", "Marlene", "Danny", "Tantine",
      "Flavine", "Monica", "Nicole", "Patience", "Olga", "Linda", "Monique", "Isabelle", "Exaucee", 
      "Merveille", "Ruth", 
    ],
    Surname: [
      "Kiassumbua", "Fayulu", "Lunanga", "Tisserand", "Muzinga", "Luyindama", "Moke", "N'Sakala", "Ikoko",
      "Masuaku", "Mukoko", "Mbemba", "Kebano", "M'Poku", "Akolo", "Lukoki", "Moutoussamy", "Imbula", 
      "Bolasie", "Bakambu", "Bolingi", "Botaka", "Muleka", "Ndongala", "Balongo", "Makiese", "Ndjou", 
      "Kaluzodi", "Kipoyi", "Musafiri", "Kalamba", "Kasongo", "Fwadaga", "Kanyimda", "Musolo", "Ntumba",
      "Kanyanya", "Yav", "Siala", "Tshamala", "Bakonga", "Nghemi", "Moseka", "Lobo", "Mudimbi"
    ]
  },
  Iran: { //=> Egypt
    Male: [],
    Female: [],
    Surname: []
  },
  Turkey: {
    Male: [
      "Sinan", "Ugurcan", "Altay", "Hasan", "Ali", "Kaan", "Zeki", "Merih", "Umut", "Mert", "Nazim", "Ozan",
      "Hakan", "Okay", "Yusuf", "Omer", "Deniz", "Berkay", "Emre", "Enes", "Guven", "Ahmed", "Gokhan", 
      "Muhammed", "Caglar", "Mahmut", 
    ],
    Female: [
      "Selda", "Fatma", "Bedriye", "Berna", "Didem", "Medine", "Kezban", "Ipek", "Ebru", "Arzu", "Sevgi",
      "Birgul", "Selen", "Gizem", "Dilan", "Kader", "Melike", "Busra", "Basak", "Aycan", "Necla", "Hasret",
      "Ozlem", "Nazan", "Murvet"
    ],
    Surname: [
      "Bolat", "Cakir", "Bayindir", "Kaldirim", "Ayhan", "Celik", "Demiral", "Meras", "Muldur", "Sangare",
      "Cetin", "Kabak", "Tufan", "Calhanoglu", "Yokuslu", "Yazici", "Bayram", "Turuc", "Ozcan", "Kilinc",
      "Unal", "Yalcin", "Kutucu", "Akkan", "Sengezer", "Soyuncu", "Tekdemir", "Tasdemir", "Sahiner",
      "Gonul", "Belozoglu", "Yavuzturk", "Bulut", "Basyurt", "Altindere", "Akdogan", "Yanac", "Gundogdu",
      "Barut", "Pekel", "Hancar", "Aggul", "Gonultas", "Disli", "Topcu", "Altunkulak", "Sadikoglu",
    ]
  },
  Thailand: { //=> China
    Male: [],
    Female: [],
    Surname: []
  },
  "United Kingdom": { //=> USA
    Male: [],
    Female: [],
    Surname: []
  },
  France: {
    Male: [
      "Steve", "Alphonse", "Mike", "Raphael", "Lucas", "Benjamin", "Presnel", "Clement", "Kurt", "Leo",
      "Moussa", "N'Golo", "Corentin", "Tanguy", "Matteo", "Olivier", "Antoine", "Kylian", "Nabil", "Kingsley",
      "Thomas", "Wissam"
    ],
    Female: [
      "Sarah", "Solene", "Pauline", "Elisa", "Sakina", "Griedge", "Perle", "Eve", "Wendie", "Marion", 
      "Aissatou", "Charlotte", "Kenza", "Grace", "Amandine", "Amel", "Gaetane", "Viviane", "Delphine",
      "Kadidiatou", "Valerie", "Marie", "Antoinette", "Eugenie",
    ],
    Surname: [
      "Mandanda", "Areola", "Maignan", "Varane", "Digne", "Pavard", "Mendy", "Kimpembe", "Lenglet", "Zouma",
      "Dubois", "Sissoko", "Kante", "Tolisso", "Ndombele", "Guendouzi", "Giroud", "Griezmann", "Mbappe", 
      "Fekir", "Coman", "Lemar", "Ben Yedder", "Le Sommer", "Katoto", "Gauvin", "Diani", "Cascarino", "Henry",
      "Thiney", "Majri", "Bilbault", "Torrent", "Renard", "Perisset", "Bathy", "Karcahoui", "Almeida", 
      "Magnin", "Durand", "Bouhaddi", "Marroni", "Tounkara", "Dali", "Geyoro", "Majri", "Katoto"
    ]
  },
  Italy: {
    Male: [
      "Salvatore", "Gianluigi", "Pierluigi", "Alex", "Leonardo", "Alessandro", "Alessio", "Cristiano",
      "Emerson", "Francesco", "Armando", "Giovanni", "Andrea", "Nicolo", "Sandro", "GAetano", "Rolando",
      "Ciro", "Lorenzo", "Andrea", "Stephan", "Federico", "Riccardo",
    ],
    Female: [
      "Laura", "Chiara", "Rosalia", "Sara", "Elena", "Alia", "Elisa", "Lisa", "Linda", "Valentina", 
      "Aurora", "Martina", "Alice", "Barbara", "Annamaria", "Manuela", "Daniela", "Cristiana", "Stefania",
      "Ilaria", 
    ],
    Surname: [
      "Sirigu", "Donnarumma", "Gollini", "Meret", "Bonucci", "Florenzi", "Romagnoli", "Biraghi", "Palmieri",
      "Acerbi", "Izzo", "Di Lorenzo", "Cistana", "Barella", "Zaniolo", "Tonali", "Castrovilli", "Mandragora",
      "Immobile", "Insigne", "Belotti", "Bernardeschi", "Chiesa", "Orsolini", "Giacinti", "Mauro", "Tarenzi",
      "Girelli", "Sabatino", "Giugliano", "Cernoia", "Seturini", "Bonansea", "Parisi", "Rosucci", "Galli",
      "Bergamaschi", "Tucceri", "Boattin", "Fusetti", "Bartoli", "Guagni", "Linari", "Gama", "Pipitone",
    ]
  },
  Tanzania: {
    Male: [
      "Juma", "Metacha", "Beno", "Gadiel", "Haruna", "Erasto", "Kelvin", "Iddy", "Mohamed", "Hassan",
      "Himid", "Mao", "Salum", "Frank", "Faridi", "Eleuter", "Jonas", "Ally", "Hamis", "Abdillahie",
      "Mbwana", "Simon",
    ],
    Female: [
      "Judith", "Wambura", "Vanessa", "Zena", "Wema", "Kajala", "Elizabeth", "Lucrecia", "Yvonne", "Suzan",
      "Natasha", "Halima", "Rita", "Theddy", "Gertrude", "Jokate", "Stella", "Juliana", "Leah", "Linah", 
      "Flora"
      
    ],
    Surname: [
      "Msuva", "Dilunga", "Samatta", "Yussuf", "Ng'anzi", "Mkude", "Mpepo", "Mussa", "Domayo", "Issa",
      "Abubakar", "Mkami", "Nado", "Kessy", "Husseini", "Moby", "Yondan", "Nyoni", "Shamte", "Kamagi", 
      "Kakolanya", "Mnata", "Kaseja", "Mdee", "Sepetu", "Masanja", "Ikupa", "Mwanjelwa", "Shonza", 
    ]
  },
  "South Africa": {
    Male: [
      "Schalk", "Malcolm", "Bongi", "Thomas", "Steven", "Vincent", "Frans", "Tendai", "Trevor", "Lood",
      "Eben", "Franco", "Pieter-Steph", "Siya", "Francois", "Kwagga", "Duane", "Faf", "Herschel", "Cobus",
      "Elton", "Handre", "Lukhanyo", "Damian", "Jesse", "Cheslin", "Makazole", "S'busiso", "Warrick",
      "Willie", "Damain", 
    ],
    Female: [
      "Thantaswa", "Denita", "Portia", "Cebisa", "Nwabisa", "Faith", "Asithandile", "Celeste", "Aneurin",
      "Nolusindiso", "Nomathamsanqa", "Rachelle", "Yolanda", "Lamla", "Vuyolwethu", "Shona-Leah", "Mandisa",
      "Tayla", "Fundiswa", "Siphosethu", "Zenay", "Lorinda", "Bella", "Bella", "Benele", 
    ],
    Surname: [
      "Brits", "Marx", "Mbonambi", "du Toit", "Kitshoff", "Koch", "Malherbe", "Mtawarira", "Nyakane", 
      "de Jager", "Etzebeth", "Mostert", "Snyman", "Kolisi", "Louw", "Smith", "Vermeulen", "de Klerk",
      "Jantjies", "Reinach", "Pollard", "Am", "de Allende", "Kriel", "Steyn", "Kolbe", "Mapimpi", "Nkosi",
      "Gelant", "le Roux", "Willemse", "Macingwana", "Wentzel", "Jonga", "Kula", "Ngxatu", "Ntoyanto",
      "Adonis", "Booi", "Faleni", "Geldenhuys", "Momoti", "Vazi", "Weston", "Williams", "Kinsey", "Plaatjie",
    ]
  },
  Myanmar: {
    Male: [
      "Kyaw Zin", "Pyae Lyan", "Nyein", "Zaw Min", "David", "Nanda", "Zaw Ye", "Pyae Phyo", "Hlaing",
      "Maung", "Nyein Chan", "Yan", "Tin Win", "Thein", "Myo Ko", "Aung", "Than Htet", "Win Naing", 
      "Suan Lam", "Zin Min",
    ],
    Female: [
      "Mya Phoo", "May Zin", "Ei Yadanar", "Khin Than", "Wai Wai", "Khaing", "Aye Aye", "Chit", "Phyu Phyu",
      "Thinn Thinn", "Khin Mo", "Khin Marlar", "Khin Moe", "Nge Nge", "Myat Noe", "Nu", "Win Theingi", 
      "July", "San Thaw", "Yee Yee"
    ],
    Surname: [
      "Htet", "Phyo", "Aung", "Chan", "Tun", "Htan", "Lwin", "Zaw", "Bo Bo", "Lwin", "Aung", "Than Win", 
      "Paing", "Thu", "Soe", "Mang", "Oo", "Thaw", "Kyaw", "Tun", "Nu", "Khin", "Htwe", "Wai", "Tun", "Yu",
      "Win", "Chit", "Moe", "Thazin", "Aung", "Wai", "Nwe", "Ngone",
    ]
  },
  Korea: { // South and North Korea, sourced from South Korea though and so many Kim & Lee.
    Male: [
      "Kim", "Jo", "Gu", "Park", "Kwon", "Ju", "Hwang", "Moon", "Na", "Yun", "Son", "Lee", "Han"
    ],
    Female: [
      "Jeon", "Lee", "Eo", "Shim", "Hong", "Park", "Jung", "Yeo", "Kim", "Jang", "Kwon", "Choe", "Yoon",
      "Son", "Oh", "Kang", "Choo",
    ],
    Surname: [
      "Seung-gyu", "Hyeon-woo", "Sung-yun", "Young-gwon", "Jin-su", "Joo-ho", "Min-jae", "Kyung-won",
      "Moon-hwan", "Tae-hwan", "Ji-soo", "Bo-kyung", "Se-jong", "In-beom", "Seon-min", "Sang-ho", "Il-lok",
      "Jun-ho", "In-sung", "Yeong-jae", "Seung-dae", "Jeong-hyeop", "Hyo-ju", "Chae-rim", "Eun-ah", "Hye-ri",
      "Hwa-yeon", "Young-geul", "Yu-ri", "Sel-gi", "Eun-som", "Eun-ha", "Chang", "Sang-eun", "Se-ra",
      "Min-ji", "Seol-bin", "So-dam", "Young-ju", "Ye-eun", "Hye-ji", "Seo-yeon", "Hee-ji", "Eun-mi", 
    ]
  },
  Columbia: { // => Mexico
    Male: [],
    Female: [],
    Surname: []
  },
  Kenya: {
    Male: [
      "Ian", "Patrick", "Timothy", "Joseph", "Erick", "Haron", "Joash", "Samuel", "Hillary", "Johnstone",
      "Anthony", "Timbe", "Johanna", "Eric", "Victor", "Kenneth", "Cliff", "Lawrence", "Whyvonne", 
      "Boniface", "John", "Jesse", "Michael"
    ],
    Female: [ //No sportwomen, musicians and actress
      "Annete", "Judith", "Monica", "Vivian", "Dorcas", "Nelly", "Lydia", "Lucy", "Wincate", "Cynthia", 
      "Sheril", "Jentrix", "Elizabeth", "Ruth", "Mwanalima", "Janet", "Mercy", "Topista", "Lumasia"
    ],
    Surname: [
      "Olunga", "Were", "Makwatta", "Muchiri", "Isuza", "Juma", "Nyakeya", "Muguna", "Wayama", "Omondi",
      "Omolo", "Masika", "Akumu", "Omurwa", "Wandera", "Olwande", "Onyango", "Shakava", "Otieno", "Okumu",
      "Odhiambo", "Matasi", "Siliya", "Situma", "Airo", "Bundi", "Adam", "Ingosi", "Corazone", "Wambui",
      "Milimu", "Andiba", "Musungu", "Kaari", "Akoth", "Sawe", "Nixon", "Nasaka", "Odato", "Omondi", "Kundu"
    ]
  },
  Spain: { //=> Mexico
    Male: [],
    Female: [],
    Surname: []
  },
  Argentina: { //=> Mexico
    Male: [],
    Female: [],
    Surname: []
  },
  Ukraine: {
    Male: [
      "Andriy", "Yuriy", "Mykola", "Oleksandr", "Serhiy", "Eduard", "Vitaliy", "Ihor", "Artem", "Yevhen",
      "Ruslan", "Viktor", "Roman", "Denys", "Mykyta", "Bohdan", "Vasyl", "Marian", "Dmytro",
      "Oleksandr",
    ],
    Female: [ //So many repetitions like Iryna, Olha etc.
      "Iryna", "Kateryna", "Olha", "Anastasia", "Mariana", "Darya", "Vira", "Iya", "Ludmila", "Daryna",
      "Nadiia", "Yana", "Veronika", "Tetyana", "Olena", "Natalia", 
    ],
    Surname: [
      "Pyatov", "Lunin", "Pankiv", "Matviyenko", "Kryvtsov", "Karavayev", "Sobol", "Mykolenko", "Bolbat", 
      "Plastun", "Shabanov", "Yarmolenko", "Konoplyanka", "Sydorchuk", "Malinovskyi", "Kovalenko",
      "Bezus", "Tsyhankov", "Buyalskyi", "Shakhov", "Shepelyev", "Besyedin", "Yaremchuk", "Zvarych", 
      "Sanina", "Kochneva", "Basanska", "Filenko", "Ivanyshyn", "VAsylyuk", "Boychenko", "Dyatel",
      "Andrushchak", "Pekur", "Khavanska", "Kalinina", "Andrukhiv", "Romanenko", "Ovdiychuk", "Kozyrenko"
    ]
  },
  Uganda: {
    Male: [
      "Denis", "Robert", "Hassan", "Nicholas", "Joseph", "Murushid", "Isaac", "Timothy", "Bevis", 
      "Ronald", "Khalid", "Luwagga", "Milton", "Allan", "Taddeo", "Michael", "Lumala", "Kirizestom",
      "Moses", "Emmanuel", "Derrick", "Patrick",
    ],
    Female: [
      "Ruth", "Diasy", "Grace", "Marion", "Yudaya", "Vola", "Aisha", "Shadia", "Tracy", "Lilian", "Ritah",
      "Phionah", "Fausia", "Shamilah", "Fazila", "Sandra", "Juliet", "Zainah", "Resty", "Hasifa", "Juliet",
      "Vannessa", "Phoebe", "Margret", "Gladys", "Wilmer", "Susan", "Teddy", "Anitah", "Monica",
    ],
    Surname: [
      "Kaddu", "Nsibambi", "Okwi", "Opondo", "Kayiwa", "Ntambi", "Abdu", "Azira", "Lwanga", "Kyambadde",
      "Karisa", "Kizito", "Aucho", "Mukiibi", "Mugabi", "Awany", "Muleme", "Juuko", "Ochaya", "Wadada",
      "Wasswa", "Odongkara", "Oyango", "Nassuna", "Nanziri", "Namuleme", "Nalukenge", "Nabweteme", "Ikwaput",
      "Nalijja", "Najjemba", "Nabbumba", "Nabbosa", "Mutuuzo", "Akiror", "Nankya", "Namukisa", "Namuddu",
      "Nakayenze", "Amangat", "Aluka", "Nakaziro", "Aturo"
    ]
  },
  Algeria: { // => Egypt
    Male: [],
    Female: [],
    Surname: []
  },
  Sudan: { //=> Egypt?
    Male: [],
    Female: [],
    Surname: []
  },
  Iraq: { // => Egypt
    Male: [],
    Female: [],
    Surname: []
  },
  Poland: {
    Male: [
      "Wojciech", "Lukasz", "Radoslaw", "Kamil", "Artur", "Thiago", "Jan", "Tomasz", "Arkadiusz", 
      "Grzegorz", "Piotr", "Mateusz", "Jacek", "Przemyslaw", "Sebastian", "Damian", "Krystian", "Dominik",
      "Robert", "Krzysztof", "Dawid",
    ],
    Female: [
      "Katarzyna", "Anna", "Karolina", "Aleksandra", "Malgorzata", "Paulina", "Natalia", "Martyna", 
      "Malgorzata", "Olga", "Agata", "Ewelina", "Patrycja", "Weronika", "Dominika", "Gabriela", "Sylwia",
      "Klaudia", "Adriana", "Ewa", "Agnieszka", "Nikola"
    ],
    Surname: [
      "Kownacki", "Piatek", "Lewandowski", "Jozwiak", "Furman", "Bielik", "Kadzior", "Szymanski", 
      "Frankowski", "Goralski", "Klich", "Zielinski", "Krychowiak", "Grosicki", "Reca", "Kedziora", 
      "Bednarek", "Cionek", "Jedrzejczyk", "Piszczek", "Glik", "Majecki", "Skorupski", "Szczesny",
      "Karczewska", "Winczo", "Achcinska", "Lefeld", "Matysik", "Grzywinska", "Grabowska", "Zawistowska",
      "Balcerzak", "Kamczyk", "Tarczynska", "Redzia", "Zubchyk", "Grec", "Wiankowska", "Chudzik", "Dudek",
      "Mesjasz", "Sikora", "Klabis", "Szymanska", "Kiedrzynek"
    ]
  },
  Canada: { //=> USA
    Male: [],
    Female: [],
    Surname: []
  },
  Morocco: { //=> Egypt
    Male: [],
    Female: [],
    Surname: []
  },
  Afghanistan: { //=> Egypt?
    Male: [],
    Female: [],
    Surname: []
  },
  "Saudi Arabia": { //=> Egypt
    Male: [],
    Female: [],
    Surname: []
  },
  Peru: { //=> Mexico
    Male: [],
    Female: [],
    Surname: []
  },
  Venezuela: { //=> Mexico
    Male: [],
    Female: [],
    Surname: []
  },
  Uzbekistan: { //=> gender based surname
    Male: [
      "Evgeniy", "Hurmatjon", "Zinnur", "Aleksandr", "Vyacheslav", "Nail", "Samender", "Gennadiy", "Evgenly",
      "Denis", "Kirill", "Artur", "Timur", "Ruslan", "Hasan", "Ildar", "Eldorbek", "Sanjar", "Abdumavlon",
      "Islom", "Farrukh", 
    ],
    Female: [
      "Yuliya", "Anastasiya", "Gulnaz", "Elena", "Tatyana", "Khristina", "Natalya", "Elvira", "Irina", 
      "Dlyara", "Katerina", "Aliya",
    ],
    Surname: [
      "Abdukholiqov", "Shomurodov", "Sergeev", "Sabirkhodjaev", "Giyosov", "Turgunboev", "Khamdamov", 
      "Turaev", "Alibaev", "Iskanderov", "Masharipov", "Skukurov", "Ahmedov", "Kodirkulov", "Kholmukhamedov",
      "Alijonov", "Ashurmatov", "Zoteev", "Sayfiev", "Tukhtakhodjaev", "Abdujalilov", "Kuvvatov", "Suyunov",
      "Kashuba", "Sevastyanova", "Nauruzbaeva", "Khusnitdinova", "Komarova", "Avdeeva", "Koneva", "Salavatova",
      "Averyanova", "Ejova", "Samatova",
    ]
  },
  Malaysia: {
    Male: [
      "Farizal", "Shahrul", "Syahmi", "Adam", "La'Vere", "Aidil", "Nor", "Zafuan", "Azam", "Idlan",
      "Norshahrul", "Safawi", "Afiq", "Mohamadou", "Syamer", "Kutty", "Gan Seng", "Syazwan", "Azzizan",
      "Andik", "Baddrol", "Tan Jun", "Akhyar", "Syafiq", "Khairulazhan", "Haziq", "Danial", "Amier",
    ],
    Female: [
      "Dhiya", "Fatihah", "Roszaini", "Nurul", "Husna", "Mira", "Fazliana", "Nur", "Ahirah", "Yasrikallaura",
      "Jessica", "Sussane", "Noor", "Mianah", "Eslilah", "Usliza", "Malini", "Rozeinie", "Ji Fedalliah",
      "Nur Shazwina", "Nur Lyana", "Pedrolia", "Marlia", "Jaciah", "Norsuriani", "Norhanisa", "Haindee",
      "Puteri", "Sihaya", "Meizora",
    ],
    Surname: [
      "Nordin", "Norhisham", "Nadzli", "Khalid", "Ahmad", "Rashid", "Jin", "Bakhtiar", "Ishak", "Ling",
      "Abba", "Sumareh", "Fazail", "Talaha", "Azih", "Radzak", "Corbin-Ong", "Azlin", "Safari", "Saad", 
      "Mukal", "Ajad", "Mosroh", "Yahya", "Mazli", "Jumilis", "Basri", "Sikayun", "Soberi", "Shuib", "Jaimin",
      "Dusileh", "Usman", "Esar", "Balanting", "Mailu", "Tumas", "Zairi", "Aidi", "Nazri", "Mazlan", "Bakar",
      "Razali", "Ahmad"
    ]
  },
  Angola: {
    Male: [
      "Tony", "Nsesani", "Jota", "Bastos", "Isaac", "Wilson", "Nurio", "Diogenes", "Fredy", "Mateus",
      "Mano", "Fabio", "Landu", "Dani", "Eddie", "Jonathan", "Bruno", "Clinton", "Jonas", "To", "Zito",
      "Djalma", "Evandro", "Jeremie", "Nelson", "Igor"
    ],
    Female: [
      "Cristina", "Avelina", "Regina", "Nguendula", "Nadir", "Elisabeth", "Luisa", "Alexia", "Rosemira",
      "Felizarda", "Fineza", "Italee", "Isabella"
    ],
    Surname: [
      "Cabaca", "Simao", "Be", "Quissanga", "Costa", "Gaspar", "Fortuna", "Joao", "Kulembe", "Galiano", 
      "Calesso", "Eduardo", "Abreu", "Lucas", "Eusebio", "Jorge", "Daniel", "Dizeko", "Tomas", "Mateus",
      "Manuel", "Filipe", "Pequeno", "Peso", "Matiquite"
    ]
  },
  Mozambique: {
    Male: [
      "Jose", "Victor", "Julio", "Zainadine", "Edmilson", "Reinildo", "Sidique", "Manuel", "Geraldo",
      "Luis", "Clesio", "Reginaldo", "Dayo", "Stanley", "Geny", "Leonel", "Danilo", "David", "Chico", 
      "Doningues", "Nelson", "Gildo", "Isac"
    ],
    Female: [
      "Denise", "Delma", "Ingvild", "Anabela", "Leia", "Eleuteria", "Elizabeth", "Tamara", "Deolinda", 
      "Odelia", "Nilza"
    ],
    Surname: [
      "Guirrugo", "Guambe", "Franque", "Junior", "Dove", "Mandava", "Mussagi", "Kambala", "Matsimbe", 
      "Miquissone", "Bauque", "Faife", "Antonio", "Ratifo", "Catamo", "Ernesto", "Zita", "Mucauro",
      "Cossa", "Macamo", "Dongue", "Lhavanguane", "Pereira", "Mafanela", "Gimo", "Seda", "Chiziane"
    ]
  },
  Nepal: {
    Male: [
      "Gyanendra", "Dipendra", "Sharad", "Aarif", "Rohit", "Sundeep", "Ishan", "Dilip", "Binod", "Paras",
      "Sompal", "Pawan", "Kushal", "Avinash", "Basanta", "Sandeep", "Lalit", "Sushan", "Anil", "Kumar",
      "Anil Kumar", "Subash", "Sunil", "Sagar", "Kishore", 
    ],
    Female: [
      "Kiran", "Bikesh", "Bishal", "Ananta", "Devendra", "Suman", "Rajin", "Ajit", "Saroj", "Rohit", "Sujal",
      "Bikram", "Sunil", "Ravi", "Tej", "Subash", "Mikchhen", "Bharat", "Nawayug", "Abhishek", "Alan", 
      "Biraj", "Aditya", "Dinesh", "Suraj", "Ravi", "Anjan", "Tanka", "Hemant", "Santosh", "Ashish", "Bimal",
      "Suman", "Bimal", "Ranjan", 
    ],
    Surname: [
      "Bhari", "Rajbanshi", "Lamichhane", "Regmi", "Bohara", "Malla", "Sarraf", "Kami", "Khadka", "Bhandari",
      "Nath", "Pandey", "Jora", "Paudel", "Sheikh", "Vesawkar", "Airee", "Rijal", "Shrestha", "Tamang", "Paswan",
      "Bal", "Lama", "Chand", "Dahal", "Bhandari", "Dhimal", "Aryal", "Kuthu", "Chemjong",
    ]
  },
  Ghana: {
    Male: [
      "Richard", "Felix", "Razak", "Andy", "Kasim", "Nicholas", "Joseph", "Gideon", "Mohammed", "Andre", 
      "Thomas", "Alfred", "Samuel", "Iddrisu", "Patrick", "Christopher", "Torric", "Jordan", "Emmanuel",
      "Mohammed", "Mumuni",
    ],
    Female: [
      "Grace", "Elizabeth", "Mavis", "Portia", "Priscilla", "Ernestina", "Juliet", "Rita", "Justice",
      "Evelyn", "Anastasia", "Ellen", "Philicity", "Janet", "Gladys", "Azume", "Fafali", "Barikisu", 
      "Abigail", "Linda", "Blessing", "Vida", "Ophelia", "Joyce", "Cynthia", "Mukarama", "Leticia",
      "Princella", "Milot", "Ernestina",
    ],
    Surname: [
      "Shafiu", "Kudus", "Boateng", "Ayew", "Jebrin", "Antwi-Adjei", "Twumasi", "Baba", "Owusu", "Duncan",
      "Partey", "Ayew", "Kadiri", "Mensah", "Aidoo", "Attamah", "Opuku", "Nuhu", "Yiadom", "Abalora", 
      "Annan", "Ofori", "Dumehasi", "Adams", "Amfobea", "Egyir", "Asuako", "Coleman", "Akyaa", "Badu", 
      "Tweneboaa", "Okyere", "Acheampong", "Abambila", "Boakye", "Owusu", "Owusua", "Animah", 
    ]
  },
  Yemen: { //=> Egypt
    Male: [],
    Female: [],
    Surname: []
  },
  Madagascar: {
    Male: [
      "Ibrahim", "Melvin", "Jean", "Toavina", "Pascal", "Thomas", "Jerome", "Romain", "Mario", "Jeremy",
      "Gervais", "Anicet", "Dmitry", "Romario", "Arohasina", "Rayan", "Faneva", "Carolus", "Lalaina",
      "Paulin", "Njiva", 
    ],
    Female: [ // 21 most common names
      "Miora", "Karen", "Christelle", "Nomena", "Mimi", "Henintsoa", "Raissa", "Prisca", "Christina", "Erica",
      "Sandra", "Mirana", "Aliciah", "Milanto", "Fy", "Priscilla", "Tahiry", "Sylvie", "Eva", "Ayycha", 
      "Larissa", 
    ],
    Surname: [
      "Rakotoharimalala", "Voavy", "Nomenjanahary", "Andriamatsinoro", "Andriastsima", "Raveloson", 
      "Andrianarimanana", "Baggio", "Caloin", "Amada", "Abel", "Randrianarisoa", "Morel", "Bakary", 
      "Metanire", "Mombris", "Fontaine", "Razakanantenaina", "Rambeloson", "Randrianasolo", "Adrien", "Dabo",
      "Bezara",
    ]
  },
  Australia: { //=> USA
    Male: [],
    Female: [],
    Surname: []
  },
  "Ivory Coast": {
    Male: [
      "Sylvain", "Badra", "Ali", "Sayouba", "Serge", "Wilfried", "Ismael", "Simon", "Cheick", "Wonlo", 
      "Ghislain", "Willie", "Max", "Franck", "Victorien", "Seko", "Christian", "Habib", "Ibrahim", "Roger",
      "Nicolas", "Maxwel", "Wilfried", "Yohan",
    ],
    Female: [
      "Joelle", "Ines", "Esperance", "Rebecca", "Priscille", "Ines", "Nadege", "Binta", "Jessica", "Christine", "Ida", "Bernadette", "Lynda", "Raymonde", "Fernande", "Mariam", "Nina", "Fatou", "Aminata",
      "Cynthia",
    ],
    Surname: [
      "Boli", "Zaha", "Cornet", "Pepe", "Assale", "Traore", "Maiga", "Koffi", "Fofana", "Angban", "Kessie",
      "Gradel", "Britto", "Konan", "Coulibaly", "Comara", "Deli", "Kanon", "Aurier", "Mande", "Sangare",
      "Gbohouo", "Djohore", "Diabate", "Kpaho", "Diakite", "Tchetche", "Kacou", "Gauze", "Amani", "Guehai",
      "Lohoues", "Cisse", "Aby", "Essoh", "Tia", "Lagoali", "Elloh", "Agbo", "Kouassi",
    ]
  },
  Cameroon: {
    Male: [
      "Fabrice", "Kerrido", "Andre", "Ambroise", "Micheal", "Collins", "Allan", "Joyskim", "Jerome", 
      "Jean-Charles", "Arnaud", "Andre-Frank", "Pierre", "Frank-Yves", "Vincent", "Eric", "Christian",
      "Karl", "Moumi", "Ignatius", "Jean-Pierre", "Didier", "Lamkel",
    ],
    Female: [
      "Carole", "Ange", "Claudia", "Voulania", "Catherine", "Alvine", "Estelle", "Falonne", "Colette",
      "Raissa", "Grace", "Charlene", "BXrigitte", "Ajara", "Gabrielle", "Chanel", "Alexandra", "Flora",
      "Michele"
    ],
    Surname: [
      "Ze", "Nsame", "Ganago", "Ngameleu", "Bassogog", "Aboubakar", "Bambock", "Kunde", "Olinga", 
      "Anguissa", "Djoum", "Castelletto", "Onguene", "Dawa", "Nyom", "Fai", "Ngadeu-Ngadjui", "Oyongo",
      "Onana", "Haschou", "Ondoa", "Akaba", "Kameni", "Engolo", "Tchapchet", "Onguene", "Njoya", 
      "Omboudou", "Menene", "Yango", "Feudjio", "Ndzana", "Meffometou", "Johnson", "NJolle", "Mbengono",
      "Dabda", "Bawou", "Mimboe"
    ]
  },
  Taiwan: { //=> China
    Male: [],
    Female: [],
    Surname: []
  },
  Niger: {
    Male: [
      "Daouda", "Mainassara", "Herve", "Yacouba", "Abdoul-Razak", "Zakariya", "Kourouma", "Mouhamadou",
      "Ali", "Mahamane", "Yussif", "Djibo", "Daniel", "Kamilou", "Modibo", "Fabrice", "Victorien", "Amadou", 
      "Seybou", "Moussa"
    ],
    Female: [
      "Cherifa", "Samia", "Haoua", "Aicha", "Isabelle", "Aichatou", "Najaah", "Chamsiya", "Rakiatou", 
      "Fatouma", "Ramatou", "Oumou", "Anissah", "Mari-Ama", "Armelle", "Samira", "Rabibi", "Dioura", 
      "Rachelle", "Faridatou", "Saymabelle", "Jihane", "Ami", "Nana Hadiza", "Chanze", "Halimatou", 
      "Mariam", "Balkissa", "Mariama", "Celine", "Rahina", "Fati", "Yasmina" 
    ],
    Surname: [
      "Maazou", "Koita", "Moutari", "Yao", "Sidibe", "Daouda", "Soungole", "Wonkoye", "Moussa", "Cisse", 
      "Mohamed", "Hamidou", "Ali", "Fatoukouma", "Souleymane", "Seyni", "Diori", "Lybohy", "BXabari", 
      "Kassaly"
    ]
  },
  "Sri Lanka": { //=> Paki
    Male: [],
    Female: [],
    Surname: []
  },
  Romania: {
    Male: [
      "Ciprian", "Silviu", "Florin", "Romario", "Alin", "Nicusor", "Ionut", "Adrian", "Iulian", "Andrei",
      "Vasile", "Nicolae", "Razvan", "Constantin", "Alexandru", "Ianis", "Tudor", "Dan", "Florinel",
      "Claudiu", "George", "Denis",
    ],
    Female: [
      "Andrea", "Linda", "Olivia", "Melinda", "Teodora", "BXrigitta", "Bianca", "Claudia", "Stefania",
      "Florentina", "Erika", "Maria", "Beatrice", "Mihaela", "Cristina", "Mara", 
    ],
    Surname: [
      "Alibec", "Puscas", "Keseru", "Coman", "Nistor", "Cicaldau", "Baluta", "Hagi", "Mitrita", "Budescu",
      "Marin", "Deac", "Stanciu", "Mogos", "Burca", "Cristea", "Rus", "Nedelcearu", "Bancu", "Tosca",
      "Benzar", "Nita", "Lung", "Tatarusanu", "Batea", "Carp", "Ciolacu", "Tarasila", "Neacsu", 
      "Bistrian", "Herczeg", "Gered", "Olar-Spanu", "Vatafu", "Pana", "Sandu", "Goder", "Meluta", "Nagy",
      "Oprea", "Kajtar", "Paraluta"
    ]
  },
  "Burkina Faso": {
    Male: [
      "Babayoure", "Soufian", "Ben", "Steeve", "Issoufou", "Yacouba", "Edmond", "Issa", "Dylan", "Oula",
      "Soumaila", "Charles", "Bertrand", "Cyrille", "Adama", "Bryan", "Zakaria", "Jonathan", "Aristide",
      "Sibiri", "Lassina", "Eric", "Dramane", "Farid",
    ],
    Female: [
      "Alima", "Corine", "Darifa", "Emerens", "Femke", "Idalina", "Jessica", "Kenisha", "Lan Anh", 
      "Meiskina", "Nanci", "Puebla", "Samira", "Tugba", "Yahaira", "Zalika", "Asma", "Demetria", 
      "Juvenal", "Krava", "Lenka", "Shadya", "Yanka"
    ],
    Surname: [
      "Nikiema", "Traore", "Bance", "Pitroipa", "Zanogo", "Dabo", "Guira", "Bayala", "Kabore", "Ouattara",
      "Ouedraogo", "Tapsoba", "Coulibaly", "Dayo", "Yago", "Sawadogo"
    ]
  },
  Malawi: {
    Male: [
      "Charles", "Brighton", "Denis", "Stanley", "Limbikani", "John", "Yamikani", "Gomezgani", "Precious",
      "Jabulani", "Gerald", "Frank", "John", "Rafick", "Robin", "Richard", "Gabadinho", "Atusaye", 
      "Chiukepo", "Patrick",
    ],
    Female: [
      "Abikanile", "Buseje", "Chaonaine", "Dziko", "Kantayeni", "Liziuyanani", "Mabuufo", "Mesi",
      "Ndachitanji", "Sigele", "Teleza", "Melina", "Alysha", "Fredah", "Charmaine", "Dorothy", "Natasha",
      "Lynda", "Violet", "Tamanda"
    ],
    Surname: [
      "Phiri", "Msowaya", "Nyondo", "Mhango", "Mbulu", "Ngalande", "Namwera", "Banda", "Linje", "Sambani",
      "Chirwa", "Fodya", "Lanjesi", "Mzava", "Sanudi", "Chembezi", "Munthali", "Swini", "Kamwendo", 
      "Mponda", "Msowoya", "Kanyenda"
    ]
  },
  Mali: {
    Male: [
      "Djigui", "Adama", "Ibrahim", "Molla", "Hamari", "Mamadou", "Youssouf", "Falaye", "Kiki", 
      "Massadio", "Cheick", "Senou", "Diadie", "Amadou", "Rominigue", "Souleymane", "Mohamed", 
      "Abdoulay", "Moussa", "Kalifa", "Sekou", "Hadi", "Ibrahima",
    ],
    Female: [
      "Fatoumata", "Hawa", "Adoudou", "Aissatou", "Lala", "Salimata", "Aminata", "Coulouba", "Oumou", 
      "Mainouna", "Farima", "Selikine", "Binta", "Sarantou", "Sebe", "Agueissa", "Bassira", "Aissata",
      "Hawa", 
    ],
    Surname: [
      "Sissoko", "Sacko", "Koita", "Djenepo", "Coulibaly", "Doumbia", "Diaby", "Traore", "Camara",
      "Diarra", "Doucoure", "Kouame", "Haidara", "Samassekou", "Kouyate", "Kone", "Fofana", "Wague",
      "Mounkoro", "Keita", "Roure", "Togola", "Tangara", "Kane", "Diadhiou", "Dembele", "Konate",
      "Karentao"
    ]
  },
  Syria: { // => Egypt
    Male: [],
    Female: [],
    Surname: []
  },
  Kazakhstan: { //=> gender based surnames
    Male: [
      "Stas", "Dmytro", "Igor", "Yuriy", "Dmitri", "Serhiy", "Gafurzhan", "Yan", "Temirian", "Aleksandr",
      "Nuraly", "Olzhas", "Bauyrzhan", "Islambek", "Askhat", "Georgy", "Baktiyar", "Aybol", "Aleksey",
      "Maxim", "Abat"
    ],
    Female: [
      "Mariya", "Adil", "Madina", "Dinara", "Evgenia", "Yulia", "Veronika", "Begaim", "Saule", "Irina",
      "Ekaterina", "Ulbolsyn", "Kristina", "Natalia", "Fatima", "Aigerim", "Nadezhda", "Oksana", 
      "Aexandra"
    ],
    Surname: [
      "Aimbetov", "Fedin", "Shchotkin", "Abiken", "Pertsukh", "Zaynutdinov", "Zhukov", "Tagybergen",
      "Kuat", "Islamkhan", "Kerimzhanov", "Alip", "Marochkin", "Erlanov", "Miroshnickenko", 
      "Vorogovskiy", "Suyumbayev", "Malyi", "Shomko", "Logvinenko", "Shatskiy", "Nepohodov", "Pokatilov",
      "Grebenyuk", "Saratovtseva", "Schoykina", "Zheleznyak", "Alimbozova", "Alimkulova", "Alyakina",
      "Aytymova", "Bisembayeva", "Idiatulina", "Ivanova", "Krasyukova", "Nikolayenko", "Stolpovskaya",
      "Zholchieva", "Babshuk", "Birvagen", "Karibayeva", "Kirgizbaeva", "Maksimenko", "Myasnikova", 
      "Samosledova", "Tampysheva", "Zhanatayeva", "Vyldanova", "Yalova"
    ]
  },
  Chile: { //=> Mexico
    Male: [],
    Female: [],
    Surname: []
  },
  Zambia: {
    Male: [
      "Toaster", "Sebastian", "Mwenya", "Stoppila", "Kabaso", "Isaac", "Lawrence", "Clement", "Tandi", 
      "Nathan", "Donashano", "Salulani", "Augustine", "Clatous", "Bruce", "Kelvin", "Larry", "Evans", 
      "Lazarous", "Mwape"
    ],
    Female: [
      "Ng'ambo", "Hazel", "Annie", "Mary", "Lushomo", "Emelda", "Anita", "Margaret", "Martha", "Agness",
      "Vast", "Judith", "Misozi", "Rhonda", "Mary", "Hellen", "Grace", "Barbra", "Racheal", 
    ],
    Surname: [
      "Musonda", "Kambole", "Kangwa", "Shonga", "Bwayla", "Kampamba", "Musakanya", "Chama", "Mulenga",
      "Phiri", "Malama", "Sinkala", "Mwape", "Chungu", "Shamujompa", "Chongo", "Sunzu", "Chibwe", "Mwange",
      "Nsabata", "Nachula", "Kundananji", "Banda", "Chanda", "Mubanga", "Mwakapila", "Chileshe", "Zulu",
      "Musase", "Tembo", "Belemu", "Mweemba", "Namonje", "Nali", "Musole"
    ]
  },
  Netherlands: {
    Male: [
      "Jasper", "Jeroen", "Marco", "Virgil", "Daley", "Stefan", "Matthijs", "Joel", "Nathan", "Patrick",
      "Denzel", "Georginio", "Kevin", "Davy", "Frenkie", "Donny", "Memphis", "Quincy", "Luuk", "Steven",
      "Wout", "Myron", "Calvin"
    ],
    Female: [
      "Loes", "Sari", "Jennifer", "Dominique", "Anouk", "Merel", "Kika", "Danique", "Desiree", "Liza", 
      "Aniek", "Danielle", "Jackie", "Inessa", "Victoria", "Jill", "Sherida", "Lineth", "Renate",
      "Vivianne", "Shanice", "Katja", "Ashleigh"
    ],
    Surname: [
      "Stengs", "Boadu", "Weghorst", "Berghuis", "de Jong", "Promes", "Depay", "van de Beek", "Propper",
      "Strootman", "Wijnaldum", "Dumfries", "van Aanholt", "Veltman", "de Ligt", "de Vrij", "Blind", 
      "van Dijk", "Bizot", "Zoet", "Cilessen", "Weerden", "Snoeijs", "van de Sanden", "Miedema", "Jansen",
      "Beerensteyn", "Spitse", "Roord", "Pelova", "Kaagman", "Groenen", "van de Donk", "Nouwen", 
      "van der Most", "van Lunteren", "Kerkdijk", "van Es", "van Dongen", "Dekker", "Bloodworth",
      "Vreugdenhil", "Veenendaal", "Geurts"
    ]
  },
  Guatemala: { //=> Mexico
    Male: [],
    Female: [],
    Surname: []
  },
  Ecuador: {  //=> Mexico
    Male: [],
    Female: [],
    Surname: []
  },
  Zimbabwe: {
    Male: [
      "Elvis", "Talbert", "Ian", "Peter", "Divine", "Alec", "Teenage", "MacClive", "Tichaona", "Phineas",
      "Nyasha", "Ovidy", "Khama", "Sipho", "Thabani", "Kudakwashe", "Evans", "Clive", "Terrence", "Knox",
      "Admiral", "Tino"
    ],
    Female: [
      "Chido", "Lindiwe", "Lynett", "Shiela", "Nobuhle", "Eunice", "Msipa", "Talent", "Rejoice", "Mavis",
      "Daisy", "Marjory", "Rudo", "Samkelisiwe", "Erina", "Rutendo", "Kudakwashe", "Felistas"
    ],
    Surname: [
      "Kadewere", "Muskwe", "Mutizwa", "Dzvukamanja", "Augusto", "Rusike", "Mahachi", "Kamusoko", "Ndlovu",
      "Billiat", "Karuru", "Munetsi", "Bamusi", "Chipunza", "Phiri", "Hadebe", "Mudimu", "Lunga", "Muduhwa",
      "Nekati", "Shumba", "Chipezeze", "Muzongondi", "Bhasopo", "Makore", "Jeke", "Zulu", "Neshamba", 
      "Nyaumwe", "Kaitano", "Chirandu", "Kapfumvuti", "Mandaza", "Emmaculate", "Chibanda", "Majika",
      "Makoto", "Mutokuto", "Magwede", "Dringirai"
    ]
  },
  Cambodia: {
    Male: [
      "Sou", "Hul", "Keo", "Ken", "Sath", "Sareth", "Soeuy", "Tes", "Ly", "Yue", "Cheng", "Orn", "Kouch",
      "Sin", "Sos", "Yeu", "Thierry", "Chantha", "Prak", "Mony", "Reung", "Keo", "Sieng", "Kan"
    ],
    Female: [
      "Channary", "Chantrea", "Kalliyan", "Kiri", "Mliss", "Sovann", "Tevy", "Vanna", "Veata", "Achariya",
      "Bopha", "Champey", "Daevy", "Jorani", "Kalianne", "Leakena", "Makra", "Narin", "Peou", "Rachana",
      "Soboen", "Thom"
    ],
    Surname: [
      "Pisal", "Chanthea", "Sokpheng", "Bunheing", "Udom", "Bin", "Muslim", "Dani", "Suhana", "Kakada", 
      "Sokumpheak", "Chanpolin", "Meng", "Safy", "Vahed", "Sambath", "Visal", "Krya", "Rosib", "Yaty",
      "Kimhuy", "Soksela", "Chansopheak", "Rosib"
    ]
  },
  Senegal: {
    Male: [
      "Abdoulaye", "Alfred", "Edouard", "Lamine", "Kalidou", "Saliou", "Moussa", "Racine", "Mouhamadou",
      "Ousseynou", "Idrissa", "Gana", "Cheikhou", "Badou", "Krepin", "Sidy", "Mamadou", "Sadio", 
      "Ismaila", "M'Baye", "Famara", "Sada", "Habib", "Meme", "Baba"
    ],
    Female: [
      "Mariane", "Ouleye", "Arame", "Bineta", "Absa", "Mbayang", "Mame", "Ngouye", "Fatou", "Aminata", 
      "Mereme", "Khady", "Safietou", "Maty", "Korka", "Fatou", "Mamy", "Fanta", "Mariama", 
    ],
    Surname: [
      "Thiam", "Diallo", "Thioub", "Diedhiou", "Niang", "Sarr", "Mane", "Loum", "Diatta", "Ndiaye", 
      "Kouyata", "Gueye", "Thioune", "N'Diaye", "Coly", "Wague", "Ciss", "Koulibaly", "Gassama",
      "Mendy", "Gomis", "Diehiou", "Thiaw", "Sy", "Ndiaye", "Faye", "Fall", "Diop", "Sagna", 
      "Sall", "Yally", "Diadhiou", "Sene", "Sow", "Diagne", "Fall", "Sylla", "Thiandoum", "Dieye",
    ]
  },
  Chad: {
    Male: [
      "Serge", "Mathieu", "Dillah", "Cesar", "Bechir", "Seid", "Morgan", "Constant", "Collyns", "Ninga",
      "Ahmat", "Nassar", "Eric", "Azrack", "Romeo", "Brahim", "Bakhit", "Marius", "Karl", "Casimir",
      "Ezechiel", "Edgar"
    ],
    Female: [
      "Arafa", "Prudence", "Luiza", "Sylviane", "Fadoul", "Nya", "Angela", "Jodie",
    ],
    Surname: [
      "Minganodji", "N'Douassel", "Ninga", "Barthelemy", "Mouandilmadji", "Djibrine", "Ngaroudal", 
      "Otodjibaye", "Mahamat", "Mbangossoum", "Koulelengar", "Abderamane", "Ndonane", "Ambassa", 
      "Madtoingue", "Betorangal", "Djimet", "Abaya", "Mbairamadji", "Adoassou", "Diguel" 
    ]
  },
  Guinea: {
    Male: [
      "Aly", "Moussa", "Sekouba", "Issiaga", "Sory", "Sekou", "Simon", "Mikael", "Julian", "Pa", 
      "Ibrahima", "Sadio", "Naby", "Mady", "Kamso", "Mohamed", "Francois", "Seydouba", "Demba",
      "Jose", "Morlaye", "Momo"
    ],
    Female: [
      "Binta", "Mariama", "Mariame", "Fanta", "Fatoumata", "Simone", "Assiatou", "Samira", "Mariam",
      "Linda", "Oumou", "Lune", "Jacqueline", "Fidel", "Djenabou", "Aminata", "Zenab", "Adama", "Saraf",
      "Rabiatou", "Madeleine", "Julienne", "Gamey", "Famata", "Catherine", "Anne-Marie"
    ],
    Surname: [
      "Yansane", "Sylla", "Kante", "Camara", "Soumah", "Kamano", "Yattara", "Mara", "Keita", "Diallo",
      "Conte", "Konate", "Jeanvier", "Dyrestam", "Falette", "Conde", "Sankhon", "Sylla",
    ]
  },
  "South Sudan": {
    Male: [
      "Ramadan", "John", "Khamis", "Majak", "Peter", "Hassan", "James", "Leon", "Maker", "Mathiang",
      "Dominic", "Angelo", "Santino", "Friday", "Mutwakil", "Timothy", "Jose", "Kutch", "Koang", "Thok",
      "Jackson", "Emmanuel", "Thomas", "David", "Uso", "Dominic", "Abui", "Jimmy", "Michael", "Denis",
      "Kenny", "Yagoub", "Daniel", 
    ],
    Female: [
      "Abi", "Dabor", "Favor", "Grace", "Hiba", "Joyce", "Lee", "Matida", "Nadia", "Onnab", "Rachael",
      "Uduru", "Yaya", "Abrar", "Rayan", "Alima", "Anita"
    ],
    Surname: [
      "Mayik", "Dak", "Mawith", "Deng", "Martin", "Manyang", "Mathiang", "Kornelis", "Deng", "Zico",
      "Abdulkarim", "Dusman", "Nyuar", "Kerjok", "Morgan", "Chol", "Lumeri", "Majak", "Khamis", 
      "Pretino", "Omer", "Yongule", "Athiu", "Mustafa"
    ]
  },
  Rwanda: {
    Male: [
      "Bakame", "Yves", "Omar", "Emmanuel", "Eric", "Fitina", "Emery", "Thierry", "Abdul", "Salomon",
      "Kevin", "Djihad", "Jean-Claude", "Yannick", "Olivier", "Haruna", "Andrew", "Meddie", "Patrick",
      "Jacques", "Muhadjiri", "Ernest", "Justin", "Djabel"
    ],
    Female: [
      "Judith", "Helena", "Jeanne", "Djamila", "Clementine", "Chadia", "Alice", "Maria", "Gloria", 
      "Sophie", "Louise", "Saida", "Agathe", "Claudine", "Edith", "Marie", "Claire", "Janviere"
    ],
    Surname: [
      "Manishimwe", "Mico", "Sugira", "Hakizimana", "Tuyisenge", "Sibomana", "Kagere", "Buteera", 
      "Niyonzima", "Mukunzi", "Iranzi", "Muhire", "Bizimana", "Iradukunda", "Nirisarike", "Rwatubyaye",
      "Manzi", "Bayisenge", "Omborenga", "Rutanga", "Imanishimwe", "Rwabugiri", "Kimenyi", "Ndayishimiye", "Mukadusenge", "Uwamahoro", "Umulisa", "Murorunkwere", "Iririkumutimana", "Ntagisanimana", "Kalimba", "Maniraguha", "Niyomugaba", "Nibagwire", "Ibangaryeanne", "Niyotyita", "Uwamahirwe", "Mukamana", "Abimana", "Nyirahatashima", "Uwizeyimana", "Ingabire",
    ]
  },
  Tunisia: { // => Egypt
    Male: [],
    Female: [],
    Surname: []
  },
  Cuba: { //=> Mexico
    Male: [],
    Female: [],
    Surname: []
  },
  Belgium: {
    Male: [
      "Thibaut", "Simon", "Matz", "Hendrik", "Toby", "Thomas", "Dedryck", "Jason", "Timothy", "Elias", "Brandon", "Axel", "Kevin", "Nacer", "Yannick", "Youri", "Leander", "Dennis", "Hans", "Yari", "Maxime", "Eden", "Dries", "Romelu", "Christian", "MIchy", "Divock", "Thorgan", "Leandro",
    ],
    Female: [
      "Nicky", "Diede", "Justien", "Julie", "Maud", "Laura", "Heleen", "Davina", "Charlotte", "Shari", "Tine", "Marie", "Kassandra", "Justine", "Janice", "Elena", "Davinia", "Elke", "Ella", "Chloe", "Lola", "Sarah", "Tessa"
    ],
    Surname: [
      "Trossard", "Hazard", "Origi", "Batshuayi", "Benteke", "Lukaku", "Mertens", "Lestienne", "Verschaeren", "Vanaken", "Praet", "Dendoncker", "Tielemans", "Carrasco", "Chadli", "De Bruyne", "Witsel", "Mechele", "Cobbaut", "Castagne", "Denayer", "Boyata", "Vermaelen", "Alderweireld", "Van Crombrugge", "Sels", "Mignolet", "Courtois", 'Wullaert', 'Wijnants', 'Wajnblum', 'Velde', 'Van Kerkhoven', 'Van Gorp', 'Vanmechelen', 'Dhont', 'Cayman', 'Vanhaevermaet', 'Missipo', 'Minnaert', "De Caigny", "Van Belle", "Tison", "Philtjens", "Jaques", "Deloose", "De Neve", "Coutereels", "Biesmans", "Odeurs", "Lemey", "Evrard"
    ]
  },
  Benin: {
    Male: ["Fabien", "Cherif", "Dine", "Marcel", "David", "Olivier", "Emmanuel", "Nabil", "Cedric", "Jean", "Youssouf", "Melvyn", "Stephane", "Jordan", "Seibou", "Sessi", "Tidjani", "Jerome", "Mickael", "Jodel", "Steve", "Marcellin", "Cebio", "Yannick"],
    Female: ["Natacha", "Stephanie", "Merlia", "Benie", "Eunice", "Anais", "Victoire", "Denise", "Fadila","Laetitia", "Lelatou", "Priscilla", "Sarah", "Iubine", "Fati", "Nourbese", "Isoke", "Oseye", "Omorose"],
    Surname: [
      "Aguemon", "Soukou", "Koukpo", "Mounie", "Dossou", "Pote", "Bonou", "Anaane", "D'Almeida", "Mama", "Adeoti", "Sessegnon", "Doremus", "Assogba", "Ogounchi", "Hountondji", "Yarou", "Imorou", "Verdon", "Kiki", "Dandjinou", "Kakpo", "Farnolle"
    ]
  },
  Greece: {
    Male: [
      "Odysseas", "Alexandros", "Vasilis", "Michalis", "Kostas", "Dimitris", "Pantelis", "Leonardo", "Andreas", "Charis", "Giannis", "Petros", "Sebastian"
    ],
    Female: ["Maria", "Eleni", "Aikaterini", "Katerina", "VAsiliki", "Basiliki", "Sophia", "Angeliki", "Georgia", "Dimitra", "Konstantina", "Paraskevi", "Giorgia", "Gogo", "Kostatina", "Paraskeui"],
    Surname: [
      "Masouras", "Limnios", "Pavlidis", "Bakasetas", "Donis", "Koulouris", "Vasiliadis", "Kourbelis", "Mantalos", "Galanopoulos", "Fetfatzidis", "Mavrias", "Bouchalakis", "Koutris", "Giannoulis", "Chatzidiakos", "Tsimikas", "Siovas", "Lampropoulos", "Stafylidis", "Bakakis", "Barkas", "Paschalakis", "Vlachodimos"
    ]
  },
  Bolivia: {//=>Mexico
    Male: [],
    Female: [],
    Surname: []
  },
  Haiti: {
    Male: ["Johny", "Josue", "Carlens", "Ricardo", "Djimy", "Jems", "Andrew", "Alex", "Herve", "Zachary", "Duckens", "Wilde-Donald", "Stephane", "Soni", "Steeven", "Bryan", "Derrick", "Ronaldo", "Jonel", "Frantzdy", "Donald",],
    Female: [
      "Jonie", "Kerly", "Madelina", "Soveline", "Chelsea", "Ruthny", "Maudeline", "Emeline", "Johane", "Kethna", "Melchie", "Danielle", "Sherly", "Phiseline", "Gaelle", "Batcheba", "Nerilia", "Roseline", "Abaina", "Mikerline"
    ],
    Surname: ["Pierrot", "Desire", "Damus", "Etienne", "Alceus", "Saba", "Mustivar", "Lambese", "Guerrier", "Nazon", "Herivaux", "Bazile", "Christian", "Jean-Baptiste", "GEffrard", "Alexis", "Ade", "Arcus", "Duverger", "Placide", "Saint-Felix", "Louis", "Eloissaint", "Mondesir", "Louis", "Dumas", "Michel", "Jeudy", "Dumonay", "Laforte", "Charles", "Moryl", "Mathurin", "Surpis", "Beaubrun", "Fleuriot", "Theus", "Gabriel"]
  },
  Burundi: {
    Male: ["Jonathan", "Justine", "MacArthur", "Diamant", "David", "Omar", "Frederic", "Joel", "Pierre", "Gael", "Shassiri", "Hussein", "Fiston", "Saido", "Bonfils", "Jules", "Cedric", "Laudit", "Francis", "Mohamed", "Bienvenue"],
    Female: [],//=>Rwanda
    Surname: ["Kanakimana", "Amissi", "Mustafa", "Mavugo", "Ulimwengu", "Bimenyimana", "Berahino", "Abdul Razak", "Shabani", "Nahimana", "Duhayindavyi", "Bigirimana", "Kwizera", "Bacanamwo", "Nsabiyumva", "Moussa", "Ngandu", "Nshimirimana", "Ramazani", "Arakaza", "Ndikumana", "Nahimana"]
  },
  "Dominican Republic": { //=> Mexico
    Male: [],
    Female: [],
    Surname: []
  },
  "Czech Republic": {
    Male: [
      "Tomas", "Radim", "Stefan", "David", "Marek", "Theodor", "Gebre", "Lukas", "Jan", "Jaromir", "Michal", "Borek", "Martin", "Patrik", "Matej", "Libor", "Milan"
    ],
    Female: ["Barbora", "Ivana", "Petra", "Aneta", "Jitka", "Simona", "Jana", "Eliska", "Katerina", "Klara", "Kamila", "Michaela", "Pavlina", "Marketa", "Lucie", "Andrea", "Tereza"],
    Surname: [
      "Skoda", "Kozak", "Vydra", "Dolezal", "Schnick", "Frydek", "Dockal", "Sadilek", "Pavelka", "Zmrhal", "Kopic", "Kalvach", "Selassie", "Suchy", "Hovorka", "Simic", "Reznik", "Koubek", "Vonkova", "Szewieczkova", "Staskova", "Martinkova", "Svitkova", "Ringelova", "Nepokoja", "Dubcova", "Cahynova", "Buzkova", "Sonnogova", "Sedlackova", "Necidova", "Chlastakova", "Dedinova", "Bertholdova", "Pizlova", "Ruzickova", "Votikova"
    ]
  },
  Portugal: { //=> Brazil
    Male: [],
    Female: [],
    Surname: []
  },
  Sweden: {
    Male: ["Peter", "Isak", "Pontus", "Joel", "Marcus", "Jacob", "Adam", "Anel", "Kristopher", "Simon", "Darijan", "Gustav", "Muamer", "Alexander", "Jesper", "Anton", "Daleho", "August", "Jordan", "Robin", "Dino"],
    Female: ["Hedvig", "Zecira", "Jennifer", "Linda", "Magdalena", "Jessica", "Jonna", "Hanna", "Nathalie", "Emma", "Caroline", "Kosvare", "Julia", "Hanna", "Michelle", "Sofia", "Stina", "Lina", "Pauline", "Madelen", "Loreta", "Anna", "Zigiotti"],
    Surname: ["Islamovic", "Soder", "Larsson", "Hedlund", "Erlingmark", "Irandust", "Saletros", "Karlsson", "Kacaniklic", "Tankovic", "Berggren", "Bojanic", "Sandberg", "De Graca", "Ahmedhodzic", "Andersson", "Larsson", "Danielson", "Dahlberg", "Pettersson", "Abrahamsson", "Kullashi", "Janogy", "Olme", "Anvegard", "Hammarlund", "Hurtig", "Blackstenius", "Jakobsson", "De Jongh", "Bennison", "Karlernas", "Asllani", "Serger", "Kullberg", "Bjorn", "Glas", "Samuelsson", "Eriksson", "Sembrant", "Falk", "Musovic", "Lindahl"]
  },
  Azerbaijan: { //=> gender based surnames
    Male: [
      "Salahat", "Emil", "Mehdi", "Badavi", "Pavel", "Tamkin", "Shahriyar", "Anton", "Bahlul", "Abbas", "Javid", "Gara", "Dimitrij", "Araz", "Richard", "Aghabala", "Emin", "Eddi", "Elvin", "Vusal", "Ramil", "Renat"
    ],
    Female: [
      "Farida", "Lyubov", "Nigar", "Svetlana", "Olga", "Elena", "Anastasia", "Natalya", "Narmina", "Masha", "Tamara", "Ekaterina", "Inna", "Lyudmila", "Raisa", "Marina", "Galina", "Nargiz"
    ],
    Surname: [, 
      "Dadashov", "Sheydayev", "Isgandarli", "Jamalov", "Israfilov", "Mahmudov", "Ramazanov", "Almeida", "Abdullayev", "Nazarov", "Garayev", "Huseynov", "Aliyev", "Mustafazade", "Krivotsyuk", "Rahimov", "Khalilzade", "Pashayev", "Jannatov", "Baleyev", "Aghayev", "Babayeva", "Tirina", "Ismayilova", "Famenko", "Gaziyeva", "Nabiyeva", "Rahmanova", "Safarova", "Saratovtseva", "Rzayeva", "Makarova", "Starovoytova", "Kamasheva", "Komarova", "Akayeva", "Zhidkova", "Davidok", "Kuzniatsova", "Alakbarova", "Boyko", "Nosova", "Shevtsova",
    ]
  },
  Hungary: {
    Male: [
      "Peter", "Denes", "Adam", "Gergo", "Mihaly", "Barnabas", "Botond", "Zsolt", "Attila", "Bence", "Balazs", "Mate", "Istvan", "Dominik", "David", "Daniel", "Roland", "Robert", "Filip", "Donat"
    ],
    Female: [
      "Reka", "Barbara", "Anna", "Anita", "Viktoria", "Dora", "Evelin", "Laura", "Lilla", "Boglarka", "Henrietta", "Sara", "Zsofia", "Diana", "Petra", "Dora", "Loretta", "Fanny", "Zsanett", "Bernadett"
    ],
    Surname: [
      "Zsoter", "Holender", "Feczesin", "Sallai", "Varga", "Szalai", "Gazdag", "Holman", "Vida", "Szoboszlai", "Nagy", "Kovacs", "Patkai", "Dzsudzsak", "Pavkovics", "Szalai", "Barath", "Bese", "Korhut", "Lang", "Lovrencsics", "Kovacsik", "Dibusz", "Gulacsi", "Zagor", "Jakabfi", "Vago", "Sule", "Nemeth", "Zeller", "Kocsan", "Csanyi", "Racz", "Fenyvesi", "Pusztai", "Csiszar", "Horti", "Turanyi", "Mosdoczi", "Papp", "Szabo", "Csiki", "Pinczi", "Samu", "Biro", "Szocs"
    ]
  },
  Jordan: { //=> Egypt
    Male: [],
    Female: [],
    Surname: []
  },
  Belarus: {
    Male: [
      "Pavel", "Yahor", "Syarhey", "Aleksandr", "Ihar", "Kiryl", "Maksim", "Sergey", "Nikita", "Yury", "Yevgeniy", "Ivan", "Vladislav", "Roman", "Dzyanis", "Maksim", "Vitaly", "Dmitry", "Vsevolod"
    ],
    Female: [
      "Natalya", "Ekaterina", "Zaryna", "Valeriya", "Anna", "Ksenia", "Anastasiya", "Polina", "Elvira", "Margarita", "Lyubov", "Tatiana", "Vita", "Yulia", "Viktoriya", "Karina", 
    ],
    Surname: [
      "Sadovsky", "Podstrelov", "Shevchenko", "Lisakovich", "Skavysh", "Laptsew", "Volkaw", "Yuzepchuk", "Klimovich", "Bakhar", "Yablonskiy", "Kendysh", "Korzun", "Nyakhaychyk", "Stasevich", "Drahun", "Stephanov", "Poznyak", "Karpovich", "Shvyatsow", "Pyachenin", "Burko", "Pavlovets", "Matsveychyk", "Palitsevich", "Hatkevich", "Pavlyuchenko", "Shuppo", "Olkhovik", "Lutskevich", "Linnik", "Kazakevich", "Slesarchik", "Shlapakova", "Shcherbachenia", "Nikolaenko", "Markushevskaya", "Kharlanova", "Gudchenko", "Yushko", "Urazaeva", "Shatsilenia", "Novikava", "Kubichnaya", "Kozyupa", "Karachun", "Kapustsina", "Kovalchuk", "Voskobovich"
    ]
  },
  "United Arab Emirates": { //=> Egypt
    Male: [],
    Female: [],
    Surname: []
  },
  Honduras: { //=> Mexico
    Male: [],
    Female: [],
    Surname: []
  },
  Tajistan: {
    Male: [
      "Rustam", "Fathulo", "Shokhrukh", "Manuchehr", "Tabrezi", "Khurshed", "Iskandar", "Davron", "Farkhod", "Akhtam", "Parvizdzhon", "Nuriddin", "Alisher", "Muhammadjon", "Ehson", "Fatkhullo", "Amirbek", "Karomatullo", "Jahongir", "Komron", "Sheeriddin", "Shahrom", "Manuchekhr"
    ],
    Female: [
      "Afareen", "Bahar", "Darya", "Farahnak", "Gawhar", "Hangahma", "Jahan", "Katayoun", "Lala", "Mahasti", "Nahal", "Padidah", "Rasa", "Saaman", "Tahminah", "Yagana", "Zarrin", "Zheela", "Yasaman", "Taranum", "Souzan", "Roudabeh", "Poran", "Noushin", 
    ],
    Surname: [
      "Dzhalilov", "Samiyev", "Boboev", "Tursunov", "Ergashev", "Saidov", "Juraboev", "Fatkhuloev", "Panjshanbe", "Rakhimov", "Dzhalilov", "Davronov", "Umarbayev", "Nazarov", "Vosiyev", "Beknazarov", "Davlatmir", "Safarov", "Kirgizboev", 
    ]
  },
  Serbia: {
    Male: [
      "Marko", "Predrag", "Emil", "Aleksandar", "Nikola", "Uros", "Filip", "Milan", "Nemanja", "Marko", "Dusan", "Adem", "Luka", "Filip", "Mijat", "Sergej", "Sasa", "Andrija", "Dorde"
    ],
    Female: [
      "Adrijana", "Biljana", "Jovana", "Vesna", "Marija", "Mirela", "Allegra", 'Milica', 'Jelena', 'Aleksandra', 'Kristina', 'Aida', "Dina", "Tijana", "Marijana", "Nevena", "Tiana", "Nikoleta", "Violeta", "Orsoja", "Milena", "Ana", "Tanja", 
    ],
    Surname: [
      "Despotovic", "Pavlovic", "Mitrovic", "Lukic", "Savic", "Milinkovic", "Radonjic", "Gacinovic", "Maksimovic", "Gudelj", "Duricic", "Milivojevic", "Ljajic", "Tadic", "Gobeljic", "Miletic", "Milunovic", "Rodic", "Mladenovic", "Spajic", "Milenkovic", "Maksimovic", "Kolarov", "Rockov", "Rajkovic", "Dmitrovic", "Kostic", "Dapic", "Ivanov", "Vukovic", "Vajda", "Duricek", "Jankovic", "Slovic", "Nikolic", "Krstic", "Damnjanovic", "Stevanovic", "Stojanovic", "Jankov", "Filipovic", "Blagojevic", "Kardovic", "Pantelic", "Savanovic", "Cubrilo", "Ilic", "Cankovic", "Mijatovic", "Poljak", "Tenkov", "Vukovic", "Radojicic", "Smiljkovic", "Bradic", "Delic"
    ]
  },
  Austria: {
    Male: [
      "Jorg", "Pavao", "Alexander", "Christopher", "Maximilian", "Stefan", "Valentino", "Florian", "Philipp", "Julian", "Louis", "Thomas", "Reinhold", "Michael", "Lukas", "Alexandar"
    ],
    Female: [
      "Melissa", "Isabella", "Manuela", "Verena", "Marina", "Virginia", "Katharina", "Viktoria", "Yvonne", "Carina", "Laura", "Barbara", "Jasmin", "Julia", "Marie-Therese", "Nadine", "Sarah", "Nicole", "Lisa", "Elisabeth"
    ],
    Surname: [
      "Pinther", "Mayr", "Makas", "Billa", "Zadrazil", "Puntigam", "Prohaska", "Hobinger", "Hickelsberger-Fuller", "Feiersinger", "Eder", "Dunst", "Wienroither", "Wenninger", "Weilharter", "Schnaderbeck", "Schiechtl", "Kirchberger", "Georgieva", "Aschauer", "Zinsberger", "Kresche", "Abiral", "Siebenhandl", "Pervan", "Schlager", "Dragovic", "Trimmel", "Wober", "Posch", "Lienhart", "Ullmann", "Baumgartlinger", "Ilsanker", "Lazaro", "Grillitsch", "Schaub", "Goiginger", "Ranftl"
    ]
  },
  Switzerland: {
    Male: [
      "Yann", "Yvon", "Jonas", "Stephan", "Ricardo", "Michael", "Manuel", "Francois", "Nico", "Kevin", "Loris", "Eray", "Granit", "Denis", "Edimilson", "Renato", "Djibril", "Michel", "Haris", "Albian", "Christian", "Ruben", "Cedric"
    ],
    Female: [
      "Gaelle", "Seraina", "Elvira", "Noelle", "Rachel", "Jana", "Luana", "Naomi", "Julia", "Svenja", "Vanessa", "Lia", "Sandy", "Viola", "Coumba", "Malin", "Ana-Maria", "Ramona", "Fabienne", "Alisha", "Irina"
    ],
    Surname: [
      "Itten", "Vargas", "Fassnacht", "Ajeti", "Seferovic", "Aebischer", "Sow", "Steffen", "Fernandes", "Zakaria", "Xhaka", "Comert", "Benito", "Mbabu", "Elvedi", "Moubandje", "Lang", "Rodriguez", "Lichsteiner", "Omlin", "Mvogo", "Sommer", "Pando", "Lehmann", "Reuteler", "Humm", "Bachmann", "Crnogorcevic", "Gut", "Sow", "Calligaris", "Maendly", "Walti", "Bernauer", "Folmli", "Stierli", "Megroz", "Buhler", "Brunner", "Rinast", "Maritz", "Herzog", "Thalmann", "Friedli"
    ]
  },
  Israel: {
    Male: [
      "Ariel", "Ofir", "Yoav", "Eitan", "Omri", "Eli", "Loai", "Orel", "Hatem", "Sun", "Bibras", "Beram", "Nir", "Dan", "Gaetan", "Ilay", "Dolev", "Neta", "Eran", "Munas", "Dia", "Shon"
    ],
    Female: [
      "Hanit", "Mairav", "Maya", "Shani", "Moran", "Shahar", "Shai", "Michal", "Shay", "Daniel", "Shir", "Alina", "Diana", "Karin", "Arava", "Opal", "Adva", "Eden", "Mor", "Roni"
    ],
    Surname: [
      "Weissman", "Saba", "Dabbur", "Zahavi", "Lavi", "Haziza", "Elmkies", "Varenne", "Glazer", "Bitton", "Kayal", "Natkho", "Menachem", "Abd Elhamed", "Dgani", "Elhamed", "Taha", "Dasa", "Harush", "Ben Harush", "Tibi", "Gerafi", "Marciano", "Shimrich", "Efraim", "Avital", "Twil", "Sofer", "Shahaf", "Sendel", "Redman", "Metkalov", "Levo", "Falkon", "Schwartz", "Sade", "Ravitz", "Peal", "Nakav", "Fridman", "David", "Barqui", "Shamir"
    ]
  },
  "Papua New Guinea": {
    Male: [
      "Ishmael", "Ronald", "Daniel", "Joshua", "Alwin", "Felix", "Shane", "Dinniget", "Koriak", "Langarap", "Patrick", "Michael", "Emmanuel", "Jacob", "Gregory", "Koku", "Raymond", "Nigel", "David", "Atti", "Tommy", "Jonathan", "Alex"
    ],
    Female: [
      "Asaiso", "Gloria", "Selina", "Meagen", "Shalom", "Ramona", "Marie", "Deslyn", "Serah", "Yvonne", "Rayleen", "Sandra", "Margret", "Georgina", "Michaella", "Lydia", "Joelyne", "Lucy", "Dorcas", "Faith", "Betty", "Fidelma"
    ],
    Surname: [
      "Kamen", "Allen", "Semmy", "Kepo", "Browne", "Dabinyaba", "Gunemba", "Kepo", "Togubai", "Sabua", "Simon", "Foster", "Aisa", "Samol", "Upaiga", "Luaine", "Sakael", "Komolong", "Talau", "Joe", "Warisan", "Pole", "Watpore", "Sam", "Kasiray", "Sesevo", "Maino", "Aimi", "Kose", "Kurabi", "Bakani", "Joseph", "Birum", "Bauelua", "Gabong", "Tamgol", "Siniu", "Kaipu", "Padio", "Waida", "Balamus", "Gunemba", "Unamba", "Laeli", "Gossie"
    ]
  },
  Togo: {
    Male: [
      "Malcolm", "Abdoul Moubarak", "Dove", "Djene", "Hakim", "Steve", "Simon", "Adewale", "Wilson", "Abdoul", "Kangnivi", "Lalawele", "Floyd", "Mathieu", "Koffi", "Ihlas", "Gilles", "Marouf", "Yendoutie", "Kodjo", "Peniel", "Ahoueke", "David"
    ],
    Female: [
      "Abigail", "Caitlin", "Dani", "Edem", "Fabienne", "Gadowaye", "Hadiza", "Iara", "Jaelle", "Kadi", "Lan Anh", "Madeleine", "Nabila", "Pamella", "Queene", "Rachida", "Sacie", "Tabitha", "Valentina"
    ],
    Surname: [
      "Henen", "Denkey", "Laba", "Nane", "Tchakei", "Sunu", "Bebou", "Atchou", "Dossevi", "Ayite", "Atakora", "Amatchoutchoui", "Bode", "Akakpo", "Olufade", "Gbegnon", "Ouro-Sama", "Lawson", "Abotchi", "Aigba", "Barcola"
    ]
  },
  "Sierra Leone": {
    Male: ["Solomon", "Mohamed", "Alhaji", "Umaru", "David", "Mila", "Abu", "Alie", "Osman", "Yeami", "Julius", "Medo", "Alfred", "John", "Michael", "Kei", "Alhassan", "Kwame", "Sheka", "Christian", "Buya", "Amadou", "Ibrahim"],
    Female: [
      "Adama", "Christiana", "Doris", "Fatmata", "Georgieta", "Hassanatou", "Kadie", "Marai", "Olivette", "Suzan", "Tenneh", "Yaema", "Titi", "Mariama", "Lucy", "Fatou", "Claudetta", "Aminata"
    ],
    Surname: [
      "Conteh", "Bakayoko", "Turay", "Moses", "Fofanah", "Quee", "Kamara", "Lahoud", "Sankoh", "Wobay", "Dunia", "Kakay", "Sesay", "Suma", "Simbo", "Bangura", "Morris"
    ]
  },
  Bulgaria: {
    Male: [
      "Georgi", "Martin", "Daniel", "Petar", "Ivan", "Viktor", "Angel", "Ivan", "Andrea", "Stefan", "Aleksandar", "Todor", "Kristiyan", "Galin", "Valentin", "Dimitar", "Spas", "Ismail", "Bircent", "Svetoslav"
    ],
    Female: [
      "Liliana", "Velina", "Borislava", "Nina", "Valentina", "Stanislava", "Denitsa", "Silvia", "Lydia", "Tsvetana", "Ivanka", "Nikoleta", "Todora", "Radoslava", "Kristina", "Petya", "Veselina", "Zlatka", "Roksana", "Korneliya"
    ],
    Surname: [
      "Kovachev", "Karagaren", "Minchev", "Isa", "Delev", "Iliev", "Antov", "Tsvetkov", "Ivanov", "Malinov", "Nedelev", "Tonev", "Velkov", "Hristov", "Turistov", "Lyaskov", "Popov", "Goranov", "Zanev", "Naumov", "Lukov", "Georgiev", "Naydenova", "Shahanska", "Gaberova", "Ivanova", "Mahlelieva", "Petkova", "Petrunova", "Slavcheva", "Todorova", "Voyskova", "Koleva", "Mancheva", "Nacheva", "Radoyska", "Semkova", "Tsekova", "Gospodinova", "Hristova", "Kireva", "Koshuleva", "Kostova"
    ],
  },
  Laos: {
    Male: [
      "Songphu", "Vangchay", "Outhensackda", "Soutsakhone", "Saythong", "Bounlap", "Saysana", "Saysana", "Valakone"
    ],
    Female: [
      "Boonyong", "Soudaoloung", "Sengthid", "Noum", "Souchitta", "Nok", "Sysuvan", "Phanykone", "Anouluck", "Bouasy", "Phetphachan", "Vannida", "Minivanh", "Borneo", "Viengkhone", "Keota", "Hongthong", "Vongdeuan"
    ],
    Surname: [
      "Phomphakdy", "Khenkitisack", "Savatdy", "Syphasay", "Oudomphet", "Vatthana", "Muangmany", "Phongsa", "Chanthanivong", "Choulapanh", "Phongoudom", "Chantamala", "Louangamard", "Bounthan", "Soukpanhya", "Phommachack", "Chanphong", "Keosinthavone", "Vannalath", "Phomsuvan", "Douangmala", "Phonhalath", "Anmahongsa", "Khamla", "Phasiri", "Akkhavong"
    ]
  },
  Paraguay: { //=> Mexico
    Male: [],
    Female: [],
    Surname: []
  },
  "El Salvador": { //=> Mexico
    Male: [],
    Female: [],
    Surname: []
  },
  Libya: { // => Egypt
    Male: [],
    Female: [],
    Surname: []
  },
  Nicaragua: { //=> Mexico
    Male: [],
    Female: [],
    Surname: []
  },
  Lebanon: { //=> Egypt
    Male: [],
    Female: [],
    Surname: []
  },
  Kyrgyzstan: {
    Male: [
      "Pavel", "Kutman", "Valery", "Tamirian", "Mustafa", "Aizar", "Viktor", "Azamat", "Aleksandr", "Akram", "Gulzhigit", "Edgar", "Bekzhan", "Odiljon", "Murolimzhon", "Kairat", "Bakhtiyar", "Farhat", "Alimardon", "Akhlidin", "Mirlan", "Vitalij"
    ],
    Female: [
      "Adilet", "Aigul", "Anara", "Asel", "Aziza", "Bermet", "Cholpon", "Dinara", "Gulnara", "Jyrgal", "Zhyrgal", "Kunduz", "Omur", "Rakhat", "Salamat", "Tumar", "Turan", "Urmat"
    ],
    Surname: [
      "Lux", "Murzaev", "Israilov", "Shukurov", "Musabekov", "Duyshobekov", "Uulu", "Akhmedov", "Abdurakhmanov", "Sagynbaev", "Bernhardt", "Alykulov", "Umarov", "Mishchenko", "Baimotov", "Maier", "Akmatov", "Iusupov", "Kozubaev", "Kichin", "Kashuba", "Kadyrbekov", "Matyash"
    ]
  },
  Turkmenistan: {
    Male: [
      "Mammet", "Batyr", "Rahat", "Mekan", "Zafar", "Sohrat", "Abdy", "Guycmyrat", "Gurbanguly", "Serdar", "Amir", "Wezirgeldi", "Yhlas", "Ruslan", "Resul", "Arslanmyrat", "Dowletmyrat", "Altymyrat", "Wahyt", "Didar", "Myrat", "Mihail"
    ],
    Female: [
      "Annagul", "Ayna", "Aynabat", "Bahargul", "Didar", "Intizar", "Nyazik", "Rahat", "Sona", "Glalek", "Hatyja", "Jahan", "Keyik", "Maysa", "Ogulgerek", "Pamyk", "Tawus"
    ],
    Surname: [
      "Titow", "Yagsyyew", "Durdyyew", "Orazsahedow", "Annadurdyyew", "Seyitmuhammedow", "Amanow", "Hojayew", "Mingazow", "Magtymow", "Ylyasow", "Geldiyew", "Gurbani", "Asyrow", "Annaorazow", "Annagulyyew", "Basimow", "Soyunow", "Babajanow", "Saparow", "Japarow", "Babayew", "Orazmuhammedow"
    ]
  },
  Denmark: {
    Male: [
      "Kasper", "Frederik", "Jesper", "Simon", "Andreas", "Jens", "Mathias", "Henrik", "Peter", "Jonas", "Joachim", "Christian", "Lasse", "Thomas", "Pierre-Emile", "Daniel", "Martin", "Kasper", "Robert"
    ],
    Female: [
      "Amalie", "Pernille", "Stine", "Frederikke", "Rikke", "Marie", "Emma", "Josefine", "Nicoline", "Sanne", "Janni", "Nanna", "Sara", "Sofie", "Theresa", "Simone", "Rikke", "Kathrine", 
    ],
    Surname: [
      "Skov", "Gytkjaer", "Dolberg", "Cornelius", "Braithwaite", "Poulsen", "Norgaard", "Wass", "Hojbjerg", "Delaney", "Schone", "Eriksen", "Andersen", "Knudsen", "Ankersen", "Dalsgaard", "Jorgensen", "Larsen", "Christensen", "Kjaer", "Hansen", "Ronnow", "Schmeichel", "Abel", "Arnth", "Sevecke", "Boye", "Ballisager", "Eslund", "Holmgaard", "Svava", "Thrige", "Thomsen", "Troelsgaard", "Sorensen", "Hasbo", "Snerle", "Madsen", "Thogersen", "Harder", "Moller", "Thestrup"
    ]
  },
  Singapore: {
    Male: [
      "Hassan", "Zaiful", "Nazrul", "Zulqarnaen", "Fadli", "Anders", "Iqram", "Tajeli", "Harith", "Jordan", "Shahdan", "Yasir", "Sahil", "Anumanthan", "Firdaus", "Christopher", "Afiq", "Haiqal", "Gabriel", "Shawal", "Hafiz", "Hazzuwan", "Fareez", "Rezza", "Farhan"
    ],
    Female: [
      "Siti", "Raudhah", "Sitianiwati", "Stepahnie", "Venetia", "Dorcas", "Danelle", "Faradila", "Ernie", "Ho", "Nur", "Lim", "Mira", "Umairah", "Suria", "Dhaniyah", "Pamela", "Beatrice",
    ],
    Surname: [
      "Zulkifli", "Rezky", "Farhan", "Halim", "Nor", "Anuar", "Quak", "Pashia", "Noor", "van Huizen", "Kasman", "Kumar", "Suhaimi", "Hanapi", "Sulaiman", "Vestering", "Kanadi", "Salamat", "Rifqi", "Aplin", "Kamis", "Suzliman", "Nazari", "Nizam", "Sunny", "Kusumawatibte", "Tan Li Bin", "Kong Zi En", "Qasimah", "Rosnani", "Ruhaizat", "Vaatharaja", "Hamdan", "Ruzi", "Ruzana", "Li Xian", "Rosni", "Huixin", "Sulastri", "Rafidi", "Tan", "Chu", "Lim", "Dominguez", "Rosielin", "Nabilah"
    ]
  },
  Finland: {
    Male: [
      "LUkas", "Jesse", "Anssi", "Joona", "Jukka", "Paulus", "Thomas", "Albin", "Juha", "Sauli", "Daniel", "Leo", "Tim", "Rasmus", "Robin", "Pyry", "Glen", "Joni", "Simon", "Fredrik", "Robert", "Teemu", "Jasse", 
    ],
    Female: [
      "Paula", "Anna", "Tinja-Riikka", "Tuija", "Emma", "Natalia", "Tiia", "Elli", "Ria", "Adelina", "Olga", "Emmi", "Nora", "Julia", "Eveliina", "Iina", "Juliette", "Sanni", "Linda", "Kaisa", "Heidi"
    ],
    Surname: [
      "Karjalainen", "Tuominen", "Pukki", "Taylor", "Jensen", "Skrabb", "Kauko", "Kamara", "Soiri", "Lod", "Schuller", "Sparv", "Valsanen", "O'Shaughnessy", "Vaisanen", "Pirinen", "Granlund", "Lam", "Arajuuri", "Raitala", "Toivio", "Jaakkola", "Joronen", "Hradecky", "Myllyoja", "Tamminen", "Korpela", "Hyyrynen", "Koivisto", "Auvinen", "Kuikka", "Wasterlund", "Peltonen", "Pikkujamsa", "Oling", "Engman", "Ahtinen", "Alanen", "Heroum", "Tunturi", "Summanen", "Salmi", "Kemppi", "Danielsson", "Franssi", "Sallstrom", "Collin", "Kollanen"
    ]
  },
  Slovakia: { // => gender based surnames
    Male: [],
    Female: [
      "Maria", "Lucia", "Patricia", "Jana", "Petra", "Monika", "Michaela", "Terezia", "Alexandra", "Dominika", "Simona", "Klaudia", "Lenka", "Katarina", "Martina", "Maria", "Veronika", "Laura", "Andrea", "Kristina", "Valentina", "Diana", "Veronika", "Stanislava", "Ludmila"
    ],
    Surname: [
      "Panakov"
    ]
  },
  Norway: {
    Male: [],
    Female: [],
    Surname: []
  },
  "Republic Of The Congo": {
    Male: [],
    Female: [],
    Surname: []
  },
  Eritrea: {
    Male: [],
    Female: [],
    Surname: []
  },
  Palestine: { //=> Egypt
    Male: [],
    Female: [],
    Surname: []
  },
  "Costa Rica": { // => Mexico
    Male: [],
    Female: [],
    Surname: []
  },
  Ireland: { //=> USA
    Male: [],
    Female: [],
    Surname: []
  },
  Liberia: {
    Male: [],
    Female: [],
    Surname: []
  },
  "New Zealand": { //=> USA
    Male: [],
    Female: [],
    Surname: []
  },
  "Central African Republic": {
    Male: [],
    Female: [],
    Surname: []
  },
  Oman: { //=> Egypt
    Male: [],
    Female: [],
    Surname: []
  },
  Mauritania: {
    Male: [],
    Female: [],
    Surname: []
  },
  Croatia: {
    Male: [],
    Female: [],
    Surname: []
  },
  Kuwait: { //=> Egypt
    Male: [],
    Female: [],
    Surname: []
  },
  Panama: { // Mexico
    Male: [],
    Female: [],
    Surname: []
  },
  Moldova: {
    Male: [],
    Female: [],
    Surname: []
  },
  Georgia: {
    Male: [],
    Female: [],
    Surname: []
  },
  "Puerto Rico": { // Mexico
    Male: [],
    Female: [],
    Surname: []
  },
  "Bosnia and Herzegovina": {
    Male: [],
    Female: [],
    Surname: []
  },
  Uruguay: { //Mexico
    Male: [],
    Female: [],
    Surname: []
  },
  Mongolia: {
    Male: [],
    Female: [],
    Surname: []
  },
  Armenia: {
    Male: [],
    Female: [],
    Surname: []
  },
  Albania: {
    Male: [],
    Female: [],
    Surname: []
  },
  Jamaica: {
    Male: [],
    Female: [],
    Surname: []
  },
  Lithuania: {
    Male: [],
    Female: [],
    Surname: []
  },
  Qatar: { // Egypt
    Male: [],
    Female: [],
    Surname: []
  },
  Namibia: {
    Male: [],
    Female: [],
    Surname: []
  },
  Botswana: {
    Male: [],
    Female: [],
    Surname: []
  },
  Lesotho: {
    Male: [],
    Female: [],
    Surname: []
  },
  "The Gambia": {
    Male: [],
    Female: [],
    Surname: []
  },
  "North Macedonia": {
    Male: [],
    Female: [],
    Surname: []
  },
  Slovenia: {
    Male: [],
    Female: [],
    Surname: []
  },
  Gabon: {
    Male: [],
    Female: [],
    Surname: []
  },
  Latvia: {
    Male: [],
    Female: [],
    Surname: []
  },
  "Guinea Bissau": {
    Male: [],
    Female: [],
    Surname: []
  },
  Bahrain: { // Egypt
    Male: [],
    Female: [],
    Surname: []
  },
  "Trinidad & Tobago": {
    Male: [],
    Female: [],
    Surname: []
  },
  Swaziland: {
    Male: [],
    Female: [],
    Surname: []
  },
  Estonia: {
    Male: [],
    Female: [],
    Surname: []
  },
  "East Timor": {
    Male: [],
    Female: [],
    Surname: []
  },
  "Equatorial Guinea": {
    Male: [],
    Female: [],
    Surname: []
  },
  Mauritius: {
    Male: [],
    Female: [],
    Surname: []
  },
  Cyprus: {
    Male: [],
    Female: [],
    Surname: []
  },
}


export default names;
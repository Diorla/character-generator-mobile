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
  Uzbekistan: {
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
  // These names are sourced from celebrities (especially sportpersons) in each country
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
    Female: [],
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
    Male: [],
    Female: [],
    Surname: []
  },
  Mali: {
    Male: [],
    Female: [],
    Surname: []
  },
  Syria: { // => Egypt
    Male: [],
    Female: [],
    Surname: []
  },
  Kazakhstan: {
    Male: [],
    Female: [],
    Surname: []
  },
  Chile: { //=> Mexico
    Male: [],
    Female: [],
    Surname: []
  },
  Zambia: {
    Male: [],
    Female: [],
    Surname: []
  },
  Netherlands: {
    Male: [],
    Female: [],
    Surname: []
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
    Male: [],
    Female: [],
    Surname: []
  },
  Cambodia: {
    Male: [],
    Female: [],
    Surname: []
  },
  Senegal: {
    Male: [],
    Female: [],
    Surname: []
  },
  Chad: {
    Male: [],
    Female: [],
    Surname: []
  },
  Guinea: {
    Male: [],
    Female: [],
    Surname: []
  },
  "South Sudan": {
    Male: [],
    Female: [],
    Surname: []
  },
  Rwanda: {
    Male: [],
    Female: [],
    Surname: []
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
    Male: [],
    Female: [],
    Surname: []
  },
  Benin: {
    Male: [],
    Female: [],
    Surname: []
  },
  Greece: {
    Male: [],
    Female: [],
    Surname: []
  },
  Bolivia: {
    Male: [],
    Female: [],
    Surname: []
  },
  Haiti: {
    Male: [],
    Female: [],
    Surname: []
  },
  Burundi: {
    Male: [],
    Female: [],
    Surname: []
  },
  "Dominican Republic": { //=> Mexico
    Male: [],
    Female: [],
    Surname: []
  },
  "Czech Republic": {
    Male: [],
    Female: [],
    Surname: []
  },
  Portugal: { //=> Brazil
    Male: [],
    Female: [],
    Surname: []
  },
  Sweden: {
    Male: [],
    Female: [],
    Surname: []
  },
  Azerbaijan: {
    Male: [],
    Female: [],
    Surname: []
  },
  Hungary: {
    Male: [],
    Female: [],
    Surname: []
  },
  Jordan: { //=> Egypt
    Male: [],
    Female: [],
    Surname: []
  },
  Belarus: {
    Male: [],
    Female: [],
    Surname: []
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
    Male: [],
    Female: [],
    Surname: []
  },
  Serbia: {
    Male: [],
    Female: [],
    Surname: []
  },
  Austria: {
    Male: [],
    Female: [],
    Surname: []
  },
  Switzerland: {
    Male: [],
    Female: [],
    Surname: []
  },
  Israel: {
    Male: [],
    Female: [],
    Surname: []
  },
  "Papua New Guinea": {
    Male: [],
    Female: [],
    Surname: []
  },
  Togo: {
    Male: [],
    Female: [],
    Surname: []
  },
  "Sierra Leone": {
    Male: [],
    Female: [],
    Surname: []
  },
  Bulgaria: {
    Male: [],
    Female: [],
    Surname: []
  },
  Laos: {
    Male: [],
    Female: [],
    Surname: []
  },
  Paraguay: {
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
    Male: [],
    Female: [],
    Surname: []
  },
  Turkmenistan: {
    Male: [],
    Female: [],
    Surname: []
  },
  Denmark: {
    Male: [],
    Female: [],
    Surname: []
  },
  Singapore: {
    Male: [],
    Female: [],
    Surname: []
  },
  Finland: {
    Male: [],
    Female: [],
    Surname: []
  },
  Slovakia: {
    Male: [],
    Female: [],
    Surname: []
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
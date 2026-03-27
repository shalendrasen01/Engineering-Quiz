/* ════════════════════════════════════════════
   questions.js — Branch-wise Question Bank
   ════════════════════════════════════════════ */

const QUESTION_BANK = {

  /* ══════════════════════════════════════════
     💻 COMPUTER SCIENCE (CS)
     ══════════════════════════════════════════ */
  cs: [
    {
      type: 'mcq', cat: '💻 Programming', catBg: '#e3f2fd', catCl: '#0d47a1',
      text: 'What does "OOP" stand for in programming?',
      opts: ['Object Oriented Programming','Open Object Protocol','Ordered Output Processing','Object Optimization Program'],
      ans: 0,
      hint: 'It revolves around objects, classes, and inheritance 🏗️',
      exp: 'OOP stands for Object Oriented Programming — a paradigm based on objects containing data and methods.'
    },
    {
      type: 'mcq', cat: '🖥️ OS', catBg: '#ede7f6', catCl: '#311b92',
      text: 'Which scheduling algorithm gives the shortest average waiting time?',
      opts: ['FCFS','Round Robin','SJF (Shortest Job First)','Priority Scheduling'],
      ans: 2,
      hint: 'It picks the process with least burst time next ⏱️',
      exp: 'SJF (Shortest Job First) minimizes average waiting time when all jobs are available simultaneously.'
    },
    {
      type: 'mcq', cat: '🗄️ DBMS', catBg: '#fff3e0', catCl: '#bf360c',
      text: 'Which SQL command is used to remove a table from the database?',
      opts: ['DELETE','REMOVE','DROP','TRUNCATE'],
      ans: 2,
      hint: 'It removes the entire table structure along with data 🗑️',
      exp: 'DROP TABLE removes the entire table including its structure and data from the database.'
    },
    {
      type: 'mcq', cat: '🌐 Networking', catBg: '#e8f5e9', catCl: '#1b5e20',
      text: 'What does HTTP stand for?',
      opts: ['Hyper Text Transfer Protocol','High Traffic Transmission Protocol','Hyper Text Transport Package','Host Transfer Text Protocol'],
      ans: 0,
      hint: 'It is the foundation of data communication on the web 🌐',
      exp: 'HTTP stands for HyperText Transfer Protocol — used for transmitting web pages over the internet.'
    },
    {
      type: 'mcq', cat: '💻 Data Structures', catBg: '#fce4ec', catCl: '#880e4f',
      text: 'Which data structure uses LIFO (Last In, First Out) order?',
      opts: ['Queue','Array','Stack','Linked List'],
      ans: 2,
      hint: 'Think of a stack of plates 🍽️',
      exp: 'A Stack follows LIFO — the last element inserted is the first one to be removed.'
    },
    {
      type: 'mcq', cat: '🔐 Security', catBg: '#e8f5e9', catCl: '#1b5e20',
      text: 'What type of attack involves sending more data than a buffer can handle?',
      opts: ['SQL Injection','Buffer Overflow','Phishing','Man-in-the-Middle'],
      ans: 1,
      hint: 'It exploits memory boundaries to crash or hijack programs 💥',
      exp: 'Buffer Overflow occurs when more data is written to a buffer than it can hold, potentially allowing code execution.'
    },
    {
      type: 'mcq', cat: '🖥️ Computer Arch', catBg: '#ede7f6', catCl: '#311b92',
      text: 'How many bits does an IPv4 address consist of?',
      opts: ['16','32','64','128'],
      ans: 1,
      hint: 'Split into 4 octets separated by dots like 192.168.1.1 📍',
      exp: 'An IPv4 address is 32 bits long, written as four 8-bit octets (e.g., 192.168.0.1).'
    },
    {
      type: 'mcq', cat: '💻 Algorithms', catBg: '#e3f2fd', catCl: '#0d47a1',
      text: 'What is the time complexity of Binary Search?',
      opts: ['O(n)','O(n²)','O(log n)','O(n log n)'],
      ans: 2,
      hint: 'Each step halves the search space 📉',
      exp: 'Binary Search has O(log n) time complexity as it halves the search space with every comparison.'
    },
    {
      type: 'mcq', cat: '💻 Data Structures', catBg: '#fce4ec', catCl: '#880e4f',
      text: 'Which traversal of a Binary Search Tree gives elements in sorted order?',
      opts: ['Preorder','Postorder','Inorder','Level Order'],
      ans: 2,
      hint: 'Left → Root → Right gives ascending order 🌳',
      exp: 'Inorder traversal (Left → Root → Right) of a BST produces elements in sorted ascending order.'
    },
    {
      type: 'mcq', cat: '🌐 Networking', catBg: '#e8f5e9', catCl: '#1b5e20',
      text: 'Which layer of the OSI model is responsible for routing?',
      opts: ['Data Link Layer','Transport Layer','Network Layer','Physical Layer'],
      ans: 2,
      hint: 'IP addresses operate at this layer 📡',
      exp: 'The Network Layer (Layer 3) is responsible for logical addressing and routing packets between networks.'
    },
    {
      type: 'tf', cat: '🗄️ DBMS', catBg: '#fff3e0', catCl: '#bf360c',
      text: 'SQL is a procedural programming language.',
      ans: false,
      hint: 'Think about whether SQL describes "what" or "how" 🤔',
      exp: 'FALSE. SQL is a declarative language — you specify what data you want, not how to get it.'
    },
    {
      type: 'tf', cat: '🌐 Networking', catBg: '#e8f5e9', catCl: '#1b5e20',
      text: 'TCP guarantees delivery of packets in order.',
      ans: true,
      hint: 'It uses acknowledgements and sequencing 📦',
      exp: 'TRUE. TCP (Transmission Control Protocol) ensures ordered and reliable delivery of data packets.'
    },
    {
      type: 'tf', cat: '💻 Programming', catBg: '#e3f2fd', catCl: '#0d47a1',
      text: 'Python is a compiled language.',
      ans: false,
      hint: 'Think about whether code is converted before or during runtime 🐍',
      exp: 'FALSE. Python is an interpreted language — code is executed line by line by the Python interpreter.'
    },
    {
      type: 'tf', cat: '🖥️ OS', catBg: '#ede7f6', catCl: '#311b92',
      text: 'Deadlock can occur when four conditions: mutual exclusion, hold & wait, no preemption, and circular wait are all present.',
      ans: true,
      hint: 'These are called the Coffman conditions ⚰️',
      exp: 'TRUE. All four Coffman conditions must hold simultaneously for a deadlock to occur.'
    },
    {
      type: 'tf', cat: '🔐 Security', catBg: '#e8f5e9', catCl: '#1b5e20',
      text: 'A firewall can protect against insider threats within the same network.',
      ans: false,
      hint: 'Firewalls are primarily designed to monitor external traffic 🔥',
      exp: 'FALSE. Firewalls primarily control incoming/outgoing external traffic and cannot fully protect against internal threats.'
    }
  ],

  /* ══════════════════════════════════════════
     📡 ELECTRONICS & COMMUNICATION (EC)
     ══════════════════════════════════════════ */
  ec: [
    {
      type: 'mcq', cat: '📡 Signals', catBg: '#e3f2fd', catCl: '#0d47a1',
      text: 'What does AM stand for in radio broadcasting?',
      opts: ['Amplitude Modulation','Audio Management','Antenna Mode','Automatic Modulation'],
      ans: 0,
      hint: 'It varies the strength (amplitude) of the carrier wave 📻',
      exp: 'AM stands for Amplitude Modulation — the carrier wave amplitude is varied to carry information.'
    },
    {
      type: 'mcq', cat: '⚡ Analog Circuits', catBg: '#e8f5e9', catCl: '#1b5e20',
      text: 'Which transistor configuration provides the highest voltage gain?',
      opts: ['Common Base','Common Emitter','Common Collector','All equal'],
      ans: 1,
      hint: 'This configuration also inverts the output signal 🔄',
      exp: 'Common Emitter configuration gives the highest voltage gain and is widely used in amplifiers.'
    },
    {
      type: 'mcq', cat: '🔢 Digital Electronics', catBg: '#fff3e0', catCl: '#bf360c',
      text: 'What is the output of an AND gate when inputs are A=1 and B=0?',
      opts: ['0','1','Undefined','Depends on circuit'],
      ans: 0,
      hint: 'AND gate outputs 1 only when BOTH inputs are 1 🔗',
      exp: 'AND gate output is 0 whenever any input is 0. Only A=1 and B=1 gives output 1.'
    },
    {
      type: 'mcq', cat: '📡 Communication', catBg: '#ede7f6', catCl: '#311b92',
      text: 'Which multiplexing technique is used in optical fiber communication?',
      opts: ['TDM','FDM','WDM','CDM'],
      ans: 2,
      hint: 'Different wavelengths (colors) of light carry different signals 🌈',
      exp: 'WDM (Wavelength Division Multiplexing) sends multiple signals over optical fiber using different light wavelengths.'
    },
    {
      type: 'mcq', cat: '⚡ Microprocessors', catBg: '#fce4ec', catCl: '#880e4f',
      text: 'How many address lines does the 8085 microprocessor have?',
      opts: ['8','16','20','32'],
      ans: 2,
      hint: 'It can address 1 MB of memory space 💾',
      exp: 'The 8085 has 20 address lines, giving it a 2²⁰ = 1 MB addressable memory space.'
    },
    {
      type: 'mcq', cat: '🔢 Digital Systems', catBg: '#fff3e0', catCl: '#bf360c',
      text: 'What is 1010₂ in decimal?',
      opts: ['8','10','12','5'],
      ans: 1,
      hint: 'Calculate: 1×8 + 0×4 + 1×2 + 0×1 🔢',
      exp: '1010₂ = 1×8 + 0×4 + 1×2 + 0×1 = 8 + 0 + 2 + 0 = 10₁₀'
    },
    {
      type: 'mcq', cat: '⚡ Control Systems', catBg: '#ede7f6', catCl: '#311b92',
      text: 'Which system has feedback from output to input?',
      opts: ['Open Loop','Closed Loop','Feed Forward','Combinational'],
      ans: 1,
      hint: 'The output is measured and fed back to correct errors 🔁',
      exp: 'Closed Loop (feedback) systems feed the output back to the input to reduce error and improve accuracy.'
    },
    {
      type: 'mcq', cat: '⚡ Analog Circuits', catBg: '#e8f5e9', catCl: '#1b5e20',
      text: 'Which type of filter passes only low frequencies?',
      opts: ['High Pass Filter','Band Pass Filter','Low Pass Filter','Notch Filter'],
      ans: 2,
      hint: 'It allows signals below the cutoff frequency to pass 📉',
      exp: 'A Low Pass Filter allows frequencies below the cutoff frequency to pass and attenuates higher frequencies.'
    },
    {
      type: 'mcq', cat: '📡 Antennas', catBg: '#e8f5e9', catCl: '#1b5e20',
      text: 'What is the unit of frequency?',
      opts: ['Watt','Hertz','Volt','Ampere'],
      ans: 1,
      hint: 'Named after German physicist Heinrich Hertz 🌊',
      exp: 'Frequency is measured in Hertz (Hz), representing cycles per second.'
    },
    {
      type: 'mcq', cat: '📡 Communication', catBg: '#ede7f6', catCl: '#311b92',
      text: 'What does SNR stand for in communication systems?',
      opts: ['Signal Noise Ratio','System Network Ratio','Signal to Noise Ratio','Serial Number Register'],
      ans: 2,
      hint: 'Higher is always better in communication 📶',
      exp: 'SNR (Signal to Noise Ratio) measures signal strength relative to background noise — higher SNR means cleaner signal.'
    },
    {
      type: 'tf', cat: '📡 Signals', catBg: '#e3f2fd', catCl: '#0d47a1',
      text: 'FM has better noise immunity than AM.',
      ans: true,
      hint: 'Think about what gets distorted by noise — amplitude or frequency? 📻',
      exp: 'TRUE. FM is more resistant to noise because noise mainly affects amplitude, and FM encodes information in frequency.'
    },
    {
      type: 'tf', cat: '🔢 Digital Electronics', catBg: '#fff3e0', catCl: '#bf360c',
      text: 'A NAND gate is a universal gate.',
      ans: true,
      hint: 'Any logic gate can be built using only NAND gates 🔧',
      exp: 'TRUE. NAND gates are universal — any Boolean function can be implemented using only NAND gates.'
    },
    {
      type: 'tf', cat: '⚡ Circuits', catBg: '#e8f5e9', catCl: '#1b5e20',
      text: 'In a series RLC circuit at resonance, impedance is minimum.',
      ans: true,
      hint: 'At resonance, XL = XC, so they cancel out ⚡',
      exp: 'TRUE. At resonance in a series RLC circuit, XL = XC and they cancel, leaving only resistance (minimum impedance).'
    },
    {
      type: 'tf', cat: '📡 Communication', catBg: '#ede7f6', catCl: '#311b92',
      text: '5G uses lower frequencies than 4G LTE for better building penetration.',
      ans: false,
      hint: 'Speed and frequency are related — higher speed needs higher frequency 📶',
      exp: 'FALSE. 5G uses much higher frequencies (mmWave bands) than 4G, which actually results in poorer building penetration.'
    },
    {
      type: 'tf', cat: '⚡ Microprocessors', catBg: '#fce4ec', catCl: '#880e4f',
      text: 'The 8051 microcontroller has an internal ROM.',
      ans: true,
      hint: 'That is what makes it a microcontroller, not just a microprocessor 💡',
      exp: 'TRUE. The 8051 has internal ROM (4KB), RAM (128 bytes), timers, and I/O ports — making it a complete microcontroller.'
    }
  ],

  /* ══════════════════════════════════════════
     ⚙️ MECHANICAL ENGINEERING (ME)
     ══════════════════════════════════════════ */
  me: [
    {
      type: 'mcq', cat: '⚙️ Thermodynamics', catBg: '#fff3e0', catCl: '#bf360c',
      text: 'Which thermodynamic cycle is used in diesel engines?',
      opts: ['Otto Cycle','Rankine Cycle','Diesel Cycle','Brayton Cycle'],
      ans: 2,
      hint: 'Named after Rudolf Diesel — compression ignition engine 🚛',
      exp: 'Diesel engines operate on the Diesel Cycle, which uses compression ignition rather than spark ignition.'
    },
    {
      type: 'mcq', cat: '🔩 Fluid Mechanics', catBg: '#e3f2fd', catCl: '#0d47a1',
      text: "What does Bernoulli's principle state?",
      opts: ['Higher velocity means higher pressure','Higher velocity means lower pressure','Pressure is constant in a fluid','Velocity is constant in a pipe'],
      ans: 1,
      hint: 'It explains why airplane wings generate lift 🛩️',
      exp: "Bernoulli's principle: where fluid velocity increases, pressure decreases — the basis of lift in aircraft wings."
    },
    {
      type: 'mcq', cat: '⚙️ Manufacturing', catBg: '#e8f5e9', catCl: '#1b5e20',
      text: 'What is the purpose of annealing in metallurgy?',
      opts: ['Harden the metal','Soften and relieve internal stresses','Increase brittleness','Add carbon content'],
      ans: 1,
      hint: 'Metal is heated then cooled slowly 🔥',
      exp: 'Annealing involves heating metal to a high temperature and cooling it slowly to soften it and relieve internal stresses.'
    },
    {
      type: 'mcq', cat: '🔩 Strength of Materials', catBg: '#ede7f6', catCl: '#311b92',
      text: 'What is the ratio of stress to strain in the elastic range called?',
      opts: ["Poisson's Ratio","Young's Modulus","Bulk Modulus","Shear Modulus"],
      ans: 1,
      hint: 'Named after Thomas Young — a measure of material stiffness 📐',
      exp: "Young's Modulus (Elastic Modulus) is the ratio of stress to strain within the elastic limit of a material."
    },
    {
      type: 'mcq', cat: '⚙️ Machine Design', catBg: '#fce4ec', catCl: '#880e4f',
      text: 'Which type of gear is used to transmit motion between parallel shafts?',
      opts: ['Bevel Gear','Worm Gear','Spur Gear','Helical Gear (crossed)'],
      ans: 2,
      hint: 'The simplest and most common gear type 🔧',
      exp: 'Spur gears have straight teeth and transmit motion between parallel shafts — the most common gear type.'
    },
    {
      type: 'mcq', cat: '🔩 Thermodynamics', catBg: '#fff3e0', catCl: '#bf360c',
      text: 'The first law of thermodynamics is based on conservation of:',
      opts: ['Mass','Energy','Momentum','Temperature'],
      ans: 1,
      hint: 'Energy can be neither created nor destroyed 💡',
      exp: 'The First Law of Thermodynamics is based on conservation of energy — energy can only be converted from one form to another.'
    },
    {
      type: 'mcq', cat: '⚙️ Fluid Mechanics', catBg: '#e3f2fd', catCl: '#0d47a1',
      text: 'Reynolds number is used to predict:',
      opts: ['Heat transfer rate','Nature of fluid flow (laminar/turbulent)','Pressure drop','Fluid viscosity'],
      ans: 1,
      hint: 'Low Re = smooth flow, High Re = chaotic flow 🌊',
      exp: 'Reynolds number determines whether fluid flow is laminar or turbulent. Low Re = laminar; high Re = turbulent.'
    },
    {
      type: 'mcq', cat: '⚙️ Manufacturing', catBg: '#e8f5e9', catCl: '#1b5e20',
      text: 'What does CNC stand for in manufacturing?',
      opts: ['Computer Numerical Control','Controlled Numeric Circuit','Combined Numeric Computing','Computer Network Control'],
      ans: 0,
      hint: 'These machines use coded programs to control tool movement 🤖',
      exp: 'CNC stands for Computer Numerical Control — machines that use programmed instructions to control manufacturing tools.'
    },
    {
      type: 'mcq', cat: '🔩 Strength of Materials', catBg: '#ede7f6', catCl: '#311b92',
      text: 'A cantilever beam is fixed at:',
      opts: ['Both ends','One end only','Middle','No end — simply supported'],
      ans: 1,
      hint: 'One end is free, the other is embedded into a wall 🏗️',
      exp: 'A cantilever beam is fixed at one end and free at the other — like a diving board or balcony.'
    },
    {
      type: 'mcq', cat: '⚙️ Machine Design', catBg: '#fce4ec', catCl: '#880e4f',
      text: 'Which material is best suited for making springs?',
      opts: ['Cast Iron','High Carbon Steel','Aluminum','Copper'],
      ans: 1,
      hint: 'Springs need high elasticity and good fatigue resistance 🔩',
      exp: 'High Carbon Steel is ideal for springs due to its high yield strength, elasticity, and fatigue resistance.'
    },
    {
      type: 'tf', cat: '🔩 Thermodynamics', catBg: '#fff3e0', catCl: '#bf360c',
      text: 'Entropy of an isolated system always increases in a natural process.',
      ans: true,
      hint: 'This is the second law of thermodynamics 🌡️',
      exp: 'TRUE. The Second Law of Thermodynamics states that entropy of an isolated system always increases (or stays constant).'
    },
    {
      type: 'tf', cat: '⚙️ Materials', catBg: '#e8f5e9', catCl: '#1b5e20',
      text: 'Cast iron has higher tensile strength than mild steel.',
      ans: false,
      hint: 'Cast iron is brittle — think about what that means for tensile strength 💪',
      exp: 'FALSE. Mild steel has much higher tensile strength than cast iron. Cast iron is strong in compression but brittle in tension.'
    },
    {
      type: 'tf', cat: '🔩 Fluid Mechanics', catBg: '#e3f2fd', catCl: '#0d47a1',
      text: 'Viscosity of liquids increases with temperature.',
      ans: false,
      hint: 'Think about how honey behaves when heated 🍯',
      exp: 'FALSE. For liquids, viscosity DECREASES with temperature (they flow more easily when warm). Gases behave oppositely.'
    },
    {
      type: 'tf', cat: '⚙️ Thermodynamics', catBg: '#fff3e0', catCl: '#bf360c',
      text: 'In an isobaric process, pressure remains constant.',
      ans: true,
      hint: '"Iso" means equal/constant, "baric" refers to pressure 📊',
      exp: 'TRUE. An isobaric process occurs at constant pressure (e.g., boiling water at atmospheric pressure).'
    },
    {
      type: 'tf', cat: '⚙️ Manufacturing', catBg: '#e8f5e9', catCl: '#1b5e20',
      text: 'Turning is a machining operation performed on a lathe.',
      ans: true,
      hint: 'The workpiece rotates while the tool removes material 🔄',
      exp: 'TRUE. Turning is performed on a lathe — the workpiece rotates and a cutting tool removes material to create cylindrical shapes.'
    }
  ],

  /* ══════════════════════════════════════════
     🏗️ CIVIL ENGINEERING (CE)
     ══════════════════════════════════════════ */
  ce: [
    {
      type: 'mcq', cat: '🏗️ Structures', catBg: '#e3f2fd', catCl: '#0d47a1',
      text: 'What type of foundation is most suitable for soft and weak soils?',
      opts: ['Strip Foundation','Isolated Footing','Raft Foundation','Pile Foundation'],
      ans: 3,
      hint: 'It transfers load deep into stronger soil or rock 🏢',
      exp: 'Pile Foundation transfers loads deep to stronger strata, making it ideal for weak or loose surface soils.'
    },
    {
      type: 'mcq', cat: '🧱 Concrete', catBg: '#fff3e0', catCl: '#bf360c',
      text: 'What is the standard water-cement ratio for M25 grade concrete?',
      opts: ['0.65','0.50','0.40','0.45'],
      ans: 3,
      hint: 'Lower W/C ratio = stronger concrete 💧',
      exp: 'For M25 grade concrete, the typical water-cement ratio is 0.45 as per IS code recommendations.'
    },
    {
      type: 'mcq', cat: '🌊 Hydraulics', catBg: '#e8f5e9', catCl: '#1b5e20',
      text: 'Which law states that flow velocity is proportional to hydraulic gradient in porous media?',
      opts: ["Bernoulli's Law","Darcy's Law","Manning's Law","Newton's Law"],
      ans: 1,
      hint: 'Used to calculate groundwater flow through soil 🌱',
      exp: "Darcy's Law relates flow velocity to hydraulic gradient in porous media: v = ki, where k is hydraulic conductivity."
    },
    {
      type: 'mcq', cat: '🏗️ Survey', catBg: '#ede7f6', catCl: '#311b92',
      text: 'Which instrument is used for measuring horizontal and vertical angles?',
      opts: ['Level','Theodolite','Planimeter','Staff'],
      ans: 1,
      hint: 'It is a precision optical instrument used in surveying 📐',
      exp: 'A Theodolite measures both horizontal and vertical angles precisely — a fundamental surveying instrument.'
    },
    {
      type: 'mcq', cat: '🧱 Materials', catBg: '#fce4ec', catCl: '#880e4f',
      text: 'What is the compressive strength of M20 concrete?',
      opts: ['15 MPa','20 MPa','25 MPa','30 MPa'],
      ans: 1,
      hint: 'The number in the grade represents the strength in N/mm² 💪',
      exp: 'M20 concrete has a characteristic compressive strength of 20 MPa (N/mm²), tested on 150mm cubes after 28 days.'
    },
    {
      type: 'mcq', cat: '🌊 Hydraulics', catBg: '#e8f5e9', catCl: '#1b5e20',
      text: "Manning's formula is used to calculate:",
      opts: ['Groundwater flow','Open channel flow velocity','Pipe pressure loss','Rainfall intensity'],
      ans: 1,
      hint: 'It relates velocity to channel slope and roughness 📏',
      exp: "Manning's formula calculates velocity of flow in open channels based on hydraulic radius, slope, and roughness."
    },
    {
      type: 'mcq', cat: '🏗️ Soil Mechanics', catBg: '#e3f2fd', catCl: '#0d47a1',
      text: 'Which test is used to determine the bearing capacity of soil in-situ?',
      opts: ['Atterberg Limit Test','Proctor Compaction Test','Standard Penetration Test (SPT)','Sieve Analysis'],
      ans: 2,
      hint: 'A split-spoon sampler is driven into the soil 🔨',
      exp: 'The Standard Penetration Test (SPT) measures the resistance of soil to penetration, used to estimate bearing capacity.'
    },
    {
      type: 'mcq', cat: '🧱 Concrete Tech', catBg: '#fff3e0', catCl: '#bf360c',
      text: 'What is the role of reinforcement in RCC?',
      opts: ['Resist compressive stress','Resist tensile stress','Resist shear only','Increase weight'],
      ans: 1,
      hint: 'Concrete is strong in compression, steel handles the other stress 💪',
      exp: 'In RCC, steel reinforcement resists tensile stresses because concrete is weak in tension but strong in compression.'
    },
    {
      type: 'mcq', cat: '🏗️ Structures', catBg: '#e3f2fd', catCl: '#0d47a1',
      text: 'What is the minimum clear cover for reinforcement in a column?',
      opts: ['15 mm','25 mm','40 mm','50 mm'],
      ans: 2,
      hint: 'IS 456 specifies 40 mm for columns in normal conditions 📏',
      exp: 'As per IS 456, the minimum clear cover for reinforcement in columns is 40 mm for normal exposure conditions.'
    },
    {
      type: 'mcq', cat: '🌊 Environmental Engg', catBg: '#e8f5e9', catCl: '#1b5e20',
      text: 'BOD stands for:',
      opts: ['Biological Oxygen Demand','Basic Oxygen Deficiency','Biochemical Oxygen Demand','Both A and C'],
      ans: 3,
      hint: 'It measures how much oxygen microbes use to break down organic matter 🌿',
      exp: 'BOD (Biochemical Oxygen Demand or Biological Oxygen Demand) measures oxygen consumed by microbes in breaking down organics in water.'
    },
    {
      type: 'tf', cat: '🌊 Hydraulics', catBg: '#e8f5e9', catCl: '#1b5e20',
      text: 'The critical flow in an open channel occurs when the Froude number equals 1.',
      ans: true,
      hint: 'Froude number < 1 = subcritical, > 1 = supercritical 🌊',
      exp: 'TRUE. Critical flow occurs when Fr = 1, which represents the transition between subcritical (Fr<1) and supercritical (Fr>1) flow.'
    },
    {
      type: 'tf', cat: '🏗️ Structures', catBg: '#e3f2fd', catCl: '#0d47a1',
      text: 'A simply supported beam has zero bending moment at the supports.',
      ans: true,
      hint: 'At pin/roller supports, the beam is free to rotate 📐',
      exp: 'TRUE. A simply supported beam has zero bending moment at both supports because they offer only vertical reactions.'
    },
    {
      type: 'tf', cat: '🧱 Materials', catBg: '#fce4ec', catCl: '#880e4f',
      text: 'Portland cement is named after a British island.',
      ans: true,
      hint: 'Joseph Aspdin named it after its resemblance to Portland stone 🪨',
      exp: 'TRUE. Joseph Aspdin named Portland cement after its resemblance in colour to limestone quarried in Portland, Dorset, England.'
    },
    {
      type: 'tf', cat: '🏗️ Soil Mechanics', catBg: '#e3f2fd', catCl: '#0d47a1',
      text: 'Clay has a higher permeability than sand.',
      ans: false,
      hint: 'Think about which soil water flows through more easily 💧',
      exp: 'FALSE. Sand has much higher permeability than clay. Clay particles are very fine and pack tightly, greatly restricting water flow.'
    },
    {
      type: 'tf', cat: '🌊 Hydraulics', catBg: '#e8f5e9', catCl: '#1b5e20',
      text: 'Hydraulic gradient is the ratio of head loss to pipe length.',
      ans: true,
      hint: 'It determines how steeply the piezometric surface drops 📉',
      exp: 'TRUE. Hydraulic gradient = head loss / pipe length. It drives flow from high energy to low energy zones.'
    }
  ],

  /* ══════════════════════════════════════════
     ⚡ ELECTRICAL ENGINEERING (EE)
     ══════════════════════════════════════════ */
  ee: [
    {
      type: 'mcq', cat: '⚡ Circuits', catBg: '#fff3e0', catCl: '#bf360c',
      text: 'What is the unit of electrical resistance?',
      opts: ['Volt','Ampere','Ohm','Watt'],
      ans: 2,
      hint: 'Named after German physicist Georg Ohm ⚡',
      exp: "Resistance is measured in Ohms (Ω), named after Georg Ohm who formulated Ohm's Law."
    },
    {
      type: 'mcq', cat: '🔌 Machines', catBg: '#e3f2fd', catCl: '#0d47a1',
      text: 'Which type of motor is used in ceiling fans?',
      opts: ['DC Shunt Motor','Three-Phase Induction Motor','Single-Phase Induction Motor','Synchronous Motor'],
      ans: 2,
      hint: 'It runs on single-phase AC supply available at home 🏠',
      exp: 'Ceiling fans use Single-Phase Induction Motors — specifically capacitor start/run types — suitable for single-phase AC supply.'
    },
    {
      type: 'mcq', cat: '⚡ Power Systems', catBg: '#e8f5e9', catCl: '#1b5e20',
      text: 'Why is electrical power transmitted at high voltage over long distances?',
      opts: ['To increase current','To reduce power losses','To increase power','To make it cheaper to generate'],
      ans: 1,
      hint: 'P = I²R — higher voltage means lower current for same power 📉',
      exp: 'High voltage transmission reduces current (P=VI), which dramatically cuts resistive losses (P_loss = I²R) over long distances.'
    },
    {
      type: 'mcq', cat: '🔌 Transformers', catBg: '#ede7f6', catCl: '#311b92',
      text: 'What is the core of a transformer made of?',
      opts: ['Solid Iron','Laminated Silicon Steel','Copper','Aluminium'],
      ans: 1,
      hint: 'Lamination reduces eddy current losses 🔄',
      exp: 'Transformer cores use laminated silicon steel to reduce eddy current losses and improve magnetic permeability.'
    },
    {
      type: 'mcq', cat: '⚡ Circuits', catBg: '#fff3e0', catCl: '#bf360c',
      text: 'In a purely inductive AC circuit, voltage leads current by:',
      opts: ['0°','45°','90°','180°'],
      ans: 2,
      hint: 'ELI the ICE man — Inductor: E leads I 📐',
      exp: 'In a purely inductive circuit, voltage leads current by 90° because inductors oppose changes in current.'
    },
    {
      type: 'mcq', cat: '🔌 Power Electronics', catBg: '#fce4ec', catCl: '#880e4f',
      text: 'What does a rectifier do?',
      opts: ['Converts AC to DC','Converts DC to AC','Steps up voltage','Stores electrical energy'],
      ans: 0,
      hint: 'Used in every power supply adapter 🔌',
      exp: 'A rectifier converts Alternating Current (AC) to Direct Current (DC) using diodes.'
    },
    {
      type: 'mcq', cat: '⚡ Power Systems', catBg: '#e8f5e9', catCl: '#1b5e20',
      text: 'Power factor of a purely resistive circuit is:',
      opts: ['0','0.5','1','Undefined'],
      ans: 2,
      hint: 'Voltage and current are in phase in a purely resistive circuit ⚡',
      exp: 'Power factor = cos φ. In a purely resistive circuit, φ = 0°, so power factor = cos 0° = 1 (unity power factor).'
    },
    {
      type: 'mcq', cat: '🔌 Machines', catBg: '#e3f2fd', catCl: '#0d47a1',
      text: 'The speed of a synchronous motor depends on:',
      opts: ['Load only','Supply frequency only','Voltage only','Both load and voltage'],
      ans: 1,
      hint: 'It runs exactly at synchronous speed determined by frequency and poles 🔄',
      exp: 'Synchronous motor speed = 120f/P — it depends only on supply frequency and number of poles, not on load.'
    },
    {
      type: 'mcq', cat: '⚡ Circuits', catBg: '#fff3e0', catCl: '#bf360c',
      text: 'What is the resonant frequency of an LC circuit?',
      opts: ['f = 1/(2π√LC)','f = 2π√LC','f = LC/2π','f = √(LC)/2π'],
      ans: 0,
      hint: 'At resonance, XL = XC — they cancel each other 🌊',
      exp: 'Resonant frequency f = 1/(2π√LC) — at this frequency, inductive and capacitive reactances cancel out.'
    },
    {
      type: 'mcq', cat: '⚡ Power Systems', catBg: '#e8f5e9', catCl: '#1b5e20',
      text: 'Which protection device is used to protect transformers from overloads?',
      opts: ['Circuit Breaker','Fuse','Buchholz Relay','Lightning Arrester'],
      ans: 2,
      hint: 'It detects gas produced by internal faults in oil-filled transformers 🛡️',
      exp: 'Buchholz Relay is used for internal fault protection of oil-filled transformers — it detects gas produced by fault arcs.'
    },
    {
      type: 'tf', cat: '⚡ Circuits', catBg: '#fff3e0', catCl: '#bf360c',
      text: "Kirchhoff's Current Law states that the sum of currents entering a node equals sum of currents leaving.",
      ans: true,
      hint: 'It is based on conservation of electric charge 🔋',
      exp: 'TRUE. KCL is based on conservation of charge — all currents entering a junction must equal currents leaving.'
    },
    {
      type: 'tf', cat: '🔌 Transformers', catBg: '#ede7f6', catCl: '#311b92',
      text: 'An ideal transformer has 100% efficiency.',
      ans: true,
      hint: 'Ideal means no core losses, copper losses, or leakage 💡',
      exp: 'TRUE. An ideal transformer has no losses (no resistance, no core loss, no leakage flux), so efficiency = 100%.'
    },
    {
      type: 'tf', cat: '⚡ Power Systems', catBg: '#e8f5e9', catCl: '#1b5e20',
      text: 'Leading power factor is caused by capacitive loads.',
      ans: true,
      hint: 'ICE — current leads voltage in capacitive circuits 🔋',
      exp: 'TRUE. Capacitive loads cause leading power factor — current leads voltage (opposite to inductive/lagging loads).'
    },
    {
      type: 'tf', cat: '🔌 Power Electronics', catBg: '#fce4ec', catCl: '#880e4f',
      text: 'A Zener diode operates in forward bias for voltage regulation.',
      ans: false,
      hint: 'Zener diodes are special — they are designed for reverse breakdown 🔌',
      exp: 'FALSE. Zener diodes are used in REVERSE bias for voltage regulation — they allow controlled reverse breakdown (Zener breakdown).'
    },
    {
      type: 'tf', cat: '🔌 Machines', catBg: '#e3f2fd', catCl: '#0d47a1',
      text: 'Slip in an induction motor is zero at synchronous speed.',
      ans: true,
      hint: 'Slip = (Ns - Nr)/Ns — when Nr = Ns, slip = 0 🔄',
      exp: 'TRUE. Slip = (Ns - Nr)/Ns. When rotor speed equals synchronous speed, slip = 0. However, this is only theoretical.'
    }
  ],

  /* ══════════════════════════════════════════
     🧪 CHEMICAL ENGINEERING (CH)
     ══════════════════════════════════════════ */
  ch: [
    {
      type: 'mcq', cat: '🧪 Thermodynamics', catBg: '#e8f5e9', catCl: '#1b5e20',
      text: 'What is the ideal gas law equation?',
      opts: ['PV = nRT','PV = mRT','PV = nR/T','P/V = nRT'],
      ans: 0,
      hint: 'P = pressure, V = volume, n = moles, R = gas constant, T = temperature 🌡️',
      exp: 'The ideal gas law PV = nRT relates pressure, volume, moles of gas, and absolute temperature.'
    },
    {
      type: 'mcq', cat: '🔬 Reaction Engg', catBg: '#ede7f6', catCl: '#311b92',
      text: 'Which reactor operates at constant volume?',
      opts: ['CSTR','PFR','Batch Reactor','Semi-Batch Reactor'],
      ans: 2,
      hint: 'No inflow or outflow during reaction — all charged at once 🧪',
      exp: 'A Batch Reactor operates at constant volume with no continuous inflow/outflow. Reactants are charged and products removed later.'
    },
    {
      type: 'mcq', cat: '🧪 Fluid Mechanics', catBg: '#e3f2fd', catCl: '#0d47a1',
      text: 'The Navier-Stokes equations govern:',
      opts: ['Heat conduction','Viscous fluid flow','Mass transfer','Chemical kinetics'],
      ans: 1,
      hint: 'Fundamental equations of fluid dynamics for viscous flows 🌊',
      exp: 'Navier-Stokes equations are the fundamental equations governing the motion of viscous fluids.'
    },
    {
      type: 'mcq', cat: '⚗️ Mass Transfer', catBg: '#fff3e0', catCl: '#bf360c',
      text: 'Which law describes molecular diffusion of mass?',
      opts: ["Fourier's Law","Newton's Law","Fick's Law","Darcy's Law"],
      ans: 2,
      hint: 'Mass flux is proportional to concentration gradient 📊',
      exp: "Fick's Law of Diffusion states that mass flux is proportional to the concentration gradient — similar to Fourier's Law for heat."
    },
    {
      type: 'mcq', cat: '🧪 Heat Transfer', catBg: '#e8f5e9', catCl: '#1b5e20',
      text: 'Which heat transfer mode does not require a medium?',
      opts: ['Conduction','Convection','Radiation','All three require medium'],
      ans: 2,
      hint: 'The Sun heats Earth through this method across the vacuum of space ☀️',
      exp: 'Radiation (electromagnetic waves) transfers heat without any medium — this is how the Sun heats Earth through space.'
    },
    {
      type: 'mcq', cat: '🔬 Chemical Kinetics', catBg: '#ede7f6', catCl: '#311b92',
      text: 'Activation energy in a chemical reaction is lowered by:',
      opts: ['Increasing temperature','Adding a catalyst','Increasing concentration','Increasing pressure'],
      ans: 1,
      hint: 'It provides an alternative reaction pathway with lower energy 🧪',
      exp: 'A catalyst lowers activation energy by providing an alternative reaction pathway, increasing reaction rate without being consumed.'
    },
    {
      type: 'mcq', cat: '⚗️ Separations', catBg: '#fff3e0', catCl: '#bf360c',
      text: 'Which separation technique uses differences in boiling points?',
      opts: ['Extraction','Distillation','Absorption','Adsorption'],
      ans: 1,
      hint: 'Used to separate crude oil into petrol, diesel, kerosene etc. 🛢️',
      exp: 'Distillation separates mixtures based on differences in boiling points — widely used in petroleum refining and chemical plants.'
    },
    {
      type: 'mcq', cat: '🧪 Thermodynamics', catBg: '#e8f5e9', catCl: '#1b5e20',
      text: 'The fugacity of an ideal gas equals its:',
      opts: ['Activity','Chemical potential','Partial pressure','Mole fraction'],
      ans: 2,
      hint: 'For ideal gases, the correction factor (fugacity coefficient) is 1 📊',
      exp: 'For an ideal gas, fugacity equals its partial pressure because the fugacity coefficient equals 1.'
    },
    {
      type: 'mcq', cat: '⚗️ Separations', catBg: '#fff3e0', catCl: '#bf360c',
      text: "Which law relates vapor-liquid equilibrium for ideal solutions?",
      opts: ["Henry's Law","Dalton's Law","Raoult's Law","Fick's Law"],
      ans: 2,
      hint: 'Partial pressure of a component equals its mole fraction times its vapor pressure 💧',
      exp: "Raoult's Law: partial pressure of each component = mole fraction × pure component vapor pressure. Applies to ideal solutions."
    },
    {
      type: 'mcq', cat: '🧪 Heat Transfer', catBg: '#e8f5e9', catCl: '#1b5e20',
      text: 'What is the dimensionless number that characterizes the ratio of convective to conductive heat transfer?',
      opts: ['Reynolds Number','Prandtl Number','Nusselt Number','Grashof Number'],
      ans: 2,
      hint: 'Nu = hL/k — higher Nu means convection dominates 🌡️',
      exp: 'Nusselt Number (Nu = hL/k) is the ratio of convective to conductive heat transfer — key in heat exchanger design.'
    },
    {
      type: 'tf', cat: '🔬 Reaction Engg', catBg: '#ede7f6', catCl: '#311b92',
      text: 'CSTR (Continuous Stirred Tank Reactor) is assumed to be perfectly mixed.',
      ans: true,
      hint: 'The composition inside equals the exit composition 🌀',
      exp: 'TRUE. An ideal CSTR assumes perfect mixing, so concentration inside the reactor equals the outlet concentration.'
    },
    {
      type: 'tf', cat: '🧪 Thermodynamics', catBg: '#e8f5e9', catCl: '#1b5e20',
      text: 'At equilibrium, the Gibbs free energy change of a reaction is zero.',
      ans: true,
      hint: 'At equilibrium, ΔG = 0 and the system has minimum Gibbs energy ⚖️',
      exp: 'TRUE. At chemical equilibrium, ΔG = 0. The system has minimum Gibbs free energy and forward/reverse rates are equal.'
    },
    {
      type: 'tf', cat: '⚗️ Mass Transfer', catBg: '#fff3e0', catCl: '#bf360c',
      text: 'Increasing temperature always increases the rate of a chemical reaction.',
      ans: false,
      hint: 'Think about enzyme-catalyzed reactions or reversible exothermic reactions 🌡️',
      exp: 'FALSE. For enzyme-catalyzed reactions, very high temperatures denature enzymes. For reversible exothermic reactions, higher temperature shifts equilibrium backward.'
    },
    {
      type: 'tf', cat: '🧪 Fluid Mechanics', catBg: '#e3f2fd', catCl: '#0d47a1',
      text: 'Reynolds number above 4000 indicates turbulent flow in a pipe.',
      ans: true,
      hint: 'Re < 2300 = laminar, 2300–4000 = transitional, > 4000 = turbulent 🌊',
      exp: 'TRUE. In pipe flow: Re < 2300 = laminar, 2300–4000 = transitional, Re > 4000 = fully turbulent flow.'
    },
    {
      type: 'tf', cat: '🔬 Chemical Kinetics', catBg: '#ede7f6', catCl: '#311b92',
      text: 'A zero-order reaction rate is independent of reactant concentration.',
      ans: true,
      hint: 'Rate = k — only depends on rate constant k ⚗️',
      exp: 'TRUE. For a zero-order reaction, rate = k (constant). The rate does not depend on the concentration of reactants.'
    }
  ]

}; // end QUESTION_BANK

/* Branch display labels */
const BRANCH_LABELS = {
  cs: '💻 Computer Science',
  ec: '📡 Electronics & Comm',
  me: '⚙️ Mechanical',
  ce: '🏗️ Civil Engineering',
  ee: '⚡ Electrical',
  ch: '🧪 Chemical'
};
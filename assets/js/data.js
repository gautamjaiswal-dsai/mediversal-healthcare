/* ============================================================
   STRUCTURED CONTENT — mirrors the shape of data a FastAPI
   /api/v1/* backend would return. Only verified names/locations
   from the project brief are used; nothing is fabricated.
   In production this file is replaced by real API calls
   (see /backend/app/api/* in the architecture doc).
   ============================================================ */

const HOSPITALS = [
  {
    id: "multi-super-speciality",
    name: "Mediversal Multi Super Speciality Hospital",
    slug: "multi-super-speciality-hospital",
    description: "Advanced tertiary and multi-speciality healthcare.",
    location: "Kankarbagh, Patna",
    address: "Doctors' Colony, Kankarbagh, Patna – 800 020, Bihar",
    image: "https://images.unsplash.com/photo-1587351021355-a479a299d2f9?q=80&w=1200&auto=format&fit=crop",
    icon: "hospital"
  },
  {
    id: "maatri",
    name: "Mediversal Maatri",
    slug: "maatri",
    description: "Specialized maternal and child healthcare.",
    location: "Rajendra Nagar, Patna",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop",
    icon: "baby"
  },
  {
    id: "health-studio",
    name: "Mediversal Health Studio",
    slug: "health-studio",
    description: "Wellness, diagnostics and holistic health services.",
    location: "Gandhi Maidan, Patna",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop",
    icon: "activity"
  },
  {
    id: "homecare",
    name: "Mediversal Homecare",
    slug: "homecare",
    description: "Healthcare services delivered with personalized support.",
    location: "Patna",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
    icon: "home"
  }
];

const SPECIALTY_GROUPS = [
  {
    group: "Medical Sciences",
    items: ["internal-medicine","cardiac-sciences","neurosciences","nephrology","gastroenterology-hepatology","pulmonology","endocrinology","psychiatry"]
  },
  {
    group: "Surgical Sciences",
    items: ["orthopedics","general-laparoscopic-surgery","urology","plastic-surgery","maxillofacial-surgery"]
  },
  {
    group: "Diagnostics & Support",
    items: ["radiology","pathology","microbiology-infection-control","critical-care","anesthesiology"]
  },
  {
    group: "Emergency",
    items: ["emergency-trauma-care"]
  }
];

const SPECIALTIES = [
  { id:"cardiac-sciences", name:"Cardiac Sciences", short:"Comprehensive heart care from diagnosis to advanced cardiac procedures.", icon:"heart-pulse", featured:true },
  { id:"orthopedics", name:"Orthopedics", short:"Joint, bone and spine care including replacement surgery.", icon:"bone", featured:true },
  { id:"neurosciences", name:"Neurosciences", short:"Brain, spine and nervous system diagnosis and surgical care.", icon:"brain", featured:true },
  { id:"gastroenterology-hepatology", name:"Gastroenterology & Hepatology", short:"Digestive system and liver care with advanced endoscopy.", icon:"stethoscope", featured:true },
  { id:"nephrology", name:"Nephrology", short:"Kidney health, dialysis and renal disease management.", icon:"droplet", featured:true },
  { id:"internal-medicine", name:"Internal Medicine", short:"Comprehensive adult medical care and chronic disease management.", icon:"clipboard-pulse", featured:true },
  { id:"critical-care", name:"Critical Care", short:"Round-the-clock intensive monitoring for critically ill patients.", icon:"activity", featured:true },
  { id:"pulmonology", name:"Pulmonology", short:"Lung and respiratory health, from asthma to sleep disorders.", icon:"wind", featured:true },
  { id:"orthopedics2", skip:true },
  { id:"emergency-trauma-care", name:"Emergency & Trauma Care", short:"24/7 emergency response for critical and trauma cases.", icon:"siren" },
  { id:"general-laparoscopic-surgery", name:"General & Laparoscopic Surgery", short:"Minimally invasive and open surgical procedures.", icon:"scissors" },
  { id:"maxillofacial-surgery", name:"Maxillofacial Surgery", short:"Surgical care for the face, jaw and mouth.", icon:"smile" },
  { id:"endocrinology", name:"Endocrinology", short:"Hormonal and metabolic disorders including diabetes care.", icon:"flask" },
  { id:"radiology", name:"Radiology", short:"Advanced diagnostic imaging for accurate diagnosis.", icon:"scan" },
  { id:"microbiology-infection-control", name:"Microbiology & Infection Control", short:"Laboratory diagnostics and hospital infection prevention.", icon:"microscope" },
  { id:"pathology", name:"Pathology", short:"Laboratory testing for accurate clinical diagnosis.", icon:"test-tube" },
  { id:"plastic-surgery", name:"Plastic Surgery", short:"Reconstructive and cosmetic surgical procedures.", icon:"sparkles" },
  { id:"urology", name:"Urology", short:"Urinary tract and male reproductive system care.", icon:"droplets" },
  { id:"psychiatry", name:"Psychiatry", short:"Mental health assessment, therapy and treatment.", icon:"brain-circuit" },
  { id:"anesthesiology", name:"Anesthesiology", short:"Perioperative care and pain management.", icon:"syringe" }
].filter(s => !s.skip);

const DOCTORS = [
  {
    id:"dr-saquib-azad-siddiqui", name:"Dr. Saquib Azad Siddiqui", slug:"saquib-azad-siddiqui",
    designation:"Director & HOD, Neurosurgery", department:"Neurosciences", specialtyId:"neurosciences",
    hospitalId:"multi-super-speciality", qualifications:["MBBS","MS","MCh (Neurosurgery)"],
    languages:["English","Hindi"], image:null
  },
  {
    id:"dr-nishikant-kumar", name:"Dr. Nishikant Kumar", slug:"nishikant-kumar",
    designation:"Director & HOD, Orthopedic & Joint Replacement", department:"Orthopedics", specialtyId:"orthopedics",
    hospitalId:"multi-super-speciality", qualifications:["MBBS","MS (Orthopedics)"],
    languages:["English","Hindi"], image:null
  },
  {
    id:"dr-vikash-singh", name:"Dr. Vikash Singh", slug:"vikash-singh",
    designation:"Senior Consultant & HOD, Cardiac Sciences", department:"Cardiac Sciences", specialtyId:"cardiac-sciences",
    hospitalId:"multi-super-speciality", qualifications:["MBBS","MD","DM (Cardiology)"],
    languages:["English","Hindi"], image:null
  },
  {
    id:"dr-sanjeev-kumar-chhaparia", name:"Dr. Sanjeev Kumar Chhaparia", slug:"sanjeev-kumar-chhaparia",
    designation:"HOD & Director, Internal Medicine", department:"Internal Medicine", specialtyId:"internal-medicine",
    hospitalId:"multi-super-speciality", qualifications:["MBBS","MD (Internal Medicine)"],
    languages:["English","Hindi"], image:null
  },
  {
    id:"dr-asif-iqbal", name:"Dr. Asif Iqbal", slug:"asif-iqbal",
    designation:"HOD & Consultant, Gastroenterology & Hepatology", department:"Gastroenterology & Hepatology", specialtyId:"gastroenterology-hepatology",
    hospitalId:"multi-super-speciality", qualifications:["MBBS","MD","DM (Gastroenterology)"],
    languages:["English","Hindi"], image:null
  },
  {
    id:"dr-ajay-kumar", name:"Dr. Ajay Kumar", slug:"ajay-kumar",
    designation:"Honorary Advisor, Renal Sciences, Academics & Research", department:"Nephrology", specialtyId:"nephrology",
    hospitalId:"multi-super-speciality", qualifications:["MBBS","MD","DM (Nephrology)"],
    languages:["English","Hindi"], image:null
  },
  {
    id:"dr-rajiv-krishna", name:"Dr. Rajiv Krishna", slug:"rajiv-krishna",
    designation:"Senior Consultant, Cardiology", department:"Cardiac Sciences", specialtyId:"cardiac-sciences",
    hospitalId:"multi-super-speciality", qualifications:["MBBS","MD","DM (Cardiology)"],
    languages:["English","Hindi"], image:null
  },
  {
    id:"dr-adnan-imam", name:"Dr. Adnan Imam", slug:"adnan-imam",
    designation:"Consultant, Internal Medicine", department:"Internal Medicine", specialtyId:"internal-medicine",
    hospitalId:"multi-super-speciality", qualifications:["MBBS","MD (Internal Medicine)"],
    languages:["English","Hindi"], image:null
  }
];

function specialtyById(id){ return SPECIALTIES.find(s => s.id === id); }
function hospitalById(id){ return HOSPITALS.find(h => h.id === id); }
function doctorsBySpecialty(id){ return DOCTORS.filter(d => d.specialtyId === id); }
function initials(name){
  return name.replace("Dr. ","").split(" ").map(w=>w[0]).slice(0,2).join("").toUpperCase();
}

import patient from "../assets/patient-care.jpg";
import elder from "../assets/elder-care.jpg";
import physio from "../assets/physiotherapy.jpg";
import diabetes from "../assets/diabetes.jpg";
import wound from "../assets/wound-care.jpg";
import cancer from "../assets/cancer-care.jpg";
import nurse from "../assets/nurse-home.jpg";

const services = [
  {
    slug: "patient-care",
    title: "Patient Care",
    image: patient,
    description:
      "Professional patient care services at home with experienced nurses and caregivers.",
    features: [
      "Bedside Nursing",
      "Medication Administration",
      "Injection & IV Care",
      "Vital Signs Monitoring",
      "Post Surgery Care",
      "Personal Hygiene Assistance",
    ],
  },

  {
    slug: "elder-care",
    title: "Elder Care",
    image: elder,
    description:
      "Compassionate elderly care services to ensure comfort, dignity, and independence.",
    features: [
      "Daily Living Assistance",
      "Medication Support",
      "Mobility Assistance",
      "Health Monitoring",
      "Companionship",
      "Personal Hygiene",
    ],
  },

  {
    slug: "physiotherapy",
    title: "Physiotherapy",
    image: physio,
    description:
      "Professional physiotherapy sessions at home for pain relief and faster recovery.",
    features: [
      "Stroke Rehabilitation",
      "Joint Pain Therapy",
      "Sports Injury Recovery",
      "Post Surgery Therapy",
      "Exercise Guidance",
      "Mobility Training",
    ],
  },

  {
    slug: "diabetes-care",
    title: "Diabetes Care",
    image: diabetes,
    description:
      "Complete diabetes management and monitoring from experienced healthcare professionals.",
    features: [
      "Blood Sugar Monitoring",
      "Insulin Administration",
      "Diet Guidance",
      "Health Monitoring",
      "Medication Support",
      "Doctor Coordination",
    ],
  },

  {
    slug: "wound-care",
    title: "Wound Care",
    image: wound,
    description:
      "Expert wound dressing and infection prevention services in the comfort of your home.",
    features: [
      "Wound Dressing",
      "Pressure Ulcer Care",
      "Diabetic Foot Care",
      "Infection Prevention",
      "Healing Assessment",
      "Medical Guidance",
    ],
  },

  {
    slug: "cancer-care",
    title: "Cancer Care",
    image: cancer,
    description:
      "Compassionate home care for cancer patients with emotional and medical support.",
    features: [
      "Pain Management",
      "Medication Support",
      "Nutrition Assistance",
      "Emotional Support",
      "Doctor Coordination",
      "Palliative Care",
    ],
  },

  {
    slug: "nursing-care",
    title: "Nursing Care",
    image: nurse,
    description:
      "Qualified nurses providing professional home nursing care 24×7.",
    features: [
      "Injection Services",
      "IV Infusion",
      "Catheter Care",
      "Tracheostomy Care",
      "Vital Monitoring",
      "Emergency Nursing",
    ],
  },
];

export default services;
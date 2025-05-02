// Retinopathy level types
export type RetinopathyLevel = 'none' | 'mild' | 'moderate' | 'severe' | 'proliferative';

// Patient data interface
export interface PatientData {
  id: string;
  name: string;
  dob: string;
  gender: string;
  symptom?: string;
  symptomDuration?: string;
  hasImage: boolean;
}

// Result info interface
export interface ResultInfo {
  title: string;
  level: number;
  status: string;
  hexCode: string;
  action: string;
  advice: string;
  referral: string;
  monitoring: string;
  treatment: string;
}

// Result info lookup object
export const retinopathyInfo: Record<RetinopathyLevel, ResultInfo> = {
  none: {
    title: 'NO DR',
    level: 0,
    status: 'NO SIGNS of',
    hexCode: 'uhmmm',
    action: 'Routine annual eye exam.',
    advice: 'Emphasize glycemic, blood pressure, and lipid control.',
    referral: 'No immediate referral to ophthalmology unless other eye issues exist.',
    monitoring: '',
    treatment: ''
  },
  mild: {
    title: 'Mild',
    level: 1,
    status: 'MILD',
    hexCode: 'uhmmm',
    action: 'Monitor with repeat dilated retinal exam in 6-12 months.',
    advice: 'Reinforce metabolic control and lifestyle changes.',
    referral: 'Consider ophthalmology referral for baseline evaluation.',
    monitoring: '',
    treatment: ''
  },
  moderate: {
    title: 'Moderate',
    level: 2,
    status: 'MODERATE',
    hexCode: 'uhmmm',
    action: 'Monitor with repeat dilated retinal exam in 6-12 months.',
    advice: 'Optimize diabetes, hypertension, and cholesterol management. Consider retinal imaging (OCT, fundus photography).',
    referral: '',
    monitoring: 'Follow-up every 3-6 months.',
    treatment: ''
  },
  severe: {
    title: 'Severe',
    level: 3,
    status: 'SEVERE',
    hexCode: 'uhmmm',
    action: 'Urgent referral to retina specialist.',
    advice: 'Tight metabolic control and patient education about progression risk.',
    referral: '',
    monitoring: 'Likely need follow-up every 2-4 months.',
    treatment: 'Evaluation for laser therapy or anti-VEGF if diabetic macular edema is present.'
  },
  proliferative: {
    title: 'Proliferative',
    level: 4,
    status: 'PROLIFERATIVE',
    hexCode: 'uhmmm',
    action: 'Immediate referral to retina specialist.',
    advice: 'Counsel on vision loss risk and treatment adherence.',
    referral: '',
    monitoring: 'Frequent follow-up, as determined by retina specialist.',
    treatment: 'Anti-VEGF injections and/or panretinal photocoagulation (PRP).'
  }
};
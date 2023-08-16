export interface BloodPressure {
  systolic: number;
  diastolic: number;
}

export interface Patient {
  id: string;
  firstName?: string;
  lastName?: string;
  healthcareNumber?: string;
}

export interface Vitals {
  id: string;
  bloodPressure?: BloodPressure;
  specificOxygen?: number;
  pulse?: number;
  respirations?: number;
}

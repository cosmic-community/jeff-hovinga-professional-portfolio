export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface Portfolio extends CosmicObject {
  type: 'portfolio';
  metadata: {
    full_name: string;
    professional_title: string;
    location?: string;
    profile_photo?: {
      url: string;
      imgix_url: string;
    };
    about?: string;
    email?: string;
    linkedin_url?: string;
    phone?: string;
    resume?: {
      url: string;
      imgix_url: string;
    };
  };
}

export interface WorkExperience extends CosmicObject {
  type: 'work-experience';
  metadata: {
    job_title: string;
    company: string;
    location?: string;
    start_date: string;
    end_date?: string | null;
    current_position?: boolean;
    description?: string;
    company_logo?: {
      url: string;
      imgix_url: string;
    };
  };
}

export interface Education extends CosmicObject {
  type: 'education';
  metadata: {
    degree: string;
    institution: string;
    year_completed?: string;
    description?: string;
  };
}

export interface Certification extends CosmicObject {
  type: 'certifications';
  metadata: {
    certification_name: string;
    issuing_organization: string;
    issue_date?: string;
    credential_id?: string | null;
    credential_url?: string;
  };
}

export interface Recommendation extends CosmicObject {
  type: 'recommendations';
  metadata: {
    recommender_name: string;
    recommender_title?: string;
    relationship?: string;
    recommendation: string;
    recommender_photo?: {
      url: string;
      imgix_url: string;
    };
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

// Type guards
export function isPortfolio(obj: CosmicObject): obj is Portfolio {
  return obj.type === 'portfolio';
}

export function isWorkExperience(obj: CosmicObject): obj is WorkExperience {
  return obj.type === 'work-experience';
}

export function isEducation(obj: CosmicObject): obj is Education {
  return obj.type === 'education';
}

export function isCertification(obj: CosmicObject): obj is Certification {
  return obj.type === 'certifications';
}

export function isRecommendation(obj: CosmicObject): obj is Recommendation {
  return obj.type === 'recommendations';
}
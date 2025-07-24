import { createBucketClient } from '@cosmicjs/sdk';
import { Portfolio, WorkExperience, Education, Certification, Recommendation } from '@/types';

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
});

// Helper function for handling Cosmic API errors
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

export async function getPortfolio(): Promise<Portfolio | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'portfolio'
    }).props(['id', 'title', 'slug', 'metadata']).depth(1);
    
    const portfolio = response.object as Portfolio;
    
    if (!portfolio || !portfolio.metadata) {
      return null;
    }
    
    return portfolio;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch portfolio');
  }
}

export async function getWorkExperience(): Promise<WorkExperience[]> {
  try {
    const response = await cosmic.objects.find({
      type: 'work-experience'
    })
    .props(['id', 'title', 'slug', 'metadata'])
    .depth(1)
    .limit(100);
    
    return response.objects as WorkExperience[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch work experience');
  }
}

export async function getEducation(): Promise<Education[]> {
  try {
    const response = await cosmic.objects.find({
      type: 'education'
    })
    .props(['id', 'title', 'slug', 'metadata'])
    .depth(1)
    .limit(100);
    
    return response.objects as Education[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch education');
  }
}

export async function getCertifications(): Promise<Certification[]> {
  try {
    const response = await cosmic.objects.find({
      type: 'certifications'
    })
    .props(['id', 'title', 'slug', 'metadata'])
    .depth(1)
    .limit(100);
    
    return response.objects as Certification[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch certifications');
  }
}

export async function getRecommendations(): Promise<Recommendation[]> {
  try {
    const response = await cosmic.objects.find({
      type: 'recommendations'
    })
    .props(['id', 'title', 'slug', 'metadata'])
    .depth(1)
    .limit(100);
    
    return response.objects as Recommendation[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch recommendations');
  }
}
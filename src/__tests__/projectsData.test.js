import { describe, it, expect } from 'vitest';
import {
  PROJECTS,
  getActiveProject,
  getProjectsByTheme,
  filterExistingLinks,
  LINK_LABELS
} from '../data/projects';

describe('projects data module', () => {
  it('contains non-empty PROJECTS array with valid schema and themes', () => {
    expect(PROJECTS).toBeDefined();
    expect(Array.isArray(PROJECTS)).toBe(true);
    expect(PROJECTS.length).toBeGreaterThan(0);

    PROJECTS.forEach((proj) => {
      expect(proj).toHaveProperty('id');
      expect(proj).toHaveProperty('title');
      expect(proj).toHaveProperty('theme');
      expect(proj).toHaveProperty('description');
      expect(proj).toHaveProperty('image');
      expect(proj).toHaveProperty('images');
      expect(proj).toHaveProperty('links');
    });
  });

  it('filters projects correctly by theme using getProjectsByTheme', () => {
    const designProjects = getProjectsByTheme(PROJECTS, 'Design');
    expect(designProjects.length).toBeGreaterThan(0);
    designProjects.forEach((p) => expect(p.theme).toBe('Design'));

    const spatialProjects = getProjectsByTheme(PROJECTS, 'Research');
    expect(spatialProjects.length).toBeGreaterThan(0);
    spatialProjects.forEach((p) => expect(p.theme).toBe('Research'));

    const appProjects = getProjectsByTheme(PROJECTS, 'Applications');
    expect(appProjects.length).toBeGreaterThan(0);
    appProjects.forEach((p) => expect(p.theme).toBe('Applications'));
  });

  it('returns active project using modulo logic in getActiveProject', () => {
    const proj0 = getActiveProject(PROJECTS, 0);
    expect(proj0).toEqual(PROJECTS[0]);

    const proj1 = getActiveProject(PROJECTS, 1);
    expect(proj1).toEqual(PROJECTS[1]);

    const overflowIndex = PROJECTS.length + 1;
    const projOverflow = getActiveProject(PROJECTS, overflowIndex);
    expect(projOverflow).toEqual(PROJECTS[1]);

    const negativeIndex = -1;
    const projNeg = getActiveProject(PROJECTS, negativeIndex);
    expect(projNeg).toEqual(PROJECTS[PROJECTS.length - 1]);
  });

  it('returns null for empty or null projects array in getActiveProject', () => {
    expect(getActiveProject([], 0)).toBeNull();
    expect(getActiveProject(null, 0)).toBeNull();
  });

  it('filters existing links correctly with filterExistingLinks', () => {
    const sampleLinks = {
      report: 'https://example.com/report.pdf',
      slides: 'https://example.com/slides',
      website: '',
      article: null
    };

    const filtered = filterExistingLinks(sampleLinks);

    expect(filtered).toHaveLength(2);
    expect(filtered[0]).toEqual({
      key: 'report',
      label: LINK_LABELS.report,
      url: 'https://example.com/report.pdf'
    });
    expect(filtered[1]).toEqual({
      key: 'slides',
      label: LINK_LABELS.slides,
      url: 'https://example.com/slides'
    });
  });

  it('returns empty array when links object is empty or undefined', () => {
    expect(filterExistingLinks({})).toEqual([]);
    expect(filterExistingLinks(undefined)).toEqual([]);
  });
});

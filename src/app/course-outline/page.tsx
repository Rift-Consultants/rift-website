import type { Metadata } from 'next';
import CourseOutlineDeck from './course-outline-deck';

export const metadata: Metadata = {
  title: 'Agentic AI Leadership Intensive | AgentHappy',
  description: 'Course outline for the AgentHappy Agentic AI Leadership Intensive, built on the A.I.M. framework: Assess, Implement, and Measure.',
};

export default function CourseOutlinePage() {
  return <CourseOutlineDeck />;
}
